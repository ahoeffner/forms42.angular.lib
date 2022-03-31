import { Main } from "../Main";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'countries',
    template: '<div #menu></div>'
  })


export class Menu implements OnInit
{
	private menu$:HTMLDivElement = null;
	@ViewChild("menu",{read: ElementRef, static: true}) private melem:ElementRef;

  constructor()
  {
    Main.menu = this;
  }


	public ngOnInit(): void
	{
		this.menu$ = this.melem.nativeElement;
	}

  public show() : void
  {
    this.menu$.innerHTML = "This is a menu";
  }
}