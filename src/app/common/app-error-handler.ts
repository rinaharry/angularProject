import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

export class AppErrorHandler implements ErrorHandler {
    errors: any;

    handleError(error: HttpErrorResponse) {
        // alert('Une erreur inattendue s\'est produite.');
        console.log('Olana => ', error);
    }
}
