import {
  Component,
  ListData
} from "./chunk-CRL5FSBR.js";
import {
  Color,
  Container,
  Entity,
  Percent,
  Sprite
} from "./chunk-BGHA5GQX.js";
import {
  Template,
  assert,
  each,
  each2,
  isArray,
  isNumber,
  isObject,
  isString,
  keys,
  map
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";

// node_modules/@amcharts/amcharts5/.internal/plugins/json/Serializer.js
var Serializer = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_refs", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  /**
   * Serializes target object into a simple object or JSON string.
   *
   * @param   source  Target object
   * @param   depth   Current depth
   * @param   full    Serialize object in full (ignoring maxDepth)
   * @return          Serialized data
   */
  serialize(source, depth = 0, full = false) {
    if (depth > this.get("maxDepth", 2)) {
      return void 0;
    }
    if (source === false || source === true) {
      return source;
    }
    if (isArray(source)) {
      const res2 = [];
      each(source, (arrval) => {
        res2.push(this.serialize(arrval, depth, full));
      });
      return res2;
    } else if (source instanceof ListData) {
      const res2 = [];
      each(source.values, (arrval) => {
        res2.push(this.serialize(arrval, depth, full));
      });
      return res2;
    }
    const res = {};
    const am5object = source instanceof Entity || source instanceof Template || source instanceof Color || source instanceof Percent ? true : false;
    const fullSettings = this.get("fullSettings", []);
    if (source instanceof Entity) {
      res.type = source.className;
      let settings = keys(source._settings);
      const includeSettings = this.get("includeSettings", []);
      const excludeSettings = this.get("excludeSettings", []);
      if (includeSettings.length) {
        settings = includeSettings;
      } else if (excludeSettings.length) {
        settings = settings.filter((value) => {
          return excludeSettings.indexOf(value) === -1;
        });
      }
      settings = settings.filter((value) => {
        return source.isUserSetting(value);
      });
      if (settings.length) {
        res.settings = {};
        each(settings, (setting) => {
          const settingValue = source.get(setting);
          if (settingValue !== void 0) {
            res.settings[setting] = this.serialize(settingValue, depth + 1, full || fullSettings.indexOf(setting) !== -1);
          }
        });
      }
    } else if (source instanceof Template) {
      res.type = "Template";
      let settings = keys(source._settings);
      if (settings.length) {
        res.settings = {};
        each(settings, (setting) => {
          res.settings[setting] = this.serialize(source.get(setting), depth + 1, fullSettings.indexOf(setting) !== -1);
        });
      }
      return res;
    }
    if (source instanceof Component) {
      if (source.data.length) {
        res.properties = {
          data: this.serialize(source.data.values, 1, true)
        };
      }
    }
    if (source instanceof Color) {
      return {
        type: "Color",
        value: source.toCSSHex()
      };
    } else if (source instanceof Percent) {
      return {
        type: "Percent",
        value: source.percent
      };
    } else if (isString(source) || isNumber(source)) {
      return source;
    } else if (isObject(source)) {
      if (full && !am5object) {
        const excludeProperties = this.get("excludeProperties", []);
        each2(source, (key, value) => {
          if (excludeProperties.indexOf(key) === -1 && value !== void 0) {
            res[key] = this.serialize(value, depth + 1, full);
          }
        });
      }
    }
    if (depth == 0 && keys(this._refs).length) {
      res.refs = this._refs;
    }
    return res;
  }
};
Object.defineProperty(Serializer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Serializer"
});
Object.defineProperty(Serializer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Serializer.className])
});

