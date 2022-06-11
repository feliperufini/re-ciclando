import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage {
  user: any;
  public products = [];

  constructor(
    public ngroute: Router,
    public alertcontrol: AlertController,
    private fbstore: AngularFirestore,
    private toastr: ToastController,
    private auth: AuthService
  ) {}

  ionViewWillEnter(){
    this.getProducts();
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

  async getProducts(){
    try{
      await this.fbstore.collection("product").snapshotChanges()
      .subscribe(data => {
        this.products = data.map(result => {
          
          return {
            uid: result.payload.doc.id,
            title: result.payload.doc.data()["title"],
            description: result.payload.doc.data()["description"],
            coin: result.payload.doc.data()["coin"],
            image: result.payload.doc.data()["image"],
          }

        });
      });
    }catch(error){
      this.toast(error.message, 'warning');
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
