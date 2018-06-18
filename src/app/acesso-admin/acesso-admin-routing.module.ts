import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcessoAdminComponent} from './acesso-admin/acesso-admin.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {TelaInicialComponent} from './tela-inicial/tela-inicial.component';
import {TableProdComponent} from './table-prod/table-prod.component';
import {CadastroProdComponent} from './cadastro-prod/cadastro-prod.component';

const routes: Routes = [
    {
        path: 'admin', component: AcessoAdminComponent, children: [
            {path: '', component: AdminLoginComponent},
            {path: 'inicio', component: TelaInicialComponent, children: [
                {path: '', component: TableProdComponent},
                {path: 'cadastrar', component: CadastroProdComponent},
                {path: 'produtos/:id/editar',component: CadastroProdComponent}
                ]}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AcessoAdminRoutingModule { }

