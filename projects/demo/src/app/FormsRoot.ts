import { Component, ViewContainerRef } from '@angular/core';
import { FormsModule } from './FormsModule';

@Component({
  selector: 'forms-root',
  templateUrl: './FormsRoot.html'
})

export class FormsRoot
{
	constructor(viewref:ViewContainerRef)
	{
		FormsModule.setViewRef(viewref);
	}
}
