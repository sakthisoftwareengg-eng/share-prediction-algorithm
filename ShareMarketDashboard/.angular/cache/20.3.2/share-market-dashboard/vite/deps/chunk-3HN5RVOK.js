import {
  Graphics
} from "./chunk-BGHA5GQX.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Circle.js
var Circle = class extends Graphics {
  _afterNew() {
    super._afterNew();
    this._display.isMeasured = true;
    this.setPrivateRaw("trustBounds", true);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawCircle(0, 0, Math.abs(this.get("radius", 10)));
    }
  }
};
Object.defineProperty(Circle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Circle"
});
Object.defineProperty(Circle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Circle.className])
});

export {
  Circle
};
//# sourceMappingURL=chunk-3HN5RVOK.js.map
