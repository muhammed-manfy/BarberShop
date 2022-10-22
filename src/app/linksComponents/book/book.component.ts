import { Component, OnInit } from '@angular/core';
import {FormControl,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor() { }
  Book={
  firstName:'',
  lastName:'',
  phone:'',
  email:'',
  option:''
  }
  ngOnInit(): void
  {  }


}
