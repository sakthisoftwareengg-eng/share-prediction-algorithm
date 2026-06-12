import {
  albersUsa_default,
  area_default,
  bounds_default,
  centroid_default,
  circle_default,
  distance_default,
  equalEarth_default,
  equirectangular_default,
  graticule,
  interpolate_default,
  length_default,
  mercator_default,
  naturalEarth1_default,
  orthographic_default,
  path_default
} from "./chunk-RVKSIHD3.js";
import {
  pack_default
} from "./chunk-PTBHZ5ZK.js";
import {
  ZoomTools
} from "./chunk-S76G7XEF.js";
import {
  SerialChart
} from "./chunk-NAZ7YOFP.js";
import "./chunk-KXW2OGU6.js";
import "./chunk-E32SSC6Z.js";
import {
  Series
} from "./chunk-JFXPNH7X.js";
import {
  Component,
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
  DEGREES,
  Graphics,
  ListTemplate,
  Percent,
  RADIANS,
  Rectangle,
  circlesOverlap,
  cubic,
  fitToRange,
  getAngle,
  isLocalEvent,
  mergeTags,
  out,
  registry,
  round,
  sameBounds,
  spiralPoints
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  each2,
  find,
  isNumber,
  keys,
  move,
  numberToString,
  pushAll,
  remove,
  removeFirst,
  softCopyProperties
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-R327OCYJ.js";

// node_modules/tinyqueue/index.js
var tinyqueue_exports = {};
__export(tinyqueue_exports, {
  default: () => TinyQueue
});
function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
var TinyQueue;
var init_tinyqueue = __esm({
  "node_modules/tinyqueue/index.js"() {
    TinyQueue = class {
      constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;
        if (this.length > 0) {
          for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
      }
      push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
      }
      pop() {
        if (this.length === 0) return void 0;
        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;
        if (this.length > 0) {
          this.data[0] = bottom;
          this._down(0);
        }
        return top;
      }
      peek() {
        return this.data[0];
      }
      _up(pos) {
        const { data, compare } = this;
        const item = data[pos];
        while (pos > 0) {
          const parent = pos - 1 >> 1;
          const current = data[parent];
          if (compare(item, current) >= 0) break;
          data[pos] = current;
          pos = parent;
        }
        data[pos] = item;
      }
      _down(pos) {
        const { data, compare } = this;
        const halfLength = this.length >> 1;
        const item = data[pos];
        while (pos < halfLength) {
          let left = (pos << 1) + 1;
          let best = data[left];
          const right = left + 1;
          if (right < this.length && compare(data[right], best) < 0) {
            left = right;
            best = data[right];
          }
          if (compare(best, item) >= 0) break;
          data[pos] = best;
          pos = left;
        }
        data[pos] = item;
      }
    };
  }
});

