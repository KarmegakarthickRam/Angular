import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetViewComponent } from './asset-view/asset-view.component';
import {AddAsset} from './assets/asset-add.component';
import { AssetList } from './assets/asset-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'asset',
    pathMatch:'full'
  },
  {
    path:'asset',
    children:[
      {
        path:'',
        component:AssetList
      },
      {
        path:'add',
        component:AddAsset,
      },
      {
        path:'view/:id',
        component:AssetViewComponent,
      }
    ]
  },
  {
    path:'**',
    redirectTo:'asset',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
