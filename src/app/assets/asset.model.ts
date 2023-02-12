export interface IAsset{
    categoryCustomFieldValues?:{}
    customFieldValues?:{}
    image?:string;
    assetCode?:string
    assetId?:string
    assetName?:string
    facilityId?:jsonResp
    facility?:jsonResp
    facilityAddress?:string
    fileName?:string
    imgLink?:imageLink[]
    isActive?:string
    details?:details
    latitude?:string
    longitude?:string
    parentAssetCode?:string
    parentAssetId?:string
    parentAssetName?:string
    purchaseDate?:string
    subAssetsCount?:string
    serialNumber?:string
    name?:string
}

export interface jsonResp{
    id:string
    name:string
}
export interface details{
    image?:string;
    assetCode?:string
    assetId?:string
    assetName?:string
    facilityId?:jsonResp
    facilityAddress?:string
    fileName?:string
    imgLink?:imageLink[]
    isActive?:string
    latitude?:string
    longitude?:string
    parentAssetCode?:string
    parentAssetId?:string
    parentAssetName?:string
    purchaseDate?:string
    subAssetsCount?:string
    serialNumber?:string
    name?:string
    subCategoryID?:number
    categoryID?:number
}

export interface imageLink{
    href:string
    rel:string
}

export interface IAssetModel{
    assetData:IAsset[]
}


export interface Token{
    access_token:string
}


export interface IAssetResponse{
    categoryCustomFieldValues?:string
code?:string
customFieldValues?:string
description?:string
details?:IAssetDetails
id?:string
isActive?:string
isWarranty?:string
manufacturer?:string
modelName?:string
modelYear?:string
name?:string
parent?:string
qrCode?:string
serialNumber?:string
usefulLifeYear?:string
}


export interface IAssetDetails{
    category?:string
customer?:string
expirationAlert?:string 
facility?:jsonResp
id?:string
isActive?:string
locationInsideFacility?:string
name?:string
owners?:string
purchaseDate?:string
purchasePrice?:number
residualPrice?:number
subCategory?:string
subLocation?:string
teams?:string
technicians?:string
vendor?:string
warrantyValue?:string
warrentyEndDate?:string
warrentyStartDate?:string
}
