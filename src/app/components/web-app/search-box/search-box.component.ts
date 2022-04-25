import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() placeholder!: string;

  constructor() { }

  ngOnInit(): void {
    this.capitalizeFirstLetter()
  }

  capitalizeFirstLetter(){
    this.placeholder = this.placeholder.charAt(0).toUpperCase() + this.placeholder.slice(1);
  }

}
