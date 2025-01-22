import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'seleccionar-libro',
    loadChildren: () => import('./pages/seleccionar-libro/seleccionar-libro.module').then( m => m.SeleccionarLibroPageModule)
  },
  {
    path: 'agradecimiento',
    loadChildren: () => import('./pages/agradecimiento/agradecimiento.module').then( m => m.AgradecimientoPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'escaneo',
    loadChildren: () => import('./pages/escaneo/escaneo.module').then( m => m.EscaneoPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./pages/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
  {
    path: 'login-arrendatario',
    loadChildren: () => import('./pages/login-arrendatario/login-arrendatario.module').then( m => m.LoginArrendatarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
