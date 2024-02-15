import { Component, EventEmitter, inject, OnInit, Output, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Model } from '../../models/model';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  modelList:Model[]=[];
  filtermodelList:Model[]=[];
  searchText = '';
  showModal:boolean
constructor(){}

@Output() searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

searchModel() {
    this.searchTextChanged.emit(this.searchText)
}



  ngOnInit(): void {}

 
}
