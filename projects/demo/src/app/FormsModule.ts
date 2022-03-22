import { FormsRoot } from './FormsRoot';
import { FormsModule as CoreModule } from 'forms';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule, ViewContainerRef } from '@angular/core';

import { Countries } from './forms/Countries';
import { PageHeader } from './html/PageHeader';
import { PageFooter } from './html/PageFooter';


@NgModule({
  declarations: [FormsRoot, PageHeader, PageFooter, Countries],
  imports:      [BrowserModule, CoreModule],
  bootstrap:    [FormsRoot], schemas: [NO_ERRORS_SCHEMA]
})

export class FormsModule extends CoreModule
{
	public test()
	{
		this.getApplication().showform("/countries");
	}
}
