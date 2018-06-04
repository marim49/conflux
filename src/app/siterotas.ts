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
import {CadastroClienteComponent} from './cliente/cadastro-cliente/cadastro-cliente.component'
import {EditarClienteComponent} from './cliente/editar-cliente/editar-cliente.component'
import {CadastroProdutoComponent} from './produto/cadastro-produto/cadastro-produto.component'
import {EditarProdutoComponent} from './produto/editar-produto/editar-produto.component'

/*Fazendo as rotas das paginas
lembrar de fazer os imports das paginas criadas
 */
const paginas: Routes = [
    {path:'',component:UserloginComponent},
    {path:'cadastrologin',component:CadastrologinComponent},
    {path:'recuperarsenhalogin',component:RecuperarsenhaloginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'cadastro/cliente', component:CadastroClienteComponent},
    {path: 'editar/cliente', component:EditarClienteComponent},
    {path: 'cadastro/produto', component:CadastroProdutoComponent},
    {path: 'editar/produto', component:EditarProdutoComponent},
   

];
export const routing :ModuleWithProviders=RouterModule.forRoot(paginas);