// node_modules/@amcharts/amcharts5/.internal/plugins/json/Classes.js
var classes = {
  "AccelerationBands": () => import(
    /* webpackExports: "AccelerationBands", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.AccelerationBands),
  "AccumulationDistribution": () => import(
    /* webpackExports: "AccumulationDistribution", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.AccumulationDistribution),
  "AccumulativeSwingIndex": () => import(
    /* webpackExports: "AccumulativeSwingIndex", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.AccumulativeSwingIndex),
  "Annotator": () => import(
    /* webpackExports: "Annotator", webpackChunkName: "json_plugins_exporting" */
    "./exporting-OWT2Z7LY.js"
  ).then((m) => m.Annotator),
  "ArcDiagram": () => import(
    /* webpackExports: "ArcDiagram", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ArcDiagram),
  "ArcDiagramLink": () => import(
    /* webpackExports: "ArcDiagramLink", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ArcDiagramLink),
  "ArcDiagramNodes": () => import(
    /* webpackExports: "ArcDiagramNodes", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ArcDiagramNodes),
  "Aroon": () => import(
    /* webpackExports: "Aroon", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Aroon),
  "AverageSeries": () => import(
    /* webpackExports: "AverageSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.AverageSeries),
  "AverageTrueRange": () => import(
    /* webpackExports: "AverageTrueRange", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.AverageTrueRange),
  "AwesomeOscillator": () => import(
    /* webpackExports: "AwesomeOscillator", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.AwesomeOscillator),
  "Axis": () => import(
    /* webpackExports: "Axis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.Axis),
  "AxisBullet": () => import(
    /* webpackExports: "AxisBullet", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisBullet),
  "AxisLabel": () => import(
    /* webpackExports: "AxisLabel", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisLabel),
  "AxisLabelRadial": () => import(
    /* webpackExports: "AxisLabelRadial", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisLabelRadial),
  "AxisRenderer": () => import(
    /* webpackExports: "AxisRenderer", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisRenderer),
  "AxisRendererCircular": () => import(
    /* webpackExports: "AxisRendererCircular", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.AxisRendererCircular),
  "AxisRendererCurveX": () => import(
    /* webpackExports: "AxisRendererCurveX", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.AxisRendererCurveX),
  "AxisRendererCurveY": () => import(
    /* webpackExports: "AxisRendererCurveY", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.AxisRendererCurveY),
  "AxisRendererRadial": () => import(
    /* webpackExports: "AxisRendererRadial", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.AxisRendererRadial),
  "AxisRendererX": () => import(
    /* webpackExports: "AxisRendererX", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisRendererX),
  "AxisRendererY": () => import(
    /* webpackExports: "AxisRendererY", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisRendererY),
  "AxisTick": () => import(
    /* webpackExports: "AxisTick", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.AxisTick),
  "BaseColumnSeries": () => import(
    /* webpackExports: "BaseColumnSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.BaseColumnSeries),
  "BollingerBands": () => import(
    /* webpackExports: "BollingerBands", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.BollingerBands),
  "BreadcrumbBar": () => import(
    /* webpackExports: "BreadcrumbBar", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.BreadcrumbBar),
  "BullBearPower": () => import(
    /* webpackExports: "BullBearPower", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.BullBearPower),
  "Bullet": () => import(
    /* webpackExports: "Bullet", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Bullet),
  "Button": () => import(
    /* webpackExports: "Button", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Button),
  "CalloutSeries": () => import(
    /* webpackExports: "CalloutSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.CalloutSeries),
  "Candlestick": () => import(
    /* webpackExports: "Candlestick", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.Candlestick),
  "CandlestickSeries": () => import(
    /* webpackExports: "CandlestickSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.CandlestickSeries),
  "CategoryAxis": () => import(
    /* webpackExports: "CategoryAxis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.CategoryAxis),
  "CategoryDateAxis": () => import(
    /* webpackExports: "CategoryDateAxis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.CategoryDateAxis),
  "ChaikinMoneyFlow": () => import(
    /* webpackExports: "ChaikinMoneyFlow", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ChaikinMoneyFlow),
  "ChaikinOscillator": () => import(
    /* webpackExports: "ChaikinOscillator", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ChaikinOscillator),
  "Chart": () => import(
    /* webpackExports: "Chart", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Chart),
  "ChartIndicator": () => import(
    /* webpackExports: "ChartIndicator", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ChartIndicator),
  "Chord": () => import(
    /* webpackExports: "Chord", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.Chord),
  "ChordDirected": () => import(
    /* webpackExports: "ChordDirected", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ChordDirected),
  "ChordLink": () => import(
    /* webpackExports: "ChordLink", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ChordLink),
  "ChordLinkDirected": () => import(
    /* webpackExports: "ChordLinkDirected", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ChordLinkDirected),
  "ChordNodes": () => import(
    /* webpackExports: "ChordNodes", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ChordNodes),
  "ChordNonRibbon": () => import(
    /* webpackExports: "ChordNonRibbon", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.ChordNonRibbon),
  "Circle": () => import(
    /* webpackExports: "Circle", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Circle),
  "CirclePattern": () => import(
    /* webpackExports: "CirclePattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.CirclePattern),
  "ClockHand": () => import(
    /* webpackExports: "ClockHand", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.ClockHand),
  "ClusteredPointSeries": () => import(
    /* webpackExports: "ClusteredPointSeries", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.ClusteredPointSeries),
  "ColorControl": () => import(
    /* webpackExports: "ColorControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ColorControl),
  "ColorSet": () => import(
    /* webpackExports: "ColorSet", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.ColorSet),
  "ColumnSeries": () => import(
    /* webpackExports: "ColumnSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.ColumnSeries),
  "CommodityChannelIndex": () => import(
    /* webpackExports: "CommodityChannelIndex", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.CommodityChannelIndex),
  "ComparisonControl": () => import(
    /* webpackExports: "ComparisonControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ComparisonControl),
  "Component": () => import(
    /* webpackExports: "Component", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Component),
  "Container": () => import(
    /* webpackExports: "Container", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Container),
  "CurveChart": () => import(
    /* webpackExports: "CurveChart", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.CurveChart),
  "CurveColumnSeries": () => import(
    /* webpackExports: "CurveColumnSeries", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.CurveColumnSeries),
  "CurveCursor": () => import(
    /* webpackExports: "CurveCursor", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.CurveCursor),
  "CurveLineSeries": () => import(
    /* webpackExports: "CurveLineSeries", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.CurveLineSeries),
  "DataSaveControl": () => import(
    /* webpackExports: "DataSaveControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DataSaveControl),
  "DateAxis": () => import(
    /* webpackExports: "DateAxis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.DateAxis),
  "DateRangeSelector": () => import(
    /* webpackExports: "DateRangeSelector", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DateRangeSelector),
  "DisparityIndex": () => import(
    /* webpackExports: "DisparityIndex", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DisparityIndex),
  "DoodleSeries": () => import(
    /* webpackExports: "DoodleSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DoodleSeries),
  "DrawingControl": () => import(
    /* webpackExports: "DrawingControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DrawingControl),
  "DrawingSeries": () => import(
    /* webpackExports: "DrawingSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DrawingSeries),
  "DrawingToolControl": () => import(
    /* webpackExports: "DrawingToolControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DrawingToolControl),
  "Dropdown": () => import(
    /* webpackExports: "Dropdown", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Dropdown),
  "DropdownColors": () => import(
    /* webpackExports: "DropdownColors", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DropdownColors),
  "DropdownControl": () => import(
    /* webpackExports: "DropdownControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DropdownControl),
  "DropdownList": () => import(
    /* webpackExports: "DropdownList", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DropdownList),
  "DropdownListControl": () => import(
    /* webpackExports: "DropdownListControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.DropdownListControl),
  "DurationAxis": () => import(
    /* webpackExports: "DurationAxis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.DurationAxis),
  "EditableLabel": () => import(
    /* webpackExports: "EditableLabel", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.EditableLabel),
  "Ellipse": () => import(
    /* webpackExports: "Ellipse", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Ellipse),
  "EllipseSeries": () => import(
    /* webpackExports: "EllipseSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.EllipseSeries),
  "Entity": () => import(
    /* webpackExports: "Entity", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Entity),
  "Exporting": () => import(
    /* webpackExports: "Exporting", webpackChunkName: "json_plugins_exporting" */
    "./exporting-OWT2Z7LY.js"
  ).then((m) => m.Exporting),
  "ExportingMenu": () => import(
    /* webpackExports: "ExportingMenu", webpackChunkName: "json_plugins_exporting" */
    "./exporting-OWT2Z7LY.js"
  ).then((m) => m.ExportingMenu),
  "FibonacciSeries": () => import(
    /* webpackExports: "FibonacciSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.FibonacciSeries),
  "FibonacciTimezoneSeries": () => import(
    /* webpackExports: "FibonacciTimezoneSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.FibonacciTimezoneSeries),
  "Flow": () => import(
    /* webpackExports: "Flow", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.Flow),
  "FlowLink": () => import(
    /* webpackExports: "FlowLink", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.FlowLink),
  "FlowNode": () => import(
    /* webpackExports: "FlowNode", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.FlowNode),
  "FlowNodes": () => import(
    /* webpackExports: "FlowNodes", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.FlowNodes),
  "ForceDirected": () => import(
    /* webpackExports: "ForceDirected", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.ForceDirected),
  "FunnelSeries": () => import(
    /* webpackExports: "FunnelSeries", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.FunnelSeries),
  "FunnelSlice": () => import(
    /* webpackExports: "FunnelSlice", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.FunnelSlice),
  "GaplessDateAxis": () => import(
    /* webpackExports: "GaplessDateAxis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.GaplessDateAxis),
  "Gradient": () => import(
    /* webpackExports: "Gradient", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Gradient),
  "GrainPattern": () => import(
    /* webpackExports: "GrainPattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.GrainPattern),
  "Graphics": () => import(
    /* webpackExports: "Graphics", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Graphics),
  "GraticuleSeries": () => import(
    /* webpackExports: "GraticuleSeries", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.GraticuleSeries),
  "Grid": () => import(
    /* webpackExports: "Grid", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.Grid),
  "GridLayout": () => import(
    /* webpackExports: "GridLayout", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.GridLayout),
  "HeatLegend": () => import(
    /* webpackExports: "HeatLegend", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.HeatLegend),
  "HeikinAshi": () => import(
    /* webpackExports: "HeikinAshi", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.HeikinAshi),
  "Hierarchy": () => import(
    /* webpackExports: "Hierarchy", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.Hierarchy),
  "HierarchyLink": () => import(
    /* webpackExports: "HierarchyLink", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.HierarchyLink),
  "HierarchyNode": () => import(
    /* webpackExports: "HierarchyNode", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.HierarchyNode),
  "HorizontalLayout": () => import(
    /* webpackExports: "HorizontalLayout", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.HorizontalLayout),
  "HorizontalLineSeries": () => import(
    /* webpackExports: "HorizontalLineSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.HorizontalLineSeries),
  "HorizontalRaySeries": () => import(
    /* webpackExports: "HorizontalRaySeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.HorizontalRaySeries),
  "IconControl": () => import(
    /* webpackExports: "IconControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.IconControl),
  "IconSeries": () => import(
    /* webpackExports: "IconSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.IconSeries),
  "Indicator": () => import(
    /* webpackExports: "Indicator", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Indicator),
  "IndicatorControl": () => import(
    /* webpackExports: "IndicatorControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.IndicatorControl),
  "InterfaceColors": () => import(
    /* webpackExports: "InterfaceColors", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.InterfaceColors),
  "IntervalControl": () => import(
    /* webpackExports: "IntervalControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.IntervalControl),
  "Label": () => import(
    /* webpackExports: "Label", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Label),
  "LabelSeries": () => import(
    /* webpackExports: "LabelSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.LabelSeries),
  "Layout": () => import(
    /* webpackExports: "Layout", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Layout),
  "Legend": () => import(
    /* webpackExports: "Legend", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Legend),
  "Line": () => import(
    /* webpackExports: "Line", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Line),
  "LineArrowSeries": () => import(
    /* webpackExports: "LineArrowSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.LineArrowSeries),
  "LinePattern": () => import(
    /* webpackExports: "LinePattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.LinePattern),
  "LineSeries": () => import(
    /* webpackExports: "LineSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.LineSeries),
  "LinearGradient": () => import(
    /* webpackExports: "LinearGradient", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.LinearGradient),
  "LinkedHierarchy": () => import(
    /* webpackExports: "LinkedHierarchy", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.LinkedHierarchy),
  "LinkedHierarchyNode": () => import(
    /* webpackExports: "LinkedHierarchyNode", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.LinkedHierarchyNode),
  "MACD": () => import(
    /* webpackExports: "MACD", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.MACD),
  "MACross": () => import(
    /* webpackExports: "MACross", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.MACross),
  "MapChart": () => import(
    /* webpackExports: "MapChart", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapChart),
  "MapLine": () => import(
    /* webpackExports: "MapLine", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapLine),
  "MapLineSeries": () => import(
    /* webpackExports: "MapLineSeries", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapLineSeries),
  "MapPointSeries": () => import(
    /* webpackExports: "MapPointSeries", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapPointSeries),
  "MapPolygon": () => import(
    /* webpackExports: "MapPolygon", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapPolygon),
  "MapPolygonSeries": () => import(
    /* webpackExports: "MapPolygonSeries", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapPolygonSeries),
  "MapSeries": () => import(
    /* webpackExports: "MapSeries", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.MapSeries),
  "Measure": () => import(
    /* webpackExports: "Measure", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Measure),
  "MedianPrice": () => import(
    /* webpackExports: "MedianPrice", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.MedianPrice),
  "Modal": () => import(
    /* webpackExports: "Modal", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Modal),
  "Momentum": () => import(
    /* webpackExports: "Momentum", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Momentum),
  "MovingAverage": () => import(
    /* webpackExports: "MovingAverage", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.MovingAverage),
  "MovingAverageDeviation": () => import(
    /* webpackExports: "MovingAverageDeviation", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.MovingAverageDeviation),
  "MovingAverageEnvelope": () => import(
    /* webpackExports: "MovingAverageEnvelope", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.MovingAverageEnvelope),
  "OHLC": () => import(
    /* webpackExports: "OHLC", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.OHLC),
  "OHLCSeries": () => import(
    /* webpackExports: "OHLCSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.OHLCSeries),
  "OnBalanceVolume": () => import(
    /* webpackExports: "OnBalanceVolume", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.OnBalanceVolume),
  "OverboughtOversold": () => import(
    /* webpackExports: "OverboughtOversold", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.OverboughtOversold),
  "PVT": () => import(
    /* webpackExports: "PVT", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.PVT),
  "Pack": () => import(
    /* webpackExports: "Pack", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.Pack),
  "PanelControls": () => import(
    /* webpackExports: "PanelControls", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.PanelControls),
  "ParallelChannelSeries": () => import(
    /* webpackExports: "ParallelChannelSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ParallelChannelSeries),
  "Partition": () => import(
    /* webpackExports: "Partition", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.Partition),
  "PathPattern": () => import(
    /* webpackExports: "PathPattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.PathPattern),
  "Pattern": () => import(
    /* webpackExports: "Pattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Pattern),
  "PatternSet": () => import(
    /* webpackExports: "PatternSet", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.PatternSet),
  "PercentChart": () => import(
    /* webpackExports: "PercentChart", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.PercentChart),
  "PercentSeries": () => import(
    /* webpackExports: "PercentSeries", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.PercentSeries),
  "PeriodSelector": () => import(
    /* webpackExports: "PeriodSelector", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.PeriodSelector),
  "PictorialStackedSeries": () => import(
    /* webpackExports: "PictorialStackedSeries", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.PictorialStackedSeries),
  "Picture": () => import(
    /* webpackExports: "Picture", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Picture),
  "PicturePattern": () => import(
    /* webpackExports: "PicturePattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.PicturePattern),
  "PieChart": () => import(
    /* webpackExports: "PieChart", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.PieChart),
  "PieSeries": () => import(
    /* webpackExports: "PieSeries", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.PieSeries),
  "PointedRectangle": () => import(
    /* webpackExports: "PointedRectangle", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.PointedRectangle),
  "Polygon": () => import(
    /* webpackExports: "Polygon", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Polygon),
  "PolylineSeries": () => import(
    /* webpackExports: "PolylineSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.PolylineSeries),
  "PyramidSeries": () => import(
    /* webpackExports: "PyramidSeries", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.PyramidSeries),
  "QuadrantLineSeries": () => import(
    /* webpackExports: "QuadrantLineSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.QuadrantLineSeries),
  "RadarChart": () => import(
    /* webpackExports: "RadarChart", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.RadarChart),
  "RadarColumnSeries": () => import(
    /* webpackExports: "RadarColumnSeries", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.RadarColumnSeries),
  "RadarCursor": () => import(
    /* webpackExports: "RadarCursor", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.RadarCursor),
  "RadarLineSeries": () => import(
    /* webpackExports: "RadarLineSeries", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.RadarLineSeries),
  "RadialGradient": () => import(
    /* webpackExports: "RadialGradient", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.RadialGradient),
  "RadialLabel": () => import(
    /* webpackExports: "RadialLabel", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.RadialLabel),
  "RadialText": () => import(
    /* webpackExports: "RadialText", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.RadialText),
  "Rectangle": () => import(
    /* webpackExports: "Rectangle", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Rectangle),
  "RectanglePattern": () => import(
    /* webpackExports: "RectanglePattern", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.RectanglePattern),
  "RectangleSeries": () => import(
    /* webpackExports: "RectangleSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.RectangleSeries),
  "RegressionSeries": () => import(
    /* webpackExports: "RegressionSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.RegressionSeries),
  "RelativeStrengthIndex": () => import(
    /* webpackExports: "RelativeStrengthIndex", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.RelativeStrengthIndex),
  "ResetControl": () => import(
    /* webpackExports: "ResetControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ResetControl),
  "RoundedRectangle": () => import(
    /* webpackExports: "RoundedRectangle", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.RoundedRectangle),
  "Sankey": () => import(
    /* webpackExports: "Sankey", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.Sankey),
  "SankeyLink": () => import(
    /* webpackExports: "SankeyLink", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.SankeyLink),
  "SankeyNodes": () => import(
    /* webpackExports: "SankeyNodes", webpackChunkName: "json_flow" */
    "./flow-DXDBENG5.js"
  ).then((m) => m.SankeyNodes),
  "Scrollbar": () => import(
    /* webpackExports: "Scrollbar", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Scrollbar),
  "SerialChart": () => import(
    /* webpackExports: "SerialChart", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.SerialChart),
  "Serializer": () => import(
    /* webpackExports: "Serializer", webpackChunkName: "json_plugins_json" */
    "./json-JIT45RKM.js"
  ).then((m) => m.Serializer),
  "Series": () => import(
    /* webpackExports: "Series", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Series),
  "SeriesTypeControl": () => import(
    /* webpackExports: "SeriesTypeControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.SeriesTypeControl),
  "SerpentineChart": () => import(
    /* webpackExports: "SerpentineChart", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.SerpentineChart),
  "SettingsControl": () => import(
    /* webpackExports: "SettingsControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.SettingsControl),
  "SettingsModal": () => import(
    /* webpackExports: "SettingsModal", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.SettingsModal),
  "SimpleLineSeries": () => import(
    /* webpackExports: "SimpleLineSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.SimpleLineSeries),
  "Slice": () => import(
    /* webpackExports: "Slice", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Slice),
  "SliceGrouper": () => import(
    /* webpackExports: "SliceGrouper", webpackChunkName: "json_plugins_sliceGrouper" */
    "./sliceGrouper-4GYO4NFM.js"
  ).then((m) => m.SliceGrouper),
  "SlicedChart": () => import(
    /* webpackExports: "SlicedChart", webpackChunkName: "json_percent" */
    "./percent-RUC7IITV.js"
  ).then((m) => m.SlicedChart),
  "Slider": () => import(
    /* webpackExports: "Slider", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Slider),
  "SmoothedRadarLineSeries": () => import(
    /* webpackExports: "SmoothedRadarLineSeries", webpackChunkName: "json_radar" */
    "./radar-7HNTCMMJ.js"
  ).then((m) => m.SmoothedRadarLineSeries),
  "SmoothedXLineSeries": () => import(
    /* webpackExports: "SmoothedXLineSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.SmoothedXLineSeries),
  "SmoothedXYLineSeries": () => import(
    /* webpackExports: "SmoothedXYLineSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.SmoothedXYLineSeries),
  "SmoothedYLineSeries": () => import(
    /* webpackExports: "SmoothedYLineSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.SmoothedYLineSeries),
  "SpiralChart": () => import(
    /* webpackExports: "SpiralChart", webpackChunkName: "json_timeline" */
    "./timeline-3NXMQMXV.js"
  ).then((m) => m.SpiralChart),
  "Sprite": () => import(
    /* webpackExports: "Sprite", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Sprite),
  "SpriteResizer": () => import(
    /* webpackExports: "SpriteResizer", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.SpriteResizer),
  "StandardDeviation": () => import(
    /* webpackExports: "StandardDeviation", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StandardDeviation),
  "Star": () => import(
    /* webpackExports: "Star", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Star),
  "StepLineSeries": () => import(
    /* webpackExports: "StepLineSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.StepLineSeries),
  "StochasticMomentumIndex": () => import(
    /* webpackExports: "StochasticMomentumIndex", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StochasticMomentumIndex),
  "StochasticOscillator": () => import(
    /* webpackExports: "StochasticOscillator", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StochasticOscillator),
  "StockChart": () => import(
    /* webpackExports: "StockChart", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StockChart),
  "StockControl": () => import(
    /* webpackExports: "StockControl", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StockControl),
  "StockLegend": () => import(
    /* webpackExports: "StockLegend", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StockLegend),
  "StockPanel": () => import(
    /* webpackExports: "StockPanel", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StockPanel),
  "StockToolbar": () => import(
    /* webpackExports: "StockToolbar", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.StockToolbar),
  "Sunburst": () => import(
    /* webpackExports: "Sunburst", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.Sunburst),
  "SuperTrend": () => import(
    /* webpackExports: "SuperTrend", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.SuperTrend),
  "Text": () => import(
    /* webpackExports: "Text", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Text),
  "Tick": () => import(
    /* webpackExports: "Tick", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Tick),
  "Tooltip": () => import(
    /* webpackExports: "Tooltip", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Tooltip),
  "Tree": () => import(
    /* webpackExports: "Tree", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.Tree),
  "Treemap": () => import(
    /* webpackExports: "Treemap", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.Treemap),
  "TrendLineSeries": () => import(
    /* webpackExports: "TrendLineSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.TrendLineSeries),
  "Triangle": () => import(
    /* webpackExports: "Triangle", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.Triangle),
  "Trix": () => import(
    /* webpackExports: "Trix", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Trix),
  "TypicalPrice": () => import(
    /* webpackExports: "TypicalPrice", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.TypicalPrice),
  "VWAP": () => import(
    /* webpackExports: "VWAP", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.VWAP),
  "ValueAxis": () => import(
    /* webpackExports: "ValueAxis", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.ValueAxis),
  "Venn": () => import(
    /* webpackExports: "Venn", webpackChunkName: "json_venn" */
    "./venn-BHZNB3MI.js"
  ).then((m) => m.Venn),
  "VerticalLayout": () => import(
    /* webpackExports: "VerticalLayout", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.VerticalLayout),
  "VerticalLineSeries": () => import(
    /* webpackExports: "VerticalLineSeries", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.VerticalLineSeries),
  "Volume": () => import(
    /* webpackExports: "Volume", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.Volume),
  "VolumeProfile": () => import(
    /* webpackExports: "VolumeProfile", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.VolumeProfile),
  "VoronoiTreemap": () => import(
    /* webpackExports: "VoronoiTreemap", webpackChunkName: "json_hierarchy" */
    "./hierarchy-PPHUWJDI.js"
  ).then((m) => m.VoronoiTreemap),
  "WilliamsR": () => import(
    /* webpackExports: "WilliamsR", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.WilliamsR),
  "WordCloud": () => import(
    /* webpackExports: "WordCloud", webpackChunkName: "json_wc" */
    "./wc-HICLURZQ.js"
  ).then((m) => m.WordCloud),
  "XYChart": () => import(
    /* webpackExports: "XYChart", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.XYChart),
  "XYChartScrollbar": () => import(
    /* webpackExports: "XYChartScrollbar", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.XYChartScrollbar),
  "XYCursor": () => import(
    /* webpackExports: "XYCursor", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.XYCursor),
  "XYSeries": () => import(
    /* webpackExports: "XYSeries", webpackChunkName: "json_xy" */
    "./@amcharts_amcharts5_xy.js"
  ).then((m) => m.XYSeries),
  "ZigZag": () => import(
    /* webpackExports: "ZigZag", webpackChunkName: "json_stock" */
    "./@amcharts_amcharts5_stock.js"
  ).then((m) => m.ZigZag),
  "ZoomControl": () => import(
    /* webpackExports: "ZoomControl", webpackChunkName: "json_map" */
    "./map-NTW2YM5Q.js"
  ).then((m) => m.ZoomControl),
  "ZoomTools": () => import(
    /* webpackExports: "ZoomTools", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.ZoomTools),
  "ZoomableContainer": () => import(
    /* webpackExports: "ZoomableContainer", webpackChunkName: "json_index" */
    "./@amcharts_amcharts5.js"
  ).then((m) => m.ZoomableContainer)
};
var Classes_default = classes;

