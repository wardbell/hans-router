// #docregion
import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService}         from './crisis.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [CrisisService]
})
@RouteConfig([
  {path:'/list',    name: 'CrisisList',   component: CrisisListComponent},//, useAsDefault: true},
  {path:'/detail/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisCenterComponent { }
// #enddocregion
