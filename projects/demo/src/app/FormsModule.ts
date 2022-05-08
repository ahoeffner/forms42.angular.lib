import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormsModule as FormsCoreModule, ModuleDefinition } from 'forms42angular';

import { Menu } from './Menu';
import { Minimized } from './Minimized';
import { Properties } from 'forms42core';

import { Countries } from './forms/Countries';
import { FormHeader } from './html/FormHeader';
import { PageFooter } from './html/PageFooter';
import { PageHeader } from './html/PageHeader';

@Component({
  selector: 'forms-root',
  templateUrl: './Main.html'
})

@ModuleDefinition(
	[
        {class: Countries, path: "/countries"},
        {class: FormHeader, path: "/html/formheader"},
        {class: PageHeader, path: "/html/pageheader"},
        {class: PageFooter, path: "/html/pagefooter"},
	]
)

export class FormsModule extends FormsCoreModule implements OnInit
{
    public menu:Menu = null;
    public list:Minimized = null;

	constructor(public viewref:ViewContainerRef)
	{
		super(viewref);
		Properties.AttributePrefix = "frm.";
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
		FormsModule.get().getApplication().showform("/countries");
	}
}
