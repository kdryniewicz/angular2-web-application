import { Component, OnInit } from '@angular/core';
import {Meme} from '../meme';

@Component({
  selector: 'app-meme-row',
  inputs: ['meme'],
  host: {'class': 'item'},
  template: 
   `
  <app-meme-image [meme]="meme"></app-meme-image>
  <div class="content">
  <div class="header">{{meme.title}}</div>
  <app-meme-author [meme] = "meme"></app-meme-author>
   <div class="meta"><p>Likes: </p>{{meme.votes}}</div>
	
		<div class="content">
			<a href (click)="voteUp()">
				<i class="arrow up icon"></i>
				Upvote
			</a>
	
			<a href (click)="voteDown()">
				<i class="arrow down icon"></i>
				Downvote
			</a>
	</div>
  `,
  styleUrls: ['./meme-row.component.css']
})
export class MemeRowComponent implements OnInit {
meme:Meme;
  constructor() { }

  ngOnInit() {
  }

}
