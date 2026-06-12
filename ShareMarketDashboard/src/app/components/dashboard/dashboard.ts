import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxEchartsDirective } from 'ngx-echarts';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { MarketData as MarketDataService } from '../../services/market-data';
import { Auth } from '../../services/auth';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5stock from '@amcharts/amcharts5/stock';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [  
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NgxEchartsDirective,
    LucideAngularModule,
    FormsModule
   ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit, AfterViewInit, OnDestroy {
  private root!: am5.Root;
  searchTerm: string = '';
  currentTime: Date = new Date();
  Math = Math;
  
  marketIndices: any[] = [];
  portfolioData: any[] = [];
  watchlistData: any[] = [];
  topGainers: any[] = [];
  topLosers: any[] = [];
  sectorData: any[] = [];
  marketNewsData: any[] = [];
  filteredWatchlist: any[] = [];
  
  totalPortfolioValue: number = 0;
  totalInvestment: number = 0;
  totalPnL: number = 0;
  totalPnLPercent: number = 0;
  
  pieChartOption: any;

  constructor(private marketDataService: MarketDataService, private authService: Auth, private zone: NgZone) { }

  ngOnInit(): void {
    this.updateTime();
    this.loadData();
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.initStockChart();
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

  updateTime() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  loadData() {
    this.marketDataService.getMarketIndices().subscribe(data => this.marketIndices = data);
    this.marketDataService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
      this.calculatePortfolioMetrics();
    });
    this.marketDataService.getWatchlistData().subscribe(data => {
      this.watchlistData = data;
      this.filteredWatchlist = data;
    });
    this.marketDataService.getTopGainers().subscribe(data => this.topGainers = data);
    this.marketDataService.getTopLosers().subscribe(data => this.topLosers = data);
    this.marketDataService.getSectorData().subscribe(data => {
      this.sectorData = data;
      this.initPieChart();
    });
    this.marketDataService.getMarketNews().subscribe(data => this.marketNewsData = data);
  }

  calculatePortfolioMetrics() {
    this.totalPortfolioValue = this.portfolioData.reduce((sum, stock) => sum + (stock.currentPrice * stock.qty), 0);
    this.totalInvestment = this.portfolioData.reduce((sum, stock) => sum + (stock.avgPrice * stock.qty), 0);
    this.totalPnL = this.totalPortfolioValue - this.totalInvestment;
    this.totalPnLPercent = (this.totalPnL / this.totalInvestment) * 100;
  }

  calculatePnL(avgPrice: number, currentPrice: number, qty: number) {
    const pnl = (currentPrice - avgPrice) * qty;
    const pnlPercent = ((currentPrice - avgPrice) / avgPrice) * 100;
    return { pnl, pnlPercent };
  }

  formatCurrency(amount: number): string {
    return '₹' + amount.toLocaleString('en-IN');
  }

  getChangeClass(change: number): string {
    return change >= 0 ? 'positive' : 'negative';
  }

  getChangeSymbol(change: number): string {
    return change >= 0 ? '+' : '';
  }

  logout(): void {
    this.authService.logout();
  }

  initStockChart() {
    this.root = am5.Root.new("chartdiv");

    const myTheme = am5.Theme.new(this.root);

    myTheme.rule("Grid", ["scrollbar", "minor"]).setAll({
      visible: false
    });

    this.root.setThemes([
      am5themes_Animated.new(this.root),
      myTheme
    ]);

    let stockChart = this.root.container.children.push(am5stock.StockChart.new(this.root, {
      paddingRight: 0
    }));

    this.root.numberFormatter.set("numberFormat", "#,###.00");

    let mainPanel = stockChart.panels.push(am5stock.StockPanel.new(this.root, {
      wheelY: "zoomX",
      panX: true,
      panY: true
    }));

    let valueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {
        pan: "zoom"
      }),
      extraMin: 0.1,
      tooltip: am5.Tooltip.new(this.root, {}),
      numberFormat: "#,###.00",
      extraTooltipPrecision: 2
    }));

    let dateAxis = mainPanel.xAxes.push(am5xy.GaplessDateAxis.new(this.root, {
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(this.root, {
        minorGridEnabled: true
      }),
      tooltip: am5.Tooltip.new(this.root, {})
    }));

    let valueSeries = mainPanel.series.push(am5xy.CandlestickSeries.new(this.root, {
      name: "MSFT",
      clustered: false,
      valueXField: "Date",
      valueYField: "Close",
      highValueYField: "High",
      lowValueYField: "Low",
      openValueYField: "Open",
      calculateAggregates: true,
      xAxis: dateAxis,
      yAxis: valueAxis,
      legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
      legendRangeValueText: ""
    }));

    stockChart.set("stockSeries", valueSeries);

    let valueLegend = mainPanel.plotContainer.children.push(am5stock.StockLegend.new(this.root, {
      stockChart: stockChart
    }));

    let volumeAxisRenderer = am5xy.AxisRendererY.new(this.root, {
      inside: true,
      pan: "zoom"
    });

    volumeAxisRenderer.labels.template.set("forceHidden", true);
    volumeAxisRenderer.grid.template.set("forceHidden", true);

    let volumeValueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(this.root, {
      numberFormat: "#.#a",
      height: am5.percent(20),
      y: am5.percent(100),
      centerY: am5.percent(100),
      renderer: volumeAxisRenderer
    }));

    let volumeSeries = mainPanel.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Volume",
      clustered: false,
      valueXField: "Date",
      valueYField: "Volume",
      xAxis: dateAxis,
      yAxis: volumeValueAxis,
      legendValueText: "[bold]{valueY.formatNumber('#,###.0a')}[/]"
    }));

    volumeSeries.columns.template.setAll({
      strokeOpacity: 0,
      fillOpacity: 0.5
    });

    volumeSeries.columns.template.adapters.add("fill", function (fill, target) {
      let dataItem = target.dataItem;
      if (dataItem) {
        return stockChart.getVolumeColor(dataItem);
      }
      return fill;
    })

    stockChart.set("volumeSeries", volumeSeries);
    valueLegend.data.setAll([valueSeries, volumeSeries]);

    mainPanel.set("cursor", am5xy.XYCursor.new(this.root, {
      yAxis: valueAxis,
      xAxis: dateAxis,
      snapToSeries: [valueSeries],
      snapToSeriesBy: "y!"
    }));

    let scrollbar = mainPanel.set("scrollbarX", am5xy.XYChartScrollbar.new(this.root, {
      orientation: "horizontal",
      height: 50
    }));
    stockChart.toolsContainer.children.push(scrollbar);

    let sbDateAxis = scrollbar.chart.xAxes.push(am5xy.GaplessDateAxis.new(this.root, {
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(this.root, {
        minorGridEnabled: true
      })
    }));

    let sbValueAxis = scrollbar.chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(this.root, {
      valueYField: "Close",
      valueXField: "Date",
      xAxis: sbDateAxis,
      yAxis: sbValueAxis
    }));

    sbSeries.fills.template.setAll({
      visible: true,
      fillOpacity: 0.3
    });

    const chartControlsContainer = document.getElementById("chartcontrols");
    if (chartControlsContainer) {
      let toolbar = am5stock.StockToolbar.new(this.root, {
        container: chartControlsContainer,
        stockChart: stockChart,
      controls: [
        am5stock.IndicatorControl.new(this.root, {
          stockChart: stockChart,
          legend: valueLegend
        }),
        am5stock.DateRangeSelector.new(this.root, {
          stockChart: stockChart
        }),
        am5stock.PeriodSelector.new(this.root, {
          stockChart: stockChart
        }),
        am5stock.DrawingControl.new(this.root, {
          stockChart: stockChart
        }),
        am5stock.DataSaveControl.new(this.root, {
          stockChart: stockChart
        }),
        am5stock.ResetControl.new(this.root, {
          stockChart: stockChart
        }),
        am5stock.SettingsControl.new(this.root, {
          stockChart: stockChart
        })
      ]
    })
    }

    let data = [
      { Date: 1617278400000, Open: 529.93, High: 540.5, Low: 527.03, Close: 539.42, Volume: 3938600 },
      { Date: 1617624000000, Open: 540.01, High: 542.85, Low: 529.23, Close: 540.67, Volume: 3355900 },
      { Date: 1617710400000, Open: 544.81, High: 554.17, Low: 543.3, Close: 544.53, Volume: 3474200 },
      { Date: 1617796800000, Open: 543.5, High: 549.64, Low: 541.45, Close: 546.99, Volume: 2151300 },
      { Date: 1617883200000, Open: 551.13, High: 556.9, Low: 547.57, Close: 554.58, Volume: 4309800 },
      { Date: 1648641600000, Open: 389.55, High: 392.7, Low: 378.63, Close: 381.47, Volume: 4023300 }
    ];

    valueSeries.data.setAll(data);
    volumeSeries.data.setAll(data);
    sbSeries.data.setAll(data);
  }

  initPieChart() {
    this.pieChartOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: ₹{c} ({d}%)'
      },
      series: [
        {
          name: 'Sector Distribution',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#0F172A',
            borderWidth: 2
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.sectorData.map(item => ({
            value: item.value,
            name: item.sector,
            itemStyle: { color: item.color }
          }))
        }
      ]
    };
  }

  onBuyStock(stock: any): void {
    console.log('Buy stock:', stock);
  }

  filterWatchlist(): void {
    if (!this.searchTerm) {
      this.filteredWatchlist = this.watchlistData;
      return;
    }
    this.filteredWatchlist = this.watchlistData.filter(stock => 
      stock.symbol.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      stock.company.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onRemoveFromWatchlist(stock: any): void {
    console.log('Remove from watchlist:', stock);
  }
}