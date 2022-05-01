import { Forms } from './Forms';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { Countries } from './forms/Countries';



@NgModule({
	bootstrap		: [Forms],
	imports			: [BrowserModule],
	schemas			: [NO_ERRORS_SCHEMA],
	declarations	: [Forms, Countries]
})


export class Angular
{
	constructor()
	{
		console.log("new Angular")
	}
}
