import { Component } from '@angular/core';
import { Main } from '../Main';

@Component({
  selector: 'pageheader',
  templateUrl: './PageHeader.html'
})


export class PageHeader
{
    public showmenu(name:string) : void
    {
		Main.menu.showmenu(name);
    }
}