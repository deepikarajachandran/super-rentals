import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object'

export default class CardComponent extends Component {
    @tracked buttonclick=false;

    @action 
    clickevent(){
        if(this.buttonclick==false){
            this.buttonclick=true;
        }
        else{
            this.buttonclick=false;
        }
        // this.buttonclick=!this.buttonclick
    }
}
