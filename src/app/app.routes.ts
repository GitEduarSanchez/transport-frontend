import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'conductor',
    loadChildren: () =>
      import('./components/conductor/conductor.routes').then(
        (x) => x.CONDUCTOR_ROUTES
      ),
  },
  {
    path: 'Ciudad',
    loadChildren: () =>
      import('./components/Ciudad/ciudad/Ciudad.routes').then(
        (x) => x.CIUDAD_ROUTES
      ),
  }
];
