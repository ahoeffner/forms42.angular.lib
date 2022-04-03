import { FormsModule, ModuleDefinition } from 'forms';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Countries } from './forms/Countries';

@Component({
  selector: 'forms-root',
  templateUrl: './Forms.html'
})

@ModuleDefinition(
	[
        {class: Countries, path: "/countries"}
	]
)

export class Forms extends FormsModule implements OnInit
{
	constructor(viewref:ViewContainerRef)
	{
		super(viewref);
	}

	public ngOnInit(): void
	{
		let root:HTMLElement = document.querySelector(".form-area");
		this.setRootElement(root);
		this.test();
	}

	public test()
	{
		Forms.get().getApplication().showform("/countries");
	}
}
