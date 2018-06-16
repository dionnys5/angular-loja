import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcessoAdminComponent} from './acesso-admin/acesso-admin.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {TelaInicialComponent} from './tela-inicial/tela-inicial.component';

const routes: Routes = [
    {
        path: 'admin', component: AcessoAdminComponent, children: [
            {path: '', component: AdminLoginComponent},
            {path: 'inicio', component: TelaInicialComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AcessoAdminRoutingModule { }

