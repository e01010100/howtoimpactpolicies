import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';







/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    declarations: [ ],
    imports: [ // import Angular's modules

    ],
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],

})
export class AppCommonModule {
    constructor() {}

}

