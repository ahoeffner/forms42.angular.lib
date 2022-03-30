import { Forms } from './Forms';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { Countries } from './forms/Countries';
import { PageHeader } from './html/PageHeader';
import { PageFooter } from './html/PageFooter';


@NgModule({
	imports:      [BrowserModule],
	bootstrap:    [Forms], schemas: [NO_ERRORS_SCHEMA],
	declarations: [Forms, PageHeader, PageFooter, Countries]
})


export class Main
{
}
