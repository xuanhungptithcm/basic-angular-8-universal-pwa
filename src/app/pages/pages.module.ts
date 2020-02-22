import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';

const MODULE = [ThemeModule, NbMenuModule];

@NgModule({
  imports: [CommonModule, PagesRoutes, ...MODULE],
  declarations: [PagesComponent]
})
export class PagesModule {}
