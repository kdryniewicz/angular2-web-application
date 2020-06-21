import { Component, OnInit, Input } from '@angular/core';
import {Meme} from '../meme';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-meme-list',
   inputs: ['memeList'],
  outputs: ['onMemeSelected'],
  template:
  `
   <div class="ui items">
  <app-meme-row
 *ngFor="let myMeme of memeList"
 [meme] = "myMeme">
  </app-meme-row>
  </div>
  `,
  styleUrls: ['./meme-list.component.css']
})
export class MemeListComponent implements OnInit {
  memeList : Meme;

  onMemeSelected:EventEmitter<Meme>;

  private currentMeme:Meme;

  constructor() { this.onMemeSelected = new EventEmitter() }

@Input() meme:Meme;

	voteUp(): boolean{
		this.meme.voteUp();
		return false;
	}
	voteDown(): boolean{
		this.meme.voteDown();
		return false;
	}


  clicked(meme:Meme):void{
this.currentMeme = meme;
this.onMemeSelected.emit(meme);
}
isSelected(meme: Meme) : boolean{
  if(!meme || !this.currentMeme){
    return false;
  }
  return meme.title == this.currentMeme.title;
}

  ngOnInit() {
  }

}
