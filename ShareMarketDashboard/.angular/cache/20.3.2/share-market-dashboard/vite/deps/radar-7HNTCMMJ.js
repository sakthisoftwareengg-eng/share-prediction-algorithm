import {
  Slice
} from "./chunk-HNJ7BFJ7.js";
import {
  AxisLabelRadial
} from "./chunk-ODL3CSH7.js";
import {
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
  arc_default,
  cardinalClosed_default,
  cardinal_default
} from "./chunk-TSCKTQIQ.js";
import "./chunk-E32SSC6Z.js";
import "./chunk-AVJ6LU7H.js";
import "./chunk-JFXPNH7X.js";
import "./chunk-CRL5FSBR.js";
import {
  setColor
} from "./chunk-XOW4XAJF.js";
import "./chunk-D7RPQL45.js";
import {
  Container,
  DEGREES,
  Graphics,
  ListTemplate,
  Percent,
  RADIANS,
  cos,
  fitAngleToRange,
  fitToRange,
  getArcBounds,
  mergeBounds,
  mergeTags,
  normalizeAngle,
  p100,
  p50,
  percent,
  relativeToValue,
  sin
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  isNumber
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/radar/AxisRendererCircular.js
var AxisRendererCircular = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisLabelRadial._new(this._root, {
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
    Object.defineProperty(this, "_fillGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arc_default()
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "circular"]);
    super._afterNew();
    this.setPrivateRaw("letter", "X");
    this.setRaw("position", "absolute");
  }
  _changed() {
    super._changed();
    if (this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle")) {
      this.updateLayout();
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
  updateLayout() {
    const chart = this.chart;
    if (chart) {
      const radius = chart.getPrivate("radius", 0);
      let r = relativeToValue(this.get("radius", p100), radius);
      if (r < 0) {
        r = radius + r;
      }
      this.setPrivate("radius", r);
      let ir = relativeToValue(this.get("innerRadius", chart.getPrivate("innerRadius", 0)), radius) * chart.getPrivate("irModifyer", 1);
      if (ir < 0) {
        ir = r + ir;
      }
      this.setPrivate("innerRadius", ir);
      let startAngle = this.get("startAngle", chart.get("startAngle", -90));
      let endAngle = this.get("endAngle", chart.get("endAngle", 270));
      this.setPrivate("startAngle", startAngle);
      this.setPrivate("endAngle", endAngle);
      this.set("draw", (display) => {
        const p0 = this.positionToPoint(0);
        display.moveTo(p0.x, p0.y);
        if (startAngle > endAngle) {
          [startAngle, endAngle] = [endAngle, startAngle];
        }
        display.arc(0, 0, r, startAngle * RADIANS, endAngle * RADIANS);
      });
      this.axis.markDirtySize();
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
      let radius = this.getPrivate("radius", 0);
      let innerRadius = this.getPrivate("innerRadius", 0);
      let angle = this.positionToAngle(position);
      this.toggleVisibility(grid, position, 0, 1);
      if (radius != null) {
        grid.set("draw", (display) => {
          display.moveTo(innerRadius * cos(angle), innerRadius * sin(angle));
          display.lineTo(radius * cos(angle), radius * sin(angle));
        });
      }
    }
  }
  /**
   * Converts relative position to angle.
   *
   * @param   position  Position
   * @return            Angle
   */
  positionToAngle(position) {
    const axis = this.axis;
    const startAngle = this.getPrivate("startAngle", 0);
    const endAngle = this.getPrivate("endAngle", 360);
    const start = axis.get("start", 0);
    const end = axis.get("end", 1);
    let arc = (endAngle - startAngle) / (end - start);
    let angle;
    if (this.get("inversed")) {
      angle = startAngle + (end - position) * arc;
    } else {
      angle = startAngle + (position - start) * arc;
    }
    return angle;
  }
  // do not delete
  _handleOpposite() {
  }
  /**
   * Converts relative position to an X/Y coordinate.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    const radius = this.getPrivate("radius", 0);
    const angle = this.positionToAngle(position);
    return { x: radius * cos(angle), y: radius * sin(angle) };
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
      const radius = this.getPrivate("radius", 0);
      const innerRadius = this.getPrivate("innerRadius", 0);
      const angle = this.positionToAngle(position);
      label.setPrivate("radius", radius);
      label.setPrivate("innerRadius", innerRadius);
      label.set("labelAngle", angle);
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  fillDrawMethod(fill, startAngle, endAngle) {
    fill.set("draw", (display) => {
      if (startAngle == null) {
        startAngle = this.getPrivate("startAngle", 0);
      }
      if (endAngle == null) {
        endAngle = this.getPrivate("endAngle", 0);
      }
      const y0 = this.getPrivate("innerRadius", 0);
      const y1 = this.getPrivate("radius", 0);
      this._fillGenerator.context(display);
      this._fillGenerator({ innerRadius: y0, outerRadius: y1, startAngle: (startAngle + 90) * RADIANS, endAngle: (endAngle + 90) * RADIANS });
    });
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
      let radius = this.getPrivate("radius", 0);
      let angle = this.positionToAngle(position);
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
      if (radius != null) {
        tick.set("draw", (display) => {
          display.moveTo(radius * cos(angle), radius * sin(angle));
          radius += length;
          display.lineTo(radius * cos(angle), radius * sin(angle));
        });
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
        if (position == null) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (endPosition != null && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let radius = this.getPrivate("radius", 0);
        let angle = this.positionToAngle(position);
        this.toggleVisibility(sprite, position, 0, 1);
        sprite.setAll({ rotation: angle, x: radius * cos(angle), y: radius * sin(angle) });
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
      let startAngle = this.fitAngle(this.positionToAngle(position));
      let endAngle = this.fitAngle(this.positionToAngle(endPosition));
      fill.setAll({ startAngle, arc: endAngle - startAngle });
      fill._setSoft("innerRadius", this.getPrivate("innerRadius"));
      fill._setSoft("radius", this.getPrivate("radius"));
    }
  }
  /**
   * @ignore
   */
  fitAngle(angle) {
    const startAngle = this.getPrivate("startAngle", 0);
    const endAngle = this.getPrivate("endAngle", 0);
    const minAngle = Math.min(startAngle, endAngle);
    const maxAngle = Math.max(startAngle, endAngle);
    if (angle < minAngle) {
      angle = minAngle;
    }
    if (angle > maxAngle) {
      angle = maxAngle;
    }
    return angle;
  }
  /**
   * Returns axis length in pixels.
   *
   * @return Length
   */
  axisLength() {
    return Math.abs(this.getPrivate("radius", 0) * Math.PI * 2 * (this.getPrivate("endAngle", 360) - this.getPrivate("startAngle", 0)) / 360);
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    let radius = this.getPrivate("radius", 0);
    const angle = this.positionToAngle(position);
    this._positionTooltip(tooltip, { x: radius * cos(angle), y: radius * sin(angle) });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(_tooltip) {
  }
};
Object.defineProperty(AxisRendererCircular, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererCircular"
});
Object.defineProperty(AxisRendererCircular, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererCircular.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/AxisRendererRadial.js
var AxisRendererRadial = class extends AxisRenderer {
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
    if (this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle")) {
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
      const radius = chart.getPrivate("radius", 0);
      let r = relativeToValue(this.get("radius", p100), radius);
      let ir = relativeToValue(this.get("innerRadius", chart.getPrivate("innerRadius", 0)), radius) * chart.getPrivate("irModifyer", 1);
      if (ir < 0) {
        ir = r + ir;
      }
      this.setPrivate("radius", r);
      this.setPrivate("innerRadius", ir);
      let startAngle = this.get("startAngle", chart.get("startAngle", -90));
      let endAngle = this.get("endAngle", chart.get("endAngle", 270));
      this.setPrivate("startAngle", startAngle);
      this.setPrivate("endAngle", endAngle);
      const axisAngle = this.get("axisAngle", 0);
      this.set("draw", (display) => {
        display.moveTo(ir * cos(axisAngle), ir * sin(axisAngle));
        display.lineTo(r * cos(axisAngle), r * sin(axisAngle));
      });
      this.axis.markDirtySize();
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
      let radius = this.positionToCoordinate(position) + this.getPrivate("innerRadius", 0);
      this.toggleVisibility(grid, position, 0, 1);
      if (isNumber(radius)) {
        grid.set("draw", (display) => {
          let startAngle = this.getPrivate("startAngle", 0) * RADIANS;
          let endAngle = this.getPrivate("endAngle", 0) * RADIANS;
          display.arc(0, 0, Math.max(0, radius), Math.min(startAngle, endAngle), Math.max(startAngle, endAngle));
        });
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
  positionToPoint(position) {
    const innerRadius = this.getPrivate("innerRadius", 0);
    const radius = this.positionToCoordinate(position) + innerRadius;
    const axisAngle = this.get("axisAngle", 0);
    return { x: radius * cos(axisAngle), y: radius * sin(axisAngle) };
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
      const point = this.positionToPoint(position);
      let radius = Math.hypot(point.x, point.y);
      label.setPrivate("radius", radius);
      label.setPrivate("innerRadius", radius);
      label.set("labelAngle", this.get("axisAngle"));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  fillDrawMethod(fill, y0, y1) {
    fill.set("draw", (display) => {
      y0 = Math.max(0, y0);
      y1 = Math.max(0, y1);
      this._fillGenerator.context(display);
      let startAngle = (this.getPrivate("startAngle", 0) + 90) * RADIANS;
      let endAngle = (this.getPrivate("endAngle", 0) + 90) * RADIANS;
      if (endAngle < startAngle) {
        [startAngle, endAngle] = [endAngle, startAngle];
      }
      this._fillGenerator({ innerRadius: y0, outerRadius: y1, startAngle, endAngle });
    });
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
      const point = this.positionToPoint(position);
      tick.set("x", point.x);
      tick.set("y", point.y);
      let length = tick.get("length", 0);
      const inside = tick.get("inside");
      if (inside) {
        length *= -1;
      }
      const axisAngle = this.get("axisAngle", 0) + 90;
      tick.set("draw", (display) => {
        display.moveTo(0, 0);
        display.lineTo(length * cos(axisAngle), length * sin(axisAngle));
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
        const point = this.positionToPoint(position);
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
      if (!isNumber(position)) {
        position = 0;
      }
      if (!isNumber(endPosition)) {
        endPosition = 1;
      }
      const innerRadius = this.getPrivate("innerRadius", 0);
      let y0 = this.positionToCoordinate(position) + innerRadius;
      let y1 = this.positionToCoordinate(endPosition) + innerRadius;
      this.fillDrawMethod(fill, y0, y1);
    }
  }
  /**
   * Returns axis length in pixels.
   *
   * @return Length
   */
  axisLength() {
    return this.getPrivate("radius", 0) - this.getPrivate("innerRadius", 0);
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
    let radius = this.getPrivate("innerRadius", 0) + this.positionToCoordinate(position);
    const angle = this.get("axisAngle", 0);
    this._positionTooltip(tooltip, { x: radius * cos(angle), y: radius * sin(angle) });
  }
};
Object.defineProperty(AxisRendererRadial, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererRadial"
});
Object.defineProperty(AxisRendererRadial, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererRadial.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/ClockHand.js
var ClockHand = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "hand", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Graphics.new(this._root, { themeTags: ["hand"] }))
    });
    Object.defineProperty(this, "pin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Graphics.new(this._root, { themeTags: ["pin"] }))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["clock"]);
    super._afterNew();
    this.set("width", percent(1));
    this.adapters.add("x", () => {
      return 0;
    });
    this.adapters.add("y", () => {
      return 0;
    });
    this.pin.set("draw", (display, graphics) => {
      const parent = graphics.parent;
      if (parent) {
        const dataItem = parent.dataItem;
        if (dataItem) {
          const axis = dataItem.component;
          if (axis) {
            const chart = axis.chart;
            if (chart) {
              const cr = chart.getPrivate("radius", 0);
              let r = relativeToValue(parent.get("pinRadius", 0), cr);
              if (r < 0) {
                r = cr + r;
              }
              display.moveTo(r, 0);
              display.arc(0, 0, r, 0, 360);
            }
          }
        }
      }
    });
    this.hand.set("draw", (display, graphics) => {
      const parent = graphics.parent;
      if (parent) {
        let bullet = parent.parent;
        if (bullet) {
          bullet.set("width", percent(1));
        }
        const dataItem = parent.dataItem;
        if (dataItem) {
          const axis = dataItem.component;
          if (axis) {
            const chart = axis.chart;
            if (chart) {
              const bw = parent.get("bottomWidth", 10) / 2;
              const tw = parent.get("topWidth", 0) / 2;
              const cr = chart.getPrivate("radius", 0);
              let r = relativeToValue(parent.get("radius", 0), cr);
              if (r < 0) {
                r = cr + r;
              }
              let ir = parent.get("innerRadius", 0);
              if (ir instanceof Percent) {
                ir = relativeToValue(ir, cr);
              } else {
                if (ir < 0) {
                  if (ir < 0) {
                    ir = r + ir;
                  }
                }
              }
              display.moveTo(ir, -bw);
              display.lineTo(r, -tw);
              display.lineTo(r, tw);
              display.lineTo(ir, bw);
              display.lineTo(ir, -bw);
            }
          }
        }
      }
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    this.hand._markDirtyKey("fill");
    this.pin._markDirtyKey("fill");
  }
};
Object.defineProperty(ClockHand, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ClockHand"
});
Object.defineProperty(ClockHand, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([ClockHand.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/RadarDefaultTheme.js
var RadarDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const r = this.rule.bind(this);
    const ic = this._root.interfaceColors;
    r("RadarChart").setAll({
      radius: percent(80),
      innerRadius: 0,
      startAngle: -90,
      endAngle: 270
    });
    r("RadarColumnSeries").setAll({
      clustered: true
    });
    r("Slice", ["radar", "column", "series"]).setAll({
      width: percent(80),
      height: percent(80)
    });
    r("RadarLineSeries").setAll({
      connectEnds: true
    });
    r("SmoothedRadarLineSeries").setAll({
      tension: 0.5
    });
    r("AxisRendererRadial").setAll({
      minGridDistance: 40,
      axisAngle: -90,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1
    });
    r("AxisRendererCircular").setAll({
      minGridDistance: 100,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1
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
    r("RadarChart", ["gauge"]).setAll({
      startAngle: 180,
      endAngle: 360,
      innerRadius: percent(90)
    });
    r("ClockHand").setAll({
      topWidth: 1,
      bottomWidth: 10,
      radius: percent(90),
      pinRadius: 10
    });
    {
      const rule = r("Graphics", ["clock", "hand"]);
      rule.setAll({
        fillOpacity: 1
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    {
      const rule = r("Graphics", ["clock", "pin"]);
      rule.setAll({
        fillOpacity: 1
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/radar/RadarChart.js
var RadarChart = class extends XYChart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "radarContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotContainer.children.push(Container.new(this._root, { x: p50, y: p50 }))
    });
    Object.defineProperty(this, "_arcGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arc_default()
    });
    Object.defineProperty(this, "_maxRadius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  _afterNew() {
    this._defaultThemes.push(RadarDefaultTheme.new(this._root));
    super._afterNew();
    const radarContainer = this.radarContainer;
    const gridContainer = this.gridContainer;
    const topGridContainer = this.topGridContainer;
    const seriesContainer = this.seriesContainer;
    const bulletsContainer = this.bulletsContainer;
    radarContainer.children.pushAll([gridContainer, seriesContainer, topGridContainer, bulletsContainer]);
    seriesContainer.set("mask", Graphics.new(this._root, {}));
    gridContainer.set("mask", Graphics.new(this._root, {}));
    this._disposers.push(this.plotContainer.events.on("boundschanged", () => {
      this._updateRadius();
    }));
  }
  _maskGrid() {
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this._sizeDirty || this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle")) {
      const chartContainer = this.chartContainer;
      const w = chartContainer.innerWidth();
      const h = chartContainer.innerHeight();
      const startAngle = this.get("startAngle", 0);
      const endAngle = this.get("endAngle", 0);
      const innerRadius = this.get("innerRadius");
      let bounds = getArcBounds(0, 0, startAngle, endAngle, 1);
      const wr = w / (bounds.right - bounds.left);
      const hr = h / (bounds.bottom - bounds.top);
      let innerBounds = { left: 0, right: 0, top: 0, bottom: 0 };
      if (innerRadius instanceof Percent) {
        let value = innerRadius.value;
        let mr = Math.min(wr, hr);
        value = Math.max(mr * value, mr - Math.min(h, w)) / mr;
        innerBounds = getArcBounds(0, 0, startAngle, endAngle, value);
        this.setPrivateRaw("irModifyer", value / innerRadius.value);
      }
      bounds = mergeBounds([bounds, innerBounds]);
      this._maxRadius = Math.max(0, Math.min(wr, hr));
      const radius = relativeToValue(this.get("radius", 0), this._maxRadius);
      this.radarContainer.setAll({
        dy: -radius * (bounds.bottom + bounds.top) / 2,
        dx: -radius * (bounds.right + bounds.left) / 2
      });
      this._updateRadius();
    }
  }
  _addCursor(cursor) {
    this.radarContainer.children.push(cursor);
  }
  // do not delete
  _updateRadius() {
    const radius = relativeToValue(this.get("radius", percent(80)), this._maxRadius);
    this.setPrivateRaw("radius", radius);
    let innerRadius = relativeToValue(this.get("innerRadius", 0), radius);
    if (innerRadius < 0) {
      innerRadius = radius + innerRadius;
    }
    this.setPrivateRaw("innerRadius", innerRadius);
    this.xAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer.updateLayout();
    });
    this.yAxes.each((axis) => {
      const renderer = axis.get("renderer");
      renderer.updateLayout();
    });
    this._updateMask(this.seriesContainer, innerRadius, radius);
    this._updateMask(this.gridContainer, innerRadius, radius);
    this.series.each((series) => {
      if (series.get("maskBullets")) {
        this._updateMask(series.bulletsContainer, innerRadius, radius);
      } else {
        series.bulletsContainer.remove("mask");
      }
    });
    const cursor = this.get("cursor");
    if (cursor) {
      cursor.updateLayout();
    }
  }
  /**
   * @ignore
   */
  _updateMask(container, innerRadius, radius) {
    const mask = container.get("mask");
    if (mask) {
      mask.set("draw", (display) => {
        this._arcGenerator.context(display);
        this._arcGenerator({ innerRadius, outerRadius: radius + 0.5, startAngle: (this.get("startAngle", 0) + 90) * RADIANS, endAngle: (this.get("endAngle", 0) + 90) * RADIANS });
      });
    }
  }
  /**
   * @ignore
   */
  processAxis(axis) {
    this.radarContainer.children.push(axis);
  }
  _processSeries(series) {
    super._processSeries(series);
    this._updateRadius();
  }
  /**
   * @ignore
   */
  inPlot(point, radius, innerRadius) {
    const r = Math.hypot(point.x, point.y);
    const angle = normalizeAngle(Math.atan2(point.y, point.x) * DEGREES);
    let startAngle = normalizeAngle(this.get("startAngle", 0));
    let endAngle = normalizeAngle(this.get("endAngle", 0));
    let inArc = false;
    if (startAngle < endAngle) {
      if (startAngle < angle && angle < endAngle) {
        inArc = true;
      }
    }
    if (startAngle > endAngle) {
      if (angle > startAngle) {
        inArc = true;
      }
      if (angle < endAngle) {
        inArc = true;
      }
    }
    if (startAngle == endAngle) {
      inArc = true;
    }
    if (!inArc) {
      return false;
    }
    if (radius == null) {
      radius = this.getPrivate("radius", 0);
    }
    if (innerRadius == null) {
      innerRadius = this.getPrivate("innerRadius", 0);
    }
    if (innerRadius > radius) {
      [innerRadius, radius] = [radius, innerRadius];
    }
    if (r <= radius + 0.5 && r >= innerRadius - 0.5) {
      return true;
    }
    return false;
  }
  _tooltipToLocal(point) {
    return this.radarContainer._display.toLocal(point);
  }
  _handlePinch() {
  }
};
Object.defineProperty(RadarChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadarChart"
});
Object.defineProperty(RadarChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYChart.classNames.concat([RadarChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/RadarColumnSeries.js
var RadarColumnSeries = class extends BaseColumnSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Slice._new(this._root, {
        position: "absolute",
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["radar", "series", "column"])
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
    const yAxis = this.get("yAxis");
    const xAxis = this.get("xAxis");
    const rendererY = xAxis.get("renderer");
    const radius = yAxis.get("renderer").positionToCoordinate(positionY) + rendererY.getPrivate("innerRadius", 0);
    const rendererX = xAxis.get("renderer");
    const angle = rendererX.positionToAngle(positionX);
    return { x: radius * cos(angle), y: radius * sin(angle) };
  }
  _updateSeriesGraphics(dataItem, graphics, l, r, t, b) {
    graphics.setPrivate("visible", true);
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const rendererX = xAxis.get("renderer");
    const rendererY = yAxis.get("renderer");
    const axisInnerRadius = rendererY.getPrivate("innerRadius", 0);
    const startAngle = rendererX.fitAngle(rendererX.positionToAngle(l));
    const endAngle = rendererX.fitAngle(rendererX.positionToAngle(r));
    let innerRadius = rendererY.positionToCoordinate(b) + axisInnerRadius;
    let radius = rendererY.positionToCoordinate(t) + axisInnerRadius;
    const slice = graphics;
    dataItem.setRaw("startAngle", startAngle);
    dataItem.setRaw("endAngle", endAngle);
    dataItem.setRaw("innerRadius", innerRadius);
    dataItem.setRaw("radius", radius);
    let axisStartAngle = 0;
    let axisEndAngle = 360;
    if (yAxis == this.get("baseAxis")) {
      axisStartAngle = rendererY.getPrivate("startAngle", 0);
      axisEndAngle = rendererY.getPrivate("endAngle", 360);
    } else {
      axisStartAngle = rendererX.getPrivate("startAngle", 0);
      axisEndAngle = rendererX.getPrivate("endAngle", 360);
    }
    if (axisStartAngle > axisEndAngle) {
      [axisStartAngle, axisEndAngle] = [axisEndAngle, axisStartAngle];
    }
    if (endAngle <= axisStartAngle || startAngle >= axisEndAngle || radius <= axisInnerRadius && innerRadius <= axisInnerRadius) {
      slice.setPrivate("visible", false);
    }
    slice.setAll({ innerRadius, radius, startAngle, arc: endAngle - startAngle });
  }
  _shouldInclude(position) {
    const xAxis = this.get("xAxis");
    if (position < xAxis.get("start") || position > xAxis.get("end")) {
      return false;
    }
    return true;
  }
  _shouldShowBullet(positionX, _positionY) {
    const xAxis = this.get("xAxis");
    if (positionX < xAxis.get("start") || positionX > xAxis.get("end")) {
      return false;
    }
    return this._showBullets;
  }
  _positionBullet(bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const locationX = bullet.get("locationX", dataItem.get("locationX", 0.5));
      const locationY = bullet.get("locationY", dataItem.get("locationY", 0.5));
      const series = dataItem.component;
      const xAxis = series.get("xAxis");
      const yAxis = series.get("yAxis");
      const positionX = xAxis.getDataItemPositionX(dataItem, series._xField, locationX, series.get("vcx", 1));
      const positionY = yAxis.getDataItemPositionY(dataItem, series._yField, locationY, series.get("vcy", 1));
      const startAngle = dataItem.get("startAngle", 0);
      const endAngle = dataItem.get("endAngle", 0);
      const radius = dataItem.get("radius", 0);
      const innerRadius = dataItem.get("innerRadius", 0);
      if (series._shouldShowBullet(positionX, positionY)) {
        sprite.setPrivate("visible", true);
        const angle = startAngle + (endAngle - startAngle) * locationX;
        const r = innerRadius + (radius - innerRadius) * locationY;
        sprite.set("x", cos(angle) * r);
        sprite.set("y", sin(angle) * r);
      } else {
        sprite.setPrivate("visible", false);
      }
    }
  }
  _handleMaskBullets() {
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => Slice._new(this._root, {
      position: "absolute",
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["radar", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(RadarColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadarColumnSeries"
});
Object.defineProperty(RadarColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: BaseColumnSeries.classNames.concat([RadarColumnSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/RadarCursor.js
var RadarCursor = class extends XYCursor {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_fillGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arc_default()
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["radar", "cursor"]);
    super._afterNew();
  }
  _handleXLine() {
  }
  _handleYLine() {
  }
  _getPosition(point) {
    const radius = Math.hypot(point.x, point.y);
    let angle = normalizeAngle(Math.atan2(point.y, point.x) * DEGREES);
    const innerRadius = this.getPrivate("innerRadius");
    let startAngle = normalizeAngle(this.getPrivate("startAngle"));
    let endAngle = normalizeAngle(this.getPrivate("endAngle"));
    if (endAngle < startAngle || endAngle == startAngle) {
      if (angle < startAngle) {
        angle += 360;
      }
      endAngle = endAngle + 360;
    }
    let xPos = (angle - startAngle) / (endAngle - startAngle);
    if (xPos < 0) {
      xPos = 1 + xPos;
    }
    if (xPos < 3e-3) {
      xPos = 0;
    }
    if (xPos > 0.997) {
      xPos = 1;
    }
    return { x: xPos, y: (radius - innerRadius) / (this.getPrivate("radius") - innerRadius) };
  }
  _getPoint(positionX, positionY) {
    const innerRadius = this.getPrivate("innerRadius");
    const startAngle = this.getPrivate("startAngle");
    const endAngle = this.getPrivate("endAngle");
    const radius = this.getPrivate("radius");
    const angle = startAngle + positionX * (endAngle - startAngle);
    const r = innerRadius + (radius - innerRadius) * positionY;
    return { x: r * cos(angle), y: r * sin(angle) };
  }
  /**
   * @ignore
   */
  updateLayout() {
    const chart = this.chart;
    if (chart) {
      const radius = chart.getPrivate("radius", 0);
      this.setPrivate("radius", relativeToValue(this.get("radius", p100), radius));
      let innerRadius = relativeToValue(this.get("innerRadius", chart.getPrivate("innerRadius", 0)), radius);
      if (innerRadius < 0) {
        innerRadius = radius + innerRadius;
      }
      this.setPrivate("innerRadius", innerRadius);
      let startAngle = this.get("startAngle", chart.get("startAngle", -90));
      let endAngle = this.get("endAngle", chart.get("endAngle", 270));
      this.setPrivate("startAngle", startAngle);
      this.setPrivate("endAngle", endAngle);
    }
  }
  _updateLines(x, y) {
    if (!this._tooltipX) {
      this._drawXLine(x, y);
    }
    if (!this._tooltipY) {
      this._drawYLine(x, y);
    }
  }
  _drawXLine(x, y) {
    const innerRadius = this.getPrivate("innerRadius");
    const radius = this.getPrivate("radius");
    const angle = Math.atan2(y, x);
    this.lineX.set("draw", (display) => {
      display.moveTo(innerRadius * Math.cos(angle), innerRadius * Math.sin(angle));
      display.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
    });
  }
  _drawYLine(x, y) {
    const positionRadius = Math.hypot(x, y);
    this.lineY.set("draw", (display) => {
      display.arc(0, 0, positionRadius, this.getPrivate("startAngle", 0) * RADIANS, this.getPrivate("endAngle", 0) * RADIANS);
    });
  }
  _updateXLine(tooltip) {
    let point = tooltip.get("pointTo");
    if (point) {
      point = this._display.toLocal(point);
      this._drawXLine(point.x, point.y);
    }
  }
  _updateYLine(tooltip) {
    let point = tooltip.get("pointTo");
    if (point) {
      point = this._display.toLocal(point);
      this._drawYLine(point.x, point.y);
    }
  }
  _inPlot(point) {
    const chart = this.chart;
    if (chart) {
      return chart.inPlot(point, this.getPrivate("radius"), this.getPrivate("innerRadius"));
    }
    return false;
  }
  _updateSelection(point) {
    this.selection.set("draw", (display) => {
      const behavior = this.get("behavior");
      const downPoint = this._downPoint;
      const cursorStartAngle = this.getPrivate("startAngle");
      const cursorEndAngle = this.getPrivate("endAngle");
      let cursorRadius = this.getPrivate("radius");
      let cursorInnerRadius = this.getPrivate("innerRadius");
      if (cursorRadius < cursorInnerRadius) {
        [cursorRadius, cursorInnerRadius] = [cursorInnerRadius, cursorRadius];
      }
      let startAngle = cursorStartAngle;
      let endAngle = cursorEndAngle;
      let radius = cursorRadius;
      let innerRadius = cursorInnerRadius;
      if (downPoint) {
        if (behavior == "zoomXY" || behavior == "selectXY") {
          startAngle = Math.atan2(downPoint.y, downPoint.x) * DEGREES;
          endAngle = Math.atan2(point.y, point.x) * DEGREES;
          innerRadius = Math.hypot(downPoint.x, downPoint.y);
          radius = Math.hypot(point.x, point.y);
        } else if (behavior == "zoomX" || behavior == "selectX") {
          startAngle = Math.atan2(downPoint.y, downPoint.x) * DEGREES;
          endAngle = Math.atan2(point.y, point.x) * DEGREES;
        } else if (behavior == "zoomY" || behavior == "selectY") {
          innerRadius = Math.hypot(downPoint.x, downPoint.y);
          radius = Math.hypot(point.x, point.y);
        }
      }
      innerRadius = fitToRange(innerRadius, cursorInnerRadius, cursorRadius);
      radius = fitToRange(radius, cursorInnerRadius, cursorRadius);
      startAngle = fitAngleToRange(startAngle, cursorStartAngle, cursorEndAngle);
      endAngle = fitAngleToRange(endAngle, cursorStartAngle, cursorEndAngle);
      if (startAngle == endAngle) {
        endAngle = startAngle + 360;
      }
      startAngle *= RADIANS;
      endAngle *= RADIANS;
      this._fillGenerator.context(display);
      this._fillGenerator({ innerRadius, outerRadius: radius, startAngle: startAngle + Math.PI / 2, endAngle: endAngle + Math.PI / 2 });
    });
  }
};
Object.defineProperty(RadarCursor, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadarCursor"
});
Object.defineProperty(RadarCursor, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYCursor.classNames.concat([RadarCursor.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/RadarLineSeries.js
var RadarLineSeries = class extends LineSeries {
  _afterNew() {
    super._afterNew();
    this.set("maskContent", false);
    this.bulletsContainer.set("maskContent", false);
    this.bulletsContainer.set("mask", Graphics.new(this._root, {}));
  }
  _handleMaskBullets() {
  }
  getPoint(positionX, positionY) {
    const yAxis = this.get("yAxis");
    const xAxis = this.get("xAxis");
    const rendererY = yAxis.get("renderer");
    const radius = rendererY.positionToCoordinate(positionY) + rendererY.getPrivate("innerRadius", 0);
    const rendererX = xAxis.get("renderer");
    const angle = rendererX.positionToAngle(positionX);
    return { x: radius * cos(angle), y: radius * sin(angle) };
  }
  _endLine(points, firstPoint) {
    if (this.get("connectEnds") && firstPoint) {
      points.push(firstPoint);
    }
  }
  _shouldInclude(position) {
    const xAxis = this.get("xAxis");
    if (position < xAxis.get("start") || position > xAxis.get("end")) {
      return false;
    }
    return true;
  }
  _shouldShowBullet(positionX, _positionY) {
    const xAxis = this.get("xAxis");
    if (positionX < xAxis.get("start") || positionX > xAxis.get("end")) {
      return false;
    }
    return this._showBullets;
  }
  _positionBullet(bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      let dataItem = sprite.dataItem;
      let locationX = bullet.get("locationX", dataItem.get("locationX", 0.5));
      let locationY = bullet.get("locationY", dataItem.get("locationY", 0.5));
      let xAxis = this.get("xAxis");
      let yAxis = this.get("yAxis");
      const positionX = xAxis.getDataItemPositionX(dataItem, this._xField, locationX, this.get("vcx", 1));
      const positionY = yAxis.getDataItemPositionY(dataItem, this._yField, locationY, this.get("vcy", 1));
      let point = this.getPoint(positionX, positionY);
      if (this._shouldShowBullet(positionX, positionY)) {
        sprite.setPrivate("visible", true);
        sprite.set("x", point.x);
        sprite.set("y", point.y);
      } else {
        sprite.setPrivate("visible", false);
      }
    }
  }
};
Object.defineProperty(RadarLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadarLineSeries"
});
Object.defineProperty(RadarLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([RadarLineSeries.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/radar/SmoothedRadarLineSeries.js
var SmoothedRadarLineSeries = class extends RadarLineSeries {
  _afterNew() {
    this._setDefault("curveFactory", cardinalClosed_default.tension(this.get("tension", 0)));
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("connectEnds")) {
      const connectEnds = this.get("connectEnds");
      if (connectEnds) {
        this.setRaw("curveFactory", cardinalClosed_default.tension(this.get("tension", 0)));
      } else {
        this.setRaw("curveFactory", cardinal_default.tension(this.get("tension", 0)));
      }
    }
    if (this.isDirty("tension")) {
      let cf = this.get("curveFactory");
      if (cf) {
        cf.tension(this.get("tension", 0));
      }
    }
  }
  _endLine(_points, _firstPoint) {
  }
};
Object.defineProperty(SmoothedRadarLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedRadarLineSeries"
});
Object.defineProperty(SmoothedRadarLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: RadarLineSeries.classNames.concat([SmoothedRadarLineSeries.className])
});
export {
  AxisRendererCircular,
  AxisRendererRadial,
  ClockHand,
  RadarDefaultTheme as DefaultTheme,
  RadarChart,
  RadarColumnSeries,
  RadarCursor,
  RadarLineSeries,
  SmoothedRadarLineSeries
};
//# sourceMappingURL=radar-7HNTCMMJ.js.map
