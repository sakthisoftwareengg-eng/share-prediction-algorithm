import {
  AxisRenderer,
  BaseColumnSeries
} from "./chunk-ITQFRA6V.js";
import {
  RoundedRectangle
} from "./chunk-E32SSC6Z.js";
import {
  checkChange,
  chooseInterval,
  getDateIntervalDuration,
  getDuration,
  getIntervalDuration,
  getNextUnit,
  roun
} from "./chunk-JFXPNH7X.js";
import {
  Component,
  DataItem
} from "./chunk-CRL5FSBR.js";
import {
  Container,
  Entity,
  List,
  ListTemplate,
  Rectangle,
  ceil,
  decimalPlaces,
  fitToRange,
  mergeTags,
  p100,
  relativeToValue,
  round,
  sameBounds
} from "./chunk-BGHA5GQX.js";
import {
  MultiDisposer,
  Template,
  compare,
  compareNumber,
  copy2 as copy,
  each,
  each2,
  getFirstSortedIndex,
  getSortedIndex,
  insertIndex,
  isNaN,
  isNumber,
  move
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/ColumnSeries.js
var ColumnSeries = class extends BaseColumnSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        position: "absolute",
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["series", "column"])
      }, [this.columns.template])))
    });
  }
  /**
   * @ignore
   */
  makeColumn(dataItem, listTemplate) {
    const column = this.mainContainer.children.push(listTemplate.make());
    column._setDataItem(dataItem);
    listTemplate.push(column);
    return column;
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
      position: "absolute",
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(ColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColumnSeries"
});
Object.defineProperty(ColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: BaseColumnSeries.classNames.concat([ColumnSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/Candlestick.js
var Candlestick = class extends RoundedRectangle {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("lowX0") || this.isDirty("lowY0") || this.isDirty("lowX1") || this.isDirty("lowY1") || this.isDirty("highX0") || this.isDirty("highX1") || this.isDirty("highY0") || this.isDirty("highY1")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const display = this._display;
    display.moveTo(this.get("lowX0", 0), this.get("lowY0", 0));
    display.lineTo(this.get("lowX1", 0), this.get("lowY1", 0));
    display.moveTo(this.get("highX0", 0), this.get("highY0", 0));
    display.lineTo(this.get("highX1", 0), this.get("highY1", 0));
  }
};
Object.defineProperty(Candlestick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Candlestick"
});
Object.defineProperty(Candlestick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: RoundedRectangle.classNames.concat([Candlestick.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/CandlestickSeries.js
var CandlestickSeries = class extends ColumnSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({
        themeTags: ["autocolor"]
      }), () => Candlestick._new(this._root, {
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["candlestick", "series", "column"])
      }, [this.columns.template])))
    });
  }
  /**
   * @ignore
   */
  makeColumn(dataItem, listTemplate) {
    const column = this.mainContainer.children.push(listTemplate.make());
    column._setDataItem(dataItem);
    listTemplate.push(column);
    return column;
  }
  _updateGraphics(dataItem, previousDataItem) {
    super._updateGraphics(dataItem, previousDataItem);
    const xAxis = this.getRaw("xAxis");
    const yAxis = this.getRaw("yAxis");
    const baseAxis = this.getRaw("baseAxis");
    let vcy = this.get("vcy", 1);
    let vcx = this.get("vcx", 1);
    let lx0;
    let lx1;
    let ly0;
    let ly1;
    let hx0;
    let hx1;
    let hy0;
    let hy1;
    let locationX = this.get("locationX", dataItem.get("locationX", 0.5));
    let locationY = this.get("locationY", dataItem.get("locationY", 0.5));
    let openLocationX = this.get("openLocationX", dataItem.get("openLocationX", locationX));
    let openLocationY = this.get("openLocationY", dataItem.get("openLocationY", locationY));
    let orientation;
    if (yAxis === baseAxis) {
      let open = xAxis.getDataItemPositionX(dataItem, this._xOpenField, 1, vcx);
      let close = xAxis.getDataItemPositionX(dataItem, this._xField, 1, vcx);
      lx1 = xAxis.getDataItemPositionX(dataItem, this._xLowField, 1, vcx);
      hx1 = xAxis.getDataItemPositionX(dataItem, this._xHighField, 1, vcx);
      hx0 = Math.max(open, close);
      lx0 = Math.min(open, close);
      let startLocation = this._aLocationY0 + openLocationY - 0.5;
      let endLocation = this._aLocationY1 + locationY - 0.5;
      ly0 = yAxis.getDataItemPositionY(dataItem, this._yField, startLocation + (endLocation - startLocation) / 2, vcy);
      ly1 = ly0;
      hy0 = ly0;
      hy1 = ly0;
      orientation = "horizontal";
    } else {
      let open = yAxis.getDataItemPositionY(dataItem, this._yOpenField, 1, vcy);
      let close = yAxis.getDataItemPositionY(dataItem, this._yField, 1, vcy);
      ly1 = yAxis.getDataItemPositionY(dataItem, this._yLowField, 1, vcy);
      hy1 = yAxis.getDataItemPositionY(dataItem, this._yHighField, 1, vcy);
      hy0 = Math.max(open, close);
      ly0 = Math.min(open, close);
      let startLocation = this._aLocationX0 + openLocationX - 0.5;
      let endLocation = this._aLocationX1 + locationX - 0.5;
      lx0 = xAxis.getDataItemPositionX(dataItem, this._xField, startLocation + (endLocation - startLocation) / 2, vcx);
      lx1 = lx0;
      hx0 = lx0;
      hx1 = lx0;
      orientation = "vertical";
    }
    this._updateCandleGraphics(dataItem, lx0, lx1, ly0, ly1, hx0, hx1, hy0, hy1, orientation);
  }
  _updateCandleGraphics(dataItem, lx0, lx1, ly0, ly1, hx0, hx1, hy0, hy1, orientation) {
    let column = dataItem.get("graphics");
    if (column) {
      let pl0 = this.getPoint(lx0, ly0);
      let pl1 = this.getPoint(lx1, ly1);
      let ph0 = this.getPoint(hx0, hy0);
      let ph1 = this.getPoint(hx1, hy1);
      let x = column.x();
      let y = column.y();
      column.set("lowX0", pl0.x - x);
      column.set("lowY0", pl0.y - y);
      column.set("lowX1", pl1.x - x);
      column.set("lowY1", pl1.y - y);
      column.set("highX0", ph0.x - x);
      column.set("highY0", ph0.y - y);
      column.set("highX1", ph1.x - x);
      column.set("highY1", ph1.y - y);
      column.set("orientation", orientation);
      let rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (column2) => {
          column2.set("lowX0", pl0.x - x);
          column2.set("lowY0", pl0.y - y);
          column2.set("lowX1", pl1.x - x);
          column2.set("lowY1", pl1.y - y);
          column2.set("highX0", ph0.x - x);
          column2.set("highY0", ph0.y - y);
          column2.set("highX1", ph1.x - x);
          column2.set("highY1", ph1.y - y);
          column2.set("orientation", orientation);
        });
      }
    }
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => Candlestick._new(this._root, {
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["candlestick", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(CandlestickSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CandlestickSeries"
});
Object.defineProperty(CandlestickSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ColumnSeries.classNames.concat([CandlestickSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/Axis.js
var Axis = class extends Component {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_isPanning", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "minorDataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "labelsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "gridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, { width: p100, height: p100 })
    });
    Object.defineProperty(this, "topGridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, { width: p100, height: p100 })
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, { isMeasured: false, width: p100, height: p100, position: "absolute" }))
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rangesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_panStart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_panEnd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_sAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_eAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_skipSync", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "axisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "_seriesAxisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "ghostLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_cursorPosition", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -1
    });
    Object.defineProperty(this, "_snapToSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_seriesValuesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_seriesAdded", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "axisHeader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {
        themeTags: ["axis", "header"],
        position: "absolute",
        background: Rectangle.new(this._root, {
          themeTags: ["header", "background"],
          fill: this._root.interfaceColors.get("background")
        })
      }))
    });
    Object.defineProperty(this, "_bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _dispose() {
    this.gridContainer.dispose();
    this.topGridContainer.dispose();
    this.bulletsContainer.dispose();
    this.labelsContainer.dispose();
    this.axisHeader.dispose();
    super._dispose();
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("updateScrollbar", true);
    this._disposers.push(this.axisRanges.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (dataItem) => {
          dataItem.dispose();
        });
      } else if (change.type === "push") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "setIndex") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "insertIndex") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "removeIndex") {
        this.disposeDataItem(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._processAxisRange(change.value, ["range"]);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
    }));
    const renderer = this.get("renderer");
    if (renderer) {
      renderer.axis = this;
      renderer.processAxis();
    }
    this.children.push(renderer);
    this.ghostLabel = renderer.makeLabel(new DataItem(this, void 0, {}), []);
    this.ghostLabel.adapters.disable("text");
    this.ghostLabel.setAll({ opacity: 0, tooltipText: void 0, tooltipHTML: void 0, interactive: false });
    this.ghostLabel.events.disable();
  }
  _updateFinals(_start, _end) {
  }
  /**
   * Zooms the axis to relative locations.
   *
   * Both `start` and `end` are relative: 0 means start of the axis, 1 - end.
   *
   * @param   start     Relative start
   * @param   end       Relative end
   * @param   duration  Duration of the zoom animation in milliseconds
   * @return            Zoom animation
   */
  zoom(start, end, duration, priority) {
    if (this.get("zoomable", true)) {
      this._updateFinals(start, end);
      if (this.get("start") !== start || this.get("end") != end) {
        let sAnimation = this._sAnimation;
        let eAnimation = this._eAnimation;
        if (start > end) {
          [start, end] = [end, start];
        }
        let maxDeviation = this.get("maxDeviation", 0.5) * Math.min(1, end - start);
        if (start < -maxDeviation) {
          start = -maxDeviation;
        }
        if (end > 1 + maxDeviation) {
          end = 1 + maxDeviation;
        }
        if (!isNumber(duration)) {
          duration = this.get("interpolationDuration", 0);
        }
        if (!priority) {
          priority = "end";
        }
        let maxZoomFactor = this.getPrivate("maxZoomFactor", this.get("maxZoomFactor", 100));
        let maxZoomFactorReal = maxZoomFactor;
        if (end === 1 && start !== 0) {
          if (start < this.get("start", 0)) {
            priority = "start";
          } else {
            priority = "end";
          }
        }
        if (start === 0 && end !== 1) {
          if (end > this.get("end", 1)) {
            priority = "end";
          } else {
            priority = "start";
          }
        }
        let minZoomCount = this.get("minZoomCount", 0);
        let maxZoomCount = this.get("maxZoomCount", Infinity);
        if (isNumber(minZoomCount)) {
          maxZoomFactor = maxZoomFactorReal / minZoomCount;
        }
        let minZoomFactor = 1;
        if (isNumber(maxZoomCount)) {
          minZoomFactor = maxZoomFactorReal / maxZoomCount;
        }
        if (priority === "start") {
          if (maxZoomCount > 0) {
            if (1 / (end - start) < minZoomFactor) {
              end = start + 1 / minZoomFactor;
            }
          }
          if (1 / (end - start) > maxZoomFactor) {
            end = start + 1 / maxZoomFactor;
          }
          if (end > 1 && end - start < 1 / maxZoomFactor) {
            start = end - 1 / maxZoomFactor;
          }
        } else {
          if (maxZoomCount > 0) {
            if (1 / (end - start) < minZoomFactor) {
              start = end - 1 / minZoomFactor;
            }
          }
          if (1 / (end - start) > maxZoomFactor) {
            start = end - 1 / maxZoomFactor;
          }
          if (start < 0 && end - start < 1 / maxZoomFactor) {
            end = start + 1 / maxZoomFactor;
          }
        }
        if (1 / (end - start) > maxZoomFactor) {
          end = start + 1 / maxZoomFactor;
        }
        if (1 / (end - start) > maxZoomFactor) {
          start = end - 1 / maxZoomFactor;
        }
        if (maxZoomCount != null && minZoomCount != null && (start == this.get("start") && end == this.get("end"))) {
          const chart = this.chart;
          if (chart) {
            chart._handleAxisSelection(this, true);
          }
        }
        if ((sAnimation && sAnimation.playing && sAnimation.to == start || this.get("start") == start) && (eAnimation && eAnimation.playing && eAnimation.to == end || this.get("end") == end)) {
          return;
        }
        if (duration > 0) {
          let easing = this.get("interpolationEasing");
          let sAnimation2, eAnimation2;
          if (this.get("start") != start) {
            sAnimation2 = this.animate({ key: "start", to: start, duration, easing });
          }
          if (this.get("end") != end) {
            eAnimation2 = this.animate({ key: "end", to: end, duration, easing });
          }
          this._sAnimation = sAnimation2;
          this._eAnimation = eAnimation2;
          if (sAnimation2) {
            return sAnimation2;
          } else if (eAnimation2) {
            return eAnimation2;
          }
        } else {
          this.set("start", start);
          this.set("end", end);
        }
      } else {
        if (this._sAnimation) {
          this._sAnimation.stop();
        }
        if (this._eAnimation) {
          this._eAnimation.stop();
        }
      }
    }
  }
  /**
   * A list of series using this axis.
   *
   * @return Series
   */
  get series() {
    return this._series;
  }
  _processAxisRange(dataItem, themeTags) {
    dataItem.setRaw("isRange", true);
    this._createAssets(dataItem, themeTags);
    this._rangesDirty = true;
    this._prepareDataItem(dataItem);
    const above = dataItem.get("above");
    const container = this.topGridContainer;
    const grid = dataItem.get("grid");
    if (above && grid) {
      container.children.moveValue(grid);
    }
    const fill = dataItem.get("axisFill");
    if (above && fill) {
      container.children.moveValue(fill);
    }
  }
  _prepareDataItem(_dataItem, _index) {
  }
  /**
   * @ignore
   */
  markDirtyExtremes() {
  }
  /**
   * @ignore
   */
  markDirtySelectionExtremes() {
  }
  _calculateTotals() {
  }
  _updateAxisRanges() {
    this._bullets = {};
    this.axisRanges.each((axisRange) => {
      this._prepareDataItem(axisRange);
    });
    each(this._seriesAxisRanges, (axisRange) => {
      this._prepareDataItem(axisRange);
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.get("fixAxisSize")) {
      this.ghostLabel.set("visible", true);
    } else {
      this.ghostLabel.set("visible", false);
    }
    if (this.isDirty("start") || this.isDirty("end")) {
      const chart = this.chart;
      if (chart) {
        chart._updateCursor();
      }
      let start = this.get("start", 0);
      let end = this.get("end", 1);
      let maxDeviation = this.get("maxDeviation", 0.5) * Math.min(1, end - start);
      if (start < -maxDeviation) {
        let delta = start + maxDeviation;
        start = -maxDeviation;
        this.setRaw("start", start);
        if (this.isDirty("end")) {
          this.setRaw("end", end - delta);
        }
      }
      if (end > 1 + maxDeviation) {
        let delta = end - 1 - maxDeviation;
        end = 1 + maxDeviation;
        this.setRaw("end", end);
        if (this.isDirty("start")) {
          this.setRaw("start", start - delta);
        }
      }
    }
    const renderer = this.get("renderer");
    renderer._start = this.get("start");
    renderer._end = this.get("end");
    renderer._inversed = renderer.get("inversed", false);
    renderer._axisLength = renderer.axisLength() / (renderer._end - renderer._start);
    renderer._updateLC();
    if (this.isDirty("tooltip")) {
      const tooltip = this.get("tooltip");
      if (tooltip) {
        const rendererTags = renderer.get("themeTags");
        tooltip.addTag("axis");
        tooltip.addTag(this.className.toLowerCase());
        tooltip._applyThemes();
        if (rendererTags) {
          tooltip.set("themeTags", mergeTags(tooltip.get("themeTags"), rendererTags));
          tooltip.label._applyThemes();
        }
      }
    }
  }
  _updateTooltipBounds() {
    const tooltip = this.get("tooltip");
    if (tooltip) {
      this.get("renderer").updateTooltipBounds(tooltip);
    }
  }
  _updateBounds() {
    super._updateBounds();
    this._updateTooltipBounds();
  }
  /**
   * @ignore
   */
  processChart(chart) {
    this.chart = chart;
    const renderer = this.get("renderer");
    renderer.chart = chart;
    chart.gridContainer.children.push(this.gridContainer);
    chart.topGridContainer.children.push(this.topGridContainer);
    chart.axisHeadersContainer.children.push(this.axisHeader);
    this.on("start", () => {
      chart._handleAxisSelection(this);
    });
    this.on("end", () => {
      chart._handleAxisSelection(this);
    });
    chart.plotContainer.onPrivate("width", () => {
      this.markDirtySize();
    });
    chart.plotContainer.onPrivate("height", () => {
      this.markDirtySize();
    });
    chart.processAxis(this);
  }
  /**
   * @ignore
   */
  hideDataItem(dataItem) {
    this._toggleFHDataItem(dataItem, true);
    return super.hideDataItem(dataItem);
  }
  /**
   * @ignore
   */
  showDataItem(dataItem) {
    this._toggleFHDataItem(dataItem, false);
    return super.showDataItem(dataItem);
  }
  _toggleFHDataItem(dataItem, forceHidden) {
    const fh = "forceHidden";
    const label = dataItem.get("label");
    if (label) {
      label.set(fh, forceHidden);
    }
    const grid = dataItem.get("grid");
    if (grid) {
      grid.set(fh, forceHidden);
    }
    const tick = dataItem.get("tick");
    if (tick) {
      tick.set(fh, forceHidden);
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      axisFill.set(fh, forceHidden);
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite.set(fh, forceHidden);
      }
    }
  }
  _toggleDataItem(dataItem, visible) {
    const label = dataItem.get("label");
    const v = "visible";
    if (label) {
      label.setPrivate(v, visible);
    }
    const grid = dataItem.get("grid");
    if (grid) {
      grid.setPrivate(v, visible);
    }
    const tick = dataItem.get("tick");
    if (tick) {
      tick.setPrivate(v, visible);
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      axisFill.setPrivate(v, visible);
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite.setPrivate(v, visible);
      }
    }
  }
  _createAssets(dataItem, tags, minor) {
    var _a, _b, _c;
    const renderer = this.get("renderer");
    let m = "minor";
    const label = dataItem.get("label");
    if (!label) {
      renderer.makeLabel(dataItem, tags);
    } else {
      let themeTags = label.get("themeTags");
      let remove = false;
      if (minor) {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) == -1) {
          remove = true;
        }
      } else {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) != -1) {
          remove = true;
        }
      }
      if (remove) {
        (_a = label.parent) === null || _a === void 0 ? void 0 : _a.children.removeValue(label);
        renderer.makeLabel(dataItem, tags);
        label.dispose();
        renderer.labels.removeValue(label);
      }
    }
    const grid = dataItem.get("grid");
    if (!grid) {
      renderer.makeGrid(dataItem, tags);
    } else {
      let themeTags = grid.get("themeTags");
      let remove = false;
      if (minor) {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) == -1) {
          remove = true;
        }
      } else {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) != -1) {
          remove = true;
        }
      }
      if (remove) {
        (_b = grid.parent) === null || _b === void 0 ? void 0 : _b.children.removeValue(grid);
        renderer.makeGrid(dataItem, tags);
        grid.dispose();
        renderer.grid.removeValue(grid);
      }
    }
    const tick = dataItem.get("tick");
    if (!tick) {
      renderer.makeTick(dataItem, tags);
    } else {
      let remove = false;
      let themeTags = tick.get("themeTags");
      if (minor) {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) == -1) {
          remove = true;
        }
      } else {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) != -1) {
          remove = true;
        }
      }
      if (remove) {
        (_c = tick.parent) === null || _c === void 0 ? void 0 : _c.children.removeValue(tick);
        renderer.makeTick(dataItem, tags);
        tick.dispose();
        renderer.ticks.removeValue(tick);
      }
    }
    if (!minor && !dataItem.get("axisFill")) {
      renderer.makeAxisFill(dataItem, tags);
    }
    this._processBullet(dataItem);
  }
  _processBullet(dataItem) {
    let bullet = dataItem.get("bullet");
    let axisBullet = this.get("bullet");
    if (!bullet && axisBullet && !dataItem.get("isRange")) {
      bullet = axisBullet(this._root, this, dataItem);
    }
    if (bullet) {
      bullet.axis = this;
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite._setDataItem(dataItem);
        dataItem.setRaw("bullet", bullet);
        if (!sprite.parent) {
          this.bulletsContainer.children.push(sprite);
        }
      }
    }
  }
  _afterChanged() {
    super._afterChanged();
    const chart = this.chart;
    if (chart) {
      chart._updateChartLayout();
      chart.axisHeadersContainer.markDirtySize();
    }
    this.get("renderer")._updatePositions();
    this._seriesAdded = false;
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const renderer = this.get("renderer");
    const label = dataItem.get("label");
    if (label) {
      renderer.labels.removeValue(label);
      label.dispose();
    }
    const tick = dataItem.get("tick");
    if (tick) {
      renderer.ticks.removeValue(tick);
      tick.dispose();
    }
    const grid = dataItem.get("grid");
    if (grid) {
      renderer.grid.removeValue(grid);
      grid.dispose();
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      renderer.axisFills.removeValue(axisFill);
      axisFill.dispose();
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      bullet.dispose();
    }
  }
  _updateGhost() {
    this.setPrivate("cellWidth", this.getCellWidthPosition() * this.get("renderer").axisLength());
    const ghostLabel = this.ghostLabel;
    if (!ghostLabel.isHidden()) {
      const bounds = ghostLabel.localBounds();
      const gWidth = Math.ceil(bounds.right - bounds.left);
      let text = ghostLabel.get("text");
      each(this.dataItems, (dataItem) => {
        const label = dataItem.get("label");
        if (label && !label.isHidden()) {
          const bounds2 = label.localBounds();
          const w = Math.ceil(bounds2.right - bounds2.left);
          if (w > gWidth) {
            text = label.text._getText();
          }
        }
      });
      ghostLabel.set("text", text);
    }
    let start = this.get("start", 0);
    let end = this.get("end", 1);
    this.get("renderer").updateLabel(ghostLabel, start + (end - start) * 0.5);
  }
  _handleCursorPosition(position, snapToSeries) {
    const renderer = this.get("renderer");
    position = renderer.toAxisPosition(position);
    this._cursorPosition = position;
    this._snapToSeries = snapToSeries;
    this.updateTooltip();
  }
  /**
   * Can be called when axis zoom changes and you need to update tooltip
   * position.
   */
  updateTooltip() {
    const snapToSeries = this._snapToSeries;
    let position = this._cursorPosition;
    const tooltip = this.get("tooltip");
    const renderer = this.get("renderer");
    if (isNumber(position)) {
      each(this.series, (series) => {
        if (series.get("baseAxis") === this) {
          const dataItem = this.getSeriesItem(series, position, this.get("tooltipLocation"));
          if (snapToSeries && snapToSeries.indexOf(series) != -1) {
            series.updateLegendMarker(dataItem);
            series.updateLegendValue(dataItem);
            series._settings.tooltipDataItem = dataItem;
          } else {
            series.showDataItemTooltip(dataItem);
            series.setRaw("tooltipDataItem", dataItem);
          }
        }
      });
      if (this.get("snapTooltip")) {
        position = this.roundAxisPosition(position, this.get("tooltipLocation", 0.5));
      }
      this.setPrivateRaw("tooltipPosition", position);
      if (tooltip) {
        renderer.updateTooltipBounds(tooltip);
        if (!isNaN(position)) {
          this._updateTooltipText(tooltip, position);
          renderer.positionTooltip(tooltip, position);
          if (position < this.get("start", 0) || position > this.get("end", 1)) {
            tooltip.hide(0);
          } else {
            tooltip.show(0);
          }
        } else {
          tooltip.hide(0);
        }
      }
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip.label.set("text", this.getTooltipText(position));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, _location) {
    return position;
  }
  _handleSeriesRemoved() {
  }
  /**
   * @ignore
   */
  handleCursorShow() {
    let tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.show();
    }
  }
  /**
   * @ignore
   */
  handleCursorHide() {
    let tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.hide();
    }
  }
  /**
   * @ignore
   */
  processSeriesDataItem(_dataItem, _fields) {
  }
  _clearDirty() {
    super._clearDirty();
    this._sizeDirty = false;
    this._rangesDirty = false;
  }
  /**
   * Converts pixel coordinate to a relative position on axis.
   *
   * @param   coordinate  Coordinate
   * @return              Relative position
   */
  coordinateToPosition(coordinate) {
    const renderer = this.get("renderer");
    return renderer.toAxisPosition(coordinate / renderer.axisLength());
  }
  /**
   * Converts relative position of the plot area to relative position of the
   * axis with zoom taken into account.
   *
   * @param position Position
   * @return Relative position
   */
  toAxisPosition(position) {
    return this.get("renderer").toAxisPosition(position);
  }
  /**
   * Converts relative position of the axis to a global position taking current
   * zoom into account (opposite to what `toAxisPosition` does).
   *
   * @since 5.4.2
   * @param position Position
   * @return Global position
   */
  toGlobalPosition(position) {
    return this.get("renderer").toGlobalPosition(position);
  }
  /**
   * Adjusts position with inversed taken into account.
   *
   * @ignore
   */
  fixPosition(position) {
    return this.get("renderer").fixPosition(position);
  }
  /**
   * @ignore
   */
  shouldGap(_dataItem, _nextItem, _autoGapCount, _fieldName) {
    return false;
  }
  /**
   * Creates and returns an axis range object.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/} for more info
   * @param   axisDataItem  Axis data item
   * @return                Axis range
   */
  createAxisRange(axisDataItem) {
    return this.axisRanges.push(axisDataItem);
  }
  /**
   * @ignore
   */
  _groupSeriesData(_series) {
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @return Position
   */
  getCellWidthPosition() {
    return 0.05;
  }
};
Object.defineProperty(Axis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Axis"
});
Object.defineProperty(Axis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Component.classNames.concat([Axis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/ValueAxis.js
var ValueAxis = class extends Axis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dirtyExtremes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dirtySelectionExtremes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dseHandled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_deltaMinMax", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_minReal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_maxReal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_minRealLog", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_baseValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_syncDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_minLogAdjusted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  /**
   * @ignore
   */
  markDirtyExtremes() {
    this._dirtyExtremes = true;
    this.markDirty();
  }
  /**
   * @ignore
   */
  markDirtySelectionExtremes() {
    this._dirtySelectionExtremes = true;
    this.markDirty();
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    this.setPrivateRaw("name", "value");
    this.addTag("value");
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("syncWithAxis")) {
      let previousValue = this._prevSettings.syncWithAxis;
      if (previousValue) {
        if (this._syncDp) {
          this._syncDp.dispose();
        }
      }
      let syncWithAxis = this.get("syncWithAxis");
      if (syncWithAxis) {
        this._syncDp = new MultiDisposer([
          syncWithAxis.onPrivate("selectionMinFinal", () => {
            this._dirtySelectionExtremes = true;
          }),
          syncWithAxis.onPrivate("selectionMaxFinal", () => {
            this._dirtySelectionExtremes = true;
          })
        ]);
      }
    }
    let someDirty = false;
    if (this.isDirty("min") || this.isDirty("max") || this.isDirty("maxPrecision") || this.isDirty("numberFormat")) {
      someDirty = true;
      this.ghostLabel.set("text", "");
    }
    if (this._sizeDirty || this._dirtyExtremes || this._valuesDirty || someDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("strictMinMaxSelection")) {
      this._getMinMax();
      this._dirtyExtremes = false;
    }
    this._handleSizeDirty();
    if (this._dirtySelectionExtremes && !this._isPanning && this.get("autoZoom", true)) {
      const chart = this.chart;
      let getMM = false;
      if (chart) {
        const letter = this.get("renderer").getPrivate("letter");
        if (letter == "Y") {
          chart.xAxes.each((axis) => {
            if (axis.className != "ValueAxis") {
              getMM = true;
            }
          });
        } else if (letter == "X") {
          chart.yAxes.each((axis) => {
            if (axis.className != "ValueAxis") {
              getMM = true;
            }
          });
        }
      }
      if (getMM) {
        this._getSelectionMinMax();
      }
      this._dirtySelectionExtremes = false;
    }
    this._groupData();
    if (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("min") || this.isPrivateDirty("selectionMax") || this.isPrivateDirty("selectionMin") || this.isPrivateDirty("max") || this.isPrivateDirty("step") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("logarithmic")) {
      this._handleRangeChange();
      this._prepareAxisItems();
      this._updateAxisRanges();
    }
    this._baseValue = this.baseValue();
  }
  _handleSizeDirty() {
    if (this._sizeDirty && !this._dseHandled) {
      this._dirtySelectionExtremes = true;
      this._dseHandled = true;
      if (this.getPrivate("selectionMinFinal") != this.getPrivate("selectionMin") || this.getPrivate("selectionMaxFinal") != this.getPrivate("selectionMax")) {
        this._dirtySelectionExtremes = false;
      }
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._dseHandled = false;
  }
  _groupData() {
  }
  _formatText(value) {
    const numberFormat = this.get("numberFormat");
    const formatter = this.getNumberFormatter();
    let text = "";
    if (numberFormat) {
      text = formatter.format(value, numberFormat);
    } else {
      text = formatter.format(value, void 0, this.getPrivate("stepDecimalPlaces"));
    }
    return text;
  }
  _prepareAxisItems() {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (isNumber(min) && isNumber(max)) {
      const logarithmic = this.get("logarithmic");
      const step = this.getPrivate("step");
      const selectionMin = this.getPrivate("selectionMin");
      const selectionMax = this.getPrivate("selectionMax") + step;
      let value = selectionMin - step;
      let differencePower = 1;
      let minLog = min;
      if (logarithmic) {
        value = this._minLogAdjusted;
        if (value < selectionMin) {
          while (value < selectionMin) {
            value += step;
          }
        }
        minLog = value;
        if (minLog <= 0) {
          let minRealLog = this._minRealLog;
          if (!isNumber(minRealLog)) {
            minRealLog = 1;
          }
          minLog = Math.pow(10, Math.log(minRealLog) * Math.LOG10E);
          if (step < 1) {
            if (isNumber(this._minRealLog)) {
              minLog = this._minRealLog;
            } else {
              minLog = Math.pow(10, -50);
            }
          }
        }
        differencePower = Math.log(selectionMax - step) * Math.LOG10E - Math.log(minLog) * Math.LOG10E;
        if (differencePower > 2) {
          value = Math.pow(10, Math.log(minLog) * Math.LOG10E - 50);
        }
      }
      const renderer = this.get("renderer");
      const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
      const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
      let stepPower = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
      const stepAdjusted = Math.round(step / stepPower);
      let minorGridCount = 2;
      if (round(stepAdjusted / 5, 10) % 1 == 0) {
        minorGridCount = 5;
      }
      if (round(stepAdjusted / 10, 10) % 1 == 0) {
        minorGridCount = 10;
      }
      let minorStep = step / minorGridCount;
      let i = 0;
      let m = 0;
      let previous = -Infinity;
      while (value < selectionMax) {
        let dataItem;
        if (this.dataItems.length < i + 1) {
          dataItem = new DataItem(this, void 0, {});
          this._dataItems.push(dataItem);
          this.processDataItem(dataItem);
        } else {
          dataItem = this.dataItems[i];
        }
        this._createAssets(dataItem, []);
        this._toggleDataItem(dataItem, true);
        dataItem.setRaw("value", value);
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._formatText(value));
        }
        this._prepareDataItem(dataItem);
        let nextValue = value;
        if (!logarithmic) {
          nextValue += step;
        } else {
          if (differencePower > 2) {
            nextValue = Math.pow(10, Math.log(minLog) * Math.LOG10E + i - 50);
          } else {
            nextValue += step;
          }
        }
        if (minorGridEnabled) {
          let minorValue = value + minorStep;
          if (logarithmic) {
            if (differencePower > 2) {
              let minorMinMaxStep = this._adjustMinMax(value, nextValue, 10);
              minorStep = minorMinMaxStep.step;
            }
            minorValue = value + minorStep;
          }
          while (minorValue < nextValue - step * 1e-11) {
            let minorDataItem;
            if (this.minorDataItems.length < m + 1) {
              minorDataItem = new DataItem(this, void 0, {});
              this.minorDataItems.push(minorDataItem);
              this.processDataItem(minorDataItem);
            } else {
              minorDataItem = this.minorDataItems[m];
            }
            this._createAssets(minorDataItem, ["minor"], true);
            this._toggleDataItem(minorDataItem, true);
            minorDataItem.setRaw("value", minorValue);
            const minorLabel = minorDataItem.get("label");
            if (minorLabel) {
              if (minorLabelsEnabled) {
                minorLabel.set("text", this._formatText(minorValue));
              } else {
                minorLabel.setPrivate("visible", false);
              }
            }
            this._prepareDataItem(minorDataItem);
            minorValue += minorStep;
            m++;
          }
        }
        value = nextValue;
        if (previous == value) {
          break;
        }
        let stepPower2 = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
        if (stepPower2 < 1 && !logarithmic) {
          let decCount = Math.round(Math.abs(Math.log(Math.abs(stepPower2)) * Math.LOG10E)) + 2;
          value = round(value, decCount);
        }
        i++;
        if (logarithmic && differencePower <= 2) {
          if (value - step < step) {
            value = step;
          }
        }
        previous = value;
      }
      for (let j = i; j < this.dataItems.length; j++) {
        this._toggleDataItem(this.dataItems[j], false);
      }
      for (let j = m; j < this.minorDataItems.length; j++) {
        this._toggleDataItem(this.minorDataItems[j], false);
      }
      each(this.series, (series) => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
      this._updateGhost();
    }
  }
  _prepareDataItem(dataItem, count) {
    let renderer = this.get("renderer");
    let value = dataItem.get("value");
    let endValue = dataItem.get("endValue");
    let position = this.valueToPosition(value);
    let endPosition = position;
    let fillEndPosition = this.valueToPosition(value + this.getPrivate("step"));
    if (isNumber(endValue)) {
      endPosition = this.valueToPosition(endValue);
      fillEndPosition = endPosition;
    }
    if (dataItem.get("isRange")) {
      if (endValue == null) {
        fillEndPosition = position;
      }
    }
    let labelEndPosition = endPosition;
    let labelEndValue = dataItem.get("labelEndValue");
    if (labelEndValue != null) {
      labelEndPosition = this.valueToPosition(labelEndValue);
    }
    renderer.updateLabel(dataItem.get("label"), position, labelEndPosition, count);
    const grid = dataItem.get("grid");
    renderer.updateGrid(grid, position, endPosition);
    if (grid) {
      if (value == this.get("baseValue", 0)) {
        grid.addTag("base");
        grid._applyThemes();
      } else if (grid.hasTag("base")) {
        grid.removeTag("base");
        grid._applyThemes();
      }
    }
    renderer.updateTick(dataItem.get("tick"), position, labelEndPosition, count);
    renderer.updateFill(dataItem.get("axisFill"), position, fillEndPosition);
    this._processBullet(dataItem);
    renderer.updateBullet(dataItem.get("bullet"), position, endPosition);
    if (!dataItem.get("isRange")) {
      const fillRule = this.get("fillRule");
      if (fillRule) {
        fillRule(dataItem);
      }
    }
  }
  _handleRangeChange() {
    let selectionMin = this.positionToValue(this.get("start", 0));
    let selectionMax = this.positionToValue(this.get("end", 1));
    const gridCount = this.get("renderer").gridCount();
    let minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
    let stepDecimalPlaces = decimalPlaces(minMaxStep.step);
    this.setPrivateRaw("stepDecimalPlaces", stepDecimalPlaces);
    selectionMin = round(selectionMin, stepDecimalPlaces);
    selectionMax = round(selectionMax, stepDecimalPlaces);
    minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
    let step = minMaxStep.step;
    selectionMin = minMaxStep.min;
    selectionMax = minMaxStep.max;
    if (this.getPrivate("selectionMin") !== selectionMin || this.getPrivate("selectionMax") !== selectionMax || this.getPrivate("step") !== step) {
      this.setPrivateRaw("selectionMin", selectionMin);
      this.setPrivateRaw("selectionMax", selectionMax);
      this.setPrivateRaw("step", step);
    }
  }
  /**
   * Converts a relative position to a corresponding numeric value from axis
   * scale.
   *
   * @param   position  Relative position
   * @return            Value
   */
  positionToValue(position) {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (!this.get("logarithmic")) {
      return position * (max - min) + min;
    } else {
      return Math.pow(Math.E, (position * (Math.log(max) * Math.LOG10E - Math.log(min) * Math.LOG10E) + Math.log(min) * Math.LOG10E) / Math.LOG10E);
    }
  }
  /**
   * Convers value to a relative position on axis.
   *
   * @param   value  Value
   * @return         Relative position
   */
  valueToPosition(value) {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (!this.get("logarithmic")) {
      return (value - min) / (max - min);
    } else {
      if (value <= 0) {
        let treatZeroAs = this.get("treatZeroAs");
        if (isNumber(treatZeroAs)) {
          value = treatZeroAs;
        }
      }
      return (Math.log(value) * Math.LOG10E - Math.log(min) * Math.LOG10E) / (Math.log(max) * Math.LOG10E - Math.log(min) * Math.LOG10E);
    }
  }
  /**
   * @ignore
   */
  valueToFinalPosition(value) {
    const min = this.getPrivate("minFinal");
    const max = this.getPrivate("maxFinal");
    if (!this.get("logarithmic")) {
      return (value - min) / (max - min);
    } else {
      if (value <= 0) {
        let treatZeroAs = this.get("treatZeroAs");
        if (isNumber(treatZeroAs)) {
          value = treatZeroAs;
        }
      }
      return (Math.log(value) * Math.LOG10E - Math.log(min) * Math.LOG10E) / (Math.log(max) * Math.LOG10E - Math.log(min) * Math.LOG10E);
    }
  }
  /**
   * Returns X coordinate in pixels corresponding to specific value.
   *
   * @param   value     Numeric value
   * @param   location  Location
   * @param   baseValue Base value
   * @return            X coordinate
   */
  getX(value, location, baseValue) {
    value = baseValue + (value - baseValue) * location;
    const position = this.valueToPosition(value);
    return this._settings.renderer.positionToCoordinate(position);
  }
  /**
   * Returns X coordinate in pixels corresponding to specific value.
   *
   * @param   value     Numeric value
   * @param   location  Location
   * @param   baseValue Base value
   * @return            X coordinate
   */
  getY(value, location, baseValue) {
    value = baseValue + (value - baseValue) * location;
    const position = this.valueToPosition(value);
    return this._settings.renderer.positionToCoordinate(position);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, _cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, _cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, _cellLocation, axisLocation) {
    let value = dataItem.get(field);
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      const series = dataItem.component;
      value = value * axisLocation + series.getStackedXValueWorking(dataItem, field);
    } else {
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, _cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, _cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, _cellLocation, axisLocation) {
    let value = dataItem.get(field);
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      const series = dataItem.component;
      value = value * axisLocation + series.getStackedYValueWorking(dataItem, field);
    } else {
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * Returns relative position of axis' `baseValue`.
   *
   * @return  Base value position
   */
  basePosition() {
    return this.valueToPosition(this.baseValue());
  }
  /**
   * Base value of the [[ValueAxis]], which determines positive and negative
   * values.
   *
   * @return Base value
   */
  baseValue() {
    const min = Math.min(this.getPrivate("minFinal", -Infinity), this.getPrivate("selectionMin", -Infinity));
    const max = Math.max(this.getPrivate("maxFinal", Infinity), this.getPrivate("selectionMax", Infinity));
    let baseValue = this.get("baseValue", 0);
    if (baseValue < min) {
      baseValue = min;
    }
    if (baseValue > max) {
      baseValue = max;
    }
    return baseValue;
  }
  /**
   * @ignore
   */
  cellEndValue(value) {
    return value;
  }
  fixSmallStep(step) {
    if (1 + step === 1) {
      step *= 2;
      return this.fixSmallStep(step);
    }
    return step;
  }
  _fixMin(min) {
    return min;
  }
  _fixMax(max) {
    return max;
  }
  _calculateTotals() {
    if (this.get("calculateTotals")) {
      let series = this.series[0];
      if (series) {
        let startIndex = series.startIndex();
        if (series.dataItems.length > 0) {
          if (startIndex > 0) {
            startIndex--;
          }
          let endIndex = series.endIndex();
          if (endIndex < series.dataItems.length) {
            endIndex++;
          }
          let field;
          let vc;
          if (series.get("yAxis") == this) {
            field = "valueY";
            vc = "vcy";
          } else if (series.get("xAxis") == this) {
            field = "valueX";
            vc = "vcx";
          }
          let fieldWorking = field + "Working";
          if (field) {
            for (let i = startIndex; i < endIndex; i++) {
              let sum = 0;
              let total = 0;
              each(this.series, (series2) => {
                if (!series2.get("excludeFromTotal")) {
                  let dataItem = series2.dataItems[i];
                  if (dataItem) {
                    let value = dataItem.get(fieldWorking) * series2.get(vc);
                    if (!isNaN(value)) {
                      sum += value;
                      total += Math.abs(value);
                    }
                  }
                }
              });
              each(this.series, (series2) => {
                if (!series2.get("excludeFromTotal")) {
                  let dataItem = series2.dataItems[i];
                  if (dataItem) {
                    let value = dataItem.get(fieldWorking) * series2.get(vc);
                    if (!isNaN(value)) {
                      dataItem.set(field + "Total", total);
                      dataItem.set(field + "Sum", sum);
                      let totalPercent = value / total * 100;
                      if (total == 0) {
                        totalPercent = 0;
                      }
                      dataItem.set(field + "TotalPercent", totalPercent);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  _getSelectionMinMax() {
    const min = this.getPrivate("minFinal");
    const max = this.getPrivate("maxFinal");
    const minDefined = this.get("min");
    const maxDefined = this.get("max");
    let extraMin = this.get("extraMin", 0);
    let extraMax = this.get("extraMax", 0);
    if (this.get("logarithmic")) {
      if (this.get("extraMin") == null) {
        extraMin = 0.1;
      }
      if (this.get("extraMax") == null) {
        extraMax = 0.2;
      }
    }
    const gridCount = this.get("renderer").gridCount();
    const selectionStrictMinMax = this.get("strictMinMaxSelection");
    let strictMinMax = this.get("strictMinMax");
    if (isNumber(min) && isNumber(max)) {
      let selectionMin = max;
      let selectionMax = min;
      each(this.series, (series) => {
        if (!series.get("ignoreMinMax")) {
          let seriesMin;
          let seriesMax;
          const outOfSelection = series.getPrivate("outOfSelection");
          if (series.get("xAxis") === this) {
            if (!outOfSelection) {
              let minX = series.getPrivate("minX");
              let maxX = series.getPrivate("maxX");
              if (series.startIndex() != 0 || series.endIndex() != series.dataItems.length) {
                minX = void 0;
                maxX = void 0;
              }
              seriesMin = series.getPrivate("selectionMinX", minX);
              seriesMax = series.getPrivate("selectionMaxX", maxX);
            }
          } else if (series.get("yAxis") === this) {
            if (!outOfSelection) {
              let minY = series.getPrivate("minY");
              let maxY = series.getPrivate("maxY");
              if (series.startIndex() != 0 || series.endIndex() != series.dataItems.length) {
                minY = void 0;
                maxY = void 0;
              }
              seriesMin = series.getPrivate("selectionMinY", minY);
              seriesMax = series.getPrivate("selectionMaxY", maxY);
            }
          }
          if (!series.isHidden() && !series.isShowing()) {
            if (isNumber(seriesMin)) {
              selectionMin = Math.min(selectionMin, seriesMin);
            }
            if (isNumber(seriesMax)) {
              selectionMax = Math.max(selectionMax, seriesMax);
            }
          }
        }
      });
      this.axisRanges.each((range) => {
        if (range.get("affectsMinMax")) {
          let value = range.get("value");
          if (value != null) {
            selectionMin = Math.min(selectionMin, value);
            selectionMax = Math.max(selectionMax, value);
          }
          value = range.get("endValue");
          if (value != null) {
            selectionMin = Math.min(selectionMin, value);
            selectionMax = Math.max(selectionMax, value);
          }
        }
      });
      if (selectionMin > selectionMax) {
        [selectionMin, selectionMax] = [selectionMax, selectionMin];
      }
      if (isNumber(minDefined)) {
        if (strictMinMax) {
          selectionMin = minDefined;
        } else {
          selectionMin = min;
        }
      } else if (strictMinMax) {
        if (isNumber(this._minReal)) {
          selectionMin = this._minReal;
        }
      }
      if (isNumber(maxDefined)) {
        if (strictMinMax) {
          selectionMax = maxDefined;
        } else {
          selectionMax = max;
        }
      } else if (strictMinMax) {
        if (isNumber(this._maxReal)) {
          selectionMax = this._maxReal;
        }
      }
      if (selectionMin === selectionMax) {
        let smin = selectionMin;
        selectionMin -= this._deltaMinMax;
        selectionMax += this._deltaMinMax;
        if (selectionMin < min) {
          let d = smin - min;
          if (d == 0) {
            d = this._deltaMinMax;
          }
          selectionMin = smin - d;
          selectionMax = smin + d;
          strictMinMax = true;
        }
        let minMaxStep2 = this._adjustMinMax(selectionMin, selectionMax, gridCount, strictMinMax);
        selectionMin = minMaxStep2.min;
        selectionMax = minMaxStep2.max;
      }
      let selectionMinReal = selectionMin;
      let selectionMaxReal = selectionMax;
      let delta = selectionMax - selectionMin;
      selectionMin -= delta * extraMin;
      selectionMax += delta * extraMax;
      let minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount);
      selectionMin = minMaxStep.min;
      selectionMax = minMaxStep.max;
      selectionMin = fitToRange(selectionMin, min, max);
      selectionMax = fitToRange(selectionMax, min, max);
      minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
      if (!strictMinMax) {
        selectionMin = minMaxStep.min;
        selectionMax = minMaxStep.max;
      }
      const syncWithAxis = this.get("syncWithAxis");
      if (syncWithAxis) {
        minMaxStep = this._syncAxes(selectionMin, selectionMax, minMaxStep.step, syncWithAxis.getPrivate("selectionMinFinal", syncWithAxis.getPrivate("minFinal", 0)), syncWithAxis.getPrivate("selectionMaxFinal", syncWithAxis.getPrivate("maxFinal", 1)), syncWithAxis.getPrivate("selectionStepFinal", syncWithAxis.getPrivate("step", 1)));
        if (minMaxStep.min < min) {
          minMaxStep.min = min;
        }
        if (minMaxStep.max > max) {
          minMaxStep.max = max;
        }
        selectionMin = minMaxStep.min;
        selectionMax = minMaxStep.max;
      }
      if (strictMinMax) {
        if (isNumber(minDefined)) {
          selectionMin = Math.max(selectionMin, minDefined);
        }
        if (isNumber(maxDefined)) {
          selectionMax = Math.min(selectionMax, maxDefined);
        }
      }
      if (selectionStrictMinMax) {
        selectionMin = selectionMinReal - (selectionMaxReal - selectionMinReal) * extraMin;
        selectionMax = selectionMaxReal + (selectionMaxReal - selectionMinReal) * extraMax;
      }
      if (strictMinMax) {
        if (isNumber(minDefined)) {
          selectionMin = minDefined;
        } else {
          selectionMin = selectionMinReal;
        }
        if (isNumber(maxDefined)) {
          selectionMax = maxDefined;
        } else {
          selectionMax = selectionMaxReal;
        }
        if (selectionMax - selectionMin <= 1e-8) {
          selectionMin -= this._deltaMinMax;
          selectionMax += this._deltaMinMax;
        }
        let delta2 = selectionMax - selectionMin;
        selectionMin -= delta2 * extraMin;
        selectionMax += delta2 * extraMax;
      }
      if (this.get("logarithmic")) {
        if (selectionMin <= 0) {
          selectionMin = selectionMinReal * (1 - Math.min(extraMin, 0.99));
        }
        if (selectionMin < min) {
          selectionMin = min;
        }
        if (selectionMax > max) {
          selectionMax = max;
        }
      }
      let len = Math.min(20, Math.ceil(Math.log(this.getPrivate("maxZoomFactor", 100) + 1) / Math.LN10) + 2);
      let start = round(this.valueToFinalPosition(selectionMin), len);
      let end = round(this.valueToFinalPosition(selectionMax), len);
      this.setPrivateRaw("selectionMinFinal", selectionMin);
      this.setPrivateRaw("selectionMaxFinal", selectionMax);
      this.setPrivateRaw("selectionStepFinal", minMaxStep.step);
      this.zoom(start, end);
    }
  }
  _getMinMax() {
    let minDefined = this.get("min");
    let maxDefined = this.get("max");
    let min = Infinity;
    let max = -Infinity;
    let extraMin = this.get("extraMin", 0);
    let extraMax = this.get("extraMax", 0);
    if (this.get("logarithmic")) {
      if (!this.get("strictMinMax")) {
        if (this.get("extraMin") == null) {
          extraMin = 0.1;
        }
        if (this.get("extraMax") == null) {
          extraMax = 0.2;
        }
      }
    }
    let minDiff = Infinity;
    each(this.series, (series) => {
      if (!series.get("ignoreMinMax")) {
        let seriesMin;
        let seriesMax;
        if (series.get("xAxis") === this) {
          seriesMin = series.getPrivate("minX");
          seriesMax = series.getPrivate("maxX");
        } else if (series.get("yAxis") === this) {
          seriesMin = series.getPrivate("minY");
          seriesMax = series.getPrivate("maxY");
        }
        if (isNumber(seriesMin) && isNumber(seriesMax)) {
          min = Math.min(min, seriesMin);
          max = Math.max(max, seriesMax);
          let diff = seriesMax - seriesMin;
          if (diff <= 0) {
            diff = Math.abs(seriesMax / 100);
          }
          if (diff < minDiff) {
            minDiff = diff;
          }
        }
      }
    });
    this.axisRanges.each((range) => {
      if (range.get("affectsMinMax")) {
        let value = range.get("value");
        if (value != null) {
          min = Math.min(min, value);
          max = Math.max(max, value);
        }
        value = range.get("endValue");
        if (value != null) {
          min = Math.min(min, value);
          max = Math.max(max, value);
        }
      }
    });
    if (this.get("logarithmic")) {
      let treatZeroAs = this.get("treatZeroAs");
      if (isNumber(treatZeroAs)) {
        if (min <= 0) {
          min = treatZeroAs;
        }
      }
      if (min <= 0) {
        new Error("Logarithmic value axis can not have values <= 0.");
      }
    }
    if (min === 0 && max === 0) {
      max = 0.9;
      min = -0.9;
    }
    if (isNumber(minDefined)) {
      min = minDefined;
    }
    if (isNumber(maxDefined)) {
      max = maxDefined;
    }
    if (min === Infinity || max === -Infinity) {
      this.setPrivate("minFinal", void 0);
      this.setPrivate("maxFinal", void 0);
      return;
    }
    if (min > max) {
      [min, max] = [max, min];
    }
    const initialMin = min;
    const initialMax = max;
    let minAdapted = this.adapters.fold("min", min);
    let maxAdapted = this.adapters.fold("max", max);
    this._minRealLog = min;
    if (isNumber(minAdapted)) {
      min = minAdapted;
    }
    if (isNumber(maxAdapted)) {
      max = maxAdapted;
    }
    min = this._fixMin(min);
    max = this._fixMax(max);
    if (max - min <= 1 / Math.pow(10, 15)) {
      if (max - min !== 0) {
        this._deltaMinMax = (max - min) / 2;
      } else {
        this._getDelta(max);
      }
      min -= this._deltaMinMax;
      max += this._deltaMinMax;
    }
    min -= (max - min) * extraMin;
    max += (max - min) * extraMax;
    if (this.get("logarithmic")) {
      if (min < 0 && initialMin >= 0) {
        min = 0;
      }
      if (max > 0 && initialMax <= 0) {
        max = 0;
      }
    }
    this._minReal = min;
    this._maxReal = max;
    let strictMinMax = this.get("strictMinMax");
    let strictMinMaxSelection = this.get("strictMinMaxSelection", false);
    if (strictMinMaxSelection) {
      strictMinMax = strictMinMaxSelection;
    }
    let strict = strictMinMax;
    if (isNumber(maxDefined)) {
      strict = true;
    }
    let gridCount = this.get("renderer").gridCount();
    let minMaxStep = this._adjustMinMax(min, max, gridCount, strict);
    min = minMaxStep.min;
    max = minMaxStep.max;
    minMaxStep = this._adjustMinMax(min, max, gridCount, true);
    min = minMaxStep.min;
    max = minMaxStep.max;
    if (strictMinMax) {
      if (isNumber(minDefined)) {
        min = minDefined;
      } else {
        min = this._minReal;
      }
      if (isNumber(maxDefined)) {
        max = maxDefined;
      } else {
        max = this._maxReal;
      }
      if (max - min <= 1e-8) {
        min -= this._deltaMinMax;
        max += this._deltaMinMax;
      }
      let delta = max - min;
      min -= delta * extraMin;
      max += delta * extraMax;
    }
    minAdapted = this.adapters.fold("min", min);
    maxAdapted = this.adapters.fold("max", max);
    if (isNumber(minAdapted)) {
      min = minAdapted;
    }
    if (isNumber(maxAdapted)) {
      max = maxAdapted;
    }
    if (minDiff == Infinity) {
      minDiff = max - min;
    }
    let decCount = Math.round(Math.abs(Math.log(Math.abs(max - min)) * Math.LOG10E)) + 5;
    min = round(min, decCount);
    max = round(max, decCount);
    const syncWithAxis = this.get("syncWithAxis");
    if (syncWithAxis) {
      minMaxStep = this._syncAxes(min, max, minMaxStep.step, syncWithAxis.getPrivate("minFinal", syncWithAxis.getPrivate("min", 0)), syncWithAxis.getPrivate("maxFinal", syncWithAxis.getPrivate("max", 1)), syncWithAxis.getPrivate("step", 1));
      min = minMaxStep.min;
      max = minMaxStep.max;
    }
    this.setPrivateRaw("maxZoomFactor", Math.max(1, Math.ceil((max - min) / minDiff * this.get("maxZoomFactor", 100))));
    this._fixZoomFactor();
    if (this.get("logarithmic")) {
      this._minLogAdjusted = min;
      min = this._minReal;
      max = this._maxReal;
      if (min <= 0) {
        min = initialMin * (1 - Math.min(extraMin, 0.99));
      }
    }
    if (isNumber(min) && isNumber(max)) {
      if (this.getPrivate("minFinal") !== min || this.getPrivate("maxFinal") !== max) {
        this.setPrivate("minFinal", min);
        this.setPrivate("maxFinal", max);
        this._saveMinMax(min, max);
        const duration = this.get("interpolationDuration", 0);
        const easing = this.get("interpolationEasing");
        this.animatePrivate({ key: "min", to: min, duration, easing });
        this.animatePrivate({ key: "max", to: max, duration, easing });
      }
    }
  }
  _fixZoomFactor() {
  }
  _getDelta(max) {
    let exponent = Math.log(Math.abs(max)) * Math.LOG10E;
    let power = Math.pow(10, Math.floor(exponent));
    power = power / 10;
    this._deltaMinMax = power;
  }
  _saveMinMax(_min, _max) {
  }
  _adjustMinMax(min, max, gridCount, strictMode) {
    if (gridCount <= 1) {
      gridCount = 1;
    }
    gridCount = Math.round(gridCount);
    let initialMin = min;
    let initialMax = max;
    let difference = max - min;
    if (difference === 0) {
      difference = Math.abs(max);
    }
    let exponent = Math.log(Math.abs(difference)) * Math.LOG10E;
    let power = Math.pow(10, Math.floor(exponent));
    power = power / 10;
    let extra = power;
    if (strictMode) {
      extra = 0;
    }
    if (strictMode) {
      min = Math.floor(min / power) * power;
      max = Math.ceil(max / power) * power;
    } else {
      min = Math.ceil(min / power) * power - extra;
      max = Math.floor(max / power) * power + extra;
    }
    if (min < 0 && initialMin >= 0) {
      min = 0;
    }
    if (max > 0 && initialMax <= 0) {
      max = 0;
    }
    exponent = Math.log(Math.abs(difference)) * Math.LOG10E;
    power = Math.pow(10, Math.floor(exponent));
    power = power / 100;
    let step = Math.ceil(difference / gridCount / power) * power;
    let stepPower = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
    let stepDivisor = Math.ceil(step / stepPower);
    if (stepDivisor > 5) {
      stepDivisor = 10;
    } else if (stepDivisor <= 5 && stepDivisor > 2) {
      stepDivisor = 5;
    }
    step = Math.ceil(step / (stepPower * stepDivisor)) * stepPower * stepDivisor;
    let maxPrecision = this.get("maxPrecision");
    if (isNumber(maxPrecision)) {
      let ceiledStep = ceil(step, maxPrecision);
      if (maxPrecision < Number.MAX_VALUE && step !== ceiledStep) {
        step = ceiledStep;
        if (step == 0) {
          step = 1;
        }
      }
    }
    let decCount = 0;
    if (stepPower < 1) {
      decCount = Math.round(Math.abs(Math.log(Math.abs(stepPower)) * Math.LOG10E)) + 1;
      step = round(step, decCount);
    }
    let minCount = Math.floor(min / step);
    min = round(step * minCount, decCount);
    let maxCount;
    if (!strictMode) {
      maxCount = Math.ceil(max / step);
    } else {
      maxCount = Math.floor(max / step);
    }
    if (maxCount === minCount) {
      maxCount++;
    }
    max = round(step * maxCount, decCount);
    if (max < initialMax) {
      max = max + step;
    }
    if (min > initialMin) {
      min = min - step;
    }
    step = this.fixSmallStep(step);
    return { min, max, step };
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    const numberFormat = this.get("tooltipNumberFormat", this.get("numberFormat"));
    const formatter = this.getNumberFormatter();
    const extraDecimals = this.get("extraTooltipPrecision", 0);
    const decimals = this.getPrivate("stepDecimalPlaces", 0) + extraDecimals;
    const value = round(this.positionToValue(position), decimals);
    if (numberFormat) {
      return formatter.format(value, numberFormat);
    } else {
      return formatter.format(value, void 0, decimals);
    }
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position) {
    let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
    let value = this.positionToValue(position);
    let index = void 0;
    let oldDiff;
    each(series.dataItems, (dataItem, i) => {
      const diff = Math.abs(dataItem.get(fieldName) - value);
      if (index === void 0 || diff < oldDiff) {
        index = i;
        oldDiff = diff;
      }
    });
    if (index != null) {
      return series.dataItems[index];
    }
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min = this.getPrivate("minFinal", 0);
    const max = this.getPrivate("maxFinal", 0);
    if (this.getPrivate("min") != null && this.getPrivate("max") != null) {
      this.zoom((start - min) / (max - min), (end - min) / (max - min), duration);
    }
  }
  /**
   * Syncs with a target axis.
   *
   * @param  min  Min
   * @param  max  Max
   * @param  step Step
   */
  _syncAxes(min, max, step, syncMin, syncMax, syncStep) {
    let axis = this.get("syncWithAxis");
    if (axis) {
      let count = Math.round(syncMax - syncMin) / syncStep;
      let currentCount = Math.round((max - min) / step);
      let gridCount = this.get("renderer").gridCount();
      if (isNumber(count) && isNumber(currentCount)) {
        let synced = false;
        let c = 0;
        let diff = (max - min) * 0.01;
        let omin = min;
        let omax = max;
        let ostep = step;
        while (synced != true) {
          synced = this._checkSync(omin, omax, ostep, count);
          c++;
          if (c > 500) {
            synced = true;
          }
          if (!synced) {
            if (c / 3 == Math.round(c / 3)) {
              omin = min - diff * c;
              if (min >= 0 && omin < 0) {
                omin = 0;
              }
            } else {
              omax = max + diff * c;
              if (omax <= 0 && omax > 0) {
                omax = 0;
              }
            }
            let minMaxStep = this._adjustMinMax(omin, omax, gridCount, true);
            omin = minMaxStep.min;
            omax = minMaxStep.max;
            ostep = minMaxStep.step;
          } else {
            min = omin;
            max = omax;
            step = ostep;
          }
        }
      }
    }
    return { min, max, step };
  }
  /**
   * Returns `true` if axis needs to be resunced with some other axis.
   */
  _checkSync(min, max, step, count) {
    let currentCount = (max - min) / step;
    for (let i = 1; i < count; i++) {
      if (round(currentCount / i, 1) == count || currentCount * i == count) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @return Position
   */
  getCellWidthPosition() {
    let max = this.getPrivate("selectionMax", this.getPrivate("max"));
    let min = this.getPrivate("selectionMin", this.getPrivate("min"));
    if (isNumber(max) && isNumber(min)) {
      return this.getPrivate("step", 1) / (max - min);
    }
    return 0.05;
  }
  /**
   * @ignore
   */
  nextPosition(count) {
    if (count == null) {
      count = 1;
    }
    if (this.get("renderer").getPrivate("letter") == "Y") {
      count *= -1;
    }
    let value = this.positionToValue(this.getPrivate("tooltipPosition", 0));
    value += this.getPrivate("step", 1) * count;
    value = fitToRange(value, this.getPrivate("selectionMin", 0), this.getPrivate("selectionMax", 1));
    return this.toGlobalPosition(this.valueToPosition(value));
  }
};
Object.defineProperty(ValueAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ValueAxis"
});
Object.defineProperty(ValueAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Axis.classNames.concat([ValueAxis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/DateAxis.js
var DateAxis = class extends ValueAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_seriesDataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_groupingCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_intervalDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_baseDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_intervalMax", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_intervalMin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    super._afterNew();
    this._setBaseInterval(this.get("baseInterval"));
    this.on("baseInterval", () => {
      this._setBaseInterval(this.get("baseInterval"));
    });
  }
  _setBaseInterval(interval) {
    this.setPrivateRaw("baseInterval", interval);
    this._baseDuration = getIntervalDuration(interval);
  }
  _fixZoomFactor() {
    const maxZoomFactor = this.get("maxZoomFactor");
    if (maxZoomFactor != null && maxZoomFactor != Infinity) {
      this.setPrivateRaw("maxZoomFactor", maxZoomFactor);
    } else {
      this.setPrivateRaw("maxZoomFactor", Math.round((this.getPrivate("max", 0) - this.getPrivate("min", 0)) / this.baseMainDuration()));
    }
  }
  _groupData() {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (isNumber(min) && isNumber(max)) {
      this._fixZoomFactor();
      const groupInterval = this.getPrivate("groupInterval");
      if (groupInterval) {
        this._setBaseInterval(groupInterval);
      } else {
        this._setBaseInterval(this.get("baseInterval"));
      }
      if (this.isDirty("groupInterval")) {
        let groupInterval2 = this.get("groupInterval");
        if (groupInterval2) {
          this.setRaw("groupIntervals", [groupInterval2]);
          this._handleRangeChange();
        }
      }
      if (this.isDirty("groupData")) {
        if (!this._dataGrouped) {
          if (this.get("groupData")) {
            each(this.series, (series) => {
              this._groupSeriesData(series);
            });
            this._handleRangeChange();
          } else {
            let baseInterval = this.get("baseInterval");
            let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
            each(this.series, (series) => {
              series.setDataSet(mainDataSetId);
              series.resetGrouping();
            });
            this._setBaseInterval(baseInterval);
            this.setPrivateRaw("groupInterval", void 0);
            this.markDirtyExtremes();
          }
          this._dataGrouped = true;
        }
      }
    }
  }
  _groupSeriesData(series) {
    if (this.get("groupData") && !series.get("groupDataDisabled")) {
      this._dataGrouped = true;
      this._seriesDataGrouped = true;
      let intervals = [];
      let baseDuration = this.baseMainDuration();
      let groupIntervals = this.get("groupIntervals");
      if (groupIntervals) {
      }
      each(groupIntervals, (interval) => {
        let intervalDuration = getIntervalDuration(interval);
        if (intervalDuration > baseDuration) {
          intervals.push(interval);
        }
      });
      series._dataSets = {};
      const key = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
      let fields;
      const baseAxis = series.get("baseAxis");
      if (series.get("xAxis") === baseAxis) {
        fields = series._valueYFields;
      } else if (series.get("yAxis") === baseAxis) {
        fields = series._valueXFields;
      }
      let dataItems = series._mainDataItems;
      let baseInterval = this.get("baseInterval");
      let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
      series._dataSets[mainDataSetId] = dataItems;
      const groupCallback = series.get("groupDataCallback");
      let groupOriginals = series.get("groupDataWithOriginals", false);
      if (groupCallback) {
        groupOriginals = true;
      }
      each(intervals, (interval) => {
        let previousTime = -Infinity;
        let dataSetId = interval.timeUnit + interval.count;
        series._dataSets[dataSetId] = [];
        let newDataItem;
        let sum = {};
        let count = {};
        let groupFieldValues = {};
        let workingFields = {};
        each(fields, (field) => {
          sum[field] = 0;
          count[field] = 0;
          groupFieldValues[field] = series.get(field + "Grouped");
          workingFields[field] = field + "Working";
        });
        let intervalDuration = getDuration(interval.timeUnit);
        let firstItem = dataItems[0];
        let firstTime;
        if (firstItem) {
          firstTime = dataItems[0].get(key);
        }
        let prevNewDataItem;
        each(dataItems, (dataItem) => {
          let time = dataItem.get(key);
          let roundedTime = roun(time, interval.timeUnit, interval.count, this._root, firstTime);
          let dataContext;
          if (previousTime < roundedTime - intervalDuration / 24) {
            dataContext = copy(dataItem.dataContext);
            newDataItem = new DataItem(series, dataContext, series._makeDataItem(dataContext));
            newDataItem.setRaw(key, roundedTime);
            series._dataSets[dataSetId].push(newDataItem);
            each(fields, (field) => {
              let value = dataItem.get(field);
              if (isNumber(value)) {
                newDataItem.setRaw(field, value);
                newDataItem.setRaw(workingFields[field], value);
                count[field] = 1;
                sum[field] = value;
              } else {
                sum[field] = 0;
                count[field] = 0;
              }
            });
            if (groupOriginals) {
              newDataItem.set("originals", [dataItem]);
            }
            if (groupCallback && prevNewDataItem) {
              groupCallback(prevNewDataItem, interval);
            }
            prevNewDataItem = newDataItem;
          } else {
            each(fields, (field) => {
              let groupKey = groupFieldValues[field];
              let value = dataItem.get(field);
              if (value != null) {
                let currentValue = newDataItem.get(field);
                switch (groupKey) {
                  case "close":
                    newDataItem.setRaw(field, value);
                    break;
                  case "sum":
                    newDataItem.setRaw(field, currentValue + value);
                    break;
                  case "open":
                    break;
                  case "low":
                    if (value < currentValue) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                  case "high":
                    if (value > currentValue) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                  case "average":
                    count[field]++;
                    sum[field] += value;
                    let average = sum[field] / count[field];
                    newDataItem.setRaw(field, average);
                    break;
                  case "extreme":
                    if (Math.abs(value) > Math.abs(currentValue)) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                }
                newDataItem.setRaw(workingFields[field], newDataItem.get(field));
                let dataContext2 = copy(dataItem.dataContext);
                dataContext2[key] = roundedTime;
                newDataItem.dataContext = dataContext2;
              }
            });
            if (groupOriginals) {
              newDataItem.get("originals").push(dataItem);
            }
          }
          previousTime = roundedTime;
        });
        if (groupCallback && prevNewDataItem) {
          groupCallback(prevNewDataItem, interval);
        }
      });
      if (series._dataSetId) {
        series.setDataSet(series._dataSetId);
      }
      this.markDirtySize();
      if (this._seriesAdded) {
        this._root.events.once("frameended", () => {
          this.markDirtySize();
        });
      }
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._groupingCalculated = false;
    this._dataGrouped = false;
  }
  /**
   * Returns a time interval axis would group data to for a specified duration.
   *
   * @since 5.2.1
   */
  getGroupInterval(duration) {
    let baseInterval = this.get("baseInterval");
    let groupInterval = chooseInterval(0, duration, this.get("groupCount", Infinity), this.get("groupIntervals"));
    if (getIntervalDuration(groupInterval) < getIntervalDuration(baseInterval)) {
      groupInterval = Object.assign({}, baseInterval);
    }
    return groupInterval;
  }
  /**
   * Return `max` of a specified time interval.
   *
   * Will work only if the axis was grouped to this interval at least once.
   *
   * @since 5.2.1
   * @param   interval  Interval
   * @return            Max
   */
  getIntervalMax(interval) {
    return this._intervalMax[interval.timeUnit + interval.count];
  }
  /**
   * Return `min` of a specified time interval.
   *
   * Will work only if the axis was grouped to this interval at least once.
   *
   * @since 5.2.1
   * @param   interval  Interval
   * @return            Min
   */
  getIntervalMin(interval) {
    return this._intervalMin[interval.timeUnit + interval.count];
  }
  _handleRangeChange() {
    super._handleRangeChange();
    let selectionMin = Math.round(this.getPrivate("selectionMin"));
    let selectionMax = Math.round(this.getPrivate("selectionMax"));
    if (isNumber(selectionMin) && isNumber(selectionMax)) {
      if (this.get("endLocation") == 0) {
        selectionMax += 1;
      }
      if (this.get("groupData") && !this._groupingCalculated) {
        this._groupingCalculated = true;
        let groupInterval = this.get("groupInterval");
        let current = this.getPrivate("groupInterval");
        let modifiedDifference = selectionMax - selectionMin + (this.get("startLocation", 0) + (1 - this.get("endLocation", 1)) * this.baseDuration());
        if (current) {
          let duration = getIntervalDuration(current);
          modifiedDifference = Math.ceil(modifiedDifference / duration) * duration;
        }
        if (!groupInterval) {
          groupInterval = this.getGroupInterval(modifiedDifference);
        }
        if (groupInterval && (!current || (current.timeUnit !== groupInterval.timeUnit || current.count !== groupInterval.count) || this._seriesDataGrouped)) {
          this._seriesDataGrouped = false;
          this.setPrivateRaw("groupInterval", groupInterval);
          this._setBaseInterval(groupInterval);
          let newId = groupInterval.timeUnit + groupInterval.count;
          each(this.series, (series) => {
            if (series.get("baseAxis") === this) {
              series.setDataSet(newId);
            }
          });
          this.markDirtyExtremes();
          this._root.events.once("frameended", () => {
            this._root.events.once("frameended", () => {
              const type = "groupintervalchanged";
              if (this.events.isEnabled(type)) {
                this.events.dispatch(type, { type, target: this });
              }
            });
          });
        }
      }
      each(this.series, (series) => {
        if (series.get("baseAxis") === this) {
          let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
          const start = getFirstSortedIndex(series.dataItems, (dataItem) => {
            return compare(dataItem.get(fieldName), selectionMin);
          });
          let startIndex = start.index;
          if (startIndex > 0) {
            startIndex -= 1;
          }
          selectionMax += this.baseDuration() * (1 - this.get("endLocation", 1));
          const end = getSortedIndex(series.dataItems, (dataItem) => {
            return compare(dataItem.get(fieldName), selectionMax);
          });
          let endIndex = end.index;
          let endIndex2 = endIndex;
          if (endIndex2 > 1) {
            endIndex2--;
          }
          const firstDataItem = series.dataItems[startIndex];
          const lastDataItem = series.dataItems[endIndex2];
          let lastDate;
          let firstDate;
          if (firstDataItem) {
            firstDate = firstDataItem.get(fieldName);
          }
          if (lastDataItem) {
            lastDate = lastDataItem.get(fieldName);
          }
          let outOfSelection = false;
          if (lastDate != null && firstDate != null) {
            if (lastDate < selectionMin || firstDate > selectionMax) {
              outOfSelection = true;
            }
          }
          series.setPrivate("outOfSelection", outOfSelection);
          series.setPrivate("startIndex", startIndex);
          series.setPrivate("adjustedStartIndex", series._adjustStartIndex(startIndex));
          series.setPrivate("endIndex", endIndex);
          this.root.events.once("frameended", () => {
            series._markDirtyPrivateKey("adjustedStartIndex");
          });
        }
      });
    }
  }
  _adjustMinMax(min, max, gridCount, _strictMode) {
    return { min, max, step: (max - min) / gridCount };
  }
  /**
   * @ignore
   */
  intervalDuration() {
    return this._intervalDuration;
  }
  _saveMinMax(min, max) {
    let groupInterval = this.getPrivate("groupInterval");
    if (!groupInterval) {
      groupInterval = this.get("baseInterval");
    }
    let id = groupInterval.timeUnit + groupInterval.count;
    this._intervalMin[id] = min;
    this._intervalMax[id] = max;
  }
  _getM(timeUnit) {
    if (timeUnit == "month" || timeUnit == "year" || timeUnit == "day") {
      return 1.05;
    }
    return 1.01;
  }
  _getMinorInterval(interval) {
    var _a;
    let minorGridInterval;
    let count = interval.count;
    let timeUnit = interval.timeUnit;
    if (count > 1) {
      if (count == 10) {
        count = 5;
      } else if (count == 15) {
        count = 5;
      } else if (count == 12) {
        count = 2;
      } else if (count == 6) {
        count = 1;
      } else if (count == 30) {
        count = 10;
      } else if (count < 10) {
        count = 1;
      }
      minorGridInterval = { timeUnit, count };
    }
    if (timeUnit == "week") {
      if (((_a = this.getPrivate("baseInterval")) === null || _a === void 0 ? void 0 : _a.timeUnit) != "week") {
        minorGridInterval = { timeUnit: "day", count: 1 };
      } else {
        minorGridInterval = { timeUnit: "week", count: 1 };
      }
    }
    return minorGridInterval;
  }
  _prepareAxisItems() {
    const min = this.getPrivate("min");
    const max = this.getPrivate("max");
    if (isNumber(min) && isNumber(max)) {
      const root = this._root;
      const selectionMin = Math.round(this.getPrivate("selectionMin"));
      const selectionMax = Math.round(this.getPrivate("selectionMax"));
      const renderer = this.get("renderer");
      const baseInterval = this.getPrivate("baseInterval");
      let value = selectionMin;
      let i = 0;
      const intervals = this.get("gridIntervals");
      let gridInterval = chooseInterval(0, selectionMax - selectionMin, renderer.gridCount(), intervals);
      if (getIntervalDuration(gridInterval) < this.baseDuration()) {
        gridInterval = Object.assign({}, baseInterval);
      }
      const intervalDuration = getIntervalDuration(gridInterval);
      this._intervalDuration = intervalDuration;
      const nextGridUnit = getNextUnit(gridInterval.timeUnit);
      const utc = root.utc;
      const timezone = root.timezone;
      value = roun(selectionMin - intervalDuration, gridInterval.timeUnit, gridInterval.count, root, min);
      let previousValue = value - intervalDuration;
      let format;
      const formats = this.get("dateFormats");
      this.setPrivateRaw("gridInterval", gridInterval);
      const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
      const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
      let minorGridInterval;
      let minorDuration = 0;
      if (minorGridEnabled) {
        minorGridInterval = this._getMinorInterval(gridInterval);
        minorDuration = getIntervalDuration(minorGridInterval);
      }
      let m = 0;
      while (value < selectionMax + intervalDuration) {
        let dataItem;
        if (this.dataItems.length < i + 1) {
          dataItem = new DataItem(this, void 0, {});
          this._dataItems.push(dataItem);
          this.processDataItem(dataItem);
        } else {
          dataItem = this.dataItems[i];
        }
        this._createAssets(dataItem, []);
        this._toggleDataItem(dataItem, true);
        dataItem.setRaw("value", value);
        dataItem.setRaw("labelEndValue", void 0);
        let endValue = value + getDuration(gridInterval.timeUnit, gridInterval.count * this._getM(gridInterval.timeUnit));
        endValue = roun(endValue, gridInterval.timeUnit, 1, root);
        dataItem.setRaw("endValue", endValue);
        let date = new Date(value);
        format = formats[gridInterval.timeUnit];
        if (nextGridUnit && this.get("markUnitChange") && isNumber(previousValue)) {
          if (gridInterval.timeUnit != "year") {
            if (checkChange(value, previousValue, nextGridUnit, utc, timezone)) {
              format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
            }
          }
        }
        const label = dataItem.get("label");
        if (label) {
          label.set("text", root.dateFormatter.format(date, format));
        }
        let count = gridInterval.count;
        if (gridInterval.timeUnit == "week") {
          dataItem.setRaw("labelEndValue", value);
        }
        if (minorGridEnabled) {
          count = 1;
          let timeUnit = gridInterval.timeUnit;
          if (timeUnit == "week") {
            timeUnit = "day";
          }
          let labelEndValue = value + getDuration(timeUnit, this._getM(timeUnit));
          labelEndValue = roun(labelEndValue, timeUnit, 1, root);
          dataItem.setRaw("labelEndValue", labelEndValue);
        }
        this._prepareDataItem(dataItem, count);
        previousValue = value;
        value = endValue;
        if (minorGridInterval) {
          const minorTimeUnit = minorGridInterval.timeUnit;
          const minorCount = minorGridInterval.count;
          const mmm = this._getM(minorTimeUnit);
          let minorValue = roun(previousValue + minorDuration * mmm, minorTimeUnit, minorCount, root, previousValue);
          let previousMinorValue;
          let minorFormats = this.get("minorDateFormats", this.get("dateFormats"));
          while (minorValue < value - 0.01 * minorDuration) {
            let minorDataItem;
            if (this.minorDataItems.length < m + 1) {
              minorDataItem = new DataItem(this, void 0, {});
              this.minorDataItems.push(minorDataItem);
              this.processDataItem(minorDataItem);
            } else {
              minorDataItem = this.minorDataItems[m];
            }
            this._createAssets(minorDataItem, ["minor"], true);
            this._toggleDataItem(minorDataItem, true);
            minorDataItem.setRaw("value", minorValue);
            let minorEndValue = minorValue + getDuration(minorTimeUnit, minorCount * mmm);
            minorEndValue = roun(minorEndValue, minorTimeUnit, 1, root);
            minorDataItem.setRaw("endValue", minorEndValue);
            let date2 = new Date(minorValue);
            format = minorFormats[minorTimeUnit];
            const minorLabel = minorDataItem.get("label");
            if (minorLabel) {
              if (minorLabelsEnabled) {
                minorLabel.set("text", root.dateFormatter.format(date2, format));
              } else {
                minorLabel.setPrivate("visible", false);
              }
            }
            this._prepareDataItem(minorDataItem, 1);
            if (minorValue == previousMinorValue) {
              break;
            }
            previousMinorValue = minorValue;
            minorValue = minorEndValue;
            m++;
          }
        }
        if (value == previousValue) {
          break;
        }
        i++;
      }
      for (let j = i; j < this.dataItems.length; j++) {
        this._toggleDataItem(this.dataItems[j], false);
      }
      for (let j = m; j < this.minorDataItems.length; j++) {
        this._toggleDataItem(this.minorDataItems[j], false);
      }
      each(this.series, (series) => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
    }
    this._updateGhost();
  }
  _updateFinals(start, end) {
    this.setPrivateRaw("selectionMinFinal", this.positionToValue(start));
    this.setPrivateRaw("selectionMaxFinal", this.positionToValue(end));
  }
  _getDelta() {
    this._deltaMinMax = this.baseDuration() / 2;
  }
  _fixMin(min) {
    const baseInterval = this.getPrivate("baseInterval");
    const timeUnit = baseInterval.timeUnit;
    let startTime = roun(min, timeUnit, baseInterval.count, this._root);
    let endTime = startTime + getDuration(timeUnit, baseInterval.count * this._getM(timeUnit));
    endTime = roun(endTime, timeUnit, 1, this._root);
    return startTime + (endTime - startTime) * this.get("startLocation", 0);
  }
  _fixMax(max) {
    const baseInterval = this.getPrivate("baseInterval");
    const timeUnit = baseInterval.timeUnit;
    let startTime = roun(max, timeUnit, baseInterval.count, this._root);
    let endTime = startTime + getDuration(timeUnit, baseInterval.count * this._getM(timeUnit));
    endTime = roun(endTime, timeUnit, 1, this._root);
    return startTime + (endTime - startTime) * this.get("endLocation", 1);
  }
  _updateDates(_date, _series) {
  }
  _handleSeriesRemoved() {
    this.setPrivate("baseInterval", this.get("baseInterval"));
    this.setPrivate("min", void 0);
    this.setPrivate("minFinal", void 0);
  }
  /**
   * Returns a duration of currently active `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseDuration() {
    return this._baseDuration;
  }
  /**
   * Returns a duration of user-defined `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseMainDuration() {
    return getIntervalDuration(this.get("baseInterval"));
  }
  /**
   * @ignore
   */
  processSeriesDataItem(dataItem, fields) {
    const baseInterval = this.getPrivate("baseInterval");
    if (!dataItem.open) {
      dataItem.open = {};
    }
    if (!dataItem.close) {
      dataItem.close = {};
    }
    each(fields, (field) => {
      let value = dataItem.get(field);
      if (isNumber(value)) {
        let startTime = dataItem.open[field];
        let endTime = dataItem.close[field];
        if (value >= startTime && value <= endTime) {
        } else {
          const timeUnit = baseInterval.timeUnit;
          const count = baseInterval.count;
          startTime = roun(value, timeUnit, count, this._root);
          endTime = startTime + getDuration(timeUnit, count * this._getM(timeUnit));
          endTime = roun(endTime, timeUnit, 1, this._root);
          dataItem.open[field] = startTime;
          dataItem.close[field] = endTime;
        }
        this._updateDates(startTime, dataItem.component);
      }
    });
  }
  _handleSizeDirty() {
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, cellLocation, axisLocation, exactLocation) {
    let openValue;
    let closeValue;
    let value;
    if (exactLocation) {
      value = dataItem.get(field);
    } else {
      if (dataItem.open && dataItem.close) {
        openValue = dataItem.open[field];
        closeValue = dataItem.close[field];
      } else {
        openValue = dataItem.get(field);
        closeValue = openValue;
      }
      value = openValue + (closeValue - openValue) * cellLocation;
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, cellLocation, axisLocation, exactLocation) {
    let openValue;
    let closeValue;
    let value;
    if (exactLocation) {
      value = dataItem.get(field);
    } else {
      if (dataItem.open && dataItem.close) {
        openValue = dataItem.open[field];
        closeValue = dataItem.close[field];
      } else {
        openValue = dataItem.get(field);
        closeValue = openValue;
      }
      value = openValue + (closeValue - openValue) * cellLocation;
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, location) {
    let value = this.positionToValue(position);
    value = value - (location - 0.5) * this.baseDuration();
    let baseInterval = this.getPrivate("baseInterval");
    if (!isNaN(value)) {
      const firstDay = this._root.locale.firstDayOfWeek;
      const timeUnit = baseInterval.timeUnit;
      const utc = this._root.utc;
      const timezone = this._root.timezone;
      const count = baseInterval.count;
      value = roun(value, timeUnit, count, this._root, this.getPrivate("min", 0));
      let duration = getDateIntervalDuration(baseInterval, new Date(value), firstDay, utc, timezone);
      if (timezone) {
        value = roun(value + this.baseDuration() * 0.05, timeUnit, count, this._root, this.getPrivate("min", 0));
        duration = getDateIntervalDuration(baseInterval, new Date(value + duration * location), firstDay, utc, timezone);
      }
      return this.valueToPosition(value + duration * location);
    }
    return NaN;
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * NOTE: Unless `adjustPosition` (2nd parameter) is set to `false`, the method
   * will adjust position by `tooltipIntervalOffset`.
   *
   * @param  position        Position
   * @param  adjustPosition  Adjust position
   * @return                 Tooltip text
   */
  getTooltipText(position, adjustPosition) {
    if (this.getPrivate("min") != null) {
      let format = this.get("tooltipDateFormats")[this.getPrivate("baseInterval").timeUnit];
      let value = this.positionToValue(position);
      if (isNumber(value)) {
        let date = new Date(value);
        let baseInterval = this.getPrivate("baseInterval");
        let duration = getDateIntervalDuration(baseInterval, date, this._root.locale.firstDayOfWeek, this._root.utc, this._root.timezone);
        if (adjustPosition !== false) {
          date = new Date(value + this.get("tooltipIntervalOffset", -this.get("tooltipLocation", 0.5)) * duration);
        }
        return this._root.dateFormatter.format(date, this.get("tooltipDateFormat", format));
      }
    }
    return "";
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position, location, snap) {
    let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
    let value = this.positionToValue(position);
    if (location == null) {
      location = 0.5;
    }
    value = value - (location - 0.5) * this.baseDuration();
    const result = getSortedIndex(series.dataItems, (dataItem) => {
      let diValue = 0;
      if (dataItem.open) {
        diValue = dataItem.open[fieldName];
      }
      return compare(diValue, value);
    });
    if (snap || series.get("snapTooltip")) {
      let first = series.dataItems[result.index - 1];
      let second = series.dataItems[result.index];
      if (first && second) {
        if (first.open && second.close) {
          let open = first.open[fieldName];
          let close = second.close[fieldName];
          if (Math.abs(value - open) > Math.abs(value - close)) {
            return second;
          }
        }
      }
      if (first) {
        return first;
      }
      if (second) {
        return second;
      }
    } else {
      const dataItem = series.dataItems[result.index - 1];
      if (dataItem) {
        if (dataItem.open && dataItem.close) {
          let open = dataItem.open[fieldName];
          let close = dataItem.close[fieldName];
          if (value >= open && value <= close) {
            return dataItem;
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  shouldGap(dataItem, nextItem, autoGapCount, fieldName) {
    const value1 = dataItem.get(fieldName);
    const value2 = nextItem.get(fieldName);
    if (value2 - value1 > this.baseDuration() * autoGapCount) {
      return true;
    }
    return false;
  }
  /**
   * Zooms the axis to specific `start` and `end` dates.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start Date
   * @param  end       End Date
   * @param  duration  Duration in milliseconds
   */
  zoomToDates(start, end, duration) {
    this.zoomToValues(start.getTime(), end.getTime(), duration);
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min = this.getPrivate("minFinal", 0);
    const max = this.getPrivate("maxFinal", 0);
    if (this.getPrivate("min") != null && this.getPrivate("max") != null) {
      if (this.get("groupData")) {
        const futureGroupInterval = this.getGroupInterval(end - start);
        const baseInterval = this.get("baseInterval");
        let baseMin = this.getIntervalMin(baseInterval);
        let baseMax = this.getIntervalMax(baseInterval) - 1;
        baseMax = roun(baseMax, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        baseMax += this._getM(futureGroupInterval.timeUnit) * getIntervalDuration(futureGroupInterval);
        baseMax = roun(baseMax, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        let futureMin = roun(baseMin, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        let futureMax = roun(baseMax, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        let s = (start - futureMin) / (futureMax - futureMin);
        let e = (end - futureMin) / (futureMax - futureMin);
        this.zoom(s, e, duration);
      } else {
        this.zoom((start - min) / (max - min), (end - min) / (max - min), duration);
      }
    }
  }
  /**
   * Returns a `Date` object corresponding to specific position within plot
   * area.
   *
   * @param   position  Pposition
   * @return            Date
   */
  positionToDate(position) {
    return new Date(this.positionToValue(position));
  }
  /**
   * Returns a relative position within plot area that corresponds to specific
   * date.
   *
   * @param   date  Date
   * @return        Position
   */
  dateToPosition(date) {
    return this.valueToPosition(date.getTime());
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @since 5.2.30
   * @return Position
   */
  getCellWidthPosition() {
    let max = this.getPrivate("selectionMax", this.getPrivate("max"));
    let min = this.getPrivate("selectionMin", this.getPrivate("min"));
    if (isNumber(max) && isNumber(min)) {
      return this._intervalDuration / (max - min);
    }
    return 0.05;
  }
  nextPosition(count) {
    if (count == null) {
      count = 1;
    }
    let dtime = this.get("tooltipLocation", 0.5) * this.baseDuration();
    if (this.get("renderer").getPrivate("letter") == "Y") {
      count *= -1;
    }
    let tooltipValue = this.positionToValue(this.getPrivate("tooltipPosition", 0));
    const baseInterval = this.getPrivate("baseInterval");
    let time = this._nextTime(tooltipValue, count, baseInterval);
    let selectionMin = this.getPrivate("selectionMin", 0);
    let selectionMax = this.getPrivate("selectionMax", 0);
    let min = roun(selectionMin, baseInterval.timeUnit, baseInterval.count, this._root);
    let max = roun(selectionMax, baseInterval.timeUnit, baseInterval.count, this._root);
    time += dtime;
    time = fitToRange(time, min + dtime, max - dtime);
    return this.toGlobalPosition(this.valueToPosition(time));
  }
  _nextTime(time, count, baseInterval) {
    return roun(time + count * this.baseDuration(), baseInterval.timeUnit, baseInterval.count, this._root);
  }
};
Object.defineProperty(DateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DateAxis"
});
Object.defineProperty(DateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ValueAxis.classNames.concat([DateAxis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/GaplessDateAxis.js
var GaplessDateAxis = class extends DateAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_m", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_customDates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this.valueFields.push("date");
    super._afterNew();
  }
  _getDates() {
    if (this._customDates) {
      return this._customDates;
    }
    return this._dates;
  }
  _updateDates(date, series) {
    if (!series.get("ignoreMinMax")) {
      const dates = this._getDates();
      const result = getSortedIndex(dates, (x) => compare(x, date));
      if (!result.found) {
        insertIndex(dates, result.index, date);
      }
    }
  }
  _updateAllDates() {
    if (!this._customDates) {
      const dates = this._dates;
      dates.length = 0;
      each(this.series, (series) => {
        let field = "valueX";
        if (series.get("yAxis") == this) {
          field = "valueY";
        }
        each(series.dataItems, (dataItem) => {
          let value = dataItem.get(field);
          if (isNumber(value)) {
            if (dataItem.open) {
              this._updateDates(dataItem.open[field], series);
            }
          }
        });
      });
      const extraMax = this.get("extraMax", 0);
      const extraMin = this.get("extraMin", 0);
      let len = dates.length;
      const baseInterval = this.getPrivate("baseInterval");
      const baseCount = baseInterval.count;
      const timeUnit = baseInterval.timeUnit;
      if (extraMax > 0) {
        const extra = len * extraMax;
        let time = dates[len - 1];
        if (isNumber(time)) {
          for (let i = len - 1; i < len + extra; i++) {
            time += getDuration(timeUnit, baseCount * this._getM(timeUnit));
            time = roun(time, timeUnit, baseCount, this._root);
            dates.push(time);
          }
        }
      }
      if (extraMin > 0) {
        const extra = len * extraMin;
        let time = dates[0];
        if (isNumber(time)) {
          for (let i = 0; i < extra; i++) {
            time -= getDuration(timeUnit, baseCount);
            time = roun(time, timeUnit, baseCount, this._root);
            dates.unshift(time);
          }
        }
      }
    }
  }
  /**
   * Convers value to a relative position on axis.
   *
   * @param   value  Value
   * @return         Relative position
   */
  valueToPosition(value) {
    const dates = this._getDates();
    const startLocation = this.get("startLocation", 0);
    const endLocation = this.get("endLocation", 1);
    const len = dates.length - startLocation - (1 - endLocation);
    const result = getSortedIndex(dates, (x) => compare(x, value));
    let index = result.index;
    if (result.found) {
      return (index - startLocation) / len;
    } else {
      if (index > 0) {
        index -= 1;
      }
      let itemValue = dates[index];
      const nextDate = dates[index + 1];
      if (nextDate) {
        let nextItemValue = nextDate;
        if (Math.abs(nextItemValue - value) < Math.abs(itemValue - value)) {
          itemValue = nextItemValue;
          index++;
        }
      }
      let d = value - itemValue;
      return (index - startLocation) / len + d / this.baseDuration() / len;
    }
  }
  /**
   * Converts numeric value from axis scale to index.
   *
   * @param  value  Value
   * @return        Index
   */
  valueToIndex(value) {
    const dates = this._getDates();
    const result = getSortedIndex(dates, (x) => compare(x, value));
    let index = result.index;
    if (result.found) {
      return index;
    } else {
      if (index > 0) {
        index -= 1;
      }
      return index;
    }
  }
  /**
   * Converts a relative position to a corresponding numeric value from axis
   * scale.
   *
   * @param   position  Relative position
   * @return            Value
   */
  positionToValue(position) {
    const startLocation = this.get("startLocation", 0);
    const endLocation = this.get("endLocation", 1);
    const dates = this._getDates();
    let len = Math.round(dates.length - startLocation - (1 - endLocation));
    let index = position * len;
    let findex = Math.floor(index);
    if (findex < 0) {
      findex = 0;
    }
    if (findex > len - 1) {
      findex = len - 1;
    }
    return dates[findex] + (index - findex + startLocation) * this.baseDuration();
  }
  _fixZoomFactor() {
    this.setPrivateRaw("maxZoomFactor", this._getDates().length - this.get("startLocation", 0) - (1 - this.get("endLocation", 1)));
  }
  /**
   * Zooms the axis to specific `start` and `end` dates.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start Date
   * @param  end       End Date
   * @param  duration  Duration in milliseconds
   */
  zoomToDates(start, end, duration) {
    const dates = this._getDates();
    const len = dates.length;
    let result = getSortedIndex(dates, (x) => compare(x, start.getTime()));
    let startValue = dates[Math.min(result.index, len - 1)];
    result = getSortedIndex(dates, (x) => compare(x, end.getTime()));
    let endValue = dates[result.index];
    if (result.index >= len) {
      endValue = dates[len - 1] + this.baseDuration();
    }
    this.zoomToValues(startValue, endValue, duration);
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min = this.getPrivate("min", 0);
    const max = this.getPrivate("max", 0);
    start = fitToRange(start, min, max);
    end = fitToRange(end, min, max);
    this.zoom(this.valueToPosition(start), this.valueToPosition(end), duration);
  }
  _prepareAxisItems() {
    let startTime = this.getPrivate("selectionMin", 0);
    let endTime = this.getPrivate("selectionMax", 0);
    if (isNumber(startTime) && isNumber(endTime)) {
      if (this._seriesValuesDirty) {
        this._seriesValuesDirty = false;
        this._updateAllDates();
      }
      const root = this._root;
      const utc = root.utc;
      const timezone = root.timezone;
      const dates = this._getDates();
      const renderer = this.get("renderer");
      const len = dates.length;
      const baseDuration = this.baseDuration();
      let startIndex = this.valueToIndex(startTime);
      if (startIndex > 0) {
        startIndex--;
      }
      let endIndex = this.valueToIndex(endTime);
      if (endIndex < len - 1) {
        endIndex++;
      }
      let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
      let frequency = Math.min(len, Math.ceil((endIndex - startIndex) / maxCount));
      frequency = Math.max(1, frequency);
      startIndex = Math.floor(startIndex / frequency) * frequency;
      this._frequency = frequency;
      each(this.dataItems, (dataItem) => {
        this._toggleDataItem(dataItem, false);
      });
      each(this.minorDataItems, (dataItem) => {
        this._toggleDataItem(dataItem, false);
      });
      let realDuration = endTime - startTime - ((endTime - startTime) / baseDuration - (endIndex - startIndex)) * baseDuration;
      let gridInterval = chooseInterval(0, realDuration, maxCount, this.get("gridIntervals"));
      const baseInterval = this.getPrivate("baseInterval");
      let intervalDuration = getIntervalDuration(gridInterval);
      if (intervalDuration < baseDuration) {
        gridInterval = Object.assign({}, baseInterval);
        intervalDuration = getIntervalDuration(gridInterval);
      }
      this._intervalDuration = intervalDuration;
      const timeUnit = gridInterval.timeUnit;
      const formats = this.get("dateFormats");
      let firstTime = Date.now();
      if (dates[0]) {
        firstTime = dates[0];
      }
      let value = roun(this.getPrivate("selectionMin", 0), timeUnit, gridInterval.count, root, firstTime);
      const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
      const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
      let minorGridInterval;
      let minorDuration = 0;
      let previousDataItem;
      if (minorGridEnabled) {
        minorGridInterval = this._getMinorInterval(gridInterval);
        minorDuration = getIntervalDuration(minorGridInterval);
      }
      let selectedItems = this._getIndexes(value, this.getPrivate("selectionMax", value) + intervalDuration, gridInterval, this.getPrivate("min", value));
      if (selectedItems.length > 0) {
        let i = 0;
        this._m = 0;
        let previousValue = value - intervalDuration * 10;
        const nextGridUnit = getNextUnit(timeUnit);
        if (minorGridInterval) {
          let first = dates[selectedItems[0]];
          this._addMinorGrid(first - intervalDuration, first, minorDuration, minorGridInterval);
        }
        let minDistance = renderer.axisLength() / renderer.gridCount() * 0.5;
        each(selectedItems, (index) => {
          var _a;
          let dataItem;
          if (this.dataItems.length < i + 1) {
            dataItem = new DataItem(this, void 0, {});
            this._dataItems.push(dataItem);
            this.processDataItem(dataItem);
          } else {
            dataItem = this.dataItems[i];
          }
          let value2 = dates[index];
          let date = new Date(value2);
          let endValue = value2;
          if (i < selectedItems.length - 1) {
            endValue = dates[selectedItems[i + 1]];
          } else {
            endValue += intervalDuration;
          }
          dataItem.setRaw("value", value2);
          dataItem.setRaw("endValue", endValue);
          dataItem.setRaw("index", i);
          dataItem.setRaw("labelEndValue", void 0);
          let format = formats[timeUnit];
          if (nextGridUnit && this.get("markUnitChange") && isNumber(previousValue)) {
            if (timeUnit != "year") {
              if (checkChange(value2, previousValue, nextGridUnit, utc, timezone)) {
                format = this.get("periodChangeDateFormats")[timeUnit];
              }
            }
          }
          this._createAssets(dataItem, []);
          const label = dataItem.get("label");
          if (label) {
            label.set("text", root.dateFormatter.format(date, format));
          }
          this._toggleDataItem(dataItem, true);
          let count = gridInterval.count;
          if (timeUnit == "week") {
            dataItem.setRaw("labelEndValue", value2);
          }
          if (minorGridEnabled) {
            let timeUnit2 = gridInterval.timeUnit;
            if (timeUnit2 == "week") {
              timeUnit2 = "day";
            }
            if (count > 1 || gridInterval.timeUnit == "week") {
              let labelEndValue = roun(value2, timeUnit2, 1, root) + getDuration(timeUnit2, this._getM(timeUnit2));
              let index2 = this.valueToIndex(labelEndValue);
              labelEndValue = dates[index2];
              if (labelEndValue == value2) {
                let next = dates[index2 + 1];
                if (next) {
                  labelEndValue = next;
                } else {
                  labelEndValue += minorDuration;
                }
              }
              dataItem.setRaw("labelEndValue", labelEndValue);
            }
            count = 1;
          }
          this._prepareDataItem(dataItem, count);
          if (label && previousDataItem) {
            if (renderer.getPrivate("letter") == "X") {
              let previousLabel = previousDataItem.get("label");
              if (previousLabel) {
                let x = label.x();
                let previousX = previousLabel.x();
                if (x - previousX < minDistance) {
                  let worse = this._pickWorse(previousDataItem, dataItem, gridInterval);
                  if (worse) {
                    (_a = worse.get("label")) === null || _a === void 0 ? void 0 : _a.setPrivate("visible", false);
                  }
                }
              }
            }
          }
          if (minorGridInterval) {
            this._addMinorGrid(value2, endValue, minorDuration, minorGridInterval);
          }
          i++;
          if (label && label.getPrivate("visible")) {
            previousDataItem = dataItem;
          }
          previousValue = value2;
        });
      }
      each(this.series, (series) => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
    }
    this._updateGhost();
  }
  _pickWorse(dataItemA, dataItemB, interval) {
    const timeUnit = interval.timeUnit;
    const valueA = dataItemA.get("value", 0);
    const valueB = dataItemB.get("value", 0);
    if (timeUnit == "hour") {
      if (new Date(valueA).getDate() != new Date(valueB).getDate()) {
        return dataItemA;
      }
    }
    return dataItemB;
  }
  _addMinorGrid(startValue, endValue, minorDuration, gridInterval) {
    const minorFormats = this.get("minorDateFormats", this.get("dateFormats"));
    const mTimeUnit = gridInterval.timeUnit;
    let value = startValue + getDuration(mTimeUnit, this._getM(mTimeUnit));
    value = roun(value, mTimeUnit, 1, this._root);
    let maxValue = endValue - minorDuration * 0.5;
    let minorSelectedItems = this._getIndexes(value, maxValue, gridInterval, value);
    const dates = this._getDates();
    each(minorSelectedItems, (index) => {
      let minorDataItem;
      if (this.minorDataItems.length < this._m + 1) {
        minorDataItem = new DataItem(this, void 0, {});
        this.minorDataItems.push(minorDataItem);
        this.processDataItem(minorDataItem);
      } else {
        minorDataItem = this.minorDataItems[this._m];
      }
      value = dates[index];
      minorDataItem.setRaw("value", value);
      minorDataItem.setRaw("endValue", value + minorDuration);
      minorDataItem.setRaw("index", index);
      this._createAssets(minorDataItem, ["minor"], true);
      const label = minorDataItem.get("label");
      if (label) {
        if (this.get("renderer").get("minorLabelsEnabled")) {
          let date = new Date(value);
          let format = minorFormats[mTimeUnit];
          label.set("text", this._root.dateFormatter.format(date, format));
        } else {
          label.setPrivate("visible", false);
        }
      }
      this._toggleDataItem(minorDataItem, true);
      this._prepareDataItem(minorDataItem, 1);
      this._m++;
    });
  }
  _getIndexes(value, maxValue, interval, firstValue) {
    const items = [];
    const timeUnit = interval.timeUnit;
    const count = interval.count;
    const mmm = this._getM(timeUnit);
    const baseInterval = this.getPrivate("baseInterval");
    const root = this._root;
    const dates = this._getDates();
    let c = count - 1;
    let previousValue = -Infinity;
    let duration = getDuration(timeUnit, mmm);
    let fullDuration = getDuration(timeUnit, count * mmm);
    let originalValue = value;
    if (timeUnit == "day") {
      value = firstValue;
    }
    while (value <= maxValue) {
      value = roun(value, timeUnit, count, root);
      let index = this.valueToIndex(value);
      let realValue = dates[index];
      if (timeUnit == "day" && baseInterval.timeUnit == "day") {
        if (this._hasDate(value)) {
          c++;
        }
        if (c == count) {
          if (value >= originalValue - fullDuration * 2) {
            move(items, index);
          }
          c = 0;
        }
        value += duration;
        value = roun(value, timeUnit, 1, root);
      } else {
        if (realValue < value) {
          for (let i = index, len = dates.length; i < len; i++) {
            realValue = dates[i];
            if (realValue >= value) {
              index = i;
              break;
            }
          }
        }
        move(items, index);
        value += fullDuration;
        value = roun(value, timeUnit, count, root);
      }
      if (value == previousValue) {
        value += fullDuration + duration;
        value = roun(value, timeUnit, count, root);
      }
      if (value == previousValue) {
        break;
      }
      previousValue = value;
    }
    return items;
  }
  _hasDate(time) {
    const result = getSortedIndex(this._getDates(), (date) => {
      return compareNumber(date, time);
    });
    return result.found;
  }
  _nextTime(time, count, _baseInterval) {
    let index = fitToRange(this.valueToIndex(time) + count, 0, this._dates.length - 1);
    return this._dates[index];
  }
};
Object.defineProperty(GaplessDateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GaplessDateAxis"
});
Object.defineProperty(GaplessDateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DateAxis.classNames.concat([GaplessDateAxis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisBullet.js
var AxisBullet = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "axis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    const sprite = this.get("sprite");
    if (this.isDirty("sprite")) {
      if (sprite) {
        sprite.setAll({ position: "absolute", role: "figure" });
        this._disposers.push(sprite);
      }
    }
    if (this.isDirty("location")) {
      const dataItem = sprite.dataItem;
      if (this.axis && sprite && dataItem) {
        this.axis._prepareDataItem(dataItem);
      }
    }
  }
  _dispose() {
    const axis = this.axis;
    if (axis) {
      each2(axis._bullets, (key, bullet) => {
        if (bullet.uid == this.uid) {
          delete axis._bullets[key];
        }
      });
    }
    super._dispose();
  }
};
Object.defineProperty(AxisBullet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisBullet"
});
Object.defineProperty(AxisBullet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([AxisBullet.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererX.js
var AxisRendererX = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Rectangle.new(this._root, { width: p100, isMeasured: false, themeTags: ["axis", "x", "thumb"] })
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "x"]);
    super._afterNew();
    this.setPrivateRaw("letter", "X");
    const gridTemplate = this.grid.template;
    gridTemplate.set("height", p100);
    gridTemplate.set("width", 0);
    gridTemplate.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(0, graphics.height());
    });
    this.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(graphics.width(), 0);
    });
  }
  _changed() {
    super._changed();
    const axis = this.axis;
    axis.ghostLabel.setPrivate("visible", !this.get("inside"));
    axis.ghostLabel.set("x", -1e3);
    const opposite = "opposite";
    const inside = "inside";
    if (this.isDirty(opposite) || this.isDirty(inside)) {
      const chart = this.chart;
      const axisChildren = axis.children;
      if (this.get(inside)) {
        axis.addTag(inside);
      } else {
        axis.removeTag(inside);
      }
      if (chart) {
        if (this.get(opposite)) {
          const children = chart.topAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.insertIndex(0, axis);
          }
          axis.addTag(opposite);
          axisChildren.moveValue(this);
        } else {
          const children = chart.bottomAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis);
          }
          axis.removeTag(opposite);
          axisChildren.moveValue(this, 0);
        }
        axis.ghostLabel._applyThemes();
        this.labels.each((label) => {
          label._applyThemes();
        });
        this.root._markDirtyRedraw();
      }
      axis.markDirtySize();
    }
    this.thumb.setPrivate("height", axis.labelsContainer.height());
  }
  _getPan(point1, point2) {
    return (point2.x - point1.x) / this.width();
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position -= this._ls;
    position = position * (end - start) / this._lc;
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
    position = position / (end - start) * this._lc;
    position += this._ls;
    return position;
  }
  /**
   * @ignore
   */
  _updateLC() {
    const axis = this.axis;
    const parent = axis.parent;
    if (parent) {
      const w = parent.innerWidth();
      this._lc = this.axisLength() / w;
      this._ls = (axis.x() - parent.get("paddingLeft", 0)) / w;
    }
  }
  /**
   * @ignore
   */
  _updatePositions() {
    const axis = this.axis;
    const x = axis.x() - relativeToValue(axis.get("centerX", 0), axis.width()) - axis.parent.get("paddingLeft", 0);
    axis.gridContainer.set("x", x);
    axis.topGridContainer.set("x", x);
    axis.bulletsContainer.set("y", this.y());
    const chart = axis.chart;
    if (chart) {
      const plotContainer = chart.plotContainer;
      const axisHeader = axis.axisHeader;
      let width = axis.get("marginLeft", 0);
      let x2 = axis.x() - width;
      const parent = axis.parent;
      if (parent) {
        x2 -= parent.get("paddingLeft", 0);
      }
      if (axisHeader.children.length > 0) {
        width = axis.axisHeader.width();
        axis.set("marginLeft", width + 1);
      } else {
        axisHeader.set("width", width);
      }
      axisHeader.setAll({ x: x2, y: -1, height: plotContainer.height() + 2 });
    }
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    if (axis.get("width") == null) {
      axis.set("width", p100);
    }
    ;
    const verticalLayout = this._root.verticalLayout;
    axis.set("layout", verticalLayout);
    axis.labelsContainer.set("width", p100);
    axis.axisHeader.setAll({ layout: verticalLayout });
  }
  /**
   * @ignore
   */
  axisLength() {
    return this.axis.width();
  }
  /**
   * Converts axis relative position to actual coordinate in pixels.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    return { x: this.positionToCoordinate(position), y: 0 };
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      tick.set("x", this.positionToCoordinate(position));
      let length = tick.get("length", 0);
      const inside = tick.get("inside", this.get("inside", false));
      if (this.get("opposite")) {
        tick.set("y", p100);
        if (!inside) {
          length *= -1;
        }
      } else {
        tick.set("y", 0);
        if (inside) {
          length *= -1;
        }
      }
      tick.set("draw", (display) => {
        display.moveTo(0, 0);
        display.lineTo(0, length);
      });
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      if (!isNumber(position)) {
        position = 0;
      }
      const inside = label.get("inside", this.get("inside", false));
      const opposite = this.get("opposite");
      if (opposite) {
        if (!inside) {
          label.set("position", "relative");
          label.set("y", p100);
        } else {
          label.set("position", "absolute");
          label.set("y", 0);
        }
      } else {
        if (!inside) {
          label.set("y", void 0);
          label.set("position", "relative");
        } else {
          label.set("y", 0);
          label.set("position", "absolute");
        }
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      label.set("x", this.positionToCoordinate(position));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      grid.set("x", this.positionToCoordinate(position));
      this.toggleVisibility(grid, position, 0, 1);
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (!isNumber(position)) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (isNumber(endPosition) && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let bulletPosition = this.axis.roundAxisPosition(position, location);
        let previousBullet = this.axis._bullets[bulletPosition];
        let d = -1;
        if (this.get("opposite")) {
          d = 1;
        }
        if (bullet.get("stacked")) {
          if (previousBullet) {
            let previousSprite = previousBullet.get("sprite");
            if (previousSprite) {
              sprite.set("y", previousSprite.y() + previousSprite.height() * d);
            }
          } else {
            sprite.set("y", 0);
          }
        }
        this.axis._bullets[bulletPosition] = bullet;
        sprite.set("x", this.positionToCoordinate(position));
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (!isNumber(position)) {
        position = 0;
      }
      if (!isNumber(endPosition)) {
        endPosition = 1;
      }
      let x0 = this.positionToCoordinate(position);
      let x1 = this.positionToCoordinate(endPosition);
      this.fillDrawMethod(fill, x0, x1);
    }
  }
  fillDrawMethod(fill, x0, x1) {
    fill.set("draw", (display) => {
      const h = this.axis.gridContainer.height();
      const w = this.width();
      if (x1 < x0) {
        [x1, x0] = [x0, x1];
      }
      if (x0 > w || x1 < 0) {
        return;
      }
      display.moveTo(x0, 0);
      display.lineTo(x1, 0);
      display.lineTo(x1, h);
      display.lineTo(x0, h);
      display.lineTo(x0, 0);
    });
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    this._positionTooltip(tooltip, { x: this.positionToCoordinate(position), y: 0 });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(tooltip) {
    const inside = this.get("inside");
    const num = 1e5;
    let global = this._display.toGlobal({ x: 0, y: 0 });
    let x = global.x;
    let y = 0;
    let w = this.axisLength();
    let h = num;
    let pointerOrientation = "up";
    if (this.get("opposite")) {
      if (inside) {
        pointerOrientation = "up";
        y = global.y;
        h = num;
      } else {
        pointerOrientation = "down";
        y = global.y - num;
        h = num;
      }
    } else {
      if (inside) {
        pointerOrientation = "down";
        y = global.y - num;
        h = num;
      } else {
        pointerOrientation = "up";
        y = global.y;
        h = num;
      }
    }
    const bounds = { left: x, right: x + w, top: y, bottom: y + h };
    const oldBounds = tooltip.get("bounds");
    if (!sameBounds(bounds, oldBounds)) {
      tooltip.set("bounds", bounds);
      tooltip.set("pointerOrientation", pointerOrientation);
    }
  }
};
Object.defineProperty(AxisRendererX, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererX"
});
Object.defineProperty(AxisRendererX, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererX.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererY.js
var AxisRendererY = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_downY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Rectangle.new(this._root, { height: p100, isMeasured: false, themeTags: ["axis", "y", "thumb"] })
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "y"]);
    if (this._settings.opposite) {
      this._settings.themeTags.push("opposite");
    }
    super._afterNew();
    this.setPrivateRaw("letter", "Y");
    const gridTemplate = this.grid.template;
    gridTemplate.set("width", p100);
    gridTemplate.set("height", 0);
    gridTemplate.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(graphics.width(), 0);
    });
    this.set("draw", (display, renderer) => {
      display.moveTo(0, 0);
      display.lineTo(0, renderer.height());
    });
  }
  _getPan(point1, point2) {
    return (point1.y - point2.y) / this.height();
  }
  _changed() {
    super._changed();
    const axis = this.axis;
    axis.ghostLabel.setPrivate("visible", !this.get("inside"));
    axis.ghostLabel.set("y", -1e3);
    const thumb = this.thumb;
    const opposite = "opposite";
    const inside = "inside";
    const chart = this.chart;
    if (this.isDirty(opposite) || this.isDirty(inside)) {
      const axisChildren = axis.children;
      if (this.get(inside)) {
        axis.addTag(inside);
      } else {
        axis.removeTag(inside);
      }
      if (chart) {
        if (this.get(opposite)) {
          const children = chart.rightAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis, 0);
          }
          axis.addTag(opposite);
          axisChildren.moveValue(this, 0);
        } else {
          const children = chart.leftAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis);
          }
          axis.removeTag(opposite);
          axisChildren.moveValue(this);
        }
        axis.ghostLabel._applyThemes();
        this.labels.each((label) => {
          label._applyThemes();
        });
        this.root._markDirtyRedraw();
      }
      axis.markDirtySize();
    }
    const w = axis.labelsContainer.width();
    if (chart) {
      if (this.get(opposite)) {
        thumb.set("centerX", 0);
      } else {
        thumb.set("centerX", w);
      }
    }
    thumb.setPrivate("width", w);
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    if (axis.get("height") == null) {
      axis.set("height", p100);
    }
    const horizontalLayout = this._root.horizontalLayout;
    axis.set("layout", horizontalLayout);
    axis.labelsContainer.set("height", p100);
    axis.axisHeader.set("layout", horizontalLayout);
  }
  _updatePositions() {
    const axis = this.axis;
    const y = axis.y() - relativeToValue(axis.get("centerY", 0), axis.height());
    axis.gridContainer.set("y", y);
    axis.topGridContainer.set("y", y);
    axis.bulletsContainer.set("x", this.x());
    const chart = axis.chart;
    if (chart) {
      const plotContainer = chart.plotContainer;
      const axisHeader = axis.axisHeader;
      let height = axis.get("marginTop", 0);
      if (axisHeader.children.length > 0) {
        height = axis.axisHeader.height();
        axis.set("marginTop", height + 1);
      } else {
        axisHeader.set("height", height);
      }
      axisHeader.setAll({ y: axis.y() - height, x: -1, width: plotContainer.width() + 2 });
    }
  }
  /**
   * @ignore
   */
  axisLength() {
    return this.axis.innerHeight();
  }
  /**
   * Converts axis relative position to actual coordinate in pixels.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    return { x: 0, y: this.positionToCoordinate(position) };
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      const opposite = this.get("opposite");
      const inside = label.get("inside", this.get("inside", false));
      if (opposite) {
        label.set("x", 0);
        if (inside) {
          label.set("position", "absolute");
        } else {
          label.set("position", "relative");
        }
      } else {
        if (inside) {
          label.set("x", 0);
          label.set("position", "absolute");
        } else {
          label.set("x", void 0);
          label.set("position", "relative");
        }
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      label.set("y", this.positionToCoordinate(position));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      grid.set("y", this.positionToCoordinate(position));
      this.toggleVisibility(grid, position, 0, 1);
    }
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      tick.set("y", this.positionToCoordinate(position));
      let length = tick.get("length", 0);
      const inside = tick.get("inside", this.get("inside", false));
      if (this.get("opposite")) {
        tick.set("x", 0);
        if (inside) {
          length *= -1;
        }
      } else {
        if (!inside) {
          length *= -1;
        }
      }
      tick.set("draw", (display) => {
        display.moveTo(0, 0);
        display.lineTo(length, 0);
      });
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (!isNumber(position)) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (isNumber(endPosition) && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let bulletPosition = this.axis.roundAxisPosition(position, location);
        let previousBullet = this.axis._bullets[bulletPosition];
        let d = 1;
        if (this.get("opposite")) {
          d = -1;
        }
        if (bullet.get("stacked")) {
          if (previousBullet) {
            let previousSprite = previousBullet.get("sprite");
            if (previousSprite) {
              sprite.set("x", previousSprite.x() + previousSprite.width() * d);
            }
          } else {
            sprite.set("x", 0);
          }
        }
        this.axis._bullets[bulletPosition] = bullet;
        sprite.set("y", this.positionToCoordinate(position));
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (!isNumber(position)) {
        position = 0;
      }
      if (!isNumber(endPosition)) {
        endPosition = 1;
      }
      let y0 = this.positionToCoordinate(position);
      let y1 = this.positionToCoordinate(endPosition);
      this.fillDrawMethod(fill, y0, y1);
    }
  }
  fillDrawMethod(fill, y0, y1) {
    fill.set("draw", (display) => {
      const w = this.axis.gridContainer.width();
      const h = this.height();
      if (y1 < y0) {
        [y1, y0] = [y0, y1];
      }
      if (y0 > h || y1 < 0) {
        return;
      }
      display.moveTo(0, y0);
      display.lineTo(w, y0);
      display.lineTo(w, y1);
      display.lineTo(0, y1);
      display.lineTo(0, y0);
    });
  }
  /**
   * Converts relative position (0-1) on axis to a pixel coordinate.
   *
   * @param position  Position (0-1)
   * @return Coordinate (px)
   */
  positionToCoordinate(position) {
    if (!this._inversed) {
      return (this._end - position) * this._axisLength;
    } else {
      return (position - this._start) * this._axisLength;
    }
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    this._positionTooltip(tooltip, { x: 0, y: this.positionToCoordinate(position) });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(tooltip) {
    const inside = this.get("inside");
    const num = 1e5;
    let global = this._display.toGlobal({ x: 0, y: 0 });
    let y = global.y;
    let x = 0;
    let h = this.axisLength();
    let w = num;
    let pointerOrientation = "right";
    if (this.get("opposite")) {
      if (inside) {
        pointerOrientation = "right";
        x = global.x - num;
        w = num;
      } else {
        pointerOrientation = "left";
        x = global.x;
        w = num;
      }
    } else {
      if (inside) {
        pointerOrientation = "left";
        x = global.x;
        w = num;
      } else {
        pointerOrientation = "right";
        x = global.x - num;
        w = num;
      }
    }
    const bounds = { left: x, right: x + w, top: y, bottom: y + h };
    const oldBounds = tooltip.get("bounds");
    if (!sameBounds(bounds, oldBounds)) {
      tooltip.set("bounds", bounds);
      tooltip.set("pointerOrientation", pointerOrientation);
    }
  }
  /**
   * @ignore
   */
  _updateLC() {
    const axis = this.axis;
    const parent = axis.parent;
    if (parent) {
      const h = parent.innerHeight();
      this._lc = this.axisLength() / h;
      this._ls = axis.y() / h;
    }
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position -= this._ls;
    position = position * (end - start) / this._lc;
    if (this.get("inversed")) {
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
    if (this.get("inversed")) {
      position = position - start;
    } else {
      position = end - position;
    }
    position = position / (end - start) * this._lc;
    position += this._ls;
    return position;
  }
  /**
   * @ignore
   */
  fixPosition(position) {
    if (!this.get("inversed")) {
      return 1 - position;
    }
    return position;
  }
};
Object.defineProperty(AxisRendererY, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererY"
});
Object.defineProperty(AxisRendererY, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererY.className])
});

export {
  ColumnSeries,
  Candlestick,
  CandlestickSeries,
  Axis,
  ValueAxis,
  DateAxis,
  GaplessDateAxis,
  AxisBullet,
  AxisRendererX,
  AxisRendererY
};
//# sourceMappingURL=chunk-TJYBJU4B.js.map
