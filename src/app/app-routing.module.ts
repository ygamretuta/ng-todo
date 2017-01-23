import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtgComponent } from './mtg/mtg.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'mtg',
    component: MtgComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [MtgComponent, TodoComponent];
