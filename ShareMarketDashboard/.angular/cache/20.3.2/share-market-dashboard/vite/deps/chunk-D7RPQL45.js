import {
  Container,
  Sprite,
  p100,
  p50,
  populateString,
  truncateTextWithEllipsis
} from "./chunk-BGHA5GQX.js";
import {
  Disposer,
  each,
  isNumber
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Text.js
var Text = class extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "textStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeTextStyle()
    });
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeText("", this.textStyle)
    });
    Object.defineProperty(this, "_textStyles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        "textAlign",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "fontStyle",
        "fontVariant",
        "textDecoration",
        "shadowColor",
        "shadowBlur",
        "shadowOffsetX",
        "shadowOffsetY",
        "shadowOpacity",
        // "leading",
        // "letterSpacing",
        "lineHeight",
        "baselineRatio",
        //"padding",
        // "stroke",
        // "strokeThickness",
        // "trim",
        // "wordWrap",
        "direction",
        "textBaseline",
        "oversizedBehavior",
        "breakWords",
        "ellipsis",
        "minScale",
        "maxChars"
      ]
    });
    Object.defineProperty(this, "_originalScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _updateBounds() {
    if (!this.get("text")) {
      let newBounds = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this._adjustedLocalBounds = newBounds;
    } else {
      super._updateBounds();
      let fillGradient = this.get("fillGradient");
      if (fillGradient) {
        this._display.style.fill = fillGradient.getFill(this);
      }
    }
  }
  _changed() {
    super._changed();
    this._display.clear();
    let textStyle = this.textStyle;
    if (this.isDirty("opacity")) {
      let opacity = this.get("opacity", 1);
      this._display.alpha = opacity;
    }
    if (this.isDirty("text") || this.isDirty("populateText")) {
      this._display.text = this._getText();
      this.markDirtyBounds();
      if (this.get("role") == "tooltip") {
        this._root.updateTooltip(this);
      }
    }
    if (this.isPrivateDirty("tooltipElement")) {
      const tooltipElement = this.getPrivate("tooltipElement");
      if (tooltipElement) {
        this._disposers.push(new Disposer(() => {
          this._root._removeTooltipElement(this);
        }));
      }
    }
    if (this.isDirty("width")) {
      textStyle.wordWrapWidth = this.width();
      this.markDirtyBounds();
    }
    if (this.isDirty("oversizedBehavior")) {
      textStyle.oversizedBehavior = this.get("oversizedBehavior", "none");
      this._display.invalidateVisibility();
      this.markDirtyBounds();
    }
    if (this.isDirty("breakWords")) {
      textStyle.breakWords = this.get("breakWords", false);
      this.markDirtyBounds();
    }
    if (this.isDirty("ellipsis")) {
      textStyle.ellipsis = this.get("ellipsis");
      this.markDirtyBounds();
    }
    if (this.isDirty("ignoreFormatting")) {
      textStyle.ignoreFormatting = this.get("ignoreFormatting", false);
      this.markDirtyBounds();
    }
    if (this.isDirty("minScale")) {
      textStyle.minScale = this.get("minScale", 0);
      this.markDirtyBounds();
    }
    if (this.isDirty("fill") || this.isDirty("fillGradient")) {
      const fill = this.get("fill");
      const fillGradient = this.get("fillGradient");
      const fillOpacity = this.get("fillOpacity");
      if (fillGradient) {
        if (fill) {
          const stops = fillGradient.get("stops", []);
          if (stops.length) {
            each(stops, (stop) => {
              if ((!stop.color || stop.colorInherited) && fill) {
                stop.color = fill;
                stop.colorInherited = true;
              }
              if (stop.opacity == null || stop.opacityInherited) {
                stop.opacity = fillOpacity;
                stop.opacityInherited = true;
              }
            });
          }
        }
        textStyle.fill = fillGradient.getFill(this);
      } else if (fill) {
        textStyle.fill = fill;
      }
    }
    if (this.isDirty("fillOpacity")) {
      let fillOpacity = this.get("fillOpacity", 1);
      if (fillOpacity) {
        textStyle.fillOpacity = fillOpacity;
      }
    }
    if (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) {
      textStyle.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"));
      this.markDirtyBounds();
    }
    if (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) {
      textStyle.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight"));
      this.markDirtyBounds();
    }
    each(this._textStyles, (styleName) => {
      if (this._dirty[styleName]) {
        textStyle[styleName] = this.get(styleName);
        this.markDirtyBounds();
      }
    });
    textStyle["fontSize"] = this.get("fontSize");
    textStyle["fontFamily"] = this.get("fontFamily");
    this._display.style = textStyle;
    if (this.isDirty("role") && this.get("role") == "tooltip") {
      this._root.updateTooltip(this);
    }
  }
  _getText() {
    let text = this.get("text", "");
    if (this.get("maxChars")) {
      text = truncateTextWithEllipsis(text, this.get("maxChars", 1e8), this.get("breakWords"), this.get("ellipsis"));
    }
    return this.get("populateText") ? populateString(this, text) : text;
  }
  _getAccessibleText() {
    const ariaLabel = this.get("ariaLabel");
    if (ariaLabel !== void 0) {
      return this.get("populateText") ? populateString(this, ariaLabel) : ariaLabel;
    }
    return this._getText();
  }
  /**
   * Forces the text to be re-evaluated and re-populated.
   */
  markDirtyText() {
    this._display.text = this._getText();
    if (this.get("role") == "tooltip") {
      this._root.updateTooltip(this);
    }
    this.markDirtyBounds();
    this.markDirty();
  }
  _setDataItem(dataItem) {
    super._setDataItem(dataItem);
    if (this.get("populateText")) {
      this.markDirtyText();
    }
  }
  getNumberFormatter() {
    if (this.parent) {
      return this.parent.getNumberFormatter();
    } else {
      return super.getNumberFormatter();
    }
  }
  getDateFormatter() {
    if (this.parent) {
      return this.parent.getDateFormatter();
    } else {
      return super.getDateFormatter();
    }
  }
  getDurationFormatter() {
    if (this.parent) {
      return this.parent.getDurationFormatter();
    } else {
      return super.getDurationFormatter();
    }
  }
};
Object.defineProperty(Text, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Text"
});
Object.defineProperty(Text, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Text.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Label.js
var Label = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_textKeys", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        "text",
        "fill",
        "fillGradient",
        "fillOpacity",
        "textAlign",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "fontStyle",
        "fontVariant",
        "textDecoration",
        "shadowColor",
        "shadowBlur",
        "shadowOffsetX",
        "shadowOffsetY",
        "shadowOpacity",
        // "leading",
        // "letterSpacing",
        "lineHeight",
        "baselineRatio",
        //"padding",
        // "stroke",
        // "strokeThickness",
        // "trim",
        // "wordWrap",
        "direction",
        "textBaseline",
        "oversizedBehavior",
        "breakWords",
        "ellipsis",
        "minScale",
        "populateText",
        "role",
        "ignoreFormatting",
        "maxChars",
        "ariaLabel"
      ]
    });
  }
  /**
   * @ignore Text is not to be used directly
   */
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew();
    this._makeText();
    each(this._textKeys, (property) => {
      const propValue = this.get(property);
      if (propValue != void 0) {
        this._text.set(property, propValue);
      }
    });
    if (this.get("html", "") !== "") {
      this._text.set("text", "");
    }
    this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    });
    this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(Text.new(this._root, {}));
  }
  _updateChildren() {
    super._updateChildren();
    const text = this._text;
    each(this._textKeys, (property) => {
      this._text.set(property, this.get(property));
    });
    if (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isDirty("rotation")) {
      this._setMaxDimentions();
    }
    if (this.get("html", "") !== "") {
      text.set("text", "");
    } else {
      text.set("text", this.get("text"));
      this._maybeUpdateHTMLColor();
    }
    if (this.isDirty("fill") || this.isDirty("fillGradient")) {
      this._maybeUpdateHTMLColor();
    }
    if (this.isDirty("textAlign") || this.isDirty("width")) {
      const textAlign = this.get("textAlign");
      let x;
      if (this.get("width") != null) {
        if (textAlign == "right") {
          x = p100;
        } else if (textAlign == "center") {
          x = p50;
        } else {
          x = 0;
        }
      } else {
        if (textAlign == "left" || textAlign == "start") {
          x = this.get("paddingLeft", 0);
        } else if (textAlign == "right" || textAlign == "end") {
          x = -this.get("paddingRight", 0);
        }
      }
      text.set("x", x);
    }
    const background = this.get("background");
    if (background) {
      background.setPrivate("visible", text._display.textVisible);
    }
  }
  _maybeUpdateHTMLColor() {
    const htmlElement = this.getPrivate("htmlElement");
    if (htmlElement && this.get("fill")) {
      htmlElement.style.color = this.get("fill").toCSSHex();
    }
  }
  _setMaxDimentions() {
    const rotation = this.get("rotation");
    const vertical = rotation == 90 || rotation == 270 || rotation == -90;
    const text = this._text;
    const maxWidth = this.get("maxWidth", this.getPrivate("maxWidth", Infinity));
    if (isNumber(maxWidth)) {
      text.set(vertical ? "maxHeight" : "maxWidth", maxWidth - this.get("paddingTop", 0) - this.get("paddingBottom", 0));
    } else {
      text.set(vertical ? "maxHeight" : "maxWidth", void 0);
    }
    const maxHeight = this.get("maxHeight", this.getPrivate("maxHeight", Infinity));
    if (isNumber(maxHeight)) {
      text.set(vertical ? "maxWidth" : "maxHeight", maxHeight - this.get("paddingLeft", 0) - this.get("paddingRight", 0));
    } else {
      text.set(vertical ? "maxWidth" : "maxHeight", void 0);
    }
    this.root.events.once("frameended", () => {
      text.markDirtyBounds();
    });
  }
  _setDataItem(dataItem) {
    super._setDataItem(dataItem);
    this._markDirtyKey("text");
    this._markDirtyKey("html");
    const text = this._text;
    if (text.get("populateText")) {
      text.markDirtyText();
    }
    const html = this.get("html");
    if (html && html !== "") {
      this._updateHTMLContent();
    }
  }
  /**
   * Returns text with populated placeholders and formatting if `populateText` is
   * set to `true`.
   *
   * @return Populated text
   */
  getText() {
    return this._text._getText();
  }
  /**
   * Returns "aria-label" text with populated placeholders and formatting
   * if `populateText` is set to `true`.
   *
   * @return Populated text
   */
  getAccessibleText() {
    return this._text._getAccessibleText();
  }
};
Object.defineProperty(Label, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Label"
});
Object.defineProperty(Label, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Label.className])
});

export {
  Text,
  Label
};
//# sourceMappingURL=chunk-D7RPQL45.js.map
