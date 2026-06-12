import {
  Tick
} from "./chunk-XATEH3WK.js";
import {
  SerialChart
} from "./chunk-NAZ7YOFP.js";
import {
  Button
} from "./chunk-KXW2OGU6.js";
import {
  area_default,
  line_default
} from "./chunk-TSCKTQIQ.js";
import {
  ColorSet
} from "./chunk-AVJ6LU7H.js";
import {
  Series,
  round as round2
} from "./chunk-JFXPNH7X.js";
import {
  DataItem
} from "./chunk-CRL5FSBR.js";
import {
  setColor
} from "./chunk-XOW4XAJF.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Color,
  Container,
  Graphics,
  List,
  ListAutoDispose,
  ListTemplate,
  Percent,
  Rectangle,
  addEventListener,
  capitalizeFirst,
  color,
  getEventKey,
  isLocalEvent,
  isTouchEvent,
  mergeTags,
  p100,
  p50,
  percent,
  relativeToValue,
  round,
  supports,
  visualSettings
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  compareNumber,
  copy,
  copy2,
  each,
  each2,
  isNaN,
  isNumber,
  keys,
  move,
  remove,
  removeFirst
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChartDefaultTheme.js
var XYChartDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const language = this._root.language;
    const r = this.rule.bind(this);
    r("XYChart").setAll({
      colors: ColorSet.new(this._root, {}),
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 16,
      paddingBottom: 16,
      panX: false,
      panY: false,
      wheelStep: 0.25,
      arrangeTooltips: true,
      pinchZoomX: false,
      pinchZoomY: false
    });
    r("XYSeries").setAll({
      legendLabelText: "{name}"
    });
    r("Rectangle", ["plotbackground", "xy", "background"]).setAll({
      fill: Color.fromHex(0),
      fillOpacity: 0
    });
    r("XYChart", ["scrollbar", "chart"]).setAll({
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      colors: ColorSet.new(this._root, {
        saturation: 0
      })
    });
    {
      const rule = r("Graphics", ["scrollbar", "overlay"]);
      rule.setAll({
        fillOpacity: 0.5
      });
      setColor(rule, "fill", ic, "background");
    }
    r("RoundedRectangle", ["xy", "scrollbar", "thumb"]).setAll({
      cornerRadiusTR: 0,
      cornerRadiusTL: 0,
      cornerRadiusBR: 0,
      cornerRadiusBL: 0,
      fillOpacity: 0,
      focusable: true
    });
    r("RoundedRectangle", ["xy", "scrollbar", "thumb"]).states.create("hover", { fillOpacity: 0.4 });
    r("RoundedRectangle", ["xy", "scrollbar", "chart", "background"]).setAll({
      cornerRadiusTL: 0,
      cornerRadiusBL: 0,
      cornerRadiusTR: 0,
      cornerRadiusBR: 0
    });
    r("RoundedRectangle", ["xy", "scrollbar", "chart", "background", "resize", "button"]).setAll({
      cornerRadiusBL: 40,
      cornerRadiusBR: 40,
      cornerRadiusTL: 40,
      cornerRadiusTR: 40
    });
    r("AxisRendererX", ["xy", "chart", "scrollbar"]).setAll({
      strokeOpacity: 0,
      inside: true
    });
    r("AxisRendererY", ["xy", "chart", "scrollbar"]).setAll({
      strokeOpacity: 0,
      inside: true,
      minGridDistance: 5
    });
    r("AxisLabel", ["xy", "scrollbar", "x"]).setAll({
      opacity: 0.5,
      centerY: p100,
      minPosition: 0.01,
      maxPosition: 0.99,
      fontSize: "0.8em"
    });
    r("AxisLabel", ["category"]).setAll({
      text: "{category}",
      populateText: true
    });
    r("AxisLabel", ["x"]).setAll({
      centerY: 0
    });
    r("AxisLabel", ["x", "inside"]).setAll({
      centerY: p100
    });
    r("AxisLabel", ["x", "inside", "opposite"]).setAll({
      centerY: 0
    });
    r("AxisLabel", ["x", "opposite"]).setAll({
      centerY: p100
    });
    r("AxisLabel", ["y"]).setAll({
      centerX: p100
    });
    r("AxisLabel", ["y", "inside"]).setAll({
      centerX: 0
    });
    r("AxisLabel", ["y", "inside", "opposite"]).setAll({
      centerX: p100
    });
    r("AxisLabel", ["y", "opposite"]).setAll({
      centerX: 0
    });
    r("AxisLabel", ["minor"]).setAll({
      fontSize: "0.6em"
    });
    r("AxisLabel", ["xy", "scrollbar", "y"]).setAll({
      visible: false
    });
    r("Grid", ["xy", "scrollbar", "y"]).setAll({
      visible: false
    });
    r("Grid", ["xy", "scrollbar", "x"]).setAll({
      opacity: 0.5
    });
    r("XYCursor").setAll({
      behavior: "none",
      layer: 30,
      exportable: false,
      snapToSeriesBy: "xy",
      moveThreshold: 1
    });
    {
      const rule = r("Grid", ["cursor", "x"]);
      rule.setAll({
        forceInactive: true,
        strokeOpacity: 0.8,
        strokeDasharray: [2, 2],
        role: "slider",
        ariaLabel: language.translate("Use left and right arrows to move selection")
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    {
      const rule = r("Grid", ["cursor", "y"]);
      rule.setAll({
        forceInactive: true,
        strokeOpacity: 0.8,
        strokeDasharray: [2, 2],
        role: "slider",
        ariaLabel: language.translate("Use up and down arrows to move selection")
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    {
      const rule = r("Graphics", ["cursor", "selection"]);
      rule.setAll({
        fillOpacity: 0.15
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("Axis").setAll({
      start: 0,
      end: 1,
      minZoomCount: 1,
      maxZoomCount: Infinity,
      maxZoomFactor: 1e3,
      maxDeviation: 0.1,
      snapTooltip: true,
      tooltipLocation: 0.5,
      panX: true,
      panY: true,
      zoomX: true,
      zoomY: true,
      fixAxisSize: true
    });
    r("AxisLabel").setAll({
      location: 0.5,
      multiLocation: 0,
      centerX: p50,
      centerY: p50,
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 5,
      paddingRight: 5
    });
    r("Container", ["axis", "header"]).setAll({
      layer: 30
    });
    r("Rectangle", ["axis", "header", "background"]).setAll({
      crisp: true
    });
    {
      const rule = r("AxisRenderer");
      rule.setAll({
        crisp: true,
        strokeOpacity: 0
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("AxisRendererX").setAll({
      minGridDistance: 120,
      opposite: false,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1,
      width: p100
    });
    r("AxisRendererY").setAll({
      minGridDistance: 40,
      opposite: false,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1,
      height: p100
    });
    {
      const rule = r("Rectangle", ["axis", "thumb"]);
      rule.setAll({
        fillOpacity: 0
      });
      setColor(rule, "fill", ic, "alternativeBackground");
      rule.states.create("hover", { fillOpacity: 0.1 });
    }
    r("Rectangle", ["axis", "thumb", "x"]).setAll({
      cursorOverStyle: "ew-resize"
    });
    r("Rectangle", ["axis", "thumb", "y"]).setAll({
      cursorOverStyle: "ns-resize"
    });
    {
      const rule = r("Grid");
      rule.setAll({
        location: 0,
        strokeOpacity: 0.15,
        crisp: true
      });
      setColor(rule, "stroke", ic, "grid");
    }
    {
      const rule = r("Grid", ["minor"]);
      rule.setAll({
        location: 0,
        strokeOpacity: 0.07,
        crisp: true
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("Grid", ["base"]).setAll({
      strokeOpacity: 0.3
    });
    {
      const rule = r("Graphics", ["axis", "fill"]);
      rule.setAll({
        visible: false,
        isMeasured: false,
        position: "absolute",
        fillOpacity: 0.05
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("Graphics", ["axis", "fill", "range"]).setAll({
      isMeasured: true
    });
    r("Graphics", ["series", "fill", "range"]).setAll({
      visible: false,
      isMeasured: true
    });
    r("Grid", ["series", "range"]).setAll({
      visible: false
    });
    r("AxisTick", ["series", "range"]).setAll({
      visible: false
    });
    r("AxisLabel", ["series", "range"]).setAll({
      visible: false
    });
    {
      const rule = r("AxisTick");
      rule.setAll({
        location: 0.5,
        multiLocation: 0,
        strokeOpacity: 1,
        isMeasured: false,
        position: "absolute",
        visible: false
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("CategoryAxis").setAll({
      startLocation: 0,
      endLocation: 1,
      fillRule: (dataItem, index) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          if (!isNumber(index) || index % 2 == 0) {
            axisFill.setPrivate("visible", true);
          } else {
            axisFill.setPrivate("visible", false);
          }
        }
      }
    });
    const gridIntervals = [
      { timeUnit: "millisecond", count: 1 },
      { timeUnit: "millisecond", count: 5 },
      { timeUnit: "millisecond", count: 10 },
      { timeUnit: "millisecond", count: 50 },
      { timeUnit: "millisecond", count: 100 },
      { timeUnit: "millisecond", count: 500 },
      { timeUnit: "second", count: 1 },
      { timeUnit: "second", count: 5 },
      { timeUnit: "second", count: 10 },
      { timeUnit: "second", count: 30 },
      { timeUnit: "minute", count: 1 },
      { timeUnit: "minute", count: 5 },
      { timeUnit: "minute", count: 10 },
      { timeUnit: "minute", count: 15 },
      { timeUnit: "minute", count: 30 },
      { timeUnit: "hour", count: 1 },
      { timeUnit: "hour", count: 3 },
      { timeUnit: "hour", count: 6 },
      { timeUnit: "hour", count: 12 },
      { timeUnit: "day", count: 1 },
      { timeUnit: "day", count: 2 },
      { timeUnit: "day", count: 3 },
      { timeUnit: "day", count: 4 },
      { timeUnit: "day", count: 5 },
      { timeUnit: "week", count: 1 },
      { timeUnit: "month", count: 1 },
      { timeUnit: "month", count: 2 },
      { timeUnit: "month", count: 3 },
      { timeUnit: "month", count: 6 },
      { timeUnit: "year", count: 1 },
      { timeUnit: "year", count: 2 },
      { timeUnit: "year", count: 5 },
      { timeUnit: "year", count: 10 },
      { timeUnit: "year", count: 50 },
      { timeUnit: "year", count: 100 },
      { timeUnit: "year", count: 200 },
      { timeUnit: "year", count: 500 },
      { timeUnit: "year", count: 1e3 },
      { timeUnit: "year", count: 2e3 },
      { timeUnit: "year", count: 5e3 },
      { timeUnit: "year", count: 1e4 },
      { timeUnit: "year", count: 1e5 }
    ];
    const dateFormats = {
      "millisecond": language.translate("_date_millisecond"),
      "second": language.translate("_date_second"),
      "minute": language.translate("_date_minute"),
      "hour": language.translate("_date_hour"),
      "day": language.translate("_date_day"),
      "week": language.translate("_date_day"),
      "month": language.translate("_date_month"),
      "year": language.translate("_date_year")
    };
    const periodChangeDateFormats = {
      "millisecond": language.translate("_date_millisecond"),
      "second": language.translate("_date_second"),
      "minute": language.translate("_date_minute"),
      "hour": language.translate("_date_day"),
      "day": language.translate("_date_day"),
      "week": language.translate("_date_day"),
      "month": language.translate("_date_month") + " " + language.translate("_date_year"),
      "year": language.translate("_date_year")
    };
    const tooltipDateFormats = {
      "millisecond": language.translate("_date_millisecond_full"),
      "second": language.translate("_date_second_full"),
      "minute": language.translate("_date_minute_full"),
      "hour": language.translate("_date_hour_full"),
      "day": language.translate("_date_day_full"),
      "week": language.translate("_date_week_full"),
      "month": language.translate("_date_month_full"),
      "year": language.translate("_date_year")
    };
    r("CategoryDateAxis").setAll({
      markUnitChange: true,
      gridIntervals: copy(gridIntervals),
      dateFormats: copy2(dateFormats),
      periodChangeDateFormats: copy2(periodChangeDateFormats)
    });
    r("DateAxis").setAll({
      maxZoomFactor: null,
      strictMinMax: true,
      startLocation: 0,
      endLocation: 1,
      markUnitChange: true,
      groupData: false,
      groupCount: 500,
      gridIntervals: copy(gridIntervals),
      dateFormats: copy2(dateFormats),
      periodChangeDateFormats: copy2(periodChangeDateFormats),
      tooltipDateFormats,
      groupIntervals: [
        { timeUnit: "millisecond", count: 1 },
        { timeUnit: "millisecond", count: 10 },
        { timeUnit: "millisecond", count: 100 },
        { timeUnit: "second", count: 1 },
        { timeUnit: "second", count: 10 },
        { timeUnit: "minute", count: 1 },
        { timeUnit: "minute", count: 10 },
        { timeUnit: "hour", count: 1 },
        { timeUnit: "day", count: 1 },
        { timeUnit: "week", count: 1 },
        { timeUnit: "month", count: 1 },
        { timeUnit: "year", count: 1 }
      ],
      fillRule: (dataItem) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          const axis = dataItem.component;
          const value = dataItem.get("value");
          const endValue = dataItem.get("endValue");
          const intervalDuration = axis.intervalDuration();
          const baseInterval = axis.getPrivate("baseInterval");
          const gridInterval = axis.getPrivate("gridInterval", baseInterval);
          let min2 = axis.getPrivate("min", 0);
          min2 = round2(new Date(min2), gridInterval.timeUnit, gridInterval.count, this._root.locale.firstDayOfWeek, this._root.utc, void 0, this._root.timezone).getTime();
          if (value != null && endValue != null) {
            const val = Math.round(Math.round((value - min2) / intervalDuration)) / 2;
            if (val == Math.round(val)) {
              axisFill.setPrivate("visible", true);
            } else {
              axisFill.setPrivate("visible", false);
            }
          }
        }
      }
    });
    r("GaplessDateAxis").setAll({
      fillRule: (dataItem) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          const index = dataItem.get("index");
          let visible = false;
          if (!isNumber(index) || index % 2 == 0) {
            visible = true;
          }
          axisFill.setPrivate("visible", visible);
        }
      }
    });
    r("ValueAxis").setAll({
      baseValue: 0,
      logarithmic: false,
      strictMinMax: false,
      autoZoom: true,
      fillRule: (dataItem) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          const axis = dataItem.component;
          const value = dataItem.get("value");
          const step = axis.getPrivate("step");
          if (isNumber(value) && isNumber(step)) {
            if (round(value / step / 2, 5) == Math.round(value / step / 2)) {
              axisFill.setPrivate("visible", false);
            } else {
              axisFill.setPrivate("visible", true);
            }
          }
        }
      }
    });
    r("DurationAxis").setAll({
      baseUnit: "second"
    });
    r("XYSeries").setAll({
      maskBullets: true,
      stackToNegative: true,
      locationX: 0.5,
      locationY: 0.5,
      snapTooltip: false,
      openValueXGrouped: "open",
      openValueYGrouped: "open",
      valueXGrouped: "close",
      valueYGrouped: "close",
      seriesTooltipTarget: "series"
    });
    r("BaseColumnSeries").setAll({
      adjustBulletPosition: true
    });
    r("ColumnSeries").setAll({
      clustered: true
    });
    r("RoundedRectangle", ["series", "column"]).setAll({
      position: "absolute",
      isMeasured: false,
      width: percent(70),
      height: percent(70),
      strokeWidth: 1,
      strokeOpacity: 1,
      cornerRadiusBL: 0,
      cornerRadiusTL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTR: 0,
      fillOpacity: 1,
      role: "figure"
    });
    r("LineSeries").setAll({
      connect: true,
      autoGapCount: 1.1,
      stackToNegative: false
    });
    r("Graphics", ["series", "stroke"]).setAll({
      position: "absolute",
      strokeWidth: 1,
      strokeOpacity: 1,
      isMeasured: false
    });
    r("Graphics", ["series", "fill"]).setAll({
      visible: false,
      fillOpacity: 0,
      position: "absolute",
      strokeWidth: 0,
      strokeOpacity: 0,
      isMeasured: false
    });
    r("Graphics", ["line", "series", "legend", "marker", "stroke"]).setAll({
      draw: (display, sprite) => {
        const parent = sprite.parent;
        if (parent) {
          const h = parent.height();
          const w = parent.width();
          display.moveTo(0, h / 2);
          display.lineTo(w, h / 2);
        }
      }
    });
    {
      const rule = r("Graphics", ["line", "series", "legend", "marker", "stroke"]).states.create("disabled", {});
      setColor(rule, "stroke", ic, "disabled");
    }
    r("Graphics", ["line", "series", "legend", "marker", "fill"]).setAll({
      draw: (display, sprite) => {
        const parent = sprite.parent;
        if (parent) {
          const h = parent.height();
          const w = parent.width();
          display.moveTo(0, 0);
          display.lineTo(w, 0);
          display.lineTo(w, h);
          display.lineTo(0, h);
          display.lineTo(0, 0);
        }
      }
    });
    {
      const rule = r("Graphics", ["line", "series", "legend", "marker", "fill"]).states.create("disabled", {});
      setColor(rule, "stroke", ic, "disabled");
    }
    r("SmoothedXYLineSeries").setAll({
      tension: 0.5
    });
    r("SmoothedXLineSeries").setAll({
      tension: 0.5
    });
    r("SmoothedYLineSeries").setAll({
      tension: 0.5
    });
    r("Candlestick").setAll({
      position: "absolute",
      isMeasured: false,
      width: percent(50),
      height: percent(50),
      strokeWidth: 1,
      strokeOpacity: 1,
      cornerRadiusBL: 0,
      cornerRadiusTL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTR: 0,
      fillOpacity: 1,
      role: "figure"
    });
    r("OHLC").setAll({
      width: percent(80),
      height: percent(80)
    });
    r("CandlestickSeries").setAll({
      lowValueXGrouped: "low",
      lowValueYGrouped: "low",
      highValueXGrouped: "high",
      highValueYGrouped: "high",
      openValueXGrouped: "open",
      openValueYGrouped: "open",
      valueXGrouped: "close",
      valueYGrouped: "close"
    });
    {
      const rule = r("Rectangle", ["column", "autocolor"]).states.create("riseFromOpen", {});
      setColor(rule, "fill", ic, "positive");
      setColor(rule, "stroke", ic, "positive");
    }
    {
      const rule = r("Rectangle", ["column", "autocolor"]).states.create("dropFromOpen", {});
      setColor(rule, "fill", ic, "negative");
      setColor(rule, "stroke", ic, "negative");
    }
    r("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromOpen", { fillOpacity: 0 });
    r("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromOpen", { fillOpacity: 1 });
    {
      const rule = r("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromPrevious", {});
      setColor(rule, "fill", ic, "positive");
      setColor(rule, "stroke", ic, "positive");
    }
    {
      const rule = r("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromPrevious", {});
      setColor(rule, "fill", ic, "negative");
      setColor(rule, "stroke", ic, "negative");
    }
    {
      const rule = r("RoundedRectangle", ["rangegrip"]);
      rule.setAll({
        strokeOpacity: 0,
        fillOpacity: 0,
        strokeWidth: 1,
        width: 12,
        height: 12
      });
    }
    {
      const rule = r("Graphics", ["rangegrip", "button", "icon"]);
      rule.setAll({
        interactive: false,
        crisp: true,
        strokeOpacity: 0.5,
        draw: (display) => {
          display.moveTo(0, 0.5);
          display.lineTo(0, 12.5);
          display.moveTo(2, 0.5);
          display.lineTo(2, 12.5);
          display.moveTo(4, 0.5);
          display.lineTo(4, 12.5);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
    }
    r("Button", ["rangegrip"]).setAll({
      draggable: true,
      paddingTop: 0,
      paddingBottom: 0
    });
    r("Button", ["rangegrip", "vertical"]).setAll({
      rotation: 90,
      cursorOverStyle: "ns-resize",
      centerX: p50
    });
    r("Button", ["rangegrip", "horizontal"]).setAll({
      cursorOverStyle: "ew-resize",
      centerX: p50
    });
    r("Button", ["rangegrip", "vertical", "left"]).setAll({
      centerY: p100
    });
    r("Button", ["rangegrip", "vertical", "right"]).setAll({
      centerY: 0
    });
    r("Button", ["rangegrip", "horizontal", "top"]).setAll({
      centerY: 0
    });
    r("Button", ["rangegrip", "horizontal", "bottom"]).setAll({
      centerY: p100
    });
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/XYSeries.js
function min(left, right) {
  if (left == null) {
    return right;
  } else if (right == null) {
    return left;
  } else if (right < left) {
    return right;
  } else {
    return left;
  }
}
function max(left, right) {
  if (left == null) {
    return right;
  } else if (right == null) {
    return left;
  } else if (right > left) {
    return right;
  } else {
    return left;
  }
}
var XYSeries = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_xField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_xOpenField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yOpenField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_xLowField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_xHighField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yLowField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yHighField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_axesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_stackDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_selectionProcessed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataSets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_mainContainerMask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "mainContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "axisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "_skipped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_couldStackTo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_reallyStackedTo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_stackedSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_aLocationX0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_aLocationX1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_aLocationY0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_aLocationY1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_showBullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "valueXFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        "valueX",
        "openValueX",
        "lowValueX",
        "highValueX"
      ]
    });
    Object.defineProperty(this, "valueYFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        "valueY",
        "openValueY",
        "lowValueY",
        "highValueY"
      ]
    });
    Object.defineProperty(this, "_valueXFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueYFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueXShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueYShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "__valueXShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "__valueYShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_emptyDataItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new DataItem(this, void 0, {})
    });
    Object.defineProperty(this, "_dataSetId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipFieldX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipFieldY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_posXDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_posYDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this.fields.push("categoryX", "categoryY", "openCategoryX", "openCategoryY");
    this.valueFields.push("valueX", "valueY", "openValueX", "openValueY", "lowValueX", "lowValueY", "highValueX", "highValueY");
    this._setRawDefault("vcx", 1);
    this._setRawDefault("vcy", 1);
    this._setRawDefault("valueXShow", "valueXWorking");
    this._setRawDefault("valueYShow", "valueYWorking");
    this._setRawDefault("openValueXShow", "openValueXWorking");
    this._setRawDefault("openValueYShow", "openValueYWorking");
    this._setRawDefault("lowValueXShow", "lowValueXWorking");
    this._setRawDefault("lowValueYShow", "lowValueYWorking");
    this._setRawDefault("highValueXShow", "highValueXWorking");
    this._setRawDefault("highValueYShow", "highValueYWorking");
    this._setRawDefault("lowValueXGrouped", "low");
    this._setRawDefault("lowValueYGrouped", "low");
    this._setRawDefault("highValueXGrouped", "high");
    this._setRawDefault("highValueYGrouped", "high");
    super._afterNew();
    this.set("maskContent", true);
    this._disposers.push(this.axisRanges.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (axisRange) => {
          this._removeAxisRange(axisRange);
        });
      } else if (change.type === "push") {
        this._processAxisRange(change.newValue);
      } else if (change.type === "setIndex") {
        this._processAxisRange(change.newValue);
      } else if (change.type === "insertIndex") {
        this._processAxisRange(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeAxisRange(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._processAxisRange(change.value);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
    }));
    this.states.create("hidden", { opacity: 1, visible: false });
    this.onPrivate("startIndex", () => {
      this.root.events.once("frameended", () => {
        this.updateLegendValue();
      });
    });
    this.onPrivate("endIndex", () => {
      this.root.events.once("frameended", () => {
        this.updateLegendValue();
      });
    });
    this._makeFieldNames();
  }
  _processAxisRange(axisRange) {
    const container = Container.new(this._root, {});
    axisRange.container = container;
    this.children.push(container);
    axisRange.series = this;
    const axisDataItem = axisRange.axisDataItem;
    axisDataItem.setRaw("isRange", true);
    const axis = axisDataItem.component;
    if (axis) {
      axis._processAxisRange(axisDataItem, ["range", "series"]);
      const bullet = axisDataItem.get("bullet");
      if (bullet) {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      }
      const axisFill = axisDataItem.get("axisFill");
      if (axisFill) {
        container.set("mask", axisFill);
      }
      axis._seriesAxisRanges.push(axisDataItem);
    }
  }
  _onDataClear() {
    super._onDataClear();
    each2(this._dataSets, (_key, dataItems) => {
      each(dataItems, (dataItem) => {
        dataItem.dispose();
      });
      dataItems.length = 0;
    });
  }
  _removeAxisRange(axisRange) {
    const axisDataItem = axisRange.axisDataItem;
    const axis = axisDataItem.component;
    axisDataItem.dispose();
    remove(axis._seriesAxisRanges, axisDataItem);
    const container = axisRange.container;
    if (container) {
      container.dispose();
    }
  }
  _updateFields() {
    super._updateFields();
    this._valueXFields = [];
    this._valueYFields = [];
    this._valueXShowFields = [];
    this._valueYShowFields = [];
    this.__valueXShowFields = [];
    this.__valueYShowFields = [];
    if (this.valueXFields) {
      each(this.valueXFields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._valueXFields.push(key);
          let field2 = this.get(key + "Show");
          this.__valueXShowFields.push(field2);
          if (field2.indexOf("Working") != -1) {
            this._valueXShowFields.push(field2.split("Working")[0]);
          } else {
            this._valueXShowFields.push(field2);
          }
        }
      });
    }
    if (this.valueYFields) {
      each(this.valueYFields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._valueYFields.push(key);
          let field2 = this.get(key + "Show");
          this.__valueYShowFields.push(field2);
          if (field2.indexOf("Working") != -1) {
            this._valueYShowFields.push(field2.split("Working")[0]);
          } else {
            this._valueYShowFields.push(field2);
          }
        }
      });
    }
  }
  _dispose() {
    super._dispose();
    this._bullets = {};
    const chart = this.chart;
    if (chart) {
      chart.series.removeValue(this);
    }
    removeFirst(this.get("xAxis").series, this);
    removeFirst(this.get("yAxis").series, this);
  }
  // TODO use  SelectKeys<this["_privateSettings"], number | undefined>
  _min(key, value) {
    let newValue = min(this.getPrivate(key), value);
    this.setPrivate(key, newValue);
  }
  // TODO use  SelectKeys<this["_privateSettings"], number | undefined>
  _max(key, value) {
    let newValue = max(this.getPrivate(key), value);
    this.setPrivate(key, newValue);
  }
  _shouldMakeBullet(dataItem) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    if (!xAxis.inited || !yAxis.inited) {
      return false;
    }
    const minBulletDistance = this.get("minBulletDistance", 0);
    if (minBulletDistance > 0) {
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      let count = endIndex - startIndex;
      if (xAxis == baseAxis) {
        if (xAxis.get("renderer").axisLength() / count < minBulletDistance / 5) {
          return false;
        }
      } else if (yAxis == baseAxis) {
        if (yAxis.get("renderer").axisLength() / count < minBulletDistance / 5) {
          return false;
        }
      }
    }
    if (dataItem.get(this._xField) != null && dataItem.get(this._yField) != null) {
      return true;
    }
    return false;
  }
  _makeFieldNames() {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const xName = xAxis.getPrivate("name");
    const xCapName = capitalizeFirst(xName);
    const yName = yAxis.getPrivate("name");
    const yCapName = capitalizeFirst(yName);
    const xLetter = xAxis.get("renderer").getPrivate("letter");
    const yLetter = yAxis.get("renderer").getPrivate("letter");
    const open = "open";
    const low = "low";
    const high = "high";
    const show = "Show";
    if (xAxis.className === "ValueAxis") {
      this._xField = this.get(xName + xLetter + show);
      this._xOpenField = this.get(open + xCapName + xLetter + show);
      this._xLowField = this.get(low + xCapName + xLetter + show);
      this._xHighField = this.get(high + xCapName + xLetter + show);
    } else {
      this._xField = xName + xLetter;
      this._xOpenField = open + xCapName + xLetter;
      this._xLowField = low + xCapName + xLetter;
      this._xHighField = high + xCapName + xLetter;
    }
    if (yAxis.className === "ValueAxis") {
      this._yField = this.get(yName + yLetter + show);
      this._yOpenField = this.get(open + yCapName + yLetter + show);
      this._yLowField = this.get(low + yCapName + yLetter + show);
      this._yHighField = this.get(high + yCapName + yLetter + show);
    } else {
      this._yField = yName + yLetter;
      this._yOpenField = open + yCapName + yLetter;
      this._yLowField = low + yCapName + yLetter;
      this._yHighField = high + yCapName + yLetter;
    }
  }
  _fixVC() {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    const hiddenState = this.states.lookup("hidden");
    const sequencedInterpolation = this.get("sequencedInterpolation");
    if (hiddenState) {
      let value = 0;
      if (sequencedInterpolation) {
        value = 0.999999999999;
      }
      if (xAxis === baseAxis) {
        hiddenState.set("vcy", value);
      } else if (yAxis === baseAxis) {
        hiddenState.set("vcx", value);
      } else {
        hiddenState.set("vcy", value);
        hiddenState.set("vcx", value);
      }
    }
  }
  _handleMaskBullets() {
    if (this.isDirty("maskBullets")) {
      this.bulletsContainer.set("maskContent", this.get("maskBullets"));
    }
  }
  _fixPosition() {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    this.set("x", xAxis.x() - relativeToValue(xAxis.get("centerX", 0), xAxis.width()) - xAxis.parent.get("paddingLeft", 0));
    this.set("y", yAxis.y() - relativeToValue(yAxis.get("centerY", 0), yAxis.height()) - yAxis.parent.get("paddingTop", 0));
    this.bulletsContainer.set("y", this.y());
    this.bulletsContainer.set("x", this.x());
  }
  _prepareChildren() {
    super._prepareChildren();
    this._bullets = {};
    if (this.isDirty("valueYShow") || this.isDirty("valueXShow") || this.isDirty("openValueYShow") || this.isDirty("openValueXShow") || this.isDirty("lowValueYShow") || this.isDirty("lowValueXShow") || this.isDirty("highValueYShow") || this.isDirty("highValueXShow")) {
      this._updateFields();
      this._makeFieldNames();
      this._valuesDirty = true;
    }
    if (this.isDirty("xAxis") || this.isDirty("yAxis")) {
      this._valuesDirty = true;
    }
    this.set("width", this.get("xAxis").width());
    this.set("height", this.get("yAxis").height());
    this._handleMaskBullets();
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    const tooltipPositionX = this.get("tooltipPositionX");
    let tooltipFieldX;
    switch (tooltipPositionX) {
      case "open":
        tooltipFieldX = this._xOpenField;
        break;
      case "low":
        tooltipFieldX = this._xLowField;
        break;
      case "high":
        tooltipFieldX = this._xHighField;
        break;
      default:
        tooltipFieldX = this._xField;
    }
    this._tooltipFieldX = tooltipFieldX;
    const tooltipPositionY = this.get("tooltipPositionY");
    let tooltipFieldY;
    switch (tooltipPositionY) {
      case "open":
        tooltipFieldY = this._yOpenField;
        break;
      case "low":
        tooltipFieldY = this._yLowField;
        break;
      case "high":
        tooltipFieldY = this._yHighField;
        break;
      default:
        tooltipFieldY = this._yField;
    }
    this._tooltipFieldY = tooltipFieldY;
    if (this.isDirty("baseAxis")) {
      this._fixVC();
    }
    this._fixPosition();
    const stacked = this.get("stacked");
    if (this.isDirty("stacked")) {
      if (stacked) {
        if (this._valuesDirty && !this._dataProcessed) {
        } else {
          this._stack();
        }
      } else {
        this._unstack();
      }
    }
    if (this._valuesDirty && !this._dataProcessed) {
      this._dataProcessed = true;
      if (stacked) {
        this._stack();
      }
      each(this.dataItems, (dataItem) => {
        each(this._valueXShowFields, (key) => {
          let value = dataItem.get(key);
          if (value != null) {
            if (stacked) {
              value += this.getStackedXValue(dataItem, key);
            }
            this._min("minX", value);
            this._max("maxX", value);
          }
        });
        each(this._valueYShowFields, (key) => {
          let value = dataItem.get(key);
          if (value != null) {
            if (stacked) {
              value += this.getStackedYValue(dataItem, key);
            }
            this._min("minY", value);
            this._max("maxY", value);
          }
        });
        xAxis.processSeriesDataItem(dataItem, this._valueXFields);
        yAxis.processSeriesDataItem(dataItem, this._valueYFields);
      });
      xAxis._seriesValuesDirty = true;
      yAxis._seriesValuesDirty = true;
      if (!this.get("ignoreMinMax")) {
        if (this.isPrivateDirty("minX") || this.isPrivateDirty("maxX")) {
          xAxis.markDirtyExtremes();
        }
        if (this.isPrivateDirty("minY") || this.isPrivateDirty("maxY")) {
          yAxis.markDirtyExtremes();
        }
      }
      this._markStakedDirtyStack();
      if (!this.get("tooltipDataItem")) {
        this.updateLegendValue(void 0);
      }
    }
    if (this.isDirty("vcx") || this.isDirty("vcy")) {
      this._markStakedDirtyStack();
    }
    if (!this._dataGrouped) {
      xAxis._groupSeriesData(this);
      yAxis._groupSeriesData(this);
      this._dataGrouped = true;
    }
    if (this._valuesDirty || this.isPrivateDirty("startIndex") || this.isPrivateDirty("adjustedStartIndex") || this.isPrivateDirty("endIndex") || this.isDirty("vcx") || this.isDirty("vcy") || this._stackDirty || this._sizeDirty) {
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      let minBulletDistance = this.get("minBulletDistance", 0);
      if (minBulletDistance > 0 && baseAxis) {
        if (baseAxis.get("renderer").axisLength() / (endIndex - startIndex) > minBulletDistance) {
          this._showBullets = true;
        } else {
          this._showBullets = false;
        }
      }
      if ((this._psi != startIndex || this._pei != endIndex || this.isDirty("vcx") || this.isDirty("vcy") || this.isPrivateDirty("adjustedStartIndex") || this._stackDirty || this._valuesDirty) && !this._selectionProcessed) {
        this._selectionProcessed = true;
        const vcx = this.get("vcx", 1);
        const vcy = this.get("vcy", 1);
        const stacked2 = this.get("stacked", false);
        const outOfSelection = this.getPrivate("outOfSelection");
        if (baseAxis === xAxis || !baseAxis) {
          yAxis._calculateTotals();
          this.setPrivateRaw("selectionMinY", void 0);
          this.setPrivateRaw("selectionMaxY", void 0);
          if (!outOfSelection) {
            for (let i = startIndex; i < endIndex; i++) {
              this.processYSelectionDataItem(this.dataItems[i], vcy, stacked2);
            }
          } else {
            yAxis.markDirtySelectionExtremes();
          }
        }
        if (baseAxis === yAxis || !baseAxis) {
          xAxis._calculateTotals();
          this.setPrivateRaw("selectionMinX", void 0);
          this.setPrivateRaw("selectionMaxX", void 0);
          if (!outOfSelection) {
            for (let i = startIndex; i < endIndex; i++) {
              this.processXSelectionDataItem(this.dataItems[i], vcx, stacked2);
            }
          } else {
            yAxis.markDirtySelectionExtremes();
          }
        }
        if (baseAxis === xAxis || !baseAxis) {
          if (this.get("valueYShow") !== "valueYWorking" || this.get("useSelectionExtremes")) {
            const selectionMinY = this.getPrivate("selectionMinY");
            if (selectionMinY != null) {
              this.setPrivateRaw("minY", selectionMinY);
              yAxis.markDirtyExtremes();
            }
            const selectionMaxY = this.getPrivate("selectionMaxY");
            if (selectionMaxY != null) {
              this.setPrivateRaw("maxY", selectionMaxY);
              yAxis.markDirtyExtremes();
            }
          }
        }
        if (baseAxis === yAxis || !baseAxis) {
          if (this.get("valueXShow") !== "valueXWorking" || this.get("useSelectionExtremes")) {
            const selectionMinX = this.getPrivate("selectionMinX");
            if (selectionMinX != null) {
              this.setPrivateRaw("minX", selectionMinX);
              yAxis.markDirtyExtremes();
            }
            const selectionMaxX = this.getPrivate("selectionMaxX");
            if (selectionMaxX != null) {
              this.setPrivateRaw("maxX", selectionMaxX);
              xAxis.markDirtyExtremes();
            }
          }
        }
        if (this.isPrivateDirty("selectionMinX") || this.isPrivateDirty("selectionMaxX")) {
          xAxis.markDirtySelectionExtremes();
        }
        if (this.isPrivateDirty("selectionMinY") || this.isPrivateDirty("selectionMaxY")) {
          yAxis.markDirtySelectionExtremes();
        }
      }
    }
  }
  _makeRangeMask() {
    if (this.axisRanges.length > 0) {
      let mainContainerMask = this._mainContainerMask;
      if (mainContainerMask == null) {
        mainContainerMask = this.children.push(Graphics.new(this._root, {}));
        this._mainContainerMask = mainContainerMask;
        mainContainerMask.set("draw", (display, target) => {
          const parent = this.parent;
          if (parent) {
            const w = this._root.container.width();
            const h = this._root.container.height();
            display.moveTo(-w, -h);
            display.lineTo(-w, h * 2);
            display.lineTo(w * 2, h * 2);
            display.lineTo(w * 2, -h);
            display.lineTo(-w, -h);
            this.axisRanges.each((axisRange) => {
              const fill = axisRange.axisDataItem.get("axisFill");
              if (parent) {
                if (fill) {
                  let draw = fill.get("draw");
                  if (draw) {
                    draw(display, target);
                  }
                }
              }
            });
          }
          this.mainContainer._display.mask = mainContainerMask._display;
        });
      }
      mainContainerMask.markDirty();
      mainContainerMask._markDirtyKey("fill");
    } else {
      this.mainContainer._display.mask = null;
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._x = this.x();
    this._y = this.y();
    this._makeRangeMask();
  }
  _stack() {
    const chart = this.chart;
    if (chart) {
      const seriesIndex = chart.series.indexOf(this);
      this._couldStackTo = [];
      if (seriesIndex > 0) {
        let series;
        for (let i = seriesIndex - 1; i >= 0; i--) {
          series = chart.series.getIndex(i);
          if (series.get("xAxis") === this.get("xAxis") && series.get("yAxis") === this.get("yAxis") && series.className === this.className) {
            this._couldStackTo.push(series);
            if (!series.get("stacked")) {
              break;
            }
          }
        }
      }
      this._stackDataItems();
    }
  }
  _unstack() {
    each2(this._reallyStackedTo, (_key, value) => {
      delete value._stackedSeries[this.uid];
    });
    this._reallyStackedTo = {};
    each(this.dataItems, (dataItem) => {
      dataItem.setRaw("stackToItemY", void 0);
      dataItem.setRaw("stackToItemX", void 0);
    });
  }
  _handleRemoved() {
    const xAxis = this.get("xAxis");
    if (xAxis) {
      xAxis._handleSeriesRemoved();
    }
    const yAxis = this.get("yAxis");
    if (yAxis) {
      yAxis._handleSeriesRemoved();
    }
  }
  _stackDataItems() {
    const baseAxis = this.get("baseAxis");
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    let field;
    let stackToItemKey;
    if (baseAxis === xAxis) {
      field = "valueY";
      stackToItemKey = "stackToItemY";
    } else if (baseAxis === yAxis) {
      field = "valueX";
      stackToItemKey = "stackToItemX";
    }
    let len = this._couldStackTo.length;
    let index = 0;
    const stackToNegative = this.get("stackToNegative");
    this._reallyStackedTo = {};
    each(this.dataItems, (dataItem) => {
      for (let s = 0; s < len; s++) {
        let stackToSeries = this._couldStackTo[s];
        let stackToItem = stackToSeries.dataItems[index];
        let value = dataItem.get(field);
        if (stackToItem) {
          let stackValue = stackToItem.get(field);
          if (stackToNegative) {
            if (isNumber(value)) {
              if (isNumber(stackValue)) {
                if (s == len - 1) {
                  dataItem.setRaw(stackToItemKey, void 0);
                }
                if (value >= 0 && stackValue >= 0) {
                  dataItem.setRaw(stackToItemKey, stackToItem);
                  this._reallyStackedTo[stackToSeries.uid] = stackToSeries;
                  stackToSeries._stackedSeries[this.uid] = this;
                  break;
                }
                if (value < 0 && stackValue < 0) {
                  dataItem.setRaw(stackToItemKey, stackToItem);
                  this._reallyStackedTo[stackToSeries.uid] = stackToSeries;
                  stackToSeries._stackedSeries[this.uid] = this;
                  break;
                }
              }
            } else {
              break;
            }
          } else {
            if (isNumber(value) && isNumber(stackValue)) {
              dataItem.setRaw(stackToItemKey, stackToItem);
              this._reallyStackedTo[stackToSeries.uid] = stackToSeries;
              stackToSeries._stackedSeries[this.uid] = this;
              break;
            }
          }
        }
      }
      index++;
    });
  }
  processXSelectionDataItem(dataItem, vcx, stacked) {
    each(this.__valueXShowFields, (key) => {
      let value = dataItem.get(key);
      if (value != null) {
        if (stacked) {
          value += this.getStackedXValueWorking(dataItem, key);
        }
        this._min("selectionMinX", value);
        this._max("selectionMaxX", value * vcx);
      }
    });
  }
  processYSelectionDataItem(dataItem, vcy, stacked) {
    each(this.__valueYShowFields, (key) => {
      let value = dataItem.get(key);
      if (value != null) {
        if (stacked) {
          value += this.getStackedYValueWorking(dataItem, key);
        }
        this._min("selectionMinY", value);
        this._max("selectionMaxY", value * vcy);
      }
    });
  }
  /**
   * @ignore
   */
  getStackedYValueWorking(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      const stackedToSeries = stackToItem.component;
      return stackToItem.get(key, 0) * stackedToSeries.get("vcy", 1) + this.getStackedYValueWorking(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  getStackedXValueWorking(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      const stackedToSeries = stackToItem.component;
      return stackToItem.get(key, 0) * stackedToSeries.get("vcx", 1) + this.getStackedXValueWorking(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  getStackedYValue(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      return stackToItem.get(key, 0) + this.getStackedYValue(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  getStackedXValue(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      return stackToItem.get(key, 0) + this.getStackedXValue(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  createLegendMarker(_dataItem) {
    this.updateLegendMarker();
  }
  _markDirtyAxes() {
    this._axesDirty = true;
    this.markDirty();
  }
  _markDataSetDirty() {
    this._afterDataChange();
    this._valuesDirty = true;
    this._dataProcessed = false;
    this._aggregatesCalculated = false;
    this.markDirty();
  }
  _clearDirty() {
    super._clearDirty();
    this._axesDirty = false;
    this._selectionProcessed = false;
    this._stackDirty = false;
    this._dataProcessed = false;
  }
  _positionBullet(bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      let dataItem = sprite.dataItem;
      let locationX = bullet.get("locationX", dataItem.get("locationX", 0.5));
      let locationY = bullet.get("locationY", dataItem.get("locationY", 0.5));
      let xAxis = this.get("xAxis");
      let yAxis = this.get("yAxis");
      let exactLocationX = this.get("exactLocationX", false);
      let exactLocationY = this.get("exactLocationY", false);
      let positionX = xAxis.getDataItemPositionX(dataItem, this._xField, locationX, this.get("vcx", 1), exactLocationX);
      let positionY = yAxis.getDataItemPositionY(dataItem, this._yField, locationY, this.get("vcy", 1), exactLocationY);
      let point = this.getPoint(positionX, positionY);
      let left = dataItem.get("left", point.x);
      let right = dataItem.get("right", point.x);
      let top = dataItem.get("top", point.y);
      let bottom = dataItem.get("bottom", point.y);
      let x = 0;
      let y = 0;
      let w = right - left;
      let h = bottom - top;
      if (this._shouldShowBullet(positionX, positionY)) {
        sprite.setPrivate("visible", !bullet.getPrivate("hidden"));
        let field = bullet.get("field");
        const baseAxis = this.get("baseAxis");
        const xAxis2 = this.get("xAxis");
        const yAxis2 = this.get("yAxis");
        if (field != void 0) {
          let realField;
          if (baseAxis == xAxis2) {
            if (field == "value") {
              realField = this._yField;
            } else if (field == "open") {
              realField = this._yOpenField;
            } else if (field == "high") {
              realField = this._yHighField;
            } else if (field == "low") {
              realField = this._yLowField;
            }
            if (realField) {
              positionY = yAxis2.getDataItemPositionY(dataItem, realField, 0, this.get("vcy", 1), exactLocationY);
              point = yAxis2.get("renderer").positionToPoint(positionY);
              y = point.y;
              x = left + w * locationX;
            }
          } else {
            if (field == "value") {
              realField = this._xField;
            } else if (field == "open") {
              realField = this._xOpenField;
            } else if (field == "high") {
              realField = this._xHighField;
            } else if (field == "low") {
              realField = this._xLowField;
            }
            if (realField) {
              positionX = xAxis2.getDataItemPositionX(dataItem, realField, 0, this.get("vcx", 1), exactLocationX);
              point = xAxis2.get("renderer").positionToPoint(positionX);
              x = point.x;
              y = bottom - h * locationY;
            }
          }
        } else {
          x = left + w * locationX;
          y = bottom - h * locationY;
        }
        const stacked = bullet.get("stacked");
        if (stacked) {
          const chart = this.chart;
          if (baseAxis == xAxis2) {
            let previousBullet = this._bullets[positionX + "_" + positionY];
            if (previousBullet) {
              let previousBounds = previousBullet.bounds();
              let bounds = sprite.localBounds();
              let yo = y;
              y = previousBounds.top;
              if (stacked == "down") {
                y = previousBounds.bottom - bounds.top;
              } else if (stacked == "auto") {
                if (chart) {
                  if (yo < chart.plotContainer.height() / 2) {
                    y = previousBounds.bottom - bounds.top;
                  } else {
                    y += bounds.bottom;
                  }
                }
              } else {
                y += bounds.bottom;
              }
            }
            this._bullets[positionX + "_" + positionY] = sprite;
          } else {
            let previousBullet = this._bullets[positionX + "_" + positionY];
            if (previousBullet) {
              let previousBounds = previousBullet.bounds();
              let bounds = sprite.localBounds();
              let xo = x;
              x = previousBounds.right;
              if (stacked == "down") {
                x = previousBounds.left - bounds.right;
              } else if (stacked == "auto") {
                if (chart) {
                  if (xo < chart.plotContainer.width() / 2) {
                    x = previousBounds.left - bounds.right;
                  } else {
                    x -= bounds.left;
                  }
                }
              } else {
                x -= bounds.left;
              }
            }
            this._bullets[positionX + "_" + positionY] = sprite;
          }
        }
        if (sprite.isType("Label")) {
          sprite.setPrivate("maxWidth", Math.abs(w));
          sprite.setPrivate("maxHeight", Math.abs(h));
        }
        sprite.setAll({ x, y });
      } else {
        sprite.setPrivate("visible", false);
      }
    }
  }
  _shouldShowBullet(_positionX, _positionY) {
    return this._showBullets;
  }
  /**
   * @ignore
   */
  setDataSet(id) {
    if (this._dataSets[id]) {
      this._handleDataSetChange();
      this._dataItems = this._dataSets[id];
      this._markDataSetDirty();
      this._dataSetId = id;
      const type = "datasetchanged";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this, id });
      }
    }
  }
  /**
   * @ignore
   */
  resetGrouping() {
    each2(this._dataSets, (_key, dataSet) => {
      if (dataSet != this._mainDataItems) {
        each(dataSet, (dataItem) => {
          dataItem.dispose();
        });
      }
    });
    this._dataSets = {};
    this._dataItems = this.mainDataItems;
  }
  _handleDataSetChange() {
    each(this._dataItems, (dataItem) => {
      let bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          if (bullet) {
            let sprite = bullet.get("sprite");
            if (sprite) {
              sprite.setPrivate("visible", false);
            }
          }
        });
      }
    });
    this._selectionProcessed = false;
  }
  /**
   * Shows hidden series.
   *
   * @param   duration  Duration of animation in milliseconds
   * @return            Animation promise
   */
  show(duration) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      this._fixVC();
      let promises = [];
      promises.push(_super.show.call(this, duration).then(() => {
        this._isShowing = false;
        let xAxis = this.get("xAxis");
        let yAxis = this.get("yAxis");
        let baseAxis = this.get("baseAxis");
        if (yAxis !== baseAxis) {
          yAxis.markDirtySelectionExtremes();
        }
        if (xAxis !== baseAxis) {
          xAxis.markDirtySelectionExtremes();
        }
      }));
      promises.push(this.bulletsContainer.show(duration));
      promises.push(this._sequencedShowHide(true, duration));
      yield Promise.all(promises);
    });
  }
  /**
   * Hides series.
   *
   * @param   duration  Duration of animation in milliseconds
   * @return            Animation promise
   */
  hide(duration) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      this._fixVC();
      let promises = [];
      promises.push(_super.hide.call(this, duration).then(() => {
        this._isHiding = false;
      }));
      promises.push(this.bulletsContainer.hide(duration));
      promises.push(this._sequencedShowHide(false, duration));
      yield Promise.all(promises);
    });
  }
  /**
   * Shows series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  showDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: { get: () => super.showDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      if (!isNumber(duration)) {
        duration = this.get("stateAnimationDuration", 0);
      }
      const easing = this.get("stateAnimationEasing");
      each(this._valueFields, (key) => {
        promises.push(dataItem.animate({ key: key + "Working", to: dataItem.get(key), duration, easing }).waitForStop());
      });
      yield Promise.all(promises);
    });
  }
  /**
   * Hides series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  hideDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: { get: () => super.hideDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const hiddenState = this.states.create("hidden", {});
      if (!isNumber(duration)) {
        duration = hiddenState.get("stateAnimationDuration", this.get("stateAnimationDuration", 0));
      }
      const easing = hiddenState.get("stateAnimationEasing", this.get("stateAnimationEasing"));
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const baseAxis = this.get("baseAxis");
      const stacked = this.get("stacked");
      if (baseAxis === xAxis || !baseAxis) {
        each(this._valueYFields, (key) => {
          let min2 = yAxis.getPrivate("min");
          let baseValue = yAxis.baseValue();
          if (isNumber(min2) && min2 > baseValue) {
            baseValue = min2;
          }
          if (stacked) {
            baseValue = 0;
          }
          let value = dataItem.get(key);
          if (value != null) {
            promises.push(dataItem.animate({ key: key + "Working", to: baseValue, duration, easing }).waitForStop());
          }
        });
      }
      if (baseAxis === yAxis || !baseAxis) {
        let min2 = xAxis.getPrivate("min");
        let baseValue = xAxis.baseValue();
        if (isNumber(min2) && min2 > baseValue) {
          baseValue = min2;
        }
        if (stacked) {
          baseValue = 0;
        }
        each(this._valueXFields, (key) => {
          let value = dataItem.get(key);
          if (value != null) {
            promises.push(dataItem.animate({ key: key + "Working", to: baseValue, duration, easing }).waitForStop());
          }
        });
      }
      yield Promise.all(promises);
    });
  }
  _markDirtyStack() {
    this._stackDirty = true;
    this.markDirty();
    this._markStakedDirtyStack();
  }
  _markStakedDirtyStack() {
    const stackedSeries = this._stackedSeries;
    if (stackedSeries) {
      each2(stackedSeries, (_key, value) => {
        if (!value._stackDirty) {
          value._markDirtyStack();
        }
      });
    }
  }
  _afterChanged() {
    super._afterChanged();
    if (this._skipped) {
      this._markDirtyAxes();
      this._skipped = false;
    }
  }
  /**
   * Shows a tooltip for specific data item.
   *
   * @param  dataItem  Data item
   */
  showDataItemTooltip(dataItem) {
    if (!this.getPrivate("doNotUpdateLegend")) {
      this.updateLegendMarker(dataItem);
      this.updateLegendValue(dataItem);
    }
    const tooltip = this.get("tooltip");
    const exactLocationX = this.get("exactLocationX", false);
    const exactLocationY = this.get("exactLocationY", false);
    if (tooltip) {
      if (!this.isHidden() && this.get("visible")) {
        tooltip._setDataItem(dataItem);
        if (dataItem) {
          let locationX = this.get("locationX", 0);
          let locationY = this.get("locationY", 1);
          let itemLocationX = dataItem.get("locationX", locationX);
          let itemLocationY = dataItem.get("locationY", locationY);
          const xAxis = this.get("xAxis");
          const yAxis = this.get("yAxis");
          const vcx = this.get("vcx", 1);
          const vcy = this.get("vcy", 1);
          const xPos = xAxis.getDataItemPositionX(dataItem, this._tooltipFieldX, this._aLocationX0 + (this._aLocationX1 - this._aLocationX0) * itemLocationX, vcx, exactLocationX);
          const yPos = yAxis.getDataItemPositionY(dataItem, this._tooltipFieldY, this._aLocationY0 + (this._aLocationY1 - this._aLocationY0) * itemLocationY, vcy, exactLocationY);
          const point = this.getPoint(xPos, yPos);
          let show = true;
          each(this._valueFields, (field) => {
            if (dataItem.get(field) == null) {
              show = false;
            }
          });
          if (show) {
            const chart = this.chart;
            if (chart && chart.inPlot(point)) {
              tooltip.label.text.markDirtyText();
              tooltip.set("tooltipTarget", this._getTooltipTarget(dataItem));
              tooltip.set("pointTo", this._display.toGlobal({ x: point.x, y: point.y }));
            } else {
              tooltip._setDataItem(void 0);
            }
          } else {
            tooltip._setDataItem(void 0);
          }
        }
      } else {
        this.hideTooltip();
      }
    }
  }
  hideTooltip() {
    const tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.set("tooltipTarget", this);
    }
    return super.hideTooltip();
  }
  _getTooltipTarget(dataItem) {
    if (this.get("seriesTooltipTarget") == "bullet") {
      const bullets = dataItem.bullets;
      if (bullets && bullets.length > 0) {
        const bullet = bullets[0];
        const sprite = bullet.get("sprite");
        if (sprite) {
          return sprite;
        }
      }
    }
    return this;
  }
  /**
   * @ignore
   */
  updateLegendValue(dataItem) {
    const legendDataItem = this.get("legendDataItem");
    if (legendDataItem) {
      const label = legendDataItem.get("label");
      if (label) {
        let txt = "";
        if (dataItem) {
          label._setDataItem(dataItem);
          txt = this.get("legendLabelText", label.get("text", this.get("name", "")));
        } else {
          label._setDataItem(this._emptyDataItem);
          txt = this.get("legendRangeLabelText", this.get("legendLabelText", label.get("text", this.get("name", ""))));
        }
        label.set("text", txt);
      }
      const valueLabel = legendDataItem.get("valueLabel");
      if (valueLabel) {
        let txt = "";
        if (dataItem) {
          valueLabel._setDataItem(dataItem);
          txt = this.get("legendValueText", valueLabel.get("text", ""));
        } else {
          valueLabel._setDataItem(this._emptyDataItem);
          txt = this.get("legendRangeValueText", valueLabel.get("text", ""));
        }
        valueLabel.set("text", txt);
      }
    }
  }
  _getItemReaderLabel() {
    let text = "X: {" + this._xField;
    if (this.get("xAxis").isType("DateAxis")) {
      text += ".formatDate()";
    }
    text += "}; Y: {" + this._yField;
    if (this.get("yAxis").isType("DateAxis")) {
      text += ".formatDate()";
    }
    text += "}";
    return text;
  }
  /**
   * @ignore
   */
  getPoint(positionX, positionY) {
    let x = this.get("xAxis").get("renderer").positionToCoordinate(positionX);
    let y = this.get("yAxis").get("renderer").positionToCoordinate(positionY);
    let max2 = 999999999;
    if (y < -max2) {
      y = -max2;
    }
    if (y > max2) {
      y = max2;
    }
    if (x < -max2) {
      x = -max2;
    }
    if (x > max2) {
      x = max2;
    }
    return { x, y };
  }
  _shouldInclude(_position) {
    return true;
  }
  /**
   * @ignore
   */
  handleCursorHide() {
    this.hideTooltip();
    this.updateLegendValue(void 0);
    this.updateLegendMarker(void 0);
  }
  _afterDataChange() {
    super._afterDataChange();
    this.get("xAxis")._markDirtyKey("start");
    this.get("yAxis")._markDirtyKey("start");
    this.resetExtremes();
  }
  /**
   * Resets cached axis scale values.
   */
  resetExtremes() {
    this.setPrivate("selectionMinX", void 0);
    this.setPrivate("selectionMaxX", void 0);
    this.setPrivate("selectionMinY", void 0);
    this.setPrivate("selectionMaxY", void 0);
    this.setPrivate("minX", void 0);
    this.setPrivate("minY", void 0);
    this.setPrivate("maxX", void 0);
    this.setPrivate("maxY", void 0);
  }
  /**
   * Creates and returns an axis range object.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/} for more info
   * @param   axisDataItem  Axis data item
   * @return                Axis range
   */
  createAxisRange(axisDataItem) {
    return this.axisRanges.push({
      axisDataItem
    });
  }
  /**
   * A list of series's main (ungrouped) data items.
   *
   * @return  Data items
   */
  get mainDataItems() {
    return this._mainDataItems;
  }
  /**
   * @ignore
   */
  _adjustStartIndex(index) {
    const xAxis = this.get("xAxis");
    const baseAxis = this.get("baseAxis");
    if (baseAxis == xAxis && xAxis.isType("DateAxis")) {
      const baseDuration = xAxis.baseDuration();
      const minSelection = xAxis.getPrivate("selectionMin", xAxis.getPrivate("min", 0));
      const dl = baseDuration * this.get("locationX", 0.5);
      let value = -Infinity;
      while (value < minSelection) {
        const dataItem = this.dataItems[index];
        if (dataItem) {
          const open = dataItem.open;
          if (open) {
            value = open["valueX"];
          } else {
            value = dataItem.get("valueX", 0);
          }
          value += dl;
          if (value < minSelection) {
            index++;
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
    return index;
  }
};
Object.defineProperty(XYSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYSeries"
});
Object.defineProperty(XYSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([XYSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/BaseColumnSeries.js
var BaseColumnSeries = class _BaseColumnSeries extends XYSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_ph", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_pw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _makeGraphics(listTemplate, dataItem) {
    return this.makeColumn(dataItem, listTemplate);
  }
  _makeFieldNames() {
    super._makeFieldNames();
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const categoryAxis = "CategoryAxis";
    const valueAxis = "ValueAxis";
    if (xAxis.isType(categoryAxis)) {
      if (!this.get("openCategoryXField")) {
        this._xOpenField = this._xField;
      }
    }
    if (xAxis.isType(valueAxis)) {
      if (!this.get("openValueXField")) {
        this._xOpenField = this._xField;
      }
    }
    if (yAxis.isType(categoryAxis)) {
      if (!this.get("openCategoryYField")) {
        this._yOpenField = this._yField;
      }
    }
    if (yAxis.isType(valueAxis)) {
      if (!this.get("openValueYField")) {
        this._yOpenField = this._yField;
      }
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const len = this.dataItems.length;
    const startIndex = Math.max(0, this.startIndex() - 2);
    const endIndex = Math.min(this.endIndex() + 2, len - 1);
    if (xAxis.inited && yAxis.inited) {
      for (let i = startIndex; i <= endIndex; i++) {
        let dataItem = this.dataItems[i];
        this._createGraphics(dataItem);
      }
    }
  }
  _updateChildren() {
    const chart = this.chart;
    if (chart) {
      this._ph = chart.plotContainer.height();
      this._pw = chart.plotContainer.width();
    }
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    const columnsTemplate = this.columns.template;
    if (this.isDirty("fill")) {
      if (columnsTemplate.get("fill") == null) {
        columnsTemplate.set("fill", this.get("fill"));
      }
    }
    if (this.isDirty("fillPattern")) {
      if (columnsTemplate.get("fillPattern") == null) {
        columnsTemplate.set("fillPattern", this.get("fillPattern"));
      }
    }
    if (this.isDirty("stroke")) {
      if (columnsTemplate.get("stroke") == null) {
        columnsTemplate.set("stroke", this.get("stroke"));
      }
    }
    let index = 0;
    let clusterCount = 0;
    let i = 0;
    each(baseAxis.series, (series) => {
      if (series instanceof _BaseColumnSeries) {
        const stacked = series.get("stacked");
        if (stacked && i == 0) {
          clusterCount++;
        }
        if (!stacked && series.get("clustered")) {
          clusterCount++;
        }
      }
      if (series === this) {
        index = clusterCount - 1;
      }
      i++;
    });
    if (!this.get("clustered")) {
      index = 0;
      clusterCount = 1;
    }
    if (clusterCount === 0) {
      clusterCount = 1;
      index = 0;
    }
    const xRenderer = xAxis.get("renderer");
    const yRenderer = yAxis.get("renderer");
    const cellStartLocation = "cellStartLocation";
    const cellEndLocation = "cellEndLocation";
    const cellLocationX0 = xRenderer.get(cellStartLocation, 0);
    const cellLocationX1 = xRenderer.get(cellEndLocation, 1);
    const cellLocationY0 = yRenderer.get(cellStartLocation, 0);
    const cellLocationY1 = yRenderer.get(cellEndLocation, 1);
    this._aLocationX0 = cellLocationX0 + index / clusterCount * (cellLocationX1 - cellLocationX0);
    this._aLocationX1 = cellLocationX0 + (index + 1) / clusterCount * (cellLocationX1 - cellLocationX0);
    ;
    this._aLocationY0 = cellLocationY0 + index / clusterCount * (cellLocationY1 - cellLocationY0);
    this._aLocationY1 = cellLocationY0 + (index + 1) / clusterCount * (cellLocationY1 - cellLocationY0);
    if (xAxis.inited && yAxis.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty) {
        const len = this.dataItems.length;
        let startIndex = Math.max(0, this.startIndex() - 2);
        let endIndex = Math.min(this.endIndex() + 2, len - 1);
        for (let i2 = 0; i2 < startIndex; i2++) {
          this._toggleColumn(this.dataItems[i2], false);
        }
        let previous = this.dataItems[startIndex];
        for (let i2 = startIndex; i2 <= endIndex; i2++) {
          let dataItem = this.dataItems[i2];
          if (dataItem.get("valueX") != null && dataItem.get("valueY") != null) {
            previous = dataItem;
            if (i2 > 0 && startIndex > 0) {
              for (let j = i2 - 1; j >= 0; j--) {
                let dataItem2 = this.dataItems[j];
                if (dataItem2.get("valueX") != null && dataItem2.get("valueY") != null) {
                  previous = dataItem2;
                  break;
                }
              }
            }
            break;
          } else {
            this._toggleColumn(dataItem, false);
          }
        }
        for (let i2 = startIndex; i2 <= endIndex; i2++) {
          let dataItem = this.dataItems[i2];
          this._updateGraphics(dataItem, previous);
          if (dataItem.get("valueX") != null && dataItem.get("valueY") != null) {
            previous = dataItem;
          }
        }
        for (let i2 = endIndex + 1; i2 < len; i2++) {
          this._toggleColumn(this.dataItems[i2], false);
        }
      }
    } else {
      this._skipped = true;
    }
    if (!this.getPrivate("doNotUpdateLegend")) {
      this.updateLegendMarker(this.get("tooltipDataItem"));
    }
    super._updateChildren();
  }
  _createGraphics(dataItem) {
    let graphics = dataItem.get("graphics");
    if (!graphics) {
      graphics = this._makeGraphics(this.columns, dataItem);
      dataItem.set("graphics", graphics);
      graphics._setDataItem(dataItem);
      const legendDataItem = dataItem.get("legendDataItem");
      if (legendDataItem) {
        const markerRectangle = legendDataItem.get("markerRectangle");
        if (markerRectangle) {
          const ds = markerRectangle.states.lookup("default");
          each(visualSettings, (setting) => {
            const value = graphics.get(setting, this.get(setting));
            markerRectangle.set(setting, value);
            ds.set(setting, value);
          });
        }
      }
      let graphicsArray = dataItem.get("rangeGraphics");
      if (graphicsArray) {
        each(graphicsArray, (graphics2) => {
          graphics2.dispose();
        });
      }
      graphicsArray = [];
      dataItem.setRaw("rangeGraphics", graphicsArray);
      this.axisRanges.each((axisRange) => {
        const container = axisRange.container;
        const rangeGraphics = this._makeGraphics(axisRange.columns, dataItem);
        if (graphicsArray) {
          graphicsArray.push(rangeGraphics);
        }
        rangeGraphics.setPrivate("list", axisRange.columns);
        container.children.push(rangeGraphics);
      });
    }
  }
  createAxisRange(axisDataItem) {
    each(this.dataItems, (dataItem) => {
      const graphics = dataItem.get("graphics");
      if (graphics) {
        graphics.dispose();
        dataItem.set("graphics", void 0);
      }
    });
    return super.createAxisRange(axisDataItem);
  }
  _updateGraphics(dataItem, previousDataItem) {
    let graphics = dataItem.get("graphics");
    const xField = this._xField;
    const yField = this._yField;
    const valueX = dataItem.get(xField);
    const valueY = dataItem.get(yField);
    if (valueX != null && valueY != null) {
      const xOpenField = this._xOpenField;
      const yOpenField = this._yOpenField;
      const locationX = this.get("locationX", dataItem.get("locationX", 0.5));
      const locationY = this.get("locationY", dataItem.get("locationY", 0.5));
      const openLocationX = this.get("openLocationX", dataItem.get("openLocationX", locationX));
      const openLocationY = this.get("openLocationY", dataItem.get("openLocationY", locationY));
      const width = graphics.get("width");
      const height = graphics.get("height");
      const stacked = this.get("stacked");
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const baseAxis = this.get("baseAxis");
      const xStart = xAxis.get("start");
      const xEnd = xAxis.get("end");
      const yStart = yAxis.get("start");
      const yEnd = yAxis.get("end");
      let l;
      let r;
      let t;
      let b;
      let vcy = this.get("vcy", 1);
      let vcx = this.get("vcx", 1);
      let fitW = false;
      let fitH = false;
      if (yAxis.isType("CategoryAxis") && xAxis.isType("CategoryAxis")) {
        let startLocation = this._aLocationX0 + openLocationX - 0.5;
        let endLocation = this._aLocationX1 + locationX - 0.5;
        if (width instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - width.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        l = xAxis.getDataItemPositionX(dataItem, xOpenField, startLocation, vcx);
        r = xAxis.getDataItemPositionX(dataItem, xField, endLocation, vcx);
        startLocation = this._aLocationY0 + openLocationY - 0.5;
        endLocation = this._aLocationY1 + locationY - 0.5;
        if (height instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - height.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        t = yAxis.getDataItemPositionY(dataItem, yOpenField, startLocation, vcy);
        b = yAxis.getDataItemPositionY(dataItem, yField, endLocation, vcy);
        dataItem.setRaw("point", { x: l + (r - l) / 2, y: t + (b - t) / 2 });
      } else if (xAxis === baseAxis) {
        let startLocation = this._aLocationX0 + openLocationX - 0.5;
        let endLocation = this._aLocationX1 + locationX - 0.5;
        if (width instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - width.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        l = xAxis.getDataItemPositionX(dataItem, xOpenField, startLocation, vcx);
        r = xAxis.getDataItemPositionX(dataItem, xField, endLocation, vcx);
        t = yAxis.getDataItemPositionY(dataItem, yField, locationY, vcy);
        if (this._yOpenField !== this._yField) {
          b = yAxis.getDataItemPositionY(dataItem, yOpenField, openLocationY, vcy);
        } else {
          if (stacked) {
            let stackToItemY = dataItem.get("stackToItemY");
            if (stackToItemY) {
              b = yAxis.getDataItemPositionY(stackToItemY, yField, openLocationY, stackToItemY.component.get("vcy"));
            } else {
              b = yAxis.basePosition();
            }
          } else {
            b = yAxis.basePosition();
          }
        }
        dataItem.setRaw("point", { x: l + (r - l) / 2, y: t });
        fitH = true;
      } else if (yAxis === baseAxis) {
        let startLocation = this._aLocationY0 + openLocationY - 0.5;
        let endLocation = this._aLocationY1 + locationY - 0.5;
        if (height instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - height.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        t = yAxis.getDataItemPositionY(dataItem, yOpenField, startLocation, vcy);
        b = yAxis.getDataItemPositionY(dataItem, yField, endLocation, vcy);
        r = xAxis.getDataItemPositionX(dataItem, xField, locationX, vcx);
        if (this._xOpenField !== this._xField) {
          l = xAxis.getDataItemPositionX(dataItem, xOpenField, openLocationX, vcx);
        } else {
          if (stacked) {
            let stackToItemX = dataItem.get("stackToItemX");
            if (stackToItemX) {
              l = xAxis.getDataItemPositionX(stackToItemX, xField, openLocationX, stackToItemX.component.get("vcx"));
            } else {
              l = xAxis.basePosition();
            }
          } else {
            l = xAxis.basePosition();
          }
        }
        fitW = true;
        dataItem.setRaw("point", { x: r, y: t + (b - t) / 2 });
      }
      this._updateSeriesGraphics(dataItem, graphics, l, r, t, b, fitW, fitH);
      if (l < xStart && r < xStart || l > xEnd && r > xEnd || t < yStart && b <= yStart || t >= yEnd && b > yEnd || isNaN(l) || isNaN(t)) {
        this._toggleColumn(dataItem, false);
      } else {
        this._toggleColumn(dataItem, true);
      }
      let rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (graphics2) => {
          this._updateSeriesGraphics(dataItem, graphics2, l, r, t, b, fitW, fitH);
        });
      }
      this._applyGraphicsStates(dataItem, previousDataItem);
    } else {
      this._toggleColumn(dataItem, false);
    }
  }
  _updateSeriesGraphics(dataItem, graphics, l, r, t, b, fitW, fitH) {
    const width = graphics.get("width");
    const height = graphics.get("height");
    const maxWidth = graphics.get("maxWidth");
    const maxHeight = graphics.get("maxHeight");
    const ptl = this.getPoint(l, t);
    const pbr = this.getPoint(r, b);
    const tooltipPoint = dataItem.get("point");
    if (tooltipPoint) {
      const point = this.getPoint(tooltipPoint.x, tooltipPoint.y);
      tooltipPoint.x = point.x + this._x;
      tooltipPoint.y = point.y + this._y;
    }
    l = ptl.x;
    r = pbr.x;
    t = ptl.y;
    b = pbr.y;
    if (isNumber(width)) {
      const offset = (r - l - width) / 2;
      l += offset;
      r -= offset;
    }
    if (isNumber(maxWidth) && maxWidth < Math.abs(r - l)) {
      const offset = (r - l - maxWidth) / 2;
      l += offset;
      r -= offset;
    }
    if (isNumber(height)) {
      const offset = (b - t - height) / 2;
      t += offset;
      b -= offset;
    }
    if (isNumber(maxHeight) && maxHeight < Math.abs(b - t)) {
      const offset = (b - t - maxHeight) / 2;
      t += offset;
      b -= offset;
    }
    if (this.get("adjustBulletPosition")) {
      if (fitW) {
        r = Math.min(Math.max(0, r), this._pw);
        l = Math.min(Math.max(0, l), this._pw);
      }
      if (fitH) {
        t = Math.min(Math.max(0, t), this._ph);
        b = Math.min(Math.max(0, b), this._ph);
      }
    }
    dataItem.setRaw("left", l);
    dataItem.setRaw("right", r);
    dataItem.setRaw("top", t);
    dataItem.setRaw("bottom", b);
    graphics.setPrivate("width", r - l);
    graphics.setPrivate("height", b - t);
    graphics.set("x", l);
    graphics.set("y", b - (b - t));
  }
  _handleDataSetChange() {
    super._handleDataSetChange();
    each(this._dataItems, (dataItem) => {
      this._toggleColumn(dataItem, false);
    });
  }
  _applyGraphicsStates(dataItem, previousDataItem) {
    const graphics = dataItem.get("graphics");
    const dropFromOpen = graphics.states.lookup("dropFromOpen");
    const riseFromOpen = graphics.states.lookup("riseFromOpen");
    const dropFromPrevious = graphics.states.lookup("dropFromPrevious");
    const riseFromPrevious = graphics.states.lookup("riseFromPrevious");
    if (dropFromOpen || dropFromPrevious || riseFromOpen || riseFromPrevious) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const baseAxis = this.get("baseAxis");
      let open;
      let close;
      let previousClose;
      if (baseAxis === xAxis && yAxis.isType("ValueAxis")) {
        open = dataItem.get(this._yOpenField);
        close = dataItem.get(this._yField);
        previousClose = previousDataItem.get(this._yField);
      } else if (baseAxis === yAxis && xAxis.isType("ValueAxis")) {
        open = dataItem.get(this._xOpenField);
        close = dataItem.get(this._xField);
        previousClose = previousDataItem.get(this._xField);
      }
      if (isNumber(open) && isNumber(close)) {
        if (close < open) {
          if (dropFromOpen) {
            dropFromOpen.apply();
          }
        } else {
          if (riseFromOpen) {
            riseFromOpen.apply();
          }
        }
        if (isNumber(previousClose)) {
          if (close < previousClose) {
            if (dropFromPrevious) {
              dropFromPrevious.apply();
            }
          } else {
            if (riseFromPrevious) {
              riseFromPrevious.apply();
            }
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const graphics = dataItem.get("graphics");
    if (graphics) {
      this.columns.removeValue(graphics);
      graphics.dispose();
    }
    const rangeGraphics = dataItem.get("rangeGraphics");
    if (rangeGraphics) {
      each(rangeGraphics, (graphics2) => {
        const list = graphics2.getPrivate("list");
        if (list) {
          list.removeValue(graphics2);
        }
        graphics2.dispose();
      });
    }
  }
  /**
   * Hides series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  hideDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: { get: () => super.hideDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const graphics = dataItem.get("graphics");
      if (graphics) {
        promises.push(graphics.hide(duration));
      }
      const rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (graphics2) => {
          promises.push(graphics2.hide(duration));
        });
      }
      yield Promise.all(promises);
    });
  }
  _toggleColumn(dataItem, visible) {
    const graphics = dataItem.get("graphics");
    if (graphics) {
      graphics.setPrivate("visible", visible);
    }
    const rangeGraphics = dataItem.get("rangeGraphics");
    if (rangeGraphics) {
      each(rangeGraphics, (graphics2) => {
        graphics2.setPrivate("visible", visible);
      });
    }
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        bullet.setPrivate("hidden", !visible);
      });
    }
  }
  /**
   * Shows series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  showDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: { get: () => super.showDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      const graphics = dataItem.get("graphics");
      if (graphics) {
        promises.push(graphics.show(duration));
      }
      const rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (graphics2) => {
          promises.push(graphics2.show(duration));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * @ignore
   */
  updateLegendMarker(dataItem) {
    let legendDataItem = this.get("legendDataItem");
    if (this.get("useLastColorForLegendMarker")) {
      if (!dataItem) {
        const lastDataItem = this.dataItems[this.endIndex() - 1];
        if (lastDataItem) {
          dataItem = lastDataItem;
        }
      }
    }
    if (legendDataItem) {
      let graphics = this.columns.template;
      if (dataItem) {
        let column = dataItem.get("graphics");
        if (column) {
          graphics = column;
        }
      }
      const markerRectangle = legendDataItem.get("markerRectangle");
      if (markerRectangle) {
        if (!legendDataItem.get("itemContainer").get("disabled")) {
          const ds = markerRectangle.states.lookup("default");
          each(visualSettings, (setting) => {
            const value = graphics.get(setting, this.get(setting));
            markerRectangle.set(setting, value);
            ds.set(setting, value);
          });
        }
      }
    }
  }
  _getTooltipTarget(dataItem) {
    if (this.get("seriesTooltipTarget") == "bullet") {
      return super._getTooltipTarget(dataItem);
    }
    let column = dataItem.get("graphics");
    if (column) {
      return column;
    }
    return this;
  }
};
Object.defineProperty(BaseColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BaseColumnSeries"
});
Object.defineProperty(BaseColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYSeries.classNames.concat([BaseColumnSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/LineSeries.js
var LineSeries = class extends XYSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_endIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: line_default()
    });
    Object.defineProperty(this, "_fillGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: area_default()
    });
    Object.defineProperty(this, "_legendStroke", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_legendFill", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "strokes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
        themeTags: mergeTags(this.strokes.template.get("themeTags", []), ["line", "series", "stroke"])
      }, [this.strokes.template])))
    });
    Object.defineProperty(this, "fills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
        themeTags: mergeTags(this.strokes.template.get("themeTags", []), ["line", "series", "fill"])
      }, [this.fills.template])))
    });
    Object.defineProperty(this, "_fillTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_previousPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [0, 0, 0, 0]
    });
    Object.defineProperty(this, "_dindex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_sindex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _afterNew() {
    this._fillGenerator.y0(function(p) {
      return p[3];
    });
    this._fillGenerator.x0(function(p) {
      return p[2];
    });
    this._fillGenerator.y1(function(p) {
      return p[1];
    });
    this._fillGenerator.x1(function(p) {
      return p[0];
    });
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeStroke(strokes) {
    const stroke = this.mainContainer.children.push(strokes.make());
    strokes.push(stroke);
    return stroke;
  }
  /**
   * @ignore
   */
  makeFill(fills) {
    const fill = this.mainContainer.children.push(fills.make());
    fills.push(fill);
    return fill;
  }
  _updateChildren() {
    this._strokeTemplate = void 0;
    this._fillTemplate = void 0;
    let xAxis = this.get("xAxis");
    let yAxis = this.get("yAxis");
    if (this.isDirty("stroke")) {
      const stroke = this.get("stroke");
      this.strokes.template.set("stroke", stroke);
      const legendStroke = this._legendStroke;
      if (legendStroke) {
        legendStroke.states.lookup("default").set("stroke", stroke);
      }
    }
    if (this.isDirty("fill")) {
      const fill = this.get("fill");
      this.fills.template.set("fill", fill);
      const legendFill = this._legendFill;
      if (legendFill) {
        legendFill.states.lookup("default").set("fill", fill);
      }
    }
    if (this.isDirty("fillPattern")) {
      const fillPattern = this.get("fillPattern");
      this.fills.template.set("fillPattern", fillPattern);
      const legendFill = this._legendFill;
      if (legendFill) {
        legendFill.states.lookup("default").set("fillPattern", fillPattern);
      }
    }
    if (this.isDirty("curveFactory")) {
      const curveFactory = this.get("curveFactory");
      if (curveFactory) {
        this._strokeGenerator.curve(curveFactory);
        this._fillGenerator.curve(curveFactory);
      }
    }
    if (xAxis.inited && yAxis.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty || this.isDirty("connect") || this.isDirty("curveFactory")) {
        this.fills.each((fill) => {
          fill.setPrivate("visible", false);
        });
        this.strokes.each((fill) => {
          fill.setPrivate("visible", false);
        });
        this.axisRanges.each((axisRange) => {
          let fills = axisRange.fills;
          if (fills) {
            fills.each((fill) => {
              fill.setPrivate("visible", false);
            });
          }
          let strokes = axisRange.strokes;
          if (strokes) {
            strokes.each((stroke) => {
              stroke.setPrivate("visible", false);
            });
          }
        });
        let startIndex = this.startIndex();
        let strokeTemplateField = this.strokes.template.get("templateField");
        let fillTemplateField = this.fills.template.get("templateField");
        let strokeTemplateFound = true;
        let fillTemplateFound = true;
        if (strokeTemplateField) {
          strokeTemplateFound = false;
        }
        if (fillTemplateField) {
          fillTemplateFound = false;
        }
        for (let i = startIndex - 1; i >= 0; i--) {
          let dataItem = this.dataItems[i];
          let hasValues = true;
          let dataContext = dataItem.dataContext;
          if (strokeTemplateField) {
            if (dataContext[strokeTemplateField]) {
              strokeTemplateFound = true;
            }
          }
          if (fillTemplateField) {
            if (dataContext[fillTemplateField]) {
              fillTemplateFound = true;
            }
          }
          each(this._valueFields, (field) => {
            if (!isNumber(dataItem.get(field))) {
              hasValues = false;
            }
          });
          if (hasValues && strokeTemplateFound && fillTemplateFound) {
            startIndex = i;
            break;
          }
        }
        let len = this.dataItems.length;
        let endIndex = this.endIndex();
        if (endIndex < len) {
          endIndex++;
          for (let i = endIndex; i < len; i++) {
            let dataItem = this.dataItems[i];
            let hasValues = true;
            each(this._valueFields, (field) => {
              if (!isNumber(dataItem.get(field))) {
                hasValues = false;
              }
            });
            if (hasValues) {
              endIndex = i + 1;
              break;
            }
          }
        }
        if (startIndex > 0) {
          startIndex--;
        }
        this._endIndex = endIndex;
        this._clearGraphics();
        this._sindex = 0;
        this._dindex = startIndex;
        if (this.dataItems.length == 1) {
          this._startSegment(0);
        } else {
          while (this._dindex < endIndex - 1) {
            this._startSegment(this._dindex);
            this._sindex++;
          }
        }
      }
    } else {
      this._skipped = true;
    }
    super._updateChildren();
  }
  _clearGraphics() {
    this.strokes.clear();
    this.fills.clear();
    this.axisRanges.each((axisRange) => {
      axisRange.fills.clear();
      axisRange.strokes.clear();
    });
  }
  _startSegment(dataItemIndex) {
    let endIndex = this._endIndex;
    let currentEndIndex = endIndex;
    const autoGapCount = this.get("autoGapCount");
    const connect = this.get("connect");
    const fill = this.makeFill(this.fills);
    const fillTemplate = this._fillTemplate;
    const originalTemplate = this.fills.template;
    if (fillTemplate && fillTemplate != originalTemplate) {
      fill.template = fillTemplate;
    }
    fill.setPrivate("visible", true);
    const stroke = this.makeStroke(this.strokes);
    const strokeTemplate = this._strokeTemplate;
    if (strokeTemplate && strokeTemplate != this.strokes.template) {
      stroke.template = strokeTemplate;
    }
    stroke.setPrivate("visible", true);
    let xAxis = this.get("xAxis");
    let yAxis = this.get("yAxis");
    let baseAxis = this.get("baseAxis");
    let vcx = this.get("vcx", 1);
    let vcy = this.get("vcy", 1);
    let xField = this._xField;
    let yField = this._yField;
    let xOpenField = this._xOpenField;
    let yOpenField = this._yOpenField;
    const xOpenFieldValue = this.get("openValueXField");
    const yOpenFieldValue = this.get("openValueYField");
    if (!xOpenFieldValue) {
      xOpenField = this._xField;
    }
    if (!yOpenFieldValue) {
      yOpenField = this._yField;
    }
    const stacked = this.get("stacked");
    const basePosX = xAxis.basePosition();
    const basePosY = yAxis.basePosition();
    let baseField;
    if (baseAxis === yAxis) {
      baseField = this._yField;
    } else {
      baseField = this._xField;
    }
    const segments = [];
    let points = [];
    segments.push(points);
    const strokeTemplateField = this.strokes.template.get("templateField");
    const fillTemplateField = this.fills.template.get("templateField");
    let locationX = this.get("locationX", 0.5);
    let locationY = this.get("locationY", 0.5);
    let openLocationX = this.get("openLocationX", locationX);
    let openLocationY = this.get("openLocationY", locationY);
    const minDistance = this.get("minDistance", 0);
    let i;
    let fillVisible = this.fills.template.get("visible");
    if (this.axisRanges.length > 0) {
      fillVisible = true;
    }
    let getOpen = false;
    if (stacked || xOpenFieldValue || yOpenFieldValue) {
      getOpen = true;
    }
    const o = {
      points,
      segments,
      stacked,
      getOpen,
      basePosX,
      basePosY,
      fillVisible,
      xField,
      yField,
      xOpenField,
      yOpenField,
      vcx,
      vcy,
      baseAxis,
      xAxis,
      yAxis,
      locationX,
      locationY,
      openLocationX,
      openLocationY,
      minDistance
    };
    let rangeStrokeTemplate = this._strokeTemplate;
    let rangeFillTemplate = this._fillTemplate;
    for (i = dataItemIndex; i < currentEndIndex; i++) {
      this._dindex = i;
      const dataItem = this._dataItems[i];
      let valueX = dataItem.get(xField);
      let valueY = dataItem.get(yField);
      if (valueX == null || valueY == null) {
        if (!connect) {
          points = [];
          segments.push(points);
          o.points = points;
        }
      } else {
        this._getPoints(dataItem, o);
      }
      if (strokeTemplateField) {
        let strokeTemplate2 = dataItem.dataContext[strokeTemplateField];
        if (strokeTemplate2) {
          if (!(strokeTemplate2 instanceof Template)) {
            strokeTemplate2 = Template.new(strokeTemplate2);
          }
          this._strokeTemplate = strokeTemplate2;
          if (i > dataItemIndex) {
            currentEndIndex = i;
            break;
          } else {
            rangeStrokeTemplate = strokeTemplate2;
            stroke.template = strokeTemplate2;
          }
        }
      }
      if (fillTemplateField) {
        let fillTemplate2 = dataItem.dataContext[fillTemplateField];
        if (fillTemplate2) {
          if (!(fillTemplate2 instanceof Template)) {
            fillTemplate2 = Template.new(fillTemplate2);
          }
          this._fillTemplate = fillTemplate2;
          if (i > dataItemIndex) {
            currentEndIndex = i;
            break;
          } else {
            rangeFillTemplate = fillTemplate2;
            fill.template = fillTemplate2;
          }
        }
      }
      if (!connect) {
        let nextItem = this.dataItems[i + 1];
        if (nextItem) {
          if (baseAxis.shouldGap(dataItem, nextItem, autoGapCount, baseField)) {
            points = [];
            segments.push(points);
            o.points = points;
          }
        }
      }
    }
    fill.setRaw("userData", [dataItemIndex, i]);
    stroke.setRaw("userData", [dataItemIndex, i]);
    if (i === endIndex) {
      this._endLine(points, segments[0][0]);
    }
    if (stroke) {
      this._drawStroke(stroke, segments);
    }
    if (fill) {
      this._drawFill(fill, segments);
    }
    this.axisRanges.each((axisRange) => {
      const container = axisRange.container;
      const fills = axisRange.fills;
      const fill2 = this.makeFill(fills);
      if (container) {
        container.children.push(fill2);
      }
      fill2.setPrivate("visible", true);
      this._drawFill(fill2, segments);
      const strokes = axisRange.strokes;
      const stroke2 = this.makeStroke(strokes);
      if (container) {
        container.children.push(stroke2);
      }
      if (rangeStrokeTemplate && rangeStrokeTemplate != this.strokes.template) {
        stroke2.template = rangeStrokeTemplate;
      }
      if (rangeFillTemplate && rangeFillTemplate != this.fills.template) {
        fill2.template = rangeFillTemplate;
      }
      stroke2.setPrivate("visible", true);
      this._drawStroke(stroke2, segments);
      fill2.setRaw("userData", [dataItemIndex, i]);
      stroke2.setRaw("userData", [dataItemIndex, i]);
    });
  }
  _getPoints(dataItem, o) {
    let points = o.points;
    let itemLocationX = dataItem.get("locationX", o.locationX);
    let itemLocationY = dataItem.get("locationY", o.locationY);
    const exactLocationX = this.get("exactLocationX", false);
    const exactLocationY = this.get("exactLocationY", false);
    let xPos = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX, o.vcx, exactLocationX);
    let yPos = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY, o.vcy, exactLocationY);
    if (this._shouldInclude(xPos)) {
      const iPoint = this.getPoint(xPos, yPos);
      const point = [iPoint.x, iPoint.y];
      iPoint.x += this._x;
      iPoint.y += this._y;
      dataItem.set("point", iPoint);
      if (o.fillVisible) {
        let xPos0 = xPos;
        let yPos0 = yPos;
        if (o.baseAxis === o.xAxis) {
          yPos0 = o.basePosY;
        } else if (o.baseAxis === o.yAxis) {
          xPos0 = o.basePosX;
        }
        if (o.getOpen) {
          let valueX = dataItem.get(o.xOpenField);
          let valueY = dataItem.get(o.yOpenField);
          if (valueX != null && valueY != null) {
            let itemLocationX2 = dataItem.get("openLocationX", o.openLocationX);
            let itemLocationY2 = dataItem.get("openLocationY", o.openLocationY);
            if (o.stacked) {
              let stackToItemX = dataItem.get("stackToItemX");
              let stackToItemY = dataItem.get("stackToItemY");
              if (stackToItemX) {
                xPos0 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX2, stackToItemX.component.get("vcx"), exactLocationX);
                if (isNaN(xPos0)) {
                  xPos0 = o.basePosX;
                }
              } else {
                if (o.yAxis === o.baseAxis) {
                  xPos0 = o.basePosX;
                } else {
                  xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX2, o.vcx, exactLocationX);
                }
              }
              if (stackToItemY) {
                yPos0 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY2, stackToItemY.component.get("vcy"), exactLocationY);
                if (isNaN(yPos0)) {
                  yPos0 = o.basePosY;
                }
              } else {
                if (o.xAxis === o.baseAxis) {
                  yPos0 = o.basePosY;
                } else {
                  yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY2, o.vcy, exactLocationY);
                }
              }
            } else {
              xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX2, o.vcx, exactLocationX);
              yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY2, o.vcy, exactLocationY);
            }
          }
        }
        let closeIPoint = this.getPoint(xPos0, yPos0);
        point[2] = closeIPoint.x;
        point[3] = closeIPoint.y;
      }
      if (o.minDistance > 0) {
        const p0 = point[0];
        const p1 = point[1];
        const p2 = point[2];
        const p3 = point[3];
        const prev = this._previousPoint;
        const pp0 = prev[0];
        const pp1 = prev[1];
        const pp2 = prev[2];
        const pp3 = prev[3];
        if (Math.hypot(p0 - pp0, p1 - pp1) > o.minDistance || p2 && p3 && Math.hypot(p2 - pp2, p3 - pp3) > o.minDistance) {
          points.push(point);
          this._previousPoint = point;
        }
      } else {
        points.push(point);
      }
    }
  }
  _endLine(_points, _firstPoint) {
  }
  _drawStroke(graphics, segments) {
    if (graphics.get("visible") && !graphics.get("forceHidden")) {
      graphics.set("draw", (display) => {
        each(segments, (segment) => {
          this._strokeGenerator.context(display);
          this._strokeGenerator(segment);
        });
      });
    }
  }
  _drawFill(graphics, segments) {
    if (graphics.get("visible") && !graphics.get("forceHidden")) {
      graphics.set("draw", (display) => {
        each(segments, (segment) => {
          this._fillGenerator.context(display);
          this._fillGenerator(segment);
        });
      });
    }
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.fills = new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
      themeTags: mergeTags(axisRange.fills.template.get("themeTags", []), ["line", "series", "fill"])
    }, [this.fills.template, axisRange.fills.template]));
    axisRange.strokes = new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
      themeTags: mergeTags(axisRange.strokes.template.get("themeTags", []), ["line", "series", "stroke"])
    }, [this.strokes.template, axisRange.strokes.template]));
  }
  /**
   * @ignore
   */
  createLegendMarker(_dataItem) {
    const legendDataItem = this.get("legendDataItem");
    if (legendDataItem) {
      const marker = legendDataItem.get("marker");
      const markerRectangle = legendDataItem.get("markerRectangle");
      if (markerRectangle) {
        markerRectangle.setPrivate("visible", false);
      }
      marker.set("background", Rectangle.new(marker._root, { fillOpacity: 0, fill: color(0) }));
      const legendStroke = marker.children.push(Graphics._new(marker._root, {
        themeTags: ["line", "series", "legend", "marker", "stroke"],
        interactive: false
      }, [this.strokes.template]));
      this._legendStroke = legendStroke;
      const legendFill = marker.children.push(Graphics._new(marker._root, {
        themeTags: ["line", "series", "legend", "marker", "fill"]
      }, [this.fills.template]));
      this._legendFill = legendFill;
      const disabledColor = this._root.interfaceColors.get("disabled");
      legendStroke.states.create("disabled", { fill: disabledColor, stroke: disabledColor });
      legendFill.states.create("disabled", { fill: disabledColor, stroke: disabledColor });
      if (this.bullets.length > 0) {
        const bulletFunction = this.bullets.getIndex(0);
        if (bulletFunction) {
          const bullet = bulletFunction(marker._root, this, new DataItem(this, { legend: true }, {}));
          if (bullet) {
            const sprite = bullet.get("sprite");
            if (sprite instanceof Graphics) {
              sprite.states.create("disabled", { fill: disabledColor, stroke: disabledColor });
            }
            if (sprite) {
              sprite.setAll({
                tooltipText: void 0,
                tooltipHTML: void 0,
                focusable: void 0,
                focusableGroup: void 0,
                ariaLabel: void 0
              });
              marker.children.push(sprite);
              sprite.setAll({ x: marker.width() / 2, y: marker.height() / 2 });
              marker.events.on("boundschanged", () => {
                sprite.setAll({ x: marker.width() / 2, y: marker.height() / 2 });
              });
            }
          }
        }
      }
    }
  }
};
Object.defineProperty(LineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LineSeries"
});
Object.defineProperty(LineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYSeries.classNames.concat([LineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChart.js
var XYChart = class extends SerialChart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "xAxes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
    Object.defineProperty(this, "yAxes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
    Object.defineProperty(this, "topAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.chartContainer.children.push(Container.new(this._root, { width: p100, layout: this._root.verticalLayout }))
    });
    Object.defineProperty(this, "yAxesAndPlotContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.chartContainer.children.push(Container.new(this._root, { width: p100, height: p100, layout: this._root.horizontalLayout }))
    });
    Object.defineProperty(this, "bottomAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.chartContainer.children.push(Container.new(this._root, { width: p100, layout: this._root.verticalLayout }))
    });
    Object.defineProperty(this, "leftAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.yAxesAndPlotContainer.children.push(Container.new(this._root, { height: p100, layout: this._root.horizontalLayout }))
    });
    Object.defineProperty(this, "plotsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.yAxesAndPlotContainer.children.push(Container.new(this._root, { width: p100, height: p100, maskContent: false }))
    });
    Object.defineProperty(this, "plotContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotsContainer.children.push(Container.new(this._root, { width: p100, height: p100 }))
    });
    Object.defineProperty(this, "topPlotContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotsContainer.children.push(Container.new(this._root, { width: p100, height: p100 }))
    });
    Object.defineProperty(this, "gridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotContainer.children.push(Container.new(this._root, { width: p100, height: p100, isMeasured: false }))
    });
    Object.defineProperty(this, "topGridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, { width: p100, height: p100, isMeasured: false })
    });
    Object.defineProperty(this, "rightAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.yAxesAndPlotContainer.children.push(Container.new(this._root, { height: p100, layout: this._root.horizontalLayout }))
    });
    Object.defineProperty(this, "axisHeadersContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotContainer.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "zoomOutButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.topPlotContainer.children.push(Button.new(this._root, {
        themeTags: ["zoom"],
        icon: Graphics.new(this._root, {
          themeTags: ["button", "icon"]
        })
      }))
    });
    Object.defineProperty(this, "_movePoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { x: 0, y: 0 }
    });
    Object.defineProperty(this, "_wheelDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_otherCharts", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_movePoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_downStartX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downEndX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downStartY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downEndY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._defaultThemes.push(XYChartDefaultTheme.new(this._root));
    super._afterNew();
    this._disposers.push(this.xAxes);
    this._disposers.push(this.yAxes);
    const root = this._root;
    let verticalLayout = this._root.verticalLayout;
    const zoomOutButton = this.zoomOutButton;
    zoomOutButton.events.on("click", () => {
      this.zoomOut();
    });
    zoomOutButton.hide(0);
    zoomOutButton.states.lookup("default").set("opacity", 1);
    this.chartContainer.set("layout", verticalLayout);
    const plotContainer = this.plotContainer;
    plotContainer.children.push(this.seriesContainer);
    this._disposers.push(this._processAxis(this.xAxes, this.bottomAxesContainer));
    this._disposers.push(this._processAxis(this.yAxes, this.leftAxesContainer));
    plotContainer.children.push(this.topGridContainer);
    plotContainer.children.push(this.bulletsContainer);
    plotContainer.set("interactive", true);
    plotContainer.set("interactiveChildren", false);
    plotContainer.set("background", Rectangle.new(root, {
      themeTags: ["plotbackground", "xy", "background"]
    }));
    this._disposers.push(plotContainer.events.on("pointerdown", (event) => {
      this._handlePlotDown(event);
    }));
    this._disposers.push(plotContainer.events.on("globalpointerup", (event) => {
      this._handlePlotUp(event);
    }));
    this._disposers.push(plotContainer.events.on("globalpointermove", (event) => {
      this._handlePlotMove(event);
    }));
    this._maskGrid();
    this._setUpTouch();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("pinchZoomX") || this.isDirty("pinchZoomY") || this.get("panX") || this.get("panY")) {
      this._setUpTouch();
    }
  }
  _setUpTouch() {
    if (!this.plotContainer._display.cancelTouch) {
      this.plotContainer._display.cancelTouch = this.get("pinchZoomX") || this.get("pinchZoomY") || this.get("panX") || this.get("panY") ? true : false;
    }
  }
  _maskGrid() {
    this.gridContainer.set("maskContent", true);
    this.topGridContainer.set("maskContent", true);
  }
  _removeSeries(series) {
    series._unstack();
    if (series._posXDp) {
      series._posXDp.dispose();
    }
    if (series._posYDp) {
      series._posYDp.dispose();
    }
    series.set("baseAxis", void 0);
    const xAxis = series.get("xAxis");
    if (xAxis) {
      remove(xAxis.series, series);
      xAxis.markDirtyExtremes();
    }
    const yAxis = series.get("yAxis");
    if (yAxis) {
      remove(yAxis.series, series);
      yAxis.markDirtyExtremes();
    }
    const cursor = this.get("cursor");
    if (cursor) {
      const snapToSeries = cursor.get("snapToSeries");
      if (snapToSeries) {
        remove(snapToSeries, series);
      }
    }
    super._removeSeries(series);
  }
  /**
   * This method is invoked when mouse wheel is used over chart's plot
   * container, and handles zooming/pan.
   *
   * You can invoke this method manually, if you need to mimic chart's wheel
   * behavior over other elements of the chart.
   */
  handleWheel(event) {
    const wheelX = this.get("wheelX");
    const wheelY = this.get("wheelY");
    const plotContainer = this.plotContainer;
    const wheelEvent = event.originalEvent;
    let prevent = false;
    if (isLocalEvent(wheelEvent, this)) {
      prevent = true;
    } else {
      return;
    }
    const plotPoint = plotContainer.toLocal(event.point);
    const wheelStep = this.get("wheelStep", 0.2);
    const shiftY = wheelEvent.deltaY / 100;
    const shiftX = wheelEvent.deltaX / 100;
    const wheelZoomPositionX = this.get("wheelZoomPositionX");
    const wheelZoomPositionY = this.get("wheelZoomPositionY");
    if ((wheelX === "zoomX" || wheelX === "zoomXY") && shiftX != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("zoomX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.x / plotContainer.width());
          if (wheelZoomPositionX != null) {
            position = wheelZoomPositionX;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftX * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftX * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelY === "zoomX" || wheelY === "zoomXY") && shiftY != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("zoomX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.x / plotContainer.width());
          if (wheelZoomPositionX != null) {
            position = wheelZoomPositionX;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftY * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftY * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelX === "zoomY" || wheelX === "zoomXY") && shiftX != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("zoomY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.y / plotContainer.height());
          if (wheelZoomPositionY != null) {
            position = wheelZoomPositionY;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftX * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftX * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelY === "zoomY" || wheelY === "zoomXY") && shiftY != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("zoomY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.y / plotContainer.height());
          if (wheelZoomPositionY != null) {
            position = wheelZoomPositionY;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftY * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftY * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelX === "panX" || wheelX === "panXY") && shiftX != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("panX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftX;
          let newStart = start + delta;
          let newEnd = end + delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if ((wheelY === "panX" || wheelY === "panXY") && shiftY != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("panX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftY;
          let newStart = start + delta;
          let newEnd = end + delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if ((wheelX === "panY" || wheelX === "panXY") && shiftX != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("panY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftX;
          let newStart = start + delta;
          let newEnd = end + delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if ((wheelY === "panY" || wheelY === "panXY") && shiftY != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("panY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftY;
          let newStart = start - delta;
          let newEnd = end - delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if (prevent) {
      wheelEvent.preventDefault();
    }
  }
  _handleSetWheel() {
    const wheelX = this.get("wheelX");
    const wheelY = this.get("wheelY");
    const plotContainer = this.plotContainer;
    if (wheelX !== "none" || wheelY !== "none") {
      this._wheelDp = plotContainer.events.on("wheel", (event) => {
        const wheelEvent = event.originalEvent;
        if (wheelX !== "none" && Math.abs(wheelEvent.deltaX) != 0 || wheelY !== "none" && Math.abs(wheelEvent.deltaY) != 0) {
          this.handleWheel(event);
        }
      });
      this._disposers.push(this._wheelDp);
    } else {
      if (this._wheelDp) {
        this._wheelDp.dispose();
      }
    }
  }
  _getWheelSign(axis) {
    let sign = 1;
    if (axis.get("renderer").get("inversed")) {
      sign = -1;
    }
    return sign;
  }
  _fixWheel(start, end) {
    const diff = end - start;
    if (start < 0) {
      start = 0;
      end = start + diff;
    }
    if (end > 1) {
      end = 1;
      start = end - diff;
    }
    return [start, end];
  }
  _handlePlotDown(event) {
    const originalEvent = event.originalEvent;
    if (originalEvent.button == 2) {
      return;
    }
    const plotContainer = this.plotContainer;
    let local = plotContainer.toLocal(event.point);
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const pointerId = originalEvent.pointerId;
      if (pointerId) {
        if (keys(plotContainer._downPoints).length > 0) {
          const xAxis = this.xAxes.getIndex(0);
          const yAxis = this.yAxes.getIndex(0);
          if (xAxis) {
            this._downStartX = xAxis.get("start", 0);
            this._downEndX = xAxis.get("end", 1);
          }
          if (yAxis) {
            this._downStartY = yAxis.get("start", 0);
            this._downEndY = yAxis.get("end", 1);
          }
        }
      }
    }
    if (this.get("panX") || this.get("panY")) {
      if (local.x >= 0 && local.y >= 0 && local.x <= plotContainer.width() && local.y <= this.height()) {
        this._downPoint = { x: originalEvent.clientX, y: originalEvent.clientY };
        const panX = this.get("panX");
        const panY = this.get("panY");
        if (panX) {
          this.xAxes.each((axis) => {
            axis._panStart = axis.get("start");
            axis._panEnd = axis.get("end");
          });
        }
        if (panY) {
          this.yAxes.each((axis) => {
            axis._panStart = axis.get("start");
            axis._panEnd = axis.get("end");
          });
        }
        const eventType = "panstarted";
        if (this.events.isEnabled(eventType)) {
          this.events.dispatch(eventType, { type: eventType, target: this, originalEvent: event.originalEvent });
        }
      }
    }
  }
  _handleWheelAnimation(animation) {
    if (animation) {
      animation.events.on("stopped", () => {
        this._dispatchWheelAnimation();
      });
    } else {
      this._dispatchWheelAnimation();
    }
  }
  _dispatchWheelAnimation() {
    const eventType = "wheelended";
    if (this.events.isEnabled(eventType)) {
      this.events.dispatch(eventType, { type: eventType, target: this });
    }
  }
  _handlePlotUp(event) {
    const downPoint = this._downPoint;
    if (downPoint) {
      if (this.get("panX") || this.get("panY")) {
        if (event.originalEvent.clientX == downPoint.x && event.originalEvent.clientY == downPoint.y) {
          const eventType2 = "pancancelled";
          if (this.events.isEnabled(eventType2)) {
            this.events.dispatch(eventType2, { type: eventType2, target: this, originalEvent: event.originalEvent });
          }
        }
        const eventType = "panended";
        if (this.events.isEnabled(eventType)) {
          this.events.dispatch(eventType, { type: eventType, target: this, originalEvent: event.originalEvent });
        }
      }
    }
    this._downPoint = void 0;
    this.xAxes.each((xAxis) => {
      xAxis._isPanning = false;
    });
    this.yAxes.each((yAxis) => {
      yAxis._isPanning = false;
    });
  }
  _handlePlotMove(event) {
    const plotContainer = this.plotContainer;
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const touchEvent = event.originalEvent;
      const pointerId = touchEvent.pointerId;
      if (pointerId) {
        this._movePoints[pointerId] = event.point;
        if (keys(plotContainer._downPoints).length > 1) {
          this._handlePinch();
          return;
        }
      }
    }
    let downPoint = this._downPoint;
    if (downPoint) {
      downPoint = plotContainer.toLocal(this._root.documentPointToRoot(downPoint));
      let local = plotContainer.toLocal(event.point);
      const panX = this.get("panX");
      const panY = this.get("panY");
      if (panX) {
        let scrollbarX = this.get("scrollbarX");
        if (scrollbarX) {
          scrollbarX.events.disableType("rangechanged");
        }
        this.xAxes.each((axis) => {
          if (axis.get("panX")) {
            axis._isPanning = true;
            let panStart = axis._panStart;
            let panEnd = axis._panEnd;
            let difference = panEnd - panStart;
            let deltaX = difference * (downPoint.x - local.x) / plotContainer.width();
            if (axis.get("renderer").get("inversed")) {
              deltaX *= -1;
            }
            let start = panStart + deltaX;
            let end = panEnd + deltaX;
            if (end - start < 1 + axis.get("maxDeviation", 1) * 2) {
              axis.set("start", start);
              axis.set("end", end);
            }
          }
        });
        if (scrollbarX) {
          scrollbarX.events.enableType("rangechanged");
        }
      }
      if (panY) {
        let scrollbarY = this.get("scrollbarY");
        if (scrollbarY) {
          scrollbarY.events.disableType("rangechanged");
        }
        this.yAxes.each((axis) => {
          if (axis.get("panY")) {
            axis._isPanning = true;
            let panStart = axis._panStart;
            let panEnd = axis._panEnd;
            let difference = panEnd - panStart;
            let deltaY = difference * (downPoint.y - local.y) / plotContainer.height();
            if (axis.get("renderer").get("inversed")) {
              deltaY *= -1;
            }
            let start = panStart - deltaY;
            let end = panEnd - deltaY;
            if (end - start < 1 + axis.get("maxDeviation", 1) * 2) {
              axis.set("start", start);
              axis.set("end", end);
            }
          }
        });
        if (scrollbarY) {
          scrollbarY.events.enableType("rangechanged");
        }
      }
    }
  }
  _handlePinch() {
    const plotContainer = this.plotContainer;
    let i = 0;
    let downPoints = [];
    let movePoints = [];
    each2(plotContainer._downPoints, (k, point) => {
      downPoints[i] = point;
      let movePoint = this._movePoints[k];
      if (movePoint) {
        movePoints[i] = movePoint;
      }
      i++;
    });
    if (downPoints.length > 1 && movePoints.length > 1) {
      const w = plotContainer.width();
      const h = plotContainer.height();
      let downPoint0 = downPoints[0];
      let downPoint1 = downPoints[1];
      let movePoint0 = movePoints[0];
      let movePoint1 = movePoints[1];
      if (downPoint0 && downPoint1 && movePoint0 && movePoint1) {
        movePoint0 = plotContainer.toLocal(movePoint0);
        movePoint1 = plotContainer.toLocal(movePoint1);
        downPoint0 = plotContainer.toLocal(downPoint0);
        downPoint1 = plotContainer.toLocal(downPoint1);
        if (this.get("pinchZoomX")) {
          const downStartX = this._downStartX;
          const downEndX = this._downEndX;
          if (downStartX != null && downEndX != null) {
            if (downPoint0.x > downPoint1.x) {
              [downPoint0, downPoint1] = [downPoint1, downPoint0];
              [movePoint0, movePoint1] = [movePoint1, movePoint0];
            }
            let downPos0 = downStartX + downPoint0.x / w * (downEndX - downStartX);
            let downPos1 = downStartX + downPoint1.x / w * (downEndX - downStartX);
            let movePos0 = downStartX + movePoint0.x / w * (downEndX - downStartX);
            let movePos1 = downStartX + movePoint1.x / w * (downEndX - downStartX);
            let initialDistance = Math.max(1e-3, downPos1 - downPos0);
            let currentDistance = Math.max(1e-3, movePos1 - movePos0);
            let d = initialDistance / currentDistance;
            let s = downStartX * d + downPos0 - movePos0 * d;
            let e = downEndX * d + downPos1 - movePos1 * d;
            this.xAxes.each((xAxis) => {
              let sa = xAxis.fixPosition(s);
              let ea = xAxis.fixPosition(e);
              xAxis.zoom(sa, ea, 0);
            });
          }
        }
        if (this.get("pinchZoomY")) {
          const downStartY = this._downStartY;
          const downEndY = this._downEndY;
          if (downStartY != null && downEndY != null) {
            if (downPoint0.y < downPoint1.y) {
              [downPoint0, downPoint1] = [downPoint1, downPoint0];
              [movePoint0, movePoint1] = [movePoint1, movePoint0];
            }
            let downPos0 = downStartY + (1 - downPoint0.y / h) * (downEndY - downStartY);
            let downPos1 = downStartY + (1 - downPoint1.y / h) * (downEndY - downStartY);
            let movePos0 = downStartY + (1 - movePoint0.y / h) * (downEndY - downStartY);
            let movePos1 = downStartY + (1 - movePoint1.y / h) * (downEndY - downStartY);
            let initialDistance = Math.max(1e-3, downPos1 - downPos0);
            let currentDistance = Math.max(1e-3, movePos1 - movePos0);
            let d = initialDistance / currentDistance;
            let s = downStartY * d + downPos0 - movePos0 * d;
            let e = downEndY * d + downPos1 - movePos1 * d;
            this.yAxes.each((yAxis) => {
              let sa = yAxis.fixPosition(s);
              let ea = yAxis.fixPosition(e);
              yAxis.zoom(sa, ea, 0);
            });
          }
        }
      }
    }
  }
  _handleCursorPosition() {
    const cursor = this.get("cursor");
    if (cursor) {
      const cursorPoint = cursor.getPrivate("point");
      let snapToSeries = cursor.get("snapToSeries");
      if (cursor._downPoint) {
        snapToSeries = void 0;
      }
      if (snapToSeries && cursorPoint) {
        const snapToSeriesBy = cursor.get("snapToSeriesBy");
        const dataItems = [];
        each(snapToSeries, (series) => {
          if (!series.isHidden() && !series.isHiding()) {
            if (snapToSeriesBy != "x!" && snapToSeriesBy != "y!") {
              const startIndex = series.startIndex();
              const endIndex = series.endIndex();
              for (let i = startIndex; i < endIndex; i++) {
                const dataItem = series.dataItems[i];
                if (dataItem && !dataItem.isHidden()) {
                  dataItems.push(dataItem);
                }
              }
            } else {
              const tooltipDataItem = series.get("tooltipDataItem");
              if (tooltipDataItem) {
                dataItems.push(tooltipDataItem);
              }
            }
          }
        });
        let minDistance = Infinity;
        let closestItem;
        each(dataItems, (dataItem) => {
          const point = dataItem.get("point");
          if (point) {
            let distance = 0;
            if (snapToSeriesBy == "x" || snapToSeriesBy == "x!") {
              distance = Math.abs(cursorPoint.x - point.x);
            } else if (snapToSeriesBy == "y" || snapToSeriesBy == "y!") {
              distance = Math.abs(cursorPoint.y - point.y);
            } else {
              distance = Math.hypot(cursorPoint.x - point.x, cursorPoint.y - point.y);
            }
            if (distance < minDistance) {
              minDistance = distance;
              closestItem = dataItem;
            }
          }
        });
        each(snapToSeries, (series) => {
          const tooltip = series.get("tooltip");
          if (tooltip) {
            tooltip._setDataItem(void 0);
          }
        });
        if (closestItem) {
          let series = closestItem.component;
          series.showDataItemTooltip(closestItem);
          series.setRaw("tooltipDataItem", closestItem);
          const point = closestItem.get("point");
          if (point) {
            cursor.handleMove(series.toGlobal({ x: point.x - series.x(), y: point.y - series.y() }), true);
          }
        }
      }
    }
  }
  _updateCursor() {
    let cursor = this.get("cursor");
    if (cursor) {
      cursor.updateCursor();
    }
  }
  _addCursor(cursor) {
    this.plotContainer.children.push(cursor);
  }
  _prepareChildren() {
    super._prepareChildren();
    this.series.each((series) => {
      this._colorize(series);
    });
    if (this.isDirty("wheelX") || this.isDirty("wheelY")) {
      this._handleSetWheel();
    }
    if (this.isDirty("cursor")) {
      const previous = this._prevSettings.cursor;
      const cursor = this.get("cursor");
      if (cursor !== previous) {
        this._disposeProperty("cursor");
        if (previous) {
          previous.dispose();
        }
        if (cursor) {
          cursor._setChart(this);
          this._addCursor(cursor);
          this._pushPropertyDisposer("cursor", cursor.events.on("selectended", () => {
            this._handleCursorSelectEnd();
          }));
        }
        this._prevSettings.cursor = cursor;
      }
    }
    if (this.isDirty("scrollbarX")) {
      const previous = this._prevSettings.scrollbarX;
      const scrollbarX = this.get("scrollbarX");
      if (scrollbarX !== previous) {
        this._disposeProperty("scrollbarX");
        if (previous) {
          previous.dispose();
        }
        if (scrollbarX) {
          if (!scrollbarX.parent) {
            this.topAxesContainer.children.push(scrollbarX);
          }
          this._pushPropertyDisposer("scrollbarX", scrollbarX.events.on("rangechanged", (e) => {
            this._handleScrollbar(this.xAxes, e.start, e.end, e.grip);
          }));
          this._pushPropertyDisposer("scrollbarX", scrollbarX.events.on("released", () => {
            this.xAxes.each((axis) => {
              if (axis.get("zoomable")) {
                this._handleAxisSelection(axis);
              }
            });
          }));
          scrollbarX.setPrivate("positionTextFunction", (position) => {
            const axis = this.xAxes.getIndex(0);
            return axis ? axis.getTooltipText(position, false) || "" : "";
          });
        }
        this._prevSettings.scrollbarX = scrollbarX;
      }
    }
    if (this.isDirty("scrollbarY")) {
      const previous = this._prevSettings.scrollbarY;
      const scrollbarY = this.get("scrollbarY");
      if (scrollbarY !== previous) {
        this._disposeProperty("scrollbarY");
        if (previous) {
          previous.dispose();
        }
        if (scrollbarY) {
          if (!scrollbarY.parent) {
            this.rightAxesContainer.children.push(scrollbarY);
          }
          this._pushPropertyDisposer("scrollbarY", scrollbarY.events.on("rangechanged", (e) => {
            this._handleScrollbar(this.yAxes, e.start, e.end, e.grip);
          }));
          this._pushPropertyDisposer("scrollbarY", scrollbarY.events.on("released", () => {
            this.yAxes.each((axis) => {
              if (axis.get("zoomable")) {
                this._handleAxisSelection(axis);
              }
            });
          }));
          scrollbarY.setPrivate("positionTextFunction", (position) => {
            const axis = this.yAxes.getIndex(0);
            return axis ? axis.getTooltipText(position, false) || "" : "";
          });
        }
        this._prevSettings.scrollbarY = scrollbarY;
      }
    }
    this._handleZoomOut();
  }
  _processSeries(series) {
    super._processSeries(series);
    const xAxis = series.get("xAxis");
    const yAxis = series.get("yAxis");
    move(xAxis.series, series);
    move(yAxis.series, series);
    series._posXDp = series.addDisposer(xAxis.events.on("positionchanged", () => {
      series._fixPosition();
    }));
    series._posXDp = series.addDisposer(yAxis.events.on("positionchanged", () => {
      series._fixPosition();
    }));
    if (!series.get("baseAxis")) {
      if (yAxis.isType("CategoryAxis") || yAxis.isType("DateAxis")) {
        series.set("baseAxis", yAxis);
      } else {
        series.set("baseAxis", xAxis);
      }
    }
    if (series.get("stacked")) {
      series._markDirtyKey("stacked");
      each(series.dataItems, (dataItem) => {
        dataItem.set("stackToItemY", void 0);
        dataItem.set("stackToItemX", void 0);
      });
    }
    series._markDirtyAxes();
    yAxis.markDirtyExtremes();
    xAxis.markDirtyExtremes();
    xAxis._seriesAdded = true;
    yAxis._seriesAdded = true;
    this._colorize(series);
  }
  _colorize(series) {
    const colorSet = this.get("colors");
    if (colorSet) {
      if (series.get("fill") == null) {
        const color2 = colorSet.next();
        series._setSoft("stroke", color2);
        series._setSoft("fill", color2);
      }
    }
    const patternSet = this.get("patterns");
    if (patternSet) {
      if (series.get("fillPattern") == null) {
        const pattern = patternSet.next();
        series._setSoft("fillPattern", pattern);
      }
    }
  }
  _handleCursorSelectEnd() {
    const cursor = this.get("cursor");
    const behavior = cursor.get("behavior");
    const downPositionX = cursor.getPrivate("downPositionX", 0);
    const downPositionY = cursor.getPrivate("downPositionY", 0);
    const positionX = Math.min(1, Math.max(0, cursor.getPrivate("positionX", 0.5)));
    const positionY = Math.min(1, Math.max(0, cursor.getPrivate("positionY", 0.5)));
    this.xAxes.each((axis) => {
      if (behavior === "zoomX" || behavior === "zoomXY") {
        let position0 = axis.toAxisPosition(downPositionX);
        let position1 = axis.toAxisPosition(positionX);
        axis.zoom(position0, position1);
      }
      axis.setPrivate("updateScrollbar", true);
    });
    this.yAxes.each((axis) => {
      if (behavior === "zoomY" || behavior === "zoomXY") {
        let position0 = axis.toAxisPosition(downPositionY);
        let position1 = axis.toAxisPosition(positionY);
        axis.zoom(position0, position1);
      }
      axis.setPrivate("updateScrollbar", true);
    });
  }
  _handleScrollbar(axes, start, end, priority) {
    axes.each((axis) => {
      let axisStart = axis.fixPosition(start);
      let axisEnd = axis.fixPosition(end);
      let zoomAnimation = axis.zoom(axisStart, axisEnd, void 0, priority);
      const updateScrollbar = "updateScrollbar";
      axis.setPrivateRaw(updateScrollbar, false);
      if (zoomAnimation) {
        zoomAnimation.events.on("stopped", () => {
          axis.setPrivateRaw(updateScrollbar, true);
        });
      } else {
        axis.setPrivateRaw(updateScrollbar, true);
      }
    });
  }
  _processAxis(axes, container) {
    return axes.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (axis) => {
          this._removeAxis(axis);
        });
      } else if (change.type === "push") {
        container.children.push(change.newValue);
        change.newValue.processChart(this);
      } else if (change.type === "setIndex") {
        container.children.setIndex(change.index, change.newValue);
        change.newValue.processChart(this);
      } else if (change.type === "insertIndex") {
        container.children.insertIndex(change.index, change.newValue);
        change.newValue.processChart(this);
      } else if (change.type === "removeIndex") {
        this._removeAxis(change.oldValue);
      } else if (change.type === "moveIndex") {
        container.children.moveValue(change.value, change.newIndex);
        change.value.processChart(this);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    });
  }
  _removeAxis(axis) {
    if (!axis.isDisposed()) {
      const axisParent = axis.parent;
      if (axisParent) {
        axisParent.children.removeValue(axis);
      }
      const gridContainer = axis.gridContainer;
      const gridParent = gridContainer.parent;
      if (gridParent) {
        gridParent.children.removeValue(gridContainer);
      }
      const topGridContainer = axis.topGridContainer;
      const topGridParent = topGridContainer.parent;
      if (topGridParent) {
        topGridParent.children.removeValue(topGridContainer);
      }
    }
  }
  _updateChartLayout() {
    const left = this.leftAxesContainer.width();
    const right = this.rightAxesContainer.width();
    const bottomAxesContainer = this.bottomAxesContainer;
    bottomAxesContainer.set("paddingLeft", left);
    bottomAxesContainer.set("paddingRight", right);
    const topAxesContainer = this.topAxesContainer;
    topAxesContainer.set("paddingLeft", left);
    topAxesContainer.set("paddingRight", right);
  }
  /**
   * @ignore
   */
  processAxis(axis) {
    var cursor = this.get("cursor");
    if (cursor) {
      this.addDisposer(axis.on("start", () => {
        this._updateCursor();
      }));
      this.addDisposer(axis.on("end", () => {
        this._updateCursor();
      }));
    }
  }
  _handleAxisSelection(axis, force) {
    let start = axis.fixPosition(axis.get("start", 0));
    let end = axis.fixPosition(axis.get("end", 1));
    if (start > end) {
      [start, end] = [end, start];
    }
    if (this.xAxes.indexOf(axis) != -1) {
      if (force || axis.getPrivate("updateScrollbar")) {
        let scrollbarX = this.get("scrollbarX");
        if (scrollbarX && (!scrollbarX.getPrivate("isBusy") || force)) {
          scrollbarX.setRaw("start", start);
          scrollbarX.setRaw("end", end);
          scrollbarX.updateGrips();
        }
      }
    } else if (this.yAxes.indexOf(axis) != -1) {
      if (force || axis.getPrivate("updateScrollbar")) {
        let scrollbarY = this.get("scrollbarY");
        if (scrollbarY && (!scrollbarY.getPrivate("isBusy") || force)) {
          scrollbarY.setRaw("start", start);
          scrollbarY.setRaw("end", end);
          scrollbarY.updateGrips();
        }
      }
    }
    this._handleZoomOut();
  }
  _handleZoomOut() {
    let zoomOutButton = this.zoomOutButton;
    if (zoomOutButton && zoomOutButton.parent) {
      let visible = false;
      this.xAxes.each((axis) => {
        if (round(axis.get("start", 0), 5) != 0 || round(axis.get("end", 1), 5) != 1) {
          visible = true;
        }
      });
      this.yAxes.each((axis) => {
        if (round(axis.get("start", 0), 5) != 0 || round(axis.get("end", 1), 5) != 1) {
          visible = true;
        }
      });
      if (visible) {
        if (zoomOutButton.isHidden()) {
          zoomOutButton.show();
        }
      } else {
        zoomOutButton.hide();
      }
    }
  }
  /**
   * Checks if point is within plot area.
   *
   * @param   point  Reference point
   * @return         Is within plot area?
   */
  inPlot(point) {
    const plotContainer = this.plotContainer;
    const otherCharts = this.getPrivate("otherCharts", this._otherCharts);
    const global = plotContainer.toGlobal(point);
    if (point.x >= -0.5 && point.y >= -0.5 && point.x <= plotContainer.width() + 0.5 && point.y <= plotContainer.height() + 0.5) {
      return true;
    }
    if (otherCharts) {
      for (let i = otherCharts.length - 1; i >= 0; i--) {
        const chart = otherCharts[i];
        if (chart != this) {
          const chartPlotContainer = chart.plotContainer;
          const documentPoint = this._root.rootPointToDocument(global);
          const chartRoot = chart._root.documentPointToRoot(documentPoint);
          const local = chartPlotContainer.toLocal(chartRoot);
          if (local.x >= -0.1 && local.y >= -0.1 && local.x <= chartPlotContainer.width() + 0.1 && local.y <= chartPlotContainer.height() + 0.1) {
            return true;
          }
        }
      }
    }
    return false;
  }
  /**
   * @ignore
   */
  arrangeTooltips() {
    const plotContainer = this.plotContainer;
    const w = plotContainer.width();
    const h = plotContainer.height();
    let hh = this.height();
    const bounds = this._root.tooltipContainer.get("layerMargin");
    if (bounds) {
      if (bounds.bottom > hh) {
        hh = bounds.bottom;
      }
    }
    let plotT = plotContainer._display.toGlobal({ x: 0, y: 0 });
    let plotB = plotContainer._display.toGlobal({ x: w, y: h });
    const tooltips = [];
    let sum = 0;
    let minDistance = Infinity;
    let movePoint = this._movePoint;
    let maxTooltipDistance = this.get("maxTooltipDistance");
    let maxTooltipDistanceBy = this.get("maxTooltipDistanceBy", "xy");
    let closest;
    let closestPoint;
    if (isNumber(maxTooltipDistance)) {
      this.series.each((series) => {
        if (!series.isHidden()) {
          const tooltip = series.get("tooltip");
          if (tooltip) {
            let point = tooltip.get("pointTo");
            if (point) {
              let distance = Math.hypot(movePoint.x - point.x, movePoint.y - point.y);
              if (maxTooltipDistanceBy == "x") {
                distance = Math.abs(movePoint.x - point.x);
              } else if (maxTooltipDistanceBy == "y") {
                distance = Math.abs(movePoint.y - point.y);
              }
              if (distance < minDistance) {
                minDistance = distance;
                closest = series;
                closestPoint = point;
              }
            }
          }
        }
      });
    }
    const tooltipSeries = [];
    this.series.each((series) => {
      const tooltip = series.get("tooltip");
      if (tooltip && !tooltip.get("forceHidden")) {
        let hidden = false;
        let point = tooltip.get("pointTo");
        if (point) {
          if (maxTooltipDistance >= 0) {
            let point2 = tooltip.get("pointTo");
            if (point2 && closestPoint) {
              if (series != closest) {
                let distance = Math.hypot(closestPoint.x - point2.x, closestPoint.y - point2.y);
                if (maxTooltipDistanceBy == "x") {
                  distance = Math.abs(closestPoint.x - point2.x);
                } else if (maxTooltipDistanceBy == "y") {
                  distance = Math.abs(closestPoint.y - point2.y);
                }
                if (distance > maxTooltipDistance) {
                  hidden = true;
                }
              }
            }
          } else if (maxTooltipDistance == -1) {
            if (series != closest) {
              hidden = true;
            }
          }
          if (!this.inPlot(this._tooltipToLocal(point)) || !tooltip.dataItem) {
            hidden = true;
          } else {
            if (!hidden) {
              sum += point.y;
            }
          }
          if (hidden || series.isHidden() || series.isHiding()) {
            tooltip.hide(0);
          } else {
            tooltip.show();
            tooltips.push(tooltip);
            tooltipSeries.push(series);
          }
        }
      }
    });
    this.setPrivate("tooltipSeries", tooltipSeries);
    if (this.get("arrangeTooltips")) {
      let totalTooltipH = 0;
      let tooltipCount = 0;
      const tooltipContainer = this._root.tooltipContainer;
      const count = tooltips.length;
      const average = sum / count;
      if (average > h / 2 + plotT.y) {
        tooltips.sort((a, b) => compareNumber(b.get("pointTo").y, a.get("pointTo").y));
        let prevY = plotB.y;
        each(tooltips, (tooltip) => {
          let height = tooltip.height();
          tooltipCount++;
          totalTooltipH += height;
          let centerY = tooltip.get("centerY");
          if (centerY instanceof Percent) {
            height *= centerY.value;
          }
          height += tooltip.get("marginBottom", 0);
          tooltip.set("bounds", { left: plotT.x, top: plotT.y, right: plotB.x, bottom: prevY });
          tooltip.setPrivate("customData", { left: plotT.x, top: plotT.y, right: plotB.x, bottom: prevY });
          prevY = Math.min(prevY - height, tooltip._fy - height);
          if (tooltip.parent == tooltipContainer) {
            tooltipContainer.children.moveValue(tooltip, 0);
          }
        });
        if (prevY < 0) {
          tooltips.reverse();
          let prevBottom = prevY;
          each(tooltips, (tooltip) => {
            tooltipCount++;
            let bounds2 = tooltip.get("bounds");
            if (bounds2) {
              let top = bounds2.top - prevY;
              let bottom = bounds2.bottom - prevY;
              if (top < prevBottom) {
                top = prevBottom;
                bottom = top + tooltip.height();
              }
              tooltip.set("bounds", { left: bounds2.left, top, right: bounds2.right, bottom });
              prevBottom = bounds2.bottom - prevY + tooltip.get("marginBottom", 0);
            }
          });
        }
      } else {
        tooltips.reverse();
        tooltips.sort((a, b) => compareNumber(a.get("pointTo").y, b.get("pointTo").y));
        let prevY = 0;
        each(tooltips, (tooltip) => {
          tooltipCount++;
          let height = tooltip.height();
          totalTooltipH += height;
          let centerY = tooltip.get("centerY");
          if (centerY instanceof Percent) {
            height *= centerY.value;
          }
          height += tooltip.get("marginBottom", 0);
          tooltip.set("bounds", { left: plotT.x, top: prevY, right: plotB.x, bottom: Math.max(plotT.y + hh, prevY + height) });
          if (tooltip.parent == tooltipContainer) {
            tooltipContainer.children.moveValue(tooltip, 0);
          }
          prevY = Math.max(prevY + height, tooltip._fy + height);
        });
        if (prevY > hh) {
          tooltips.reverse();
          let prevBottom = hh;
          each(tooltips, (tooltip) => {
            tooltipCount++;
            let bounds2 = tooltip.get("bounds");
            if (bounds2) {
              let top = bounds2.top - (hh - prevY);
              let bottom = bounds2.bottom - (hh - prevY);
              if (bottom > prevBottom) {
                bottom = prevBottom;
                top = bottom - tooltip.height();
              }
              tooltip.set("bounds", { left: bounds2.left, top, right: bounds2.right, bottom });
              prevBottom = bottom - tooltip.height() - tooltip.get("marginBottom", 0);
            }
          });
        }
      }
      if (totalTooltipH == 0 && tooltipCount > 0) {
        this._disposers.push(this.root.events.once("frameended", () => {
          this.arrangeTooltips();
        }));
      }
    }
  }
  _tooltipToLocal(point) {
    return this.plotContainer.toLocal(point);
  }
  /**
   * Fully zooms out the chart.
   */
  zoomOut() {
    this.xAxes.each((axis) => {
      axis.setPrivate("updateScrollbar", true);
      axis.zoom(0, 1);
    });
    this.yAxes.each((axis) => {
      axis.setPrivate("updateScrollbar", true);
      axis.zoom(0, 1);
    });
  }
  _dispose() {
    super._dispose();
    const cursor = this.get("cursor");
    if (cursor) {
      cursor.dispose();
    }
  }
};
Object.defineProperty(XYChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYChart"
});
Object.defineProperty(XYChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SerialChart.classNames.concat([XYChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/Grid.js
var Grid = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
};
Object.defineProperty(Grid, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Grid"
});
Object.defineProperty(Grid, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Grid.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/XYCursor.js
var XYCursor = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_alwaysShow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "lineX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Grid.new(this._root, {
        themeTags: ["x"]
      }))
    });
    Object.defineProperty(this, "lineY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Grid.new(this._root, {
        themeTags: ["y"]
      }))
    });
    Object.defineProperty(this, "selection", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Graphics.new(this._root, {
        themeTags: ["selection", "cursor"],
        layer: 30
      }))
    });
    Object.defineProperty(this, "_movePoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_lastPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { x: 0, y: 0 }
    });
    Object.defineProperty(this, "_lastPoint2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { x: 0, y: 0 }
    });
    Object.defineProperty(this, "_tooltipX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_tooltipY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_toX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_toY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["xy", "cursor"]);
    super._afterNew();
    this.setAll({ "width": p100, height: p100, isMeasured: true, position: "absolute" });
    this.states.create("hidden", { visible: true, opacity: 0 });
    this._drawLines();
    this.setPrivateRaw("visible", false);
    this._disposers.push(this.setTimeout(() => {
      this.setPrivate("visible", true);
    }, 500));
    this._disposers.push(this.lineX.events.on("positionchanged", () => {
      this._handleXLine();
    }));
    this._disposers.push(this.lineY.events.on("positionchanged", () => {
      this._handleYLine();
    }));
    this._disposers.push(this.lineX.events.on("focus", () => this._handleLineFocus()));
    this._disposers.push(this.lineX.events.on("blur", () => this._handleLineBlur()));
    this._disposers.push(this.lineY.events.on("focus", () => this._handleLineFocus()));
    this._disposers.push(this.lineY.events.on("blur", () => this._handleLineBlur()));
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        this._handleLineMove(getEventKey(ev), ev.ctrlKey);
      }));
    }
  }
  _setUpTouch() {
    const chart = this.chart;
    if (chart) {
      chart.plotContainer._display.cancelTouch = this.get("behavior") != "none" ? true : false;
    }
  }
  _handleXLine() {
    let x = this.lineX.x();
    let visible = true;
    if (x < 0 || x > this.width()) {
      visible = false;
    }
    this.lineX.setPrivate("visible", visible);
  }
  _handleYLine() {
    let y = this.lineY.y();
    let visible = true;
    if (y < 0 || y > this.height()) {
      visible = false;
    }
    this.lineY.setPrivate("visible", visible);
  }
  _handleLineMove(key, ctrlKey) {
    let dir = "";
    const chart = this.chart;
    let axis;
    if (chart && chart.xAxes.length) {
      if (this._root.focused(this.lineX)) {
        dir = "positionX";
        axis = chart.xAxes.getIndex(0);
      } else if (this._root.focused(this.lineY)) {
        axis = chart.yAxes.getIndex(0);
        dir = "positionY";
      }
      let m = 1;
      if (ctrlKey) {
        m = 5;
      }
      if (axis) {
        let inversed = axis.get("renderer").get("inversed", false);
        let step;
        if (key == "ArrowRight" || key == "ArrowDown") {
          step = 1;
        } else if (key == "ArrowLeft" || key == "ArrowUp") {
          step = -1;
        } else if (key == "Tab") {
          step = 0;
        }
        if (step != null) {
          if (inversed) {
            step *= -1;
          }
          this.set(dir, axis.nextPosition(step * m));
        }
      }
    }
  }
  _handleLineFocus() {
    this._alwaysShow = this.get("alwaysShow", false);
    this.setAll({
      positionX: this.getPrivate("positionX", 0),
      positionY: this.getPrivate("positionY", 0),
      alwaysShow: true
    });
    this._handleLineMove("Tab");
  }
  _handleLineBlur() {
    if (this.lineX.isFocus() || this.lineY.isFocus()) {
      this.setAll({
        positionX: void 0,
        positionY: void 0,
        alwaysShow: this._alwaysShow
      });
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("xAxis")) {
      this._tooltipX = false;
      const xAxis = this.get("xAxis");
      if (xAxis) {
        const tooltip = xAxis.get("tooltip");
        if (tooltip) {
          this._tooltipX = true;
          this._disposers.push(tooltip.on("pointTo", () => {
            this._updateXLine(tooltip);
          }));
        }
      }
    }
    if (this.isDirty("yAxis")) {
      this._tooltipY = false;
      const yAxis = this.get("yAxis");
      if (yAxis) {
        const tooltip = yAxis.get("tooltip");
        if (tooltip) {
          this._tooltipY = true;
          this._disposers.push(tooltip.on("pointTo", () => {
            this._updateYLine(tooltip);
          }));
        }
      }
    }
  }
  _handleSyncWith() {
    const chart = this.chart;
    if (chart) {
      const syncWith = this.get("syncWith");
      const otherCharts = [];
      if (syncWith) {
        each(syncWith, (cursor) => {
          const chart2 = cursor.chart;
          if (chart2) {
            otherCharts.push(chart2);
          }
        });
      }
      chart._otherCharts = otherCharts;
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._handleSyncWith();
    if (this.isDirty("positionX") || this.isDirty("positionY")) {
      const positionX = this.get("positionX");
      const positionY = this.get("positionY");
      if (positionX == null && positionY == null) {
        this.hide(0);
      } else {
        this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0)));
        this.handleMove();
      }
    }
  }
  _updateXLine(tooltip) {
    let x = round(this._display.toLocal(tooltip.get("pointTo", { x: 0, y: 0 })).x, 3);
    if (this._toX != x) {
      this.lineX.animate({ key: "x", to: x, duration: tooltip.get("animationDuration", 0), easing: tooltip.get("animationEasing") });
      this._toX = x;
    }
  }
  _updateYLine(tooltip) {
    let y = round(this._display.toLocal(tooltip.get("pointTo", { x: 0, y: 0 })).y, 3);
    if (this._toY != y) {
      this.lineY.animate({ key: "y", to: y, duration: tooltip.get("animationDuration", 0), easing: tooltip.get("animationEasing") });
      this._toY = y;
    }
  }
  _drawLines() {
    this.lineX.set("draw", (display) => {
      display.moveTo(0, 0);
      display.lineTo(0, this.height());
    });
    this.lineY.set("draw", (display) => {
      display.moveTo(0, 0);
      display.lineTo(this.width(), 0);
    });
  }
  updateCursor() {
    if (this.get("alwaysShow")) {
      this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0)));
    }
    this.handleMove();
  }
  _setChart(chart) {
    this.chart = chart;
    this._handleSyncWith();
    const plotContainer = chart.plotContainer;
    this.events.on("boundschanged", () => {
      this._disposers.push(this.setTimeout(() => {
        this.updateCursor();
      }, 50));
    });
    if (supports("touchevents")) {
      this._disposers.push(plotContainer.events.on("click", (event) => {
        if (isTouchEvent(event.originalEvent)) {
          this._handleMove(event);
        }
      }));
      this._setUpTouch();
    }
    this._disposers.push(plotContainer.events.on("pointerdown", (event) => {
      this._handleCursorDown(event);
    }));
    this._disposers.push(plotContainer.events.on("globalpointerup", (event) => {
      this._handleCursorUp(event);
      if (!event.native && !this.isHidden()) {
        this._handleMove(event);
      }
    }));
    this._disposers.push(plotContainer.events.on("globalpointermove", (event) => {
      if (!this.get("syncWith")) {
        if (keys(plotContainer._downPoints).length == 0 && !event.native && this.isHidden()) {
          return;
        }
      }
      this._handleMove(event);
      if (Math.hypot(this._lastPoint2.x - event.point.x, this._lastPoint2.y - event.point.y) > 1) {
        this._handleLineBlur();
        this._lastPoint2 = event.point;
      }
    }));
    const parent = this.parent;
    if (parent) {
      parent.children.moveValue(this.selection);
    }
  }
  _inPlot(point) {
    const chart = this.chart;
    if (chart) {
      return chart.inPlot(point);
    }
    return false;
  }
  _handleCursorDown(event) {
    if (event.originalEvent.button == 2) {
      return;
    }
    const rootPoint = event.point;
    let local = this._display.toLocal(rootPoint);
    const chart = this.chart;
    this.selection.set("draw", () => {
    });
    if (chart && this._inPlot(local)) {
      this._downPoint = local;
      if (this.get("behavior") != "none") {
        this.selection.show();
        const type = "selectstarted";
        if (this.events.isEnabled(type)) {
          this.events.dispatch(type, { type, target: this, originalEvent: event.originalEvent });
        }
      }
      let positionX = this._getPosition(local).x;
      let positionY = this._getPosition(local).y;
      this.setPrivate("downPositionX", positionX);
      this.setPrivate("downPositionY", positionY);
    }
  }
  _handleCursorUp(event) {
    if (this._downPoint) {
      const behavior = this.get("behavior", "none");
      if (behavior != "none") {
        if (behavior.charAt(0) === "z") {
          this.selection.hide();
        }
        const rootPoint = event.point;
        let local = this._display.toLocal(rootPoint);
        const downPoint = this._downPoint;
        const moveThreshold = this.get("moveThreshold", 1);
        if (local && downPoint) {
          let dispatch = false;
          if (behavior === "zoomX" || behavior === "zoomXY" || behavior === "selectX" || behavior === "selectXY") {
            if (Math.abs(local.x - downPoint.x) > moveThreshold) {
              dispatch = true;
            }
          }
          if (behavior === "zoomY" || behavior === "zoomXY" || behavior === "selectY" || behavior === "selectXY") {
            if (Math.abs(local.y - downPoint.y) > moveThreshold) {
              dispatch = true;
            }
          }
          if (dispatch) {
            const type = "selectended";
            if (this.events.isEnabled(type)) {
              this.events.dispatch(type, { type, target: this, originalEvent: event.originalEvent });
            }
          } else {
            const type = "selectcancelled";
            if (this.events.isEnabled(type)) {
              this.events.dispatch(type, { type, target: this, originalEvent: event.originalEvent });
            }
          }
        }
      }
    }
    this._downPoint = void 0;
  }
  _handleMove(event) {
    if (this.getPrivate("visible")) {
      const chart = this.chart;
      if (chart && keys(chart.plotContainer._downPoints).length > 1) {
        this.set("forceHidden", true);
        return;
      } else {
        this.set("forceHidden", false);
      }
      const rootPoint = event.point;
      const lastPoint = this._lastPoint;
      if (Math.round(lastPoint.x) === Math.round(rootPoint.x) && Math.round(lastPoint.y) === Math.round(rootPoint.y)) {
        return;
      }
      this._lastPoint = rootPoint;
      this.setPrivate("lastPoint", rootPoint);
      this.handleMove({ x: rootPoint.x, y: rootPoint.y }, false, event.originalEvent);
    }
  }
  _getPosition(point) {
    return { x: point.x / this.width(), y: point.y / this.height() };
  }
  /**
   * Moves the cursor to X/Y coordinates within chart container (`point`).
   *
   * If `skipEvent` parameter is set to `true`, the move will not invoke
   * the `"cursormoved"` event.
   *
   * @param  point      X/Y to move cursor to
   * @param  skipEvent  Do not fire "cursormoved" event
   */
  handleMove(point, skipEvent, originalEvent) {
    if (!point) {
      point = this._movePoint;
    }
    const alwaysShow = this.get("alwaysShow");
    if (!point) {
      this.hide(0);
      return;
    }
    this._movePoint = point;
    let local = this._display.toLocal(point);
    let chart = this.chart;
    if (chart && (this._inPlot(local) || this._downPoint)) {
      chart._movePoint = point;
      if (this.isHidden()) {
        this.show();
        const behavior = this.get("behavior", "");
        if (behavior.charAt(0) == "z") {
          this.selection.set("draw", () => {
          });
        }
      }
      let x = local.x;
      let y = local.y;
      let xyPos = this._getPosition(local);
      this.setPrivate("point", local);
      let snapToSeries = this.get("snapToSeries");
      if (this._downPoint) {
        snapToSeries = void 0;
      }
      let userPositionX = this.get("positionX");
      let positionX = xyPos.x;
      if (isNumber(userPositionX)) {
        positionX = userPositionX;
      }
      let userPositionY = this.get("positionY");
      let positionY = xyPos.y;
      if (isNumber(userPositionY)) {
        positionY = userPositionY;
      }
      this.setPrivate("positionX", positionX);
      this.setPrivate("positionY", positionY);
      const xy = this._getPoint(positionX, positionY);
      x = xy.x;
      y = xy.y;
      chart.xAxes.each((axis) => {
        axis._handleCursorPosition(positionX, snapToSeries);
        if (alwaysShow) {
          axis.handleCursorShow();
        }
      });
      chart.yAxes.each((axis) => {
        axis._handleCursorPosition(positionY, snapToSeries);
        if (alwaysShow) {
          axis.handleCursorShow();
        }
      });
      if (!skipEvent) {
        chart._handleCursorPosition();
        const type = "cursormoved";
        if (this.events.isEnabled(type)) {
          this.events.dispatch(type, { type, target: this, point, originalEvent });
        }
      }
      this._updateLines(x, y);
      chart.arrangeTooltips();
    } else if (!this._downPoint) {
      if (!alwaysShow) {
        this.hide(0);
        const type = "cursorhidden";
        if (this.events.isEnabled(type)) {
          this.events.dispatch(type, { type, target: this });
        }
      }
    }
    if (this._downPoint && this.get("behavior") != "none") {
      this._updateSelection(local);
    }
  }
  _getPoint(positionX, positionY) {
    return { x: this.width() * positionX, y: this.height() * positionY };
  }
  _updateLines(x, y) {
    if (!this._tooltipX) {
      this.lineX.set("x", x);
    }
    if (!this._tooltipY) {
      this.lineY.set("y", y);
    }
    this._drawLines();
  }
  _updateSelection(point) {
    const selection = this.selection;
    const behavior = this.get("behavior");
    const w = this.width();
    const h = this.height();
    if (point.x < 0) {
      point.x = 0;
    }
    if (point.x > w) {
      point.x = w;
    }
    if (point.y < 0) {
      point.y = 0;
    }
    if (point.y > h) {
      point.y = h;
    }
    selection.set("draw", (display) => {
      const downPoint = this._downPoint;
      if (downPoint) {
        if (behavior === "zoomXY" || behavior === "selectXY") {
          display.moveTo(downPoint.x, downPoint.y);
          display.lineTo(downPoint.x, point.y);
          display.lineTo(point.x, point.y);
          display.lineTo(point.x, downPoint.y);
          display.lineTo(downPoint.x, downPoint.y);
        } else if (behavior === "zoomX" || behavior === "selectX") {
          display.moveTo(downPoint.x, 0);
          display.lineTo(downPoint.x, h);
          display.lineTo(point.x, h);
          display.lineTo(point.x, 0);
          display.lineTo(downPoint.x, 0);
        } else if (behavior === "zoomY" || behavior === "selectY") {
          display.moveTo(0, downPoint.y);
          display.lineTo(w, downPoint.y);
          display.lineTo(w, point.y);
          display.lineTo(0, point.y);
          display.lineTo(0, downPoint.y);
        }
      }
    });
  }
  _onHide() {
    if (this.isHidden()) {
      let chart = this.chart;
      if (chart) {
        chart.xAxes.each((axis) => {
          axis.handleCursorHide();
        });
        chart.yAxes.each((axis) => {
          axis.handleCursorHide();
        });
        chart.series.each((series) => {
          series.handleCursorHide();
        });
      }
    }
    super._onHide();
  }
  _onShow() {
    if (!this.isHidden()) {
      let chart = this.chart;
      if (chart) {
        chart.xAxes.each((axis) => {
          axis.handleCursorShow();
        });
        chart.yAxes.each((axis) => {
          axis.handleCursorShow();
        });
      }
    }
    super._onShow();
  }
  _dispose() {
    super._dispose();
    this.selection.dispose();
  }
};
Object.defineProperty(XYCursor, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYCursor"
});
Object.defineProperty(XYCursor, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([XYCursor.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisLabel.js
var AxisLabel = class extends Label {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tickPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
Object.defineProperty(AxisLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisLabel"
});
Object.defineProperty(AxisLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Label.classNames.concat([AxisLabel.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisTick.js
var AxisTick = class extends Tick {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tickPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
Object.defineProperty(AxisTick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisTick"
});
Object.defineProperty(AxisTick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Tick.classNames.concat([AxisTick.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRenderer.js
var AxisRenderer = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_axisLength", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 100
    });
    Object.defineProperty(this, "_start", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_end", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_inversed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_minSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_lc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_ls", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_thumbDownPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downStart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downEnd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ticks", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisTick._new(this._root, {
        themeTags: mergeTags(this.ticks.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.ticks.template])))
    });
    Object.defineProperty(this, "grid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Grid._new(this._root, {
        themeTags: mergeTags(this.grid.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.grid.template])))
    });
    Object.defineProperty(this, "axisFills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
        themeTags: mergeTags(this.axisFills.template.get("themeTags", ["axis", "fill"]), this.get("themeTags", []))
      }, [this.axisFills.template])))
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisLabel._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.labels.template])))
    });
    Object.defineProperty(this, "axis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  makeTick(dataItem, themeTags) {
    const tick = this.ticks.make();
    tick._setDataItem(dataItem);
    dataItem.setRaw("tick", tick);
    tick.set("themeTags", mergeTags(tick.get("themeTags"), themeTags));
    this.axis.labelsContainer.children.push(tick);
    this.ticks.push(tick);
    return tick;
  }
  /**
   * @ignore
   */
  makeGrid(dataItem, themeTags) {
    const grid = this.grid.make();
    grid._setDataItem(dataItem);
    dataItem.setRaw("grid", grid);
    grid.set("themeTags", mergeTags(grid.get("themeTags"), themeTags));
    this.axis.gridContainer.children.push(grid);
    this.grid.push(grid);
    return grid;
  }
  /**
   * @ignore
   */
  makeAxisFill(dataItem, themeTags) {
    const axisFill = this.axisFills.make();
    axisFill._setDataItem(dataItem);
    axisFill.set("themeTags", mergeTags(axisFill.get("themeTags"), themeTags));
    this.axis.gridContainer.children.push(axisFill);
    dataItem.setRaw("axisFill", axisFill);
    this.axisFills.push(axisFill);
    return axisFill;
  }
  /**
   * @ignore
   */
  makeLabel(dataItem, themeTags) {
    const label = this.labels.make();
    label.set("themeTags", mergeTags(label.get("themeTags"), themeTags));
    this.axis.labelsContainer.children.moveValue(label, 0);
    label._setDataItem(dataItem);
    dataItem.setRaw("label", label);
    this.labels.push(label);
    return label;
  }
  axisLength() {
    return 0;
  }
  /**
   * @ignore
   */
  gridCount() {
    return this.axisLength() / this.get("minGridDistance", 50);
  }
  _updatePositions() {
  }
  _afterNew() {
    super._afterNew();
    this.set("isMeasured", false);
    const thumb = this.thumb;
    if (thumb) {
      this._disposers.push(thumb.events.on("pointerdown", (event) => {
        this._handleThumbDown(event);
      }));
      this._disposers.push(thumb.events.on("globalpointerup", (event) => {
        this._handleThumbUp(event);
      }));
      this._disposers.push(thumb.events.on("globalpointermove", (event) => {
        this._handleThumbMove(event);
      }));
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("minGridDistance")) {
      this.root.events.once("frameended", () => {
        this.axis.markDirtySize();
      });
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("pan")) {
      const thumb = this.thumb;
      if (thumb) {
        const labelsContainer = this.axis.labelsContainer;
        const pan = this.get("pan");
        if (pan == "zoom") {
          labelsContainer.children.push(thumb);
        } else if (pan == "none") {
          labelsContainer.children.removeValue(thumb);
        }
      }
    }
  }
  _handleThumbDown(event) {
    this._thumbDownPoint = this.toLocal(event.point);
    const axis = this.axis;
    this._downStart = axis.get("start");
    this._downEnd = axis.get("end");
  }
  _handleThumbUp(_event) {
    this._thumbDownPoint = void 0;
  }
  _handleThumbMove(event) {
    const downPoint = this._thumbDownPoint;
    if (downPoint) {
      const point = this.toLocal(event.point);
      const downStart = this._downStart;
      const downEnd = this._downEnd;
      const extra = this._getPan(point, downPoint) * Math.min(1, downEnd - downStart) / 2 * this.get("panSensitivity", 1);
      this.axis.zoom(downStart - extra, downEnd + extra, 0);
    }
  }
  _getPan(_point1, _point2) {
    return 0;
  }
  /**
   * Converts relative position (0-1) on axis to a pixel coordinate.
   *
   * @param position  Position (0-1)
   * @return Coordinate (px)
   */
  positionToCoordinate(position) {
    if (this._inversed) {
      return (this._end - position) * this._axisLength;
    } else {
      return (position - this._start) * this._axisLength;
    }
  }
  /**
   * @ignore
   */
  updateTooltipBounds(_tooltip) {
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position = position * (end - start);
    if (!this.get("inversed")) {
      position = start + position;
    } else {
      position = end - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  toGlobalPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    if (!this.get("inversed")) {
      position = position - start;
    } else {
      position = end - position;
    }
    position = position / (end - start);
    return position;
  }
  /**
   * @ignore
   */
  fixPosition(position) {
    if (this.get("inversed")) {
      return 1 - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  _updateLC() {
  }
  toggleVisibility(sprite, position, minPosition, maxPosition) {
    let axis = this.axis;
    const start = axis.get("start", 0);
    const end = axis.get("end", 1);
    let updatedStart = start + (end - start) * (minPosition - 1e-4);
    let updatedEnd = start + (end - start) * (maxPosition + 1e-4);
    if (position < updatedStart || position > updatedEnd) {
      sprite.setPrivate("visible", false);
    } else {
      sprite.setPrivate("visible", true);
    }
  }
  _positionTooltip(tooltip, point) {
    const chart = this.chart;
    if (chart) {
      tooltip.set("pointTo", this._display.toGlobal(point));
      if (!chart.inPlot(point)) {
        tooltip.hide();
      }
    }
  }
  processAxis() {
  }
};
Object.defineProperty(AxisRenderer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRenderer"
});
Object.defineProperty(AxisRenderer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([AxisRenderer.className])
});

export {
  XYChartDefaultTheme,
  XYSeries,
  BaseColumnSeries,
  LineSeries,
  XYChart,
  Grid,
  XYCursor,
  AxisLabel,
  AxisTick,
  AxisRenderer
};
//# sourceMappingURL=chunk-ITQFRA6V.js.map
