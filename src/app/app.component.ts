import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { NgForm } from '@angular/forms';
import {User} from './User';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { SubAppComponent } from './sub-app/sub-app.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  errorOccured;
  errorMessage;
  isSuccess;
  sucessMessage;sub;



  title = 'first-app NAREN';
  weekdays =['Saturday','Sunday','Monday','Tuesday'];
  todaydate;
  constructor(private myservice: MyserviceService ){
   // this.todaydate = this.myservice.showTodayDate();
  }
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
 }
  
 onClickSubmit(updateUserForm: NgForm) {
 
  var user: User = new User();
  console.log('value from form'+JSON.stringify(updateUserForm.value));
   var userDetails = updateUserForm.value;
   user.name = userDetails.username;
   user.password = userDetails.password;
   
   user.email = userDetails.email;
   this.errorOccured = false;
   this.errorMessage = "";
   console.log('value from user'+JSON.stringify(user));

   this.sub = this.myservice.CreateUser(user).subscribe({
     next: response => {
       this.errorOccured = false;
       this.errorMessage = "";
       this.isSuccess = true;
       this.sucessMessage = response;
       console.log(response);
     },
     error: err => {
          console.log('error'+err);
     
         this.isSuccess = false;
         this.sucessMessage = "";
         this.errorOccured = true;
         this.errorMessage += "404 Not Found Error"+ " | ";
     
       
     }
   });
}

 catch(e)
 {
   this.errorOccured = true;
  
   return false
 }
}

