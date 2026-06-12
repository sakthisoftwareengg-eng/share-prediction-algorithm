import {
  CounterDisposer,
  Disposer,
  DisposerClass,
  EventDispatcher,
  MultiDisposer,
  PLACEHOLDER,
  Template,
  compare,
  compareArray,
  each,
  each2,
  eachReverse,
  find,
  findReverse,
  getFirstSortedIndex,
  indexOf,
  insertIndex,
  isDate,
  isNaN,
  isNumber,
  isObject,
  isString,
  keys,
  keysOrdered,
  pushOne,
  remove,
  removeFirst,
  removeIndex,
  toDate,
  toNumber
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";
import {
  __export
} from "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/core/util/List.js
function checkBounds(index, len) {
  if (!(index >= 0 && index < len)) {
    throw new Error("Index out of bounds: " + index);
  }
}
var List = class {
  /**
   * Constructor
   *
   * @param initial  Inital list of values to add to list
   */
  constructor(initial = []) {
    Object.defineProperty(this, "_values", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new EventDispatcher()
    });
    this._values = initial;
  }
  /**
   * An array of values in the list.
   *
   * Do not use this property to add values. Rather use dedicated methods, like
   * `push()`, `removeIndex()`, etc.
   *
   * @readonly
   * @return List values
   */
  get values() {
    return this._values;
  }
  /**
   * Checks if list contains specific item reference.
   *
   * @param item  Item to search for
   * @return `true` if found, `false` if not found
   */
  contains(value) {
    return this._values.indexOf(value) !== -1;
  }
  /**
   * Removes specific item from the list.
   *
   * @param item An item to remove
   */
  removeValue(value) {
    let i = 0;
    let length = this._values.length;
    while (i < length) {
      if (this._values[i] === value) {
        this.removeIndex(i);
        --length;
      } else {
        ++i;
      }
    }
  }
  /**
   * Searches the list for specific item and returns its index.
   *
   * @param item  An item to search for
   * @return Index or -1 if not found
   */
  indexOf(value) {
    return indexOf(this._values, value);
  }
  /**
   * Number of items in list.
   *
   * @readonly
   * @return Number of items
   */
  get length() {
    return this._values.length;
  }
  /**
   * Checks if there's a value at specific index.
   *
   * @param index  Index
   * @return Value exists?
   */
  hasIndex(index) {
    return index >= 0 && index < this._values.length;
  }
  /**
   * Returns an item at specified index.
   *
   * @param index  Index
   * @return List item
   */
  getIndex(index) {
    return this._values[index];
  }
  _onPush(newValue) {
    if (this.events.isEnabled("push")) {
      this.events.dispatch("push", {
        type: "push",
        target: this,
        newValue
      });
    }
  }
  _onInsertIndex(index, newValue) {
    if (this.events.isEnabled("insertIndex")) {
      this.events.dispatch("insertIndex", {
        type: "insertIndex",
        target: this,
        index,
        newValue
      });
    }
  }
  _onSetIndex(index, oldValue, newValue) {
    if (this.events.isEnabled("setIndex")) {
      this.events.dispatch("setIndex", {
        type: "setIndex",
        target: this,
        index,
        oldValue,
        newValue
      });
    }
  }
  _onSwap(a, b) {
    if (this.events.isEnabled("swap")) {
      this.events.dispatch("swap", {
        type: "swap",
        target: this,
        a,
        b
      });
    }
  }
  _onRemoveIndex(index, oldValue) {
    if (this.events.isEnabled("removeIndex")) {
      this.events.dispatch("removeIndex", {
        type: "removeIndex",
        target: this,
        index,
        oldValue
      });
    }
  }
  _onMoveIndex(oldIndex, newIndex, value) {
    if (this.events.isEnabled("moveIndex")) {
      this.events.dispatch("moveIndex", {
        type: "moveIndex",
        target: this,
        oldIndex,
        newIndex,
        value
      });
    }
  }
  _onClear(oldValues) {
    if (this.events.isEnabled("clear")) {
      this.events.dispatch("clear", {
        type: "clear",
        target: this,
        oldValues
      });
    }
  }
  /**
   * Sets value at specific index.
   *
   * If there's already a value at the index, it is overwritten.
   *
   * @param index  Index
   * @param value  New value
   * @return New value
   */
  setIndex(index, value) {
    checkBounds(index, this._values.length);
    const oldValue = this._values[index];
    if (oldValue !== value) {
      this._values[index] = value;
      this._onSetIndex(index, oldValue, value);
    }
    return oldValue;
  }
  /**
   * Adds an item to the list at a specific index, which pushes all the other
   * items further down the list.
   *
   * @param index Index
   * @param item  An item to add
   */
  insertIndex(index, value) {
    checkBounds(index, this._values.length + 1);
    insertIndex(this._values, index, value);
    this._onInsertIndex(index, value);
    return value;
  }
  /**
   * Swaps indexes of two items in the list.
   *
   * @param a  Item 1
   * @param b  Item 2
   */
  swap(a, b) {
    const len = this._values.length;
    checkBounds(a, len);
    checkBounds(b, len);
    if (a !== b) {
      const value_a = this._values[a];
      const value_b = this._values[b];
      this._values[a] = value_b;
      this._values[b] = value_a;
      this._onSwap(value_a, value_b);
    }
  }
  /**
   * Removes a value at specific index.
   *
   * @param index  Index of value to remove
   * @return Removed value
   */
  removeIndex(index) {
    checkBounds(index, this._values.length);
    const oldValue = this._values[index];
    removeIndex(this._values, index);
    this._onRemoveIndex(index, oldValue);
    return oldValue;
  }
  /**
   * Moves an item to a specific index within the list.
   *
   * If the index is not specified it will move the item to the end of the
   * list.
   *
   * @param value  Item to move
   * @param index  Index to place item at
   */
  moveValue(value, toIndex) {
    let index = this.indexOf(value);
    if (index !== -1) {
      removeIndex(this._values, index);
      if (toIndex == null) {
        const toIndex2 = this._values.length;
        this._values.push(value);
        this._onMoveIndex(index, toIndex2, value);
      } else {
        insertIndex(this._values, toIndex, value);
        this._onMoveIndex(index, toIndex, value);
      }
    } else if (toIndex == null) {
      this._values.push(value);
      this._onPush(value);
    } else {
      insertIndex(this._values, toIndex, value);
      this._onInsertIndex(toIndex, value);
    }
    return value;
  }
  /**
   * Adds an item to the end of the list.
   *
   * @param item  An item to add
   */
  push(value) {
    this._values.push(value);
    this._onPush(value);
    return value;
  }
  /**
   * Adds an item as a first item in the list.
   *
   * @param item  An item to add
   */
  unshift(value) {
    this.insertIndex(0, value);
    return value;
  }
  /**
   * Adds multiple items to the list.
   *
   * @param items  An Array of items to add
   */
  pushAll(values) {
    each(values, (value) => {
      this.push(value);
    });
  }
  /**
   * Copies and adds items from abother list.
   *
   * @param source  A list top copy items from
   */
  copyFrom(source) {
    this.pushAll(source._values);
  }
  /**
   * Returns the last item from the list, and removes it.
   *
   * @return Item
   */
  pop() {
    let index = this._values.length - 1;
    return index < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  /**
   * Returns the first item from the list, and removes it.
   *
   * @return Item
   */
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  /**
   * Sets multiple items to the list.
   *
   * All current items are removed.
   *
   * @param newArray  New items
   */
  setAll(newArray) {
    const old = this._values;
    this._values = [];
    this._onClear(old);
    each(newArray, (value) => {
      this._values.push(value);
      this._onPush(value);
    });
  }
  /**
   * Removes all items from the list.
   */
  clear() {
    this.setAll([]);
  }
  /**
   * Returns an ES6 iterator for the list.
   */
  *[Symbol.iterator]() {
    const length = this._values.length;
    for (let i = 0; i < length; ++i) {
      yield this._values[i];
    }
  }
  /**
   * Calls `f` for each element in the list.
   *
   * `f` should have at least one parameter defined which will get a current
   * item, with optional second argument - index.
   */
  each(f) {
    each(this._values, f);
  }
  /**
   * Calls `f` for each element in the list, from right to left.
   *
   * `f` should have at least one parameter defined which will get a current
   * item, with optional second argument - index.
   */
  eachReverse(f) {
    eachReverse(this._values, f);
  }
};
var ListAutoDispose = class extends List {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "autoDispose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  /**
   * Swaps indexes of two items in the list.
   *
   * @param a  Item 1
   * @param b  Item 2
   */
  swap(a, b) {
    const currentAutoDispose = this.autoDispose;
    this.autoDispose = false;
    super.swap(a, b);
    this.autoDispose = currentAutoDispose;
  }
  _onSetIndex(index, oldValue, newValue) {
    if (this.autoDispose) {
      oldValue.dispose();
    }
    super._onSetIndex(index, oldValue, newValue);
  }
  _onRemoveIndex(index, oldValue) {
    if (this.autoDispose) {
      oldValue.dispose();
    }
    super._onRemoveIndex(index, oldValue);
  }
  _onClear(oldValues) {
    if (this.autoDispose) {
      each(oldValues, (x) => {
        x.dispose();
      });
    }
    super._onClear(oldValues);
  }
  _dispose() {
    if (this.autoDispose) {
      each(this._values, (x) => {
        x.dispose();
      });
    }
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
};
var ListTemplate = class extends ListAutoDispose {
  constructor(template, make) {
    super();
    Object.defineProperty(this, "template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "make", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.template = template;
    this.make = make;
  }
  _dispose() {
    super._dispose();
    if (this.autoDispose) {
      this.template.dispose();
    }
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/util/Percent.js
var Percent = class _Percent {
  /**
   * Constructor.
   *
   * @param percent  Percent value
   */
  constructor(percent2) {
    Object.defineProperty(this, "_value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._value = percent2;
  }
  /**
   * Relative value.
   *
   * E.g. 100% is 1, 50% is 0.5, etc.
   *
   * This is useful to apply transformations to other values. E.g.:
   *
   * ```TypeScript
   * let value = 256;
   * let percent = new am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   * ```JavaScript
   * var value = 256;
   * var percent = new am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   *
   * Alternatively, you can use `am5.percent()` helper function:
   *
   * ```TypeScript
   * let value = 256;
   * let percent = am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   * ```JavaScript
   * var value = 256;
   * var percent = am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   *
   * @readonly
   * @return Relative value
   */
  get value() {
    return this._value / 100;
  }
  /**
   * Value in percent.
   *
   * @readonly
   * @return Percent
   */
  get percent() {
    return this._value;
  }
  toString() {
    return "" + this._value + "%";
  }
  interpolate(min, max) {
    return min + this.value * (max - min);
  }
  static normalize(percent2, min, max) {
    if (percent2 instanceof _Percent) {
      return percent2;
    } else {
      if (min === max) {
        return new _Percent(0);
      } else {
        return new _Percent(Math.min(Math.max((percent2 - min) * (1 / (max - min)), 0), 1) * 100);
      }
    }
  }
};
function percent(value) {
  return new Percent(value);
}
var p0 = percent(0);
var p100 = percent(100);
var p50 = percent(50);
function isPercent(value) {
  return value instanceof Percent;
}

// node_modules/@amcharts/amcharts5/.internal/core/util/Utils.js
var Utils_exports = {};
__export(Utils_exports, {
  StyleRule: () => StyleRule,
  StyleSheet: () => StyleSheet,
  addClass: () => addClass,
  addEventListener: () => addEventListener,
  addSpacing: () => addSpacing,
  alternativeColor: () => alternativeColor,
  blur: () => blur,
  brighten: () => brighten,
  capitalizeFirst: () => capitalizeFirst,
  cleanFormat: () => cleanFormat,
  contains: () => contains,
  decimalPlaces: () => decimalPlaces,
  escapeForRgex: () => escapeForRgex,
  focus: () => focus,
  get12Hours: () => get12Hours,
  getBrightnessStep: () => getBrightnessStep,
  getDayFromWeek: () => getDayFromWeek,
  getEventKey: () => getEventKey,
  getEventTarget: () => getEventTarget,
  getFormat: () => getFormat,
  getLightnessStep: () => getLightnessStep,
  getMonthWeek: () => getMonthWeek,
  getPointerId: () => getPointerId,
  getRendererEvent: () => getRendererEvent,
  getSafeResolution: () => getSafeResolution,
  getShadowRoot: () => getShadowRoot,
  getStyle: () => getStyle,
  getTimeZone: () => getTimeZone,
  getTimezoneOffset: () => getTimezoneOffset,
  getWeek: () => getWeek,
  getWeekYear: () => getWeekYear,
  getYearDay: () => getYearDay,
  hslToHsv: () => hslToHsv,
  hslToRgb: () => hslToRgb,
  hsvToHsl: () => hsvToHsl,
  iOS: () => iOS,
  isLight: () => isLight,
  isLocalEvent: () => isLocalEvent,
  isTouchEvent: () => isTouchEvent,
  lighten: () => lighten,
  mergeTags: () => mergeTags,
  onZoom: () => onZoom,
  padString: () => padString,
  plainText: () => plainText,
  ready: () => ready,
  relativeToValue: () => relativeToValue,
  removeClass: () => removeClass,
  removeElement: () => removeElement,
  rgbToHsl: () => rgbToHsl,
  sameBounds: () => sameBounds,
  saturate: () => saturate,
  setInteractive: () => setInteractive,
  setStyle: () => setStyle,
  splitString: () => splitString,
  stripTags: () => stripTags,
  supports: () => supports,
  trim: () => trim,
  trimLeft: () => trimLeft,
  trimRight: () => trimRight,
  truncateTextWithEllipsis: () => truncateTextWithEllipsis
});
function ready(f) {
  if (document.readyState !== "loading") {
    f();
  } else {
    const listener = () => {
      if (document.readyState !== "loading") {
        document.removeEventListener("readystatechange", listener);
        f();
      }
    };
    document.addEventListener("readystatechange", listener);
  }
}
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function addEventListener(dom, type, listener, options) {
  dom.addEventListener(type, listener, options || false);
  return new Disposer(() => {
    dom.removeEventListener(type, listener, options || false);
  });
}
function onZoom(listener) {
  return addEventListener(window, "resize", (_ev) => {
    listener();
  });
}
function supports(cap) {
  switch (cap) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return false;
}
function getPointerId(event) {
  let id = event.pointerId || 0;
  return id;
}
function blur() {
  if (document.activeElement && document.activeElement != document.body) {
    if (document.activeElement.blur) {
      document.activeElement.blur();
    } else {
      let input = document.createElement("button");
      input.style.position = "fixed";
      input.style.top = "0px";
      input.style.left = "-10000px";
      document.body.appendChild(input);
      input.focus();
      input.blur();
      document.body.removeChild(input);
    }
  }
}
function focus(el) {
  if (el) {
    el.focus();
  }
}
function getRendererEvent(key) {
  if (supports("pointerevents")) {
    return key;
  } else if (supports("touchevents")) {
    switch (key) {
      case "pointerover":
        return "touchstart";
      case "pointerout":
        return "touchend";
      case "pointerleave":
        return "touchend";
      case "pointerdown":
        return "touchstart";
      case "pointermove":
        return "touchmove";
      case "pointerup":
        return "touchend";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  } else if (supports("mouseevents")) {
    switch (key) {
      case "pointerover":
        return "mouseover";
      case "pointerout":
        return "mouseout";
      case "pointerleave":
        return "mouseleave";
      case "pointerdown":
        return "mousedown";
      case "pointermove":
        return "mousemove";
      case "pointerup":
        return "mouseup";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  }
  return key;
}
function isTouchEvent(ev) {
  if (typeof Touch !== "undefined" && ev instanceof Touch) {
    return true;
  } else if (typeof PointerEvent !== "undefined" && ev instanceof PointerEvent && ev.pointerType != null) {
    switch (ev.pointerType) {
      case "touch":
      case "pen":
      case 2:
        return true;
      case "mouse":
      case 4:
        return false;
      default:
        return !(ev instanceof MouseEvent);
    }
  } else if (ev.type != null) {
    if (ev.type.match(/^mouse/)) {
      return false;
    }
  }
  return true;
}
function setStyle(dom, property, value) {
  dom.style[property] = value;
}
function getStyle(dom, property) {
  return dom.style[property];
}
function getEventTarget(event) {
  if (event.composedPath) {
    const path = event.composedPath();
    if (path.length === 0) {
      return null;
    } else {
      return path[0];
    }
  } else {
    return event.target;
  }
}
function contains(a, b) {
  let cursor = b;
  while (true) {
    if (a === cursor) {
      return true;
    } else if (cursor.parentNode === null) {
      if (cursor.host == null) {
        return false;
      } else {
        cursor = cursor.host;
      }
    } else {
      cursor = cursor.parentNode;
    }
  }
}
function isLocalEvent(event, target) {
  return event.target && contains(target.root.dom, event.target);
}
function setInteractive(target, interactive) {
  if (interactive) {
    target.style.pointerEvents = "auto";
  } else {
    target.style.pointerEvents = "none";
  }
}
function getEventKey(event) {
  if (event.key !== void 0) {
    return event.key;
  }
  switch (event.keyCode) {
    case 9:
      return "Tab";
    case 13:
      return "Enter";
    case 16:
      return "Shift";
    case 17:
      return "Control";
    case 27:
      return "Escape";
    case 32:
      return " ";
    case 37:
      return "ArrowLeft";
    case 38:
      return "ArrowUp";
    case 39:
      return "ArrowRight";
    case 40:
      return "ArrowDown";
    case 46:
      return "Delete";
  }
  return "" + event.keyCode;
}
function getShadowRoot(a) {
  let cursor = a;
  while (true) {
    if (cursor.parentNode === null) {
      if (cursor.host != null) {
        return cursor;
      } else {
        return null;
      }
    } else {
      cursor = cursor.parentNode;
    }
  }
}
var rootStylesheet;
function createStylesheet(element, text, nonce = "") {
  const e = document.createElement("style");
  e.type = "text/css";
  if (nonce != "") {
    e.setAttribute("nonce", nonce);
  }
  e.textContent = text;
  if (element === null) {
    document.head.appendChild(e);
  } else {
    element.appendChild(e);
  }
  return e;
}
function getStylesheet(element, nonce = "") {
  if (element === null) {
    if (rootStylesheet == null) {
      const e = document.createElement("style");
      e.type = "text/css";
      if (nonce != "") {
        e.setAttribute("nonce", nonce);
      }
      document.head.appendChild(e);
      rootStylesheet = e.sheet;
    }
    return rootStylesheet;
  } else {
    const e = document.createElement("style");
    e.type = "text/css";
    if (nonce != "") {
      e.setAttribute("nonce", nonce);
    }
    element.appendChild(e);
    return e.sheet;
  }
}
function appendStylesheet(root, selector) {
  const index = root.cssRules.length;
  root.insertRule(selector + "{}", index);
  return root.cssRules[index];
}
var StyleRule = class extends DisposerClass {
  /**
   * Constructor.
   *
   * @param selector  CSS selector
   * @param styles    An object of style attribute - value pairs
   */
  constructor(element, selector, styles, nonce = "") {
    super();
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rule", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._root = getStylesheet(element, nonce);
    try {
      this._rule = appendStylesheet(this._root, selector);
    } catch (err) {
      this._rule = appendStylesheet(this._root, ":not(*)");
    }
    each2(styles, (key, value) => {
      this.setStyle(key, value);
    });
  }
  /**
   * A CSS selector text.
   *
   * E.g.: `.myClass p`
   *
   * @param selector  CSS selector
   */
  set selector(selector) {
    this._rule.selectorText = selector;
  }
  /**
   * @return CSS selector
   */
  get selector() {
    return this._rule.selectorText;
  }
  // TODO test this
  _dispose() {
    const index = indexOf(this._root.cssRules, this._rule);
    if (index === -1) {
      throw new Error("Could not dispose StyleRule");
    } else {
      this._root.deleteRule(index);
    }
  }
  /**
   * Sets the same style properties with browser-specific prefixes.
   *
   * @param name   Attribute name
   * @param value  Attribute value
   */
  _setVendorPrefixName(name, value) {
    const style = this._rule.style;
    style.setProperty("-webkit-" + name, value, "");
    style.setProperty("-moz-" + name, value, "");
    style.setProperty("-ms-" + name, value, "");
    style.setProperty("-o-" + name, value, "");
    style.setProperty(name, value, "");
  }
  /**
   * Sets a value for specific style attribute.
   *
   * @param name   Attribute
   * @param value  Value
   */
  setStyle(name, value) {
    if (name === "transition") {
      this._setVendorPrefixName(name, value);
    } else {
      this._rule.style.setProperty(name, value, "");
    }
  }
};
var StyleSheet = class extends DisposerClass {
  /**
   * Constructor.
   *
   * @param text  CSS stylesheet
   */
  constructor(element, text, nonce = "") {
    super();
    Object.defineProperty(this, "_element", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._element = createStylesheet(element, text, nonce);
  }
  _dispose() {
    if (this._element.parentNode) {
      this._element.parentNode.removeChild(this._element);
    }
  }
};
function addClass(element, className) {
  if (!element) {
    return;
  }
  if (element.classList) {
    const classes = className.split(" ");
    each(classes, (name) => {
      element.classList.add(name);
    });
  } else {
    let currentClassName = element.getAttribute("class");
    if (currentClassName) {
      element.setAttribute("class", currentClassName.split(" ").filter((item) => {
        return item !== className;
      }).join(" ") + " " + className);
    } else {
      element.setAttribute("class", className);
    }
  }
}
function removeClass(element, className) {
  if (!element) {
    return;
  }
  if (element.classList) {
    element.classList.remove(className);
  } else {
    let currentClassName = element.getAttribute("class");
    if (currentClassName) {
      element.setAttribute("class", currentClassName.split(" ").filter((item) => {
        return item !== className;
      }).join(" "));
    }
  }
}
function iOS() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function getSafeResolution() {
  return iOS() ? 1 : void 0;
}
function relativeToValue(percent2, full) {
  if (isNumber(percent2)) {
    return percent2;
  } else if (percent2 != null && isNumber(percent2.value) && isNumber(full)) {
    return full * percent2.value;
  } else {
    return 0;
  }
}
function decimalPlaces(number) {
  let match = ("" + number).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return 0;
  }
  return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}
function padString(value, len = 0, char = "0") {
  if (typeof value !== "string") {
    value = value.toString();
  }
  return len > value.length ? Array(len - value.length + 1).join(char) + value : value;
}
function trimLeft(text) {
  return text.replace(/^[\s]*/, "");
}
function trimRight(text) {
  return text.replace(/[\s]*$/, "");
}
function trim(text) {
  return trimLeft(trimRight(text));
}
function truncateTextWithEllipsis(text, maxLength, breakWords = false, ellipsis = "...") {
  if (text.length > maxLength) {
    let lastNonAlphanumericIndex = maxLength - 1;
    while (lastNonAlphanumericIndex >= 0 && text.charAt(lastNonAlphanumericIndex).match(/\w/)) {
      lastNonAlphanumericIndex--;
    }
    if (lastNonAlphanumericIndex >= 0 && breakWords == false) {
      return text.substring(0, lastNonAlphanumericIndex + 1) + "...";
    } else {
      return text.substring(0, maxLength) + ellipsis;
    }
  } else {
    return text;
  }
}
function getFormat(format) {
  if (typeof format === "undefined") {
    return "string";
  }
  format = format.toLowerCase().replace(/^\[[^\]]*\]/, "");
  format = format.replace(/\[[^\]]+\]/, "");
  format = format.trim();
  let hints = format.match(/\/(date|number|duration)$/);
  if (hints) {
    return hints[1];
  }
  if (format === "number") {
    return "number";
  }
  if (format === "date") {
    return "date";
  }
  if (format === "duration") {
    return "duration";
  }
  if (format.match(/[#0]/)) {
    return "number";
  }
  if (format.match(/[ymwdhnsqaxkzgtei]/)) {
    return "date";
  }
  return "string";
}
function cleanFormat(format) {
  return format.replace(/\/(date|number|duration)$/i, "");
}
function stripTags(text) {
  return text ? text.replace(/<[^>]*>/g, "") : text;
}
function plainText(text) {
  return text ? stripTags(("" + text).replace(/[\n\r]+/g, ". ")) : text;
}
function escapeForRgex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function addSpacing(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char.toUpperCase() == char && i != 0) {
      result += " ";
    }
    result += char;
  }
  return result;
}
function splitString(source) {
  const rtlChar = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const splitPattern = /([^اأدذرزو]*[اأدذرزو])/gi;
  let segments = source.split(/(\s+)/);
  let result = [];
  segments.forEach((segment) => {
    if (segment.match(/^\s+$/)) {
      if (segment = " ") {
        segment = "  ";
      }
      result.push(segment);
    } else if (rtlChar.test(segment)) {
      let parts = segment.split(splitPattern).filter((part) => part !== "");
      result = result.concat(parts);
    } else {
      result = result.concat([...segment]);
    }
  });
  return result;
}
function getYearDay(date, utc = false) {
  utc;
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1e3;
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
function getWeek(date, _utc = false) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const firstDay = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - firstDay.getTime()) / 864e5 + 1) / 7);
}
function getWeekYear(date, _utc = false) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const firstDay = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return firstDay.getFullYear();
}
function getMonthWeek(date, utc = false) {
  const firstWeek = getWeek(new Date(date.getFullYear(), date.getMonth(), 1), utc);
  let currentWeek = getWeek(date, utc);
  if (currentWeek == 1) {
    currentWeek = 53;
  }
  return currentWeek - firstWeek + 1;
}
function getDayFromWeek(week, year, weekday = 1, utc = false) {
  let date = new Date(year, 0, 4, 0, 0, 0, 0);
  if (utc) {
    date.setUTCFullYear(year);
  }
  let day = week * 7 + weekday - ((date.getDay() || 7) + 3);
  return day;
}
function get12Hours(hours, base) {
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return base != null ? hours + (base - 1) : hours;
}
function getTimeZone(date, long = false, savings = false, utc = false, timezone) {
  if (utc) {
    return long ? "Coordinated Universal Time" : "UTC";
  } else if (timezone) {
    const d1 = date.toLocaleString("en-US", { timeZone: timezone });
    const d2 = date.toLocaleString("en-US", { timeZone: timezone, timeZoneName: long ? "long" : "short" });
    return trim(d2.substr(d1.length));
  }
  let wotz = date.toLocaleString("UTC");
  let wtz = date.toLocaleString("UTC", { timeZoneName: long ? "long" : "short" }).substr(wotz.length);
  if (savings === false) {
    wtz = wtz.replace(/ (standard|daylight|summer|winter) /i, " ");
  }
  return trim(wtz);
}
function getTimezoneOffset(timezone, targetDate) {
  const date = targetDate || new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0));
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
  return (tzDate.getTime() - utcDate.getTime()) / 6e4 * -1;
}
function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function hslToRgb(color2) {
  let r, g, b;
  let h = color2.h;
  let s2 = color2.s;
  let l = color2.l;
  if (s2 == 0) {
    r = g = b = l;
  } else {
    let hue2rgb = function hue2rgb2(p2, q2, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p2 + (q2 - p2) * 6 * t;
      }
      if (t < 1 / 2) {
        return q2;
      }
      if (t < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      }
      return p2;
    };
    let q = l < 0.5 ? l * (1 + s2) : l + s2 - l * s2;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function rgbToHsl(color2) {
  let r = color2.r / 255;
  let g = color2.g / 255;
  let b = color2.b / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0;
  let s2 = 0;
  let l = (max + min) / 2;
  if (max === min) {
    h = s2 = 0;
  } else {
    let d = max - min;
    s2 = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s: s2,
    l
  };
}
function hsvToHsl(hsv) {
  const l = hsv.v * (1 - hsv.s / 2);
  const s2 = l === 0 || l === 1 ? 0 : (hsv.v - l) / Math.min(l, 1 - l);
  return {
    h: hsv.h,
    s: s2,
    l,
    a: hsv.a
  };
}
function hslToHsv(hsl) {
  const v = hsl.l + hsl.s * Math.min(hsl.l, 1 - hsl.l);
  const s2 = v === 0 ? 0 : 2 * (1 - hsl.l / v);
  return {
    h: hsl.h,
    s: s2,
    v,
    a: hsl.a
  };
}
function lighten(rgb, percent2) {
  if (rgb) {
    return {
      r: Math.max(0, Math.min(255, rgb.r + getLightnessStep(rgb.r, percent2))),
      g: Math.max(0, Math.min(255, rgb.g + getLightnessStep(rgb.g, percent2))),
      b: Math.max(0, Math.min(255, rgb.b + getLightnessStep(rgb.b, percent2))),
      a: rgb.a
    };
  } else {
    return rgb;
  }
}
function getLightnessStep(value, percent2) {
  let base = percent2 > 0 ? 255 - value : value;
  return Math.round(base * percent2);
}
function brighten(rgb, percent2) {
  if (rgb) {
    let base = Math.min(Math.max(rgb.r, rgb.g, rgb.b), 230);
    let step = getLightnessStep(base, percent2);
    return {
      r: Math.max(0, Math.min(255, Math.round(rgb.r + step))),
      g: Math.max(0, Math.min(255, Math.round(rgb.g + step))),
      b: Math.max(0, Math.min(255, Math.round(rgb.b + step))),
      a: rgb.a
    };
  } else {
    return rgb;
  }
}
function getBrightnessStep(_value, percent2) {
  let base = 255;
  return Math.round(base * percent2);
}
function isLight(color2) {
  return (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1e3 >= 128;
}
function saturate(rgb, saturation) {
  if (rgb === void 0 || saturation == 1) {
    return rgb;
  }
  let hsl = rgbToHsl(rgb);
  hsl.s = saturation;
  return hslToRgb(hsl);
}
function alternativeColor(color2, lightAlternative = { r: 255, g: 255, b: 255 }, darkAlternative = { r: 255, g: 255, b: 255 }) {
  let light = lightAlternative;
  let dark = darkAlternative;
  if (isLight(darkAlternative)) {
    light = darkAlternative;
    dark = lightAlternative;
  }
  return isLight(color2) ? dark : light;
}
function mergeTags(tags1, tags2) {
  if (!tags1) {
    tags1 = [];
  }
  return [...tags1, ...tags2].filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
function sameBounds(a, b) {
  if (!b) {
    return false;
  }
  if (a.left != b.left) {
    return false;
  }
  if (a.right != b.right) {
    return false;
  }
  if (a.top != b.top) {
    return false;
  }
  if (a.bottom != b.bottom) {
    return false;
  }
  return true;
}

// node_modules/@amcharts/amcharts5/.internal/core/util/Animation.js
function waitForAnimations(animations) {
  return __awaiter(this, void 0, void 0, function* () {
    if (animations !== void 0) {
      const promises = [];
      each2(animations, (_, animation) => {
        promises.push(animation.waitForStop());
      });
      yield Promise.all(promises);
    }
  });
}
function range(diff, from, to) {
  return from + diff * (to - from);
}
function defaultInterpolate(diff, from, to) {
  if (diff >= 1) {
    return to;
  } else {
    return from;
  }
}
function percentInterpolate(diff, from, to) {
  return new Percent(range(diff, from.percent, to.percent));
}
function colorInterpolate(diff, from, to) {
  return Color.interpolate(diff, from, to);
}
function getInterpolate(from, to) {
  if (typeof from === "number" && typeof to === "number") {
    return range;
  }
  if (from instanceof Percent && to instanceof Percent) {
    return percentInterpolate;
  }
  if (from instanceof Color && to instanceof Color) {
    return colorInterpolate;
  }
  return defaultInterpolate;
}
var AnimationState;
(function(AnimationState2) {
  AnimationState2[AnimationState2["Stopped"] = 0] = "Stopped";
  AnimationState2[AnimationState2["Playing"] = 1] = "Playing";
  AnimationState2[AnimationState2["Paused"] = 2] = "Paused";
})(AnimationState || (AnimationState = {}));

// node_modules/@amcharts/amcharts5/.internal/core/util/Color.js
function string2hex(string) {
  if (string[0] === "#") {
    string = string.substr(1);
  }
  if (string.length == 3) {
    string = string[0].repeat(2) + string[1].repeat(2) + string[2].repeat(2);
  }
  return parseInt(string, 16);
}
function rgba2hex(color2) {
  color2 = color2.replace(/[ ]/g, "");
  let matches = color2.match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (matches) {
    matches.push("1");
  } else {
    matches = color2.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i);
    if (!matches) {
      return 0;
    }
  }
  let hex = "";
  for (let i = 1; i <= 3; i++) {
    let val = parseInt(matches[i]).toString(16);
    if (val.length == 1) {
      val = "0" + val;
    }
    hex += val;
  }
  return string2hex(hex);
}
function color(input) {
  return Color.fromAny(input);
}
var Color = class _Color {
  constructor(hex) {
    Object.defineProperty(this, "_hex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._hex = hex | 0;
  }
  /**
   * Color numeric value.
   */
  get hex() {
    return this._hex;
  }
  /**
   * Value of color's R channel.
   * @return R value
   */
  get r() {
    return this._hex >>> 16;
  }
  /**
   * Value of color's G channel.
   * @return G value
   */
  get g() {
    return this._hex >> 8 & 255;
  }
  /**
   * Value of color's B channel.
   * @return B value
   */
  get b() {
    return this._hex & 255;
  }
  /**
   * Returns color CSS representation in form of `rgba(r, g, b, a)` string.
   *
   * @param   alpha  Opacity
   * @return         CSS string
   */
  toCSS(alpha = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + alpha + ")";
  }
  /**
   * Returns color CSS representation in form of `#rgb` string.
   *
   * @return         CSS string
   */
  toCSSHex() {
    return "#" + padString(this.r.toString(16), 2) + padString(this.g.toString(16), 2) + padString(this.b.toString(16), 2);
  }
  /**
   * Returns color's HSL info.
   * @param   alpha Opacity
   * @return        HSL info
   */
  toHSL(alpha = 1) {
    return rgbToHsl({
      r: this.r,
      g: this.g,
      b: this.b,
      a: alpha
    });
  }
  /**
   * Converts HSL values into a new [[Color]] object.
   *
   * @param   h H value
   * @param   s S value
   * @param   l L value
   * @return    Color object
   */
  static fromHSL(h, s2, l) {
    const rgb = hslToRgb({
      h,
      s: s2,
      l
    });
    return this.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  toString() {
    return this.toCSSHex();
  }
  /**
   * Converts hex number into a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromHex(0xff0000) // red
   * ```
   * ```JavaScript
   * Color.fromHex(0xff0000) // red
   * ```
   *
   * @param   hex  Hex color
   * @return       Color
   */
  static fromHex(hex) {
    return new _Color(hex);
  }
  /**
   * Converts RGB values to a new [[Color]] object.
   *
   * @param   r  R value
   * @param   g  G value
   * @param   b  B value
   * @return     Color
   */
  static fromRGB(r, g, b) {
    return new _Color((b | 0) + (g << 8) + (r << 16));
  }
  /**
   * Converts RGB string to a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromString("#ff0000") // red
   * ```
   * ```JavaScript
   * Color.fromString("#ff0000") // red
   * ```
   *
   * @param   s  RGB string
   * @return     Color
   */
  static fromString(s2) {
    return new _Color(string2hex(s2));
  }
  /**
   * Converts CSS rgba() syntax to a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromCSS("rgba(255, 0, 0, 1)") // red
   * ```
   * ```JavaScript
   * Color.fromCSS("rgba(255, 0, 0, 1)") // red
   * ```
   *
   * @param  {string} s [description]
   * @return {Color}    [description]
   */
  static fromCSS(s2) {
    return new _Color(rgba2hex(s2));
  }
  /**
   * Convert to color from virtually anything.
   *
   * Will throw an exception if unable to resolve the color.
   *
   * @param   s  Source
   * @return     Color
   */
  static fromAny(s2) {
    if (isString(s2)) {
      if (s2[0] == "#") {
        return _Color.fromString(s2);
      } else if (s2.substr(0, 3) == "rgb") {
        return _Color.fromCSS(s2);
      }
    } else if (isNumber(s2)) {
      return _Color.fromHex(s2);
    } else if (s2 instanceof _Color) {
      return _Color.fromHex(s2.hex);
    }
    throw new Error("Unknown color syntax: " + s2);
  }
  /**
   * Returns a new [[Color]] object based on either `lightAlternative` or
   * `darkAlternative` depending on which one is more contrasting with
   * the `color`.
   *
   * @param   color             Reference color
   * @param   lightAlternative  Light color
   * @param   darkAlternative   Dark color
   * @return                    Alternative color
   */
  static alternative(color2, lightAlternative, darkAlternative) {
    const rgb = alternativeColor({ r: color2.r, g: color2.g, b: color2.b }, lightAlternative ? { r: lightAlternative.r, g: lightAlternative.g, b: lightAlternative.b } : void 0, darkAlternative ? { r: darkAlternative.r, g: darkAlternative.g, b: darkAlternative.b } : void 0);
    return this.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns an intermediate Color between two reference colors depending on
   * the progress (`diff`) between the two.
   *
   * @param   diff  Progress
   * @param   from  Source color
   * @param   to    Target color
   * @param   mode  Interpolation mode
   * @return        Color
   */
  static interpolate(diff, from, to, mode = "rgb") {
    if (mode == "hsl") {
      const fromHSL = from.toHSL();
      const toHSL = to.toHSL();
      return _Color.fromHSL(range(diff, fromHSL.h, toHSL.h), range(diff, fromHSL.s, toHSL.s), range(diff, fromHSL.l, toHSL.l));
    } else {
      return _Color.fromRGB(range(diff, from.r, to.r), range(diff, from.g, to.g), range(diff, from.b, to.b));
    }
  }
  /**
   * Returns a new [[Color]] lightened by `percent` value.
   *
   * Use negative value to darken the color.
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static lighten(color2, percent2) {
    const rgb = lighten({ r: color2.r, g: color2.g, b: color2.b }, percent2);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns a new [[Color]] brightened by `percent` value.
   *
   * Use negative value to dim the color.
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static brighten(color2, percent2) {
    const rgb = brighten({ r: color2.r, g: color2.g, b: color2.b }, percent2);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns a new [[Color]] saturated by `percent` value.
   *
   * Value range is between `0` (fully desaturated), to `1` (full color).
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static saturate(color2, percent2) {
    const rgb = saturate({ r: color2.r, g: color2.g, b: color2.b }, percent2);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/util/Math.js
var Math_exports = {};
__export(Math_exports, {
  DEGREES: () => DEGREES,
  HALFPI: () => HALFPI,
  PI: () => PI,
  RADIANS: () => RADIANS,
  boundsOverlap: () => boundsOverlap,
  ceil: () => ceil,
  circlesOverlap: () => circlesOverlap,
  closest: () => closest,
  cos: () => cos,
  fitAngleToRange: () => fitAngleToRange,
  fitToRange: () => fitToRange,
  getAngle: () => getAngle,
  getArcBounds: () => getArcBounds,
  getArcPoint: () => getArcPoint,
  getCubicControlPointA: () => getCubicControlPointA,
  getCubicControlPointB: () => getCubicControlPointB,
  getPointOnLine: () => getPointOnLine,
  getPointOnQuadraticCurve: () => getPointOnQuadraticCurve,
  inBounds: () => inBounds,
  mergeBounds: () => mergeBounds,
  normalizeAngle: () => normalizeAngle,
  round: () => round,
  sin: () => sin,
  spiralPoints: () => spiralPoints,
  tan: () => tan
});
var PI = Math.PI;
var HALFPI = PI / 2;
var RADIANS = PI / 180;
var DEGREES = 180 / PI;
function round(value, precision, floor) {
  if (!isNumber(precision) || precision <= 0) {
    let rounded = Math.round(value);
    if (floor) {
      if (rounded - value == 0.5) {
        rounded--;
      }
    }
    return rounded;
  } else {
    let d = Math.pow(10, precision);
    return Math.round(value * d) / d;
  }
}
function ceil(value, precision) {
  if (!isNumber(precision) || precision <= 0) {
    return Math.ceil(value);
  } else {
    let d = Math.pow(10, precision);
    return Math.ceil(value * d) / d;
  }
}
function getCubicControlPointA(p02, p1, p2, tensionX, tensionY) {
  return { x: (-p02.x + p1.x / tensionX + p2.x) * tensionX, y: (-p02.y + p1.y / tensionY + p2.y) * tensionY };
}
function getCubicControlPointB(p1, p2, p3, tensionX, tensionY) {
  return { x: (p1.x + p2.x / tensionX - p3.x) * tensionX, y: (p1.y + p2.y / tensionY - p3.y) * tensionY };
}
function fitToRange(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function sin(angle) {
  return Math.sin(RADIANS * angle);
}
function tan(angle) {
  return Math.tan(RADIANS * angle);
}
function cos(angle) {
  return Math.cos(RADIANS * angle);
}
function normalizeAngle(value) {
  value = value % 360;
  if (value < 0) {
    value += 360;
  }
  return value;
}
function getArcBounds(cx, cy, startAngle, endAngle, radius) {
  let minX = Number.MAX_VALUE;
  let minY = Number.MAX_VALUE;
  let maxX = -Number.MAX_VALUE;
  let maxY = -Number.MAX_VALUE;
  let bpoints = [];
  bpoints.push(getArcPoint(radius, startAngle));
  bpoints.push(getArcPoint(radius, endAngle));
  let fromAngle = Math.min(Math.floor(startAngle / 90) * 90, Math.floor(endAngle / 90) * 90);
  let toAngle = Math.max(Math.ceil(startAngle / 90) * 90, Math.ceil(endAngle / 90) * 90);
  for (let angle = fromAngle; angle <= toAngle; angle += 90) {
    if (angle >= startAngle && angle <= endAngle) {
      bpoints.push(getArcPoint(radius, angle));
    }
  }
  for (let i = 0; i < bpoints.length; i++) {
    let pt = bpoints[i];
    if (pt.x < minX) {
      minX = pt.x;
    }
    if (pt.y < minY) {
      minY = pt.y;
    }
    if (pt.x > maxX) {
      maxX = pt.x;
    }
    if (pt.y > maxY) {
      maxY = pt.y;
    }
  }
  return { left: cx + minX, top: cy + minY, right: cx + maxX, bottom: cy + maxY };
}
function getArcPoint(radius, arc) {
  return { x: radius * cos(arc), y: radius * sin(arc) };
}
function mergeBounds(bounds) {
  const len = bounds.length;
  if (len > 0) {
    let bound = bounds[0];
    let left = bound.left;
    let top = bound.top;
    let right = bound.right;
    let bottom = bound.bottom;
    if (len > 1) {
      for (let i = 1; i < len; i++) {
        bound = bounds[i];
        left = Math.min(bound.left, left);
        right = Math.max(bound.right, right);
        top = Math.min(bound.top, top);
        bottom = Math.max(bound.bottom, bottom);
      }
    }
    return { left, right, top, bottom };
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function fitAngleToRange(value, startAngle, endAngle) {
  if (startAngle > endAngle) {
    let temp = startAngle;
    startAngle = endAngle;
    endAngle = temp;
  }
  value = normalizeAngle(value);
  let count = (startAngle - normalizeAngle(startAngle)) / 360;
  if (value < startAngle) {
    value += 360 * (count + 1);
  }
  let maxEnd = startAngle + (endAngle - startAngle) / 2 + 180;
  let maxStart = startAngle + (endAngle - startAngle) / 2 - 180;
  if (value > endAngle) {
    if (value - 360 > startAngle) {
      value -= 360;
    } else {
      if (value < maxEnd) {
        value = endAngle;
      } else {
        value = startAngle;
      }
    }
  }
  if (value < startAngle) {
    if (value > maxStart) {
      value = startAngle;
    } else {
      value = endAngle;
    }
  }
  return value;
}
function inBounds(point, bounds) {
  if (point.x >= bounds.left && point.y >= bounds.top && point.x <= bounds.right && point.y <= bounds.bottom) {
    return true;
  }
  return false;
}
function getAngle(point1, point2) {
  if (!point2) {
    point2 = { x: point1.x * 2, y: point1.y * 2 };
  }
  let diffX = point2.x - point1.x;
  let diffY = point2.y - point1.y;
  let angle = Math.atan2(diffY, diffX) * DEGREES;
  if (angle < 0) {
    angle += 360;
  }
  return normalizeAngle(angle);
}
function getPointOnQuadraticCurve(pointA, pointB, controlPoint, position) {
  let x = (1 - position) * (1 - position) * pointA.x + 2 * (1 - position) * position * controlPoint.x + position * position * pointB.x;
  let y = (1 - position) * (1 - position) * pointA.y + 2 * (1 - position) * position * controlPoint.y + position * position * pointB.y;
  return { x, y };
}
function getPointOnLine(pointA, pointB, position) {
  return { x: pointA.x + (pointB.x - pointA.x) * position, y: pointA.y + (pointB.y - pointA.y) * position };
}
function closest(values, referenceValue) {
  return values.reduce(function(prev, curr) {
    return Math.abs(curr - referenceValue) < Math.abs(prev - referenceValue) ? curr : prev;
  });
}
function boundsOverlap(bounds1, bounds2) {
  const horizontalOverlap = bounds1.left < bounds2.right && bounds1.right > bounds2.left;
  const verticalOverlap = bounds1.top < bounds2.bottom && bounds1.bottom > bounds2.top;
  return horizontalOverlap && verticalOverlap;
}
function spiralPoints(cx, cy, radius, radiusY, innerRadius, step, radiusStep, startAngle, endAngle) {
  let r = innerRadius + 0.01;
  startAngle = normalizeAngle(startAngle);
  endAngle = normalizeAngle(endAngle);
  let angle = startAngle * RADIANS;
  if (endAngle < startAngle) {
    endAngle += 360;
  }
  let points = [];
  while (r < radius + radiusStep) {
    let stepSize = step;
    if (stepSize / 2 > r) {
      stepSize = 2 * r;
    }
    let c = Math.max(0.01, Math.min(1, r / 200));
    stepSize = stepSize * c;
    let degrees = angle * DEGREES;
    let point = { x: cx + r * Math.cos(angle), y: cy + r * radiusY / radius * Math.sin(angle) };
    points.push(point);
    r = innerRadius + 0.01 + (degrees - startAngle) / 360 * radiusStep;
    angle += 2 * Math.asin(stepSize / 2 / r);
    if (angle * DEGREES > endAngle + 360 * Math.ceil((radius - innerRadius) / radiusStep)) {
      break;
    }
  }
  points.shift();
  return points;
}
function circlesOverlap(circle1, circle2) {
  return Math.hypot(circle1.x - circle2.x, circle1.y - circle2.y) <= circle1.radius + circle2.radius;
}

// node_modules/@amcharts/amcharts5/.internal/core/util/Ease.js
var Ease_exports = {};
__export(Ease_exports, {
  bounce: () => bounce,
  circle: () => circle,
  cubic: () => cubic,
  elastic: () => elastic,
  exp: () => exp,
  inOut: () => inOut,
  linear: () => linear,
  out: () => out,
  pow: () => pow,
  quad: () => quad,
  sine: () => sine,
  yoyo: () => yoyo
});
function linear(t) {
  return t;
}
function quad(t) {
  return t * t;
}
function cubic(t) {
  return t * t * t;
}
function pow(t, e) {
  return Math.pow(t, e);
}
function exp(t) {
  return Math.pow(2, 10 * t - 10);
}
function sine(t) {
  return 1 - Math.cos(t * HALFPI);
}
function circle(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function yoyo(ease) {
  return function(t) {
    if (t < 0.5) {
      return ease(t * 2);
    } else {
      return ease((1 - t) * 2);
    }
  };
}
function out(ease) {
  return function(t) {
    return 1 - ease(1 - t);
  };
}
function inOut(ease) {
  return function(t) {
    if (t <= 0.5) {
      return ease(t * 2) / 2;
    } else {
      return 1 - ease((1 - t) * 2) / 2;
    }
  };
}
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;
function bounce(t) {
  return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
  t = t;
  if (t < b1) {
    return b0 * t * t;
  } else if (t < b3) {
    return b0 * (t -= b2) * t + b4;
  } else if (t < b6) {
    return b0 * (t -= b5) * t + b7;
  } else {
    return b0 * (t -= b8) * t + b9;
  }
}
var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3 / tau;
var s = Math.asin(1 / amplitude) * period;
function elastic(t) {
  let v = t;
  return amplitude * Math.pow(2, 10 * --v) * Math.sin((s - v) / period);
}

// node_modules/@amcharts/amcharts5/.internal/core/Registry.js
var Registry = class {
  constructor() {
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "5.13.6"
    });
    Object.defineProperty(this, "licenses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "entitiesById", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "rootElements", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
var registry = new Registry();
function addLicense(license) {
  registry.licenses.push(license);
}
function disposeAllRootElements() {
  let root;
  while (root = registry.rootElements.pop()) {
    root.dispose();
  }
}
function getRootById(id) {
  let found;
  registry.rootElements.forEach((item) => {
    if (item.dom.id == id) {
      found = item;
    }
  });
  return found;
}

// node_modules/@amcharts/amcharts5/.internal/core/util/States.js
var State = class {
  constructor(entity, settings) {
    Object.defineProperty(this, "_entity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_userSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    this._entity = entity;
    this._settings = settings;
    each2(settings, (key) => {
      this._userSettings[key] = true;
    });
  }
  get(key, fallback) {
    const value = this._settings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * @ignore
   */
  setRaw(key, value) {
    this._settings[key] = value;
  }
  /**
   * Sets a setting `value` for the specified `key` to be set when the state
   * is applied.
   *
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  set(key, value) {
    this._userSettings[key] = true;
    this.setRaw(key, value);
  }
  /**
   * Removes a setting value for the specified `key`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   */
  remove(key) {
    delete this._userSettings[key];
    delete this._settings[key];
  }
  /**
   * Sets multiple settings at once.
   *
   * `settings` must be an object with key: value pairs.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param settings Settings
   */
  setAll(settings) {
    keys(settings).forEach((key) => {
      this.set(key, settings[key]);
    });
  }
  _eachSetting(f) {
    each2(this._settings, f);
  }
  /**
   * Applies the state to the target element.
   *
   * All setting values are set immediately.
   */
  apply() {
    const seen = {};
    seen["stateAnimationEasing"] = true;
    seen["stateAnimationDuration"] = true;
    const defaultState = this._entity.states.lookup("default");
    this._eachSetting((key, value) => {
      if (!seen[key]) {
        seen[key] = true;
        if (this !== defaultState) {
          if (!(key in defaultState._settings)) {
            defaultState._settings[key] = this._entity.get(key);
          }
        }
        this._entity.set(key, value);
      }
    });
  }
  /**
   * Applies the state to the target element.
   *
   * Returns an object representing all [[Animation]] objects created for
   * each setting key transition.
   *
   * @return           Animations
   */
  applyAnimate(duration) {
    if (duration == null) {
      duration = this._settings.stateAnimationDuration;
    }
    if (duration == null) {
      duration = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0));
    }
    let easing = this._settings.stateAnimationEasing;
    if (easing == null) {
      easing = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", cubic));
    }
    const defaultState = this._entity.states.lookup("default");
    const seen = {};
    seen["stateAnimationEasing"] = true;
    seen["stateAnimationDuration"] = true;
    const animations = {};
    this._eachSetting((key, value) => {
      if (!seen[key]) {
        seen[key] = true;
        if (this != defaultState) {
          if (!(key in defaultState._settings)) {
            defaultState._settings[key] = this._entity.get(key);
          }
        }
        const animation = this._entity.animate({
          key,
          to: value,
          duration,
          easing
        });
        if (animation) {
          animations[key] = animation;
        }
      }
    });
    return animations;
  }
};
var States = class {
  constructor(entity) {
    Object.defineProperty(this, "_states", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_entity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._entity = entity;
  }
  /**
   * Checks if a state by `name` exists. Returns it there is one.
   *
   * @param  name  State name
   * @return       State
   */
  lookup(name) {
    return this._states[name];
  }
  /**
   * Sets supplied `settings` on a state by the `name`.
   *
   * If such state does not yet exists, it is created.
   *
   * @param   name      State name
   * @param   settings  Settings
   * @return            New State
   */
  create(name, settings) {
    const state = this._states[name];
    if (state) {
      state.setAll(settings);
      return state;
    } else {
      const state2 = new State(this._entity, settings);
      this._states[name] = state2;
      return state2;
    }
  }
  /**
   * Removes the state called `name`.
   *
   * @param   name      State name
   */
  remove(name) {
    delete this._states[name];
  }
  /**
   * Applies a named state to the target element.
   *
   * @param  newState  State name
   */
  apply(newState) {
    const state = this._states[newState];
    if (state) {
      state.apply();
    }
    this._entity._applyState(newState);
  }
  /**
   * Applies a named state to the element.
   *
   * Returns an object representing all [[Animation]] objects created for
   * each setting key transition.
   *
   * @param   newState  State name
   * @return            Animations
   */
  applyAnimate(newState, duration) {
    let animations;
    const state = this._states[newState];
    if (state) {
      animations = state.applyAnimate(duration);
    }
    this._entity._applyStateAnimated(newState, duration);
    return animations;
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/util/Entity.js
var Adapters = class {
  constructor(entity) {
    Object.defineProperty(this, "_entity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_callbacks", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_disabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    this._entity = entity;
  }
  /**
   * Add a function (`callback`) that will modify value for setting `key`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/adapters/} for more info
   */
  add(key, callback) {
    let callbacks = this._callbacks[key];
    if (callbacks === void 0) {
      callbacks = this._callbacks[key] = [];
    }
    callbacks.push(callback);
    this._entity._markDirtyKey(key);
    return new Disposer(() => {
      if (removeFirst(callbacks, callback)) {
        this._entity._markDirtyKey(key);
      }
    });
  }
  /**
   * Removes all adapters for the specific key.
   *
   * @since 5.1.0
   */
  remove(key) {
    const callbacks = this._callbacks[key];
    if (callbacks !== void 0) {
      delete this._callbacks[key];
      if (callbacks.length !== 0) {
        this._entity._markDirtyKey(key);
      }
    }
  }
  /**
   * Enables (previously disabled) adapters for specific key.
   *
   * @since 5.1.0
   */
  enable(key) {
    if (this._disabled[key]) {
      delete this._disabled[key];
      this._entity._markDirtyKey(key);
    }
  }
  /**
   * Disables all adapters for specific key.
   *
   * @since 5.1.0
   */
  disable(key) {
    if (!this._disabled[key]) {
      this._disabled[key] = true;
      this._entity._markDirtyKey(key);
    }
  }
  /**
   * @ignore
   */
  fold(key, value) {
    if (!this._disabled[key]) {
      const callbacks = this._callbacks[key];
      if (callbacks !== void 0) {
        for (let i = 0, len = callbacks.length; i < len; ++i) {
          value = callbacks[i](value, this._entity, key);
        }
      }
    }
    return value;
  }
};
var Animation = class {
  constructor(animation, from, to, duration, easing, loops, startingTime) {
    Object.defineProperty(this, "_animation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_from", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_to", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_duration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_easing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_loops", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_interpolate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_oldTime", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_time", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_stopped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_playing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new EventDispatcher()
    });
    this._animation = animation;
    this._from = from;
    this._to = to;
    this._duration = duration;
    this._easing = easing;
    this._loops = loops;
    this._interpolate = getInterpolate(from, to);
    this._oldTime = startingTime;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    if (!this._stopped) {
      this._stopped = true;
      this._playing = false;
      if (this.events.isEnabled("stopped")) {
        this.events.dispatch("stopped", {
          type: "stopped",
          target: this
        });
      }
    }
  }
  pause() {
    this._playing = false;
    this._oldTime = null;
  }
  play() {
    if (!this._stopped && !this._playing) {
      this._playing = true;
      this._animation._startAnimation();
    }
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((resolve, _reject) => {
      if (this._stopped) {
        resolve();
      } else {
        const listener = () => {
          stopped.dispose();
          resolve();
        };
        const stopped = this.events.on("stopped", listener);
      }
    });
  }
  _checkEnded() {
    if (this._loops > 1) {
      --this._loops;
      return false;
    } else {
      return true;
    }
  }
  _run(currentTime) {
    if (this._oldTime !== null) {
      this._time += currentTime - this._oldTime;
      if (this._time > this._duration) {
        this._time = this._duration;
      }
    }
    this._oldTime = currentTime;
  }
  _reset(currentTime) {
    this._oldTime = currentTime;
    this._time = 0;
  }
  _value(diff) {
    return this._interpolate(this._easing(diff), this._from, this._to);
  }
};
var counter = 0;
var Settings = class {
  constructor(settings) {
    Object.defineProperty(this, "uid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ++counter
    });
    Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_privateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_settingEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_privateSettingEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_prevSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_prevPrivateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_animatingSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_animatingPrivateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_userProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "enableDispose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    this._settings = settings;
  }
  _checkDirty() {
    keys(this._settings).forEach((key) => {
      this._userProperties[key] = true;
      this._markDirtyKey(key);
    });
  }
  /**
   * @ignore
   */
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(currentTime) {
    let state = AnimationState.Stopped;
    if (!this.isDisposed()) {
      let playing = false;
      let paused = false;
      each2(this._animatingSettings, (key, animation) => {
        if (animation.stopped) {
          this._stopAnimation(key);
        } else if (animation.playing) {
          animation._run(currentTime);
          const diff = animation.percentage;
          if (diff >= 1) {
            if (animation._checkEnded()) {
              this.set(key, animation._value(1));
            } else {
              playing = true;
              animation._reset(currentTime);
              this._set(key, animation._value(1));
            }
          } else {
            playing = true;
            this._set(key, animation._value(diff));
          }
        } else {
          paused = true;
        }
      });
      each2(this._animatingPrivateSettings, (key, animation) => {
        if (animation.stopped) {
          this._stopAnimationPrivate(key);
        } else if (animation.playing) {
          animation._run(currentTime);
          const diff = animation.percentage;
          if (diff >= 1) {
            if (animation._checkEnded()) {
              this.setPrivate(key, animation._value(1));
            } else {
              playing = true;
              animation._reset(currentTime);
              this._setPrivate(key, animation._value(1));
            }
          } else {
            playing = true;
            this._setPrivate(key, animation._value(diff));
          }
        } else {
          paused = true;
        }
      });
      if (playing) {
        state = AnimationState.Playing;
      } else if (paused) {
        state = AnimationState.Paused;
      }
    }
    return state;
  }
  _markDirtyKey(_key) {
    this.markDirty();
  }
  _markDirtyPrivateKey(_key) {
    this.markDirty();
  }
  /**
   * Sets a callback function to invoke when specific key of settings changes
   * or is set.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Settings key
   * @param   callback  Callback
   * @return            Disposer for event
   */
  on(key, callback) {
    let events = this._settingEvents[key];
    if (events === void 0) {
      events = this._settingEvents[key] = [];
    }
    events.push(callback);
    return new Disposer(() => {
      removeFirst(events, callback);
      if (events.length === 0) {
        delete this._settingEvents[key];
      }
    });
  }
  /**
   * Removes a callback for when value of a setting changes.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Private settings key
   * @param   callback  Callback
   * @since 5.9.2
   */
  off(key, callback) {
    let events = this._settingEvents[key];
    if (events !== void 0 && callback !== void 0) {
      removeFirst(events, callback);
    } else {
      delete this._settingEvents[key];
    }
  }
  /**
   * Sets a callback function to invoke when specific key of private settings
   * changes or is set.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Private settings key
   * @param   callback  Callback
   * @return            Disposer for event
   */
  onPrivate(key, callback) {
    let events = this._privateSettingEvents[key];
    if (events === void 0) {
      events = this._privateSettingEvents[key] = [];
    }
    events.push(callback);
    return new Disposer(() => {
      removeFirst(events, callback);
      if (events.length === 0) {
        delete this._privateSettingEvents[key];
      }
    });
  }
  /**
   * Removes a callback for when value of a private setting changes.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Private settings key
   * @param   callback  Callback
   * @since 5.9.2
   */
  offPrivate(key, callback) {
    let events = this._privateSettingEvents[key];
    if (events !== void 0 && callback !== void 0) {
      removeFirst(events, callback);
    } else {
      delete this._privateSettingEvents[key];
    }
  }
  /**
   * @ignore
   */
  getRaw(key, fallback) {
    const value = this._settings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * Returns `true` if the setting exists.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key        Settings key
   * @return  {boolean}  Key exists
   */
  has(key) {
    return key in this._settings;
  }
  get(key, fallback) {
    return this.getRaw(key, fallback);
  }
  _sendKeyEvent(key, value) {
    const events = this._settingEvents[key];
    if (events !== void 0) {
      each(events, (callback) => {
        callback(value, this, key);
      });
    }
  }
  _sendPrivateKeyEvent(key, value) {
    const events = this._privateSettingEvents[key];
    if (events !== void 0) {
      each(events, (callback) => {
        callback(value, this, key);
      });
    }
  }
  /**
   * @ignore
   */
  _setRaw(key, old, value) {
    this._prevSettings[key] = old;
    this._sendKeyEvent(key, value);
  }
  /**
   * @ignore
   */
  setRaw(key, value) {
    const old = this._settings[key];
    this._settings[key] = value;
    if (old !== value) {
      this._setRaw(key, old, value);
    }
  }
  /**
   * @ignore
   */
  _set(key, value) {
    const old = this._settings[key];
    this._settings[key] = value;
    if (old !== value) {
      this._setRaw(key, old, value);
      this._markDirtyKey(key);
    }
  }
  _stopAnimation(key) {
    const animation = this._animatingSettings[key];
    if (animation) {
      delete this._animatingSettings[key];
      animation.stop();
    }
  }
  /**
   * Sets a setting `value` for the specified `key`, and returns the same `value`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  set(key, value) {
    this._set(key, value);
    this._stopAnimation(key);
    return value;
  }
  /**
   * Removes a setting value for the specified `key`;
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   */
  remove(key) {
    if (key in this._settings) {
      this._prevSettings[key] = this._settings[key];
      delete this._settings[key];
      this._sendKeyEvent(key, void 0);
      this._markDirtyKey(key);
    }
    this._stopAnimation(key);
  }
  /**
   * Removes all keys;
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   */
  removeAll() {
    each(keys(this._settings), (key) => {
      this.remove(key);
    });
  }
  /**
   * Returns a value of a private setting.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/#Private_settings} for more info
   */
  getPrivate(key, fallback) {
    const value = this._privateSettings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * @ignore
   */
  _setPrivateRaw(key, old, value) {
    this._prevPrivateSettings[key] = old;
    this._sendPrivateKeyEvent(key, value);
  }
  /**
   * @ignore
   */
  setPrivateRaw(key, value) {
    const old = this._privateSettings[key];
    this._privateSettings[key] = value;
    if (old !== value) {
      this._setPrivateRaw(key, old, value);
    }
  }
  /**
   * @ignore
   */
  _setPrivate(key, value) {
    const old = this._privateSettings[key];
    this._privateSettings[key] = value;
    if (old !== value) {
      this._setPrivateRaw(key, old, value);
      this._markDirtyPrivateKey(key);
    }
  }
  _stopAnimationPrivate(key) {
    const animation = this._animatingPrivateSettings[key];
    if (animation) {
      animation.stop();
      delete this._animatingPrivateSettings[key];
    }
  }
  /**
   * @ignore
   */
  setPrivate(key, value) {
    this._setPrivate(key, value);
    this._stopAnimationPrivate(key);
    return value;
  }
  /**
   * @ignore
   */
  removePrivate(key) {
    if (key in this._privateSettings) {
      this._prevPrivateSettings[key] = this._privateSettings[key];
      delete this._privateSettings[key];
      this._markDirtyPrivateKey(key);
    }
    this._stopAnimationPrivate(key);
  }
  /**
   * Sets multiple settings at once.
   *
   * `settings` must be an object with key: value pairs.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param settings Settings
   */
  setAll(settings) {
    each2(settings, (key, value) => {
      this.set(key, value);
    });
  }
  /**
   * Animates setting values from current/start values to new ones.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/animations/#Animating_settings} for more info
   * @param   options  Animation options
   * @return           Animation object
   */
  animate(options) {
    const key = options.key;
    const to = options.to;
    const duration = options.duration || 0;
    const loops = options.loops || 1;
    const from = options.from === void 0 ? this.get(key) : options.from;
    const easing = options.easing === void 0 ? linear : options.easing;
    if (duration === 0) {
      this.set(key, to);
    } else {
      if (from === void 0 || from === to) {
        this.set(key, to);
      } else {
        this.set(key, from);
        const animation2 = this._animatingSettings[key] = new Animation(this, from, to, duration, easing, loops, this._animationTime());
        this._startAnimation();
        return animation2;
      }
    }
    const animation = new Animation(this, from, to, duration, easing, loops, null);
    animation.stop();
    return animation;
  }
  /**
   * @ignore
   */
  animatePrivate(options) {
    const key = options.key;
    const to = options.to;
    const duration = options.duration || 0;
    const loops = options.loops || 1;
    const from = options.from === void 0 ? this.getPrivate(key) : options.from;
    const easing = options.easing === void 0 ? linear : options.easing;
    if (duration === 0) {
      this.setPrivate(key, to);
    } else {
      if (from === void 0 || from === to) {
        this.setPrivate(key, to);
      } else {
        this.setPrivate(key, from);
        const animation2 = this._animatingPrivateSettings[key] = new Animation(this, from, to, duration, easing, loops, this._animationTime());
        this._startAnimation();
        return animation2;
      }
    }
    const animation = new Animation(this, from, to, duration, easing, loops, null);
    animation.stop();
    return animation;
  }
  _dispose() {
  }
  /**
   * Returns `true` if this element is disposed.
   *
   * @return Disposed
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Disposes this object.
   */
  dispose() {
    if (this.enableDispose && !this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
};
var Entity = class extends Settings {
  /**
   * IMPORTANT! Do not instantiate this class via `new Class()` syntax.
   *
   * Use static method `Class.new()` instead.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @ignore
   */
  constructor(root, settings, isReal, templates = []) {
    super(settings);
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_user_id", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "states", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new States(this)
    });
    Object.defineProperty(this, "adapters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Adapters(this)
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createEvents()
    });
    Object.defineProperty(this, "_userPrivateProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirtyPrivate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_templates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_internalTemplates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_defaultThemes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_templateDisposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_disposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_runSetup", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_disposerProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
    this._root = root;
    this._internalTemplates = templates;
    if (settings.id) {
      this._registerId(settings.id);
    }
  }
  /**
   * Use this method to create an instance of this class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @param   root      Root element
   * @param   settings  Settings
   * @param   template  Template
   * @return            Instantiated object
   */
  static new(root, settings, template) {
    const x = new this(root, settings, true);
    x._template = template;
    x._afterNew();
    return x;
  }
  static _new(root, settings, templates = []) {
    const x = new this(root, settings, true, templates);
    x._afterNew();
    return x;
  }
  _afterNew() {
    this._checkDirty();
    let shouldApply = false;
    const template = this._template;
    if (template) {
      shouldApply = true;
      template._setObjectTemplate(this);
    }
    each(this._internalTemplates, (template2) => {
      shouldApply = true;
      template2._setObjectTemplate(this);
    });
    if (shouldApply) {
      this._applyTemplates(false);
    }
    this.states.create("default", {});
    this._setDefaults();
  }
  // This is the same as _afterNew, except it also applies the themes.
  // This should only be used for classes which don't have a parent (because they extend from Entity and not Sprite).
  _afterNewApplyThemes() {
    this._checkDirty();
    const template = this._template;
    if (template) {
      template._setObjectTemplate(this);
    }
    each(this._internalTemplates, (template2) => {
      template2._setObjectTemplate(this);
    });
    this.states.create("default", {});
    this._setDefaults();
    this._applyThemes();
  }
  _createEvents() {
    return new EventDispatcher();
  }
  /**
   * @ignore
   */
  get classNames() {
    return this.constructor.classNames;
  }
  /**
   * @ignore
   */
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefaultFn(key, f) {
    const value = this.get(key);
    if (value) {
      return value;
    } else {
      const value2 = f();
      this.set(key, value2);
      return value2;
    }
  }
  _setDefault(key, value) {
    if (!this.has(key)) {
      super.set(key, value);
    }
  }
  _setRawDefault(key, value) {
    if (!this.has(key)) {
      super.setRaw(key, value);
    }
  }
  _clearDirty() {
    keys(this._dirty).forEach((key) => {
      this._dirty[key] = false;
    });
    keys(this._dirtyPrivate).forEach((key) => {
      this._dirtyPrivate[key] = false;
    });
  }
  /**
   * @ignore
   */
  isDirty(key) {
    return !!this._dirty[key];
  }
  /**
   * @ignore
   */
  isPrivateDirty(key) {
    return !!this._dirtyPrivate[key];
  }
  _markDirtyKey(key) {
    this._dirty[key] = true;
    super._markDirtyKey(key);
  }
  _markDirtyPrivateKey(key) {
    this._dirtyPrivate[key] = true;
    super._markDirtyKey(key);
  }
  /**
   * Checks if element is of certain class (or inherits one).
   *
   * @param   type  Class name to check
   * @return {boolean} Is of class?
   */
  isType(type) {
    return this.classNames.indexOf(type) !== -1;
  }
  _pushPropertyDisposer(key, disposer) {
    let disposers = this._disposerProperties[key];
    if (disposers === void 0) {
      disposers = this._disposerProperties[key] = [];
    }
    disposers.push(disposer);
    return disposer;
  }
  _disposeProperty(key) {
    const disposers = this._disposerProperties[key];
    if (disposers !== void 0) {
      each(disposers, (disposer) => {
        disposer.dispose();
      });
      delete this._disposerProperties[key];
    }
  }
  /**
   * @todo needs description
   * @param  value  Template
   */
  set template(value) {
    const template = this._template;
    if (template !== value) {
      this._template = value;
      if (template) {
        template._removeObjectTemplate(this);
      }
      if (value) {
        value._setObjectTemplate(this);
      }
      this._applyTemplates();
    }
  }
  get template() {
    return this._template;
  }
  /**
   * @ignore
   */
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(_name) {
  }
  _applyStateAnimated(_name, _duration) {
  }
  get(key, fallback) {
    const value = this.adapters.fold(key, this._settings[key]);
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * @ignore
   */
  isUserSetting(key) {
    return this._userProperties[key] || false;
  }
  /**
   * Sets a setting `value` for the specified `key`, and returns the same `value`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  set(key, value) {
    this._userProperties[key] = true;
    return super.set(key, value);
  }
  /**
   * @ignore
   */
  setRaw(key, value) {
    this._userProperties[key] = true;
    super.setRaw(key, value);
  }
  /**
   * Sets a setting `value` for the specified `key` only if the value for this key was not set previously using set method, and returns the same `value`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  _setSoft(key, value) {
    if (!this._userProperties[key]) {
      return super.set(key, value);
    }
    return value;
  }
  /**
   * Removes a setting value for the specified `key`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   */
  remove(key) {
    delete this._userProperties[key];
    this._removeTemplateProperty(key);
  }
  /**
   * @ignore
   */
  setPrivate(key, value) {
    this._userPrivateProperties[key] = true;
    return super.setPrivate(key, value);
  }
  /**
   * @ignore
   */
  setPrivateRaw(key, value) {
    this._userPrivateProperties[key] = true;
    super.setPrivateRaw(key, value);
  }
  /**
   * @ignore
   */
  removePrivate(key) {
    delete this._userPrivateProperties[key];
    this._removeTemplatePrivateProperty(key);
  }
  _setTemplateProperty(template, key, value) {
    if (!this._userProperties[key]) {
      const match = this._findTemplateByKey(key);
      if (template === match) {
        super.set(key, value);
      }
    }
  }
  _setTemplatePrivateProperty(template, key, value) {
    if (!this._userPrivateProperties[key]) {
      const match = this._findTemplateByPrivateKey(key);
      if (template === match) {
        super.setPrivate(key, value);
      }
    }
  }
  _removeTemplateProperty(key) {
    if (!this._userProperties[key]) {
      const match = this._findTemplateByKey(key);
      if (match) {
        super.set(key, match._settings[key]);
      } else {
        super.remove(key);
      }
    }
  }
  _removeTemplatePrivateProperty(key) {
    if (!this._userPrivateProperties[key]) {
      const match = this._findTemplateByPrivateKey(key);
      if (match) {
        super.setPrivate(key, match._privateSettings[key]);
      } else {
        super.removePrivate(key);
      }
    }
  }
  _walkParents(f) {
    f(this._root._rootContainer);
    f(this);
  }
  // TODO faster version of this method which is specialized to just 1 key
  _applyStateByKey(name) {
    const other = this.states.create(name, {});
    const seen = {};
    this._eachTemplate((template) => {
      const state = template.states.lookup(name);
      if (state) {
        state._apply(other, seen);
      }
    });
    each2(other._settings, (key) => {
      if (!seen[key] && !other._userSettings[key]) {
        other.remove(key);
      }
    });
  }
  _applyTemplate(template, state) {
    this._templateDisposers.push(template._apply(this, state));
    each2(template._settings, (key, value) => {
      if (!state.settings[key] && !this._userProperties[key]) {
        state.settings[key] = true;
        super.set(key, value);
      }
    });
    each2(template._privateSettings, (key, value) => {
      if (!state.privateSettings[key] && !this._userPrivateProperties[key]) {
        state.privateSettings[key] = true;
        super.setPrivate(key, value);
      }
    });
    if (this._runSetup && template.setup) {
      this._runSetup = false;
      template.setup(this);
    }
  }
  /**
   * Calls the closure with each template and returns the first template which is true
   */
  _findStaticTemplate(f) {
    if (this._template) {
      if (f(this._template)) {
        return this._template;
      }
    }
  }
  _eachTemplate(f) {
    this._findStaticTemplate((template) => {
      f(template);
      return false;
    });
    eachReverse(this._internalTemplates, f);
    each(this._templates, f);
  }
  _applyTemplates(remove2 = true) {
    if (remove2) {
      this._disposeTemplates();
    }
    const state = {
      settings: {},
      privateSettings: {},
      states: {}
    };
    this._eachTemplate((template) => {
      this._applyTemplate(template, state);
    });
    if (remove2) {
      each2(this._settings, (key) => {
        if (!this._userProperties[key] && !state.settings[key]) {
          super.remove(key);
        }
      });
      each2(this._privateSettings, (key) => {
        if (!this._userPrivateProperties[key] && !state.privateSettings[key]) {
          super.removePrivate(key);
        }
      });
    }
  }
  _findTemplate(f) {
    const value = this._findStaticTemplate(f);
    if (value === void 0) {
      const value2 = findReverse(this._internalTemplates, f);
      if (value2 === void 0) {
        return find(this._templates, f);
      } else {
        return value2;
      }
    } else {
      return value;
    }
  }
  _findTemplateByKey(key) {
    return this._findTemplate((template) => {
      return key in template._settings;
    });
  }
  _findTemplateByPrivateKey(key) {
    return this._findTemplate((template) => {
      return key in template._privateSettings;
    });
  }
  _disposeTemplates() {
    each(this._templateDisposers, (disposer) => {
      disposer.dispose();
    });
    this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    each(this._templates, (template) => {
      template._removeObjectTemplate(this);
    });
    this._templates.length = 0;
  }
  _applyThemes(force = false) {
    let isConnected = false;
    const defaults = [];
    let themes = [];
    const themeTags = /* @__PURE__ */ new Set();
    const tags = this.get("themeTagsSelf");
    if (tags) {
      each(tags, (tag) => {
        themeTags.add(tag);
      });
    }
    this._walkParents((entity) => {
      if (entity === this._root._rootContainer) {
        isConnected = true;
      }
      if (entity._defaultThemes.length > 0) {
        defaults.push(entity._defaultThemes);
      }
      const theme = entity.get("themes");
      if (theme) {
        themes.push(theme);
      }
      const tags2 = entity.get("themeTags");
      if (tags2) {
        each(tags2, (tag) => {
          themeTags.add(tag);
        });
      }
    });
    themes = defaults.concat(themes);
    this._removeTemplates();
    if (isConnected || force) {
      eachReverse(this.classNames, (name) => {
        const allRules = [];
        each(themes, (themes2) => {
          each(themes2, (theme) => {
            const rules = theme._lookupRules(name);
            if (rules) {
              eachReverse(rules, (rule) => {
                const matches = rule.tags.every((tag) => {
                  return themeTags.has(tag);
                });
                if (matches) {
                  const result = getFirstSortedIndex(allRules, (x) => {
                    const order = compare(rule.tags.length, x.tags.length);
                    if (order === 0) {
                      return compareArray(rule.tags, x.tags, compare);
                    } else {
                      return order;
                    }
                  });
                  allRules.splice(result.index, 0, rule);
                }
              });
            }
          });
        });
        each(allRules, (rule) => {
          this._templates.push(rule.template);
          rule.template._setObjectTemplate(this);
        });
      });
    }
    this._applyTemplates();
    if (isConnected || force) {
      this._runSetup = false;
    }
    return isConnected || force;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const id = this.get("id");
      if (id) {
        this._registerId(id);
      }
      const prevId = this._prevSettings.id;
      if (prevId) {
        delete this._root.entitiesById[prevId];
        delete registry.entitiesById[prevId];
      }
    }
  }
  _registerId(id) {
    if (this._root.entitiesById[id] && this._root.entitiesById[id] !== this) {
      throw new Error('An entity with id "' + id + '" already exists.');
    }
    this._root.entitiesById[id] = this;
    registry.entitiesById[id] = this;
  }
  _afterChanged() {
  }
  /**
   * @ignore
   */
  addDisposer(disposer) {
    this._disposers.push(disposer);
    return disposer;
  }
  _dispose() {
    super._dispose();
    const template = this._template;
    if (template) {
      template._removeObjectTemplate(this);
    }
    each(this._internalTemplates, (template2) => {
      template2._removeObjectTemplate(this);
    });
    this._removeTemplates();
    this._disposeTemplates();
    this.events.dispose();
    this._disposers.forEach((x) => {
      x.dispose();
    });
    each2(this._disposerProperties, (_, disposers) => {
      each(disposers, (disposer) => {
        disposer.dispose();
      });
    });
    const id = this.get("id");
    if (id) {
      delete this._root.entitiesById[id];
      delete registry.entitiesById[id];
    }
  }
  /**
   * Creates and returns a "disposable" timeout.
   *
   * @param   fn     Callback
   * @param   delay  Delay in milliseconds
   * @return         Timeout disposer
   */
  setTimeout(fn, delay) {
    const id = setTimeout(() => {
      this.removeDispose(disposer);
      fn();
    }, delay);
    const disposer = new Disposer(() => {
      clearTimeout(id);
    });
    this._disposers.push(disposer);
    return disposer;
  }
  /**
   * @ignore
   */
  removeDispose(target) {
    if (!this.isDisposed()) {
      let index = indexOf(this._disposers, target);
      if (index > -1) {
        this._disposers.splice(index, 1);
      }
    }
    target.dispose();
  }
  /**
   * @ignore
   */
  hasTag(tag) {
    return indexOf(this.get("themeTags", []), tag) !== -1;
  }
  /**
   * @ignore
   */
  addTag(tag) {
    if (!this.hasTag(tag)) {
      const tags = this.get("themeTags", []);
      tags.push(tag);
      this.set("themeTags", tags);
    }
  }
  /**
   * @ignore
   */
  removeTag(tag) {
    if (this.hasTag(tag)) {
      const tags = this.get("themeTags", []);
      remove(tags, tag);
      this.set("themeTags", tags);
    }
  }
  _t(text, locale, ...rest) {
    return this._root.language.translate(text, locale, ...rest);
  }
  /**
   * An instance of [[Root]] object.
   *
   * @readonly
   * @since 5.0.6
   * @return Root object
   */
  get root() {
    return this._root;
  }
};
Object.defineProperty(Entity, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Entity"
});
Object.defineProperty(Entity, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ["Entity"]
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Sprite.js
var SpriteEventDispatcher = class _SpriteEventDispatcher extends EventDispatcher {
  constructor(sprite) {
    super();
    Object.defineProperty(this, "_sprite", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rendererDisposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dispatchParents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    this._sprite = sprite;
  }
  _makePointerEvent(key, event) {
    return {
      type: key,
      originalEvent: event.event,
      point: event.point,
      simulated: event.simulated,
      native: event.native,
      target: this._sprite
    };
  }
  _onRenderer(key, dispatch) {
    this._sprite.set("interactive", true);
    this._sprite._display.interactive = true;
    let events = this._rendererDisposers[key];
    if (events === void 0) {
      const disposer = this._sprite._display.on(key, (e) => {
        dispatch.call(this, e);
      });
      events = this._rendererDisposers[key] = new CounterDisposer(() => {
        delete this._rendererDisposers[key];
        disposer.dispose();
      });
    }
    return events.increment();
  }
  _on(once, type, callback, context, shouldClone, dispatch) {
    const info = super._on(once, type, callback, context, shouldClone, dispatch);
    const rendererEvent = _SpriteEventDispatcher.RENDERER_EVENTS[type];
    if (rendererEvent !== void 0) {
      info.disposer = new MultiDisposer([
        info.disposer,
        this._onRenderer(type, rendererEvent)
      ]);
    }
    return info;
  }
  /**
   * Will stop any bubbling up of the event to element's parents.
   *
   * Should be called in an event handler, e.g.:
   *
   * ```TypeScript
   * element.events.on("pointerdown", function(ev) {
   *   // Do something here and prevent from "pointerdown" bubbling up
   *   // ...
   *   ev.target.events.stopParentDispatch();
   * });
   * ```
   * ```JavaScript
   * element.events.on("pointerdown", function(ev) {
   *   // Do something here and prevent from "pointerdown" bubbling up
   *   // ...
   *   ev.target.events.stopParentDispatch();
   * });
   * ```
   */
  stopParentDispatch() {
    this._dispatchParents = false;
  }
  /**
   * @ignore
   */
  dispatchParents(type, event) {
    const old = this._dispatchParents;
    this._dispatchParents = true;
    try {
      this.dispatch(type, event);
      if (this._dispatchParents && this._sprite.parent) {
        this._sprite.parent.events.dispatchParents(type, event);
      }
    } finally {
      this._dispatchParents = old;
    }
  }
};
Object.defineProperty(SpriteEventDispatcher, "RENDERER_EVENTS", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    "click": function(event) {
      if (this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", event))) {
        this.dispatch("click", this._makePointerEvent("click", event));
      }
    },
    "rightclick": function(event) {
      if (this.isEnabled("rightclick")) {
        this.dispatch("rightclick", this._makePointerEvent("rightclick", event));
      }
    },
    "middleclick": function(event) {
      if (this.isEnabled("middleclick")) {
        this.dispatch("middleclick", this._makePointerEvent("middleclick", event));
      }
    },
    "dblclick": function(event) {
      this.dispatchParents("dblclick", this._makePointerEvent("dblclick", event));
    },
    "pointerover": function(event) {
      const sprite = this._sprite;
      let dispatch = true;
      if (sprite.getPrivate("trustBounds")) {
        sprite._getBounds();
        const bounds = sprite.globalBounds();
        if (sprite.isType("Graphics")) {
          const strokeWidth = sprite.get("strokeWidth", 1) / 2;
          if (strokeWidth >= 1) {
            bounds.left -= strokeWidth;
            bounds.right += strokeWidth;
            bounds.top -= strokeWidth;
            bounds.bottom += strokeWidth;
          }
        }
        if (!inBounds(event.point, bounds)) {
          dispatch = false;
          sprite._root._renderer.removeHovering(sprite._display);
        }
      }
      if (dispatch && this.isEnabled("pointerover")) {
        this.dispatch("pointerover", this._makePointerEvent("pointerover", event));
      }
    },
    "pointerout": function(event) {
      if (this.isEnabled("pointerout")) {
        this.dispatch("pointerout", this._makePointerEvent("pointerout", event));
      }
    },
    "pointerdown": function(event) {
      this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", event));
    },
    "pointerup": function(event) {
      if (this.isEnabled("pointerup")) {
        this.dispatch("pointerup", this._makePointerEvent("pointerup", event));
      }
    },
    "globalpointerup": function(event) {
      if (this.isEnabled("globalpointerup")) {
        this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", event));
      }
    },
    "globalpointermove": function(event) {
      if (this.isEnabled("globalpointermove")) {
        this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", event));
      }
    },
    "wheel": function(event) {
      this.dispatchParents("wheel", {
        type: "wheel",
        target: this._sprite,
        originalEvent: event.event,
        point: event.point
      });
    }
  }
});
var Sprite = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_adjustedLocalBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { left: 0, right: 0, top: 0, bottom: 0 }
    });
    Object.defineProperty(this, "_localBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { left: 0, right: 0, top: 0, bottom: 0 }
    });
    Object.defineProperty(this, "_parent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dataItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_templateField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_sizeDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDragging", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dragEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dragPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isHidden", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isShowing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isHiding", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_downPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_toggleDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dragDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_hoverDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_focusDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipMoveDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipPointerDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_statesHandled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this.setPrivateRaw("visible", true);
    super._afterNew();
  }
  /**
   * Marks some setting as dirty. Could be used to trigger adapter.
   * @param key
   */
  markDirtyKey(key) {
    this._markDirtyKey(key);
  }
  _markDirtyKey(key) {
    super._markDirtyKey(key);
    if (key == "x" || key == "y" || key == "dx" || key == "dy") {
      this.markDirtyBounds();
      this._addPercentagePositionChildren();
      this.markDirtyPosition();
    }
  }
  _markDirtyPrivateKey(key) {
    super._markDirtyPrivateKey(key);
    if (key == "x" || key == "y") {
      this.markDirtyPosition();
    }
  }
  _removeTemplateField() {
    if (this._templateField) {
      this._templateField._removeObjectTemplate(this);
    }
  }
  _createEvents() {
    return new SpriteEventDispatcher(this);
  }
  _processTemplateField() {
    let template;
    const field = this.get("templateField");
    if (field) {
      const dataItem = this.dataItem;
      if (dataItem) {
        const context = dataItem.dataContext;
        if (context) {
          template = context[field];
          if (!(template instanceof Template) && template) {
            template = Template.new(template);
          }
        }
      }
    }
    if (this._templateField !== template) {
      this._removeTemplateField();
      this._templateField = template;
      if (template) {
        template._setObjectTemplate(this);
      }
      this._applyTemplates();
    }
  }
  // TODO change this to run before the element is added to the parent, so that way
  //      it doesn't need to apply the themes twice
  _setDataItem(dataItem) {
    const oldDataItem = this._dataItem;
    this._dataItem = dataItem;
    this._processTemplateField();
    const eventType = "dataitemchanged";
    if (dataItem != oldDataItem) {
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this,
          oldDataItem,
          newDataItem: dataItem
        });
      }
    }
  }
  /**
   * A [[DataItem]] used for this element.
   *
   * NOTE: data item is being assigned automatically in most cases where it
   * matters. Use this accessor to set data item only if you know what you're
   * doing.
   *
   * @param  value  Data item
   */
  set dataItem(value) {
    this._setDataItem(value);
  }
  /**
   * @return DataItem
   */
  get dataItem() {
    if (this._dataItem) {
      return this._dataItem;
    } else {
      let parent = this._parent;
      while (parent) {
        if (parent._dataItem) {
          return parent._dataItem;
        } else {
          parent = parent._parent;
        }
      }
    }
  }
  _addPercentageSizeChildren() {
    let parent = this.parent;
    if (parent) {
      if (this.get("width") instanceof Percent || this.get("height") instanceof Percent) {
        pushOne(parent._percentageSizeChildren, this);
      } else {
        removeFirst(parent._percentageSizeChildren, this);
      }
    }
  }
  _addPercentagePositionChildren() {
    let parent = this.parent;
    if (parent) {
      if (this.get("x") instanceof Percent || this.get("y") instanceof Percent) {
        pushOne(parent._percentagePositionChildren, this);
      } else {
        removeFirst(parent._percentagePositionChildren, this);
      }
    }
  }
  /**
   * @ignore
   */
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const bounds = this._localBounds;
    if (bounds) {
      const centerX = this.get("centerX");
      if (centerX != null) {
        this._display.pivot.x = bounds.left + relativeToValue(centerX, bounds.right - bounds.left);
      }
      const centerY = this.get("centerY");
      if (centerY != null) {
        this._display.pivot.y = bounds.top + relativeToValue(centerY, bounds.bottom - bounds.top);
      }
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    this._handleStates();
    if (this.isDirty("tooltip")) {
      const previous = this._prevSettings.tooltip;
      if (previous) {
        previous.dispose();
      }
    }
    if (this.isDirty("layer") || this.isDirty("layerMargin")) {
      this._display.setLayer(this.get("layer"), this.get("layerMargin"));
      this.markDirtyLayer();
    }
    if (this.isDirty("tooltipPosition")) {
      const tooltipMoveDp = this._tooltipMoveDp;
      if (tooltipMoveDp) {
        tooltipMoveDp.dispose();
        this._tooltipMoveDp = void 0;
      }
      const tooltipPointerDp = this._tooltipPointerDp;
      if (tooltipPointerDp) {
        tooltipPointerDp.dispose();
        this._tooltipPointerDp = void 0;
      }
      if (this.get("tooltipPosition") == "pointer") {
        if (this.isHover()) {
          this._tooltipMoveDp = this.events.on("globalpointermove", (e) => {
            this.showTooltip(e.point);
          });
        }
        this._tooltipPointerDp = new MultiDisposer([
          this.events.on("pointerover", () => {
            this._tooltipMoveDp = this.events.on("globalpointermove", (e) => {
              this.showTooltip(e.point);
            });
          }),
          this.events.on("pointerout", () => {
            const tooltipMoveDp2 = this._tooltipMoveDp;
            if (tooltipMoveDp2) {
              tooltipMoveDp2.dispose();
              this._tooltipMoveDp = void 0;
            }
          })
        ]);
      }
    }
  }
  _handleStates() {
    if (!this._statesHandled) {
      if (this.isDirty("active")) {
        if (this.get("active")) {
          this.states.applyAnimate("active");
          this.set("ariaChecked", true);
        } else {
          if (!this.isHidden()) {
            this.states.applyAnimate("default");
          }
          this.set("ariaChecked", false);
        }
        this.markDirtyAccessibility();
      }
      if (this.isDirty("disabled")) {
        if (this.get("disabled")) {
          this.states.applyAnimate("disabled");
          this.set("ariaChecked", false);
        } else {
          if (!this.isHidden()) {
            this.states.applyAnimate("default");
          }
          this.set("ariaChecked", true);
        }
        this.markDirtyAccessibility();
      }
      this._statesHandled = true;
    }
  }
  _changed() {
    super._changed();
    const display = this._display;
    const events = this.events;
    if (this.isDirty("draggable")) {
      const draggable = this.get("draggable");
      if (draggable) {
        this.set("interactive", true);
        this._dragDp = new MultiDisposer([
          events.on("pointerdown", (ev) => {
            this.dragStart(ev);
          }),
          events.on("globalpointermove", (ev) => {
            this.dragMove(ev);
          }),
          events.on("globalpointerup", (ev) => {
            this.dragStop(ev);
          })
        ]);
      } else {
        if (this._dragDp) {
          this._dragDp.dispose();
          this._dragDp = void 0;
        }
      }
      display.cancelTouch = draggable ? true : false;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const tooltipText = this.get("tooltipText");
      const tooltipHTML = this.get("tooltipHTML");
      const showTooltipOn = this.get("showTooltipOn", "hover");
      if (this._tooltipDp) {
        this._tooltipDp.dispose();
        this._tooltipDp = void 0;
      }
      if (tooltipText || tooltipHTML) {
        if (showTooltipOn == "click") {
          this._tooltipDp = new MultiDisposer([
            events.on("click", () => {
              this.setTimeout(() => {
                const tooltip = this.getTooltip();
                if (tooltip && !tooltip.isHidden() && tooltip.get("tooltipTarget") === this) {
                  this.hideTooltip();
                } else {
                  this.showTooltip();
                }
              }, 10);
            }),
            addEventListener(document, "click", (_ev) => {
              this.hideTooltip();
            })
          ]);
          this._disposers.push(this._tooltipDp);
        } else if (showTooltipOn == "always") {
        } else {
          this._tooltipDp = new MultiDisposer([
            events.on("pointerover", () => {
              this.showTooltip();
            }),
            events.on("pointerout", () => {
              this.hideTooltip();
            })
          ]);
          this._disposers.push(this._tooltipDp);
        }
      }
    }
    if (this.isDirty("toggleKey")) {
      let toggleKey = this.get("toggleKey");
      if (toggleKey && toggleKey != "none") {
        this._toggleDp = events.on("click", () => {
          if (!this._isDragging) {
            this.set(toggleKey, !this.get(toggleKey));
          }
        });
      } else {
        if (this._toggleDp) {
          this._toggleDp.dispose();
          this._toggleDp = void 0;
        }
      }
    }
    if (this.isDirty("opacity")) {
      display.alpha = Math.max(0, this.get("opacity", 1));
      if (this.get("focusable")) {
        this.markDirtyAccessibility();
      }
    }
    if (this.isDirty("rotation")) {
      this.markDirtyBounds();
      display.angle = this.get("rotation", 0);
    }
    if (this.isDirty("scale")) {
      this.markDirtyBounds();
      display.scale = this.get("scale", 0);
    }
    if (this.isDirty("centerX") || this.isDirty("centerY")) {
      this.markDirtyBounds();
      this.updatePivotPoint();
    }
    if (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) {
      if (!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden")) {
        display.visible = false;
        this.hideTooltip();
      } else {
        display.visible = true;
      }
      this.markDirtyBounds();
      if (this.get("focusable")) {
        this.markDirtyAccessibility();
      }
    }
    if (this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds();
      this._addPercentageSizeChildren();
      const parent = this.parent;
      if (parent) {
        if (this.isDirty("width") && this.get("width") instanceof Percent || this.isDirty("height") && this.get("height") instanceof Percent) {
          parent.markDirty();
          parent._prevWidth = 0;
        }
      }
      this._sizeDirty = true;
    }
    if (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight") || this.isDirty("marginLeft") || this.isDirty("marginTop") || this.isDirty("marginRight") || this.isDirty("marginBottom")) {
      this.markDirtyBounds();
      this._sizeDirty = true;
    }
    if (this._sizeDirty) {
      this._updateSize();
    }
    if (this.isDirty("wheelable")) {
      const wheelable = this.get("wheelable");
      if (wheelable) {
        this.set("interactive", true);
      }
      display.wheelable = wheelable ? true : false;
    }
    if (this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) {
      if (this.get("focusable")) {
        this._root._registerTabindexOrder(this);
      } else {
        this._root._unregisterTabindexOrder(this);
      }
    }
    if (this.isDirty("filter")) {
      display.filter = this.get("filter");
    }
    let filter = this.get("filter", "");
    if (this.isDirty("blur")) {
      const blur2 = this.get("blur", 0);
      if (blur2 != 0) {
        filter += " blur(" + blur2 + "px)";
      }
    }
    if (this.isDirty("saturate")) {
      const saturate2 = this.get("saturate", 1);
      if (saturate2 != 1) {
        filter += " saturate(" + saturate2 + ")";
      }
    }
    if (this.isDirty("brightness")) {
      const brightness = this.get("brightness", 1);
      if (brightness != 1) {
        filter += " brightness(" + brightness + ")";
      }
    }
    if (this.isDirty("contrast")) {
      const contrast = this.get("contrast", 1);
      if (contrast != 1) {
        filter += " contrast(" + contrast + ")";
      }
    }
    if (this.isDirty("sepia")) {
      const sepia = this.get("sepia", 0);
      if (sepia != 0) {
        filter += " sepia(" + sepia + ")";
      }
    }
    if (this.isDirty("hue")) {
      const hue = this.get("hue", 0);
      if (hue != 0) {
        filter += " hue-rotate(" + hue + "deg)";
      }
    }
    if (this.isDirty("invert")) {
      const invert = this.get("invert", 0);
      if (invert != 0) {
        filter += " invert(" + invert + ")";
      }
    }
    if (filter) {
      display.filter = filter;
    }
    if (this.isDirty("cursorOverStyle")) {
      display.cursorOverStyle = this.get("cursorOverStyle");
    }
    if (this.isDirty("hoverOnFocus")) {
      if (this.get("hoverOnFocus")) {
        this._focusDp = new MultiDisposer([
          events.on("focus", () => {
            this.showTooltip();
          }),
          events.on("blur", () => {
            this.hideTooltip();
          })
        ]);
      } else {
        if (this._focusDp) {
          this._focusDp.dispose();
          this._focusDp = void 0;
        }
      }
    }
    if (this.isDirty("focusable")) {
      if (this.get("focusable")) {
        this._root._registerTabindexOrder(this);
      } else {
        this._root._unregisterTabindexOrder(this);
      }
      this.markDirtyAccessibility();
      this._disposers.push(events.on("blur", () => {
        this.setPrivateRaw("touchHovering", false);
      }));
      this._disposers.push(events.once("boundschanged", () => {
        this.markDirtyAccessibility();
      }));
    }
    if (this.isPrivateDirty("focusable")) {
      this.markDirtyAccessibility();
    }
    if (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) {
      this.markDirtyAccessibility();
    }
    if (this.isDirty("exportable")) {
      display.exportable = this.get("exportable");
    }
    if (this.isDirty("interactive")) {
      const events2 = this.events;
      if (this.get("interactive") && !events2.isDisposed()) {
        this._hoverDp = new MultiDisposer([
          events2.on("click", (ev) => {
            if (isTouchEvent(ev.originalEvent)) {
              if (!this.getPrivate("touchHovering")) {
                this.setTimeout(() => {
                  this._handleOver();
                  if (this.get("tooltipText") || this.get("tooltipHTML")) {
                    this.showTooltip();
                  }
                  this.setPrivateRaw("touchHovering", true);
                  this.events.dispatch("pointerover", {
                    type: "pointerover",
                    target: ev.target,
                    originalEvent: ev.originalEvent,
                    point: ev.point,
                    simulated: ev.simulated
                  });
                }, 10);
              }
            }
          }),
          events2.on("globalpointerup", (ev) => {
            if (isTouchEvent(ev.originalEvent)) {
              if (this.getPrivate("touchHovering")) {
                this._handleOut();
                if (this.get("tooltipText") || this.get("tooltipHTML")) {
                  this.hideTooltip();
                }
                this.setPrivateRaw("touchHovering", false);
                this.events.dispatch("pointerout", {
                  type: "pointerout",
                  target: ev.target,
                  originalEvent: ev.originalEvent,
                  point: ev.point,
                  simulated: ev.simulated
                });
              }
            }
            if (this._isDown) {
              this._handleUp(ev);
            }
          }),
          events2.on("pointerover", () => {
            this._handleOver();
          }),
          events2.on("pointerout", () => {
            this._handleOut();
          }),
          events2.on("pointerdown", (e) => {
            this._handleDown(e);
          })
        ]);
      } else {
        this._display.interactive = false;
        if (this._hoverDp) {
          this._hoverDp.dispose();
          this._hoverDp = void 0;
        }
      }
    }
    if (this.isDirty("forceInactive")) {
      this._display.inactive = this.get("forceInactive", null);
    }
    if (this.get("showTooltipOn") == "always" && this._display.visible) {
      this.showTooltip();
    }
  }
  /**
   * @ignore
   * @todo should this be user-accessible?
   */
  dragStart(e) {
    this._dragEvent = e;
    this.events.stopParentDispatch();
  }
  /**
   * @ignore
   * @todo should this be user-accessible?
   */
  dragStop(e) {
    this._dragEvent = void 0;
    this._dragPoint = void 0;
    this.events.stopParentDispatch();
    if (this._isDragging) {
      this._isDragging = false;
      const type = "dragstop";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this,
          originalEvent: e.originalEvent,
          point: e.point,
          simulated: e.simulated
        });
      }
    }
  }
  _handleOver() {
    if (!this.isHidden()) {
      if (this.get("active") && this.states.lookup("hoverActive")) {
        this.states.applyAnimate("hoverActive");
      } else if (this.get("disabled") && this.states.lookup("hoverDisabled")) {
        this.states.applyAnimate("hoverDisabled");
      } else {
        this.states.applyAnimate("hover");
      }
      if (this.get("draggable") && this._isDown && this.states.lookup("down")) {
        this.states.applyAnimate("down");
      }
    }
  }
  _handleOut() {
    if (!this.isHidden()) {
      if (this.get("active") && this.states.lookup("active")) {
        this.states.applyAnimate("active");
      } else if (this.get("disabled") && this.states.lookup("disabled")) {
        this.states.applyAnimate("disabled");
      } else {
        if (this.states.lookup("hover") || this.states.lookup("hoverActive")) {
          this.states.applyAnimate("default");
        }
      }
      if (this.get("draggable") && this._isDown && this.states.lookup("down")) {
        this.states.applyAnimate("down");
      }
    }
  }
  _handleUp(e) {
    if (!this.isHidden()) {
      if (this.get("active") && this.states.lookup("active")) {
        this.states.applyAnimate("active");
      } else if (this.get("disabled") && this.states.lookup("disabled")) {
        this.states.applyAnimate("disabled");
      } else if (this.states.lookup("down")) {
        if (this.isHover()) {
          this.states.applyAnimate("hover");
        } else {
          this.states.applyAnimate("default");
        }
      }
      this._downPoint = void 0;
      const pointerId = getPointerId(e.originalEvent);
      delete this._downPoints[pointerId];
      if (keys(this._downPoints).length == 0) {
        this._isDown = false;
      }
    }
  }
  _hasMoved(e) {
    const pointerId = getPointerId(e.originalEvent);
    const downPoint = this._downPoints[pointerId];
    if (downPoint) {
      const x = Math.abs(downPoint.x - e.point.x);
      const y = Math.abs(downPoint.y - e.point.y);
      return x > 5 || y > 5;
    }
    return false;
  }
  _hasDown() {
    return keys(this._downPoints).length > 0;
  }
  _handleDown(e) {
    const parent = this.parent;
    if (parent && !this.get("draggable")) {
      parent._handleDown(e);
    }
    if (this.get("interactive") && !this.isHidden()) {
      if (this.states.lookup("down")) {
        this.states.applyAnimate("down");
      }
      this._downPoint = {
        x: e.point.x,
        y: e.point.y
      };
      this._isDown = true;
      const pointerId = getPointerId(e.originalEvent);
      this._downPoints[pointerId] = {
        x: e.point.x,
        y: e.point.y
      };
    }
  }
  /**
   * @ignore
   * @todo should this be user-accessible?
   */
  dragMove(e) {
    let dragEvent = this._dragEvent;
    if (dragEvent) {
      if (dragEvent.simulated && !e.simulated) {
        return true;
      }
      let angle = 0;
      let parent = this.parent;
      let scale = 1;
      while (parent != null) {
        angle += parent.get("rotation", 0);
        parent = parent.parent;
        if (parent) {
          scale *= parent.get("scale", 1);
        }
      }
      let x = (e.point.x - dragEvent.point.x) / scale;
      let y = (e.point.y - dragEvent.point.y) / scale;
      const events = this.events;
      if (dragEvent.simulated && !this._isDragging) {
        this._isDragging = true;
        this._dragEvent = e;
        this._dragPoint = {
          x: this.x(),
          y: this.y()
        };
        const type = "dragstart";
        if (events.isEnabled(type)) {
          events.dispatch(type, {
            type,
            target: this,
            originalEvent: e.originalEvent,
            point: e.point,
            simulated: e.simulated
          });
        }
      }
      if (this._isDragging) {
        let dragPoint = this._dragPoint;
        this.set("x", dragPoint.x + x * cos(angle) + y * sin(angle));
        this.set("y", dragPoint.y + y * cos(angle) - x * sin(angle));
        const type = "dragged";
        if (events.isEnabled(type)) {
          events.dispatch(type, {
            type,
            target: this,
            originalEvent: e.originalEvent,
            point: e.point,
            simulated: e.simulated
          });
        }
      } else {
        if (Math.hypot(x, y) > 5) {
          this._isDragging = true;
          this._dragEvent = e;
          this._dragPoint = {
            x: this.x(),
            y: this.y()
          };
          const type = "dragstart";
          if (events.isEnabled(type)) {
            events.dispatch(type, {
              type,
              target: this,
              originalEvent: e.originalEvent,
              point: e.point,
              simulated: e.simulated
            });
          }
        }
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  /**
   * Returns depth (how deep in the hierachy of the content tree) of this
   * element.
   *
   * @return Depth
   */
  depth() {
    let self = this.parent;
    let depth = 0;
    while (true) {
      if (self) {
        ++depth;
        self = self.parent;
      } else {
        return depth;
      }
    }
  }
  /**
   * @ignore
   */
  markDirtySize() {
    this._sizeDirty = true;
    this.markDirty();
  }
  /**
   * @ignore
   */
  markDirtyBounds() {
    const display = this._display;
    if (this.get("isMeasured")) {
      this._root._addDirtyBounds(this);
      display.isMeasured = true;
      display.invalidateBounds();
      const parent = this.parent;
      if (parent && this.get("position") != "absolute") {
        if (parent.get("width") == null || parent.get("height") == null || parent.get("layout")) {
          parent.markDirtyBounds();
        }
      }
      if (this.get("focusable")) {
        this.markDirtyAccessibility();
      }
    }
  }
  /**
   * @ignore
   */
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  /**
   * @ignore
   */
  markDirtyLayer() {
    this._display.markDirtyLayer(true);
  }
  /**
   * @ignore
   */
  markDirty() {
    super.markDirty();
    this.markDirtyLayer();
  }
  _updateBounds() {
    const oldBounds = this._adjustedLocalBounds;
    let newBounds;
    if (!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden")) {
      newBounds = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this._localBounds = newBounds;
      this._adjustedLocalBounds = newBounds;
    } else {
      this._getBounds();
      this._fixMinBounds(this._localBounds);
      this.updatePivotPoint();
      this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds);
      newBounds = this._adjustedLocalBounds;
    }
    if (!oldBounds || (oldBounds.left !== newBounds.left || oldBounds.top !== newBounds.top || oldBounds.right !== newBounds.right || oldBounds.bottom !== newBounds.bottom)) {
      const eventType = "boundschanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, { type: eventType, target: this });
      }
      if (this.parent) {
        this.parent.markDirty();
        this.parent.markDirtyBounds();
      }
      if (this.getPrivate("showingTooltip")) {
        this.showTooltip();
      }
    }
  }
  _fixMinBounds(bounds) {
    let minWidth = this.get("minWidth", this.getPrivate("minWidth"));
    let minHeight = this.get("minHeight", this.getPrivate("minHeight"));
    if (isNumber(minWidth)) {
      if (bounds.right - bounds.left < minWidth) {
        bounds.right = bounds.left + minWidth;
      }
    }
    if (isNumber(minHeight)) {
      if (bounds.bottom - bounds.top < minHeight) {
        bounds.bottom = bounds.top + minHeight;
      }
    }
    let privateWidth = this.getPrivate("width");
    let privateHeight = this.getPrivate("height");
    if (isNumber(privateWidth)) {
      if (privateWidth > 0) {
        bounds.right = bounds.left + privateWidth;
      } else {
        bounds.left = bounds.right + privateWidth;
      }
    }
    if (isNumber(privateHeight)) {
      if (privateHeight > 0) {
        bounds.bottom = bounds.top + privateHeight;
      } else {
        bounds.top = bounds.bottom + privateHeight;
      }
    }
  }
  _removeParent(parent) {
    if (parent) {
      parent.children.removeValue(this);
      removeFirst(parent._percentageSizeChildren, this);
      removeFirst(parent._percentagePositionChildren, this);
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._sizeDirty = false;
    this._statesHandled = false;
  }
  /**
   * Simulate hover over element.
   */
  hover() {
    if (!this.isDisposed()) {
      this.showTooltip();
      this._handleOver();
    }
  }
  /**
   * Simulate unhover over element.
   */
  unhover() {
    if (!this.isDisposed()) {
      this.hideTooltip();
      this._handleOut();
    }
  }
  /**
   * Shows element's [[Tooltip]].
   */
  showTooltip(point) {
    if (!this.isDisposed()) {
      const tooltip = this.getTooltip();
      const tooltipText = this.get("tooltipText");
      const tooltipHTML = this.get("tooltipHTML");
      if ((tooltipText || tooltipHTML) && tooltip) {
        const tooltipPosition = this.get("tooltipPosition");
        const tooltipTarget = this.getPrivate("tooltipTarget", this);
        if (tooltipPosition == "fixed" || !point) {
          this._display._setMatrix();
          point = this.toGlobal(tooltipTarget._getTooltipPoint());
        }
        if (tooltipPosition == "pointer") {
          const lastTooltipCoords = this.getPrivate("lastTooltipCoords");
          if (lastTooltipCoords && lastTooltipCoords.x == point.x && lastTooltipCoords.y == point.y) {
            return;
          } else {
            this.setPrivate("lastTooltipCoords", point);
          }
        }
        tooltip.set("pointTo", point);
        tooltip.set("tooltipTarget", tooltipTarget);
        if (!tooltip.get("x")) {
          tooltip.set("x", point.x);
        }
        if (!tooltip.get("y")) {
          tooltip.set("y", point.y);
        }
        if (tooltipText) {
          tooltip.label.set("text", tooltipText);
        }
        if (tooltipHTML) {
          tooltip.label.set("html", tooltipHTML);
        }
        const dataItem = this.dataItem;
        if (dataItem) {
          tooltip.label._setDataItem(dataItem);
        }
        if (this.get("showTooltipOn") == "always" && (point.x < 0 || point.x > this._root.width() || point.y < 0 || point.y > this._root.height())) {
          this.hideTooltip();
          return;
        }
        tooltip.label.text.markDirtyText();
        const promise = tooltip.show();
        this.setPrivateRaw("showingTooltip", true);
        return promise;
      }
    }
  }
  /**
   * Hides element's [[Tooltip]].
   */
  hideTooltip() {
    const tooltip = this.getTooltip();
    if (tooltip) {
      this.removePrivate("lastTooltipCoords");
      if (tooltip.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == tooltip) {
        let timeout = tooltip.get("keepTargetHover") && tooltip.get("stateAnimationDuration", 0) == 0 ? 400 : void 0;
        const promise = tooltip.hide(timeout);
        this.setPrivateRaw("showingTooltip", false);
        return promise;
      }
    }
  }
  _getTooltipPoint() {
    const bounds = this._localBounds;
    if (bounds) {
      let x = 0;
      let y = 0;
      if (!this.get("isMeasured")) {
        x = relativeToValue(this.get("tooltipX", 0), this.width());
        y = relativeToValue(this.get("tooltipY", 0), this.height());
      } else {
        x = bounds.left + relativeToValue(this.get("tooltipX", 0), bounds.right - bounds.left);
        y = bounds.top + relativeToValue(this.get("tooltipY", 0), bounds.bottom - bounds.top);
      }
      return { x, y };
    }
    return { x: 0, y: 0 };
  }
  /**
   * Returns [[Tooltip]] used for this element.
   *
   * @return Tooltip
   */
  getTooltip() {
    let tooltip = this.get("tooltip");
    if (!tooltip) {
      let parent = this.parent;
      if (parent) {
        return parent.getTooltip();
      }
    } else {
      return tooltip;
    }
  }
  _updatePosition() {
    const parent = this.parent;
    let dx = this.get("dx", 0);
    let dy = this.get("dy", 0);
    let x = this.get("x");
    let _x = this.getPrivate("x");
    let xx = 0;
    let yy = 0;
    const position = this.get("position");
    if (x instanceof Percent) {
      if (parent) {
        x = parent.innerWidth() * x.value + parent.get("paddingLeft", 0);
      } else {
        x = 0;
      }
    }
    if (isNumber(x)) {
      xx = x + dx;
    } else {
      if (_x != null) {
        xx = _x;
      } else if (parent) {
        if (position == "relative") {
          xx = parent.get("paddingLeft", 0) + dx;
        }
      }
    }
    let y = this.get("y");
    let _y = this.getPrivate("y");
    if (y instanceof Percent) {
      if (parent) {
        y = parent.innerHeight() * y.value + parent.get("paddingTop", 0);
      } else {
        y = 0;
      }
    }
    if (isNumber(y)) {
      yy = y + dy;
    } else {
      if (_y != null) {
        yy = _y;
      } else if (parent) {
        if (position == "relative") {
          yy = parent.get("paddingTop", 0) + dy;
        }
      }
    }
    const display = this._display;
    if (display.x != xx || display.y != yy) {
      display.invalidateBounds();
      display.x = xx;
      display.y = yy;
      const eventType = "positionchanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, { type: eventType, target: this });
      }
    }
    if (this.getPrivate("showingTooltip")) {
      this.showTooltip();
    }
  }
  /**
   * Returns element's actual X position in pixels.
   *
   * @return X (px)
   */
  x() {
    let x = this.get("x");
    let _x = this.getPrivate("x");
    const parent = this.parent;
    if (parent) {
      if (x instanceof Percent) {
        return relativeToValue(x, parent.innerWidth()) + parent.get("paddingLeft", 0);
      } else {
        if (!isNumber(x)) {
          if (_x != null) {
            return _x;
          } else {
            return parent.get("paddingLeft", this._display.x);
          }
        } else {
          return x;
        }
      }
    }
    return this._display.x;
  }
  /**
   * Returns element's actual Y position in pixels.
   *
   * @return Y (px)
   */
  y() {
    let _y = this.getPrivate("y");
    if (_y != null) {
      return _y;
    }
    let y = this.get("y");
    const parent = this.parent;
    if (parent) {
      if (y instanceof Percent) {
        return relativeToValue(y, parent.innerHeight()) + parent.get("paddingTop", 0);
      } else {
        if (!isNumber(y)) {
          if (_y != null) {
            return _y;
          } else {
            return parent.get("paddingTop", this._display.y);
          }
        } else {
          return y;
        }
      }
    }
    return this._display.y;
  }
  _dispose() {
    super._dispose();
    this._display.dispose();
    this._removeTemplateField();
    this._removeParent(this.parent);
    this._root._removeFocusElement(this);
    const tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.dispose();
    }
    this.markDirty();
  }
  /**
   * @ignore
   */
  adjustedLocalBounds() {
    this._fixMinBounds(this._adjustedLocalBounds);
    return this._adjustedLocalBounds;
  }
  /**
   * Returns local coordinates of the element's bounds.
   *
   * @ignore
   * @return Global bounds
   */
  localBounds() {
    return this._localBounds;
  }
  /**
   * Returns adjusted local coordinates of the element's bounds.
   *
   * @ignore
   * @return Global bounds
   */
  bounds() {
    const bounds = this._adjustedLocalBounds;
    const x = this.x();
    const y = this.y();
    return { left: bounds.left + x, right: bounds.right + x, top: bounds.top + y, bottom: bounds.bottom + y };
  }
  /**
   * Returns global coordinates of the element's bounds.
   *
   * @ignore
   * @return Global bounds
   */
  globalBounds() {
    const bounds = this.localBounds();
    const p02 = this.toGlobal({ x: bounds.left, y: bounds.top });
    const p1 = this.toGlobal({ x: bounds.right, y: bounds.top });
    const p2 = this.toGlobal({ x: bounds.right, y: bounds.bottom });
    const p3 = this.toGlobal({ x: bounds.left, y: bounds.bottom });
    return {
      left: Math.min(p02.x, p1.x, p2.x, p3.x),
      top: Math.min(p02.y, p1.y, p2.y, p3.y),
      right: Math.max(p02.x, p1.x, p2.x, p3.x),
      bottom: Math.max(p02.y, p1.y, p2.y, p3.y)
    };
  }
  _onShow(_duration) {
  }
  _onHide(_duration) {
  }
  /**
   * Plays initial reveal animation regardless if element is currently hidden
   * or visible.
   *
   * @param   duration  Duration of the animation in milliseconds
   * @param   delay     Delay showing of the element by X milliseconds
   * @return            Promise
   */
  appear(duration, delay) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.hide(0);
      if (delay) {
        return new Promise((success, _error) => {
          this.setTimeout(() => {
            success(this.show(duration));
          }, delay);
        });
      } else {
        return this.show(duration);
      }
    });
  }
  /**
   * Shows currently hidden element and returns a `Promise` which completes
   * when all showing animations are finished.
   *
   * ```TypeScript
   * series.show().then(function(ev) {
   *   console.log("Series is now fully visible");
   * })
   * ```
   * ```JavaScript
   * series.show().then(function(ev) {
   *   console.log("Series is now fully visible");
   * })
   * ```
   *
   * @return Promise
   */
  show(duration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = false;
        this._isShowing = true;
        this._isHiding = false;
        if (this.states.lookup("default").get("visible")) {
          this.set("visible", true);
        }
        this._onShow(duration);
        const animations = this.states.applyAnimate("default", duration);
        yield waitForAnimations(animations);
        this._isShowing = false;
      }
    });
  }
  /**
   * Hides the element and returns a `Promise` which completes when all hiding
   * animations are finished.
   *
   * ```TypeScript
   * series.hide().then(function(ev) {
   *   console.log("Series finished hiding");
   * })
   * ```
   * ```JavaScript
   * series.hide().then(function(ev) {
   *   console.log("Series finished hiding");
   * })
   * ```
   *
   * @return Promise
   */
  hide(duration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = true;
        this._isShowing = false;
        let state = this.states.lookup("hidden");
        if (!state) {
          state = this.states.create("hidden", {
            "opacity": 0,
            "visible": false
          });
        }
        this._isHidden = true;
        this._onHide(duration);
        const animations = this.states.applyAnimate("hidden", duration);
        yield waitForAnimations(animations);
        this._isHiding = false;
      }
    });
  }
  /**
   * Returns `true` if this element is currently hidden.
   *
   * @return Is hidden?
   */
  isHidden() {
    return this._isHidden;
  }
  /**
   * Returns `true` if this element is currently animating to a default state.
   *
   * @return Is showing?
   */
  isShowing() {
    return this._isShowing;
  }
  /**
   * Returns `true` if this element is currently animating to a hidden state.
   *
   * @return Is hiding?
   */
  isHiding() {
    return this._isHiding;
  }
  /**
   * Returns `true` if this element is currently hovered by a pointer.
   *
   * @return Is hovered?
   */
  isHover() {
    return this._display.hovering();
  }
  /**
   * Returns `true` if this element does currently have focus.
   *
   * @return Is focused?
   */
  isFocus() {
    return this._root.focused(this);
  }
  /**
   * Returns `true` if this element is currently being dragged.
   *
   * @return Is dragged?
   */
  isDragging() {
    return this._isDragging;
  }
  /**
   * Returns `false` if if either public or private setting `visible` is set
   * to `false`, or `forceHidden` is set to `true`.
   *
   * @return Visible?
   */
  isVisible() {
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden")) {
      return true;
    }
    return false;
  }
  /**
   * Same as `isVisible()`, except it checks all ascendants, too.
   *
   * @since 5.2.7
   * @return Visible?
   */
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  /**
   * Returns an actual opacity of the element, taking into account all parents.
   *
   * @return Opacity
   * @since 5.2.11
   */
  compositeOpacity() {
    const opacity = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * opacity : opacity;
  }
  /**
   * Returns an actual scale of the element, taking into account all parents.
   *
   * @return Opacity
   * @since 5.9.2
   */
  compositeScale() {
    const scale = this.get("scale", 1);
    return this._parent ? this._parent.compositeScale() * scale : scale;
  }
  /**
   * Returns an actual roation of the element, taking into account all parents.
   *
   * @return Opacity
   * @since 5.9.2
   */
  compositeRotation() {
    const rotation = this.get("rotation", 0);
    return this._parent ? this._parent.compositeRotation() + rotation : rotation;
  }
  /**
   * Returns width of this element in pixels.
   *
   * @return Width (px)
   */
  width() {
    let width = this.get("width");
    let maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"));
    let minWidth = this.get("minWidth", this.getPrivate("minWidth"));
    let privateWidth = this.getPrivate("width");
    let w = 0;
    if (isNumber(privateWidth)) {
      w = privateWidth;
    } else {
      if (width == null) {
        if (this._adjustedLocalBounds) {
          w = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left;
        }
      } else {
        if (width instanceof Percent) {
          const parent = this.parent;
          if (parent) {
            w = parent.innerWidth() * width.value;
          } else {
            w = this._root.width() * width.value;
          }
        } else if (isNumber(width)) {
          w = width;
        }
      }
    }
    if (isNumber(minWidth)) {
      w = Math.max(minWidth, w);
    }
    if (isNumber(maxWidth)) {
      w = Math.min(maxWidth, w);
    }
    return w;
  }
  /**
   * Returns maximum allowed width of this element in pixels.
   *
   * @return Maximum width (px)
   */
  maxWidth() {
    let maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (isNumber(maxWidth)) {
      return maxWidth;
    } else {
      let width = this.get("width");
      if (isNumber(width)) {
        return width;
      }
    }
    const parent = this.parent;
    if (parent) {
      return parent.innerWidth();
    }
    return this._root.width();
  }
  /**
   * Returns maximum allowed height of this element in pixels.
   *
   * @return Maximum height (px)
   */
  maxHeight() {
    let maxHeight = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (isNumber(maxHeight)) {
      return maxHeight;
    } else {
      let height = this.get("height");
      if (isNumber(height)) {
        return height;
      }
    }
    const parent = this.parent;
    if (parent) {
      return parent.innerHeight();
    }
    return this._root.height();
  }
  /**
   * Returns height of this element in pixels.
   *
   * @return Height (px)
   */
  height() {
    let height = this.get("height");
    let maxHeight = this.get("maxHeight", this.getPrivate("maxHeight"));
    let minHeight = this.get("minHeight", this.getPrivate("minHeight"));
    let privateHeight = this.getPrivate("height");
    let h = 0;
    if (isNumber(privateHeight)) {
      h = privateHeight;
    } else {
      if (height == null) {
        if (this._adjustedLocalBounds) {
          h = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top;
        }
      } else {
        if (height instanceof Percent) {
          const parent = this.parent;
          if (parent) {
            h = parent.innerHeight() * height.value;
          } else {
            h = this._root.height() * height.value;
          }
        } else if (isNumber(height)) {
          h = height;
        }
      }
    }
    if (isNumber(minHeight)) {
      h = Math.max(minHeight, h);
    }
    if (isNumber(maxHeight)) {
      h = Math.min(maxHeight, h);
    }
    return h;
  }
  _findStaticTemplate(f) {
    if (this._templateField && f(this._templateField)) {
      return this._templateField;
    }
    return super._findStaticTemplate(f);
  }
  _walkParents(f) {
    if (this._parent) {
      this._walkParent(f);
    }
  }
  _walkParent(f) {
    if (this._parent) {
      this._parent._walkParent(f);
    }
    f(this);
  }
  /**
   * Parent [[Container]] of this element.
   *
   * @return Parent container
   */
  get parent() {
    return this._parent;
  }
  _setParent(parent, updateChildren = false) {
    const prevParent = this._parent;
    if (parent !== prevParent) {
      this.markDirtyBounds();
      parent.markDirty();
      this._parent = parent;
      if (updateChildren) {
        this._removeParent(prevParent);
        if (parent) {
          this._addPercentageSizeChildren();
          this._addPercentagePositionChildren();
        }
      }
      this.markDirtyPosition();
      this._applyThemes();
    }
  }
  /**
   * Returns an instance of [[NumberFormatter]] used in this element.
   *
   * If this element does not have it set, global one form [[Root]] is used.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/using-formatters/} for more info
   * @return NumberFormatter instace
   */
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  /**
   * Returns an instance of [[DateFormatter]] used in this element.
   *
   * If this element does not have it set, global one form [[Root]] is used.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/using-formatters/} for more info
   * @return DateFormatter instace
   */
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  /**
   * Returns an instance of [[DurationFormatter]] used in this element.
   *
   * If this element does not have it set, global one form [[Root]] is used.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/using-formatters/} for more info
   * @return DurationFormatter instace
   */
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  /**
   * Converts X/Y coordinate within this element to a global coordinate.
   *
   * @param  point  Local coordinate
   * @return        Global coordinate
   */
  toGlobal(point) {
    return this._display.toGlobal(point);
  }
  /**
   * Converts global X/Y coordinate to a coordinate within this element.
   *
   * @param  point  Global coordinate
   * @return        Local coordinate
   */
  toLocal(point) {
    return this._display.toLocal(point);
  }
  _getDownPoint() {
    const id = this._getDownPointId();
    if (id) {
      return this._downPoints[id];
    }
  }
  _getDownPointId() {
    if (this._downPoints) {
      return keysOrdered(this._downPoints, (a, b) => {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      })[0];
    }
  }
  /**
   * Moves sprite to the end of the parent's children array.
   *
   * Depending on `layout` setting of the parten container, it may effect the
   * positioning or overlapping order of the elements.
   */
  toFront() {
    const parent = this.parent;
    if (parent) {
      parent.children.moveValue(this, parent.children.length - 1);
    }
  }
  /**
   * Moves sprite to the beginning of the parent's children array.
   *
   * Depending on `layout` setting of the parten container, it may effect the
   * positioning or overlapping order of the elements.
   */
  toBack() {
    const parent = this.parent;
    if (parent) {
      parent.children.moveValue(this, 0);
    }
  }
};
Object.defineProperty(Sprite, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Sprite"
});
Object.defineProperty(Sprite, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Sprite.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/Pattern.js
var Pattern = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeGraphics()
    });
    Object.defineProperty(this, "_backgroundDisplay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeGraphics()
    });
    Object.defineProperty(this, "_clear", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_pattern", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fillOpacity")) {
      this._clear = true;
    }
    this._checkDirtyFill();
  }
  _checkDirtyFill() {
    if (this.isDirty("color") || this.isDirty("fill")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const repetition = this.get("repetition", "");
      const width = this.get("width", 100);
      const height = this.get("height", 100);
      const fill = this.get("fill");
      const fillOpacity = this.get("fillOpacity", 1);
      const backgroundDisplay = this._backgroundDisplay;
      const display = this._display;
      display.clear();
      backgroundDisplay.clear();
      if (fill && fillOpacity > 0) {
        backgroundDisplay.beginFill(fill, fillOpacity);
        backgroundDisplay.drawRect(0, 0, width, height);
        backgroundDisplay.endFill();
      }
      display.angle = this.get("rotation", 0);
      this._draw();
      this._pattern = this._root._renderer.createPattern(display, backgroundDisplay, repetition, width, height);
    }
    this._clear = false;
  }
};
Object.defineProperty(Pattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Pattern"
});
Object.defineProperty(Pattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Pattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/patterns/PicturePattern.js
var PicturePattern = class extends Pattern {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_image", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    this._clear = true;
    if (this.isDirty("src")) {
      this._load();
    }
    const canvas = this.get("canvas");
    if (canvas) {
      this.set("width", canvas.width);
      this.set("height", canvas.height);
    }
  }
  _draw() {
    super._draw();
    const colorOpacity = this.get("colorOpacity");
    if (colorOpacity !== void 0) {
      this._display.alpha = Math.max(0, colorOpacity);
    }
    const image = this._image;
    if (image) {
      const patternWidth = this.get("width", 100);
      const patternHeight = this.get("height", 100);
      const fit = this.get("fit", "image");
      let width = 0;
      let height = 0;
      if (fit == "pattern") {
        width = patternWidth;
        height = patternHeight;
        this.markDirty();
      } else {
        width = image.width;
        height = image.height;
        if (fit == "image") {
          this.set("width", width);
          this.set("height", height);
        }
      }
      const centered = this.get("centered", true);
      let x = 0;
      let y = 0;
      if (centered) {
        x = patternWidth / 2 - width / 2;
        y = patternHeight / 2 - height / 2;
      }
      this._display.image(image, width, height, x, y);
    }
    const canvas = this.get("canvas");
    if (canvas) {
      this._display.image(canvas, canvas.width, canvas.height, 0, 0);
    }
  }
  _load() {
    const src = this.get("src");
    if (src) {
      const image = new Image();
      image.src = src;
      image.decode().then(() => {
        this._image = image;
        this._draw();
        if (this.events.isEnabled("loaded")) {
          this.events.dispatch("loaded", { type: "loaded", target: this });
        }
      }).catch((_error) => {
      });
    }
  }
};
Object.defineProperty(PicturePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PicturePattern"
});
Object.defineProperty(PicturePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([PicturePattern.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/backend/Renderer.js
var BlendMode;
(function(BlendMode2) {
  BlendMode2["ADD"] = "lighter";
  BlendMode2["COLOR"] = "color";
  BlendMode2["COLOR_BURN"] = "color-burn";
  BlendMode2["COLOR_DODGE"] = "color-dodge";
  BlendMode2["DARKEN"] = "darken";
  BlendMode2["DIFFERENCE"] = "difference";
  BlendMode2["DST_OVER"] = "destination-over";
  BlendMode2["EXCLUSION"] = "exclusion";
  BlendMode2["HARD_LIGHT"] = "hard-light";
  BlendMode2["HUE"] = "hue";
  BlendMode2["LIGHTEN"] = "lighten";
  BlendMode2["LUMINOSITY"] = "luminosity";
  BlendMode2["MULTIPLY"] = "multiply";
  BlendMode2["NORMAL"] = "source-over";
  BlendMode2["OVERLAY"] = "overlay";
  BlendMode2["SATURATION"] = "saturation";
  BlendMode2["SCREEN"] = "screen";
  BlendMode2["SOFT_LIGHT"] = "soft-light";
  BlendMode2["SRC_ATOP"] = "source-atop";
  BlendMode2["XOR"] = "xor";
})(BlendMode || (BlendMode = {}));

// node_modules/@amcharts/amcharts5/.internal/core/render/Graphics.js
var visualSettings = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset", "shadowBlur", "shadowColor", "shadowOpacity", "shadowOffsetX", "shadowOffsetY", "blur", "sepia", "invert", "brightness", "hue", "contrast", "saturate"];
var Graphics = class extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeGraphics()
    });
    Object.defineProperty(this, "_clear", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("draw") || this.isDirty("svgPath")) {
      this.markDirtyBounds();
    }
    if (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("lineCap") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) {
      this._clear = true;
    }
    this._display.crisp = this.get("crisp", false);
    if (this.isDirty("fillGradient")) {
      const gradient = this.get("fillGradient");
      if (gradient) {
        this._display.isMeasured = true;
        const gradientTarget = gradient.get("target");
        if (gradientTarget) {
          this._disposers.push(gradientTarget.events.on("boundschanged", () => {
            this._markDirtyKey("fill");
          }));
          this._disposers.push(gradientTarget.events.on("positionchanged", () => {
            this._markDirtyKey("fill");
          }));
        }
      }
    }
    if (this.isDirty("strokeGradient")) {
      const gradient = this.get("strokeGradient");
      if (gradient) {
        this._display.isMeasured = true;
        const gradientTarget = gradient.get("target");
        if (gradientTarget) {
          this._disposers.push(gradientTarget.events.on("boundschanged", () => {
            this._markDirtyKey("stroke");
          }));
          this._disposers.push(gradientTarget.events.on("positionchanged", () => {
            this._markDirtyKey("stroke");
          }));
        }
      }
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this.markDirtyBounds();
      this.markDirtyLayer();
      this._display.clear();
      let strokeDasharray = this.get("strokeDasharray");
      if (isNumber(strokeDasharray)) {
        if (strokeDasharray < 0.5) {
          strokeDasharray = [0];
        } else {
          strokeDasharray = [strokeDasharray];
        }
      }
      this._display.setLineDash(strokeDasharray);
      const strokeDashoffset = this.get("strokeDashoffset");
      if (strokeDashoffset) {
        this._display.setLineDashOffset(strokeDashoffset);
      }
      const blendMode = this.get("blendMode", BlendMode.NORMAL);
      this._display.blendMode = blendMode;
      const draw = this.get("draw");
      if (draw && typeof draw === "function") {
        draw(this._display, this);
      }
      const svgPath = this.get("svgPath");
      if (svgPath != null) {
        this._display.svgPath(svgPath);
      }
    }
  }
  _afterChanged() {
    super._afterChanged();
    if (this._clear) {
      const fill = this.get("fill");
      const fillGradient = this.get("fillGradient");
      const fillPattern = this.get("fillPattern");
      const fillOpacity = this.get("fillOpacity");
      const stroke = this.get("stroke");
      const strokeGradient = this.get("strokeGradient");
      const strokePattern = this.get("strokePattern");
      const shadowColor = this.get("shadowColor");
      const shadowBlur = this.get("shadowBlur");
      const shadowOffsetX = this.get("shadowOffsetX");
      const shadowOffsetY = this.get("shadowOffsetY");
      const shadowOpacity = this.get("shadowOpacity");
      if (shadowColor && (shadowBlur || shadowOffsetX || shadowOffsetY)) {
        this._display.shadow(shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, shadowOpacity);
      }
      if (fill && !fillGradient) {
        this._display.beginFill(fill, fillOpacity);
        this._display.endFill();
      }
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
        const gradient = fillGradient.getFill(this);
        if (gradient) {
          this._display.beginFill(gradient, fillOpacity);
          this._display.endFill();
        }
      }
      if (fillPattern) {
        const pattern = fillPattern.pattern;
        if (pattern) {
          this._display.beginFill(pattern, fillOpacity);
          this._display.endFill();
          if (fillPattern instanceof PicturePattern) {
            fillPattern.events.once("loaded", () => {
              this._clear = true;
              this.markDirty();
            });
          }
        }
      }
      if (stroke || strokeGradient || strokePattern) {
        const strokeOpacity = this.get("strokeOpacity");
        let strokeWidth = this.get("strokeWidth", 1);
        if (this.get("nonScalingStroke")) {
          strokeWidth = strokeWidth / this.get("scale", 1);
        }
        if (this.get("crisp")) {
          strokeWidth /= this._root._renderer.resolution;
        }
        const lineJoin = this.get("lineJoin");
        const lineCap = this.get("lineCap");
        if (stroke && !strokeGradient) {
          this._display.lineStyle(strokeWidth, stroke, strokeOpacity, lineJoin, lineCap);
          this._display.endStroke();
        }
        if (strokeGradient) {
          const stops = strokeGradient.get("stops", []);
          if (stops.length) {
            each(stops, (stop) => {
              if ((!stop.color || stop.colorInherited) && stroke) {
                stop.color = stroke;
                stop.colorInherited = true;
              }
              if (stop.opacity == null || stop.opacityInherited) {
                stop.opacity = strokeOpacity;
                stop.opacityInherited = true;
              }
            });
          }
          const gradient = strokeGradient.getFill(this);
          if (gradient) {
            this._display.lineStyle(strokeWidth, gradient, strokeOpacity, lineJoin, lineCap);
            this._display.endStroke();
          }
        }
        if (strokePattern) {
          let pattern = strokePattern.pattern;
          if (pattern) {
            this._display.lineStyle(strokeWidth, pattern, strokeOpacity, lineJoin, lineCap);
            this._display.endStroke();
            if (strokePattern instanceof PicturePattern) {
              strokePattern.events.once("loaded", () => {
                this._clear = true;
                this.markDirty();
              });
            }
          }
        }
      }
      if (this.getPrivate("showingTooltip")) {
        this.showTooltip();
      }
    }
    this._clear = false;
  }
};
Object.defineProperty(Graphics, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Graphics"
});
Object.defineProperty(Graphics, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Graphics.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Rectangle.js
var Rectangle = class extends Graphics {
  _afterNew() {
    super._afterNew();
    this._display.isMeasured = true;
    this.setPrivateRaw("trustBounds", true);
  }
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
    let w = this.width();
    let h = this.height();
    let x = 0;
    let y = 0;
    let wSign = w / Math.abs(w);
    let hSign = h / Math.abs(h);
    if (this.get("containStroke", false)) {
      const strokeWidth = this.get("strokeWidth", 0);
      w -= strokeWidth * wSign;
      h -= strokeWidth * hSign;
      x += strokeWidth / 2 * wSign;
      y += strokeWidth / 2 * hSign;
    }
    this._display.drawRect(x, y, w, h);
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
};
Object.defineProperty(Rectangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Rectangle"
});
Object.defineProperty(Rectangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Rectangle.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Layout.js
function eachChildren(container, f) {
  if (container.get("reverseChildren", false)) {
    container.children.eachReverse(f);
  } else {
    container.children.each(f);
  }
}
var Layout = class extends Entity {
};
Object.defineProperty(Layout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Layout"
});
Object.defineProperty(Layout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Layout.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/HorizontalLayout.js
var HorizontalLayout = class extends Layout {
  /**
   * @ignore
   */
  updateContainer(container) {
    let paddingLeft = container.get("paddingLeft", 0);
    let availableWidth = container.innerWidth();
    let totalPercent = 0;
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childWidth = child.get("width");
          if (childWidth instanceof Percent) {
            totalPercent += childWidth.value;
            let w = availableWidth * childWidth.value;
            let minWidth = child.get("minWidth", child.getPrivate("minWidth", -Infinity));
            if (minWidth > w) {
              availableWidth -= minWidth;
              totalPercent -= childWidth.value;
            }
            let maxWidth = child.get("maxWidth", child.getPrivate("maxWidth", Infinity));
            if (w > maxWidth) {
              availableWidth -= maxWidth;
              totalPercent -= childWidth.value;
            }
          } else {
            if (!isNumber(childWidth)) {
              childWidth = child.width();
            }
            availableWidth -= childWidth + child.get("marginLeft", 0) + child.get("marginRight", 0);
          }
        }
      }
    });
    if (availableWidth <= 0 || availableWidth == Infinity) {
      availableWidth = 0.1;
    }
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childWidth = child.get("width");
          if (childWidth instanceof Percent) {
            let privateWidth = availableWidth * childWidth.value / totalPercent - child.get("marginLeft", 0) - child.get("marginRight", 0);
            let minWidth = child.get("minWidth", child.getPrivate("minWidth", -Infinity));
            let maxWidth = child.get("maxWidth", child.getPrivate("maxWidth", Infinity));
            privateWidth = Math.min(Math.max(minWidth, privateWidth), maxWidth);
            child.setPrivate("width", privateWidth);
          } else {
            if (child._prevSettings.width instanceof Percent) {
              child.setPrivate("width", void 0);
            }
          }
        }
      }
    });
    let prevX = paddingLeft;
    eachChildren(container, (child) => {
      if (child.get("position") == "relative") {
        if (child.isVisible()) {
          let bounds = child.adjustedLocalBounds();
          let marginLeft = child.get("marginLeft", 0);
          let marginRight = child.get("marginRight", 0);
          let maxWidth = child.get("maxWidth");
          let left = bounds.left;
          let right = bounds.right;
          if (maxWidth) {
            if (right - left > maxWidth) {
              right = left + maxWidth;
            }
          }
          let x = prevX + marginLeft - left;
          child.setPrivate("x", x);
          prevX = x + right + marginRight;
        } else {
          child.setPrivate("x", void 0);
        }
      }
    });
  }
};
Object.defineProperty(HorizontalLayout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HorizontalLayout"
});
Object.defineProperty(HorizontalLayout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Layout.classNames.concat([HorizontalLayout.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/VerticalLayout.js
var VerticalLayout = class extends Layout {
  /**
   * @ignore
   */
  updateContainer(container) {
    let paddingTop = container.get("paddingTop", 0);
    let availableHeight = container.innerHeight();
    let totalPercent = 0;
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childHeight = child.get("height");
          if (childHeight instanceof Percent) {
            totalPercent += childHeight.value;
            let h = availableHeight * childHeight.value;
            let minHeight = child.get("minHeight", child.getPrivate("minHeight", -Infinity));
            if (minHeight > h) {
              availableHeight -= minHeight;
              totalPercent -= childHeight.value;
            }
            let maxHeight = child.get("maxHeight", child.getPrivate("maxHeight", Infinity));
            if (h > maxHeight) {
              availableHeight -= maxHeight;
              totalPercent -= childHeight.value;
            }
          } else {
            if (!isNumber(childHeight)) {
              childHeight = child.height();
            }
            availableHeight -= childHeight + child.get("marginTop", 0) + child.get("marginBottom", 0);
          }
        }
      }
    });
    if (availableHeight <= 0 || availableHeight == Infinity) {
      availableHeight = 0.1;
    }
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childHeight = child.get("height");
          if (childHeight instanceof Percent) {
            let privateHeight = availableHeight * childHeight.value / totalPercent - child.get("marginTop", 0) - child.get("marginBottom", 0);
            let minHeight = child.get("minHeight", child.getPrivate("minHeight", -Infinity));
            let maxHeight = child.get("maxHeight", child.getPrivate("maxHeight", Infinity));
            privateHeight = Math.min(Math.max(minHeight, privateHeight), maxHeight);
            child.setPrivate("height", privateHeight);
          } else {
            if (child._prevSettings.height instanceof Percent) {
              child.setPrivate("height", void 0);
            }
          }
        }
      }
    });
    let prevY = paddingTop;
    eachChildren(container, (child) => {
      if (child.get("position") == "relative") {
        if (child.isVisible()) {
          let bounds = child.adjustedLocalBounds();
          let marginTop = child.get("marginTop", 0);
          let top = bounds.top;
          let bottom = bounds.bottom;
          let maxHeight = child.get("maxHeight");
          if (maxHeight) {
            if (bottom - top > maxHeight) {
              bottom = top + maxHeight;
            }
          }
          let marginBottom = child.get("marginBottom", 0);
          let y = prevY + marginTop - top;
          child.setPrivate("y", y);
          prevY = y + bottom + marginBottom;
        } else {
          child.setPrivate("y", void 0);
        }
      }
    });
  }
};
Object.defineProperty(VerticalLayout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VerticalLayout"
});
Object.defineProperty(VerticalLayout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Layout.classNames.concat([VerticalLayout.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/GridLayout.js
var GridLayout = class extends Layout {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE);
    super._afterNew();
  }
  /**
   * @ignore
   */
  updateContainer(container) {
    let paddingLeft = container.get("paddingLeft", 0);
    let paddingRight = container.get("paddingRight", 0);
    let paddingTop = container.get("paddingTop", 0);
    let availableWidth = container.maxWidth() - paddingLeft - paddingRight;
    let minCellWidth = availableWidth;
    let maxCellWidth = 1;
    eachChildren(container, (child) => {
      if (child.get("visible") && child.getPrivate("visible") && !child.get("forceHidden")) {
        if (child.get("position") != "absolute") {
          let childWidth = child.width();
          if (childWidth < minCellWidth) {
            minCellWidth = childWidth;
          }
          if (childWidth > maxCellWidth) {
            maxCellWidth = childWidth;
          }
        }
      }
    });
    minCellWidth = fitToRange(minCellWidth, 1, availableWidth);
    maxCellWidth = fitToRange(maxCellWidth, 1, availableWidth);
    let columnCount = 1;
    if (this.get("fixedWidthGrid")) {
      columnCount = availableWidth / maxCellWidth;
    } else {
      columnCount = availableWidth / minCellWidth;
    }
    columnCount = Math.max(1, Math.floor(columnCount));
    columnCount = Math.min(this.get("maxColumns", Number.MAX_VALUE), columnCount);
    let columnWidths = this.getColumnWidths(container, columnCount, maxCellWidth, availableWidth);
    let prevY = paddingTop;
    let column = 0;
    let maxRowHeight = 0;
    columnCount = columnWidths.length;
    let prevX = paddingLeft;
    eachChildren(container, (child) => {
      if (child.get("position") == "relative" && child.isVisible()) {
        const marginTop = child.get("marginTop", 0);
        const marginBottom = child.get("marginBottom", 0);
        let bounds = child.adjustedLocalBounds();
        let marginLeft = child.get("marginLeft", 0);
        let marginRight = child.get("marginRight", 0);
        let x = prevX + marginLeft - bounds.left;
        let y = prevY + marginTop - bounds.top;
        child.setPrivate("x", x);
        child.setPrivate("y", y);
        prevX += columnWidths[column] + marginRight;
        maxRowHeight = Math.max(maxRowHeight, child.height() + marginTop + marginBottom);
        column++;
        if (column >= columnCount) {
          column = 0;
          prevX = paddingLeft;
          prevY += maxRowHeight;
          maxRowHeight = 0;
        }
      }
    });
  }
  /**
   * @ignore
   */
  getColumnWidths(container, columnCount, maxCellWidth, availableWidth) {
    let totalWidth = 0;
    let columnWidths = [];
    let column = 0;
    eachChildren(container, (child) => {
      let bounds = child.adjustedLocalBounds();
      if (child.get("position") != "absolute" && child.isVisible()) {
        if (this.get("fixedWidthGrid")) {
          columnWidths[column] = maxCellWidth;
        } else {
          columnWidths[column] = Math.max(columnWidths[column] | 0, bounds.right - bounds.left + child.get("marginLeft", 0) + child.get("marginRight", 0));
        }
        if (column < container.children.length - 1) {
          column++;
          if (column == columnCount) {
            column = 0;
          }
        }
      }
    });
    each(columnWidths, (w) => {
      totalWidth += w;
    });
    if (totalWidth > availableWidth) {
      if (columnCount > 2) {
        columnCount -= 1;
        return this.getColumnWidths(container, columnCount, maxCellWidth, availableWidth);
      } else {
        return [availableWidth];
      }
    }
    return columnWidths;
  }
};
Object.defineProperty(GridLayout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GridLayout"
});
Object.defineProperty(GridLayout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Layout.classNames.concat([GridLayout.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/util/TextFormatter.js
var TextFormatter = class {
  /**
   * Replaces brackets with temporary placeholders.
   *
   * @ignore Exclude from docs
   * @param text  Input text
   * @return Escaped text
   */
  static escape(text) {
    return text.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  /**
   * Replaces placeholders back to brackets.
   *
   * @ignore Exclude from docs
   * @param text  Escaped text
   * @return Unescaped text
   */
  static unescape(text) {
    return text.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  /**
   * Cleans up the text text for leftover double square brackets.
   *
   * @ignore Exclude from docs
   * @param text  Input text
   * @return Cleaned up text
   */
  static cleanUp(text) {
    return text.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  /**
   * Splits string into chunks. (style blocks, quoted blocks, regular blocks)
   *
   * If the second parameter `quotedBlocks` is set to `true` this method will
   * also single out text blocks enclosed within single quotes that no
   * formatting should be applied to, and they should be displayed as is.
   *
   * Default for the above is `false`, so that you can use single quote in text
   * without escaping it.
   *
   * If enabled, single quotes can be escaped by doubling it - adding two
   * single quotes, which will be replaced by a one single quote in the final
   * output.
   *
   * @ignore Exclude from docs
   * @param text          Text to chunk
   * @param quotedBlocks  Use quoted blocks
   * @param noFormatting  Formatting blocks will be treated as regular text
   * @return Array of string chunks
   */
  static chunk(text, quotedBlocks = false, noFormatting = false) {
    let res = [];
    text = this.escape(text);
    let chunks = quotedBlocks ? text.split("'") : [text];
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];
      if (chunk === "") {
        continue;
      }
      if (i % 2 === 0) {
        chunk = chunk.replace(/\]\[/g, "]" + PLACEHOLDER + "[");
        chunk = chunk.replace(/\[\]/g, "[ ]");
        let chunks2 = chunk.split(/[\[\]]+/);
        for (let i2 = 0; i2 < chunks2.length; i2++) {
          let chunk2 = this.cleanUp(this.unescape(chunks2[i2]));
          if (chunk2 === PLACEHOLDER) {
            continue;
          }
          if (chunk2 === "") {
            continue;
          }
          if (i2 % 2 === 0) {
            res.push({
              "type": "value",
              "text": chunk2
            });
          } else {
            res.push({
              "type": noFormatting ? "value" : "format",
              "text": "[" + chunk2 + "]"
            });
          }
        }
      } else {
        let chunks2 = chunk.split(/[\[\]]+/);
        for (let i2 = 0; i2 < chunks2.length; i2++) {
          let chunk2 = this.cleanUp(this.unescape(chunks2[i2]));
          if (chunk2 === "") {
            continue;
          }
          if (i2 % 2 === 0) {
            res.push({
              "type": "text",
              "text": chunk2
            });
          } else if (this.isImage(chunk2)) {
            res.push({
              "type": "image",
              "text": "[" + chunk2 + "]"
            });
          } else {
            res.push({
              "type": "format",
              "text": "[" + chunk2 + "]"
            });
          }
        }
      }
    }
    return res;
  }
  /**
   * Checks if supplied format contains image information and should be
   * formatted as such.
   * I.e.: `[img: myImage.png]`
   *
   * @ignore
   * @param  text  Format
   * @return true if it is an image
   */
  static isImage(text) {
    return text.match(/img[ ]?:/) ? true : false;
  }
  static getTextStyle(style) {
    let format = {};
    if (style == "" || style == "[ ]") {
      return {};
    }
    const q = style.match(/('[^']*')|("[^"]*")/gi);
    if (q) {
      for (let i = 0; i < q.length; i++) {
        style = style.replace(q[i], q[i].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
      }
    }
    let b = style.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!b) {
      return {};
    }
    for (let i = 0; i < b.length; i++) {
      if (b[i].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i)) {
        format.fontWeight = b[i];
      } else if (b[i].match(/^(underline|line-through)$/i)) {
        format.textDecoration = b[i];
      } else if (b[i] == "/") {
      } else if (!b[i].match(/:/)) {
        format.fill = Color.fromString(b[i]);
      } else {
        const p = b[i].replace("+", " ").split(/:[ ]*/);
        format[p[0]] = p[1];
      }
    }
    return format;
  }
};
Object.defineProperty(TextFormatter, "prefix", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "__amcharts__"
});

// node_modules/@amcharts/amcharts5/.internal/core/util/Children.js
var Children = class extends List {
  constructor(container) {
    super();
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_container", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._container = container;
    this._events = this.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (x) => {
          this._onRemoved(x);
        });
      } else if (change.type === "push") {
        this._onInserted(change.newValue);
      } else if (change.type === "setIndex") {
        this._onRemoved(change.oldValue);
        this._onInserted(change.newValue, change.index);
      } else if (change.type === "insertIndex") {
        this._onInserted(change.newValue, change.index);
      } else if (change.type === "removeIndex") {
        this._onRemoved(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._onRemoved(change.value);
        this._onInserted(change.value, change.newIndex);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    });
  }
  _onInserted(child, index) {
    child._setParent(this._container, true);
    const childrenDisplay = this._container._childrenDisplay;
    if (index === void 0) {
      childrenDisplay.addChild(child._display);
    } else {
      childrenDisplay.addChildAt(child._display, index);
    }
  }
  _onRemoved(child) {
    this._container._childrenDisplay.removeChild(child._display);
    this._container.markDirtyBounds();
    this._container.markDirty();
  }
  /**
   * Returns `true` if obejct is disposed.
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Permanently dispose this object.
   */
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._events.dispose();
      each(this.values, (child) => {
        child.dispose();
      });
    }
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/util/PopulateString.js
function populateString(target, string) {
  if (string != null) {
    string = "" + string;
    string = TextFormatter.escape(string);
    let tags = string.match(/\{([^}]+)\}/g);
    let i;
    if (tags) {
      for (i = 0; i < tags.length; i++) {
        let tag = tags[i].replace(/\{([^}]+)\}/, "$1");
        let value = getTagValue(target, tag, "");
        if (value == null) {
          value = "";
        }
        string = string.split(tags[i]).join(value);
      }
    }
    string = TextFormatter.unescape(string);
  } else {
    string = "";
  }
  return string;
}
function getTagValue(target, tagName, format) {
  let value;
  const dataItem = target.dataItem;
  let parts = [];
  let reg = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  let matches;
  while (true) {
    matches = reg.exec(tagName);
    if (matches === null) {
      break;
    }
    if (matches[3]) {
      parts.push({
        prop: matches[3]
      });
      const dateFields = target.getDateFormatter().get("dateFields", []);
      const numericFields = target.getNumberFormatter().get("numericFields", []);
      const durationFields = target.getDurationFormatter().get("durationFields", []);
      if (dateFields.indexOf(matches[3]) !== -1) {
        parts.push({
          method: "formatDate",
          params: []
        });
      } else if (numericFields.indexOf(matches[3]) !== -1) {
        parts.push({
          method: "formatNumber",
          params: []
        });
      } else if (durationFields.indexOf(matches[3]) !== -1) {
        parts.push({
          method: "formatDuration",
          params: []
        });
      }
    } else {
      let params = [];
      if (trim(matches[2]) != "") {
        let reg2 = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
        let matches2;
        while (true) {
          matches2 = reg2.exec(matches[2]);
          if (matches2 === null) {
            break;
          }
          params.push(matches2[1] || matches2[2] || matches2[3]);
        }
      }
      parts.push({
        method: matches[1],
        params
      });
    }
  }
  if (dataItem) {
    value = getTagValueFromObject(target, parts, dataItem._settings);
    if (value == null || isObject(value)) {
      value = getTagValueFromObject(target, parts, dataItem);
    }
    let dataContext = dataItem.dataContext;
    if (value == null && dataContext) {
      value = getTagValueFromObject(target, parts, dataContext);
      if (value == null) {
        value = getTagValueFromObject(target, [{
          prop: tagName
        }], dataContext);
      }
      if (value == null && dataContext.dataContext) {
        value = getTagValueFromObject(target, parts, dataContext.dataContext);
      }
    }
    if (value == null && dataItem.component && dataItem.component.dataItem !== dataItem) {
      value = getTagValue(dataItem.component, tagName, format);
    }
  }
  if (value == null) {
    value = getTagValueFromObject(target, parts, target);
  }
  if (value == null && target.parent) {
    value = getTagValue(target.parent, tagName, format);
  }
  return value;
}
function getCustomDataValue(target, prop) {
  const customData = target.getPrivate("customData");
  if (isObject(customData)) {
    return customData[prop];
  }
}
function getTagValueFromObject(target, parts, object, format) {
  let current = object;
  let formatApplied = false;
  for (let i = 0, len = parts.length; i < len; i++) {
    let part = parts[i];
    if (part.prop) {
      if (current instanceof Sprite) {
        let tmp = current.get(part.prop);
        if (tmp == null)
          tmp = current.getPrivate(part.prop);
        if (tmp == null)
          tmp = getCustomDataValue(current, part.prop);
        if (tmp == null)
          tmp = current[part.prop];
        current = tmp;
      } else if (current.get) {
        let tmp = current.get(part.prop);
        if (tmp == null)
          tmp = current[part.prop];
        current = tmp;
      } else {
        current = current[part.prop];
      }
      if (current == null) {
        return;
      }
    } else {
      switch (part.method) {
        case "formatNumber":
          let numberValue = toNumber(current);
          if (numberValue != null) {
            current = target.getNumberFormatter().format(numberValue, format || part.params[0] || void 0);
            formatApplied = true;
          }
          break;
        case "formatDate":
          let dateValue = toDate(current);
          if (!isDate(dateValue) || isNaN(dateValue.getTime())) {
            return;
          }
          if (dateValue != null) {
            current = target.getDateFormatter().format(dateValue, format || part.params[0] || void 0);
            formatApplied = true;
          }
          break;
        case "formatDuration":
          let durationValue = toNumber(current);
          if (durationValue != null) {
            current = target.getDurationFormatter().format(durationValue, format || part.params[0] || void 0, part.params[1] || void 0);
            formatApplied = true;
          }
          break;
        case "urlEncode":
        case "encodeURIComponent":
          current = encodeURIComponent(current);
          break;
        default:
          if (current[part.method]) {
            current[part.method].apply(object, part.params);
          }
          break;
      }
    }
  }
  if (!formatApplied) {
    let formatParts = [{
      method: "",
      params: format
    }];
    if (format == null) {
      if (isNumber(current)) {
        formatParts[0].method = "formatNumber";
        formatParts[0].params = "";
      } else if (isDate(current)) {
        formatParts[0].method = "formatDate";
        formatParts[0].params = "";
      }
    } else {
      let formatterType = getFormat(format);
      if (formatterType === "number") {
        formatParts[0].method = "formatNumber";
      } else if (formatterType === "date") {
        formatParts[0].method = "formatDate";
      } else if (formatterType === "duration") {
        formatParts[0].method = "formatDuration";
      }
    }
    if (formatParts[0].method) {
      current = getTagValueFromObject(target, formatParts, current);
    }
  }
  return current;
}

