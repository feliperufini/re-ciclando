import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  title: string;
  description: string;
  amount: number;
  coin: number;
  image: string;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController 
  ) { }

  ngOnInit() {
  }

  async addProduct(){
    if (this.title && this.description && this.amount && this.coin) {
      const loading = await this.loadingCtrl.create({
        message: 'Cadastrando...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      const id = this.afs.createId();

      this.afs.collection('product').doc(id).set({
        'uid': id,
        'title': this.title,
        'description': this.description,
        'amount': this.amount,
        'coin': this.coin,
        'image': this.image ? this.image : 'https://cdn-icons-png.flaticon.com/512/2674/2674505.png',
        'created_at': Date.now(),
        'updated_at': Date.now(),
      })
      .then(() => {
        loading.dismiss();
        this.toast('Cadastro realizado com sucesso!', 'success');
        this.router.navigate(['/product']);
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
