import { Component } from '@angular/core';
import { DataService } from './data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

users: Array<any>; //users of array any, any user 

//use dependency injection and get an instance of dataservice through the constructor 

constructor(private _dataService:DataService){

  //access dataservice.getusers method that we defined, then we subscribe to it
  
  this._dataService.getUsers().subscribe(res => this.users = res);
}

}
