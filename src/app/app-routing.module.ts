import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { JuegoComponent } from './screens/juego/juego.component';
import { JuegoTerminadoComponent } from './screens/juego-terminado/juego-terminado.component';
import { TerminosCondicionesComponent } from './screens/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  //pantalla principal del login
  {
    path: '',
    component: LoginScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'registro',
    component: RegistroUsuariosScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeScreenComponent,
    pathMatch: 'full',
  },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'politica-privacidad', component: PoliticaPrivacidadScreenComponent, pathMatch: 'full' },
  { path: 'nuevo-look', component: NuevoLookScreenComponent, pathMatch: 'full' },
  { path: 'juego', component: JuegoComponent, pathMatch: 'full' },
  { path: 'juego-terminado', component: JuegoTerminadoComponent, pathMatch: 'full' },
  { path: 'terminos-condiciones', component: TerminosCondicionesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
