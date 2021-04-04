import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from 'app/login/login.component';
import { GeolocalizacaoComponent } from 'app/geolocalizacao/geolocalizacao.component';
import { CarteiraComponent } from 'app/carteira/carteira.component';
import { AuthGuardService } from 'app/guards/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'carteira-projetos', component: CarteiraComponent, canActivate: [AuthGuardService] },
    { path: 'geolocalizacao', component: GeolocalizacaoComponent, canActivate: [AuthGuardService] },
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuardService] }
];
