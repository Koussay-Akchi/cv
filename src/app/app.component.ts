import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume';
  mybutton: any;

  ngOnInit() {
    this.mybutton = document.getElementById("btn-back-to-top") as HTMLElement;
    mybutton: HTMLElement ;
    window.onscroll = () => {
      this.scrollFunction();
    };
    this.mybutton.addEventListener("click", () => {
      this.backToTop();
    });
  }

  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  }

  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}