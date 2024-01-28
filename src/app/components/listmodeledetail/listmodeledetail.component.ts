import { Component } from '@angular/core';
import { Model } from '../../models/model';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-listmodeledetail',
  templateUrl: './listmodeledetail.component.html',
  styleUrl: './listmodeledetail.component.css'
})
export class ListmodeledetailComponent {
  image: Model[] = [];
  img: Model;

  resultimages: Model[] = [];
  imageid: any;

  constructor(
    private route: ActivatedRoute,
    private imageService:ImagesService) { }


  ngOnInit(): void {
    this.getImagdetail();
  }


  getImagdetail(): void {
    this.imageid = this.route.snapshot.params['imageid'];
    this.imageService.getimageDetailById(this.imageid).
    subscribe(data => {
      this.img = data
    });
  }


}
