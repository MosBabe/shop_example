import { Injectable } from '@angular/core';
declare let alertify: any;

//This service is a global service
//We add this service to providers in app.module.ts rather than writing providedIn:'root'. These are sharing same functionality, making service global.
@Injectable()
//{
//providedIn: 'root'
//}
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }
}
