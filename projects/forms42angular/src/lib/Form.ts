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

import { Component} from '@angular/core';
import { Form as CoreForm } from 'forms42core';

@Component({template: ''})

/*
 * The setLayout is called from component factory
 */

export class Form extends CoreForm
{
	constructor()
	{
		super();
	}

	public override setLayout(page:string|HTMLElement) : void
	{
		if (typeof page === 'string')
		{
			super.setLayout(page);
		}
		else
		{
			let element:HTMLElement = document.createElement('div');
			element.innerHTML = page.innerHTML;
			console.log(page.nodeName+" "+element.nodeName)
			super.setLayout(element);
		}
	}
}
