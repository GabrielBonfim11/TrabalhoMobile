import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [ {
    user: 'Gabriel',
    created: '1554090856000',
    msg: 'Olá, tudo bem?'
  },
  {
    user: 'outro',
    created: '1554090856000',
    msg: 'Olá, bem e vc?'
  },
  {
    user: 'Gabriel',
    created: '1554090856000',
    msg: 'Bem tmbm'
  }
];
 
currentUser = 'Gabriel';
newMsg = '';

@ViewChild(IonContent, {static: false}) content: IonContent;
@ViewChild('inputMsg', {static: false}) inputMsg: ElementRef;

constructor(private keyboard: Keyboard) { }


  ngOnInit() {
  }
  
  sendMessage() {
    this.messages.push(
      {
        user: this.currentUser,
        created: new Date().getTime().toString(),
        msg: this.newMsg
      }
    );
    this.newMsg = '';
    this.inputMsg.nativeElement.focus();
    setTimeout(() => {
       this.content.scrollToBottom(300);
    });
  }

}
