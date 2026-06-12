import {
  Color,
  Entity,
  cos,
  sin
} from "./chunk-BGHA5GQX.js";
import {
  each,
  isNumber
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/gradients/Gradient.js
var Gradient = class extends Entity {
  _afterNew() {
    super._afterNewApplyThemes();
  }
  /**
   * @ignore
   */
  getFill(_target) {
    return {
      addColorStop: (_offset, _color) => {
      }
    };
  }
  _changed() {
    super._changed();
  }
  /**
   * @ignore
   */
  getBounds(target) {
    const gradientTarget = this.get("target");
    if (gradientTarget) {
      let bounds = gradientTarget.globalBounds();
      const p0 = target.toLocal({ x: bounds.left, y: bounds.top });
      const p1 = target.toLocal({ x: bounds.right, y: bounds.top });
      const p2 = target.toLocal({ x: bounds.right, y: bounds.bottom });
      const p3 = target.toLocal({ x: bounds.left, y: bounds.bottom });
      return {
        left: Math.min(p0.x, p1.x, p2.x, p3.x),
        top: Math.min(p0.y, p1.y, p2.y, p3.y),
        right: Math.max(p0.x, p1.x, p2.x, p3.x),
        bottom: Math.max(p0.y, p1.y, p2.y, p3.y)
      };
    }
    return target._display.getLocalBounds();
  }
};
Object.defineProperty(Gradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Gradient"
});
Object.defineProperty(Gradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Gradient.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/gradients/LinearGradient.js
var LinearGradient = class extends Gradient {
  /**
   * @ignore
   */
  getFill(target) {
    const rotation = this.get("rotation", 0);
    let bounds = this.getBounds(target);
    let l = bounds.left || 0;
    let r = bounds.right || 0;
    let t = bounds.top || 0;
    let b = bounds.bottom || 0;
    let cos2 = cos(rotation);
    let sin2 = sin(rotation);
    let w = cos2 * (r - l);
    let h = sin2 * (b - t);
    if (w == 0) {
      w = 1;
    }
    if (h == 0) {
      h = 1;
    }
    let longer = Math.max(w, h);
    const gradient = this._root._renderer.createLinearGradient(l, t, l + longer * cos2, t + longer * sin2);
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
        let color = stop.color;
        if (color) {
          const lighten = stop.lighten;
          if (lighten) {
            color = Color.lighten(color, lighten);
          }
          const brighten = stop.brighten;
          if (brighten) {
            color = Color.brighten(color, brighten);
          }
          gradient.addColorStop(offset, "rgba(" + color.r + "," + color.g + "," + color.b + "," + opacity + ")");
        }
        i++;
      });
    }
    return gradient;
  }
};
Object.defineProperty(LinearGradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinearGradient"
});
Object.defineProperty(LinearGradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Gradient.classNames.concat([LinearGradient.className])
});

export {
  Gradient,
  LinearGradient
};
//# sourceMappingURL=chunk-BYMJBLOE.js.map
