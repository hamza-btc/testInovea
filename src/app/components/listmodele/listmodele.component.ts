import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { ImagesService } from '../../services/images.service';


@Component({
  selector: 'app-listmodele',
  templateUrl: './listmodele.component.html',
  styleUrl: './listmodele.component.css'
})
export class ListmodeleComponent implements OnInit {

  myDate  = new Date();
  searchText: string = '';
  images: Model[] = [];
  resultimages: Model[] = [];
  newresultimages: Model[]=[];
  selectedHero?: Model | undefined;

  constructor(
    private imageService:ImagesService){ }

  ngOnInit() {
    console.log('date now',this.myDate);
    this.getImages();
  }



  
  getImages() {
    this.imageService.getAll()
        .subscribe(images => {
          this.resultimages = this.images = images
        },error => {
          alert('error intandu')
          console.log(error)
        })
  }

  onSubmit(modelimage:Model) {
   const myDatte  = new Date();
    console.log('form sumitted',modelimage);
     this.imageService.addModels(modelimage).subscribe( res => {
      res.date= new Date();
      this.resultimages =  this.images = [res,...this.images];
     this.ngOnInit();
    })
  }

onSelect(hero: Model) {
  this.newresultimages.push(hero);
  }



deleteModele(model:Model){
  this.imageService.deleteModels(model.id).subscribe( res=>{
    this.images = this.resultimages.filter(item=>item.id !== model.id)
    this.ngOnInit();
  })
}

searchModel(searchvalue: string) {
  this.searchText = searchvalue;
  console.log('text change',this.searchText)
  this.resultimages  = this.images.filter((model => model.modelName.toLocaleLowerCase().includes(this.searchText.toLowerCase())));
}


}
