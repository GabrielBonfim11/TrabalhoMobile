import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public logo: string;
  public userLogin: User = {};
  private loading: any;

  constructor(private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private menu: MenuController,
    public keyboard: Keyboard
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/imagens/logo.png";
  }

  ionViewWillEnter() {
    this.menu.close();
    this.menu.swipeEnable(false);
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
      this.navCtrl.navigateRoot('home').then(() => {
        this.menu.swipeEnable(true);
      });
    } catch (error) {
      this.presentToast('email ou senha incorretos');
    } finally {
      this.loading.dismiss();
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor, Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  cad_c() {
    this.navCtrl.navigateRoot(`cadastro-cliente`);
  }



}