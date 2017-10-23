import { NgModule } from "@angular/core"
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomepageComponent,
    },
    {
        path: 'categories',
        component: CategoriesComponent,
    },
    {
        path: 'details/:title',
        component: DetailsComponent,
    },
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule {}