import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


//const httpOptions = {
//  headers: new HttpHeaders({'Content-Type': 'application/json'})
//  };

let header = new HttpHeaders();
header.append('Content-Type', 'application/json');
header.append('Access-Control-Allow-Origin', '*');
header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');


const httpOptions = {
  headers: header
};

//const apiUrl = "http://localhost/waterapp/api/";
// const apiUrl = "http://192.168.0.101:8100"
 const apiUrl = "https://www.onlinesh.in/waterapp/api/";

@Injectable({
  providedIn: 'root',

})
export class TicketApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }




  getTickets(user_id: string): Observable<any> {
    const url = `${apiUrl}gettickets.php?user_id=` + user_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );


  }
  getAssignedTickets(engineer_id: string): Observable<any> {
    const url = `${apiUrl}gettickets.php?user_id=` + engineer_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );


  }
  remind(ticket_id: string): Observable<any> {
    const url = `${apiUrl}remind.php?ticket_id=` + ticket_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );


  }

  createTicket(name: string, father_name: string, city: string, phone: string, email: string, description: string, image: string, user_id: string): Observable<any> {
    const url = `${apiUrl}createticket.php?name=` + name + "&father_name=" + father_name + "&city=" + city + "&phone=" + phone + "&email=" + email + "&description=" + description + "&image=" + image + "&user_id=" + user_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  createSuggestions(suggestion: string, user_id: string): Observable<any> {
    const url = `${apiUrl}createsuggestion.php?suggestion=` + suggestion + "&user_id=" + user_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  createfeedback(complaint_number: string, star: number, feedback: string, user_id: string): Observable<any> {
    const url = `${apiUrl}createfeedback.php?complaint_number=` + complaint_number + "&star=" + star + "&feedback=" + feedback + "&user_id=" + user_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  markComplete(ticket_id: string, remarks : string): Observable<any> {
    const url = `${apiUrl}markcomplete.php?ticket_id=`+ ticket_id+'&remarks='+remarks;

    console.log(url);
    let data = JSON.stringify({

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  trackComplaint(complaint_number: string, mobile: string): Observable<any> {
    const url = `${apiUrl}trackcomplaint.php?ticket_id=` + complaint_number + "&mobile=" + mobile;

    console.log(url);
    let data = JSON.stringify({

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  assignTicket(new_engineer_id: string, ticket_id: string): Observable<any> {
    const url = `${apiUrl}assignticket.php?new_engineer_id=` + new_engineer_id + "&ticket_id=" + ticket_id;

    console.log(url);
    let data = JSON.stringify({

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  signUp(name: string, phone: string, email: string, password: string, usertype: number): Observable<any> {
    const url = `${apiUrl}signup.php?name=` + name + "&phone=" + phone + "&email=" + email + "&password=" + password + "&type=" + usertype;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }
  updateUser(name: string, phone: string, email: string , user_id : string): Observable<any> {
    const url = `${apiUrl}updateuser.php?name=` + name + "&phone=" + phone + "&email=" + email + "&user_id="+user_id;

    let data = JSON.stringify({
      "name": "bilal"
    });
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }


  Login(email: string, password: string): Observable<any> {
    const url = `${apiUrl}login.php?email=` + email + '&password=' + password;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }



  getUser(user_id: string): Observable<any> {
    const url = `${apiUrl}getuser.php?user_id=` + user_id;

    console.log(url);
    let data = JSON.stringify({
      "name": "bilal"

    });
    //console.log("data "+data);
    return this.http.post(url,
      data
      , httpOptions)
      .pipe(
        catchError(this.handleError)
      );


  }
}
