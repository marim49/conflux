import{provideRoutes} from '@angular/router';
import {Routes,RouterModule} from '@angular/router';
import{UserloginComponent}from './userlogin/userlogin.component';
import{CadastrologinComponent}from './cadastrologin/cadastrologin.component';
import {RecuperarsenhaloginComponent}from './recuperarsenhalogin/recuperarsenhalogin.component';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {HomeComponent} from './home/home.component';
import { Component } from '@angular/core';
import {AppComponent}from './app.component';
import {ClienteComponent} from './cliente/cliente.component'

/*Fazendo as rotas das paginas
lembrar de fazer os imports das paginas criadas
 */
const paginas: Routes = [
    {path:'',component:UserloginComponent},
    {path:'cadastrologin',component:CadastrologinComponent},
    {path:'recuperarsenhalogin',component:RecuperarsenhaloginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'cliente', component:ClienteComponent},
   

];
export const routing :ModuleWithProviders=RouterModule.forRoot(paginas);