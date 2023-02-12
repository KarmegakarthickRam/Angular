import { Component } from "@angular/core";

@Component({
  template:`<div>
    <header></header>
    <nav-menu></nav-menu>
    <router-outlet></router-outlet>
  </div>`,
  selector:'app-root'
})
export class AppComponent{
  myName = 'karthi'
  
}