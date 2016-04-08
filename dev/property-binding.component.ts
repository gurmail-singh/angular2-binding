import {Component} from 'angular2/core'; 
@Component ({
    selector: 'my-property-binding',
    template: `
    <h2>This is the child compoenent</h2> 
    <p>Hey! {{myName}} im {{myAge}} years old</p>    
    `,    
    inputs: ['myName', 'myAge']
})
export class PropertyBindingComponent {
    myName = '';    
}