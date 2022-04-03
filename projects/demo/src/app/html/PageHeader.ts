import { Main } from '../Main';
import { Menu } from '../menus/Menu';
import { Component } from '@angular/core';

@Component({
  selector: 'pageheader',
  templateUrl: './PageHeader.html'
})


export class PageHeader
{
    public get menu() : Menu
    {
		  return(Main.menu);
    }
}