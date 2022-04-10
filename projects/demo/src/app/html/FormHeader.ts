import { Component } from '@angular/core';
import { BaseForm } from '../forms/BaseForm';

@Component({
  selector: 'formheader',
  templateUrl: './FormHeader.html'
})


export class FormHeader
{
    public form:BaseForm = null;

    constructor()
    {
		this.form = BaseForm.current;
    }
}