import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiUrlService  {
  state: any = "a"
  RACINE_API: any = ""
  PORT_API: any = ""
  CHEMIN_RACINE_SERVER: any = ""
  REST_API: any = ""


  constructor() { 
    this.urlState(this.state)
  }
  
  urlState(param:any) {

    if (param == "a") {
      /*config lors développement local */
      this.RACINE_API = 'localhost';
      this.PORT_API = '3000';
    } else {
      /*config lors déploiement server*/
      this.RACINE_API = '192.168.12.236';
      this.PORT_API = '91';
    }

    this.REST_API = 'http://' + this.RACINE_API + ':' + this.PORT_API + '/login_api';

  } 
}

