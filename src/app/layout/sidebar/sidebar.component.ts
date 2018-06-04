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
  Nome:any;
  Foto:any;
  Email:any;



  constructor(private authorizationService:AuthService) {
    
    
    }
  

   }

  
  
  
