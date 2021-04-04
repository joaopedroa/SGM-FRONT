import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projeto } from 'app/models/Projeto';
import { CarteiraService } from 'app/services/carteira.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CarteiraDescriptionComponent } from 'app/dialogs/carteira-description/carteira-description.component';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  displayedColumns: string[] = ['nomeProjeto', 'nomeResponsavel', 'nomeDiretor', 'dataInicio', 'dataFim', 'dataPrevisaoInicio', 'dataPrevisaoFim', 'descricao', 'excluir'];
  listaProjetos:Observable<Projeto[]>;

  form: FormGroup;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, private service: CarteiraService, public dialog: MatDialog) {
   
   }

   ngAfterViewInit() {
    this.listaProjetos = merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service.getTodosProjetos!(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength =  data["totalElements"];

          return data['content'];
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      );
   }

   resetPaging(): void {
    this.paginator.pageIndex = 0;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeProjeto: ['', Validators.required],
      nomeResponsavel: ['', Validators.required],
      nomeDiretor: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      dataPrevisaoInicio: ['', Validators.required],
      dataPrevisaoFim: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  cadastrarProjeto(){
    if(this.form.valid){
      this.service.cadastrarProjeto(this.form.value).subscribe(data =>{
        this.ngAfterViewInit();
        this.form.reset();
     })
    }else{
      alert("Campos obrigatórios não preenchidos.");
    }
   
  }

  excluir(projeto:Projeto){
    this.service.deleteProjeto(projeto).subscribe(data =>{
      this.ngAfterViewInit();
    })
  }

  descricao(projeto:Projeto){
    this.openDialog(projeto);
  }

  openDialog(projeto:Projeto) {
    const dialogRef = this.dialog.open(CarteiraDescriptionComponent, {
      data: {'projeto': projeto}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }



}
