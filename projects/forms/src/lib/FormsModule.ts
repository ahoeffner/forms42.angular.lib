import { Form } from './Form';
import { Builder } from './Builder';
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

import { ComponentFactory } from './ComponentFactory';
import { NgModule, ViewContainerRef } from '@angular/core';
import { FormsModule as CoreModule, Properties } from 'forms42core';


@NgModule({
  declarations: [Form],
  imports:      [],
  exports:      [Form]
})


export class FormsModule extends CoreModule
{
	constructor()
	{
		super();
		Properties.parseTags = false;
		Properties.parseEvents = false;
	}

	public static setViewRef(viewref:ViewContainerRef) : void
	{
		let builder:Builder = new Builder(viewref);
		Properties.FactoryImplementationClass = new ComponentFactory(builder);
	}
}
