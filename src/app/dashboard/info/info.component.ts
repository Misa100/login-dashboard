import { Component, OnInit } from '@angular/core';
import {blogcard,blogcards} from './blog-cards-data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  blogcards:blogcard[]= [];

  constructor() { 

    this.blogcards=blogcards;
  }
  
  ngOnInit(): void {
      
  }
}
