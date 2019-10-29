import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afa: AngularFireAuth, private navCtrl: NavController) { }

  login(user: User){
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User){
    return this.afa.auth.createUserWithEmailAndPassword( user.email, user.password );
  }

  logout(){
    this.afa.auth.signOut().then(() => {
      this.navCtrl.navigateRoot('login');
    });
  }

  getAuth(){
    return this.afa.auth;
  }
}
