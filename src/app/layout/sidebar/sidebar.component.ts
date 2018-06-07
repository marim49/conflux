import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router,ActivatedRoute} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  public islogin:boolean;
  public nomeuser:String;
  public email:String;
  public foto:any;

  constructor(
    public authservice:AuthService,
    private router:Router
    ) { }
    logout(){
      this.authservice.Sair(this.islogin);
      if(this.islogin==false){
        this.router.navigate(['']);
      }
      
    }
  
    ngOnInit() {
      this.authservice.getAuth().subscribe(auth=>{
        if(auth){
          this.islogin=true;
          this.nomeuser=auth.displayName;
          this.email=auth.email;
          this.foto=auth.photoURL;
          
        }
        this.islogin=false;
        
      }
      )
    
    }

   }

  
  
  
