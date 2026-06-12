import {
  Color,
  Entity
} from "./chunk-BGHA5GQX.js";

// node_modules/@amcharts/amcharts5/.internal/core/util/ColorSet.js
var ColorSet = class extends Entity {
  //protected _currentPass: number = 0;
  _afterNew() {
    super._afterNewApplyThemes();
    this._dirty["colors"] = false;
  }
  _beforeChanged() {
    if (this.isDirty("colors")) {
      this.reset();
    }
  }
  /**
   * @ignore
   */
  generateColors() {
    this.setPrivate("currentPass", this.getPrivate("currentPass", 0) + 1);
    const pass = this.getPrivate("currentPass");
    const colors = this.get("colors", [this.get("baseColor", Color.fromHex(16711680))]);
    if (!this.getPrivate("numColors")) {
      this.setPrivate("numColors", colors.length);
    }
    const len = this.getPrivate("numColors");
    const start = 0;
    const passOptions = this.get("passOptions");
    const reuse = this.get("reuse");
    for (let i = start; i < len; i++) {
      if (reuse) {
        colors.push(colors[i]);
      } else {
        const hsl = colors[i].toHSL();
        let h = hsl.h + (passOptions.hue || 0) * pass;
        while (h > 1)
          h -= 1;
        let s = hsl.s + (passOptions.saturation || 0) * pass;
        if (s > 1)
          s = 1;
        if (s < 0)
          s = 0;
        let l = hsl.l + (passOptions.lightness || 0) * pass;
        while (l > 1)
          l -= 1;
        colors.push(Color.fromHSL(h, s, l));
      }
    }
  }
  /**
   * Returns a [[Color]] at specific index.
   *
   * If there's no color at this index, a new color is generated.
   *
   * @param   index  Index
   * @return         Color
   */
  getIndex(index) {
    const colors = this.get("colors", []);
    const saturation = this.get("saturation");
    if (index >= colors.length) {
      this.generateColors();
      return this.getIndex(index);
    }
    return saturation != null ? Color.saturate(colors[index], saturation) : colors[index];
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
   * return the first color.
   */
  reset() {
    this.setPrivate("currentStep", this.get("startIndex", 0));
    this.setPrivate("currentPass", 0);
  }
};
Object.defineProperty(ColorSet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColorSet"
});
Object.defineProperty(ColorSet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([ColorSet.className])
});

export {
  ColorSet
};
//# sourceMappingURL=chunk-AVJ6LU7H.js.map
