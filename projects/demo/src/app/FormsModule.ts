import { FormsLibrary } from 'forms';
import { FormsRoot } from './FormsRoot';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { Countries } from './forms/Countries';
import { PageHeader } from './html/PageHeader';
import { PageFooter } from './html/PageFooter';


@NgModule({
  declarations: [FormsRoot, PageHeader, PageFooter, Countries],
  imports:      [BrowserModule, FormsLibrary],
  bootstrap:    [FormsRoot], schemas: [NO_ERRORS_SCHEMA]
})

export class FormsModule
{
}
