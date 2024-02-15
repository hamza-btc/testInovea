import { Component, ElementRef, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagesService } from '../../services/images.service';
import { Model } from '../../models/model';

@Component({
  selector: 'app-ajoutmodele',
  templateUrl: './ajoutmodele.component.html',
  styleUrl: './ajoutmodele.component.css'
})

export class AjoutmodeleComponent implements OnInit{
resultatadd : Model[] = [];
submitted = false;
@ViewChild('closeModal') closeModal: ElementRef

ngOnInit(){
	this.httpSerivce.getAll().subscribe(res=>{
		this.resultatadd = res;
		console.log('this.resultatad',this.resultatadd);
	})

}
constructor(private httpSerivce:ImagesService){}
addimage () {
	
}



 onSubmit(modelimage:Model) {
	console.log('form sumitted',modelimage);
	//  this.httpSerivce.addModels(modelimage).subscribe( res => {
	//  this.resultatadd = res;
	//  console.log('res',res)
	// }


}

// addModelImgae


}