import { BaseForm } from './BaseForm';
import { Component } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './Countries.html'
})


export class Countries extends BaseForm
{
	public override title:string = "Countries";
}