import { Form } from 'forms';
import { View } from 'forms42core';
import { Component } from '@angular/core';
import { Main } from '../Main';

@Component({template: ''})


export class BaseForm extends Form
{
    public id:string = null;
    private view:View = null;
    private static forms:number = 0;
	public static current:BaseForm = null;

	constructor()
	{
		super();
		BaseForm.current = this;
        this.id = "f" + ++BaseForm.forms;
	}

    public toggle() : void
    {
        if (this.view == null)
        {
            this.view = this.canvas.getView();
            let avail:View = this.canvas.getParentView();

            avail.x = 0;
            avail.y = 0;
            avail.width = +avail.width - 2;
            avail.height = +avail.height - 2;

            this.canvas.setView(avail);
        }
        else
        {
            this.canvas.setView(this.view);
            this.view = null;
        }
    }

	public minimize() : void
    {
		Main.list.add(this);
		this.hide();
    }

    public hide() : void
    {
        this.canvas.remove();
    }

    public show() : void
    {
        this.canvas.restore();
    }
}