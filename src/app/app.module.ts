import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayListComponent } from './play-list/play-list.component';
import { CardContentComponent } from './play-list/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    CardContentComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
