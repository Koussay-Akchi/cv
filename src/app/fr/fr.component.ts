import { Component , HostListener } from '@angular/core';
import * as $ from 'jquery';

import { Router } from '@angular/router';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css']
})
export class FrComponent {

  private animated = false;
  constructor(private router: Router) {}

  showOverlay(): void {
    const overlay = document.createElement('div');
    overlay.classList.add('overlayen');
    document.body.appendChild(overlay);

    setTimeout(() => {
      this.router.navigate(['/en']);
    }, 900);
    
    
    setTimeout(() => {
      overlay.classList.add('showl');
      setTimeout(() => {
        overlay.style.backgroundColor = '#C8102E';
      }, 200);
    }, 10);
    
    setTimeout(() => {
      overlay.classList.remove('showl');
      setTimeout(() => {
        overlay.remove();
      }, 400);
      setTimeout(() => {
        overlay.style.backgroundColor = '#131f55';
      }, 100);
    }, 1000);
  }
  

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
