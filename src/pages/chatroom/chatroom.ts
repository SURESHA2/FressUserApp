import { Component,   NgZone,   } from '@angular/core';
import {  IonicPage, NavParams, Platform,NavController,Events } from 'ionic-angular';
import { SendMessageWithContent } from '../../interfaces/user-options';
import { SetupService } from '../../providers/setup.services';
import   *as socketIOClient  from 'socket.io-client';
import *as sailsIOClient  from 'sails.io.js';
import { UserEmailId } from '../../interfaces/user-options';
//import { ExchangePage } from '../exchange/exchange';
//import {  FabContainer } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ModelPage } from '../model/model';

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {
  nickname = '';
  chatId = '';
  data:any;
  user:any;
  socket:any;
  io:any= sailsIOClient(socketIOClient);
  messageDetails: SendMessageWithContent = { sender: '', recipient: '',content:'',chatId:'' };
  messages =[] ;
  userContent:any;

 chatid={
           "chatId": ""
  }
  userName: string;
  myInfo = this.messages[0];
   UserId: UserEmailId = { email: '' };
  constructor(private ngZone: NgZone,
    public platform:Platform,
    private navCtrl:NavController,
    private navParams: NavParams,
    public _setupService: SetupService, 
    public events: Events,
    public modalCtrl : ModalController,
    public viewCtrl: ViewController
    ) {
  //this.io.sails.url = this._setupService.endpoint_url;    // connect to socket
   this.io.sails.url = "http://103.201.142.41:3005"; 
   //this.io.sails.url = "http://localhost:3000";
  this.userdata();

    this.messageDetails.sender=this.UserId.email;
    this.nickname = this.messageDetails.sender;
    this.messageDetails.recipient=this.navParams.get('receiver');
    this.messageDetails.chatId=this.navParams.get('chatId');
    this.chatid.chatId=this.messageDetails.chatId;

    // used for enabel device back button
    let backAction =  platform.registerBackButtonAction(() => {
        this.navCtrl.pop();
        backAction();
      },2)







    // create connection between user based on chat id

     this.io.socket.get('/chat/sendMessage',{chatId:this.messageDetails.chatId}, function(data, response){

     });

     // get old message based on chat id

     this._setupService.getChatMessages({chatId:this.messageDetails.chatId}).subscribe((response)=>{
       if(response.statusCode==200){
        this.messages=response.data;
      }else{

      }
     })

     // event listner when any events brodcast messages
     var ngZ = this.ngZone;
     var event=this.events;

     this.io.socket.on('NEWMESSAGE', function(respons){
        ngZ.run(() => {
        this.messages = respons.data;
        event.publish("sharemessage",  this.messages);
       });
    })
   this.listenToDataChangeEvents();
 }

 userdata(){
     this.user=JSON.parse(localStorage.getItem('logindetail'));
         if(this.user!=null||this.user!=undefined){
        this.UserId.email=this.user.user.email;
      }
    }
 listenToDataChangeEvents() {
 this.events.subscribe('sharemessage', (userData) => {
       this.messages.push(userData);
       this.userContent='';
  });
 }


 sendMessage() {
  this.messageDetails.content = this.userContent  ;
     this.io.socket.post('/chat/sendMessage',this.messageDetails, function(data, response){

   })

  }


 ionViewWillLeave() {
  // this.io.socket.disconnect();
   delete this.io.sails;
  }

   openFilters() {
        console.log('crap');
    }

  //   gotoExchange(event, fab: FabContainer) {
  //   fab.close();
  //   this.navCtrl.push(ExchangePage);
  // }


// openModal(characterNum) {  
//     let modal = this.modalCtrl.create(ChangemodelPage, {
//       'prop': 'prop1',
//       onFeedBack: (data) => {
//         console.log('Input callback' + JSON.stringify(data));
//       }
//     });

//     modal.onDidDismiss(data => {
//       console.log('Closed with data:' + JSON.stringify(data));
//     });

//     modal.present().then(result => {
//       // modal.overlay['subscribe']((z) => {
//       //   console.log(JSON.stringify(z));
//       // })
//       const testComp = modal.overlay['instance'] as ChangemodelPage;
//       // testComp.feedbackSubmit.subscribe(() => {
//       //   alert(1);
//       // })
//     });
 

// openModal() {
//   let obj = {userId: '1', name: 'Bob', email: 'bob@unicorn.com'};
//   let myModal = this.modalCtrl.create(ModelPage, obj);
//   myModal.present();
// }

openModal() {
  let myModal = this.modalCtrl.create(ModelPage);

  myModal.onDidDismiss(data => {
    this.userName = data.userName;
  });

  myModal.present();
}
}