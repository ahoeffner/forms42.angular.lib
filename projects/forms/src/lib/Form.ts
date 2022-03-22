import { Form as Form42 } from 'forms42core';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({template: ''})

export class Form extends Form42 implements OnInit
{
  constructor(private elem:ElementRef)
  {
    super();
  }

  public ngOnInit() : void
  {
    console.log("setPage('"+this.elem.nativeElement.innerHTML+")");
    this.setPage(this.elem.nativeElement.innerHTML);
  }
}
