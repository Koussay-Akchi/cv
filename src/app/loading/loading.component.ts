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
      this.loading = false;
      this.router.navigate(['/en']); // Redirect to the home component
    }, duration);
  }

}
