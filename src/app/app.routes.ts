import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((x) => x.AdminModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin/donuts',
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];
