import { Component, OnInit } from '@angular/core';
import {Meme} from '../meme';

@Component({
  selector: 'app-meme-author',
  inputs: ['meme'],
  template: 
  `
  <div class="app-meme-author">
    <span>
      <a href="#">by {{ meme.author }} </a>
    </span>
  </div>
  `,
  styleUrls: ['./meme-author.component.css']
})
export class MemeAuthorComponent implements OnInit {
meme:Meme;
  constructor() { }

  ngOnInit() {
  }

}
