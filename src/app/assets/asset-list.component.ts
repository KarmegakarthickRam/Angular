import { Component } from "@angular/core";
import { Router, RouterLink, NavigationExtras, Route } from "@angular/router";
import { IAsset } from "./asset.model";
import { AssetService } from "./asset.service";
// import * as data from "../assets/data.json";

@Component({
    selector: 'asset-list',
    templateUrl: './asset-list.component.html',
    providers: [AssetService]
})
export class AssetList {
    assetList: IAsset[] = []
    asset: IAsset[] = []
    ngOnInit() {
        this.assetService.getAssetData().subscribe((res) => {
            this.assetList = res
            console.log(this.assetList)
            this.asset = this.assetList
        })
    
    }
    

    constructor(private router: Router, private assetService: AssetService) { }


    searchParameter = '';
    get searchParam(): string {
        return this.searchParameter
    }
    set searchParam(value: string) {
        this.searchParameter = value
        this.assetList = this.asset
        console.log(this.asset);
        this.assetList = this.filteredAsset(value)
    }


    filteredAsset(value: string): any {
        console.log(this.asset);
        return this.assetList.filter((x: IAsset) => x.assetCode?.includes(value))
    }


}