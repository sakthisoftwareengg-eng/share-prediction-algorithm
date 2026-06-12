import {
  Label,
  Text
} from "./chunk-D7RPQL45.js";
import {
  Percent,
  RADIANS,
  cos,
  normalizeAngle,
  p50,
  relativeToValue,
  sin
} from "./chunk-BGHA5GQX.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/RadialText.js
var RadialText = class extends Text {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeRadialText("", this.textStyle)
    });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged();
    this._display.clear();
    if (this.isDirty("textType")) {
      this._display.textType = this.get("textType");
      this.markDirtyBounds();
    }
    if (this.isDirty("radius")) {
      this._display.radius = this.get("radius");
      this.markDirtyBounds();
    }
    if (this.isDirty("startAngle")) {
      this._display.startAngle = (this.get("startAngle", 0) + 90) * RADIANS;
      this.markDirtyBounds();
    }
    if (this.isDirty("inside")) {
      this._display.inside = this.get("inside");
      this.markDirtyBounds();
    }
    if (this.isDirty("orientation")) {
      this._display.orientation = this.get("orientation");
      this.markDirtyBounds();
    }
    if (this.isDirty("kerning")) {
      this._display.kerning = this.get("kerning");
      this.markDirtyBounds();
    }
  }
};
Object.defineProperty(RadialText, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialText"
});
Object.defineProperty(RadialText, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Text.classNames.concat([RadialText.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/RadialLabel.js
var RadialLabel = class extends Label {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_flipped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this._textKeys.push("textType", "kerning");
    super._afterNew();
  }
  _makeText() {
    this._text = this.children.push(RadialText.new(this._root, {}));
  }
  /**
   * Returns base radius in pixels.
   *
   * @return Base radius
   */
  baseRadius() {
    const radiusPrivate = this.getPrivate("radius", 0);
    const innerRadiusPrivate = this.getPrivate("innerRadius", 0);
    const baseRadius = this.get("baseRadius", 0);
    return innerRadiusPrivate + relativeToValue(baseRadius, radiusPrivate - innerRadiusPrivate);
  }
  /**
   * Returns radius adjustment in pixels.
   *
   * @return Radius
   */
  radius() {
    const inside = this.get("inside", false);
    return this.baseRadius() + this.get("radius", 0) * (inside ? -1 : 1);
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType")) {
      const textType = this.get("textType", "adjusted");
      const inside = this.get("inside", false);
      const orientation = this.get("orientation");
      let labelAngle = normalizeAngle(this.get("labelAngle", 0));
      this._text.set("startAngle", this.get("labelAngle", 0));
      this._text.set("inside", inside);
      const sin2 = sin(labelAngle);
      const cos2 = cos(labelAngle);
      let baseRadius = this.baseRadius();
      let radius = this.radius();
      this._display.angle = 0;
      if (textType == "circular") {
        this.setAll({
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        });
        this.setRaw("x", void 0);
        this.setRaw("y", void 0);
        this._text.set("orientation", orientation);
        this._text.set("radius", radius);
      } else {
        if (baseRadius == 0) {
          labelAngle = 0;
          radius = 0;
        }
        let x = radius * cos2;
        let y = radius * sin2;
        if (textType == "radial") {
          this.setRaw("x", x);
          this.setRaw("y", y);
          if (labelAngle < 90 || labelAngle > 270 || orientation != "auto") {
            this._display.angle = labelAngle;
            this._flipped = false;
          } else {
            this._display.angle = labelAngle + 180;
            this._flipped = true;
          }
          this._dirty.rotation = false;
        } else if (textType == "adjusted") {
          this.setRaw("centerX", p50);
          this.setRaw("centerY", p50);
          this.setRaw("x", x);
          this.setRaw("y", y);
        } else if (textType == "regular") {
          this.setRaw("x", x);
          this.setRaw("y", y);
        }
      }
      this.markDirtyPosition();
      this.markDirtyBounds();
    }
  }
  _updatePosition() {
    const textType = this.get("textType", "regular");
    const inside = this.get("inside", false);
    let dx = 0;
    let dy = 0;
    let labelAngle = this.get("labelAngle", 0);
    let bounds = this.localBounds();
    let w = bounds.right - bounds.left;
    let h = bounds.bottom - bounds.top;
    if (textType == "radial") {
      if (this._flipped) {
        let centerX = this.get("centerX");
        if (centerX instanceof Percent) {
          w = w * (1 - centerX.value * 2);
        }
        dx = w * cos(labelAngle);
        dy = w * sin(labelAngle);
      }
    } else if (!inside && textType == "adjusted") {
      dx = w / 2 * cos(labelAngle);
      dy = h / 2 * sin(labelAngle);
    }
    this.setRaw("dx", dx);
    this.setRaw("dy", dy);
    super._updatePosition();
  }
  /**
   * @ignore
   */
  get text() {
    return this._text;
  }
};
Object.defineProperty(RadialLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialLabel"
});
Object.defineProperty(RadialLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Label.classNames.concat([RadialLabel.className])
});

export {
  RadialText,
  RadialLabel
};
//# sourceMappingURL=chunk-AHDXI7TZ.js.map
