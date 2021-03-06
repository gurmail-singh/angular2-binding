import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'app',
    template: `
    <section class="parent">
        <h2> This is the parent component</h2>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name">
        <br><br>        
        <section class="child">
            <my-property-binding [myName]="name" [myAge]="26"></my-property-binding>            
        </section>
     </section>
        
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name = '';

}
