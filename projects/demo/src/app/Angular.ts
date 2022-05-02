import { Forms } from './Forms';
import { FormTags } from 'forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Countries } from './forms/Countries';



@NgModule({
	bootstrap		: [Forms],
	imports			: [BrowserModule, FormTags],
	declarations	: [Forms, Countries]
})


export class Angular
{
}
