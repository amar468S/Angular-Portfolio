import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public  afAuth: AngularFireAuth, public  router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
   }

   login(email: string, password: string) {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['admin/list']);
    } catch (error) {
        alert('Error !' + error.message);
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  isLoggedIn(): boolean {
    const user =  JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}