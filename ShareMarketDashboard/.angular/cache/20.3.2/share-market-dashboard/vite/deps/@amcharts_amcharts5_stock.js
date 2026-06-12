import {
  JsonParser,
  Serializer,
  registerCustomClass
} from "./chunk-DWONBYWE.js";
import {
  Bullet,
  EditableLabel,
  Ellipse,
  Legend,
  Modal,
  SpriteResizer,
  Triangle
} from "./chunk-TU3HXUTJ.js";
import {
  PointedRectangle,
  Tooltip
} from "./chunk-IU6L2D5V.js";
import {
  Circle
} from "./chunk-3HN5RVOK.js";
import {
  AxisBullet,
  AxisRendererX,
  AxisRendererY,
  CandlestickSeries,
  ColumnSeries,
  DateAxis,
  GaplessDateAxis,
  ValueAxis
} from "./chunk-TJYBJU4B.js";
import {
  BaseColumnSeries,
  LineSeries,
  XYChart,
  XYChartDefaultTheme,
  XYCursor
} from "./chunk-ITQFRA6V.js";
import {
  Line
} from "./chunk-XATEH3WK.js";
import "./chunk-NAZ7YOFP.js";
import {
  Button
} from "./chunk-KXW2OGU6.js";
import "./chunk-TSCKTQIQ.js";
import {
  RoundedRectangle
} from "./chunk-E32SSC6Z.js";
import {
  ColorSet
} from "./chunk-AVJ6LU7H.js";
import {
  add,
  getDuration,
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
  Entity,
  Graphics,
  ListAutoDispose,
  ListTemplate,
  RADIANS,
  Rectangle,
  StyleRule,
  StyleSheet,
  addClass,
  addEventListener,
  addSpacing,
  color,
  contains,
  cos,
  cubic,
  fitToRange,
  focus,
  getAngle,
  getShadowRoot,
  mergeTags,
  out,
  p0,
  p100,
  p50,
  percent,
  registry,
  removeClass,
  removeElement,
  round,
  sin,
  supports
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  CounterDisposer,
  MultiDisposer,
  Template,
  copy2 as copy,
  each,
  each2,
  eachContinue,
  eachReverse,
  isArray,
  isNaN as isNaN2,
  isNumber,
  isObject,
  isString,
  move,
  remove,
  toNumber
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/stock/PanelControls.js
var PanelControls = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "upButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        themeTags: ["up", "control", "panel"],
        icon: Graphics.new(this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
    Object.defineProperty(this, "downButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        themeTags: ["down", "control", "panel"],
        icon: Graphics.new(this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
    Object.defineProperty(this, "expandButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        themeTags: ["expand", "control", "panel"],
        icon: Graphics.new(this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
    Object.defineProperty(this, "closeButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        themeTags: ["close", "control", "panel"],
        icon: Graphics.new(this._root, {
          themeTags: ["icon", "button"]
        })
      }))
    });
  }
  _afterNew() {
    super._afterNew();
    const upButton = this.upButton;
    const downButton = this.downButton;
    downButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.moveDown();
    });
    upButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.moveUp();
    });
    this.closeButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.close();
    });
    this.expandButton.events.on("click", () => {
      const stockPanel = this.get("stockPanel");
      stockPanel.expand();
    });
  }
};
Object.defineProperty(PanelControls, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PanelControls"
});
Object.defineProperty(PanelControls, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([PanelControls.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockIcons.js
var StockIcons = class _StockIcons {
  static getIcon(id) {
    const icons = _StockIcons.icons;
    const icon = icons[id] || icons["Default"];
    return _StockIcons._getSVG(icon);
  }
  static _getSVG(icon) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", icon.viewbox);
    svg.setAttribute("class", "am5stock_control_default_icon");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", icon.path);
    svg.appendChild(path);
    if (icon.style) {
      path.setAttribute("style", icon.style);
    }
    return svg;
  }
};
Object.defineProperty(StockIcons, "icons", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    // Misc
    "Default": { viewbox: "0 0 50 50", path: "M 25 10 L 25 40 M 10 25 L 41 25" },
    "Indicator": { viewbox: "0 0 50 50", path: "M 2 10 C 28 27 31 1 48 11 M 1 49 C 24 22 25 38 48 44 M 3 25 L 48 25 L 41 19 M 48 25 L 41 31" },
    "Color": { viewbox: "0 0 50 50", path: "" },
    "Dash": { viewbox: "0 0 60 16", path: "M0,8 60,8" },
    "Calendar": { viewbox: "0 0 50 50", path: "M 3 8 L 47 8 L 47 48 L 3 48 L 3 8 M 3 19 L 47 19 M 9 28 L 15 28 M 22 28 L 28 28 M 35 28 L 41 28 M 9 39 L 15 39 M 22 39 L 28 39 M 35 39 L 41 39 M 12 14 L 12 1 M 38 14 L 38 1" },
    "Period": { viewbox: "0 0 50 50", path: "M 3 3 L 47 3 L 47 48 L 3 48 L 3 3 M 3 12 L 47 12 M 9 21 L 15 21 M 22 21 L 28 21 M 35 21 L 41 21 M 9 30 L 15 30 M 22 30 L 28 30 M 35 30 L 41 30 M 9 39 L 15 39 M 22 39 L 28 39 M 35 39 L 41 39" },
    "Interval": { viewbox: "0 0 50 50", path: "M 3 10 L 3 48 M 3 10 L 43 10 M 13 10 L 13 36 M 23 10 L 23 36 M 43 10 L 43 48 M 33 10 L 33 36" },
    "Comparison": { viewbox: "0 0 50 50", path: "M 25 10 L 25 40 M 10 25 L 41 25" },
    "Settings": { viewbox: "0 0 50 50", path: "M49,25 L47.6,33.2 L41.3,32.6 L39.7,35.3 L43.4,40.4 L37,45.8 L32.6,41.3 L29.7,42.4 L29.2,48.6 L20.8,48.6 L20.3,42.4 L17.4,41.3 L13,45.8 L6.6,40.4 L10.3,35.3 L8.7,32.6 L2.4,33.2 L1,25 L7.1,23.4 L7.6,20.3 L2.4,16.8 L6.6,9.6 L12.3,12.3 L14.7,10.3 L13,4.2 L20.8,1.4 L23.4,7.1 L26.6,7.1 L29.2,1.4 L37,4.2 L35.3,10.3 L37.7,12.3 L43.4,9.6 L47.6,16.8 L42.4,20.3 L42.9,23.4 L49,25 M 17 25 A 1 1 0 0 0 33 25 A 1 1 0 0 0 17 25" },
    "Save": { viewbox: "0 0 50 50", path: "M47 47 47 15 35 3 3 3 3 47 47 47ZM13 3 13 13 33 13 33 3M9 42 9 25 39 25 39 42 9 42" },
    // Chart types
    "Line Series": { viewbox: "0 0 50 50", path: "M 3 28 L 14 18 L 25 32 L 36 9 L 47 19" },
    "Area Series": { viewbox: "0 0 50 50", path: "M 3 20 L 14 13 L 25 20.95 L 37 9 L 48 16 L 48 48 M 8 17 L 8 48 M 13 14 L 13 48 M 18 16 L 18 48 M 23 20 L 23 48 M 28 18 L 28 48 M 33 13 L 33 48 M 38 10 L 38 48 M 43 13 L 43 48 M 3 20 L 3 48" },
    "Candlestick Series": { viewbox: "0 0 50 50", path: "M 3 17 L 3 37 L 19 37 M 19 37 L 19 17 L 3 17 M 11 17 L 11 6 M 11 37 L 11 50 M 30 11 L 30 31 L 46 31 L 46 11 L 30 11 M 38 11 L 38 0 M 38 31 L 38 44 M 3 22 L 19 22 M 3 27 L 19 27 M 3 32 L 19 32 M 30 16 L 46 16 M 30 21 L 46 21 M 30 26 L 46 26" },
    "Pro Candlestick Series": { viewbox: "0 0 50 50", path: "M 3 10 L 3 31 L 19 31 M 19 31 L 19 10 L 3 10 M 11 10 L 11 0 M 11 31 L 11 43 M 30 17 L 30 37 L 46 37 L 46 17 L 30 17 M 38 17 L 38 4 M 38 37 L 38 50 M 30 22 L 46 22 M 30 27 L 46 27 M 30 32 L 46 32" },
    "OHLC Series": { viewbox: "0 0 50 50", path: "M 11 31 L 20 31 M 11 3 L 11 43 M 38 5 L 38 50 M 29 36 L 38 36 M 38 12 L 47 12 M 11 17 L 2 17" },
    // Drawing tools
    "Draw": { viewbox: "0 0 50 50", path: "M 29 2 L 48 21 L 22 47 L 3 47 L 3 28 L 29 2 M 23 8 L 42 27 M 3 42 L 8 47 M 18 39 L 36 21 M 11 32 L 29 14 M 3 28 L 11 32 L 13 38 L 18 39 L 22 47 M 25 6 L 44 25 M 27 4 L 46 23 M 3 44 L 6 47 M 3 40 L 10 47" },
    "Average": { viewbox: "0 0 50 50", path: "M2 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 24h26M38 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0" },
    "Callout": { viewbox: "0 0 50 50", path: "M 3 3 L 47 3 L 47 39 L 31 39 L 25 45 L 19 39 L 3 39 L 3 3 M 11 12 L 39 12 M 11 20 L 39 20 M 11 28 L 39 28" },
    "Doodle": { viewbox: "0 0 48 48", path: "M 43.036,2.509 C 32.59,9.83 8.05,6.67 6.29,15.01 5.19,26.29 34.40,18.9 37.4,27.5 c 1.4,3.78 -4.0,8 -15.7,13.18" },
    "Ellipse": { viewbox: "0 0 50 50", path: "M 25 5 a 22 20 0 1 0 1 0 z" },
    "Fibonacci": { viewbox: "0 0 50 50", path: "M2 3 h46 M2 11.5 h46 M2 24 h46 M2 49 h46" },
    "Fibonacci Timezone": { viewbox: "0 0 50 50", path: "M5 2.5 v46 M13.5 2.5 v46 M26 2.5 v46 M46.5 2.5 v46" },
    "Horizontal Line": { viewbox: "0 0 50 50", path: "M20 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0M2 24h18 M32,24 h18" },
    "Horizontal Ray": { viewbox: "0 0 50 50", path: "M2 24a5 5 0 1 0 10 0 5 5 0 1 0-10 0 M14,24 h36" },
    "Arrows &amp; Icons": { viewbox: "0 0 50 50", path: "M 5 35 L 5 15 L 26 15 M 26 15 L 26 5 L 45 26 L 26 45 L 26 35 L 5 35" },
    "Label": { viewbox: "0 0 50 50", path: "M 10 45 l 15 -32 l 15 32 m -24 -13 l 18 0", style: "stroke-width: 1.2px" },
    "Line": { viewbox: "0 0 50 50", path: "M 4 46 L 46 4" },
    "Line Arrow": { viewbox: "0 0 50 50", path: "M 4 46 L 46 4 M 30 4 L 46 4 L 46 20" },
    "Polyline": { viewbox: "0 0 50 50", path: "M 2 15 L 16 42 L 36 22 L 48 29" },
    "Polyfill": { viewbox: "0 0 50 50", path: "M 2 15 L 8 44 L 20 26 L 41 32 L 47 13 L 24 4 L 2 15" },
    "Quadrant Line": { viewbox: "0 0 50 50", path: "M2 3 h46 M2 15 h46 M2 29 h46 M2 43 h46" },
    "Rectangle": { viewbox: "0 0 50 50", path: "M3 3 L47 3 L47 47 L3 47 L3 3" },
    "Regression": { viewbox: "0 0 50 50", path: "M 2 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 11.36 17.369 L 38.661 32.505 M 38 35 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0" },
    "Trend Line": { viewbox: "0 0 50 50", path: "M 2 35 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 11.343 32.542 L 38.614 17.398 M 38 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0" },
    "Triangle": { viewbox: "0 0 50 50", path: "M 2 15 L 22 47 L 48 20 L 2 15" },
    "Vertical Line": { viewbox: "0 0 50 50", path: "M19 25a5 5 0 1 0 10 0 5 5 0 1 0-10 0M24 2v18 M24,32 v18" },
    "Parallel Channel": { viewbox: "0 0 50 50", path: "M 3 37 L 37 3 M 13 47 L 47 13" },
    "Eraser": { viewbox: "0 0 50 50", path: "M 13 48 L 21 48 L 45 24 L 29 8 L 1 36 L 13 48 M 32 48 L 38 48 M 43 48 L 49 48 M 23 14 L 39 30 M 20 17 L 36 33 M 26 11 L 42 27" },
    "Select": { viewbox: "0 0 50 50", path: "M 8 6 L 35 18 L 24 25 L 38 43 L 33 47 L 20 28 L 11 36 L 8 6" },
    "Clear": { viewbox: "0 0 50 50", path: "M 6 10 L 12 48 L 38 48 L 44 10 L 6 10 M 14 14 L 18 43 M 25 14 L 25 43 M 36 14 L 32 43 M 6 8 L 44 8 M 21 8 L 21 3 L 30 3 L 30 8" },
    "Bold": { viewbox: "0 0 50 50", path: "M 12 4 L 12 47 L 32 47 C 45 47 47 23 32 23 C 42 23 42 4 31 4 L 12 4 Z M 32 23 L 12 23 Z", style: "stroke-width: 1.8px" },
    "Italic": { viewbox: "0 0 50 50", path: "M 17 5 L 38 5 M 27 5 L 18 47 M 8 47 L 28 47" },
    "Show Extension": { viewbox: "0 0 50 50", path: "M 10 15 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 30 36 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 40 41 L 50 50 M 20 20 L 30 30 M 10 10 L 0 0" },
    "Snap": { viewbox: "0 0 50 50", path: "M 17 29 L 29 29 M 33 39 a 5 5 0 1 0 15 0 a 5 5 0 1 0 -15 0 M 29 17 L 29 29 L 3 3" },
    "Reset": { viewbox: "0 0 50 50", path: "M 4 25 A 1 1 0 0 0 46 25 Q 46 4 25 4 Q 18 4 11 10 L 5 4 L 5 16 L 17 16 L 11 10" },
    "Search": { viewbox: "0 0 50 50", path: "M 5 11 A 1 1 90 0 0 36 27 A 1 1 90 0 0 5 11 M 34 30 L 49 45 L 47 47 L 32 32" },
    "Measure": { viewbox: "0 0 50 50", path: "M 3 38 L 35 6 L 46 17 L 14 49 L 3 38 M 10 31 L 16 37 M 16 25 L 20 29 M 22 19 L 26 23 M 28 13 L 34 19 M 50 50" }
  }
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/StockChartDefaultTheme.js
var StockChartDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const l = this._root.language;
    const r = this.rule.bind(this);
    const verticalLayout = this._root.verticalLayout;
    const ic = this._root.interfaceColors;
    r("StockChart").setAll({
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 5,
      paddingBottom: 15,
      width: p100,
      height: p100,
      layout: verticalLayout,
      percentScaleSeriesSettings: {
        valueYShow: "valueYChangeSelectionPercent",
        openValueYShow: "openValueYChangeSelectionPercent",
        highValueYShow: "highValueYChangeSelectionPercent",
        lowValueYShow: "lowValueYChangeSelectionPercent"
      },
      percentScaleValueAxisSettings: {
        numberFormat: "#.##'%'",
        interpolationDuration: 0,
        extraMax: 0.05,
        strictMinMaxSelection: true
      },
      autoSetPercentScale: true,
      autoHidePanelControls: false
    });
    r("StockPanel").setAll({
      panY: true,
      wheelY: "zoomX",
      panX: true,
      minHeight: 1
    });
    r("StockPanel").states.create("hidden", {
      height: p0,
      visible: false
    });
    r("XYChart", ["stock"]).setAll({
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 15,
      minHeight: 80,
      wheelZoomPositionX: 1
    });
    r("XYChart", ["stock", "scrollbar"]).setAll({
      minHeight: 0
    });
    r("StockLegend").setAll({
      clickTarget: "marker"
    });
    r("Label").setAll({
      fontSize: "0.8em"
    });
    r("Legend", ["stocklegend"]).setAll({
      paddingTop: 6,
      paddingLeft: 6
    });
    r("Container", ["itemcontainer", "legend", "stocklegend"]).setAll({
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2,
      marginBottom: 2
    });
    r("Label", ["legend", "value", "label", "stocklegend"]).setAll({
      width: null,
      paddingRight: 5
    });
    r("ColumnSeries").setAll({
      useLastColorForLegendMarker: true
    });
    r("Grid", ["middlegrid"]).setAll({
      forceHidden: false,
      strokeOpacity: 0.4,
      strokeDasharray: [2, 2]
    });
    {
      const rule = r("RoundedRectangle", ["legend", "itemcontainer", "background", "stocklegend"]);
      rule.setAll({
        fillOpacity: 1,
        cornerRadiusBL: 4,
        cornerRadiusBR: 4,
        cornerRadiusTL: 4,
        cornerRadiusTR: 4,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowOpacity: 0.3,
        shadowBlur: 5,
        interactive: true
      });
      setColor(rule, "shadowColor", ic, "alternativeBackground");
      setColor(rule, "fill", ic, "background");
    }
    {
      const rule = r("Rectangle", ["panelresizer"]);
      rule.setAll({
        width: p100,
        height: 15,
        centerY: p100,
        fillOpacity: 0,
        fill: ic.get("alternativeBackground"),
        cursorOverStyle: "row-resize",
        interactive: true
      });
      rule.states.create("hover", { fillOpacity: 0.07 });
    }
    r("Grid", ["renderer", "base", "y"]).setAll({
      strokeOpacity: 0.4
    });
    r("Button", ["zoom"]).setAll({
      forceHidden: true
    });
    r("AxisRendererY", ["y"]).setAll({
      opposite: true,
      pan: "zoom"
    });
    r("Container", ["legend", "item"]).setAll({});
    {
      const rule = r("Graphics", ["axis", "fill"]);
      rule.setAll({
        visible: true,
        //isMeasured: false,
        position: "absolute",
        fillOpacity: 0.05
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    {
      const rule = r("PanelControls");
      rule.setAll({
        x: p100,
        y: 0,
        centerX: p100,
        paddingTop: 10,
        paddingRight: 10,
        layer: 30,
        layout: this._root.horizontalLayout,
        opacity: 0.5
      });
      rule.states.create("hover", { opacity: 1 });
    }
    r("Button", ["control", "item"]).setAll({
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 2,
      paddingRight: 2,
      centerX: p50,
      centerY: p50,
      forceHidden: true
    });
    {
      const rule = r("Button", ["control", "item", "settings"]);
      rule.setAll({
        forceHidden: false
      });
    }
    {
      const rule = r("RoundedRectangle", ["background", "control", "button"]);
      rule.setAll({
        fillOpacity: 0,
        strokeOpacity: 0
      });
    }
    {
      const rule = r("Graphics", ["control", "button", "icon"]).states.create("hover", {
        fillOpacity: 0.3
      });
      setColor(rule, "fill", ic, "secondaryButtonHover");
    }
    r("Button", ["panel"]).setAll({
      scale: 1.2,
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 6
    });
    {
      const rule = r("Graphics", ["close", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: (display) => {
          let r2 = 5;
          display.moveTo(-r2, -r2);
          display.lineTo(r2, r2);
          display.moveTo(-r2, r2);
          display.lineTo(r2, -r2);
          display.moveTo(0, 0);
          display.drawCircle(0, 0, r2 * 2);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
      setColor(rule, "fill", ic, "background");
    }
    {
      const rule = r("Graphics", ["settings", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: (display) => {
          const r2 = 10;
          const ir = 8;
          const spikes = 9;
          const angleStep = 360 / spikes * RADIANS / 2;
          display.moveTo(r2, 0);
          let angle = 0;
          let dAngle = 5 * RADIANS;
          for (let i = 0; i < spikes; i++) {
            angle += angleStep;
            display.lineTo(r2 * Math.cos(angle), r2 * Math.sin(angle));
            display.lineTo(ir * Math.cos(angle + dAngle), ir * Math.sin(angle + dAngle));
            angle += angleStep;
            display.lineTo(ir * Math.cos(angle - dAngle), ir * Math.sin(angle - dAngle));
            display.lineTo(r2 * Math.cos(angle), r2 * Math.sin(angle));
          }
          display.drawCircle(0, 0, 4);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
      setColor(rule, "fill", ic, "background");
    }
    {
      const rule = r("Graphics", ["up", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: (display) => {
          let r2 = 5;
          display.moveTo(0, 5);
          display.lineTo(0, -5);
          display.moveTo(0, -5);
          display.lineTo(-5, 0);
          display.moveTo(0, -5);
          display.lineTo(5, 0);
          display.drawCircle(0, 0, 2 * r2);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
      setColor(rule, "fill", ic, "background");
    }
    {
      const rule = r("Graphics", ["expand", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: (display) => {
          let r2 = 5;
          display.moveTo(-5, -2);
          display.lineTo(-5, -5);
          display.lineTo(5, -5);
          display.lineTo(5, -2);
          display.moveTo(5, 2);
          display.lineTo(5, 5);
          display.lineTo(-5, 5);
          display.lineTo(-5, 2);
          display.drawCircle(0, 0, 2 * r2);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
      setColor(rule, "fill", ic, "background");
    }
    {
      const rule = r("Graphics", ["down", "button", "icon"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 0.5,
        draw: (display) => {
          let r2 = 5;
          display.moveTo(0, -5);
          display.lineTo(0, 5);
          display.moveTo(0, 5);
          display.lineTo(-5, 0);
          display.moveTo(0, 5);
          display.lineTo(5, 0);
          display.drawCircle(0, 0, 2 * r2);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
      setColor(rule, "fill", ic, "background");
    }
    r("Indicator").setAll({
      position: "absolute",
      autoOpenSettings: true
    });
    r("DrawingSeries").setAll({
      field: "value",
      selectorPadding: 10
    });
    {
      const rule = r("Container", ["drawing", "grip"]);
      rule.states.create("hover", {});
    }
    {
      const rule = r("Circle", ["drawing", "grip"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 1,
        radius: 5
      });
      setColor(rule, "fill", ic, "background");
      setColor(rule, "stroke", ic, "alternativeBackground");
      const stateRule = rule.states.create("hover", { strokeWidth: 2 });
      setColor(stateRule, "stroke", ic, "negative");
    }
    r("Circle", ["drawing", "grip", "outline"]).setAll({
      radius: 8,
      strokeWidth: 4,
      strokeOpacity: 0,
      fillOpacity: 0
    });
    r("Circle", ["drawing", "grip", "outline"]).states.create("hover", {
      radius: 10,
      strokeWidth: 4,
      strokeOpacity: 0.3
    });
    r("Circle", ["drawing", "grip", "outline", "label"]).setAll({
      forceHidden: true
    });
    r("Circle", ["drawing", "grip", "label"]).setAll({
      forceHidden: true
    });
    r("Circle", ["drawing", "grip", "callout"]).setAll({
      fillOpacity: 0,
      forceHidden: true
    });
    r("Circle", ["drawing", "grip", "outline", "callout"]).setAll({
      forceHidden: false
    });
    r("Triangle", ["drawing", "arrow"]).setAll({
      width: 22,
      height: 17
    });
    {
      const rule = r("Graphics", ["series", "fill", "drawing"]);
      rule.setAll({
        fillOpacity: 0.2,
        visible: true,
        draggable: true
      });
      rule.states.create("hover", {
        fillOpacity: 0.4
      });
    }
    r("Line", ["drawing"]).setAll({
      strokeDasharray: [2, 2],
      strokeWidth: 1,
      draggable: true
    });
    r("Line", ["drawing", "hit"]).setAll({
      strokeWidth: 22,
      strokeOpacity: 0,
      strokeDasharray: 0,
      draggable: true
    });
    r("Line", ["drawing", "hit", "horizontal"]).setAll({
      strokeWidth: 22
    });
    r("Line", ["drawing", "hit", "vertical"]).setAll({
      strokeWidth: 22
    });
    r("Line", ["drawing", "hit", "ray"]).setAll({
      strokeWidth: 22
    });
    {
      const rule = r("Graphics", ["series", "fill", "drawing", "doodle"]);
      rule.setAll({
        fillOpacity: 0
      });
      rule.states.create("hover", { fillOpacity: 0 });
    }
    {
      const rule = r("Graphics", ["series", "stroke", "drawing", "measure"]);
      rule.setAll({
        strokeOpacity: 0
      });
    }
    r("Line", ["drawing", "measure"]).setAll({
      strokeDasharray: [],
      strokeWidth: 1,
      crisp: true,
      strokeOpacity: 0.7,
      draggable: false
    });
    {
      const rule = r("Graphics", ["line", "series", "stroke", "drawing"]);
      rule.setAll({
        strokeWidth: 2,
        draggable: true
      });
      const stateRule = rule.states.create("hover", {});
      setColor(stateRule, "stroke", ic, "negative");
    }
    {
      const rule = r("Graphics", ["drawing", "icon"]);
      rule.setAll({
        centerX: p50,
        centerY: p100,
        strokeOpacity: 1,
        strokeWidth: 2
      });
      const hoverRule = rule.states.create("hover", {});
      setColor(hoverRule, "stroke", ic, "negative");
    }
    r("Label", ["drawing", "label"]).setAll({
      centerX: p0,
      centerY: p50,
      minHeight: 28,
      minWidth: 28
    });
    r("Label", ["drawing", "measure"]).setAll({
      centerX: p50,
      centerY: p50,
      fill: ic.get("alternativeText"),
      textAlign: "center"
    });
    r("RoundedRectangle", ["background", "drawing", "measure"]).setAll({
      centerX: p50,
      centerY: p50,
      fillOpacity: 0.7
    });
    r("PointedRectangle", ["drawing", "callout"]).setAll({
      fillOpacity: 1,
      strokeOpacity: 0
    });
    {
      const rule = r("Ellipse", ["drawing"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 2,
        isMeasured: false,
        position: "absolute",
        draggable: true,
        fillOpacity: 0.25
      });
      const stateRule = rule.states.create("hover", {
        fillOpacity: 0.5
      });
      setColor(stateRule, "stroke", ic, "negative");
    }
    r("FibonacciSeries").setAll({
      sequence: [0, 0.236, 0.382, 0.5, 0.618, 0.768, 1, 1.618, 2.618, 3.618, 4.236],
      colors: [
        color(8816262),
        color(15550524),
        color(8635526),
        color(5221203),
        color(364931),
        color(6927601),
        color(8816262),
        color(3171832),
        color(15550524),
        color(9972651),
        color(14820453)
      ]
    });
    r("Graphics", ["line", "series", "stroke", "drawing", "fibonacci"]).setAll({
      strokeWidth: 0.5,
      strokeOpacity: 1
    });
    r("Label", ["fibonacci"]).setAll({
      populateText: true,
      text: "{sequence} ({value.formatNumber('#.00')})",
      centerX: p100,
      centerY: p100,
      paddingBottom: 2,
      fontSize: "0.8em"
    });
    r("Label", ["fibonaccitimezone"]).setAll({
      populateText: true,
      text: "{value.formatNumber('#')}",
      centerX: 0,
      centerY: p100,
      paddingBottom: 2,
      paddingLeft: 3,
      fontSize: "0.8em"
    });
    r("FibonacciTimezoneSeries").setAll({
      sequence: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
      colors: []
    });
    r("Graphics", ["line", "series", "fill", "drawing", "fibonaccitimezone"]).setAll({
      draggable: false,
      fillOpacity: 0.1
    });
    r("Graphics", ["line", "series", "stroke", "drawing", "fibonaccitimezone"]).setAll({
      draggable: false,
      strokeWidth: 0.5,
      strokeOpacity: 1
    });
    r("Grid", ["overbought"]).setAll({
      strokeOpacity: 0.4
    });
    r("Grid", ["oversold"]).setAll({
      strokeOpacity: 0.4
    });
    r("Graphics", ["overboughtoversold", "oversold", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    r("Graphics", ["overboughtoversold", "overbought", "fill"]).setAll({
      visible: true,
      fillOpacity: 0.2
    });
    r("Graphics", ["fill", "supertrend", "upper"]).setAll({
      fillOpacity: 0.2
    });
    r("Graphics", ["fill", "supertrend", "lower"]).setAll({
      fillOpacity: 0.2
    });
    r("Graphics", ["fill", "bollingerbands", "upper"]).setAll({
      fillOpacity: 0.2
    });
    r("Graphics", ["fill", "movingaverageenvelope", "upper"]).setAll({
      fillOpacity: 0.2
    });
    r("Graphics", ["series", "line", "accumulativeswingindex"]).setAll({
      fillOpacity: 0.2,
      visible: true
    });
    r("XYChart", ["indicator"]).setAll({
      height: percent(30),
      minHeight: 80
    });
    r("AxisLabel", ["x", "indicator"]).setAll({
      forceHidden: true
    });
    r("XYSeries", ["indicator"]).setAll({
      legendLabelText: "{name}"
    });
    r("LineSeries", ["accumulationdistribution"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({useVolume})"
    });
    r("LineSeries", ["accumulativeswingindex"]).setAll({
      legendValueText: "[{swingColor} bold]{valueY.formatNumber('#.0000')}[/]",
      legendLabelText: "{shortName} ({limitMoveValue})"
    });
    r("LineSeries", ["aroon"]).setAll({
      legendValueText: "[{upColor} bold]{up.formatNumber('#.00')}%[/] [{downColor} bold]{down.formatNumber('#.00')}%[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("ColumnSeries", ["awesomeoscillator"]).setAll({
      legendValueText: "[{oscillatorColor}; bold]{valueY.formatNumber('#.00')}[/]"
    });
    r("CandlestickSeries", ["heikinashi"]).setAll({
      legendValueText: "open: [bold]{openValueY.formatNumber('#.00')}[/] low: [bold]{lowValueY.formatNumber('#.00')}[/] high: [bold]{highValueY.formatNumber('#.00')}[/] close: [bold]{valueY.formatNumber('#.00')}[/]",
      legendRangeValueText: ""
    });
    r("LineSeries", ["indicator", "bollingerbands"]).setAll({
      legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.00')}[/] [{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{upperColor} bold]{upper.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{standardDeviations.formatNumber('#.')},{type})"
    });
    r("LineSeries", ["indicator", "macross"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{fastColor} bold]{maf.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{fastPeriod.formatNumber('#.')})"
    });
    r("LineSeries", ["indicator", "accelerationbands"]).setAll({
      legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.00')}[/] [{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{upperColor} bold]{upper.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{factor.formatNumber('#.#####')})"
    });
    r("LineSeries", ["chaikinmoneyflow"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["chaikinoscillator"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{slowPeriod.formatNumber('#.')})"
    });
    r("LineSeries", ["bullbearpower"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber()}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["commoditychannelindex"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["disparityindex"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{movingAverageType})"
    });
    r("LineSeries", ["macd"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{signalColor} bold]{signal.formatNumber('#.00')}[/] [bold {differenceColor}]{difference.formatNumber('#.00')}[/b]",
      legendLabelText: "{shortName} ({fastPeriod.formatNumber('#.')},{slowPeriod.formatNumber('#.')},{signalPeriod.formatNumber('#.')})"
    });
    r("LineSeries", ["medianprice"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["momentum"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["movingaverage"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{type},{offset.formatNumber('#.')})"
    });
    r("ColumnSeries", ["movingaveragedeviation"]).setAll({
      legendValueText: "[{deviationColor}; bold]{valueY.formatNumber('#.00')}[/]"
    });
    r("LineSeries", ["indicator", "movingaverageenvelope"]).setAll({
      legendValueText: "[{lowerColor} bold]{lower.formatNumber('#.00')}[/] [{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{upperColor} bold]{upper.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field},{shiftType},{shift.formatNumber('#.')},{type})"
    });
    r("LineSeries", ["onbalancevolume"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName}"
    });
    r("LineSeries", ["pvt"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.000a')}[/]",
      legendLabelText: "{shortName}"
    });
    r("LineSeries", ["rsi"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{smaColor} bold]{sma.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{smaPeriod.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["standarddeviation"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["stochasticmomentum"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{emaColor} bold]{ema.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{dPeriod.formatNumber('#.')},{emaPeriod.formatNumber('#.')})"
    });
    r("LineSeries", ["stochastic"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{slowColor} bold]{slow.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{kSmoothing.formatNumber('#.')},{dSmoothing.formatNumber('#.')})"
    });
    r("LineSeries", ["supertrend"]).setAll({
      legendValueText: "",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{multiplier.formatNumber('#.')})"
    });
    r("LineSeries", ["trix"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/] [{signalColor} bold]{signal.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["typicalprice"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["averagetruerange"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("ColumnSeries", ["volume"]).setAll({
      legendValueText: "[{volumeColor}; bold]{valueY.formatNumber('#.000a')}[/]"
    });
    r("ColumnSeries", ["volumeprofile"]).setAll({
      legendLabelText: "{shortName}",
      legendValueText: "[{downColor}; bold]{down.formatNumber('#.000a')}[/] [{upColor}; bold]{up.formatNumber('#.000a')}[/]  [bold]{total.formatNumber('#.000a')}[/]"
    });
    r("LineSeries", ["vwap"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')},{field})"
    });
    r("LineSeries", ["williamsr"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({period.formatNumber('#.')})"
    });
    r("LineSeries", ["zigzag"]).setAll({
      legendValueText: "[{seriesColor} bold]{valueY.formatNumber('#.00')}[/]",
      legendLabelText: "{shortName} ({deviation.formatNumber('#.')}, {depth.formatNumber('#.')})"
    });
    r("RoundedRectangle", ["series", "column", "volumeprofile"]).setAll({
      fillOpacity: 0.3,
      strokeWidth: 2,
      strokeOpacity: 0
    });
    r("RoundedRectangle", ["series", "column", "volumeprofile"]).states.create("hover", {
      strokeOpacity: 1
    });
    r("RoundedRectangle", ["macd", "difference"]).setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0
    });
    r("RoundedRectangle", ["series", "column", "awesomeoscillator"]).setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0
    });
    {
      const rule = r("RoundedRectangle", ["series", "column", "volume"]);
      rule.setAll({
        fillOpacity: 0.5,
        stroke: ic.get("background"),
        strokeOpacity: 0.2
      });
      rule.adapters.add("fill", (fill, target) => {
        const dataItem = target.dataItem;
        if (dataItem) {
          const dataContext = dataItem.dataContext;
          if (dataContext.volumeColor != null) {
            return dataContext.volumeColor;
          }
        }
        return fill;
      });
    }
    r("RoundedRectangle", ["series", "column", "movingaveragedeviation"]).setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0
    });
    r("Grid", ["renderer", "y", "overboughtoversold"]).setAll({
      forceHidden: true
    });
    r("Grid", ["renderer", "y", "overboughtoversold"]).setAll({
      forceHidden: true
    });
    r("AxisLabel", ["renderer", "y", "overboughtoversold"]).setAll({
      forceHidden: true
    });
    r("MovingAverage").setAll({
      name: l.translateAny("Moving Average"),
      shortName: l.translateAny("MA"),
      seriesColor: color(11240154),
      type: "simple",
      field: "close",
      period: 20,
      offset: 0
    });
    r("MACross").setAll({
      name: l.translateAny("Moving Average Cross"),
      shortName: l.translateAny("MACross"),
      seriesColor: color(11240154),
      fastColor: color(1536734),
      field: "close",
      period: 9,
      fastPeriod: 21
    });
    r("ZigZag").setAll({
      name: l.translateAny("ZigZag"),
      shortName: l.translateAny("ZigZag"),
      seriesColor: ic.get("alternativeBackground"),
      deviation: 5,
      depth: 3
    });
    r("MovingAverageEnvelope").setAll({
      name: l.translateAny("Moving Average Envelope"),
      shortName: l.translateAny("MA ENV"),
      seriesColor: color(16748607),
      upperColor: color(16763208),
      lowerColor: color(16756596),
      type: "simple",
      field: "close",
      period: 20,
      offset: 0,
      shift: 5,
      shiftType: "percent"
    });
    r("MovingAverageDeviation").setAll({
      name: l.translateAny("Moving Average Deviation"),
      shortName: l.translateAny("MA Dev"),
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative"),
      type: "simple",
      field: "close",
      period: 20
    });
    r("StandardDeviation").setAll({
      name: l.translateAny("Standard Deviation"),
      seriesColor: ic.get("alternativeBackground"),
      shortName: l.translateAny("STDEV"),
      field: "close",
      period: 20
    });
    r("TypicalPrice").setAll({
      name: l.translateAny("Typical Price"),
      seriesColor: ic.get("alternativeBackground"),
      shortName: l.translateAny("Typical Price"),
      field: "hlc/3",
      period: 20
    });
    r("AverageTrueRange").setAll({
      name: l.translateAny("Average True Range"),
      seriesColor: color(16748607),
      shortName: l.translateAny("ATR"),
      period: 14
    });
    r("Trix").setAll({
      name: l.translateAny("Trix"),
      seriesColor: ic.get("alternativeBackground"),
      signalColor: color(16748607),
      shortName: l.translateAny("Trix"),
      field: "close",
      period: 20,
      signalPeriod: 9
    });
    r("MedianPrice").setAll({
      name: l.translateAny("Median Price"),
      seriesColor: ic.get("alternativeBackground"),
      shortName: l.translateAny("Median Price"),
      field: "hl/2",
      period: 20
    });
    r("VWAP").setAll({
      name: l.translateAny("Volume-Weighted Average Price"),
      shortName: l.translateAny("VWAP"),
      seriesColor: color(11240154),
      field: "hlc/3",
      period: 30
    });
    r("AccumulationDistribution").setAll({
      name: l.translateAny("Accumulation/Distribution"),
      shortName: l.translateAny("Accum/Dist"),
      seriesColor: color(7368816),
      useVolume: true
    });
    r("DisparityIndex").setAll({
      name: l.translateAny("Disparity Index"),
      shortName: l.translateAny("Disparity"),
      seriesColor: color(7368816),
      period: 14,
      field: "close",
      movingAverageType: "simple"
    });
    r("ChaikinMoneyFlow").setAll({
      name: l.translateAny("Chaikin Money Flow"),
      shortName: l.translateAny("Chaikin MF"),
      seriesColor: color(7368816),
      period: 20
    });
    r("ChaikinOscillator").setAll({
      name: l.translateAny("Chaikin Oscillator"),
      period: 3,
      slowPeriod: 10,
      shortName: l.translateAny("Chaikin Osc"),
      seriesColor: color(7368816)
    });
    r("BullBearPower").setAll({
      name: l.translateAny("Bull Bear Power"),
      period: 13,
      shortName: l.translateAny("BBP"),
      seriesColor: color(7368816)
    });
    r("OnBalanceVolume").setAll({
      name: l.translateAny("On Balance Volume"),
      shortName: l.translateAny("On Bal Vol"),
      seriesColor: color(7368816)
    });
    r("PVT").setAll({
      name: l.translateAny("Price Volume Trend"),
      shortName: l.translateAny("PVT"),
      seriesColor: color(7368816)
    });
    r("BollingerBands").setAll({
      name: l.translateAny("Bollinger Bands"),
      shortName: l.translateAny("Bollinger"),
      standardDeviations: 2,
      seriesColor: color(16748607),
      upperColor: color(16763208),
      lowerColor: color(16756596)
    });
    r("AccelerationBands").setAll({
      name: l.translateAny("Acceleration Bands"),
      shortName: l.translateAny("Acceleration"),
      factor: 1e-3,
      period: 20,
      seriesColor: color(16748607),
      upperColor: color(15092891),
      lowerColor: color(15092891)
    });
    r("RelativeStrengthIndex").setAll({
      name: l.translateAny("Relative Strength Index"),
      shortName: l.translateAny("RSI"),
      period: 14,
      smaPeriod: 3,
      field: "close",
      overSold: 20,
      overBought: 80,
      overSoldColor: color(14942208),
      overBoughtColor: color(6797276),
      seriesColor: color(11240154),
      smaColor: color(16748607)
    });
    r("Momentum").setAll({
      name: l.translateAny("Momentum"),
      shortName: l.translateAny("Mom"),
      period: 14,
      field: "close",
      seriesColor: color(11240154)
    });
    r("SuperTrend").setAll({
      name: l.translateAny("Super Trend"),
      shortName: l.translateAny("Super Trend"),
      period: 10,
      upperColor: ic.get("negative"),
      lowerColor: ic.get("positive"),
      multiplier: 3
    });
    r("WilliamsR").setAll({
      name: l.translateAny("Williams %R"),
      shortName: l.translateAny("Williams %R"),
      period: 14,
      field: "close",
      overSold: -80,
      overBought: -20,
      overSoldColor: color(14942208),
      overBoughtColor: color(6797276),
      seriesColor: color(11240154)
    });
    r("CommodityChannelIndex").setAll({
      name: l.translateAny("Commodity Channel Index"),
      shortName: l.translateAny("CCI"),
      period: 20,
      field: "close",
      overSold: -100,
      overBought: 100,
      overSoldColor: color(14942208),
      overBoughtColor: color(6797276),
      seriesColor: color(11240154)
    });
    r("StochasticOscillator").setAll({
      name: l.translateAny("Stochastic Oscillator"),
      shortName: l.translateAny("Stochastic Osc"),
      period: 14,
      kSmoothing: 1,
      dSmoothing: 3,
      field: "close",
      overSold: 20,
      overBought: 80,
      overSoldColor: color(14942208),
      overBoughtColor: color(6797276),
      seriesColor: color(11240154),
      slowColor: color(16748607)
    });
    r("StochasticMomentumIndex").setAll({
      name: l.translateAny("Stochastic Momentum Index"),
      shortName: l.translateAny("Stochastic MI"),
      period: 10,
      dPeriod: 3,
      emaPeriod: 3,
      field: "close",
      overSold: -40,
      overBought: 40,
      overSoldColor: color(14942208),
      overBoughtColor: color(6797276),
      seriesColor: color(11240154),
      emaColor: color(16748607)
    });
    r("AccumulativeSwingIndex").setAll({
      name: l.translateAny("Accumulative Swing Index"),
      shortName: l.translateAny("ACC Swing"),
      limitMoveValue: 1e3,
      positiveColor: ic.get("positive"),
      negativeColor: ic.get("negative")
    });
    r("Aroon").setAll({
      name: l.translateAny("Aroon"),
      shortName: l.translateAny("Aroon"),
      period: 14,
      upColor: ic.get("positive"),
      downColor: ic.get("negative")
    });
    r("AwesomeOscillator").setAll({
      name: l.translateAny("Awesome Oscillator"),
      shortName: l.translateAny("Awesome"),
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative")
    });
    r("HeikinAshi").setAll({
      name: l.translateAny("Heikin Ashi"),
      shortName: l.translateAny("Heikin Ashi"),
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative")
    });
    r("Volume").setAll({
      name: l.translateAny("Volume"),
      shortName: l.translateAny("Volume"),
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative")
    });
    r("VolumeProfile").setAll({
      name: l.translateAny("Volume Profile"),
      shortName: l.translateAny("Volume Profile"),
      upColor: Color.fromHex(14922508),
      downColor: Color.fromHex(3045603),
      countType: "rows",
      count: 24,
      axisWidth: 40,
      valueArea: 70,
      valueAreaOpacity: 0.7
    });
    r("MACD").setAll({
      name: l.translateAny("MACD"),
      field: "close",
      shortName: l.translateAny("MACD"),
      fastPeriod: 12,
      slowPeriod: 26,
      signalPeriod: 9,
      increasingColor: ic.get("positive"),
      decreasingColor: ic.get("negative"),
      seriesColor: color(11240154),
      signalColor: color(16748607)
    });
    r("Grid", ["cursor", "y", "indicator"]).set("forceHidden", true);
    r("StockControl").setAll({
      visible: true,
      active: false
    });
    r("IndicatorControl").setAll({
      name: l.translateAny("Indicators"),
      scrollable: true,
      fixedLabel: true,
      searchable: true,
      indicators: ["Acceleration Bands", "Accumulation Distribution", "Accumulative Swing Index", "Aroon", "Average True Range", "Awesome Oscillator", "Bollinger Bands", "Bull Bear Power", "Chaikin Money Flow", "Chaikin Oscillator", "Commodity Channel Index", "Disparity Index", "Heikin Ashi", "MACD", "Median Price", "Momentum", "Moving Average", "Moving Average Cross", "Moving Average Deviation", "Moving Average Envelope", "On Balance Volume", "Price Volume Trend", "Relative Strength Index", "Standard Deviation", "Stochastic Momentum Index", "Stochastic Oscillator", "Super Trend", "Trix", "Typical Price", "Volume", "Volume Profile", "VWAP", "Williams R", "ZigZag"]
    });
    r("ComparisonControl").setAll({
      name: l.translateAny("Comparison")
    });
    const drawingIcons = [
      {
        svgPath: "M 5 35 L 5 15 L 26 15 L 26 5 L 45 25 L 26 45 L 26 35 L 5 35 Z",
        scale: 1,
        centerX: percent(100),
        centerY: percent(50)
      },
      {
        svgPath: "M 45 35 L 45 15 L 24 15 L 24 5 L 5 25 L 24 45 L 24 35 L 45 35 Z",
        scale: 1,
        centerX: percent(0),
        centerY: percent(50)
      },
      {
        svgPath: "M 35 5 L 15 5 L 15 26 L 5 26 L 25 45 L 45 26 L 35 26 L 35 5 Z",
        scale: 1,
        centerX: percent(50),
        centerY: percent(100)
      },
      {
        svgPath: "M 35 45 L 15 45 L 15 24 L 5 24 L 25 5 L 45 24 L 35 24 L 35 45 Z",
        scale: 1,
        centerX: percent(50),
        centerY: percent(0)
      },
      // :)
      {
        svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 16 32 C 20 39 30 39 34 32",
        scale: 1,
        centerX: percent(50),
        centerY: percent(50)
      },
      // :(
      {
        svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 33 37 C 28 32 21 32 16 37",
        scale: 1,
        centerX: percent(50),
        centerY: percent(50)
      },
      // :|
      {
        svgPath: "M 5 25 A 1 1 0 0 0 45 25 A 1 1 0 0 0 5 25 M 14 19 A 1 1 0 0 0 19 19 A 1 1 0 0 0 14 19 M 36 19 A 1 1 0 0 0 31 19 A 1 1 0 0 0 36 19 M 32 35 L 18 35",
        scale: 1,
        centerX: percent(50),
        centerY: percent(50)
      },
      {
        svgPath: "M 25 46 C 25 38 -6 18 10 5 C 16 1 25 3 25 10 C 25 3 34 1 40 5 C 56 18 25 38 25 46",
        scale: 1,
        centerX: percent(50),
        centerY: percent(100)
      },
      // Flag right
      {
        svgPath: "M 2 43 L 2 4 L 26 4 L 17 15 L 26 26 L 2 26 Z",
        scale: 1,
        centerX: percent(0),
        centerY: percent(100)
      },
      // star 5
      {
        svgPath: "M 25,2 L 25,2 L 33,14 L 47,18 L 37,29 L 39,44 L 25,38 L 11,44 L 13,29 L 3,18 L 17,14 L 25,2 Z",
        scale: 1,
        centerX: percent(50),
        centerY: percent(50)
      },
      // star 8
      {
        svgPath: "M 25,2 L 25,2 L 30,13 L 41,9 L 37,20 L 48,25 L 37,30 L 41,41 L 30,37 L 25,48 L 20,37 L 9,41 L 13,30 L 2,25 L 13,20 L 9,9 L 20,13 L 25,2 Z",
        scale: 1,
        centerX: percent(50),
        centerY: percent(50)
      },
      // star 10
      {
        svgPath: "M 25,2 L 25,2 L 30,10 L 39,6 L 38,16 L 47,18 L 41,25 L 47,32 L 38,34 L 39,44 L 30,40 L 25,48 L 20,40 L 11,44 L 12,34 L 3,32 L 9,25 L 3,18 L 12,16 L 11,6 L 20,10 L 25,2 Z",
        scale: 1,
        centerX: percent(50),
        centerY: percent(50),
        style: { fillOpacity: 0 }
      },
      // >>
      {
        svgPath: "M 8 8 L 25 25 L 8 42 M 20 8 L 37 25 L 20 42",
        scale: 1,
        centerX: percent(100),
        centerY: percent(50),
        fillDisabled: true
      },
      // <<
      {
        svgPath: "M 42 8 L 25 25 L 42 42 M 30 8 L 13 25 L 30 42",
        scale: 1,
        centerX: percent(0),
        centerY: percent(50),
        fillDisabled: true
      },
      // ^^
      {
        svgPath: "M 42 42 L 25 25 L 9 42 M 9 29 L 25 13 L 42 30",
        scale: 1,
        centerX: percent(100),
        centerY: percent(50),
        fillDisabled: true
      },
      // vv
      {
        svgPath: "M 42 8 L 25 25 L 8 8 M 8 20 L 25 37 L 42 20",
        scale: 1,
        centerX: percent(100),
        centerY: percent(50),
        fillDisabled: true
      }
    ];
    r("DrawingControl").setAll({
      name: l.translateAny("Draw"),
      tool: "Line",
      tools: ["Arrows &amp; Icons", "Average", "Callout", "Doodle", "Ellipse", "Fibonacci", "Fibonacci Timezone", "Horizontal Line", "Horizontal Ray", "Label", "Line", "Line Arrow", "Measure", "Parallel Channel", "Polyline", "Polyfill", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Triangle", "Vertical Line"],
      togglable: true,
      strokeColor: color(8924671),
      strokeWidth: 2,
      strokeWidths: [1, 2, 4, 8, 16],
      strokeDasharray: [],
      strokeDasharrays: [[], [2, 2], [6, 3], [8, 4, 2, 4]],
      strokeOpacity: 1,
      showExtension: true,
      fillColor: color(11366143),
      fillOpacity: 0.2,
      labelFill: color(0),
      labelFontSize: "12px",
      labelFontSizes: ["8px", "10px", "11px", "12px", "14px", "16px", "20px", "24px", "36px", "48px"],
      labelFontWeight: "normal",
      labelFontStyle: "normal",
      labelFontFamily: "Arial",
      labelFontFamilies: ["Arial", "Courier New", "Garamond", "Georgia", "Times New Roman"],
      drawingIcon: drawingIcons[0],
      drawingIcons,
      snapToData: false,
      scrollable: true
    });
    r("ColorControl").setAll({
      useOpacity: true
    });
    r("DateRangeSelector").setAll({
      description: l.translateAny("Date Range"),
      minDate: "auto",
      maxDate: "auto",
      allowInput: true
    });
    r("PeriodSelector").setAll({
      description: l.translateAny("Period selector"),
      togglable: false,
      icon: "none",
      periods: [
        //{ timeUnit: "day", count: 1, name: "1" + l.translateAny("D") },
        { timeUnit: "day", count: 5, name: "5" + l.translateAny("D") },
        { timeUnit: "month", count: 1, name: "1" + l.translateAny("M") },
        { timeUnit: "month", count: 3, name: "3" + l.translateAny("M") },
        { timeUnit: "month", count: 6, name: "6" + l.translateAny("M") },
        { timeUnit: "ytd", name: l.translateAny("YTD") },
        { timeUnit: "year", count: 1, name: "1" + l.translateAny("Y") },
        { timeUnit: "year", count: 2, name: "2" + l.translateAny("Y") },
        { timeUnit: "year", count: 5, name: "5" + l.translateAny("Y") },
        { timeUnit: "max", name: l.translateAny("Max") }
      ]
    });
    r("DropdownListControl").setAll({
      fixedLabel: false
    });
    r("DropdownList").setAll({
      searchable: true,
      maxSearchItems: 10,
      items: []
    });
    r("ComparisonControl").setAll({
      fixedLabel: true
    });
    r("SeriesTypeControl").setAll({
      currentItem: "candlestick",
      items: [{
        id: "line",
        label: l.translateAny("Line"),
        icon: StockIcons.getIcon("Line Series")
      }, {
        id: "candlestick",
        label: l.translateAny("Candles"),
        icon: StockIcons.getIcon("Candlestick Series")
      }, {
        id: "procandlestick",
        label: l.translateAny("Hollow Candles"),
        icon: StockIcons.getIcon("Pro Candlestick Series")
      }, {
        id: "ohlc",
        label: l.translateAny("Sticks"),
        icon: StockIcons.getIcon("OHLC Series")
      }]
    });
    r("IntervalControl").setAll({
      currentItem: "1 day",
      items: [
        { id: "1 minute", label: "1 " + l.translateAny("minute"), interval: { timeUnit: "minute", count: 1 } },
        { id: "2 minute", label: "2 " + l.translateAny("minutes"), interval: { timeUnit: "minute", count: 2 } },
        { id: "5 minute", label: "5 " + l.translateAny("minutes"), interval: { timeUnit: "minute", count: 5 } },
        { id: "15 minute", label: "15 " + l.translateAny("minutes"), interval: { timeUnit: "minute", count: 15 } },
        { id: "30 minute", label: "30 " + l.translateAny("minutes"), interval: { timeUnit: "minute", count: 30 } },
        { id: "1 hour", label: "1 " + l.translateAny("hour"), interval: { timeUnit: "hour", count: 1 } },
        { id: "4 hour", label: "4 " + l.translateAny("hours"), interval: { timeUnit: "hour", count: 4 } },
        { id: "1 day", label: "1 " + l.translateAny("day"), interval: { timeUnit: "day", count: 1 } },
        { id: "1 week", label: "1 " + l.translateAny("week"), interval: { timeUnit: "week", count: 1 } },
        { id: "1 month", label: "1 " + l.translateAny("month"), interval: { timeUnit: "month", count: 1 } },
        { id: "1 year", label: "1 " + l.translateAny("year"), interval: { timeUnit: "year", count: 1 } }
      ]
    });
    r("DropdownColors").setAll({
      colors: ColorSet.new(this._root, {
        colors: [
          color(0),
          color(4607574),
          color(5989226),
          color(7765380),
          color(12172741),
          color(14738665),
          color(16251135),
          color(16777215),
          color(7525375),
          color(11366143),
          color(16744645),
          color(16760180),
          color(16770950),
          color(6615513),
          color(16744580),
          color(7992509),
          color(2866431),
          color(8924671),
          color(16730797),
          color(16753471),
          color(16767816),
          color(2284476),
          color(16724794),
          color(45153),
          color(491755),
          color(6619368),
          color(13041797),
          color(15033130),
          color(15710976),
          color(41370),
          color(14423085),
          color(40022),
          color(25035),
          color(4391084),
          color(9896036),
          color(13056778),
          color(1472e4),
          color(27780),
          color(11407653),
          color(35148)
        ]
      })
    });
    r("ResetControl").setAll({
      description: l.translateAny("Reset"),
      togglable: false
      //align: "right"
    });
    r("SettingsControl").setAll({
      description: l.translateAny("Settings"),
      togglable: true,
      fixedLabel: true,
      //align: "right",
      items: [{
        id: "fills",
        label: l.translateAny("X-axis fills"),
        className: "am5stock-list-info am5stock-list-heading"
      }, {
        form: "checkbox",
        id: "fills",
        label: l.translateAny("Fills")
      }, {
        id: "y-scale",
        label: l.translateAny("Y-axis scale"),
        className: "am5stock-list-info am5stock-list-heading"
      }, {
        id: "y-scale",
        form: "radio",
        value: "percent",
        label: l.translateAny("Change percent")
      }, {
        id: "y-scale",
        form: "radio",
        value: "regular",
        label: l.translateAny("Regular")
      }, {
        id: "y-scale",
        form: "radio",
        value: "logarithmic",
        label: l.translateAny("Logarithmic")
      }, {
        id: "autosave",
        label: l.translateAny("Drawings &amp; Indicators"),
        className: "am5stock-list-info am5stock-list-heading"
      }, {
        id: "autosave",
        form: "checkbox",
        label: l.translateAny("Auto-save")
      }]
    });
    r("DataSaveControl").setAll({
      description: l.translateAny("Save drawings and indicators"),
      togglable: true,
      fixedLabel: true,
      autoSave: false,
      items: [{
        id: "autosave",
        form: "checkbox",
        label: l.translateAny("Auto-save drawings and indicators")
      }, {
        id: "save",
        label: l.translateAny("Save drawings &amp; indicators"),
        subLabel: l.translateAny("Saves drawings/indicators to browser local storage")
      }, {
        id: "restore",
        label: l.translateAny("Restore saved data"),
        subLabel: l.translateAny("Restores saved data from browser local storage")
      }, {
        id: "clear",
        label: l.translateAny("Clear"),
        subLabel: l.translateAny("Clears saved data from browser local storage")
      }]
    });
    r("Measure").setAll({
      labelText: "{value} ({percent})\n{count.formatNumber('#,###.')} " + l.translateAny("bars") + " {intervalCount.formatNumber('#,###.')} {intervalUnit}",
      labelVolumeText: "\nVolume: {volume.formatNumber('#.##a')}"
    });
    {
      const rule = r("Rectangle", ["selector"]);
      rule.setAll({
        isMeasured: false,
        strokeDasharray: [2, 2],
        strokeOpacity: 0.5,
        strokeWidth: 1
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockControl.js
var StockControl = class extends Entity {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    this.get("stockChart").controls.push(this);
    this._defaultThemes = this.get("stockChart")._defaultThemes;
    super._afterNewApplyThemes();
    this._initElements();
    this._applyClassNames();
    this._maybeMakeAccessible();
    this._root.addDisposer(this);
  }
  _initElements() {
    const button = document.createElement("div");
    button.setAttribute("title", this.get("description", this.get("name", "")));
    this.setPrivate("button", button);
    const icon = document.createElement("div");
    icon.appendChild(this._getIcon());
    if (this.get("icon") == "none") {
      icon.style.display = "none";
    }
    button.appendChild(icon);
    this.setPrivate("icon", icon);
    const name = this.get("name", "");
    const label = document.createElement("div");
    label.innerHTML = name;
    if (name == "") {
      label.style.display = "none";
    }
    button.appendChild(label);
    this.setPrivate("label", label);
    this._disposers.push(addEventListener(button, "click", (ev) => {
      if (this.get("togglable") != false) {
        this._handleClick();
      }
      if (this.events.isEnabled("click")) {
        this.events.dispatch("click", {
          type: "click",
          target: this,
          originalEvent: ev
        });
      }
    }));
  }
  _applyClassNames() {
    this.getPrivate("button").className = "am5stock am5stock-control am5stock-control-button";
    this.getPrivate("label").className = "am5stock-control-label";
    this.getPrivate("icon").className = "am5stock-control-icon";
  }
  _getIcon() {
    const userIcon = this.get("icon");
    if (userIcon && userIcon != "none") {
      return userIcon;
    }
    return this._getDefaultIcon();
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Default");
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("visible") && !this.get("visible")) {
      this.getPrivate("button").style.display = "none";
    }
    if (this.isDirty("forceHidden") && this.get("forceHidden")) {
      this.getPrivate("button").style.display = "none";
    }
    if (this.isDirty("name")) {
      this._setLabel(this.get("name", ""));
    }
    if (this.isDirty("active")) {
      const button = this.getPrivate("button");
      if (this.get("active")) {
        addClass(button, "am5stock-control-button-active");
      } else {
        removeClass(button, "am5stock-control-button-active");
      }
    }
    if (this.isDirty("align")) {
      if (this.get("align") == "right") {
        addClass(this.getPrivate("button"), "am5stock-align-right");
      } else {
        removeClass(this.getPrivate("button"), "am5stock-align-right");
      }
    }
    if (this.isPrivateDirty("toolbar")) {
      this._maybeMakeAccessible();
    }
  }
  _dispose() {
    super._dispose();
    removeElement(this.getPrivate("button"));
  }
  _setLabel(name) {
    const label = this.getPrivate("label");
    label.innerHTML = name;
    if (name == "") {
      label.style.display = "none";
    } else {
      label.style.display = "";
    }
    const button = this.getPrivate("button");
    button.setAttribute("title", this.get("description", this.get("name", "")));
  }
  hide() {
    this.getPrivate("button").style.display = "none";
  }
  show() {
    if (this.get("forceHidden") !== true) {
      this.getPrivate("button").style.display = "";
    }
  }
  _handleClick() {
    this.set("active", !this.get("active"));
  }
  _maybeMakeAccessible() {
    if (this.isAccessible()) {
      const button = this.getPrivate("button");
      button.setAttribute("tabindex", this._root.tabindex.toString());
      button.setAttribute("role", "button");
      if (supports("keyboardevents")) {
        button.setAttribute("aria-label", button.getAttribute("title") + "; " + this._t("Press ENTER to toggle"));
        this._disposers.push(addEventListener(document, "keydown", (ev) => {
          if (document.activeElement == button && ev.keyCode == 13) {
            if (this.get("togglable")) {
              this._handleClick();
            } else {
              document.activeElement.click();
            }
          }
        }));
      }
    }
  }
  isAccessible() {
    const toolbar = this.getPrivate("toolbar");
    return toolbar && toolbar.get("focusable") ? true : false;
  }
};
Object.defineProperty(StockControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockControl"
});
Object.defineProperty(StockControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([StockControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/Dropdown.js
var Dropdown = class extends Entity {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    this._defaultThemes = this.get("control")._defaultThemes;
    super._afterNewApplyThemes();
    this._initElements();
    this._root.addDisposer(this);
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        if (this.isOpen() && ev.keyCode == 27) {
          this.hide();
        }
      }));
    }
    this._disposers.push(addEventListener(this.getPrivate("container"), "click", (ev) => {
      if (this.isOpen()) {
        ev.preventDefault();
      }
    }));
    this._disposers.push(addEventListener(document, "click", () => {
      if (this.isOpen()) {
        this.hide();
      }
    }));
  }
  _initElements() {
    const container = document.createElement("div");
    container.className = "am5stock-control-list-container";
    this._disposers.push(addEventListener(container, "click", (ev) => {
      ev.stopPropagation();
    }));
    this.setPrivate("container", container);
    const arrow = document.createElement("div");
    arrow.className = "am5stock-control-list-arrow";
    container.appendChild(arrow);
    this.setPrivate("arrow", arrow);
    const parent = this.get("parent");
    if (parent) {
      parent.appendChild(container);
    }
    if (this.get("scrollable")) {
      this._sizeItems();
      this.root.container.onPrivate("height", () => {
        this._sizeItems();
      });
    }
    this.hide();
  }
  _sizeItems() {
    const container = this.getPrivate("container");
    container.style.maxHeight = this.root.container.height() - 100 + "px";
    container.style.overflow = "auto";
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("parent")) {
      const parent = this.get("parent");
      const container = this.getPrivate("container");
      if (parent && container) {
        parent.appendChild(container);
      }
    }
  }
  _dispose() {
    super._dispose();
  }
  /**
   * Returns `true` if dropdown is currently open.
   *
   * @return  Dropdown open?
   */
  isOpen() {
    return this.getPrivate("container").style.display != "none";
  }
  hide() {
    const arrow = this.getPrivate("arrow");
    const container = this.getPrivate("container");
    container.style.display = "none";
    this.events.dispatch("closed", {
      type: "closed",
      target: this
    });
    container.style.marginLeft = "";
    arrow.style.marginLeft = "";
  }
  show() {
    const arrow = this.getPrivate("arrow");
    const container = this.getPrivate("container");
    container.style.display = "";
    let offset = 0;
    const toolbar = this.get("control").getPrivate("toolbar");
    if (toolbar) {
      const toolbarContainer = this.get("control").getPrivate("toolbar").get("container");
      offset = Math.round(toolbarContainer.getBoundingClientRect().right - container.getBoundingClientRect().right);
    }
    if (offset < 0) {
      container.style.marginLeft = offset + "px";
      arrow.style.marginLeft = Math.abs(offset) + "px";
    } else {
      container.style.marginLeft = "";
      arrow.style.marginLeft = "";
    }
    this.events.dispatch("opened", {
      type: "opened",
      target: this
    });
  }
  toggle() {
    const container = this.getPrivate("container");
    if (container.style.display == "none") {
      this.show();
    } else {
      this.hide();
    }
  }
  _maybeMakeAccessible() {
    if (this.isAccessible()) {
    }
  }
  isAccessible() {
    const toolbar = this.get("control").getPrivate("toolbar");
    return toolbar && toolbar.get("focusable") ? true : false;
  }
};
Object.defineProperty(Dropdown, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Dropdown"
});
Object.defineProperty(Dropdown, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Dropdown.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownColors.js
var DropdownColors = class extends Dropdown {
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    this._setupKeyboardNav();
    this._root.addDisposer(this);
  }
  _initElements() {
    super._initElements();
    const container = this.getPrivate("container");
    const list = document.createElement("ul");
    list.className = "am5stock-control-colors";
    container.appendChild(list);
    this.setPrivate("list", list);
    this._initItems();
  }
  _initItems() {
    const list = this.getPrivate("list");
    list.innerHTML = "";
    let cs = this.get("colors");
    if (!cs) {
      cs = ColorSet.new(this._root, {});
    }
    const colors = cs.get("colors", []);
    each(colors, (item) => {
      this.addItem(item);
    });
    this._initOpacity();
    this._maybeMakeAccessible();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("colors") || this.isDirty("useOpacity") || this.isPrivateDirty("color") || this.isPrivateDirty("opacity")) {
      this._initItems();
    }
    if (this.isDirty("control")) {
      this._maybeMakeAccessible();
    }
  }
  _dispose() {
    super._dispose();
  }
  addItem(color2) {
    const currentColor = this.getPrivate("color") ? this.getPrivate("color").hex : 0;
    const list = this.getPrivate("list");
    const item = document.createElement("li");
    item.className = "am5stock-control-color";
    if (currentColor == color2.hex) {
      item.className += " am5stock-control-active";
    }
    item.style.background = color2.toCSS();
    list.appendChild(item);
    this._disposers.push(addEventListener(item, "click", (_ev) => {
      this.hide();
      this.events.dispatch("invoked", {
        type: "invoked",
        color: color2,
        target: this
      });
    }));
  }
  _initOpacity() {
    if (this.get("useOpacity")) {
      const currentOpacity = this.getPrivate("opacity", 1);
      const list = this.getPrivate("list");
      const hr = document.createElement("hr");
      list.appendChild(hr);
      for (let opacity = 100; opacity >= 0; opacity -= 25) {
        const fill = color(0);
        const item = document.createElement("li");
        item.innerHTML = opacity + "%";
        item.className = "am5stock-control-opacity am5stock-control-opacity-" + opacity;
        if (currentOpacity * 100 == opacity) {
          item.className += " am5stock-control-active";
        }
        item.style.background = fill.toCSS(opacity / 100);
        list.appendChild(item);
        this._disposers.push(addEventListener(item, "click", (_ev) => {
          this.hide();
          this.events.dispatch("invokedOpacity", {
            type: "invokedOpacity",
            opacity: opacity / 100,
            target: this
          });
        }));
      }
    }
  }
  _setupKeyboardNav() {
    if (supports("keyboardevents")) {
      const button = this.get("control").getPrivate("button");
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        if (this.isAccessible()) {
          if (document.activeElement && (document.activeElement === button || contains(button, document.activeElement))) {
            if (ev.keyCode == 13) {
              if (document.activeElement !== button) {
                document.activeElement.click();
              }
            } else if ([37, 38, 39, 40].indexOf(ev.keyCode) !== -1) {
              const dir = ev.keyCode == 37 || ev.keyCode == 38 ? -1 : 1;
              const items = this._getActiveItems();
              const selected = button.querySelectorAll(".am5stock-control-color:focus, .am5stock-control-opacity:focus");
              let index = -1;
              if (selected.length > 0) {
                items.forEach((item, key) => {
                  if (item === selected.item(0)) {
                    index = key;
                  }
                });
              }
              index += dir;
              if (index < 0) {
                index = items.length - 1;
              } else if (index >= items.length) {
                index = 0;
              }
              focus(items.item(index));
            }
          }
        }
      }));
    }
  }
  _maybeMakeAccessible() {
    super._maybeMakeAccessible();
    if (this.isAccessible()) {
      const items = this._getActiveItems();
      items.forEach((item, key) => {
        item.setAttribute("tabindex", "-1");
        item.setAttribute("aria-label", this.root.language.translateAny("Selection") + " #" + (key + 1));
      });
    }
  }
  _getActiveItems() {
    return this.getPrivate("list").querySelectorAll(".am5stock-control-color, .am5stock-control-opacity");
  }
};
Object.defineProperty(DropdownColors, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownColors"
});
Object.defineProperty(DropdownColors, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Dropdown.classNames.concat([DropdownColors.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockToolbarCSS.js
var rules;
function StockToolbarCSS_default(element, root, _prefix) {
  const ic = root.interfaceColors;
  const active = ic.get("secondaryButton").toCSS();
  const hover = ic.get("secondaryButtonHover").toCSS();
  const text = ic.get("text").toCSS();
  const textDisabled = ic.get("disabled").toCSS();
  const border = ic.get("secondaryButtonActive").toCSS();
  const bg = ic.get("background").toCSS();
  const link = ic.get("primaryButton").toCSS();
  if (!rules) {
    const disposer = new MultiDisposer([
      new StyleRule(element, ".am5stock-control-button", {
        "display": "inline-block",
        "position": "relative",
        "border": "1px solid " + border,
        "border-radius": "4px",
        "padding": "3px 0 3px 5px",
        "margin": "2px",
        "z-index": "1",
        "cursor": "default",
        "line-height": "1.5em",
        "color": text
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button div", {
        "box-sizing": "initial"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button:hover", {
        //"background": hover
        "border-color": hover
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button.am5stock-no-hover:hover", {
        "background": "initial"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content .am5stock-control-button", {
        "padding": "5px 6px",
        "line-height": "0.8em"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-color .am5stock-control-icon", {
        "border-radius": "3px",
        "min-height": "1em",
        "max-width": "50px",
        "line-height": "0.8em"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content .am5stock-control-color .am5stock-control-icon", {
        "margin": "0",
        "width": "48px",
        "min-height": "1em",
        "max-width": "50px",
        "line-height": "0.8em"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content .am5stock-control-button .am5stock-control-icon > .am5stock-control-icon-color", {
        "width": "1px"
      }, root.nonce),
      new StyleRule(element, '.am5-modal-content input[type="text"], .am5-modal-content input[type="number"], .am5-modal-content select', {
        "border": "1px solid " + border
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button.am5stock-align-right", {
        "float": "right"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button.am5stock-control-button-active", {
        "background": active,
        "z-index": "2"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button.am5stock-control-dropdown.am5stock-control-button-active", {
        "z-index": "3"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content .am5stock-control-button.am5stock-control-button-active, .am5-modal-content .am5stock-control-button:hover", {
        "background": "none"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content .am5-modal-link-reset", {
        "display": "block",
        "color": link,
        "text-transform": "uppercase",
        "font-weight": "500",
        "margin-top": "0.5em",
        "font-size": "0.8em",
        "cursor": "pointer"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-icon", {
        "min-width": "1.2em",
        "min-height": "1.2em",
        "max-width": "1.2em",
        "display": "inline-block",
        "position": "relative",
        "margin": "0 5px 0 0"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-icon.am5stock-icon-wide", {
        "max-width": "60px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-icon > *", {
        "vertical-align": "sub"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-icon > .am5stock-control-icon-color", {
        "max-width": "20px",
        "width": "20px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-icon > .am5stock-control-icon-color-bg", {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "position": "absolute",
        "left": "0",
        "top": "0",
        "z-index": "-1",
        "overflow": "hidden",
        "border-radius": "3px",
        "background-image": "linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%)",
        "background-size": "10px 10px",
        "background-position": "0 0, 0 5px, 5px -5px, -5px 0px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-button path", {
        "stroke-width": "0.5",
        "stroke": text,
        "fill": "none",
        "vector-effect": "non-scaling-stroke"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-label", {
        "display": "inline-block",
        "margin": "0 5px 0 0"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list-container", {
        "position": "absolute",
        "left": "0",
        "top": "100%",
        "margin-top": "10px",
        "background": bg,
        "border": "1px solid " + border,
        "border-radius": "3px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-align-right .am5stock-control-list-container", {
        "left": "auto",
        "right": "0"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list-arrow", {
        "position": "absolute",
        "left": "5px",
        "top": "-5px",
        "border": "solid " + border,
        "border-width": "0 1px 1px 0",
        "background": bg,
        "display": "inline-block",
        "padding": "5px",
        "transform": "rotate(-135deg)"
      }, root.nonce),
      new StyleRule(element, ".am5stock-align-right .am5stock-control-list-arrow", {
        "right": "5px",
        "left": "auto"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list", {
        "list-style": "none",
        "margin": "5px",
        "padding": "2px",
        "white-space": "nowrap"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li", {
        "padding": "2px 6px 2px 6px",
        "position": "relative"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li:hover", {
        "background": active
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li.am5stock-list-info", {
        "font-style": "italic",
        "color": hover
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list .am5stock-list-sub", {
        "font-size": "0.7em",
        "color": hover,
        "display": "block"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li.am5stock-list-info:hover", {
        "background": "none"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li.am5stock-list-heading", {
        "font-style": "normal",
        "font-weight": "bold",
        "color": "initial",
        "margin-top": "0.3em"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li.am5stock-disabled:hover, .am5stock-control-list li.am5stock-disabled > *", {
        "background": "none",
        "color": textDisabled
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li svg", {
        "max-width": "1em",
        "max-height": "1em",
        "margin-right": "0.8em",
        //"position": "absolute",
        "left": "0px",
        "top": "2px",
        "display": "inline-block"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li svg.am5stock-icon-wide, .am5stock-control-icon > *.am5stock-icon-wide", {
        "width": "60px",
        "max-width": "60px",
        "margin-right": "0"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li div, .am5stock-control-list li label", {
        "display": "inline-block",
        "margin-right": "1em"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-list li input", {
        "margin-right": "1em"
      }, root.nonce),
      new StyleRule(element, ".am5stock-list-search", {
        //"display": "inline-block",
        "margin": "0.5em 0.7em",
        "padding-bottom": "0.25em",
        //"padding-left": "30px",
        //"border-bottom": "1px solid " + active,
        "position": "relative"
        //"background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjcuNSIvPjxsaW5lIHgxPSIyMSIgeDI9IjE1LjgiIHkxPSIyMSIgeTI9IjE1LjgiLz48L3N2Zz4=) left / 20px 20px no-repeat",
      }, root.nonce),
      new StyleRule(element, ".am5stock-list-search input", {
        "border": "1px solid " + active,
        "padding": "6px 10px 6px 30px",
        "margin-top": "5px",
        "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjcuNSIvPjxsaW5lIHgxPSIyMSIgeDI9IjE1LjgiIHkxPSIyMSIgeTI9IjE1LjgiLz48L3N2Zz4=) 5px / 20px 20px no-repeat",
        "background-color": "#fff",
        //"background-color": active,
        "color": "#888"
      }, root.nonce),
      new StyleRule(element, ".am5stock-list-search input::placeholder", {
        "color": "#888"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-colors, .am5stock-control-icons", {
        "list-style": "none",
        "margin": "5px",
        "padding": "2px",
        //"white-space": "nowrap",
        "width": "240px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-colors li, .am5stock-control-icons li", {
        "display": "inline-block",
        "padding": "0",
        "margin": "0",
        "border": "3px solid " + bg,
        "width": "24px",
        "height": "24px",
        "position": "relative"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-colors li:hover, .am5stock-control-colors li.am5stock-control-active, .am5stock-control-icons li:hover, .am5stock-control-icons li.am5stock-control-active", {
        "border-color": "rgba(200, 200, 200, 1)"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-colors li.am5stock-control-opacity", {
        "width": "42px",
        "text-align": "center"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-colors li.am5stock-control-opacity", {
        "width": "42px",
        "text-align": "center",
        "font-size": "12px",
        "line-height": "24px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-control-opacity-100, .am5stock-control-opacity-75, .am5stock-control-opacity-50", {
        "color": "#fff"
      }, root.nonce),
      new StyleRule(element, ".am5stock-row", {
        "display": "flex",
        "flex-direction": "row"
      }, root.nonce),
      new StyleRule(element, ".am5stock-column", {
        "min-width": "200px",
        "display": "inline-block",
        "padding": "1em"
      }, root.nonce),
      new StyleRule(element, ".am5stock-group", {
        "white-space": "nowrap",
        //"margin": "0.5em 1em",
        "padding-bottom": "0.25em",
        "border-bottom": "1px solid " + active,
        "position": "relative"
      }, root.nonce),
      new StyleRule(element, ".am5stock-group input", {
        "border": "none",
        "padding": "3px 5px",
        //"margin-top": "5px",
        "width": "100%",
        "box-sizing": "border-box"
      }, root.nonce),
      new StyleRule(element, ".am5stock-small", {
        "font-size": "0.7em"
      }, root.nonce),
      new StyleRule(element, ".am5stock-link", {
        "display": "inline-block",
        "margin": "0 0.15em",
        "padding": "0 3px",
        "border-radius": "3px"
      }, root.nonce),
      new StyleRule(element, ".am5stock-link.am5stock-active, .am5stock-link:hover", {
        //"font-weight": "bold"
        "background": active
      }, root.nonce),
      new StyleRule(element, ".am5stock-link.am5stock-hidden", {
        "display": "none"
      }, root.nonce),
      new StyleRule(element, ".am5stock-drawing-label-wrapper", {
        //"font-weight": "bold"
        "background-color": bg,
        "bakcground-opacity": "0.5",
        "padding": "0.5em",
        "border-radius": "4px",
        "-webkit-box-shadow": "0px 0px 36px 0px rgba(0,0,0,0.45)",
        "box-shadow": "0px 0px 36px 0px rgba(0,0,0,0.45)"
      }, root.nonce),
      new StyleRule(element, ".am5stock-drawing-label-input", {
        "width": "250px",
        "min-height": "50px"
      }, root.nonce)
    ]);
    rules = new CounterDisposer(() => {
      rules = void 0;
      disposer.dispose();
    });
  }
  return rules.increment();
}

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/ColorControl.js
var ColorControl = class extends StockControl {
  _afterNew() {
    super._afterNew();
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-color";
    const dropdownSettings = {
      control: this,
      parent: this.getPrivate("button"),
      useOpacity: this.get("useOpacity")
    };
    if (this.get("colors")) {
      dropdownSettings.colors = this.get("colors");
    }
    const dropdown = DropdownColors.new(this._root, dropdownSettings);
    this.setPrivate("dropdown", dropdown);
    dropdown.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    dropdown.events.on("invoked", (ev) => {
      this.setPrivate("color", ev.color);
      this.events.dispatch("selected", {
        type: "selected",
        color: ev.color,
        target: this
      });
    });
    dropdown.events.on("invokedOpacity", (ev) => {
      this.setPrivate("opacity", ev.opacity);
      this.events.dispatch("selectedOpacity", {
        type: "selectedOpacity",
        opacity: ev.opacity,
        target: this
      });
    });
    this.on("active", (active) => {
      if (active) {
        dropdown.setPrivate("color", this.getPrivate("color"));
        dropdown.setPrivate("opacity", this.getPrivate("opacity"));
        this.setTimeout(() => dropdown.show(), 10);
      } else {
        dropdown.hide();
      }
    });
    this.onPrivate("color", () => {
      const color2 = this.getPrivate("color");
      this.getPrivate("icon").style.backgroundColor = color2 ? color2.toCSS(this.getPrivate("opacity", 1)) : "";
    });
    this.onPrivate("opacity", () => {
      const color2 = this.getPrivate("color");
      this.getPrivate("icon").style.backgroundColor = color2 ? color2.toCSS(this.getPrivate("opacity", 1)) : "";
    });
    const bg = document.createElement("div");
    bg.className = "am5stock-control-icon-color-bg";
    this.getPrivate("icon").appendChild(bg);
    this.loadDefaultCSS();
  }
  /**
   * Sets color.
   *
   * @param  color  Color
   * @since 5.9.0
   */
  setColor(color2) {
    this.setPrivate("color", color2);
    this.events.dispatch("selected", {
      type: "selected",
      color: color2,
      target: this
    });
  }
  /**
   * Sets opacity.
   *
   * @param  opacity  Opacity
   * @since 5.9.0
   */
  setOpacity(opacity) {
    this.setPrivate("opacity", opacity);
    this.events.dispatch("selectedOpacity", {
      type: "selectedOpacity",
      opacity,
      target: this
    });
  }
  _getDefaultIcon() {
    const icon = StockIcons.getIcon("Color");
    addClass(icon, "am5stock-control-icon-color");
    return icon;
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  loadDefaultCSS() {
    const disposer = StockToolbarCSS_default(getShadowRoot(this._root.dom), this._root);
    this._disposers.push(disposer);
  }
  hide() {
    super.hide();
  }
  _maybeMakeAccessible() {
    super._maybeMakeAccessible();
    if (this.isAccessible()) {
      const button = this.getPrivate("button");
      button.setAttribute("aria-label", button.getAttribute("title") + "; " + this._t("Press ENTER or use arrow keys to navigate"));
      if (supports("keyboardevents")) {
        this._disposers.push(addEventListener(document, "keydown", (ev) => {
          if (document.activeElement == button) {
            if (ev.keyCode == 38 || ev.keyCode == 40) {
              if (!this.get("active")) {
                this._handleClick();
              }
            }
          }
        }));
      }
    }
  }
};
Object.defineProperty(ColorControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColorControl"
});
Object.defineProperty(ColorControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([ColorControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/SettingsModal.js
var SettingsModal = class extends Modal {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_updatedSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_settingsTarget", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_colorControl", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this._defaultThemes = this.get("stockChart")._defaultThemes;
    super._afterNewApplyThemes();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  /**
   * Opens settings modal for an [[Indicator]].
   *
   * @param  target  Target indicator
   */
  openIndicator(target) {
    this._settingsTarget = target;
    this.initContent(target._editableSettings, target);
  }
  /**
   * Opens settings editing for the any [[XYSeries]].
   *
   * @param  series  target series
   */
  openSeries(series) {
    this._settingsTarget = series;
    const l = this._root.language;
    const stockChart = this.get("stockChart");
    const isline = series instanceof LineSeries;
    let settings = [];
    if (series == stockChart.get("stockSeries") && !isline) {
      settings.push({
        id: "stockPositiveColor",
        key: "stockPositiveColor",
        name: l.translateAny("Increase"),
        type: "color",
        currentValue: stockChart.get("stockPositiveColor", this._root.interfaceColors.get("positive")),
        target: stockChart
      });
      settings.push({
        id: "stockNegativeColor",
        key: "stockNegativeColor",
        name: l.translateAny("Decrease"),
        type: "color",
        currentValue: stockChart.get("stockNegativeColor", this._root.interfaceColors.get("negative")),
        target: stockChart
      });
    } else if (series == stockChart.get("volumeSeries") && !isline) {
      settings.push({
        id: "volumePositiveColor",
        key: "volumePositiveColor",
        name: l.translateAny("Increase"),
        type: "color",
        currentValue: stockChart.get("volumePositiveColor", this._root.interfaceColors.get("positive")),
        target: stockChart
      });
      settings.push({
        id: "volumeNegativeColor",
        key: "volumeNegativeColor",
        name: l.translateAny("Decrease"),
        type: "color",
        currentValue: stockChart.get("volumeNegativeColor", this._root.interfaceColors.get("negative")),
        target: stockChart
      });
    } else if (series instanceof CandlestickSeries && series.columns.length) {
      const column = series.columns.getIndex(0);
      settings.push({
        id: "riseFromOpen.fill",
        key: "fill",
        additionalKeys: ["stroke"],
        name: l.translateAny("Increase"),
        type: "color",
        currentValue: column.states.lookup("riseFromOpen").get("fill"),
        target: series.columns.template.states.create("riseFromOpen", {}),
        invalidateTarget: series
      });
      settings.push({
        id: "dropFromOpen.fill",
        key: "fill",
        additionalKeys: ["stroke"],
        name: l.translateAny("Decrease"),
        type: "color",
        currentValue: column.states.lookup("dropFromOpen").get("fill"),
        target: series.columns.template.states.create("dropFromOpen", {}),
        invalidateTarget: series
      });
    } else if (isline) {
      const widths = this.get("strokeWidths", [1, 2, 4, 10]);
      const widthOptions = widths.map((width) => {
        return { value: width, text: width + "px" };
      });
      settings = [{
        key: "stroke",
        name: l.translateAny("Line"),
        type: "color",
        additionalKeys: ["fill"],
        target: series
      }, {
        key: "strokeWidth",
        name: l.translateAny("Line"),
        type: "dropdown",
        options: widthOptions,
        currentValue: series.strokes.template.get("strokeWidth", 1),
        target: series.strokes.template,
        invalidateTarget: series
      }];
      if (series.fills.template.get("visible")) {
        settings.push({
          key: "fill",
          name: l.translateAny("Fill"),
          type: "color"
        });
      }
    } else {
      settings = [{
        key: "stroke",
        name: l.translateAny("Line"),
        type: "color"
      }, {
        key: "fill",
        name: l.translateAny("Fill"),
        type: "color"
      }];
    }
    this.initContent(settings, series);
  }
  initContent(settings, target) {
    this._updatedSettings = {};
    const content = this.getPrivate("content");
    this.clear();
    this.events.dispatch("initstarted", {
      type: "initstarted",
      settings,
      settingsTarget: target,
      target: this
    });
    const title = document.createElement("h1");
    title.innerHTML = target.get("name");
    content.appendChild(title);
    const table = document.createElement("div");
    table.className = "am5-modal-table";
    content.appendChild(table);
    let populateDefaults = false;
    let defaults2 = {};
    if (!target.get("userData")) {
      target.set("userData", {});
    }
    if (!target.get("userData")["__defaults"]) {
      target.get("userData")["__defaults"] = defaults2;
      populateDefaults = true;
    } else {
      defaults2 = target.get("userData")["__defaults"];
    }
    const settingInputs = {};
    const controls = {};
    const settingsWithTarget = {};
    let prevName = "";
    let prevLine;
    each(settings, (setting) => {
      const key = this._getSettingKey(setting);
      const keyTarget = setting.target || target;
      const currentValue = setting.currentValue || keyTarget.get(setting.key);
      if (populateDefaults) {
        defaults2[key] = currentValue;
      }
      if (setting.target) {
        settingsWithTarget[key] = setting;
      }
      let element;
      switch (setting.type) {
        case "dropdown":
          element = this.getDropdown(setting, currentValue);
          settingInputs[key] = element;
          this._disposers.push(addEventListener(element, "change", (ev) => {
            const input = ev.target;
            const option = input.options[input.selectedIndex];
            const extTarget = option.getAttribute("data-target");
            if (extTarget) {
              settingInputs[extTarget].value = option.getAttribute("data-target-value") + "";
              settingInputs[extTarget].setAttribute("data-min-value", option.getAttribute("data-target-min-value") + "");
            }
          }));
          break;
        case "number":
          element = this.getNumber(setting, currentValue);
          settingInputs[key] = element;
          if (setting.minValue !== void 0) {
            element.setAttribute("data-min-value", setting.minValue + "");
            this._disposers.push(addEventListener(element, "change", (ev) => {
              const input = ev.target;
              const minValue = Number(input.getAttribute("data-min-value"));
              const value = Number(input.value);
              if (value < minValue) {
                input.value = minValue + "";
              }
            }));
          }
          break;
        case "color":
          const control = this.getColor(setting, currentValue);
          element = control.getPrivate("button");
          controls[key] = control;
          break;
        case "checkbox":
          element = this.getCheckbox(setting, currentValue);
          settingInputs[key] = element;
          break;
        case "text":
          element = this.getText(setting, currentValue);
          settingInputs[key] = element;
          break;
      }
      if (element) {
        let line;
        if (setting.name == prevName && prevLine) {
          line = prevLine;
        } else {
          line = document.createElement("div");
          line.className = "am5-modal-table-row";
          table.appendChild(line);
          const heading = document.createElement("div");
          heading.className = "am5-modal-table-heading";
          heading.innerHTML = setting.name;
          line.appendChild(heading);
        }
        const cell = document.createElement("div");
        cell.className = "am5-modal-table-cell";
        line.appendChild(cell);
        cell.appendChild(element);
        prevName = setting.name;
        prevLine = line;
      }
    });
    if (this.get("showResetLink", true)) {
      const resetLink = document.createElement("a");
      resetLink.className = "am5-modal-link am5-modal-table-cell am5-modal-link-reset";
      resetLink.innerHTML = this._root.language.translateAny("Reset to default");
      table.appendChild(resetLink);
      this._disposers.push(addEventListener(resetLink, "click", () => {
        const defaults3 = target.get("userData")["__defaults"];
        each2(settingInputs, (key, element) => {
          if (element.type === "checkbox") {
            element.checked = defaults3[key];
          } else {
            element.value = defaults3[key];
          }
        });
        each2(controls, (key, control) => {
          control.setColor(defaults3[key]);
        });
      }));
    }
    const saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = this._root.language.translateAny("Save");
    saveButton.className = "am5-modal-button am5-modal-primary";
    content.appendChild(saveButton);
    this._disposers.push(addEventListener(saveButton, "click", () => {
      each2(settingInputs, (key, element) => {
        if (element.type == "checkbox") {
          this._updatedSettings[key] = element.checked;
        } else if (element.type == "number") {
          this._updatedSettings[key] = toNumber(element.value);
        } else {
          this._updatedSettings[key] = element.value;
        }
      });
      each2(this._updatedSettings, (key, value) => {
        const targetKey = key.split(".").pop();
        if (targetKey && ["fill", "stroke"].indexOf(targetKey) != -1 && target.className == "ColumnSeries") {
          target.columns.template.remove(targetKey);
        }
        if (isObject(value) && value.value) {
          if (value.setting && value.setting.target) {
            value.setting.target.set(targetKey, value.value);
            if (value.setting.additionalKeys) {
              each(value.setting.additionalKeys, (additionalKey) => {
                value.setting.target.set(additionalKey, value.value);
              });
            }
          } else {
            target.set(targetKey, value.value);
          }
        } else if (settingsWithTarget[targetKey]) {
          settingsWithTarget[targetKey].target.set(targetKey, value);
        } else {
          target.set(targetKey, value);
        }
        if (value.setting && value.setting.invalidateTarget) {
          value.setting.invalidateTarget.markDirtyValues();
        }
      });
      this.close();
    }));
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = this._root.language.translateAny("Cancel");
    cancelButton.className = "am5-modal-button am5-modal-scondary";
    content.appendChild(cancelButton);
    this._disposers.push(addEventListener(cancelButton, "click", () => {
      this.cancel();
    }));
    this.open();
    this.setTimeout(() => {
      saveButton.focus();
    }, 10);
  }
  getDropdown(setting, currentValue) {
    const element = document.createElement("select");
    each(setting.options, (option) => {
      if (option) {
        const optionElement = document.createElement("option");
        let value;
        if (isObject(option)) {
          optionElement.value = option.value;
          optionElement.text = option.text;
          value = option.value;
          if (option.minValue) {
            optionElement.setAttribute("data-min-value", option.minValue);
          }
          if (option.extTarget) {
            optionElement.setAttribute("data-target", option.extTarget);
          }
          if (option.extTargetValue) {
            optionElement.setAttribute("data-target-value", option.extTargetValue);
          }
          if (option.extTargetMinValue) {
            optionElement.setAttribute("data-target-min-value", option.extTargetMinValue);
          }
        } else {
          optionElement.value = option;
          optionElement.text = option;
          value = option;
        }
        if (value == currentValue) {
          optionElement.selected = true;
        }
        element.appendChild(optionElement);
      }
    });
    return element;
  }
  getNumber(_setting, currentValue) {
    const element = document.createElement("input");
    element.type = "number";
    element.value = currentValue;
    element.className = "am5-modal-input-narrow";
    return element;
  }
  getText(_setting, currentValue) {
    const element = document.createElement("input");
    element.type = "text";
    element.value = currentValue;
    element.className = "am5-modal-input";
    return element;
  }
  getCheckbox(_setting, currentValue) {
    const element = document.createElement("input");
    element.type = "checkbox";
    element.checked = currentValue === true;
    return element;
  }
  getColor(setting, currentValue) {
    const control = ColorControl.new(this.root, {
      stockChart: this.get("stockChart"),
      useOpacity: false
    });
    control.setPrivate("color", currentValue);
    control.events.on("selected", (ev) => {
      this._updatedSettings[this._getSettingKey(setting)] = {
        value: ev.color,
        setting
      };
    });
    this._disposers.push(control);
    return control;
  }
  /**
   * Closes the modal, saving settings.
   */
  close() {
    super.close();
    this.events.dispatch("done", {
      type: "done",
      settings: this._updatedSettings,
      settingsTarget: this._settingsTarget,
      target: this
    });
  }
  /**
   * Closes the modal without applying any changes.
   */
  cancel() {
    super.cancel();
    this.events.dispatch("done", {
      type: "done",
      settings: null,
      target: this
    });
  }
  /**
   * Clears contents of the modal.
   */
  clear() {
    const content = this.getPrivate("content");
    content.innerHTML = "";
    if (this._colorControl) {
      this._colorControl.dispose();
    }
  }
  _getSettingKey(setting) {
    return setting.id || setting.key;
  }
};
Object.defineProperty(SettingsModal, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SettingsModal"
});
Object.defineProperty(SettingsModal, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Modal.classNames.concat([SettingsModal.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/StockChart.js
var StockChart = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_xAxes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_downY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_upperPanel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dhp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_uhp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_syncExtremesDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_drawingsChanged", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_indicatorsChanged", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_baseDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "panels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
    Object.defineProperty(this, "indicators", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
    Object.defineProperty(this, "toolsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, { width: p100, themeTags: [] }))
    });
    Object.defineProperty(this, "panelsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, { width: p100, height: p100, layout: this._root.verticalLayout, themeTags: ["chartscontainer"] }))
    });
    Object.defineProperty(this, "controls", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "spriteResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(SpriteResizer.new(this._root, {}))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["stock"]);
    this._defaultThemes.push(StockChartDefaultTheme.new(this._root));
    this._defaultThemes.push(XYChartDefaultTheme.new(this._root));
    const tooltipContainer = this._root.tooltipContainer;
    tooltipContainer.set("themeTags", mergeTags(tooltipContainer.get("themeTags", []), ["stock"]));
    super._afterNew();
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keyup", (e) => {
        if (e.keyCode == 46) {
          this.deleteSelectedDrawings();
        }
        if (e.keyCode == 27) {
          this.unselectDrawings();
          this.cancelDrawing();
          this.spriteResizer.set("sprite", void 0);
        }
      }));
    }
    const children = this.panelsContainer.children;
    this._disposers.push(this.panels.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (chart) => {
          this._removePanel(chart);
        });
      } else if (change.type === "push") {
        children.moveValue(change.newValue);
        this._processPanel(change.newValue);
      } else if (change.type === "setIndex") {
        children.setIndex(change.index, change.newValue);
        this._processPanel(change.newValue);
      } else if (change.type === "insertIndex") {
        children.insertIndex(change.index, change.newValue);
        this._processPanel(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removePanel(change.oldValue);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
    this._disposers.push(this.indicators.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (indicator) => {
          this._removeIndicator(indicator);
        });
      } else if (change.type === "push") {
        this._processIndicator(change.newValue);
      } else if (change.type === "setIndex") {
        this._processIndicator(change.newValue);
      } else if (change.type === "insertIndex") {
        this._processIndicator(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeIndicator(change.oldValue);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
    this.setPrivateRaw("settingsModal", SettingsModal.new(this.root, {
      stockChart: this
    }));
    let license = false;
    for (let i = 0; i < registry.licenses.length; i++) {
      if (registry.licenses[i].match(/^AM5S.{5,}/i)) {
        license = true;
      }
    }
    if (!license) {
      this._root._showBranding();
    } else {
      this._root._licenseApplied();
    }
  }
  _dispose() {
    super._dispose();
    const settingsModal = this.getPrivate("settingsModal");
    if (settingsModal) {
      settingsModal.dispose();
    }
  }
  /**
   * Forces redrawing of all annotations (drfawings).
   */
  markDirtyDrawings() {
    this._drawingsChanged = true;
    this.markDirty();
  }
  /**
   * Forces redrawing of Indicators.
   */
  markDirtyIndicators() {
    this._indicatorsChanged = true;
    this.markDirty();
  }
  /**
   * Toggles drawing mode on or off.
   *
   * @param  enabled  Drawing enabled
   * @since 5.10.6
   */
  toggleDrawing(enabled) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series.toggleDrawing(enabled);
        }
      });
    });
  }
  _prepareChildren() {
    if (this.isDirty("drawingSelectionEnabled")) {
      const enabled = this.get("drawingSelectionEnabled");
      if (enabled !== void 0) {
        this._root.events.once("frameended", () => {
          this.setPrivate("drawingSelectionEnabled", enabled);
        });
      }
    }
    if (this.isPrivateDirty("drawingSelectionEnabled")) {
      const enabled = this.getPrivate("drawingSelectionEnabled", false);
      if (!enabled) {
        this.unselectDrawings();
      } else {
        this.set("erasingEnabled", false);
      }
      this.panels.each((panel) => {
        panel.series.each((series) => {
          if (series.isType("DrawingSeries")) {
            series.enableDrawingSelection(enabled);
          }
        });
      });
    }
    if (this.isDirty("erasingEnabled")) {
      const enabled = this.get("erasingEnabled", false);
      if (enabled) {
        this.setPrivate("drawingSelectionEnabled", false);
      }
      this.panels.each((panel) => {
        panel.series.each((series) => {
          if (series.isType("DrawingSeries")) {
            if (enabled) {
              series.enableErasing();
            } else {
              series.disableErasing();
            }
          }
        });
      });
    }
    if (this.isDirty("volumeNegativeColor") || this.isDirty("volumePositiveColor")) {
      const volumeSeries = this.get("volumeSeries");
      if (volumeSeries && volumeSeries.isType("BaseColumnSeries")) {
        volumeSeries.columns.each((column) => {
          column._markDirtyKey("fill");
        });
      }
    }
    const stockSeries = this.get("stockSeries");
    if (this.isDirty("stockSeries")) {
      if (stockSeries) {
        const previous = this._prevSettings.stockSeries;
        this.indicators.each((indicator) => {
          if (previous == indicator.get("stockSeries")) {
            indicator.set("stockSeries", stockSeries);
          } else {
            indicator._setSoft("stockSeries", stockSeries);
          }
        });
        const mainChart = stockSeries.chart;
        if (mainChart) {
          mainChart.series.each((series) => {
            if (series.isType("DrawingSeries")) {
              let s = series.get("series");
              if (s == previous) {
                series.set("series", stockSeries);
              } else {
                series._setSoft("series", stockSeries);
              }
            }
          });
          const xAxis = mainChart.xAxes.getIndex(0);
          if (xAxis) {
            if (this._syncExtremesDp) {
              this._syncExtremesDp.dispose();
            }
            this.setPrivateRaw("mainAxis", xAxis);
            if (this._baseDP) {
              this._baseDP.dispose();
            }
            this._baseDP = xAxis.on("baseInterval", (baseInterval) => {
              this.indicators.each((indicator) => {
                if (indicator.isType("ChartIndicator")) {
                  indicator.xAxis.set("baseInterval", baseInterval);
                }
              });
            });
            this._syncExtremesDp = new MultiDisposer([
              xAxis.onPrivate("max", () => {
                this._syncExtremes();
              }),
              xAxis.onPrivate("min", () => {
                this._syncExtremes();
              })
            ]);
          }
        }
        if (this.getPrivate("comparing")) {
          this.setPercentScale(true);
        }
      }
    }
    super._prepareChildren();
  }
  _afterChanged() {
    super._afterChanged();
    if (this._drawingsChanged) {
      this._drawingsChanged = false;
      const type = "drawingsupdated";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this });
      }
    }
    if (this._indicatorsChanged) {
      this._indicatorsChanged = false;
      const type = "indicatorsupdated";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this });
      }
    }
  }
  _updateChildren() {
    super._updateChildren();
    const stockSeries = this.get("stockSeries");
    if (this.isDirty("volumeSeries")) {
      const volumeSeries = this.get("volumeSeries");
      if (volumeSeries) {
        const volumePanel = volumeSeries.chart;
        if (volumePanel) {
          volumePanel.series.events.on("removeIndex", (event) => {
            if (event.oldValue == volumeSeries) {
              this.set("volumeSeries", void 0);
            }
          });
        }
      }
    }
    if (this.isDirty("stockNegativeColor") || this.isDirty("stockPositiveColor") || this.isDirty("stockSeries")) {
      if (stockSeries && stockSeries.isType("BaseColumnSeries")) {
        const ic = this._root.interfaceColors;
        const stockNegativeColor = this.get("stockNegativeColor", ic.get("negative"));
        const stockPositiveColor = this.get("stockPositiveColor", ic.get("positive"));
        let previous = stockSeries.dataItems[0];
        if (stockPositiveColor && stockPositiveColor) {
          each(stockSeries.dataItems, (dataItem) => {
            const column = dataItem.get("graphics");
            if (column) {
              const dropFromOpen = column.states.lookup("dropFromOpen");
              if (dropFromOpen) {
                dropFromOpen.setAll({ fill: stockNegativeColor, stroke: stockNegativeColor });
              }
              const riseFromOpen2 = column.states.lookup("riseFromOpen");
              if (riseFromOpen2) {
                riseFromOpen2.setAll({ fill: stockPositiveColor, stroke: stockPositiveColor });
              }
              const dropFromPrevious = column.states.lookup("dropFromPrevious");
              if (dropFromPrevious) {
                dropFromPrevious.setAll({ fill: stockNegativeColor, stroke: stockNegativeColor });
              }
              const riseFromPrevious = column.states.lookup("riseFromPrevious");
              if (riseFromPrevious) {
                riseFromPrevious.setAll({ fill: stockPositiveColor, stroke: stockPositiveColor });
              }
              stockSeries._applyGraphicsStates(dataItem, previous);
              previous = dataItem;
            }
          });
          const states = stockSeries.columns.template.states;
          const riseFromOpen = states.lookup("riseFromOpen");
          const themeTags = stockSeries.columns.template.get("themeTags");
          if (stockPositiveColor) {
            if (riseFromOpen) {
              riseFromOpen.setAll({ fill: stockPositiveColor, stroke: stockPositiveColor });
            } else {
              states.create("riseFromOpen", { fill: stockPositiveColor, stroke: stockPositiveColor });
            }
            const riseFromPrevious = states.lookup("riseFromPrevious");
            if (riseFromPrevious) {
              riseFromPrevious.setAll({ fill: stockPositiveColor, stroke: stockPositiveColor });
            } else {
              if (themeTags && themeTags.indexOf("pro") != -1) {
                states.create("riseFromPrevious", { fill: stockPositiveColor, stroke: stockPositiveColor });
              }
            }
          }
          if (stockNegativeColor) {
            const dropFromOpen = states.lookup("dropFromOpen");
            if (dropFromOpen) {
              dropFromOpen.setAll({ fill: stockNegativeColor, stroke: stockNegativeColor });
            } else {
              states.create("dropFromOpen", { fill: stockNegativeColor, stroke: stockNegativeColor });
            }
            const dropFromPrevious = states.lookup("dropFromPrevious");
            if (dropFromPrevious) {
              dropFromPrevious.setAll({ fill: stockNegativeColor, stroke: stockNegativeColor });
            } else {
              if (themeTags && themeTags.indexOf("pro") != -1) {
                states.create("dropFromPrevious", { fill: stockNegativeColor, stroke: stockNegativeColor });
              }
            }
          }
        }
        stockSeries.markDirtyValues();
      }
    }
  }
  /**
   * Enables or disables percent scale mode.
   *
   * If `percentScale` is not set, it will try to determine the status on its own.
   *
   * In percent scale mode `percentScaleSeriesSettings` and `percentScaleValueAxisSettings` will
   * be applied to the regular series on the main panel and its Y axis.
   *
   * @param  percentScale  Comparison mode active
   */
  setPercentScale(percentScale) {
    const stockSeries = this.get("stockSeries");
    const seriesSettings = this.get("percentScaleSeriesSettings");
    const axisSettings = this.get("percentScaleValueAxisSettings");
    if (stockSeries) {
      const mainChart = stockSeries.chart;
      const yAxis = stockSeries.get("yAxis");
      yAxis.set("logarithmic", false);
      this._maybePrepAxisDefaults();
      if (mainChart) {
        const seriesList = [];
        mainChart.series.each((series) => {
          if (series.get("yAxis") == yAxis) {
            seriesList.push(series);
            this._maybePrepSeriesDefaults(series);
          }
        });
        if (percentScale == void 0) {
          percentScale = this.getPrivate("comparedSeries", []).length > 0;
        }
        this.setPrivate("comparing", percentScale);
        if (seriesSettings) {
          each(seriesList, (series) => {
            if (percentScale) {
              series.setAll(seriesSettings);
              series.states.lookup("default").setAll(seriesSettings);
            } else {
              series.states.apply("comparingDefaults");
              const seriesDefaults = series.states.lookup("comparingDefaults");
              if (seriesDefaults) {
                series.states.lookup("default").setAll(seriesDefaults._settings);
              }
            }
          });
        }
        if (axisSettings) {
          if (percentScale) {
            yAxis.setAll(axisSettings);
          } else {
            yAxis.states.apply("comparingDefaults");
          }
        }
      }
    }
    this.indicators.each((indicator) => {
      indicator.markDataDirty();
    });
  }
  /**
   * Adds a "compared" series to chart. Returns the same series.
   *
   * @param   series  Compared series
   * @return          Compared series
   */
  addComparingSeries(series) {
    const stockSeries = this.get("stockSeries");
    if (stockSeries) {
      const chart = stockSeries.chart;
      if (chart) {
        chart.series.push(series);
      }
      const comparingSeriesSettings = this.get("comparingSeriesSettings");
      if (comparingSeriesSettings) {
        series.setAll(comparingSeriesSettings);
      }
      const comparedSeries = this.getPrivate("comparedSeries");
      if (comparedSeries) {
        comparedSeries.push(series);
      } else {
        this.setPrivate("comparedSeries", [series]);
      }
      const legendDataItem = stockSeries.get("legendDataItem");
      if (legendDataItem) {
        const legend = legendDataItem.component;
        if (legend.isType("StockLegend")) {
          legend.data.push(series);
          const ldi = series.get("legendDataItem");
          if (ldi) {
            const closeButton = ldi.get("closeButton");
            closeButton.set("forceHidden", false);
            closeButton.events.on("click", () => {
              this.removeComparingSeries(series);
            });
          }
        }
      }
      if (this.get("autoSetPercentScale")) {
        this.setPercentScale(true);
      }
    }
    return series;
  }
  /**
   * Removes compared series.
   *
   * @param  series  Compared series
   */
  removeComparingSeries(series) {
    const stockSeries = this.get("stockSeries");
    if (stockSeries) {
      const chart = stockSeries.chart;
      if (chart) {
        chart.series.removeValue(series);
      }
      const comparedSeries = this.getPrivate("comparedSeries");
      if (comparedSeries) {
        remove(comparedSeries, series);
        if (comparedSeries.length == 0 && this.get("autoSetPercentScale")) {
          this.setPercentScale(false);
        }
      }
    }
    const ldi = series.get("legendDataItem");
    if (ldi) {
      const legend = ldi.component;
      legend.data.removeValue(series);
    }
  }
  _maybePrepSeriesDefaults(series) {
    if (!series.states.lookup("comparingDefaults")) {
      const seriesSettings = this.get("percentScaleSeriesSettings");
      const defaults2 = {};
      each2(seriesSettings, (key, _val) => {
        defaults2[key] = series.get(key);
      });
      series.states.create("comparingDefaults", defaults2);
    }
  }
  getSeriesDefault(series, setting) {
    const defaults2 = series.states.lookup("comparingDefaults");
    return defaults2 ? defaults2.get(setting) : series.get(setting);
  }
  _maybePrepAxisDefaults() {
    const stockSeries = this.get("stockSeries");
    const axis = stockSeries.get("yAxis");
    if (!axis.states.lookup("comparingDefaults")) {
      const axisSettings = this.get("percentScaleValueAxisSettings");
      const defaults2 = {};
      each2(axisSettings, (key, _val) => {
        defaults2[key] = axis.get(key);
      });
      axis.states.create("comparingDefaults", defaults2);
    }
  }
  _processIndicator(indicator) {
    this.children.push(indicator);
    const stockSeries = this.get("stockSeries");
    if (stockSeries) {
      indicator._setSoft("stockSeries", stockSeries);
    }
    const volumeSeries = this.get("volumeSeries");
    if (volumeSeries) {
      indicator._setSoft("volumeSeries", volumeSeries);
    }
    if (this.getPrivate("comparing")) {
      this.setPercentScale(true);
    }
    each(indicator._editableSettings, (setting) => {
      indicator.on(setting.key, () => {
        this.markDirtyIndicators();
      });
    });
    this.markDirtyIndicators();
    indicator.prepareData();
    this._syncExtremes();
  }
  _removeIndicator(indicator) {
    this.children.removeValue(indicator);
    this.markDirtyIndicators();
  }
  _removePanel(chart) {
    this.panelsContainer.children.removeValue(chart);
  }
  _updateControls() {
    const stockSeries = this.get("stockSeries");
    this.panels.each((panel) => {
      const panelControls = panel.panelControls;
      const index = this.panelsContainer.children.indexOf(panel);
      const len = this.panels.length;
      const visible = "visible";
      const autoHidePanelControls = this.get("autoHidePanelControls", false);
      panelControls.set(visible, !autoHidePanelControls);
      panelControls.upButton.setPrivate(visible, false);
      panelControls.downButton.setPrivate(visible, false);
      panelControls.expandButton.setPrivate(visible, false);
      panelControls.closeButton.setPrivate(visible, false);
      if (autoHidePanelControls) {
        panel.plotContainer.events.on("pointerover", () => {
          panelControls.show();
        });
        panelControls.events.on("pointerover", () => {
          panelControls.show();
        });
        panel.plotContainer.events.on("pointerout", () => {
          if (!panelControls.isHover()) {
            panelControls.hide();
          }
        });
      }
      if (len > 1) {
        panelControls.expandButton.setPrivate(visible, true);
        if (index != 0) {
          panelControls.upButton.setPrivate(visible, true);
        }
        if (index != len - 1) {
          panelControls.downButton.setPrivate(visible, true);
        }
        if (!stockSeries || stockSeries.chart != panel) {
          panelControls.closeButton.setPrivate(visible, true);
        }
      }
      if (stockSeries) {
        this.indicators.each((indicator) => {
          indicator.set("stockSeries", stockSeries);
        });
      }
    });
    this._updateResizers();
  }
  _processPanel(panel) {
    panel.setPrivate("otherCharts", this.panels.values);
    panel.setPrivate("stockChart", this);
    panel.panelControls = panel.topPlotContainer.children.push(PanelControls.new(this._root, { stockPanel: panel, stockChart: this }));
    this._updateControls();
    const resizer = panel.children.push(Rectangle.new(this._root, { themeTags: ["panelresizer"] }));
    panel.panelResizer = resizer;
    resizer.events.on("pointerdown", (e) => {
      const chartsContainer = this.panelsContainer;
      this._downResizer = e.target;
      this.panels.each((chart) => {
        chart.set("height", percent(chart.height() / chartsContainer.height() * 100));
      });
      this._downY = chartsContainer.toLocal(e.point).y;
      const upperChart = chartsContainer.children.getIndex(chartsContainer.children.indexOf(panel) - 1);
      this._upperPanel = upperChart;
      if (upperChart) {
        this._uhp = upperChart.get("height");
      }
      this._dhp = panel.get("height");
    });
    resizer.events.on("pointerup", () => {
      this._downResizer = void 0;
    });
    resizer.events.on("globalpointermove", (e) => {
      if (e.target == this._downResizer) {
        const chartsContainer = this.panelsContainer;
        const height = chartsContainer.height();
        const upperChart = this._upperPanel;
        if (upperChart) {
          const index = chartsContainer.children.indexOf(upperChart) + 2;
          let max = height - panel.get("minHeight", 0);
          const lowerChart = chartsContainer.children.getIndex(index);
          if (lowerChart) {
            max = lowerChart.y() - panel.get("minHeight", 0);
          }
          const y = Math.max(upperChart.y() + upperChart.get("minHeight", 0) + upperChart.get("paddingTop", 0), Math.min(chartsContainer.toLocal(e.point).y, max));
          const downY = this._downY;
          const dhp = this._dhp;
          const uhp = this._uhp;
          if (downY != null && dhp != null && uhp != null) {
            const diff = (downY - y) / height;
            panel.set("height", percent((dhp.value + diff) * 100));
            upperChart.set("height", percent((uhp.value - diff) * 100));
          }
        }
      }
    });
    panel.xAxes.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (axis) => {
          this._removeXAxis(axis);
        });
      } else if (change.type === "push") {
        this._processXAxis(change.newValue);
      } else if (change.type === "setIndex") {
        this._processXAxis(change.newValue);
      } else if (change.type === "insertIndex") {
        this._processXAxis(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeXAxis(change.oldValue);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    });
    panel.leftAxesContainer.events.on("boundschanged", () => {
      this.root.events.once("frameended", () => {
        this._syncYAxesSize();
      });
    });
    panel.rightAxesContainer.events.on("boundschanged", () => {
      this.root.events.once("frameended", () => {
        this._syncYAxesSize();
      });
    });
    this._updateResizers();
  }
  _updateResizers() {
    this.panels.each((panel) => {
      var _a;
      let hidden = false;
      if (this.panelsContainer.children.indexOf(panel) == 0) {
        hidden = true;
      }
      (_a = panel.panelResizer) === null || _a === void 0 ? void 0 : _a.set("forceHidden", hidden);
    });
  }
  _syncYAxesSize() {
    let maxLeft = 0;
    let maxRight = 0;
    this.panels.each((chart) => {
      let lw = chart.leftAxesContainer.width();
      let rw = chart.rightAxesContainer.width();
      if (lw > maxLeft) {
        maxLeft = lw;
      }
      if (rw > maxRight) {
        maxRight = rw;
      }
    });
    this.panels.each((chart) => {
      chart.leftAxesContainer.set("minWidth", maxLeft);
      chart.rightAxesContainer.set("minWidth", maxRight);
    });
    this.toolsContainer.set("paddingLeft", maxLeft);
    this.toolsContainer.set("paddingRight", maxRight);
  }
  _removeXAxis(_axis) {
  }
  _processXAxis(axis) {
    move(this._xAxes, axis);
    axis.on("start", () => {
      if (axis._skipSync != true) {
        this._syncXAxes(axis);
      }
    });
    axis.on("end", () => {
      if (axis._skipSync != true) {
        this._syncXAxes(axis);
      }
    });
    if (this._xAxes[0]) {
      this._root.events.once("frameended", () => {
        this._syncXAxes(this._xAxes[0]);
      });
    }
  }
  _syncExtremes() {
    const mainAxis = this.getPrivate("mainAxis");
    if (mainAxis) {
      const min = mainAxis.getPrivate("min");
      const max = mainAxis.getPrivate("max");
      this.panels.each((panel) => {
        panel.xAxes.each((xAxis) => {
          if (xAxis != mainAxis && xAxis.isType("DateAxis")) {
            let axisMin = xAxis.getPrivate("min");
            let axisMax = xAxis.getPrivate("max");
            if (axisMin != min) {
              xAxis.set("min", min);
            }
            if (axisMax != max) {
              xAxis.set("max", max);
            }
            const type = "GaplessDateAxis";
            if (xAxis.isType(type) && mainAxis.isType(type)) {
              xAxis._customDates = mainAxis._dates;
            }
          }
        });
      });
    }
  }
  _syncXAxes(axis) {
    each(this._xAxes, (xAxis) => {
      if (xAxis != axis && xAxis.isType("DateAxis")) {
        xAxis._skipSync = true;
        xAxis.set("start", axis.get("start"));
        xAxis.set("end", axis.get("end"));
        xAxis._skipSync = false;
      }
    });
  }
  /**
   * Returns a color for volume, based on current and previous close.
   *
   * * `positiveColor` - close is greater or euqal than close of the previous period.
   * * `negativeColor` - close is lower than close of the previous period.
   *
   * @param   dataItem       Target data item
   * @param   negativeColor  "Negative color" (red)
   * @param   positiveColor  "Positive color" (green)
   * @return  Color
   */
  getVolumeColor(dataItem, negativeColor, positiveColor) {
    if (dataItem) {
      const stockSeries = this.get("stockSeries");
      const volumeSeries = dataItem.component;
      if (!negativeColor) {
        negativeColor = this.get("volumeNegativeColor", this.root.interfaceColors.get("negative", Color.fromHex(16711680)));
      }
      if (!positiveColor) {
        positiveColor = this.get("volumePositiveColor", this.root.interfaceColors.get("positive", Color.fromHex(65280)));
      }
      if (negativeColor && positiveColor) {
        if (stockSeries && volumeSeries) {
          const index = volumeSeries.dataItems.indexOf(dataItem);
          if (index > 0) {
            let stockDataItem = stockSeries.dataItems[index];
            if (stockDataItem) {
              let close = stockDataItem.get("valueY");
              if (close != null) {
                for (let i = index - 1; i >= 0; i--) {
                  let di = stockSeries.dataItems[i];
                  let previousClose = di.get("valueY");
                  if (previousClose != null) {
                    if (close < previousClose) {
                      return negativeColor;
                    } else {
                      return positiveColor;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return positiveColor;
  }
  /**
   * Returns a first [[StockControl]] of specific type.
   *
   * @since 5.7.0
   * @param   type  Control name
   * @return        Control
   */
  getControl(type) {
    let found;
    eachContinue(this.controls, (control) => {
      if (control.className == type) {
        found = control;
        return false;
      }
      return true;
    });
    return found;
  }
  _dragStartDrawing(event) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series._dragStart(event);
        }
      });
    });
  }
  _dragStopDrawing(event) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series._dragStop(event);
        }
      });
    });
  }
  /**
   * Enables or disables interactivity of annotations (drawings).
   *
   * @param value Drawings interactive?
   * @since 5.4.9
   */
  drawingsInteractive(value, except) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series != except) {
          if (series.isType("DrawingSeries")) {
            series.setInteractive(value);
          }
        }
      });
    });
  }
  /**
   * Unselect all currently selected drawings.
   *
   * @since 5.9.0
   */
  unselectDrawings() {
    let count = 0;
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          count += series.unselectDrawings();
        }
      });
    });
    this.spriteResizer.set("sprite", void 0);
    return count;
  }
  /**
   * Cancels drawing and deletes drawing which is now being drawn.
   *
   * @since 5.9.0
   */
  cancelDrawing() {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series.cancelDrawing();
        }
      });
    });
  }
  /**
   * Deletes all currently selected drawings.
   *
   * @since 5.9.0
   *
   */
  deleteSelectedDrawings() {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series.deleteSelected();
        }
      });
    });
  }
  /**
   * Selects drawing by its ID.
   *
   * @param  id             Drawing ID
   * @param  keepSelection  Keep existing selections
   * @since 5.9.0
   */
  selectDrawing(id, keepSelection) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series.selectDrawing(id, keepSelection);
        }
      });
    });
  }
  /**
   * Unselects drawing by ID.
   *
   * @param  id  Drawing ID
   * @since 5.9.0
   */
  unselectDrawing(id) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series.unselectDrawing(id);
        }
      });
    });
  }
  /**
   * Deletes drawing by drawingId.
   *
   * @param  id  Drawing ID
   * @since 5.9.0
   */
  deleteDrawing(id) {
    this.panels.each((panel) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          series.deleteDrawing(id);
        }
      });
    });
  }
};
Object.defineProperty(StockChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockChart"
});
Object.defineProperty(StockChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([StockChart.className])
});
function registerClass(name, ref) {
  ref.className = name;
  registerCustomClass(name, ref);
}

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Indicator.js
var Indicator = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dataDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_sDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_vDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("stockSeries") || this.isDirty("volumeSeries")) {
      this.markDataDirty();
      const stockSeries = this.get("stockSeries");
      const previousS = this._prevSettings.stockSeries;
      if (previousS && this._sDP) {
        this._sDP.dispose();
      }
      if (stockSeries) {
        this._sDP = new MultiDisposer([
          stockSeries.events.on("datavalidated", () => {
            this._markDataDirty();
          }),
          stockSeries.events.on("datasetchanged", () => {
            this._markDataDirty();
          })
        ]);
      }
      const previousV = this._prevSettings.volumeSeries;
      if (previousV && this._vDP) {
        this._vDP.dispose();
      }
      const volumeSeries = this.get("volumeSeries");
      if (volumeSeries) {
        this._vDP = new MultiDisposer([
          volumeSeries.events.on("datavalidated", () => {
            this._markDataDirty();
          }),
          volumeSeries.events.on("datasetchanged", () => {
            this._markDataDirty();
          })
        ]);
      }
    }
    if (this.isDirty("field")) {
      if (this.get("field")) {
        this.markDataDirty();
      }
    }
    if (this.isDirty("period")) {
      this.markDataDirty();
      this.setCustomData("period", this.get("period"));
    }
    if (this._dataDirty) {
      this.prepareData();
      this._dataDirty = false;
    }
  }
  _markDataDirty() {
    this._dataDirty = true;
    this.markDirty();
  }
  markDataDirty() {
    this._root.events.once("frameended", () => {
      this._markDataDirty();
    });
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("seriesColor")) {
      this._updateSeriesColor(this.series, this.get("seriesColor"), "seriesColor");
    }
    this.setCustomData("period", this.get("period"));
    this.setCustomData("field", this.get("field"));
    this.setCustomData("name", this.get("name"));
    this.setCustomData("shortName", this.get("shortName"));
  }
  _dispose() {
    super._dispose();
    if (this._sDP) {
      this._sDP.dispose();
    }
    if (this._vDP) {
      this._vDP.dispose();
    }
    const series = this.series;
    if (series) {
      series.dispose();
      const yAxis = series.get("yAxis");
      if (yAxis) {
        yAxis.markDirtySelectionExtremes();
      }
    }
    const stockChart = this.get("stockChart");
    if (stockChart) {
      const legend = this.get("legend");
      if (legend) {
        const legendDataItem = series.get("legendDataItem");
        if (legendDataItem) {
          legend.disposeDataItem(legendDataItem);
        }
      }
      stockChart.indicators.removeValue(this);
    }
  }
  hide(duration2) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.hide.call(this, duration2),
        this.series.hide(duration2)
      ]);
    });
  }
  show(duration2) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.show.call(this, duration2),
        this.series.show(duration2)
      ]);
    });
  }
  _handleLegend(series) {
    const legend = this.get("legend");
    if (legend) {
      legend.data.push(series);
      const legendDataItem = legend.dataItems[legend.dataItems.length - 1];
      legendDataItem.get("marker").set("forceHidden", true);
      const closeButton = legendDataItem.get("closeButton");
      closeButton.set("forceHidden", false);
      closeButton.events.on("click", () => {
        this.dispose();
      });
      const settingsButton = legendDataItem.get("settingsButton");
      settingsButton.setPrivate("customData", this);
      const editableSettings = this._editableSettings;
      if (!editableSettings || editableSettings.length == 0) {
        settingsButton.set("forceHidden", true);
      }
    }
  }
  _updateSeriesColor(series, color2, contextName) {
    if (series) {
      series.set("stroke", color2);
      series.set("fill", color2);
      if (series instanceof LineSeries) {
        series.strokes.template.set("stroke", color2);
        series.fills.template.set("fill", color2);
      }
      if (series instanceof BaseColumnSeries) {
        series.columns.template.setAll({ stroke: color2, fill: color2 });
      }
      if (contextName && color2) {
        this.setCustomData(contextName, color2.toCSSHex());
      }
    }
  }
  setCustomData(name, value) {
    const customData = this.series.getPrivate("customData");
    if (customData) {
      customData[name] = value;
    }
  }
  /**
   * @ignore
   */
  prepareData() {
  }
  _getValue(dataItem) {
    const field = this.get("field");
    let o = dataItem.get("openValueY");
    let h = dataItem.get("highValueY");
    let l = dataItem.get("lowValueY");
    let c = dataItem.get("valueY");
    switch (field) {
      case "close":
        return c;
        break;
      case "open":
        return o;
        break;
      case "high":
        return h;
        break;
      case "low":
        return l;
        break;
      case "hl/2":
        return (h + l) / 2;
        break;
      case "hlc/3":
        return (h + l + c) / 3;
        break;
      case "hlcc/4":
        return (h + l + c + c) / 4;
        break;
      case "ohlc/4":
        return (o + h + l + c) / 4;
        break;
    }
  }
  /**
   * @ignore
   */
  _getDataArray(dataItems) {
    const data = [];
    each(dataItems, (dataItem) => {
      data.push({ valueX: dataItem.get("valueX"), value_y: this._getValue(dataItem) });
    });
    return data;
  }
  /**
   * @ignore
   */
  _getTypicalPrice(dataItems) {
    const data = [];
    each(dataItems, (dataItem) => {
      data.push({ valueX: dataItem.get("valueX"), value_y: (dataItem.get("valueY", 0) + dataItem.get("highValueY", 0) + dataItem.get("lowValueY", 0)) / 2 });
    });
    return data;
  }
  _sma(data, period, field, toField) {
    let i = 0;
    let index = 0;
    let ma = 0;
    each(data, (dataItem) => {
      let value = dataItem[field];
      if (value != null) {
        i++;
        ma += value / period;
        if (i >= period) {
          if (i > period) {
            let valueToRemove = data[index - period][field];
            if (valueToRemove != null) {
              ma -= valueToRemove / period;
            }
          }
          dataItem[toField] = ma;
        }
      }
      index++;
    });
  }
  _wma(data, period, field, toField) {
    let i = 0;
    let index = 0;
    let ma = 0;
    each(data, (dataItem) => {
      let value = dataItem[field];
      if (value != null) {
        i++;
        if (i >= period) {
          let sum = 0;
          let m = 0;
          let count = 0;
          let k = 0;
          for (let n = index; n >= 0; n--) {
            let pValue = data[n][field];
            if (pValue != null) {
              sum += pValue * (period - m);
              count += period - m;
              k++;
            }
            m++;
            if (k == period) {
              break;
            }
          }
          ma = sum / count;
          dataItem[toField] = ma;
        }
      }
      index++;
    });
  }
  _ema(data, period, field, toField) {
    let i = 0;
    let ma = 0;
    let multiplier = 2 / (1 + period);
    each(data, (dataItem) => {
      let value = dataItem[field];
      if (value != null) {
        i++;
        if (i > period) {
          ma = value * multiplier + ma * (1 - multiplier);
          dataItem[toField] = ma;
        } else {
          ma += value / period;
          if (i == period) {
            dataItem[toField] = ma;
          }
        }
      }
    });
  }
  _dema(data, period, field, toField) {
    let i = 0;
    let ema2 = 0;
    let multiplier = 2 / (1 + period);
    this._ema(data, period, field, "ema");
    each(data, (dataItem) => {
      let ema = dataItem.ema;
      if (ema != null) {
        i++;
        if (i > period) {
          ema2 = ema * multiplier + ema2 * (1 - multiplier);
          dataItem[toField] = 2 * ema - ema2;
          dataItem.ema2 = ema2;
        } else {
          ema2 += ema / period;
          if (i == period) {
            dataItem[toField] = 2 * ema - ema2;
            dataItem.ema2 = ema2;
          }
        }
      }
    });
  }
  _tema(data, period, field, toField) {
    let i = 0;
    let ema3 = 0;
    let multiplier = 2 / (1 + period);
    this._dema(data, period, field, "dema");
    each(data, (dataItem) => {
      let ema = dataItem.ema;
      let ema2 = dataItem.ema2;
      if (ema2 != null) {
        i++;
        if (i > period) {
          ema3 = ema2 * multiplier + ema3 * (1 - multiplier);
          dataItem[toField] = 3 * ema - 3 * ema2 + ema3;
        } else {
          ema3 += ema2 / period;
          if (i == period) {
            dataItem[toField] = 3 * ema - 3 * ema2 + ema3;
          }
        }
      }
    });
  }
};
Object.defineProperty(Indicator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Indicator"
});
Object.defineProperty(Indicator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Indicator.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/StockLegend.js
var StockLegend = class extends Legend {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "closeButtons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Button._new(this._root, {
        themeTags: mergeTags(this.closeButtons.template.get("themeTags", []), ["control", "close"]),
        icon: Graphics.new(this._root, {
          themeTags: ["icon", "button"]
        })
      }, [this.closeButtons.template])))
    });
    Object.defineProperty(this, "settingsButtons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Button._new(this._root, {
        themeTags: mergeTags(this.settingsButtons.template.get("themeTags", []), ["control", "settings"]),
        icon: Graphics.new(this._root, {
          themeTags: ["icon", "button"]
        })
      }, [this.settingsButtons.template])))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["stocklegend"]);
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeCloseButton() {
    const button = this.closeButtons.make();
    this.closeButtons.push(button);
    return button;
  }
  /**
   * @ignore
   */
  makeSettingsButton() {
    const button = this.settingsButtons.make();
    this.settingsButtons.push(button);
    button.events.on("click", () => {
      const dataItem = button.dataItem;
      if (dataItem) {
        const stockChart = this.get("stockChart");
        if (stockChart) {
          const indicator = button.getPrivate("customData");
          if (indicator instanceof Indicator) {
            stockChart.getPrivate("settingsModal").openIndicator(indicator);
          } else {
            stockChart.getPrivate("settingsModal").openSeries(dataItem.dataContext);
          }
        }
      }
      setTimeout(() => {
        button.unhover();
      }, 50);
    });
    return button;
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const itemContainer = dataItem.get("itemContainer");
    const settingsButton = this.makeSettingsButton();
    itemContainer.children.push(settingsButton);
    settingsButton._setDataItem(dataItem);
    dataItem.set("settingsButton", settingsButton);
    const closeButton = this.makeCloseButton();
    itemContainer.children.push(closeButton);
    closeButton._setDataItem(dataItem);
    dataItem.set("closeButton", closeButton);
  }
};
Object.defineProperty(StockLegend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockLegend"
});
Object.defineProperty(StockLegend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Legend.classNames.concat([StockLegend.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/StockPanel.js
var StockPanel = class extends XYChart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "panelControls", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "panelResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "drawings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
  }
  _afterNew() {
    super._afterNew();
    this._disposers.push(this.drawings.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (series) => {
          this.series.removeValue(series);
        });
      } else if (change.type === "push") {
        this.series.push(change.newValue);
      } else if (change.type === "setIndex") {
        this.series.setIndex(change.index, change.newValue);
      } else if (change.type === "insertIndex") {
        this.series.insertIndex(change.index, change.newValue);
      } else if (change.type === "removeIndex") {
        this.series.removeIndex(change.index);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  /**
   * Moves panel up.
   */
  moveUp() {
    const stockChart = this.getPrivate("stockChart");
    const children = stockChart.panelsContainer.children;
    const index = children.indexOf(this);
    if (index > 0) {
      children.moveValue(this, index - 1);
      const type = "moved";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          oldIndex: index,
          newIndex: index - 1,
          target: this
        });
      }
    }
    stockChart._updateControls();
  }
  /**
   * Moves panel down.
   */
  moveDown() {
    const stockChart = this.getPrivate("stockChart");
    const children = stockChart.panelsContainer.children;
    const index = children.indexOf(this);
    if (index < children.length - 1) {
      children.moveValue(this, index + 1);
      const type = "moved";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          oldIndex: index,
          newIndex: index + 1,
          target: this
        });
      }
    }
    stockChart._updateControls();
  }
  /**
   * Closes panel.
   */
  close() {
    const stockChart = this.getPrivate("stockChart");
    const type = "closed";
    if (this.events.isEnabled(type)) {
      this.events.dispatch(type, {
        type,
        target: this
      });
    }
    stockChart.panels.removeValue(this);
    stockChart._updateControls();
  }
  /**
   * Toggles "full screen" mode of the panel on and off.
   */
  expand() {
    const stockChart = this.getPrivate("stockChart");
    const panels = [];
    stockChart.panels.each((panel) => {
      if (!panel.isVisible()) {
        panels.push(panel);
      }
    });
    each(panels, (panel) => {
      panel.setPrivate("visible", true);
    });
    if (panels.length == 0) {
      stockChart.panels.each((panel) => {
        if (panel != this) {
          panel.setPrivate("visible", false);
        }
      });
      const type = "expanded";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this
        });
      }
    } else {
      const type = "collapsed";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this
        });
      }
    }
    stockChart._updateControls();
    if (panels.length == 0) {
      const panelControls = this.panelControls;
      panelControls.upButton.setPrivate("visible", false);
      panelControls.downButton.setPrivate("visible", false);
      panelControls.closeButton.setPrivate("visible", false);
    }
  }
};
Object.defineProperty(StockPanel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockPanel"
});
Object.defineProperty(StockPanel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYChart.classNames.concat([StockPanel.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ChartIndicator.js
var ChartIndicator = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "panel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "xAxis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "yAxis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cursor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "legend", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_themeTags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["indicator"]
    });
  }
  _afterNew() {
    var _a;
    super._afterNew();
    const stockChart = this.get("stockChart");
    const stockSeries = this.get("stockSeries");
    const seriesChart = stockSeries.chart;
    const root = this._root;
    if (stockChart && seriesChart) {
      const chart = stockChart.panels.push(StockPanel.new(root, { themeTags: this._themeTags }));
      chart.addTag("indicator");
      this.panel = chart;
      this.addDisposer(stockChart.panels.events.on("removeIndex", (e) => {
        if (e.oldValue == chart) {
          stockChart.indicators.removeValue(this);
        }
      }));
      const seriesXAxis = stockSeries.get("xAxis");
      const xRenderer = AxisRendererX.new(root, {});
      let xAxis;
      let baseInterval = seriesXAxis.get("baseInterval");
      let start = seriesXAxis.get("start");
      let end = seriesXAxis.get("end");
      if (seriesXAxis instanceof GaplessDateAxis) {
        xAxis = chart.xAxes.push(GaplessDateAxis.new(root, { renderer: xRenderer, baseInterval }));
      } else {
        xAxis = chart.xAxes.push(DateAxis.new(root, { renderer: xRenderer, baseInterval }));
      }
      xRenderer.set("minorGridEnabled", (_a = seriesXAxis.get("renderer")) === null || _a === void 0 ? void 0 : _a.get("minorGridEnabled"));
      xAxis.set("groupData", seriesXAxis.get("groupData"));
      xAxis.set("groupCount", seriesXAxis.get("groupCount"));
      xAxis.set("tooltip", Tooltip.new(root, { themeTags: ["indicator"] }));
      xAxis.setAll({ start, end });
      this.xAxis = xAxis;
      const yRenderer = AxisRendererY.new(root, {
        minGridDistance: 20
      });
      const yTooltip = Tooltip.new(root, { themeTags: ["indicator"] });
      const yAxis = chart.yAxes.push(ValueAxis.new(root, {
        renderer: yRenderer,
        tooltip: yTooltip
      }));
      this.yAxis = yAxis;
      const series = this._createSeries();
      this.series = series;
      const legend = chart.topPlotContainer.children.insertIndex(0, StockLegend.new(root, { stockChart: this.get("stockChart") }));
      legend.data.push(series);
      const legendDataItem = legend.dataItems[legend.dataItems.length - 1];
      legendDataItem.set("panel", chart);
      legendDataItem.get("marker").set("forceHidden", true);
      const settingsButton = legendDataItem.get("settingsButton");
      settingsButton.setPrivate("customData", this);
      const editableSettings = this._editableSettings;
      if (!editableSettings || editableSettings.length == 0) {
        settingsButton.set("forceHidden", true);
      }
      chart.set("cursor", XYCursor.new(root, { yAxis, xAxis }));
    }
  }
  _dispose() {
    super._dispose();
    const stockChart = this.get("stockChart");
    stockChart.panels.removeValue(this.panel);
  }
  hide(duration2) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.hide.call(this, duration2),
        this.panel.hide(duration2)
      ]);
    });
  }
  show(duration2) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.show.call(this, duration2),
        this.panel.show(duration2)
      ]);
    });
  }
};
Object.defineProperty(ChartIndicator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChartIndicator"
});
Object.defineProperty(ChartIndicator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([ChartIndicator.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/OverboughtOversold.js
var OverboughtOversold = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "overBought", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "middle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSold", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overSoldRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "overBoughtRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "overBought",
        name: this.root.language.translateAny("Overbought"),
        type: "number"
      }, {
        key: "overBoughtColor",
        name: this.root.language.translateAny("Overbought"),
        type: "color"
      }, {
        key: "overSold",
        name: this.root.language.translateAny("Oversold"),
        type: "number"
      }, {
        key: "overSoldColor",
        name: this.root.language.translateAny("Oversold"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("overboughtoversold");
    super._afterNew();
    const chart = this.panel;
    const yAxis = this.yAxis;
    yAxis.setAll({ strictMinMax: true, autoZoom: false });
    this.middle = this.yAxis.createAxisRange(this.yAxis.makeDataItem({}));
    const middleGrid = this.middle.get("grid");
    middleGrid.setAll({ themeTags: ["middlegrid"] });
    middleGrid._applyThemes();
    const middleLabel = this.middle.get("label");
    middleLabel.setAll({ visible: true, forceHidden: false });
    const opposite = yAxis.get("renderer").get("opposite");
    let side = "left";
    if (opposite) {
      side = "right";
    }
    const overBought = yAxis.makeDataItem({});
    this.overBought = overBought;
    overBought.set("endValue", 500);
    const overBoughtRB = Button.new(this._root, {
      themeTags: ["rangegrip", "vertical", side],
      icon: Graphics.new(this._root, {
        themeTags: ["rangegrip", "icon"]
      })
    });
    overBoughtRB.adapters.add("x", function() {
      return 0;
    });
    overBoughtRB.adapters.add("y", function(y) {
      if (isNumber(y)) {
        return fitToRange(y, 0, chart.plotContainer.height());
      }
      return y;
    });
    overBoughtRB.events.on("dragged", () => {
      this._updateRange(overBoughtRB, "overBought");
    });
    overBought.set("bullet", AxisBullet.new(this._root, {
      location: 0,
      sprite: overBoughtRB
    }));
    const overBoughtRange = this.series.createAxisRange(overBought);
    this.overBoughtRange = overBoughtRange;
    const overBoughtFills = overBoughtRange.fills;
    if (overBoughtFills) {
      overBoughtFills.template.set("themeTags", ["overbought", "fill"]);
    }
    const overBoughtGrid = overBought.get("grid");
    overBoughtGrid.setAll({ themeTags: ["overbought"], visible: true });
    overBoughtGrid._applyThemes();
    const overBoughtLabel = overBought.get("label");
    overBoughtLabel.setAll({ visible: true, forceHidden: false, location: 0 });
    const overSold = yAxis.makeDataItem({});
    this.overSold = overSold;
    overSold.set("endValue", -500);
    const overSoldRB = Button.new(this._root, {
      themeTags: ["rangegrip", "vertical", side],
      icon: Graphics.new(this._root, {
        themeTags: ["rangegrip", "icon"]
      })
    });
    overSoldRB.adapters.add("x", function() {
      return 0;
    });
    overSoldRB.adapters.add("y", function(y) {
      if (isNumber(y)) {
        return fitToRange(y, 0, chart.plotContainer.height());
      }
      return y;
    });
    overSoldRB.events.on("dragged", () => {
      this._updateRange(overSoldRB, "overSold");
    });
    overSold.set("bullet", AxisBullet.new(this._root, {
      location: 0,
      sprite: overSoldRB
    }));
    const overSoldRange = this.series.createAxisRange(overSold);
    this.overSoldRange = overSoldRange;
    const overSoldFills = overSoldRange.fills;
    if (overSoldFills) {
      overSoldFills.template.set("themeTags", ["oversold", "fill"]);
    }
    const overSoldGrid = overSold.get("grid");
    overSoldGrid.setAll({ themeTags: ["oversold"], visible: true });
    overSoldGrid._applyThemes();
    const overSoldLabel = overSold.get("label");
    overSoldLabel.setAll({ visible: true, forceHidden: false, location: 0 });
  }
  _updateRange(button, key) {
    const chart = this.yAxis.chart;
    if (chart) {
      const position = this.yAxis.toAxisPosition(button.y() / chart.plotContainer.height());
      this.set(key, Math.round(this.yAxis.positionToValue(position)));
    }
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "valueS",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _prepareChildren() {
    super._prepareChildren();
    const overBoughtLabel = this.overBought.get("label");
    const overSoldLabel = this.overSold.get("label");
    const middleLabel = this.middle.get("label");
    if (this.isDirty("overBought") || this.isDirty("overSold")) {
      const numberFormatter = this.getNumberFormatter();
      const overSoldValue = this.get("overSold", 0);
      const overBoughtValue = this.get("overBought", 0);
      const middleValue = overSoldValue + (overBoughtValue - overSoldValue) / 2;
      overBoughtLabel.set("text", numberFormatter.format(overBoughtValue));
      overSoldLabel.set("text", numberFormatter.format(overSoldValue));
      middleLabel.set("text", numberFormatter.format(middleValue));
      this.overBought.set("value", overBoughtValue);
      this.overSold.set("value", overSoldValue);
      this.middle.set("value", middleValue);
      this.yAxis.set("baseValue", middleValue);
    }
    if (this.isDirty("overSoldColor")) {
      const color2 = this.get("overSoldColor");
      overSoldLabel.set("fill", color2);
      this.overSold.get("grid").set("stroke", color2);
      this.overSoldRange.fills.template.set("fill", color2);
      this.overSoldRange.strokes.template.set("stroke", color2);
    }
    if (this.isDirty("overBoughtColor")) {
      const color2 = this.get("overBoughtColor");
      overBoughtLabel.set("fill", color2);
      this.overBought.get("grid").set("stroke", color2);
      this.overBoughtRange.fills.template.set("fill", color2);
      this.overBoughtRange.strokes.template.set("stroke", color2);
    }
  }
};
Object.defineProperty(OverboughtOversold, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OverboughtOversold"
});
Object.defineProperty(OverboughtOversold, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([OverboughtOversold.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MovingAverage.js
var MovingAverage = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "offset",
        name: this.root.language.translateAny("Offset"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }]
    });
  }
  _prepareChildren() {
    if (this.isDirty("type") || this.isDirty("offset")) {
      this.markDataDirty();
      this.setCustomData("type", this.get("type"));
      this.setCustomData("offset", this.get("offset", 0));
    }
    super._prepareChildren();
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "ma",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "movingaverage"],
        name: "MA"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      this._handleLegend(series);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      let period = this.get("period", 50);
      const type = this.get("type");
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      switch (type) {
        case "simple":
          this._sma(data, period, "value_y", "ma");
          break;
        case "weighted":
          this._wma(data, period, "value_y", "ma");
          break;
        case "exponential":
          this._ema(data, period, "value_y", "ma");
          break;
        case "dema":
          this._dema(data, period, "value_y", "ma");
          break;
        case "tema":
          this._tema(data, period, "value_y", "ma");
          break;
      }
      const offset = this.get("offset", 0);
      if (offset != 0) {
        let i = 0;
        const baseDuration = this.series.get("xAxis").baseDuration();
        const len = dataItems.length;
        const firstTime = dataItems[0].get("valueX", 0);
        const lastTime = dataItems[len - 1].get("valueX", 0);
        each(data, (dataItem) => {
          let newX = 0;
          if (i + offset >= len) {
            newX = lastTime + (offset - len + i + 1) * baseDuration;
          } else if (i + offset < 0) {
            newX = firstTime + (i + offset) * baseDuration;
          } else {
            newX = dataItems[i + offset].get("valueX", 0);
          }
          dataItem.valueX = newX;
          i++;
        });
      }
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(MovingAverage, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MovingAverage"
});
Object.defineProperty(MovingAverage, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([MovingAverage.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Momentum.js
var Momentum = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        {
          key: "period",
          name: this.root.language.translateAny("Period"),
          type: "number"
        },
        {
          key: "field",
          name: this.root.language.translateAny("Field"),
          type: "dropdown",
          options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
        },
        {
          key: "seriesColor",
          name: this.root.language.translateAny("Color"),
          type: "color"
        }
      ]
    });
  }
  _afterNew() {
    this._themeTags.push("momentum");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "valueY",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const period = this.get("period", 14);
      const data = [];
      let i = 0;
      each(dataItems, (dataItem) => {
        if (i > period) {
          let value = this._getValue(dataItem);
          let prevValue = this._getValue(dataItems[i - period]);
          if (value != void 0 && prevValue != void 0) {
            data.push({ valueX: dataItem.get("valueX"), valueY: value - prevValue });
          }
        } else {
          data.push({ valueX: dataItem.get("valueX") });
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(Momentum, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Momentum"
});
Object.defineProperty(Momentum, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([Momentum.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/VWAP.js
var VWAP = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }]
    });
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "vwap",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "vwap"],
        name: "VWAP"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      this._handleLegend(series);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      let period = this.get("period", Infinity);
      const stockSeries = this.get("stockSeries");
      const volumeSeries = this.get("volumeSeries");
      const dataItems = stockSeries.dataItems;
      if (volumeSeries) {
        let data = this._getDataArray(dataItems);
        let i = 0;
        let totalVolume = 0;
        let totalVW = 0;
        each(data, (dataItem) => {
          const volumeDI = volumeSeries.dataItems[i];
          if (volumeDI) {
            const volume = volumeDI.get("valueY", 0);
            if (volume > 0) {
              const vw = dataItem.value_y * volume;
              dataItem.vw = vw;
              dataItem.volume = volume;
              totalVW += vw;
              totalVolume += volume;
              if (i >= period) {
                let volumeToRemove = data[i - period].volume;
                let vwToRemove = data[i - period].vw;
                if (volumeToRemove != null) {
                  totalVolume -= volumeToRemove;
                }
                if (vwToRemove != null) {
                  totalVW -= vwToRemove;
                }
              }
              dataItem.totalVW = totalVW;
              dataItem.vwap = totalVW / totalVolume;
            }
          }
          i++;
        });
        this.series.data.setAll(data);
      }
    }
  }
};
Object.defineProperty(VWAP, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VWAP"
});
Object.defineProperty(VWAP, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([VWAP.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MovingAverageEnvelope.js
var MovingAverageEnvelope = class extends MovingAverage {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "upperBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "lowerBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "shiftType",
        name: this.root.language.translateAny("Shift type"),
        type: "dropdown",
        options: ["percent", "points"]
      }, {
        key: "shift",
        name: this.root.language.translateAny("Shift"),
        type: "number"
      }, {
        key: "offset",
        name: this.root.language.translateAny("Offset"),
        type: "number"
      }, {
        key: "upperColor",
        name: this.root.language.translateAny("Top"),
        type: "color"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Median"),
        type: "color"
      }, {
        key: "lowerColor",
        name: this.root.language.translateAny("Bottom"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const upperBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "upper",
        openValueYField: "lower",
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        calculateAggregates: true,
        themeTags: ["indicator", "movingaverageenvelope", "upper"]
      }));
      upperBandSeries.fills.template.set("visible", true);
      upperBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.upperBandSeries = upperBandSeries;
      const lowerBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "lower",
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        calculateAggregates: true,
        themeTags: ["indicator", "movingaverageenvelope", "lower"]
      }));
      lowerBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.lowerBandSeries = lowerBandSeries;
    }
    super._afterNew();
    this.series.addTag("movingaverageenvelope");
    this.series._applyThemes();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("upperColor")) {
      const color2 = this.get("upperColor");
      const upperBandSeries = this.upperBandSeries;
      upperBandSeries.set("stroke", color2);
      upperBandSeries.set("fill", color2);
      upperBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(upperBandSeries, color2, "upperColor");
    }
    if (this.isDirty("lowerColor")) {
      const color2 = this.get("lowerColor");
      const lowerBandSeries = this.lowerBandSeries;
      lowerBandSeries.set("stroke", color2);
      lowerBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(lowerBandSeries, color2, "lowerColor");
    }
  }
  _prepareChildren() {
    if (this.isDirty("shiftType") || this.isDirty("shift")) {
      this.markDataDirty();
      this.setCustomData("shift", this.get("shift"));
      this.setCustomData("shiftType", this.get("shiftType"));
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let smaData = this.series.data.values;
      let shift = Number(this.get("shift", 5));
      let shiftType = this.get("shiftType");
      each(smaData, (dataItem) => {
        let value = dataItem.ma;
        if (value != null) {
          let upper = value;
          let lower = value;
          if (shiftType == "points") {
            upper += shift;
            lower -= shift;
          } else {
            upper += upper * shift / 100;
            lower -= lower * shift / 100;
          }
          dataItem.upper = upper;
          dataItem.lower = lower;
        }
      });
      this.upperBandSeries.data.setAll(smaData);
      this.lowerBandSeries.data.setAll(smaData);
    }
  }
  _dispose() {
    this.upperBandSeries.dispose();
    this.lowerBandSeries.dispose();
    super._dispose();
  }
  hide(duration2) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.hide.call(this, duration2),
        this.upperBandSeries.hide(duration2),
        this.lowerBandSeries.hide(duration2)
      ]);
    });
  }
  show(duration2) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.show.call(this, duration2),
        this.upperBandSeries.show(duration2),
        this.lowerBandSeries.show(duration2)
      ]);
    });
  }
};
Object.defineProperty(MovingAverageEnvelope, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MovingAverageEnvelope"
});
Object.defineProperty(MovingAverageEnvelope, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MovingAverage.classNames.concat([MovingAverageEnvelope.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MovingAverageDeviation.js
var MovingAverageDeviation = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        {
          key: "period",
          name: this.root.language.translateAny("Period"),
          type: "number"
        },
        {
          key: "field",
          name: this.root.language.translateAny("Field"),
          type: "dropdown",
          options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
        },
        {
          key: "type",
          name: this.root.language.translateAny("Type"),
          type: "dropdown",
          options: ["simple", "weighted", "exponential", "dema", "tema"]
        },
        {
          key: "unit",
          name: this.root.language.translateAny("Points/Percent"),
          type: "dropdown",
          options: ["points", "percent"]
        },
        {
          key: "increasingColor",
          name: this.root.language.translateAny("Increasing"),
          type: "color"
        },
        {
          key: "decreasingColor",
          name: this.root.language.translateAny("Decreasing"),
          type: "color"
        }
      ]
    });
  }
  _afterNew() {
    this._themeTags.push("movingaveragedeviation");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(ColumnSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "deviation",
      fill: void 0
    }));
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      const template = this.series.columns.template;
      const increasing = this.get("increasingColor");
      const decreasing = this.get("decreasingColor");
      template.states.create("riseFromPrevious", { fill: increasing, stroke: increasing });
      template.states.create("dropFromPrevious", { fill: decreasing, stroke: decreasing });
    }
  }
  _prepareChildren() {
    if (this.isDirty("type") || this.isDirty("unit")) {
      this.markDataDirty();
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let decreasingColor = this.get("decreasingColor", Color.fromHex(16711680)).toCSSHex();
      let increasingColor = this.get("increasingColor", Color.fromHex(65280)).toCSSHex();
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 50);
      const type = this.get("type");
      const unit = this.get("unit");
      switch (type) {
        case "simple":
          this._sma(data, period, "value_y", "ma");
          break;
        case "weighted":
          this._wma(data, period, "value_y", "ma");
          break;
        case "exponential":
          this._ema(data, period, "value_y", "ma");
          break;
        case "dema":
          this._dema(data, period, "value_y", "ma");
          break;
        case "tema":
          this._tema(data, period, "value_y", "ma");
          break;
      }
      let previous = -Infinity;
      let i = 0;
      each(data, (dataItem) => {
        i++;
        if (i >= period) {
          let deviation = dataItem.value_y - dataItem.ma;
          if (unit == "percent") {
            deviation = (dataItem.value_y / dataItem.ma - 1) * 100;
          }
          let color2 = increasingColor;
          if (deviation < previous) {
            color2 = decreasingColor;
          }
          dataItem.deviation = deviation;
          dataItem.deviationColor = color2;
          previous = deviation;
        }
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(MovingAverageDeviation, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MovingAverageDeviation"
});
Object.defineProperty(MovingAverageDeviation, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([MovingAverageDeviation.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AccelerationBands.js
var AccelerationBands = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "upperBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "lowerBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "factor",
        name: this.root.language.translateAny("Factor"),
        type: "number"
      }, {
        key: "upperColor",
        name: this.root.language.translateAny("Upper"),
        type: "color"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Average"),
        type: "color"
      }, {
        key: "lowerColor",
        name: this.root.language.translateAny("Lower"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "average",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "accelerationbands", "average"]
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      const upperBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "upper",
        openValueYField: "lower",
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        themeTags: ["indicator", "accelerationbands", "upper"]
      }));
      upperBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.upperBandSeries = upperBandSeries;
      const lowerBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "lower",
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        themeTags: ["indicator", "accelerationbands", "lower"]
      }));
      lowerBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.lowerBandSeries = lowerBandSeries;
    }
    this._handleLegend(this.series);
    super._afterNew();
    this.series.addTag("accelerationbands");
    this.series._applyThemes();
  }
  _prepareChildren() {
    if (this.isDirty("factor")) {
      this.markDataDirty();
      this.setCustomData("factor", this.get("factor"));
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    const upperColor = "upperColor";
    if (this.isDirty(upperColor)) {
      const color2 = this.get(upperColor);
      const upperBandSeries = this.upperBandSeries;
      upperBandSeries.set("stroke", color2);
      upperBandSeries.set("fill", color2);
      upperBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(upperBandSeries, color2, upperColor);
    }
    const lowerColor = "lowerColor";
    if (this.isDirty(lowerColor)) {
      const color2 = this.get(lowerColor);
      const lowerBandSeries = this.lowerBandSeries;
      lowerBandSeries.set("stroke", color2);
      lowerBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(lowerBandSeries, color2, lowerColor);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let factor = this.get("factor", 1e-3);
      let i = 0;
      each(data, (dataItem) => {
        let stockDataItem = dataItems[i];
        if (stockDataItem) {
          let low = stockDataItem.get("lowValueY");
          let high = stockDataItem.get("highValueY");
          if (isNumber(low) && isNumber(high) && high + low != 0) {
            dataItem._lower = high * (1 + 2 * ((high - low) / ((high + low) / 2) * 1e3 * factor));
            dataItem._upper = low * (1 - 2 * ((high - low) / ((high + low) / 2) * 1e3 * factor));
            dataItem._average = dataItem._lower + (dataItem._upper - dataItem._lower) / 2;
          }
        }
        i++;
      });
      this._sma(data, period, "_lower", "lower");
      this._sma(data, period, "_upper", "upper");
      this._sma(data, period, "_average", "average");
      this.upperBandSeries.data.setAll(data);
      this.lowerBandSeries.data.setAll(data);
      this.series.data.setAll(data);
    }
  }
  _dispose() {
    this.upperBandSeries.dispose();
    this.lowerBandSeries.dispose();
    super._dispose();
  }
  hide(duration2) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.hide.call(this, duration2),
        this.upperBandSeries.hide(duration2),
        this.lowerBandSeries.hide(duration2)
      ]);
    });
  }
  show(duration2) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.show.call(this, duration2),
        this.upperBandSeries.show(duration2),
        this.lowerBandSeries.show(duration2)
      ]);
    });
  }
};
Object.defineProperty(AccelerationBands, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AccelerationBands"
});
Object.defineProperty(AccelerationBands, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([AccelerationBands.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/BollingerBands.js
var BollingerBands = class extends MovingAverage {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "upperBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "lowerBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "standardDeviations",
        name: this.root.language.translateAny("Deviation"),
        type: "number"
      }, {
        key: "upperColor",
        name: this.root.language.translateAny("Upper"),
        type: "color"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Average"),
        type: "color"
      }, {
        key: "lowerColor",
        name: this.root.language.translateAny("Lower"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "type",
        name: this.root.language.translateAny("Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }]
    });
  }
  _afterNew() {
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const upperBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "upper",
        openValueYField: "lower",
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        themeTags: ["indicator", "bollingerbands", "upper"]
      }));
      upperBandSeries.fills.template.set("visible", true);
      upperBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.upperBandSeries = upperBandSeries;
      const lowerBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "lower",
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        themeTags: ["indicator", "bollingerbands", "lower"]
      }));
      lowerBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.lowerBandSeries = lowerBandSeries;
    }
    super._afterNew();
    this.series.addTag("bollingerbands");
    this.series._applyThemes();
  }
  _prepareChildren() {
    if (this.isDirty("standardDeviations")) {
      this.markDataDirty();
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    const upperColor = "upperColor";
    if (this.isDirty(upperColor)) {
      const color2 = this.get(upperColor);
      const upperBandSeries = this.upperBandSeries;
      upperBandSeries.set("stroke", color2);
      upperBandSeries.set("fill", color2);
      upperBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(upperBandSeries, color2, upperColor);
    }
    const lowerColor = "lowerColor";
    if (this.isDirty(lowerColor)) {
      const color2 = this.get(lowerColor);
      const lowerBandSeries = this.lowerBandSeries;
      lowerBandSeries.set("stroke", color2);
      lowerBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(lowerBandSeries, color2, lowerColor);
    }
    this.setCustomData("standardDeviations", this.get("standardDeviations"));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let standardDeviations = this.get("standardDeviations", 2);
      let smaData = this.series.data.values;
      let i = 0;
      each(smaData, (dataItem) => {
        if (i >= period - 1) {
          let mean = dataItem.ma;
          let stdSum = 0;
          for (let j = i - period + 1; j <= i; j++) {
            let di = dataItems[j];
            let diValue = this._getValue(di);
            if (diValue != null) {
              stdSum += Math.pow(diValue - mean, 2);
            }
          }
          let std = Math.sqrt(stdSum / period);
          const lower = mean - standardDeviations * std;
          const upper = mean + standardDeviations * std;
          dataItem.upper = upper;
          dataItem.lower = lower;
        }
        i++;
      });
      this.upperBandSeries.data.setAll(smaData);
      this.lowerBandSeries.data.setAll(smaData);
    }
  }
  _dispose() {
    this.upperBandSeries.dispose();
    this.lowerBandSeries.dispose();
    super._dispose();
  }
  hide(duration2) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.hide.call(this, duration2),
        this.upperBandSeries.hide(duration2),
        this.lowerBandSeries.hide(duration2)
      ]);
    });
  }
  show(duration2) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.show.call(this, duration2),
        this.upperBandSeries.show(duration2),
        this.lowerBandSeries.show(duration2)
      ]);
    });
  }
};
Object.defineProperty(BollingerBands, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BollingerBands"
});
Object.defineProperty(BollingerBands, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MovingAverage.classNames.concat([BollingerBands.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/RelativeStrengthIndex.js
var RelativeStrengthIndex = class extends OverboughtOversold {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "smaSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._themeTags.push("rsi");
    super._afterNew();
    this._editableSettings.unshift({
      key: "period",
      name: this.root.language.translateAny("Period"),
      type: "number"
    }, {
      key: "seriesColor",
      name: this.root.language.translateAny("Period"),
      type: "color"
    }, {
      key: "field",
      name: this.root.language.translateAny("Field"),
      type: "dropdown",
      options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
    }, {
      key: "smaPeriod",
      name: this.root.language.translateAny("SMA period"),
      type: "number"
    }, {
      key: "smaColor",
      name: this.root.language.translateAny("SMA period"),
      type: "color"
    });
    const smaSeries = this.panel.series.push(LineSeries.new(this._root, {
      valueXField: "valueX",
      valueYField: "sma",
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      groupDataDisabled: true,
      themeTags: ["indicator", "sma"]
    }));
    this.smaSeries = smaSeries;
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("smaColor")) {
      this._updateSeriesColor(this.smaSeries, this.get("smaColor"), "smaColor");
    }
    if (this.isDirty("smaPeriod")) {
      this.markDataDirty();
      this.setCustomData("smaPeriod", this.get("smaPeriod"));
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let period = this.get("period", 14);
      const data = [];
      let i = 0;
      let averageGain = 0;
      let averageLoss = 0;
      let prevAverageGain = 0;
      let prevAverageLoss = 0;
      each(dataItems, (dataItem) => {
        let rsi = null;
        i++;
        if (i == period + 1) {
          for (let j = 1; j <= period; j++) {
            let value = this._getValue(dataItems[j]);
            let prevValue = this._getValue(dataItems[j - 1]);
            if (value != void 0 && prevValue != void 0) {
              let change = value - prevValue;
              if (change >= 0) {
                averageGain += change / period;
              } else {
                averageLoss += Math.abs(change) / period;
              }
            }
          }
          rsi = 100 - 100 / (1 + averageGain / averageLoss);
          if (isNaN2(rsi)) {
            rsi = 0;
          }
        } else if (i > period) {
          let value = this._getValue(dataItem);
          let prevValue = this._getValue(dataItems[i - 2]);
          if (value != null && prevValue != null) {
            let change = value - prevValue;
            let gain = 0;
            let loss = 0;
            if (change > 0) {
              gain = change;
            } else {
              loss = -change;
            }
            averageGain = (prevAverageGain * (period - 1) + gain) / period;
            averageLoss = (prevAverageLoss * (period - 1) + loss) / period;
            rsi = 100 - 100 / (1 + averageGain / averageLoss);
            if (isNaN(rsi)) {
              rsi = 0;
            }
          }
        }
        data.push({ valueX: dataItem.get("valueX"), valueS: rsi });
        prevAverageGain = averageGain;
        prevAverageLoss = averageLoss;
      });
      this.series.data.setAll(data);
      period = this.get("smaPeriod", 3);
      this._sma(data, period, "valueS", "sma");
      this.series.data.setAll(data);
      this.smaSeries.data.setAll(data);
    }
  }
};
Object.defineProperty(RelativeStrengthIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RelativeStrengthIndex"
});
Object.defineProperty(RelativeStrengthIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: OverboughtOversold.classNames.concat([RelativeStrengthIndex.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AccumulationDistribution.js
var AccumulationDistribution = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "useVolume",
        name: this.root.language.translateAny("Use Volume"),
        type: "checkbox"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("accumulationdistribution");
    super._afterNew();
    this.yAxis.set("numberFormat", "#.###a");
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "ad",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _prepareChildren() {
    const useVolume = "useVolume";
    if (this.isDirty(useVolume)) {
      this.markDataDirty();
      this.setCustomData(useVolume, this.get(useVolume) ? "Y" : "N");
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      this.setRaw("field", "close");
      let i = 0;
      let data = this._getDataArray(dataItems);
      let prevAD = 0;
      let useVolume = this.get("useVolume");
      each(dataItems, (dataItem) => {
        let close = dataItem.get("valueY");
        if (close != null) {
          let low = dataItem.get("lowValueY", close);
          let high = dataItem.get("highValueY", close);
          let volume = 1;
          if (volumeSeries && useVolume) {
            const volumeDI = volumeSeries.dataItems[i];
            if (volumeDI) {
              volume = volumeDI.get("valueY", 1);
            }
          }
          let mf = (close - low - (high - close)) / (high - low);
          if (high == low) {
            mf = 0;
          }
          let ad = prevAD + mf * volume;
          data[i].ad = ad;
          prevAD = ad;
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(AccumulationDistribution, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AccumulationDistribution"
});
Object.defineProperty(AccumulationDistribution, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([AccumulationDistribution.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AccumulativeSwingIndex.js
var AccumulativeSwingIndex = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "positiveColor",
        name: this.root.language.translateAny("Positive color"),
        type: "color"
      }, {
        key: "negativeColor",
        name: this.root.language.translateAny("Negative color"),
        type: "color"
      }, {
        key: "limitMoveValue",
        name: this.root.language.translateAny("Limit move value"),
        type: "number"
      }]
    });
    Object.defineProperty(this, "_axisRange", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_axisRangeDI", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._themeTags.push("accumulativeswingindex");
    super._afterNew();
  }
  _createSeries() {
    const series = this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "asi"
    }));
    const dataItem = this.yAxis.makeDataItem({});
    this._axisRangeDI = dataItem;
    dataItem.set("value", 0);
    dataItem.set("endValue", -100);
    this._axisRange = series.createAxisRange(dataItem);
    this.yAxis.onPrivate("min", (min) => {
      dataItem.set("endValue", min);
    });
    return series;
  }
  _prepareChildren() {
    const limitMoveValue = "limitMoveValue";
    if (this.isDirty(limitMoveValue)) {
      this.setCustomData(limitMoveValue, this.get(limitMoveValue));
      this.markDataDirty();
    }
    const series = this.series;
    if (this.isDirty("positiveColor")) {
      let color2 = this.get("positiveColor");
      series.setAll({ fill: color2, stroke: color2 });
    }
    if (this.isDirty("negativeColor")) {
      let color2 = this.get("negativeColor");
      let axisRange = this._axisRange;
      if (axisRange) {
        const fills = axisRange.fills;
        if (fills) {
          fills.template.set("fill", color2);
        }
        const strokes = axisRange.strokes;
        if (strokes) {
          strokes.template.set("stroke", color2);
        }
      }
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      this.setRaw("field", "close");
      let data = this._getDataArray(dataItems);
      let t = this.get("limitMoveValue", 0.5);
      let asi = 0;
      let negativeColor = this.get("negativeColor", Color.fromHex(16711680)).toCSSHex();
      let positiveColor = this.get("positiveColor", Color.fromHex(65280)).toCSSHex();
      if (dataItems.length > 2) {
        data[0].asi = 0;
        data[0].swingColor = positiveColor;
        for (let i = 1, len = dataItems.length; i < len; i++) {
          const dataItem = dataItems[i];
          const yDataItem = dataItems[i - 1];
          let c = dataItem.get("valueY");
          if (isNumber(c)) {
            let cy = yDataItem.get("valueY", c);
            let h = dataItem.get("highValueY", c);
            let l = dataItem.get("lowValueY", c);
            let o = dataItem.get("openValueY", c);
            let oy = yDataItem.get("openValueY", c);
            let hl = h - l;
            let hc = Math.abs(h - cy);
            let lc = Math.abs(l - cy);
            let tr = Math.max(hc, lc, hl);
            let er = 0;
            if (cy > h) {
              er = hc;
            }
            if (cy < l) {
              er = lc;
            }
            let k = Math.max(hc, lc);
            let sh = Math.abs(cy - oy);
            let r = tr - er / 2 + sh / 4;
            let dasi = 50 * (c - cy + (c - o) / 2 + (cy - oy) / 4) / r * k / t;
            if (isNumber(dasi)) {
              asi += dasi;
            }
            let color2 = positiveColor;
            if (asi < 0) {
              color2 = negativeColor;
            }
            data[i].asi = asi;
            data[i].swingColor = color2;
          }
        }
      }
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(AccumulativeSwingIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AccumulativeSwingIndex"
});
Object.defineProperty(AccumulativeSwingIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([AccumulativeSwingIndex.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Aroon.js
var Aroon = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "upColor",
        name: this.root.language.translateAny("Aroon up"),
        type: "color"
      }, {
        key: "downColor",
        name: this.root.language.translateAny("Aroon down"),
        type: "color"
      }]
    });
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "up",
      fill: void 0
    }));
  }
  _afterNew() {
    this._themeTags.push("aroon");
    super._afterNew();
    this.downSeries = this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "down",
      fill: void 0
    }));
    this.yAxis.setAll({ min: -1, max: 101, strictMinMax: true, numberFormat: "#'%'" });
  }
  _updateChildren() {
    super._updateChildren();
    const upColor = "upColor";
    if (this.isDirty(upColor)) {
      let color2 = this.get(upColor, Color.fromHex(65280));
      this._updateSeriesColor(this.series, color2);
      this.setCustomData(upColor, color2);
    }
    const downColor = "downColor";
    if (this.isDirty(downColor)) {
      let color2 = this.get(downColor, Color.fromHex(16711680));
      this._updateSeriesColor(this.downSeries, color2);
      this.setCustomData(downColor, color2);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 14);
      let i = 0;
      each(data, (dataItem) => {
        let b = Math.max(0, i - period);
        let h = -Infinity;
        let l = Infinity;
        let li = 0;
        let hi = 0;
        for (let j = b; j <= i; j++) {
          let vh = dataItems[j].get("highValueY", 0);
          if (vh >= h) {
            h = vh;
            hi = j;
          }
          let vl = dataItems[j].get("lowValueY", 0);
          if (vl <= l) {
            l = vl;
            li = j;
          }
        }
        dataItem.up = (period - (i - hi)) / period * 100;
        dataItem.down = (period - (i - li)) / period * 100;
        i++;
      });
      this.series.data.setAll(data);
      this.downSeries.data.setAll(data);
    }
  }
};
Object.defineProperty(Aroon, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Aroon"
});
Object.defineProperty(Aroon, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([Aroon.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MACD.js
var MACD = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "signalSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "differenceSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "fastPeriod",
        name: this.root.language.translateAny("Fast MA period"),
        type: "number"
      }, {
        key: "slowPeriod",
        name: this.root.language.translateAny("Slow MA period"),
        type: "number"
      }, {
        key: "signalPeriod",
        name: this.root.language.translateAny("Signal period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("MACD"),
        type: "color"
      }, {
        key: "signalColor",
        name: this.root.language.translateAny("Signal"),
        type: "color"
      }, {
        key: "increasingColor",
        name: this.root.language.translateAny("Increasing"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Decreasing"),
        type: "color"
      }]
    });
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "macd",
      groupDataDisabled: true,
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _afterNew() {
    this._themeTags.push("macd");
    super._afterNew();
    const chart = this.panel;
    if (chart) {
      const signalSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "signal",
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        groupDataDisabled: true,
        themeTags: ["indicator", "signal"]
      }));
      this.signalSeries = signalSeries;
      const differenceSeries = chart.series.push(ColumnSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "difference",
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        groupDataDisabled: true,
        themeTags: ["indicator", "difference"]
      }));
      this.differenceSeries = differenceSeries;
    }
  }
  _prepareChildren() {
    if (this.isDirty("fastPeriod") || this.isDirty("slowPeriod") || this.isDirty("signalPeriod")) {
      this.markDataDirty();
      this.setCustomData("fastPeriod", this.get("fastPeriod"));
      this.setCustomData("slowPeriod", this.get("slowPeriod"));
      this.setCustomData("signalPeriod", this.get("signalPeriod"));
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      const template = this.differenceSeries.columns.template;
      const increasing = this.get("increasingColor");
      const decreasing = this.get("decreasingColor");
      template.states.create("riseFromPrevious", { fill: increasing, stroke: increasing });
      template.states.create("dropFromPrevious", { fill: decreasing, stroke: decreasing });
      this._dataDirty = true;
    }
    if (this.isDirty("signalColor")) {
      this._updateSeriesColor(this.signalSeries, this.get("signalColor"), "signalColor");
    }
    const dataItem = this.series.dataItem;
    if (dataItem) {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        dataContext.fastPeriod = this.get("fastPeriod");
        dataContext.slowPeriod = this.get("slowPeriod");
        dataContext.signalPeriod = this.get("signalPeriod");
        const seriesColor = this.get("seriesColor");
        if (seriesColor) {
          dataContext.seriesColor = seriesColor.toCSSHex();
        }
        const signalColor = this.get("signalColor");
        if (signalColor) {
          dataContext.signalColor = signalColor.toCSSHex();
        }
      }
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getDataArray(dataItems);
      let period = this.get("fastPeriod", 12);
      this._ema(data, period, "value_y", "emaFast");
      period = this.get("slowPeriod", 26);
      this._ema(data, period, "value_y", "emaSlow");
      each(data, (dataItem) => {
        let emaFast = dataItem.emaFast;
        let emaSlow = dataItem.emaSlow;
        if (emaFast != null && emaSlow != null) {
          dataItem.macd = emaFast - emaSlow;
        }
      });
      period = this.get("signalPeriod", 9);
      this._ema(data, period, "macd", "signal");
      const increasingColor = this.get("increasingColor", color(65280)).toCSSHex();
      const decreasingColor = this.get("decreasingColor", color(16711680)).toCSSHex();
      let p = -Infinity;
      each(data, (dataItem) => {
        let macd = dataItem.macd;
        let signal = dataItem.signal;
        if (macd != null && signal != null) {
          let difference = macd - signal;
          dataItem.difference = difference;
          let color2 = increasingColor;
          if (difference < p) {
            color2 = decreasingColor;
          }
          dataItem.differenceColor = color2;
          p = difference;
        }
      });
      this.differenceSeries.data.setAll(data);
      this.signalSeries.data.setAll(data);
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(MACD, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MACD"
});
Object.defineProperty(MACD, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([MACD.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MACross.js
var MACross = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Slow period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Slow period"),
        type: "color"
      }, {
        key: "fastPeriod",
        name: this.root.language.translateAny("Fast period"),
        type: "number"
      }, {
        key: "fastColor",
        name: this.root.language.translateAny("Fast period"),
        type: "color"
      }]
    });
  }
  _prepareChildren() {
    if (this.isDirty("period") || this.isDirty("fastPeriod")) {
      this.markDataDirty();
    }
    if (this.isDirty("fastColor")) {
      this._updateSeriesColor(this.fastSeries, this.get("fastColor"), "fastColor");
    }
    this.setCustomData("fastPeriod", this.get("fastPeriod"));
    super._prepareChildren();
  }
  _dispose() {
    this.fastSeries.dispose();
    super._dispose();
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "ma",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "macross"],
        name: "MA"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      const fastSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "maf",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        stroke: this.get("fastColor"),
        themeTags: ["indicator", "macross", "fast"]
      }));
      fastSeries.setPrivate("baseValueSeries", stockSeries);
      this.fastSeries = fastSeries;
      this._handleLegend(series);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      let period = this.get("period", 9);
      let fastPeriod = this.get("fastPeriod", 21);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      this._sma(data, period, "value_y", "ma");
      this._sma(data, fastPeriod, "value_y", "maf");
      this.series.data.setAll(data);
      this.fastSeries.data.setAll(data);
    }
  }
};
Object.defineProperty(MACross, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MACross"
});
Object.defineProperty(MACross, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([MACross.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ChaikinMoneyFlow.js
var ChaikinMoneyFlow = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("chaikinmoneyflow");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "cmf",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      this.setRaw("field", "close");
      let data = this._getDataArray(dataItems);
      let i = 0;
      each(dataItems, (dataItem) => {
        let close = dataItem.get("valueY");
        if (close != null) {
          let low = dataItem.get("lowValueY", close);
          let high = dataItem.get("highValueY", close);
          let volume = 1;
          const volumeDI = volumeSeries.dataItems[i];
          if (volumeDI) {
            volume = volumeDI.get("valueY", 1);
          }
          let mf = (close - low - (high - close)) / (high - low);
          if (high == low) {
            mf = 0;
          }
          let mfv = mf * volume;
          data[i].mfv = mfv;
          data[i].volume = volume;
        }
        i++;
      });
      const period = this.get("period", 20);
      i = 0;
      each(data, (dataItem) => {
        if (i >= period - 1) {
          let mfv = 0;
          let volume = 0;
          for (let j = i; j > i - period; j--) {
            mfv += data[j].mfv;
            volume += data[j].volume;
          }
          if (volume != 0) {
            dataItem.cmf = mfv / volume;
          }
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(ChaikinMoneyFlow, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChaikinMoneyFlow"
});
Object.defineProperty(ChaikinMoneyFlow, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([ChaikinMoneyFlow.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ChaikinOscillator.js
var ChaikinOscillator = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Fast period"),
        type: "number"
      }, {
        key: "slowPeriod",
        name: this.root.language.translateAny("Slow period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("chaikinoscillator");
    super._afterNew();
    this.yAxis.set("numberFormat", "#.###a");
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "cmf",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _prepareChildren() {
    if (this.isDirty("slowPeriod")) {
      this.markDataDirty();
      this.setCustomData("slowPeriod", this.get("slowPeriod"));
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      this.setRaw("field", "close");
      let i = 0;
      let data = this._getDataArray(dataItems);
      let prevAD = 0;
      each(dataItems, (dataItem) => {
        let close = dataItem.get("valueY");
        if (close != null) {
          let low = dataItem.get("lowValueY", close);
          let high = dataItem.get("highValueY", close);
          let volume = 1;
          const volumeDI = volumeSeries.dataItems[i];
          if (volumeDI) {
            volume = volumeDI.get("valueY", 1);
          }
          let mf = (close - low - (high - close)) / (high - low);
          if (high == low) {
            mf = 0;
          }
          let ad = prevAD + mf * volume;
          data[i].ad = ad;
          prevAD = ad;
        }
        i++;
      });
      this._ema(data, this.get("slowPeriod", 10), "ad", "emaSlow");
      this._ema(data, this.get("period", 3), "ad", "emaFast");
      each(data, (dataItem) => {
        const emaSlow = dataItem.emaSlow;
        const emaFast = dataItem.emaFast;
        if (emaSlow != null && emaFast != null) {
          dataItem.cmf = emaFast - emaSlow;
        }
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(ChaikinOscillator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChaikinOscillator"
});
Object.defineProperty(ChaikinOscillator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([ChaikinOscillator.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/BullBearPower.js
var BullBearPower = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("bullbearpower");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "bbp",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      this.setRaw("field", "close");
      let i = 0;
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 3);
      this._ema(data, period, "value_y", "ema");
      each(dataItems, (dataItem) => {
        if (i >= period - 1) {
          let close = dataItem.get("valueY");
          if (close != null) {
            let low = dataItem.get("lowValueY", close);
            let high = dataItem.get("highValueY", close);
            let ema = data[i].ema;
            data[i].bbp = high - ema + low - ema;
          }
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(BullBearPower, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BullBearPower"
});
Object.defineProperty(BullBearPower, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([BullBearPower.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/OnBalanceVolume.js
var OnBalanceVolume = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("onbalancevolume");
    super._afterNew();
    this.yAxis.set("numberFormat", "#.###a");
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "obv",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.setRaw("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      let data = this._getDataArray(dataItems);
      let previous = 0;
      let len = data.length;
      if (volumeSeries && len > 1) {
        let cy = data[0].value_y;
        for (let i = 1; i < len; i++) {
          const dataItem = data[i];
          let c = dataItem.value_y;
          if (c != null) {
            const volumeDI = volumeSeries.dataItems[i];
            let volume = 0;
            if (volumeDI) {
              volume = volumeDI.get("valueY", 1);
            }
            let obv = previous;
            if (c > cy) {
              obv += volume;
            } else if (c < cy) {
              obv -= volume;
            }
            dataItem.obv = obv;
            previous = obv;
            cy = c;
          }
        }
      }
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(OnBalanceVolume, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OnBalanceVolume"
});
Object.defineProperty(OnBalanceVolume, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([OnBalanceVolume.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/PVT.js
var PVT = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("pvt");
    super._afterNew();
    this.yAxis.set("numberFormat", "#.###a");
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "pvt",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.setRaw("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      const volumeSeries = this.get("volumeSeries");
      let data = this._getDataArray(dataItems);
      let previous = 0;
      let len = data.length;
      if (volumeSeries && len > 1) {
        let cy = data[0].value_y;
        for (let i = 1; i < len; i++) {
          const dataItem = data[i];
          let c = dataItem.value_y;
          if (c != null && isNumber(c) && c != 0) {
            const volumeDI = volumeSeries.dataItems[i];
            let volume = 0;
            if (volumeDI) {
              volume = volumeDI.get("valueY", 1);
            }
            let pvt = (c - cy) / cy * volume + previous;
            dataItem.pvt = pvt;
            previous = pvt;
            cy = c;
          }
        }
      }
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(PVT, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PVT"
});
Object.defineProperty(PVT, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([PVT.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/StochasticOscillator.js
var StochasticOscillator = class extends OverboughtOversold {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "slowSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._themeTags.push("stochastic");
    super._afterNew();
    this._editableSettings.unshift({
      key: "period",
      name: this.root.language.translateAny("Period"),
      type: "number"
    }, {
      key: "seriesColor",
      name: this.root.language.translateAny("Period"),
      type: "color"
    }, {
      key: "kSmoothing",
      name: this.root.language.translateAny("K period"),
      type: "number"
    }, {
      key: "dSmoothing",
      name: this.root.language.translateAny("SMA period"),
      type: "number"
    }, {
      key: "slowColor",
      name: this.root.language.translateAny("SMA period"),
      type: "color"
    });
    this.yAxis.setAll({ min: 0, max: 100, strictMinMax: true });
    const slowSeries = this.panel.series.push(LineSeries.new(this._root, {
      valueXField: "valueX",
      valueYField: "slow",
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      groupDataDisabled: true,
      themeTags: ["indicator", "slow"]
    }));
    this.slowSeries = slowSeries;
  }
  _updateChildren() {
    if (this.isDirty("kSmoothing") || this.isDirty("dSmoothing")) {
      this.markDataDirty();
      this.setCustomData("dSmoothing", this.get("dSmoothing"));
      this.setCustomData("kSmoothing", this.get("kSmoothing"));
    }
    super._updateChildren();
    if (this.isDirty("slowColor")) {
      this._updateSeriesColor(this.slowSeries, this.get("slowColor"), "slowColor");
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let period = this.get("period", 14);
      let data = [];
      let index = 0;
      each(dataItems, (dataItem) => {
        const valueX = dataItem.get("valueX");
        let k;
        if (index >= period - 1) {
          let value = this._getValue(dataItem);
          if (value != null) {
            let lp = Infinity;
            let hp = -lp;
            for (let j = index; j > index - period; j--) {
              let h = dataItems[j].get("highValueY");
              let l = dataItems[j].get("lowValueY");
              if (h != null && l != null) {
                if (l < lp) {
                  lp = l;
                }
                if (h > hp) {
                  hp = h;
                }
              }
            }
            k = (value - lp) / (hp - lp) * 100;
          }
        }
        if (k == null || isNaN2(k)) {
          data.push({ valueX });
        } else {
          data.push({ valueX, value_y: k });
        }
        index++;
      });
      period = this.get("kSmoothing", 1);
      this._sma(data, period, "value_y", "valueS");
      period = this.get("dSmoothing", 3);
      this._sma(data, period, "valueS", "slow");
      this.series.data.setAll(data);
      this.slowSeries.data.setAll(data);
    }
  }
};
Object.defineProperty(StochasticOscillator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StochasticOscillator"
});
Object.defineProperty(StochasticOscillator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: OverboughtOversold.classNames.concat([StochasticOscillator.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/StochasticMomentumIndex.js
var StochasticMomentumIndex = class extends OverboughtOversold {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "emaSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._themeTags.push("stochasticmomentum");
    super._afterNew();
    this._editableSettings.unshift({
      key: "period",
      name: this.root.language.translateAny("K period"),
      type: "number"
    }, {
      key: "seriesColor",
      name: this.root.language.translateAny("K period"),
      type: "color"
    }, {
      key: "dPeriod",
      name: this.root.language.translateAny("D period"),
      type: "number"
    }, {
      key: "emaPeriod",
      name: this.root.language.translateAny("EMA period"),
      type: "number"
    }, {
      key: "emaColor",
      name: this.root.language.translateAny("EMA period"),
      type: "color"
    });
    const emaSeries = this.panel.series.push(LineSeries.new(this._root, {
      valueXField: "valueX",
      valueYField: "ema",
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      groupDataDisabled: true,
      themeTags: ["indicator", "ema"]
    }));
    this.emaSeries = emaSeries;
  }
  _updateChildren() {
    if (this.isDirty("dPeriod") || this.isDirty("emaPeriod")) {
      this.markDataDirty();
      this.setCustomData("dPeriod", this.get("dPeriod"));
      this.setCustomData("emaPeriod", this.get("emaPeriod"));
    }
    super._updateChildren();
    if (this.isDirty("emaColor")) {
      this._updateSeriesColor(this.emaSeries, this.get("emaColor"), "emaColor");
    }
  }
  /**
   * @ignore
   * https://www.barchart.com/education/technical-indicators/stochastic_momentum_index
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let kPeriod = this.get("period", 10);
      let data = [];
      let index = 0;
      each(dataItems, (dataItem) => {
        const valueX = dataItem.get("valueX");
        let lp = Infinity;
        let hp = -lp;
        let hhh;
        let dhl;
        if (index >= kPeriod - 1) {
          let value = this._getValue(dataItem);
          if (value != null) {
            for (let j = index; j > index - kPeriod; j--) {
              let h = dataItems[j].get("highValueY");
              let l = dataItems[j].get("lowValueY");
              if (h != null && l != null) {
                if (l < lp) {
                  lp = l;
                }
                if (h > hp) {
                  hp = h;
                }
              }
            }
            let c = (hp + lp) / 2;
            hhh = value - c;
            dhl = hp - lp;
          }
        }
        if (hhh == null || isNaN2(hhh) || hhh === 0) {
          data.push({ valueX });
        } else {
          data.push({ valueX, hhh, dhl });
        }
        index++;
      });
      let dPeriod = this.get("dPeriod", 3);
      this._ema(data, dPeriod, "hhh", "hhh_ema");
      this._ema(data, dPeriod, "hhh_ema", "hhh_ema2");
      this._ema(data, dPeriod, "dhl", "dhl_ema");
      this._ema(data, dPeriod, "dhl_ema", "dhl_ema2");
      each(data, (d) => {
        let hhh = d.hhh_ema2;
        let dhl = d.dhl_ema2;
        if (hhh != null && dhl != null) {
          d.valueS = d.hhh_ema2 / d.dhl_ema2 * 200;
        }
      });
      let emaPeriod = this.get("emaPeriod", 3);
      this._sma(data, emaPeriod, "valueS", "ema");
      this.series.data.setAll(data);
      this.emaSeries.data.setAll(data);
    }
  }
};
Object.defineProperty(StochasticMomentumIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StochasticMomentumIndex"
});
Object.defineProperty(StochasticMomentumIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: OverboughtOversold.classNames.concat([StochasticMomentumIndex.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AwesomeOscillator.js
var AwesomeOscillator = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "increasingColor",
        name: this.root.language.translateAny("Increasing"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Decreasing"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("awesomeoscillator");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(ColumnSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "ao",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _updateChildren() {
    super._updateChildren();
    const increasingColor = "increasingColor";
    const decreasingColor = "decreasingColor";
    if (this.isDirty(increasingColor) || this.isDirty(decreasingColor)) {
      const template = this.series.columns.template;
      const increasing = this.get(increasingColor);
      const decreasing = this.get(decreasingColor);
      template.states.create("riseFromPrevious", { fill: increasing, stroke: increasing });
      template.states.create("dropFromPrevious", { fill: decreasing, stroke: decreasing });
      this.markDataDirty();
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "hl/2");
      const dataItems = this.get("stockSeries").dataItems;
      let decreasingColor = this.get("decreasingColor", Color.fromHex(16711680)).toCSSHex();
      let increasingColor = this.get("increasingColor", Color.fromHex(65280)).toCSSHex();
      let data = this._getDataArray(dataItems);
      let period = 5;
      this._sma(data, 5, "value_y", "sma5");
      period = 34;
      this._sma(data, 34, "value_y", "sma34");
      let po = -Infinity;
      let i = 0;
      each(data, (dataItem) => {
        i++;
        if (i >= period) {
          let o = dataItem.sma5 - dataItem.sma34;
          let color2 = increasingColor;
          if (o < po) {
            color2 = decreasingColor;
          }
          dataItem.ao = o;
          dataItem.oscillatorColor = color2;
          po = o;
        }
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(AwesomeOscillator, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AwesomeOscillator"
});
Object.defineProperty(AwesomeOscillator, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([AwesomeOscillator.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/WilliamsR.js
var WilliamsR = class extends OverboughtOversold {
  _afterNew() {
    this._themeTags.push("williamsr");
    super._afterNew();
    this._editableSettings.unshift({
      key: "period",
      name: this.root.language.translateAny("Period"),
      type: "number"
    }, {
      key: "seriesColor",
      name: this.root.language.translateAny("Period"),
      type: "color"
    });
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "close");
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getDataArray(dataItems);
      let period = this.get("period", 14);
      for (let i = 0, len = data.length; i < len; i++) {
        const dataItem = data[i];
        let h = -Infinity;
        let l = Infinity;
        let b = Math.max(0, i - period);
        for (let j = b; j <= i; j++) {
          let vh = dataItems[j].get("highValueY", 0);
          if (vh >= h) {
            h = vh;
          }
          let vl = dataItems[j].get("lowValueY", 0);
          if (vl <= l) {
            l = vl;
          }
        }
        if (h - l != 0) {
          dataItem.valueS = -100 * (h - dataItem.value_y) / (h - l);
        }
      }
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(WilliamsR, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "WilliamsR"
});
Object.defineProperty(WilliamsR, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: OverboughtOversold.classNames.concat([WilliamsR.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Volume.js
var Volume = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "increasingColor",
        name: this.root.language.translateAny("Up volume"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Down volume"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("volume");
    super._afterNew();
    this.yAxis.set("numberFormat", "#.###a");
    const stockChart = this.get("stockChart");
    if (stockChart) {
      const _this = this;
      this.series.columns.template.adapters.add("fill", function(fill, target) {
        const dataItem = target.dataItem;
        if (dataItem) {
          const dataContext = dataItem.dataContext;
          const color2 = stockChart.getVolumeColor(dataItem, _this.get("decreasingColor", Color.fromHex(16711680)), _this.get("increasingColor", Color.fromHex(65280)));
          if (dataContext) {
            dataContext.volumeColor = color2;
          }
          return color2;
        }
        return fill;
      });
    }
  }
  _createSeries() {
    return this.panel.series.push(ColumnSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "volume",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _prepareChildren() {
    if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
      this.markDataDirty();
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const volumeSeries = this.get("volumeSeries");
      const stockChart = this.get("stockChart");
      if (volumeSeries && stockChart) {
        const dataItems = volumeSeries.dataItems;
        this.setRaw("field", "close");
        let data = this._getDataArray(dataItems);
        each(data, (dataItem) => {
          dataItem.volume = dataItem.value_y;
        });
        this.series.data.setAll(data);
      }
    }
  }
};
Object.defineProperty(Volume, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Volume"
});
Object.defineProperty(Volume, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([Volume.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/VolumeProfile.js
var VolumeProfile = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "countType",
        name: this.root.language.translateAny("Count"),
        type: "dropdown",
        options: [
          { value: "rows", text: this.root.language.translateAny("number of rows"), extTarget: "count", extTargetValue: 24, extTargetMinValue: 1 },
          { value: "ticks", text: this.root.language.translateAny("ticks per row"), extTarget: "count", extTargetValue: 1e3, extTargetMinValue: 200 }
        ]
      }, {
        key: "count",
        name: this.root.language.translateAny("Count"),
        type: "number",
        minValue: 1
      }, {
        key: "valueArea",
        name: this.root.language.translateAny("Value Area"),
        type: "number"
      }, {
        key: "upColor",
        name: this.root.language.translateAny("Up volume"),
        type: "color"
      }, {
        key: "downColor",
        name: this.root.language.translateAny("Down volume"),
        type: "color"
      }, {
        key: "axisWidth",
        name: this.root.language.translateAny("Width %"),
        type: "number"
      }]
    });
    Object.defineProperty(this, "xAxis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "upSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_previousColumn", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    const volumeSeries = this.get("volumeSeries");
    const stockSeries = this.get("stockSeries");
    if (volumeSeries) {
      const chart = stockSeries.chart;
      const root = this._root;
      if (chart) {
        const yAxis = stockSeries.get("yAxis");
        const step = yAxis.getPrivate("step");
        if (step !== void 0) {
          const val = yAxis.getPrivate("step") * 50;
          this._editableSettings[0].options[1].extTargetValue = val;
          this._editableSettings[0].options[1].extTargetMinValue = val * 0.2;
        }
        yAxis.onPrivate("step", (step2) => {
          const val = step2 * 50;
          this._editableSettings[0].options[1].extTargetValue = val;
          this._editableSettings[0].options[1].extTargetMinValue = val * 0.2;
        });
        const panelXAxis = stockSeries.get("xAxis");
        panelXAxis.on("start", () => {
          this.markDataDirty();
        });
        panelXAxis.on("end", () => {
          this.markDataDirty();
        });
        const xRenderer = AxisRendererX.new(root, {});
        xRenderer.grid.template.set("forceHidden", true);
        xRenderer.labels.template.set("forceHidden", true);
        this.xAxis = chart.xAxes.push(ValueAxis.new(root, {
          zoomable: false,
          strictMinMax: true,
          panX: false,
          panY: false,
          renderer: xRenderer
        }));
        if (yAxis.get("renderer").get("opposite")) {
          xRenderer.set("inversed", true);
          this.xAxis.setAll({
            x: percent(100),
            centerX: percent(100)
          });
        }
        this.series = chart.series.unshift(ColumnSeries.new(root, {
          xAxis: this.xAxis,
          yAxis,
          snapTooltip: false,
          valueXField: "down",
          openValueXField: "xOpen",
          openValueYField: "yOpen",
          valueYField: "y",
          calculateAggregates: true,
          themeTags: ["indicator", "volumeprofile", "down"]
        }));
        this.upSeries = chart.series.unshift(ColumnSeries.new(root, {
          xAxis: this.xAxis,
          yAxis,
          snapTooltip: false,
          valueXField: "total",
          openValueXField: "down",
          openValueYField: "yOpen",
          valueYField: "y",
          calculateAggregates: true,
          themeTags: ["indicator", "volumeprofile", "up"]
        }));
        this.upSeries.setPrivate("doNotUpdateLegend", true);
        this.series.setPrivate("doNotUpdateLegend", true);
        this.upSeries.setPrivate("baseValueSeries", stockSeries);
        this.series.setPrivate("baseValueSeries", stockSeries);
        this._handleLegend(this.series);
        this._addInteractivity(this.series);
        this._addInteractivity(this.upSeries);
      }
    }
  }
  _addInteractivity(series) {
    series.columns.template.events.on("pointerover", (e) => {
      let dataItem = e.target.dataItem;
      if (dataItem) {
        if (dataItem.component == this.upSeries) {
          dataItem = this.series.dataItems[this.upSeries.dataItems.indexOf(dataItem)];
          if (dataItem) {
            const column = dataItem.get("graphics");
            if (column) {
              column.hover();
              this._previousColumn = column;
            }
          }
        } else {
          dataItem = this.upSeries.dataItems[this.series.dataItems.indexOf(dataItem)];
          if (dataItem) {
            const column = dataItem.get("graphics");
            if (column) {
              column.hover();
              this._previousColumn = column;
            }
          }
        }
        this.series.updateLegendValue(dataItem);
      }
    });
    series.columns.template.events.on("pointerout", () => {
      this.series.updateLegendValue(void 0);
      if (this._previousColumn) {
        this._previousColumn.unhover();
      }
    });
    series.columns.template.adapters.add("fillOpacity", (fillOpacity, target) => {
      const dataItem = target.dataItem;
      if (dataItem) {
        const dataContext = dataItem.dataContext;
        if (dataContext) {
          if (dataContext.area) {
            return this.get("valueAreaOpacity", 0.7);
          }
        }
      }
      return fillOpacity;
    });
  }
  _updateChildren() {
    if (this.series) {
      super._updateChildren();
      if (this.isDirty("count") || this.isDirty("countType") || this.isDirty("valueArea")) {
        this.markDataDirty();
      }
      if (this.isDirty("countType")) {
        const countType = this.get("countType");
        if (countType == "ticks") {
          const stockSeries = this.get("stockSeries");
          const yAxis = stockSeries.get("yAxis");
          this._editableSettings[1].minValue = yAxis.getPrivate("step") * 50 * 0.2;
        } else {
          this._editableSettings[1].minValue = 1;
        }
      }
      if (this.isDirty("upColor")) {
        const upColor = this.get("upColor");
        this.upSeries.set("fill", upColor);
        this.upSeries.set("stroke", upColor);
        this.upSeries.columns.template.setAll({
          fill: upColor,
          stroke: upColor
        });
        this.setCustomData("upColor", upColor);
      }
      if (this.isDirty("downColor")) {
        const downColor = this.get("downColor");
        this.series.set("fill", downColor);
        this.series.set("stroke", downColor);
        this.series.columns.template.setAll({
          fill: downColor,
          stroke: downColor
        });
        this.setCustomData("downColor", downColor);
      }
      if (this.isDirty("axisWidth")) {
        this.xAxis.set("width", percent(this.get("axisWidth", 40)));
      }
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    const volumeSeries = this.get("volumeSeries");
    const stockSeries = this.get("stockSeries");
    if (volumeSeries && this.series) {
      let startIndex = volumeSeries.getPrivate("adjustedStartIndex", volumeSeries.startIndex());
      let endIndex = volumeSeries.endIndex();
      const count = this.get("count", 20);
      const type = this.get("countType");
      let step = 1;
      let min = Infinity;
      let max = -Infinity;
      for (let i = startIndex; i < endIndex; i++) {
        const dataItem = stockSeries.dataItems[i];
        if (dataItem) {
          const close = dataItem.get("valueY");
          if (isNumber(close)) {
            if (close < min) {
              min = close;
            }
            if (close > max) {
              max = close;
            }
          }
        }
      }
      if (min != Infinity) {
        let rows;
        if (type == "ticks") {
          step = count / 100;
          min = Math.floor(min / step) * step;
          max = Math.ceil(max / step) * step;
          rows = (max - min) / step;
        } else {
          step = (max - min) / count;
          rows = count;
        }
        const rowDataDown = [];
        const rowDataUp = [];
        for (let i = 0; i < rows; i++) {
          rowDataDown[i] = 0;
          rowDataUp[i] = 0;
        }
        let previousDataItem;
        for (let i = startIndex; i < endIndex; i++) {
          const dataItem = stockSeries.dataItems[i];
          const volumeDataItem = volumeSeries.dataItems[i];
          if (dataItem && volumeDataItem) {
            const close = dataItem.get("valueY");
            const volume = volumeDataItem.get("valueY");
            if (isNumber(close) && isNumber(volume)) {
              let index = Math.floor((close - min) / step);
              if (index == count) {
                index = count - 1;
              }
              if (isNumber(index)) {
                if (previousDataItem && previousDataItem.get("valueY", close) < close) {
                  rowDataDown[index] += volume;
                } else {
                  rowDataUp[index] += volume;
                }
              }
            }
            previousDataItem = dataItem;
          }
        }
        const dataDown = [];
        let sum = 0;
        for (let i = 0; i < rows; i++) {
          let total = rowDataUp[i] + rowDataDown[i];
          sum += total;
          dataDown.push({
            yOpen: min + i * step,
            y: min + (i + 1) * step,
            up: rowDataUp[i],
            down: rowDataDown[i],
            total,
            xOpen: 0,
            area: false
          });
        }
        let len = this.series.data.length;
        if (len && len == dataDown.length) {
          for (let i = 0; i < len; i++) {
            this.series.data.setIndex(i, dataDown[i]);
          }
        } else {
          this.series.data.setAll(dataDown);
        }
        const dataUp = [];
        let highest = 0;
        let hi = 0;
        for (let i = 0; i < rows; i++) {
          let total = rowDataUp[i] + rowDataDown[i];
          dataUp.push({
            yOpen: min + i * step,
            y: min + (i + 1) * step,
            up: rowDataUp[i],
            down: rowDataDown[i],
            total,
            area: false
          });
          if (total > highest) {
            highest = total;
            hi = i;
          }
        }
        let valueArea = sum * this.get("valueArea", 70) / 100;
        let area = highest;
        let cd = 1;
        let cu = 1;
        let dlen = dataUp.length;
        dataUp[hi].area = true;
        dataDown[hi].area = true;
        while (area < valueArea) {
          let rowAbove1 = hi + cu;
          let sumAbove = 0;
          if (rowAbove1 < dlen) {
            sumAbove += dataUp[rowAbove1].total;
          }
          let rowBelow1 = hi - cd;
          let sumBelow = 0;
          if (rowBelow1 >= 0) {
            sumBelow += dataUp[rowBelow1].total;
          }
          if (sumBelow <= sumAbove) {
            area += sumAbove;
            if (rowAbove1 < dlen) {
              dataDown[rowAbove1].area = true;
              dataUp[rowAbove1].area = true;
              cu++;
            }
          } else {
            area += sumBelow;
            if (rowBelow1 >= 0) {
              dataDown[rowBelow1].area = true;
              dataUp[rowBelow1].area = true;
              cd++;
            }
          }
          if (sumBelow == 0) {
            cd++;
          }
          if (sumAbove == 0) {
            cu++;
          }
          if (cd > dlen && cu > dlen) {
            break;
          }
        }
        area = Math.ceil(area);
        len = this.upSeries.data.length;
        if (len > 0 && len == dataUp.length) {
          for (let i = 0; i < len; i++) {
            this.upSeries.data.setIndex(i, dataUp[i]);
          }
        } else {
          this.upSeries.data.setAll(dataUp);
        }
      } else {
        this.upSeries.data.clear();
        this.series.data.clear();
      }
    }
    this.series.columns.each((column) => {
      column._markDirtyKey("fillOpacity");
    });
    this.upSeries.columns.each((column) => {
      column._markDirtyKey("fillOpacity");
    });
  }
  _dispose() {
    super._dispose();
    if (this.upSeries) {
      this.upSeries.dispose();
    }
    if (this.xAxis) {
      this.xAxis.dispose();
    }
  }
};
Object.defineProperty(VolumeProfile, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VolumeProfile"
});
Object.defineProperty(VolumeProfile, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([VolumeProfile.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/CommodityChannelIndex.js
var CommodityChannelIndex = class extends OverboughtOversold {
  _afterNew() {
    this._themeTags.push("commoditychannelindex");
    super._afterNew();
    this._editableSettings.unshift({
      key: "period",
      name: this.root.language.translateAny("Period"),
      type: "number"
    }, {
      key: "seriesColor",
      name: this.root.language.translateAny("Period"),
      type: "color"
    });
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      let data = this._getTypicalPrice(dataItems);
      let period = this.get("period", 20);
      this._sma(data, period, "value_y", "sma");
      for (let i = 0, len = data.length; i < len; i++) {
        const dataItem = data[i];
        const value = dataItem.value_y;
        let ma = dataItem.sma;
        let meanDeviation = 0;
        if (i >= period - 1) {
          for (let j = i; j > i - period; j--) {
            let di = data[j];
            meanDeviation += Math.abs(di.value_y - ma);
          }
          meanDeviation = meanDeviation / period;
          let valueS = (value - ma) / (0.015 * meanDeviation);
          if (isNumber(valueS)) {
            dataItem.valueS = valueS;
          }
        }
      }
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(CommodityChannelIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CommodityChannelIndex"
});
Object.defineProperty(CommodityChannelIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: OverboughtOversold.classNames.concat([CommodityChannelIndex.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/DisparityIndex.js
var DisparityIndex = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }, {
        key: "movingAverageType",
        name: this.root.language.translateAny("Moving Average Type"),
        type: "dropdown",
        options: ["simple", "weighted", "exponential", "dema", "tema"]
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("disparityindex");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "disparity",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _prepareChildren() {
    const movingAverageType = "movingAverageType";
    if (this.isDirty(movingAverageType)) {
      this.markDataDirty();
      this.setCustomData(movingAverageType, this.get(movingAverageType));
    }
    super._prepareChildren();
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const dataItems = this.get("stockSeries").dataItems;
      const period = this.get("period", 14);
      const type = this.get("movingAverageType");
      let data = this._getDataArray(dataItems);
      switch (type) {
        case "simple":
          this._sma(data, period, "value_y", "ma");
          break;
        case "weighted":
          this._wma(data, period, "value_y", "ma");
          break;
        case "exponential":
          this._ema(data, period, "value_y", "ma");
          break;
        case "dema":
          this._dema(data, period, "value_y", "ma");
          break;
        case "tema":
          this._tema(data, period, "value_y", "ma");
          break;
      }
      each(data, (dataItem) => {
        const ma = dataItem.ma;
        if (ma != null) {
          dataItem.disparity = 100 * (dataItem.value_y - ma) / ma;
        }
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(DisparityIndex, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DisparityIndex"
});
Object.defineProperty(DisparityIndex, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([DisparityIndex.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/StandardDeviation.js
var StandardDeviation = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "field",
        name: this.root.language.translateAny("Field"),
        type: "dropdown",
        options: ["open", "close", "low", "high", "hl/2", "hlc/3", "hlcc/4", "ohlc/4"]
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("standarddeviation");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "deviation",
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      this._sma(data, period, "value_y", "ma");
      let i = 0;
      each(data, (dataItem) => {
        if (i >= period - 1) {
          let mean = dataItem.ma;
          let stdSum = 0;
          for (let j = i - period + 1; j <= i; j++) {
            let di = dataItems[j];
            let diValue = this._getValue(di);
            if (diValue != null) {
              stdSum += Math.pow(diValue - mean, 2);
            }
          }
          let std = Math.sqrt(stdSum / period);
          dataItem.deviation = std;
        }
        i++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(StandardDeviation, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StandardDeviation"
});
Object.defineProperty(StandardDeviation, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([StandardDeviation.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/SuperTrend.js
var SuperTrend = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "upperBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "lowerBandSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "multiplier",
        name: this.root.language.translateAny("Multiplier"),
        type: "number"
      }, {
        key: "upperColor",
        name: this.root.language.translateAny("Upper"),
        type: "color"
      }, {
        key: "lowerColor",
        name: this.root.language.translateAny("Lower"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "ma",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "supertrend"],
        name: "Super Trend"
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      const upperBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "upper",
        openValueYField: "value_close",
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        calculateAggregates: true,
        connect: false,
        autoGapCount: Infinity,
        themeTags: ["indicator", "supertrend", "upper"]
      }));
      upperBandSeries.fills.template.set("visible", true);
      upperBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.upperBandSeries = upperBandSeries;
      const lowerBandSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "lower",
        openValueYField: "value_close",
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        groupDataDisabled: true,
        calculateAggregates: true,
        connect: false,
        autoGapCount: Infinity,
        themeTags: ["indicator", "supertrend", "lower"]
      }));
      lowerBandSeries.fills.template.set("visible", true);
      lowerBandSeries.setPrivate("baseValueSeries", stockSeries);
      this.lowerBandSeries = lowerBandSeries;
      this._handleLegend(this.series);
    }
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("upperColor")) {
      const color2 = this.get("upperColor");
      const upperBandSeries = this.upperBandSeries;
      upperBandSeries.set("stroke", color2);
      upperBandSeries.set("fill", color2);
      upperBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(upperBandSeries, color2, "upperColor");
    }
    if (this.isDirty("lowerColor")) {
      const color2 = this.get("lowerColor");
      const lowerBandSeries = this.lowerBandSeries;
      lowerBandSeries.set("stroke", color2);
      lowerBandSeries.set("fill", color2);
      lowerBandSeries.strokes.template.set("stroke", color2);
      this._updateSeriesColor(lowerBandSeries, color2, "lowerColor");
    }
    if (this.isDirty("multiplier")) {
      this.markDataDirty();
      this.setCustomData("multiplier", this.get("multiplier"));
    }
  }
  _getDataArray(dataItems) {
    const data = [];
    each(dataItems, (dataItem) => {
      data.push({ valueX: dataItem.get("valueX"), value_close: dataItem.get("valueY"), value_high: dataItem.get("highValueY"), value_low: dataItem.get("lowValueY") });
    });
    return data;
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      let period = this.get("period", 10);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let i = 0;
      let index = 0;
      let tr = 0;
      let prevClose;
      let prevATR;
      let multiplier = this.get("multiplier", 3);
      let atr;
      let trendDirection = false;
      let prevSuperTrend;
      let prevUpperBand;
      let prevLowerBand;
      let upperBand;
      let lowerBand;
      let superTrend;
      each(data, (dataItem) => {
        let valueClose = dataItem.value_close;
        if (valueClose != null && prevClose != null) {
          i++;
          tr = Math.max(dataItem.value_high - dataItem.value_low, Math.abs(dataItem.value_high - prevClose), Math.abs(dataItem.value_low - prevClose));
          dataItem.tr = tr;
          if (i >= period) {
            if (i == period) {
              let sum = 0;
              let k = 0;
              for (let j = index; j >= 0; j--) {
                sum += data[j].tr;
                k++;
                if (k == period) {
                  break;
                }
              }
              atr = sum / period;
            } else {
              if (prevATR != null) {
                atr = (prevATR * (period - 1) + tr) / period;
              }
            }
            prevATR = atr;
            let basicUpperBand = (dataItem.value_high + dataItem.value_low) / 2 + multiplier * Number(atr);
            let basicLowerBand = (dataItem.value_high + dataItem.value_low) / 2 - multiplier * Number(atr);
            if (i === period) {
              upperBand = basicUpperBand;
              lowerBand = basicLowerBand;
            } else {
              upperBand = basicUpperBand < Number(prevUpperBand) || prevClose > Number(prevUpperBand) ? basicUpperBand : prevUpperBand;
              lowerBand = basicLowerBand > Number(prevLowerBand) || prevClose < Number(prevLowerBand) ? basicLowerBand : prevLowerBand;
            }
            if (i === period) {
              superTrend = valueClose <= Number(upperBand) ? upperBand : lowerBand;
            } else {
              if (prevSuperTrend === prevUpperBand && valueClose <= Number(upperBand)) {
                superTrend = upperBand;
                trendDirection = false;
              } else if (prevSuperTrend === prevUpperBand && valueClose > Number(upperBand)) {
                superTrend = lowerBand;
                trendDirection = true;
              } else if (prevSuperTrend === prevLowerBand && valueClose >= Number(lowerBand)) {
                superTrend = lowerBand;
                trendDirection = true;
              } else if (prevSuperTrend === prevLowerBand && valueClose < Number(lowerBand)) {
                superTrend = upperBand;
                trendDirection = false;
              } else {
                superTrend = prevSuperTrend;
              }
            }
            if (trendDirection) {
              dataItem.lower = superTrend;
              dataItem.upper = void 0;
            } else {
              dataItem.upper = superTrend;
              dataItem.lower = void 0;
            }
            prevLowerBand = lowerBand;
            prevUpperBand = upperBand;
            prevSuperTrend = superTrend;
          }
        }
        index++;
        prevClose = valueClose;
      });
      this.upperBandSeries.data.setAll(data);
      this.lowerBandSeries.data.setAll(data);
    }
  }
  _dispose() {
    this.upperBandSeries.dispose();
    this.lowerBandSeries.dispose();
    super._dispose();
  }
  hide(duration2) {
    const _super = Object.create(null, {
      hide: { get: () => super.hide }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.hide.call(this, duration2),
        this.upperBandSeries.hide(duration2),
        this.lowerBandSeries.hide(duration2)
      ]);
    });
  }
  show(duration2) {
    const _super = Object.create(null, {
      show: { get: () => super.show }
    });
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.all([
        _super.show.call(this, duration2),
        this.upperBandSeries.show(duration2),
        this.lowerBandSeries.show(duration2)
      ]);
    });
  }
};
Object.defineProperty(SuperTrend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SuperTrend"
});
Object.defineProperty(SuperTrend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([SuperTrend.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/TypicalPrice.js
var TypicalPrice = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("typicalprice");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "typical",
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let i = 0;
      let index = 0;
      let typical = 0;
      each(data, (dataItem) => {
        let value = dataItem.value_y;
        if (value != null) {
          i++;
          typical += value / period;
          if (i >= period) {
            if (i > period) {
              let valueToRemove = data[index - period].value_y;
              if (valueToRemove != null) {
                typical -= valueToRemove / period;
              }
            }
            dataItem.typical = typical;
          }
        }
        index++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(TypicalPrice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "TypicalPrice"
});
Object.defineProperty(TypicalPrice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([TypicalPrice.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/Trix.js
var Trix = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "signalSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }, {
        key: "signalPeriod",
        name: this.root.language.translateAny("Signal period"),
        type: "number"
      }, {
        key: "signalColor",
        name: this.root.language.translateAny("Signal color"),
        type: "color"
      }]
    });
    Object.defineProperty(this, "_themeTag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "trix"
    });
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "trix",
      fill: void 0
    }));
  }
  _afterNew() {
    this._themeTags.push("trix");
    super._afterNew();
    const chart = this.panel;
    if (chart) {
      const signalSeries = chart.series.push(LineSeries.new(this._root, {
        valueXField: "valueX",
        valueYField: "signal",
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        groupDataDisabled: true,
        themeTags: ["indicator", "signal"]
      }));
      this.signalSeries = signalSeries;
    }
  }
  _prepareChildren() {
    if (this.isDirty("signalPeriod")) {
      this.markDataDirty();
      this.setCustomData("signalPeriod", this.get("signalPeriod"));
    }
    super._prepareChildren();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("signalColor")) {
      this._updateSeriesColor(this.signalSeries, this.get("signalColor"), "signalColor");
    }
    const dataItem = this.series.dataItem;
    if (dataItem) {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        dataContext.signalPeriod = this.get("signalPeriod");
        const signalColor = this.get("signalColor");
        if (signalColor) {
          dataContext.signalColor = signalColor.toCSSHex();
        }
      }
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 14);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      this._ema(data, period, "value_y", "ema");
      this._ema(data, period, "ema", "ema2");
      this._ema(data, period, "ema2", "ema3");
      let previousDataItem;
      let previousValue;
      each(data, (dataItem) => {
        let value = dataItem.ema3;
        if (previousDataItem) {
          previousValue = previousDataItem.ema3;
        }
        if (isNumber(value) && isNumber(previousValue)) {
          dataItem.trix = 100 * (value - previousValue) / previousValue;
        }
        previousDataItem = dataItem;
      });
      this.series.data.setAll(data);
      period = this.get("signalPeriod", 9);
      this._sma(data, period, "trix", "signal");
      this.signalSeries.data.setAll(data);
    }
  }
};
Object.defineProperty(Trix, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Trix"
});
Object.defineProperty(Trix, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([Trix.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/MedianPrice.js
var MedianPrice = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("medianprice");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "median",
      fill: void 0
    }));
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let i = 0;
      let index = 0;
      let median = 0;
      each(data, (dataItem) => {
        let value = dataItem.value_y;
        if (value != null) {
          i++;
          median += value / period;
          if (i >= period) {
            if (i > period) {
              let valueToRemove = data[index - period].value_y;
              if (valueToRemove != null) {
                median -= valueToRemove / period;
              }
            }
            dataItem.median = median;
          }
        }
        index++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(MedianPrice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MedianPrice"
});
Object.defineProperty(MedianPrice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([MedianPrice.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/ZigZag.js
var ZigZag = class extends Indicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "deviation",
        name: this.root.language.translateAny("Deviation"),
        type: "number"
      }, {
        key: "depth",
        name: this.root.language.translateAny("Depth"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _prepareChildren() {
    if (this.isDirty("deviation") || this.isDirty("depth")) {
      this._dataDirty = true;
      this.setCustomData("deviation", this.get("deviation"));
      this.setCustomData("depth", this.get("depth"));
    }
    super._prepareChildren();
  }
  _afterNew() {
    super._afterNew();
    const stockSeries = this.get("stockSeries");
    const chart = stockSeries.chart;
    if (chart) {
      const series = chart.series.push(LineSeries.new(this._root, {
        valueXField: "time",
        valueYField: "zigzag",
        groupDataDisabled: true,
        calculateAggregates: true,
        xAxis: stockSeries.get("xAxis"),
        yAxis: stockSeries.get("yAxis"),
        themeTags: ["indicator", "zigzag"],
        name: "ZigZag",
        snapTooltip: true
      }));
      series.setPrivate("baseValueSeries", stockSeries);
      this.series = series;
      this._handleLegend(series);
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      const deviation = this.get("deviation", 5) / 100;
      const stockSeries = this.get("stockSeries");
      const data = [];
      if (stockSeries) {
        const dataItems = stockSeries.dataItems;
        if (dataItems.length > 1) {
          let firstDataItem = dataItems[0];
          let goesUp = false;
          let firstTime = firstDataItem.get("valueX", 0);
          let firstValue = firstDataItem.get("valueY");
          let firstHigh = firstDataItem.get("highValueY", firstValue);
          let firstLow = firstDataItem.get("lowValueY", firstValue);
          let zigZagTime;
          let zigZagValue;
          let j = 1;
          for (let i = 1, len = dataItems.length; i < len; i++) {
            let dataItem = dataItems[i];
            let value = dataItem.get("value", 0);
            let low = dataItem.get("lowValueY", value);
            let high = dataItem.get("highValueY", value);
            let time = dataItem.get("valueX", 0);
            if (low <= Number(firstHigh) * (1 - deviation)) {
              data.push({ time: firstTime, zigzag: firstHigh });
              zigZagTime = time;
              zigZagValue = low;
              goesUp = true;
              j = i;
              break;
            } else if (high >= Number(firstLow) * (1 + deviation)) {
              data.push({ time: firstTime, zigzag: firstLow });
              zigZagTime = time;
              zigZagValue = high;
              goesUp = false;
              j = i;
              break;
            }
          }
          if (zigZagValue != null) {
            let depth = this.get("depth", 3);
            for (let i = j - 1, len = dataItems.length; i < len; i++) {
              let dataItem = dataItems[i];
              let value = dataItem.get("value", 0);
              let low = dataItem.get("lowValueY", value);
              let high = dataItem.get("highValueY", value);
              let time = dataItem.get("valueX", 0);
              if (goesUp) {
                if (low <= zigZagValue) {
                  zigZagValue = low;
                  zigZagTime = time;
                } else if (high >= zigZagValue * (1 + deviation)) {
                  let b = Math.max(0, i - depth);
                  let skip = false;
                  for (let k = i; k > b; k--) {
                    if (high < dataItems[k].get("highValueY")) {
                      skip = true;
                      break;
                    }
                  }
                  if (!skip) {
                    data.push({ time: zigZagTime, zigzag: zigZagValue });
                    zigZagValue = high;
                    zigZagTime = time;
                    goesUp = false;
                  }
                }
              } else {
                if (high >= zigZagValue) {
                  zigZagValue = high;
                  zigZagTime = time;
                } else if (low <= zigZagValue * (1 - deviation)) {
                  let b = Math.max(0, i - depth);
                  let skip = false;
                  for (let k = i; k > b; k--) {
                    if (low > dataItems[k].get("lowValueY")) {
                      skip = true;
                      break;
                    }
                  }
                  if (!skip) {
                    data.push({ time: zigZagTime, zigzag: zigZagValue });
                    zigZagValue = low;
                    zigZagTime = time;
                    goesUp = true;
                  }
                }
              }
            }
            const lastDataItem = dataItems[dataItems.length - 1];
            let lastTime = lastDataItem.get("valueX", 0);
            let lastValue = lastDataItem.get("valueY");
            let lastHigh = lastDataItem.get("highValueY", lastValue);
            let lastLow = lastDataItem.get("lowValueY", lastValue);
            if (zigZagValue < lastHigh) {
              data.push({ time: lastTime, zigzag: lastLow });
            } else {
              data.push({ time: lastTime, zigzag: lastHigh });
            }
          }
        }
        this.series.data.setAll(data);
      }
    }
  }
};
Object.defineProperty(ZigZag, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ZigZag"
});
Object.defineProperty(ZigZag, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Indicator.classNames.concat([ZigZag.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/AverageTrueRange.js
var AverageTrueRange = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "period",
        name: this.root.language.translateAny("Period"),
        type: "number"
      }, {
        key: "seriesColor",
        name: this.root.language.translateAny("Color"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("averagetruerange");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(LineSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      valueYField: "atr",
      fill: void 0
    }));
  }
  _getDataArray(dataItems) {
    const data = [];
    each(dataItems, (dataItem) => {
      data.push({ valueX: dataItem.get("valueX"), value_close: dataItem.get("valueY"), value_high: dataItem.get("highValueY"), value_low: dataItem.get("lowValueY") });
    });
    return data;
  }
  /**
   * @ignore
   */
  prepareData() {
    super.prepareData();
    if (this.series) {
      let period = this.get("period", 20);
      const stockSeries = this.get("stockSeries");
      const dataItems = stockSeries.dataItems;
      let data = this._getDataArray(dataItems);
      let i = 0;
      let index = 0;
      let tr = 0;
      let prevClose;
      let prevATR;
      each(data, (dataItem) => {
        let valueClose = dataItem.value_close;
        if (valueClose != null && prevClose != null) {
          i++;
          tr = Math.max(dataItem.value_high - dataItem.value_low, Math.abs(dataItem.value_high - prevClose), Math.abs(dataItem.value_low - prevClose));
          dataItem.tr = tr;
          if (i >= period) {
            if (i == period) {
              let sum = 0;
              let k = 0;
              for (let j = index; j >= 0; j--) {
                sum += data[j].tr;
                k++;
                if (k == period) {
                  break;
                }
              }
              dataItem.atr = sum / period;
            } else {
              if (prevATR != null) {
                dataItem.atr = (prevATR * (period - 1) + tr) / period;
              }
            }
            prevATR = dataItem.atr;
          }
        }
        prevClose = valueClose;
        index++;
      });
      this.series.data.setAll(data);
    }
  }
};
Object.defineProperty(AverageTrueRange, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AverageTrueRange"
});
Object.defineProperty(AverageTrueRange, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([AverageTrueRange.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/indicators/HeikinAshi.js
var HeikinAshi = class extends ChartIndicator {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editableSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [{
        key: "increasingColor",
        name: this.root.language.translateAny("Increasing"),
        type: "color"
      }, {
        key: "decreasingColor",
        name: this.root.language.translateAny("Decreasing"),
        type: "color"
      }]
    });
  }
  _afterNew() {
    this._themeTags.push("heikinashi");
    super._afterNew();
  }
  _createSeries() {
    return this.panel.series.push(CandlestickSeries.new(this._root, {
      themeTags: ["indicator"],
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      valueXField: "valueX",
      openValueYField: "value_o",
      valueYField: "value_y",
      lowValueYField: "value_l",
      highValueYField: "value_h",
      stroke: this.get("seriesColor"),
      fill: void 0
    }));
  }
  _updateChildren() {
    super._updateChildren();
    const increasingColor = "increasingColor";
    const decreasingColor = "decreasingColor";
    if (this.isDirty(increasingColor) || this.isDirty(decreasingColor)) {
      const template = this.series.columns.template;
      const increasing = this.get(increasingColor);
      const decreasing = this.get(decreasingColor);
      template.states.create("riseFromPrevious", { fill: increasing, stroke: increasing });
      template.states.create("dropFromPrevious", { fill: decreasing, stroke: decreasing });
      this.markDataDirty();
    }
  }
  /**
   * @ignore
   */
  prepareData() {
    if (this.series) {
      this.set("field", "hl/2");
      const dataItems = this.get("stockSeries").dataItems;
      if (dataItems.length > 0) {
        const data = [];
        const firstDataItem = dataItems[0];
        let prevOpen = firstDataItem.get("openValueY", 0);
        let prevClose = firstDataItem.get("valueY", 0);
        each(dataItems, (dataItem) => {
          const open = dataItem.get("openValueY");
          const close = dataItem.get("valueY");
          const high = dataItem.get("highValueY");
          const low = dataItem.get("lowValueY");
          if (isNumber(open) && isNumber(close) && isNumber(high) && isNumber(low)) {
            const newClose = (open + close + high + low) / 4;
            const newOpen = (prevOpen + prevClose) / 2;
            const newHigh = Math.max(high, newOpen, newClose);
            const newLow = Math.min(low, newOpen, newClose);
            data.push({
              valueX: dataItem.get("valueX"),
              value_o: newOpen,
              value_y: newClose,
              value_h: newHigh,
              value_l: newLow
            });
            prevOpen = newOpen;
            prevClose = newClose;
          }
        });
        this.series.data.setAll(data);
      }
    }
  }
};
Object.defineProperty(HeikinAshi, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HeikinAshi"
});
Object.defineProperty(HeikinAshi, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChartIndicator.classNames.concat([HeikinAshi.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/DrawingSeries.js
var DrawingSeries = class extends LineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_clickDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_moveDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_upDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_drawingEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_clickPointerPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_movePointerPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isDrawing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isPointerDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_drawingId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_dragStartPX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dragStartY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dvpX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_dvY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_isHover", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_erasingEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_movePoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { x: 0, y: 0 }
    });
    Object.defineProperty(this, "selectorContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this.root, {}))
    });
    Object.defineProperty(this, "_selected", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_isSelecting", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_pIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "grips", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Container._new(this._root, {
        themeTags: ["grip"],
        setStateOnChildren: true,
        draggable: true
      }, [this.grips.template])))
    });
    Object.defineProperty(this, "circles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Circle._new(this._root, {}, [this.circles.template])))
    });
    Object.defineProperty(this, "outerCircles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Circle._new(this._root, {
        themeTags: ["outline"]
      }, [this.outerCircles.template])))
    });
    Object.defineProperty(this, "selectors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Rectangle._new(this._root, {
        themeTags: ["selector"]
      }, [this.selectors.template])))
    });
  }
  _afterNew() {
    this.addTag("drawing");
    this.setPrivate("allowChangeSnap", true);
    this.set("exactLocationX", true);
    if (this._tag) {
      this.addTag(this._tag);
    }
    this.set("valueYField", "valueY");
    this.set("valueXField", "valueX");
    super._afterNew();
    this.set("connect", false);
    this.set("autoGapCount", Infinity);
    this.set("ignoreMinMax", true);
    this.set("groupDataDisabled", true);
    const strokesTemplate = this.strokes.template;
    strokesTemplate.set("templateField", "stroke");
    const fillsTemplate = this.fills.template;
    fillsTemplate.setAll({ templateField: "fill" });
    fillsTemplate.events.on("pointerdown", (e) => {
      const index = this._getIndex(e.target);
      if (this._erasingEnabled) {
        this._disposeIndex(index);
      } else {
        const originalEvent = e.originalEvent;
        if (!originalEvent.button && this._drawingEnabled) {
          this._handlePointerDown(e);
        }
      }
      const stroke = this.strokes.getIndex(this._getStrokeIndex(index));
      if (stroke) {
        stroke.dragStart(e);
      }
    });
    fillsTemplate.events.on("dragstart", (e) => {
      this.startDragItem(e, this._getIndex(e.target));
    });
    fillsTemplate.events.on("click", (e) => {
      const index = this._getIndex(e.target);
      const originalEvent = e.originalEvent;
      if (!this._isDrawing) {
        this._selectDrawing(index, originalEvent.ctrlKey);
      }
    });
    fillsTemplate.events.on("dragstop", (e) => {
      const index = this._getIndex(e.target);
      this.stopDragItem(e, index);
    });
    fillsTemplate.events.on("pointerover", (e) => {
      const index = this._getIndex(e.target);
      const stroke = this.strokes.getIndex(this._getStrokeIndex(index));
      if (stroke) {
        stroke.hover();
      }
      this._isHover = true;
      this._showSegmentBullets(index);
    });
    fillsTemplate.events.on("pointerout", () => {
      this._isHover = false;
    });
    strokesTemplate.events.on("pointerdown", (e) => {
      const index = this._getIndex(e.target);
      if (this._erasingEnabled) {
        this._disposeIndex(index);
      }
    });
    strokesTemplate.events.on("click", (e) => {
      const index = this._getIndex(e.target);
      const originalEvent = e.originalEvent;
      this._selectDrawing(index, originalEvent.ctrlKey);
    });
    strokesTemplate.events.on("pointerover", (e) => {
      this._isHover = true;
      this._showSegmentBullets(this._getIndex(e.target));
    });
    strokesTemplate.events.on("pointerout", () => {
      this._isHover = false;
    });
    strokesTemplate.events.on("dragstop", (e) => {
      this.stopDragItem(e, this._getIndex(e.target));
    });
    strokesTemplate.events.on("dragstart", (e) => {
      this.startDragItem(e, this._getIndex(e.target));
    });
    this.bulletsContainer.states.create("hidden", { visible: true, opacity: 0 });
    this.bullets.push((_root, _series, dataItem) => {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const di = this._di[index]["e"];
      let color2 = this.get("strokeColor", this.get("stroke"));
      if (di) {
        const dc = di.dataContext;
        if (dc) {
          const strokeTemplate = dc.stroke;
          if (strokeTemplate) {
            color2 = strokeTemplate.get("stroke");
          }
        }
      }
      const container = this.grips.make();
      container.setRaw("userData", "grip");
      this.grips.push(container);
      const circle = container.children.push(this.circles.make());
      this.circles.push(circle);
      circle.set("stroke", color2);
      const outerCircle = container.children.push(this.outerCircles.make());
      this.outerCircles.push(outerCircle);
      outerCircle.set("stroke", color2);
      container.events.on("pointerover", (event) => {
        const dataItem2 = event.target.dataItem;
        if (dataItem2) {
          const dataContext2 = dataItem2.dataContext;
          this._showSegmentBullets(dataContext2.index);
        }
      });
      this._addBulletInteraction(container);
      this._tweakBullet(container, dataItem);
      return Bullet.new(this._root, {
        locationX: void 0,
        sprite: container
      });
    });
    this.events.on("pointerover", () => {
      this._handlePointerOver();
    });
    this.events.on("pointerout", () => {
      this._handlePointerOut();
    });
    this._getStockChart()._markDirtyPrivateKey("drawingSelectionEnabled");
  }
  /**
   * Disposes a drawing with the specified index.
   *
   * @param  index  Index
   * @since 5.7.7
   */
  disposeIndex(index) {
    this._disposeIndex(index);
  }
  /**
   * Returns index of a drawing with the specific ID, or `null` if not found.
   *
   * @param   id  ID
   * @return      Index
   * @since 5.8.4
   */
  getIndex(id) {
    let index = null;
    eachContinue(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext.drawingId == id) {
        index = dataContext.index;
        return false;
      } else {
        return true;
      }
    });
    return index;
  }
  _disposeIndex(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      let drawingId;
      let index2;
      each2(dataItems, (_key, dataItem) => {
        const dataContext = dataItem.dataContext;
        this.data.removeValue(dataContext);
        if (dataContext) {
          if (dataContext.drawingId) {
            drawingId = dataContext.drawingId;
          }
          if (dataContext.index) {
            index2 = dataContext.index;
          }
        }
      });
      for (let i = this.dataItems.length - 1; i >= 0; i--) {
        const dataItem = this.dataItems[i];
        const dataContext = dataItem.dataContext;
        if (dataContext.index == index2) {
          this.data.removeValue(dataContext);
          this.disposeDataItem(dataItem);
        }
      }
      this._pIndex = 0;
      delete this._di[index2];
      this._dispatchStockEvent("drawingremoved", drawingId, index2);
    }
    const selector = this._getSprite(this.selectors, index);
    if (selector) {
      this.selectors.removeValue(selector);
    }
    remove(this._selected, index);
  }
  _afterDataChange() {
    each(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const corner = dataContext.corner;
      if (index != void 0) {
        if (this._di[index] == void 0) {
          this._di[index] = {};
        }
        this._createElements(index, dataItem);
        this._di[index][corner] = dataItem;
        this._index = index;
      }
    });
  }
  _createElements(_index, _dataItem) {
  }
  _clearDirty() {
    super._clearDirty();
    this._isSelecting = false;
  }
  clearDrawings() {
    each(this._di, (_dataItems, index) => {
      this._disposeIndex(index);
    });
    this.data.setAll([]);
    this._index = 0;
    this._selected = [];
  }
  _getIndex(sprite) {
    const userData = sprite.get("userData");
    if (userData && userData.length > 0) {
      const dataItem = this.dataItems[userData[0]];
      if (dataItem) {
        const dataContext = dataItem.dataContext;
        if (dataContext) {
          return dataContext.index;
        }
      }
    }
    return 0;
  }
  _getStrokeIndex(index) {
    let i = 0;
    let c = index;
    this.strokes.each((stroke) => {
      const strokeIndex = this._getIndex(stroke);
      if (strokeIndex == index) {
        c = i;
      }
      i++;
    });
    return c;
  }
  setInteractive(value) {
    this.strokes.template.set("forceInactive", !value);
    this.fills.template.set("forceInactive", !value);
  }
  enableDrawingSelection(value) {
    this._erasingEnabled = false;
    this._root.events.once("frameended", () => {
      this.setInteractive(value);
    });
  }
  _showSegmentBullets(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      each2(dataItems, (_key, dataItem) => {
        const bullets = dataItem.bullets;
        if (bullets) {
          each(bullets, (bullet) => {
            const sprite = bullet.get("sprite");
            if (sprite) {
              sprite.show(0);
            }
          });
        }
      });
    }
  }
  _hideResizer(sprite) {
    const spriteResizer = this._getStockChart().spriteResizer;
    if (spriteResizer) {
      const resizerSprite = spriteResizer.get("sprite");
      if (resizerSprite) {
        if (!sprite || sprite.dataItem != resizerSprite.dataItem) {
          spriteResizer.set("sprite", void 0);
        }
      }
    }
  }
  /**
   * @ignore
   */
  startDragItem(event, index) {
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart._dragStartDrawing(event);
    }
    if (this._selected.indexOf(index) == -1) {
      this.unselectAllDrawings();
    }
    this._handleFillDragStart(event, index);
  }
  /**
   * @ignore
   */
  stopDragItem(event, index) {
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart._dragStopDrawing(event);
    }
    this._handleFillDragStop(event, index);
  }
  _handleFillDragStart(event, index) {
    this._hideResizer(event.target);
    this._isPointerDown = false;
    const chart = this.chart;
    if (chart) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      this._dragStartPX = xAxis.coordinateToPosition(point.x);
      const valueXns = xAxis.positionToValue(this._dragStartPX);
      this._dragStartY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueXns);
      const dataItems = this._di[index];
      this._dvpX[index] = {};
      this._dvY[index] = {};
      if (dataItems) {
        each2(dataItems, (key, dataItem) => {
          this._dvpX[index][key] = xAxis.valueToPosition(dataItem.get("valueX", 0));
          this._dvY[index][key] = dataItem.get("valueY");
        });
      }
    }
  }
  _dragStart(event) {
    each(this._selected, (index) => {
      this._handleFillDragStart(event, index);
    });
  }
  _dragStop(event) {
    each(this._selected, (index) => {
      this._handleFillDragStop(event, index);
    });
  }
  _handleFillDragStop(event, index) {
    this._isPointerDown = false;
    const chart = this.chart;
    if (chart) {
      const point = chart.plotContainer.toLocal(event.point);
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const posX = xAxis.coordinateToPosition(point.x);
      const valueXns = xAxis.positionToValue(xAxis.coordinateToPosition(point.x));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueXns);
      const dpx = posX - this._dragStartPX;
      const dy = valueY - this._dragStartY;
      event.target.setAll({
        x: 0,
        y: 0
      });
      const dataItems = this._di[index];
      if (dataItems) {
        each2(dataItems, (key, dataItem) => {
          const dvpx = this._dvpX[index][key];
          const dvy = this._dvY[index][key];
          if (isNumber(dvpx) && isNumber(dvy)) {
            const vpx = dvpx + dpx;
            const vxns = xAxis.positionToValue(vpx);
            const vx = this._getXValue(vxns);
            let vy = dvy + dy;
            const yAxis2 = this.get("yAxis");
            const roundTo = yAxis2.getPrivate("stepDecimalPlaces", 0) + 1;
            vy = round(vy, roundTo);
            vy = this._getYValue(vy, vxns, true);
            this._setContext(dataItem, "valueX", vx);
            this._setContext(dataItem, "valueY", vy, true);
            this._setXLocation(dataItem, vx);
            this._positionBullets(dataItem);
          }
        });
      }
    }
    const stroke = this.strokes.getIndex(this._getStrokeIndex(index));
    if (stroke) {
      stroke.dragStop(event);
    }
    this.markDirty();
    this._updateSegment(index);
  }
  _updateSegment(_index) {
    this._updateElements();
  }
  _updateChildren() {
    this._updateElements();
    if (this.isDirty("strokeColor") || this.isDirty("strokeOpacity") || this.isDirty("strokeDasharray") || this.isDirty("strokeWidth")) {
      each(this._selected, (i) => {
        let settings = {
          stroke: this.get("strokeColor"),
          strokeOpacity: this.get("strokeOpacity"),
          strokeDasharray: this.get("strokeDasharray"),
          strokeWidth: this.get("strokeWidth")
        };
        const stroke = this.strokes.getIndex(this._getStrokeIndex(i));
        if (stroke) {
          let strokeTemplate;
          each(this.dataItems, (dataItem) => {
            const dataContext = dataItem.dataContext;
            if (dataContext.index == i) {
              if (dataContext.stroke) {
                strokeTemplate = dataContext.stroke;
              }
            }
          });
          const defaultState = stroke.states.lookup("default");
          each2(settings, (key, value) => {
            stroke.set(key, value);
            defaultState.set(key, value);
            if (strokeTemplate) {
              strokeTemplate.set(key, value);
            }
          });
        }
        this.circles.each((circle) => {
          const dataItem = circle.dataItem;
          if (dataItem) {
            const dataContext = dataItem.dataContext;
            if (dataContext) {
              if (dataContext.index == i) {
                circle.set("stroke", settings.stroke);
                circle.states.lookup("default").set("stroke", settings.stroke);
              }
            }
          }
        });
        this.outerCircles.each((circle) => {
          const dataItem = circle.dataItem;
          if (dataItem) {
            const dataContext = dataItem.dataContext;
            if (dataContext) {
              if (dataContext.index == i) {
                circle.set("stroke", settings.stroke);
                circle.states.lookup("default").set("stroke", settings.stroke);
              }
            }
          }
        });
        this._applySettings(i, settings);
      });
    }
    if (this.isDirty("fillColor") || this.isDirty("fillOpacity")) {
      each(this._selected, (i) => {
        const fill = this.fills.getIndex(this._getStrokeIndex(i));
        let settings = {
          fill: this.get("fillColor"),
          fillOpacity: this.get("fillOpacity")
        };
        if (fill) {
          let fillTemplate;
          each(this.dataItems, (dataItem) => {
            const dataContext = dataItem.dataContext;
            if (dataContext.index == i) {
              if (dataContext.fill) {
                fillTemplate = dataContext.fill;
              }
            }
          });
          const defaultState = fill.states.lookup("default");
          each2(settings, (key, value) => {
            fill.set(key, value);
            defaultState.set(key, value);
            if (fillTemplate) {
              fillTemplate.set(key, value);
            }
          });
        }
        this._applySettings(i, settings);
      });
    }
    if (this._valuesDirty) {
      if (!this._baseSeriesDirty) {
        this.markDirtyDrawings();
      }
    }
    super._updateChildren();
    this._updateSelectors();
  }
  /**
   * @ignore
   */
  isDrawing(value) {
    this._isDrawing = value;
    const stockChart = this._getStockChart();
    if (stockChart) {
      if (value) {
        stockChart.set("drawingSelectionEnabled", false);
      }
    }
  }
  _applySettings(_index, _settings) {
    this.markDirtyDrawings();
  }
  _updateElements() {
  }
  markDirtyDrawings() {
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart.markDirtyDrawings();
    }
  }
  _getFillTemplate() {
    const fillTemplate = {};
    const fillColor = this.get("fillColor");
    if (fillColor != null) {
      fillTemplate.fill = fillColor;
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      fillTemplate.fillOpacity = fillOpacity;
    }
    return Template.new(fillTemplate);
  }
  _getStrokeTemplate() {
    const strokeTemplate = {};
    const strokeColor = this.get("strokeColor");
    if (strokeColor != null) {
      strokeTemplate.stroke = strokeColor;
    }
    const strokeOpacity = this.get("strokeOpacity");
    if (strokeOpacity != null) {
      strokeTemplate.strokeOpacity = strokeOpacity;
    }
    const strokeDasharray = this.get("strokeDasharray");
    if (strokeDasharray != null) {
      strokeTemplate.strokeDasharray = strokeDasharray;
    }
    const strokeWidth = this.get("strokeWidth");
    if (strokeWidth != null) {
      strokeTemplate.strokeWidth = strokeWidth;
    }
    return Template.new(strokeTemplate);
  }
  _tweakBullet(_container, _dataItem) {
  }
  _dispatchStockEvent(type, drawingId, index) {
    const stockChart = this._getStockChart();
    if (stockChart && stockChart.events.isEnabled(type)) {
      stockChart.events.dispatch(type, { drawingId, series: this, target: stockChart, index });
    }
  }
  _addBulletInteraction(sprite) {
    sprite.events.on("dragged", (e) => {
      this._handleBulletDragged(e);
      this._isDragging = true;
    });
    sprite.events.on("dragstart", (e) => {
      this._handleBulletDragStart(e);
    });
    sprite.events.on("dragstop", (e) => {
      this._handleBulletDragStop(e);
      this.setTimeout(() => {
        this._isDragging = false;
      }, 100);
    });
    sprite.events.on("click", (e) => {
      const dataItem = e.target.dataItem;
      if (dataItem) {
        const dataContext = dataItem.dataContext;
        if (this._erasingEnabled) {
          if (dataContext) {
            this._disposeIndex(dataContext.index);
          }
        } else {
          if (!this._isDrawing) {
            this._selectDrawing(dataContext.index, e.originalEvent.ctrlKey);
          } else {
            this._handlePointerClick(e);
          }
        }
      }
    });
  }
  _increaseIndex() {
    this._index++;
    this._drawingId = this._generateId();
  }
  _generateId() {
    return "" + (/* @__PURE__ */ new Date()).getTime() + Math.round(Math.random() * 1e4 + 1e4);
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      const chart = this.chart;
      if (chart) {
        this._clickPointerPoint = chart.plotContainer.toLocal(event.point);
      }
    }
  }
  // need this in order bullets not to be placed to the charts bullets container
  _placeBulletsContainer() {
    this.children.moveValue(this.bulletsContainer);
    this.enableDrawing();
    this.disableDrawing();
  }
  _handleBulletDragged(event) {
    const dataItem = event.target.dataItem;
    const chart = this.chart;
    if (chart) {
      const target = event.target;
      const point = { x: target.x(), y: target.y() };
      this._handleBulletDraggedReal(dataItem, point);
    }
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      this._updateSegment(index);
    }
  }
  _handleBulletDraggedReal(dataItem, point) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const valueXns = xAxis.positionToValue(xAxis.coordinateToPosition(point.x));
    const valueX = this._getXValue(valueXns);
    const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueXns);
    this._setContext(dataItem, "valueX", valueX);
    this._setContext(dataItem, "valueY", valueY, true);
    this._setXLocation(dataItem, valueX);
    this._positionBullets(dataItem);
  }
  _handleBulletDragStart(_event) {
    this._hideResizer();
    this.unselectAllDrawings();
  }
  _handleBulletDragStop(_event) {
  }
  _handlePointerOver() {
  }
  _handlePointerOut() {
  }
  enableDrawing() {
    const chart = this.chart;
    this._erasingEnabled = false;
    this._drawingEnabled = true;
    if (chart) {
      if (!this._clickDp) {
        this._clickDp = chart.plotContainer.events.on("click", (e) => {
          const originalEvent = e.originalEvent;
          if (!originalEvent.button && !this._erasingEnabled) {
            this._handlePointerClick(e);
          }
        });
      }
      if (!this._downDp) {
        this._downDp = chart.plotContainer.events.on("pointerdown", (e) => {
          const originalEvent = e.originalEvent;
          if (!originalEvent.button && !this._erasingEnabled) {
            this._handlePointerDown(e);
          }
        });
      }
      if (!this._upDp) {
        this._upDp = chart.plotContainer.events.on("globalpointerup", (e) => {
          const originalEvent = e.originalEvent;
          if (!originalEvent.button && !this._erasingEnabled) {
            this._handlePointerUp(e);
          }
        });
      }
      if (!this._moveDp) {
        this._moveDp = chart.plotContainer.events.on("globalpointermove", (e) => {
          if (!this._erasingEnabled) {
            if (e.point.x != this._movePoint.x || e.point.y != this._movePoint.y) {
              this._handlePointerMove(e);
            }
          }
        });
      }
    }
  }
  enableErasing() {
    this._erasingEnabled = true;
    this.setInteractive(true);
  }
  disableErasing() {
    this._erasingEnabled = false;
    if (!this._getStockChart().get("drawingSelectionEnabled")) {
      this.setInteractive(false);
    }
  }
  disableDrawing() {
    this._erasingEnabled = false;
    this._drawingEnabled = false;
    this._hideResizer();
    this.isDrawing(false);
    if (this._clickDp) {
      this._clickDp.dispose();
      this._clickDp = void 0;
    }
    if (this._downDp) {
      this._downDp.dispose();
      this._downDp = void 0;
    }
    if (this._upDp) {
      this._upDp.dispose();
      this._upDp = void 0;
    }
  }
  toggleDrawing(enabled) {
    var _a;
    if (this._getStockChart().get("hideDrawingGrips")) {
      (_a = this.circles.getIndex(0)) === null || _a === void 0 ? void 0 : _a.markDirty();
      this.root.events.once("frameended", () => {
        this.circles.each((circle) => {
          circle.set("forceHidden", !enabled);
        });
        this.grips.each((grip) => {
          grip.set("forceInactive", !enabled);
        });
      });
    }
  }
  _handlePointerMove(event) {
    const chart = this.chart;
    if (chart) {
      this._movePointerPoint = chart.plotContainer.toLocal(event.point);
    }
  }
  _handlePointerDown(_event) {
    this._isPointerDown = true;
  }
  _handlePointerUp(_event) {
    this._isPointerDown = false;
  }
  startIndex() {
    return 0;
  }
  endIndex() {
    return this.dataItems.length;
  }
  _setXLocation(dataItem, value) {
    if (!this.get("snapToData")) {
      this._setXLocationReal(dataItem, value);
    } else {
      dataItem.set("locationX", void 0);
    }
  }
  _setXLocationReal(dataItem, value) {
    const xAxis = this.get("xAxis");
    const baseInterval = xAxis.getPrivate("baseInterval");
    const root = this._root;
    const firstDayOfWeek = root.locale.firstDayOfWeek;
    const open = round2(new Date(value), baseInterval.timeUnit, baseInterval.count, firstDayOfWeek, root.utc, void 0, root.timezone).getTime();
    let close = open + getDuration(baseInterval.timeUnit, baseInterval.count * 1.05);
    close = round2(new Date(close), baseInterval.timeUnit, baseInterval.count, firstDayOfWeek, root.utc, void 0, root.timezone).getTime();
    const locationX = (value - open) / (close - open);
    dataItem.set("locationX", locationX);
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      this.markDirtyValues();
      const dataItems = this._di[index];
      if (dataItems) {
        each2(dataItems, (_key, dataItem2) => {
          super.disposeDataItem(dataItem2);
        });
      }
      delete this._di[index];
    }
  }
  _getYValue(value, valueX, doNotConvert) {
    const series = this.get("series");
    if (this.get("snapToData") && series) {
      const field = this.get("field", "value") + "Y";
      return this._snap(valueX, value, field, series);
    } else {
      if (!doNotConvert && this.get("valueYShow") == "valueYChangeSelectionPercent") {
        const baseValueSeries = this.getPrivate("baseValueSeries");
        if (baseValueSeries) {
          const baseValue = baseValueSeries._getBase("valueY");
          value = value / 100 * baseValue + baseValue;
        }
      }
      const yAxis = this.get("yAxis");
      const roundTo = yAxis.getPrivate("stepDecimalPlaces", 0) + 1;
      return round(value, roundTo);
    }
  }
  _getXValue(value) {
    const series = this.get("series");
    if (this.get("snapToData") && series) {
      const xAxis = this.get("xAxis");
      const min = xAxis.getPrivate("min", 0) + 1;
      const max = xAxis.getPrivate("max", 1) - 1;
      value = fitToRange(value, min, max);
      value = this._snap(value, value, "valueX", series) + 1;
      return value;
    } else {
      return Math.round(value);
    }
  }
  _setContext(dataItem, key, value, working) {
    dataItem.set(key, value);
    if (working) {
      dataItem.set(key + "Working", value);
    }
    const dataContext = dataItem.dataContext;
    const field = this.get(key + "Field");
    if (field) {
      dataContext[field] = value;
    }
  }
  _snap(value, realValue, key, series) {
    const xAxis = this.get("xAxis");
    const dataItem = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(value)), 0.5, true);
    if (dataItem) {
      return dataItem.get(key);
    }
    return realValue;
  }
  _getStockChart() {
    return this.get("series").chart.getPrivate("stockChart");
  }
  _getSprite(sprites, index) {
    for (let i = 0, len = sprites.length; i < len; i++) {
      let sprite = sprites.getIndex(i);
      if (sprite && sprite.get("userData") == index) {
        return sprite;
      }
    }
  }
  _selectDrawing(index, keepSelection, force) {
    if (this._getStockChart().getPrivate("drawingSelectionEnabled") || force) {
      this._isSelecting = true;
      if (this._selected.indexOf(index) != -1) {
        if (!keepSelection) {
          this.unselectAllDrawings();
        } else {
          this._unselectDrawing(index);
        }
      } else {
        if (!keepSelection) {
          this._hideResizer();
          this.unselectAllDrawings();
        }
        let selector = this._getSprite(this.selectors, index);
        if (!selector) {
          selector = this.selectorContainer.children.push(this.selectors.make());
          this.selectors.push(selector);
        }
        selector.show(0);
        selector.set("userData", index);
        move(this._selected, index);
        this._dispatchStockEvent("drawingselected", this.indexToDrawingId(index), index);
        this.markDirty();
      }
    }
  }
  _unselectDrawing(index) {
    const selector = this._getSprite(this.selectors, index);
    if (selector) {
      selector.hide(0);
      remove(this._selected, index);
      this._dispatchStockEvent("drawingunselected", this.indexToDrawingId(index), index);
    }
  }
  _updateSelectors() {
    this.selectors.each((selector) => {
      const index = selector.get("userData");
      this._updateSelector(selector, index);
    });
  }
  _updateSelector(selector, index) {
    let l;
    let r;
    let t;
    let b;
    const selectorPadding = this.get("selectorPadding", 5);
    each(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        if (dataContext.index == index) {
          let point = dataItem.get("point");
          if (point) {
            if (l == null) {
              l = point.x;
            }
            l = Math.min(l, point.x);
            if (r == null) {
              r = point.x;
            }
            r = Math.max(r, point.x);
            if (t == null) {
              t = point.y;
            }
            t = Math.min(t, point.y);
            if (b == null) {
              b = point.y;
            }
            b = Math.max(b, point.y);
          }
        }
      }
    });
    if (r != null && l != null && t != null && b != null) {
      selector.setAll({
        width: r - l + selectorPadding * 2,
        height: b - t + selectorPadding * 2,
        x: l - selectorPadding,
        y: t - selectorPadding
      });
    }
  }
  /**
   *
   * @param index returns drawingId
   * @returns
   */
  indexToDrawingId(index) {
    let id;
    eachContinue(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext.index == index) {
        id = dataContext.drawingId;
        return false;
      }
      return true;
    });
    return id;
  }
  _getContext(index) {
    let context;
    eachContinue(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext.index == index && dataContext.sprite) {
        context = dataContext;
        return false;
      }
      return true;
    });
    return context;
  }
  getContext(id) {
    const index = this.getIndex(id);
    if (index != null) {
      return this._getContext(index);
    }
  }
  /**
   * Unselects all currently selected drawings on this series.
   *
   * @since 5.9.0
   */
  unselectAllDrawings() {
    const chart = this._getStockChart();
    if (chart) {
      return chart.unselectDrawings();
    }
    return 0;
  }
  /**
   * Unselects all currently selected drawings of this series.
   *
   * @since 5.9.0
   */
  unselectDrawings() {
    let count = 0;
    for (let i = this._selected.length - 1; i >= 0; i--) {
      this._unselectDrawing(this._selected[i]);
      count++;
    }
    return count;
  }
  /**
   * Selects series' drawing by its ID.
   *
   * @param  id             Drawing ID
   * @param  keepSelection  Keep existing selections
   * @since 5.9.0
   */
  selectDrawing(id, keepSelection) {
    const index = this.getIndex(id);
    if (index != null) {
      this._selectDrawing(index, keepSelection);
    }
  }
  /**
   * Unselects series' drawing by its ID.
   *
   * @param  id  Drawing ID
   * @since 5.9.0
   */
  unselectDrawing(id) {
    const index = this.getIndex(id);
    if (index != null) {
      this._unselectDrawing(index);
    }
  }
  /**
   * Deletes all currently selected drawings on this series.
   *
   * @since 5.9.0
   */
  deleteSelected() {
    for (let i = this._selected.length - 1; i >= 0; i--) {
      this.disposeIndex(this._selected[i]);
    }
  }
  /**
   * Deletes a series' drawing by ids ID.
   *
   * @param  id  Drawing ID
   * @since 5.9.0
   */
  deleteDrawing(id) {
    const index = this.getIndex(id);
    if (index != null) {
      this.disposeIndex(index);
    }
  }
  /**
   * Cancels current drawing
   *
   * @since 5.9.0
   */
  cancelDrawing() {
    if (this._isDrawing) {
      this._disposeIndex(this._index);
    }
    this.isDrawing(false);
  }
};
Object.defineProperty(DrawingSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DrawingSeries"
});
Object.defineProperty(DrawingSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([DrawingSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/PolylineSeries.js
var PolylineSeries = class extends DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "polyline"
    });
    Object.defineProperty(this, "_drawingLine", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.mainContainer.children.push(Line.new(this._root, { forceInactive: true }))
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    this.strokes.template.setAll({
      fill: color(16777215),
      fillOpacity: 0
    });
    if (this.isDirty("fillShape")) {
      if (this.get("fillShape")) {
        this.fills.template.setAll({
          visible: true,
          forceHidden: false,
          fillOpacity: this.get("fillOpacity"),
          fill: this.get("fillColor")
        });
      } else {
        this.fills.template.setAll({
          visible: false
        });
      }
    }
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      if (event.target.get("userData") == "grip") {
        this._endPolyline(event.target.dataItem);
      } else {
        if (!this._isDragging) {
          this.isDrawing(true);
          this._hideResizer(event.target);
          if (this.unselectAllDrawings() == 0) {
            if (this._index == 0) {
              this._index = 1;
            }
            if (this._pIndex == 0) {
              this._increaseIndex();
              const context = { stroke: this._getStrokeTemplate(), fill: this._getFillTemplate(), index: this._index, corner: "e", drawingId: this._drawingId };
              this._setContextSprite(context);
              this.data.push(context);
            }
            this._drawingLine.show();
            this._addPoint(event);
            if (this.get("fillShape")) {
              if (this._pIndex == 1) {
                this._addPoint(event, true);
              } else if (this._pIndex > 1) {
                this.data.moveValue(this.data.getIndex(this.data.length - 1), this.data.length - 2);
              }
            }
            if (this._pIndex - 1 == this.get("pointCount", 1e3)) {
              this._endPolyline();
              return;
            }
          }
        }
        this._drawingLine.set("stroke", this.get("strokeColor"));
      }
    }
  }
  _setContextSprite(context) {
    context.sprite = this.mainContainer;
  }
  disableDrawing() {
    super.disableDrawing();
    this._endPolyline();
  }
  clearDrawings() {
    super.clearDrawings();
    this._drawingLine.hide();
  }
  _addPoint(event, closing) {
    const chart = this.chart;
    if (chart) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueX);
      const dataItems = this.dataItems;
      const len = dataItems.length;
      this.data.push({ valueY, valueX, index: this._index, corner: this._pIndex, drawingId: this._drawingId, closing });
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
      const dataItem = dataItems[len];
      this._positionBullets(dataItem);
      this._setXLocation(dataItem, valueX);
      this._pIndex++;
    }
  }
  _endPolyline(dataItem) {
    if (!dataItem) {
      dataItem = this.dataItems[this.dataItems.length - 1];
    }
    if (dataItem) {
      this._pIndex = 0;
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      if (dataContext.corner == 0) {
        this.data.push({ valueX: dataItem.get("valueX"), valueY: dataItem.get("valueY"), index, corner: "c", closing: true, drawingId: this._drawingId });
        const dataItems = this.dataItems;
        const len = dataItems.length - 1;
        this.setPrivate("startIndex", 0);
        this.setPrivate("endIndex", len);
        dataItem = dataItems[len];
        this._positionBullets(dataItem);
        this._setXLocation(dataItem, dataItem.get("valueX", 0));
      }
      this._drawingLine.hide();
      this.isDrawing(false);
      this._dispatchAdded();
    }
  }
  _dispatchAdded() {
    this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      if (movePoint) {
        const dataItems = this.dataItems;
        const len = dataItems.length;
        if (len > 0) {
          const lastItem = dataItems[len - 1];
          const points = [];
          const point = lastItem.get("point");
          if (point) {
            points.push(point);
          }
          points.push(movePoint);
          if (this.get("fillShape")) {
            const bLastItem = dataItems[len - 2];
            if (bLastItem) {
              const bPoint = bLastItem.get("point");
              if (bPoint) {
                points.push(bPoint);
              }
            }
          }
          if (points.length > 1) {
            this._drawingLine.set("points", points);
          }
        }
      }
    }
  }
  _updateElements() {
    each(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        const closing = dataContext.closing;
        if (closing) {
          if (this._di[dataContext.index]) {
            const closingDataItem = this._di[dataContext.index][0];
            const valueX = closingDataItem.get("valueX", 0);
            const valueY = closingDataItem.get("valueY");
            this._setContext(dataItem, "valueX", valueX);
            this._setContext(dataItem, "valueY", valueY, true);
            this._setXLocation(dataItem, valueX);
            this._positionBullets(dataItem);
            const bullets = dataItem.bullets;
            if (bullets) {
              each(bullets, (bullet) => {
                const sprite = bullet.get("sprite");
                if (sprite) {
                  sprite.set("forceHidden", true);
                }
              });
            }
          }
        }
      }
    });
  }
  /**
   * Cancels current drawing
   *
   * @since 5.9.0
   */
  cancelDrawing() {
    super.cancelDrawing();
    this._drawingLine.hide(0);
  }
};
Object.defineProperty(PolylineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PolylineSeries"
});
Object.defineProperty(PolylineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DrawingSeries.classNames.concat([PolylineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/SimpleLineSeries.js
var SimpleLineSeries = class extends DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "line"
    });
    Object.defineProperty(this, "_updateExtension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "lines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Line._new(this._root, {}, [this.lines.template])))
    });
    Object.defineProperty(this, "hitLines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Line._new(this._root, {}, [this.hitLines.template])))
    });
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_lines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_hitLines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  /**
   * @ignore
   */
  makeLine() {
    const line = this.lines.make();
    this.mainContainer.children.push(line);
    this.lines.push(line);
    return line;
  }
  /**
   * @ignore
   */
  makeHitLine() {
    const line = this.hitLines.make();
    line.addTag("hit");
    this.mainContainer.children.push(line);
    this.hitLines.push(line);
    return line;
  }
  _afterNew() {
    super._afterNew();
    const lineTemplate = this.lines.template;
    lineTemplate.events.on("pointerover", (e) => {
      this._showSegmentBullets(e.target.get("userData"));
    });
    this.strokes.template.set("forceInactive", true);
    lineTemplate.events.on("pointerout", (e) => {
      const index = e.target.get("userData");
      const line = this._lines[index];
      if (line) {
        line.unhover();
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.unhover();
      }
    });
    const hitTemplate = this.hitLines.template;
    hitTemplate.events.on("pointerover", (e) => {
      const index = e.target.get("userData");
      this._showSegmentBullets(index);
      const line = this._lines[index];
      if (line) {
        line.hover();
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.hover();
      }
    });
    hitTemplate.events.on("click", (e) => {
      const index = e.target.get("userData");
      if (this._erasingEnabled) {
        this._disposeIndex(index);
      } else {
        this._selectDrawing(index, e.originalEvent.ctrlKey);
      }
    });
    hitTemplate.events.on("dragstart", (e) => {
      const index = e.target.get("userData");
      const line = this._lines[index];
      if (line) {
        line.dragStart(e);
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.dragStart(e);
      }
    });
    hitTemplate.events.on("dragstop", (e) => {
      const index = e.target.get("userData");
      this.markDirtyValues();
      e.target.setAll({ x: 0, y: 0 });
      const line = this._lines[index];
      if (line) {
        line.dragStop(e);
        line.setAll({ x: 0, y: 0 });
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.dragStop(e);
        stroke.setAll({ x: 0, y: 0 });
      }
    });
    hitTemplate.events.on("pointerout", (e) => {
      const index = e.target.get("userData");
      const line = this._lines[index];
      if (line) {
        line.unhover();
      }
      const strokeIndex = this._getStrokeIndex(index);
      const stroke = this.strokes.getIndex(strokeIndex);
      if (stroke) {
        stroke.unhover();
      }
    });
  }
  _updateElements() {
    const chart = this.chart;
    if (chart) {
      const s = Math.max(chart.plotContainer.width(), chart.plotContainer.height()) * 2;
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          if (diP1 && diP2) {
            const p1 = diP1.get("point");
            const p2 = diP2.get("point");
            if (p1 && p2) {
              const len = Math.max(Math.abs(s - p1.x), Math.abs(s - p2.x), Math.abs(s - p1.y), Math.abs(s - p2.y), Math.abs(p1.x), Math.abs(p2.x), Math.abs(p1.y), Math.abs(p2.y));
              let angle = getAngle(p2, p1);
              const p11 = { x: p1.x + len * cos(angle), y: p1.y + len * sin(angle) };
              const p22 = { x: p2.x - len * cos(angle), y: p2.y - len * sin(angle) };
              this._updateLine(i, p11, p22, p1, p2);
            }
          }
        }
      }
    }
  }
  _updateLine(index, p11, p22, p1, p2) {
    const line = this._lines[index];
    const hitLine = this._hitLines[index];
    let segments = [[[p11, p1]], [[p2, p22]]];
    let hitSegments = [[[p11, p22]]];
    line.set("segments", segments);
    hitLine.set("segments", hitSegments);
  }
  _handlePointerClickReal(event) {
    if (!this._isDragging && !this._isSelecting) {
      if (!this._isDrawing) {
        if (this.unselectAllDrawings() == 0) {
          this.isDrawing(true);
          this._increaseIndex();
          this._addPoints(event, this._index);
        }
        this._hideResizer(event.target);
      } else {
        this.isDrawing(false);
        this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
      }
    }
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      this._handlePointerClickReal(event);
    }
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    this._handlePointerMoveReal(event);
  }
  _handlePointerMoveReal(_event) {
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      const index = this._index;
      const dataItems = this._di[index];
      if (movePoint && dataItems) {
        const xAxis = this.get("xAxis");
        const yAxis = this.get("yAxis");
        const valueXns = xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x));
        const valueX = this._getXValue(valueXns);
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueXns);
        const diP1 = dataItems["p1"];
        const diP2 = dataItems["p2"];
        if (diP1 && diP2) {
          this._setContext(diP2, "valueX", valueX, true);
          this._setContext(diP2, "valueY", valueY, true);
          this._setXLocation(diP1, diP1.get("valueX", 0));
          this._setXLocation(diP2, valueX);
          this._updateSegment(index);
        }
      }
    }
  }
  _createElements(index) {
    if (!this._lines[index]) {
      const line = this.makeLine();
      this._lines[index] = line;
      const hitLine = this.makeHitLine();
      this._hitLines[index] = hitLine;
      const dataContext = this.dataItems[this.dataItems.length - 1].dataContext;
      dataContext.sprite = line;
      let showExtension = this.get("showExtension", true);
      let color2 = this.get("strokeColor", this.get("stroke"));
      const strokeTemplate = dataContext.stroke;
      if (strokeTemplate) {
        color2 = strokeTemplate.get("stroke");
      }
      if (dataContext) {
        showExtension = dataContext.showExtension;
      }
      line.setPrivate("visible", showExtension);
      const settings = { stroke: color2, userData: index };
      line.setAll(settings);
      hitLine.setAll(settings);
      this._updateSegment(index);
    }
  }
  _addTemplates(index) {
    this.data.push({ stroke: this._getStrokeTemplate(), fill: this._getFillTemplate(), index, showExtension: this.get("showExtension", true), corner: "e", drawingId: this._drawingId });
  }
  addPoints(point, index) {
    const chart = this.chart;
    this._addTemplates(index);
    point = chart.plotContainer.toLocal(point);
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const valueYns = xAxis.positionToValue(xAxis.coordinateToPosition(point.x));
    const valueX = this._getXValue(valueYns);
    const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueYns);
    this._addPointsReal(valueX, valueY, index);
  }
  _addPoints(event, index) {
    this.addPoints(event.point, index);
  }
  _addPointsReal(valueX, valueY, index) {
    this._addPoint(valueX, valueY, "p1", index);
    this._addPoint(valueX, valueY, "p2", index);
  }
  _addPoint(valueX, valueY, corner, index) {
    this.data.push({ valueY, valueX, corner, index, drawingId: this._drawingId });
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const line = this._lines[index];
      if (line) {
        this.lines.removeValue(line);
        delete this._lines[index];
        line.dispose();
      }
      const hitLine = this._hitLines[index];
      if (hitLine) {
        this.hitLines.removeValue(hitLine);
        delete this._hitLines[index];
        hitLine.dispose();
      }
    }
  }
  setInteractive(value) {
    super.setInteractive(value);
    this.hitLines.template.set("forceInactive", !value);
    this.lines.template.set("forceInactive", !value);
  }
  enableDrawingSelection(value) {
    super.enableDrawingSelection(value);
    this.hitLines.template.set("forceInactive", !value);
    this.lines.template.set("forceInactive", !value);
    this.strokes.template.set("forceInactive", true);
  }
  _applySettings(index, settings) {
    super._applySettings(index, settings);
    let context = this._getContext(index);
    if (context) {
      let line = context.sprite;
      if (line && settings && settings.stroke) {
        line.set("stroke", settings.stroke);
      }
    }
  }
  /**
   * Adds a line drawing.
   *
   * Supported tools: `"Horizontal Line"`, `"Horizontal Ray"`, `"Vertical Line"`.
   *
   * @param  point Point
   * @since 5.10.2
   */
  addLine(point) {
    this._increaseIndex();
    this.addPoints(point, this._index);
    this._updateSegment(this._index);
    this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
  }
};
Object.defineProperty(SimpleLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SimpleLineSeries"
});
Object.defineProperty(SimpleLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DrawingSeries.classNames.concat([SimpleLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/RectangleSeries.js
var RectangleSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "rectangle"
    });
  }
  _updateSegment(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && diP1 && diP2) {
      const field = this.get("field") + "Y";
      let y1 = diP1.get(field);
      let y2 = diP2.get(field);
      this._setContext(diP1, "valueY", y1, true);
      this._setContext(diP2, "valueY", y2, true);
      this._positionBullets(diP1);
      this._positionBullets(diP2);
    }
  }
  _setXLocation(dataItem, value) {
    if (!this.get("snapToData")) {
      this._setXLocationReal(dataItem, value);
    } else {
      dataItem.set("locationX", 0);
    }
  }
  _updateChildren() {
    super._updateChildren();
    const chart = this.chart;
    this.fills.clear();
    if (chart) {
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const di = this._di[i]["e"];
          const dataContext = di.dataContext;
          const fillGraphics = this.makeFill(this.fills);
          const index = this.dataItems.indexOf(diP1);
          for (let j = index; j >= 0; j--) {
            const dataContext2 = this.dataItems[j].dataContext;
            const template = dataContext2.fill;
            if (template) {
              fillGraphics.template = template;
            }
          }
          const userData = [this.dataItems.indexOf(diP1), this.dataItems.indexOf(diP2)];
          let fillColor = this.get("fillColor", this.get("fill"));
          const fillTemplate = dataContext.fill;
          if (fillTemplate) {
            fillColor = fillTemplate.get("fill");
          }
          const settings = { userData, fill: fillColor };
          fillGraphics.setAll(settings);
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          if (p1 && p2) {
            fillGraphics.set("draw", (display) => {
              display.moveTo(p1.x, p1.y);
              display.lineTo(p2.x, p1.y);
              display.lineTo(p2.x, p2.y);
              display.lineTo(p1.x, p2.y);
              display.lineTo(p1.x, p1.y);
            });
            const strokeGraphics = this.strokes.getIndex(this._getStrokeIndex(i));
            if (strokeGraphics) {
              strokeGraphics.set("draw", (display) => {
                display.moveTo(p1.x, p1.y);
                display.lineTo(p2.x, p1.y);
                display.lineTo(p2.x, p2.y);
                display.lineTo(p1.x, p2.y);
                display.lineTo(p1.x, p1.y);
              });
            }
            this._updateOthers(i, fillGraphics, p1, p2);
          }
        }
      }
    }
  }
  _updateOthers(_index, _fillGraphics, _p1, _p2) {
  }
  _drawFill() {
  }
  _updateLine() {
  }
};
Object.defineProperty(RectangleSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RectangleSeries"
});
Object.defineProperty(RectangleSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([RectangleSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/ParallelChannelSeries.js
var ParallelChannelSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_di", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "parallelchannel"
    });
    Object.defineProperty(this, "_firstClick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _addPointsReal(valueX, valueY, index) {
    this._addPoint(valueX, valueY, "p1", index);
    this._addPoint(valueX, valueY, "p2", index);
    this._addPoint(valueX, valueY, "p3", index);
    this._addPoint(valueX, valueY, "p4", index);
    this._addPoint(valueX, valueY, "m1", index);
    this._addPoint(valueX, valueY, "m2", index);
  }
  _handlePointerClickReal(event) {
    if (!this._isDragging) {
      if (!this._isDrawing) {
        if (!this._firstClick) {
          if (this.unselectDrawings() == 0) {
            this.isDrawing(true);
            this._hideResizer(event.target);
            this._increaseIndex();
            this._addPoints(event, this._index);
            this._firstClick = true;
          }
        }
      } else {
        if (!this._firstClick) {
          this.isDrawing(false);
          this._dispatchStockEvent("drawingadded", this._drawingId);
        }
        this._firstClick = false;
      }
    }
  }
  _handlePointerMoveReal(_event) {
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      if (movePoint) {
        const xAxis = this.get("xAxis");
        const yAxis = this.get("yAxis");
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueX);
        const index = this._index;
        const diP1 = this._di[index]["p1"];
        const diP2 = this._di[index]["p2"];
        const diP3 = this._di[index]["p3"];
        const diP4 = this._di[index]["p4"];
        const diM1 = this._di[index]["m1"];
        const diM2 = this._di[index]["m2"];
        if (diP1 && diP2) {
          if (this._firstClick) {
            this._setContext(diP2, "valueX", valueX);
            this._setContext(diP2, "valueY", valueY, true);
            this._setXLocation(diP1, diP1.get("valueX", 0));
            this._setXLocation(diP3, diP3.get("valueX", 0));
            this._setXLocation(diP2, valueX);
            this._setContext(diP4, "valueX", valueX);
            this._setContext(diP4, "valueY", valueY, true);
            this._setXLocation(diP4, valueX);
            this._setContext(diM1, "valueX", valueX);
            this._setContext(diM1, "valueY", valueY, true);
            this._setXLocation(diM1, valueX);
            this._setContext(diM2, "valueX", valueX);
            this._setContext(diM2, "valueY", valueY, true);
            this._setXLocation(diM2, valueX);
          } else {
            this._setContext(diP4, "valueY", valueY, true);
            this._setContext(diP3, "valueY", diP1.get("valueY", 0) + valueY - diP2.get("valueY", 0), true);
            this._updateMiddlePoints(index);
          }
          this._updateSegment(index);
        }
      }
    }
  }
  _updateMiddlePoints(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const diP3 = this._di[index]["p3"];
    const diP4 = this._di[index]["p4"];
    const diM1 = this._di[index]["m1"];
    const diM2 = this._di[index]["m2"];
    const valueX1 = diP1.get("valueX", 0);
    const valueX2 = diP2.get("valueX", 0);
    const valueX3 = diP3.get("valueX", 0);
    const valueX4 = diP4.get("valueX", 0);
    const valueY1 = diP1.get("valueY", 0);
    const valueY2 = diP2.get("valueY", 0);
    const valueY3 = diP3.get("valueY", 0);
    const valueY4 = diP4.get("valueY", 0);
    const xM1 = Math.round(valueX1 + (valueX2 - valueX1) / 2);
    this._setContext(diM1, "valueY", valueY1 + (valueY2 - valueY1) / 2, true);
    this._setContext(diM1, "valueX", xM1, true);
    this._setXLocation(diM1, xM1);
    const xM2 = valueX3 + (valueX4 - valueX3) / 2;
    this._setContext(diM2, "valueY", valueY3 + (valueY4 - valueY3) / 2, true);
    this._setContext(diM2, "valueX", xM2, true);
    this._setXLocation(diM2, xM2);
    if (diM1.bullets) {
      const mBullet = diM1.bullets[0].get("sprite");
      if (mBullet) {
        const point1 = diP1.get("point");
        const point2 = diP2.get("point");
        if (point1 && point2) {
          mBullet.set("x", point1.x + (point2.x - point1.x) / 2);
          mBullet.set("y", point1.y + (point2.y - point1.y) / 2);
        }
      }
    }
    if (diM2.bullets) {
      const mBullet = diM2.bullets[0].get("sprite");
      if (mBullet) {
        const point1 = diP3.get("point");
        const point2 = diP4.get("point");
        if (point1 && point2) {
          mBullet.set("x", point1.x + (point2.x - point1.x) / 2);
          mBullet.set("y", point1.y + (point2.y - point1.y) / 2);
        }
      }
    }
  }
  _updateChildren() {
    super._updateChildren();
    const chart = this.chart;
    this.fills.clear();
    if (chart) {
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const diP3 = this._di[i]["p3"];
          const diP4 = this._di[i]["p4"];
          const di = this._di[i]["e"];
          const dataContext = di.dataContext;
          const fillGraphics = this.makeFill(this.fills);
          const index = this.dataItems.indexOf(diP1);
          for (let j = index; j >= 0; j--) {
            const dataContext2 = this.dataItems[j].dataContext;
            const template = dataContext2.fill;
            if (template) {
              fillGraphics.template = template;
            }
          }
          const userData = [this.dataItems.indexOf(diP1), this.dataItems.indexOf(diP2)];
          let fillColor = this.get("fillColor", this.get("fill"));
          const fillTemplate = dataContext.fill;
          if (fillTemplate) {
            fillColor = fillTemplate.get("fill");
          }
          const settings = { userData, fill: fillColor };
          fillGraphics.setAll(settings);
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          const p3 = diP3.get("point");
          const p4 = diP4.get("point");
          if (p1 && p2 && p3 && p4) {
            fillGraphics.set("draw", (display) => {
              display.moveTo(p1.x, p1.y);
              display.lineTo(p2.x, p2.y);
              display.lineTo(p4.x, p4.y);
              display.lineTo(p3.x, p3.y);
              display.lineTo(p1.x, p1.y);
            });
            const strokeGraphics = this.strokes.getIndex(this._getStrokeIndex(i));
            if (strokeGraphics) {
              strokeGraphics.set("draw", (display) => {
                display.moveTo(p1.x, p1.y);
                display.lineTo(p2.x, p2.y);
                display.moveTo(p3.x, p3.y);
                display.lineTo(p4.x, p4.y);
              });
            }
            line.set("draw", (display) => {
              display.moveTo(p1.x, p1.y + (p3.y - p1.y) / 2);
              display.lineTo(p2.x, p2.y + (p4.y - p2.y) / 2);
            });
            this._updateOthers(i, fillGraphics, p1, p2);
            this._updateMiddlePoints(i);
          }
        }
      }
    }
  }
  _handleBulletDraggedReal(dataItem, point) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const dataContext = dataItem.dataContext;
    const index = dataContext.index;
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const diP3 = this._di[index]["p3"];
    const diP4 = this._di[index]["p4"];
    const diM1 = this._di[index]["m1"];
    const diM2 = this._di[index]["m2"];
    if (diP1 && diP2 && diP3 && diP4) {
      const dy = diP3.get("valueY", 0) - diP1.get("valueY", 0);
      const dy1 = diP2.get("valueY", 0) - diP1.get("valueY", 0);
      const dy2 = diP4.get("valueY", 0) - diP3.get("valueY", 0);
      const vx = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
      const vy = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), vx);
      this._setContext(dataItem, "valueX", vx);
      this._setContext(dataItem, "valueY", vy, true);
      this._setXLocation(dataItem, vx);
      const corner = dataContext.corner;
      if (corner == "p1") {
        this._setContext(diP3, "valueX", vx);
        this._setContext(diP3, "valueY", vy + dy, true);
        this._setXLocation(diP3, vx);
      } else if (corner == "p3") {
        this._setContext(diP1, "valueX", vx);
        this._setContext(diP1, "valueY", vy - dy, true);
        this._setXLocation(diP1, vx);
      } else if (corner == "p2") {
        this._setContext(diP4, "valueX", vx);
        this._setContext(diP4, "valueY", vy + dy, true);
        this._setXLocation(diP4, vx);
      } else if (corner == "p4") {
        this._setContext(diP2, "valueX", vx);
        this._setContext(diP2, "valueY", vy - dy, true);
        this._setXLocation(diP2, vx);
      } else if (corner == "m1") {
        this._setContext(diP1, "valueY", vy - dy1 / 2, true);
        this._setContext(diP2, "valueY", vy + dy1 / 2, true);
      } else if (corner == "m2") {
        this._setContext(diP3, "valueY", vy - dy2 / 2, true);
        this._setContext(diP4, "valueY", vy + dy2 / 2, true);
      }
      this._updateMiddlePoints(index);
    }
    this._positionBullets(diP1);
    this._positionBullets(diP2);
    this._positionBullets(diP3);
    this._positionBullets(diP4);
    this._positionBullets(diM1);
    this._positionBullets(diM2);
  }
  _updateOthers(_index, _fillGraphics, _p1, _p2) {
  }
  _drawFill() {
  }
  _updateLine() {
  }
};
Object.defineProperty(ParallelChannelSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ParallelChannelSeries"
});
Object.defineProperty(ParallelChannelSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([ParallelChannelSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/LineArrowSeries.js
var LineArrowSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_arrows", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "arrows", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Triangle._new(this._root, { themeTags: ["arrow"] }, [this.arrows.template])))
    });
  }
  _afterNew() {
    super._afterNew();
    this.lines.template.set("forceHidden", true);
    this.bullets.push((_root, _series, dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext.corner == "p2") {
        const index = dataContext.index;
        const di = this._di[index]["e"];
        let color2 = this.get("strokeColor", this.get("stroke"));
        if (di) {
          const dc = di.dataContext;
          if (dc) {
            const strokeTemplate = dc.stroke;
            if (strokeTemplate) {
              color2 = strokeTemplate.get("stroke");
            }
          }
        }
        const bullets = dataItem.bullets;
        if (bullets) {
          const bullet = bullets[0];
          if (bullet) {
            const container = bullet.get("sprite");
            if (container) {
              const child = container.children.getIndex(0);
              if (child) {
                child.set("scale", 0.1);
              }
            }
          }
        }
        const arrow = this.makeArrow();
        arrow.setAll({
          forceInactive: true,
          fill: color2,
          userData: dataContext.index
        });
        return Bullet.new(this._root, {
          sprite: arrow,
          locationX: void 0
        });
      }
    });
  }
  clearDrawings() {
    super.clearDrawings();
    this.arrows.clear();
  }
  _changed() {
    super._changed();
    this.arrows.each((arrow) => {
      const index = arrow.get("userData");
      const di = this._di[index];
      if (di) {
        const di1 = this._di[index]["p1"];
        const di2 = this._di[index]["p2"];
        const p1 = di1.get("point");
        const p2 = di2.get("point");
        if (p1 && p2) {
          const angle = getAngle(p1, p2) + 90;
          arrow.set("rotation", angle);
          const w = arrow.width();
          const strokeIndex = this._getStrokeIndex(index);
          const stroke = this.strokes.getIndex(strokeIndex);
          if (stroke) {
            arrow.set("scale", (w + stroke.get("strokeWidth", 2) * 2) / w);
          }
        }
      }
    });
  }
  _applySettings(index, settings) {
    super._applySettings(index, settings);
    let template;
    each(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext.index == index) {
        if (dataContext.settings) {
          template = dataContext.settings;
        }
      }
    });
    const settings2 = copy(settings);
    if (settings.stroke != void 0) {
      settings2.fill = settings.stroke;
    } else {
      delete settings2.fill;
    }
    if (settings.strokeOpacity != void 0) {
      settings2.fillOpacity = settings.strokeOpacity;
    } else {
      delete settings2.fillOpacity;
    }
    settings2.strokeOpacity = 0;
    const arrow = this._getSprite(this.arrows, index);
    if (arrow) {
      const defaultState = arrow.states.lookup("default");
      each2(settings2, (key, value) => {
        arrow.set(key, value);
        defaultState.set(key, value);
        if (template) {
          template.set(key, value);
        }
      });
    }
  }
  /**
   * @ignore
   */
  makeArrow() {
    const arrow = this.arrows.make();
    this.arrows.push(arrow);
    return arrow;
  }
  _updateLine(index, p11, p22, p1, p2) {
    super._updateLine(index, p11, p22, p1, p2);
  }
};
Object.defineProperty(LineArrowSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LineArrowSeries"
});
Object.defineProperty(LineArrowSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([LineArrowSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/HorizontalLineSeries.js
var HorizontalLineSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "horizontal"
    });
  }
  _afterNew() {
    super._afterNew();
    this.lines.template.set("forceHidden", true);
  }
  _handleBulletDragged(event) {
    super._handleBulletDragged(event);
    const dataItem = event.target.dataItem;
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const diP3 = this._di[index]["p3"];
      const movePoint = this._movePointerPoint;
      if (diP1 && diP2 && diP3 && movePoint) {
        const yAxis = this.get("yAxis");
        const xAxis = this.get("xAxis");
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueX);
        const min = xAxis.getPrivate("min", 0);
        const max = xAxis.getPrivate("max", 1);
        this._setContext(diP1, "valueY", valueY, true);
        this._setContext(diP2, "valueY", valueY, true);
        this._setContext(diP3, "valueY", valueY, true);
        this._setContext(diP1, "valueX", min - (max - min));
        this._setContext(diP2, "valueX", valueX);
        this._setContext(diP3, "valueX", max + (max - min));
        this._setXLocation(diP2, diP2.get("valueX", 0));
        this._positionBullets(diP2);
      }
    }
  }
  _handlePointerMoveReal() {
  }
  _prepareChildren() {
    const xAxis = this.get("xAxis");
    const min = xAxis.getPrivate("min", 0);
    const max = xAxis.getPrivate("max", 1);
    each(this._di, (di) => {
      if (di) {
        this._setContext(di["p1"], "valueX", min - (max - min), true);
        this._setContext(di["p3"], "valueX", max + (max - min), true);
      }
    });
    super._prepareChildren();
  }
  _updateSegment(index) {
    if (this._di[index]) {
      const diP1 = this._di[index]["p1"];
      const diP3 = this._di[index]["p3"];
      if (diP1 && diP3) {
        const xAxis = this.get("xAxis");
        const min = xAxis.getPrivate("min", 0);
        const max = xAxis.getPrivate("max", 1);
        this._setContext(diP1, "valueX", min - (max - min), true);
        this._setContext(diP3, "valueX", max + (max - min), true);
      }
    }
  }
  _handlePointerClickReal(event) {
    if (this._drawingEnabled) {
      if (!this._isDragging) {
        if (this.unselectAllDrawings() == 0) {
          this._increaseIndex();
          this._addPoints(event, this._index);
          this.isDrawing(false);
          this._updateSegment(this._index);
          this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
        }
      }
    }
  }
  _addPointsReal(valueX, valueY, index) {
    super._addPointsReal(valueX, valueY, index);
    this._addPoint(valueX, valueY, "p3", index);
  }
};
Object.defineProperty(HorizontalLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HorizontalLineSeries"
});
Object.defineProperty(HorizontalLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([HorizontalLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/VerticalLineSeries.js
var VerticalLineSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "vertical"
    });
  }
  _afterNew() {
    super._afterNew();
    this.lines.template.set("forceHidden", true);
  }
  _handleBulletDragged(event) {
    super._handleBulletDragged(event);
    const dataItem = event.target.dataItem;
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const diP3 = this._di[index]["p3"];
      const movePoint = this._movePointerPoint;
      if (diP1 && diP2 && diP3 && movePoint) {
        const yAxis = this.get("yAxis");
        const xAxis = this.get("xAxis");
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueX);
        const min = yAxis.getPrivate("min", 0);
        const max = yAxis.getPrivate("max", 1);
        this._setContext(diP1, "valueY", min - (max - min) * 10, true);
        this._setContext(diP2, "valueY", valueY, true);
        this._setContext(diP3, "valueY", max + (max - min) * 10, true);
        this._setContext(diP1, "valueX", valueX);
        this._setContext(diP2, "valueX", valueX);
        this._setContext(diP3, "valueX", valueX);
        this._setXLocation(diP1, valueX);
        this._setXLocation(diP2, valueX);
        this._setXLocation(diP3, valueX);
        this._positionBullets(diP1);
        this._positionBullets(diP2);
        this._positionBullets(diP3);
      }
    }
  }
  _updateSegment(index) {
    if (this._di[index]) {
      const diP1 = this._di[index]["p1"];
      const diP3 = this._di[index]["p3"];
      if (diP1 && diP3) {
        const yAxis = this.get("yAxis");
        const min = yAxis.getPrivate("min", 0);
        const max = yAxis.getPrivate("max", 1);
        this._setContext(diP1, "valueY", min - (max - min) * 10, true);
        this._setContext(diP3, "valueY", max + (max - min) * 10, true);
      }
    }
  }
  _handlePointerMoveReal() {
  }
  _handlePointerClickReal(event) {
    if (this._drawingEnabled) {
      if (!this._isDragging) {
        if (this.unselectAllDrawings() == 0) {
          this._increaseIndex();
          this._addPoints(event, this._index);
          this.isDrawing(false);
          this._hideResizer();
          this._updateSegment(this._index);
          this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
        }
      }
    }
  }
  _addPointsReal(valueX, valueY, index) {
    super._addPointsReal(valueX, valueY, index);
    this._addPoint(valueX, valueY, "p3", index);
  }
};
Object.defineProperty(VerticalLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VerticalLineSeries"
});
Object.defineProperty(VerticalLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([VerticalLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/AverageSeries.js
var AverageSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "average"
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("allowChangeSnap", false);
    this.set("snapToData", true);
  }
  _updateSegment(index) {
    const dataPoints = this._di[index];
    if (dataPoints) {
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const series = this.get("series");
      if (series && diP1 && diP2) {
        let x1 = this._getXValue(diP1.get("valueX"));
        let x2 = this._getXValue(diP2.get("valueX"));
        const xAxis = this.get("xAxis");
        const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
        const di2 = xAxis.getSeriesItem(series, Math.min(1, xAxis.valueToPosition(x2)));
        const field = this.get("field") + "Y";
        if (di1 && di2) {
          let i1 = series.dataItems.indexOf(di1);
          let i2 = series.dataItems.indexOf(di2);
          if (i1 > i2) {
            [i1, i2] = [i2, i1];
          }
          let sum = 0;
          let count = 0;
          for (let i = i1; i <= i2; i++) {
            const di = series.dataItems[i];
            const value = di.get(field);
            if (value != null) {
              sum += value;
              count++;
            }
          }
          const average = sum / count;
          diP1.set("valueX", x1);
          diP2.set("valueX", x2);
          this._setContext(diP1, "valueX", x1);
          this._setContext(diP2, "valueX", x2);
          this._setContext(diP1, "valueY", average, true);
          this._setContext(diP2, "valueY", average, true);
          this._positionBullets(diP1);
          this._positionBullets(diP2);
        }
      }
      this._updateElements();
    }
  }
};
Object.defineProperty(AverageSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AverageSeries"
});
Object.defineProperty(AverageSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([AverageSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/RegressionSeries.js
function round3(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
function linear(data, precision = 2) {
  const sum = [0, 0, 0, 0, 0];
  let len = 0;
  for (let n = 0; n < data.length; n++) {
    if (data[n][1] !== null) {
      len++;
      sum[0] += data[n][0];
      sum[1] += data[n][1];
      sum[2] += data[n][0] * data[n][0];
      sum[3] += data[n][0] * data[n][1];
      sum[4] += data[n][1] * data[n][1];
    }
  }
  const run = len * sum[2] - sum[0] * sum[0];
  const rise = len * sum[3] - sum[0] * sum[1];
  const gradient = run === 0 ? 0 : round3(rise / run, precision);
  const intercept = round3(sum[1] / len - gradient * sum[0] / len, precision);
  function predict(x) {
    return [
      round3(x, precision),
      round3(gradient * x + intercept, precision)
    ];
  }
  return data.map((point) => predict(point[0]));
}
var RegressionSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "regression"
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("allowChangeSnap", false);
    this.set("snapToData", true);
  }
  _updateSegment(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && diP1 && diP2) {
      const xAxis = series.get("xAxis");
      let x1 = this._getXValue(diP1.get("valueX"));
      let x2 = this._getXValue(diP2.get("valueX"));
      const di1 = xAxis.getSeriesItem(series, xAxis.valueToPosition(x1));
      const di2 = xAxis.getSeriesItem(series, xAxis.valueToPosition(x2));
      const field = this.get("field") + "Y";
      if (di1 && di2) {
        const dataItems = series.dataItems;
        let startIndex = dataItems.indexOf(di1);
        let endIndex = dataItems.indexOf(di2);
        let inversed = false;
        if (startIndex > endIndex) {
          inversed = true;
          [startIndex, endIndex] = [endIndex, startIndex];
        }
        const points = [];
        let ii = 0;
        for (let i = startIndex; i <= endIndex; i++) {
          const dataItem = dataItems[i];
          points.push([ii, dataItem.get(field)]);
          ii++;
        }
        const resultPoints = linear(points);
        const len = resultPoints.length;
        if (len > 1) {
          const p1 = resultPoints[0];
          const p2 = resultPoints[resultPoints.length - 1];
          if (p1 && p2) {
            let y1 = p1[1];
            let y2 = p2[1];
            if (inversed) {
              [y1, y2] = [y2, y1];
            }
            this._setContext(diP1, "valueY", y1, true);
            this._setContext(diP2, "valueY", y2, true);
            this._setContext(diP1, "valueX", x1);
            this._setContext(diP2, "valueX", x2);
            this._positionBullets(diP1);
            this._positionBullets(diP2);
          }
        }
      }
    }
  }
};
Object.defineProperty(RegressionSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RegressionSeries"
});
Object.defineProperty(RegressionSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([RegressionSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/DoodleSeries.js
var DoodleSeries = class extends DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_panX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_panY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "doodle"
    });
    Object.defineProperty(this, "_down", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("allowChangeSnap", false);
    this.bullets.clear();
    this.strokes.template.setAll({
      fill: color(16777215),
      fillOpacity: 0
    });
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    if (this._drawingEnabled && this._isPointerDown) {
      this._handleBulletPosition(event);
    }
  }
  _handleBulletPosition(event) {
    const chart = this.chart;
    if (chart) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueX);
      const index = this._index;
      this.data.push({ valueY, valueX, index, corner: this._pIndex, drawingId: this._drawingId });
      const len = this.dataItems.length;
      const dataItem = this.dataItems[len - 1];
      this._setXLocation(dataItem, valueX);
      this._pIndex++;
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
    }
  }
  _handlePointerDown(event) {
    const chart = this.chart;
    if (chart) {
      if (this.unselectAllDrawings() == 0) {
        super._handlePointerDown(event);
        this._increaseIndex();
        this._pIndex = 0;
        this._panX = chart.get("panX");
        this._panY = chart.get("panY");
        chart.set("panX", false);
        chart.set("panY", false);
        const cursor = chart.get("cursor");
        if (cursor) {
          cursor.setPrivate("visible", false);
        }
        this._down = true;
        this.data.push({ stroke: this._getStrokeTemplate(), sprite: this.mainContainer, index: this._index, corner: this._pIndex, drawingId: this._drawingId });
      }
    }
  }
  _handlePointerUp(event) {
    super._handlePointerUp(event);
    const chart = this.chart;
    if (chart && this._down) {
      this._down = false;
      this.setTimeout(() => {
        chart.set("panX", this._panX);
        chart.set("panY", this._panY);
        const cursor = chart.get("cursor");
        if (cursor) {
          cursor.setPrivate("visible", true);
        }
      }, 100);
      this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
    }
  }
};
Object.defineProperty(DoodleSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DoodleSeries"
});
Object.defineProperty(DoodleSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DrawingSeries.classNames.concat([DoodleSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/IconSeries.js
var IconSeries = class extends PolylineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "spriteResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "icon"
    });
  }
  _afterNew() {
    super._afterNew();
    this.spriteResizer = this._getStockChart().spriteResizer;
    this.bullets.clear();
    this.strokes.template.set("visible", false);
    this.fills.template.set("visible", false);
    this.bullets.push((root, _series, dataItem) => {
      const dataContext = dataItem.dataContext;
      const template = dataContext.settings;
      if (template) {
        const sprite = Graphics.new(root, {
          draggable: true,
          themeTags: ["icon"]
        }, template);
        dataContext.sprite = sprite;
        this._addBulletInteraction(sprite);
        sprite.events.on("click", (_e) => {
          const spriteResizer = this.spriteResizer;
          if (spriteResizer.get("sprite") == sprite) {
            spriteResizer.set("sprite", void 0);
          } else {
            spriteResizer.set("sprite", sprite);
          }
        });
        sprite.events.on("pointerover", () => {
          this._isHover = true;
        });
        sprite.events.on("pointerout", () => {
          this._isHover = false;
        });
        this.spriteResizer.set("sprite", void 0);
        sprite.on("scale", (scale) => {
          template.set("scale", scale);
        });
        sprite.on("rotation", (rotation) => {
          template.set("rotation", rotation);
        });
        return Bullet.new(this._root, {
          locationX: void 0,
          sprite
        });
      }
    });
  }
  _setContextSprite(_context) {
  }
  _handlePointerClick(event) {
    if (this._selected.length > 0) {
      this._hideResizer();
      this.unselectAllDrawings();
    } else if (this._drawingEnabled) {
      if (!this._isHover) {
        super._handlePointerClick(event);
        const dataObject = this.data.getIndex(this.data.length - 1);
        dataObject.settings = this._getIconTemplate();
        this._increaseIndex();
        this._di[this._index] = {};
        this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
      }
    }
    this.isDrawing(false);
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    this.spriteResizer.set("sprite", void 0);
    this._isHover = false;
  }
  _applySettings(index, settings) {
    super._applySettings(index, settings);
    let template;
    let sprite;
    let context = this._getContext(index);
    if (context) {
      sprite = context.sprite;
      template = context.settings;
      if (sprite) {
        const svgPath = this.get("iconSvgPath");
        const centerX = this.get("iconCenterX");
        const centerY = this.get("iconCenterY");
        sprite.set("svgPath", svgPath);
        sprite.set("centerX", centerX);
        sprite.set("centerY", centerY);
        const defaultState = sprite.states.lookup("default");
        defaultState.set("svgPath", svgPath);
        defaultState.set("centerX", centerX);
        defaultState.set("centerY", centerY);
        if (template) {
          template.set("svgPath", svgPath);
          template.set("centerX", centerX);
          template.set("centerY", centerY);
        }
        if (settings) {
          each2(settings, (key, value) => {
            sprite.set(key, value);
            defaultState.set(key, value);
            if (template) {
              template.set(key, value);
            }
          });
        }
      }
    }
  }
  _dispatchAdded() {
  }
  _getIconTemplate() {
    const template = {};
    const iconSvgPath = this.get("iconSvgPath");
    if (iconSvgPath != null) {
      template.svgPath = iconSvgPath;
    }
    const iconScale = this.get("iconScale");
    if (iconScale != null) {
      template.scale = iconScale;
    }
    const iconCenterX = this.get("iconCenterX");
    if (iconCenterX != null) {
      template.centerX = iconCenterX;
    }
    const iconCenterY = this.get("iconCenterY");
    if (iconCenterY != null) {
      template.centerY = iconCenterY;
    }
    const strokeColor = this.get("strokeColor");
    if (strokeColor != null) {
      template.stroke = strokeColor;
    }
    const strokeOpacity = this.get("strokeOpacity");
    if (strokeOpacity != null) {
      template.strokeOpacity = strokeOpacity;
    }
    const fillColor = this.get("fillColor");
    if (fillColor != null) {
      template.fill = fillColor;
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      template.fillOpacity = fillOpacity;
    }
    return Template.new(template);
  }
  setInteractive(value) {
    super.setInteractive(value);
    each(this.dataItems, (dataItem) => {
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            sprite.set("forceInactive", !value);
          }
        });
      }
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("iconSvgPath")) {
      each(this._selected, (i) => {
        this._applySettings(i);
      });
    }
  }
  _updateSelector(selector, index) {
    var _a;
    const context = this._getContext(index);
    if (context) {
      const sprite = context.sprite;
      if (sprite) {
        if (sprite.dataItem == ((_a = this.spriteResizer.get("sprite")) === null || _a === void 0 ? void 0 : _a.dataItem)) {
          selector.hide(0);
        } else {
          if (this._selected.indexOf(index) != -1) {
            selector.show(0);
          }
        }
        const selectorPadding = this.get("selectorPadding", 5);
        let bounds = sprite.bounds();
        let w = bounds.right - bounds.left + selectorPadding * 2;
        let h = bounds.bottom - bounds.top + selectorPadding * 2;
        selector.setAll({
          width: w,
          height: h,
          x: bounds.left - selectorPadding,
          y: bounds.top - selectorPadding
        });
      }
    }
  }
  toggleDrawing(enabled) {
    each(this.dataItems, (dataItem) => {
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            sprite.set("forceInactive", !enabled);
          }
        });
      }
    });
  }
  _handleBulletDragStart(event) {
    this._hideResizer(event.target);
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart._dragStartDrawing(event);
    }
  }
  _handleBulletDragStop(event) {
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart._dragStopDrawing(event);
    }
    this._root.events.once("frameended", () => {
      this._positionBullets(event.target.dataItem);
    });
  }
};
Object.defineProperty(IconSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IconSeries"
});
Object.defineProperty(IconSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: PolylineSeries.classNames.concat([IconSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/LabelSeries.js
var LabelSeries = class extends PolylineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "spriteResizer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "label"
    });
    Object.defineProperty(this, "_isEditing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isSelected", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.spriteResizer = this._getStockChart().spriteResizer;
    this.strokes.template.set("visible", false);
    this.fills.template.set("visible", false);
    this.addTag(this._tag);
  }
  _dispatchAdded() {
  }
  _setContextSprite(_context) {
  }
  _tweakBullet(container, dataItem) {
    const dataContext = dataItem.dataContext;
    const text = dataContext.text;
    const template = dataContext.settings;
    if (template) {
      const label = container.children.push(EditableLabel.new(this._root, {
        themeTags: ["label"],
        text,
        editOn: "none"
      }, template));
      label.on("text", (text2) => {
        dataContext.text = text2;
      });
      this.setPrivate("label", label);
      label.on("active", () => {
        this.setTimeout(() => {
          this._isEditing = label.get("active", false);
        }, 200);
        if (!label.get("active")) {
          this.setTimeout(() => {
            if (label) {
              if (label.get("text") == "") {
                this._disposeIndex(dataContext.index);
              }
            }
          }, 100);
          const stockChart = this._getStockChart();
          const type = "drawingsupdated";
          if (stockChart.events.isEnabled(type)) {
            stockChart.events.dispatch(type, { type, target: stockChart });
          }
        }
      });
      container.events.on("click", (e) => {
        const spriteResizer = this.spriteResizer;
        if (spriteResizer.get("sprite") == label) {
          this._isEditing = true;
          label.set("active", true);
          this._selectDrawing(dataContext.index, e.originalEvent.ctrlKey, true);
          spriteResizer.set("sprite", void 0);
        } else {
          this._isEditing = false;
          this._isSelected = true;
          spriteResizer.set("sprite", label);
        }
      });
      container.events.on("pointerover", () => {
        this._isHover = true;
      });
      container.events.on("pointerout", () => {
        this._isHover = false;
      });
      label.on("scale", (scale) => {
        template.set("scale", scale);
      });
      label.on("rotation", (rotation) => {
        template.set("rotation", rotation);
      });
      label.events.on("boundschanged", () => {
        this.markDirty();
      });
      dataContext.sprite = container;
      dataContext.label = label;
      this._tweakBullet2(label, dataItem);
    }
  }
  _tweakBullet2(_label, _dataItem) {
  }
  _handlePointerClick(event) {
    if (this._isEditing) {
      return;
    }
    if (this._selected.length > 0 || this._isSelected) {
      this._isSelected = false;
      this._hideResizer();
      this.unselectAllDrawings();
    } else if (this._drawingEnabled) {
      if (!this._isHover) {
        this.isDrawing(true);
        this._increaseIndex();
        this._di[this._index] = {};
        this._addPoint(event);
        const dataContext = this.data.getIndex(this.data.length - 1);
        dataContext.text = "";
        dataContext.index = this._index;
        dataContext.corner = 0;
        dataContext.settings = this._getLabelTemplate();
        this._afterTextSave(dataContext);
        this._root.events.once("frameended", () => {
          dataContext.label.set("active", true);
          this._isEditing = true;
        });
        this.spriteResizer.set("sprite", void 0);
        this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
      }
    }
    this.isDrawing(false);
  }
  _afterTextSave(_dataContext) {
  }
  _getLabelTemplate() {
    const template = {};
    const labelFontSize = this.get("labelFontSize");
    if (labelFontSize != null) {
      template.fontSize = labelFontSize;
    }
    const labelFontFamily = this.get("labelFontFamily");
    if (labelFontFamily != null) {
      template.fontFamily = labelFontFamily;
    }
    const labelFontWeight = this.get("labelFontWeight");
    if (labelFontWeight != null) {
      template.fontWeight = labelFontWeight;
    }
    const labelFontStyle = this.get("labelFontStyle");
    if (labelFontStyle != null) {
      template.fontStyle = labelFontStyle;
    }
    const labelFill = this.get("labelFill");
    if (labelFill != null) {
      template.fill = labelFill;
    }
    return Template.new(template);
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    this.spriteResizer.set("sprite", void 0);
    this._isHover = false;
  }
  _hideAllBullets() {
  }
  _updateSelector(selector, index) {
    var _a;
    const context = this._getContext(index);
    if (context) {
      const sprite = context.sprite;
      if (sprite) {
        if (sprite.dataItem == ((_a = this.spriteResizer.get("sprite")) === null || _a === void 0 ? void 0 : _a.dataItem)) {
          selector.hide(0);
        } else {
          if (this._selected.indexOf(index) != -1) {
            selector.show(0);
          }
        }
        const selectorPadding = this.get("selectorPadding", 5);
        let bounds = sprite.bounds();
        let w = bounds.right - bounds.left + selectorPadding * 2;
        let h = bounds.bottom - bounds.top + selectorPadding * 2;
        selector.setAll({
          width: w,
          height: h,
          x: bounds.left - selectorPadding,
          y: bounds.top - selectorPadding
        });
      }
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("labelFontSize") || this.isDirty("labelFontFamily") || this.isDirty("labelFontWeight") || this.isDirty("labelFontStyle") || this.isDirty("labelFill")) {
      each(this._selected, (i) => {
        this._applySettings(i);
      });
    }
  }
  _applySettings(index, settings) {
    super._applySettings(index, settings);
    let context = this._getContext(index);
    if (context) {
      let label = context.label;
      if (label) {
        let template = context.settings;
        const labelSettings = {
          fontSize: this.get("labelFontSize"),
          fontFamily: this.get("labelFontFamily"),
          fontWeight: this.get("labelFontWeight"),
          fontStyle: this.get("labelFontStyle"),
          fill: this.get("labelFill"),
          fillColor: this.get("fillColor")
        };
        const defaultState = label.states.lookup("default");
        if (labelSettings) {
          each2(labelSettings, (key, value) => {
            label.set(key, value);
            defaultState.set(key, value);
            if (template) {
              template.set(key, value);
            }
          });
        }
      }
    }
  }
  _handleBulletDragStart(event) {
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart._dragStartDrawing(event);
    }
  }
  _handleBulletDragStop(event) {
    const stockChart = this._getStockChart();
    if (stockChart) {
      stockChart._dragStopDrawing(event);
    }
    this._root.events.once("frameended", () => {
      this._positionBullets(event.target.dataItem);
    });
  }
  toggleDrawing(enabled) {
    this.grips.each((grip) => {
      grip.set("forceInactive", !enabled);
    });
  }
};
Object.defineProperty(LabelSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LabelSeries"
});
Object.defineProperty(LabelSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: PolylineSeries.classNames.concat([LabelSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/CalloutSeries.js
var CalloutSeries = class extends LabelSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "callout"
    });
  }
  _tweakBullet2(label, dataItem) {
    const dataContext = dataItem.dataContext;
    const background = label.set("background", PointedRectangle.new(this._root, { themeTags: ["callout"] }, dataContext.bgSettings));
    dataContext.background = background;
  }
  _tweakBullet(container, dataItem) {
    super._tweakBullet(container, dataItem);
    container.events.off("click");
    const dataContext = dataItem.dataContext;
    const template = dataContext.settings;
    if (template) {
      const label = this.getPrivate("label");
      if (label) {
        label.events.on("positionchanged", () => {
          this._root.events.once("frameended", () => {
            this._updatePointer(label);
          });
        });
        label.events.on("click", (e) => {
          const spriteResizer = this.spriteResizer;
          if (spriteResizer.get("sprite") == label) {
            this._isEditing = true;
            label.set("active", true);
            this._selectDrawing(dataContext.index, e.originalEvent.ctrlKey, true);
            spriteResizer.set("sprite", void 0);
          } else {
            this._isEditing = false;
            this._isSelected = true;
            this._selectDrawing(dataContext.index, e.originalEvent.ctrlKey, true);
            spriteResizer.set("sprite", label);
          }
          if (this._erasingEnabled) {
            this._disposeIndex(dataContext.index);
          }
        });
        label.on("scale", () => {
          this._updatePointer(label);
        });
        label.on("rotation", () => {
          this._updatePointer(label);
        });
        label.setAll({ draggable: true });
        label.on("x", (x) => {
          template.set("x", x);
        });
        label.on("y", (y) => {
          template.set("y", y);
        });
        const defaultState = label.states.lookup("default");
        setTimeout(() => {
          label.animate({ key: "y", to: -label.height() / 2 - 10, from: 0, duration: defaultState.get("stateAnimationDuration", 500), easing: defaultState.get("stateAnimationEasing", out(cubic)) });
        }, 50);
      }
    }
  }
  _updatePointer(label) {
    const background = label.get("background");
    if (background instanceof PointedRectangle) {
      const parent = label.parent;
      if (parent) {
        let point = parent.toGlobal({ x: 0, y: 0 });
        point = background.toLocal(point);
        background.setAll({ pointerX: point.x, pointerY: point.y });
      }
    }
    this.markDirty();
  }
  _afterTextSave(dataContext) {
    dataContext.bgSettings = this._getBgTemplate();
  }
  _hideAllBullets() {
  }
  _getBgTemplate() {
    const template = {};
    const fill = this.get("fillColor");
    if (fill != null) {
      template.fill = fill;
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      template.fillOpacity = fillOpacity;
    }
    const strokeOpacity = this.get("strokeOpacity");
    if (strokeOpacity != null) {
      template.strokeOpacity = strokeOpacity;
    }
    const stroke = this.get("strokeColor");
    if (stroke != null) {
      template.stroke = stroke;
    }
    return Template.new(template);
  }
  _applySettings(index, settings) {
    super._applySettings(index, settings);
    const context = this._getContext(index);
    if (context && settings) {
      const background = context.background;
      if (background) {
        let template = context.bgSettings;
        if (settings.fill != void 0) {
          background.set("fill", settings.fill);
          template.set("fill", settings.fill);
        }
        if (settings.fillOpacity != void 0) {
          background.set("fillOpacity", settings.fillOpacity);
          template.set("fillOpacity", settings.fillOpacity);
        }
        if (settings.strokeOpacity != void 0) {
          background.set("strokeOpacity", settings.strokeOpacity);
          template.set("strokeOpacity", settings.strokeOpacity);
        }
        if (settings.stroke != void 0) {
          background.set("stroke", settings.stroke);
          template.set("stroke", settings.stroke);
        }
      }
    }
  }
};
Object.defineProperty(CalloutSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CalloutSeries"
});
Object.defineProperty(CalloutSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LabelSeries.classNames.concat([CalloutSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/EllipseSeries.js
var EllipseSeries = class extends DrawingSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_ellipses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ellipse"
    });
    Object.defineProperty(this, "_clickPX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_clickVY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "ellipses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({ radiusX: 0, radiusY: 0 }), () => Ellipse._new(this._root, { radiusX: 0, radiusY: 0, templateField: "settings" }, [this.ellipses.template])))
    });
  }
  /**
   * @ignore
   */
  makeEllipse() {
    const ellipse = this.ellipses.make();
    this.mainContainer.children.push(ellipse);
    this.ellipses.push(ellipse);
    return ellipse;
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("allowChangeSnap", false);
    this.strokes.template.set("visible", false);
    this.fills.template.set("visible", false);
    const ellipseTemplate = this.ellipses.template;
    ellipseTemplate.events.on("pointerover", (e) => {
      this._showSegmentBullets(e.target.get("userData"));
    });
    ellipseTemplate.events.on("dragstart", (e) => {
      this.startDragItem(e, e.target.get("userData"));
    });
    ellipseTemplate.events.on("dragstop", (e) => {
      this.stopDragItem(e, e.target.get("userData"));
    });
    ellipseTemplate.events.on("click", (e) => {
      const index = e.target.get("userData");
      if (this._erasingEnabled) {
        this._disposeIndex(index);
      } else {
        this._selectDrawing(index, e.originalEvent.ctrlKey);
      }
    });
  }
  _applySettings(index, settings) {
    super._applySettings(index, settings);
    let template;
    each(this.dataItems, (dataItem) => {
      const dataContext = dataItem.dataContext;
      if (dataContext.index == index) {
        if (dataContext.settings) {
          template = dataContext.settings;
        }
      }
    });
    const ellipse = this._getSprite(this.ellipses, index);
    if (ellipse) {
      const defaultState = ellipse.states.lookup("default");
      each2(settings, (key, value) => {
        ellipse.set(key, value);
        defaultState.set(key, value);
        if (template) {
          template.set(key, value);
        }
      });
    }
  }
  _handleFillDragStop(event, index) {
    super._handleFillDragStop(event, index);
    const items = this._di[index];
    const bDI = items["b"];
    const tDI = items["t"];
    const rDI = items["r"];
    const lDI = items["l"];
    const xAxis = this.get("xAxis");
    if (bDI && tDI && rDI && lDI) {
      const positionL = xAxis.valueToPosition(lDI.get("valueX", 0));
      const positionR = xAxis.valueToPosition(rDI.get("valueX", 0));
      let mx = this._getXValue(xAxis.positionToValue(positionL + (positionR - positionL) / 2));
      this._setContext(tDI, "valueX", mx);
      this._setContext(bDI, "valueX", mx);
      this._setXLocation(tDI, mx);
      this._setXLocation(bDI, mx);
    }
  }
  _handleBulletDragged(event) {
    const dataItem = event.target.dataItem;
    const valueXReal = dataItem.get("valueX");
    const locationXReal = dataItem.get("locationX");
    const valueYReal = dataItem.get("valueY");
    super._handleBulletDragged(event);
    const movePoint = this._movePointerPoint;
    if (dataItem && movePoint) {
      const dataContext = dataItem.dataContext;
      const index = dataContext.index;
      const corner = dataContext.corner;
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueX);
      const vx = "valueX";
      const vy = "valueY";
      const vwy = "valueYWorking";
      const items = this._di[index];
      const bDI = items["b"];
      const tDI = items["t"];
      const rDI = items["r"];
      const lDI = items["l"];
      if (bDI && tDI && rDI && lDI) {
        if (corner == "b") {
          const valueY0 = tDI.get(vwy, 0);
          this._setContext(bDI, vy, valueY, true);
          let my = valueY0 + (valueY - valueY0) / 2;
          this._setContext(rDI, vy, my, true);
          this._setContext(lDI, vy, my, true);
          this._setContext(bDI, vx, valueXReal);
          bDI.set("locationX", locationXReal);
        }
        if (corner == "t") {
          const valueY0 = bDI.get(vwy, 0);
          this._setContext(tDI, vy, valueY, true);
          let my = valueY0 + (valueY - valueY0) / 2;
          this._setContext(rDI, vy, my, true);
          this._setContext(lDI, vy, my, true);
          this._setContext(tDI, vx, valueXReal);
          tDI.set("locationX", locationXReal);
        }
        if (corner == "l") {
          const valueX0 = rDI.get(vx, 0);
          const positionX0 = xAxis.valueToPosition(valueX0);
          const positionX = xAxis.valueToPosition(valueX);
          this._setContext(lDI, vx, valueX);
          this._setXLocation(lDI, valueX);
          let mpos = positionX0 + (positionX - positionX0) / 2;
          let mx = this._getXValue(xAxis.positionToValue(mpos));
          this._setContext(tDI, vx, mx);
          this._setContext(bDI, vx, mx);
          this._setXLocation(tDI, mx);
          this._setXLocation(bDI, mx);
          this._setContext(lDI, vy, valueYReal, true);
        }
        if (corner == "r") {
          const valueX0 = lDI.get(vx, 0);
          const positionX0 = xAxis.valueToPosition(valueX0);
          const positionX = xAxis.valueToPosition(valueX);
          this._setContext(rDI, vx, valueX);
          this._setXLocation(rDI, valueX);
          let mpos = positionX0 + (positionX - positionX0) / 2;
          let mx = this._getXValue(xAxis.positionToValue(mpos));
          this._setContext(tDI, vx, mx);
          this._setContext(bDI, vx, mx);
          this._setXLocation(tDI, mx);
          this._setXLocation(bDI, mx);
          this._setContext(rDI, vy, valueYReal, true);
        }
      }
      this._positionBullets(dataItem);
    }
  }
  _handlePointerClick(event) {
    if (this._drawingEnabled) {
      super._handlePointerClick(event);
      if (!this._isDragging) {
        if (!this._isDrawing) {
          if (this.unselectAllDrawings() == 0) {
            this._increaseIndex();
            this.isDrawing(true);
            this._hideResizer(event.target);
            this.bulletsContainer.show();
            this._addPoints(event, this._index);
          }
        } else {
          this.isDrawing(false);
          this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
        }
      }
    }
  }
  _createElements(index, dataItem) {
    if (!this._ellipses[index]) {
      const ellipse = this.makeEllipse();
      ellipse._setDataItem(dataItem);
      this._ellipses[index] = ellipse;
      ellipse.setAll({ userData: index });
      (dataItem === null || dataItem === void 0 ? void 0 : dataItem.dataContext).sprite = ellipse;
    }
  }
  _handlePointerMove(event) {
    super._handlePointerMove(event);
    if (this._isDrawing) {
      const movePoint = this._movePointerPoint;
      if (movePoint) {
        const xAxis = this.get("xAxis");
        const yAxis = this.get("yAxis");
        const index = this._index;
        const dataItems = this._di[index];
        if (dataItems) {
          const diT = this._di[index]["t"];
          const diB = this._di[index]["b"];
          const diL = this._di[index]["l"];
          const diR = this._di[index]["r"];
          const valueY0 = this._clickVY;
          const positionX = xAxis.coordinateToPosition(movePoint.x);
          const positionX0 = this._clickPX;
          const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
          const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueX);
          if (diB && diL && diR && diT) {
            this._setContext(diB, "valueY", valueY, true);
            const my = valueY0 + (valueY - valueY0) / 2;
            const mx = this._getXValue(xAxis.positionToValue(positionX0 + (positionX - positionX0) / 2));
            this._setContext(diR, "valueY", my, true);
            this._setContext(diL, "valueY", my, true);
            this._setContext(diB, "valueX", mx);
            this._setContext(diT, "valueX", mx);
            this._setXLocation(diB, mx);
            this._setXLocation(diT, mx);
            this._setContext(diR, "valueX", valueX);
            this._setXLocation(diR, valueX);
          }
        }
      }
    }
  }
  _addPoints(event, index) {
    const chart = this.chart;
    if (chart) {
      this.data.push({ settings: this._getEllipseTemplate(), stroke: this._getStrokeTemplate(), index, corner: "e", drawingId: this._drawingId });
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const point = chart.plotContainer.toLocal(event.point);
      this._clickPX = xAxis.coordinateToPosition(point.x);
      const valueX = this._getXValue(xAxis.positionToValue(this._clickPX));
      const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)), valueX);
      this._clickVY = valueY;
      this._di[index] = {};
      this._addPoint(valueX, valueY, "l", index);
      this._addPoint(valueX, valueY, "t", index);
      this._addPoint(valueX, valueY, "b", index);
      this._addPoint(valueX, valueY, "r", index);
    }
  }
  _addPoint(valueX, valueY, corner, index) {
    this.data.push({ valueY, valueX, index, corner, drawingId: this._drawingId });
    const len = this.dataItems.length;
    const dataItem = this.dataItems[len - 1];
    if (dataItem) {
      this._setXLocation(dataItem, valueX);
      this.setPrivate("startIndex", 0);
      this.setPrivate("endIndex", len);
    }
  }
  _updateChildren() {
    super._updateChildren();
    let index = 0;
    each(this._di, (dataItems) => {
      if (dataItems) {
        const diT = dataItems["t"];
        const diB = dataItems["b"];
        const diL = dataItems["l"];
        const diR = dataItems["r"];
        if (diT && diB && diL && diR) {
          const pt = diT.get("point");
          const pb = diB.get("point");
          const pr = diR.get("point");
          const pl = diL.get("point");
          if (pt && pb && pr && pl) {
            const rx = (pr.x - pl.x) / 2;
            const ry = (pb.y - pt.y) / 2;
            const x = pl.x + rx;
            const y = pt.y + ry;
            const ellipse = this._ellipses[index];
            if (ellipse) {
              ellipse.setAll({ x, y, radiusX: rx, radiusY: ry });
            }
          }
        }
      }
      index++;
    });
  }
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const ellipse = this._ellipses[index];
      if (ellipse) {
        delete this._ellipses[index];
        this.ellipses.removeValue(ellipse);
        ellipse.dispose();
      }
    }
  }
  _getEllipseTemplate() {
    const template = this._getStrokeTemplate();
    const fillColor = this.get("fillColor");
    if (fillColor != null) {
      template.set("fill", fillColor);
    }
    const fillOpacity = this.get("fillOpacity");
    if (fillOpacity != null) {
      template.set("fillOpacity", fillOpacity);
    }
    return template;
  }
  setInteractive(value) {
    super.setInteractive(value);
    this.ellipses.template.set("forceInactive", !value);
  }
  enableDrawingSelection(value) {
    super.enableDrawingSelection(value);
    this.ellipses.template.set("forceInactive", !value);
  }
};
Object.defineProperty(EllipseSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "EllipseSeries"
});
Object.defineProperty(EllipseSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DrawingSeries.classNames.concat([EllipseSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/TrendLineSeries.js
var TrendLineSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "trendline"
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("allowChangeSnap", false);
    this.set("snapToData", true);
  }
  _updateSegment(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && diP1 && diP2) {
      const xAxis = this.get("xAxis");
      let x1 = this._getXValue(diP1.get("valueX"));
      let x2 = this._getXValue(diP2.get("valueX"));
      const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
      const di2 = xAxis.getSeriesItem(series, Math.min(1, xAxis.valueToPosition(x2)));
      const field = this.get("field") + "Y";
      if (di1 && di2) {
        let y1 = di1.get(field);
        let y2 = di2.get(field);
        this._setContext(diP1, "valueY", y1, true);
        this._setContext(diP2, "valueY", y2, true);
        this._setContext(diP1, "valueX", x1);
        this._setContext(diP2, "valueX", x2);
        this._positionBullets(diP1);
        this._positionBullets(diP2);
      }
    }
  }
};
Object.defineProperty(TrendLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "TrendLineSeries"
});
Object.defineProperty(TrendLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([TrendLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/QuadrantLineSeries.js
var QuadrantLineSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "quadrant"
    });
  }
  _afterNew() {
    super._afterNew();
    this.strokes.template.set("visible", false);
  }
  _updateSegment(index) {
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    const series = this.get("series");
    if (series && diP1 && diP2) {
      let x1 = this._getXValue(diP1.get("valueX"));
      let x2 = this._getXValue(diP2.get("valueX"));
      const field = this.get("field") + "Y";
      let y1 = this._getYValue(diP1.get(field), x1, true);
      let y2 = this._getYValue(diP2.get(field), x2, true);
      this._setContext(diP1, "valueY", y1, true);
      this._setContext(diP2, "valueY", y2, true);
      this._positionBullets(diP1);
      this._positionBullets(diP2);
    }
  }
  _updateChildren() {
    super._updateChildren();
    const chart = this.chart;
    this.fills.clear();
    if (chart) {
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const di = this._di[i]["e"];
          const dataContext = di.dataContext;
          const fill1 = this.makeFill(this.fills);
          const fill2 = this.makeFill(this.fills);
          const index = this.dataItems.indexOf(diP1);
          for (let j = index; j >= 0; j--) {
            const dataContext2 = this.dataItems[j].dataContext;
            const template = dataContext2.fill;
            if (template) {
              fill1.template = template;
              fill2.template = template;
            }
          }
          const userData = [this.dataItems.indexOf(diP1), this.dataItems.indexOf(diP2)];
          let fillColor = this.get("fillColor", this.get("fill"));
          const fillTemplate = dataContext.fill;
          if (fillTemplate) {
            fillColor = fillTemplate.get("fill");
          }
          const settings = { userData, fill: fillColor };
          fill1.setAll(settings);
          fill2.setAll(settings);
          fill2.set("forceInactive", true);
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          if (p1 && p2) {
            const dy = (p2.y - p1.y) / 4;
            const m1y = p1.y + dy;
            const m2y = p1.y + dy * 2;
            const m3y = p1.y + dy * 3;
            line.set("draw", (display) => {
              display.moveTo(p1.x, p1.y);
              display.lineTo(p2.x, p1.y);
              display.moveTo(p1.x, m1y);
              display.lineTo(p2.x, m1y);
              display.moveTo(p1.x, m2y);
              display.lineTo(p2.x, m2y);
              display.moveTo(p1.x, m3y);
              display.lineTo(p2.x, m3y);
              display.moveTo(p1.x, p2.y);
              display.lineTo(p2.x, p2.y);
            });
            fill1.set("draw", (display) => {
              display.moveTo(p1.x, p1.y);
              display.lineTo(p2.x, p1.y);
              display.lineTo(p2.x, p2.y);
              display.lineTo(p1.x, p2.y);
              display.lineTo(p1.x, p1.y);
            });
            fill2.set("draw", (display) => {
              display.moveTo(p1.x, m1y);
              display.lineTo(p2.x, m1y);
              display.lineTo(p2.x, m3y);
              display.lineTo(p1.x, m3y);
              display.lineTo(p1.x, m1y);
            });
          }
        }
      }
    }
  }
  _drawFill() {
  }
  _updateLine() {
  }
};
Object.defineProperty(QuadrantLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "QuadrantLineSeries"
});
Object.defineProperty(QuadrantLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([QuadrantLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/FibonacciSeries.js
var FibonacciSeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "fibonacci"
    });
    Object.defineProperty(this, "_labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_fills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_strokes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {}, [this.labels.template])))
    });
  }
  /**
   * @ignore
   */
  makeLabel() {
    const label = this.labels.make();
    this.bulletsContainer.children.push(label);
    this.labels.push(label);
    return label;
  }
  _updateChildren() {
    super._updateChildren();
    this._updateChildrenReal();
  }
  _getIndex(sprite) {
    return sprite.get("userData");
  }
  _updateChildrenReal() {
    const chart = this.chart;
    if (chart) {
      const yAxis = this.get("yAxis");
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const di = this._di[i]["e"];
          const dataContext = di.dataContext;
          const strokeTemplate = dataContext.stroke;
          if (diP1 && diP2) {
            const p1 = diP1.get("point");
            const p2 = diP2.get("point");
            if (p1 && p2) {
              const sequence = this.get("sequence", []);
              let prevValue = 0;
              const labels = this._labels[i];
              const strokes = this._strokes[i];
              const fills = this._fills[i];
              for (let i2 = 0; i2 < sequence.length; i2++) {
                const value = sequence[i2] - 1;
                const label = labels[i2];
                const fill = fills[i2];
                const stroke = strokes[i2];
                let fillColor = this.get("colors", [])[i2];
                let strokeColor = fillColor;
                fill.set("fill", fillColor);
                stroke.set("stroke", strokeColor);
                let strokeOpacity;
                if (strokeTemplate) {
                  strokeOpacity = strokeTemplate.get("strokeOpacity");
                }
                if (strokeOpacity == void 0) {
                  strokeOpacity = this.get("strokeOpacity", 0);
                }
                stroke.set("strokeOpacity", strokeOpacity);
                const y1 = p1.y + (p2.y - p1.y) * prevValue;
                const y2 = p1.y + (p2.y - p1.y) * -value;
                const realValue = yAxis.positionToValue(yAxis.coordinateToPosition(y2));
                fill.setPrivate("visible", true);
                stroke.setPrivate("visible", true);
                fill.set("draw", (display) => {
                  display.moveTo(p1.x, y1);
                  display.lineTo(p2.x, y1);
                  display.lineTo(p2.x, y2);
                  display.lineTo(p1.x, y2);
                  display.lineTo(p1.x, y1);
                });
                stroke.set("draw", (display) => {
                  display.moveTo(p1.x, y2);
                  display.lineTo(p2.x, y2);
                });
                const dataItem = label.dataItem;
                if (dataItem) {
                  dataItem.set("value", realValue);
                }
                label.setAll({ x: p2.x, y: y2, fill: fillColor });
                label.text.markDirtyText();
                prevValue = -value;
              }
            }
          }
        }
      }
    }
  }
  _createElements(index) {
    super._createElements(index);
    if (!this._fills[index]) {
      const labelArr = [];
      const fillsArr = [];
      const strokesArr = [];
      const sequence = this.get("sequence", []);
      for (let i = 0; i < sequence.length; i++) {
        const label = this.makeLabel();
        const dataItem = this.makeDataItem({});
        dataItem.set("sequence", sequence[i]);
        label._setDataItem(dataItem);
        labelArr.push(label);
        const fill = this.makeFill(this.fills);
        fillsArr.push(fill);
        fill.set("userData", index);
        fill.states.remove("hover");
        const stroke = this.makeStroke(this.strokes);
        stroke.set("userData", index);
        strokesArr.push(stroke);
      }
      this._labels[index] = labelArr;
      this._fills[index] = fillsArr;
      this._strokes[index] = strokesArr;
    }
  }
  _drawFill() {
  }
  _drawStroke() {
  }
  _updateLine() {
  }
  _clearGraphics() {
  }
  /*
      public enableDrawing() {
          super.enableDrawing();
          this.showAllBullets();
      }
  
      public enableErasing() {
          super.enableErasing();
          this.showAllBullets();
      }
  
      protected _hideAllBullets() {
          if (this._drawingEnabled || this._erasingEnabled) {
  
          }
          else {
              super._hideAllBullets();
          }
      }*/
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const labels = this._labels[index];
      const fills = this._fills[index];
      const strokes = this._strokes[index];
      if (labels) {
        each(labels, (item) => {
          item.dispose();
          this.labels.removeValue(item);
        });
        delete this._labels[index];
      }
      if (fills) {
        each(fills, (item) => {
          this.fills.removeValue(item);
          item.dispose();
        });
        delete this._fills[index];
      }
      if (strokes) {
        each(strokes, (item) => {
          this.strokes.removeValue(item);
          item.dispose();
        });
        delete this._strokes[index];
      }
    }
  }
};
Object.defineProperty(FibonacciSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FibonacciSeries"
});
Object.defineProperty(FibonacciSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([FibonacciSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/FibonacciTimezoneSeries.js
var FibonacciTimezoneSeries = class extends FibonacciSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "fibonaccitimezone"
    });
  }
  _updateSegmentReal(index) {
    const dataItems = this._di[index];
    if (dataItems) {
      const diP1 = dataItems["p1"];
      const diP2 = dataItems["p2"];
      if (diP1 && diP2) {
        this._setContext(diP2, "valueY", diP1.get("valueY", 0), true);
        diP1.setRaw("locationX", 0);
        diP2.setRaw("locationX", 0);
      }
    }
  }
  _updateSegment(index) {
    super._updateSegment(index);
    this._updateSegmentReal(index);
  }
  _updateChildrenReal() {
    const chart = this.chart;
    if (chart) {
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        if (line) {
          const diP1 = this._di[i]["p1"];
          const diP2 = this._di[i]["p2"];
          const di = this._di[i]["e"];
          const p1 = diP1.get("point");
          const p2 = diP2.get("point");
          const open1 = diP1["open"];
          const open2 = diP2["open"];
          const xAxis = this.get("xAxis");
          if (open1 && open2 && di) {
            const valueX1 = open1["valueX"];
            const valueX2 = open2["valueX"];
            const diff = valueX2 - valueX1;
            if (p1 && p2) {
              const dataContext = di.dataContext;
              const sequence = this.get("sequence", []);
              const labels = this._labels[i];
              const fills = this._fills[i];
              const strokes = this._strokes[i];
              for (let i2 = 0; i2 < sequence.length; i2++) {
                const value = sequence[i2];
                const label = labels[i2];
                const fill = fills[i2];
                const stroke = strokes[i2];
                this.mainContainer.children.moveValue(fill, 0);
                const endValue = valueX1 + diff * value;
                const x1 = p1.x;
                const x2 = xAxis.get("renderer").positionToCoordinate(xAxis.valueToPosition(endValue));
                const y1 = 0;
                const y2 = chart.plotContainer.height();
                fill.setPrivate("visible", true);
                stroke.setPrivate("visible", true);
                const fillTemplate = dataContext.fill;
                const strokeTemplate = dataContext.stroke;
                let fillColor = this.get("colors", [])[i2];
                let strokeColor = fillColor;
                let fillOpacity;
                if (fillTemplate) {
                  fillOpacity = fillTemplate.get("fillOpacity");
                }
                if (fillOpacity == void 0) {
                  fillOpacity = this.get("fillOpacity", 0);
                }
                fillOpacity = fillOpacity * 0.2;
                fill.set("fillOpacity", fillOpacity);
                let strokeOpacity;
                if (strokeTemplate) {
                  strokeOpacity = strokeTemplate.get("strokeOpacity");
                }
                if (strokeOpacity == void 0) {
                  strokeOpacity = this.get("strokeOpacity", 0);
                }
                stroke.set("strokeOpacity", strokeOpacity);
                if (!fillColor) {
                  if (fillTemplate) {
                    fillColor = fillTemplate.get("fill");
                  }
                  if (!fillColor) {
                    fillColor = this.get("fillColor", this.get("fill", color(0)));
                  }
                }
                if (!strokeColor) {
                  if (strokeTemplate) {
                    strokeColor = strokeTemplate.get("stroke");
                  }
                  if (!strokeColor) {
                    strokeColor = this.get("strokeColor", this.get("stroke", color(0)));
                  }
                }
                fill.set("fill", fillColor);
                stroke.set("stroke", strokeColor);
                fill.set("draw", (display) => {
                  display.moveTo(x1, y1);
                  display.lineTo(x2, y1);
                  display.lineTo(x2, y2);
                  display.lineTo(x1, y2);
                  display.lineTo(x1, y1);
                });
                stroke.set("draw", (display) => {
                  display.moveTo(x2, y1);
                  display.lineTo(x2, y2);
                });
                const dataItem = label.dataItem;
                if (dataItem) {
                  dataItem.set("value", value);
                }
                label.setAll({ x: x2, y: y2, dy: -20 });
                label.text.markDirtyText();
              }
            }
          }
        }
      }
    }
  }
};
Object.defineProperty(FibonacciTimezoneSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FibonacciTimezoneSeries"
});
Object.defineProperty(FibonacciTimezoneSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FibonacciSeries.classNames.concat([FibonacciTimezoneSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/HorizontalRaySeries.js
var HorizontalRaySeries = class extends SimpleLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ray"
    });
  }
  _afterNew() {
    super._afterNew();
    this.lines.template.set("forceHidden", true);
  }
  _handleBulletDragged(event) {
    super._handleBulletDragged(event);
    const dataItem = event.target.dataItem;
    const dataContext = dataItem.dataContext;
    if (dataContext) {
      const index = dataContext.index;
      const diP1 = this._di[index]["p1"];
      const diP2 = this._di[index]["p2"];
      const movePoint = this._movePointerPoint;
      if (diP1 && diP2 && movePoint) {
        const yAxis = this.get("yAxis");
        const xAxis = this.get("xAxis");
        const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
        const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)), valueX);
        const min = xAxis.getPrivate("min", 0);
        const max = xAxis.getPrivate("max", 1);
        this._setContext(diP1, "valueY", valueY, true);
        this._setContext(diP2, "valueY", valueY, true);
        this._setContext(diP1, "valueX", valueX);
        this._setContext(diP2, "valueX", max + (max - min));
        this._setXLocation(diP1, diP1.get("valueX", 0));
        this._positionBullets(diP1);
      }
    }
  }
  _prepareChildren() {
    const xAxis = this.get("xAxis");
    const min = xAxis.getPrivate("min", 0);
    const max = xAxis.getPrivate("max", 1);
    each(this._di, (di) => {
      if (di) {
        this._setContext(di["p2"], "valueX", max + (max - min), true);
      }
    });
    super._prepareChildren();
  }
  _handlePointerMoveReal() {
  }
  _updateSegment(index) {
    if (this._di[index]) {
      const diP2 = this._di[index]["p2"];
      if (diP2) {
        const xAxis = this.get("xAxis");
        const min = xAxis.getPrivate("min", 0);
        const max = xAxis.getPrivate("max", 1);
        this._setContext(diP2, "valueX", max + (max - min), true);
      }
    }
  }
  _handlePointerClickReal(event) {
    if (this._drawingEnabled) {
      if (!this._isDragging) {
        if (this.unselectAllDrawings() == 0) {
          this._increaseIndex();
          this._addPoints(event, this._index);
          this.isDrawing(false);
          this._hideResizer();
          this._updateSegment(this._index);
          this._dispatchStockEvent("drawingadded", this._drawingId, this._index);
        }
      }
    }
  }
};
Object.defineProperty(HorizontalRaySeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HorizontalRaySeries"
});
Object.defineProperty(HorizontalRaySeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SimpleLineSeries.classNames.concat([HorizontalRaySeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/drawing/Measure.js
var Measure = class extends RectangleSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_lines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "measure"
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {}, [this.labels.template])))
    });
  }
  _afterNew() {
    super._afterNew();
    this.set("snapToData", true);
    this.strokes.template.set("templateField", void 0);
    this.fills.template.set("templateField", void 0);
  }
  /**
   * @ignore
   */
  makeLabel() {
    const label = this.labels.make();
    this.bulletsContainer.children.push(label);
    label.setAll({
      populateText: true,
      background: RoundedRectangle.new(this._root, { themeTags: ["background"] })
    });
    label._setDataItem(new DataItem(this, {}, {}));
    this.labels.push(label);
    return label;
  }
  _createElements(index) {
    super._createElements(index);
    if (!this._labels[index]) {
      const label = this.makeLabel();
      this._labels[index] = label;
    }
  }
  _disposeIndex(index) {
    super._disposeIndex(index);
    const label = this._labels[index];
    if (label) {
      label.dispose();
      delete this._labels[index];
    }
    const line = this._lines[index];
    if (line) {
      line.dispose();
      delete this._lines[index];
    }
  }
  _updateOthers(index, fillGraphics, p1, p2) {
    const xAxis = this.get("xAxis");
    const panel = xAxis.chart;
    const line = this._lines[index];
    let positiveColor = this._root.interfaceColors.get("positive");
    let negativeColor = this._root.interfaceColors.get("negative");
    const stockChart = panel.getPrivate("stockChart");
    let volumeSeries;
    if (stockChart) {
      positiveColor = stockChart.get("stockPositiveColor", positiveColor);
      negativeColor = stockChart.get("stockNegativeColor", negativeColor);
      volumeSeries = stockChart.get("volumeSeries");
    }
    let ix = 1;
    if (p1.x > p2.x) {
      ix = -1;
    }
    const label = this._labels[index];
    const labelBg = label.get("background");
    const diP1 = this._di[index]["p1"];
    const diP2 = this._di[index]["p2"];
    let color2 = positiveColor;
    let iy = 1;
    if (p1.y > p2.y) {
      iy = -1;
      color2 = negativeColor;
    }
    fillGraphics.set("fill", color2);
    fillGraphics.set("fillOpacity", 0.2);
    line.set("stroke", color2);
    labelBg.set("fill", color2);
    this.outerCircles.each((outerCircle) => {
      outerCircle.set("stroke", color2);
    });
    const mx = p1.x + (p2.x - p1.x) / 2;
    const my = p1.y + (p2.y - p1.y) / 2;
    line.set("segments", [[[{ x: mx, y: p1.y }, { x: mx, y: p2.y }]], [[{ x: mx - 5, y: p2.y - 5 * iy }, { x: mx, y: p2.y }, { x: mx + 5, y: p2.y - 5 * iy }]], [[{ x: p1.x, y: my }, { x: p2.x, y: my }]], [[{ x: p2.x - 5 * ix, y: my - 5 }, { x: p2.x, y: my }, { x: p2.x - 5 * ix, y: my + 5 }]]]);
    const value1 = diP1.get("valueY", 0);
    const value2 = diP2.get("valueY", 0);
    const numberFormatter = this.getNumberFormatter();
    const value = numberFormatter.format(value2 - value1);
    const percent2 = numberFormatter.format((value2 - value1) / value1 * 100) + "%";
    const baseInterval = xAxis.getPrivate("baseInterval");
    const time1 = diP1.get("valueX", 0);
    const time2 = diP2.get("valueX", 0);
    const series = this.get("series");
    let count = 0;
    if (series) {
      const di1 = xAxis.getSeriesItem(series, xAxis.valueToPosition(time1));
      const di2 = xAxis.getSeriesItem(series, xAxis.valueToPosition(time2));
      if (di1 && di2) {
        count = series.dataItems.indexOf(di2) - series.dataItems.indexOf(di1) + 1;
        if (this.get("snapToData")) {
          count--;
        }
      }
    }
    let intervalCount = Math.ceil((time2 - time1) / xAxis.baseDuration() * baseInterval.count);
    if (intervalCount < count) {
      intervalCount = count;
    }
    let volume = 0;
    if (volumeSeries) {
      const div1 = xAxis.getSeriesItem(volumeSeries, xAxis.valueToPosition(time1));
      const div2 = xAxis.getSeriesItem(volumeSeries, xAxis.valueToPosition(time2));
      if (div1 && div2) {
        const dataItems = volumeSeries.dataItems;
        let i1 = dataItems.indexOf(div1);
        let i2 = dataItems.indexOf(div2);
        if (i1 > i2) {
          [i1, i2] = [i2, i1];
        }
        for (let i = i1; i <= i2; i++) {
          const dataItem = dataItems[i];
          if (dataItem) {
            const value3 = dataItem.get("valueY");
            if (isNumber(value3)) {
              volume += value3;
            }
          }
        }
      }
    }
    let text = this.get("labelText", "");
    if (volume > 0) {
      text += this.get("labelVolumeText");
    }
    const unitNames = {
      millisecond: "ms",
      second: "s",
      minute: "m",
      hour: "h",
      day: "d",
      week: "wk",
      month: "mo",
      year: "y"
    };
    label.dataItem.dataContext = {
      value,
      percent: percent2,
      count,
      intervalCount,
      intervalUnit: this._root.language.translateAny(unitNames[baseInterval.timeUnit]),
      volume
    };
    label.setAll({
      text,
      x: mx,
      y: my
    });
    label.text.markDirtyText();
  }
};
Object.defineProperty(Measure, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Measure"
});
Object.defineProperty(Measure, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: RectangleSeries.classNames.concat([Measure.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/StockToolbar.js
var StockToolbar = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_cssDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this._defaultThemes = this.get("stockChart")._defaultThemes;
    super._afterNewApplyThemes();
    this._initControls();
    this.loadDefaultCSS();
    this._root.addDisposer(this);
    this.events.dispatch("created", {
      type: "created",
      target: this
    });
  }
  _afterChanged() {
    super._afterChanged();
    if (this.isDirty("container")) {
    }
    if (this.isDirty("useDefaultCSS")) {
      if (this.get("useDefaultCSS")) {
        this.loadDefaultCSS();
      } else if (this._cssDisposer) {
        this._cssDisposer.dispose();
      }
    }
    if (this.isDirty("controls")) {
      this._initControls();
    }
  }
  _dispose() {
    super._dispose();
    if (this._cssDisposer) {
      this._cssDisposer.dispose();
    }
    const controls = this.get("controls", []);
    each(controls, (control, _index) => {
      control.dispose();
    });
  }
  _initControls() {
    const controls = this.get("controls", []);
    each(controls, (control, _index) => {
      if (!control.getPrivate("toolbar")) {
        control.setPrivate("toolbar", this);
        this.get("container").appendChild(control.getPrivate("button"));
      }
    });
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  loadDefaultCSS() {
    const disposer = StockToolbarCSS_default(getShadowRoot(this._root.dom), this._root);
    this._disposers.push(disposer);
    this._cssDisposer = disposer;
  }
};
Object.defineProperty(StockToolbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StockToolbar"
});
Object.defineProperty(StockToolbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([StockToolbar.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownList.js
var DropdownList = class extends Dropdown {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_currentSelectedIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  // private _itemDisposers: Array<IDisposer> = [];
  _afterNew() {
    super._afterNew();
    this._setupKeyboardNav();
    this._root.addDisposer(this);
  }
  _initElements() {
    super._initElements();
    const container = this.getPrivate("container");
    if (this.get("searchable")) {
      this._initSearch();
    }
    const list = document.createElement("ul");
    list.className = "am5stock-control-list";
    container.appendChild(list);
    this.setPrivate("list", list);
    this._initItems();
  }
  _sizeItems() {
    const list = this.getPrivate("list");
    if (list) {
      list.style.maxHeight = this.root.container.height() - 100 + "px";
      list.style.overflow = "auto";
    }
  }
  /**
   * Rebuilds the list.
   *
   * Useful when changing item data within item list.
   *
   * @since 5.7.0
   */
  rebuildList() {
    this._initItems();
  }
  _initItems(items) {
    const list = this.getPrivate("list");
    list.innerHTML = "";
    if (!items) {
      items = this.get("items", []);
    }
    const exclude = this.get("exclude", []);
    each(items, (item) => {
      if (exclude.indexOf(item.id) == -1) {
        this.addItem(item);
      }
    });
    if (this.get("scrollable")) {
      this._sizeItems();
    }
    this._maybeMakeAccessible();
  }
  _initSearch() {
    let searchBox = this.getPrivate("search");
    if (this.get("searchable")) {
      if (!searchBox) {
        const container = this.getPrivate("container");
        searchBox = document.createElement("div");
        searchBox.className = "am5stock-list-search";
        container.appendChild(searchBox);
        this.setPrivate("search", searchBox);
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = this._root.language.translateAny("Search");
        searchBox.appendChild(input);
        this._disposers.push(addEventListener(input, "input", (_ev) => {
          this._filterItems(input.value);
        }));
        this._disposers.push(addEventListener(input, "focus", (_ev) => {
          this._currentSelectedIndex = void 0;
        }));
      }
    } else if (searchBox) {
      searchBox.style.display = "none";
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("items")) {
      this._initItems();
    }
    if (this.isDirty("searchable")) {
      this._initSearch();
    }
    if (this.isPrivateDirty("currentId")) {
    }
    if (this.isDirty("control")) {
      this._maybeMakeAccessible();
    }
  }
  _dispose() {
    super._dispose();
  }
  _filterItems(search) {
    return __awaiter(this, void 0, void 0, function* () {
      const searchCallback = this.get("searchCallback");
      if (search == "") {
        this._initItems(this.get("items"));
      } else if (searchCallback && search) {
        const maxItems = this.get("maxSearchItems", 1e3);
        let items = yield searchCallback.call(this, search);
        if (maxItems && items.length > maxItems) {
          items = items.slice(0, maxItems - 1);
          items.push({
            id: "",
            className: "am5stock-list-info",
            label: this._root.language.translateAny("Search results are limited to %1.", void 0, "" + maxItems)
          });
        }
        this._initItems(items);
      } else {
        const list = this.getPrivate("list");
        if (list) {
          const items = list.getElementsByTagName("li");
          each(items, (item) => {
            const regex = new RegExp(search || "", "i");
            if (!search || item.innerText.match(regex)) {
              item.style.display = "";
            } else {
              item.style.display = "none";
            }
          });
        }
      }
    });
  }
  addItem(info) {
    const list = this.getPrivate("list");
    const item = document.createElement("li");
    item.className = "am5stock-list-item";
    item.setAttribute("title", info.subLabel || info.label);
    if (info.className) {
      item.className += " " + info.className;
    }
    if (info.icon) {
      item.appendChild(info.icon);
    }
    let inputId;
    if (info.form) {
      const input = document.createElement("input");
      inputId = "am5stock-list-" + info.id;
      input.type = info.form;
      input.setAttribute("tabindex", "-1");
      if (info.value) {
        input.value = info.value;
      }
      if (info.form == "radio") {
        input.name = info.id;
        inputId += "-" + info.value;
      }
      if (info.checked) {
        input.checked = true;
      }
      input.id = inputId;
      this._disposers.push(addEventListener(item, "click", (ev) => {
        if (ev.target !== input) {
          input.checked = !input.checked;
        }
        this.events.dispatch("changed", {
          type: "changed",
          item: info,
          value: input.checked,
          checked: input.checked,
          target: this
        });
      }));
      item.appendChild(input);
    }
    const label = document.createElement("label");
    label.innerHTML = info.label;
    if (info.label == "") {
      label.style.display = "none";
    }
    item.appendChild(label);
    if (info.subLabel) {
      const subLabel = document.createElement("label");
      subLabel.className = "am5stock-list-sub";
      subLabel.innerHTML = info.subLabel;
      item.appendChild(subLabel);
    }
    if (info.id == "separator") {
      item.innerHTML = "<hr>";
    }
    list.appendChild(item);
    if (info.disabled) {
      item.className += " am5stock-disabled";
    } else {
      this._disposers.push(addEventListener(item, "click", (_ev) => {
        this.hide();
        this.events.dispatch("invoked", {
          type: "invoked",
          item: info,
          target: this
        });
      }));
    }
  }
  hide() {
    super.hide();
    this._filterItems();
    let searchBox = this.getPrivate("search");
    if (searchBox) {
      const inputs = searchBox.getElementsByTagName("input");
      let isCustomSearch = false;
      each(inputs, (input) => {
        if (input.value !== "") {
          isCustomSearch = true;
          input.value = "";
        }
      });
      if (this.get("searchCallback") && isCustomSearch) {
        this._initItems();
      }
    }
    this._currentSelectedIndex = void 0;
  }
  _setupKeyboardNav() {
    if (supports("keyboardevents")) {
      const button = this.get("control").getPrivate("button");
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        if (this.isAccessible()) {
          if (document.activeElement && (document.activeElement === button || contains(button, document.activeElement))) {
            if (ev.keyCode == 13) {
              if (document.activeElement !== button) {
                document.activeElement.click();
              }
            } else if (ev.keyCode == 38 || ev.keyCode == 40) {
              const dir = ev.keyCode == 38 ? -1 : 1;
              let index = this._currentSelectedIndex;
              if (index === void 0) {
                index = 0;
              } else {
                index += dir;
              }
              const items = this._getActiveItems();
              if (index < 0) {
                index = items.length - 1;
              } else if (index >= items.length) {
                index = 0;
              }
              this.setTimeout(() => {
                focus(items.item(index));
                this._currentSelectedIndex = index;
              }, 15);
            }
          }
        }
      }));
    }
  }
  _maybeMakeAccessible() {
    super._maybeMakeAccessible();
    if (this.isAccessible()) {
      const items = this._getActiveItems();
      items.forEach((item) => {
        item.setAttribute("tabindex", "-1");
        item.setAttribute("aria-label", item.getAttribute("title") || "");
      });
    }
  }
  _getActiveItems() {
    return this.getPrivate("list").querySelectorAll(".am5stock-list-item:not(.am5stock-list-info, .am5stock-list-heading, .am5stock-disabled)");
  }
};
Object.defineProperty(DropdownList, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownList"
});
Object.defineProperty(DropdownList, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Dropdown.classNames.concat([DropdownList.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DrawingToolControl.js
var DrawingToolControl = class extends StockControl {
  _afterNew() {
    super._afterNew();
    const list = DropdownList.new(this._root, {
      control: this,
      parent: this.getPrivate("button"),
      scrollable: this.get("scrollable", false)
    });
    this.setPrivate("list", list);
    list.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    list.events.on("invoked", (ev) => {
      this.setTool(ev.item.label);
      this.events.dispatch("selected", {
        type: "selected",
        tool: ev.item.id,
        target: this
      });
    });
    this.on("active", (active) => {
      if (active) {
        this.setTimeout(() => list.show(), 10);
      } else {
        list.hide();
      }
    });
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
    this._initTools();
  }
  setTool(tool) {
    this.getPrivate("icon").innerHTML = "";
    this.getPrivate("icon").appendChild(this._getToolIcon(tool));
    this._setLabel(this._root.language.translateAny(tool));
  }
  _initTools() {
    const list = this.getPrivate("list");
    const tools = this.get("tools");
    const items = [];
    each(tools, (tool) => {
      items.push({
        id: tool,
        label: this._root.language.translateAny(tool),
        icon: this._getToolIcon(tool)
      });
    });
    list.set("items", items);
  }
  _getToolIcon(tool) {
    return StockIcons.getIcon(tool);
  }
  _afterChanged() {
    super._afterChanged();
    if (this.isDirty("tools")) {
      this._initTools();
    }
  }
  _dispose() {
    super._dispose();
  }
};
Object.defineProperty(DrawingToolControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DrawingToolControl"
});
Object.defineProperty(DrawingToolControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([DrawingToolControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownListControl.js
var DropdownListControl = class extends StockControl {
  _afterNew() {
    super._afterNew();
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
  }
  _initElements() {
    super._initElements();
    const dropdownSettings = {
      control: this,
      parent: this.getPrivate("button"),
      searchable: this.get("searchable", false),
      scrollable: this.get("scrollable", false),
      items: [],
      exclude: this.get("exclude")
    };
    const maxSearchItems = this.get("maxSearchItems");
    if (maxSearchItems) {
      dropdownSettings.maxSearchItems = maxSearchItems;
    }
    const searchCallback = this.get("searchCallback");
    if (searchCallback) {
      dropdownSettings.searchCallback = searchCallback;
    }
    const items = this.get("items");
    let currentItem = this.get("currentItem");
    if (items) {
      each(items, (item) => {
        const itemObject = isString(item) ? {
          id: item,
          label: item
        } : item;
        dropdownSettings.items.push(itemObject);
        if (isString(currentItem) && currentItem == itemObject.id) {
          currentItem = itemObject;
        }
      });
    }
    const dropdown = DropdownList.new(this._root, dropdownSettings);
    this.setPrivate("dropdown", dropdown);
    if (currentItem) {
      this.setItem(currentItem);
    }
    dropdown.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    dropdown.events.on("invoked", (ev) => {
      this.setItem(ev.item);
      this.events.dispatch("selected", {
        type: "selected",
        item: ev.item,
        target: this
      });
    });
    this.on("active", (active) => {
      if (active) {
        this.setTimeout(() => dropdown.show(), 10);
      } else {
        dropdown.hide();
      }
    });
  }
  setItem(item) {
    if (this.get("fixedLabel") !== true) {
      const label = this.getPrivate("label");
      if (isString(item)) {
        label.innerHTML = item;
      } else {
        if (item.icon) {
          const icon = this.getPrivate("icon");
          icon.innerHTML = "";
          icon.appendChild(item.icon.cloneNode(true));
          icon.style.display = "";
        } else {
        }
        if (item.label) {
          label.innerHTML = item.label;
          label.style.display = "";
        } else {
          label.innerHTML = "";
          label.style.display = "none";
        }
      }
    }
  }
  /**
   * Selects an item by its id.
   *
   * @since 5.9.0
   * @param  id  Item ID
   */
  setItemById(id) {
    const item = this.getItemById(id);
    if (item !== void 0) {
      this.setItem(item);
      this.events.dispatch("selected", {
        type: "selected",
        item,
        target: this
      });
    }
  }
  /**
   * Returns list item by ID.
   *
   * @since 5.9.0
   * @param  id  Item ID
   * @return     Dropdown item
   */
  getItemById(id) {
    let found;
    const items = this.get("items", []);
    eachContinue(items, (item) => {
      let itemId = isObject(item) ? item.id : item;
      if (itemId == id) {
        found = item;
        return false;
      }
      return true;
    });
    return found;
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("items")) {
      const dropdown = this.getPrivate("dropdown");
      if (dropdown) {
        const items = this.get("items");
        const dropdownItems = [];
        let currentItem = this.get("currentItem");
        if (items) {
          each(items, (item) => {
            const itemObject = isString(item) ? {
              id: item,
              label: item
            } : item;
            dropdownItems.push(itemObject);
            if (isString(currentItem) && currentItem == itemObject.id) {
              currentItem = itemObject;
            }
          });
        }
        dropdown.set("items", dropdownItems);
      }
    }
  }
  _dispose() {
    super._dispose();
  }
  _maybeMakeAccessible() {
    super._maybeMakeAccessible();
    if (this.isAccessible()) {
      const button = this.getPrivate("button");
      button.setAttribute("aria-label", button.getAttribute("title") + "; " + this._t("Press ENTER or use arrow keys to navigate"));
      if (supports("keyboardevents")) {
        this._disposers.push(addEventListener(document, "keydown", (ev) => {
          if (document.activeElement == button) {
            if (ev.keyCode == 38 || ev.keyCode == 40) {
              if (!this.get("active")) {
                this._handleClick();
              }
            }
          }
        }));
      }
    }
  }
};
Object.defineProperty(DropdownListControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownListControl"
});
Object.defineProperty(DropdownListControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([DropdownListControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownControl.js
var DropdownControl = class extends StockControl {
  _afterNew() {
    super._afterNew();
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("html")) {
      const container = this.getPrivate("container");
      if (container) {
        this.getPrivate("container").innerHTML = this.get("html", "");
      }
    }
  }
  _initElements() {
    super._initElements();
    const dropdownSettings = {
      control: this,
      parent: this.getPrivate("button"),
      scrollable: this.get("scrollable", false)
    };
    const dropdown = Dropdown.new(this._root, dropdownSettings);
    this.setPrivate("dropdown", dropdown);
    const container = document.createElement("div");
    container.className = "am5stock-control-list";
    dropdown.getPrivate("container").appendChild(container);
    this.setPrivate("container", container);
    const html = this.get("html", "");
    container.innerHTML = html;
    dropdown.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    this.on("active", (active) => {
      if (active) {
        this.setTimeout(() => dropdown.show(), 10);
      } else {
        dropdown.hide();
      }
    });
  }
  _dispose() {
    super._dispose();
  }
};
Object.defineProperty(DropdownControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DropdownControl"
});
Object.defineProperty(DropdownControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([DropdownControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/IconControl.js
var IconControl = class extends StockControl {
  _afterNew() {
    super._afterNew();
    const list = DropdownList.new(this._root, {
      control: this,
      parent: this.getPrivate("button"),
      searchable: false
    });
    this.setPrivate("list", list);
    list.getPrivate("list").className = "am5stock-control-icons";
    list.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    list.events.on("invoked", (ev) => {
      const item = JSON.parse(ev.item.id);
      let icon;
      const icons = this.get("icons");
      each(icons, (listIcon) => {
        if (item.svgPath == listIcon.svgPath) {
          icon = listIcon;
        }
      });
      if (icon) {
        this.setIcon(icon);
        this.events.dispatch("selected", {
          type: "selected",
          icon,
          target: this
        });
      }
    });
    this.on("active", (active) => {
      if (active) {
        this.setTimeout(() => list.show(), 10);
      } else {
        list.hide();
      }
    });
    this._initIcons();
  }
  setIcon(icon) {
    this.getPrivate("icon").innerHTML = "";
    this.getPrivate("icon").appendChild(this._getDrawingIcon(icon));
  }
  /**
   * Selects an icon by its SVG path.
   *
   * @since 5.9.0
   * @param  path  Item ID
   */
  setIconByPath(path) {
    const icon = this.getIconByPath(path);
    if (icon !== void 0) {
      this.setIcon(icon);
      this.events.dispatch("selected", {
        type: "selected",
        icon,
        target: this
      });
    }
  }
  /**
   * Returns icon by its SVG path.
   *
   * @since 5.9.0
   * @param  id  Item ID
   * @return     Dropdown item
   */
  getIconByPath(path) {
    let found;
    const icons = this.get("icons", []);
    eachContinue(icons, (icon) => {
      if (icon.svgPath == path) {
        found = icon;
        return false;
      }
      return true;
    });
    return found;
  }
  _initIcons() {
    const list = this.getPrivate("list");
    const icons = this.get("icons");
    const items = [];
    each(icons, (icon) => {
      items.push({
        id: JSON.stringify(icon),
        label: "",
        icon: this._getDrawingIcon(icon)
      });
    });
    list.set("items", items);
  }
  _getDrawingIcon(icon) {
    return StockIcons._getSVG({ viewbox: "0 0 50 50", path: icon.svgPath });
  }
  _afterChanged() {
    super._afterChanged();
    if (this.isDirty("icons")) {
      this._initIcons();
    }
  }
  _dispose() {
    super._dispose();
  }
};
Object.defineProperty(IconControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IconControl"
});
Object.defineProperty(IconControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([IconControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DrawingControl.js
var DrawingControl = class extends StockControl {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_drawingSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_currentEnabledSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _afterNew() {
    super._afterNew();
    if (this.getPrivate("toolbar")) {
      this._initToolbar();
    }
    const stockChart = this.get("stockChart");
    stockChart.panels.events.onAll(() => this._updatePanelBindings());
    stockChart.events.on("drawingselected", (ev) => {
      const tool = this._getSeriesTool(ev.series);
      this.set("tool", tool);
      if (!this._isInited()) {
        return;
      }
      const context = ev.series.getContext(ev.drawingId);
      if (tool == "Label" || tool == "Callout") {
        const settings = context.settings;
        if (settings) {
          this.getPrivate("labelFillControl").setColor(settings.get("fill"));
          this.getPrivate("labelFontSizeControl").setItemById(settings.get("fontSize"));
          this.getPrivate("boldControl").set("active", settings.get("fontWeight") == "bold");
          this.getPrivate("italicControl").set("active", settings.get("fontStyle") == "italic");
          this.getPrivate("labelFontFamilyControl").setItemById(settings.get("fontFamily"));
        }
        const bg = context.bgSettings;
        if (bg) {
          const strokeControl = this.getPrivate("strokeControl");
          strokeControl.setColor(bg.get("stroke"));
          strokeControl.setOpacity(bg.get("strokeOpacity"));
          const fillControl = this.getPrivate("fillControl");
          fillControl.setColor(bg.get("fill"));
          fillControl.setOpacity(bg.get("fillOpacity"));
        }
      } else {
        const stroke = context.stroke || context.settings;
        if (stroke) {
          const strokeControl = this.getPrivate("strokeControl");
          strokeControl.setColor(stroke.get("stroke"));
          strokeControl.setOpacity(stroke.get("strokeOpacity"));
          this.getPrivate("strokeWidthControl").setItemById(stroke.get("strokeWidth") + "px");
          this.getPrivate("strokeDasharrayControl").setItemById(JSON.stringify(stroke.get("strokeDasharray")));
        }
        const fill = context.fill || context.settings;
        if (fill) {
          const fillControl = this.getPrivate("fillControl");
          fillControl.setColor(fill.get("fill"));
          fillControl.setOpacity(fill.get("fillOpacity"));
        }
        const sprite = context.settings || context.sprite;
        if (sprite && sprite.get("svgPath")) {
          this.getPrivate("iconControl").setIconByPath(sprite.get("svgPath"));
        }
      }
    });
  }
  _initElements() {
    super._initElements();
  }
  _isInited() {
    return this.getPrivate("toolsContainer") ? true : false;
  }
  _resetControls() {
    this.getPrivate("eraserControl").set("active", false);
  }
  _initToolbar() {
    const stockChart = this.get("stockChart");
    const l = this._root.language;
    const toolbar = this.getPrivate("toolbar");
    const toolsContainer = document.createElement("div");
    toolsContainer.className = "am5stock-control-drawing-tools";
    toolsContainer.style.display = "none";
    this.setPrivate("toolsContainer", toolsContainer);
    toolbar.get("container").appendChild(toolsContainer);
    const toolControl = DrawingToolControl.new(this._root, {
      stockChart,
      description: l.translateAny("Drawing tool"),
      tools: this.get("tools"),
      scrollable: this.get("scrollable", false)
    });
    toolControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(toolControl.getPrivate("button"));
    this.setPrivate("toolControl", toolControl);
    toolControl.events.on("selected", (ev) => {
      eraserControl.set("active", false);
      this.set("tool", ev.tool);
    });
    toolControl.events.on("click", this._resetControls, this);
    const drawingIcons = this.get("drawingIcons");
    const iconControl = IconControl.new(this._root, {
      stockChart,
      description: l.translateAny("Arrows &amp; Icons"),
      icons: drawingIcons
    });
    iconControl.setPrivate("toolbar", toolbar);
    iconControl.setIcon(this.get("drawingIcon", drawingIcons[0]));
    toolsContainer.appendChild(iconControl.getPrivate("button"));
    this.setPrivate("iconControl", iconControl);
    iconControl.events.on("selected", (ev) => {
      this.set("drawingIcon", ev.icon);
    });
    iconControl.events.on("click", this._resetControls, this);
    const snapControl = StockControl.new(this._root, {
      stockChart,
      description: l.translateAny("Snap icon to data"),
      icon: StockIcons.getIcon("Snap")
    });
    snapControl.setPrivate("toolbar", toolbar);
    snapControl.hide();
    toolsContainer.appendChild(snapControl.getPrivate("button"));
    this.setPrivate("snapControl", snapControl);
    if (this.get("snapToData")) {
      snapControl.set("active", true);
    }
    snapControl.on("active", (_ev) => {
      this.set("snapToData", snapControl.get("active") == true);
    });
    snapControl.events.on("click", this._resetControls, this);
    const strokeControl = ColorControl.new(this._root, {
      stockChart,
      colors: this.get("colors"),
      description: l.translateAny("Line color")
    });
    strokeControl.setPrivate("toolbar", toolbar);
    strokeControl.hide();
    strokeControl.setPrivate("color", this.get("strokeColor", color(0)));
    strokeControl.setPrivate("opacity", this.get("strokeOpacity", 1));
    toolsContainer.appendChild(strokeControl.getPrivate("button"));
    this.setPrivate("strokeControl", strokeControl);
    strokeControl.events.on("selected", (ev) => {
      this.set("strokeColor", ev.color);
    });
    strokeControl.events.on("selectedOpacity", (ev) => {
      this.set("strokeOpacity", ev.opacity);
    });
    strokeControl.events.on("click", this._resetControls, this);
    const strokeWidths = [];
    each(this.get("strokeWidths", []), (width) => {
      strokeWidths.push(width + "px");
    });
    const strokeWidthControl = DropdownListControl.new(this._root, {
      stockChart,
      description: l.translateAny("Line thickness"),
      currentItem: this.get("strokeWidth", "12") + "px",
      items: strokeWidths
    });
    strokeWidthControl.setPrivate("toolbar", toolbar);
    strokeWidthControl.hide();
    strokeWidthControl.getPrivate("icon").style.display = "none";
    toolsContainer.appendChild(strokeWidthControl.getPrivate("button"));
    this.setPrivate("strokeWidthControl", strokeWidthControl);
    strokeWidthControl.events.on("selected", (ev) => {
      this.set("strokeWidth", toNumber(isString(ev.item) ? ev.item : ev.item.id));
    });
    strokeWidthControl.events.on("click", this._resetControls, this);
    const strokeDasharrays = [];
    let currentStrokeDasharray;
    const strokeDasharray = this.get("strokeDasharray", void 0);
    each(this.get("strokeDasharrays", []), (dasharray) => {
      const icon = StockIcons.getIcon("Dash");
      const id = JSON.stringify(dasharray);
      icon.setAttribute("stroke", "#000");
      icon.setAttribute("stroke-dasharray", dasharray.join(","));
      icon.setAttribute("class", "am5stock-icon-wide");
      strokeDasharrays.push({
        id,
        label: "",
        icon
      });
      if (id == JSON.stringify(strokeDasharray)) {
        currentStrokeDasharray = StockIcons.getIcon("Dash");
        currentStrokeDasharray.setAttribute("stroke", "#000");
        currentStrokeDasharray.setAttribute("stroke-dasharray", dasharray.join(","));
        currentStrokeDasharray.setAttribute("class", "am5stock-icon-wide");
      }
    });
    const strokeDasharrayControl = DropdownListControl.new(this._root, {
      stockChart,
      description: l.translateAny("Line style"),
      items: strokeDasharrays
    });
    strokeDasharrayControl.setPrivate("toolbar", toolbar);
    strokeDasharrayControl.hide();
    if (currentStrokeDasharray) {
      strokeDasharrayControl.setItem({
        id: "",
        icon: currentStrokeDasharray,
        label: ""
      });
    }
    strokeDasharrayControl.getPrivate("icon").setAttribute("class", "am5stock-control-icon am5stock-icon-wide");
    toolsContainer.appendChild(strokeDasharrayControl.getPrivate("button"));
    this.setPrivate("strokeDasharrayControl", strokeDasharrayControl);
    strokeDasharrayControl.events.on("selected", (ev) => {
      this.set("strokeDasharray", JSON.parse(ev.item.id));
    });
    strokeDasharrayControl.events.on("click", this._resetControls, this);
    const fillControl = ColorControl.new(this._root, {
      stockChart,
      colors: this.get("colors"),
      name: l.translateAny("Fill"),
      description: l.translateAny("Fill color")
    });
    fillControl.hide();
    fillControl.setPrivate("toolbar", toolbar);
    fillControl.setPrivate("color", this.get("fillColor", color(0)));
    fillControl.setPrivate("opacity", this.get("fillOpacity", 1));
    toolsContainer.appendChild(fillControl.getPrivate("button"));
    this.setPrivate("fillControl", fillControl);
    fillControl.events.on("selected", (ev) => {
      this.set("fillColor", ev.color);
    });
    fillControl.events.on("selectedOpacity", (ev) => {
      this.set("fillOpacity", ev.opacity);
    });
    fillControl.events.on("click", this._resetControls, this);
    const labelFillControl = ColorControl.new(this._root, {
      stockChart,
      colors: this.get("colors"),
      name: l.translateAny("Text"),
      description: l.translateAny("Text color"),
      useOpacity: false
    });
    labelFillControl.hide();
    labelFillControl.setPrivate("toolbar", toolbar);
    labelFillControl.setPrivate("color", this.get("labelFill", color(0)));
    toolsContainer.appendChild(labelFillControl.getPrivate("button"));
    this.setPrivate("labelFillControl", labelFillControl);
    labelFillControl.events.on("selected", (ev) => {
      this.set("labelFill", ev.color);
    });
    labelFillControl.events.on("click", this._resetControls, this);
    const fontSizes = [];
    each(this.get("labelFontSizes", []), (size) => {
      fontSizes.push(size + "");
    });
    const fontSizeControl = DropdownListControl.new(this._root, {
      stockChart,
      description: l.translateAny("Label font size"),
      currentItem: this.get("labelFontSize", "12px") + "",
      items: fontSizes,
      icon: "none"
    });
    fontSizeControl.hide();
    fontSizeControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(fontSizeControl.getPrivate("button"));
    this.setPrivate("labelFontSizeControl", fontSizeControl);
    fontSizeControl.events.on("selected", (ev) => {
      this.set("labelFontSize", isString(ev.item) ? ev.item : ev.item.id);
    });
    fontSizeControl.events.on("click", this._resetControls, this);
    const boldControl = StockControl.new(this._root, {
      stockChart,
      description: l.translateAny("Bold"),
      icon: StockIcons.getIcon("Bold")
    });
    boldControl.hide();
    boldControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(boldControl.getPrivate("button"));
    this.setPrivate("boldControl", boldControl);
    boldControl.on("active", (_ev) => {
      this.set("labelFontWeight", boldControl.get("active") ? "bold" : "normal");
    });
    boldControl.events.on("click", this._resetControls, this);
    const italicControl = StockControl.new(this._root, {
      stockChart,
      description: l.translateAny("Italic"),
      icon: StockIcons.getIcon("Italic")
    });
    italicControl.hide();
    italicControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(italicControl.getPrivate("button"));
    this.setPrivate("italicControl", italicControl);
    italicControl.on("active", (_ev) => {
      this.set("labelFontStyle", italicControl.get("active") ? "italic" : "normal");
    });
    italicControl.events.on("click", this._resetControls, this);
    const fontFamilies = [];
    each(this.get("labelFontFamilies", []), (size) => {
      fontFamilies.push(size + "");
    });
    const fontFamilyControl = DropdownListControl.new(this._root, {
      stockChart,
      description: l.translateAny("Label font family"),
      currentItem: this.get("labelFontFamily", "Arial"),
      items: fontFamilies,
      icon: "none"
    });
    fontFamilyControl.hide();
    fontFamilyControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(fontFamilyControl.getPrivate("button"));
    this.setPrivate("labelFontFamilyControl", fontFamilyControl);
    fontFamilyControl.events.on("selected", (ev) => {
      this.set("labelFontFamily", isString(ev.item) ? ev.item : ev.item.id);
    });
    fontFamilyControl.events.on("click", this._resetControls, this);
    const extensionControl = StockControl.new(this._root, {
      stockChart,
      description: l.translateAny("Show line extension"),
      icon: StockIcons.getIcon("Show Extension")
    });
    extensionControl.hide();
    extensionControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(extensionControl.getPrivate("button"));
    this.setPrivate("extensionControl", extensionControl);
    if (this.get("showExtension")) {
      extensionControl.set("active", true);
    }
    extensionControl.on("active", (_ev) => {
      this.set("showExtension", extensionControl.get("active") == true);
    });
    extensionControl.events.on("click", this._resetControls, this);
    const selectControl = StockControl.new(this._root, {
      stockChart,
      description: l.translateAny("Select"),
      icon: StockIcons.getIcon("Select"),
      active: stockChart.get("drawingSelectionEnabled")
    });
    this._disposers.push(stockChart.on("drawingSelectionEnabled", (active) => {
      selectControl.set("active", active);
    }));
    this._disposers.push(stockChart.onPrivate("drawingSelectionEnabled", (active) => {
      selectControl.set("active", active);
    }));
    selectControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(selectControl.getPrivate("button"));
    this.setPrivate("selectControl", selectControl);
    selectControl.on("active", (_ev) => {
      const active = selectControl.get("active", false);
      stockChart.setPrivate("drawingSelectionEnabled", active);
    });
    const eraserControl = StockControl.new(this._root, {
      stockChart,
      description: l.translateAny("Eraser"),
      icon: StockIcons.getIcon("Eraser")
    });
    this._disposers.push(stockChart.on("erasingEnabled", (active) => {
      eraserControl.set("active", active);
    }));
    eraserControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(eraserControl.getPrivate("button"));
    this.setPrivate("eraserControl", eraserControl);
    eraserControl.on("active", (_ev) => {
      const active = eraserControl.get("active", false);
      this.setEraser(active);
    });
    const clearControl = StockControl.new(this._root, {
      stockChart,
      name: l.translateAny("Clear"),
      description: l.translateAny("Clear all drawings"),
      icon: StockIcons.getIcon("Clear"),
      togglable: false
    });
    clearControl.setPrivate("toolbar", toolbar);
    toolsContainer.appendChild(clearControl.getPrivate("button"));
    this.setPrivate("clearControl", clearControl);
    this._disposers.push(addEventListener(clearControl.getPrivate("button"), "click", (_ev) => {
      eraserControl.set("active", false);
      this.clearDrawings();
    }));
    if (this.get("active")) {
      this._setTool(this.get("tool"));
    }
  }
  /**
   * Enables or disables eraser mode.
   *
   * @since 5.3.9
   * @param  active  Eraser active
   */
  setEraser(active) {
    this.get("stockChart").set("erasingEnabled", active);
  }
  /**
   * Clears all drawings.
   *
   * @since 5.3.9
   */
  clearDrawings() {
    each2(this._drawingSeries, (_tool, seriesList) => {
      each(seriesList, (series) => {
        series.clearDrawings();
      });
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    const isInited = this._isInited();
    if (this.isDirty("tools")) {
      const toolControl = this.getPrivate("toolControl");
      if (toolControl) {
        toolControl.set("tools", this.get("tools"));
      }
    }
    if (this.isPrivateDirty("toolbar")) {
      if (this.getPrivate("toolbar")) {
        this._initToolbar();
      }
    }
    if (this.isDirty("active")) {
      this.get("stockChart").toggleDrawing(this.get("active"));
      if (this.get("active")) {
        if (isInited) {
          this.getPrivate("toolsContainer").style.display = "block";
        }
        this._setTool(this.get("tool"));
        if (isInited) {
          focus(this.getPrivate("toolControl").getPrivate("button"));
        }
      } else {
        if (isInited) {
          this.getPrivate("toolsContainer").style.display = "none";
        }
        if (this.get("tool")) {
          this._setTool();
        }
      }
    }
    if (this.isDirty("tool") && this.get("active")) {
      this._setTool(this.get("tool"));
    }
    const rootEvents = this._root.events;
    if (this.isDirty("strokeColor") || this.isDirty("strokeWidth") || this.isDirty("strokeOpacity") || this.isDirty("strokeDasharray")) {
      rootEvents.once("frameended", () => {
        this._setStroke();
      });
    }
    if (this.isDirty("fillColor") || this.isDirty("fillOpacity")) {
      rootEvents.once("frameended", () => {
        this._setFill();
      });
    }
    if (this.isDirty("labelFill") || this.isDirty("labelFontSize") || this.isDirty("labelFontFamily") || this.isDirty("labelFontWeight") || this.isDirty("labelFontStyle")) {
      rootEvents.once("frameended", () => {
        this._setLabel();
      });
    }
    if (this.isDirty("showExtension")) {
      rootEvents.once("frameended", () => {
        this._setExtension();
      });
    }
    if (this.isDirty("drawingIcon")) {
      rootEvents.once("frameended", () => {
        this._setDrawingIcon();
      });
    }
    if (this.isDirty("snapToData")) {
      rootEvents.once("frameended", () => {
        this._setSnap();
      });
    }
  }
  _setTool(tool) {
    const isInited = this._isInited();
    each(this._currentEnabledSeries, (series) => {
      series.disableDrawing();
    });
    this._currentEnabledSeries = [];
    if (!tool) {
      if (isInited) {
        this.getPrivate("eraserControl").set("active", false);
      }
      const stockChart = this.get("stockChart");
      stockChart.setPrivate("drawingSelectionEnabled", false);
      stockChart.unselectDrawings();
      return;
    }
    this._maybeInitToolSeries(tool);
    let seriesList = this._drawingSeries[tool];
    let prevPanel;
    each(seriesList, (series) => {
      if (prevPanel !== series.chart) {
        series.enableDrawing();
        this._currentEnabledSeries.push(series);
        prevPanel = series.chart;
      }
    });
    if (isInited) {
      this.getPrivate("toolControl").setTool(tool);
      const controls = {
        strokeControl: ["Average", "Callout", "Doodle", "Ellipse", "Fibonacci Timezone", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Line Arrow", "Parallel Channel", "Polyline", "Polyfill", "Triangle", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
        strokeWidthControl: ["Average", "Doodle", "Ellipse", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Line Arrow", "Polyline", "Polyfill", "Triangle", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line", "Parallel Channel"],
        strokeDasharrayControl: ["Average", "Doodle", "Ellipse", "Horizontal Line", "Horizontal Ray", "Arrows &amp; Icons", "Line", "Line Arrow", "Polyline", "Polyfill", "Triangle", "Quadrant Line", "Rectangle", "Regression", "Trend Line", "Vertical Line"],
        extensionControl: ["Average", "Line", "Regression", "Trend Line"],
        fillControl: ["Callout", "Ellipse", "Quadrant Line", "Rectangle", "Parallel Channel", "Polyfill", "Triangle", "Polyfill", "Triangle", "Arrows &amp; Icons", "Fibonacci Timezone"],
        labelFillControl: ["Callout", "Label"],
        labelFontSizeControl: ["Callout", "Label"],
        labelFontFamilyControl: ["Callout", "Label"],
        boldControl: ["Callout", "Label"],
        italicControl: ["Callout", "Label"],
        iconControl: ["Arrows &amp; Icons"],
        snapControl: ["Callout", "Arrows &amp; Icons", "Line", "Line Arrow", "Polyline", "Polyfill", "Triangle", "Parallel Channel", "Label", "Callout", "Horizontal Line", "Horizontal Ray", "Vertical Line", "Quadrant Line", "Rectangle", "Measure", "Fibonacci"]
      };
      each2(controls, (control, tools) => {
        const controlElement = this.getPrivate(control);
        if (tools.indexOf(tool) == -1) {
          controlElement.hide();
        } else {
          controlElement.show();
        }
      });
    }
  }
  _maybeInitToolSeries(tool) {
    let seriesList = this._drawingSeries[tool];
    if (!seriesList) {
      seriesList = [];
    }
    const initializedPanels = [];
    each(seriesList, (series) => {
      initializedPanels.push(series.chart);
    });
    const chartSeries = this.get("series", []);
    const stockChart = this.get("stockChart");
    stockChart.panels.each((panel) => {
      if (initializedPanels.indexOf(panel) == -1) {
        const targetSeries = this._getPanelMainSeries(panel);
        if (targetSeries) {
          chartSeries.push(targetSeries);
        }
      }
    });
    if (chartSeries.length > 0) {
      const toolSettings = this.get("toolSettings", {});
      each(chartSeries, (chartSeries2) => {
        let series;
        const xAxis = chartSeries2.get("xAxis");
        const yAxis = chartSeries2.get("yAxis");
        const panel = chartSeries2.chart;
        let template;
        if (toolSettings[tool]) {
          template = Template.new(toolSettings[tool]);
          const toolTemplates = this.getPrivate("toolTemplates", {});
          toolTemplates[tool] = template;
          this.setPrivate("toolTemplates", toolTemplates);
        }
        switch (tool) {
          case "Arrows &amp; Icons":
            const icon = this.get("drawingIcon", this.get("drawingIcons")[0]);
            series = IconSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis,
              iconSvgPath: icon.svgPath,
              iconScale: icon.scale,
              iconCenterX: icon.centerX,
              iconCenterY: icon.centerY
            }, template);
            break;
          case "Average":
            series = AverageSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Callout":
            series = CalloutSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Doodle":
            series = DoodleSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            series.fills.template.setAll({
              forceHidden: true
            });
            break;
          case "Ellipse":
            series = EllipseSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Fibonacci":
            series = FibonacciSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Fibonacci Timezone":
            series = FibonacciTimezoneSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Horizontal Line":
            series = HorizontalLineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Horizontal Ray":
            series = HorizontalRaySeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Label":
            series = LabelSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Line":
            series = SimpleLineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Line Arrow":
            series = LineArrowSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Measure":
            series = Measure.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Parallel Channel":
            series = ParallelChannelSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Polyline":
            series = PolylineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            series.fills.template.setAll({
              forceHidden: true
            });
            break;
          case "Polyfill":
            series = PolylineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis,
              fillShape: true
            }, template);
            series.fills.template.setAll({
              forceHidden: true
            });
            break;
          case "Triangle":
            series = PolylineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis,
              fillShape: true,
              pointCount: 3
            }, template);
            series.fills.template.setAll({
              forceHidden: true
            });
            break;
          case "Quadrant Line":
            series = QuadrantLineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Rectangle":
            series = RectangleSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Regression":
            series = RegressionSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Trend Line":
            series = TrendLineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
          case "Vertical Line":
            series = VerticalLineSeries.new(this._root, {
              series: chartSeries2,
              xAxis,
              yAxis
            }, template);
            break;
        }
        if (series) {
          seriesList.push(series);
          panel.drawings.push(series);
          series.setPrivate("baseValueSeries", chartSeries2);
          series.set("valueYShow", stockChart.getSeriesDefault(chartSeries2, "valueYShow"));
          series.set("calculateAggregates", true);
          if (stockChart.getPrivate("comparing")) {
            stockChart.setPercentScale(true);
          }
        }
      });
      this._drawingSeries[tool] = seriesList;
      this._setStroke();
      this._setFill();
      this._setLabel();
      this._setDrawingIcon();
      this._setSnap();
      this._setExtension();
    }
  }
  _updateSeriesBindings(panel) {
    const targetSeries = this._getPanelMainSeries(panel);
    if (targetSeries) {
      each2(this._drawingSeries, (_tool, seriesList) => {
        eachReverse(seriesList, (series) => {
          if (series.chart == panel) {
            if (panel.isDisposed()) {
              remove(seriesList, series);
            } else {
              series.set("series", targetSeries);
              series.setPrivate("baseValueSeries", targetSeries);
            }
          }
        });
      });
    }
  }
  _getPanelMainSeries(panel) {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    let targetSeries;
    if (stockSeries && stockSeries.chart == panel) {
      targetSeries = stockSeries;
    } else {
      targetSeries = panel.series.getIndex(0);
    }
    return targetSeries;
  }
  _updatePanelBindings() {
    const stockChart = this.get("stockChart");
    stockChart.panels.each((panel) => {
      panel.series.events.onAll(() => this._updateSeriesBindings(panel));
    });
  }
  _setStroke() {
    const strokeDasharray = JSON.stringify(this.get("strokeDasharray"));
    each2(this._drawingSeries, (_tool, seriesList) => {
      each(seriesList, (series) => {
        series.setAll({
          strokeColor: this.get("strokeColor"),
          strokeWidth: this.get("strokeWidth"),
          strokeOpacity: this.get("strokeOpacity")
        });
        if (JSON.stringify(series.get("strokeDasharray")) !== strokeDasharray) {
          series.set("strokeDasharray", this.get("strokeDasharray"));
        }
      });
    });
  }
  _setFill() {
    each2(this._drawingSeries, (_tool, seriesList) => {
      each(seriesList, (series) => {
        series.setAll({
          fillColor: this.get("fillColor"),
          fillOpacity: this.get("fillOpacity")
        });
      });
    });
  }
  _setLabel() {
    const labelTools = ["Callout", "Label"];
    each2(this._drawingSeries, (tool, seriesList) => {
      if (labelTools.indexOf(tool) != -1) {
        each(seriesList, (series) => {
          series.setAll({
            labelFill: this.get("labelFill"),
            labelFontSize: this.get("labelFontSize"),
            labelFontFamily: this.get("labelFontFamily"),
            labelFontWeight: this.get("labelFontWeight"),
            labelFontStyle: this.get("labelFontStyle")
          });
        });
      }
    });
  }
  _setExtension() {
    each2(this._drawingSeries, (_tool, seriesList) => {
      each(seriesList, (series) => {
        if (series instanceof SimpleLineSeries) {
          series.setAll({
            showExtension: this.get("showExtension")
          });
        }
      });
    });
  }
  _setDrawingIcon() {
    if (!this._isInited()) {
      return;
    }
    const icon = this.get("drawingIcon", this.get("drawingIcons")[0]);
    const fillControl = this.getPrivate("fillControl");
    if (icon.fillDisabled) {
      fillControl.hide();
    } else {
      fillControl.show();
    }
    each2(this._drawingSeries, (_tool, seriesList) => {
      each(seriesList, (series) => {
        if (series instanceof IconSeries) {
          series.setAll({
            iconSvgPath: icon.svgPath,
            iconScale: icon.scale,
            iconCenterX: icon.centerX,
            iconCenterY: icon.centerY,
            fillOpacity: icon.fillDisabled ? 0 : this.get("fillOpacity")
          });
        }
      });
    });
  }
  _setSnap() {
    const snap = this.get("snapToData", false);
    each2(this._drawingSeries, (_tool, seriesList) => {
      each(seriesList, (series) => {
        if (series.getPrivate("allowChangeSnap")) {
          series.set("snapToData", snap);
        }
      });
    });
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Draw");
  }
  _dispose() {
    super._dispose();
    const toolsContainer = this.getPrivate("toolsContainer");
    if (toolsContainer) {
      removeElement(toolsContainer);
    }
  }
  _getSeriesTool(series) {
    if (series instanceof DrawingSeries) {
      let name = series.className;
      if (name == "SimpleLineSeries") {
        return "Line";
      } else if (name == "IconSeries") {
        return "Arrows &amp; Icons";
      } else if (name == "PolylineSeries" && series.get("pointCount") == 3) {
        return "Triangle";
      } else if (name == "PolylineSeries" && series.get("fillShape")) {
        return "Polyfill";
      }
      name = addSpacing(name.replace("Series", ""));
      return name;
    }
  }
  /**
   * Serializes all drawings into an array of simple objects or JSON.
   *
   * `output` parameter can either be `"object"` or `"string"` (default).
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param   output Output format
   * @param   indent Line indent in JSON
   * @return         Serialized indicators
   */
  serializeDrawings(output = "string", indent) {
    const res = [];
    this.get("stockChart").panels.each((panel, panelIndex) => {
      panel.series.each((series) => {
        if (series.isType("DrawingSeries")) {
          const serializer = Serializer.new(this.root, {
            includeSettings: ["strokeColor", "fillColor", "strokeOpacity", "fillOpacity", "strokeWidth", "strokeDasharray", "field", "snapToData", "svgPath", "labelFontSize", "labelFontFamily", "labelFontWeight", "labelFontStyle", "labelFill", "showExtension"],
            //includeSettings: ["data"],
            maxDepth: 4
          });
          series.data.values.map((row) => {
            row.__parse = true;
          });
          const json = {
            __tool: this._getSeriesTool(series),
            __panelIndex: panelIndex,
            __drawing: serializer.serialize(series.data.values, 0, true)
          };
          res.push(json);
        }
      });
    });
    return output == "object" ? res : JSON.stringify(res, void 0, indent);
  }
  /**
   * Parses data serialized with `serializeDrawings()` and adds drawings to the
   * chart.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param  data Serialized data
   */
  unserializeDrawings(data) {
    const stockChart = this.get("stockChart");
    if (isString(data)) {
      data = JSON.parse(data);
    }
    if (!isArray(data)) {
      data = [data];
    }
    each(data, (drawing) => {
      let panel = stockChart.panels.getIndex(drawing.__panelIndex || 0);
      if (panel) {
        const tool = drawing.__tool;
        this._maybeInitToolSeries(tool);
        let drawingSeries;
        each(this._drawingSeries[tool] || [], (series) => {
          if (series.chart === panel) {
            drawingSeries = series;
          }
        });
        if (!drawing.settings) {
          drawing.settings = {};
        }
        JsonParser.new(this._root).parse(drawing.__drawing).then((drawingData) => {
          this._updateDrawingIndexes(drawingData, drawingSeries._index, drawingSeries);
          drawingSeries.data.pushAll(drawingData);
        });
      } else {
        stockChart.panels.events.once("push", (ev) => {
          ev.newValue.series.events.once("push", (_ev) => {
            this.unserializeDrawings(drawing);
          });
        });
      }
    });
  }
  _updateDrawingIndexes(drawingData, index, drawingSeries) {
    if (isArray(drawingData)) {
      each(drawingData, (item) => {
        this._updateDrawingIndexes(item, index, drawingSeries);
      });
    } else if (isObject(drawingData) && drawingData.index !== void 0) {
      drawingData.index += index;
      drawingSeries._index = drawingData.index;
    }
  }
  /**
   * Returns an object that holds all drawing series, arrange by tool (key).
   *
   * @since 5.8.0
   * @readonly
   */
  get drawingSeries() {
    return this._drawingSeries;
  }
  /**
   * Adds a line drawing.
   *
   * Supported tools: `"Horizontal Line"`, `"Horizontal Ray"`, `"Vertical Line"`.
   *
   * @param  tool   Drawing tool
   * @param  panel  Panel
   * @param  point  Point
   * @since 5.10.2
   */
  addLine(tool, panel, point) {
    this._maybeInitToolSeries(tool);
    const seriesList = this._drawingSeries[tool];
    let targetSeries;
    each(seriesList, (series) => {
      if (panel === series.chart) {
        targetSeries = series;
      }
    });
    if (targetSeries) {
      targetSeries.addLine(point);
    }
  }
};
Object.defineProperty(DrawingControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DrawingControl"
});
Object.defineProperty(DrawingControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([DrawingControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/IndicatorControl.js
var IndicatorControl = class extends DropdownListControl {
  _afterNew() {
    super._afterNew();
    const list = this.getPrivate("dropdown");
    this.setPrivate("list", list);
    list.events.on("invoked", (ev) => {
      const indicator = this.addIndicator(ev.item.id);
      if (this.events.isEnabled("selected") && indicator) {
        this.events.dispatch("selected", {
          type: "selected",
          target: this,
          indicator,
          item: ev.item
        });
      }
    });
    list.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    this.on("active", (active) => {
      if (active) {
        this.setTimeout(() => list.show(), 10);
      } else {
        list.hide();
      }
    });
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
    this._initList();
    this.get("stockChart").on("volumeSeries", () => this._initList());
  }
  _initList() {
    const list = this.getPrivate("list");
    const indicators = this.get("indicators");
    const items = [];
    each(indicators, (indicator) => {
      if (isObject(indicator)) {
        if (this.supportsIndicator(indicator.id)) {
          items.push({
            id: indicator.id,
            label: indicator.name
          });
        }
      } else {
        if (this.supportsIndicator(indicator)) {
          items.push({
            id: indicator,
            label: this._root.language.translateAny(indicator)
          });
        }
      }
    });
    list.set("items", items);
  }
  /**
   * Returns `true` if the indicator is supported in current chart setup.
   *
   * @param   indicatorId  Indicator ID
   * @return               Supported?
   */
  supportsIndicator(indicatorId) {
    const stockChart = this.get("stockChart");
    const volumeIndicators = ["Chaikin Money Flow", "Chaikin Oscillator", "On Balance Volume", "Price Volume Trend", "Volume", "Volume Profile", "VWAP"];
    return stockChart.get("volumeSeries") || volumeIndicators.indexOf(indicatorId) === -1 ? true : false;
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Indicator");
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("indicators")) {
      this._initList();
    }
  }
  /**
   * Removes all indicators from the stock chart.
   *
   * @since 5.9.3
   */
  clearIndicators() {
    const stockChart = this.get("stockChart");
    stockChart.indicators.eachReverse((indicator) => {
      indicator.dispose();
    });
  }
  /**
   * Creates a specific indicator, adds it to chart, and returns the instance.
   *
   * @param   indicatorId  Indicator ID
   * @return               Indicator instance
   */
  addIndicator(indicatorId) {
    if (!this.supportsIndicator(indicatorId)) {
      return;
    }
    const stockChart = this.get("stockChart");
    let indicator;
    const stockSeries = stockChart.get("stockSeries");
    const volumeSeries = stockChart.get("volumeSeries");
    const legend = this.get("legend");
    switch (indicatorId) {
      case "Acceleration Bands":
        indicator = AccelerationBands.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Accumulation Distribution":
        indicator = AccumulationDistribution.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "Accumulative Swing Index":
        indicator = AccumulativeSwingIndex.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Aroon":
        indicator = Aroon.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Awesome Oscillator":
        indicator = AwesomeOscillator.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Bollinger Bands":
        indicator = BollingerBands.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Bull Bear Power":
        indicator = BullBearPower.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "Chaikin Money Flow":
        indicator = ChaikinMoneyFlow.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "Chaikin Oscillator":
        indicator = ChaikinOscillator.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "Commodity Channel Index":
        indicator = CommodityChannelIndex.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Disparity Index":
        indicator = DisparityIndex.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Heikin Ashi":
        indicator = HeikinAshi.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "MACD":
        indicator = MACD.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Median Price":
        indicator = MedianPrice.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Momentum":
        indicator = Momentum.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Moving Average Cross":
        indicator = MACross.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Moving Average":
        indicator = MovingAverage.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Moving Average Deviation":
        indicator = MovingAverageDeviation.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Moving Average Envelope":
        indicator = MovingAverageEnvelope.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Standard Deviation":
        indicator = StandardDeviation.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Trix":
        indicator = Trix.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Typical Price":
        indicator = TypicalPrice.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Average True Range":
        indicator = AverageTrueRange.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "On Balance Volume":
        indicator = OnBalanceVolume.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "Price Volume Trend":
        indicator = PVT.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "Relative Strength Index":
        indicator = RelativeStrengthIndex.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Stochastic Momentum Index":
        indicator = StochasticMomentumIndex.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Stochastic Oscillator":
        indicator = StochasticOscillator.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Super Trend":
        indicator = SuperTrend.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
      case "Williams R":
        indicator = WilliamsR.new(this.root, {
          stockChart,
          stockSeries
        });
        break;
      case "Volume":
        indicator = Volume.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries
        });
        break;
      case "Volume Profile":
        indicator = VolumeProfile.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "VWAP":
        indicator = VWAP.new(this.root, {
          stockChart,
          stockSeries,
          volumeSeries,
          legend
        });
        break;
      case "ZigZag":
        indicator = ZigZag.new(this.root, {
          stockChart,
          stockSeries,
          legend
        });
        break;
    }
    if (!indicator) {
      eachContinue(this.get("indicators", []), (item) => {
        if (isObject(item) && item.id == indicatorId) {
          indicator = item.callback.call(this);
          return false;
        }
        return true;
      });
    }
    if (indicator) {
      if (!stockChart.indicators.contains(indicator)) {
        stockChart.indicators.push(indicator);
      }
      if (indicator._editableSettings.length && indicator.get("autoOpenSettings", true)) {
        const modal = stockChart.getPrivate("settingsModal");
        modal.events.once("done", (ev) => {
          if (indicator) {
            if (!ev.settings) {
              indicator.dispose();
            }
          }
        });
        modal.openIndicator(indicator);
      }
    }
    return indicator;
  }
  /**
   * Serializes all available indicators into an array of simple objects or
   * JSON.
   *
   * `output` parameter can either be `"object"` or `"string"` (default).
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param   output Output format
   * @param   indent Line indent in JSON
   * @return         Serialized indicators
   */
  serializeIndicators(output = "string", indent) {
    const res = [];
    const stockChart = this.get("stockChart");
    stockChart.indicators.each((indicator) => {
      const serializer = Serializer.new(this._root, {
        excludeSettings: ["stockChart", "stockSeries", "volumeSeries", "legend"]
      });
      const json = {};
      if (indicator.get("stockSeries")) {
        json.__stockSeries = true;
      }
      if (indicator.get("volumeSeries")) {
        json.__volumeSeries = true;
      }
      const legend = indicator.get("legend");
      if (legend) {
        legend._walkParents((parent) => {
          if (parent.isType("StockPanel")) {
            json.__legendIndex = stockChart.panels.indexOf(parent);
          }
        });
      }
      json.__indicator = serializer.serialize(indicator, 0);
      res.push(json);
    });
    return output == "object" ? res : JSON.stringify(res, void 0, indent);
  }
  /**
   * Parses data serialized with `serializeIndicators()` and adds indicators to
   * the chart.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
   * @since 5.3.0
   * @param  data Serialized data
   */
  unserializeIndicators(data) {
    const stockChart = this.get("stockChart");
    if (isString(data)) {
      data = JSON.parse(data);
    }
    each(data, (indicator) => {
      if (!indicator.__indicator.settings) {
        indicator.__indicator.settings = {};
      }
      indicator.__indicator.settings.stockChart = stockChart;
      if (indicator.__stockSeries && !indicator.__indicator.settings.stockSeries) {
        indicator.__indicator.settings.stockSeries = stockChart.get("stockSeries");
      }
      if (indicator.__volumeSeries && !indicator.__indicator.settings.volumeSeries) {
        indicator.__indicator.settings.volumeSeries = stockChart.get("volumeSeries");
      }
      if (indicator.__legendIndex !== void 0 && !indicator.__indicator.settings.legend) {
        const panel = stockChart.panels.getIndex(indicator.__legendIndex);
        if (panel) {
          panel.walkChildren((child) => {
            if (child.isType("StockLegend")) {
              indicator.__indicator.settings.legend = child;
            }
          });
        }
      }
      JsonParser.new(this._root).parse(indicator.__indicator).then((indicator2) => {
        if (indicator2 instanceof Indicator) {
          stockChart.indicators.push(indicator2);
        }
      });
    });
  }
};
Object.defineProperty(IndicatorControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IndicatorControl"
});
Object.defineProperty(IndicatorControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DropdownListControl.classNames.concat([IndicatorControl.className])
});

// node_modules/flatpickr/dist/esm/types/options.js
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== void 0)
    e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/formatting.js
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c, i, arr) {
      return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var fn = _a2.fn, val = _a2.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: default_default
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== void 0 && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0)
      return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind(element2, ev, handler, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind(el, event, handler, options);
      });
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce(onResize, 50);
    self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self.daysContainer, "mouseover", function(e) {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== void 0) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      var selText = function(e) {
        return getEventTarget(e).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, { capture: true });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0)
        bind(self.secondElement, "focus", function() {
          return self.secondElement && self.secondElement.select();
        });
      if (self.amPM !== void 0) {
        bind(self.amPM, "click", function(e) {
          updateTime(e);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && getEventTarget(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function(e) {
        var target = getEventTarget(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths; m--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (var i = self.config.showMonths; i--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i = self.config.showMonths; i--; ) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== void 0)
      self.altInput.value = "";
    if (self.mobileInput !== void 0)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0)
      triggerEvent("onDestroy");
    for (var i = self._handlers.length; i--; ) {
      self._handlers[i].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k) {
      try {
        delete self[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
          self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        var parsed = self.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = getEventTarget(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(void 0, delta_1);
              else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter(function(x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);
            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
        dayElem.classList.remove(c);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i = 0; i < boolOpts.length; i++)
      self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== void 0;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function(acc, child) {
      return acc + child.offsetHeight;
    }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = findParent(getEventTarget(e), isSelectable);
    if (t === void 0)
      return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort(function(a, b) {
          return a.getTime() - b.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0)
      self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach(function(x) {
            return x();
          });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach(function(x) {
          return x();
        });
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d) {
        return self.parseDate(d, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else
      self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range")
      self.selectedDates.sort(function(a, b) {
        return a.getTime() - b.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, void 0),
          to: self.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter(function(x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind(self.mobileInput, "change", function(e) {
      self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true)
      return self.close();
    self.open(e);
  }
  function triggerEvent(event, data) {
    if (self.config === void 0)
      return;
    var hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++)
        hooks[i](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach(function(yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = getEventTarget(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var esm_default = flatpickr;

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DateRangeSelector.js
var DateRangeSelector = class extends StockControl {
  _afterNew() {
    super._afterNew();
    const dropdown = Dropdown.new(this._root, {
      control: this,
      parent: this.getPrivate("button")
    });
    this.setPrivate("dropdown", dropdown);
    dropdown.events.on("opened", (_ev) => {
      this.set("active", true);
      this._updateInputs();
    });
    dropdown.events.on("closed", (_ev) => {
      this.set("active", false);
    });
    this.on("active", (active) => {
      if (active) {
        this.setTimeout(() => {
          dropdown.show();
        }, 10);
      } else {
        dropdown.hide();
      }
    });
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-control-dropdown";
    if (this.get("useDefaultCSS", true)) {
      this._loadDefaultCSS();
    }
    this._initDropdown();
  }
  _initDropdown() {
    const dropdown = this.getPrivate("dropdown");
    const container = dropdown.getPrivate("container");
    const allowInput = this.get("allowInput", true);
    const content = document.createElement("div");
    content.className = "am5stock-row";
    container.appendChild(content);
    const fromColumn = document.createElement("div");
    fromColumn.className = "am5stock-column";
    content.appendChild(fromColumn);
    const fromGroup = document.createElement("div");
    fromGroup.className = "am5stock-group";
    fromColumn.appendChild(fromGroup);
    const fromLabel = document.createElement("div");
    fromLabel.className = "am5stock-small";
    fromLabel.innerHTML = this._root.language.translate("From %1", void 0, "");
    fromGroup.appendChild(fromLabel);
    const fromField = document.createElement("input");
    fromField.type = "text";
    if (allowInput) {
      fromField.setAttribute("aria-label", this._root.language.translateAny("From date"));
    } else {
      fromField.setAttribute("aria-label", this._root.language.translateAny("From date") + "; " + this._root.language.translateAny("Use arrow keys and ENTER to selected a date"));
    }
    fromGroup.appendChild(fromField);
    this.setPrivate("fromField", fromField);
    const toColumn = document.createElement("div");
    toColumn.className = "am5stock-column";
    content.appendChild(toColumn);
    const toGroup = document.createElement("div");
    toGroup.className = "am5stock-group";
    toColumn.appendChild(toGroup);
    const toLabel = document.createElement("div");
    toLabel.className = "am5stock-small";
    toLabel.innerHTML = this._root.language.translate("To %1", void 0, "");
    toGroup.appendChild(toLabel);
    const toField = document.createElement("input");
    toField.type = "text";
    if (allowInput) {
      toField.setAttribute("aria-label", this._root.language.translateAny("To date"));
    } else {
      toField.setAttribute("aria-label", this._root.language.translateAny("To date") + "; " + this._root.language.translateAny("Use arrow keys and ENTER to selected a date"));
    }
    toGroup.appendChild(toField);
    this.setPrivate("toField", toField);
    const pickerLocale = this._getPickerLocale();
    const disableWeekDays = this.get("disableWeekDays", []);
    const disable = disableWeekDays.length ? [
      function(date) {
        return disableWeekDays.indexOf(date.getDay()) !== -1;
      }
    ] : [];
    const fromPicker = esm_default(fromField, {
      inline: true,
      appendTo: fromColumn,
      allowInput,
      locale: pickerLocale,
      disable,
      formatDate: (date) => {
        return this._formatDate(date);
      },
      parseDate: (date) => {
        return this._parseDate(date);
      }
    });
    this.setPrivate("fromPicker", fromPicker);
    const toPicker = esm_default(toField, {
      inline: true,
      appendTo: toColumn,
      allowInput,
      locale: pickerLocale,
      disable,
      formatDate: (date) => {
        return this._formatDate(date);
      },
      parseDate: (date) => {
        return this._parseDate(date);
      }
    });
    this.setPrivate("toPicker", toPicker);
    const buttons = document.createElement("div");
    buttons.className = "am5stock-row";
    container.appendChild(buttons);
    const buttonsColumn = document.createElement("div");
    buttonsColumn.className = "am5stock-column";
    container.appendChild(buttonsColumn);
    const saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = this._root.language.translateAny("Apply");
    saveButton.className = "am5-modal-button am5-modal-primary";
    buttonsColumn.appendChild(saveButton);
    const xAxis = this._getAxis();
    xAxis.onPrivate("selectionMin", () => {
      if (this.getPrivate("fromDate")) {
        this._updateInputs();
        this._updateLabel();
      }
    });
    xAxis.onPrivate("selectionMax", () => {
      if (this.getPrivate("toDate")) {
        this._updateInputs();
        this._updateLabel();
      }
    });
    xAxis.onPrivate("minFinal", () => {
      this._updatePickers();
    });
    xAxis.onPrivate("maxFinal", () => {
      this._updatePickers();
    });
    this._disposers.push(addEventListener(saveButton, "click", () => {
      const from = this._parseDate(fromField.value);
      const to = this._parseDate(toField.value);
      to.setHours(23, 59, 59);
      this.setPrivate("fromDate", from);
      this.setPrivate("toDate", to);
      xAxis.zoomToDates(from, to);
      this._updateLabel();
      this.set("active", false);
      const type = "rangeselected";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this,
          fromDate: from,
          toDate: to
        });
      }
    }));
    const cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = this._root.language.translateAny("Cancel");
    cancelButton.className = "am5-modal-button am5-modal-scondary";
    buttonsColumn.appendChild(cancelButton);
    this._disposers.push(addEventListener(cancelButton, "click", () => {
      this.set("active", false);
    }));
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Calendar");
  }
  _afterChanged() {
    super._afterChanged();
  }
  _updateInputs() {
    const xAxis = this._getAxis();
    const min = xAxis.getPrivate("selectionMin", 0);
    const max = xAxis.getPrivate("selectionMax", 0);
    if (!min || !max) {
      return;
    }
    const from = new Date(min + 1);
    const to = new Date(max - 1);
    this.setPrivate("fromDate", from);
    this.setPrivate("toDate", to);
    this.getPrivate("fromField").value = this._formatDate(from);
    this.getPrivate("toField").value = this._formatDate(to);
    const fromPicker = this.getPrivate("fromPicker");
    const minDate = fromPicker.config.minDate;
    if (!minDate || minDate <= from) {
      fromPicker.setDate(from);
    } else {
      fromPicker.setDate(minDate);
    }
    const toPicker = this.getPrivate("toPicker");
    const maxDate = toPicker.config.maxDate;
    if (!maxDate || maxDate >= to) {
      toPicker.setDate(to);
    } else {
      toPicker.setDate(maxDate);
    }
  }
  _updatePickers() {
    const xAxis = this._getAxis();
    const minDate = this.get("minDate");
    const maxDate = this.get("maxDate");
    const toPicker = this.getPrivate("toPicker");
    const fromPicker = this.getPrivate("fromPicker");
    if (minDate == "auto") {
      const min = xAxis.getPrivate("minFinal");
      if (min) {
        fromPicker.set("minDate", new Date(min + 1));
        toPicker.set("minDate", new Date(min + 1));
      }
    } else if (minDate instanceof Date) {
      fromPicker.set("minDate", minDate);
      toPicker.set("minDate", minDate);
    } else {
      fromPicker.set("minDate", void 0);
      toPicker.set("minDate", void 0);
    }
    if (maxDate == "auto") {
      const max = xAxis.getPrivate("maxFinal") - 1;
      if (max) {
        fromPicker.set("maxDate", new Date(max));
        toPicker.set("maxDate", new Date(max));
      }
    } else if (maxDate instanceof Date) {
      fromPicker.set("maxDate", maxDate);
      toPicker.set("maxDate", maxDate);
    } else {
      fromPicker.set("maxDate", void 0);
      toPicker.set("maxDate", void 0);
    }
  }
  _updateLabel() {
    const from = this.getPrivate("fromDate");
    const to = this.getPrivate("toDate");
    let label = "";
    if (from && to) {
      label = this._formatDate(from) + " -- " + this._formatDate(to);
    } else {
      label = this._root.language.translateAny("Date Range");
    }
    this.set("name", label);
  }
  _formatDate(date) {
    return this._root.dateFormatter.format(date, this._getDateFormat(), true);
  }
  _parseDate(date) {
    return this._root.dateFormatter.parse(date, this._getDateFormat(), false);
  }
  _getDateFormat() {
    const format = this.get("dateFormat", this._root.dateFormatter.get("dateFormat"));
    return isString(format) ? format : "MM/dd/yyyy";
  }
  _getAxis() {
    const stockChart = this.get("stockChart");
    const chart = stockChart.panels.getIndex(0);
    const xAxis = chart.xAxes.getIndex(0);
    return xAxis;
  }
  _getPickerLocale() {
    const l = this._root.language;
    const locale = {
      weekdays: {
        shorthand: [
          l.translate("Sun"),
          l.translate("Mon"),
          l.translate("Tue"),
          l.translate("Wed"),
          l.translate("Thu"),
          l.translate("Fri"),
          l.translate("Sat")
        ],
        longhand: [
          l.translate("Sunday"),
          l.translate("Monday"),
          l.translate("Tuesday"),
          l.translate("Wednesday"),
          l.translate("Thursday"),
          l.translate("Friday"),
          l.translate("Saturday")
        ]
      },
      months: {
        shorthand: [
          l.translate("Jan"),
          l.translate("Feb"),
          l.translate("Mar"),
          l.translate("Apr"),
          l.translate("May(short)"),
          l.translate("Jun"),
          l.translate("Jul"),
          l.translate("Aug"),
          l.translate("Sep"),
          l.translate("Oct"),
          l.translate("Nov"),
          l.translate("Dec")
        ],
        longhand: [
          l.translate("January"),
          l.translate("February"),
          l.translate("March"),
          l.translate("April"),
          l.translate("May"),
          l.translate("June"),
          l.translate("July"),
          l.translate("August"),
          l.translate("September"),
          l.translate("October"),
          l.translate("November"),
          l.translate("December")
        ]
      },
      firstDayOfWeek: this._root.locale.firstDayOfWeek,
      ordinal: l.translateFunc("_dateOrd"),
      rangeSeparator: " " + l.translateAny("to") + " ",
      weekAbbreviation: l.translateAny("Wk"),
      scrollTitle: l.translateAny("Scroll to increment"),
      toggleTitle: l.translateAny("Click to toggle"),
      amPM: [l.translate("AM"), l.translate("PM")],
      yearAriaLabel: l.translateAny("Year"),
      monthAriaLabel: l.translateAny("Month"),
      hourAriaLabel: l.translateAny("Hour"),
      minuteAriaLabel: l.translateAny("Minute"),
      time_24hr: true
    };
    return locale;
  }
  /**
   * Loads the default CSS.
   *
   * @ignore Exclude from docs
   */
  _loadDefaultCSS() {
    const ic = this._root.interfaceColors;
    const primary = ic.get("primaryButton").toCSS();
    const primary2 = ic.get("primaryButtonHover").toCSS();
    const text = ic.get("text").toCSS();
    const border = ic.get("secondaryButtonActive").toCSS();
    const bg = ic.get("background").toCSS();
    this._disposers.push(new StyleSheet(null, `
.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  -webkit-animation: none;
          animation: none;
  direction: ltr;
  border: 0;
  font-size: 12px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 200px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  background: ${bg};
  margin-top: 0.5em;
}
.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}
.flatpickr-calendar.open {
  display: inline-block;
  z-index: 99999;
}
.flatpickr-calendar.animate.open {
  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}
.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}
.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}
.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}
.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid ${border};
}
.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}
.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  left: 22px;
}
.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}
.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}
.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
}
.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
}
.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}
.flatpickr-calendar.arrowTop:before {
  border-bottom-color: ${border};
}
.flatpickr-calendar.arrowTop:after {
  border-bottom-color: ${bg};
}
.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}
.flatpickr-calendar.arrowBottom:before {
  border-top-color: ${border};
}
.flatpickr-calendar.arrowBottom:after {
  border-top-color: ${bg};
}
.flatpickr-calendar:focus {
  outline: 0;
}
.flatpickr-wrapper {
  position: relative;
  display: inline-block;
}
.flatpickr-months {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-months .flatpickr-month {
  background: transparent;
  color: ${text};
  fill: ${text};
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 3;
  color: ${text};
  fill: ${text};
}
.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}
.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  left: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  right: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: ${primary2};
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: ${primary2};
}
.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
}
.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  -webkit-transition: fill 0.1s;
  transition: fill 0.1s;
  fill: inherit;
}
.numInputWrapper {
  position: relative;
  height: auto;
}
.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}
.numInputWrapper input {
  width: 100%;
}
.numInputWrapper input::-ms-clear {
  display: none;
}
.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid rgba(64,72,72,0.15);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.numInputWrapper span:hover {
  background: rgba(0,0,0,0.1);
}
.numInputWrapper span:active {
  background: rgba(0,0,0,0.2);
}
.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}
.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}
.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgba(64,72,72,0.6);
  top: 26%;
}
.numInputWrapper span.arrowDown {
  top: 50%;
}
.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgba(64,72,72,0.6);
  top: 40%;
}
.numInputWrapper span svg {
  width: inherit;
  height: auto;
}
.numInputWrapper span svg path {
  fill: rgba(60,63,64,0.5);
}
.numInputWrapper:hover {
  background: rgba(0,0,0,0.05);
}
.numInputWrapper:hover span {
  opacity: 1;
}
.flatpickr-current-month {
  margin-top: 1px;
  font-size: 125%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
}
.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}
.flatpickr-current-month span.cur-month:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0;
  display: inline-block;
}
.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: ${text};
}
.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: ${text};
}
.flatpickr-current-month input.cur-year {
  background: transparent;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}
.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: rgba(60,63,64,0.5);
  background: transparent;
  pointer-events: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: transparent;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
  max-width: 93px;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: ${bg};
  outline: none;
  padding: 0;
}
.flatpickr-weekdays {
  background: transparent;
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  height: 28px;
}
.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: transparent;
  color: ${text};
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-weight: bolder;
}
.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}
.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 200px;
}
.flatpickr-days:focus {
  outline: 0;
}
.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: inline-block;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-around;
          justify-content: space-around;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}
.dayContainer + .dayContainer {
  -webkit-box-shadow: -1px 0 0 ${border};
          box-shadow: -1px 0 0 ${border};
}
.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: ${text};
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  -webkit-flex-basis: 14.2857143%;
      -ms-flex-preferred-size: 14.2857143%;
          flex-basis: 14.2857143%;
  max-width: 32px;
  height: 32px;
  line-height: 30px;
  margin: 0;
  display: inline-block;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
}
.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: ${primary2};
  border-color: ${primary2};
}
.flatpickr-day.today {
  border-color: ${primary2};
}
.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: ${primary2};
  background: ${primary2};
  color: ${bg};
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: ${primary};
  -webkit-box-shadow: none;
          box-shadow: none;
  color: ${bg};
  border-color: ${primary};
}
.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}
.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}
.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  -webkit-box-shadow: -10px 0 0 ${primary};
          box-shadow: -10px 0 0 ${primary};
}
.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}
.flatpickr-day.inRange {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 ${primary2}, 5px 0 0 ${primary2};
          box-shadow: -5px 0 0 ${primary2}, 5px 0 0 ${primary2};
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: rgba(64,72,72,0.3);
  background: transparent;
  cursor: default;
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: rgba(64,72,72,0.1);
}
.flatpickr-day.week.selected {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 ${primary}, 5px 0 0 ${primary};
          box-shadow: -5px 0 0 ${primary}, 5px 0 0 ${primary};
}
.flatpickr-day.hidden {
  visibility: hidden;
}
.rangeMode .flatpickr-day {
  margin-top: 1px;
}
.flatpickr-weekwrapper {
  float: left;
}
.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
  -webkit-box-shadow: 1px 0 0 ${border};
          box-shadow: 1px 0 0 ${border};
}
.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}
.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: rgba(64,72,72,0.3);
  background: transparent;
  cursor: default;
  border: none;
}
.flatpickr-innerContainer {
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
}
.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}
.flatpickr-time .numInputWrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}
.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: ${text};
}
.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: ${text};
}
.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}
.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}
.flatpickr-time input {
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  color: ${text};
  font-size: 14px;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}
.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}
.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}
.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  color: ${text};
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
}
.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}
.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: #f1f1f1;
}
.flatpickr-input[readonly] {
  cursor: pointer;
}
@-webkit-keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
@keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
.flatpickr-calendar {
  width: 200px;
}
.dayContainer {
  padding: 0;
  border-right: 0;
}
span.flatpickr-day,
span.flatpickr-day.prevMonthDay,
span.flatpickr-day.nextMonthDay {
  border-radius: 0 !important;
  border: 1px solid ${primary2};
  max-width: none;
  border-right-color: transparent;
}
span.flatpickr-day:nth-child(n+8),
span.flatpickr-day.prevMonthDay:nth-child(n+8),
span.flatpickr-day.nextMonthDay:nth-child(n+8) {
  border-top-color: transparent;
}
span.flatpickr-day:nth-child(7n-6),
span.flatpickr-day.prevMonthDay:nth-child(7n-6),
span.flatpickr-day.nextMonthDay:nth-child(7n-6) {
  border-left: 0;
}
span.flatpickr-day:nth-child(n+36),
span.flatpickr-day.prevMonthDay:nth-child(n+36),
span.flatpickr-day.nextMonthDay:nth-child(n+36) {
  border-bottom: 0;
}
span.flatpickr-day:nth-child(-n+7),
span.flatpickr-day.prevMonthDay:nth-child(-n+7),
span.flatpickr-day.nextMonthDay:nth-child(-n+7) {
  margin-top: 0;
}
span.flatpickr-day.today:not(.selected),
span.flatpickr-day.prevMonthDay.today:not(.selected),
span.flatpickr-day.nextMonthDay.today:not(.selected) {
  border-color: ${primary2};
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: ${primary2};
}
span.flatpickr-day.today:not(.selected):hover,
span.flatpickr-day.prevMonthDay.today:not(.selected):hover,
span.flatpickr-day.nextMonthDay.today:not(.selected):hover {
  border: 1px solid ${primary2};
}
span.flatpickr-day.startRange,
span.flatpickr-day.prevMonthDay.startRange,
span.flatpickr-day.nextMonthDay.startRange,
span.flatpickr-day.endRange,
span.flatpickr-day.prevMonthDay.endRange,
span.flatpickr-day.nextMonthDay.endRange {
  border-color: ${primary};
}
span.flatpickr-day.today,
span.flatpickr-day.prevMonthDay.today,
span.flatpickr-day.nextMonthDay.today,
span.flatpickr-day.selected,
span.flatpickr-day.prevMonthDay.selected,
span.flatpickr-day.nextMonthDay.selected {
  z-index: 2;
}
.rangeMode .flatpickr-day {
  margin-top: -1px;
}
.flatpickr-weekwrapper .flatpickr-weeks {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.flatpickr-weekwrapper span.flatpickr-day {
  border: 0;
  margin: -1px 0 0 -1px;
}
.hasWeeks .flatpickr-days {
  border-right: 0;
}

	@media screen and (min-width:0\\0) and (min-resolution: +72dpi) {
		span.flatpickr-day {
			display: block;
			-webkit-box-flex: 1;
			-webkit-flex: 1 0 auto;
			    -ms-flex: 1 0 auto;
			        flex: 1 0 auto;
		}
	}
		`, this._root.nonce));
  }
};
Object.defineProperty(DateRangeSelector, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DateRangeSelector"
});
Object.defineProperty(DateRangeSelector, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([DateRangeSelector.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/PeriodSelector.js
var PeriodSelector = class extends StockControl {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_groupChangedDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_groupChangedTo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    const button = this.getPrivate("button");
    button.className = button.className + " am5stock-no-hover";
    this._initPeriodButtons();
  }
  _initPeriodButtons() {
    const container = this.getPrivate("label");
    container.style.display = "";
    const periods = this.get("periods", []);
    const axis = this._getAxis();
    axis.onPrivate("min", () => this._setPeriodButtonStatus());
    axis.onPrivate("max", () => this._setPeriodButtonStatus());
    each(periods, (period) => {
      const button = document.createElement("a");
      button.innerHTML = period.name || (period.timeUnit.toUpperCase() + period.count || "1");
      button.className = "am5stock-link";
      button.setAttribute("data-period", period.timeUnit + (period.count || ""));
      container.appendChild(button);
      this._disposers.push(addEventListener(button, "click", (_ev) => {
        this.setPrivate("deferReset", false);
        this._resetActiveButtons();
        this.selectPeriod(period);
        this.setPrivate("deferReset", true);
        addClass(button, "am5stock-active");
        const timeout = this.getPrivate("deferTimeout");
        if (timeout) {
          timeout.dispose();
        }
        this.setPrivate("deferTimeout", this.setTimeout(() => this.setPrivate("deferReset", false), axis.get("interpolationDuration", 1e3) + 200));
      }));
    });
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        if (this.isAccessible()) {
          const button = this.getPrivate("button");
          if (document.activeElement && (document.activeElement === button || contains(button, document.activeElement))) {
            if ([37, 38, 39, 40].indexOf(ev.keyCode) !== -1) {
              const dir = ev.keyCode == 37 || ev.keyCode == 38 ? -1 : 1;
              const items = this._getPeriodButtons();
              const selected = container.querySelectorAll(".am5stock-link:focus");
              let index = -1;
              if (selected.length > 0) {
                items.forEach((item, key) => {
                  if (item === selected.item(0)) {
                    index = key;
                  }
                });
              }
              index += dir;
              if (index < 0) {
                index = items.length - 1;
              } else if (index >= items.length) {
                index = 0;
              }
              focus(items.item(index));
            } else if (ev.keyCode == 13) {
              document.activeElement.click();
            }
          }
        }
      }));
    }
    this._maybeMakeAccessible();
  }
  _resetActiveButtons() {
    if (this.getPrivate("deferReset") !== true) {
      const container = this.getPrivate("label");
      const buttons = container.getElementsByClassName("am5stock-active");
      each(buttons, (b) => {
        removeClass(b, "am5stock-active");
      });
      let axis = this.getPrivate("axis");
      if (!axis) {
        axis = this._getAxis();
        this.setPrivate("axis", axis);
        this._disposers.push(new MultiDisposer([
          axis.on("start", () => this._resetActiveButtons()),
          axis.on("end", () => this._resetActiveButtons())
        ]));
      }
    }
  }
  _setPeriodButtonStatus() {
    if (this.get("hideLongPeriods")) {
      let axis = this.getPrivate("axis");
      const container = this.getPrivate("label");
      const buttons = container.getElementsByTagName("a");
      if (!axis) {
        axis = this._getAxis();
        const min = axis.getPrivate("min", 0);
        const max = axis.getPrivate("max", 0);
        if (min && max) {
          const diff = max - min;
          const periods = this.get("periods", []);
          each(periods, (period) => {
            if (period.timeUnit !== "ytd" && period.timeUnit !== "max") {
              const plen = getDuration(period.timeUnit, period.count || 1);
              const id = period.timeUnit + (period.count || "");
              for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (button.getAttribute("data-period") == id) {
                  if (plen > diff) {
                    addClass(button, "am5stock-hidden");
                  } else {
                    removeClass(button, "am5stock-hidden");
                  }
                }
              }
            }
          });
        }
      }
    }
  }
  // protected _getDefaultIcon(): SVGElement {
  // 	return StockIcons.getIcon("Period");
  // }
  _afterChanged() {
    super._afterChanged();
    if (this.isPrivateDirty("toolbar")) {
      this._maybeMakeAccessible();
    }
  }
  _getChart() {
    return this.get("stockChart").panels.getIndex(0);
  }
  _getAxis() {
    return this._getChart().xAxes.getIndex(0);
  }
  _getMaxOrMax(which) {
    const stockChart = this.get("stockChart");
    const series = stockChart.get("stockSeries");
    const axis = this._getAxis();
    let val = axis.getPrivate(which);
    if (series && series.dataItems.length > 0) {
      let baseInterval = axis.get("baseInterval");
      let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
      const dataSet = series._dataSets[mainDataSetId] || series.dataItems;
      const dataItem = dataSet[which == "min" ? 0 : dataSet.length - 1];
      if (which == "min" && dataItem.open !== void 0 && dataItem.open["valueX"] !== void 0) {
        val = dataItem.open["valueX"];
      } else if (which == "max" && dataItem.close !== void 0 && dataItem.close["valueX"] !== void 0) {
        val = dataItem.close["valueX"] - 1;
      }
    }
    return new Date(val);
  }
  _getMax() {
    return this._getMaxOrMax("max");
  }
  _getMin() {
    return this._getMaxOrMax("min");
  }
  selectPeriod(period) {
    const type = "periodselected";
    if (this.events.isEnabled(type)) {
      this.events.dispatch(type, {
        type,
        target: this,
        period
      });
    }
    const fromStart = this.get("zoomTo", "end") == "start";
    this._highlightPeriod(period);
    if (period.timeUnit == "max") {
      this._getChart().zoomOut();
    } else if (period.timeUnit == "custom") {
      const axis = this._getAxis();
      let start = period.start || this._getMin();
      let end = period.end || this._getMax();
      axis.zoomToDates(start, end);
    } else {
      const axis = this._getAxis();
      let end = this._getMax();
      let start;
      if (period.timeUnit == "ytd") {
        start = new Date(end.getFullYear(), 0, 1, 0, 0, 0, 0);
        end = this._getMax();
        if (axis.get("groupData")) {
          axis.zoomToDates(start, end, 0);
          setTimeout(() => {
            axis.zoomToDates(start, end, 0);
          }, 10);
          return;
        }
      } else {
        const timeUnit = period.timeUnit;
        if (axis.get("groupData")) {
          const interval = axis.getGroupInterval(getDuration(timeUnit, period.count));
          if (interval) {
            const firstDay = this._root.locale.firstDayOfWeek;
            const timezone = this._root.timezone;
            const utc = this._root.utc;
            if (fromStart) {
              start = this._getMin();
              let startTime = start.getTime();
              if (startTime != null) {
                start = round2(new Date(startTime), interval.timeUnit, interval.count, firstDay, utc, void 0, timezone);
                start.setTime(start.getTime() + getDuration(interval.timeUnit, interval.count * 0.95));
                start = round2(start, interval.timeUnit, interval.count, firstDay, utc, void 0, timezone);
              }
              end = add(new Date(start), timeUnit, period.count || 1);
            } else {
              let endTime = this._getMax().getTime();
              if (endTime != null) {
                end = round2(new Date(endTime), interval.timeUnit, interval.count, firstDay, utc, void 0, timezone);
                end.setTime(end.getTime() + getDuration(interval.timeUnit, interval.count * 1.05));
                end = round2(end, interval.timeUnit, interval.count, firstDay, utc, void 0, timezone);
              }
              start = add(new Date(end), timeUnit, (period.count || 1) * -1);
            }
            if (this._groupChangedDp) {
              this._groupChangedDp.dispose();
              this._groupChangedDp = void 0;
            }
            if (this._groupChangedTo) {
              this._groupChangedTo.dispose();
            }
            this._groupChangedDp = axis.events.once("groupintervalchanged", () => {
              axis.zoomToDates(start, end, 0);
            });
            axis.zoomToDates(start, end, 0);
            this._groupChangedTo = this.setTimeout(() => {
              if (this._groupChangedDp) {
                this._groupChangedDp.dispose();
              }
              this._groupChangedTo = void 0;
            }, 500);
            return;
          }
        }
        if (fromStart) {
          start = this._getMin();
          end = add(new Date(start), timeUnit, period.count || 1);
        } else {
          start = add(new Date(end), timeUnit, (period.count || 1) * -1);
        }
      }
      axis.zoomToDates(start, end);
    }
  }
  _highlightPeriod(period) {
    const id = period.timeUnit + (period.count || "");
    const container = this.getPrivate("label");
    const buttons = container.getElementsByTagName("a");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      if (button.getAttribute("data-period") == id && id != "custom") {
        addClass(button, "am5stock-active");
      } else {
        removeClass(button, "am5stock-active");
      }
    }
  }
  _maybeMakeAccessible() {
    super._maybeMakeAccessible();
    if (this.isAccessible()) {
      const button = this.getPrivate("button");
      button.setAttribute("aria-label", button.getAttribute("title") + "; " + this._t("Press ENTER or use arrow keys to navigate"));
      const items = this._getPeriodButtons();
      items.forEach((item) => {
        item.setAttribute("tabindex", "-1");
        item.setAttribute("aria-label", item.getAttribute("title") || "");
      });
    }
  }
  _getPeriodButtons() {
    return this.getPrivate("label").querySelectorAll(".am5stock-link");
  }
};
Object.defineProperty(PeriodSelector, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PeriodSelector"
});
Object.defineProperty(PeriodSelector, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([PeriodSelector.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/SeriesTypeControl.js
var SeriesTypeControl = class extends DropdownListControl {
};
Object.defineProperty(SeriesTypeControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SeriesTypeControl"
});
Object.defineProperty(SeriesTypeControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DropdownListControl.classNames.concat([SeriesTypeControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/IntervalControl.js
var IntervalControl = class extends DropdownListControl {
  _getDefaultIcon() {
    return StockIcons.getIcon("Interval");
  }
};
Object.defineProperty(IntervalControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "IntervalControl"
});
Object.defineProperty(IntervalControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DropdownListControl.classNames.concat([IntervalControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/ResetControl.js
var ResetControl = class extends StockControl {
  _afterNew() {
    super._afterNew();
    this.events.on("click", () => {
      const stockChart = this.get("stockChart");
      stockChart.panels.each((panel) => {
        panel.drawings.each((drawing) => {
          drawing.data.clear();
        });
      });
      stockChart.indicators.clear();
    });
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Reset");
  }
};
Object.defineProperty(ResetControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ResetControl"
});
Object.defineProperty(ResetControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: StockControl.classNames.concat([ResetControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/DataSaveControl.js
var DataSaveControl = class extends DropdownListControl {
  _afterNew() {
    super._afterNew();
    this.setPrivate("storageId", window.location.href + "-" + this.root.dom.id);
    const stockChart = this.get("stockChart");
    const dropdown = this.getPrivate("dropdown");
    if (localStorage && localStorage.getItem(this._getStorageId("autosave")) == "1") {
      this.root.events.once("frameended", () => {
        this.restoreData();
        this.set("autoSave", true);
      });
    }
    dropdown.events.on("changed", (ev) => {
      if (ev.item.id == "autosave") {
        const autoSave = !ev.item.checked;
        this.set("autoSave", autoSave);
        if (autoSave) {
          this.saveData();
        }
      }
    });
    dropdown.events.on("invoked", (ev) => {
      if (ev.item.id == "save") {
        this.saveData();
      } else if (ev.item.id == "restore") {
        this.restoreData();
      } else if (ev.item.id == "clear") {
        this.clearData();
      }
    });
    this.on("active", () => {
      this._populateInputs();
    });
    stockChart.events.on("drawingsupdated", (_ev) => {
      if (this.get("autoSave")) {
        this.saveData();
      }
    });
    stockChart.events.on("indicatorsupdated", (_ev) => {
      if (this.get("autoSave")) {
        this.saveData();
      }
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("autoSave") && localStorage) {
      const autoSave = this.get("autoSave", false);
      if (autoSave) {
        localStorage.setItem(this._getStorageId("autosave"), "1");
      } else {
        localStorage.removeItem(this._getStorageId("autosave"));
      }
      this._populateInputs();
    }
  }
  saveData() {
    if (localStorage) {
      const drawingControl = this._getDrawingControl();
      const indicatorControl = this._getIndicatorControl();
      const drawings = drawingControl.serializeDrawings("string", "  ");
      const indicators = indicatorControl.serializeIndicators("string", "  ");
      if (drawings == "[]") {
        localStorage.removeItem(this._getStorageId("drawings"));
      } else {
        localStorage.setItem(this._getStorageId("drawings"), drawings);
      }
      if (indicators == "[]") {
        localStorage.removeItem(this._getStorageId("indicators"));
      } else {
        localStorage.setItem(this._getStorageId("indicators"), indicators);
      }
      this.events.dispatch("saved", {
        target: this,
        type: "saved",
        drawings,
        indicators
      });
    }
  }
  restoreData() {
    if (localStorage) {
      const stockChart = this.get("stockChart");
      stockChart.panels.each((panel) => {
        panel.drawings.each((drawing) => {
          drawing.data.clear();
        });
      });
      stockChart.indicators.clear();
      const drawingControl = this._getDrawingControl();
      const indicatorControl = this._getIndicatorControl();
      const drawings = localStorage.getItem(this._getStorageId("drawings")) || "[]";
      const indicators = localStorage.getItem(this._getStorageId("indicators")) || "[]";
      drawingControl.unserializeDrawings(drawings);
      indicatorControl.unserializeIndicators(indicators);
      this.events.dispatch("restored", {
        target: this,
        type: "restored",
        drawings,
        indicators
      });
    }
  }
  clearData() {
    if (localStorage) {
      localStorage.removeItem(this._getStorageId("drawings"));
      localStorage.removeItem(this._getStorageId("indicators"));
      this.events.dispatch("cleared", {
        target: this,
        type: "cleared"
      });
    }
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Save");
  }
  _populateInputs() {
    const dropdown = this.getPrivate("dropdown");
    const items = dropdown.get("items", []);
    const autoSave = this.get("autoSave", false);
    const isSavedData = localStorage && (localStorage.getItem(this._getStorageId("drawings")) !== null || localStorage.getItem(this._getStorageId("indicators")) !== null);
    each(items, (item) => {
      if (!localStorage) {
        item.disabled = true;
      } else if (item.id == "restore") {
        item.disabled = autoSave || !isSavedData;
      } else if (item.id == "clear") {
        item.disabled = !isSavedData;
      } else if (item.id == "save") {
        item.disabled = autoSave;
      } else if (item.id == "autosave") {
        item.checked = autoSave;
      }
    });
    dropdown.rebuildList();
  }
  _getStorageId(bucket) {
    return "am5-stock-" + this.get("storageId", this.getPrivate("storageId", "")) + "-" + bucket;
  }
  _getDrawingControl() {
    let drawingControl = this.getPrivate("drawingControl");
    if (drawingControl) {
      return drawingControl;
    }
    const stockChart = this.get("stockChart");
    drawingControl = stockChart.getControl("DrawingControl");
    if (!drawingControl) {
      drawingControl = DrawingControl.new(this.root, {
        stockChart
      });
      this.setPrivate("drawingControl", drawingControl);
    }
    return drawingControl;
  }
  _getIndicatorControl() {
    let indicatorControl = this.getPrivate("indicatorControl");
    if (indicatorControl) {
      return indicatorControl;
    }
    const stockChart = this.get("stockChart");
    indicatorControl = stockChart.getControl("IndicatorControl");
    if (!indicatorControl) {
      indicatorControl = IndicatorControl.new(this.root, {
        stockChart
      });
      this.setPrivate("indicatorControl", indicatorControl);
    }
    return indicatorControl;
  }
};
Object.defineProperty(DataSaveControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DataSaveControl"
});
Object.defineProperty(DataSaveControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DropdownListControl.classNames.concat([DataSaveControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/SettingsControl.js
var SettingsControl = class extends DropdownListControl {
  _afterNew() {
    super._afterNew();
    const dropdown = this.getPrivate("dropdown");
    dropdown.events.on("changed", (ev) => {
      const stockChart = this.get("stockChart");
      const stockSeries = stockChart.get("stockSeries");
      if (stockSeries) {
        if (ev.item.id == "y-scale") {
          if (ev.item.value == "percent") {
            stockChart.setPercentScale(true);
            this._setLogarithmic(false);
          } else {
            stockChart.setPercentScale(false);
            this._setLogarithmic(ev.item.value == "logarithmic");
          }
        } else if (ev.item.id == "fills") {
          this._setFills(ev.checked);
        }
      }
      if (ev.item.id == "autosave") {
        const autoSave = ev.checked;
        let dataSaveControl = this.getPrivate("dataSaveControl");
        dataSaveControl.set("autoSave", autoSave);
      }
    });
    this.on("active", () => {
      this._populateInputs();
    });
    this._disposers.push(this.root.events.on("frameended", () => {
      const stockChart = this.get("stockChart");
      const serializableTools = stockChart.getControl("IndicatorControl") || stockChart.getControl("DrawingControl") ? true : false;
      let dataSaveControl = stockChart.getControl("DataSaveControl");
      if (!serializableTools) {
        const exclude = dropdown.get("exclude", []);
        exclude.push("save");
        exclude.push("autosave");
        dropdown.set("exclude", ["save", "autosave"]);
      } else {
        if (!dataSaveControl) {
          dataSaveControl = DataSaveControl.new(this.root, {
            stockChart,
            autoSave: this.get("autoSave", false),
            storageId: this.get("storageId")
          });
        }
        this.setPrivate("dataSaveControl", dataSaveControl);
        this.set("autoSave", dataSaveControl.get("autoSave"));
        this._populateInputs();
      }
    }));
  }
  _getDefaultIcon() {
    return StockIcons.getIcon("Settings");
  }
  _populateInputs() {
    const button = this.getPrivate("button");
    const inputs = button.getElementsByTagName("input");
    const currentScale = this._getYScale();
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      switch (input.id) {
        case "am5stock-list-autosave":
          input.checked = this.get("autoSave", this.getPrivate("dataSaveControl").get("autoSave", false));
          break;
        case "am5stock-list-fills":
          input.checked = this._getFillEnabled();
          break;
        case "am5stock-list-y-scale-percent":
        case "am5stock-list-y-scale-regular":
        case "am5stock-list-y-scale-logarithmic":
          input.checked = input.value == currentScale;
          break;
      }
    }
  }
  _getFillEnabled() {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    if (stockSeries) {
      const xAxis = stockSeries.get("xAxis");
      const fills = xAxis.get("renderer").axisFills.values;
      return fills.length > 0 && fills[0].get("visible", false);
    }
    return false;
  }
  _getYScale() {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    if (stockSeries) {
      const yAxis = stockSeries.get("yAxis");
      if (yAxis instanceof ValueAxis) {
        if (stockSeries.get("valueYShow") == "valueYChangeSelectionPercent") {
          return "percent";
        }
        if (yAxis.get("logarithmic")) {
          return "logarithmic";
        }
      }
    }
    return "regular";
  }
  _setLogarithmic(value) {
    const stockChart = this.get("stockChart");
    const stockSeries = stockChart.get("stockSeries");
    if (stockSeries) {
      const yAxis = stockSeries.get("yAxis");
      if (yAxis instanceof ValueAxis) {
        each(yAxis.series, (series) => {
          series.resetExtremes();
          series.markDirtyValues();
        });
        yAxis.set("logarithmic", value);
      }
    }
  }
  _setFills(enabled) {
    const stockChart = this.get("stockChart");
    stockChart.panels.each((panel) => {
      panel.xAxes.each((xAxis) => {
        xAxis.get("renderer").axisFills.template.set("visible", enabled);
        xAxis.get("renderer").grid.template.set("forceHidden", enabled);
      });
    });
  }
};
Object.defineProperty(SettingsControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SettingsControl"
});
Object.defineProperty(SettingsControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DropdownListControl.classNames.concat([SettingsControl.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/stock/toolbar/ComparisonControl.js
var ComparisonControl = class extends DropdownListControl {
  _getDefaultIcon() {
    return StockIcons.getIcon("Comparison");
  }
};
Object.defineProperty(ComparisonControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ComparisonControl"
});
Object.defineProperty(ComparisonControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DropdownListControl.classNames.concat([ComparisonControl.className])
});
export {
  AccelerationBands,
  AccumulationDistribution,
  AccumulativeSwingIndex,
  Aroon,
  AverageSeries,
  AverageTrueRange,
  AwesomeOscillator,
  BollingerBands,
  BullBearPower,
  CalloutSeries,
  ChaikinMoneyFlow,
  ChaikinOscillator,
  ChartIndicator,
  ColorControl,
  CommodityChannelIndex,
  ComparisonControl,
  DataSaveControl,
  DateRangeSelector,
  DisparityIndex,
  DoodleSeries,
  DrawingControl,
  DrawingSeries,
  DrawingToolControl,
  Dropdown,
  DropdownColors,
  DropdownControl,
  DropdownList,
  DropdownListControl,
  EllipseSeries,
  FibonacciSeries,
  FibonacciTimezoneSeries,
  HeikinAshi,
  HorizontalLineSeries,
  HorizontalRaySeries,
  IconControl,
  IconSeries,
  Indicator,
  IndicatorControl,
  IntervalControl,
  LabelSeries,
  LineArrowSeries,
  MACD,
  MACross,
  Measure,
  MedianPrice,
  Momentum,
  MovingAverage,
  MovingAverageDeviation,
  MovingAverageEnvelope,
  OnBalanceVolume,
  OverboughtOversold,
  PVT,
  PanelControls,
  ParallelChannelSeries,
  PeriodSelector,
  PolylineSeries,
  QuadrantLineSeries,
  RectangleSeries,
  RegressionSeries,
  RelativeStrengthIndex,
  ResetControl,
  SeriesTypeControl,
  SettingsControl,
  SettingsModal,
  SimpleLineSeries,
  StandardDeviation,
  StochasticMomentumIndex,
  StochasticOscillator,
  StockChart,
  StockControl,
  StockIcons,
  StockLegend,
  StockPanel,
  StockToolbar,
  SuperTrend,
  TrendLineSeries,
  Trix,
  TypicalPrice,
  VWAP,
  VerticalLineSeries,
  Volume,
  VolumeProfile,
  WilliamsR,
  ZigZag,
  registerClass
};
//# sourceMappingURL=@amcharts_amcharts5_stock.js.map
