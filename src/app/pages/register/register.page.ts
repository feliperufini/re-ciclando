import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  surname: string;
  email: string;
  password: string;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) {}

  ngOnInit() {}
  
  async signUp() {
    if (this.name && this.surname && this.email && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'Processando...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        data.user.sendEmailVerification();
        this.afs.collection('user').doc(data.user.uid).set({
          'uid': data.user.uid,
          'name': this.name,
          'surname': this.surname,
          'email': this.email,
          'email_validation': false,
          'password': this.password,
          'photo': null,
          'status': true,
          'coin': 0,
          'level': 1,
          'created_at': Date.now(),
          'updated_at': Date.now(),
        })
        .then(() => {
          loading.dismiss();
          this.toast('Registro realizado com sucesso! Por favor cheque seu e-mail!', 'success');
          this.router.navigate(['/login']);
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.menssage, 'danger');
          this.router.navigate(['/login']);
        });
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.menssage, 'danger');
      });
    } else {
      this.toast('Por favor, preencha o formulário corretamente!', 'warning');
    }
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 4000
    });
    toast.present();
  }
}
