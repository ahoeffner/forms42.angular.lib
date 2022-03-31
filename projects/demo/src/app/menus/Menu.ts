import { Main } from "../Main";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'menu',
    template: '<div #menu></div>'
  })


export class Menu implements OnInit
{
	private disp:boolean = false;
	private menu:HTMLDivElement = null;

  	private attributes$:Map<string,string> = new Map<string,string>();
	@ViewChild("menu",{read: ElementRef, static: true}) private melem:ElementRef;

	constructor(elem:ElementRef)
	{
		Main.menu = this;

		let tag:HTMLElement = elem.nativeElement;
		tag.getAttributeNames().forEach((attr:string) =>
		{
			if (!attr.startsWith("_"))
			{
				let value:string = tag.getAttribute(attr);
				this.attributes$.set(attr,value);
			}
		});
	}


	public ngOnInit(): void
	{
		this.menu = this.melem.nativeElement;
		let tag:HTMLElement = this.menu.parentElement;

		let parent:HTMLElement = tag.parentElement;

		tag.remove();
		this.menu = document.createElement("div");

		this.attributes$.forEach((attr,name) =>
		{this.menu.setAttribute(name,attr);});

		parent.appendChild(this.menu);
	}

	public showmenu(name:string) : void
	{
		if (this.disp) this.menu.firstChild.remove();
		else this.menu.appendChild(document.createTextNode("show menu: "+name));
		this.disp = !this.disp;
	}
}