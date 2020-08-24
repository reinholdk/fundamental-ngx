import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { InfiniteScrollHeaderComponent } from './infinite-scroll-header/infinite-scroll-header.component';
import { InfiniteScrollDocsComponent } from './infinite-scroll-docs.component';
import { InfiniteScrollBasicExampleComponent } from './examples/infinite-scroll-basic-example/infinite-scroll-basic-example.component';
import { InfiniteScrollModule } from '@fundamental-ngx/core';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';

const routes: Routes = [
    {
        path: '',
        component: InfiniteScrollHeaderComponent,
        children: [
            { path: '', component: InfiniteScrollDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.infiniteScroll } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, InfiniteScrollModule],
    exports: [RouterModule],
    declarations: [InfiniteScrollDocsComponent, InfiniteScrollHeaderComponent, InfiniteScrollBasicExampleComponent]
})
export class InfiniteScrollDocsModule {}
