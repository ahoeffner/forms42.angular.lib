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
			// Trim and get rid of angular custom tag
			
			let element:HTMLElement = document.createElement('div');
			element.innerHTML = page.innerHTML;

			let remove:number[] = [];

			for(let i=0; i < element.childNodes.length; i++)
			{
				let node:Node = element.childNodes.item(i);
				if (node.nodeType == Node.TEXT_NODE && node.textContent.trim() == "")
					remove.unshift(i);
			}

			for(let i=0; i < remove.length; i++)
				element.childNodes.item(remove[i]).remove();

			if (element.childNodes.length == 1)
				element = element.childNodes.item(0) as HTMLElement;

			super.setLayout(element);
			page.remove();
		}
	}
}
