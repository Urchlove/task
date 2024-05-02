import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './component/task/task.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
{
  path: '',
  component: TaskComponent
},
{
path: 'about',
component: AboutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
