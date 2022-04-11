import { BaseForm } from '../forms/BaseForm';
import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Main } from '../Main';

@Component({
  selector: 'pagefooter',
  templateUrl: './PageFooter.html'
})


export class PageFooter implements OnInit, EventListenerObject
{
	private list:HTMLElement = null;
	private icon:HTMLImageElement = null;
    private forms:Map<string,BaseForm> = new Map<string,BaseForm>();
	@ViewChild("formlist",{read: ElementRef, static: true}) private felem:ElementRef;

	public ngOnInit(): void
	{
		Main.list = this;
		this.list = this.felem.nativeElement;
		this.icon = this.list.querySelector("img");
	}

    public add(form:BaseForm) : void
    {
        let icon:HTMLImageElement = this.icon.cloneNode() as HTMLImageElement;

        icon.id = form.id;
        icon.style.width = "32px";
        icon.style.height = "32px";
        icon.style.display = "flex";
        icon.style.marginTop = "2.5px";
        icon.style.marginLeft = "1.5px";
        icon.style.marginRight = "1.5px";
        icon.addEventListener("click",this);

        this.list.appendChild(icon);
        this.forms.set(form.id,form);
    }

    public handleEvent(event:Event): void
    {
        let icon:Element = event.target as Element;
        let form:BaseForm = this.forms.get(icon.id);

        form.show();
        icon.remove();

        this.forms.delete(icon.id);
    }
}