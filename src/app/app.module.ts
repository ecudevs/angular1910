import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TareaCardComponent } from "./tarea/tarea-card/tarea-card.component";
import { TareaPageComponent } from "./tarea/tarea-page/tarea-page.component";
import { TareaDetallePageComponent } from "./tarea/tarea-detalle-page/tarea-detalle-page.component";
import { TareaFormComponent } from "./tarea/tarea-form/tarea-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TareaCardComponent,
    TareaPageComponent,
    TareaDetallePageComponent,
    TareaFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
