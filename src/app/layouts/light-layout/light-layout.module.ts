import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';

import { LightLayoutRoutes } from './light-layout.routing';

import { LoginComponent } from 'app/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LightLayoutRoutes),
    FormsModule,
    LbdModule
  ],
  declarations: [LoginComponent]
})
export class LightLayoutModule {}
