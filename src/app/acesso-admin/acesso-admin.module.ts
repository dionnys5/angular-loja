import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoAdminRoutingModule } from './acesso-admin-routing.module';
import { AcessoAdminComponent } from './acesso-admin/acesso-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { TableProdComponent } from './table-prod/table-prod.component';
import { CadastroProdComponent } from './cadastro-prod/cadastro-prod.component';

@NgModule({
  imports: [
    CommonModule,
    AcessoAdminRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: [
      AcessoAdminComponent,
      AdminLoginComponent,
      TelaInicialComponent,
      NavAdminComponent,
      TableProdComponent,
      CadastroProdComponent
  ]
})
export class AcessoAdminModule { }
