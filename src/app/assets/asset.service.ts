import { IAsset, IAssetModel } from "./asset.model"
import { Component, Injectable } from "@angular/core";
import { ActivatedRoute, ParamMap, Route, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
import { Token } from "@angular/compiler";
@Injectable({
    providedIn: 'root'
})
export class AssetService {

    constructor(private httpClient: HttpClient) {
        // this.getAssetData().subscribe((res) => {
        //     this.assetList = res.assetData
        //     console.log(res);
        // })



          // var res =  () =>  this.httpClient.get<Token[]>('https://idp-qa.faciliteasy.com/connect/token', {
          //   headers: {
          //     authorization: this.token,
          //     org_id: this.org_id
          //   }
          // });

          // this.token = res.access_token
        
    }
    token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Im9RM21mcEFPb0VTY2NxMDZINUZGSEEiLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzYxOTk5MDEsImV4cCI6MTY3NjIwMzUwMSwiaXNzIjoiaHR0cHM6Ly9pZHAtcWEuZmFjaWxpdGVhc3kuY29tIiwiYXVkIjoiZmFjaWx0ZWFzeV9hcGkiLCJjbGllbnRfaWQiOiJyZWFjdF9zaXRlIiwic3ViIjoiNWFkMGY0Y2QtZjlmYS00ODY5LWFhM2MtMDhkOGZiMGQ5MTA2IiwiYXV0aF90aW1lIjoxNjc1NjYyMDcwLCJpZHAiOiJsb2NhbCIsInVzZXJfbmFtZSI6InJhbXlhbmFuZGhpbmkxOTk5QGdtYWlsLmNvbSIsImVtYWlsIjoicmFteWFuYW5kaGluaTE5OTlAZ21haWwuY29tIiwic2NvcGUiOlsiZmFjaWx0ZWFzeV9hcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.UyMAayUdJ7HRSfQKLtEpNtuBnwIisXy-MY6DF0MRymmCR3AMjuG5RjbGjP3Xw537B1O_lYR9Mjsd7FMjByeoRRfflbNTEQ-n8NJ59gdn_Ft5E1huAeJYqAvF0manEajvjq9hjwetXFQARkVikh078NcQIMDBx2mxo3qYs91wbCPA7Dp3JgWOGOPlEAJi07ssHBYDxCIOF5oZQMMMCFdrxotKUA4XIx7rstyp5OYV1ATAa1_gtWCRfnsSmg5hvjBKTL1tJET3-87-nrJnBYQpklZ9-_AdnlFJ3MiIExVwJzps51uKL4kpRA2o5OG1Tv3a98Of4LI7G8MwhBr29uUXRg'
    routeId: string = '';
    org_id:string = 'ff58144e-18b0-4244-a67e-15cada9ffd41'
    asset: IAsset = {};
    assetList: IAsset[] = [];
    assetDataUrl: string = '../'
    //     getAsset():IAsset[]{
    //         this.fetchData()
    //         console.log(this.assetList);
    //         return this.assetList

    // }
    getAssetData(): Observable<any> {
        return this.httpClient.get<any>('https://api-qa.faciliteasy.com/api/v1/Assets?page=1',
        {
            headers: {
              authorization: this.token,
              org_id: this.org_id
            }
          })
    }

    addAsset(payload:IAsset): Observable<any> {
        return this.httpClient.post<any>('https://api-qa.faciliteasy.com/api/v1/Assets?page=1',payload,
        {
            headers: {
              authorization: this.token,
              org_id: this.org_id
            }
          })
    }

    getAsset(id:string): Observable<any> {
      return this.httpClient.get<any>(`https://api-qa.faciliteasy.com/api/v1/Assets/${id}`,
      {
          headers: {
            authorization: this.token,
            org_id: this.org_id
          }
        })
  }


  editAssetStatus(payload:string): Observable<any> {
    return this.httpClient.get<any>(`https://api-qa.faciliteasy.com/api/v1/Assets/ba7f9034-9c00-4e37-a540-33b2ebaaf7c1/Inactivate`,
    {
        headers: {
          authorization: this.token,
          org_id: this.org_id
        }
      })
}


    getFacilities() {
        return this.httpClient.get<any[]>('https://api-qa.faciliteasy.com/api/v1/Facilities?includeSubLocations=false', {
          headers: {
            authorization: this.token,
            org_id: this.org_id
          }
        });
      }



      getTeams() {
        return this.httpClient.get<any[]>('https://idp-qa.faciliteasy.com/api/teams', {
          headers: {
            authorization: this.token,
            org_id: this.org_id
          }
        });
      }
      getUsers() {
        return this.httpClient.get<any[]>('https://idp-qa.faciliteasy.com/api/users', {
          headers: {
            authorization: this.token,
            org_id: this.org_id
          }
        });
      }
    // fetchData(){
    //   var h =  fetch("../assets/data.json").then((res: any) => res.json()).then(data => {
    //         this.assetList = data.assetData
    //         this.asset = data.assetData.find((x: IAsset) => x.assetId == this.routeId)
    //         return this.assetList
    //     })
    // }
}