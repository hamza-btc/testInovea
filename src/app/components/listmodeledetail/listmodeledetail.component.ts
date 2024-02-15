import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Model } from '../../models/model';
import { ActivatedRoute, Params } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listmodeledetail',
  templateUrl: './listmodeledetail.component.html',
  styleUrl: './listmodeledetail.component.css'
})
export class ListmodeledetailComponent implements OnInit {
  model: Model[] = [];
  models? : Model[];
  bookList$: Observable<Model[]>;
  resultimages: undefined | Model;
  // imageid: any;

  constructor(
    private route: ActivatedRoute,
    private imageService:ImagesService) { }

     
  ngOnInit() {
    //  this.getImagdetail();
    // this.model = this.getImagdetail();
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log('*** id**',id)
    // this.models = this.imageService.getimageDetailById(id).subscribe((response)=> {
    //  response.id === id;
    //   console.log('this.img' ,response.id  );
    //   console.log('response',response);
    // })
  }
    // error =>{
    //   alert('error intaneduu');
    //   console.log(error)
    // })
  //   const gg = this.route.snapshot.params ;
  // // const vvv  = this.route.snapshot.params['id'];
  //   console.log('fff',gg);
  // }
 
    // const id = + this.route.snapshot.params['imageid'];
    // this.image = this.imageService.getimageDetailById(id)
  //   this.getImagdetail();
  // }


  getImagdetail() {
    const id = this.route.snapshot.paramMap.get('id');
    console.warn('*** id**',id)
    this.imageService.getimageDetailById(id).subscribe((response)=> {
      this.resultimages = response;
      console.log('this.img' ,response.id  );
      console.log('response',response);
    })
  }

}
