import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
})
export class ProductPage {

  public products = [];

  constructor(
    public ngroute: Router,
    public alertcontrol: AlertController,
    private fbstore: AngularFirestore,
    private toastr: ToastController
  ) {}

  ionViewWillEnter(){
    this.getProducts();
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

  async deleteProduct(uid: string) {
    const alert = await this.alertcontrol.create({
      cssClass: 'alt',
      header: 'Deletar',
      message: 'Vocês tem certeza que deseja deletar este produto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => { }
        },
        {
          text: 'Deletar',
          handler: () => {
            this.fbstore.doc("product/" + uid).delete().then(data => {
              this.ngroute.navigate(['product']);
              this.toast('Produto deletado com sucesso!', 'success');
            });
          }
        }
      ]
    });
    await alert.present();
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
