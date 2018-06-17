import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicoInicioComponent} from './publico-inicio/publico-inicio.component';
import {PublicoCarrinhoComponent} from './publico-carrinho/publico-carrinho.component';
import {PublicoLoginComponent} from './publico-login/publico-login.component';
import {AcessoPublicoComponent} from './acesso-publico/acesso-publico.component';

const routes: Routes = [
    {
        path: '', component: AcessoPublicoComponent, children: [
            {path: '', component: PublicoInicioComponent},
            {path: 'carrinho', component: PublicoCarrinhoComponent},
            {path: 'login', component: PublicoLoginComponent}
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoPublicoRoutingModule { }
