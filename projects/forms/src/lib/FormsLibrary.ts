import { Form } from './Form';
import { NgModule } from '@angular/core';
import { FormsModule, Properties } from 'forms42core';
import { Builder } from './Builder';
import { ComponentFactory } from './ComponentFactory';


@NgModule({
  declarations: [Form],
  imports:      [],
  exports:      [Form]
})


export class FormsLibrary extends FormsModule
{
  constructor()
  {
    super();
    Properties.parseTags = false;
    Properties.parseEvents = false;
    //Properties.FactoryImplementationClass = new ComponentFactory(builder);
  }
}
