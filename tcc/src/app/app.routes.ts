import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreaDespachoComponent } from './components/despacho/crea-despacho/crea-despacho.component';
import { EditaDespachoComponent } from './components/despacho/edita-despacho/edita-despacho.component';
import { ListaDespachoComponent } from './components/despacho/lista-despacho/lista-despacho.component';
import { MenuComponent } from './components/menu/menu.component';


export const routes: Routes = [
    { path:'', redirectTo:'menu', pathMatch:'full'},
    { path:'menu', component:MenuComponent},
    { path:'lista-despacho',component:ListaDespachoComponent},
    { path:'crea-despacho', component:CreaDespachoComponent},
    { path:'edita-despacho', component:EditaDespachoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class router{ }

export const modulosMenu = [
    ListaDespachoComponent,
    CreaDespachoComponent,
    EditaDespachoComponent]
