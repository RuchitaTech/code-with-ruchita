import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { ChatService } from './chat/services/chat.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';
import { SetBackground } from './customerDirectives/setBackroung.directive';
import { HightlighterDirective } from './customerDirectives/hightlighter.directive';
import { HoverDirective } from './customerDirectives/hover.directive';
import { BetterHighlightDirective } from './customerDirectives/better-highlight.directive';
import { ProductService } from './services/products.service';
import { LoggerService } from './services/logger.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    CustomerListComponent,
    DateOfBirthComponent,
    SetBackground,
    HightlighterDirective,
    HoverDirective,
    BetterHighlightDirective,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    // AngularFontAwesomeModule

  ],
  providers: [ChatService, LoggerService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
