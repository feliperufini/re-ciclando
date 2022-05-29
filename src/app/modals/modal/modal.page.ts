import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService, Product } from '../../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string;
  product: Product = null;

  constructor(private dataService:DataService, private modalCtrl:ModalController, private toastCtrl:ToastController) { }

  ngOnInit() {
    this.dataService.getProductById(this.id).subscribe(res => {
      this.product = res;
    });
  }

  async updateProduct(){
    this.dataService.updateProduct(this.product);
    const toast = await this.toastCtrl.create({
      message: 'Produto atualizado!',
      duration: 2000
    });
    toast.present();
    this.modalCtrl.dismiss();
  }

  async deleteProduct(){
    this.dataService.deleteProduct(this.product);
    const toast = await this.toastCtrl.create({
      message: 'Produto excluído!',
      duration: 2000
    });
    toast.present();
    this.modalCtrl.dismiss();
  }
}
