import { Component } from '@angular/core';

@Component({
  selector: 'pageheader',
  templateUrl: './PageHeader.html'
})


export class PageHeader
{
    public showmenu(menu:string) : void
    {
        console.log("showmenu");
    }
}