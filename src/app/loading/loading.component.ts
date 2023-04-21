import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  loading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    const duration = Math.floor(Math.random() * (1500 - 800 + 1) + 800);
    console.log(duration)
    setTimeout(() => {

      const overlay = document.createElement('div');
      overlay.classList.add('overlayhome');
      document.body.appendChild(overlay);

      setTimeout(() => {
        this.router.navigate(['/en']);
      }, 900);

        overlay.classList.add('showb');
          overlay.style.backgroundColor = '#333';

      
      setTimeout(() => {
        overlay.classList.remove('showb');
        setTimeout(() => {
          overlay.remove();
        }, 400);
        setTimeout(() => {
          overlay.style.backgroundColor = '#333';
        }, 100);
      }, 1000);


      this.loading = false;
    }, duration);

    
  }

}
