import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './common/common.module';
/*
 * Platform and Environment providers/directives/pipes
 */

import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';




/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent
  ],
  imports: [ // import Angular's modules
    AppCommonModule,
    RouterModule.forRoot(ROUTES) /* , { useHash: true, preloadingStrategy: PreloadAllModules }*/
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection

  ]
})
export class AppModule {
  constructor() {}

}

