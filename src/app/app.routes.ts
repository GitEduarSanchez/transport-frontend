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
    path: 'controlViajeProducto',
    loadChildren: () =>
      import('./components/control-viaje-producto/controlViajeProducto.routes').then(
        (x) => x.CONTROLVIAJEPRODUCTO_ROUTES
      ),
  },
];
