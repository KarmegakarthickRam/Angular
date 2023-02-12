import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetList } from './assets/asset-list.component';
import { Header } from './header/header.component';
import { NavMenu } from './nav/nav-menu.component';
import { FormsModule } from '@angular/forms';
import {AddAsset} from './assets/asset-add.component';
import { Home } from './home/home.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
import { AssetViewComponent } from './asset-view/asset-view.component';
@NgModule({
  declarations: [
    AppComponent,AssetList,NavMenu,Header,AddAsset,Home, SwitchComponentComponent, AssetViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
