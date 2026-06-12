import {
  Graphics
} from "./chunk-BGHA5GQX.js";
import {
  copy,
  each
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Polygon.js
var Polygon = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "morphAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("coordinates")) {
      const points = [];
      const coordinates = this.get("coordinates");
      if (coordinates) {
        each(coordinates, (coord) => {
          points.push({ x: coord[0], y: coord[1] });
        });
      }
      this.set("points", points);
    }
    if (this.isPrivateDirty("points")) {
      this._clear = true;
    }
    if (this.isDirty("points")) {
      this._clear = true;
      const points = this.get("points");
      const prevPoints = this._prevSettings.points;
      if (prevPoints) {
        if (points) {
          let copy2 = copy(points);
          let prevCopy = copy(prevPoints);
          let cl = copy2.length;
          let pl = prevCopy.length;
          if (cl > pl) {
            let newCopy = copy(copy2);
            for (let i = 0; i < cl; i++) {
              let index = Math.floor(i / cl * pl);
              newCopy[i] = { x: prevCopy[index].x, y: prevCopy[index].y };
            }
            prevCopy = newCopy;
          } else if (pl > cl) {
            let newCopy = copy(prevCopy);
            for (let i = 0; i < pl; i++) {
              let index = Math.floor(i / pl * cl);
              newCopy[i] = { x: copy2[index].x, y: copy2[index].y };
            }
            copy2 = newCopy;
          }
          this.setPrivateRaw("previousPoints", prevCopy);
          this.setPrivateRaw("points", copy2);
          this.morphAnimation = this.animatePrivate({ key: "morphProgress", from: 0, to: 1, duration: this.get("animationDuration", 0), easing: this.get("animationEasing") });
          this._root.events.once("frameended", () => {
            this._markDirtyPrivateKey("morphProgress");
          });
        }
      } else {
        this.setPrivateRaw("previousPoints", points);
        this.setPrivateRaw("points", points);
      }
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      if (points) {
        for (let i = 1, len = points.length; i < len; i++) {
          const point = points[i];
          minX = Math.min(minX, point.x);
          maxX = Math.max(maxX, point.x);
          minY = Math.min(minY, point.y);
          maxY = Math.max(maxY, point.y);
        }
      }
      this.setPrivate("minX", minX);
      this.setPrivate("maxX", maxX);
      this.setPrivate("minY", minY);
      this.setPrivate("maxY", minY);
    }
    if (this.isPrivateDirty("morphProgress")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._draw();
    }
  }
  _draw() {
    const previousPoints = this.getPrivate("previousPoints");
    const points = this.getPrivate("points");
    const morphProgress = this.getPrivate("morphProgress", 1);
    if (points && previousPoints) {
      const first = points[0];
      const prevFirst = previousPoints[0];
      if (first) {
        this._display.moveTo(prevFirst.x + (first.x - prevFirst.x) * morphProgress, prevFirst.y + (first.y - prevFirst.y) * morphProgress);
      }
      for (let i = 1, len = points.length; i < len; i++) {
        const point = points[i];
        const prevPoint = previousPoints[i];
        this._display.lineTo(prevPoint.x + (point.x - prevPoint.x) * morphProgress, prevPoint.y + (point.y - prevPoint.y) * morphProgress);
      }
      this._display.closePath();
    }
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
};
Object.defineProperty(Polygon, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Polygon"
});
Object.defineProperty(Polygon, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Polygon.className])
});

export {
  Polygon
};
//# sourceMappingURL=chunk-CNNUHZ4L.js.map
