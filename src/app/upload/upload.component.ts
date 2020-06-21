import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective  } from 'ng2-file-upload';

const URL = 'http://localhost:3000/api/';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL});

  ngOnInit() {
  }

}