// node_modules/@amcharts/amcharts5/.internal/core/render/Container.js
var Container = class _Container extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeContainer()
    });
    Object.defineProperty(this, "_childrenDisplay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeContainer()
    });
    Object.defineProperty(this, "children", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Children(this)
    });
    Object.defineProperty(this, "_percentageSizeChildren", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_percentagePositionChildren", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_prevWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_prevHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_contentWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_contentHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_contentMask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_vsbd0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_vsbd1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    eachReverse(this.allChildren(), (child) => {
      child.dispose();
    });
    if (this.getPrivate("htmlElement")) {
      this._root._removeHTMLContent(this);
    }
    super._dispose();
  }
  _changed() {
    super._changed();
    if (this.isDirty("interactiveChildren")) {
      this._display.interactiveChildren = this.get("interactiveChildren", false);
    }
    if (this.isDirty("layout")) {
      this._prevWidth = 0;
      this._prevHeight = 0;
      this.markDirtyBounds();
      if (this._prevSettings.layout) {
        this.children.each((child) => {
          child.removePrivate("x");
          child.removePrivate("y");
        });
      }
    }
    if (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) {
      this.children.each((child) => {
        child.markDirtyPosition();
      });
    }
    if (this.isDirty("maskContent")) {
      const childrenDisplay = this._childrenDisplay;
      let contentMask = this._contentMask;
      if (this.get("maskContent")) {
        if (!contentMask) {
          contentMask = Rectangle.new(this._root, {
            x: -0.5,
            y: -0.5,
            width: this.width() + 1,
            height: this.height() + 1
          });
          this._contentMask = contentMask;
          childrenDisplay.addChildAt(contentMask._display, 0);
          childrenDisplay.mask = contentMask._display;
        }
      } else {
        if (contentMask) {
          childrenDisplay.removeChild(contentMask._display);
          childrenDisplay.mask = null;
          contentMask.dispose();
          this._contentMask = void 0;
        }
      }
    }
  }
  _updateSize() {
    super._updateSize();
    each(this._percentageSizeChildren, (child) => {
      child._updateSize();
    });
    each(this._percentagePositionChildren, (child) => {
      child.markDirtyPosition();
      child._updateSize();
    });
    this.updateBackground();
  }
  updateBackground() {
    const background = this.get("background");
    let bounds = this._localBounds;
    if (bounds && !this.isHidden()) {
      let x = bounds.left;
      let y = bounds.top;
      let w = bounds.right - x;
      let h = bounds.bottom - y;
      let maxWidth = this.get("maxWidth");
      let maxHeight = this.get("maxHeight");
      if (maxHeight) {
        if (h > maxHeight) {
          h = maxHeight;
        }
      }
      if (maxWidth) {
        if (w > maxWidth) {
          w = maxWidth;
        }
      }
      let width = this.width();
      let height = this.height();
      if (background) {
        background.setAll({ width: w, height: h, x, y });
        if (this._display.interactive) {
          background._display.interactive = true;
        }
      }
      const contentMask = this._contentMask;
      if (contentMask) {
        contentMask.setAll({ width: width + 1, height: height + 1 });
      }
      const verticalScrollbar = this.get("verticalScrollbar");
      if (verticalScrollbar) {
        verticalScrollbar.set("height", height);
        verticalScrollbar.set("x", width - verticalScrollbar.width() - verticalScrollbar.get("marginRight", 0));
        verticalScrollbar.set("end", verticalScrollbar.get("start", 0) + height / this._contentHeight);
        const bg = verticalScrollbar.get("background");
        if (bg) {
          bg.setAll({ width: verticalScrollbar.width(), height });
        }
        let visible = true;
        if (this._contentHeight <= height) {
          visible = false;
        }
        verticalScrollbar.setPrivate("visible", visible);
      }
    }
  }
  _applyThemes(force = false) {
    if (super._applyThemes(force)) {
      this.eachChildren((child) => {
        child._applyThemes(force);
      });
      return true;
    } else {
      return false;
    }
  }
  _applyState(name) {
    super._applyState(name);
    if (this.get("setStateOnChildren")) {
      this.eachChildren((child) => {
        child.states.apply(name);
      });
    }
  }
  _applyStateAnimated(name, duration) {
    super._applyStateAnimated(name, duration);
    if (this.get("setStateOnChildren")) {
      this.eachChildren((child) => {
        child.states.applyAnimate(name, duration);
      });
    }
  }
  /**
   * Returns container's inner width (width without padding) in pixels.
   *
   * @return Inner width (px)
   */
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  /**
   * Returns container's inner height (height without padding) in pixels.
   *
   * @return Inner height (px)
   */
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    if (!this.get("html")) {
      let width = this.get("width");
      let height = this.get("height");
      let pWidth = this.getPrivate("width");
      let pHeight = this.getPrivate("height");
      let bounds = {
        left: 0,
        top: 0,
        right: this.width(),
        bottom: this.height()
      };
      let layout = this.get("layout");
      let horizontal = false;
      let vertical = false;
      if (layout instanceof HorizontalLayout || layout instanceof GridLayout) {
        horizontal = true;
      }
      if (layout instanceof VerticalLayout) {
        vertical = true;
      }
      if ((width != null || pWidth != null) && (height != null || pHeight != null) && !this.get("verticalScrollbar")) {
      } else {
        let m = Number.MAX_VALUE;
        let l = m;
        let r = -m;
        let t = m;
        let b = -m;
        const paddingLeft = this.get("paddingLeft", 0);
        const paddingTop = this.get("paddingTop", 0);
        const paddingRight = this.get("paddingRight", 0);
        const paddingBottom = this.get("paddingBottom", 0);
        this.children.each((child) => {
          if (child.get("position") != "absolute" && child.get("isMeasured")) {
            let childBounds = child.adjustedLocalBounds();
            let childX = child.x();
            let childY = child.y();
            let cl = childX + childBounds.left;
            let cr = childX + childBounds.right;
            let ct = childY + childBounds.top;
            let cb = childY + childBounds.bottom;
            if (horizontal) {
              cl -= child.get("marginLeft", 0);
              cr += child.get("marginRight", 0);
            }
            if (vertical) {
              ct -= child.get("marginTop", 0);
              cb += child.get("marginBottom", 0);
            }
            if (cl < l) {
              l = cl;
            }
            if (cr > r) {
              r = cr;
            }
            if (ct < t) {
              t = ct;
            }
            if (cb > b) {
              b = cb;
            }
          }
        });
        if (l == m) {
          l = 0;
        }
        if (r == -m) {
          r = 0;
        }
        if (t == m) {
          t = 0;
        }
        if (b == -m) {
          b = 0;
        }
        bounds.left = l - paddingLeft;
        bounds.top = t - paddingTop;
        bounds.right = r + paddingRight;
        bounds.bottom = b + paddingBottom;
        const minWidth = this.get("minWidth");
        if (isNumber(minWidth) && minWidth > 0) {
          if (bounds.right - bounds.left < minWidth) {
            if (bounds.right >= minWidth) {
              bounds.left = bounds.right - minWidth;
            } else {
              bounds.right = bounds.left + minWidth;
            }
          }
        }
        const minHeight = this.get("minHeight");
        if (isNumber(minHeight) && minHeight > 0) {
          if (bounds.bottom - bounds.top < minHeight) {
            if (bounds.bottom >= minHeight) {
              bounds.top = bounds.bottom - minHeight;
            } else {
              bounds.bottom = bounds.top + minHeight;
            }
          }
        }
      }
      this._contentWidth = bounds.right - bounds.left;
      this._contentHeight = bounds.bottom - bounds.top;
      if (isNumber(width)) {
        bounds.left = 0;
        bounds.right = width;
      }
      if (isNumber(pWidth)) {
        bounds.left = 0;
        bounds.right = pWidth;
      }
      if (isNumber(height)) {
        bounds.top = 0;
        bounds.bottom = height;
      }
      if (isNumber(pHeight)) {
        bounds.top = 0;
        bounds.bottom = pHeight;
      }
      this._localBounds = bounds;
    } else {
      let bounds = this._localBounds;
      if (bounds) {
        this._contentWidth = bounds.right - bounds.left;
        this._contentHeight = bounds.bottom - bounds.top;
      }
    }
  }
  _updateBounds() {
    const layout = this.get("layout");
    if (layout) {
      layout.updateContainer(this);
    }
    super._updateBounds();
    this.updateBackground();
  }
  /**
   * @ignore
   */
  markDirty() {
    super.markDirty();
    this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const innerWidth = this.innerWidth();
    const innerHeight = this.innerHeight();
    if (innerWidth != this._prevWidth || innerHeight != this._prevHeight) {
      let layout = this.get("layout");
      let horizontal = false;
      let vertical = false;
      if (layout) {
        if (layout instanceof HorizontalLayout || layout instanceof GridLayout) {
          horizontal = true;
        }
        if (layout instanceof VerticalLayout) {
          vertical = true;
        }
      }
      each(this._percentageSizeChildren, (child) => {
        if (!horizontal) {
          let width = child.get("width");
          if (width instanceof Percent) {
            child.setPrivate("width", width.value * innerWidth);
          }
        }
        if (!vertical) {
          let height = child.get("height");
          if (height instanceof Percent) {
            child.setPrivate("height", height.value * innerHeight);
          }
        }
      });
      each(this._percentagePositionChildren, (child) => {
        child.markDirtyPosition();
        child.markDirtyBounds();
      });
      this._prevWidth = innerWidth;
      this._prevHeight = innerHeight;
      this._sizeDirty = true;
      this.updateBackground();
    }
    this._handleStates();
  }
  _updateHTMLContent() {
    const html = this.get("html", "");
    if (html && html !== "") {
      this._root._setHTMLContent(this, populateString(this, html));
    } else {
      this._root._removeHTMLContent(this);
    }
    this._root._positionHTMLElement(this);
  }
  /**
   * If scrolling is enabled on the Container (by adding `verticalScrollbar`)
   * the Container will scroll in such way so that target element becomes
   * visible if its currently outside of view.
   *
   * @param  child  Target child
   * @since 5.10.5
   */
  scrollToChild(child) {
    const verticalScrollbar = this.get("verticalScrollbar");
    if (verticalScrollbar) {
      let y = child.y();
      let h = this.innerHeight();
      let ch = child.height();
      let contentH = this._contentHeight;
      let max = 1 - (h - ch / 2) / contentH;
      if (y + ch * 0.7 + this._childrenDisplay.y > h || y - ch * 0.3 + this._childrenDisplay.y < 0) {
        let pos = Math.max(0, Math.min(max, (y - ch / 2) / contentH));
        verticalScrollbar.animate({ key: "start", to: pos, duration: verticalScrollbar.get("animationDuration", 0), easing: verticalScrollbar.get("animationEasing") });
      }
    }
  }
  _updateChildren() {
    if (this.isDirty("html")) {
      this._updateHTMLContent();
    }
    if (this.isDirty("verticalScrollbar")) {
      const verticalScrollbar = this.get("verticalScrollbar");
      if (verticalScrollbar) {
        verticalScrollbar._setParent(this);
        verticalScrollbar.startGrip.setPrivate("visible", false);
        verticalScrollbar.endGrip.setPrivate("visible", false);
        this.set("maskContent", true);
        this.set("paddingRight", verticalScrollbar.width() + verticalScrollbar.get("marginRight", 0) + verticalScrollbar.get("marginLeft", 0));
        let background = this.get("background");
        if (!background) {
          background = this.set("background", Rectangle.new(this._root, {
            themeTags: ["background"],
            fillOpacity: 0,
            fill: this._root.interfaceColors.get("alternativeBackground")
          }));
        }
        this._vsbd0 = this.events.on("wheel", (event) => {
          const wheelEvent = event.originalEvent;
          if (isLocalEvent(wheelEvent, this)) {
            wheelEvent.preventDefault();
          } else {
            return;
          }
          let shiftY = wheelEvent.deltaY / 5e3;
          const start = verticalScrollbar.get("start", 0);
          const end = verticalScrollbar.get("end", 1);
          if (start + shiftY <= 0) {
            shiftY = -start;
          }
          if (end + shiftY >= 1) {
            shiftY = 1 - end;
          }
          if (start + shiftY >= 0 && end + shiftY <= 1) {
            verticalScrollbar.set("start", start + shiftY);
            verticalScrollbar.set("end", end + shiftY);
          }
        });
        this._disposers.push(this._vsbd0);
        this._vsbd1 = verticalScrollbar.events.on("rangechanged", () => {
          let h = this._contentHeight;
          const childrenDisplay = this._childrenDisplay;
          const contentMask = this._contentMask;
          childrenDisplay.y = -verticalScrollbar.get("start", 0) * h;
          childrenDisplay.markDirtyLayer();
          if (contentMask) {
            contentMask._display.y = -childrenDisplay.y;
            childrenDisplay.mask = contentMask._display;
          }
        });
        this._disposers.push(this._vsbd1);
        this._display.addChild(verticalScrollbar._display);
      } else {
        const previous = this._prevSettings.verticalScrollbar;
        if (previous) {
          this._display.removeChild(previous._display);
          if (this._vsbd0) {
            this._vsbd0.dispose();
          }
          if (this._vsbd1) {
            this._vsbd1.dispose();
          }
          const childrenDisplay = this._childrenDisplay;
          childrenDisplay.y = 0;
          this.setPrivate("height", void 0);
          this.set("maskContent", false);
          this.set("paddingRight", void 0);
        }
      }
    }
    if (this.isDirty("background")) {
      const previous = this._prevSettings["background"];
      if (previous) {
        this._display.removeChild(previous._display);
      }
      const background = this.get("background");
      if (background instanceof Sprite) {
        background.set("isMeasured", false);
        background._setParent(this);
        this._display.addChildAt(background._display, 0);
      }
    }
    if (this.isDirty("mask")) {
      const mask = this.get("mask");
      const previous = this._prevSettings["mask"];
      if (previous) {
        this._display.removeChild(previous._display);
        if (previous != mask) {
          previous.dispose();
        }
      }
      if (mask) {
        const parent = mask.parent;
        if (parent) {
          parent.children.removeValue(mask);
        }
        mask._setParent(this);
        this._display.addChildAt(mask._display, 0);
        this._childrenDisplay.mask = mask._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField();
    this.children.each((child) => {
      child._processTemplateField();
    });
  }
  /**
   * @ignore
   */
  walkChildren(f) {
    this.children.each((child) => {
      if (child instanceof _Container) {
        child.walkChildren(f);
      }
      f(child);
    });
  }
  eachChildren(f) {
    const background = this.get("background");
    if (background) {
      f(background);
    }
    const verticalScrollbar = this.get("verticalScrollbar");
    if (verticalScrollbar) {
      f(verticalScrollbar);
    }
    const mask = this.get("mask");
    if (mask) {
      f(mask);
    }
    this.children.values.forEach((child) => {
      f(child);
    });
  }
  allChildren() {
    const output = [];
    this.eachChildren((x) => {
      output.push(x);
    });
    return output;
  }
  _setDataItem(dataItem) {
    const updated = dataItem !== this._dataItem;
    super._setDataItem(dataItem);
    const html = this.get("html", "");
    if (html && html !== "" && updated) {
      this._root._setHTMLContent(this, populateString(this, html));
    }
  }
  contentWidth() {
    return this._contentWidth;
  }
  contentHeight() {
    return this._contentHeight;
  }
};
Object.defineProperty(Container, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Container"
});
Object.defineProperty(Container, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Container.className])
});

