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
    loadChildren: () =>  import('./features/task-2/taks-2.module').then(m => m.Taks2Module)
  },
  {
    path:'task-3',
    loadChildren: () => import('./features/task-3/task-3.module').then(m => m.Task3Module)
  },
  {
    path:'task-4',
    loadChildren: () => import('./features/task-4/task-4.module').then(m => m.Task4Module)
  },
  {
    path:'task-5',
    loadChildren: () => import('./features/task-5/task-5.module').then(m => m.Task5Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
