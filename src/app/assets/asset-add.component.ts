import { Component, EventEmitter, Input, Output } from "@angular/core";
import { details, IAsset, jsonResp } from "./asset.model";
import { ActivatedRoute, ParamMap, Route, Router } from "@angular/router";
import { AssetService } from "./asset.service";
@Component({
    templateUrl: './asset-add.component.html',
    selector: 'asset-add',
    providers: [AssetService]

})
export class AddAsset {
    constructor(private route: ActivatedRoute, private router: Router, private assetService: AssetService) { };
    // route : ActivatedRoute = new ActivatedRoute();
    asset: IAsset = {}
    details: details = {}
    assetList: IAsset[] = []
    routeId = '';
    facilityList: jsonResp[] = [];
    @Output()
    editList: EventEmitter<IAsset[]> = new EventEmitter<IAsset[]>
    ngOnInit() {
        this.assetService.getFacilities().subscribe((res) => this.facilityList = res);
        this.route.params.subscribe(params => {
            this.routeId = (params['id']) //log the value of id
        })
        if (this.routeId) {
            this.getAsset()
        }
    }


    getAsset() {
        fetch("../assets/data.json").then((res: any) => res.json()).then(data => {
            this.assetList = data.assetData
            this.asset = data.assetData.find((x: IAsset) => x.assetCode == this.routeId)
        })
    }

    handleSaveAsset() {
        this.asset.categoryCustomFieldValues = {}
        this.asset.categoryCustomFieldValues = {}
        this.details.name = this.asset.name
        this.details.facilityId = this.asset.facilityId
        this.details.purchaseDate = this.asset.purchaseDate
        this.details.subCategoryID = 8707
        this.details.categoryID = 8640
        this.asset.details = this.details
        this.assetService.addAsset(this.asset).subscribe(() => {
            this.router.navigate(['/asset']);
        });


        // else
        // this.assetList.push(this.asset)
        // this.router.navigate(['/asset']);
    }
}