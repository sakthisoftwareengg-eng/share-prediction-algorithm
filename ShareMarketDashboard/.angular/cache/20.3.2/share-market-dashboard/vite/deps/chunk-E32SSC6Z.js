import {
  Rectangle,
  fitToRange,
  relativeToValue
} from "./chunk-BGHA5GQX.js";
import {
  isNumber
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/RoundedRectangle.js
var RoundedRectangle = class extends Rectangle {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) {
      this._clear = true;
    }
  }
  _draw() {
    let width = this.width();
    let height = this.height();
    let wSign = width / Math.abs(width);
    let hSign = height / Math.abs(height);
    let x = 0;
    let y = 0;
    const strokeWidth = this.get("strokeWidth", 0);
    if (this.get("containStroke", false)) {
      width -= wSign * strokeWidth;
      height -= hSign * strokeWidth;
      x += wSign * strokeWidth / 2;
      y += hSign * strokeWidth / 2;
    }
    let w = width;
    let h = height;
    if (isNumber(w) && isNumber(h)) {
      let minSide = Math.min(w, h) / 2;
      let crtl = relativeToValue(this.get("cornerRadiusTL", 8), minSide);
      let crtr = relativeToValue(this.get("cornerRadiusTR", 8), minSide);
      let crbr = relativeToValue(this.get("cornerRadiusBR", 8), minSide);
      let crbl = relativeToValue(this.get("cornerRadiusBL", 8), minSide);
      let maxcr = Math.min(Math.abs(w / 2), Math.abs(h / 2));
      crtl = fitToRange(crtl, 0, maxcr);
      crtr = fitToRange(crtr, 0, maxcr);
      crbr = fitToRange(crbr, 0, maxcr);
      crbl = fitToRange(crbl, 0, maxcr);
      const display = this._display;
      display.moveTo(x + crtl * wSign, y);
      display.lineTo(x + w - crtr * wSign, y);
      if (crtr > 0) {
        display.arcTo(x + w, y, x + w, y + crtr * hSign, crtr);
      }
      display.lineTo(x + w, y + h - crbr * hSign);
      if (crbr > 0) {
        display.arcTo(x + w, y + h, x + w - crbr * wSign, y + h, crbr);
      }
      display.lineTo(x + crbl * wSign, y + h);
      if (crbl > 0) {
        display.arcTo(x, y + h, x, y + h - crbl * hSign, crbl);
      }
      display.lineTo(x, y + crtl * hSign);
      if (crtl > 0) {
        display.arcTo(x, y, x + crtl * wSign, y, crtl);
      }
      display.closePath();
    }
  }
};
Object.defineProperty(RoundedRectangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RoundedRectangle"
});
Object.defineProperty(RoundedRectangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Rectangle.classNames.concat([RoundedRectangle.className])
});

export {
  RoundedRectangle
};
//# sourceMappingURL=chunk-E32SSC6Z.js.map
