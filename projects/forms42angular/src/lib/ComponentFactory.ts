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
import { Class } from 'forms42core/src/types/Class';
import { ComponentRef, EmbeddedViewRef } from '@angular/core';
import { ComponentFactory as CoreFactory, Include} from 'forms42core';

export class ComponentFactory implements CoreFactory
{
    constructor(private builder:Builder)
    {
    }

    public createBean(bean:Class<any>)
    {
        return(new bean());
    }

    public createForm(form:Class<Form>) : Form
    {
        let ref:ComponentRef<any> = this.builder.createComponent(form);
        let view:HTMLElement = (ref.hostView as EmbeddedViewRef<any>).rootNodes[0];
        (ref.instance as Form).setLayout(view);
        return(ref.instance);
    }


    public createFragment(bean:Class<any>) : Include
    {
        let ref:ComponentRef<any> = this.builder.createComponent(bean);
        let view:HTMLElement = (ref.hostView as EmbeddedViewRef<any>).rootNodes[0];
        (ref.instance as Include).content = view;
        return(ref.instance);
    }
}