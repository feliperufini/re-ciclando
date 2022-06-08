import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public isAdmin = true;
  user: any;

  public adminMenuItems = [
    { title: 'Produtos', url: 'product', icon: 'pricetags-outline' },
    { title: 'Receber Material', url: 'sale', icon: 'help-circle-outline' },
  ];

  public menuItems = [
    { title: 'Início', url: 'home', icon: 'home-outline' },
    { title: 'Pontos de Coleta', url: 'checkpoint', icon: 'location-outline' },
    { title: 'Perfil', url: 'profile', icon: 'person-outline' },
    { title: 'Dicas', url: 'tip', icon: 'at-circle-outline' },
    { title: 'Sobre', url: 'about', icon: 'help-circle-outline' },
  ];

  constructor(private auth: AuthService) { }
  
  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

  logout(){
    this.auth.signOut();
  }
}
