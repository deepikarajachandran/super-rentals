import Controller from '@ember/controller';
import {action} from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked list='';
  // @tracked displaylist=this.model;
  body = "We hope you find exactly what you're looking for in a place to stay.";
  buttonname = 'About Us';
  
  // @action 
  get filterList(){
    // console.log(this.list);
    // console.log(this.model.id);
    // console.log(this.model.data[0].id);
    // this.displaylist=this.model.filter((el) => el.id.toLowerCase().includes(this.list.toLowerCase()))
    return this.model.filter((el) => el.id.toLowerCase().includes(this.list.toLowerCase()))
  }
}
