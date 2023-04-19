import { Component , OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngAfterViewInit() {

  $(document).ready(function() {
    $('.percentage-bar').each(function(){
      $(this).find('.bar').animate({
        width: $(this).attr('data-percent')
      }, 6000);
    });
  });

  }
}