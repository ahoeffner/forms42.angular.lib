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

export class Main extends FormsModule implements OnInit
{
    public menu:Menu = null;
    public list:Minimized = null;

	constructor(public viewref:ViewContainerRef)
	{
		super(viewref);
	}

	public ngOnInit(): void
	{
		let doc:HTMLElement = this.viewref.element.nativeElement as HTMLElement;
		this.setRootElement(doc);

		this.parse();
        this.menu = new Menu();
		this.list = new Minimized(doc);

		this.test();
	}

	public test()
	{
		Main.get().getApplication().showform("/countries");
	}
}
