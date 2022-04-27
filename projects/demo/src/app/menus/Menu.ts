import { Angular } from "../Angular";
import { Denmark } from "./Denmark";
import { MenuHandler } from "forms42core";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'menu',
    template: '<div #menu></div>'
  })


export class Menu implements OnInit
{
	private menu:boolean = false;
	private handler:MenuHandler = null;
	private menuelem:HTMLDivElement = null;

  	private attributes$:Map<string,string> = new Map<string,string>();
	@ViewChild("menu",{read: ElementRef, static: true}) private melem:ElementRef;

	constructor(elem:ElementRef)
	{
		Angular.menu = this;

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
		this.menuelem = this.melem.nativeElement;
		let tag:HTMLElement = this.menuelem.parentElement;

		let parent:HTMLElement = tag.parentElement;

		tag.remove();
		this.menuelem = document.createElement("div");

		this.attributes$.forEach((attr,name) =>
		{this.menuelem.setAttribute(name,attr);});

		parent.appendChild(this.menuelem);
		this.handler = new MenuHandler(new Denmark(), this.menuelem);
	}

	public showmenu() : void
	{
        if (this.menu) this.handler.hide();
        else 		   this.handler.show();

        this.menu = !this.menu;
	}
}