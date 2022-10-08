import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastrService: ToastrService) {}

  showSuccess(msg: string) {
    this.toastrService.success(msg);
  }

  showError(msg: string) {
    this.toastrService.error(msg);
  }
}
