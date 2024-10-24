import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessage.component.html',
  standalone: true,
})
export class BackendErrorMessages implements OnInit {
  @Input() backendErrors: BackendErrorInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const message = this.backendErrors[name].join(' ');
      return `${name} ${message}`;
    });
  }
}
