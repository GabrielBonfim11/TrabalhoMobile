import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})

export class CadastroClientePage implements OnInit {
  public logo: string;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  private tipo: string;


  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/imagens/logo.png";
  }

  verificaTipo(event){
    this.tipo = event.target.value;
  }

  async login(){
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast('Email ou Senha Incorretos');
    } finally {
      this.loading.dismiss();
    }
  }
  
  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      this.presentToast('Cadastro Inválido! Verifique os dados e tente novamente');
    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor, Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000});
    toast.present();
  }

  voltlogin(){
    this.navCtrl.navigateRoot(`login`);
  }


}
