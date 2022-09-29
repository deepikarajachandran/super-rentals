import Route from '@ember/routing/route';

export default class RentalsMansionRoute extends Route {

  async model(params) {
    // console.log(params.rental_id);
    let response = await fetch('/api/index');
    let responsedata = {};
    responsedata = await response.json();
    // for(let i=0;i<responsedata.data.length;i++){
    //     if(params.rental_id==responsedata.data[i].id){
    //         console.log(responsedata.data[i]);
    //         return responsedata.data[i];
    //     }
    // }
    return responsedata.data.find(element => element.id == params.rental_id);
  }
}
