import { Component , HostListener } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private animated = false;
  constructor(private router: Router) {}

  showOverlay(): void {
    const overlay = document.createElement('div');
    overlay.classList.add('overlayfr');
    document.body.appendChild(overlay);

    setTimeout(() => {
      this.router.navigate(['/fr']);
    }, 900);
    
    
    setTimeout(() => {
      overlay.classList.add('showr');
      setTimeout(() => {
        overlay.style.backgroundColor = 'dodgerblue';
      }, 200);
    }, 10);
    
    setTimeout(() => {
      overlay.classList.remove('showr');
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