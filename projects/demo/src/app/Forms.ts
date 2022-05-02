import { FormsModule, ModuleDefinition } from 'forms';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Menu } from './Menu';
import { Minimized } from './Minimized';
import { Countries } from './forms/Countries';
import { FormHeader } from './html/FormHeader';
import { PageFooter } from './html/PageFooter';
import { PageHeader } from './html/PageHeader';

@Component({
  selector: 'forms-root',
  templateUrl: './Forms.html'
})

@ModuleDefinition(
	[
        {class: Countries, path: "/countries"},
        {class: FormHeader, path: "/html/formheader"},
        {class: PageHeader, path: "/html/pageheader"},
        {class: PageFooter, path: "/html/pagefooter"},
	]
)

export class Forms extends FormsModule implements OnInit
{
    public menu:Menu = null;
    public list:Minimized = null;

	constructor(public viewref:ViewContainerRef)
	{
		super(viewref);
	}

	public ngOnInit(): void
	{
		this.parse();
        this.menu = new Menu();
		this.list = new Minimized();

		this.test();
	}

	public test()
	{
		Forms.get().getApplication().showform("/countries");
	}
}
