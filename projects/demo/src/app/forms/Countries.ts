import { BaseForm } from './BaseForm';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './Countries.html'
})


export class Countries extends BaseForm
{
	constructor(elem:ElementRef)
	{
		super(elem);
	}
}