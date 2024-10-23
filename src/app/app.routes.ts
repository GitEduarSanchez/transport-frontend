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
    path: 'trailer',
    loadChildren: () =>
      import('./components/trailer/trailer.routes').then(
        (x) => x.TRAILER_ROUTES
      ),
  },
];
