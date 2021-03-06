﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    // JSON header
    jsonHeader = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(private http: HttpClient) { }

    signup(user: User) {
        
        const body = {
            'email': user.email,
            'password': user.password,
            'first_name': user.firstName,
            'last_name': user.lastName,
            'phone_number': user.phoneNumber
        };

        console.log(JSON.stringify(body));
        
        return this.http.post(`${config.apiUrl}/users/signup/`, JSON.stringify(body), 
        {'headers':this.jsonHeader});
    }
}