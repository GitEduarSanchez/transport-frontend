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
    path: 'control-viaje',
    loadChildren: () =>
      import('./components/ControlViaje/control-viaje/control-viaje.routes').then(
        (x) => x.CONTROLVIAJE_ROUTES
      ),
  },
];
