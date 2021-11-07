import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
        let recordedSurveysResponse: any;
        recordedSurveysResponse = surveys;

        recordedSurveysResponse.forEach((e: any) => {
          if (e.howInterest === 0) {
            e.howInterest = 'friend';
          }
          else if (e.howInterest === 1) {
            e.howInterest = 'television';
          }
          else if (e.howInterest === 2) {
            e.howInterest = 'internet';
          }
          else if(e.howInterest === 3){
            e.howInterest = 'other';
          }

          if (e.recommend === 0) {
            e.recommend = 'Likely';
          }
          else if (e.recommend === 1) {
            e.recommend = 'Very Likely';
          }
          else if (e.recommend === 2){
            e.recommend = 'UnLikely';
          }

          this.recordedSurveys = recordedSurveysResponse;
        });
      }),
      (error: any) => console.log(error);
  }
}