export {
  List,
  ListAutoDispose,
  ListTemplate,
  Percent,
  percent,
  p0,
  p100,
  p50,
  isPercent,
  ready,
  removeElement,
  addEventListener,
  onZoom,
  supports,
  blur,
  focus,
  getRendererEvent,
  isTouchEvent,
  setStyle,
  getStyle,
  getEventTarget,
  contains,
  isLocalEvent,
  setInteractive,
  getEventKey,
  getShadowRoot,
  StyleRule,
  StyleSheet,
  addClass,
  removeClass,
  getSafeResolution,
  relativeToValue,
  decimalPlaces,
  padString,
  trim,
  truncateTextWithEllipsis,
  cleanFormat,
  stripTags,
  escapeForRgex,
  addSpacing,
  splitString,
  getYearDay,
  getWeek,
  getWeekYear,
  getMonthWeek,
  getDayFromWeek,
  get12Hours,
  getTimeZone,
  getTimezoneOffset,
  capitalizeFirst,
  mergeTags,
  sameBounds,
  Utils_exports,
  color,
  Color,
  percentInterpolate,
  AnimationState,
  RADIANS,
  DEGREES,
  round,
  ceil,
  fitToRange,
  sin,
  tan,
  cos,
  normalizeAngle,
  getArcBounds,
  mergeBounds,
  fitAngleToRange,
  getAngle,
  getPointOnQuadraticCurve,
  getPointOnLine,
  closest,
  spiralPoints,
  circlesOverlap,
  Math_exports,
  cubic,
  out,
  Ease_exports,
  registry,
  addLicense,
  disposeAllRootElements,
  getRootById,
  Settings,
  Entity,
  Sprite,
  Pattern,
  PicturePattern,
  BlendMode,
  visualSettings,
  Graphics,
  Rectangle,
  Layout,
  HorizontalLayout,
  VerticalLayout,
  GridLayout,
  TextFormatter,
  populateString,
  Container
};
//# sourceMappingURL=chunk-BGHA5GQX.js.map
