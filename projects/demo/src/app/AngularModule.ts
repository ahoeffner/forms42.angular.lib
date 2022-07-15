import { FormTags } from 'forms42angular';
import { NgModule } from '@angular/core';
import { FormsModule } from './FormsModule';
import { BrowserModule } from '@angular/platform-browser';

import { Fields } from './forms/Fields';
import { Countries } from './forms/Countries';



@NgModule({
	bootstrap		: [FormsModule],
	imports			: [BrowserModule, FormTags],
	declarations	: [FormsModule, Countries, Fields]
})


export class AngularModule
{
}
