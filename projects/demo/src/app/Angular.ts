import { Main } from './Main';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { Countries } from './forms/Countries';



@NgModule({
	bootstrap		: [Main],
	imports			: [BrowserModule],
	schemas			: [NO_ERRORS_SCHEMA],
	declarations	: [Main, Countries]
})


export class Angular
{
	constructor()
	{
		console.log("new Angular")
	}
}
