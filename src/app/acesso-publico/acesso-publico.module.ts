import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoPublicoRoutingModule } from './acesso-publico-routing.module';
import { AcessoPublicoComponent } from './acesso-publico/acesso-publico.component';
import { PublicoLoginComponent } from './publico-login/publico-login.component';
import { PublicoInicioComponent } from './publico-inicio/publico-inicio.component';
import { PublicoCarrinhoComponent } from './publico-carrinho/publico-carrinho.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AcessoPublicoRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [
      AcessoPublicoComponent,
      PublicoLoginComponent,
      PublicoInicioComponent,
      PublicoCarrinhoComponent,
      MainNavComponent,
      MainFooterComponent
  ]
})
export class AcessoPublicoModule { }
