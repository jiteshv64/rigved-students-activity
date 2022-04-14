import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileArray: any[] = [];

  constructor() {}

  public getProfile(): any[] {
    return this.profileArray;
  }

  public saveProfile(obj: any): void {
    let b = this.profileArray.length;
    let a = b + 1;
    let object = {
      profileId: a,
      name: obj.name,
      gender: obj.gender,
      phone: obj.phone,
      email: obj.email,
      state: obj.state,
      city: obj.city,
      pincode: obj.pincode,
    };
    this.profileArray.push(object);
  }

  public deleteProfile(id: number): void {
    for (let i = 0; i < this.profileArray.length; i++) {
      let profile = this.profileArray[i];
      if (profile.profileId == id) {
        this.profileArray.splice(i, 1);
      }
    }
  }

  public updateProfile(id: number): void {
    for (let i = 0; i < this.profileArray.length; i++) {
      let profile = this.profileArray[i];
      if (profile.profileId == id) {
        return this.profileArray[i];
        // console.log(this.profileArray[i]);
      } 
    }
  }

  public updateform(obj:any):void{
    for(let i=0; i< this.profileArray.length; i++){
      let profile=this.profileArray[i];
      if(profile.profileId==obj.id){
        profile.name=obj.name;
        profile.gender=obj.gender;
        profile.phone=obj.phone;
        profile.email=obj.email;
        profile.state=obj.state;
        profile.city=obj.city;
        profile.pincode=obj.pincode;
        console.log('hi')
      }
    }
  }
}
