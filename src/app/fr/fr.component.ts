import { Component , OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css']
})
export class FrComponent {
  ngOnInit() {

    $(document).ready(function() {
      $('.percentage-bar').each(function(){
        $(this).find('.bar').animate({
          width: $(this).attr('data-percent')
        }, 6000);
      });
    });
  
    }

}
