import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css']
})
export class SwitchComponentComponent {
  @Input()
  label:string =''
  
  switchClicked(){
    console.log("switch");
    
  }
}
