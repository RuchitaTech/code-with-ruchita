import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileUploadService } from './services/file-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
