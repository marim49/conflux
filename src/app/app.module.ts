import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportsComponent } from './imports/imports.component';
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
import { FooterComponent } from './footer/footer.component';
import { GraficosHomeComponent } from './graficos-home/graficos-home.component';



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
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(Firebaseconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
