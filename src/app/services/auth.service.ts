import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { NavController } from '@ionic/angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afa: AngularFireAuth, private navCtrl: NavController, private angularFirestore: AngularFirestore) { }

  login(user: User){
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User){
    console.log(user);
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

  cadastraUsuario(uid: string, user: User): Promise<void> {
    return this.angularFirestore.collection('users').doc(uid).set(user);
  }
}
