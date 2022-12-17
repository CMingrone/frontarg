import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CardEducacionComponent } from './components/card-educacion/card-educacion.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortadaComponent,
    EducacionComponent,
    CardEducacionComponent,
    HerramientasComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
