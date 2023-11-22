import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuController: MenuController,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu() {
    this.menuController.open('first');
  }


  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Ingreso correctamente',
      message: 'Bienvenido a Duoc UC!',
      buttons: ['OK'],
    });

    await alert.present();


  }
}
