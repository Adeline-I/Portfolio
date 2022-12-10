import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages.component.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {

  typewriter_text: string = "Développeuse Web - Web Mobile";
  typewriter_display: string = "";

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }

  typingCallback(that: any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 200, that);
    } else {
      
      setTimeout(() => {that.typewriter_display = "";}, 1000);
      setTimeout(that.typingCallback, 1000, that);
    }
  }

}
