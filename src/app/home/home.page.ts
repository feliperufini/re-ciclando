import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes = [];

  constructor(private dataservice:DataService, private alertCtrl:AlertController, private modaltCtrl:ModalController) {
    this.dataservice.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res;
    });
  }

  async openNote(note){
    const modal = await this.modaltCtrl.create({
      component: ModalPage,
      componentProps: { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present();
  }

  async addNote(note){
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          name: 'title',
          placeholder: 'Digite o título...',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Digite o texto...',
          type: 'textarea'
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
            this.dataservice.addNote({title: res.title, text: res.text});
          }
        }
      ]
    });
    await alert.present();
  }
}
