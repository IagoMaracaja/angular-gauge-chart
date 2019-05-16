import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core'

/*
 * Platform and Environment providers/directives/pipes
 */
// import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { GaugeChartComponent } from './gauge-chart'

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [GaugeChartComponent],
  declarations: [GaugeChartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  /**
   * Import Angular's modules.
   */
  imports: [
    // BrowserModule,
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  /*providers: [
    ENV_PROVIDERS,
  ]*/
})
export class GaugeChartModule {}
