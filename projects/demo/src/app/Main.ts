import { Forms } from './Forms';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { Menu } from './menus/Menu';
import { Countries } from './forms/Countries';
import { PageHeader } from './html/PageHeader';
import { PageFooter } from './html/PageFooter';
import { FormHeader } from './html/FormHeader';


@NgModule({
	imports:      [BrowserModule],
	bootstrap:    [Forms], schemas: [NO_ERRORS_SCHEMA],
	declarations: [Forms, Menu, PageHeader, PageFooter, FormHeader, Countries]
})


export class Main
{
	public static menu:Menu = null;
}
