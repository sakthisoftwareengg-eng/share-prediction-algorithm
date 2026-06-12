import {
  Graphics
} from "./chunk-BGHA5GQX.js";

// node_modules/@amcharts/amcharts5/.internal/core/util/Draw.js
function segmentedLine(display, segments) {
  for (let s = 0, len = segments.length; s < len; s++) {
    const groups = segments[s];
    if (groups.length > 0) {
      let firstGroup = groups[0];
      if (firstGroup.length > 0) {
        let firstPoint = firstGroup[0];
        display.moveTo(firstPoint.x, firstPoint.y);
        for (let g = 0, len2 = groups.length; g < len2; g++) {
          line(display, groups[g]);
        }
      }
    }
  }
}
function line(display, points) {
  for (let p = 0, len = points.length; p < len; p++) {
    const point = points[p];
    display.lineTo(point.x, point.y);
  }
}

// node_modules/@amcharts/amcharts5/.internal/core/render/Line.js
var Line = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("points") || this.isDirty("segments") || this._sizeDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const points = this.get("points");
      const segments = this.get("segments");
      if (points && points.length > 0) {
        let point = points[0];
        this._display.moveTo(point.x, point.y);
        segmentedLine(this._display, [[points]]);
      } else if (segments) {
        segmentedLine(this._display, segments);
      } else if (!this.get("draw")) {
        let w = this.width();
        let h = this.height();
        this._display.moveTo(0, 0);
        this._display.lineTo(w, h);
      }
    }
  }
};
Object.defineProperty(Line, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Line"
});
Object.defineProperty(Line, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Line.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Tick.js
var Tick = class extends Line {
};
Object.defineProperty(Tick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tick"
});
Object.defineProperty(Tick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Line.classNames.concat([Tick.className])
});

export {
  Line,
  Tick
};
//# sourceMappingURL=chunk-XATEH3WK.js.map
