import { Form } from 'forms';
import { Component, ElementRef } from '@angular/core';

@Component({template: ''})


export class BaseForm extends Form
{
    constructor(elem:ElementRef)
    {
        super(elem);
    }
}