import { Component } from '@angular/core';
import { NotificationRef } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-notification-options-content',
    template: `
        <fd-notification-header
            (closeButtonClick)="notificationRef.dismiss('Close Icon Click')"
            [type]="notificationRef.data.type"
        >
            <h3 fd-notification-title>{{ notificationRef.data.title }}</h3>
        </fd-notification-header>
        <fd-notification-body>
            <div fd-notification-content>
                <div fd-notification-avatar>
                    <fd-avatar size="s" [circle]="true" label="John Doe">JD</fd-avatar>
                </div>
                <div fd-notification-text>
                    <div fd-notification-description>
                        {{ notificationRef.data.description }}
                    </div>
                    <div fd-notification-metadata>
                        {{ notificationRef.data.metadata }}
                    </div>
                </div>
            </div>
            <fd-notification-footer>
                <button fd-button [fdType]="'transparent'">
                    {{ notificationRef.data.moreInfo }}
                </button>
                <div fd-notification-actions>
                    <button fd-button [fdType]="'positive'" (click)="notificationRef.close('Approve Button Click')">
                        {{ notificationRef.data.approve }}
                    </button>
                    <button fd-button [fdType]="'negative'" (click)="notificationRef.dismiss('Cancel Button Click')">
                        {{ notificationRef.data.cancel }}
                    </button>
                </div>
            </fd-notification-footer>
        </fd-notification-body>
    `
})
export class NotificationOptionsContentComponent {
    constructor(public notificationRef: NotificationRef) {}
}
