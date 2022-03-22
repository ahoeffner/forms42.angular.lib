import { Form } from './Form';
import { Builder } from './Builder';
import { Class } from 'forms42core/src/types/Class';
import { ComponentFactory as Factory, Include} from 'forms42core';

export class ComponentFactory implements Factory
{
    constructor(private builder:Builder)
    {
    }

    public createBean(bean: Class<any>)
    {
        return(new bean());
    }

    public createForm(form: Class<Form>) : Form
    {
        throw new Error('Method not implemented.');
    }

    public createFragment(frag: Class<any>): Include
    {
        throw new Error('Method not implemented.');
    }

    public destruct(component:any) : void
    {
    }
}