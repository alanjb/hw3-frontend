import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'survey-component',
  templateUrl: '../survey/survey.component.html',
  styleUrls: ['../survey/survey.component.css']
})
export class SurveyComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
    })
  }

  ngOnInit() { }

  onSubmit() {
    var formData: any = new FormData();

    // @ts-ignore: Object is possibly 'null'.
    formData.append("name", this.form!.get('name').value);

    this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
