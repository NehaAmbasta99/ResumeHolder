import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    "./app.component.css"
  ]
})
export class AppComponent implements OnInit {
  userObservable: Observable<any[]>;
  educationObservable: Observable<any[]>;
  title = 'app';
  skillsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.skillsObservable = this.getSkills('/Skills');
    this.educationObservable = this.getEducation('/Education');
    this.userObservable = this.getEducation('/User');
  }
  getSkills(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getEducation(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getUser(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
