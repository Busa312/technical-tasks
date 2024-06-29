import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-1',
    pathMatch: 'full',
  },
  {
    path:'task-1',
    loadChildren: () =>  import('./features/task-1/task-1.module').then(m => m.Task1Module)
  }, {
    path:'task-2',
    loadChildren: () =>  import('./features/taks-2/taks-2.module').then(m => m.Taks2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