// node_modules/@amcharts/amcharts5/.internal/plugins/json/Json.js
function isObject2(value) {
  return isObject(value);
}
function lookupRef(refs, name) {
  let i = refs.length;
  while (i--) {
    const sub = refs[i];
    if (name in sub) {
      return sub[name];
    }
  }
  throw new Error("Could not find ref " + name);
}
function parseRef(value, refs) {
  if (value[0] === "#" || value[0] === "@") {
    if (value[1] === value[0]) {
      return {
        isValue: true,
        value: value.slice(1)
      };
    } else {
      const path = value.split(/\./g);
      let object = lookupRef(refs, path[0]);
      for (let i = 1; i < path.length; ++i) {
        const subpath = path[i];
        const parsed = /get\((["'])([^\1]*)\1\)/.exec(subpath);
        if (parsed) {
          object = object.get(parsed[2]);
        } else {
          object = object[subpath];
        }
      }
      return {
        isValue: true,
        value: object
      };
    }
  } else {
    return {
      isValue: true,
      value
    };
  }
}
function mergeObject(entity, parsed) {
  if (parsed.properties) {
    each(parsed.properties, (fn) => {
      fn(entity);
    });
  }
}
function mergeEntity(entity, parsed) {
  mergeObject(entity, parsed);
  if (parsed.adapters) {
    each(parsed.adapters, (adapter) => {
      entity.adapters.add(adapter.key, adapter.callback);
    });
  }
  if (entity instanceof Container) {
    if (parsed.children) {
      parsed.children.forEach((child) => {
        if (child.index == null) {
          entity.children.push(child.value);
        } else {
          entity.children.insertIndex(child.index, child.value);
        }
      });
    }
  }
}
function mergeExisting(entity, parsed) {
  if (parsed.settings) {
    entity.setAll(parsed.settings);
  }
  mergeEntity(entity, parsed);
}
function constructEntity(root, parsed) {
  if (!parsed.construct) {
    return parsed.value;
  }
  const entity = parsed.construct.new(root, parsed.settings || {});
  mergeEntity(entity, parsed);
  return entity;
}
var ParserState = class {
  constructor() {
    Object.defineProperty(this, "_caching", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_cache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_delayed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  afterParse() {
    this._delayed.forEach((f) => {
      f();
    });
  }
  getClass(name) {
    return this._cache[name];
  }
  storeClass(name) {
    return __awaiter(this, void 0, void 0, function* () {
      const promise = Classes_default[name];
      this._cache[name] = yield promise();
    });
  }
  cacheClass(name) {
    let promise = this._caching[name];
    if (promise == null) {
      promise = this._caching[name] = this.storeClass(name);
    }
    return promise;
  }
  parseAsyncArray(array) {
    return __awaiter(this, void 0, void 0, function* () {
      yield Promise.all(map(array, (x) => this.parseAsync(x)));
    });
  }
  parseAsyncObject(object) {
    return __awaiter(this, void 0, void 0, function* () {
      yield Promise.all(map(keys(object), (key) => this.parseAsync(object[key])));
    });
  }
  parseAsyncSettings(object) {
    return __awaiter(this, void 0, void 0, function* () {
      yield Promise.all(map(keys(object), (key) => this.parseAsyncSetting(key, object[key])));
    });
  }
  parseAsyncSetting(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (key !== "geoJSON") {
        yield this.parseAsync(value);
      }
    });
  }
  parseAsyncRefs(refs) {
    return __awaiter(this, void 0, void 0, function* () {
      if (isArray(refs)) {
        yield Promise.all(map(refs, (x) => this.parseAsyncRefs(x)));
      } else {
        yield this.parseAsyncObject(refs);
      }
    });
  }
  parseAsync(value) {
    return __awaiter(this, void 0, void 0, function* () {
      if (isArray(value)) {
        yield this.parseAsyncArray(value);
      } else if (isObject2(value)) {
        if (value.type === "Color" || value.type === "Percent") {
        } else if (value.type === "Template") {
          yield Promise.all([
            value.refs ? this.parseAsyncRefs(value.refs) : Promise.resolve(void 0),
            value.settings ? this.parseAsyncObject(value.settings) : Promise.resolve(void 0)
          ]);
        } else if (value.__parse === true) {
          yield this.parseAsyncObject(value);
        } else if (value.__parse !== false) {
          yield Promise.all([
            value.type ? this.cacheClass(value.type) : Promise.resolve(void 0),
            value.refs ? this.parseAsyncRefs(value.refs) : Promise.resolve(void 0),
            value.settings ? this.parseAsyncSettings(value.settings) : Promise.resolve(void 0),
            value.properties ? this.parseAsyncObject(value.properties) : Promise.resolve(void 0),
            value.children ? this.parseAsyncArray(value.children) : Promise.resolve(void 0)
          ]);
        }
      }
    });
  }
  parseObject(root, object, refs) {
    const output = {};
    each(keys(object), (key) => {
      output[key] = this.parse(root, object[key], refs);
    });
    return output;
  }
  parseArray(root, value, refs) {
    return map(value, (value2) => this.parse(root, value2, refs));
  }
  parseChildren(root, value, refs) {
    return map(value, (value2) => this.parseChild(root, value2, refs));
  }
  parseStops(root, value, refs) {
    return map(value, (value2) => this.parseObject(root, value2, refs));
  }
  parseSetting(root, key, value, refs) {
    if (key === "layout") {
      switch (value) {
        case "horizontal":
          return root.horizontalLayout;
        case "vertical":
          return root.verticalLayout;
        case "grid":
          return root.gridLayout;
      }
    }
    if (key === "geoJSON") {
      return value;
    }
    if (key === "stops") {
      return this.parseStops(root, value, refs);
    }
    return this.parse(root, value, refs);
  }
  parseSettings(root, object, refs) {
    const settings = {};
    each(keys(object), (key) => {
      settings[key] = this.parseSetting(root, key, object[key], refs);
    });
    return settings;
  }
  parseProperties(root, object, refs) {
    return map(keys(object), (key) => {
      const rawValue = object[key];
      return (entity) => {
        const run = () => {
          const parsed = this.parseValue(root, rawValue, refs);
          const old = entity[key];
          if (old) {
            if (parsed.isValue) {
              if (isArray(parsed.value)) {
                each(parsed.value, (value) => {
                  old.push(value);
                });
              } else {
                entity[key] = parsed.value;
              }
            } else if (parsed.construct) {
              entity[key] = constructEntity(root, parsed);
            } else if (old instanceof Entity || old instanceof Template) {
              mergeExisting(old, parsed);
            } else {
              mergeObject(old, parsed);
            }
          } else {
            if (parsed.isValue) {
              entity[key] = parsed.value;
            } else {
              entity[key] = constructEntity(root, parsed);
            }
          }
        };
        if (key === "data") {
          this._delayed.push(run);
        } else if (key === "bullets") {
          const old = entity[key];
          assert(old != null);
          assert(isArray(rawValue));
          each(rawValue, (value) => {
            old.push((_, series) => {
              const newRefs = refs.concat([{ "@series": series }]);
              return this.parse(root, value, newRefs);
            });
          });
        } else {
          run();
        }
      };
    });
  }
  parseRefsObject(root, object, refs) {
    const newRefs = {};
    each(keys(object), (key) => {
      newRefs["#" + key] = this.parse(root, object[key], refs);
    });
    return newRefs;
  }
  parseRefs(root, object, refs) {
    if (isArray(object)) {
      const length = object.length;
      for (let i = 0; i < length; ++i) {
        refs = refs.concat([this.parseRefsObject(root, object[i], refs)]);
      }
    } else {
      refs = refs.concat([this.parseRefsObject(root, object, refs)]);
    }
    return refs;
  }
  parseChild(root, value, refs) {
    if (isString(value)) {
      return {
        index: void 0,
        value: parseRef(value, refs).value
      };
    } else if (value.ref != null) {
      const index = value.index == null ? void 0 : value.index;
      return {
        index,
        value: parseRef(value.ref, refs).value
      };
    } else {
      const parsed = this.parseEntity(root, value, refs);
      return {
        index: parsed.index,
        value: constructEntity(root, parsed)
      };
    }
  }
  parseEntity(root, value, refs) {
    if (value.refs) {
      refs = this.parseRefs(root, value.refs, refs);
    }
    const construct = value.type ? this.getClass(value.type) : void 0;
    const settings = value.settings ? this.parseSettings(root, value.settings, refs) : void 0;
    const properties = value.properties ? this.parseProperties(root, value.properties, refs) : void 0;
    const children = value.children ? this.parseChildren(root, value.children, refs) : void 0;
    const index = value.index == null ? void 0 : value.index;
    return {
      isValue: false,
      type: value.type,
      construct,
      settings,
      adapters: value.adapters,
      children,
      properties,
      index,
      value
    };
  }
  parseValue(root, value, refs) {
    if (value instanceof Entity) {
      return { isValue: true, value };
    } else if (isArray(value)) {
      return {
        isValue: true,
        value: this.parseArray(root, value, refs)
      };
    } else if (isObject2(value)) {
      if (value.type === "Color") {
        return {
          isValue: true,
          value: Color.fromAny(value.value)
        };
      } else if (value.type === "Percent") {
        return {
          isValue: true,
          value: new Percent(value.value)
        };
      } else if (value.type === "Template") {
        if (value.refs) {
          refs = this.parseRefs(root, value.refs, refs);
        }
        const settings = value.settings ? this.parseSettings(root, value.settings, refs) : {};
        return {
          isValue: true,
          value: Template.new(settings)
        };
      } else if (value.__parse === true) {
        return {
          isValue: true,
          value: this.parseObject(root, value, refs)
        };
      } else if (value.__parse === false) {
        return {
          isValue: true,
          value
        };
      } else {
        return this.parseEntity(root, value, refs);
      }
    } else if (isString(value)) {
      return parseRef(value, refs);
    } else {
      return {
        isValue: true,
        value
      };
    }
  }
  parse(root, value, refs) {
    const parsed = this.parseValue(root, value, refs);
    if (parsed.isValue) {
      return parsed.value;
    } else {
      return constructEntity(root, parsed);
    }
  }
};
var JsonParser = class {
  /**
   * IMPORTANT! Do not instantiate this class via `new Class()` syntax.
   *
   * Use static method `Class.new()` instead.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @ignore
   */
  constructor(root, isReal) {
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
    this._root = root;
  }
  /**
   * Use this method to create an instance of this class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @param   root      Root element
   * @return            Instantiated object
   */
  static new(root) {
    return new this(root, true);
  }
  /**
   * Parses and creates chart objects from simple objects.
   *
   * @param   object  Serialized data
   * @return          A promise of a target object
   */
  parse(object, settings = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const state = new ParserState();
      yield state.parseAsync(object);
      const output = state.parse(this._root, object, []);
      if (settings.parent) {
        if (output instanceof Sprite) {
          settings.parent.children.push(output);
        } else {
          throw new Error("When using the parent setting, the entity must be a Sprite");
        }
      } else if (output instanceof Entity) {
        output._applyThemes(true);
      }
      state.afterParse();
      return output;
    });
  }
  /**
   * Parses and creates chart objects from JSON string.
   *
   * @param   string  JSON string
   * @return          A promise of a target object
   */
  parseString(string, settings = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.parse(JSON.parse(string), settings);
    });
  }
};
function registerCustomClass(name, ref) {
  if (!Classes_default[name]) {
    Classes_default[name] = () => new Promise((resolve) => {
      resolve(ref);
    });
  }
}

export {
  Serializer,
  JsonParser,
  registerCustomClass
};
//# sourceMappingURL=chunk-DWONBYWE.js.map
