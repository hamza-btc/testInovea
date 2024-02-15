import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmodeledetailComponent } from './components/listmodeledetail/listmodeledetail.component';
import { ListmodeleComponent } from './components/listmodele/listmodele.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/ajoutmodele/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  // { path: '', redirectTo :'/home', pathMatch:'full'},
  { path: '', component : ListmodeleComponent},
  { path: 'home', component : ListmodeleComponent},
  { path: 'about', component : AboutComponent},
  { path: 'contact', component : ContactComponent},
  {path: '**', component: NotfoundComponent}
  
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 
}
