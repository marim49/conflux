import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import{AngularFireAuth,AngularFireAuthModule} from 'angularfire2/auth';
import {Router,ActivatedRoute} from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
public nomeuser
constructor(public authservice:AuthService){}
ngOnInit() {
  this.authservice.getAuth().subscribe(auth=>{
    if(auth)
    {
      
      this.nomeuser=auth.displayName;
      
    }
    
  }
  )

}
}
  
  


