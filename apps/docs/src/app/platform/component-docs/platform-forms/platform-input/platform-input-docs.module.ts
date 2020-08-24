import { Routes, RouterModule } from '@angular/router';
import { PlatformInputHeaderComponent } from './platform-input-header/platform-input-header.component';
import { PlatformInputDocsComponent } from './platform-input-docs.component';
import { NgModule } from '@angular/core';
import { PlatformInputModule, FdpFormGroupModule, PlatformButtonModule } from '@fundamental-ngx/platform';
import { PlatformInputExampleComponent } from './platform-input-example/platform-input-example.component';
import { PlatformInputReactiveValidationExampleComponent } from './platform-input-example/platform-input-reactive-validation-example.component';
import { PlatformInputAutoCompleteValidationExampleComponent } from './platform-input-example/platform-input-auto-complete-validation-example.component';
import { ApiComponent } from '../../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../../api-files';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDocumentationModule } from '../../../../documentation/shared-documentation.module';
import { PopoverModule } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: PlatformInputHeaderComponent,
        children: [
            { path: '', component: PlatformInputDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.input } }
        ]
    }
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        PopoverModule,
        FdpFormGroupModule,
        PlatformInputModule,
        PlatformButtonModule,
        SharedDocumentationModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [
        PlatformInputExampleComponent,
        PlatformInputHeaderComponent,
        PlatformInputDocsComponent,
        PlatformInputReactiveValidationExampleComponent,
        PlatformInputAutoCompleteValidationExampleComponent
    ]
})
export class PlatformInputDocsModule {}
