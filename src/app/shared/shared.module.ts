import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/widgets/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GlassNavComponent } from './widgets/glass-nav/glass-nav.component';
import { LabCardComponent } from './widgets/lab-card/lab-card.component';
import { TextEditorComponent } from './widgets/text-editor/text-editor.component';
// import { CKEditorModule } from 'ckeditor4-angular';
import { Navbar2Component } from './widgets/navbar2/navbar2.component';








@NgModule({
  declarations: [
    NavbarComponent,
    GlassNavComponent,
    LabCardComponent,
    TextEditorComponent,
    Navbar2Component,
    
  ],
  imports: [
    CommonModule,
    RouterModule,

    // CKEditorModule
  ],
  exports: [
    NavbarComponent,
    GlassNavComponent,
    LabCardComponent,
    TextEditorComponent,
    Navbar2Component
  ],
  

})
export class SharedModule { }
