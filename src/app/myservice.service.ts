import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpHeaderResponse } from "@angular/common/http";

import { Observable } from "rxjs";
import { User} from "./User";

@Injectable({
	providedIn: 'root'
})


export class MyserviceService {
	private url = 'http://127.0.0.1:8080/insertuser';
	constructor(private http: HttpClient) { }

	showTodayDate() {
		let ndate = new Date();
		return ndate;
 }
 showmsg(): Observable<any>{
	var httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json'})
	};

 this.http.get('http://127.0.0.1:8080/allusers',httpOptions)
 .toPromise().then(res=>console.log(JSON.stringify(res) +'timeplease '))
 .catch(err=>console.log(err))

 return (this.http.get('http://127.0.0.1:8080/allusers',httpOptions));
}
 CreateUser(user: User): Observable<any>{
	var httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json'})
	};
	console.log('value from service'+JSON.stringify(user));
	this.showmsg();
	return this.http.post<User>(this.url,user,httpOptions);

	

	//other option
	/*
constructor(private http: HttpClient) {
		this.http.post(this.url, this.postData).toPromise().then((data:any) => {
			console.log(data.json);
		
			this.json = data.json;
		});
	}


	*/

 
}
}
