import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../survey';

@Component({
  selector: 'surveys-component',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  serverUrl = "http://ec2-3-143-235-208.us-east-2.compute.amazonaws.com/SWE645SurveyService";
  surveysEndpoint = "/surveys";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  recordedSurveys: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get(this.serverUrl + this.surveysEndpoint, { headers: this.headers })
      .subscribe(surveys => {

        this.recordedSurveys = surveys;
      }),
      (error: any) => console.log(error);
  }
}
