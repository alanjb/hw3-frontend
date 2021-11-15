import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,  } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from './survey';

@Component({
  selector: 'survey-component',
  templateUrl: '../survey/survey.component.html',
  styleUrls: ['../survey/survey.component.css']
})
export class SurveyComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  serverUrl = "http://ec2-3-143-235-208.us-east-2.compute.amazonaws.com/SWE645SurveyService"; //need to update this!
  surveysEndpoint = "/surveys";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  Recommend = ["Likely", "Very Likely", "Unlikely"];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      likeStudents: false,
      likeLocation: false,
      likeCampus: false,
      likeAtmos: false,
      likeDorm: false,
      likeSports: false,
      howInterest: 0,
      recommend: null,
      raffle: [''],
      comments: ['']
    })
  }

  ngOnInit() { }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submitSurvey(): void {
    this.submitted = true;

    const object: Survey = {
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      street: this.form.get('street')?.value,
      city: this.form.get('city')?.value,
      state: this.form.get('state')?.value,
      zip: this.form.get('zip')?.value,
      tel: this.form.get('tel')?.value,
      email: this.form.get('email')?.value,
      date: this.form.get('date')?.value,
      likeStudents: this.form.get('likeStudents')?.value,
      likeLocation: this.form.get('likeLocation')?.value,
      likeCampus: this.form.get('likeCampus')?.value,
      likeAtmos: this.form.get('likeAtmos')?.value,
      likeDorm: this.form.get('likeDorm')?.value,
      likeSports: this.form.get('likeSports')?.value,
      howInterest: this.form.get('howInterest')?.value,
      recommend: this.form.get('recommend')?.value === 'Likely' ? 0 : (this.form!.get('recommend')?.value === 'Very Likely') ? 1 : 2,
      raffle: this.form.get('raffle')?.value,
      comments: this.form.get('comments')?.value
    };

    this.http
      .post(this.serverUrl + this.surveysEndpoint, object, { headers: this.headers })
      .subscribe(
        response => {
          alert('Success! Survey submitted');
          this.onReset();
        },
      (error) => alert('Error! There was an issue submitting your survey response'))
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
