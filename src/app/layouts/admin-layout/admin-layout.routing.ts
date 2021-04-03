import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
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
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AuthGuardService] },
    { path: 'table-list',     component: TableListComponent, canActivate: [AuthGuardService] },
    { path: 'typography',     component: TypographyComponent, canActivate: [AuthGuardService] },
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuardService] },
    { path: 'maps',           component: MapsComponent, canActivate: [AuthGuardService] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuardService] }
];
