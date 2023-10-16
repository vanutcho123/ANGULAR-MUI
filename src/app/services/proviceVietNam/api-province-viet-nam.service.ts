import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiProvinceVN } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProvinceVietNamService {

  constructor(private httpClient: HttpClient) { }

  getProvinceVn() {
    return this.httpClient.get(`${apiProvinceVN.apiUrl}/p`)
  }
  getDistrictVn(idProvince: number) {
    return this.httpClient.get(`${apiProvinceVN.apiUrl}/p/${idProvince}/?depth=2`)
  }
  getWardsVn(idDistrict: number) {
    return this.httpClient.get(`${apiProvinceVN.apiUrl}/d/${idDistrict}/?depth=2`)

  }
}
