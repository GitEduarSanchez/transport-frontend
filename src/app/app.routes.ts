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
    path: 'concepto',
    loadChildren: () =>
      import('./components/concepto/concepto.routes').then(
        (x) => x.CONCEPTO_ROUTES
      ),
  },
];
