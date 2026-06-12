import {
  Polygon
} from "./chunk-CNNUHZ4L.js";
import {
  ZoomTools,
  ZoomableContainer
} from "./chunk-S76G7XEF.js";
import {
  CanvasLayer,
  CanvasRenderer,
  DateFormatter,
  DurationFormatter,
  InterfaceColors,
  NumberFormatter,
  Picture,
  Root,
  Timezone
} from "./chunk-GBX7MQMT.js";
import {
  Gradient,
  LinearGradient
} from "./chunk-BYMJBLOE.js";
import {
  Slice
} from "./chunk-HNJ7BFJ7.js";
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
  Scrollbar
} from "./chunk-33HAZN3H.js";
import {
  RadialLabel,
  RadialText
} from "./chunk-AHDXI7TZ.js";
import {
  Line,
  Tick
} from "./chunk-XATEH3WK.js";
import {
  Chart,
  SerialChart
} from "./chunk-NAZ7YOFP.js";
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
  Series,
  Time_exports
} from "./chunk-JFXPNH7X.js";
import {
  Component,
  DataItem,
  JsonData,
  ListData
} from "./chunk-CRL5FSBR.js";
import "./chunk-XOW4XAJF.js";
import {
  Label,
  Text
} from "./chunk-D7RPQL45.js";
import {
  BlendMode,
  Color,
  Container,
  Ease_exports,
  Entity,
  Graphics,
  GridLayout,
  HorizontalLayout,
  Layout,
  ListTemplate,
  Math_exports,
  Pattern,
  Percent,
  PicturePattern,
  Rectangle,
  Sprite,
  TextFormatter,
  Utils_exports,
  VerticalLayout,
  addLicense,
  color,
  cos,
  disposeAllRootElements,
  getRootById,
  mergeTags,
  p0,
  p100,
  p50,
  percent,
  ready,
  registry,
  relativeToValue,
  sin
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  ArrayDisposer,
  Array_exports,
  CounterDisposer,
  Disposer,
  MultiDisposer,
  MutableValueDisposer,
  Object_exports,
  Template,
  Type_exports,
  each,
  each2,
  isArray,
  isNumber,
  isObject,
  isString,
  toNumber
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import {
  __export
} from "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Star.js
var Star = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("spikes")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const display = this._display;
      const r = this.get("radius", 0);
      const ir = relativeToValue(this.get("innerRadius", 0), r);
      const spikes = this.get("spikes", 0);
      const step = Math.PI / spikes;
      let angle = Math.PI / 2 * 3;
      display.moveTo(0, -r);
      for (let i = 0; i < spikes; i++) {
        display.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        angle += step;
        display.lineTo(Math.cos(angle) * ir, Math.sin(angle) * ir);
        angle += step;
      }
      display.lineTo(0, -r);
      display.closePath();
    }
  }
};
Object.defineProperty(Star, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Star"
});
Object.defineProperty(Star, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Star.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/HeatLegend.js
var HeatLegend = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labelContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "markerContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "startLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.labelContainer.children.push(Label.new(this._root, { themeTags: ["start"] }))
    });
    Object.defineProperty(this, "endLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.labelContainer.children.push(Label.new(this._root, { themeTags: ["end"] }))
    });
    Object.defineProperty(this, "markers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        themeTags: mergeTags(this.markers.template.get("themeTags", []), [this.get("orientation"), "heatlegend", "marker"])
      }, [this.markers.template])))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["heatlegend", this._settings.orientation]);
    super._afterNew();
    this.set("tooltip", Tooltip.new(this._root, {
      themeTags: ["heatlegend"]
    }));
  }
  /**
   * @ignore
   */
  makeMarker() {
    const marker = this.markers.make();
    marker.states.create("disabled", {});
    return marker;
  }
  /**
   * Moves and shows tooltip at specific value.
   *
   * Can also specify optional text to show in tooltip, as well as the color.
   *
   * @param  value  Value
   * @param  text   Text
   * @param  color  Color
   */
  showValue(value, text, color2) {
    const tooltip = this.getTooltip();
    if (tooltip && isNumber(value)) {
      const startValue = this.get("startValue", 0);
      const endValue = this.get("endValue", 1);
      let c = (value - startValue) / (endValue - startValue);
      if (c == Infinity || c == -Infinity || isNaN(c)) {
        c = 0.5;
      }
      const startColor = this.get("startColor");
      const endColor = this.get("endColor");
      if (!text) {
        text = this.getNumberFormatter().format(value);
      }
      if (!color2) {
        color2 = Color.interpolate(c, startColor, endColor);
      }
      tooltip.label.set("text", text);
      let p;
      if (this.get("orientation") == "vertical") {
        p = this.markerContainer.toGlobal({ x: 0, y: this.innerHeight() * (1 - c) });
      } else {
        p = this.markerContainer.toGlobal({ x: this.innerWidth() * c, y: 0 });
      }
      let background = tooltip.get("background");
      if (background) {
        background.set("fill", color2);
      }
      tooltip.set("pointTo", p);
      tooltip.show();
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    const labelContainer = this.labelContainer;
    const orientation = this.get("orientation");
    const startLabel = this.startLabel;
    const endLabel = this.endLabel;
    const tooltip = this.getTooltip();
    if (this.isDirty("orientation")) {
      if (orientation == "vertical") {
        this.markerContainer.setAll({ layout: this._root.verticalLayout, height: p100 });
        this.set("layout", this._root.horizontalLayout);
        startLabel.setAll({ y: p100, x: void 0, centerY: p100, centerX: p100 });
        endLabel.setAll({ y: 0, x: void 0, centerY: 0, centerX: p100 });
        labelContainer.setAll({ height: p100, width: void 0 });
        if (tooltip) {
          tooltip.set("pointerOrientation", "horizontal");
        }
      } else {
        this.markerContainer.setAll({ layout: this._root.horizontalLayout, width: p100 });
        this.set("layout", this._root.verticalLayout);
        startLabel.setAll({ x: 0, y: void 0, centerX: 0, centerY: 0 });
        endLabel.setAll({ x: p100, y: void 0, centerX: p100, centerY: 0 });
        labelContainer.setAll({ width: p100, height: void 0 });
        if (tooltip) {
          tooltip.set("pointerOrientation", "vertical");
        }
      }
    }
    if (this.isDirty("stepCount")) {
      const stepCount = this.get("stepCount", 1);
      const startColor = this.get("startColor");
      const endColor = this.get("endColor");
      this.markerContainer.children.clear();
      if (stepCount > 1) {
        for (let i = 0; i < stepCount; i++) {
          const marker = this.makeMarker();
          if (orientation == "vertical") {
            this.markerContainer.children.moveValue(marker, 0);
          } else {
            this.markerContainer.children.push(marker);
          }
          if (startColor && endColor) {
            marker.set("fill", Color.interpolate(i / stepCount, startColor, endColor));
          }
        }
      } else if (stepCount == 1) {
        const marker = this.makeMarker();
        this.markerContainer.children.push(marker);
        const gradient = LinearGradient.new(this._root, { stops: [{ color: startColor }, { color: endColor }] });
        if (orientation == "vertical") {
          gradient.set("rotation", 90);
          let stops = gradient.get("stops");
          if (stops) {
            stops.reverse();
          }
        } else {
          gradient.set("rotation", 0);
        }
        if (startColor && endColor) {
          marker.set("fillGradient", gradient);
        }
      }
    }
    if (this.isDirty("startText") || this.isDirty("startValue")) {
      startLabel.set("text", this.get("startText", this.getNumberFormatter().format(this.get("startValue", 0))));
    }
    if (this.isDirty("endText") || this.isDirty("endValue")) {
      endLabel.set("text", this.get("endText", this.getNumberFormatter().format(this.get("endValue", 1))));
    }
  }
};
Object.defineProperty(HeatLegend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HeatLegend"
});
Object.defineProperty(HeatLegend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([HeatLegend.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Slider.js
var Slider = class extends Scrollbar {
  _afterNew() {
    this._addOrientationClass();
    super._afterNew();
    this.endGrip.setPrivate("visible", false);
    this.thumb.setPrivate("visible", false);
  }
  /**
   * @ignore
   */
  updateGrips() {
    super.updateGrips();
    const startGrip = this.startGrip;
    this.endGrip.setAll({ x: startGrip.x(), y: startGrip.y() });
    this.setRaw("end", this.get("start"));
  }
};
Object.defineProperty(Slider, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Slider"
});
Object.defineProperty(Slider, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Scrollbar.classNames.concat([Slider.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/GrainPattern.js
var GrainPattern = class extends Pattern {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "canvas", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("canvas")
    });
    Object.defineProperty(this, "context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.canvas.getContext("2d")
    });
    Object.defineProperty(this, "_clearGrain", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _beforeChanged() {
    this.canvas.width = this.get("width", 200);
    this.canvas.height = this.get("height", 200);
    if (this.isDirty("size") || this.isDirty("density") || this.isDirty("minOpacity") || this.isDirty("maxOpacity") || this.isDirty("colors") || this.isDirty("horizontalGap") || this.isDirty("verticalGap")) {
      this._clearGrain = true;
    }
    super._beforeChanged();
  }
  _changed() {
    super._changed();
    if (this._clearGrain) {
      const width = this.get("width", 200);
      const height = this.get("height", 200);
      const patternData = this.context.getImageData(0, 0, width, height);
      const size = Math.max(1, this.get("size", 1));
      const minOpacity = this.get("minOpacity", 0);
      const maxOpacity = this.get("maxOpacity", 0.3);
      const colors = this.get("colors", [this.get("color", Color.fromHex(0))]);
      const cols = width / size;
      const rows = height / size;
      const density = this.get("density", 1);
      const horizontalGap = this.get("horizontalGap", 0) + 1;
      const verticalGap = this.get("verticalGap", 0) + 1;
      for (let r = 0; r < rows; r++) {
        if (verticalGap > 0) {
          if (r / verticalGap != Math.round(r / verticalGap)) {
            continue;
          }
        }
        for (let c = 0; c < cols; c++) {
          const color2 = colors[Math.floor(Math.random() * colors.length)];
          const alpha = (minOpacity + Math.random() * (maxOpacity - minOpacity)) * 255;
          const rnd = Math.random();
          if (horizontalGap > 0) {
            if (c / horizontalGap != Math.round(c / horizontalGap)) {
              continue;
            }
          }
          if (rnd < density) {
            this._setRectData(c, r, size, width, patternData.data, color2.r, color2.g, color2.b, alpha);
          }
        }
      }
      this.context.putImageData(patternData, 0, 0);
      this._pattern = this.context.createPattern(this.canvas, "repeat");
    }
    this._clearGrain = false;
  }
  _checkDirtyFill() {
    return false;
  }
  _setRectData(col, row, size, width, data, rc, gc, bc, ac) {
    for (var c = col * size; c < col * size + size; c++) {
      for (var r = row * size; r < row * size + size; r++) {
        var i = (r * width + c) * 4;
        data[i] = rc;
        data[i + 1] = gc;
        data[i + 2] = bc;
        data[i + 3] = ac;
      }
    }
  }
};
Object.defineProperty(GrainPattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GrainPattern"
});
Object.defineProperty(GrainPattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([GrainPattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/gradients/RadialGradient.js
var RadialGradient = class extends Gradient {
  /**
   * @ignore
   */
  getFill(target) {
    const bounds = this.getBounds(target);
    let x = 0;
    let y = 0;
    let l = bounds.left || 0;
    let r = bounds.right || 0;
    let t = bounds.top || 0;
    let b = bounds.bottom || 0;
    const width = r - l;
    const height = b - t;
    let radius = target.get("radius");
    if (isNumber(radius)) {
      x = 0;
      y = 0;
    } else {
      radius = Math.min(width, height) / 2;
      x = width / 2;
      y = height / 2;
    }
    let ux = this.get("x");
    let uy = this.get("y");
    if (ux != null) {
      x = relativeToValue(ux, width);
    }
    if (uy != null) {
      y = relativeToValue(uy, height);
    }
    const gradient = this._root._renderer.createRadialGradient(x, y, 0, x, y, radius);
    const stops = this.get("stops");
    if (stops) {
      let i = 0;
      each(stops, (stop) => {
        let offset = stop.offset;
        if (!isNumber(offset)) {
          offset = i / (stops.length - 1);
        }
        let opacity = stop.opacity;
        if (!isNumber(opacity)) {
          opacity = 1;
        }
        let color2 = stop.color;
        if (color2) {
          const lighten = stop.lighten;
          if (lighten) {
            color2 = Color.lighten(color2, lighten);
          }
          const brighten = stop.brighten;
          if (brighten) {
            color2 = Color.brighten(color2, brighten);
          }
          gradient.addColorStop(offset, "rgba(" + color2.r + "," + color2.g + "," + color2.b + "," + opacity + ")");
        }
        i++;
      });
    }
    return gradient;
  }
};
Object.defineProperty(RadialGradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialGradient"
});
Object.defineProperty(RadialGradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Gradient.classNames.concat([RadialGradient.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/CirclePattern.js
var CirclePattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("gap")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const checkered = this.get("checkered", false);
    const centered = this.get("centered", true);
    const gap = this.get("gap", 0);
    const rotation = this.get("rotation", 0);
    let w = this.get("width", 100);
    let h = this.get("height", 100);
    let radius = this.get("radius", 3);
    let cellW = radius * 2 + gap;
    let cellH = radius * 2 + gap;
    let cols = Math.round(w / cellW);
    let rows = Math.round(h / cellH);
    cellW = w / cols;
    cellH = h / rows;
    if (rotation != 0) {
      this._display.x = cellW * cos(rotation);
      this._display.y = cellH * sin(rotation);
    }
    const color2 = this.get("color");
    const colorOpacity = this.get("colorOpacity");
    if (color2 || colorOpacity) {
      this._display.beginFill(color2, colorOpacity);
    }
    for (let r = rotation == 0 ? 0 : -rows * 2; r < rows * 2; r++) {
      for (let c = rotation == 0 ? 0 : -cols * 2; c < cols * 2; c++) {
        if (!checkered || (r & 1) != 1 && (c & 1) != 1 || (r & 1) == 1 && (c & 1) == 1) {
          let x = c * cellW;
          let y = r * cellH;
          if (centered) {
            x += cellW + gap / 2;
            y += cellH + gap / 2;
          }
          this._display.drawCircle(x - radius, y - radius, radius);
        }
      }
    }
    if (checkered) {
      w = w / 2 - gap * 2;
      h = h / 2 - gap * 2;
    } else {
      w -= gap;
      h -= gap;
    }
    if (color2 || colorOpacity) {
      this._display.endFill();
    }
  }
};
Object.defineProperty(CirclePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CirclePattern"
});
Object.defineProperty(CirclePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([CirclePattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/LinePattern.js
var LinePattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("gap")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const w = this.get("width", 100);
    const h = this.get("height", 100);
    const gap = this.get("gap", 0);
    const strokeWidth = this.get("strokeWidth", 1);
    if (!gap) {
      this._display.moveTo(0, 0);
      this._display.lineTo(w, 0);
    } else {
      let step = gap + strokeWidth;
      let count = h / step;
      for (let i = -count; i < count * 2; i++) {
        const y = Math.round(i * step - step / 2) + 0.5;
        this._display.moveTo(-w, y);
        this._display.lineTo(w * 2, y);
      }
    }
    this._display.lineStyle(strokeWidth, this.get("color"), this.get("colorOpacity"));
    let strokeDasharray = this.get("strokeDasharray");
    if (isNumber(strokeDasharray)) {
      if (strokeDasharray < 0.5) {
        strokeDasharray = [0];
      } else {
        strokeDasharray = [strokeDasharray];
      }
    }
    this._display.setLineDash(strokeDasharray);
    const strokeDashoffset = this.get("strokeDashoffset");
    if (strokeDashoffset) {
      this._display.setLineDashOffset(strokeDashoffset);
    }
    this._display.endStroke();
  }
};
Object.defineProperty(LinePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinePattern"
});
Object.defineProperty(LinePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([LinePattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/RectanglePattern.js
var RectanglePattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("gap")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const checkered = this.get("checkered", false);
    const centered = this.get("centered", true);
    const gap = this.get("gap", 0);
    const rotation = this.get("rotation", 0);
    let w = this.get("width", 100);
    let h = this.get("height", 100);
    let rectW = this.get("maxWidth", 5);
    let rectH = this.get("maxHeight", 5);
    const display = this._display;
    let cellW = rectW + gap;
    let cellH = rectH + gap;
    let cols = Math.round(w / cellW);
    let rows = Math.round(h / cellH);
    cellW = w / cols;
    cellH = h / rows;
    if (rotation != 0) {
      display.x = cellW / 2 * cos(rotation);
      display.y = -cellH / 2 * sin(rotation);
    }
    for (let r = rotation == 0 ? 0 : -rows * 2; r < rows * 2; r++) {
      for (let c = rotation == 0 ? 0 : -cols * 2; c < cols * 2; c++) {
        if (!checkered || (r & 1) != 1 && (c & 1) != 1 || (r & 1) == 1 && (c & 1) == 1) {
          let x = c * cellW;
          let y = r * cellH;
          if (centered) {
            x += (cellW - rectW) / 2;
            y += (cellH - rectH) / 2;
          }
          display.drawRect(x, y, rectW, rectH);
        }
      }
    }
    if (checkered) {
      w = w / 2 - gap * 2;
      h = h / 2 - gap * 2;
    } else {
      w -= gap;
      h -= gap;
    }
    const color2 = this.get("color");
    const colorOpacity = this.get("colorOpacity");
    if (color2 || colorOpacity) {
      display.beginFill(color2, colorOpacity);
      display.endFill();
    }
  }
};
Object.defineProperty(RectanglePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RectanglePattern"
});
Object.defineProperty(RectanglePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([RectanglePattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/PathPattern.js
var PathPattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("svgPath")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const svgPath = this.get("svgPath");
    if (svgPath != null) {
      this._display.svgPath(svgPath);
    }
    const color2 = this.get("color");
    const colorOpacity = this.get("colorOpacity");
    if (color2 || colorOpacity) {
      this._display.beginFill(color2, colorOpacity);
      this._display.endFill();
    }
  }
};
Object.defineProperty(PathPattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PathPattern"
});
Object.defineProperty(PathPattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([PathPattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/util/PatternSet.js
var PatternSet = class extends Entity {
  _afterNew() {
    super._afterNewApplyThemes();
    if (this.get("patterns", []).length === 0) {
      const color2 = this.get("color", this.root.interfaceColors.get("stroke"));
      this.set("patterns", [
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: 45,
          strokeWidth: 1,
          //gap: 6,
          color: color2
        }),
        this.getRectanglePattern({
          width: 10,
          height: 10,
          rotation: 0,
          maxWidth: 4,
          maxHeight: 4,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: -45,
          strokeWidth: 1,
          gap: 6,
          color: color2
        }),
        this.getCirclePattern({
          width: 11,
          height: 11,
          radius: 2,
          color: color2
        }),
        this.getLinePattern({
          width: 6,
          height: 6,
          rotation: 90,
          strokeWidth: 1,
          color: color2
        }),
        this.getRectanglePattern({
          width: 14,
          height: 14,
          rotation: 45,
          gap: 4,
          maxWidth: 6,
          maxHeight: 6,
          checkered: true,
          color: color2
        }),
        this.getLinePattern({
          width: 6,
          height: 6,
          rotation: 0,
          strokeWidth: 1,
          color: color2
        }),
        this.getRectanglePattern({
          width: 15,
          height: 15,
          rotation: 0,
          gap: 5,
          maxWidth: 5,
          maxHeight: 5,
          checkered: true,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: 45,
          strokeWidth: 2,
          gap: 3,
          strokeDasharray: [4, 2],
          color: color2
        }),
        this.getCirclePattern({
          width: 20,
          height: 20,
          radius: 3,
          gap: 4,
          checkered: true,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: -45,
          strokeWidth: 2,
          gap: 3,
          strokeDasharray: [4, 2],
          color: color2
        }),
        this.getRectanglePattern({
          width: 10,
          height: 10,
          rotation: 0,
          gap: 1,
          maxWidth: 9,
          maxHeight: 9,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: -45,
          strokeWidth: 2,
          gap: 1,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: 45,
          strokeWidth: 2,
          gap: 1,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: 0,
          strokeWidth: 3,
          gap: 1,
          color: color2
        }),
        this.getLinePattern({
          width: 1e3,
          height: 1e3,
          rotation: 90,
          strokeWidth: 3,
          gap: 1,
          color: color2
        })
      ]);
    }
    this._dirty["patterns"] = false;
  }
  _beforeChanged() {
    if (this.isDirty("patterns")) {
      this.reset();
    }
  }
  /**
   * Returns a [[Pattern]] at specific index.
   *
   * @param   index  Index
   * @return         Color
   */
  getIndex(index) {
    const patterns = this.get("patterns", []);
    if (index < patterns.length && patterns[index] !== null) {
      return patterns[index];
    }
    if (index > patterns.length - 1) {
      const adjustedIndex = index - Math.floor(index * (index / patterns.length));
      return patterns[adjustedIndex];
    }
    return patterns[index];
  }
  /**
   * Returns next [[Color]] in the list.
   *
   * If the list is out of colors, new ones are generated dynamically.
   */
  next() {
    let currentStep = this.getPrivate("currentStep", this.get("startIndex", 0));
    this.setPrivate("currentStep", currentStep + this.get("step", 1));
    return this.getIndex(currentStep);
  }
  /**
   * Resets counter to the start of the list, so the next call for `next()` will
   * return the first pattern.
   */
  reset() {
    this.setPrivate("currentStep", this.get("startIndex", 0));
  }
  /**
   * Returns a [[LinePattern].
   *
   * @param   settings  Pattern settings
   * @return            Pattern object
   */
  getLinePattern(settings) {
    let pattern = LinePattern.new(this.root, settings);
    return pattern;
  }
  /**
   * Returns a [[RectanglePattern].
   *
   * @param   settings  Pattern settings
   * @return            Pattern object
   */
  getRectanglePattern(settings) {
    let pattern = RectanglePattern.new(this.root, settings);
    return pattern;
  }
  /**
   * Returns a [[CirclePattern].
   *
   * @param   settings  Pattern settings
   * @return            Pattern object
   */
  getCirclePattern(settings) {
    let pattern = CirclePattern.new(this.root, settings);
    return pattern;
  }
};
Object.defineProperty(PatternSet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PatternSet"
});
Object.defineProperty(PatternSet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([PatternSet.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/util/DataParser.js
var JSONParser = class {
  /**
   * Parses JSON string.
   *
   * @param   input    JSON
   * @param   options  Options
   * @return           Data
   */
  static parse(input, options) {
    options = this._applyDefaults(options);
    try {
      if (isString(input)) {
        let data = JSON.parse(input);
        if (options.reverse && isArray(data)) {
          data.reverse();
        }
        return data;
      } else if (isArray(input) || isObject(input)) {
        return input;
      } else {
        throw "Unable to parse JSON data";
      }
    } catch (e) {
      return void 0;
    }
  }
  static _applyDefaults(options) {
    const normalized = {};
    const defaults = {
      reverse: false
    };
    if (!options) {
      options = {};
    }
    each2(defaults, (key, val) => {
      normalized[key] = options[key] || val;
    });
    return normalized;
  }
};
var CSVParser = class {
  /**
   * Parses CSV string.
   *
   * @param   input    CSV
   * @param   options  Options
   * @return           Data
   */
  static parse(input, options) {
    options = this._applyDefaults(options);
    let data = this.CSVToArray(input, options.delimiter);
    let res = [], cols = [], col, i;
    for (i = 0; i < options.skipRows; i++) {
      data.shift();
    }
    if (options.useColumnNames) {
      cols = data.shift();
      for (let x = 0; x < cols.length; x++) {
        col = cols[x] != null ? cols[x].replace(/^\s+|\s+$/gm, "") : "";
        if ("" === col) {
          col = "col" + x;
        }
        cols[x] = col;
      }
    }
    let row;
    while (true) {
      row = options.reverse ? data.pop() : data.shift();
      if (!row) {
        break;
      }
      if (options.skipEmpty && row.length === 1 && row[0] === "") {
        continue;
      }
      let dataPoint = {};
      for (i = 0; i < row.length; i++) {
        col = void 0 === cols[i] ? "col" + i : cols[i];
        dataPoint[col] = row[i];
      }
      res.push(dataPoint);
    }
    return res;
  }
  /**
   * @ignore
   */
  static CSVToArray(data, delimiter) {
    delimiter = delimiter || ",";
    let objPattern = new RegExp(
      // Delimiters.
      "(\\" + delimiter + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + delimiter + "\\r\\n]*))",
      "gi"
    );
    let arrData = [
      []
    ];
    let arrMatches = null;
    while (true) {
      arrMatches = objPattern.exec(data);
      if (!arrMatches) {
        break;
      }
      let strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter !== delimiter) {
        arrData.push([]);
      }
      let strMatchedValue;
      if (arrMatches[2]) {
        strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
      } else {
        strMatchedValue = arrMatches[3];
      }
      arrData[arrData.length - 1].push(strMatchedValue);
    }
    return arrData;
  }
  static _applyDefaults(options) {
    const normalized = {};
    const defaults = {
      delimiter: ",",
      reverse: false,
      skipRows: 0,
      skipEmpty: true,
      useColumnNames: false
    };
    if (!options) {
      options = {};
    }
    each2(defaults, (key, val) => {
      normalized[key] = options[key] || val;
    });
    return normalized;
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/util/DataProcessor.js
var DataProcessor = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_checkDates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkNumbers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkColors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkEmpty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkDeep", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this._checkFeatures();
    this.on("dateFields", () => this._checkFeatures());
    this.on("dateFormat", () => this._checkFeatures());
    this.on("numericFields", () => this._checkFeatures());
    this.on("colorFields", () => this._checkFeatures());
    this.on("emptyAs", () => this._checkFeatures());
  }
  _checkFeatures() {
    if (this.isDirty("dateFields") || this.isDirty("dateFormat")) {
      this._checkDates = this.get("dateFields") && this.get("dateFields").length > 0;
    }
    if (this.isDirty("numericFields")) {
      this._checkNumbers = this.get("numericFields") && this.get("numericFields").length > 0;
    }
    if (this.isDirty("colorFields")) {
      this._checkColors = this.get("colorFields") && this.get("colorFields").length > 0;
    }
    if (this.isDirty("emptyAs")) {
      this._checkEmpty = this.get("emptyAs") != null;
    }
    this._checkDeepFeatures();
  }
  _checkDeepFeatures() {
    const deepFields = [];
    each(["dateFields", "numericFields", "colorFields"], (where) => {
      each(this.get(where, []), (field) => {
        const steps = field.split(".");
        steps.pop();
        while (steps.length > 0) {
          deepFields.push(steps.join("."));
          steps.pop();
        }
      });
    });
    this._checkDeep = deepFields.length > 0;
    this.setPrivate("deepFields", deepFields);
  }
  /**
   * Processess entire array of data.
   *
   * NOTE: calling this will modify original array!
   */
  processMany(data) {
    if (isArray(data) && (this._checkDates || this._checkNumbers || this._checkColors || this._checkEmpty)) {
      each(data, (row) => {
        this.processRow(row);
      });
    }
  }
  /**
   * Processes a row (object) of data.
   *
   * NOTE: calling this will modify values of the original object!
   */
  processRow(row, prefix = "") {
    each2(row, (key, _value) => {
      const lookupKey = prefix + key;
      if (this._checkEmpty) {
        row[key] = this._maybeToEmpty(row[key]);
      }
      if (this._checkNumbers) {
        row[key] = this._maybeToNumber(lookupKey, row[key]);
      }
      if (this._checkDates) {
        row[key] = this._maybeToDate(lookupKey, row[key]);
      }
      if (this._checkColors) {
        row[key] = this._maybeToColor(lookupKey, row[key]);
      }
      if (this._checkDeep && this.getPrivate("deepFields", []).indexOf(lookupKey) !== -1 && isObject(row[key])) {
        this.processRow(row[key], lookupKey + ".");
      }
    });
  }
  _maybeToNumber(field, value) {
    if (this.get("numericFields").indexOf(field) !== -1) {
      return toNumber(value);
    }
    return value;
  }
  _maybeToDate(field, value) {
    if (this.get("dateFields").indexOf(field) !== -1) {
      return this._root.dateFormatter.parse(value, this.get("dateFormat", "")).getTime();
    }
    return value;
  }
  _maybeToEmpty(value) {
    if ((value == null || value == "") && this.get("emptyAs") != null) {
      return this.get("emptyAs");
    }
    return value;
  }
  _maybeToColor(field, value) {
    if (this.get("colorFields").indexOf(field) !== -1) {
      return Color.fromAny(value);
    }
    return value;
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/util/Net.js
var Net_exports = {};
__export(Net_exports, {
  load: () => load,
  readBlob: () => readBlob
});
function load(url, target, options) {
  return new Promise((success, error) => {
    let isBlob = options != null && options.responseType == "blob";
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200) {
        let response;
        let blob;
        if (isBlob) {
          blob = xhr.response;
          readBlob(blob).then((response2) => {
            let output2 = {
              xhr,
              error: false,
              response: response2,
              blob,
              type: xhr.getResponseHeader("Content-Type"),
              target
            };
            success(output2);
          });
          return;
        } else {
          response = xhr.responseText || xhr.response;
        }
        let output = {
          xhr,
          error: false,
          response,
          blob,
          type: xhr.getResponseHeader("Content-Type"),
          target
        };
        success(output);
      } else {
        error({
          xhr,
          error: true,
          type: xhr.getResponseHeader("Content-Type"),
          target
        });
      }
    };
    xhr.onerror = () => {
      error({
        xhr,
        error: true,
        type: xhr.getResponseHeader("Content-Type"),
        target
      });
    };
    xhr.open("GET", url, true);
    if (options && options.withCredentials) {
      xhr.withCredentials = true;
    }
    if (options != null) {
      if (options.requestHeaders != null) {
        for (let i = 0; i < options.requestHeaders.length; i++) {
          let header = options.requestHeaders[i];
          xhr.setRequestHeader(header.key, header.value);
        }
      }
      if (options.responseType != null) {
        xhr.responseType = options.responseType;
      }
    }
    xhr.send();
  });
}
function readBlob(blob) {
  return new Promise((success, error) => {
    const reader = new FileReader();
    reader.onload = (_event) => {
      success(reader.result);
    };
    reader.onerror = (e) => {
      error(e);
    };
    reader.readAsText(blob);
  });
}
export {
  ArrayDisposer,
  BlendMode,
  Bullet,
  Button,
  CSVParser,
  CanvasLayer,
  CanvasRenderer,
  Chart,
  Circle,
  CirclePattern,
  Color,
  ColorSet,
  Component,
  Container,
  CounterDisposer,
  DataItem,
  DataProcessor,
  DateFormatter,
  Disposer,
  DurationFormatter,
  EditableLabel,
  Ellipse,
  Entity,
  Gradient,
  GrainPattern,
  Graphics,
  GridLayout,
  HeatLegend,
  HorizontalLayout,
  InterfaceColors,
  JSONParser,
  JsonData,
  Label,
  Layout,
  Legend,
  Line,
  LinePattern,
  LinearGradient,
  ListData,
  ListTemplate,
  Modal,
  MultiDisposer,
  MutableValueDisposer,
  NumberFormatter,
  PathPattern,
  Pattern,
  PatternSet,
  Percent,
  Picture,
  PicturePattern,
  PointedRectangle,
  Polygon,
  RadialGradient,
  RadialLabel,
  RadialText,
  Rectangle,
  RectanglePattern,
  Root,
  RoundedRectangle,
  Scrollbar,
  SerialChart,
  Series,
  Slice,
  Slider,
  Sprite,
  SpriteResizer,
  Star,
  Template,
  Text,
  TextFormatter,
  Theme,
  Tick,
  Timezone,
  Tooltip,
  Triangle,
  VerticalLayout,
  ZoomTools,
  ZoomableContainer,
  addLicense,
  Array_exports as array,
  color,
  disposeAllRootElements,
  Ease_exports as ease,
  getRootById,
  Math_exports as math,
  Net_exports as net,
  Object_exports as object,
  p0,
  p100,
  p50,
  percent,
  ready,
  registry,
  Time_exports as time,
  Type_exports as type,
  Utils_exports as utils
};
//# sourceMappingURL=@amcharts_amcharts5.js.map
