import { Component } from '@angular/core';

@Component({
  selector: 'pageheader',
  templateUrl: './PageHeader.html'
})


export class PageHeader
{
    public showmenu() : void
    {
        console.log("showmenu");
    }
}