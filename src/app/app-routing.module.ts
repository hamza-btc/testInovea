import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmodeledetailComponent } from './components/listmodeledetail/listmodeledetail.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Viewimagedetaille/:imageid', component: ListmodeledetailComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 
}
