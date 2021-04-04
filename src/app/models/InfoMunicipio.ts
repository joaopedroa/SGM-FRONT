export class InfoMunicipio{
    populacaoEstimada: any;
    populacaoUltimoCenso: any;
    densidadeDemografica: any;
    municipioId: number;

    constructor(populacaoEstimada: any, populacaoUltimoCenso: any, densidadeDemografica: any){
        this.populacaoEstimada = new Intl.NumberFormat().format(populacaoEstimada);
        this.populacaoUltimoCenso = new Intl.NumberFormat().format(populacaoUltimoCenso);
        this.densidadeDemografica =  new Intl.NumberFormat().format(densidadeDemografica);
    }

   
}