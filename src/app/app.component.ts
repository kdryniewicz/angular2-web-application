import { Component } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {Meme} from './meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
memes : Meme[];
  constructor(){
        this.memes = [new Meme(
    'On my way to work..', 
    'Tomato13',
    '/uploads/meme1.jpeg',
    314
     ),
     new Meme(
    'Doggo', 
    'DoggoDude',
    '/uploads/meme2.jpeg',
    666
    ),
     new Meme(
     'Darn you YT!',
     'YoutubeH8r',
     '/uploads/meme3.jpg',
     420
     )];
  }
   addMeme(title: HTMLInputElement, author : HTMLInputElement, imgPath : HTMLInputElement): boolean
  { console.log(`Adding Meme, Title: ${title.value} by author: ${author.value} image path: ${imgPath.value}`);
	this.memes.push(new Meme(title.value,author.value,imgPath.value,0));
  title.value = '';
  author.value = '';
  imgPath.value = '';
  return false;
}

    sortedMemes(): Meme[]{
    return this.memes.sort((a : Meme, b: Meme) => b.votes - a.votes);
  }


}
