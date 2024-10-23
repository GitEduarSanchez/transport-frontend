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
    path: 'producto',
    loadChildren: () =>
      import('./components/producto/producto/producto.routes').then(
        (x) => x.PRODUCTO_ROUTES
      ),
  },
];
