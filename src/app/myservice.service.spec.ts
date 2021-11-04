import { TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {AppComponent } from './App.component';
import { async } from '@angular/core/testing';
import { NgForm } from '@angular/forms';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({ declarations: [ AppComponent ],
     imports: [ FormsModule ,NgForm ,ReactiveFormsModule ] ,
     providers: [MyserviceService]}));

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    const service: MyserviceService = TestBed.get(MyserviceService);
    expect(service).toBeTruthy();
    expect(service.showTodayDate()).toEqual(new Date()); 
  });
  
});
