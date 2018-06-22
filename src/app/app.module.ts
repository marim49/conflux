import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ImportsComponent } from './layout/imports/imports.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { Firebaseconfig } from '../environments/firebaseconfig';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import{AuthService} from './services/auth.service';
import { CadastrologinComponent } from './cadastrologin/cadastrologin.component';
import { RecuperarsenhaloginComponent } from './recuperarsenhalogin/recuperarsenhalogin.component';
import{routing} from './siterotas';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { RecebimentoComponent } from './recebimento/recebimento.component';
import { ServicoComponent } from './servico/servico.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GraficosHomeComponent } from './graficos-home/graficos-home.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EditarProdutoComponent } from './produto/editar-produto/editar-produto.component';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { ResumoDiaComponent } from './resumo-dia/resumo-dia.component';
import { FluxoComponent } from './fluxo/fluxo.component';
import { EstornoComponent } from './estorno/estorno.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ImportsComponent,
    UserloginComponent,
    CadastrologinComponent,
    RecuperarsenhaloginComponent,
    HomeComponent,
    ClienteComponent,
    ProdutoComponent,
    RecebimentoComponent,
    ServicoComponent,
    FooterComponent,
    GraficosHomeComponent,
    CadastroClienteComponent,
    EditarClienteComponent,
    EditarProdutoComponent,
    CadastroProdutoComponent,
    ResumoDiaComponent,
    FluxoComponent,
    EstornoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(Firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
