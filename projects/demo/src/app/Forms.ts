import { FormsModule, ModuleDefinition } from 'forms';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

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

export class Forms extends FormsModule implements OnInit
{
	private page$:HTMLDivElement = null;
	@ViewChild("page",{read: ElementRef, static: true}) private pelem:ElementRef;

	constructor(viewref:ViewContainerRef)
	{
		super(viewref);
		//this.test();
	}

	public ngOnInit(): void
	{
		this.page$ = this.pelem.nativeElement;
		console.log("page: "+this.page$.innerHTML)
	}

	public test()
	{
		let root:HTMLElement = document.querySelector(".page");
		Forms.get().getApplication().showform("/countries");
	}
}
