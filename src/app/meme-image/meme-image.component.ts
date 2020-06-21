import { Component, OnInit } from '@angular/core';
import {Meme} from '../meme';

@Component({
  selector: 'app-meme-image',
  inputs: ['meme'],
  host:{'class':'ui small image'},
  template: 
  `
  <img class="meme-image" [src]="meme.imgPath">
  `,
  styleUrls: ['./meme-image.component.css']
})
export class MemeImageComponent implements OnInit {
  meme:Meme;
  constructor() { }

  ngOnInit() {
  }

}
