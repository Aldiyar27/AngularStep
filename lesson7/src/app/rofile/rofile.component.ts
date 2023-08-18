import { Component } from '@angular/core';
import { PostsService } from '../api.service'

@Component({
  selector: 'app-rofile',
  templateUrl: './rofile.component.html',
  styleUrls: ['./rofile.component.css'],
  providers: [PostsService]
})
export class RofileComponent {
  
}