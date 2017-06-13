import { Injectable } from '@angular/core'

declare let toastr:any

@Injectable()

export class ToastrService {




    success(message: string, title?: string) {
     
toastr.options = {
  "closeButton": true,

 
  "timeOut": "2000",
  "closeHtml" : '<button><i class="icon-off"></i></button>'
  

}
   
  
        toastr.success(message, title)
           
    }
    info(message: string, title?: string) {
        toastr.info(message, title)
    }
    warning(message: string, title?: string) {
        toastr.warning(message, title)
    }
    error(message: string, title?: string) {
        toastr.error(message, title)
    }
}