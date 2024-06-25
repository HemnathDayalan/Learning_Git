import {HttpClient,  HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntryComponent } from "./entry/entry.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, EntryComponent]
})
export class AppComponent implements OnInit{
  title = 'AngularTest';
  temp : any ;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.fetching();
  }

  fetching(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) => {
      this.temp = data;
      console.log(data);
    })
  }
  
  
}
