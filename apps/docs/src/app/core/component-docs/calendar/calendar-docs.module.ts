import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarDocsComponent } from './calendar-docs.component';
import { CalendarRangeExampleComponent } from './examples/calendar-range-example.component';
import { CalendarSingleExampleComponent } from './examples/calendar-single-example.component';
import { CalendarMondayStartExampleComponent } from './examples/calendar-monday-start-example.component';
import { CalendarFormExamplesComponent } from './examples/calendar-form-example.component';
import { CalendarProgrammaticallyChangeExampleComponent } from './examples/calendar-programmatically-change-example.component';
import { CalendarI18nExampleComponent } from './examples/calendar-i18n-example.component';
import { CalendarI18nMomentExampleComponent } from './examples/calendar--i18n-moment-example.component';
import {
    SegmentedButtonModule,
    CalendarModule,
    DialogModule,
    FormModule,
    CheckboxModule
} from '@fundamental-ngx/core';
import { CalendarMobileExampleComponent } from './examples/calendar-mobile-example/calendar-mobile-example.component';
import { CalendarOptionsExampleComponent } from './examples/calendar-options-example/calendar-options-example.component';
import { CalendarGridExampleComponent } from './examples/calendar-grid-example/calendar-grid-example.component';
import { CalendarSpecialDayExampleComponent } from './examples/calendar-special-day-example/calendar-special-day-example.component';
import { CalendarMarkHoverComponent } from './examples/calendar-mark-hover/calendar-mark-hover.component';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';

const routes: Routes = [
    {
        path: '',
        component: CalendarHeaderComponent,
        children: [
            { path: '', component: CalendarDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.calendar } }
        ]
    }
];

@NgModule({
    imports: [
        FormModule,
        DialogModule,
        CheckboxModule,
        CalendarModule,
        SegmentedButtonModule,
        SharedDocumentationPageModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [
        CalendarDocsComponent,
        CalendarHeaderComponent,
        CalendarRangeExampleComponent,
        CalendarFormExamplesComponent,
        CalendarSingleExampleComponent,
        CalendarMondayStartExampleComponent,
        CalendarI18nExampleComponent,
        CalendarI18nMomentExampleComponent,
        CalendarProgrammaticallyChangeExampleComponent,
        CalendarMobileExampleComponent,
        CalendarOptionsExampleComponent,
        CalendarGridExampleComponent,
        CalendarSpecialDayExampleComponent,
        CalendarMarkHoverComponent
    ]
})
export class CalendarDocsModule {}
