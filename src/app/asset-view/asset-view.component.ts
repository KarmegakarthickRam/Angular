import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAssetDetails, IAssetResponse } from '../assets/asset.model';
import { AssetService } from '../assets/asset.service';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent {
  constructor(private route:ActivatedRoute, private assetService:AssetService){}
  assetDetails:IAssetResponse = {}
  routeId:string = ''
  ngOnInit(){

    this.route.params.subscribe(params => {
      this.routeId = (params['id']) //log the value of id
  })
    this.assetService.getAsset(this.routeId).subscribe((res)=>{
      this.assetDetails = res;
    })
  }
}
