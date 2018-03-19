import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import {PersonalInfo} from './Models/PersonalInfo';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ProjectModalComponent} from './project-modal/project-modal.component';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    "./app.component.css"
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  userObservable: Observable<any[]>;
  educationObservable: Observable<any[]>;
  title = 'app';
  latitude:number = 20.3492;
  longitude:number = 85.8077;
  skillsObservable: Observable<any[]>;
  projectsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal) {
   }

  ngOnInit() {
    this.skillsObservable = this.getSkills('/Skills');
    this.educationObservable = this.getEducation('/Education');
    this.userObservable = this.getEducation('/User');
    this.projectsObservable = this.getProjects('/Projects');
    var mapProp = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
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

  getProjects(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getMap(listPath): Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }

  openProjectModal(project) {
    let modal = this.modalService.open(ProjectModalComponent);
    modal.componentInstance.projectName = project.Name;
    modal.componentInstance.projectDuration = project.Duration;
    modal.componentInstance.projectDescription = project.Description;

  }
}
