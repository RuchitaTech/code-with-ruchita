import { Component, OnInit } from '@angular/core';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chat-example';

  constructor(
    private chatService: ChatClientService,
    private channelService:ChannelService,
    private streamI18nService: StreamI18nService

  ){
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'old-hat-5';
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoib2xkLWhhdC01IiwiZXhwIjoxNzA4MDI5MTE4fQ.6W_CP6NQ4B3ABm32CxQuWRxYTpbTSs5OM7K67ydpBBo';
    this.chatService.init(apiKey,userId,userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit(){
    const channel = this.chatService.chatClient.channel('messaging', 'talking-about-angular', {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Talking about Angular',
    });
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });
  }
}
