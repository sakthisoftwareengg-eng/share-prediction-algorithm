import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LucideAngularModule, TrendingUp, TrendingDown, Eye, DollarSign, Search, Star, Activity, Globe, BarChart3 } from 'lucide-angular';

import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, PieChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import { routes } from './app.routes';

echarts.use([
  LineChart,
  PieChart,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer
]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ TrendingUp, TrendingDown, Eye, DollarSign, Search, Star, Activity, Globe, BarChart3 })),
    provideEchartsCore({
      echarts
    }),
    provideHttpClient(withFetch()),
  ]
};
