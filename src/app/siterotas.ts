import{provideRoutes} from '@angular/router';
import {Routes,RouterModule} from '@angular/router';
import{UserloginComponent}from './userlogin/userlogin.component';
import{CadastrologinComponent}from './cadastrologin/cadastrologin.component';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { RouterConfigLoader } from '@angular/router/src/router_config_loader';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import {HomeComponent} from './home/home.component';
import { Component } from '@angular/core';
import {AppComponent}from './app.component';
import {ClienteComponent} from './cliente/cliente.component'
import {EditarClienteComponent} from './cliente/editar-cliente/editar-cliente.component'
import {CadastroProdutoComponent} from './produto/cadastro-produto/cadastro-produto.component'
import {EditarProdutoComponent} from './produto/editar-produto/editar-produto.component'
import {FluxoComponent} from './fluxo/fluxo.component'
import { ResumoDiaComponent } from './fluxo/resumo-dia/resumo-dia.component';
import {EstornoComponent} from './fluxo/estorno/estorno.component';
import {RecebimentoComponent} from './recebimento/recebimento.component';
import {DespesaComponent} from './despesa/despesa.component';

/*Fazendo as rotas das paginas
lembrar de fazer os imports das paginas criadas
 */ 
const paginas: Routes = [
    {path:'',component:UserloginComponent},
    {path:'cadastrologin',component:CadastrologinComponent},
    {path: 'home', component:HomeComponent},
    {path: 'home/cliente', component:ClienteComponent},
    {path: 'home/produto', component:CadastroProdutoComponent},
    {path: 'home/recebimento', component:RecebimentoComponent},
    {path: 'home/despesa', component:DespesaComponent},
    {path: 'home/fluxo', component:FluxoComponent},
    {path: 'home/fluxo/resumodia', component:ResumoDiaComponent},
    {path: 'home/fluxo/estorno', component:EstornoComponent},
    

    

   

];
export const routing :ModuleWithProviders=RouterModule.forRoot(paginas);