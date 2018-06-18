import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoPublicoRoutingModule } from './acesso-publico-routing.module';
import { AcessoPublicoComponent } from './acesso-publico/acesso-publico.component';
import { PublicoLoginComponent } from './publico-login/publico-login.component';
import { PublicoInicioComponent } from './publico-inicio/publico-inicio.component';
import { PublicoCarrinhoComponent } from './publico-carrinho/publico-carrinho.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    AcessoPublicoRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
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
