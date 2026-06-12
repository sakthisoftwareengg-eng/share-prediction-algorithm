import {
  AxisLabelRadial
} from "./chunk-ODL3CSH7.js";
import {
  curveMonotoneXTension,
  curveMonotoneYTension
} from "./chunk-XUZ6UAUT.js";
import {
  Axis,
  AxisBullet,
  AxisRendererX,
  AxisRendererY,
  Candlestick,
  CandlestickSeries,
  ColumnSeries,
  DateAxis,
  GaplessDateAxis,
  ValueAxis
} from "./chunk-TJYBJU4B.js";
import {
  AxisLabel,
  AxisRenderer,
  AxisTick,
  BaseColumnSeries,
  Grid,
  LineSeries,
  XYChart,
  XYChartDefaultTheme,
  XYCursor,
  XYSeries
} from "./chunk-ITQFRA6V.js";
import {
  Scrollbar
} from "./chunk-33HAZN3H.js";
import "./chunk-AHDXI7TZ.js";
import "./chunk-XATEH3WK.js";
import "./chunk-NAZ7YOFP.js";
import "./chunk-KXW2OGU6.js";
import {
  cardinal_default,
  stepAfter
} from "./chunk-TSCKTQIQ.js";
import "./chunk-E32SSC6Z.js";
import "./chunk-AVJ6LU7H.js";
import {
  checkChange,
  chooseInterval,
  getIntervalDuration,
  getNextUnit,
  getUnitValue
} from "./chunk-JFXPNH7X.js";
import "./chunk-CRL5FSBR.js";
import "./chunk-XOW4XAJF.js";
import "./chunk-D7RPQL45.js";
import {
  Graphics,
  ListTemplate,
  closest,
  fitToRange,
  mergeTags,
  p100,
  populateString,
  round
} from "./chunk-BGHA5GQX.js";
import "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  isNumber
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChartScrollbar.js
var XYChartScrollbar = class extends Scrollbar {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(XYChart.new(this._root, {
        themeTags: ["chart"],
        interactive: false,
        interactiveChildren: false,
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none"
      }))
    });
    Object.defineProperty(this, "overlay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Graphics.new(this._root, {
        themeTags: ["overlay"],
        interactive: false
      }))
    });
  }
  _afterNew() {
    this._addOrientationClass();
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["scrollbar", "xy", "chart", this._settings.orientation]);
    const children = this.children;
    children.moveValue(this.thumb);
    children.moveValue(this.startGrip);
    children.moveValue(this.endGrip);
    this.thumb.set("opacity", 0);
    this.thumb.states.create("hover", { opacity: 0.2 });
    const plotContainer = this.chart.plotContainer;
    plotContainer.set("interactive", false);
    plotContainer.remove("background");
    plotContainer.children.removeValue(this.chart.zoomOutButton);
    super._afterNew();
  }
  _updateThumb() {
    super._updateThumb();
    this.overlay.set("draw", (display) => {
      const startGrip = this.startGrip;
      const endGrip = this.endGrip;
      let x0 = startGrip.x();
      let y0 = startGrip.y();
      let x1 = endGrip.x();
      let y1 = endGrip.y();
      const h = this.height();
      const w = this.width();
      if (x0 > x1) {
        [x0, x1] = [x1, x0];
      }
      if (y0 > y1) {
        [y0, y1] = [y1, y0];
      }
      if (this.get("orientation") === "horizontal") {
        display.moveTo(0, 0);
        display.lineTo(x0, 0);
        display.lineTo(x0, h);
        display.lineTo(0, h);
        display.lineTo(0, 0);
        display.moveTo(x1, 0);
        display.lineTo(w, 0);
        display.lineTo(w, h);
        display.lineTo(x1, h);
        display.lineTo(x1, 0);
      } else {
        display.moveTo(0, 0);
        display.lineTo(0, y0);
        display.lineTo(w, y0);
        display.lineTo(w, 0);
        display.lineTo(0, 0);
        display.moveTo(0, y1);
        display.lineTo(0, h);
        display.lineTo(w, h);
        display.lineTo(w, y1);
        display.lineTo(0, y1);
      }
    });
  }
};
Object.defineProperty(XYChartScrollbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYChartScrollbar"
});
Object.defineProperty(XYChartScrollbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Scrollbar.classNames.concat([XYChartScrollbar.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryAxis.js
var CategoryAxis = class _CategoryAxis extends Axis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    this.fields.push("category");
    this.setPrivateRaw("name", "category");
    this.addTag("category");
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const len = this.dataItems.length;
    let i = 0;
    if (this._valuesDirty) {
      this._itemMap = {};
      each(this.dataItems, (dataItem) => {
        dataItem.setRaw("index", i);
        this._itemMap[dataItem.get("category")] = dataItem;
        i++;
      });
      this.setPrivateRaw("maxZoomFactor", len);
    }
    this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * len), 0));
    this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * len), len));
    if (this._sizeDirty || this._valuesDirty || (this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height"))) {
      if (this.dataItems.length > 0) {
        this._handleRangeChange();
        this._prepareAxisItems();
        this._updateAxisRanges();
      }
    }
  }
  _handleRangeChange() {
    each(this.series, (series) => {
      let startCategory = this.dataItems[this.startIndex()].get("category");
      let endCategory = this.dataItems[this.endIndex() - 1].get("category");
      let baseAxis = series.get("baseAxis");
      let xAxis = series.get("xAxis");
      let yAxis = series.get("yAxis");
      if (xAxis instanceof _CategoryAxis && yAxis instanceof _CategoryAxis) {
        series._markDirtyAxes();
      } else if (baseAxis === this) {
        let key;
        let openKey;
        let otherAxis = yAxis;
        if (xAxis === baseAxis) {
          if (series.get("categoryXField")) {
            key = "categoryX";
          }
          if (series.get("openCategoryXField")) {
            openKey = "openCategoryX";
          }
        } else if (yAxis === baseAxis) {
          if (series.get("categoryYField")) {
            key = "categoryY";
          }
          if (series.get("openCategoryYField")) {
            openKey = "openCategoryY";
          }
          otherAxis = xAxis;
        }
        if (otherAxis instanceof ValueAxis) {
          if (key || openKey) {
            let startDataItem;
            let endDataItem;
            for (let i = 0, len = series.dataItems.length; i < len; i++) {
              let dataItem = series.dataItems[i];
              if (key) {
                if (dataItem.get(key) === startCategory) {
                  startDataItem = dataItem;
                  break;
                }
              }
              if (openKey) {
                if (dataItem.get(openKey) === startCategory) {
                  startDataItem = dataItem;
                  break;
                }
              }
            }
            for (let i = series.dataItems.length - 1; i >= 0; i--) {
              let dataItem = series.dataItems[i];
              if (key) {
                if (dataItem.get(key) === endCategory) {
                  endDataItem = dataItem;
                  break;
                }
              }
              if (openKey) {
                if (dataItem.get(openKey) === endCategory) {
                  endDataItem = dataItem;
                  break;
                }
              }
            }
            let startIndex = 0;
            let endIndex = series.dataItems.length;
            if (startDataItem) {
              startIndex = series.dataItems.indexOf(startDataItem);
            }
            if (endDataItem) {
              endIndex = series.dataItems.indexOf(endDataItem) + 1;
            }
            series.setPrivate("startIndex", startIndex);
            series.setPrivate("endIndex", endIndex);
            let hasValue = false;
            for (let i = startIndex; i < endIndex; i++) {
              const dataItem = series.dataItems[i];
              each(series.__valueXShowFields, (key2) => {
                let value = dataItem.get(key2);
                if (value != null) {
                  hasValue = true;
                }
              });
              each(series.__valueYShowFields, (key2) => {
                let value = dataItem.get(key2);
                if (value != null) {
                  hasValue = true;
                }
              });
              if (hasValue) {
                break;
              }
            }
            series.setPrivate("outOfSelection", !hasValue);
          }
        }
        series._markDirtyAxes();
      }
    });
  }
  _prepareAxisItems() {
    var _a;
    const renderer = this.get("renderer");
    const len = this.dataItems.length;
    let startIndex = this.startIndex();
    if (startIndex > 0) {
      startIndex--;
    }
    let endIndex = this.endIndex();
    if (endIndex < len) {
      endIndex++;
    }
    const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
    const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
    let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1);
    let frequency = Math.max(1, Math.min(len, Math.ceil((endIndex - startIndex) / maxCount)));
    startIndex = Math.floor(startIndex / frequency) * frequency;
    this._frequency = frequency;
    for (let j = 0; j < len; j++) {
      this._toggleDataItem(this.dataItems[j], false);
    }
    let f = this.dataItems[startIndex].get("index", 0);
    for (let i = startIndex; i < endIndex; i = i + frequency) {
      let dataItem = this.dataItems[i];
      this._createAssets(dataItem, []);
      this._toggleDataItem(dataItem, true);
      let count = frequency;
      if (minorGridEnabled) {
        count = 1;
      }
      this._prepareDataItem(dataItem, f, count);
      f++;
    }
    if (renderer.get("minorGridEnabled")) {
      for (let i = startIndex; i < endIndex; i++) {
        let dataItem = this.dataItems[i];
        if (i % frequency != 0) {
          this._createAssets(dataItem, ["minor"], true);
          this._toggleDataItem(dataItem, true);
          this._prepareDataItem(dataItem, 0, 1);
          if (!minorLabelsEnabled) {
            (_a = dataItem.get("label")) === null || _a === void 0 ? void 0 : _a.setPrivate("visible", false);
          }
        }
      }
    }
    this._updateGhost();
  }
  _prepareDataItem(dataItem, fillIndex, count) {
    let renderer = this.get("renderer");
    let categoryLocation = dataItem.get("categoryLocation", 0);
    let endCategoryLocation = dataItem.get("endCategoryLocation", 1);
    let index = dataItem.get("index");
    if (!isNumber(index)) {
      index = this.categoryToIndex(dataItem.get("category"));
    }
    let position = this.indexToPosition(index, categoryLocation);
    let endCategory = dataItem.get("endCategory");
    let endIndex;
    if (endCategory) {
      endIndex = this.categoryToIndex(endCategory);
      if (!isNumber(endIndex)) {
        endIndex = index;
      }
    } else {
      endIndex = index;
    }
    let endPosition = this.indexToPosition(endIndex, endCategoryLocation);
    let fillEndIndex;
    let fillEndPosition;
    if (dataItem.get("isRange")) {
      fillEndIndex = endIndex;
    } else {
      fillEndIndex = index + this._frequency - 1;
    }
    fillEndPosition = this.indexToPosition(fillEndIndex, endCategoryLocation);
    renderer.updateLabel(dataItem.get("label"), position, endPosition, count);
    renderer.updateGrid(dataItem.get("grid"), position, endPosition);
    renderer.updateTick(dataItem.get("tick"), position, endPosition, count);
    renderer.updateFill(dataItem.get("axisFill"), position, fillEndPosition);
    this._processBullet(dataItem);
    renderer.updateBullet(dataItem.get("bullet"), position, endPosition);
    const fillRule = this.get("fillRule");
    if (fillRule) {
      fillRule(dataItem, fillIndex);
    }
  }
  startIndex() {
    let len = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), len - 1);
  }
  endIndex() {
    let len = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", len), len));
  }
  /**
   * @ignore
   */
  baseValue() {
  }
  /**
   * @ignore
   */
  basePosition() {
    return 0;
  }
  /**
   * Returns X coordinate in pixels corresponding to specific category index.
   *
   * @param   value  Index
   * @return         X coordinate
   */
  getX(value) {
    let axisDataItem = this._itemMap[value];
    if (axisDataItem) {
      return this._settings.renderer.positionToCoordinate(this.indexToPosition(axisDataItem.get("index", 0)));
    }
    return NaN;
  }
  /**
   * Returns Y coordinate in pixels corresponding to specific category index.
   *
   * @param   value  Index
   * @return         Y coordinate
   */
  getY(value) {
    let axisDataItem = this._itemMap[value];
    if (axisDataItem) {
      return this._settings.renderer.positionToCoordinate(this.indexToPosition(axisDataItem.get("index", 0)));
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, cellLocation, _axisLocation) {
    const category = dataItem.get(field);
    const axisDataItem = this._itemMap[category];
    if (axisDataItem) {
      return this.indexToPosition(axisDataItem.get("index", 0), cellLocation);
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, cellLocation, _axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, cellLocation, _axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, cellLocation, _axisLocation) {
    const category = dataItem.get(field);
    const axisDataItem = this._itemMap[category];
    if (axisDataItem) {
      return this.indexToPosition(axisDataItem.get("index", 0), cellLocation);
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, cellLocation, _axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, cellLocation, _axisLocation));
  }
  /**
   * Converts category index to a relative position.
   *
   * `location` indicates relative position within category: 0 - start, 1 - end.
   *
   * If not set, will use middle (0.5) of the category.
   *
   * @param   index     Index
   * @param   location  Location
   * @return            Index
   */
  indexToPosition(index, location) {
    if (!isNumber(location)) {
      location = 0.5;
    }
    let len = this.dataItems.length;
    let startLocation = this.get("startLocation", 0);
    let endLocation = this.get("endLocation", 1);
    len -= startLocation;
    len -= 1 - endLocation;
    let position = (index + location - startLocation) / len;
    let dataItem = this.dataItems[index];
    if (dataItem) {
      position += dataItem.get("deltaPosition", 0);
    }
    return position;
  }
  /**
   * Returns a position of a category.
   *
   * @param   category  Category to look up
   * @return            Position
   */
  categoryToPosition(category) {
    let dataItem = this._itemMap[category];
    if (dataItem) {
      return this.indexToPosition(dataItem.get("index"));
    }
    return NaN;
  }
  /**
   * Returns an index of a category.
   *
   * @param   category  Category to look up
   * @return            Index
   */
  categoryToIndex(category) {
    let dataItem = this._itemMap[category];
    if (dataItem) {
      return dataItem.get("index");
    }
    return NaN;
  }
  /**
   * @ignore
   */
  dataItemToPosition(dataItem) {
    return this.indexToPosition(dataItem.get("index"));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, location) {
    position += (0.5 - location) / this.dataItems.length;
    return this.indexToPosition(this.axisPositionToIndex(position), location);
  }
  /**
   * Returns an index of the category that corresponds to specific pixel
   * position within axis.
   *
   * @param position  Position (px)
   * @return Category index
   */
  axisPositionToIndex(position) {
    let len = this.dataItems.length;
    return fitToRange(Math.floor(position * len), 0, len - 1);
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    const dataItem = this.dataItems[this.axisPositionToIndex(position)];
    if (dataItem) {
      const label = dataItem.get("label");
      if (label) {
        return populateString(label, this.get("tooltipText", ""));
      }
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip._setDataItem(this.dataItems[this.axisPositionToIndex(position)]);
    tooltip.label.text.markDirtyText();
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position) {
    if (this.dataItems.length > 0) {
      let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
      let index = this.axisPositionToIndex(position);
      let seriesDataItem = series.dataItems[index];
      let axisDataItem = this.dataItems[index];
      let category = axisDataItem.get("category");
      if (seriesDataItem && axisDataItem) {
        if (seriesDataItem.get(fieldName) === category) {
          return seriesDataItem;
        }
      }
      for (let i = 0, len = series.dataItems.length; i < len; i++) {
        let dataItem = series.dataItems[i];
        if (dataItem.get(fieldName) === category) {
          return dataItem;
        }
      }
    }
  }
  /**
   * Zooms the axis to specific `start` and `end` indexes.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start index
   * @param  end       End index
   * @param  duration  Duration in milliseconds
   */
  zoomToIndexes(start, end, duration) {
    let len = this.dataItems.length;
    this.zoom(start / len, end / len, duration);
  }
  zoomToCategories(startCategory, endCategory, duration) {
    this.zoomToIndexes(this.categoryToIndex(startCategory), this.categoryToIndex(endCategory) + 1, duration);
  }
  /**
   * Returns position span between start and end of a single cell in axis.
   *
   * @since 5.2.30
   * @return Position
   */
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
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
    const position = this.getPrivate("tooltipPosition", 0);
    const index = fitToRange(this.axisPositionToIndex(position) + count, 0, this.dataItems.length - 1);
    return this.toGlobalPosition(this.indexToPosition(index));
  }
};
Object.defineProperty(CategoryAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryAxis"
});
Object.defineProperty(CategoryAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Axis.classNames.concat([CategoryAxis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryDateAxis.js
var CategoryDateAxis = class extends CategoryAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    this.fields.push("category");
    super._afterNew();
  }
  _prepareAxisItems() {
    this.setPrivateRaw("baseInterval", this.get("baseInterval"));
    const renderer = this.get("renderer");
    const len = this.dataItems.length;
    let startIndex = this.startIndex();
    if (startIndex > 0) {
      startIndex--;
    }
    let endIndex = this.endIndex();
    if (endIndex < len) {
      endIndex++;
    }
    let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
    let frequency = Math.min(len, Math.ceil((endIndex - startIndex) / maxCount));
    startIndex = Math.floor(startIndex / frequency) * frequency;
    this._frequency = frequency;
    for (let j = 0; j < len; j++) {
      this._toggleDataItem(this.dataItems[j], false);
    }
    let startTime = Number(this.dataItems[startIndex].get("category"));
    let endTime = Number(this.dataItems[endIndex - 1].get("category"));
    let realDuration = endTime - startTime;
    if (endIndex - startIndex < maxCount) {
      realDuration = endTime - startTime - ((endTime - startTime) / this.baseDuration() - (endIndex - startIndex)) * this.baseDuration();
    }
    let gridInterval = chooseInterval(0, realDuration, maxCount, this.get("gridIntervals"));
    const nextGridUnit = getNextUnit(gridInterval.timeUnit);
    const baseInterval = this.getPrivate("baseInterval");
    if (getIntervalDuration(gridInterval) < this.baseDuration()) {
      gridInterval = Object.assign({}, baseInterval);
    }
    const formats = this.get("dateFormats");
    let previousValue = -Infinity;
    let previousIndex = -Infinity;
    let previousUnitValue = -Infinity;
    let format;
    let selectedItems = [];
    let changed = false;
    for (let i = startIndex; i < endIndex; i++) {
      let dataItem = this.dataItems[i];
      let index = dataItem.get("index");
      let skip = false;
      let value = Number(dataItem.get("category"));
      let date = new Date(value);
      let unitValue = getUnitValue(date, gridInterval.timeUnit);
      format = formats[gridInterval.timeUnit];
      let added = false;
      if (gridInterval.timeUnit != "year" && gridInterval.timeUnit != "week") {
        if (nextGridUnit && this.get("markUnitChange") && isNumber(previousValue)) {
          if (checkChange(value, previousValue, nextGridUnit, this._root.utc)) {
            format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
            if (index - frequency * 0.5 < previousIndex) {
              selectedItems.pop();
            }
            selectedItems.push({ format, dataItem });
            changed = true;
            added = true;
            previousIndex = index;
            previousUnitValue = unitValue;
          }
        }
      }
      let shouldAdd = false;
      if (gridInterval.timeUnit === "day" || gridInterval.timeUnit === "week") {
        if (index - previousIndex >= frequency) {
          shouldAdd = true;
        }
      } else {
        if (unitValue % gridInterval.count === 0) {
          if (unitValue != previousUnitValue) {
            shouldAdd = true;
          }
        }
      }
      if (!added && shouldAdd) {
        if (index - frequency * 0.7 < previousIndex) {
          if (changed) {
            skip = true;
          }
        }
        if (!skip) {
          selectedItems.push({ format, dataItem });
          previousIndex = index;
          previousUnitValue = unitValue;
        }
        changed = false;
      }
      previousValue = value;
    }
    if (selectedItems.length > 0) {
      let f = selectedItems[0].dataItem.get("index", 0);
      each(selectedItems, (item) => {
        const dataItem = item.dataItem;
        const format2 = item.format;
        this._createAssets(dataItem, []);
        this._toggleDataItem(dataItem, true);
        let value = Number(dataItem.get("category"));
        let date = new Date(value);
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._root.dateFormatter.format(date, format2));
        }
        f++;
        this._prepareDataItem(dataItem, f, frequency);
      });
    }
  }
  /**
   * Returns a duration of currently active `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseDuration() {
    return getIntervalDuration(this.getPrivate("baseInterval"));
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    let dataItem = this.dataItems[this.axisPositionToIndex(position)];
    if (dataItem) {
      let format = this.get("dateFormats")[this.getPrivate("baseInterval").timeUnit];
      return this._root.dateFormatter.format(new Date(dataItem.get("category", 0)), this.get("tooltipDateFormat", format));
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip.label.set("text", this.getTooltipText(position));
  }
};
Object.defineProperty(CategoryDateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryDateAxis"
});
Object.defineProperty(CategoryDateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: CategoryAxis.classNames.concat([CategoryDateAxis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/DurationAxis.js
var DurationAxis = class extends ValueAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataGrouped", {
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
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    super._afterNew();
  }
  _adjustMinMax(min, max, gridCount, strictMode) {
    let minMaxStep;
    const durationFormatter = this.getDurationFormatter();
    const baseUnit = this.get("baseUnit");
    this.setRaw("maxPrecision", 0);
    if (baseUnit == "millisecond" || baseUnit == "second" || baseUnit == "minute" || baseUnit == "hour") {
      if (gridCount <= 1) {
        gridCount = 1;
      }
      gridCount = Math.round(gridCount);
      let difference = max - min;
      if (difference === 0) {
        difference = Math.abs(max);
      }
      let step = difference / gridCount;
      let divisors = [60, 30, 20, 15, 10, 2, 1];
      let realDivisor = 1;
      if (baseUnit == "hour") {
        divisors = [24, 12, 6, 4, 2, 1];
      }
      for (let divisor of divisors) {
        if (difference / divisor > gridCount) {
          realDivisor = divisor;
          break;
        }
      }
      let count = Math.ceil((max - min) / realDivisor / gridCount);
      let exponent = Math.log(Math.abs(count)) * Math.LOG10E;
      let power = Math.pow(10, Math.floor(exponent)) / 10;
      let reducedCount = count / power;
      let closest2 = closest(divisors, reducedCount);
      count = closest2 * power;
      step = realDivisor * count;
      min = Math.floor(min / step) * step;
      max = Math.ceil(max / step) * step;
      minMaxStep = { min, max, step };
    } else {
      minMaxStep = super._adjustMinMax(min, max, gridCount, strictMode);
    }
    this.setPrivateRaw("durationFormat", durationFormatter.getFormat(minMaxStep.step, minMaxStep.max, baseUnit));
    return minMaxStep;
  }
  _formatText(value) {
    const formatter = this.getDurationFormatter();
    return formatter.format(value, this.getPrivate("durationFormat"), this.get("baseUnit"));
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    const formatter = this.getDurationFormatter();
    const extraDecimals = this.get("extraTooltipPrecision", 0);
    const decimals = this.getPrivate("stepDecimalPlaces", 0) + extraDecimals;
    const value = round(this.positionToValue(position), decimals);
    return formatter.format(value, this.getPrivate("durationFormat"), this.get("baseUnit"));
  }
};
Object.defineProperty(DurationAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DurationAxis"
});
Object.defineProperty(DurationAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ValueAxis.classNames.concat([DurationAxis.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/OHLC.js
var OHLC = class extends Candlestick {
  _draw() {
    const display = this._display;
    display.moveTo(this.get("lowX1", 0), this.get("lowY1", 0));
    display.lineTo(this.get("highX1", 0), this.get("highY1", 0));
    let w = this.width();
    let h = this.height();
    if (this.get("orientation") == "vertical") {
      let lY = h;
      let hY = 0;
      display.moveTo(0, lY);
      display.lineTo(w / 2, lY);
      display.moveTo(w / 2, hY);
      display.lineTo(w, hY);
    } else {
      let lX = 0;
      let hX = w;
      display.moveTo(lX, 0);
      display.lineTo(lX, h / 2);
      display.moveTo(hX, h / 2);
      display.lineTo(hX, h);
    }
  }
};
Object.defineProperty(OHLC, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OHLC"
});
Object.defineProperty(OHLC, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Candlestick.classNames.concat([OHLC.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/OHLCSeries.js
var OHLCSeries = class extends CandlestickSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({
        themeTags: ["autocolor"]
      }), () => OHLC._new(this._root, {
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["ohlc", "series", "column"])
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
    axisRange.columns = new ListTemplate(Template.new({}), () => OHLC._new(this._root, {
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["ohlc", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(OHLCSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OHLCSeries"
});
Object.defineProperty(OHLCSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: CandlestickSeries.classNames.concat([OHLCSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedYLineSeries.js
var SmoothedYLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", curveMonotoneYTension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", curveMonotoneYTension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
};
Object.defineProperty(SmoothedYLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedYLineSeries"
});
Object.defineProperty(SmoothedYLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([SmoothedYLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedXLineSeries.js
var SmoothedXLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", curveMonotoneXTension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", curveMonotoneXTension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
};
Object.defineProperty(SmoothedXLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedXLineSeries"
});
Object.defineProperty(SmoothedXLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([SmoothedXLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedXYLineSeries.js
var SmoothedXYLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", cardinal_default.tension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", cardinal_default.tension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
};
Object.defineProperty(SmoothedXYLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedXYLineSeries"
});
Object.defineProperty(SmoothedXYLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([SmoothedXYLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/xy/series/StepLineSeries.js
var StepLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", stepAfter);
    super._afterNew();
  }
  _getPoints(dataItem, o) {
    let points = o.points;
    let width = this.get("stepWidth", p100).value / 2;
    let itemLocationX0 = dataItem.get("locationX", o.locationX);
    let itemLocationY0 = dataItem.get("locationY", o.locationY);
    let itemLocationX1 = itemLocationX0;
    let itemLocationY1 = itemLocationY0;
    if (o.baseAxis === o.xAxis) {
      itemLocationX0 -= width;
      itemLocationX1 += width;
    } else if (o.baseAxis === o.yAxis) {
      itemLocationY0 -= width;
      itemLocationY1 += width;
    }
    let xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX0, o.vcx);
    let yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY0, o.vcy);
    let xPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX1, o.vcx);
    let yPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY1, o.vcy);
    if (this._shouldInclude(xPos0)) {
      const iPoint0 = this.getPoint(xPos0, yPos0);
      const point0 = [iPoint0.x, iPoint0.y];
      const iPoint1 = this.getPoint(xPos1, yPos1);
      const point1 = [iPoint1.x, iPoint1.y];
      if (o.fillVisible) {
        let xOpenPos0 = xPos0;
        let yOpenPos0 = yPos0;
        let xOpenPos1 = xPos1;
        let yOpenPos1 = yPos1;
        if (o.baseAxis === o.xAxis) {
          yOpenPos0 = o.basePosY;
          yOpenPos1 = o.basePosY;
        } else if (o.baseAxis === o.yAxis) {
          xOpenPos0 = o.basePosX;
          xOpenPos1 = o.basePosX;
        }
        if (o.getOpen) {
          let valueX = dataItem.get(o.xOpenField);
          let valueY = dataItem.get(o.yOpenField);
          if (valueX != null && valueY != null) {
            itemLocationX0 = dataItem.get("openLocationX", o.openLocationX);
            itemLocationY0 = dataItem.get("openLocationY", o.openLocationY);
            itemLocationX1 = itemLocationX0;
            itemLocationY1 = itemLocationY0;
            if (o.baseAxis === o.xAxis) {
              itemLocationX0 -= width;
              itemLocationX1 += width;
            } else if (o.baseAxis === o.yAxis) {
              itemLocationY0 -= width;
              itemLocationY1 += width;
            }
            if (o.stacked) {
              let stackToItemX = dataItem.get("stackToItemX");
              let stackToItemY = dataItem.get("stackToItemY");
              if (stackToItemX) {
                xOpenPos0 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX0, stackToItemX.component.get("vcx"));
                xOpenPos1 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX1, stackToItemX.component.get("vcx"));
              } else {
                if (o.yAxis === o.baseAxis) {
                  xOpenPos0 = o.basePosX;
                  xOpenPos1 = o.basePosX;
                } else if (o.baseAxis === o.yAxis) {
                  xOpenPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX0, o.vcx);
                  xOpenPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX1, o.vcx);
                }
              }
              if (stackToItemY) {
                yOpenPos0 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY0, stackToItemY.component.get("vcy"));
                yOpenPos1 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY1, stackToItemY.component.get("vcy"));
              } else {
                if (o.xAxis === o.baseAxis) {
                  yOpenPos0 = o.basePosY;
                  yOpenPos1 = o.basePosY;
                } else if (o.baseAxis === o.yAxis) {
                  yOpenPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY0, o.vcy);
                  yOpenPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY1, o.vcy);
                }
              }
            } else {
              xOpenPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX0, o.vcx);
              yOpenPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY0, o.vcy);
              xOpenPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX1, o.vcx);
              yOpenPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY1, o.vcy);
            }
          }
        }
        let closeIPoint0 = this.getPoint(xOpenPos0, yOpenPos0);
        let closeIPoint1 = this.getPoint(xOpenPos1, yOpenPos1);
        point0[2] = closeIPoint0.x;
        point0[3] = closeIPoint0.y;
        point1[2] = closeIPoint1.x;
        point1[3] = closeIPoint1.y;
      }
      points.push(point0);
      points.push(point1);
      dataItem.set("point", { x: point0[0] + (point1[0] - point0[0]) / 2, y: point0[1] + (point1[1] - point0[1]) / 2 });
    }
    if (this.get("noRisers")) {
      o.points = [];
      o.segments.push(points);
    }
  }
};
Object.defineProperty(StepLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StepLineSeries"
});
Object.defineProperty(StepLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([StepLineSeries.className])
});
export {
  Axis,
  AxisBullet,
  AxisLabel,
  AxisLabelRadial,
  AxisRenderer,
  AxisRendererX,
  AxisRendererY,
  AxisTick,
  BaseColumnSeries,
  Candlestick,
  CandlestickSeries,
  CategoryAxis,
  CategoryDateAxis,
  ColumnSeries,
  DateAxis,
  XYChartDefaultTheme as DefaultTheme,
  DurationAxis,
  GaplessDateAxis,
  Grid,
  LineSeries,
  OHLC,
  OHLCSeries,
  SmoothedXLineSeries,
  SmoothedXYLineSeries,
  SmoothedYLineSeries,
  StepLineSeries,
  ValueAxis,
  XYChart,
  XYChartScrollbar,
  XYCursor,
  XYSeries
};
//# sourceMappingURL=@amcharts_amcharts5_xy.js.map
