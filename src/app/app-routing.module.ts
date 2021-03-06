import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        {enableTracing: true} // <-- apenas para depuração
    )
  ],
    exports: [
        RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
