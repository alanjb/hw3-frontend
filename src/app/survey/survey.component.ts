import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'survey-component',
  templateUrl: '../survey/survey.component.html',
  styleUrls: ['../survey/survey.component.css']
})
export class SurveyComponent implements OnInit {
  form: FormGroup;
  serverUrl = "http://ec2-3-143-235-208.us-east-2.compute.amazonaws.com/SWE645SurveyService";
  surveysEndpoint = "/surveys";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  Recommend: string[] = ["Likely", "Very Likely", "Unlikely"];

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      streetAddress: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      telephone: [''],
      email: [''],
      date: [''],
      likeStudents: false,
      likeLocation: false,
      likeCampus: false,
      likeAtmosphere: false,
      likeDormRooms: false,
      likeSports: false,
      howInterest: null,
      recommend: null,
      raffle: [''],
      comments: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    let formData: any = new FormData();

    // @ts-ignore: Object is possibly 'null'.
    formData.append("firstName", this.form!.get('firstName').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("lastName", this.form!.get('lastName').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("streetAddress", this.form!.get('streetAddress').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("city", this.form!.get('city').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("state", this.form!.get('state').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("zipCode", this.form!.get('zipCode').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("telephone", this.form!.get('telephone').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("email", this.form!.get('email').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("date", this.form!.get('date').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("likeStudents", this.form!.get('likeStudents').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("likeLocation", this.form!.get('likeLocation').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("likeCampus", this.form!.get('likeCampus').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("likeAtmosphere", this.form!.get('likeAtmosphere').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("likeDormRooms", this.form!.get('likeDormRooms').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("likeSports", this.form!.get('likeAtmosphere').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("howInterest", this.form!.get('howInterest').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("recommend", this.form!.get('recommend').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("raffle", this.form!.get('raffle').value);

    // @ts-ignore: Object is possibly 'null'.
    formData.append("comments", this.form!.get('comments').value);

    // for (var key of formData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }

    this.http
      .post(this.serverUrl + this.surveysEndpoint, formData, { headers: this.headers })
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error))

    // console.log(this.form.controls.recommends.setValue)
  }

   // Choose city using select dropdown
  changeRecommend(e: any) {
    this.form.controls.recommends.setValue(e.target.value, {
      onlySelf: true
    })
  }

  getSurvey = () => {
    this.http
      .get(this.serverUrl + this.surveysEndpoint + "/" + 1, { headers: this.headers })
    .subscribe(
    (response) => console.log(response),
    (error) => console.log(error))
  }

  getSurveys = () => {
    this.http
    .get(this.serverUrl + this.surveysEndpoint, { headers: this.headers })
    .subscribe(
    (response) => console.log(response),
    (error) => console.log(error))
  }
}