// node_modules/polylabel/polylabel.js
var require_polylabel = __commonJS({
  "node_modules/polylabel/polylabel.js"(exports, module) {
    "use strict";
    var Queue = (init_tinyqueue(), __toCommonJS(tinyqueue_exports));
    if (Queue.default) Queue = Queue.default;
    module.exports = polylabel;
    module.exports.default = polylabel;
    function polylabel(polygon, precision, debug) {
      precision = precision || 1;
      var minX, minY, maxX, maxY;
      for (var i = 0; i < polygon[0].length; i++) {
        var p = polygon[0][i];
        if (!i || p[0] < minX) minX = p[0];
        if (!i || p[1] < minY) minY = p[1];
        if (!i || p[0] > maxX) maxX = p[0];
        if (!i || p[1] > maxY) maxY = p[1];
      }
      var width = maxX - minX;
      var height = maxY - minY;
      var cellSize = Math.min(width, height);
      var h = cellSize / 2;
      if (cellSize === 0) {
        var degeneratePoleOfInaccessibility = [minX, minY];
        degeneratePoleOfInaccessibility.distance = 0;
        return degeneratePoleOfInaccessibility;
      }
      var cellQueue = new Queue(void 0, compareMax);
      for (var x = minX; x < maxX; x += cellSize) {
        for (var y = minY; y < maxY; y += cellSize) {
          cellQueue.push(new Cell(x + h, y + h, h, polygon));
        }
      }
      var bestCell = getCentroidCell(polygon);
      var bboxCell = new Cell(minX + width / 2, minY + height / 2, 0, polygon);
      if (bboxCell.d > bestCell.d) bestCell = bboxCell;
      var numProbes = cellQueue.length;
      while (cellQueue.length) {
        var cell = cellQueue.pop();
        if (cell.d > bestCell.d) {
          bestCell = cell;
          if (debug) console.log("found best %d after %d probes", Math.round(1e4 * cell.d) / 1e4, numProbes);
        }
        if (cell.max - bestCell.d <= precision) continue;
        h = cell.h / 2;
        cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
        numProbes += 4;
      }
      if (debug) {
        console.log("num probes: " + numProbes);
        console.log("best distance: " + bestCell.d);
      }
      var poleOfInaccessibility = [bestCell.x, bestCell.y];
      poleOfInaccessibility.distance = bestCell.d;
      return poleOfInaccessibility;
    }
    function compareMax(a, b) {
      return b.max - a.max;
    }
    function Cell(x, y, h, polygon) {
      this.x = x;
      this.y = y;
      this.h = h;
      this.d = pointToPolygonDist(x, y, polygon);
      this.max = this.d + this.h * Math.SQRT2;
    }
    function pointToPolygonDist(x, y, polygon) {
      var inside = false;
      var minDistSq = Infinity;
      for (var k = 0; k < polygon.length; k++) {
        var ring = polygon[k];
        for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
          var a = ring[i];
          var b = ring[j];
          if (a[1] > y !== b[1] > y && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
          minDistSq = Math.min(minDistSq, getSegDistSq(x, y, a, b));
        }
      }
      return minDistSq === 0 ? 0 : (inside ? 1 : -1) * Math.sqrt(minDistSq);
    }
    function getCentroidCell(polygon) {
      var area = 0;
      var x = 0;
      var y = 0;
      var points = polygon[0];
      for (var i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        var a = points[i];
        var b = points[j];
        var f = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * f;
        y += (a[1] + b[1]) * f;
        area += f * 3;
      }
      if (area === 0) return new Cell(points[0][0], points[0][1], 0, polygon);
      return new Cell(x / area, y / area, 0, polygon);
    }
    function getSegDistSq(px, py, a, b) {
      var x = a[0];
      var y = a[1];
      var dx = b[0] - x;
      var dy = b[1] - y;
      if (dx !== 0 || dy !== 0) {
        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
          x = b[0];
          y = b[1];
        } else if (t > 0) {
          x += dx * t;
          y += dy * t;
        }
      }
      dx = px - x;
      dy = py - y;
      return dx * dx + dy * dy;
    }
  }
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapSeries.js
var MapSeries = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_types", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_geometries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_geoJSONparsed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_excluded", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_notIncluded", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _afterNew() {
    this.fields.push("geometry", "geometryType");
    this._setRawDefault("geometryField", "geometry");
    this._setRawDefault("geometryTypeField", "geometryType");
    this._setRawDefault("idField", "id");
    this.on("geoJSON", (geoJSON) => {
      let previous = this._prevSettings.geoJSON;
      if (previous && previous != geoJSON) {
        this.data.clear();
      }
    });
    super._afterNew();
  }
  _handleDirties() {
    const geoJSON = this.get("geoJSON");
    let previous = this._prevSettings.geoJSON;
    if (previous && previous != geoJSON) {
      this._prevSettings.geoJSON = void 0;
      this._geoJSONparsed = false;
    }
    if (!this._geoJSONparsed) {
      this._parseGeoJSON();
      this._geoJSONparsed = true;
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this._valuesDirty) {
      this._handleDirties();
    }
    if (this.get("geoJSON") && (this.isDirty("geoJSON") || this.isDirty("include") || this.isDirty("exclude"))) {
      this._handleDirties();
      const chart = this.chart;
      const exclude = this.get("exclude");
      if (exclude) {
        if (chart) {
          chart._centerLocation = null;
        }
        each(exclude, (id) => {
          const dataItem = this.getDataItemById(id);
          if (dataItem) {
            this._excludeDataItem(dataItem);
          }
        });
        each(this._excluded, (dataItem) => {
          const id = dataItem.get("id");
          if (id) {
            if (exclude.indexOf(id) == -1) {
              this._unexcludeDataItem(dataItem);
            }
          }
        });
      }
      if (!exclude || exclude.length == 0) {
        each(this._excluded, (dataItem) => {
          this._unexcludeDataItem(dataItem);
        });
        this._excluded = [];
      }
      const include = this.get("include");
      if (include) {
        if (chart) {
          chart._centerLocation = null;
        }
        each(this.dataItems, (dataItem) => {
          const id = dataItem.get("id");
          if (id && include.indexOf(id) == -1) {
            this._notIncludeDataItem(dataItem);
          } else {
            this._unNotIncludeDataItem(dataItem);
          }
        });
      }
      if (!include) {
        each(this._notIncluded, (dataItem) => {
          this._unNotIncludeDataItem(dataItem);
        });
        this._notIncluded = [];
      }
    }
  }
  _excludeDataItem(dataItem) {
    this._removeGeometry(dataItem.get("geometry"));
    move(this._excluded, dataItem);
  }
  _unexcludeDataItem(dataItem) {
    this._addGeometry(dataItem.get("geometry"), this);
  }
  _notIncludeDataItem(dataItem) {
    this._removeGeometry(dataItem.get("geometry"));
    move(this._notIncluded, dataItem);
  }
  _unNotIncludeDataItem(dataItem) {
    this._addGeometry(dataItem.get("geometry"), this);
  }
  checkInclude(id, includes, excludes) {
    if (includes) {
      if (includes.length == 0) {
        return false;
      } else {
        if (includes.indexOf(id) == -1) {
          return false;
        }
      }
    }
    if (excludes && excludes.length > 0) {
      if (excludes.indexOf(id) != -1) {
        return false;
      }
    }
    return true;
  }
  _parseGeoJSON() {
    const geoJSON = this.get("geoJSON");
    if (geoJSON) {
      let features;
      if (geoJSON.type == "FeatureCollection") {
        features = geoJSON.features;
      } else if (geoJSON.type == "Feature") {
        features = [geoJSON];
      } else if (["Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon"].indexOf(geoJSON.type) != -1) {
        features = [{ geometry: geoJSON }];
      } else {
        console.log("nothing found in geoJSON");
      }
      const geodataNames = this.get("geodataNames");
      if (features) {
        const idField = this.get("idField", "id");
        for (let i = 0, len = features.length; i < len; i++) {
          let feature = features[i];
          let geometry = feature.geometry;
          if (geometry) {
            let type2 = geometry.type;
            let id = feature[idField];
            if (geodataNames && geodataNames[id]) {
              feature.properties.name = geodataNames[id];
            }
            if (this._types.indexOf(type2) != -1) {
              let dataItem;
              if (id != null) {
                dataItem = find(this.dataItems, (value) => {
                  return value.get("id") == id;
                });
              }
              let dataObject;
              if (dataItem) {
                dataObject = dataItem.dataContext;
              }
              if (!dataItem) {
                dataObject = { geometry, geometryType: type2, madeFromGeoData: true };
                dataObject[idField] = id;
                this.data.push(dataObject);
              } else {
                if (!dataObject.geometry) {
                  dataObject.geometry = geometry;
                  dataObject.geometryType = type2;
                  dataItem.set("geometry", geometry);
                  dataItem.set("geometryType", type2);
                  this.processDataItem(dataItem);
                }
              }
              softCopyProperties(feature.properties, dataObject);
            }
          }
        }
      }
      const type = "geodataprocessed";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this });
      }
    }
  }
  _placeBulletsContainer(_chart) {
    this.children.moveValue(this.bulletsContainer);
  }
  _removeBulletsContainer() {
  }
  /**
   * @ignore
   */
  projection() {
    const chart = this.chart;
    if (chart) {
      return chart.get("projection");
    }
  }
  /**
   * @ignore
   */
  geoPath() {
    const chart = this.chart;
    if (chart) {
      return chart.getPrivate("geoPath");
    }
  }
  _addGeometry(geometry, series) {
    if (geometry && series.get("affectsBounds", true)) {
      this._geometries.push(geometry);
      const chart = this.chart;
      if (chart) {
        chart.markDirtyGeometries();
      }
    }
  }
  _removeGeometry(geometry) {
    if (geometry) {
      remove(this._geometries, geometry);
      const chart = this.chart;
      if (chart) {
        chart.markDirtyGeometries();
      }
    }
  }
  _dispose() {
    super._dispose();
    const chart = this.chart;
    if (chart) {
      chart.series.removeValue(this);
    }
  }
  _onDataClear() {
    super._onDataClear();
    this._geoJSONparsed = false;
    this._markDirtyKey("exclude");
  }
};
Object.defineProperty(MapSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapSeries"
});
Object.defineProperty(MapSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([MapSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapLine.js
var MapLine = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_projectionDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this._projectionDirty || this.isDirty("geometry") || this.isDirty("precision")) {
      const geometry = this.get("geometry");
      if (geometry) {
        const series = this.getPrivate("series");
        if (series) {
          const chart = series.chart;
          if (chart) {
            const projection = chart.get("projection");
            let clipAngle = null;
            if (projection && projection.clipAngle) {
              clipAngle = projection.clipAngle();
              projection.precision(this.get("precision", 0.5));
            }
            const dataItem = this.dataItem;
            const geoPath = chart.getPrivate("geoPath");
            if (geoPath && dataItem) {
              this._clear = true;
              if (dataItem.get("lineType", series.get("lineType")) == "straight") {
                const geometry2 = this.get("geometry");
                if (geometry2) {
                  let coordinates = geometry2.coordinates;
                  if (coordinates) {
                    let segments;
                    if (geometry2.type == "LineString") {
                      segments = [coordinates];
                    } else if (geometry2.type == "MultiLineString") {
                      segments = coordinates;
                    }
                    this.set("draw", (display) => {
                      for (let s = 0; s < segments.length; s++) {
                        let segment = segments[s];
                        if (segment.length > 0) {
                          const gp0 = segment[0];
                          const p0 = chart.convert({ longitude: gp0[0], latitude: gp0[1] });
                          display.lineTo(p0.x, p0.y);
                          for (let p = 0; p < segment.length; p++) {
                            const gp = segment[p];
                            const pn = chart.convert({ longitude: gp[0], latitude: gp[1] });
                            display.lineTo(pn.x, pn.y);
                          }
                        }
                      }
                    });
                  }
                }
              } else {
                this.set("draw", (_display) => {
                  if (projection && series.get("clipBack") === false) {
                    projection.clipAngle(180);
                  }
                  geoPath.context(this._display);
                  geoPath(geometry);
                  geoPath.context(null);
                  if (projection && projection.clipAngle) {
                    projection.clipAngle(clipAngle);
                  }
                });
              }
            }
          }
        }
      }
      const type = "linechanged";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this });
      }
    }
  }
  /**
   * @ignore
   */
  markDirtyProjection() {
    this.markDirty();
    this._projectionDirty = true;
  }
  _clearDirty() {
    super._clearDirty();
    this._projectionDirty = false;
  }
  _getTooltipPoint() {
    let tooltipX = this.get("tooltipX");
    let tooltipY = this.get("tooltipY");
    let x = 0;
    let y = 0;
    if (isNumber(tooltipX)) {
      x = tooltipX;
    }
    if (isNumber(tooltipY)) {
      y = tooltipY;
    }
    if (tooltipX instanceof Percent) {
      const geoPoint = this.positionToGeoPoint(tooltipX.value);
      const series = this.getPrivate("series");
      if (series) {
        const chart = series.chart;
        if (chart) {
          const point = chart.convert(geoPoint);
          x = point.x;
          y = point.y;
        }
      }
    }
    return { x, y };
  }
  /**
   * Converts relative position along the line (0-1) into pixel coordinates.
   *
   * @param position  Position (0-1)
   * @return Coordinates
   */
  positionToGeoPoint(position) {
    const geometry = this.get("geometry");
    const series = this.getPrivate("series");
    const chart = series.chart;
    const dataItem = this.dataItem;
    if (geometry && series && chart && dataItem) {
      const lineType = dataItem.get("lineType", series.get("lineType"));
      let totalDistance = length_default(geometry);
      let currentDistance = 0;
      let distanceAB;
      let positionA = 0;
      let positionB = 0;
      let pointA;
      let pointB;
      let coordinates = geometry.coordinates;
      if (coordinates) {
        let segments;
        if (geometry.type == "LineString") {
          segments = [coordinates];
        } else if (geometry.type == "MultiLineString") {
          segments = coordinates;
        }
        for (let s = 0; s < segments.length; s++) {
          let segment = segments[s];
          if (segment.length > 1) {
            for (let p = 1; p < segment.length; p++) {
              pointA = segment[p - 1];
              pointB = segment[p];
              positionA = currentDistance / totalDistance;
              distanceAB = distance_default(pointA, pointB);
              currentDistance += distanceAB;
              positionB = currentDistance / totalDistance;
              if (positionA <= position && positionB > position) {
                s = segments.length;
                break;
              }
            }
          } else if (segment.length == 1) {
            pointA = segment[0];
            pointB = segment[0];
            positionA = 0;
            positionB = 1;
          }
        }
        if (pointA && pointB) {
          let positionAB = (position - positionA) / (positionB - positionA);
          let location2;
          if (lineType == "straight") {
            let p0 = chart.convert({ longitude: pointA[0], latitude: pointA[1] });
            let p1 = chart.convert({ longitude: pointB[0], latitude: pointB[1] });
            let x = p0.x + (p1.x - p0.x) * positionAB;
            let y = p0.y + (p1.y - p0.y) * positionAB;
            return chart.invert({ x, y });
          } else {
            location2 = interpolate_default(pointA, pointB)(positionAB);
            return { longitude: location2[0], latitude: location2[1] };
          }
        }
      }
    }
    return { longitude: 0, latitude: 0 };
  }
};
Object.defineProperty(MapLine, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapLine"
});
Object.defineProperty(MapLine, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([MapLine.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapLineSeries.js
var MapLineSeries = class extends MapSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "mapLines", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => MapLine._new(this._root, {}, [this.mapLines.template])))
    });
    Object.defineProperty(this, "_types", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["LineString", "MultiLineString"]
    });
  }
  _afterNew() {
    this.fields.push("lineType");
    this._setRawDefault("lineTypeField", "lineType");
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeMapLine(dataItem) {
    const mapLine = this.children.push(this.mapLines.make());
    mapLine._setDataItem(dataItem);
    this.mapLines.push(mapLine);
    return mapLine;
  }
  /**
   * @ignore
   */
  markDirtyProjection() {
    each(this.dataItems, (dataItem) => {
      let mapLine = dataItem.get("mapLine");
      if (mapLine) {
        mapLine.markDirtyProjection();
      }
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("stroke")) {
      this.mapLines.template.set("stroke", this.get("stroke"));
    }
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    let mapLine = dataItem.get("mapLine");
    if (!mapLine) {
      mapLine = this.makeMapLine(dataItem);
    }
    this._handlePointsToConnect(dataItem);
    dataItem.on("pointsToConnect", () => {
      this._handlePointsToConnect(dataItem);
    });
    dataItem.set("mapLine", mapLine);
    this._addGeometry(dataItem.get("geometry"), this);
    mapLine.setPrivate("series", this);
  }
  _handlePointsToConnect(dataItem) {
    const pointsToConnect = dataItem.get("pointsToConnect");
    if (pointsToConnect) {
      each(pointsToConnect, (point) => {
        point.on("geometry", () => {
          this.markDirtyValues(dataItem);
        });
        point.on("longitude", () => {
          this.markDirtyValues(dataItem);
        });
        point.on("latitude", () => {
          this.markDirtyValues(dataItem);
        });
      });
      this.markDirtyValues(dataItem);
    }
  }
  /**
   * Forces a repaint of the element which relies on data.
   *
   * @since 5.0.21
   */
  markDirtyValues(dataItem) {
    super.markDirtyValues();
    if (dataItem) {
      const mapLine = dataItem.get("mapLine");
      if (mapLine) {
        const pointsToConnect = dataItem.get("pointsToConnect");
        if (pointsToConnect) {
          let coordinates = [];
          each(pointsToConnect, (point) => {
            const longitude = point.get("longitude");
            const latitude = point.get("latitude");
            if (longitude != null && latitude != null) {
              coordinates.push([longitude, latitude]);
            } else {
              const geometry2 = point.get("geometry");
              if (geometry2) {
                const coords = geometry2.coordinates;
                if (coords) {
                  coordinates.push([coords[0], coords[1]]);
                }
              }
            }
          });
          let geometry = { type: "LineString", coordinates };
          dataItem.setRaw("geometry", geometry);
          mapLine.set("geometry", geometry);
        } else {
          mapLine.set("geometry", dataItem.get("geometry"));
        }
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const mapLine = dataItem.get("mapLine");
    if (mapLine) {
      this.mapLines.removeValue(mapLine);
      mapLine.dispose();
    }
  }
  /**
   * @ignore
   */
  _excludeDataItem(dataItem) {
    super._excludeDataItem(dataItem);
    const mapLine = dataItem.get("mapLine");
    if (mapLine) {
      mapLine.setPrivate("visible", false);
    }
  }
  /**
   * @ignore
   */
  _unexcludeDataItem(dataItem) {
    super._unexcludeDataItem(dataItem);
    const mapLine = dataItem.get("mapLine");
    if (mapLine) {
      mapLine.setPrivate("visible", true);
    }
  }
  /**
   * @ignore
   */
  _notIncludeDataItem(dataItem) {
    super._notIncludeDataItem(dataItem);
    const mapLine = dataItem.get("mapLine");
    if (mapLine) {
      mapLine.setPrivate("visible", false);
    }
  }
  /**
   * @ignore
   */
  _unNotIncludeDataItem(dataItem) {
    super._unNotIncludeDataItem(dataItem);
    const mapLine = dataItem.get("mapLine");
    if (mapLine) {
      mapLine.setPrivate("visible", true);
    }
  }
};
Object.defineProperty(MapLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapLineSeries"
});
Object.defineProperty(MapLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MapSeries.classNames.concat([MapLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/GraticuleSeries.js
var GraticuleSeries = class extends MapLineSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.makeDataItem({})
    });
  }
  _afterNew() {
    super._afterNew();
    this.dataItems.push(this._dataItem);
    this._generate();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("step")) {
      this._generate();
    }
    if (this.isDirty("clipExtent")) {
      if (this.get("clipExtent")) {
        const chart = this.chart;
        if (chart) {
          chart.events.on("geoboundschanged", () => {
            this._generate();
          });
        }
        this._generate();
      }
    }
  }
  _generate() {
    let graticule2 = graticule();
    if (graticule2) {
      if (this.get("clipExtent")) {
        const chart = this.chart;
        if (chart) {
          const geoBounds = chart.geoBounds();
          if (geoBounds) {
            graticule2.extent([[geoBounds.left, geoBounds.bottom], [geoBounds.right, geoBounds.top]]);
          }
        }
      }
      const step = this.get("step", 10);
      graticule2.stepMinor([360, 360]);
      graticule2.stepMajor([step, step]);
      this._dataItem.set("geometry", graticule2());
    }
  }
};
Object.defineProperty(GraticuleSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GraticuleSeries"
});
Object.defineProperty(GraticuleSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MapLineSeries.classNames.concat([GraticuleSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapChartDefaultTheme.js
var MapChartDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const r = this.rule.bind(this);
    r("MapChart").setAll({
      projection: mercator_default(),
      panX: "translateX",
      panY: "translateY",
      pinchZoom: true,
      zoomStep: 2,
      zoomLevel: 1,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      maxZoomLevel: 32,
      minZoomLevel: 1,
      wheelY: "zoom",
      wheelX: "none",
      animationEasing: out(cubic),
      wheelEasing: out(cubic),
      wheelDuration: 0,
      wheelSensitivity: 1,
      maxPanOut: 0.4,
      centerMapOnZoomOut: true
    });
    {
      const rule = r("MapLine");
      rule.setAll({
        precision: 0.5,
        role: "figure"
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("MapPolygonSeries").setAll({
      affectsBounds: true
    });
    r("MapPointSeries").setAll({
      affectsBounds: false,
      clipFront: false,
      clipBack: true,
      autoScale: false
    });
    r("ClusteredPointSeries").setAll({
      minDistance: 20,
      scatterDistance: 3,
      scatterRadius: 8,
      stopClusterZoom: 0.95
    });
    r("MapLineSeries").setAll({
      affectsBounds: false
    });
    {
      const rule = r("MapPolygon");
      rule.setAll({
        precision: 0.5,
        isMeasured: false,
        role: "figure",
        fillOpacity: 1,
        position: "absolute",
        strokeWidth: 0.2,
        strokeOpacity: 1
      });
      setColor(rule, "fill", ic, "primaryButton");
      setColor(rule, "stroke", ic, "background");
    }
    r("Button", ["zoomtools", "home"]).setAll({
      visible: false
    });
    r("GraticuleSeries").setAll({
      step: 10
    });
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapUtils.js
function getGeoCircle(geoPoint, radius) {
  return circle_default().center([geoPoint.longitude, geoPoint.latitude]).radius(radius)();
}
function getGeoCentroid(geometry) {
  const centroid = centroid_default(geometry);
  return { longitude: centroid[0], latitude: centroid[1] };
}
function getGeoArea(geometry) {
  return area_default(geometry);
}
function getGeoBounds(geometry) {
  const bounds = bounds_default(geometry);
  if (bounds) {
    const geoBounds = { left: bounds[0][0], right: bounds[1][0], top: bounds[1][1], bottom: bounds[0][1] };
    if (geoBounds.right < geoBounds.left) {
      geoBounds.right = 180;
      geoBounds.left = -180;
    }
    return geoBounds;
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function getGeoRectangle(north, east, south, west) {
  let multiPolygon = [];
  if (west <= -180) {
    west = -179.9999;
  }
  if (south <= -90) {
    south = -89.9999;
  }
  if (north >= 90) {
    north = 89.9999;
  }
  if (east >= 180) {
    east = 179.9999;
  }
  let stepLong = Math.min(90, (east - west) / Math.ceil((east - west) / 90));
  let stepLat = (north - south) / Math.ceil((north - south) / 90);
  for (let ln = west; ln < east; ln = ln + stepLong) {
    let surface = [];
    multiPolygon.push([surface]);
    if (ln + stepLong > east) {
      stepLong = east - ln;
    }
    for (let ll = ln; ll <= ln + stepLong; ll = ll + 5) {
      surface.push([ll, north]);
    }
    for (let lt = north; lt >= south; lt = lt - stepLat) {
      surface.push([ln + stepLong, lt]);
    }
    for (let ll = ln + stepLong; ll >= ln; ll = ll - 5) {
      surface.push([ll, south]);
    }
    for (let lt = south; lt <= north; lt = lt + stepLat) {
      surface.push([ln, lt]);
    }
  }
  return { type: "MultiPolygon", coordinates: multiPolygon };
}
function normalizeGeoPoint(geoPoint) {
  let longitude = wrapAngleTo180(geoPoint.longitude);
  let latitude = Math.asin(Math.sin(geoPoint.latitude * RADIANS)) * DEGREES;
  let latitude180 = wrapAngleTo180(geoPoint.latitude);
  if (Math.abs(latitude180) > 90) {
    longitude = wrapAngleTo180(longitude + 180);
  }
  geoPoint.longitude = longitude;
  geoPoint.latitude = latitude;
  return geoPoint;
}
function wrapAngleTo180(angle) {
  angle = angle % 360;
  if (angle > 180) {
    angle -= 360;
  }
  if (angle < -180) {
    angle += 360;
  }
  return angle;
}

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapChart.js
var MapChart = class extends SerialChart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_downTranslateX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downTranslateY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downRotationX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downRotationY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downRotationZ", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pLat", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_pLon", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_movePoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_downZoomLevel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_doubleDownDistance", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dirtyGeometries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_geometryColection", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { type: "GeometryCollection", geometries: [] }
    });
    Object.defineProperty(this, "_centerLocation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_za", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rxa", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rya", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_txa", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tya", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_mapBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [[0, 0], [0, 0]]
    });
    Object.defineProperty(this, "_geoCentroid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { longitude: 0, latitude: 0 }
    });
    Object.defineProperty(this, "_geoBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { left: 0, right: 0, top: 0, bottom: 0 }
    });
    Object.defineProperty(this, "_prevGeoBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { left: 0, right: 0, top: 0, bottom: 0 }
    });
    Object.defineProperty(this, "_dispatchBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_wheelDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_ph", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_mapFitted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_centerX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_centerY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _makeGeoPath() {
    const projection = this.get("projection");
    const path = path_default();
    path.projection(projection);
    this.setPrivateRaw("geoPath", path);
  }
  /**
   * Returns a geoPoint of the current zoom position.
   *
   * You can later use it to restore zoom position, e.g.: `chart.zoomToGeoPoint(geoPoint, zoomLevel, true)`.
   *
   * @since 5.2.19
   */
  geoPoint() {
    return this.invert(this.seriesContainer.toGlobal({ x: this.width() / 2, y: this.height() / 2 }));
  }
  /**
   * Returns coordinates to geographical center of the map.
   */
  geoCentroid() {
    return this._geoCentroid;
  }
  /**
   * Returns geographical bounds of the map.
   */
  geoBounds() {
    return this._geoBounds;
  }
  _handleSetWheel() {
    const wheelX = this.get("wheelX");
    const wheelY = this.get("wheelY");
    const chartContainer = this.chartContainer;
    if (wheelX != "none" || wheelY != "none") {
      if (this._wheelDp) {
        this._wheelDp.dispose();
      }
      this._wheelDp = chartContainer.events.on("wheel", (event) => {
        const wheelEasing = this.get("wheelEasing");
        const wheelSensitivity = this.get("wheelSensitivity", 1);
        const wheelDuration = this.get("wheelDuration", 0);
        const wheelEvent = event.originalEvent;
        let prevent = false;
        if (isLocalEvent(wheelEvent, this)) {
          prevent = true;
        } else {
          return;
        }
        const point = chartContainer._display.toLocal(event.point);
        if (wheelY == "zoom") {
          if (this.get("zoomLevel") == this.get("minZoomLevel", 1) && wheelEvent.deltaY > 0) {
            return;
          }
          this._handleWheelZoom(wheelEvent.deltaY, point);
        } else if (wheelY == "rotateY") {
          this._handleWheelRotateY(wheelEvent.deltaY / 5 * wheelSensitivity, wheelDuration, wheelEasing);
        } else if (wheelY == "rotateX") {
          this._handleWheelRotateX(wheelEvent.deltaY / 5 * wheelSensitivity, wheelDuration, wheelEasing);
        }
        if (wheelX == "zoom") {
          this._handleWheelZoom(wheelEvent.deltaX, point);
        } else if (wheelX == "rotateY") {
          this._handleWheelRotateY(wheelEvent.deltaX / 5 * wheelSensitivity, wheelDuration, wheelEasing);
        } else if (wheelX == "rotateX") {
          this._handleWheelRotateX(wheelEvent.deltaX / 5 * wheelSensitivity, wheelDuration, wheelEasing);
        }
        if (prevent) {
          wheelEvent.preventDefault();
        }
      });
      this._disposers.push(this._wheelDp);
    } else {
      if (this._wheelDp) {
        this._wheelDp.dispose();
      }
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    const projection = this.get("projection");
    const w = this.innerWidth();
    const h = this.innerHeight();
    const previousGeometries = this._geometryColection.geometries;
    if (this.isDirty("projection")) {
      this._makeGeoPath();
      this.markDirtyProjection();
      this._fitMap();
      projection.scale(this.getPrivate("mapScale") * this.get("zoomLevel", 1));
      if (projection.rotate) {
        projection.rotate([this.get("rotationX", 0), this.get("rotationY", 0), this.get("rotationZ", 0)]);
      }
      let prev = this._prevSettings.projection;
      if (prev && prev != projection) {
        let hw = w / 2;
        let hh = h / 2;
        if (prev.invert) {
          let centerLocation = prev.invert([hw, hh]);
          if (centerLocation) {
            let xy = projection(centerLocation);
            if (xy) {
              let translate = projection.translate();
              let xx = hw - (xy[0] - translate[0]);
              let yy = hh - (xy[1] - translate[1]);
              projection.translate([xx, yy]);
              this.setRaw("translateX", xx);
              this.setRaw("translateY", yy);
            }
          }
        }
      }
    }
    if (this.isDirty("wheelX") || this.isDirty("wheelY")) {
      this._handleSetWheel();
    }
    if (this._dirtyGeometries) {
      this._geometryColection.geometries = [];
      this.series.each((series) => {
        pushAll(this._geometryColection.geometries, series._geometries);
      });
      this._fitMap();
    }
    if (previousGeometries.length != 0 && (w != this._pw || h != this._ph || this._dirtyGeometries)) {
      if (w > 0 && h > 0) {
        let hw = w / 2;
        let hh = h / 2;
        projection.fitSize([w, h], this._geometryColection);
        const newScale = projection.scale();
        this.setPrivateRaw("mapScale", newScale);
        projection.scale(newScale * this.get("zoomLevel", 1));
        if (this._centerLocation) {
          let xy = projection(this._centerLocation);
          if (xy) {
            let translate = projection.translate();
            let xx = hw - (xy[0] - translate[0]);
            let yy = hh - (xy[1] - translate[1]);
            projection.translate([xx, yy]);
            this.setRaw("translateX", xx);
            this.setRaw("translateY", yy);
            this._centerX = translate[0];
            this._centerY = translate[1];
          }
        }
        this.markDirtyProjection();
        const geoPath = this.getPrivate("geoPath");
        this._mapBounds = geoPath.bounds(this._geometryColection);
      }
    }
    this._pw = w;
    this._ph = h;
    if (this.isDirty("zoomControl")) {
      const previous = this._prevSettings.zoomControl;
      const zoomControl = this.get("zoomControl");
      if (zoomControl !== previous) {
        this._disposeProperty("zoomControl");
        if (previous) {
          previous.dispose();
        }
        if (zoomControl) {
          zoomControl.setPrivate("chart", this);
          this.children.push(zoomControl);
        }
        this.setRaw("zoomControl", zoomControl);
      }
    }
    if (this.isDirty("zoomLevel")) {
      projection.scale(this.getPrivate("mapScale") * this.get("zoomLevel", 1));
      this.markDirtyProjection();
      this.series.each((series) => {
        if (series.isType("MapPointSeries")) {
          if (series.get("autoScale")) {
            each(series.dataItems, (dataItem) => {
              const bullets = dataItem.bullets;
              if (bullets) {
                each(bullets, (bullet) => {
                  const sprite = bullet.get("sprite");
                  if (sprite) {
                    sprite.set("scale", this.get("zoomLevel"));
                  }
                });
              }
            });
          }
        }
      });
      const zoomControl = this.get("zoomControl");
      if (zoomControl) {
        const zoomLevel = this.get("zoomLevel", 1);
        if (zoomLevel == this.get("minZoomLevel", 1)) {
          this.root.events.once("frameended", () => {
            zoomControl.minusButton.set("disabled", true);
          });
        } else {
          zoomControl.minusButton.set("disabled", false);
        }
        if (zoomLevel == this.get("maxZoomLevel", 32)) {
          zoomControl.plusButton.set("disabled", true);
        } else {
          zoomControl.plusButton.set("disabled", false);
        }
      }
    }
    if (this.isDirty("translateX") || this.isDirty("translateY")) {
      projection.translate([this.get("translateX", this.width() / 2), this.get("translateY", this.height() / 2)]);
      this.markDirtyProjection();
    }
    if (projection.rotate) {
      if (this.isDirty("rotationX") || this.isDirty("rotationY") || this.isDirty("rotationZ")) {
        projection.rotate([this.get("rotationX", 0), this.get("rotationY", 0), this.get("rotationZ", 0)]);
        this.markDirtyProjection();
      }
    }
    if (this.isDirty("pinchZoom") || this.get("panX") || this.get("panY")) {
      this._setUpTouch();
    }
  }
  _fitMap() {
    const projection = this.get("projection");
    let w = this.innerWidth();
    let h = this.innerHeight();
    if (w > 0 && h > 0) {
      projection.fitSize([w, h], this._geometryColection);
      this.setPrivateRaw("mapScale", projection.scale());
      const translate = projection.translate();
      this.setRaw("translateX", translate[0]);
      this.setRaw("translateY", translate[1]);
      this._centerX = translate[0];
      this._centerY = translate[1];
      const geoPath = this.getPrivate("geoPath");
      this._mapBounds = geoPath.bounds(this._geometryColection);
      this._geoCentroid = getGeoCentroid(this._geometryColection);
      const bounds = getGeoBounds(this._geometryColection);
      this._geoBounds = bounds;
      if (this._geometryColection.geometries.length > 0) {
        bounds.left = round(this._geoBounds.left, 3);
        bounds.right = round(this._geoBounds.right, 3);
        bounds.top = round(this._geoBounds.top, 3);
        bounds.bottom = round(this._geoBounds.bottom, 3);
        const prevGeoBounds = this._prevGeoBounds;
        if (prevGeoBounds && !sameBounds(bounds, prevGeoBounds)) {
          this._dispatchBounds = true;
          this._prevGeoBounds = bounds;
        }
      }
      this._mapFitted = true;
    }
  }
  /**
   * Returns geographical coordinates for calculated or manual center of the
   * map.
   */
  homeGeoPoint() {
    let homeGeoPoint = this.get("homeGeoPoint");
    if (!homeGeoPoint) {
      const geoPath = this.getPrivate("geoPath");
      const bounds = geoPath.bounds(this._geometryColection);
      const left = bounds[0][0];
      const top = bounds[0][1];
      const right = bounds[1][0];
      const bottom = bounds[1][1];
      homeGeoPoint = this.invert({ x: left + (right - left) / 2, y: top + (bottom - top) / 2 });
    }
    return homeGeoPoint;
  }
  /**
   * Repositions the map to the "home" zoom level and center coordinates.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Resetting_position_level} for more info
   * @param  duration  Animation duration in milliseconds
   */
  goHome(duration) {
    this.zoomToGeoPoint(this.homeGeoPoint(), this.get("homeZoomLevel", 1), true, duration, this.get("homeRotationX"), this.get("homeRotationY"));
  }
  _updateChildren() {
    const projection = this.get("projection");
    if (projection.invert) {
      let w = this.innerWidth();
      let h = this.innerHeight();
      if (w > 0 && h > 0) {
        this._centerLocation = projection.invert([this.innerWidth() / 2, this.innerHeight() / 2]);
      }
    }
    super._updateChildren();
  }
  _afterChanged() {
    super._afterChanged();
    if (this._dispatchBounds) {
      this._dispatchBounds = false;
      const type = "geoboundschanged";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this });
      }
    }
  }
  _setUpTouch() {
    if (!this.chartContainer._display.cancelTouch) {
      this.chartContainer._display.cancelTouch = this.get("pinchZoom") || this.get("panX") || this.get("panY") ? true : false;
    }
  }
  /**
   * @ignore
   */
  markDirtyGeometries() {
    this._dirtyGeometries = true;
    this.markDirty();
  }
  /**
   * @ignore
   */
  markDirtyProjection() {
    this.series.each((series) => {
      series.markDirtyProjection();
    });
  }
  _afterNew() {
    this._defaultThemes.push(MapChartDefaultTheme.new(this._root));
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["map"]);
    this.children.push(this.bulletsContainer);
    super._afterNew();
    this._makeGeoPath();
    this.chartContainer.children.push(this.seriesContainer);
    if (this.get("translateX") == null) {
      this.set("translateX", this.width() / 2);
    }
    if (this.get("translateY") == null) {
      this.set("translateY", this.height() / 2);
    }
    this.chartContainer.set("interactive", true);
    this.chartContainer.set("interactiveChildren", false);
    this.chartContainer.set("background", Rectangle.new(this._root, {
      themeTags: ["map", "background"],
      fill: Color.fromHex(0),
      fillOpacity: 0
    }));
    this._disposers.push(this.chartContainer.events.on("pointerdown", (event) => {
      this._handleChartDown(event);
    }));
    this._disposers.push(this.chartContainer.events.on("globalpointerup", (event) => {
      this._handleChartUp(event);
    }));
    this._disposers.push(this.chartContainer.events.on("globalpointermove", (event) => {
      this._handleChartMove(event);
    }));
    let license = false;
    for (let i = 0; i < registry.licenses.length; i++) {
      if (registry.licenses[i].match(/^AM5M.{5,}/i)) {
        license = true;
      }
    }
    if (!license) {
      this._root._showBranding();
    } else {
      this._root._licenseApplied();
    }
    this._setUpTouch();
  }
  _handleChartDown(event) {
    this._downZoomLevel = this.get("zoomLevel", 1);
    const downPoints = this.chartContainer._downPoints;
    let count = keys(downPoints).length;
    if (count == 1) {
      let downPoint = downPoints[1];
      if (!downPoint) {
        downPoint = downPoints[0];
      }
      if (downPoint && (downPoint.x == event.point.x && downPoint.y == event.point.y)) {
        count = 0;
      }
    }
    if (count > 0) {
      this._downTranslateX = this.get("translateX");
      this._downTranslateY = this.get("translateY");
      this._downRotationX = this.get("rotationX");
      this._downRotationY = this.get("rotationY");
      this._downRotationZ = this.get("rotationZ");
      const downId = this.chartContainer._getDownPointId();
      if (downId) {
        let movePoint = this._movePoints[downId];
        if (movePoint) {
          this.chartContainer._downPoints[downId] = movePoint;
        }
      }
    } else if (count == 0) {
      let bg = this.chartContainer.get("background");
      if (bg) {
        bg.events.enableType("click");
      }
      if (this.get("panX") || this.get("panY")) {
        if (this._za) {
          this._za.stop();
        }
        if (this._txa) {
          this._txa.stop();
        }
        if (this._tya) {
          this._tya.stop();
        }
        if (this._rxa) {
          this._rxa.stop();
        }
        if (this._rya) {
          this._rya.stop();
        }
        const downPoint = this.chartContainer._display.toLocal(event.point);
        this._downTranslateX = this.get("translateX");
        this._downTranslateY = this.get("translateY");
        this._downRotationX = this.get("rotationX");
        this._downRotationY = this.get("rotationY");
        this._downRotationZ = this.get("rotationZ");
        let projection = this.get("projection");
        if (projection.invert) {
          let l0 = projection.invert([downPoint.x, downPoint.y]);
          let l1 = projection.invert([downPoint.x + 1, downPoint.y + 1]);
          if (l0 && l1) {
            this._pLon = Math.abs(l1[0] - l0[0]);
            this._pLat = Math.abs(l1[1] - l0[1]);
          }
        }
      }
    }
  }
  /**
   * Converts screen coordinates (X and Y) within chart to latitude and
   * longitude.
   *
   * @param  point  Screen coordinates
   * @return        Geographical coordinates
   */
  invert(point) {
    let projection = this.get("projection");
    if (projection.invert) {
      const ll = projection.invert([point.x, point.y]);
      if (ll) {
        return { longitude: ll[0], latitude: ll[1] };
      }
    }
    return { longitude: 0, latitude: 0 };
  }
  /**
   * Converts latitude/longitude to screen coordinates (X and Y).
   *
   * @param  point  Geographical coordinates
   * @param  rotationX  X rotation of a map if different from current
   * @param  rotationY  Y rotation of a map if different from current
   *
   * @return Screen coordinates
   */
  convert(point, rotationX, rotationY) {
    let projection = this.get("projection");
    let xy;
    if (!projection.rotate) {
      rotationX = void 0;
      rotationY = void 0;
    }
    if (rotationX != null || rotationY != null) {
      if (rotationX == null) {
        rotationX = 0;
      }
      if (rotationY == null) {
        rotationY = 0;
      }
      let rotation = projection.rotate();
      projection.rotate([rotationX, rotationY, 0]);
      xy = projection([point.longitude, point.latitude]);
      projection.rotate(rotation);
    } else {
      xy = projection([point.longitude, point.latitude]);
    }
    if (xy) {
      return { x: xy[0], y: xy[1] };
    }
    return { x: 0, y: 0 };
  }
  _handleChartUp(_event) {
    this.chartContainer._downPoints = {};
  }
  _handlePinch() {
    const chartContainer = this.chartContainer;
    let i = 0;
    let downPoints = [];
    let movePoints = [];
    each2(chartContainer._downPoints, (k, point) => {
      downPoints[i] = point;
      let movePoint = this._movePoints[k];
      if (movePoint) {
        movePoints[i] = movePoint;
      }
      i++;
    });
    if (downPoints.length > 1 && movePoints.length > 1) {
      const display = chartContainer._display;
      let downPoint0 = downPoints[0];
      let downPoint1 = downPoints[1];
      let movePoint0 = movePoints[0];
      let movePoint1 = movePoints[1];
      if (downPoint0 && downPoint1 && movePoint0 && movePoint1) {
        downPoint0 = display.toLocal(downPoint0);
        downPoint1 = display.toLocal(downPoint1);
        movePoint0 = display.toLocal(movePoint0);
        movePoint1 = display.toLocal(movePoint1);
        let initialDistance = Math.hypot(downPoint1.x - downPoint0.x, downPoint1.y - downPoint0.y);
        let currentDistance = Math.hypot(movePoint1.x - movePoint0.x, movePoint1.y - movePoint0.y);
        let level = currentDistance / initialDistance * this._downZoomLevel;
        level = fitToRange(level, this.get("minZoomLevel", 1), this.get("maxZoomLevel", 32));
        let moveCenter = { x: movePoint0.x + (movePoint1.x - movePoint0.x) / 2, y: movePoint0.y + (movePoint1.y - movePoint0.y) / 2 };
        let downCenter = { x: downPoint0.x + (downPoint1.x - downPoint0.x) / 2, y: downPoint0.y + (downPoint1.y - downPoint0.y) / 2 };
        let tx = this._downTranslateX || 0;
        let ty = this._downTranslateY || 0;
        let zoomLevel = this._downZoomLevel;
        let xx = moveCenter.x - (-tx + downCenter.x) / zoomLevel * level;
        let yy = moveCenter.y - (-ty + downCenter.y) / zoomLevel * level;
        this.set("zoomLevel", level);
        this.set("translateX", xx);
        this.set("translateY", yy);
      }
    }
  }
  _handleChartMove(event) {
    const chartContainer = this.chartContainer;
    let downPoint = chartContainer._getDownPoint();
    const downPointId = chartContainer._getDownPointId();
    const originalEvent = event.originalEvent;
    const pointerId = originalEvent.pointerId;
    if (this.get("pinchZoom")) {
      if (pointerId) {
        this._movePoints[pointerId] = event.point;
        if (keys(chartContainer._downPoints).length > 1) {
          this._handlePinch();
          return;
        }
      }
    }
    if (downPointId && pointerId && pointerId != downPointId) {
      return;
    } else {
      if (downPoint) {
        const panX = this.get("panX");
        const panY = this.get("panY");
        if (panX != "none" || panY != "none") {
          const display = chartContainer._display;
          let local = display.toLocal(event.point);
          downPoint = display.toLocal(downPoint);
          let x = this._downTranslateX;
          let y = this._downTranslateY;
          if (Math.hypot(downPoint.x - local.x, downPoint.y - local.y) > 5) {
            let bg = chartContainer.get("background");
            if (bg) {
              bg.events.disableType("click");
            }
            if (isNumber(x) && isNumber(y)) {
              let projection = this.get("projection");
              const zoomLevel = this.get("zoomLevel", 1);
              const maxPanOut = this.get("maxPanOut", 0.4);
              const bounds = this._mapBounds;
              const w = this.width();
              const h = this.height();
              const ww = bounds[1][0] - bounds[0][0];
              const hh = bounds[1][1] - bounds[0][1];
              if (panX == "translateX") {
                x += local.x - downPoint.x;
                const cx = w / 2 - (w / 2 - this._centerX) * zoomLevel;
                x = Math.min(x, cx + ww * maxPanOut * zoomLevel);
                x = Math.max(x, cx - ww * maxPanOut * zoomLevel);
              }
              if (panY == "translateY") {
                y += local.y - downPoint.y;
                const cy = h / 2 - (h / 2 - this._centerY) * zoomLevel;
                y = Math.min(y, cy + hh * maxPanOut * zoomLevel);
                y = Math.max(y, cy - hh * maxPanOut * zoomLevel);
              }
              this.set("translateX", x);
              this.set("translateY", y);
              if (projection.invert) {
                let downLocation = projection.invert([downPoint.x, downPoint.y]);
                if (location && downLocation) {
                  if (panX == "rotateX") {
                    this.set("rotationX", this._downRotationX - (downPoint.x - local.x) * this._pLon);
                  }
                  if (panY == "rotateY") {
                    this.set("rotationY", this._downRotationY + (downPoint.y - local.y) * this._pLat);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  _handleWheelRotateY(delta, duration, easing) {
    this._rya = this.animate({ key: "rotationY", to: this.get("rotationY", 0) - delta, duration, easing });
  }
  _handleWheelRotateX(delta, duration, easing) {
    this._rxa = this.animate({ key: "rotationX", to: this.get("rotationX", 0) - delta, duration, easing });
  }
  _handleWheelZoom(delta, point) {
    let step = this.get("zoomStep", 2);
    let zoomLevel = this.get("zoomLevel", 1);
    let newZoomLevel = zoomLevel;
    if (delta > 0) {
      newZoomLevel = zoomLevel / step;
    } else if (delta < 0) {
      newZoomLevel = zoomLevel * step;
    }
    if (newZoomLevel != zoomLevel) {
      this.zoomToPoint(point, newZoomLevel);
    }
  }
  /**
   * Zoom the map to geographical bounds.
   *
   * @param  geoBounds  Bounds
   * @param  duration   Animation duration in milliseconds
   * @param  rotationX  X rotation of a map at the end of zoom
   * @param  rotationY  Y rotation of a map at the end of zoom
   */
  zoomToGeoBounds(geoBounds, duration, rotationX, rotationY) {
    if (geoBounds.right < geoBounds.left) {
      geoBounds.right = 180;
      geoBounds.left = -180;
    }
    const geoPath = this.getPrivate("geoPath");
    const mapBounds = geoPath.bounds(this._geometryColection);
    let p0 = this.convert({ longitude: geoBounds.left, latitude: geoBounds.top }, rotationX, rotationY);
    let p1 = this.convert({ longitude: geoBounds.right, latitude: geoBounds.bottom }, rotationX, rotationY);
    if (p0.y < mapBounds[0][1]) {
      p0.y = mapBounds[0][1];
    }
    if (p1.y > mapBounds[1][1]) {
      p1.y = mapBounds[1][1];
    }
    let zl = this.get("zoomLevel", 1);
    let bounds = { left: p0.x, right: p1.x, top: p0.y, bottom: p1.y };
    let seriesContainer = this.seriesContainer;
    let zoomLevel = 0.9 * Math.min(seriesContainer.innerWidth() / (bounds.right - bounds.left) * zl, seriesContainer.innerHeight() / (bounds.bottom - bounds.top) * zl);
    let x = bounds.left + (bounds.right - bounds.left) / 2;
    let y = bounds.top + (bounds.bottom - bounds.top) / 2;
    let geoPoint = this.invert({ x, y });
    if (rotationX != null || rotationY != null) {
      this.rotate(rotationX, rotationY);
    }
    return this.zoomToGeoPoint(geoPoint, zoomLevel, true, duration);
  }
  /**
   * Zooms the map to specific screen point.
   *
   * @param  point    Point
   * @param  level    Zoom level
   * @param  center   Center the map
   * @param  duration Duration of the animation in milliseconds
   */
  zoomToPoint(point, level, center, duration) {
    if (level) {
      level = fitToRange(level, this.get("minZoomLevel", 1), this.get("maxZoomLevel", 32));
    }
    if (!isNumber(duration)) {
      duration = this.get("animationDuration", 0);
    }
    const easing = this.get("animationEasing");
    const zoomLevel = this.get("zoomLevel", 1);
    if (this.get("centerMapOnZoomOut") && level == this.get("homeZoomLevel", 1)) {
      point = this.convert(this.homeGeoPoint(), this.get("homeRotationX"), this.get("homeRotationY"));
      center = true;
    }
    let x = point.x;
    let y = point.y;
    let tx = this.get("translateX", 0);
    let ty = this.get("translateY", 0);
    let cx = x;
    let cy = y;
    if (center) {
      cx = this.width() / 2;
      cy = this.height() / 2;
    }
    let xx = cx - (x - tx) / zoomLevel * level;
    let yy = cy - (y - ty) / zoomLevel * level;
    this._txa = this.animate({ key: "translateX", to: xx, duration, easing });
    this._tya = this.animate({ key: "translateY", to: yy, duration, easing });
    this._za = this.animate({ key: "zoomLevel", to: level, duration, easing });
    if (zoomLevel != level) {
      this._root.readerAlert(this._t("Zoom level changed to %1", this._root.locale, numberToString(level)));
    }
    return this._za;
  }
  /**
   * Zooms the map to specific geographical point.
   *
   * @param  geoPoint  Point
   * @param  level     Zoom level
   * @param  center    Center the map
   * @param  duration  Duration of the animation in milliseconds
   * @param  rotationX  X rotation of a map at the end of zoom
   * @param  rotationY  Y rotation of a map at the end of zoom
   *
   */
  zoomToGeoPoint(geoPoint, level, center, duration, rotationX, rotationY) {
    let xy = this.convert(geoPoint, rotationX, rotationY);
    if (rotationX != null || rotationY != null) {
      this.rotate(rotationX, rotationY, duration);
    }
    if (xy) {
      return this.zoomToPoint(xy, level, center, duration);
    }
  }
  rotate(rotationX, rotationY, duration) {
    const projection = this.get("projection");
    if (!projection.rotate) {
    } else {
      if (!isNumber(duration)) {
        duration = this.get("animationDuration", 0);
      }
      const easing = this.get("animationEasing");
      if (rotationX != null) {
        this.animate({ key: "rotationX", to: rotationX, duration, easing });
      }
      if (rotationY != null) {
        this.animate({ key: "rotationY", to: rotationY, duration, easing });
      }
    }
  }
  /**
   * Zooms the map in.
   */
  zoomIn() {
    return this.zoomToPoint({ x: this.width() / 2, y: this.height() / 2 }, this.get("zoomLevel", 1) * this.get("zoomStep", 2));
  }
  /**
   * Zooms the map out.
   */
  zoomOut() {
    return this.zoomToPoint({ x: this.width() / 2, y: this.height() / 2 }, this.get("zoomLevel", 1) / this.get("zoomStep", 2));
  }
  _clearDirty() {
    super._clearDirty();
    this._dirtyGeometries = false;
    this._mapFitted = false;
  }
  /**
   * Returns area of a mapPolygon in square pixels.
   */
  getArea(dataItem) {
    const geoPath = this.getPrivate("geoPath");
    const geometry = dataItem.get("geometry");
    if (geometry) {
      return geoPath.area(geometry);
    }
    return 0;
  }
};
Object.defineProperty(MapChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapChart"
});
Object.defineProperty(MapChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SerialChart.classNames.concat([MapChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapPointSeries.js
var MapPointSeries = class extends MapSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_types", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["Point", "MultiPoint"]
    });
    Object.defineProperty(this, "_lineChangedDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this.fields.push("polygonId", "lineId", "longitude", "latitude", "fixed");
    super._afterNew();
  }
  /**
   * @ignore
   */
  markDirtyProjection() {
    this.markDirty();
  }
  /**
   * Forces a repaint of the element which relies on data.
   *
   * @since 5.0.21
   */
  markDirtyValues(dataItem) {
    super.markDirtyValues();
    if (dataItem) {
      this._positionBullets(dataItem);
    }
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    let geometry = dataItem.get("geometry");
    if (!geometry) {
      geometry = { type: "Point", coordinates: [dataItem.get("longitude", 0), dataItem.get("latitude", 0)] };
      dataItem.set("geometry", geometry);
    } else {
      if (geometry.type == "Point") {
        const coordinates = geometry.coordinates;
        if (coordinates) {
          dataItem.set("longitude", coordinates[0]);
          dataItem.set("latitude", coordinates[1]);
        }
      } else if (geometry.type == "MultiPoint") {
        const coordinates = geometry.coordinates;
        if (coordinates && coordinates[0]) {
          dataItem.set("longitude", coordinates[0][0]);
          dataItem.set("latitude", coordinates[0][1]);
        }
      }
    }
    this._addGeometry(geometry, this);
  }
  _makeBullets(dataItem) {
    dataItem.bullets = [];
    this.bullets.each((bulletFunction) => {
      const geometry = dataItem.get("geometry");
      if (geometry) {
        if (geometry.type == "Point") {
          this._setBulletParent(this._makeBullet(dataItem, bulletFunction));
        } else if (geometry.type = "MultiPoint") {
          let i = 0;
          each(geometry.coordinates, () => {
            this._setBulletParent(this._makeBullet(dataItem, bulletFunction, i));
            i++;
          });
        }
      }
    });
  }
  _setBulletParent(bullet) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      const chart = this.chart;
      if (sprite && chart) {
        const dataItem = sprite.dataItem;
        if (dataItem) {
          if (dataItem.get("fixed")) {
            if (sprite.parent != chart.bulletsContainer) {
              chart.bulletsContainer.children.moveValue(sprite);
            }
          } else {
            if (sprite.parent != this.bulletsContainer) {
              this.bulletsContainer.children.moveValue(sprite);
            }
          }
        }
      }
    }
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      if (dataItem && dataItem.get("fixed")) {
        return;
      }
      const latitude = dataItem.get("latitude");
      const longitude = dataItem.get("longitude");
      const lineDataItem = dataItem.get("lineDataItem");
      const fixed = dataItem.get("fixed");
      const chart = this.chart;
      let line;
      if (lineDataItem) {
        line = lineDataItem.get("mapLine");
      } else {
        const lineId = dataItem.get("lineId");
        if (lineId && chart) {
          chart.series.each((series) => {
            if (series.isType("MapLineSeries")) {
              let lineDI = series.getDataItemById(lineId);
              if (lineDI) {
                dataItem.set("lineDataItem", lineDI);
                line = lineDI.get("mapLine");
              }
            }
          });
        }
      }
      if (this._lineChangedDp) {
        this._lineChangedDp.dispose();
      }
      if (line) {
        this._lineChangedDp = line.events.on("linechanged", () => {
          this._positionBullets(dataItem);
        });
      }
      const polygonDataItem = dataItem.get("polygonDataItem");
      let polygon;
      if (polygonDataItem) {
        polygon = polygonDataItem.get("mapPolygon");
      } else {
        const polygonId = dataItem.get("polygonId");
        if (polygonId && chart) {
          chart.series.each((series) => {
            if (series.isType("MapPolygonSeries")) {
              let polygonDI = series.getDataItemById(polygonId);
              if (polygonDI) {
                dataItem.set("polygonDataItem", polygonDI);
                polygon = polygonDI.get("mapPolygon");
              }
            }
          });
        }
      }
      const positionOnLine = dataItem.get("positionOnLine");
      let coordinates;
      let angle;
      if (polygon) {
        let geoPoint = polygon.visualCentroid();
        coordinates = [geoPoint.longitude, geoPoint.latitude];
        dataItem.setRaw("longitude", geoPoint.longitude);
        dataItem.setRaw("latitude", geoPoint.latitude);
      } else if (line && isNumber(positionOnLine)) {
        let geoPoint = line.positionToGeoPoint(positionOnLine);
        coordinates = [geoPoint.longitude, geoPoint.latitude];
        if (dataItem.get("autoRotate", bullet.get("autoRotate")) && chart) {
          const geoPoint0 = line.positionToGeoPoint(positionOnLine - 2e-3);
          const geoPoint1 = line.positionToGeoPoint(positionOnLine + 2e-3);
          const point0 = chart.convert(geoPoint0);
          const point1 = chart.convert(geoPoint1);
          angle = getAngle(point0, point1);
        }
        dataItem.setRaw("longitude", geoPoint.longitude);
        dataItem.setRaw("latitude", geoPoint.latitude);
      } else if (isNumber(longitude) && isNumber(latitude)) {
        coordinates = [longitude, latitude];
      } else {
        const geometry = dataItem.get("geometry");
        if (geometry) {
          if (geometry.type == "Point") {
            this._positionBulletReal(bullet, geometry, geometry.coordinates, angle);
          } else if (geometry.type == "MultiPoint") {
            let index = bullet._index || 0;
            coordinates = geometry.coordinates[index];
          }
        }
      }
      if (!fixed && coordinates) {
        this._positionBulletReal(bullet, { type: "Point", coordinates }, coordinates, angle);
      }
    }
  }
  _positionBulletReal(bullet, geometry, coordinates, angle) {
    const sprite = bullet.get("sprite");
    const chart = this.chart;
    if (chart) {
      const projection = chart.get("projection");
      const geoPath = chart.getPrivate("geoPath");
      const dataItem = sprite.dataItem;
      const xy = projection(coordinates);
      if (xy) {
        const point = { x: xy[0], y: xy[1] };
        sprite.setAll(point);
        dataItem.setRaw("point", point);
      }
      let visible = true;
      if (geoPath(geometry)) {
        if (this.get("clipFront")) {
          visible = false;
        }
      } else {
        if (this.get("clipBack")) {
          visible = false;
        }
      }
      sprite.setPrivate("visible", visible);
      dataItem.set("clipped", !visible);
      if (dataItem && angle != null && dataItem.get("autoRotate", bullet.get("autoRotate"))) {
        sprite.set("rotation", angle + dataItem.get("autoRotateAngle", bullet.get("autoRotateAngle", 0)));
      }
    }
  }
  /**
   * Centers the map to specific series' data item and zooms to the level
   * specified in the parameters.
   *
   * @param  dataItem   Map point
   * @param  zoomLevel  Zoom level
   * @param  rotate If it's true, the map will rotate so that this point would be in the center. Mostly usefull with geoOrthographic projection.
   */
  zoomToDataItem(dataItem, zoomLevel, rotate) {
    const chart = this.chart;
    if (chart) {
      const longitude = dataItem.get("longitude", 0);
      const latitude = dataItem.get("latitude", 0);
      if (rotate) {
        return chart.zoomToGeoPoint({ longitude, latitude }, zoomLevel, true, void 0, -longitude, -latitude);
      }
      return chart.zoomToGeoPoint({ longitude, latitude }, zoomLevel, true);
    }
  }
  /**
   * Zooms the map in so that all points in the array are visible.
   *
   * @param   dataItems  An array of data items of points to zoom to
   * @param   rotate     Rotate the map so it is centered on the selected items
   * @return             Animation
   * @since 5.5.6
   */
  zoomToDataItems(dataItems, rotate) {
    let left = null;
    let right = null;
    let top = null;
    let bottom = null;
    each(dataItems, (dataItem) => {
      const longitude = dataItem.get("longitude", 0);
      const latitude = dataItem.get("latitude", 0);
      if (left == null || left > longitude) {
        left = longitude;
      }
      if (right == null || right < longitude) {
        right = longitude;
      }
      if (top == null || top < latitude) {
        top = latitude;
      }
      if (bottom == null || bottom > latitude) {
        bottom = latitude;
      }
    });
    if (left != null && right != null && top != null && bottom != null) {
      const chart = this.chart;
      if (chart) {
        if (rotate) {
          return chart.zoomToGeoBounds({ left, right, top, bottom }, void 0, -(left + (right - left) / 2), -(top + (top - bottom) / 2));
        }
        return chart.zoomToGeoBounds({ left, right, top, bottom });
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    const chart = this.chart;
    if (chart) {
      chart.series.each((series) => {
        if (series.isType("MapLineSeries")) {
          each(series.dataItems, (di) => {
            const pointsToConnect = di.get("pointsToConnect");
            if (pointsToConnect) {
              each(pointsToConnect, (point) => {
                if (point == dataItem) {
                  remove(pointsToConnect, point);
                  series.markDirtyValues(di);
                }
              });
            }
          });
        }
      });
    }
    super.disposeDataItem(dataItem);
  }
  /**
   * @ignore
   */
  _excludeDataItem(dataItem) {
    super._excludeDataItem(dataItem);
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      });
    }
  }
  /**
   * @ignore
   */
  _unexcludeDataItem(dataItem) {
    super._unexcludeDataItem(dataItem);
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", true);
        }
      });
    }
  }
  /**
   * @ignore
   */
  _notIncludeDataItem(dataItem) {
    super._notIncludeDataItem(dataItem);
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      });
    }
  }
  /**
   * @ignore
   */
  _unNotIncludeDataItem(dataItem) {
    super._unNotIncludeDataItem(dataItem);
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", true);
        }
      });
    }
  }
};
Object.defineProperty(MapPointSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapPointSeries"
});
Object.defineProperty(MapPointSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MapSeries.classNames.concat([MapPointSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapPolygon.js
var import_polylabel = __toESM(require_polylabel());
var MapPolygon = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_projectionDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("trustBounds", true);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this._projectionDirty || this.isDirty("geometry") || this.isDirty("precision")) {
      const geometry = this.get("geometry");
      if (geometry) {
        const series = this.series;
        if (series) {
          const projection = series.projection();
          if (projection) {
            projection.precision(this.get("precision", 0.5));
          }
          const geoPath = series.geoPath();
          if (geoPath) {
            this._clear = true;
            this.set("draw", (_display) => {
              geoPath.context(this._display);
              geoPath(geometry);
              geoPath.context(null);
            });
            if (this.isHover()) {
              this.showTooltip();
            }
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  markDirtyProjection() {
    this.markDirty();
    this._projectionDirty = true;
  }
  _clearDirty() {
    super._clearDirty();
    this._projectionDirty = false;
  }
  /**
   * Returns latitude/longitude of the geometrical center of the polygon.
   *
   * @return Center
   */
  geoCentroid() {
    const geometry = this.get("geometry");
    if (geometry) {
      return getGeoCentroid(geometry);
    } else {
      return { latitude: 0, longitude: 0 };
    }
  }
  /**
   * Returns latitude/longitude of the visual center of the polygon.
   *
   * @return Center
   */
  visualCentroid() {
    let biggestArea = 0;
    let coordinates = [];
    const geometry = this.get("geometry");
    if (geometry) {
      if (geometry.type == "Polygon") {
        coordinates = geometry.coordinates;
      } else if (geometry.type == "MultiPolygon") {
        for (let i = 0; i < geometry.coordinates.length; i++) {
          let coords = geometry.coordinates[i];
          let area = area_default({ type: "Polygon", coordinates: coords });
          if (area > biggestArea) {
            coordinates = coords;
            biggestArea = area;
          }
        }
      }
      if (coordinates) {
        let center = (0, import_polylabel.default)(coordinates);
        return { longitude: center[0], latitude: center[1] };
      }
    }
    return { longitude: 0, latitude: 0 };
  }
  _getTooltipPoint() {
    const series = this.series;
    if (series) {
      const projection = series.projection();
      if (projection) {
        const geoPoint = this.visualCentroid();
        const xy = projection([geoPoint.longitude, geoPoint.latitude]);
        if (xy) {
          return { x: xy[0], y: xy[1] };
        }
      }
    }
    return { x: 0, y: 0 };
  }
};
Object.defineProperty(MapPolygon, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapPolygon"
});
Object.defineProperty(MapPolygon, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([MapPolygon.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/MapPolygonSeries.js
var MapPolygonSeries = class extends MapSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "mapPolygons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => MapPolygon._new(this._root, {}, [this.mapPolygons.template])))
    });
    Object.defineProperty(this, "_types", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["Polygon", "MultiPolygon"]
    });
  }
  /**
   * @ignore
   */
  makeMapPolygon(dataItem) {
    const mapPolygon = this.children.push(this.mapPolygons.make());
    mapPolygon._setDataItem(dataItem);
    this.mapPolygons.push(mapPolygon);
    return mapPolygon;
  }
  /**
   * @ignore
   */
  markDirtyProjection() {
    each(this.dataItems, (dataItem) => {
      let mapPolygon = dataItem.get("mapPolygon");
      if (mapPolygon) {
        mapPolygon.markDirtyProjection();
      }
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("fill")) {
      this.mapPolygons.template.set("fill", this.get("fill"));
    }
    if (this.isDirty("stroke")) {
      this.mapPolygons.template.set("stroke", this.get("stroke"));
    }
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    let mapPolygon = dataItem.get("mapPolygon");
    if (!mapPolygon) {
      mapPolygon = this.makeMapPolygon(dataItem);
    }
    dataItem.set("mapPolygon", mapPolygon);
    let geometry = dataItem.get("geometry");
    if (geometry) {
      if (this.get("reverseGeodata")) {
        const coordinates = geometry.coordinates;
        if (coordinates) {
          for (let x = 0; x < geometry.coordinates.length; x++) {
            if (geometry.type == "MultiPolygon") {
              for (let y = 0; y < geometry.coordinates[x].length; y++) {
                geometry.coordinates[x][y].reverse();
              }
            } else {
              geometry.coordinates[x].reverse();
            }
          }
        }
      }
      mapPolygon.set("geometry", geometry);
    }
    mapPolygon.series = this;
    this._addGeometry(dataItem.get("geometry"), this);
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const mapPolygon = dataItem.get("mapPolygon");
    if (mapPolygon) {
      this.mapPolygons.removeValue(mapPolygon);
      mapPolygon.dispose();
    }
    this._removeGeometry(dataItem.get("geometry"));
  }
  /**
   * @ignore
   */
  _excludeDataItem(dataItem) {
    super._excludeDataItem(dataItem);
    const mapPolygon = dataItem.get("mapPolygon");
    if (mapPolygon) {
      mapPolygon.setPrivate("visible", false);
    }
  }
  /**
   * @ignore
   */
  _unexcludeDataItem(dataItem) {
    super._unexcludeDataItem(dataItem);
    const mapPolygon = dataItem.get("mapPolygon");
    if (mapPolygon) {
      mapPolygon.setPrivate("visible", true);
    }
  }
  /**
   * @ignore
   */
  _notIncludeDataItem(dataItem) {
    super._notIncludeDataItem(dataItem);
    const mapPolygon = dataItem.get("mapPolygon");
    if (mapPolygon) {
      mapPolygon.setPrivate("visible", false);
    }
  }
  /**
   * @ignore
   */
  _unNotIncludeDataItem(dataItem) {
    super._unNotIncludeDataItem(dataItem);
    const mapPolygon = dataItem.get("mapPolygon");
    if (mapPolygon) {
      mapPolygon.setPrivate("visible", true);
    }
  }
  /**
   * Forces a repaint of the element which relies on data.
   *
   * @since 5.0.21
   */
  markDirtyValues(dataItem) {
    super.markDirtyValues();
    if (dataItem) {
      const mapPolygon = dataItem.get("mapPolygon");
      if (mapPolygon) {
        mapPolygon.set("geometry", dataItem.get("geometry"));
      }
    }
  }
  /**
   * Centers and zooms in on the specific polygon.
   *
   * @param  dataItem  Target data item
   * @see {@link https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zooming_to_clicked_object} for more info
   * @param  rotate If it's true, the map will rotate so that this polygon would be in the center. Mostly usefull with geoOrthographic projection.
   */
  zoomToDataItem(dataItem, rotate) {
    const polygon = dataItem.get("mapPolygon");
    if (polygon) {
      const geometry = polygon.get("geometry");
      const chart = this.chart;
      if (geometry && chart) {
        if (rotate) {
          const centroid = getGeoCentroid(geometry);
          chart.rotate(-centroid.longitude, -centroid.latitude);
          return chart.zoomToGeoBounds(getGeoBounds(geometry), void 0, -centroid.longitude, -centroid.latitude);
        }
        return chart.zoomToGeoBounds(getGeoBounds(geometry));
      }
    }
  }
  /**
   * Zooms the map in so that all polygons in the array are visible.
   *
   * @param   dataItems  An array of data items to zoom to
   * @param   rotate     Rotate the map so it is centered on the selected items
   * @return             Animation
   * @since 5.9.0
   */
  zoomToDataItems(dataItems, rotate) {
    let left;
    let right;
    let top;
    let bottom;
    each(dataItems, (dataItem) => {
      const polygon = dataItem.get("mapPolygon");
      if (polygon) {
        const geometry = polygon.get("geometry");
        if (geometry) {
          let bounds = getGeoBounds(geometry);
          if (left == null) {
            left = bounds.left;
          }
          if (right == null) {
            right = bounds.right;
          }
          if (top == null) {
            top = bounds.top;
          }
          if (bottom == null) {
            bottom = bounds.bottom;
          }
          left = Math.min(bounds.left, left);
          right = Math.max(bounds.right, right);
          top = Math.max(bounds.top, top);
          bottom = Math.min(bounds.bottom, bottom);
        }
      }
    });
    if (left != null && right != null && top != null && bottom != null) {
      const chart = this.chart;
      if (chart) {
        if (rotate) {
          const rx = left + (right - left) / 2;
          const ry = bottom + (top - bottom) / 2;
          chart.rotate(-rx, -ry);
          return chart.zoomToGeoBounds({ left, right, top, bottom }, void 0, -rx, -ry);
        }
        return chart.zoomToGeoBounds({ left, right, top, bottom });
      }
    }
  }
  /**
   * Returns a [[MapPolygon]] that is under specific X/Y point.
   *
   * @since 5.9.8
   * @param   point  X/Y
   * @return         Polygon
   */
  getPolygonByPoint(point) {
    let found;
    const renderer = this._display._renderer;
    const displayObject = renderer.getObjectAtPoint(point);
    if (displayObject) {
      this.mapPolygons.each(function(polygon) {
        if (polygon._display == displayObject) {
          found = polygon;
        }
      });
      return found;
    }
  }
  getPolygonByGeoPoint(point) {
    return this.getPolygonByPoint(this.chart.convert(point));
  }
};
Object.defineProperty(MapPolygonSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "MapPolygonSeries"
});
Object.defineProperty(MapPolygonSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MapSeries.classNames.concat([MapPolygonSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/ClusteredPointSeries.js
var ClusteredPointSeries = class extends MapPointSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.makeDataItem({})
    });
    Object.defineProperty(this, "_clusterIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_clusters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "clusteredDataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_scatterIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_scatters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_packLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: pack_default()
    });
    Object.defineProperty(this, "_spiral", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_clusterDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_previousZL", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _afterNew() {
    this.fields.push("groupId");
    this._setRawDefault("groupIdField", "groupId");
    super._afterNew();
  }
  _afterDataChange() {
    super._afterDataChange();
    this._previousZL = 0;
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("scatterRadius")) {
      this._spiral = spiralPoints(0, 0, 300, 300, 0, 3, 3, 0, 0);
    }
    const chart = this.chart;
    if (chart) {
      const zoomLevel = chart.get("zoomLevel", 1);
      if (zoomLevel != this._previousZL) {
        const clusterDelay = this.get("clusterDelay", 0);
        if (clusterDelay) {
          if (this._clusterDP) {
            this._clusterDP.dispose();
            this._clusterDP = this.setTimeout(() => {
              this._doTheCluster();
            }, clusterDelay);
          } else {
            this._doTheCluster();
            this._clusterDP = this.setTimeout(() => {
            }, 0);
          }
        } else {
          this._doTheCluster();
        }
        this._previousZL = zoomLevel;
      }
      each(this.clusteredDataItems, (dataItem) => {
        const bullet = dataItem.get("bullet");
        const longitude = dataItem.get("longitude", 0);
        const latitude = dataItem.get("latitude", 0);
        this._positionBulletReal(bullet, { type: "Point", coordinates: [longitude, latitude] }, [longitude, latitude]);
      });
    }
  }
  _doTheCluster() {
    const groups = {};
    each(this.dataItems, (dataItem) => {
      const groupId = dataItem.get("groupId", "_default");
      if (!groups[groupId]) {
        groups[groupId] = [];
      }
      groups[groupId].push(dataItem);
    });
    this._scatterIndex = -1;
    this._scatters = [];
    this._clusterIndex = -1;
    this._clusters = [];
    each(this.clusteredDataItems, (dataItem) => {
      dataItem.setRaw("children", void 0);
    });
    each(this.dataItems, (dataItem) => {
      dataItem.setRaw("cluster", void 0);
    });
    each2(groups, (_key, group) => {
      this._scatterGroup(group);
    });
    each2(groups, (_key, group) => {
      this._clusterGroup(group);
    });
    each(this.dataItems, (dataItem) => {
      if (!dataItem.get("cluster")) {
        const bullets = dataItem.bullets;
        if (bullets) {
          each(bullets, (bullet) => {
            const sprite = bullet.get("sprite");
            if (sprite) {
              sprite.set("forceHidden", false);
            }
          });
        }
      }
    });
  }
  /**
   * Zooms to the area so that all clustered data items of a cluster would be
   * visible.
   *
   * Pass in `true` as a second parameter to rotate that map so that the group
   * is in the center. This is especially useful in the maps that use
   * Orthographic (globe) projection.
   *
   * @param  dataItem  Group data item
   * @param  rotate    Rotate the map so that group is in the center?
   * @see {@link https://www.amcharts.com/docs/v5/charts/map-chart/clustered-point-series/#Drill_down} for more info
   */
  zoomToCluster(dataItem, rotate) {
    this.zoomToDataItems(dataItem.get("children", []), rotate);
  }
  _clusterGroup(dataItems) {
    const chart = this.chart;
    if (chart && chart.get("zoomLevel", 1) >= chart.get("maxZoomLevel", 100) * this.get("stopClusterZoom", 0.95)) {
    } else {
      dataItems.sort((a, b) => {
        const pointA = a.get("point");
        const pointB = b.get("point");
        if (pointA && pointB) {
          return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
        }
        return 0;
      });
      while (dataItems.length > 0) {
        this._clusterIndex++;
        this._clusters[this._clusterIndex] = [];
        const cluster = this._clusters[this._clusterIndex];
        const dataItem = dataItems[0];
        cluster.push(dataItem);
        removeFirst(dataItems, dataItem);
        this._clusterDataItem(dataItem, dataItems);
      }
    }
    let i = 0;
    const bulletMethod = this.get("clusteredBullet");
    if (bulletMethod) {
      each(this._clusters, (cluster) => {
        let sumX = 0;
        let sumY = 0;
        let len = cluster.length;
        if (len > 1) {
          let clusteredDataItem = this.clusteredDataItems[i];
          if (!clusteredDataItem) {
            clusteredDataItem = new DataItem(this, void 0, {});
            const bullet2 = clusteredDataItem.set("bullet", bulletMethod(this._root, this, clusteredDataItem));
            if (bullet2) {
              const sprite = bullet2.get("sprite");
              if (sprite) {
                this.bulletsContainer.children.push(sprite);
                sprite._setDataItem(clusteredDataItem);
                this.root.events.once("frameended", () => {
                  if (sprite instanceof Container) {
                    sprite.walkChildren((child) => {
                      if (child instanceof Component) {
                        child.markDirtyValues();
                      }
                    });
                  }
                });
              }
            }
            this.clusteredDataItems.push(clusteredDataItem);
          }
          let groupId;
          each(cluster, (dataItem) => {
            dataItem.setRaw("cluster", clusteredDataItem);
            const point = dataItem.get("point");
            if (point) {
              sumX += point.x;
              sumY += point.y;
            }
            const bullets = dataItem.bullets;
            if (bullets) {
              each(bullets, (bullet2) => {
                const sprite = bullet2.get("sprite");
                if (sprite) {
                  sprite.set("forceHidden", true);
                }
              });
            }
            groupId = dataItem.get("groupId");
          });
          let averageX = sumX / len;
          let averageY = sumY / len;
          clusteredDataItem.setRaw("children", cluster);
          clusteredDataItem.setRaw("groupId", groupId);
          const prevLen = clusteredDataItem.get("value");
          clusteredDataItem.setRaw("value", len);
          const bullet = clusteredDataItem.get("bullet");
          if (bullet) {
            let geoPoint = this.chart.invert({ x: averageX, y: averageY });
            if (geoPoint) {
              clusteredDataItem.setAll({
                longitude: geoPoint.longitude,
                latitude: geoPoint.latitude
              });
            }
            this._positionBullets(clusteredDataItem);
            const sprite = bullet.get("sprite");
            if (sprite) {
              sprite.set("forceHidden", false);
              if (prevLen != len) {
                if (sprite instanceof Container) {
                  sprite.walkChildren((child) => {
                    if (child instanceof Label) {
                      child.text.markDirtyText();
                    }
                  });
                }
              }
            }
          }
          i++;
        }
      });
    }
    each(this.clusteredDataItems, (dataItem) => {
      let children = dataItem.get("children");
      if (!children || children.length == 0) {
        const bullet = dataItem.get("bullet");
        if (bullet) {
          const sprite = bullet.get("sprite");
          if (sprite) {
            sprite.set("forceHidden", true);
          }
        }
      }
    });
  }
  _onDataClear() {
    super._onDataClear();
    each(this.clusteredDataItems, (dataItem) => {
      const bullet = dataItem.get("bullet");
      if (bullet) {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.dispose();
        }
      }
    });
    this.clusteredDataItems = [];
  }
  _clusterDataItem(dataItem, dataItems) {
    const point = dataItem.get("point");
    if (point) {
      let minDistance = this.get("minDistance", 20);
      const cluster = this._clusters[this._clusterIndex];
      for (let i = dataItems.length - 1; i >= 0; i--) {
        const di = dataItems[i];
        if (di && !di.get("clipped")) {
          const diPoint = di.get("point");
          if (diPoint) {
            if (Math.hypot(diPoint.x - point.x, diPoint.y - point.y) < minDistance) {
              cluster.push(di);
              removeFirst(dataItems, di);
              this._clusterDataItem(di, dataItems);
            }
          }
        }
      }
    }
  }
  _scatterGroup(dataItems) {
    const chart = this.chart;
    if (chart && chart.get("zoomLevel", 1) >= chart.get("maxZoomLevel", 100) * this.get("stopClusterZoom", 0.95)) {
      while (dataItems.length > 0) {
        this._scatterIndex++;
        this._scatters[this._scatterIndex] = [];
        const scatter = this._scatters[this._scatterIndex];
        const dataItem = dataItems[0];
        scatter.push(dataItem);
        remove(dataItems, dataItem);
        this._scatterDataItem(dataItem, dataItems);
      }
      each(this._scatters, (scatter) => {
        let len = scatter.length;
        if (len > 1) {
          let previousCircles = [];
          let s = 0;
          let radius = this.get("scatterRadius", 8);
          each(scatter, (dataItem) => {
            let spiralPoint = this._spiral[s];
            let intersects = true;
            if (previousCircles.length > 0) {
              while (intersects) {
                each(previousCircles, (previousCircle) => {
                  intersects = false;
                  while (circlesOverlap({ x: spiralPoint.x, y: spiralPoint.y, radius }, previousCircle)) {
                    s++;
                    if (this._spiral[s] == void 0) {
                      intersects = false;
                    } else {
                      intersects = true;
                      spiralPoint = this._spiral[s];
                    }
                  }
                });
              }
            }
            const dx = spiralPoint.x;
            const dy = spiralPoint.y;
            previousCircles.push({ x: dx, y: dy, radius });
            dataItem.set("dx", dx);
            dataItem.set("dy", dy);
            const bullets = dataItem.bullets;
            if (bullets) {
              each(bullets, (bullet) => {
                const sprite = bullet.get("sprite");
                if (sprite) {
                  sprite.setAll({ dx, dy });
                }
              });
            }
          });
        }
      });
    }
  }
  _scatterDataItem(dataItem, dataItems) {
    const point = dataItem.get("point");
    if (point) {
      const scatterDistance = this.get("scatterDistance", 5);
      const scatter = this._scatters[this._scatterIndex];
      each(dataItems, (di) => {
        if (di && !di.get("clipped")) {
          const diPoint = di.get("point");
          if (diPoint) {
            if (Math.hypot(diPoint.x - point.x, diPoint.y - point.y) < scatterDistance) {
              scatter.push(di);
              removeFirst(dataItems, di);
              this._scatterDataItem(di, dataItems);
            }
          }
        }
      });
    }
  }
};
Object.defineProperty(ClusteredPointSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ClusteredPointSeries"
});
Object.defineProperty(ClusteredPointSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: MapPointSeries.classNames.concat([ClusteredPointSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/map/ZoomControl.js
var ZoomControl = class extends ZoomTools {
  _afterNew() {
    super._afterNew();
    this.addTag("zoomtools");
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isPrivateDirty("chart")) {
      this.set("target", this.getPrivate("chart"));
    }
  }
};
Object.defineProperty(ZoomControl, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ZoomControl"
});
Object.defineProperty(ZoomControl, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ZoomTools.classNames.concat([ZoomControl.className])
});
export {
  ClusteredPointSeries,
  MapChartDefaultTheme as DefaultTheme,
  GraticuleSeries,
  MapChart,
  MapLine,
  MapLineSeries,
  MapPointSeries,
  MapPolygon,
  MapPolygonSeries,
  MapSeries,
  ZoomControl,
  albersUsa_default as geoAlbersUsa,
  equalEarth_default as geoEqualEarth,
  equirectangular_default as geoEquirectangular,
  mercator_default as geoMercator,
  naturalEarth1_default as geoNaturalEarth1,
  orthographic_default as geoOrthographic,
  getGeoArea,
  getGeoBounds,
  getGeoCentroid,
  getGeoCircle,
  getGeoRectangle,
  normalizeGeoPoint
};
//# sourceMappingURL=map-NTW2YM5Q.js.map
