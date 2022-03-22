/*
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.

 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 */

import { Form } from './Form';
import { Builder } from './Builder';
import { ComponentRef } from '@angular/core';
import { Class } from 'forms42core/src/types/Class';
import { ComponentFactory as Factory, Include} from 'forms42core';

export class ComponentFactory implements Factory
{
    constructor(private builder:Builder)
    {
    }

    public createBean(bean: Class<any>)
    {
        return(new bean());
    }

    public createForm(form:Class<Form>) : Form
    {
        let ref:ComponentRef<any> = this.builder.createComponent(form);
        return(ref.instance);
    }

    public createFragment(frag: Class<any>): Include
    {
        throw new Error('Method not used with angular');
    }
}