import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayListComponent } from './play-list/play-list.component';
import { CardContentComponent } from './play-list/card-content/card-content.component';
import { ArraySortPipe } from './play-list/sort.pipe';
import { CardService } from './services/card-service/card.service';
import { DndModule } from 'ng2-dnd';
import { DeleteModalComponent } from './play-list/delete-modal/delete-modal.component';
import { EditModalComponent } from './play-list/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    CardContentComponent,
    ArraySortPipe,
    DeleteModalComponent,
    EditModalComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot(),
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
