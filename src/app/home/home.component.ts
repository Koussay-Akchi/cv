import { Component , HostListener } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private animated = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / 
      (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    if (scrollPercent >= 30 && !this.animated) {
      this.animateArticle();
      this.animated = true;
    }
  }

  private animateArticle(): void {
    $('article').animate({ opacity: 1 }, 2000);
    $('.percentage-bar').each(function(){
      $(this).find('.bar').animate({
        width: $(this).attr('data-percent')
      }, 6000);
    });
  }
}