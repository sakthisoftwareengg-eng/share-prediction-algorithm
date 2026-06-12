import {
  Polygon
} from "./chunk-CNNUHZ4L.js";
import {
  Slice
} from "./chunk-HNJ7BFJ7.js";
import {
  AxisLabelRadial
} from "./chunk-ODL3CSH7.js";
import {
  AxisLabel,
  AxisRenderer,
  BaseColumnSeries,
  LineSeries,
  XYChart,
  XYCursor
} from "./chunk-ITQFRA6V.js";
import "./chunk-AHDXI7TZ.js";
import "./chunk-XATEH3WK.js";
import "./chunk-NAZ7YOFP.js";
import "./chunk-KXW2OGU6.js";
import {
  arc_default
} from "./chunk-TSCKTQIQ.js";
import "./chunk-E32SSC6Z.js";
import "./chunk-AVJ6LU7H.js";
import "./chunk-JFXPNH7X.js";
import "./chunk-CRL5FSBR.js";
import "./chunk-XOW4XAJF.js";
import "./chunk-D7RPQL45.js";
import {
  Container,
  Graphics,
  ListTemplate,
  cos,
  fitToRange,
  getAngle,
  mergeTags,
  p50,
  percent,
  relativeToValue,
  sin,
  spiralPoints
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  eachContinue,
  isNumber
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/AxisRendererCurveX.js
var AxisRendererCurveX = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisLabel._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.labels.template])))
    });
    Object.defineProperty(this, "axisFills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Slice._new(this._root, {
        themeTags: mergeTags(this.axisFills.template.get("themeTags", ["fill"]), this.get("themeTags", []))
      }, [this.axisFills.template])))
    });
    Object.defineProperty(this, "pointPostion", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "pointDistance", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_normalizedPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "circular"]);
    super._afterNew();
    this.setPrivateRaw("letter", "X");
    this.setRaw("position", "absolute");
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("points")) {
      this._updateLayout();
    }
    if (this.isDirty("yRenderer")) {
      const yRenderer = this.get("yRenderer");
      yRenderer.set("xRenderer", this);
    }
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    axis.labelsContainer.set("isMeasured", false);
  }
  /**
   * @ignore
   */
  _updateLayout() {
    const chart = this.chart;
    if (chart) {
      const points = this.get("points");
      if (points) {
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        let axisLength = 0;
        let prevPoint = points[0];
        each(points, (point, i) => {
          minX = Math.min(minX, point.x);
          minY = Math.min(minY, point.y);
          maxX = Math.max(maxX, point.x);
          maxY = Math.max(maxY, point.y);
          axisLength += Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
          this.pointDistance[i] = axisLength;
          prevPoint = point;
        });
        each(points, (_p, i) => {
          this.pointPostion[i] = this.pointDistance[i] / axisLength;
        });
        let yAxisLenght = this.get("yRenderer").get("axisLength", 0);
        let aw = maxX - minX + 2 * yAxisLenght;
        let ah = maxY - minY + 2 * yAxisLenght;
        let centerX = (minX + maxX) / 2;
        let centerY = (minY + maxY) / 2;
        let width = chart.innerWidth();
        let height = chart.innerHeight();
        let scaleX = width / aw;
        let scaleY = height / ah;
        let scale = Math.min(scaleX, scaleY);
        if (!this.getPrivate("autoScale", true)) {
          scale = 1;
        }
        this.axis.setPrivateRaw("width", aw * scale);
        this.axis.setPrivateRaw("height", ah * scale);
        this.setPrivateRaw("centerX", centerX);
        this.setPrivateRaw("centerY", centerY);
        this.setPrivateRaw("scale", scale);
        this.setPrivateRaw("axisLength", axisLength);
        this.set("draw", (display) => {
          display.moveTo((points[0].x - centerX) * scale, (points[0].y - centerY) * scale);
          each(points, (point) => {
            display.lineTo((point.x - centerX) * scale, (point.y - centerY) * scale);
          });
        });
        prevPoint = points[0];
        this._normalizedPoints = [];
        each(points, (point) => {
          let distance = Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
          for (let i = 1; i < distance; i++) {
            let x = (prevPoint.x + (point.x - prevPoint.x) * i / distance - centerX) * scale;
            let y = (prevPoint.y + (point.y - prevPoint.y) * i / distance - centerY) * scale;
            const prevNormalized = this._normalizedPoints[this._normalizedPoints.length - 1];
            if (prevNormalized) {
              let distance2 = Math.hypot(x - prevNormalized.x, y - prevNormalized.y);
              if (distance2 < 0.5) {
                continue;
              }
            }
            this._normalizedPoints.push({ x, y });
          }
          prevPoint = point;
        });
        this.axis.markDirtySize();
      }
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (position == null) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (endPosition != null && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      this.toggleVisibility(grid, position, 0, 1);
      const p0 = this.positionToPoint(position, 0);
      const p1 = this.positionToPoint(position, 1);
      grid.set("draw", (display) => {
        display.moveTo(p0.x, p0.y);
        display.lineTo(p1.x, p1.y);
      });
    }
  }
  /**
   * Converts relative position to angle.
   *
   * @param   position  Position
   * @return            Angle
   */
  positionToAngle(position) {
    position = this.toGlobalPosition(position);
    let points = this.get("points");
    let axisLength = this.getPrivate("axisLength", 0);
    let angle = 0;
    if (points) {
      let totalLength = 0;
      let prevPoint = points[0];
      eachContinue(points, (point) => {
        let segmentLength = Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
        totalLength += segmentLength;
        if (totalLength > position * axisLength) {
          angle = getAngle(prevPoint, point) + 90;
          return false;
        }
        prevPoint = point;
        return true;
      });
    }
    return angle;
  }
  getPoints(positionX, positionY, endPositionX, endPositionY) {
    let yRenderer = this.get("yRenderer");
    let points = [];
    if (positionX > endPositionX) {
      [positionX, endPositionX] = [endPositionX, positionX];
    }
    if (positionY > endPositionY) {
      [positionY, endPositionY] = [endPositionY, positionY];
    }
    if (yRenderer) {
      let indexStart = this.positionToIndex(positionX);
      let indexEnd = this.positionToIndex(endPositionX);
      points.push(this.positionToPoint(positionX, positionY));
      for (let i = indexStart; i <= indexEnd + 1; i++) {
        let position = this.indexToPosition(i);
        if (position > positionX && position < endPositionX) {
          points.push(this.positionToPoint(position, positionY));
        }
      }
      points.push(this.positionToPoint(endPositionX, positionY));
      if (endPositionY != positionY) {
        points.push(this.positionToPoint(endPositionX, endPositionY));
        for (let i = indexEnd + 1; i >= indexStart; i--) {
          let position = this.indexToPosition(i);
          if (position > positionX && position < endPositionX) {
            points.push(this.positionToPoint(position, endPositionY));
          }
        }
        points.push(this.positionToPoint(positionX, endPositionY));
        points.push(points[0]);
      }
    }
    return points;
  }
  // do not delete
  _handleOpposite() {
  }
  positionToIndex(position) {
    let points = this.get("points");
    let axisLength = this.getPrivate("axisLength", 0);
    let index = 0;
    position = this.toGlobalPosition(position);
    if (points && points.length > 1) {
      let totalLength = 0;
      let prevPoint = points[0];
      if (position <= 0) {
        index = 0;
      } else if (position >= 1) {
        const len = points.length;
        index = len - 1;
      } else {
        let i = 0;
        eachContinue(points, (point) => {
          let segmentLength = Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
          totalLength += segmentLength;
          if (totalLength >= position * axisLength) {
            index = i;
            return false;
          }
          prevPoint = point;
          i++;
          return true;
        });
      }
    }
    return index;
  }
  indexToPosition(index) {
    let points = this.get("points");
    let axisLength = this.getPrivate("axisLength", 0);
    let position = 0;
    if (points && points.length > 1) {
      let totalLength = 0;
      let prevPoint = points[0];
      let i = 0;
      eachContinue(points, (point) => {
        position = totalLength / axisLength;
        if (i == index) {
          return false;
        }
        let segmentLength = Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
        totalLength += segmentLength;
        prevPoint = point;
        i++;
        return true;
      });
    }
    return this.toAxisPosition(position);
  }
  pointToPosition(point) {
    let minDistance = Infinity;
    let index = 0;
    let prevPoint = this._normalizedPoints[0];
    let angle = 0;
    each(this._normalizedPoints, (normalizedPoint, i) => {
      let distance = Math.hypot(normalizedPoint.x - point.x, normalizedPoint.y - point.y);
      if (distance < minDistance) {
        minDistance = distance;
        index = i;
        angle = getAngle(point, normalizedPoint) - getAngle(prevPoint, normalizedPoint);
      }
      prevPoint = normalizedPoint;
    });
    const yRenderer = this.get("yRenderer");
    const scale = this.getPrivate("scale", 1);
    const rendererY = this.get("yRenderer");
    const y = -minDistance / (yRenderer.get("axisLength", 0) * scale) * sin(angle) + rendererY.get("axisLocation", 0);
    return { x: index / this._normalizedPoints.length, y };
  }
  /**
   * Converts relative position to an X/Y coordinate.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position, positionY, doNotFix) {
    if (positionY == void 0) {
      positionY = 0;
    }
    const rendererY = this.get("yRenderer");
    if (!doNotFix) {
      position = this.toGlobalPosition(position);
    }
    positionY = rendererY.toGlobalPosition(positionY);
    positionY -= rendererY.get("axisLocation", 0);
    let points = this.get("points");
    let axisLength = this.getPrivate("axisLength", 0);
    let scale = this.getPrivate("scale", 1);
    let pointOfPosition = { x: 0, y: 0 };
    let angle = 0;
    if (points && points.length > 1) {
      let totalLength = 0;
      let prevPoint = points[0];
      if (position <= 0) {
        angle = getAngle(points[0], points[1]) + 90;
        pointOfPosition = points[0];
      } else if (position >= 1) {
        const len = points.length;
        angle = getAngle(points[len - 2], points[len - 1]) + 90;
        pointOfPosition = points[len - 1];
      } else {
        eachContinue(points, (point) => {
          let segmentLength = Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
          totalLength += segmentLength;
          if (totalLength >= position * axisLength) {
            let segementStartPosition = (totalLength - segmentLength) / axisLength;
            let segmentPosition = (position * axisLength - segementStartPosition * axisLength) / segmentLength;
            pointOfPosition = { x: prevPoint.x + (point.x - prevPoint.x) * segmentPosition, y: prevPoint.y + (point.y - prevPoint.y) * segmentPosition };
            angle = getAngle(prevPoint, point) + 90;
            return false;
          }
          prevPoint = point;
          return true;
        });
      }
    }
    let centerX = this.getPrivate("centerX", 0);
    let centerY = this.getPrivate("centerY", 0);
    let axisX = (pointOfPosition.x - centerX) * scale;
    let axisY = (pointOfPosition.y - centerY) * scale;
    if (positionY == null) {
      positionY = 0;
    }
    let lengthY = -rendererY.get("axisLength", 0);
    let dy = lengthY * positionY * scale;
    let x = axisX + cos(angle) * dy;
    let y = axisY + sin(angle) * dy;
    return { x, y };
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      if (position == null) {
        position = 0;
      }
      let location = 0.5;
      if (count != null && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      if (endPosition != null && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      const angle = this.positionToAngle(position);
      const rendererY = this.get("yRenderer");
      const axisY = rendererY.axis;
      const point = this.positionToPoint(position, axisY.get("start", 0) + rendererY.get("axisLocation", 0));
      label.setAll({
        x: point.x,
        y: point.y
      });
      if (this.get("rotateLabels", true)) {
        label.set("rotation", angle - 90);
      }
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (position == null) {
        position = 0;
      }
      let location = 0.5;
      if (count != null && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (endPosition != null && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      let length = tick.get("length", 0);
      const inside = tick.get("inside");
      if (inside) {
        length *= -1;
      }
      let angle = this.positionToAngle(position);
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
      const rendererY = this.get("yRenderer");
      const axisY = rendererY.axis;
      const point = this.positionToPoint(position, axisY.get("start"));
      tick.set("draw", (display) => {
        display.moveTo(point.x, point.y);
        display.lineTo(point.x - length * cos(angle), point.y - length * sin(angle));
      });
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (position == null) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (endPosition != null && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        const rendererY = this.get("yRenderer");
        const axisY = rendererY.axis;
        const point = this.positionToPoint(position, axisY.get("start"));
        sprite.setAll({ x: point.x, y: point.y });
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (position == null) {
        position = 0;
      }
      if (endPosition == null) {
        endPosition = 1;
      }
      const yRenderer = this.get("yRenderer");
      const yAxis = yRenderer.axis;
      const points = this.getPoints(position, yAxis.get("start", 0), endPosition, yAxis.get("end", 1));
      fill.set("draw", (display) => {
        display.moveTo(points[0].x, points[0].y);
        each(points, (point) => {
          display.lineTo(point.x, point.y);
        });
        display.closePath();
      });
    }
  }
  /**
   * Returns axis length in pixels.
   *
   * @return Length
   */
  axisLength() {
    return this.getPrivate("axisLength", 0);
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    const yRenderer = this.get("yRenderer");
    const start = yRenderer.axis.get("start", 0);
    const end = yRenderer.axis.get("end", 1);
    const point = this.positionToPoint(position, yRenderer.get("axisLocation", 0.5) * (end - start) + start);
    this._positionTooltip(tooltip, point);
  }
  /**
   * @ignore
   */
  updateTooltipBounds(_tooltip) {
  }
};
Object.defineProperty(AxisRendererCurveX, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererCurveX"
});
Object.defineProperty(AxisRendererCurveX, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererCurveX.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/AxisRendererCurveY.js
var AxisRendererCurveY = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_fillGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arc_default()
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisLabelRadial._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.labels.template])))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "radial"]);
    super._afterNew();
    this.setPrivate("letter", "Y");
    this.setRaw("position", "absolute");
  }
  _changed() {
    super._changed();
    if (this.isDirty("axisLength")) {
      this.updateLayout();
    }
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
  }
  /**
   * @ignore
   */
  updateLayout() {
    const chart = this.chart;
    if (chart) {
      const p0 = this.positionToPoint(0, 0);
      const p1 = this.positionToPoint(1, 0);
      this.set("draw", (display) => {
        display.moveTo(p0.x, p0.y);
        display.lineTo(p1.x, p1.y);
      });
      this.axis.markDirtySize();
      chart._updateMasks();
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
      this.toggleVisibility(grid, position, 0, 1);
      let xRenderer = this.get("xRenderer");
      if (xRenderer) {
        const points = xRenderer.get("points");
        if (points) {
          grid.set("draw", (display) => {
            let previousPoint;
            each(points, (_point, index) => {
              let pointPostion = xRenderer.pointPostion[index];
              let p = this.positionToPoint(position, pointPostion, true);
              if (index == 0) {
                display.moveTo(p.x, p.y);
              } else {
                if (previousPoint && Math.hypot(previousPoint.x - p.x, previousPoint.y - p.y) < 0.5) {
                } else {
                  display.lineTo(p.x, p.y);
                  previousPoint = p;
                }
              }
            });
          });
        }
      }
    }
  }
  // do not delete
  _handleOpposite() {
  }
  /**
   * Converts relative position to X/Y point.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position, positionX, doNotFix) {
    if (positionX == void 0) {
      positionX = 0;
    }
    const xRenderer = this.get("xRenderer");
    if (xRenderer) {
      return xRenderer.positionToPoint(positionX, position, doNotFix);
    }
    return { x: 0, y: 0 };
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
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      const point = this.positionToPoint(position, 0);
      const xRenderer = this.get("xRenderer");
      if (xRenderer) {
        let angle = 0;
        if (xRenderer) {
          angle = xRenderer.positionToAngle(0) - 90;
        }
        label.setAll({
          x: point.x,
          y: point.y
        });
        if (this.get("rotateLabels", true)) {
          label.set("rotation", angle);
        }
      }
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
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
      const point = this.positionToPoint(position, 0);
      const xRenderer = this.get("xRenderer");
      if (xRenderer) {
        let angle = 0;
        if (xRenderer) {
          angle = xRenderer.positionToAngle(0) - 90;
        }
        let length = tick.get("length", 0);
        const inside = tick.get("inside");
        if (inside) {
          length *= -1;
        }
        tick.set("draw", (display) => {
          display.moveTo(point.x, point.y);
          display.lineTo(point.x + length * cos(angle), point.y + length * sin(angle));
        });
        this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
      }
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
        const point = this.positionToPoint(position);
        sprite.setAll({ x: point.x, y: point.y });
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  getPoints(positionX, positionY, endPositionX, endPositionY) {
    var _a;
    return (_a = this.get("xRenderer")) === null || _a === void 0 ? void 0 : _a.getPoints(positionX, positionY, endPositionX, endPositionY);
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (position == null) {
        position = 0;
      }
      if (endPosition == null) {
        endPosition = 1;
      }
      const points = this.getPoints(0, position, 1, endPosition);
      if (points) {
        fill.set("draw", (display) => {
          display.moveTo(points[0].x, points[0].y);
          each(points, (point) => {
            display.lineTo(point.x, point.y);
          });
          display.closePath();
        });
      }
    }
  }
  /**
   * Returns axis length in pixels.
   *
   * @return Length
   */
  axisLength() {
    return this.get("axisLength", 60);
  }
  /**
   * @ignore
   */
  updateTooltipBounds(_tooltip) {
  }
  /**
   * Converts relative position to pixels.
   *
   * @param   position  Position
   * @return            Pixels
   */
  positionToCoordinate(position) {
    if (this._inversed) {
      position = Math.min(this._end, position);
      return (this._end - position) * this._axisLength;
    } else {
      position = Math.max(this._start, position);
      return (position - this._start) * this._axisLength;
    }
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    const xRenderer = this.get("xRenderer");
    if (xRenderer) {
      const point = this.positionToPoint(position, xRenderer.axis.get("start", 0));
      this._positionTooltip(tooltip, point);
    }
  }
};
Object.defineProperty(AxisRendererCurveY, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererCurveY"
});
Object.defineProperty(AxisRendererCurveY, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererCurveY.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/CurveDefaultTheme.js
var CurveDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const r = this.rule.bind(this);
    r("SpiralChart").setAll({
      levelCount: 3,
      endAngle: 0,
      startAngle: -90,
      yAxisRadius: percent(60),
      innerRadius: percent(20)
    });
    r("SerpentineChart").setAll({
      levelCount: 3,
      orientation: "vertical",
      startLocation: 0,
      endLocation: 1
    });
    r("CurveColumnSeries").setAll({
      clustered: true
    });
    r("Slice", ["curve", "column", "series"]).setAll({
      width: percent(50),
      height: percent(50)
    });
    r("AxisRendererCurveY").setAll({
      minGridDistance: 20,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1,
      rotateLabels: false,
      axisLocation: 0.5,
      axisLength: 60
    });
    r("AxisRendererCurveX").setAll({
      minGridDistance: 100,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1,
      rotateLabels: false
    });
    r("RadialLabel", ["circular"]).setAll({
      textType: "circular",
      paddingTop: 1,
      paddingRight: 0,
      paddingBottom: 1,
      paddingLeft: 0,
      centerX: 0,
      centerY: 0,
      radius: 8
    });
    r("AxisLabelRadial", ["category"]).setAll({
      text: "{category}",
      populateText: true
    });
    r("RadialLabel", ["radial"]).setAll({
      textType: "regular",
      centerX: 0,
      textAlign: "right"
    });
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/CurveChart.js
var CurveChart = class extends XYChart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "curveContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotContainer.children.push(Container.new(this._root, { x: p50, y: p50 }))
    });
  }
  _afterNew() {
    this._defaultThemes.push(CurveDefaultTheme.new(this._root));
    super._afterNew();
    const curveContainer = this.curveContainer;
    const gridContainer = this.gridContainer;
    const topGridContainer = this.topGridContainer;
    const seriesContainer = this.seriesContainer;
    const bulletsContainer = this.bulletsContainer;
    curveContainer.children.pushAll([gridContainer, seriesContainer, topGridContainer, bulletsContainer]);
    seriesContainer.set("mask", Graphics.new(this._root, {}));
    gridContainer.set("mask", Graphics.new(this._root, {}));
    this._disposers.push(this.plotContainer.events.on("boundschanged", () => {
      this._updateMasks();
    }));
  }
  _maskGrid() {
  }
  _addCursor(cursor) {
    this.curveContainer.children.push(cursor);
  }
  // do not delete
  _updateMasks() {
    this.xAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer._updateLayout();
    });
    this._updateMask(this.seriesContainer);
    this._updateMask(this.gridContainer);
    this.series.each((series) => {
      if (series.get("maskBullets")) {
        this._updateMask(series.bulletsContainer);
      } else {
        series.bulletsContainer.set("mask", void 0);
      }
    });
    this.yAxes.each((axis) => {
      axis.markDirtySize();
    });
  }
  /**
   * @ignore
   */
  _updateMask(container) {
    const mask = container.get("mask");
    if (mask) {
      const xAxis = this.xAxes.getIndex(0);
      const yAxis = this.yAxes.getIndex(0);
      if (xAxis && yAxis) {
        const renderer = xAxis.get("renderer");
        const points = renderer.getPoints(xAxis.get("start", 0), yAxis.get("start", 0), xAxis.get("end", 1), yAxis.get("end", 1));
        mask.set("draw", (display) => {
          display.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            display.lineTo(points[i].x, points[i].y);
          }
          display.closePath();
        });
        xAxis.markDirtySize();
      }
    }
  }
  /**
   * @ignore
   */
  processAxis(axis) {
    this.curveContainer.children.unshift(axis);
  }
  /**
   * @ignore
   */
  inPlot(_point) {
    return true;
  }
  _tooltipToLocal(point) {
    return this.curveContainer._display.toLocal(point);
  }
  _handlePinch() {
  }
};
Object.defineProperty(CurveChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CurveChart"
});
Object.defineProperty(CurveChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYChart.classNames.concat([CurveChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/SerpentineChart.js
var SerpentineChart = class extends CurveChart {
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("levelCount") || this.isDirty("orientation")) {
      this._updateMasks();
    }
  }
  _updateMasks() {
    const levelCount = this.get("levelCount", 1) - 1;
    let w = this.plotContainer.innerWidth();
    let h = this.plotContainer.innerHeight();
    let points = [];
    let radius;
    if (this.get("orientation") == "vertical") {
      radius = Math.min(h / (levelCount + 1) / 2, w / 3);
      h = Math.min(radius * (levelCount + 1) * 2, h);
      const startLocation = this.get("startLocation", 0);
      const endLocation = this.get("endLocation", 1);
      for (let i = 0; i <= levelCount; i++) {
        if (i % 2 === 0) {
          if (i === 0) {
            points.push({ x: -w / 2 + (w - radius * 2) * startLocation, y: -h / 2 + h / (levelCount + 1) * i });
          } else {
            points.push({ x: -w / 2 + radius, y: -h / 2 + h / (levelCount + 1) * i });
          }
          if (i === levelCount) {
            points.push({ x: w / 2 - radius - (w - radius * 2) * (1 - endLocation), y: -h / 2 + h / (levelCount + 1) * i });
          } else {
            points.push({ x: w / 2 - 2 * radius, y: -h / 2 + h / (levelCount + 1) * i });
          }
          let centerPoint = { x: w / 2 - 2 * radius, y: -h / 2 + h / (levelCount + 1) * (i + 0.5) };
          if (i < levelCount) {
            for (let i2 = 1; i2 < 50; i2++) {
              let angle = -90 + i2 / 50 * 180;
              points.push({ x: centerPoint.x + radius * cos(angle), y: centerPoint.y + radius * sin(angle) });
            }
          }
        } else {
          points.push({ x: w / 2 - 2 * radius, y: -h / 2 + h / (levelCount + 1) * i });
          if (i === levelCount) {
            points.push({ x: -w / 2 + (w - radius * 2) * (1 - endLocation), y: -h / 2 + h / (levelCount + 1) * i });
          } else {
            points.push({ x: -w / 2 + radius, y: -h / 2 + h / (levelCount + 1) * i });
          }
          let centerPoint = { x: -w / 2 + radius, y: -h / 2 + h / (levelCount + 1) * (i + 0.5) };
          if (i < levelCount) {
            for (let i2 = 1; i2 < 50; i2++) {
              let angle = -90 - i2 / 50 * 180;
              points.push({ x: centerPoint.x + radius * cos(angle), y: centerPoint.y + radius * sin(angle) });
            }
          }
        }
      }
    } else {
      radius = Math.min(w / (levelCount + 1) / 2, h / 3);
      w = Math.min(radius * (levelCount + 1) * 2, w);
      const startLocation = this.get("startLocation", 0);
      const endLocation = this.get("endLocation", 1);
      for (let i = 0; i <= levelCount; i++) {
        if (i % 2 === 0) {
          if (i === 0) {
            points.push({ y: -h / 2 + (h - radius * 2) * startLocation, x: -w / 2 + w / (levelCount + 1) * i });
          } else {
            points.push({ y: -h / 2 + radius, x: -w / 2 + w / (levelCount + 1) * i });
          }
          if (i === levelCount) {
            points.push({ y: h / 2 - radius - (h - radius * 2) * (1 - endLocation), x: -w / 2 + w / (levelCount + 1) * i });
          } else {
            points.push({ y: h / 2 - 2 * radius, x: -w / 2 + w / (levelCount + 1) * i });
          }
          let centerPoint = { y: h / 2 - 2 * radius, x: -w / 2 + w / (levelCount + 1) * (i + 0.5) };
          if (i < levelCount) {
            for (let i2 = 1; i2 < 50; i2++) {
              let angle = -90 + i2 / 50 * 180;
              points.push({ y: centerPoint.y + radius * cos(angle), x: centerPoint.x + radius * sin(angle) });
            }
          }
        } else {
          points.push({ y: h / 2 - 2 * radius, x: -w / 2 + w / (levelCount + 1) * i });
          if (i === levelCount) {
            points.push({ y: -h / 2 + (h - radius * 2) * (1 - endLocation), x: -w / 2 + w / (levelCount + 1) * i });
          } else {
            points.push({ y: -h / 2 + radius, x: -w / 2 + w / (levelCount + 1) * i });
          }
          let centerPoint = { y: -h / 2 + radius, x: -w / 2 + w / (levelCount + 1) * (i + 0.5) };
          if (i < levelCount) {
            for (let i2 = 1; i2 < 50; i2++) {
              let angle = -90 - i2 / 50 * 180;
              points.push({ y: centerPoint.y + radius * cos(angle), x: centerPoint.x + radius * sin(angle) });
            }
          }
        }
      }
    }
    this.yAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer.set("axisLength", relativeToValue(this.get("yAxisRadius", p50), 2 * radius));
      axis.markDirtySize();
    });
    this.xAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer.setPrivate("autoScale", false);
      renderer.set("points", points);
    });
    super._updateMasks();
  }
};
Object.defineProperty(SerpentineChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SerpentineChart"
});
Object.defineProperty(SerpentineChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: CurveChart.classNames.concat([SerpentineChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/SpiralChart.js
var SpiralChart = class extends CurveChart {
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("levelCount")) {
      this._updateMasks();
    }
  }
  _updateMasks() {
    let w = this.plotContainer.innerWidth();
    let h = this.plotContainer.innerHeight();
    let radius = Math.min(w, h) / 2;
    let innerRadius = relativeToValue(this.get("innerRadius", 0), radius);
    let radiusStep = (radius - innerRadius) / this.get("levelCount", 1);
    let yAxisRadius = relativeToValue(this.get("yAxisRadius", p50), radiusStep);
    const points = spiralPoints(0, 0, radius, radius, innerRadius, 20, radiusStep, this.get("startAngle", 0), this.get("endAngle", 360));
    this.yAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer.set("axisLength", yAxisRadius);
      axis.markDirtySize();
    });
    this.xAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer.setPrivate("autoScale", false);
      renderer.set("points", points);
    });
    super._updateMasks();
  }
};
Object.defineProperty(SpiralChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SpiralChart"
});
Object.defineProperty(SpiralChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: CurveChart.classNames.concat([SpiralChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/CurveColumnSeries.js
var CurveColumnSeries = class extends BaseColumnSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Polygon._new(this._root, {
        position: "absolute",
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["curve", "series", "column"])
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
  _afterNew() {
    super._afterNew();
    this.set("maskContent", false);
    this.bulletsContainer.set("maskContent", false);
    this.bulletsContainer.set("mask", Graphics.new(this._root, {}));
  }
  /**
   * @ignore
   */
  getPoint(positionX, positionY) {
    const xAxis = this.get("xAxis");
    const rendererX = xAxis.get("renderer");
    return rendererX.positionToPoint(positionX, positionY);
  }
  _updateSeriesGraphics(dataItem, graphics, l, r, t, b) {
    graphics.setPrivate("visible", true);
    dataItem.setRaw("left", l);
    dataItem.setRaw("right", r);
    dataItem.setRaw("top", t);
    dataItem.setRaw("bottom", b);
    const xAxis = this.get("xAxis");
    const rendererX = xAxis.get("renderer");
    const yAxis = this.get("yAxis");
    const start = yAxis.get("start", 0);
    const end = yAxis.get("end", 1);
    t = fitToRange(t, start, end);
    b = fitToRange(b, start, end);
    const points = rendererX.getPoints(l, t, r, b);
    const polygon = graphics;
    polygon.set("points", points);
  }
  _shouldInclude(position) {
    const xAxis = this.get("xAxis");
    if (position < xAxis.get("start", 0) || position > xAxis.get("end", 1)) {
      return false;
    }
    return true;
  }
  _shouldShowBullet(positionX, _positionY) {
    const xAxis = this.get("xAxis");
    if (positionX < xAxis.get("start", 0) || positionX > xAxis.get("end", 1)) {
      return false;
    }
    return this._showBullets;
  }
  _positionBullet(bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const diLocationX = dataItem.get("locationX", 0.5);
      const diLocationY = dataItem.get("locationY", 0.5);
      const locationX = bullet.get("locationX", diLocationX);
      const locationY = bullet.get("locationY", diLocationY);
      const series = dataItem.component;
      const xAxis = series.get("xAxis");
      const yAxis = series.get("yAxis");
      let positionX = 0;
      let vcx = series.get("vcx", 1);
      let vcy = series.get("vcy", 1);
      if (this.get("openValueXField")) {
        const p0 = xAxis.getDataItemPositionX(dataItem, series._xOpenField, diLocationX, vcx);
        const p1 = xAxis.getDataItemPositionX(dataItem, series._xField, diLocationX, vcx);
        positionX = p0 + (p1 - p0) * locationX;
      } else {
        positionX = xAxis.getDataItemPositionX(dataItem, series._xField, locationX, vcx);
      }
      let positionY = 0;
      if (this.get("openValueYField")) {
        const p0 = yAxis.getDataItemPositionY(dataItem, series._yOpenField, diLocationY, vcy);
        const p1 = yAxis.getDataItemPositionY(dataItem, series._yField, diLocationY, vcy);
        positionY = p0 + (p1 - p0) * locationY;
      } else {
        positionY = yAxis.getDataItemPositionY(dataItem, series._yField, locationY, vcy);
      }
      if (series._shouldShowBullet(positionX, positionY)) {
        sprite.setPrivate("visible", true);
        const point = series.getPoint(positionX, positionY);
        sprite.setAll({
          x: point.x,
          y: point.y
        });
      } else {
        sprite.setPrivate("visible", false);
      }
    }
  }
  _handleMaskBullets() {
  }
  _updateChildren() {
    super._updateChildren();
    if (!this.get("maskBullets")) {
      this.bulletsContainer.remove("mask");
    }
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => Polygon._new(this._root, {
      position: "absolute",
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["curves", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(CurveColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CurveColumnSeries"
});
Object.defineProperty(CurveColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: BaseColumnSeries.classNames.concat([CurveColumnSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/CurveLineSeries.js
var CurveLineSeries = class extends LineSeries {
  _afterNew() {
    super._afterNew();
    this.set("maskContent", false);
    this.bulletsContainer.set("maskContent", false);
    this.bulletsContainer.set("mask", Graphics.new(this._root, {}));
  }
  _handleMaskBullets() {
  }
  _updateChildren() {
    super._updateChildren();
    if (!this.get("maskBullets")) {
      this.bulletsContainer.remove("mask");
    }
  }
  getPoint(positionX, positionY) {
    const xRenderer = this.get("xAxis").get("renderer");
    return xRenderer.positionToPoint(positionX, positionY);
  }
  _shouldInclude(position) {
    const xAxis = this.get("xAxis");
    if (position < xAxis.get("start", 0) || position > xAxis.get("end", 1)) {
      return false;
    }
    return true;
  }
  _shouldShowBullet(positionX, _positionY) {
    const xAxis = this.get("xAxis");
    if (positionX < xAxis.get("start", 0) || positionX > xAxis.get("end", 1)) {
      return false;
    }
    return this._showBullets;
  }
  _positionBullet(bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const diLocationX = dataItem.get("locationX", 0.5);
      const diLocationY = dataItem.get("locationY", 0.5);
      const locationX = bullet.get("locationX", diLocationX);
      const locationY = bullet.get("locationY", diLocationY);
      const series = dataItem.component;
      const xAxis = series.get("xAxis");
      const yAxis = series.get("yAxis");
      let positionX = 0;
      let vcx = series.get("vcx", 1);
      let vcy = series.get("vcy", 1);
      if (this.get("openValueXField")) {
        const p0 = xAxis.getDataItemPositionX(dataItem, series._xOpenField, diLocationX, vcx);
        const p1 = xAxis.getDataItemPositionX(dataItem, series._xField, diLocationX, vcx);
        positionX = p0 + (p1 - p0) * locationX;
      } else {
        positionX = xAxis.getDataItemPositionX(dataItem, series._xField, locationX, vcx);
      }
      let positionY = 0;
      if (this.get("openValueYField")) {
        const p0 = yAxis.getDataItemPositionY(dataItem, series._yOpenField, diLocationY, vcy);
        const p1 = yAxis.getDataItemPositionY(dataItem, series._yField, diLocationY, vcy);
        positionY = p0 + (p1 - p0) * locationY;
      } else {
        positionY = yAxis.getDataItemPositionY(dataItem, series._yField, locationY, vcy);
      }
      if (series._shouldShowBullet(positionX, positionY)) {
        sprite.setPrivate("visible", true);
        const point = series.getPoint(positionX, positionY);
        sprite.setAll({
          x: point.x,
          y: point.y
        });
      } else {
        sprite.setPrivate("visible", false);
      }
    }
  }
};
Object.defineProperty(CurveLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CurveLineSeries"
});
Object.defineProperty(CurveLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([CurveLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/timeline/CurveCursor.js
var CurveCursor = class extends XYCursor {
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["curve", "cursor"]);
    super._afterNew();
  }
  _handleXLine() {
  }
  _handleYLine() {
  }
  _getPosition(point) {
    const xRenderer = this.get("xAxis").get("renderer");
    return xRenderer.pointToPosition(point);
  }
  _getPoint(positionX, positionY) {
    const xRenderer = this.get("xAxis").get("renderer");
    return xRenderer.positionToPoint(positionX, positionY);
  }
  /**
   * @ignore
   */
  updateLayout() {
  }
  _updateLines(x, y) {
    if (!this._tooltipX) {
      this._drawXLine(x, y);
    }
    if (!this._tooltipY) {
      this._drawYLine(x, y);
    }
  }
  _drawXLine(_x, _y) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const renderer = xAxis.get("renderer");
    const position = renderer.toAxisPosition(this.getPrivate("positionX", 0));
    const p0 = renderer.positionToPoint(position, yAxis.get("start", 0));
    const p1 = renderer.positionToPoint(position, yAxis.get("end", 1));
    this.lineX.set("draw", (display) => {
      display.moveTo(p0.x, p0.y);
      display.lineTo(p1.x, p1.y);
    });
  }
  _drawYLine(_x, _y) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const renderer = yAxis.get("renderer");
    const position = renderer.toAxisPosition(this.getPrivate("positionY", 0));
    const points = renderer.getPoints(xAxis.get("start", 0), position, xAxis.get("end", 1), position);
    if (points) {
      if (position > yAxis.get("start", 0) && position < yAxis.get("end", 1)) {
        this.lineY.set("draw", (display) => {
          if (points.length > 0) {
            display.moveTo(points[0].x, points[0].y);
            each(points, (point) => {
              display.lineTo(point.x, point.y);
            });
          }
        });
      } else {
        this.lineY.set("draw", (display) => {
          display.clear();
        });
      }
    }
  }
  _updateXLine(tooltip) {
    let point = tooltip.get("pointTo");
    if (point) {
      this._drawXLine(point.x, point.y);
    }
  }
  _updateYLine(tooltip) {
    let point = tooltip.get("pointTo");
    if (point) {
      this._drawYLine(point.x, point.y);
    }
  }
  _inPlot() {
    const chart = this.chart;
    if (chart) {
    }
    return true;
  }
  _updateSelection() {
    this.selection.set("draw", (display) => {
      const behavior = this.get("behavior");
      let xAxis = this.get("xAxis");
      let yAxis = this.get("yAxis");
      let downPositionX = xAxis.toAxisPosition(this.getPrivate("downPositionX", 0));
      let downPositionY = yAxis.toAxisPosition(this.getPrivate("downPositionY", 0));
      let positionX = xAxis.toAxisPosition(this.getPrivate("positionX", 0));
      let positionY = yAxis.toAxisPosition(this.getPrivate("positionY", 0));
      if (behavior == "zoomX" || behavior == "selectX") {
        downPositionY = yAxis.get("start", 0);
        positionY = yAxis.get("end", 1);
      } else if (behavior == "zoomY" || behavior == "selectY") {
        downPositionX = xAxis.get("start", 0);
        positionX = xAxis.get("end", 1);
      }
      const points = xAxis.get("renderer").getPoints(downPositionX, downPositionY, positionX, positionY);
      display.moveTo(points[0].x, points[0].y);
      each(points, (point) => {
        display.lineTo(point.x, point.y);
      });
      display.closePath();
    });
  }
};
Object.defineProperty(CurveCursor, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CurveCursor"
});
Object.defineProperty(CurveCursor, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYCursor.classNames.concat([CurveCursor.className])
});
export {
  AxisRendererCurveX,
  AxisRendererCurveY,
  CurveChart,
  CurveColumnSeries,
  CurveCursor,
  CurveLineSeries,
  CurveDefaultTheme as DefaultTheme,
  SerpentineChart,
  SpiralChart
};
//# sourceMappingURL=timeline-3NXMQMXV.js.map
