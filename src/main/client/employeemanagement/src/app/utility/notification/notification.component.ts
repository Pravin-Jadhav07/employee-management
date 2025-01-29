import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [
    CommonModule
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

  @Input() message: string = ''; // Message to display
  @Input() autoCloseTime: number = 5000; // Auto-close time in ms (default: 5 seconds)
  showNotification: boolean = true;

  ngOnInit(): void {
    // Automatically close the notification after the specified time
    setTimeout(() => {
      this.closeNotification();
    }, this.autoCloseTime);
  }

  closeNotification(): void {
    this.showNotification = false;
  }

}
