import {
  RoundedRectangle
} from "./chunk-E32SSC6Z.js";
import {
  Series
} from "./chunk-JFXPNH7X.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Container,
  Entity,
  Graphics,
  ListTemplate,
  Percent,
  Rectangle,
  StyleRule,
  addEventListener,
  color,
  cos,
  getAngle,
  getEventKey,
  getShadowRoot,
  mergeTags,
  p50,
  sin,
  supports
} from "./chunk-BGHA5GQX.js";
import {
  CounterDisposer,
  MultiDisposer,
  Template,
  each,
  isNumber
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/SpriteResizer.js
var SpriteResizer = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "rectangle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Rectangle.new(this._root, { themeTags: ["rectangle"], fillOpacity: 0, fill: color(16777215) }))
    });
    Object.defineProperty(this, "gripL", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("left")
    });
    Object.defineProperty(this, "gripR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("right")
    });
    Object.defineProperty(this, "gripT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("top")
    });
    Object.defineProperty(this, "gripB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("bottom")
    });
    Object.defineProperty(this, "_is", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_ix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_iw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_positionDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isHover", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.addTag("resizer");
    this.set("visible", false);
    this.gripL.events.on("dragged", (e) => {
      this._resize(e.target, -1);
    });
    this.gripR.events.on("dragged", (e) => {
      this._resize(e.target, 1);
    });
    this.gripL.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
    this.gripR.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
    this.gripT.events.on("dragged", (e) => {
      this._rotate(e, 90);
    });
    this.gripB.events.on("dragged", (e) => {
      this._rotate(e, -90);
    });
    this.gripT.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
    this.gripB.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
  }
  _resizeStart(grip) {
    const sprite = this.get("sprite");
    if (sprite) {
      this._is = sprite.get("scale", 1);
      this._ix = grip.x();
      this._iw = this.width() / 2;
    }
  }
  _resize(grip, c) {
    const sprite = this.get("sprite");
    const spriteTemplate = this.get("spriteTemplate");
    if (sprite) {
      const scale = Math.max(0.01, this._is * (1 + c * (grip.x() - this._ix) / this._iw));
      if (spriteTemplate) {
        spriteTemplate.set("scale", scale);
      } else {
        sprite.set("scale", scale);
      }
      sprite.states.lookup("default").set("scale", scale);
      this._updatePositions();
    }
  }
  _rotate(e, delta) {
    const sprite = this.get("sprite");
    const spriteTemplate = this.get("spriteTemplate");
    if (sprite) {
      const parent = this.parent;
      if (parent) {
        const rotationStep = this.get("rotationStep", 10);
        let angle = Math.round((getAngle({ x: this.x(), y: this.y() }, parent.toLocal(e.point)) + delta) / rotationStep) * rotationStep;
        if (spriteTemplate) {
          spriteTemplate.set("rotation", angle);
        } else {
          sprite.set("rotation", angle);
        }
        sprite.states.lookup("default").set("rotation", angle);
        this._updatePositions();
      }
    }
  }
  _createGrip(themeTag) {
    const container = this.children.push(Container.new(this._root, {
      themeTags: ["grip", themeTag],
      setStateOnChildren: true,
      draggable: true
    }));
    container.children.push(RoundedRectangle.new(this._root, {
      themeTags: ["outline"],
      centerX: p50,
      centerY: p50
    }));
    container.children.push(RoundedRectangle.new(this._root, {
      centerX: p50,
      centerY: p50
    }));
    return container;
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("sprite")) {
      const sprite = this.get("sprite");
      if (sprite) {
        this.show(0);
        this.setPrivate("visible", true);
        this._updatePositions();
        const parent = sprite.parent;
        if (parent) {
          parent.children.moveValue(this, 0);
        }
        this._positionDP = sprite.events.on("positionchanged", () => {
          this._updatePositions();
        });
        this._positionDP = sprite.events.on("boundschanged", () => {
          this._updatePositions();
        });
      } else {
        this.hide(0);
        this.setPrivate("visible", false);
        if (this._positionDP) {
          this._positionDP.dispose();
        }
      }
    }
    if (this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation")) {
      this._updatePositions();
    }
  }
  _updatePositions() {
    const sprite = this.get("sprite");
    if (sprite) {
      let bounds = sprite.localBounds();
      let scale = sprite.get("scale", 1);
      let d = 20;
      let w = (bounds.right - bounds.left) * scale + d;
      let h = (bounds.bottom - bounds.top) * scale + d;
      let a = sprite.get("rotation", 0);
      const rectangle = this.rectangle;
      let cx = sprite.get("centerX", p50);
      let cy = sprite.get("centerY", p50);
      let cxr = 0;
      if (cx instanceof Percent) {
        cxr = cx.value;
      }
      let cyr = 0;
      if (cy instanceof Percent) {
        cyr = cy.value;
      }
      rectangle.setAll({ centerX: cx, centerY: cy, width: w, height: h });
      this.setAll({ x: sprite.x() + d * (cxr - 0.5) * cos(a) - d * (cyr - 0.5) * sin(a), y: sprite.y() + d * (cyr - 0.5) * cos(a) + d * (cxr - 0.5) * sin(a), width: w, height: h, rotation: a });
      this.gripT.setAll({ x: (0.5 - cxr) * w, y: -cyr * h });
      this.gripB.setAll({ x: (0.5 - cxr) * w, y: (1 - cyr) * h });
      this.gripL.setAll({ x: -cxr * w, y: (0.5 - cyr) * h });
      this.gripR.setAll({ x: (1 - cxr) * w, y: (0.5 - cyr) * h });
      this.rectangle.setAll({ width: w, height: h });
    }
  }
};
Object.defineProperty(SpriteResizer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SpriteResizer"
});
Object.defineProperty(SpriteResizer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([SpriteResizer.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/util/Modal.js
var rules;
function modalCSS(element, root, _prefix) {
  const ic = root.interfaceColors;
  const active = ic.get("secondaryButton").toCSS();
  const text = ic.get("text").toCSS();
  const shadow = ic.get("alternativeBackground").toCSS(0.45);
  if (!rules) {
    const disposer = new MultiDisposer([
      new StyleRule(element, ".am5-modal", {
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "z-index": "100000",
        "top": "0",
        "left": "0"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-curtain", {
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "background": ic.get("background").toCSS(0.5),
        "z-index": "100"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-wrapper", {
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "text-align": "center",
        "white-space": "nowrap",
        "background": ic.get("background").toCSS(0.5),
        "z-index": "101"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-wrapper:before", {
        "content": "''",
        "display": "inline-block",
        "height": "100%",
        "vertical-align": "middle",
        "margin-right": "-0.25em"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content", {
        "display": "inline-block",
        "padding": "1.2em",
        "vertical-align": "middle",
        "text-align": "start",
        "white-space": "normal",
        "background": ic.get("background").toCSS(),
        //"border": "1px solid " + ic.get("alternativeBackground")!.toCSS(),
        "border-radius": "4px",
        "-webkit-box-shadow": "0px 0px 36px 0px " + shadow,
        "box-shadow": "0px 0px 36px 0px " + shadow,
        "color": text
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content h1", {
        "font-size": "1em",
        "margin": "0 0 0.5em 0"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-table", {
        "display": "table",
        "margin": "1em 0"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-table-row", {
        "display": "table-row"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-table-heading", {
        "display": "table-heading",
        "padding": "3px 10px 3px 0"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-table-cell", {
        "display": "table-cell",
        "padding": "3px 0 3px 0"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-table-cell > *", {
        "vertical-align": "middle"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-content input[type=text], .am5-modal-content input[type=number], .am5-modal-content select", {
        "border": "1px solid " + active,
        "border-radius": "4px",
        "padding": "3px 5px",
        "margin": "2px"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-input-narrow", {
        "width": "50px"
      }, root.nonce),
      new StyleRule(element, ".am5-modal-button", {
        "font-weight": "400",
        "color": ic.get("secondaryButtonText").toCSS(),
        "line-height": "1.5",
        "text-align": "center",
        "text-decoration": "none",
        "vertical-align": "middle",
        "cursor": "pointer",
        "padding": "0.2em 0.8em",
        "font-size": "1em",
        "border-radius": "0.25em",
        "margin": "0 0.25em 0 0",
        "border": "1px solid " + ic.get("secondaryButtonStroke").toCSS(),
        "background": ic.get("secondaryButton").toCSS()
      }, root.nonce),
      new StyleRule(element, ".am5-modal-button:hover", {
        "background": ic.get("secondaryButtonHover").toCSS()
      }, root.nonce),
      new StyleRule(element, ".am5-modal-button.am5-modal-primary", {
        "color": ic.get("primaryButtonText").toCSS(),
        "border": "1px solid " + ic.get("primaryButtonStroke").toCSS(),
        "background": ic.get("primaryButton").toCSS()
      }, root.nonce),
      new StyleRule(element, ".am5-modal-button.am5-modal-primary:hover", {
        "background": ic.get("primaryButtonHover").toCSS()
      }, root.nonce)
    ]);
    rules = new CounterDisposer(() => {
      rules = void 0;
      disposer.dispose();
    });
  }
  return rules.increment();
}
var Modal = class extends Entity {
  //protected _currentPass: number = 0;
  _afterNew() {
    super._afterNewApplyThemes();
    this._setRawDefault("deactivateRoot", true);
    modalCSS(getShadowRoot(this._root.dom), this._root);
    const container = document.createElement("div");
    container.className = "am5-modal";
    container.style.display = "none";
    this.root._inner.appendChild(container);
    this.setPrivate("container", container);
    const curtain = document.createElement("div");
    curtain.className = "am5-modal-curtain";
    container.appendChild(curtain);
    this.setPrivate("curtain", curtain);
    this._disposers.push(addEventListener(curtain, "click", () => {
      this.cancel();
    }));
    const wrapper = document.createElement("div");
    wrapper.className = "am5-modal-wrapper";
    container.appendChild(wrapper);
    this.setPrivate("wrapper", wrapper);
    const content = document.createElement("div");
    content.className = "am5-modal-content";
    wrapper.appendChild(content);
    this.setPrivate("content", content);
    const html = this.get("content");
    if (html) {
      content.innerHTML = html;
    }
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        if (this.isOpen() && getEventKey(ev) == "Escape") {
          this.cancel();
        }
      }));
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("content")) {
      this.getPrivate("content").innerHTML = this.get("content", "");
    }
  }
  /**
   * Returns `true` if modal is currently open.
   *
   * @return  Modal open?
   */
  isOpen() {
    return this.getPrivate("container").style.display != "none";
  }
  /**
   * Opens modal.
   */
  open() {
    this.getPrivate("container").style.display = "block";
    if (this.get("deactivateRoot")) {
      this.setTimeout(() => {
        this._root._renderer.interactionsEnabled = false;
      }, 10);
    }
    this.events.dispatch("opened", {
      type: "opened",
      target: this
    });
  }
  /**
   * Closes modal.
   */
  close() {
    this.getPrivate("container").style.display = "none";
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    this.events.dispatch("closed", {
      type: "closed",
      target: this
    });
  }
  /**
   * Closes modal and invokes `cancelled` event.
   */
  cancel() {
    this.getPrivate("container").style.display = "none";
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    this.events.dispatch("cancelled", {
      type: "cancelled",
      target: this
    });
  }
  /**
   * Disposes modal.
   */
  _dispose() {
    super._dispose();
    const container = this.getPrivate("container");
    if (container.parentElement) {
      container.parentElement.removeChild(container);
    }
  }
};
Object.defineProperty(Modal, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Modal"
});
Object.defineProperty(Modal, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Modal.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Bullet.js
var Bullet = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("sprite")) {
      const sprite = this.get("sprite");
      if (sprite) {
        sprite.setAll({ position: "absolute", role: "figure" });
        this._disposers.push(sprite);
      }
    }
    if (this.isDirty("locationX") || this.isDirty("locationY")) {
      if (this.series) {
        this.series._positionBullet(this);
      }
    }
  }
};
Object.defineProperty(Bullet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Bullet"
});
Object.defineProperty(Bullet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Bullet.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Ellipse.js
var Ellipse = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radiusX") || this.isDirty("radiusY") || this.isDirty("rotation")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawEllipse(0, 0, Math.abs(this.get("radiusX")), Math.abs(this.get("radiusY")));
    }
  }
};
Object.defineProperty(Ellipse, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Ellipse"
});
Object.defineProperty(Ellipse, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Ellipse.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/EditableLabel.js
var EditableLabel = class extends Label {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_editOnEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    const input = this.children.push(Container.new(this._root, {
      html: '<textarea class="am5-editable-label"></textarea>',
      isMeasured: false
    }));
    input.hide();
    this.setPrivate("input", input);
    let background = this.get("background");
    if (!background) {
      background = this.set("background", RoundedRectangle.new(this._root, {
        themeTags: ["editablelabel", "background"]
      }));
    } else {
      background.set("themeTags", ["editablelabel", "background"]);
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("editOn")) {
      if (this._editOnEvents) {
        this._editOnEvents.dispose();
      }
      const editOn = this.get("editOn", "click");
      if (editOn != "none") {
        this._editOnEvents = new MultiDisposer([
          this.getPrivate("input").events.on(editOn, (_ev) => {
          }),
          this.events.on(editOn, (_ev) => {
            this.set("active", true);
          })
        ]);
      }
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    this._maybeInitTextarea();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("active")) {
      const editing = this.get("active", false);
      if (editing) {
        this._startEditing();
      } else {
        this._stopEditing();
      }
      const bg = this.get("background");
      if (bg) {
        bg.set("active", editing);
      }
    }
    ;
    this._syncText();
    this._syncStyle();
  }
  _maybeInitTextarea() {
    if (!this._isInited()) {
      const input = this.getPrivate("input");
      if (input && input.getPrivate("htmlElement")) {
        const el = input.getPrivate("htmlElement");
        const textarea = el.querySelector(".am5-editable-label");
        if (textarea) {
          this.setPrivate("textarea", textarea);
          textarea.addEventListener("input", (_ev) => {
            if (this.get("multiLine") === false) {
              textarea.value = textarea.value.replace(/\n/g, " ");
            }
            this.set("text", textarea.value);
            this._syncStyle();
          });
          textarea.addEventListener("blur", (_ev) => this.set("active", false));
          if (supports("keyboardevents")) {
            this._disposers.push(addEventListener(document, "keydown", (ev) => {
              if (getEventKey(ev) == "Escape") {
                this.set("active", false);
              }
            }));
          }
          this._disposers.push(addEventListener(document, "keydown", (ev) => {
            if (getEventKey(ev) == "Enter" && this.get("multiLine") === false) {
              ev.preventDefault();
              this.set("active", false);
            }
          }));
          this.events.dispatch("inited", {
            type: "inited",
            target: this
          });
        }
      }
    }
  }
  _isInited() {
    return this.getPrivate("textarea") ? true : false;
  }
  _startEditing() {
    if (!this._isInited()) {
      this.events.once("inited", () => {
        this._startEditing();
      });
      return;
    }
    this._text.set("opacity", 0);
    const input = this.getPrivate("input");
    const textarea = this.getPrivate("textarea");
    if (textarea) {
      if (this.get("text", "") == "") {
        this.set("text", " ");
      }
      input.show(0);
      this.setTimeout(() => {
        this._syncStyle();
        textarea.focus();
      }, 100);
    }
  }
  _stopEditing() {
    if (!this._isInited()) {
      this.events.once("inited", () => {
        this._stopEditing();
      });
      return;
    }
    const input = this.getPrivate("input");
    const textarea = this.getPrivate("textarea");
    if (textarea) {
      this.set("text", textarea.value);
      input.hide(0);
      this._text.set("opacity", 1);
    }
  }
  _syncStyle() {
    const input = this.getPrivate("input");
    const textarea = this.getPrivate("textarea");
    if (textarea) {
      const el = input.getPrivate("htmlElement");
      const computedStyles = window.getComputedStyle(textarea);
      each(computedStyles, (style) => {
        textarea.style[style] = "initial";
      });
      textarea.style.color = this.get("fill", color(0)).toCSS(this.get("fillOpacity", 1));
      textarea.style.backgroundColor = "rgba(0, 0, 0, 0)";
      textarea.style.border = "none";
      textarea.style.outline = "none";
      textarea.style.padding = "0";
      textarea.wrap = "off";
      textarea.style.resize = "none";
      textarea.style.overflow = "hidden";
      const maxWidth = this.get("maxWidth", 0) - this.get("paddingLeft", 0) - this.get("paddingRight", 0);
      if (maxWidth > 0) {
        textarea.style.maxWidth = maxWidth + "px";
      } else {
        textarea.style.minWidth = "";
      }
      textarea.style.height = "auto";
      textarea.style.minHeight = textarea.scrollHeight + "px";
      if (this.get("width")) {
        textarea.style.width = this.width() - this.get("paddingLeft", 0) - this.get("paddingRight", 0) + "px";
        textarea.style.minWidth = "";
      }
      const lineHeight = this.get("lineHeight");
      if (!lineHeight) {
        textarea.style.lineHeight = "1.2";
      } else if (lineHeight instanceof Percent) {
        textarea.style.lineHeight = lineHeight.value + "";
      } else if (isNumber(lineHeight)) {
        textarea.style.lineHeight = lineHeight + "";
      }
      let fontFamily = this.get("fontFamily");
      if (!fontFamily) {
        fontFamily = getComputedStyle(input.getPrivate("htmlElement"), "font-family").getPropertyValue("font-family");
      }
      textarea.style.fontFamily = fontFamily;
      let fontSize = this.get("fontSize");
      if (!fontSize) {
        fontSize = getComputedStyle(input.getPrivate("htmlElement"), "font-size").getPropertyValue("font-size");
      } else if (isNumber(fontSize)) {
        fontSize = fontSize + "px";
      } else {
        fontSize = fontSize;
      }
      textarea.style.fontSize = fontSize;
      let fontWeight = this.get("fontWeight");
      if (!fontWeight) {
        fontWeight = getComputedStyle(input.getPrivate("htmlElement"), "font-weight").getPropertyValue("font-weight");
      } else {
        fontWeight = fontWeight;
      }
      textarea.style.fontWeight = fontWeight;
      let fontStyle = this.get("fontStyle");
      if (!fontStyle) {
        fontStyle = getComputedStyle(input.getPrivate("htmlElement"), "font-style").getPropertyValue("font-style");
      } else {
        fontStyle = fontStyle;
      }
      textarea.style.fontStyle = fontStyle;
      const oversizeBehavior = this.get("oversizedBehavior");
      if (oversizeBehavior == "wrap") {
        textarea.style.whiteSpace = "pre-wrap";
      } else {
        textarea.style.whiteSpace = "nowrap";
      }
      this._root.events.on("frameended", () => {
        if (textarea.style.minWidth == "") {
          textarea.style.minWidth = textarea.scrollWidth + 20 + "px";
        }
        const textAlign = this.get("textAlign", "start");
        if (textAlign == "center") {
          textarea.style.textAlign = "center";
          if (!el.style.transform.match(/translateX/) && !this.get("width")) {
            el.style.transform += " translateX(-50%)";
          }
        } else if (textAlign == "end") {
          textarea.style.textAlign = "right";
          if (!el.style.transform.match(/translateX/) && !this.get("width")) {
            el.style.transform += " translateX(-100%)";
          }
        } else {
          textarea.style.textAlign = textAlign;
        }
      });
    }
  }
  _syncText() {
    const textarea = this.getPrivate("textarea");
    let text = this.get("text", "");
    if (text == " ") {
      text = "";
    }
    if (textarea) {
      textarea.value = text;
    }
  }
};
Object.defineProperty(EditableLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "EditableLabel"
});
Object.defineProperty(EditableLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Label.classNames.concat([EditableLabel.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Legend.js
var Legend = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "itemContainers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Container._new(this._root, {
        themeTags: mergeTags(this.itemContainers.template.get("themeTags", []), ["legend", "item"]),
        themeTagsSelf: mergeTags(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"]),
        background: RoundedRectangle.new(this._root, {
          themeTags: mergeTags(this.itemContainers.template.get("themeTags", []), ["legend", "item", "background"]),
          themeTagsSelf: mergeTags(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"])
        })
      }, [this.itemContainers.template])))
    });
    Object.defineProperty(this, "markers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Container._new(this._root, {
        themeTags: mergeTags(this.markers.template.get("themeTags", []), ["legend", "marker"])
      }, [this.markers.template])))
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), ["legend", "label"])
      }, [this.labels.template])))
    });
    Object.defineProperty(this, "valueLabels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {
        themeTags: mergeTags(this.valueLabels.template.get("themeTags", []), ["legend", "label", "value"])
      }, [this.valueLabels.template])))
    });
    Object.defineProperty(this, "markerRectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        themeTags: mergeTags(this.markerRectangles.template.get("themeTags", []), ["legend", "marker", "rectangle"])
      }, [this.markerRectangles.template])))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["legend"]);
    this.fields.push("name", "stroke", "fill");
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeItemContainer(dataItem) {
    const itemContainer = this.children.push(this.itemContainers.make());
    itemContainer._setDataItem(dataItem);
    this.itemContainers.push(itemContainer);
    itemContainer.states.create("disabled", {});
    return itemContainer;
  }
  /**
   * @ignore
   */
  makeMarker() {
    const marker = this.markers.make();
    this.markers.push(marker);
    marker.states.create("disabled", {});
    return marker;
  }
  /**
   * @ignore
   */
  makeLabel() {
    const label = this.labels.make();
    label.states.create("disabled", {});
    return label;
  }
  /**
   * @ignore
   */
  makeValueLabel() {
    const valueLabel = this.valueLabels.make();
    valueLabel.states.create("disabled", {});
    return valueLabel;
  }
  /**
   * @ignore
   */
  makeMarkerRectangle() {
    const markerRectangle = this.markerRectangles.make();
    markerRectangle.states.create("disabled", {});
    return markerRectangle;
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const itemContainer = this.makeItemContainer(dataItem);
    const nameField = this.get("nameField");
    const fillField = this.get("fillField");
    const strokeField = this.get("strokeField");
    if (itemContainer) {
      const clickTarget = this.get("clickTarget", "itemContainer");
      const item = dataItem.dataContext;
      if (item && item.set) {
        item.set("legendDataItem", dataItem);
      }
      itemContainer._setDataItem(dataItem);
      dataItem.set("itemContainer", itemContainer);
      const marker = this.makeMarker();
      if (marker) {
        itemContainer.children.push(marker);
        marker._setDataItem(dataItem);
        dataItem.set("marker", marker);
        const useDefaultMarker = this.get("useDefaultMarker");
        const markerRectangle = marker.children.push(this.makeMarkerRectangle());
        let fill = dataItem.get("fill");
        let stroke = dataItem.get("stroke");
        dataItem.set("markerRectangle", markerRectangle);
        if (item && item.get) {
          fill = item.get(fillField, fill);
          stroke = item.get(strokeField, stroke);
        }
        if (!stroke) {
          stroke = fill;
        }
        if (!useDefaultMarker) {
          if (item && item.createLegendMarker) {
            item.createLegendMarker();
          }
        } else {
          if (item.on) {
            item.on(fillField, () => {
              markerRectangle.set("fill", item.get(fillField));
            });
            item.on(strokeField, () => {
              markerRectangle.set("stroke", item.get(strokeField));
            });
          }
        }
        markerRectangle.setAll({ fill, stroke });
        const component = item.component;
        if (component && component.updateLegendMarker) {
          component.updateLegendMarker(item);
        }
      }
      const label = this.makeLabel();
      if (label) {
        itemContainer.children.push(label);
        label._setDataItem(dataItem);
        dataItem.set("label", label);
        label.text.on("text", () => {
          itemContainer.setRaw("ariaLabel", label.text._getText() + (this.get("clickTarget") !== "none" ? "; " + this._t("Press ENTER to toggle") : ""));
          itemContainer.markDirtyAccessibility();
        });
        if (item && item.get) {
          dataItem.set("name", item.get(nameField));
        }
        let name = dataItem.get("name");
        if (name) {
          label.set("text", name);
        }
      }
      const valueLabel = this.makeValueLabel();
      if (valueLabel) {
        itemContainer.children.push(valueLabel);
        valueLabel._setDataItem(dataItem);
        dataItem.set("valueLabel", valueLabel);
      }
      if (item && item.show) {
        item.on("visible", (visible) => {
          itemContainer.set("disabled", !visible);
        });
        if (!item.get("visible")) {
          itemContainer.set("disabled", true);
        }
        if (clickTarget != "none") {
          let clickContainer = itemContainer;
          if (clickTarget == "marker") {
            clickContainer = marker;
          }
          this._addClickEvents(clickContainer, item, dataItem);
        }
      }
      this.children.values.sort((a, b) => {
        const targetA = a.dataItem.dataContext;
        const targetB = b.dataItem.dataContext;
        if (targetA && targetB) {
          const indexA = this.data.indexOf(targetA);
          const indexB = this.data.indexOf(targetB);
          if (indexA > indexB) {
            return 1;
          } else if (indexA < indexB) {
            return -1;
          }
        }
        return 0;
      });
      if (item && item.updateLegendValue) {
        item.updateLegendValue();
      }
    }
  }
  _addClickEvents(container, item, dataItem) {
    container.set("cursorOverStyle", "pointer");
    container.events.on("pointerover", () => {
      const component = item.component;
      if (component && component.hoverDataItem) {
        component.hoverDataItem(item);
      }
    });
    container.events.on("pointerout", () => {
      const component = item.component;
      if (component && component.hoverDataItem) {
        component.unhoverDataItem(item);
      }
    });
    container.events.on("click", () => {
      const labelText = dataItem.get("label").text._getText();
      if (item.show && item.isHidden && (item.isHidden() || item.get("visible") === false)) {
        item.show();
        container.set("disabled", false);
        this._root.readerAlert(this._t("%1 shown", this._root.locale, labelText));
      } else if (item.hide) {
        item.hide();
        container.set("disabled", true);
        this._root.readerAlert(this._t("%1 hidden", this._root.locale, labelText));
      }
    });
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext && dataContext.get) {
      const di = dataContext.get("legendDataItem");
      if (di == dataItem) {
        dataContext.set("legendDataItem", void 0);
      }
    }
    let itemContainer = dataItem.get("itemContainer");
    if (itemContainer) {
      this.itemContainers.removeValue(itemContainer);
      itemContainer.dispose();
    }
    let marker = dataItem.get("marker");
    if (marker) {
      this.markers.removeValue(marker);
      marker.dispose();
    }
    let markerRectangle = dataItem.get("markerRectangle");
    if (markerRectangle) {
      this.markerRectangles.removeValue(markerRectangle);
      markerRectangle.dispose();
    }
    let label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    let valueLabel = dataItem.get("valueLabel");
    if (valueLabel) {
      this.valueLabels.removeValue(valueLabel);
      valueLabel.dispose();
    }
  }
};
Object.defineProperty(Legend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Legend"
});
Object.defineProperty(Legend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([Legend.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Triangle.js
var Triangle = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear && !this.get("draw")) {
      this._draw();
    }
  }
  _draw() {
    const w = this.width();
    const h = this.height();
    const display = this._display;
    display.moveTo(-w / 2, h / 2);
    display.lineTo(0, -h / 2);
    display.lineTo(w / 2, h / 2);
    display.lineTo(-w / 2, h / 2);
    display.closePath();
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
};
Object.defineProperty(Triangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Triangle"
});
Object.defineProperty(Triangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Triangle.className])
});

export {
  SpriteResizer,
  Modal,
  Bullet,
  Ellipse,
  EditableLabel,
  Legend,
  Triangle
};
//# sourceMappingURL=chunk-TU3HXUTJ.js.map
