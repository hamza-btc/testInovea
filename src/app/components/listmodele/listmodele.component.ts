import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-listmodele',
  templateUrl: './listmodele.component.html',
  styleUrl: './listmodele.component.css'
})
export class ListmodeleComponent implements OnInit {

  images: Model[] = [];
  resultimages: Model[] = [];

  constructor(private imageService:ImagesService ) { }


  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageService.getAll()
        .subscribe(images => {
          this.resultimages = this.images = images
        })
  }

}
