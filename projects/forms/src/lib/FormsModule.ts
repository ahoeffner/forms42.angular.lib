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

import { Builder } from './Builder';
import { ComponentFactory } from './ComponentFactory';
import { ViewContainerRef } from '@angular/core';
import { FormsModule as CoreModule, Properties } from 'forms42core';


export class FormsModule extends CoreModule
{
	public static override get() : FormsModule
	{
		return(CoreModule.get() as FormsModule);
	}


	constructor(viewref:ViewContainerRef)
	{
		super();
		Properties.EventPrefix = "frm.";
		let builder:Builder = new Builder(viewref);
		Properties.FactoryImplementationClass = new ComponentFactory(builder);
	}
}
