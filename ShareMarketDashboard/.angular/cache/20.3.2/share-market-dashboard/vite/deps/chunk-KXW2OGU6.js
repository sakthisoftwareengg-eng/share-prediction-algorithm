import {
  RoundedRectangle
} from "./chunk-E32SSC6Z.js";
import {
  Container,
  mergeTags
} from "./chunk-BGHA5GQX.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Button.js
var Button = class extends Container {
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["button"]);
    super._afterNew();
    if (!this._settings.background) {
      this.set("background", RoundedRectangle.new(this._root, {
        themeTags: mergeTags(this._settings.themeTags, ["background"])
      }));
    }
    this.setPrivate("trustBounds", true);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("icon")) {
      const previous = this._prevSettings.icon;
      const icon = this.get("icon");
      if (icon !== previous) {
        this._disposeProperty("icon");
        if (previous) {
          previous.dispose();
        }
        if (icon) {
          this.children.push(icon);
        }
        this._prevSettings.icon = icon;
      }
    }
    if (this.isDirty("label")) {
      const previous = this._prevSettings.label;
      const label = this.get("label");
      if (label !== previous) {
        this._disposeProperty("label");
        if (previous) {
          previous.dispose();
        }
        if (label) {
          this.children.push(label);
        }
        this._prevSettings.label = label;
      }
    }
  }
};
Object.defineProperty(Button, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Button"
});
Object.defineProperty(Button, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Button.className])
});

export {
  Button
};
//# sourceMappingURL=chunk-KXW2OGU6.js.map
