import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../../modals/modal/modal.page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
})
export class ProductPage {
  products = [];

  constructor(private dataservice:DataService, private alertCtrl:AlertController, private modaltCtrl:ModalController) {
    this.dataservice.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  async openProduct(product){
    const modal = await this.modaltCtrl.create({
      component: ModalPage,
      componentProps: { id: product.id },
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8
    });
    modal.present();
  }

  async addProduct(product){
    const alert = await this.alertCtrl.create({
      header: 'Adicionar Produto',
      inputs: [
        {
          name: 'title',
          placeholder: 'Digite o título...',
          type: 'text'
        },
        {
          name: 'description',
          placeholder: 'Digite a descrição...',
          type: 'textarea'
        },
        {
          name: 'amount',
          placeholder: 'Digite a quantidade inicial...',
          type: 'number'
        },
        {
          name: 'coin',
          placeholder: 'Digite o preço (em coins)...',
          type: 'number'
        },
        {
          name: 'image',
          placeholder: 'URL da imagem...',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Adicionar',
          handler: (res)=>{
            this.dataservice.addProduct({
              title: res.title,
              description: res.description,
              amount: res.amount,
              coin: res.coin,
              image: res.image
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
