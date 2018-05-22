import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  

  constructor(public afAuth:AngularFireAuth ) {}
  LoginFacebook(){
    this.afAuth.auth.languageCode="PT-br"
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  LoginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  LoginEmail(email,senha){
    
    return this.afAuth.auth.signInWithEmailAndPassword(email,senha);
  }
  userlogado(user){
    return  user= firebase.auth().currentUser;
  }
  createloginemail(email,senha){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,senha);
  }
 

}
