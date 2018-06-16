import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoAdminRoutingModule } from './acesso-admin-routing.module';
import { AcessoAdminComponent } from './acesso-admin/acesso-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AcessoAdminRoutingModule,
      FormsModule
  ],
  declarations: [
      AcessoAdminComponent,
      AdminLoginComponent,
      TelaInicialComponent
  ]
})
export class AcessoAdminModule { }
