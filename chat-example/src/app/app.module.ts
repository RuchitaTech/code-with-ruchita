import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
