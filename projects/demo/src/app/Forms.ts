import { FormsModule, ModuleDefinition } from 'forms';
import { Component, ViewContainerRef } from '@angular/core';

import { Countries } from './forms/Countries';

@Component({
  selector: 'forms-root',
  templateUrl: './forms.html'
})

@ModuleDefinition(
	[
        {class: Countries, path: "/countries"}
	]
)

export class Forms extends FormsModule
{
	constructor(viewref:ViewContainerRef)
	{
		super(viewref);
		//this.test();
	}


	public test()
	{
		let root:HTMLElement = document.querySelector(".page");
		Forms.get().getApplication().showform("/countries");
	}
}
