import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  public DismissReason = Swal.DismissReason;

  constructor(){}

  /** Muestra un popup confirmando la acción
   * @param question describe la acción que se desea confirmar
   * @param description texto que brinda información extra a la pregunta
   * @returns Promesa con el valor de la selección
   */
  public showConfirmAlert(question: string, description: string, closeButton= false,
                          confirmText= 'Aceptar', cancelText= 'Cancelar'): Promise<SweetAlertResult>{
      return new Promise((resolve, reject) => {
          Swal.fire({
              title: question,
              html: description,
              icon: 'warning',
              showCancelButton: true,
              showCloseButton: closeButton,
              cancelButtonText: cancelText,
              confirmButtonText: confirmText,
              customClass: {
                cancelButton: 'btn btn-danger',
                confirmButton: 'btn button-cap'
              },
              reverseButtons: true
            }).then(result => {
              resolve(result);
            }).catch(error => {
                reject(error);
            });
      });
  }

  /** Muestra una alerta con el icono de error
   * @param message mensaje a mostrar
   * @param title título del popup (aparece al inicio y en negrita)
   */
  public showErrorAlert(message: string, title: string= ''): Promise<SweetAlertResult>{
    return new Promise((resolve, reject) => {
      Swal.fire({
        icon: 'error',
        title,
        html: message,
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn button-cap'
        }
      }).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  /** Muestra una alerta indicando que se completó con éxito la acción
   * @param message mensaje a mostrar
   * @param title título del popup (aparece al inicio y en negrita)
   */
  public showSuccessAlert(message: string, title: string= ''): Promise<SweetAlertResult>{
    return new Promise((resolve, reject) => {
      Swal.fire({
        icon: 'success',
        title,
        text: message,
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn button-cap'
        },
        didOpen: (html:HTMLElement) => {
          let htmlBtns = html.getElementsByClassName("swal2-confirm");
          if (htmlBtns.item.length > 0) {
            let htmlBtn = htmlBtns.item(0) as HTMLButtonElement;
            htmlBtn.focus();
          }
        }
      }).then(result => {
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }

  /** Muestra una alerta indicando una advertencia
   * @param message mensaje a mostrar
   * @param title título del popup (aparece al inicio y en negrita)
   */
  public showWarningAlert(message: string, title: string= ''): Promise<SweetAlertResult>{
  return new Promise((resolve, reject) => {
    Swal.fire({
      icon: 'warning',
      title,
      text: message,
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'btn button-cap'
      }
    }).then(result => {
      resolve(result);
    }).catch(error => {
      reject(error);
    });
  });
  }

  /**
   * Muetra una alerta con el mensaje y título indicado
   * @param message Mensaje a mostrar
   * @param title Titulo que tendrá la alerta
   */
  public showMessageAlert(message: string, title: string= ''): Promise<SweetAlertResult> {
    return Swal.fire({
      title,
      text: message,
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'btn button-cap'
      }
    });
  }

  /**
   * Muestra una alerta con un campo de texto
   * @param message Mensaje a mostrar
   * @param title Título que tendrá la alerta
   */
  public showInputAlert(message: string, title: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title,
      text: message,
      input: 'text',
      //inputLabel: 'token',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      reverseButtons: true,
      customClass: {
        cancelButton: 'btn btn-danger',
        confirmButton: 'btn button-cap'
      },
      inputValidator: (value) => { if (!value) { return 'Debe ingresar un valor para continuar'; } else { return '' }}
    });
  }
}
