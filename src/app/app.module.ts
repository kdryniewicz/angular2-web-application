import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MemeRowComponent } from './meme-row/meme-row.component';
import { MemeListComponent } from './meme-list/meme-list.component';
import { MemeImageComponent } from './meme-image/meme-image.component';
import { MemeAuthorComponent } from './meme-author/meme-author.component';
import { MemeManagerComponent } from './meme-manager/meme-manager.component';
import { UploadComponent } from './upload/upload.component';
import { FileSelectDirective,FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    MemeRowComponent,
    FileSelectDirective,
    FileDropDirective,
    MemeListComponent,
    MemeImageComponent,
    MemeAuthorComponent,
    MemeManagerComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
