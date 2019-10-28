/*Modules*/
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms' ;
import { MatTableModule, MatPaginatorModule, MatCheckboxModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from '../app-routing.module';
import { Routes, RouterModule } from '@angular/router';

/*Components*/
import { AuthGuard } from '../guards';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { NumberTableComponent } from './number-table/number-table.component';
import { MapComponent } from './map/map.component';
import { PopupComponent } from './popup/popup.component';
import { ErrorComponent } from './error/error.component';
import { InfoHeaderComponent } from './infoheader/infoheader.component';


@NgModule({
  declarations: [
  	SidebarComponent,
  	HeaderComponent,
  	FooterComponent,
  	NavComponent,
  	NumberTableComponent,
  	MapComponent,
  	PopupComponent,
  	ErrorComponent,
    InfoHeaderComponent,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,    
    NgSelectModule,
    RouterModule
  ],

  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgSelectModule,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NumberTableComponent,
    MapComponent,
    PopupComponent,
    ErrorComponent,
    InfoHeaderComponent,
  ],
})
export class SharedModule { }
