import "./chunk-R327OCYJ.js";

// node_modules/markerjs2/markerjs2.esm.js
var t = function(e2, i2) {
  return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, e3) {
    t2.__proto__ = e3;
  } || function(t2, e3) {
    for (var i3 in e3) Object.prototype.hasOwnProperty.call(e3, i3) && (t2[i3] = e3[i3]);
  })(e2, i2);
};
function e(e2, i2) {
  function o2() {
    this.constructor = e2;
  }
  t(e2, i2), e2.prototype = null === i2 ? Object.create(i2) : (o2.prototype = i2.prototype, new o2());
}
function i(t2, e2, i2, o2) {
  return new (i2 || (i2 = Promise))((function(s2, r2) {
    function n2(t3) {
      try {
        h2(o2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        h2(o2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function h2(t3) {
      var e3;
      t3.done ? s2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2((function(t4) {
        t4(e3);
      }))).then(n2, a2);
    }
    h2((o2 = o2.apply(t2, e2 || [])).next());
  }));
}
function o(t2, e2) {
  var i2, o2, s2, r2, n2 = { label: 0, sent: function() {
    if (1 & s2[0]) throw s2[1];
    return s2[1];
  }, trys: [], ops: [] };
  return r2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (r2[Symbol.iterator] = function() {
    return this;
  }), r2;
  function a2(r3) {
    return function(a3) {
      return (function(r4) {
        if (i2) throw new TypeError("Generator is already executing.");
        for (; n2; ) try {
          if (i2 = 1, o2 && (s2 = 2 & r4[0] ? o2.return : r4[0] ? o2.throw || ((s2 = o2.return) && s2.call(o2), 0) : o2.next) && !(s2 = s2.call(o2, r4[1])).done) return s2;
          switch (o2 = 0, s2 && (r4 = [2 & r4[0], s2.value]), r4[0]) {
            case 0:
            case 1:
              s2 = r4;
              break;
            case 4:
              return n2.label++, { value: r4[1], done: false };
            case 5:
              n2.label++, o2 = r4[1], r4 = [0];
              continue;
            case 7:
              r4 = n2.ops.pop(), n2.trys.pop();
              continue;
            default:
              if (!(s2 = n2.trys, (s2 = s2.length > 0 && s2[s2.length - 1]) || 6 !== r4[0] && 2 !== r4[0])) {
                n2 = 0;
                continue;
              }
              if (3 === r4[0] && (!s2 || r4[1] > s2[0] && r4[1] < s2[3])) {
                n2.label = r4[1];
                break;
              }
              if (6 === r4[0] && n2.label < s2[1]) {
                n2.label = s2[1], s2 = r4;
                break;
              }
              if (s2 && n2.label < s2[2]) {
                n2.label = s2[2], n2.ops.push(r4);
                break;
              }
              s2[2] && n2.ops.pop(), n2.trys.pop();
              continue;
          }
          r4 = e2.call(t2, n2);
        } catch (t3) {
          r4 = [6, t3], o2 = 0;
        } finally {
          i2 = s2 = 0;
        }
        if (5 & r4[0]) throw r4[1];
        return { value: r4[0] ? r4[1] : void 0, done: true };
      })([r3, a3]);
    };
  }
}
function s() {
  for (var t2 = 0, e2 = 0, i2 = arguments.length; e2 < i2; e2++) t2 += arguments[e2].length;
  var o2 = Array(t2), s2 = 0;
  for (e2 = 0; e2 < i2; e2++) for (var r2 = arguments[e2], n2 = 0, a2 = r2.length; n2 < a2; n2++, s2++) o2[s2] = r2[n2];
  return o2;
}
var r = (function() {
  function t2() {
  }
  return t2.createDefs = function() {
    return document.createElementNS("http://www.w3.org/2000/svg", "defs");
  }, t2.setAttributes = function(t3, e2) {
    for (var i2 = 0, o2 = e2; i2 < o2.length; i2++) {
      var s2 = o2[i2], r2 = s2[0], n2 = s2[1];
      t3.setAttribute(r2, n2);
    }
  }, t2.createRect = function(e2, i2, o2) {
    var s2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    return s2.setAttribute("width", e2.toString()), s2.setAttribute("height", i2.toString()), o2 && t2.setAttributes(s2, o2), s2;
  }, t2.createLine = function(e2, i2, o2, s2, r2) {
    var n2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    return n2.setAttribute("x1", e2.toString()), n2.setAttribute("y1", i2.toString()), n2.setAttribute("x2", o2.toString()), n2.setAttribute("y2", s2.toString()), r2 && t2.setAttributes(n2, r2), n2;
  }, t2.createPolygon = function(e2, i2) {
    var o2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    return o2.setAttribute("points", e2), i2 && t2.setAttributes(o2, i2), o2;
  }, t2.createCircle = function(e2, i2) {
    var o2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    return o2.setAttribute("cx", (e2 / 2).toString()), o2.setAttribute("cy", (e2 / 2).toString()), o2.setAttribute("r", e2.toString()), i2 && t2.setAttributes(o2, i2), o2;
  }, t2.createEllipse = function(e2, i2, o2) {
    var s2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    return s2.setAttribute("cx", (e2 / 2).toString()), s2.setAttribute("cy", (i2 / 2).toString()), s2.setAttribute("rx", (e2 / 2).toString()), s2.setAttribute("ry", (i2 / 2).toString()), o2 && t2.setAttributes(s2, o2), s2;
  }, t2.createGroup = function(e2) {
    var i2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return e2 && t2.setAttributes(i2, e2), i2;
  }, t2.createTransform = function() {
    return document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGTransform();
  }, t2.createMarker = function(e2, i2, o2, s2, r2, n2, a2) {
    var h2 = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    return t2.setAttributes(h2, [["id", e2], ["orient", i2], ["markerWidth", o2.toString()], ["markerHeight", s2.toString()], ["refX", r2.toString()], ["refY", n2.toString()]]), h2.appendChild(a2), h2;
  }, t2.createText = function(e2) {
    var i2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    return i2.setAttribute("x", "0"), i2.setAttribute("y", "0"), e2 && t2.setAttributes(i2, e2), i2;
  }, t2.createTSpan = function(e2, i2) {
    var o2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    return o2.textContent = e2, i2 && t2.setAttributes(o2, i2), o2;
  }, t2.createImage = function(e2) {
    var i2 = document.createElementNS("http://www.w3.org/2000/svg", "image");
    return e2 && t2.setAttributes(i2, e2), i2;
  }, t2.createPoint = function(t3, e2) {
    var i2 = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGPoint();
    return i2.x = t3, i2.y = e2, i2;
  }, t2.createPath = function(e2, i2) {
    var o2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return o2.setAttribute("d", e2), i2 && t2.setAttributes(o2, i2), o2;
  }, t2;
})();
var n = (function() {
  function t2() {
  }
  return t2.addKey = function(e2) {
    t2.key = e2;
  }, Object.defineProperty(t2, "isLicensed", { get: function() {
    return !!t2.key && new RegExp(/^MJS2-[A-Z][0-9]{3}-[A-Z][0-9]{3}-[0-9]{4}$/, "i").test(t2.key);
  }, enumerable: false, configurable: true }), t2;
})();
var a = (function() {
  function t2() {
    this.naturalSize = false, this.imageType = "image/png", this.markersOnly = false;
  }
  return t2.prototype.rasterize = function(t3, e2, i2) {
    var o2 = this;
    return new Promise((function(s2) {
      var r2 = void 0 !== i2 ? i2 : document.createElement("canvas");
      null === t3 && (o2.markersOnly = true, o2.naturalSize = false);
      var n2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      n2.setAttribute("xmlns", "http://www.w3.org/2000/svg"), n2.setAttribute("width", e2.width.baseVal.valueAsString), n2.setAttribute("height", e2.height.baseVal.valueAsString), n2.setAttribute("viewBox", "0 0 " + e2.viewBox.baseVal.width.toString() + " " + e2.viewBox.baseVal.height.toString()), n2.innerHTML = e2.innerHTML, true === o2.naturalSize ? (n2.width.baseVal.value = t3.naturalWidth, n2.height.baseVal.value = t3.naturalHeight) : void 0 !== o2.width && void 0 !== o2.height && (n2.width.baseVal.value = o2.width, n2.height.baseVal.value = o2.height), r2.width = n2.width.baseVal.value, r2.height = n2.height.baseVal.value;
      var a2 = n2.outerHTML, h2 = r2.getContext("2d");
      true !== o2.markersOnly && h2.drawImage(t3, 0, 0, r2.width, r2.height);
      var l2 = window.URL, p2 = new Image(r2.width, r2.height);
      p2.setAttribute("crossOrigin", "anonymous");
      var c2 = new Blob([a2], { type: "image/svg+xml" }), d2 = l2.createObjectURL(c2);
      p2.onload = function() {
        h2.drawImage(p2, 0, 0), l2.revokeObjectURL(d2);
        var t4 = r2.toDataURL(o2.imageType, o2.imageQuality);
        s2(t4);
      }, p2.src = d2;
    }));
  }, t2;
})();
var h = function() {
};
var l = (function() {
  function t2(t3) {
    this._classNamePrefixBase = "__markerjs2_", this.classes = [], this.rules = [], this.settings = this.defaultSettings, this._classNamePrefix = this._classNamePrefixBase + "_" + t3 + "_";
  }
  return Object.defineProperty(t2.prototype, "classNamePrefixBase", { get: function() {
    return this._classNamePrefixBase;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "classNamePrefix", { get: function() {
    return this._classNamePrefix;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "defaultSettings", { get: function() {
    return { canvasBackgroundColor: "#ffffff", toolbarBackgroundColor: "#111111", toolbarBackgroundHoverColor: "#333333", toolbarColor: "#eeeeee", toolbarHeight: 40, toolboxColor: "#eeeeee", toolboxAccentColor: "#3080c3", undoButtonVisible: true, redoButtonVisible: false, zoomButtonVisible: false, zoomOutButtonVisible: false, clearButtonVisible: false, resultButtonBlockVisible: true, logoPosition: "left" };
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fadeInAnimationClassName", { get: function() {
    return this.classNamePrefix + "fade_in";
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "fadeOutAnimationClassName", { get: function() {
    return this.classNamePrefix + "fade_out";
  }, enumerable: false, configurable: true }), t2.prototype.addClass = function(t3) {
    return void 0 === this.styleSheet && this.addStyleSheet(), t3.name = "" + this.classNamePrefix + t3.localName, this.classes.push(t3), this.styleSheet.sheet.insertRule("." + t3.name + " {" + t3.style + "}", this.styleSheet.sheet.cssRules.length), t3;
  }, t2.prototype.addRule = function(t3) {
    void 0 === this.styleSheet && this.addStyleSheet(), this.rules.push(t3), this.styleSheet.sheet.insertRule(t3.selector + " {" + t3.style + "}", this.styleSheet.sheet.cssRules.length);
  }, t2.prototype.addStyleSheet = function() {
    var t3;
    this.styleSheet = document.createElement("style"), (null !== (t3 = this.styleSheetRoot) && void 0 !== t3 ? t3 : document.head).appendChild(this.styleSheet), this.addRule(new p("." + this.classNamePrefix + " h3", "font-family: sans-serif")), this.addRule(new p("@keyframes " + this.classNamePrefix + "_fade_in_animation_frames", "\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n    ")), this.addRule(new p("@keyframes " + this.classNamePrefix + "_fade_out_animation_frames", "\n        from {\n          opacity: 1;\n        }\n        to {\n          opacity: 0;\n        }\n    ")), this.addClass(new c("fade_in", "\n      animation-duration: 0.3s;\n      animation-name: " + this.classNamePrefix + "_fade_in_animation_frames;\n    ")), this.addClass(new c("fade_out", "\n      animation-duration: 0.3s;\n      animation-name: " + this.classNamePrefix + "_fade_out_animation_frames;\n    "));
  }, t2.prototype.removeStyleSheet = function() {
    var t3;
    this.styleSheet && ((null !== (t3 = this.styleSheetRoot) && void 0 !== t3 ? t3 : document.head).removeChild(this.styleSheet), this.styleSheet = void 0);
  }, t2;
})();
var p = function(t2, e2) {
  this.selector = t2, this.style = e2;
};
var c = function(t2, e2) {
  this.localName = t2, this.style = e2;
};
var d = (function() {
  function t2(t3, e2, i2, o2, s2) {
    this.buttons = [], this.markerButtons = [], this.buttonClickListeners = [], this.markerjsContainer = t3, this.displayMode = e2, this.markerItems = i2, this.uiStyleSettings = o2, this.styles = s2, this.addStyles(), this.adjustLayout = this.adjustLayout.bind(this), this.overflowButtonClicked = this.overflowButtonClicked.bind(this), this.setCurrentMarker = this.setCurrentMarker.bind(this);
  }
  return t2.prototype.show = function(t3) {
    var e2 = this;
    this.uiContainer = document.createElement("div"), this.uiContainer.style.visibility = t3, this.uiContainer.className = this.toolbarStyleClass.name + " " + this.styles.fadeInAnimationClassName + " " + (this.uiStyleSettings.toolbarStyleColorsClassName ? this.uiStyleSettings.toolbarStyleColorsClassName : this.toolbarStyleColorsClass.name);
    var i2 = document.createElement("div");
    i2.className = this.toolbarBlockStyleClass.name, i2.style.whiteSpace = "nowrap", this.uiContainer.appendChild(i2), this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M10.07 14.27a.997.997 0 011.33.48l2.3 4.99 1.8-.85-2.31-4.98c-.24-.5-.02-1.1.48-1.33l.28-.08 2.3-.45L8 5.12V15.9l1.82-1.47.25-.16m3.57 7.7a.99.99 0 01-1.33-.47l-2.18-4.74-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 01-1-1V3a1 1 0 011-1c.24 0 .47.09.64.23l.01-.01 11.49 9.64a1.001 1.001 0 01-.44 1.75l-3.16.62 2.2 4.73c.26.5.02 1.09-.48 1.32l-3.62 1.69z"/></svg>', "select", "Select mode"), this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"/></svg>', "delete", "Delete marker"), this.uiStyleSettings.clearButtonVisible && this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M19.36 2.72l1.42 1.42-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32l5.71-5.72M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09 7.44 7.44-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58z"/></svg>', "clear", "Delete all markers"), this.uiStyleSettings.undoButtonVisible && this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>', "undo", "Undo"), this.uiStyleSettings.redoButtonVisible && this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 017.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>', "redo", "Redo"), this.uiStyleSettings.zoomButtonVisible && this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M15.5 14l5 5-1.5 1.5-5-5v-.79l-.27-.28A6.471 6.471 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3 6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79m-6 0C12 14 14 12 14 9.5S12 5 9.5 5 5 7 5 9.5 7 14 9.5 14m2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>', "zoom", "Zoom in"), this.uiStyleSettings.zoomButtonVisible && this.uiStyleSettings.zoomOutButtonVisible && this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 009.5 3 6.5 6.5 0 003 9.5 6.5 6.5 0 009.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5m-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14M7 9h5v1H7V9z"/></svg>', "zoom-out", "Zoom out"), this.uiStyleSettings.notesButtonVisible && this.addActionButton(i2, '<svg viewBox="0 0 24 24"><path d="M18.13 12l1.26-1.26c.44-.44 1-.68 1.61-.74V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h6v-1.87l.13-.13H5V5h7v7h6.13M14 4.5l5.5 5.5H14V4.5m5.13 9.33l2.04 2.04L15.04 22H13v-2.04l6.13-6.13m3.72.36l-.98.98-2.04-2.04.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72z"/></svg>', "notes", "Notes"), this.markerButtonBlock = document.createElement("div"), this.markerButtonBlock.className = this.toolbarBlockStyleClass.name, this.markerButtonBlock.style.flexGrow = "2", this.markerButtonBlock.style.textAlign = "center", this.uiContainer.appendChild(this.markerButtonBlock), this.markerButtonOverflowBlock = document.createElement("div"), this.markerButtonOverflowBlock.className = this.toolbarOverflowBlockStyleClass.name + " " + (this.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName ? this.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName : this.toolbarOverflowBlockStyleColorsClass.name), this.markerButtonOverflowBlock.style.display = "none", this.uiContainer.appendChild(this.markerButtonOverflowBlock), this.markerItems && (this.markerItems.forEach((function(t4) {
      var i3 = document.createElement("div");
      i3.className = "" + e2.toolbarButtonStyleClass.name, i3.setAttribute("data-type-name", t4.typeName), i3.setAttribute("aria-label", t4.title), i3.setAttribute("title", t4.title), i3.innerHTML = t4.icon, i3.addEventListener("click", (function() {
        e2.markerToolbarButtonClicked(i3, t4);
      })), e2.buttons.push(i3), e2.markerButtons.push(i3);
    })), this.overflowButton = document.createElement("div"), this.overflowButton.className = this.toolbarButtonStyleClass.name + " " + (this.uiStyleSettings.toolbarButtonStyleColorsClassName ? this.uiStyleSettings.toolbarButtonStyleColorsClassName : this.toolbarButtonStyleColorsClass.name), this.overflowButton.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z"/></svg>', this.overflowButton.addEventListener("click", this.overflowButtonClicked), this.markerButtonBlock.appendChild(this.overflowButton));
    var o2 = document.createElement("div");
    o2.className = this.toolbarBlockStyleClass.name, o2.style.whiteSpace = "nowrap", o2.style.display = false !== this.uiStyleSettings.resultButtonBlockVisible ? "" : "none", this.uiContainer.appendChild(o2), this.addActionButton(o2, '<svg viewBox="0 0 24 24"><path d="M9 20.42l-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z"/></svg>', "render", "Save and close"), this.addActionButton(o2, '<svg viewBox="0 0 24 24"><path d="M20 6.91L17.09 4 12 9.09 6.91 4 4 6.91 9.09 12 4 17.09 6.91 20 12 14.91 17.09 20 20 17.09 14.91 12 20 6.91z"/></svg>', "close", "Close"), this.markerjsContainer.appendChild(this.uiContainer), this.setSelectMode(), this.setCurrentMarker(), this.adjustLayout();
  }, t2.prototype.addButtonClickListener = function(t3) {
    this.buttonClickListeners.push(t3);
  }, t2.prototype.removeButtonClickListener = function(t3) {
    this.buttonClickListeners.indexOf(t3) > -1 && this.buttonClickListeners.splice(this.buttonClickListeners.indexOf(t3), 1);
  }, t2.prototype.setSelectMode = function() {
    this.resetButtonStyles(), this.setActiveButton(this.buttons[0]);
  }, t2.prototype.adjustLayout = function() {
    if (this.markerButtons && this.markerButtons.length > 0) {
      var t3 = Math.floor(this.markerButtonBlock.clientWidth / this.uiStyleSettings.toolbarHeight) - 1;
      this.markerButtonBlock.innerHTML = "", this.markerButtonOverflowBlock.innerHTML = "";
      for (var e2 = 0; e2 < this.markerButtons.length; e2++) e2 < t3 || e2 === t3 && this.markerButtons.length - 1 === t3 ? this.markerButtonBlock.appendChild(this.markerButtons[e2]) : (e2 === t3 && this.markerButtonBlock.appendChild(this.overflowButton), this.markerButtonOverflowBlock.appendChild(this.markerButtons[e2]));
    }
  }, t2.prototype.overflowButtonClicked = function() {
    "none" !== this.markerButtonOverflowBlock.style.display ? (this.markerButtonOverflowBlock.className = this.markerButtonOverflowBlock.className.replace(this.styles.fadeInAnimationClassName, ""), this.markerButtonOverflowBlock.style.display = "none") : (this.markerButtonOverflowBlock.className += " " + this.styles.fadeInAnimationClassName, this.markerButtonOverflowBlock.style.top = this.uiContainer.offsetTop + this.overflowButton.offsetHeight + "px", this.markerButtonOverflowBlock.style.right = this.uiContainer.offsetWidth - this.overflowButton.offsetLeft - this.overflowButton.offsetWidth + 2 * this.uiContainer.offsetLeft + "px", this.markerButtonOverflowBlock.style.display = "inline-block");
  }, t2.prototype.resetButtonStyles = function() {
    var t3 = this;
    this.buttons.forEach((function(e2) {
      e2.className = e2.className.replace(t3.uiStyleSettings.toolbarButtonStyleColorsClassName ? t3.uiStyleSettings.toolbarButtonStyleColorsClassName : t3.toolbarButtonStyleColorsClass.name, "").trim(), e2.className = e2.className.replace(t3.uiStyleSettings.toolbarActiveButtonStyleColorsClassName ? t3.uiStyleSettings.toolbarActiveButtonStyleColorsClassName : t3.toolbarActiveButtonStyleColorsClass.name, "").trim(), e2.className += " " + (t3.uiStyleSettings.toolbarButtonStyleColorsClassName ? t3.uiStyleSettings.toolbarButtonStyleColorsClassName : t3.toolbarButtonStyleColorsClass.name);
    }));
  }, t2.prototype.addActionButton = function(t3, e2, i2, o2) {
    var s2 = this, r2 = document.createElement("div");
    switch (r2.className = "" + this.toolbarButtonStyleClass.name, r2.innerHTML = e2, r2.setAttribute("role", "button"), r2.setAttribute("data-action", i2), r2.title = o2, r2.setAttribute("aria-label", o2), r2.addEventListener("click", (function() {
      s2.actionToolbarButtonClicked(r2, i2);
    })), i2) {
      case "select":
        r2.style.fill = this.uiStyleSettings.selectButtonColor;
        break;
      case "delete":
      case "clear":
        r2.style.fill = this.uiStyleSettings.deleteButtonColor;
        break;
      case "undo":
      case "redo":
        r2.style.fill = this.uiStyleSettings.selectButtonColor;
        break;
      case "render":
        r2.style.fill = this.uiStyleSettings.okButtonColor;
        break;
      case "close":
        r2.style.fill = this.uiStyleSettings.closeButtonColor;
    }
    t3.appendChild(r2), this.buttons.push(r2);
  }, t2.prototype.addStyles = function() {
    this.toolbarStyleClass = this.styles.addClass(new c("toolbar", "\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;      \n      height: " + this.uiStyleSettings.toolbarHeight + "px;\n      box-sizing: content-box;\n      " + ("inline" === this.displayMode ? "border-top-left-radius: " + Math.round(this.uiStyleSettings.toolbarHeight / 10) + "px;" : "") + "\n      " + ("inline" === this.displayMode ? "border-top-right-radius: " + Math.round(this.uiStyleSettings.toolbarHeight / 10) + "px;" : "") + "\n      overflow: hidden;\n    ")), this.toolbarStyleColorsClass = this.styles.addClass(new c("toolbar_colors", "\n      background-color: " + this.uiStyleSettings.toolbarBackgroundColor + ";\n      box-shadow: 0px 3px rgba(33, 33, 33, 0.1);\n    ")), this.toolbarBlockStyleClass = this.styles.addClass(new c("toolbar-block", "\n        display: inline-block;\n        box-sizing: content-box;\n    ")), this.toolbarOverflowBlockStyleClass = this.styles.addClass(new c("toolbar-overflow-block", "\n        position: absolute;\n        top: " + this.uiStyleSettings.toolbarHeight + "px;\n        max-width: " + 2 * this.uiStyleSettings.toolbarHeight + "px;\n        z-index: 10;\n        box-sizing: content-box;\n      ")), this.toolbarOverflowBlockStyleColorsClass = this.styles.addClass(new c("toolbar-overflow-block_colors", "\n        background-color: " + this.uiStyleSettings.toolbarBackgroundColor + ";\n      "));
    var t3 = this.uiStyleSettings.toolbarHeight / 4;
    this.toolbarButtonStyleClass = this.styles.addClass(new c("toolbar_button", "\n      display: inline-block;\n      width: " + (this.uiStyleSettings.toolbarHeight - 2 * t3) + "px;\n      height: " + (this.uiStyleSettings.toolbarHeight - 2 * t3) + "px;\n      padding: " + t3 + "px;\n      box-sizing: content-box;\n    ")), this.toolbarButtonStyleColorsClass = this.styles.addClass(new c("toolbar_button_colors", "\n      fill: " + this.uiStyleSettings.toolbarColor + ";\n    ")), this.toolbarActiveButtonStyleColorsClass = this.styles.addClass(new c("toolbar_active_button", "\n      fill: " + this.uiStyleSettings.toolbarColor + ";\n      background-color: " + this.uiStyleSettings.toolbarBackgroundHoverColor + "\n    ")), this.styles.addRule(new p("." + this.toolbarButtonStyleClass.name + " svg", "\n      height: " + this.uiStyleSettings.toolbarHeight / 2 + "px;\n    ")), this.styles.addRule(new p("." + this.toolbarButtonStyleColorsClass.name + ":hover", "\n        background-color: " + this.uiStyleSettings.toolbarBackgroundHoverColor + "\n    "));
  }, t2.prototype.markerToolbarButtonClicked = function(t3, e2) {
    this.setActiveButton(t3), this.buttonClickListeners && this.buttonClickListeners.length > 0 && this.buttonClickListeners.forEach((function(t4) {
      return t4("marker", e2);
    })), this.markerButtonOverflowBlock.style.display = "none";
  }, t2.prototype.actionToolbarButtonClicked = function(t3, e2) {
    this.buttonClickListeners && this.buttonClickListeners.length > 0 && this.buttonClickListeners.forEach((function(t4) {
      return t4("action", e2);
    })), this.markerButtonOverflowBlock.style.display = "none", this.setActiveButton(this.buttons[0]);
  }, t2.prototype.setActiveButton = function(t3) {
    this.resetButtonStyles(), t3.className = t3.className.replace(this.uiStyleSettings.toolbarButtonStyleColorsClassName ? this.uiStyleSettings.toolbarButtonStyleColorsClassName : this.toolbarButtonStyleColorsClass.name, "").trim(), t3.className += " " + (this.uiStyleSettings.toolbarActiveButtonStyleColorsClassName ? this.uiStyleSettings.toolbarActiveButtonStyleColorsClassName : this.toolbarActiveButtonStyleColorsClass.name);
  }, t2.prototype.setActiveMarkerButton = function(t3) {
    var e2 = this.markerButtons.find((function(e3) {
      return e3.getAttribute("data-type-name") === t3;
    }));
    e2 && this.setActiveButton(e2);
  }, t2.prototype.setCurrentMarker = function(t3) {
    var e2 = this;
    this.currentMarker = t3, this.buttons.filter((function(t4) {
      return /delete|notes/.test(t4.getAttribute("data-action"));
    })).forEach((function(t4) {
      void 0 === e2.currentMarker ? (t4.style.fillOpacity = "0.4", t4.style.pointerEvents = "none") : (t4.style.fillOpacity = "1", t4.style.pointerEvents = "all");
    }));
  }, t2;
})();
var u = (function() {
  function t2(t3, e2, i2, o2) {
    this.panels = [], this.panelButtons = [], this.markerjsContainer = t3, this.displayMode = e2, this.uiStyleSettings = i2, this.styles = o2, this.panelButtonClick = this.panelButtonClick.bind(this), this.addStyles();
  }
  return t2.prototype.addStyles = function() {
    var t3;
    this.toolboxStyleClass = this.styles.addClass(new c("toolbox", "\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n      font-family: sans-serif;\n      " + ("popup" === this.displayMode ? "height:" + 2.5 * this.uiStyleSettings.toolbarHeight + "px;" : "") + "\n      box-sizing: content-box;\n      " + ("popup" === this.displayMode ? "background-color: " + this.uiStyleSettings.canvasBackgroundColor + ";" : "") + "\n      " + ("inline" === this.displayMode ? "border-bottom-left-radius: " + Math.round(this.uiStyleSettings.toolbarHeight / 10) + "px;" : "") + "\n      " + ("inline" === this.displayMode ? "border-bottom-right-radius: " + Math.round(this.uiStyleSettings.toolbarHeight / 10) + "px;" : "") + "\n      overflow: hidden;\n    ")), this.toolboxStyleColorsClass = this.styles.addClass(new c("toolbox_colors", "\n      color: " + this.uiStyleSettings.toolboxColor + ";\n    "));
    var e2 = this.uiStyleSettings.toolbarHeight / 4;
    this.toolboxButtonRowStyleClass = this.styles.addClass(new c("toolbox-button-row", "\n      display: flex;\n      cursor: default;\n      box-sizing: content-box;\n    ")), this.toolboxButtonRowStyleColorsClass = this.styles.addClass(new c("toolbox-button-row_colors", "\n      background-color: " + this.uiStyleSettings.toolbarBackgroundColor + ";\n    ")), this.toolboxPanelRowStyleClass = this.styles.addClass(new c("toolbox-panel-row", "\n      display: flex;\n      " + ("inline" === this.displayMode ? "position: absolute;" : "") + "\n      " + ("inline" === this.displayMode ? "bottom: " + this.uiStyleSettings.toolbarHeight + "px;" : "") + "\n      cursor: default;\n      height: " + 1.5 * this.uiStyleSettings.toolbarHeight + "px;\n      " + ("inline" === this.displayMode ? "width: 100%;" : "") + "\n      box-sizing: content-box;\n    ")), this.toolboxPanelRowStyleColorsClass = this.styles.addClass(new c("toolbox-panel-row_colors", "\n      background-color: " + (null !== (t3 = this.uiStyleSettings.toolboxBackgroundColor) && void 0 !== t3 ? t3 : this.uiStyleSettings.toolbarBackgroundHoverColor) + ";\n    ")), this.toolboxButtonStyleClass = this.styles.addClass(new c("toolbox_button", "\n      display: inline-block;\n      width: " + (this.uiStyleSettings.toolbarHeight - 2 * e2) + "px;\n      height: " + (this.uiStyleSettings.toolbarHeight - 2 * e2) + "px;\n      padding: " + e2 + "px;\n      box-sizing: content-box;\n    ")), this.toolboxButtonStyleColorsClass = this.styles.addClass(new c("toolbox-button_colors", "\n      fill: " + this.uiStyleSettings.toolbarColor + ";\n    ")), this.toolboxActiveButtonStyleColorsClass = this.styles.addClass(new c("toolbox-active-button_colors", "\n      background-color: " + this.uiStyleSettings.toolbarBackgroundHoverColor + ";\n      fill: " + this.uiStyleSettings.toolbarColor + ";\n    ")), this.styles.addRule(new p("." + this.toolboxButtonStyleColorsClass.name + ":hover", "\n        background-color: " + this.uiStyleSettings.toolbarBackgroundHoverColor + "\n    ")), this.styles.addRule(new p("." + this.toolboxButtonStyleClass.name + " svg", "\n      height: " + this.uiStyleSettings.toolbarHeight / 2 + "px;\n    ")), this.styles.addRule(new p("." + this.toolboxPanelRowStyleClass.name + " > div", "\n        scrollbar-width: thin;\n        ")), this.styles.addRule(new p("." + this.toolboxPanelRowStyleClass.name + " > div::-webkit-scrollbar", "\n      height: 10px;\n      width: 10px;\n    ")), this.styles.addRule(new p("." + this.toolboxPanelRowStyleClass.name + " > div::-webkit-scrollbar-track", "\n        background-color: transparent;\n        ")), this.styles.addRule(new p("." + this.toolboxPanelRowStyleClass.name + " > div::-webkit-scrollbar-thumb", "\n        background-color: #444;\n        border-radius: 20px;\n        border: 2px solid #aaa;\n        "));
  }, t2.prototype.show = function(t3) {
    var e2;
    this.uiContainer = document.createElement("div"), this.uiContainer.style.visibility = t3, this.uiContainer.className = this.toolboxStyleClass.name + " " + (null !== (e2 = this.uiStyleSettings.toolboxStyleColorsClassName) && void 0 !== e2 ? e2 : this.toolboxStyleColorsClass.name), this.markerjsContainer.appendChild(this.uiContainer);
  }, t2.prototype.setPanelButtons = function(t3) {
    var e2, i2, o2 = this;
    this.panels = t3, void 0 !== this.uiContainer && (this.uiContainer.innerHTML = "", this.panelRow = document.createElement("div"), this.panelRow.className = this.toolboxPanelRowStyleClass.name + " " + (null !== (e2 = this.uiStyleSettings.toolboxPanelRowStyleColorsClassName) && void 0 !== e2 ? e2 : this.toolboxPanelRowStyleColorsClass.name), this.uiContainer.appendChild(this.panelRow), this.buttonRow = document.createElement("div"), this.buttonRow.className = this.toolboxButtonRowStyleClass.name + " " + (null !== (i2 = this.uiStyleSettings.toolboxButtonRowStyleColorsClassName) && void 0 !== i2 ? i2 : this.toolboxButtonRowStyleColorsClass.name) + " ", this.uiContainer.appendChild(this.buttonRow), this.panelButtons.splice(0), this.panels.forEach((function(t4) {
      var e3;
      t4.uiStyleSettings = o2.uiStyleSettings;
      var i3 = document.createElement("div");
      i3.className = o2.toolboxButtonStyleClass.name + " " + (null !== (e3 = o2.uiStyleSettings.toolboxButtonStyleColorsClassName) && void 0 !== e3 ? e3 : o2.toolboxButtonStyleColorsClass.name), i3.innerHTML = t4.icon, i3.title = t4.title, i3.setAttribute("role", "button"), i3.setAttribute("aria-label", t4.title), t4.id && i3.setAttribute("data-action", t4.id), i3.addEventListener("click", (function() {
        o2.panelButtonClick(t4);
      })), o2.panelButtons.push(i3), o2.buttonRow.appendChild(i3);
    })), "inline" === this.displayMode ? this.panelRow.style.display = "none" : this.panelRow.style.visibility = "hidden");
  }, t2.prototype.panelButtonClick = function(t3) {
    var e2 = this, i2 = -1;
    if (t3 !== this.activePanel) {
      i2 = this.panels.indexOf(t3), this.panelRow.innerHTML = "";
      var o2 = t3.getUi();
      o2.style.margin = this.uiStyleSettings.toolbarHeight / 4 + "px", this.panelRow.appendChild(o2), this.panelRow.style.display = "flex", this.panelRow.style.visibility = "visible", this.panelRow.className = this.panelRow.className.replace(this.styles.fadeOutAnimationClassName, ""), this.panelRow.className += " " + this.styles.fadeInAnimationClassName, this.activePanel = t3;
    } else this.activePanel = void 0, this.panelRow.className = this.panelRow.className.replace(this.styles.fadeInAnimationClassName, ""), this.panelRow.className += " " + this.styles.fadeOutAnimationClassName, setTimeout((function() {
      "inline" === e2.displayMode ? e2.panelRow.style.display = "none" : e2.panelRow.style.visibility = "hidden";
    }), 200);
    this.panelButtons.forEach((function(t4, o3) {
      var s2, r2;
      t4.className = e2.toolboxButtonStyleClass.name + " " + (o3 === i2 ? "" + (null !== (s2 = e2.uiStyleSettings.toolboxActiveButtonStyleColorsClassName) && void 0 !== s2 ? s2 : e2.toolboxActiveButtonStyleColorsClass.name) : "" + (null !== (r2 = e2.uiStyleSettings.toolboxButtonStyleColorsClassName) && void 0 !== r2 ? r2 : e2.toolboxButtonStyleColorsClass.name));
    }));
  }, t2;
})();
var y = (function() {
  function t2(t3, e2, i2) {
    this.title = t3, this.icon = e2, this._id = i2;
  }
  return Object.defineProperty(t2.prototype, "id", { get: function() {
    return this._id;
  }, enumerable: false, configurable: true }), t2;
})();
var g = (function(t2) {
  function i2(e2, i3, o2, s2, r2) {
    var n2 = t2.call(this, e2, s2 || '<svg viewBox="0 0 24 24"><path d="M17.5 12a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0117.5 9a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m-3-4A1.5 1.5 0 0113 6.5 1.5 1.5 0 0114.5 5 1.5 1.5 0 0116 6.5 1.5 1.5 0 0114.5 8m-5 0A1.5 1.5 0 018 6.5 1.5 1.5 0 019.5 5 1.5 1.5 0 0111 6.5 1.5 1.5 0 019.5 8m-3 4A1.5 1.5 0 015 10.5 1.5 1.5 0 016.5 9 1.5 1.5 0 018 10.5 1.5 1.5 0 016.5 12M12 3a9 9 0 00-9 9 9 9 0 009 9 1.5 1.5 0 001.5-1.5c0-.39-.15-.74-.39-1-.23-.27-.38-.62-.38-1a1.5 1.5 0 011.5-1.5H16a5 5 0 005-5c0-4.42-4.03-8-9-8z"/></svg>', r2 || "color-picker-panel") || this;
    return n2.colors = [], n2.addTransparent = false, n2.colorBoxes = [], n2.colors = i3, n2.currentColor = o2, n2.setCurrentColor = n2.setCurrentColor.bind(n2), n2.getColorBox = n2.getColorBox.bind(n2), n2;
  }
  return e(i2, t2), i2.prototype.getUi = function() {
    var t3 = this, e2 = document.createElement("div");
    return e2.style.overflow = "hidden", e2.style.overflowX = "auto", e2.style.whiteSpace = "nowrap", this.colors.forEach((function(i3) {
      var o2 = t3.getColorBox(i3);
      e2.appendChild(o2), t3.colorBoxes.push(o2);
    })), e2;
  }, i2.prototype.getColorBox = function(t3) {
    var e2 = this, i3 = this.uiStyleSettings.toolbarHeight / 4, o2 = this.uiStyleSettings.toolbarHeight - i3, s2 = document.createElement("div");
    s2.style.display = "inline-block", s2.style.boxSizing = "content-box", s2.style.width = o2 - 2 + "px", s2.style.height = o2 - 2 + "px", s2.style.padding = "1px", s2.style.marginRight = "2px", s2.style.marginBottom = "2px", s2.style.borderWidth = "2px", s2.style.borderStyle = "solid", s2.style.borderRadius = (o2 + 2) / 2 + "px", s2.style.borderColor = t3 === this.currentColor ? this.uiStyleSettings.toolboxAccentColor : "transparent", s2.addEventListener("click", (function() {
      e2.setCurrentColor(t3, s2);
    }));
    var r2 = document.createElement("div");
    return r2.style.display = "inline-block", r2.style.width = o2 - 2 + "px", r2.style.height = o2 - 2 + "px", r2.style.backgroundColor = t3, r2.style.borderRadius = o2 / 2 + "px", "transparent" === t3 && (r2.style.fill = this.uiStyleSettings.toolboxAccentColor, r2.innerHTML = '<svg viewBox="0 0 24 24">\n        <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" />\n      </svg>'), s2.appendChild(r2), s2;
  }, i2.prototype.setCurrentColor = function(t3, e2) {
    var i3 = this;
    this.currentColor = t3, this.colorBoxes.forEach((function(t4) {
      t4.style.borderColor = t4 === e2 ? i3.uiStyleSettings.toolboxAccentColor : "transparent";
    })), this.onColorChanged && this.onColorChanged(t3);
  }, i2;
})(y);
var f = (function() {
  function t2(t3, e2, i2) {
    this._state = "new", this._isSelected = false, this._container = t3, this._overlayContainer = e2, this.globalSettings = i2, this.stateChanged = this.stateChanged.bind(this), this.colorChanged = this.colorChanged.bind(this), this.fillColorChanged = this.fillColorChanged.bind(this);
  }
  return Object.defineProperty(t2.prototype, "typeName", { get: function() {
    return Object.getPrototypeOf(this).constructor.typeName;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "container", { get: function() {
    return this._container;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "overlayContainer", { get: function() {
    return this._overlayContainer;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "state", { get: function() {
    return this._state;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "toolboxPanels", { get: function() {
    return [];
  }, enumerable: false, configurable: true }), t2.prototype.ownsTarget = function(t3) {
    return false;
  }, Object.defineProperty(t2.prototype, "isSelected", { get: function() {
    return this._isSelected;
  }, enumerable: false, configurable: true }), t2.prototype.select = function() {
    this.container.style.cursor = "move", this._isSelected = true, this.manipulationStartState = this.getState();
  }, t2.prototype.deselect = function() {
    this.container.style.cursor = "default", this._isSelected = false, this.stateChanged();
  }, t2.prototype.pointerDown = function(t3, e2) {
  }, t2.prototype.dblClick = function(t3, e2) {
  }, t2.prototype.manipulate = function(t3) {
  }, t2.prototype.pointerUp = function(t3) {
    this.stateChanged();
  }, t2.prototype.dispose = function() {
  }, t2.prototype.addMarkerVisualToContainer = function(t3) {
    this.container.childNodes.length > 0 ? this.container.insertBefore(t3, this.container.childNodes[0]) : this.container.appendChild(t3);
  }, t2.prototype.getState = function() {
    return { typeName: t2.typeName, state: this.state, notes: this.notes };
  }, t2.prototype.restoreState = function(t3) {
    this._state = t3.state, this.notes = t3.notes;
  }, t2.prototype.scale = function(t3, e2) {
  }, t2.prototype.colorChanged = function(t3) {
    this.onColorChanged && this.onColorChanged(t3), this.stateChanged();
  }, t2.prototype.fillColorChanged = function(t3) {
    this.onFillColorChanged && this.onFillColorChanged(t3), this.stateChanged();
  }, t2.prototype.stateChanged = function() {
    if (this.onStateChanged && "creating" !== this.state && "new" !== this.state) {
      var t3 = this.getState();
      void 0 !== this.manipulationStartState && (this.manipulationStartState.state = "select"), t3.state = "select", JSON.stringify(this.manipulationStartState) != JSON.stringify(t3) && this.onStateChanged(this);
    }
  }, t2.typeName = "MarkerBase", t2;
})();
var v = (function() {
  function t2() {
    this.findGripByVisual = this.findGripByVisual.bind(this);
  }
  return t2.prototype.findGripByVisual = function(t3) {
    return this.topLeft.ownsTarget(t3) ? this.topLeft : this.topCenter.ownsTarget(t3) ? this.topCenter : this.topRight.ownsTarget(t3) ? this.topRight : this.centerLeft.ownsTarget(t3) ? this.centerLeft : this.centerRight.ownsTarget(t3) ? this.centerRight : this.bottomLeft.ownsTarget(t3) ? this.bottomLeft : this.bottomCenter.ownsTarget(t3) ? this.bottomCenter : this.bottomRight.ownsTarget(t3) ? this.bottomRight : void 0;
  }, t2;
})();
var m = (function() {
  function t2() {
    this.GRIP_SIZE = 10, this.visual = r.createGroup(), this.visual.appendChild(r.createCircle(1.5 * this.GRIP_SIZE, [["fill", "transparent"]])), this.visual.appendChild(r.createCircle(this.GRIP_SIZE, [["fill", "#cccccc"], ["fill-opacity", "0.7"], ["stroke", "#333333"], ["stroke-width", "2"], ["stroke-opacity", "0.7"]]));
  }
  return t2.prototype.ownsTarget = function(t3) {
    return t3 === this.visual || t3 === this.visual.childNodes[0] || t3 === this.visual.childNodes[1];
  }, t2;
})();
var C = (function() {
  function t2() {
  }
  return t2.toITransformMatrix = function(t3) {
    return { a: t3.a, b: t3.b, c: t3.c, d: t3.d, e: t3.e, f: t3.f };
  }, t2.toSVGMatrix = function(t3, e2) {
    return t3.a = e2.a, t3.b = e2.b, t3.c = e2.c, t3.d = e2.d, t3.e = e2.e, t3.f = e2.f, t3;
  }, t2;
})();
var b = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.left = 0, s2.top = 0, s2.width = 0, s2.height = 0, s2.defaultSize = { x: 50, y: 20 }, s2.offsetX = 0, s2.offsetY = 0, s2.rotationAngle = 0, s2.CB_DISTANCE = 10, s2._suppressMarkerCreateEvent = false, s2.container.transform.baseVal.appendItem(r.createTransform()), s2.setupControlBox(), s2;
  }
  return e(i2, t2), Object.defineProperty(i2.prototype, "centerX", { get: function() {
    return this.left + this.width / 2;
  }, enumerable: false, configurable: true }), Object.defineProperty(i2.prototype, "centerY", { get: function() {
    return this.top + this.height / 2;
  }, enumerable: false, configurable: true }), Object.defineProperty(i2.prototype, "visual", { get: function() {
    return this._visual;
  }, set: function(t3) {
    this._visual = t3;
    var e2 = r.createTransform();
    this._visual.transform.baseVal.appendItem(e2);
  }, enumerable: false, configurable: true }), i2.prototype.ownsTarget = function(e2) {
    return !!t2.prototype.ownsTarget.call(this, e2) || !!(void 0 !== this.controlGrips.findGripByVisual(e2) || void 0 !== this.rotatorGrip && this.rotatorGrip.ownsTarget(e2));
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), "new" === this.state && (this.left = e2.x, this.top = e2.y), this.manipulationStartLeft = this.left, this.manipulationStartTop = this.top, this.manipulationStartWidth = this.width, this.manipulationStartHeight = this.height;
    var o2 = this.unrotatePoint(e2);
    if (this.manipulationStartX = o2.x, this.manipulationStartY = o2.y, this.offsetX = o2.x - this.left, this.offsetY = o2.y - this.top, "new" !== this.state) if (this.select(), this.activeGrip = this.controlGrips.findGripByVisual(i3), void 0 !== this.activeGrip) this._state = "resize";
    else if (void 0 !== this.rotatorGrip && this.rotatorGrip.ownsTarget(i3)) {
      this.activeGrip = this.rotatorGrip;
      var s2 = this.rotatePoint({ x: this.centerX, y: this.centerY });
      this.left = s2.x - this.width / 2, this.top = s2.y - this.height / 2, this.moveVisual({ x: this.left, y: this.top });
      var r2 = this.container.transform.baseVal.getItem(0);
      r2.setRotate(this.rotationAngle, this.centerX, this.centerY), this.container.transform.baseVal.replaceItem(r2, 0), this.adjustControlBox(), this._state = "rotate";
    } else this._state = "move";
  }, i2.prototype.pointerUp = function(e2) {
    var i3 = this.state;
    t2.prototype.pointerUp.call(this, e2), "creating" === this.state && this.width < 10 && this.height < 10 ? (this.width = this.defaultSize.x, this.height = this.defaultSize.y) : this.manipulate(e2), this._state = "select", "creating" === i3 && this.onMarkerCreated && false === this._suppressMarkerCreateEvent && this.onMarkerCreated(this);
  }, i2.prototype.moveVisual = function(t3) {
    this.visual.style.transform = "translate(" + t3.x + "px, " + t3.y + "px)";
  }, i2.prototype.manipulate = function(t3) {
    var e2 = this.unrotatePoint(t3);
    "creating" === this.state ? this.resize(t3) : "move" === this.state ? (this.left = this.manipulationStartLeft + (e2.x - this.manipulationStartLeft) - this.offsetX, this.top = this.manipulationStartTop + (e2.y - this.manipulationStartTop) - this.offsetY, this.moveVisual({ x: this.left, y: this.top }), this.adjustControlBox()) : "resize" === this.state ? this.resize(e2) : "rotate" === this.state && this.rotate(t3);
  }, i2.prototype.resize = function(t3) {
    var e2 = this.manipulationStartLeft, i3 = this.manipulationStartWidth, o2 = this.manipulationStartTop, s2 = this.manipulationStartHeight;
    switch (this.activeGrip) {
      case this.controlGrips.bottomLeft:
      case this.controlGrips.centerLeft:
      case this.controlGrips.topLeft:
        e2 = this.manipulationStartLeft + t3.x - this.manipulationStartX, i3 = this.manipulationStartWidth + this.manipulationStartLeft - e2;
        break;
      case this.controlGrips.bottomRight:
      case this.controlGrips.centerRight:
      case this.controlGrips.topRight:
      case void 0:
        i3 = this.manipulationStartWidth + t3.x - this.manipulationStartX;
    }
    switch (this.activeGrip) {
      case this.controlGrips.topCenter:
      case this.controlGrips.topLeft:
      case this.controlGrips.topRight:
        o2 = this.manipulationStartTop + t3.y - this.manipulationStartY, s2 = this.manipulationStartHeight + this.manipulationStartTop - o2;
        break;
      case this.controlGrips.bottomCenter:
      case this.controlGrips.bottomLeft:
      case this.controlGrips.bottomRight:
      case void 0:
        s2 = this.manipulationStartHeight + t3.y - this.manipulationStartY;
    }
    i3 >= 0 ? (this.left = e2, this.width = i3) : (this.left = e2 + i3, this.width = -i3), s2 >= 0 ? (this.top = o2, this.height = s2) : (this.top = o2 + s2, this.height = -s2), this.setSize();
  }, i2.prototype.setSize = function() {
    this.moveVisual({ x: this.left, y: this.top }), this.adjustControlBox();
  }, i2.prototype.rotate = function(t3) {
    if (Math.abs(t3.x - this.centerX) > 0.1) {
      var e2 = Math.sign(t3.x - this.centerX);
      this.rotationAngle = 180 * Math.atan((t3.y - this.centerY) / (t3.x - this.centerX)) / Math.PI + 90 * e2, this.applyRotation();
    }
  }, i2.prototype.applyRotation = function() {
    var t3 = this.container.transform.baseVal.getItem(0);
    t3.setRotate(this.rotationAngle, this.centerX, this.centerY), this.container.transform.baseVal.replaceItem(t3, 0);
  }, i2.prototype.rotatePoint = function(t3) {
    if (0 === this.rotationAngle) return t3;
    var e2 = this.container.getCTM(), i3 = r.createPoint(t3.x, t3.y);
    return { x: (i3 = i3.matrixTransform(e2)).x, y: i3.y };
  }, i2.prototype.unrotatePoint = function(t3) {
    if (0 === this.rotationAngle) return t3;
    var e2 = this.container.getCTM();
    e2 = e2.inverse();
    var i3 = r.createPoint(t3.x, t3.y);
    return { x: (i3 = i3.matrixTransform(e2)).x, y: i3.y };
  }, i2.prototype.select = function() {
    t2.prototype.select.call(this), this.adjustControlBox(), this.controlBox.style.display = "";
  }, i2.prototype.deselect = function() {
    t2.prototype.deselect.call(this), this.controlBox.style.display = "none";
  }, i2.prototype.setupControlBox = function() {
    this.controlBox = r.createGroup();
    var t3 = r.createTransform();
    t3.setTranslate(-this.CB_DISTANCE / 2, -this.CB_DISTANCE / 2), this.controlBox.transform.baseVal.appendItem(t3), this.container.appendChild(this.controlBox), this.controlRect = r.createRect(this.width + this.CB_DISTANCE, this.height + this.CB_DISTANCE, [["stroke", "black"], ["stroke-width", "1"], ["stroke-opacity", "0.5"], ["stroke-dasharray", "3, 2"], ["fill", "transparent"], ["pointer-events", "none"]]), this.controlBox.appendChild(this.controlRect), true !== this.globalSettings.disableRotation && (this.rotatorGripLine = r.createLine((this.width + 2 * this.CB_DISTANCE) / 2, this.top - this.CB_DISTANCE, (this.width + 2 * this.CB_DISTANCE) / 2, this.top - 3 * this.CB_DISTANCE, [["stroke", "black"], ["stroke-width", "1"], ["stroke-opacity", "0.5"], ["stroke-dasharray", "3, 2"]]), this.controlBox.appendChild(this.rotatorGripLine)), this.controlGrips = new v(), this.addControlGrips(), this.controlBox.style.display = "none";
  }, i2.prototype.adjustControlBox = function() {
    var t3 = this.controlBox.transform.baseVal.getItem(0);
    t3.setTranslate(this.left - this.CB_DISTANCE / 2, this.top - this.CB_DISTANCE / 2), this.controlBox.transform.baseVal.replaceItem(t3, 0), this.controlRect.setAttribute("width", (this.width + this.CB_DISTANCE).toString()), this.controlRect.setAttribute("height", (this.height + this.CB_DISTANCE).toString()), void 0 !== this.rotatorGripLine && (this.rotatorGripLine.setAttribute("x1", ((this.width + this.CB_DISTANCE) / 2).toString()), this.rotatorGripLine.setAttribute("y1", (-this.CB_DISTANCE / 2).toString()), this.rotatorGripLine.setAttribute("x2", ((this.width + this.CB_DISTANCE) / 2).toString()), this.rotatorGripLine.setAttribute("y2", (3 * -this.CB_DISTANCE).toString())), this.positionGrips();
  }, i2.prototype.addControlGrips = function() {
    this.controlGrips.topLeft = this.createGrip(), this.controlGrips.topCenter = this.createGrip(), this.controlGrips.topRight = this.createGrip(), this.controlGrips.centerLeft = this.createGrip(), this.controlGrips.centerRight = this.createGrip(), this.controlGrips.bottomLeft = this.createGrip(), this.controlGrips.bottomCenter = this.createGrip(), this.controlGrips.bottomRight = this.createGrip(), true !== this.globalSettings.disableRotation && (this.rotatorGrip = this.createGrip()), this.positionGrips();
  }, i2.prototype.createGrip = function() {
    var t3 = new m();
    return t3.visual.transform.baseVal.appendItem(r.createTransform()), this.controlBox.appendChild(t3.visual), t3;
  }, i2.prototype.positionGrips = function() {
    var t3 = this.controlGrips.topLeft.GRIP_SIZE, e2 = -t3 / 2, i3 = e2, o2 = (this.width + this.CB_DISTANCE) / 2 - t3 / 2, s2 = (this.height + this.CB_DISTANCE) / 2 - t3 / 2, r2 = this.height + this.CB_DISTANCE - t3 / 2, n2 = this.width + this.CB_DISTANCE - t3 / 2;
    this.positionGrip(this.controlGrips.topLeft.visual, e2, i3), this.positionGrip(this.controlGrips.topCenter.visual, o2, i3), this.positionGrip(this.controlGrips.topRight.visual, n2, i3), this.positionGrip(this.controlGrips.centerLeft.visual, e2, s2), this.positionGrip(this.controlGrips.centerRight.visual, n2, s2), this.positionGrip(this.controlGrips.bottomLeft.visual, e2, r2), this.positionGrip(this.controlGrips.bottomCenter.visual, o2, r2), this.positionGrip(this.controlGrips.bottomRight.visual, n2, r2), void 0 !== this.rotatorGrip && this.positionGrip(this.rotatorGrip.visual, o2, i3 - 3 * this.CB_DISTANCE);
  }, i2.prototype.positionGrip = function(t3, e2, i3) {
    var o2 = t3.transform.baseVal.getItem(0);
    o2.setTranslate(e2, i3), t3.transform.baseVal.replaceItem(o2, 0);
  }, i2.prototype.hideControlBox = function() {
    this.controlBox.style.display = "none";
  }, i2.prototype.showControlBox = function() {
    this.controlBox.style.display = "";
  }, i2.prototype.getState = function() {
    return Object.assign({ left: this.left, top: this.top, width: this.width, height: this.height, rotationAngle: this.rotationAngle, visualTransformMatrix: C.toITransformMatrix(this.visual.transform.baseVal.getItem(0).matrix), containerTransformMatrix: C.toITransformMatrix(this.container.transform.baseVal.getItem(0).matrix) }, t2.prototype.getState.call(this));
  }, i2.prototype.restoreState = function(e2) {
    t2.prototype.restoreState.call(this, e2);
    var i3 = e2;
    this.left = i3.left, this.top = i3.top, this.width = i3.width, this.height = i3.height, this.rotationAngle = i3.rotationAngle, this.visual.transform.baseVal.getItem(0).setMatrix(C.toSVGMatrix(this.visual.transform.baseVal.getItem(0).matrix, i3.visualTransformMatrix)), this.container.transform.baseVal.getItem(0).setMatrix(C.toSVGMatrix(this.container.transform.baseVal.getItem(0).matrix, i3.containerTransformMatrix));
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3);
    var o2 = this.rotatePoint({ x: this.left, y: this.top }), s2 = this.unrotatePoint({ x: o2.x * e2, y: o2.y * i3 });
    this.left = s2.x, this.top = s2.y, this.width = this.width * e2, this.height = this.height * i3, this.adjustControlBox();
  }, i2;
})(f);
var x = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.fillColor = "transparent", s2.strokeColor = "transparent", s2.strokeWidth = 0, s2.strokeDasharray = "", s2.opacity = 1, s2.setStrokeColor = s2.setStrokeColor.bind(s2), s2.setFillColor = s2.setFillColor.bind(s2), s2.setStrokeWidth = s2.setStrokeWidth.bind(s2), s2.setStrokeDasharray = s2.setStrokeDasharray.bind(s2), s2.createVisual = s2.createVisual.bind(s2), s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.visual);
  }, i2.prototype.createVisual = function() {
    this.visual = r.createRect(1, 1, [["fill", this.fillColor], ["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()], ["stroke-dasharray", this.strokeDasharray], ["opacity", this.opacity.toString()]]), this.addMarkerVisualToContainer(this.visual);
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), "new" === this.state && (this.createVisual(), this.moveVisual(e2), this._state = "creating");
  }, i2.prototype.manipulate = function(e2) {
    t2.prototype.manipulate.call(this, e2);
  }, i2.prototype.resize = function(e2) {
    t2.prototype.resize.call(this, e2), this.setSize();
  }, i2.prototype.setSize = function() {
    t2.prototype.setSize.call(this), r.setAttributes(this.visual, [["width", this.width.toString()], ["height", this.height.toString()]]);
  }, i2.prototype.pointerUp = function(e2) {
    t2.prototype.pointerUp.call(this, e2), this.setSize();
  }, i2.prototype.setStrokeColor = function(t3) {
    this.strokeColor = t3, this.visual && r.setAttributes(this.visual, [["stroke", this.strokeColor]]), this.colorChanged(t3), this.stateChanged();
  }, i2.prototype.setFillColor = function(t3) {
    this.fillColor = t3, this.visual && r.setAttributes(this.visual, [["fill", this.fillColor]]), this.stateChanged();
  }, i2.prototype.setStrokeWidth = function(t3) {
    this.strokeWidth = t3, this.visual && r.setAttributes(this.visual, [["stroke-width", this.strokeWidth.toString()]]), this.stateChanged();
  }, i2.prototype.setStrokeDasharray = function(t3) {
    this.strokeDasharray = t3, this.visual && r.setAttributes(this.visual, [["stroke-dasharray", this.strokeDasharray]]), this.stateChanged();
  }, i2.prototype.getState = function() {
    return Object.assign({ fillColor: this.fillColor, strokeColor: this.strokeColor, strokeWidth: this.strokeWidth, strokeDasharray: this.strokeDasharray, opacity: this.opacity }, t2.prototype.getState.call(this));
  }, i2.prototype.restoreState = function(e2) {
    var i3 = e2;
    this.fillColor = i3.fillColor, this.strokeColor = i3.strokeColor, this.strokeWidth = i3.strokeWidth, this.strokeDasharray = i3.strokeDasharray, this.opacity = i3.opacity, this.createVisual(), t2.prototype.restoreState.call(this, e2), this.setSize();
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.setSize();
  }, i2.title = "Rectangle marker", i2;
})(b);
var S = (function(t2) {
  function i2(e2, i3, o2, s2, r2) {
    var n2 = t2.call(this, e2, s2 || '<svg viewBox="0 0 24 24"><path d="M3 17h18v-2H3v2m0 3h18v-1H3v1m0-7h18v-3H3v3m0-9v4h18V4H3z"/></svg>', r2 || "line-width-panel") || this;
    return n2.widths = [], n2.widthBoxes = [], n2.widths = i3, n2.currentWidth = o2, n2.setCurrentWidth = n2.setCurrentWidth.bind(n2), n2;
  }
  return e(i2, t2), i2.prototype.getUi = function() {
    var t3 = this, e2 = document.createElement("div");
    return e2.style.display = "flex", e2.style.overflow = "hidden", e2.style.flexGrow = "2", this.widths.forEach((function(i3) {
      var o2 = document.createElement("div");
      o2.style.display = "flex", o2.style.flexGrow = "2", o2.style.alignItems = "center", o2.style.justifyContent = "space-between", o2.style.padding = "5px", o2.style.borderWidth = "2px", o2.style.borderStyle = "solid", o2.style.borderColor = i3 === t3.currentWidth ? t3.uiStyleSettings.toolboxAccentColor : "transparent", o2.addEventListener("click", (function() {
        t3.setCurrentWidth(i3, o2);
      })), e2.appendChild(o2);
      var s2 = document.createElement("div");
      s2.innerText = i3.toString(), s2.style.marginRight = "5px", o2.appendChild(s2);
      var r2 = document.createElement("div");
      r2.style.minHeight = "20px", r2.style.flexGrow = "2", r2.style.display = "flex", r2.style.alignItems = "center";
      var n2 = document.createElement("hr");
      n2.style.minWidth = "20px", n2.style.border = "0px", n2.style.borderTop = i3 + "px solid " + t3.uiStyleSettings.toolboxColor, n2.style.flexGrow = "2", r2.appendChild(n2), o2.appendChild(r2), t3.widthBoxes.push(o2);
    })), e2;
  }, i2.prototype.setCurrentWidth = function(t3, e2) {
    var i3 = this;
    this.currentWidth = t3, this.widthBoxes.forEach((function(t4) {
      t4.style.borderColor = t4 === e2 ? i3.uiStyleSettings.toolboxAccentColor : "transparent";
    })), this.onWidthChanged && this.onWidthChanged(this.currentWidth);
  }, i2;
})(y);
var k = (function(t2) {
  function i2(e2, i3, o2, s2, r2) {
    var n2 = t2.call(this, e2, s2 || '<svg viewBox="0 0 24 24"><path d="M3 16h5v-2H3v2m6.5 0h5v-2h-5v2m6.5 0h5v-2h-5v2M3 20h2v-2H3v2m4 0h2v-2H7v2m4 0h2v-2h-2v2m4 0h2v-2h-2v2m4 0h2v-2h-2v2M3 12h8v-2H3v2m10 0h8v-2h-8v2M3 4v4h18V4H3z"/></svg>', r2 || "line-style-panel") || this;
    return n2.styles = [], n2.styleBoxes = [], n2.styles = i3, n2.currentStyle = o2, n2.setCurrentStyle = n2.setCurrentStyle.bind(n2), n2;
  }
  return e(i2, t2), i2.prototype.getUi = function() {
    var t3 = this, e2 = document.createElement("div");
    return e2.style.display = "flex", e2.style.overflow = "hidden", e2.style.flexGrow = "2", this.styles.forEach((function(i3) {
      var o2 = document.createElement("div");
      o2.style.display = "flex", o2.style.alignItems = "center", o2.style.justifyContent = "space-between", o2.style.padding = "5px", o2.style.borderWidth = "2px", o2.style.borderStyle = "solid", o2.style.overflow = "hidden", o2.style.maxWidth = 100 / t3.styles.length - 5 + "%", o2.style.borderColor = i3 === t3.currentStyle ? t3.uiStyleSettings.toolboxAccentColor : "transparent", o2.addEventListener("click", (function() {
        t3.setCurrentStyle(i3, o2);
      })), e2.appendChild(o2);
      var s2 = document.createElement("div");
      s2.style.minHeight = "20px", s2.style.flexGrow = "2", s2.style.overflow = "hidden";
      var r2 = '<svg width="100" height="20">\n      <line x1="0" y1="10" x2="100" y2="10" stroke="' + t3.uiStyleSettings.toolboxColor + '" stroke-width="3" ' + ("" !== i3 ? 'stroke-dasharray="' + i3 + '"' : "") + " />\n  </svg>";
      s2.innerHTML = r2, o2.appendChild(s2), t3.styleBoxes.push(o2);
    })), e2;
  }, i2.prototype.setCurrentStyle = function(t3, e2) {
    var i3 = this;
    this.currentStyle = t3, this.styleBoxes.forEach((function(t4) {
      t4.style.borderColor = t4 === e2 ? i3.uiStyleSettings.toolboxAccentColor : "transparent";
    })), this.onStyleChanged && this.onStyleChanged(this.currentStyle);
  }, i2;
})(y);
var w = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.strokeColor = o2.defaultColor, s2.strokeWidth = o2.defaultStrokeWidth, s2.strokeDasharray = o2.defaultStrokeDasharray, s2.strokePanel = new g("Line color", o2.defaultColorSet, o2.defaultColor), s2.strokePanel.onColorChanged = s2.setStrokeColor, s2.strokeWidthPanel = new S("Line width", o2.defaultStrokeWidths, o2.defaultStrokeWidth), s2.strokeWidthPanel.onWidthChanged = s2.setStrokeWidth, s2.strokeStylePanel = new k("Line style", o2.defaultStrokeDasharrays, o2.defaultStrokeDasharray), s2.strokeStylePanel.onStyleChanged = s2.setStrokeDasharray, s2;
  }
  return e(i2, t2), Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.strokeWidthPanel, this.strokeStylePanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = t2.prototype.getState.call(this);
    return e2.typeName = i2.typeName, e2;
  }, i2.typeName = "FrameMarker", i2.title = "Frame marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M4 6v13h16V6H4m14 11H6V8h12v9z"/></svg>', i2;
})(x);
var B = function() {
  this.defaultColorSet = ["#EF4444", "#10B981", "#2563EB", "#FFFF00", "#7C3AED", "#F472B6", "#000000", "#FFFFFF"], this.defaultColor = this.defaultColorSet[0], this.defaultFillColor = this.defaultColorSet[0], this.defaultStrokeColor = this.defaultColorSet[7], this.defaultHighlightColor = this.defaultColorSet[3], this.defaultStrokeWidth = 3, this.defaultStrokeDasharray = "", this.defaultHighlightOpacity = 0.5, this.defaultFontFamily = "Helvetica, Arial, sans-serif", this.defaultStrokeWidths = [1, 2, 3, 5, 10], this.defaultStrokeDasharrays = ["", "3", "12 3", "9 6 3 6"], this.defaultOpacitySteps = [0.1, 0.25, 0.5, 0.75, 1], this.displayMode = "inline", this.defaultFontFamilies = ['Times, "Times New Roman", serif', "Helvetica, Arial, sans-serif", 'Courier, "Courier New", monospace', "cursive", "fantasy"], this.popupMargin = 30, this.newFreehandMarkerOnPointerUp = false, this.defaultColorsFollowCurrentColors = false, this.freehandPixelRatio = 1, this.disableRotation = false, this.defaultCaptionFontSize = "1rem", this.defaultCaptionText = "Text", this.wrapText = false, this.defaultText = "Your text here";
};
var E = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.x1 = 0, s2.y1 = 0, s2.x2 = 0, s2.y2 = 0, s2.defaultLength = 50, s2.manipulationStartX = 0, s2.manipulationStartY = 0, s2.manipulationStartX1 = 0, s2.manipulationStartY1 = 0, s2.manipulationStartX2 = 0, s2.manipulationStartY2 = 0, s2.setupControlBox(), s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !!t2.prototype.ownsTarget.call(this, e2) || !(!this.grip1.ownsTarget(e2) && !this.grip2.ownsTarget(e2));
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), this.manipulationStartX = e2.x, this.manipulationStartY = e2.y, "new" === this.state && (this.x1 = e2.x, this.y1 = e2.y, this.x2 = e2.x, this.y2 = e2.y), this.manipulationStartX1 = this.x1, this.manipulationStartY1 = this.y1, this.manipulationStartX2 = this.x2, this.manipulationStartY2 = this.y2, "new" !== this.state && (this.select(), this.grip1.ownsTarget(i3) ? this.activeGrip = this.grip1 : this.grip2.ownsTarget(i3) ? this.activeGrip = this.grip2 : this.activeGrip = void 0, this.activeGrip ? this._state = "resize" : this._state = "move");
  }, i2.prototype.pointerUp = function(e2) {
    var i3 = this.state;
    t2.prototype.pointerUp.call(this, e2), "creating" === this.state && Math.abs(this.x1 - this.x2) < 10 && Math.abs(this.y1 - this.y2) < 10 ? (this.x2 = this.x1 + this.defaultLength, this.adjustVisual(), this.adjustControlBox()) : this.manipulate(e2), this._state = "select", "creating" === i3 && this.onMarkerCreated && this.onMarkerCreated(this);
  }, i2.prototype.adjustVisual = function() {
  }, i2.prototype.manipulate = function(t3) {
    "creating" === this.state ? this.resize(t3) : "move" === this.state ? (this.x1 = this.manipulationStartX1 + t3.x - this.manipulationStartX, this.y1 = this.manipulationStartY1 + t3.y - this.manipulationStartY, this.x2 = this.manipulationStartX2 + t3.x - this.manipulationStartX, this.y2 = this.manipulationStartY2 + t3.y - this.manipulationStartY, this.adjustVisual(), this.adjustControlBox()) : "resize" === this.state && this.resize(t3);
  }, i2.prototype.resize = function(t3) {
    switch (this.activeGrip) {
      case this.grip1:
        this.x1 = t3.x, this.y1 = t3.y;
        break;
      case this.grip2:
      case void 0:
        this.x2 = t3.x, this.y2 = t3.y;
    }
    this.adjustVisual(), this.adjustControlBox();
  }, i2.prototype.select = function() {
    t2.prototype.select.call(this), this.adjustControlBox(), this.controlBox.style.display = "";
  }, i2.prototype.deselect = function() {
    t2.prototype.deselect.call(this), this.controlBox.style.display = "none";
  }, i2.prototype.setupControlBox = function() {
    this.controlBox = r.createGroup(), this.container.appendChild(this.controlBox), this.addControlGrips(), this.controlBox.style.display = "none";
  }, i2.prototype.adjustControlBox = function() {
    this.positionGrips();
  }, i2.prototype.addControlGrips = function() {
    this.grip1 = this.createGrip(), this.grip2 = this.createGrip(), this.positionGrips();
  }, i2.prototype.createGrip = function() {
    var t3 = new m();
    return t3.visual.transform.baseVal.appendItem(r.createTransform()), this.controlBox.appendChild(t3.visual), t3;
  }, i2.prototype.positionGrips = function() {
    var t3 = this.grip1.GRIP_SIZE;
    this.positionGrip(this.grip1.visual, this.x1 - t3 / 2, this.y1 - t3 / 2), this.positionGrip(this.grip2.visual, this.x2 - t3 / 2, this.y2 - t3 / 2);
  }, i2.prototype.positionGrip = function(t3, e2, i3) {
    var o2 = t3.transform.baseVal.getItem(0);
    o2.setTranslate(e2, i3), t3.transform.baseVal.replaceItem(o2, 0);
  }, i2.prototype.getState = function() {
    return Object.assign({ x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 }, t2.prototype.getState.call(this));
  }, i2.prototype.restoreState = function(e2) {
    t2.prototype.restoreState.call(this, e2);
    var i3 = e2;
    this.x1 = i3.x1, this.y1 = i3.y1, this.x2 = i3.x2, this.y2 = i3.y2;
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.x1 = this.x1 * e2, this.y1 = this.y1 * i3, this.x2 = this.x2 * e2, this.y2 = this.y2 * i3, this.adjustVisual(), this.adjustControlBox();
  }, i2;
})(f);
var T = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.strokeColor = "transparent", s2.strokeWidth = 0, s2.strokeDasharray = "", s2.setStrokeColor = s2.setStrokeColor.bind(s2), s2.setStrokeWidth = s2.setStrokeWidth.bind(s2), s2.setStrokeDasharray = s2.setStrokeDasharray.bind(s2), s2.strokeColor = o2.defaultColor, s2.strokeWidth = o2.defaultStrokeWidth, s2.strokeDasharray = o2.defaultStrokeDasharray, s2.strokePanel = new g("Line color", o2.defaultColorSet, o2.defaultColor), s2.strokePanel.onColorChanged = s2.setStrokeColor, s2.strokeWidthPanel = new S("Line width", o2.defaultStrokeWidths, o2.defaultStrokeWidth), s2.strokeWidthPanel.onWidthChanged = s2.setStrokeWidth, s2.strokeStylePanel = new k("Line style", o2.defaultStrokeDasharrays, o2.defaultStrokeDasharray), s2.strokeStylePanel.onStyleChanged = s2.setStrokeDasharray, s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.visual && e2 !== this.selectorLine && e2 !== this.visibleLine);
  }, i2.prototype.createVisual = function() {
    this.visual = r.createGroup(), this.selectorLine = r.createLine(this.x1, this.y1, this.x2, this.y2, [["stroke", "transparent"], ["stroke-width", (this.strokeWidth + 10).toString()]]), this.visibleLine = r.createLine(this.x1, this.y1, this.x2, this.y2, [["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()]]), this.visual.appendChild(this.selectorLine), this.visual.appendChild(this.visibleLine), this.addMarkerVisualToContainer(this.visual);
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), "new" === this.state && (this.createVisual(), this.adjustVisual(), this._state = "creating");
  }, i2.prototype.adjustVisual = function() {
    this.selectorLine && this.visibleLine && (this.selectorLine.setAttribute("x1", this.x1.toString()), this.selectorLine.setAttribute("y1", this.y1.toString()), this.selectorLine.setAttribute("x2", this.x2.toString()), this.selectorLine.setAttribute("y2", this.y2.toString()), this.visibleLine.setAttribute("x1", this.x1.toString()), this.visibleLine.setAttribute("y1", this.y1.toString()), this.visibleLine.setAttribute("x2", this.x2.toString()), this.visibleLine.setAttribute("y2", this.y2.toString()), r.setAttributes(this.visibleLine, [["stroke", this.strokeColor]]), r.setAttributes(this.visibleLine, [["stroke-width", this.strokeWidth.toString()]]), r.setAttributes(this.visibleLine, [["stroke-dasharray", this.strokeDasharray.toString()]]));
  }, i2.prototype.setStrokeColor = function(t3) {
    this.strokeColor = t3, this.adjustVisual(), this.colorChanged(t3);
  }, i2.prototype.setStrokeWidth = function(t3) {
    this.strokeWidth = t3, this.adjustVisual();
  }, i2.prototype.setStrokeDasharray = function(t3) {
    this.strokeDasharray = t3, this.adjustVisual(), this.stateChanged();
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.strokeWidthPanel, this.strokeStylePanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ strokeColor: this.strokeColor, strokeWidth: this.strokeWidth, strokeDasharray: this.strokeDasharray }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    t2.prototype.restoreState.call(this, e2);
    var i3 = e2;
    this.strokeColor = i3.strokeColor, this.strokeWidth = i3.strokeWidth, this.strokeDasharray = i3.strokeDasharray, this.createVisual(), this.adjustVisual();
  }, i2.typeName = "LineMarker", i2.title = "Line marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>', i2;
})(E);
var M = (function(t2) {
  function i2(e2, i3, o2, s2, r2) {
    var n2 = t2.call(this, e2, s2 || '<svg viewBox="0 0 24 24"><path d="M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1l6-12m1 1l-3.5 7H18V9M5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5H6z"/></svg>', r2 || "font-family-panel") || this;
    return n2.fonts = [], n2.fontBoxes = [], n2.fonts = i3, n2.currentFont = o2, n2.setCurrentFont = n2.setCurrentFont.bind(n2), n2;
  }
  return e(i2, t2), i2.prototype.getUi = function() {
    var t3 = this, e2 = document.createElement("div");
    return e2.style.overflow = "hidden", e2.style.flexGrow = "2", this.fonts.forEach((function(i3) {
      var o2 = document.createElement("div");
      o2.style.display = "inline-block", o2.style.alignItems = "center", o2.style.justifyContent = "space-between", o2.style.padding = "5px", o2.style.borderWidth = "2px", o2.style.borderStyle = "solid", o2.style.overflow = "hidden", o2.style.maxWidth = 100 / t3.fonts.length - 5 + "%", o2.style.borderColor = i3 === t3.currentFont ? t3.uiStyleSettings.toolboxAccentColor : "transparent", o2.addEventListener("click", (function() {
        t3.setCurrentFont(i3, o2);
      })), e2.appendChild(o2);
      var s2 = document.createElement("div");
      s2.style.display = "flex", s2.style.minHeight = "20px", s2.style.flexGrow = "2", s2.style.fontFamily = i3, s2.style.overflow = "hidden";
      var r2 = document.createElement("div");
      r2.style.whiteSpace = "nowrap", r2.style.overflow = "hidden", r2.style.textOverflow = "ellipsis", r2.innerHTML = "The quick brown fox jumps over the lazy dog", s2.appendChild(r2), o2.appendChild(s2), t3.fontBoxes.push(o2);
    })), e2;
  }, i2.prototype.setCurrentFont = function(t3, e2) {
    var i3 = this;
    this.currentFont = t3, this.fontBoxes.forEach((function(t4) {
      t4.style.borderColor = t4 === e2 ? i3.uiStyleSettings.toolboxAccentColor : "transparent";
    })), this.onFontChanged && this.onFontChanged(this.currentFont);
  }, i2;
})(y);
var P = (function(t2) {
  function i2(e2, i3, o2) {
    var s2, r2 = t2.call(this, e2, i3, o2) || this;
    return r2.color = "transparent", r2.padding = 5, r2.DEFAULT_TEXT = "your text here", r2.isMoved = false, r2.color = o2.defaultColor, r2.fontFamily = o2.defaultFontFamily, r2.text = null !== (s2 = o2.defaultText) && void 0 !== s2 ? s2 : r2.DEFAULT_TEXT, r2.defaultSize = { x: 100, y: 30 }, r2.setColor = r2.setColor.bind(r2), r2.setFont = r2.setFont.bind(r2), r2.renderText = r2.renderText.bind(r2), r2.sizeText = r2.sizeText.bind(r2), r2.textEditDivClicked = r2.textEditDivClicked.bind(r2), r2.showTextEditor = r2.showTextEditor.bind(r2), r2.setSize = r2.setSize.bind(r2), r2.positionTextEditor = r2.positionTextEditor.bind(r2), r2.wrapText = r2.wrapText.bind(r2), r2.colorPanel = new g("Color", o2.defaultColorSet, o2.defaultColor), r2.colorPanel.onColorChanged = r2.setColor, r2.fontFamilyPanel = new M("Font", o2.defaultFontFamilies, o2.defaultFontFamily), r2.fontFamilyPanel.onFontChanged = r2.setFont, r2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    if (t2.prototype.ownsTarget.call(this, e2) || e2 === this.visual || e2 === this.textElement || e2 === this.bgRectangle) return true;
    var i3 = false;
    return this.textElement.childNodes.forEach((function(t3) {
      t3 === e2 && (i3 = true);
    })), i3;
  }, i2.prototype.createVisual = function() {
    this.visual = r.createGroup(), this.bgRectangle = r.createRect(1, 1, [["fill", "transparent"]]), this.visual.appendChild(this.bgRectangle), this.textElement = r.createText([["fill", this.color], ["font-family", this.fontFamily], ["font-size", "16px"], ["x", "0"], ["y", "0"]]), this.textElement.transform.baseVal.appendItem(r.createTransform()), this.textElement.transform.baseVal.appendItem(r.createTransform()), this.visual.appendChild(this.textElement), this.addMarkerVisualToContainer(this.visual), this.renderText();
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), this.isMoved = false, this.pointerDownPoint = e2, this.pointerDownTimestamp = Date.now(), "new" === this.state && (this.createVisual(), this.moveVisual(e2), this._state = "creating");
  }, i2.prototype.wrapText = function() {
    function t3(t4) {
      var e3 = t4[0].length;
      return t4.forEach((function(t5) {
        t5.length > e3 && (e3 = t5.length);
      })), 0.35 * e3 / t4.length;
    }
    if ("" !== this.text) {
      for (var e2 = this.text.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/), i3 = 1 * this.width / this.height, o2 = new (Array.bind.apply(Array, s([void 0], e2)))(), r2 = t3(o2), n2 = Number.MAX_VALUE, a2 = function() {
        var i4 = o2[0];
        o2.forEach((function(t4) {
          t4.length > i4.length && (i4 = t4);
        })), (n2 = i4.lastIndexOf(" ", n2 - 1)) > 0 ? (o2 = [], e2.forEach((function(t4) {
          for (var e3 = t4; e3.length > n2; ) {
            var i5 = e3.lastIndexOf(" ", n2);
            i5 < 0 && (i5 = e3.indexOf(" ")), i5 > 0 ? (o2.push(e3.substring(0, i5)), e3 = e3.substring(i5).trim()) : (o2.push(e3), e3 = "");
          }
          o2.push(e3);
        })), r2 = t3(o2)) : r2 = -1;
      }; r2 > i3; ) a2();
      return o2.join("\r\n");
    }
    return this.text;
  }, i2.prototype.renderText = function() {
    var t3 = this;
    if (this.textElement) {
      for (; this.textElement.lastChild; ) this.textElement.removeChild(this.textElement.lastChild);
      (this.globalSettings.wrapText ? this.wrapText() : this.text).split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/).forEach((function(e2) {
        t3.textElement.appendChild(r.createTSpan("" === e2.trim() ? " " : e2.trim(), [["x", "0"], ["dy", "1.2em"]]));
      })), setTimeout(this.sizeText, 10);
    }
  }, i2.prototype.getTextScale = function() {
    var t3 = this.textElement.getBBox(), e2 = 1;
    if (t3.width > 0 && t3.height > 0) {
      var i3 = (1 * this.width - this.width * this.padding * 2 / 100) / t3.width, o2 = (1 * this.height - this.height * this.padding * 2 / 100) / t3.height;
      e2 = Math.min(i3, o2);
    }
    return e2;
  }, i2.prototype.getTextPosition = function(t3) {
    var e2 = "rtl" === window.getComputedStyle(this.textElement).direction ? 1 : -1, i3 = this.textElement.getBBox(), o2 = 0, s2 = 0;
    return i3.width > 0 && i3.height > 0 && (o2 = (this.width + e2 * i3.width * t3) / 2, s2 = this.height / 2 - i3.height * t3 / 2), { x: o2, y: s2 };
  }, i2.prototype.sizeText = function() {
    var t3 = this.textElement.getBBox(), e2 = this.getTextScale(), i3 = this.getTextPosition(e2);
    i3.y -= t3.y * e2, navigator.userAgent.indexOf("Edge/") > -1 ? this.textElement.style.transform = "translate(" + i3.x + "px, " + i3.y + "px) scale(" + e2 + ", " + e2 + ")" : (this.textElement.transform.baseVal.getItem(0).setTranslate(i3.x, i3.y), this.textElement.transform.baseVal.getItem(1).setScale(e2, e2));
  }, i2.prototype.manipulate = function(e2) {
    t2.prototype.manipulate.call(this, e2), void 0 !== this.pointerDownPoint && (this.isMoved = Math.abs(e2.x - this.pointerDownPoint.x) > 5 || Math.abs(e2.y - this.pointerDownPoint.y) > 5);
  }, i2.prototype.resize = function(e2) {
    t2.prototype.resize.call(this, e2), this.isMoved = true, this.setSize(), this.globalSettings.wrapText ? this.renderText() : this.sizeText();
  }, i2.prototype.setSize = function() {
    t2.prototype.setSize.call(this), this.visual && this.bgRectangle && (r.setAttributes(this.visual, [["width", this.width.toString()], ["height", this.height.toString()]]), r.setAttributes(this.bgRectangle, [["width", this.width.toString()], ["height", this.height.toString()]]));
  }, i2.prototype.pointerUp = function(e2) {
    var i3 = this.state;
    "creating" === i3 && (this._suppressMarkerCreateEvent = true), t2.prototype.pointerUp.call(this, e2), this.setSize(), ("creating" === i3 || !this.isMoved && Date.now() - this.pointerDownTimestamp > 500) && this.showTextEditor(), this.pointerDownPoint = void 0;
  }, i2.prototype.showTextEditor = function() {
    var t3 = this;
    this._state = "edit", this.overlayContainer.innerHTML = "", this.textEditDiv = document.createElement("div"), this.textEditDiv.style.flexGrow = "2", this.textEditDiv.style.alignItems = "center", this.textEditDiv.style.justifyContent = "center", this.textEditDiv.style.pointerEvents = "auto", this.textEditDiv.style.overflow = "hidden", this.textEditor = document.createElement("div"), this.textEditor.style.position = "absolute", this.textEditor.style.fontFamily = this.fontFamily, this.textEditor.style.lineHeight = "1em", this.textEditor.innerText = this.text, this.textEditor.contentEditable = "true", this.textEditor.style.color = this.color, this.textEditor.style.whiteSpace = "pre", this.positionTextEditor(), this.textEditor.addEventListener("pointerup", (function(t4) {
      t4.stopPropagation();
    })), this.globalSettings.wrapText || this.textEditor.addEventListener("input", (function() {
      for (var e2 = Number.parseFloat(t3.textEditor.style.fontSize); t3.textEditor.clientWidth >= Number.parseInt(t3.textEditor.style.maxWidth) && e2 > 0.9; ) e2 -= 0.1, t3.textEditor.style.fontSize = Math.max(e2, 0.9) + "em";
    })), this.textEditor.addEventListener("keyup", (function(t4) {
      t4.cancelBubble = true;
    })), this.textEditor.addEventListener("paste", (function(t4) {
      if (t4.clipboardData) {
        var e2 = t4.clipboardData.getData("text"), i3 = window.getSelection();
        if (!i3.rangeCount) return false;
        i3.deleteFromDocument(), i3.getRangeAt(0).insertNode(document.createTextNode(e2)), t4.preventDefault();
      }
    })), this.textEditDiv.addEventListener("pointerup", (function() {
      t3.textEditDivClicked(t3.textEditor.innerText);
    })), this.textEditDiv.appendChild(this.textEditor), this.overlayContainer.appendChild(this.textEditDiv), this.hideVisual(), this.textEditor.focus(), document.execCommand("selectAll");
  }, i2.prototype.positionTextEditor = function() {
    if ("edit" === this.state) if (void 0 === this.textEditor) this.showTextEditor();
    else if (this.globalSettings.wrapText) this.textEditor.style.left = this.left + this.padding + "px", this.textEditor.style.top = this.top + this.padding + "px", this.textEditor.style.width = this.width - 2 * this.padding + "px", this.textEditor.style.height = this.height - 2 * this.padding + "px", this.textEditor.style.maxHeight = this.textEditor.style.height, this.textEditor.style.whiteSpace = "wrap";
    else {
      this.textElement.style.display = "";
      var t3 = this.getTextScale(), e2 = this.rotatePoint({ x: this.left + this.width / 2, y: this.top + this.height / 2 }), i3 = this.textElement.getBBox(), o2 = { x: i3.width * t3, y: i3.height * t3 };
      e2.x -= o2.x / 2, e2.y -= o2.y / 2, this.textEditor.style.top = e2.y + "px", this.textEditor.style.left = e2.x + "px", this.textEditor.style.maxWidth = this.overlayContainer.offsetWidth - e2.x + "px", this.textEditor.style.fontSize = Math.max(16 * t3, 12) + "px", this.textElement.style.display = "none";
    }
  }, i2.prototype.textEditDivClicked = function(t3) {
    this.text = t3.trim(), this.overlayContainer.innerHTML = "", this.renderText(), this.showVisual(), this._suppressMarkerCreateEvent && (this._suppressMarkerCreateEvent = false, this.onMarkerCreated && this.onMarkerCreated(this)), this.stateChanged();
  }, i2.prototype.select = function() {
    t2.prototype.select.call(this), "edit" === this.state && this.textEditDivClicked(this.textEditor.innerText);
  }, i2.prototype.deselect = function() {
    "edit" === this.state && this.textEditDivClicked(this.textEditor.innerText), t2.prototype.deselect.call(this);
  }, i2.prototype.dblClick = function(e2, i3) {
    t2.prototype.dblClick.call(this, e2, i3), this.showTextEditor();
  }, i2.prototype.setColor = function(t3) {
    this.textElement && r.setAttributes(this.textElement, [["fill", t3]]), this.color = t3, this.textEditor && (this.textEditor.style.color = this.color), this.colorChanged(t3);
  }, i2.prototype.setFont = function(t3) {
    this.textElement && r.setAttributes(this.textElement, [["font-family", t3]]), this.fontFamily = t3, this.textEditor && (this.textEditor.style.fontFamily = this.fontFamily), this.renderText(), this.stateChanged();
  }, i2.prototype.hideVisual = function() {
    this.textElement.style.display = "none", this.hideControlBox();
  }, i2.prototype.showVisual = function() {
    "edit" === this.state && (this._state = "select"), this.textElement.style.display = "", this.showControlBox();
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.colorPanel, this.fontFamilyPanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ color: this.color, fontFamily: this.fontFamily, padding: this.padding, text: this.text, wrapText: this.globalSettings.wrapText }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    var i3 = e2;
    this.color = i3.color, this.fontFamily = i3.fontFamily, this.padding = i3.padding, this.text = i3.text, this.createVisual(), t2.prototype.restoreState.call(this, e2), this.setSize(), this.globalSettings.wrapText && this.renderText();
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.setSize(), this.sizeText(), this.positionTextEditor();
  }, i2.typeName = "TextMarker", i2.title = "Text marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M9.6 14L12 7.7l2.4 6.3M11 5L5.5 19h2.2l1.1-3H15l1.1 3h2.2L13 5h-2z"/></svg>', i2;
})(b);
var L = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.color = "transparent", s2.lineWidth = 3, s2.drawing = false, s2.pixelRatio = 1, s2.color = o2.defaultColor, s2.lineWidth = o2.defaultStrokeWidth, s2.pixelRatio = o2.freehandPixelRatio, s2.setColor = s2.setColor.bind(s2), s2.addCanvas = s2.addCanvas.bind(s2), s2.finishCreation = s2.finishCreation.bind(s2), s2.setLineWidth = s2.setLineWidth.bind(s2), s2.colorPanel = new g("Color", o2.defaultColorSet, o2.defaultColor), s2.colorPanel.onColorChanged = s2.setColor, s2.lineWidthPanel = new S("Line width", o2.defaultStrokeWidths, o2.defaultStrokeWidth), s2.lineWidthPanel.onWidthChanged = s2.setLineWidth, s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.visual && e2 !== this.drawingImage);
  }, i2.prototype.createVisual = function() {
    this.visual = r.createGroup(), this.drawingImage = r.createImage(), this.visual.appendChild(this.drawingImage);
    var t3 = r.createTransform();
    this.visual.transform.baseVal.appendItem(t3), this.addMarkerVisualToContainer(this.visual);
  }, i2.prototype.pointerDown = function(e2, i3) {
    "new" === this.state && (this.addCanvas(), this.createVisual(), this._state = "creating"), "creating" === this.state ? (this.canvasContext.strokeStyle = this.color, this.canvasContext.lineWidth = this.lineWidth, this.canvasContext.beginPath(), this.canvasContext.moveTo(e2.x, e2.y), this.drawing = true) : t2.prototype.pointerDown.call(this, e2, i3);
  }, i2.prototype.manipulate = function(e2) {
    "creating" === this.state ? this.drawing && (this.canvasContext.lineTo(e2.x, e2.y), this.canvasContext.stroke()) : t2.prototype.manipulate.call(this, e2);
  }, i2.prototype.resize = function(e2) {
    t2.prototype.resize.call(this, e2), r.setAttributes(this.visual, [["width", this.width.toString()], ["height", this.height.toString()]]), r.setAttributes(this.drawingImage, [["width", this.width.toString()], ["height", this.height.toString()]]);
  }, i2.prototype.pointerUp = function(e2) {
    "creating" === this._state ? this.drawing && (this.canvasContext.closePath(), this.drawing = false, this.globalSettings.newFreehandMarkerOnPointerUp && this.finishCreation()) : t2.prototype.pointerUp.call(this, e2);
  }, i2.prototype.addCanvas = function() {
    this.overlayContainer.innerHTML = "", this.canvasElement = document.createElement("canvas"), this.canvasElement.width = this.overlayContainer.clientWidth * this.pixelRatio, this.canvasElement.height = this.overlayContainer.clientHeight * this.pixelRatio, this.canvasContext = this.canvasElement.getContext("2d"), this.canvasContext.scale(this.pixelRatio, this.pixelRatio), this.overlayContainer.appendChild(this.canvasElement);
  }, i2.prototype.select = function() {
    "creating" === this.state && this.finishCreation(), t2.prototype.select.call(this);
  }, i2.prototype.deselect = function() {
    "creating" === this.state && this.finishCreation(), t2.prototype.deselect.call(this);
  }, i2.prototype.finishCreation = function() {
    for (var t3 = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height), e2 = [this.canvasElement.width + 1, this.canvasElement.height + 1, -1, -1], i3 = e2[0], o2 = e2[1], s2 = e2[2], r2 = e2[3], n2 = false, a2 = 0; a2 < this.canvasElement.height; a2++) for (var h2 = 0; h2 < this.canvasElement.width; h2++) {
      t3.data[a2 * this.canvasElement.width * 4 + 4 * h2 + 3] > 0 && (n2 = true, a2 < o2 && (o2 = a2), h2 < i3 && (i3 = h2), a2 > r2 && (r2 = a2), h2 > s2 && (s2 = h2));
    }
    if (n2) {
      this.left = i3 / this.pixelRatio, this.top = o2 / this.pixelRatio, this.width = (s2 - i3) / this.pixelRatio, this.height = (r2 - o2) / this.pixelRatio;
      var l2 = document.createElement("canvas");
      l2.width = s2 - i3, l2.height = r2 - o2, l2.getContext("2d").putImageData(this.canvasContext.getImageData(i3, o2, s2 - i3, r2 - o2), 0, 0), this.drawingImgUrl = l2.toDataURL("image/png"), this.setDrawingImage(), this._state = "select", this.onMarkerCreated && this.onMarkerCreated(this);
    }
    this.overlayContainer.innerHTML = "";
  }, i2.prototype.setDrawingImage = function() {
    r.setAttributes(this.drawingImage, [["width", this.width.toString()], ["height", this.height.toString()]]), r.setAttributes(this.drawingImage, [["href", this.drawingImgUrl]]), this.moveVisual({ x: this.left, y: this.top });
  }, i2.prototype.setColor = function(t3) {
    this.color = t3, this.colorChanged(t3);
  }, i2.prototype.setLineWidth = function(t3) {
    this.lineWidth = t3;
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return "new" === this.state || "creating" === this.state ? [this.colorPanel, this.lineWidthPanel] : [];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ drawingImgUrl: this.drawingImgUrl }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    this.createVisual(), t2.prototype.restoreState.call(this, e2), this.drawingImgUrl = e2.drawingImgUrl, this.setDrawingImage();
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.setDrawingImage();
  }, i2.typeName = "FreehandMarker", i2.title = "Freehand marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M9.75 20.85c1.78-.7 1.39-2.63.49-3.85-.89-1.25-2.12-2.11-3.36-2.94A9.817 9.817 0 014.54 12c-.28-.33-.85-.94-.27-1.06.59-.12 1.61.46 2.13.68.91.38 1.81.82 2.65 1.34l1.01-1.7C8.5 10.23 6.5 9.32 4.64 9.05c-1.06-.16-2.18.06-2.54 1.21-.32.99.19 1.99.77 2.77 1.37 1.83 3.5 2.71 5.09 4.29.34.33.75.72.95 1.18.21.44.16.47-.31.47-1.24 0-2.79-.97-3.8-1.61l-1.01 1.7c1.53.94 4.09 2.41 5.96 1.79m11.09-15.6c.22-.22.22-.58 0-.79l-1.3-1.3a.562.562 0 00-.78 0l-1.02 1.02 2.08 2.08M11 10.92V13h2.08l6.15-6.15-2.08-2.08L11 10.92z"/></svg>', i2;
})(b);
var D = (function(t2) {
  function i2(e2, i3, o2, s2) {
    var r2 = t2.call(this, e2, o2 || '<svg viewBox="0 0 24 24"><path d="M8 14v4l-6-6 6-6v4h8V6l6 6-6 6v-4H8z"/></svg>', s2 || "arrow-type-panel") || this;
    return r2.typeBoxes = [], r2.currentType = i3, r2.setCurrentType = r2.setCurrentType.bind(r2), r2;
  }
  return e(i2, t2), i2.prototype.getUi = function() {
    var t3 = this, e2 = document.createElement("div");
    e2.style.display = "flex", e2.style.overflow = "hidden", e2.style.flexGrow = "2";
    for (var i3 = function(i4) {
      var s3 = "both";
      switch (i4) {
        case 0:
          s3 = "both";
          break;
        case 1:
          s3 = "start";
          break;
        case 2:
          s3 = "end";
          break;
        case 3:
          s3 = "none";
      }
      var r2 = document.createElement("div");
      if (r2.style.display = "flex", r2.style.flexGrow = "2", r2.style.alignItems = "center", r2.style.justifyContent = "space-between", r2.style.padding = "5px", r2.style.borderWidth = "2px", r2.style.borderStyle = "solid", r2.style.borderColor = s3 === o2.currentType ? o2.uiStyleSettings.toolboxAccentColor : "transparent", r2.addEventListener("click", (function() {
        t3.setCurrentType(s3, r2);
      })), e2.appendChild(r2), "both" === s3 || "start" === s3) {
        var n2 = document.createElement("div");
        n2.style.display = "flex", n2.style.alignItems = "center", n2.style.minHeight = "20px", n2.innerHTML = '<svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg">\n          <polygon points="0,5 10,0 10,10" fill="' + (void 0 !== o2.uiStyleSettings ? o2.uiStyleSettings.toolboxColor : "#eeeeee") + '" />\n        </svg>', n2.style.marginLeft = "5px", r2.appendChild(n2);
      }
      var a2 = document.createElement("div");
      a2.style.display = "flex", a2.style.alignItems = "center", a2.style.minHeight = "20px", a2.style.flexGrow = "2";
      var h2 = document.createElement("hr");
      if (h2.style.minWidth = "20px", h2.style.border = "0px", h2.style.borderTop = "3px solid " + (void 0 !== o2.uiStyleSettings ? o2.uiStyleSettings.toolboxColor : "#eeeeee"), h2.style.flexGrow = "2", a2.appendChild(h2), r2.appendChild(a2), "both" === s3 || "end" === s3) {
        var l2 = document.createElement("div");
        l2.style.display = "flex", l2.style.alignItems = "center", l2.style.minHeight = "20px", l2.innerHTML = '<svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg">\n          <polygon points="0,0 10,5 0,10" fill="' + (void 0 !== o2.uiStyleSettings ? o2.uiStyleSettings.toolboxColor : "#eeeeee") + '" />\n        </svg>', l2.style.marginRight = "5px", r2.appendChild(l2);
      }
      o2.typeBoxes.push(r2);
    }, o2 = this, s2 = 0; s2 < 4; s2++) i3(s2);
    return e2;
  }, i2.prototype.setCurrentType = function(t3, e2) {
    var i3 = this;
    this.currentType = t3, this.typeBoxes.forEach((function(t4) {
      t4.style.borderColor = t4 === e2 ? void 0 !== i3.uiStyleSettings ? i3.uiStyleSettings.toolboxAccentColor : "#3080c3" : "transparent";
    })), this.onArrowTypeChanged && this.onArrowTypeChanged(this.currentType);
  }, i2;
})(y);
var A = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.arrowType = "end", s2.arrowBaseHeight = 10, s2.arrowBaseWidth = 10, s2.getArrowPoints = s2.getArrowPoints.bind(s2), s2.setArrowType = s2.setArrowType.bind(s2), s2.arrowTypePanel = new D("Arrow type", "end"), s2.arrowTypePanel.onArrowTypeChanged = s2.setArrowType, s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.arrow1 && e2 !== this.arrow2);
  }, i2.prototype.getArrowPoints = function(t3, e2) {
    var i3 = this.arrowBaseWidth + 2 * this.strokeWidth, o2 = this.arrowBaseHeight + 2 * this.strokeWidth;
    return t3 - i3 / 2 + "," + (e2 + o2 / 2) + " " + t3 + "," + (e2 - o2 / 2) + " " + (t3 + i3 / 2) + "," + (e2 + o2 / 2);
  }, i2.prototype.createTips = function() {
    this.arrow1 = r.createPolygon(this.getArrowPoints(this.x1, this.y1), [["fill", this.strokeColor]]), this.arrow1.transform.baseVal.appendItem(r.createTransform()), this.visual.appendChild(this.arrow1), this.arrow2 = r.createPolygon(this.getArrowPoints(this.x2, this.y2), [["fill", this.strokeColor]]), this.arrow2.transform.baseVal.appendItem(r.createTransform()), this.visual.appendChild(this.arrow2);
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), "creating" === this.state && this.createTips();
  }, i2.prototype.adjustVisual = function() {
    if (t2.prototype.adjustVisual.call(this), this.arrow1 && this.arrow2) {
      this.arrow1.style.display = "both" === this.arrowType || "start" === this.arrowType ? "" : "none", this.arrow2.style.display = "both" === this.arrowType || "end" === this.arrowType ? "" : "none", r.setAttributes(this.arrow1, [["points", this.getArrowPoints(this.x1, this.y1)], ["fill", this.strokeColor]]), r.setAttributes(this.arrow2, [["points", this.getArrowPoints(this.x2, this.y2)], ["fill", this.strokeColor]]);
      var e2 = 0;
      Math.abs(this.x1 - this.x2) > 0.1 && (e2 = 180 * Math.atan((this.y2 - this.y1) / (this.x2 - this.x1)) / Math.PI + 90 * Math.sign(this.x1 - this.x2));
      var i3 = this.arrow1.transform.baseVal.getItem(0);
      i3.setRotate(e2, this.x1, this.y1), this.arrow1.transform.baseVal.replaceItem(i3, 0);
      var o2 = this.arrow2.transform.baseVal.getItem(0);
      o2.setRotate(e2 + 180, this.x2, this.y2), this.arrow2.transform.baseVal.replaceItem(o2, 0);
    }
  }, i2.prototype.setArrowType = function(t3) {
    this.arrowType = t3, this.adjustVisual(), this.stateChanged();
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.strokeWidthPanel, this.strokeStylePanel, this.arrowTypePanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ arrowType: this.arrowType }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    t2.prototype.restoreState.call(this, e2);
    var i3 = e2;
    this.arrowType = i3.arrowType, this.createTips(), this.adjustVisual();
  }, i2.typeName = "ArrowMarker", i2.title = "Arrow marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 7 15.59V9H5v10h10v-2H8.41L19 6.41z"/></svg>', i2;
})(T);
var _ = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.fillColor = o2.defaultFillColor, s2.strokeWidth = 0, s2.fillPanel = new g("Color", o2.defaultColorSet, o2.defaultFillColor), s2.fillPanel.onColorChanged = s2.setFillColor, s2;
  }
  return e(i2, t2), Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.fillPanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = t2.prototype.getState.call(this);
    return e2.typeName = i2.typeName, e2;
  }, i2.typeName = "CoverMarker", i2.title = "Cover marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M4 6v13h16V6H4z"/></svg>', i2;
})(x);
var I = (function(t2) {
  function i2(e2, i3, o2, s2, r2) {
    var n2 = t2.call(this, e2, s2 || '<svg viewBox="0 0 24 24"><path d="M17.66 8L12 2.35 6.34 8A8.02 8.02 0 004 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0011.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8M6 14c0-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 18 12 18 14H6z"/></svg>', r2 || "opacity-panel") || this;
    return n2.opacities = [], n2.opacityBoxes = [], n2.opacities = i3, n2.currentOpacity = o2, n2.setCurrentOpacity = n2.setCurrentOpacity.bind(n2), n2;
  }
  return e(i2, t2), i2.prototype.getUi = function() {
    var t3 = this, e2 = document.createElement("div");
    return e2.style.display = "flex", e2.style.overflow = "hidden", e2.style.flexGrow = "2", e2.style.justifyContent = "space-between", this.opacities.forEach((function(i3) {
      var o2 = document.createElement("div");
      o2.style.display = "flex", o2.style.alignItems = "center", o2.style.justifyContent = "center", o2.style.padding = "5px", o2.style.borderWidth = "2px", o2.style.borderStyle = "solid", o2.style.borderColor = i3 === t3.currentOpacity ? t3.uiStyleSettings.toolboxAccentColor : "transparent", o2.addEventListener("click", (function() {
        t3.setCurrentOpacity(i3, o2);
      })), e2.appendChild(o2);
      var s2 = document.createElement("div");
      s2.innerText = 100 * i3 + "%", o2.appendChild(s2), t3.opacityBoxes.push(o2);
    })), e2;
  }, i2.prototype.setCurrentOpacity = function(t3, e2) {
    var i3 = this;
    this.currentOpacity = t3, this.opacityBoxes.forEach((function(t4) {
      t4.style.borderColor = t4 === e2 ? i3.uiStyleSettings.toolboxAccentColor : "transparent";
    })), this.onOpacityChanged && this.onOpacityChanged(this.currentOpacity);
  }, i2;
})(y);
var W = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.setOpacity = s2.setOpacity.bind(s2), s2.fillColor = o2.defaultHighlightColor, s2.strokeWidth = 0, s2.opacity = o2.defaultHighlightOpacity, s2.fillPanel = new g("Color", o2.defaultColorSet, s2.fillColor), s2.fillPanel.onColorChanged = s2.setFillColor, s2.opacityPanel = new I("Opacity", o2.defaultOpacitySteps, s2.opacity), s2.opacityPanel.onOpacityChanged = s2.setOpacity, s2;
  }
  return e(i2, t2), i2.prototype.setOpacity = function(t3) {
    this.opacity = t3, this.visual && r.setAttributes(this.visual, [["opacity", this.opacity.toString()]]), this.stateChanged();
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.fillPanel, this.opacityPanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = t2.prototype.getState.call(this);
    return e2.typeName = i2.typeName, e2;
  }, i2.typeName = "HighlightMarker", i2.title = "Highlight marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M18.5 1.15c-.53 0-1.04.19-1.43.58l-5.81 5.82 5.65 5.65 5.82-5.81c.77-.78.77-2.04 0-2.83l-2.84-2.83c-.39-.39-.89-.58-1.39-.58M10.3 8.5l-5.96 5.96c-.78.78-.78 2.04.02 2.85C3.14 18.54 1.9 19.77.67 21h5.66l.86-.86c.78.76 2.03.75 2.81-.02l5.95-5.96"/></svg>', i2;
})(_);
var N = '<svg viewBox="0 0 24 24"><path d="M9.62 12L12 5.67 14.37 12M11 3L5.5 17h2.25l1.12-3h6.25l1.13 3h2.25L13 3h-2z"/></svg>';
var H = '<svg viewBox="0 0 24 24"><path d="M19 11.5s-2 2.17-2 3.5a2 2 0 002 2 2 2 0 002-2c0-1.33-2-3.5-2-3.5M5.21 10L10 5.21 14.79 10m1.77-1.06L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.56-.59 1.53 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.59.59-1.56 0-2.12z"/></svg>';
var z = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.bgColor = "transparent", s2.tipPosition = { x: 0, y: 0 }, s2.tipBase1Position = { x: 0, y: 0 }, s2.tipBase2Position = { x: 0, y: 0 }, s2.tipMoving = false, s2.color = o2.defaultStrokeColor, s2.bgColor = o2.defaultFillColor, s2.fontFamily = o2.defaultFontFamily, s2.defaultSize = { x: 100, y: 30 }, s2.setBgColor = s2.setBgColor.bind(s2), s2.getTipPoints = s2.getTipPoints.bind(s2), s2.positionTip = s2.positionTip.bind(s2), s2.setTipPoints = s2.setTipPoints.bind(s2), s2.colorPanel = new g("Text color", o2.defaultColorSet, s2.color, N, "text-color-panel"), s2.colorPanel.onColorChanged = s2.setColor, s2.bgColorPanel = new g("Fill color", o2.defaultColorSet, s2.bgColor, H, "fill-color-panel"), s2.bgColorPanel.onColorChanged = s2.setBgColor, s2.fontFamilyPanel = new M("Font", o2.defaultFontFamilies, o2.defaultFontFamily), s2.fontFamilyPanel.onFontChanged = s2.setFont, s2.tipGrip = new m(), s2.tipGrip.visual.transform.baseVal.appendItem(r.createTransform()), s2.controlBox.appendChild(s2.tipGrip.visual), s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return t2.prototype.ownsTarget.call(this, e2) || this.tipGrip.ownsTarget(e2) || this.tip === e2;
  }, i2.prototype.createTip = function() {
    r.setAttributes(this.bgRectangle, [["fill", this.bgColor], ["rx", "10px"]]), this.tip = r.createPolygon(this.getTipPoints(), [["fill", this.bgColor]]), this.visual.appendChild(this.tip);
  }, i2.prototype.pointerDown = function(e2, i3) {
    "new" === this.state && t2.prototype.pointerDown.call(this, e2, i3), "creating" === this.state ? this.createTip() : this.tipGrip.ownsTarget(i3) ? (this.manipulationStartLeft = this.left, this.manipulationStartTop = this.top, this.tipMoving = true) : t2.prototype.pointerDown.call(this, e2, i3);
  }, i2.prototype.pointerUp = function(e2) {
    if (this.tipMoving) this.tipMoving = false, this.isMoved = true, t2.prototype.pointerUp.call(this, e2);
    else {
      var i3 = "creating" === this.state;
      t2.prototype.pointerUp.call(this, e2), this.setTipPoints(i3), this.positionTip();
    }
  }, i2.prototype.manipulate = function(e2) {
    if (this.tipMoving) {
      var i3 = this.unrotatePoint(e2);
      this.tipPosition = { x: i3.x - this.manipulationStartLeft, y: i3.y - this.manipulationStartTop }, this.positionTip();
    } else t2.prototype.manipulate.call(this, e2);
  }, i2.prototype.setBgColor = function(t3) {
    this.bgRectangle && this.tip && (r.setAttributes(this.bgRectangle, [["fill", t3]]), r.setAttributes(this.tip, [["fill", t3]])), this.bgColor = t3, this.fillColorChanged(t3);
  }, i2.prototype.getTipPoints = function() {
    return this.setTipPoints("creating" === this.state), this.tipBase1Position.x + "," + this.tipBase1Position.y + " " + this.tipBase2Position.x + "," + this.tipBase2Position.y + " " + this.tipPosition.x + "," + this.tipPosition.y;
  }, i2.prototype.setTipPoints = function(t3) {
    void 0 === t3 && (t3 = false);
    var e2 = Math.min(this.height / 2, 15), i3 = this.height / 5;
    t3 && (this.tipPosition = { x: e2 + i3 / 2, y: this.height + 20 });
    var o2 = Math.atan(this.height / 2 / (this.width / 2));
    if (this.tipPosition.x < this.width / 2 && this.tipPosition.y < this.height / 2) o2 < Math.atan((this.height / 2 - this.tipPosition.y) / (this.width / 2 - this.tipPosition.x)) ? (i3 = this.width / 5, e2 = Math.min(this.width / 2, 15), this.tipBase1Position = { x: e2, y: 0 }, this.tipBase2Position = { x: e2 + i3, y: 0 }) : (this.tipBase1Position = { x: 0, y: e2 }, this.tipBase2Position = { x: 0, y: e2 + i3 });
    else if (this.tipPosition.x >= this.width / 2 && this.tipPosition.y < this.height / 2) {
      o2 < Math.atan((this.height / 2 - this.tipPosition.y) / (this.tipPosition.x - this.width / 2)) ? (i3 = this.width / 5, e2 = Math.min(this.width / 2, 15), this.tipBase1Position = { x: this.width - e2 - i3, y: 0 }, this.tipBase2Position = { x: this.width - e2, y: 0 }) : (this.tipBase1Position = { x: this.width, y: e2 }, this.tipBase2Position = { x: this.width, y: e2 + i3 });
    } else if (this.tipPosition.x >= this.width / 2 && this.tipPosition.y >= this.height / 2) {
      o2 < Math.atan((this.tipPosition.y - this.height / 2) / (this.tipPosition.x - this.width / 2)) ? (i3 = this.width / 5, e2 = Math.min(this.width / 2, 15), this.tipBase1Position = { x: this.width - e2 - i3, y: this.height }, this.tipBase2Position = { x: this.width - e2, y: this.height }) : (this.tipBase1Position = { x: this.width, y: this.height - e2 - i3 }, this.tipBase2Position = { x: this.width, y: this.height - e2 });
    } else {
      o2 < Math.atan((this.tipPosition.y - this.height / 2) / (this.width / 2 - this.tipPosition.x)) ? (i3 = this.width / 5, e2 = Math.min(this.width / 2, 15), this.tipBase1Position = { x: e2, y: this.height }, this.tipBase2Position = { x: e2 + i3, y: this.height }) : (this.tipBase1Position = { x: 0, y: this.height - e2 }, this.tipBase2Position = { x: 0, y: this.height - e2 - i3 });
    }
  }, i2.prototype.resize = function(e2) {
    t2.prototype.resize.call(this, e2), this.positionTip();
  }, i2.prototype.positionTip = function() {
    r.setAttributes(this.tip, [["points", this.getTipPoints()]]);
    var t3 = this.tipGrip.visual.transform.baseVal.getItem(0);
    t3.setTranslate(this.tipPosition.x, this.tipPosition.y), this.tipGrip.visual.transform.baseVal.replaceItem(t3, 0);
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.colorPanel, this.bgColorPanel, this.fontFamilyPanel];
  }, enumerable: false, configurable: true }), i2.prototype.select = function() {
    this.positionTip(), t2.prototype.select.call(this);
  }, i2.prototype.getState = function() {
    var e2 = Object.assign({ bgColor: this.bgColor, tipPosition: this.tipPosition }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    var i3 = e2;
    this.bgColor = i3.bgColor, this.tipPosition = i3.tipPosition, t2.prototype.restoreState.call(this, e2), this.createTip(), this.setTipPoints();
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.tipPosition = { x: this.tipPosition.x * e2, y: this.tipPosition.y * i3 }, this.positionTip();
  }, i2.typeName = "CalloutMarker", i2.title = "Callout marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M4 2h16a2 2 0 012 2v12a2 2 0 01-2 2h-4l-4 4-4-4H4a2 2 0 01-2-2V4a2 2 0 012-2m0 2v12h4.83L12 19.17 15.17 16H20V4H4m2 3h12v2H6V7m0 4h10v2H6v-2z"/></svg>', i2;
})(P);
var R = (function(t2) {
  function i2(e2, i3, o2) {
    var r2 = t2.call(this, e2, i3, o2) || this;
    return r2.fillColor = "transparent", r2.strokeColor = "transparent", r2.strokeWidth = 0, r2.strokeDasharray = "", r2.opacity = 1, r2.strokeColor = o2.defaultColor, r2.strokeWidth = o2.defaultStrokeWidth, r2.strokeDasharray = o2.defaultStrokeDasharray, r2.fillColor = o2.defaultFillColor, r2.setStrokeColor = r2.setStrokeColor.bind(r2), r2.setFillColor = r2.setFillColor.bind(r2), r2.setStrokeWidth = r2.setStrokeWidth.bind(r2), r2.setStrokeDasharray = r2.setStrokeDasharray.bind(r2), r2.setOpacity = r2.setOpacity.bind(r2), r2.createVisual = r2.createVisual.bind(r2), r2.strokePanel = new g("Line color", s(o2.defaultColorSet, ["transparent"]), o2.defaultColor, void 0, "stroke-color-panel"), r2.strokePanel.onColorChanged = r2.setStrokeColor, r2.fillPanel = new g("Fill color", s(o2.defaultColorSet, ["transparent"]), r2.fillColor, H, "fill-color-panel"), r2.fillPanel.onColorChanged = r2.setFillColor, r2.strokeWidthPanel = new S("Line width", o2.defaultStrokeWidths, o2.defaultStrokeWidth), r2.strokeWidthPanel.onWidthChanged = r2.setStrokeWidth, r2.strokeStylePanel = new k("Line style", o2.defaultStrokeDasharrays, o2.defaultStrokeDasharray), r2.strokeStylePanel.onStyleChanged = r2.setStrokeDasharray, r2.opacityPanel = new I("Opacity", o2.defaultOpacitySteps, r2.opacity), r2.opacityPanel.onOpacityChanged = r2.setOpacity, r2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.visual);
  }, i2.prototype.createVisual = function() {
    this.visual = r.createEllipse(this.width / 2, this.height / 2, [["fill", this.fillColor], ["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()], ["stroke-dasharray", this.strokeDasharray], ["opacity", this.opacity.toString()]]), this.addMarkerVisualToContainer(this.visual);
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), "new" === this.state && (this.createVisual(), this.moveVisual(e2), this._state = "creating");
  }, i2.prototype.manipulate = function(e2) {
    t2.prototype.manipulate.call(this, e2);
  }, i2.prototype.resize = function(e2) {
    t2.prototype.resize.call(this, e2), this.setSize();
  }, i2.prototype.setSize = function() {
    t2.prototype.setSize.call(this), r.setAttributes(this.visual, [["cx", (this.width / 2).toString()], ["cy", (this.height / 2).toString()], ["rx", (this.width / 2).toString()], ["ry", (this.height / 2).toString()]]);
  }, i2.prototype.pointerUp = function(e2) {
    t2.prototype.pointerUp.call(this, e2), this.setSize();
  }, i2.prototype.setStrokeColor = function(t3) {
    this.strokeColor = t3, this.visual && r.setAttributes(this.visual, [["stroke", this.strokeColor]]), this.colorChanged(t3), this.stateChanged();
  }, i2.prototype.setFillColor = function(t3) {
    this.fillColor = t3, this.visual && r.setAttributes(this.visual, [["fill", this.fillColor]]), this.fillColorChanged(t3), this.stateChanged();
  }, i2.prototype.setStrokeWidth = function(t3) {
    this.strokeWidth = t3, this.visual && r.setAttributes(this.visual, [["stroke-width", this.strokeWidth.toString()]]), this.stateChanged();
  }, i2.prototype.setStrokeDasharray = function(t3) {
    this.strokeDasharray = t3, this.visual && r.setAttributes(this.visual, [["stroke-dasharray", this.strokeDasharray]]), this.stateChanged();
  }, i2.prototype.setOpacity = function(t3) {
    this.opacity = t3, this.visual && r.setAttributes(this.visual, [["opacity", this.opacity.toString()]]), this.stateChanged();
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.fillPanel, this.strokeWidthPanel, this.strokeStylePanel, this.opacityPanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ fillColor: this.fillColor, strokeColor: this.strokeColor, strokeWidth: this.strokeWidth, strokeDasharray: this.strokeDasharray, opacity: this.opacity }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    var i3 = e2;
    this.fillColor = i3.fillColor, this.strokeColor = i3.strokeColor, this.strokeWidth = i3.strokeWidth, this.strokeDasharray = i3.strokeDasharray, this.opacity = i3.opacity, this.createVisual(), t2.prototype.restoreState.call(this, e2), this.setSize();
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.setSize();
  }, i2.typeName = "EllipseMarker", i2.title = "Ellipse marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M12 4C6.5 4 2 7.58 2 12s4.5 8 10 8 10-3.58 10-8-4.5-8-10-8z"/></svg>', i2;
})(b);
var O = (function(t2) {
  function i2(e2, i3, o2) {
    return t2.call(this, e2, i3, o2) || this;
  }
  return e(i2, t2), Object.defineProperty(i2.prototype, "tipLength", { get: function() {
    return 10 + 3 * this.strokeWidth;
  }, enumerable: false, configurable: true }), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.tip1 && e2 !== this.tip2);
  }, i2.prototype.createTips = function() {
    this.tip1 = r.createLine(this.x1 - this.tipLength / 2, this.y1, this.x1 + this.tipLength / 2, this.y1, [["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()]]), this.tip1.transform.baseVal.appendItem(r.createTransform()), this.visual.appendChild(this.tip1), this.tip2 = r.createLine(this.x2 - this.tipLength / 2, this.y2, this.x2 + this.tipLength / 2, this.y2, [["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()]]), this.tip2.transform.baseVal.appendItem(r.createTransform()), this.visual.appendChild(this.tip2);
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), "creating" === this.state && this.createTips();
  }, i2.prototype.adjustVisual = function() {
    if (t2.prototype.adjustVisual.call(this), this.tip1 && this.tip2 && (r.setAttributes(this.tip1, [["x1", (this.x1 - this.tipLength / 2).toString()], ["y1", this.y1.toString()], ["x2", (this.x1 + this.tipLength / 2).toString()], ["y2", this.y1.toString()], ["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()]]), r.setAttributes(this.tip2, [["x1", (this.x2 - this.tipLength / 2).toString()], ["y1", this.y2.toString()], ["x2", (this.x2 + this.tipLength / 2).toString()], ["y2", this.y2.toString()], ["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()]]), Math.abs(this.x1 - this.x2) > 0.1)) {
      var e2 = 180 * Math.atan((this.y2 - this.y1) / (this.x2 - this.x1)) / Math.PI + 90 * Math.sign(this.x1 - this.x2), i3 = this.tip1.transform.baseVal.getItem(0);
      i3.setRotate(e2, this.x1, this.y1), this.tip1.transform.baseVal.replaceItem(i3, 0);
      var o2 = this.tip2.transform.baseVal.getItem(0);
      o2.setRotate(e2 + 180, this.x2, this.y2), this.tip2.transform.baseVal.replaceItem(o2, 0);
    }
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.strokeWidthPanel, this.strokeStylePanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = t2.prototype.getState.call(this);
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    t2.prototype.restoreState.call(this, e2), this.createTips(), this.adjustVisual();
  }, i2.typeName = "MeasurementMarker", i2.title = "Measurement marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M1.39 18.36l1.77-1.76L4.58 18l1.06-1.05-1.42-1.41 1.42-1.42 2.47 2.48 1.06-1.06-2.47-2.48 1.41-1.41 1.42 1.41L10.59 12l-1.42-1.41 1.42-1.42 2.47 2.48 1.06-1.06-2.47-2.48 1.41-1.41 1.41 1.41 1.07-1.06-1.42-1.41 1.42-1.42L18 6.7l1.07-1.06-2.47-2.48 1.76-1.77 4.25 4.25L5.64 22.61l-4.25-4.25z"/></svg>', i2;
})(T);
var V = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.strokePanel.colors = o2.defaultColorSet, s2.fillColor = "transparent", s2;
  }
  return e(i2, t2), Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.strokeWidthPanel, this.strokeStylePanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = t2.prototype.getState.call(this);
    return e2.typeName = i2.typeName, e2;
  }, i2.typeName = "EllipseFrameMarker", i2.title = "Ellipse frame marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M12 6c4.41 0 8 2.69 8 6s-3.59 6-8 6-8-2.69-8-6 3.59-6 8-6m0-2C6.5 4 2 7.58 2 12s4.5 8 10 8 10-3.58 10-8-4.5-8-10-8z"/></svg>', i2;
})(R);
var G = (function() {
  function t2() {
    this.undoStack = [], this.redoStack = [];
  }
  return Object.defineProperty(t2.prototype, "isUndoPossible", { get: function() {
    return this.undoStack.length > 0;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isRedoPossible", { get: function() {
    return this.redoStack.length > 0;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "undoStepCount", { get: function() {
    return this.undoStack.length;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "redoStepCount", { get: function() {
    return this.redoStack.length;
  }, enumerable: false, configurable: true }), t2.prototype.addUndoStep = function(t3) {
    0 !== this.undoStack.length && JSON.stringify(this.undoStack[this.undoStack.length - 1]) === JSON.stringify(t3) || (this.undoStack.push(t3), JSON.stringify(this.lastRedoStep) !== JSON.stringify(t3) && this.redoStack.splice(0, this.redoStack.length));
  }, t2.prototype.replaceLastUndoStep = function(t3) {
    this.undoStack.length > 0 && (this.undoStack[this.undoStack.length - 1] = t3);
  }, t2.prototype.getLastUndoStep = function() {
    return this.undoStack.length > 0 ? this.undoStack[this.undoStack.length - 1] : void 0;
  }, t2.prototype.undo = function() {
    if (this.undoStack.length > 1) {
      var t3 = this.undoStack.pop();
      return void 0 !== t3 && this.redoStack.push(t3), this.undoStack.length > 0 ? this.undoStack[this.undoStack.length - 1] : void 0;
    }
  }, t2.prototype.redo = function() {
    return this.lastRedoStep = this.redoStack.pop(), this.lastRedoStep;
  }, t2;
})();
var F = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, i3, o2) || this;
    return s2.strokeColor = "transparent", s2.strokeWidth = 0, s2.strokeDasharray = "", s2.curveX = 0, s2.curveY = 0, s2.manipulationStartCurveX = 0, s2.manipulationStartCurveY = 0, s2.setStrokeColor = s2.setStrokeColor.bind(s2), s2.setStrokeWidth = s2.setStrokeWidth.bind(s2), s2.setStrokeDasharray = s2.setStrokeDasharray.bind(s2), s2.positionGrips = s2.positionGrips.bind(s2), s2.addControlGrips = s2.addControlGrips.bind(s2), s2.adjustVisual = s2.adjustVisual.bind(s2), s2.setupControlBox = s2.setupControlBox.bind(s2), s2.resize = s2.resize.bind(s2), s2.strokeColor = o2.defaultColor, s2.strokeWidth = o2.defaultStrokeWidth, s2.strokeDasharray = o2.defaultStrokeDasharray, s2.strokePanel = new g("Line color", o2.defaultColorSet, o2.defaultColor), s2.strokePanel.onColorChanged = s2.setStrokeColor, s2.strokeWidthPanel = new S("Line width", o2.defaultStrokeWidths, o2.defaultStrokeWidth), s2.strokeWidthPanel.onWidthChanged = s2.setStrokeWidth, s2.strokeStylePanel = new k("Line style", o2.defaultStrokeDasharrays, o2.defaultStrokeDasharray), s2.strokeStylePanel.onStyleChanged = s2.setStrokeDasharray, s2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.visual && e2 !== this.selectorCurve && e2 !== this.visibleCurve && !this.curveGrip.ownsTarget(e2));
  }, i2.prototype.getPathD = function() {
    return "M " + this.x1 + " " + this.y1 + " Q " + this.curveX + " " + this.curveY + ", " + this.x2 + " " + this.y2;
  }, i2.prototype.createVisual = function() {
    this.visual = r.createGroup(), this.selectorCurve = r.createPath(this.getPathD(), [["stroke", "transparent"], ["stroke-width", (this.strokeWidth + 10).toString()], ["fill", "transparent"]]), this.visibleCurve = r.createPath(this.getPathD(), [["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()], ["fill", "transparent"]]), this.visual.appendChild(this.selectorCurve), this.visual.appendChild(this.visibleCurve), this.addMarkerVisualToContainer(this.visual);
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), this.manipulationStartCurveX = this.curveX, this.manipulationStartCurveY = this.curveY, "new" === this.state && (this.curveX = e2.x, this.curveY = e2.y), "new" === this.state ? (this.createVisual(), this.adjustVisual(), this._state = "creating") : this.curveGrip.ownsTarget(i3) && (this.activeGrip = this.curveGrip, this._state = "resize");
  }, i2.prototype.adjustVisual = function() {
    this.selectorCurve && this.visibleCurve && (this.selectorCurve.setAttribute("d", this.getPathD()), this.visibleCurve.setAttribute("d", this.getPathD()), r.setAttributes(this.visibleCurve, [["stroke", this.strokeColor]]), r.setAttributes(this.visibleCurve, [["stroke-width", this.strokeWidth.toString()]]), r.setAttributes(this.visibleCurve, [["stroke-dasharray", this.strokeDasharray.toString()]]));
  }, i2.prototype.setupControlBox = function() {
    t2.prototype.setupControlBox.call(this), this.curveControlLine1 = r.createLine(this.x1, this.y1, this.curveX, this.curveY, [["stroke", "black"], ["stroke-width", "1"], ["stroke-opacity", "0.5"], ["stroke-dasharray", "3, 2"]]), this.curveControlLine2 = r.createLine(this.x2, this.y2, this.curveX, this.curveY, [["stroke", "black"], ["stroke-width", "1"], ["stroke-opacity", "0.5"], ["stroke-dasharray", "3, 2"]]), this.controlBox.insertBefore(this.curveControlLine1, this.controlBox.firstChild), this.controlBox.insertBefore(this.curveControlLine2, this.controlBox.firstChild);
  }, i2.prototype.addControlGrips = function() {
    this.curveGrip = this.createGrip(), this.curveX = 0, this.curveY = 0, t2.prototype.addControlGrips.call(this);
  }, i2.prototype.positionGrips = function() {
    t2.prototype.positionGrips.call(this);
    var e2 = this.curveGrip.GRIP_SIZE;
    this.positionGrip(this.curveGrip.visual, this.curveX - e2 / 2, this.curveY - e2 / 2), this.curveControlLine1 && this.curveControlLine2 && (this.curveControlLine1.setAttribute("x1", this.x1.toString()), this.curveControlLine1.setAttribute("y1", this.y1.toString()), this.curveControlLine1.setAttribute("x2", this.curveX.toString()), this.curveControlLine1.setAttribute("y2", this.curveY.toString()), this.curveControlLine2.setAttribute("x1", this.x2.toString()), this.curveControlLine2.setAttribute("y1", this.y2.toString()), this.curveControlLine2.setAttribute("x2", this.curveX.toString()), this.curveControlLine2.setAttribute("y2", this.curveY.toString()));
  }, i2.prototype.manipulate = function(e2) {
    "move" === this.state && (this.curveX = this.manipulationStartCurveX + e2.x - this.manipulationStartX, this.curveY = this.manipulationStartCurveY + e2.y - this.manipulationStartY), t2.prototype.manipulate.call(this, e2);
  }, i2.prototype.resize = function(e2) {
    this.activeGrip === this.curveGrip && (this.curveX = e2.x, this.curveY = e2.y), t2.prototype.resize.call(this, e2), "creating" === this.state && (this.curveX = this.x1 + (this.x2 - this.x1) / 2, this.curveY = this.y1 + (this.y2 - this.y1) / 2);
  }, i2.prototype.setStrokeColor = function(t3) {
    this.strokeColor = t3, this.adjustVisual(), this.colorChanged(t3);
  }, i2.prototype.setStrokeWidth = function(t3) {
    this.strokeWidth = t3, this.adjustVisual();
  }, i2.prototype.setStrokeDasharray = function(t3) {
    this.strokeDasharray = t3, this.adjustVisual();
  }, i2.prototype.scale = function(e2, i3) {
    this.curveX = this.curveX * e2, this.curveY = this.curveY * i3, t2.prototype.scale.call(this, e2, i3);
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.strokeWidthPanel, this.strokeStylePanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ strokeColor: this.strokeColor, strokeWidth: this.strokeWidth, strokeDasharray: this.strokeDasharray, curveX: this.curveX, curveY: this.curveY }, t2.prototype.getState.call(this));
    return e2.typeName = i2.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    t2.prototype.restoreState.call(this, e2);
    var i3 = e2;
    this.strokeColor = i3.strokeColor, this.strokeWidth = i3.strokeWidth, this.strokeDasharray = i3.strokeDasharray, this.curveX = i3.curveX, this.curveY = i3.curveY, this.createVisual(), this.adjustVisual();
  }, i2.typeName = "CurveMarker", i2.title = "Curve marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M18.5 2A1.5 1.5 0 0120 3.5 1.5 1.5 0 0118.5 5c-.23 0-.45-.05-.65-.15l-3.69 3.7.34.45c2.19-1.26 4.76-2 7.5-2l1 .03v2.01L22 9c-2.58 0-5 .75-7 2.04A3.96 3.96 0 0111.04 15C9.75 17 9 19.42 9 22l.04 1H7.03L7 22c0-2.74.74-5.31 2-7.5l-.45-.34-3.7 3.69c.1.2.15.42.15.65A1.5 1.5 0 013.5 20 1.5 1.5 0 012 18.5 1.5 1.5 0 013.5 17c.23 0 .45.05.65.15l3.69-3.7C7.31 12.78 7 11.92 7 11a4 4 0 014-4c.92 0 1.78.31 2.45.84l3.7-3.69c-.1-.2-.15-.42-.15-.65A1.5 1.5 0 0118.5 2M11 9a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z"/></svg>', i2;
})(E);
var j = (function(t2) {
  function i2(e2, i3, o2) {
    var r2 = t2.call(this, e2, i3, o2) || this;
    return r2.fillColor = "transparent", r2.strokeColor = "transparent", r2.strokeWidth = 0, r2.strokeDasharray = "", r2.textColor = "transparent", r2.fontSize = "1rem", r2.isMoved = false, r2.captionText = "Caption", r2.PADDING = 5, r2.captionBoxWidth = 0, r2.captionBoxHeight = 0, r2.strokeColor = o2.defaultColor, r2.strokeWidth = o2.defaultStrokeWidth, r2.strokeDasharray = o2.defaultStrokeDasharray, r2.fillColor = o2.defaultFillColor, r2.textColor = o2.defaultStrokeColor, r2.fontFamily = o2.defaultFontFamily, r2.fontSize = o2.defaultCaptionFontSize, r2.captionText = o2.defaultCaptionText, r2.setStrokeColor = r2.setStrokeColor.bind(r2), r2.setFillColor = r2.setFillColor.bind(r2), r2.setStrokeWidth = r2.setStrokeWidth.bind(r2), r2.setStrokeDasharray = r2.setStrokeDasharray.bind(r2), r2.createVisual = r2.createVisual.bind(r2), r2.sizeCaption = r2.sizeCaption.bind(r2), r2.setCaptionText = r2.setCaptionText.bind(r2), r2.showTextEditor = r2.showTextEditor.bind(r2), r2.positionTextEditor = r2.positionTextEditor.bind(r2), r2.finishTextEditing = r2.finishTextEditing.bind(r2), r2.setFont = r2.setFont.bind(r2), r2.setTextColor = r2.setTextColor.bind(r2), r2.strokePanel = new g("Line color", s(o2.defaultColorSet, ["transparent"]), r2.strokeColor, void 0, "stroke-color-panel"), r2.strokePanel.onColorChanged = r2.setStrokeColor, r2.fillPanel = new g("Fill color", s(o2.defaultColorSet, ["transparent"]), r2.fillColor, H, "fill-color-panel"), r2.fillPanel.onColorChanged = r2.setFillColor, r2.strokeWidthPanel = new S("Line width", o2.defaultStrokeWidths, o2.defaultStrokeWidth), r2.strokeWidthPanel.onWidthChanged = r2.setStrokeWidth, r2.strokeStylePanel = new k("Line style", o2.defaultStrokeDasharrays, o2.defaultStrokeDasharray), r2.strokeStylePanel.onStyleChanged = r2.setStrokeDasharray, r2.fontFamilyPanel = new M("Font", o2.defaultFontFamilies, o2.defaultFontFamily), r2.fontFamilyPanel.onFontChanged = r2.setFont, r2.textColorPanel = new g("Text color", o2.defaultColorSet, r2.textColor, N, "text-color-panel"), r2.textColorPanel.onColorChanged = r2.setTextColor, r2;
  }
  return e(i2, t2), i2.prototype.ownsTarget = function(e2) {
    return !(!t2.prototype.ownsTarget.call(this, e2) && e2 !== this.visual && e2 !== this.frame && e2 !== this.captionBg && e2 !== this.captionElement);
  }, i2.prototype.createVisual = function() {
    this.visual = r.createGroup(), this.addMarkerVisualToContainer(this.visual), this.captionBg = r.createRect(1, 1, [["fill", this.fillColor]]), this.visual.appendChild(this.captionBg), this.captionElement = r.createText([["fill", this.textColor], ["font-family", this.fontFamily]]), this.captionElement.style.fontSize = this.fontSize, this.captionElement.style.textAnchor = "start", this.captionElement.style.dominantBaseline = "text-before-edge", this.captionElement.textContent = this.captionText, this.visual.appendChild(this.captionElement), this.frame = r.createRect(this.width, this.height, [["fill", "transparent"], ["stroke", this.strokeColor], ["stroke-width", this.strokeWidth.toString()], ["stroke-dasharray", this.strokeDasharray]]), this.visual.appendChild(this.frame), this.sizeCaption();
  }, i2.prototype.setCaptionText = function(t3) {
    this.captionText = t3, this.captionElement.textContent = this.captionText, this.sizeCaption();
  }, i2.prototype.pointerDown = function(e2, i3) {
    t2.prototype.pointerDown.call(this, e2, i3), this.isMoved = false, this.pointerDownPoint = e2, this.pointerDownTimestamp = Date.now(), "new" === this.state && (this.createVisual(), this.moveVisual(e2), this._state = "creating");
  }, i2.prototype.manipulate = function(e2) {
    t2.prototype.manipulate.call(this, e2), void 0 !== this.pointerDownPoint && (this.isMoved = Math.abs(e2.x - this.pointerDownPoint.x) > 5 || Math.abs(e2.y - this.pointerDownPoint.y) > 5);
  }, i2.prototype.resize = function(e2) {
    t2.prototype.resize.call(this, e2), this.setSize();
  }, i2.prototype.sizeCaption = function() {
    var t3 = this.captionElement.getBBox();
    "" !== this.captionText.trim() ? (this.captionBoxWidth = t3.width + 2 * this.PADDING, this.captionBoxHeight = t3.height + 2 * this.PADDING) : (this.captionBoxWidth = 0, this.captionBoxHeight = 0), r.setAttributes(this.captionBg, [["width", this.captionBoxWidth.toString()], ["height", this.captionBoxHeight.toString()], ["clip-path", "path('M0,0 H" + this.width + " V" + this.height + " H" + -this.width + " Z')"]]), r.setAttributes(this.captionElement, [["x", this.PADDING.toString()], ["y", this.PADDING.toString()], ["clip-path", "path('M0,0 H" + (this.width - this.PADDING) + " V" + this.height + " H" + (-this.width - this.PADDING) + " Z')"]]);
  }, i2.prototype.showTextEditor = function() {
    var t3 = this;
    this._state = "edit", this.overlayContainer.innerHTML = "", this.textEditDiv = document.createElement("div"), this.textEditDiv.style.flexGrow = "2", this.textEditDiv.style.alignItems = "center", this.textEditDiv.style.justifyContent = "center", this.textEditDiv.style.pointerEvents = "auto", this.textEditDiv.style.overflow = "hidden", this.textEditBox = document.createElement("input"), this.textEditBox.style.position = "absolute", this.textEditBox.style.width = this.width + "px", this.captionBoxHeight > 0 && (this.textEditBox.style.height = this.captionBoxHeight + "px"), this.textEditBox.style.fontSize = this.fontSize, this.textEditBox.style.fontFamily = this.fontFamily, this.textEditBox.style.backgroundColor = this.fillColor, this.textEditBox.style.color = this.textColor, this.textEditBox.style.borderWidth = "0", this.textEditBox.setAttribute("value", this.captionText), this.textEditBox.select(), this.textEditDiv.appendChild(this.textEditBox), this.overlayContainer.appendChild(this.textEditDiv), this.textEditBox.addEventListener("pointerup", (function(t4) {
      t4.stopPropagation();
    })), this.textEditBox.addEventListener("keypress", (function(e2) {
      "Enter" === e2.key && t3.finishTextEditing(t3.textEditBox.value);
    })), this.textEditBox.addEventListener("keyup", (function(t4) {
      t4.cancelBubble = true;
    })), this.textEditBox.addEventListener("blur", (function() {
      t3.finishTextEditing(t3.textEditBox.value);
    })), this.textEditDiv.addEventListener("pointerup", (function() {
      t3.finishTextEditing(t3.textEditBox.value);
    })), this.positionTextEditor(), this.textEditBox.focus();
  }, i2.prototype.positionTextEditor = function() {
    "edit" === this.state && (void 0 === this.textEditBox ? this.showTextEditor() : (this.textEditBox.style.left = this.left + "px", this.textEditBox.style.top = this.top + "px", this.textEditBox.style.transform = "rotate(" + this.rotationAngle + "deg)", this.textEditBox.style.transformOrigin = this.width / 2 + "px " + this.height / 2 + "px"));
  }, i2.prototype.finishTextEditing = function(t3) {
    this.setCaptionText(t3.trim()), this.overlayContainer.innerHTML = "", this.stateChanged();
  }, i2.prototype.setFont = function(t3) {
    this.captionElement && r.setAttributes(this.captionElement, [["font-family", t3]]), this.fontFamily = t3, this.textEditBox && (this.textEditBox.style.fontFamily = this.fontFamily), this.sizeCaption(), this.stateChanged();
  }, i2.prototype.setTextColor = function(t3) {
    this.captionElement && r.setAttributes(this.captionElement, [["fill", t3]]), this.textColor = t3, this.textEditBox && (this.textEditBox.style.color = this.textColor), this.stateChanged();
  }, i2.prototype.setSize = function() {
    t2.prototype.setSize.call(this), r.setAttributes(this.frame, [["width", this.width.toString()], ["height", this.height.toString()]]), this.sizeCaption();
  }, i2.prototype.pointerUp = function(e2) {
    t2.prototype.pointerUp.call(this, e2), this.setSize(), !this.isMoved && Date.now() - this.pointerDownTimestamp > 500 && this.showTextEditor(), this.pointerDownPoint = void 0;
  }, i2.prototype.dblClick = function(e2, i3) {
    t2.prototype.dblClick.call(this, e2, i3), this.showTextEditor();
  }, i2.prototype.setStrokeColor = function(t3) {
    this.strokeColor = t3, this.frame && r.setAttributes(this.frame, [["stroke", this.strokeColor]]), this.colorChanged(t3), this.stateChanged();
  }, i2.prototype.setFillColor = function(t3) {
    this.fillColor = t3, this.captionBg && r.setAttributes(this.captionBg, [["fill", this.fillColor]]), this.fillColorChanged(t3), this.stateChanged();
  }, i2.prototype.setStrokeWidth = function(t3) {
    this.strokeWidth = t3, this.frame && r.setAttributes(this.frame, [["stroke-width", this.strokeWidth.toString()]]), this.stateChanged();
  }, i2.prototype.setStrokeDasharray = function(t3) {
    this.strokeDasharray = t3, this.frame && r.setAttributes(this.frame, [["stroke-dasharray", this.strokeDasharray]]), this.stateChanged();
  }, Object.defineProperty(i2.prototype, "toolboxPanels", { get: function() {
    return [this.strokePanel, this.fillPanel, this.strokeWidthPanel, this.strokeStylePanel, this.fontFamilyPanel, this.textColorPanel];
  }, enumerable: false, configurable: true }), i2.prototype.getState = function() {
    var e2 = Object.assign({ fillColor: this.fillColor, strokeColor: this.strokeColor, strokeWidth: this.strokeWidth, strokeDasharray: this.strokeDasharray, opacity: 1, textColor: this.textColor, fontFamily: this.fontFamily, fontSize: this.fontSize, captionText: this.captionText }, t2.prototype.getState.call(this));
    return e2.typeName = this.typeName, e2;
  }, i2.prototype.restoreState = function(e2) {
    var i3 = e2;
    this.fillColor = i3.fillColor, this.strokeColor = i3.strokeColor, this.strokeWidth = i3.strokeWidth, this.strokeDasharray = i3.strokeDasharray, this.textColor = i3.textColor, this.fontFamily = i3.fontFamily, this.captionText = i3.captionText, this.fontSize = i3.fontSize, this.createVisual(), t2.prototype.restoreState.call(this, e2), this.setSize();
  }, i2.prototype.scale = function(e2, i3) {
    t2.prototype.scale.call(this, e2, i3), this.setSize();
  }, i2.typeName = "CaptionFrameMarker", i2.title = "Caption frame marker", i2.icon = '<svg viewBox="0 0 24 24"><path d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H5m0 2h14v14H5V5m2 2v2h10V7H7z"/></svg>', i2;
})(b);
var U = (function() {
  function t2(t3, e2) {
    void 0 === e2 && (e2 = false), this.cancelable = false, this._defaultPrevented = false, this.markerArea = t3, this.cancelable = e2;
  }
  return Object.defineProperty(t2.prototype, "defaultPrevented", { get: function() {
    return this._defaultPrevented;
  }, enumerable: false, configurable: true }), t2.prototype.preventDefault = function() {
    this._defaultPrevented = true;
  }, t2;
})();
var X = (function(t2) {
  function i2(e2, i3, o2) {
    var s2 = t2.call(this, e2, false) || this;
    return s2.dataUrl = i3, s2.state = o2, s2;
  }
  return e(i2, t2), i2;
})(U);
var Y = (function(t2) {
  function i2(e2, i3, o2) {
    void 0 === o2 && (o2 = false);
    var s2 = t2.call(this, e2, o2) || this;
    return s2.marker = i3, s2;
  }
  return e(i2, t2), i2;
})(U);
var Z = (function() {
  function t2() {
    this.render = [], this.beforeclose = [], this.close = [], this.show = [], this.restorestate = [], this.statechange = [], this.markerselect = [], this.markerdeselect = [], this.markercreating = [], this.markercreate = [], this.markerbeforedelete = [], this.markerdelete = [], this.markerchange = [], this.focus = [], this.blur = [];
  }
  return t2.prototype.addEventListener = function(t3, e2) {
    this[t3].push(e2);
  }, t2.prototype.removeEventListener = function(t3, e2) {
    var i2 = this[t3].indexOf(e2);
    i2 > -1 && this[t3].splice(i2, 1);
  }, t2;
})();
var K = (function() {
  function t2(e2) {
    this.touchPoints = 0, this._availableMarkerTypes = this.DEFAULT_MARKER_TYPES, this.mode = "select", this.markers = [], this.isDragging = false, this.renderEventListeners = [], this.closeEventListeners = [], this.settings = new B(), this._isOpen = false, this.undoRedoManager = new G(), this.renderAtNaturalSize = false, this.renderImageType = "image/png", this.renderMarkersOnly = false, this.zoomSteps = [1, 1.5, 2, 4], this._zoomLevel = 1, this._isResizing = false, this.prevPanPoint = { x: 0, y: 0 }, this.eventListeners = new Z(), this._silentRenderMode = false, this._isFocused = false, this._instanceNo = t2.instanceCounter++, this.styles = new l(this.instanceNo), this.uiStyleSettings = this.styles.settings, this.target = e2, this.targetRoot = document.body, this.width = e2.clientWidth, this.height = e2.clientHeight, this.styles.removeStyleSheet(), this.open = this.open.bind(this), this.setTopLeft = this.setTopLeft.bind(this), this.toolbarButtonClicked = this.toolbarButtonClicked.bind(this), this.createNewMarker = this.createNewMarker.bind(this), this.addNewMarker = this.addNewMarker.bind(this), this.markerCreated = this.markerCreated.bind(this), this.setCurrentMarker = this.setCurrentMarker.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.onDblClick = this.onDblClick.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOut = this.onPointerOut.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.overrideOverflow = this.overrideOverflow.bind(this), this.restoreOverflow = this.restoreOverflow.bind(this), this.close = this.close.bind(this), this.closeUI = this.closeUI.bind(this), this.addCloseEventListener = this.addCloseEventListener.bind(this), this.removeCloseEventListener = this.removeCloseEventListener.bind(this), this.addRenderEventListener = this.addRenderEventListener.bind(this), this.removeRenderEventListener = this.removeRenderEventListener.bind(this), this.clientToLocalCoordinates = this.clientToLocalCoordinates.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.deleteSelectedMarker = this.deleteSelectedMarker.bind(this), this.setWindowHeight = this.setWindowHeight.bind(this), this.removeMarker = this.removeMarker.bind(this), this.colorChanged = this.colorChanged.bind(this), this.fillColorChanged = this.fillColorChanged.bind(this), this.onPopupTargetResize = this.onPopupTargetResize.bind(this), this.showNotesEditor = this.showNotesEditor.bind(this), this.hideNotesEditor = this.hideNotesEditor.bind(this), this.stepZoom = this.stepZoom.bind(this), this.focus = this.focus.bind(this), this.blur = this.blur.bind(this), this.markerStateChanged = this.markerStateChanged.bind(this), this.switchToSelectMode = this.switchToSelectMode.bind(this), this.addDefs = this.addDefs.bind(this), this.addDefsToImage = this.addDefsToImage.bind(this), this.addMarkerEvents = this.addMarkerEvents.bind(this);
  }
  return Object.defineProperty(t2.prototype, "ALL_MARKER_TYPES", { get: function() {
    return [w, L, A, P, V, R, W, z, O, _, T, F, j];
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "DEFAULT_MARKER_TYPES", { get: function() {
    return [w, L, A, P, R, W, z];
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "BASIC_MARKER_TYPES", { get: function() {
    return [w, L, A, P, W];
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "availableMarkerTypes", { get: function() {
    return this._availableMarkerTypes;
  }, set: function(t3) {
    var e2 = this;
    this._availableMarkerTypes.splice(0), t3.forEach((function(t4) {
      if ("string" == typeof t4) {
        var i2 = e2.ALL_MARKER_TYPES.find((function(e3) {
          return e3.typeName === t4;
        }));
        void 0 !== i2 && e2._availableMarkerTypes.push(i2);
      } else e2._availableMarkerTypes.push(t4);
    }));
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "currentMarker", { get: function() {
    return this._currentMarker;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isOpen", { get: function() {
    return this._isOpen;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isUndoPossible", { get: function() {
    return !(!this.undoRedoManager || !this.undoRedoManager.isUndoPossible);
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isRedoPossible", { get: function() {
    return !(!this.undoRedoManager || !this.undoRedoManager.isRedoPossible);
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "zoomLevel", { get: function() {
    return this._zoomLevel;
  }, set: function(t3) {
    this._zoomLevel = t3, this.editorCanvas && this.contentDiv && (this.editorCanvas.style.transform = "scale(" + this._zoomLevel + ")", this.contentDiv.scrollTo({ left: (this.editorCanvas.clientWidth * this._zoomLevel - this.contentDiv.clientWidth) / 2, top: (this.editorCanvas.clientHeight * this._zoomLevel - this.contentDiv.clientHeight) / 2 }));
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "instanceNo", { get: function() {
    return this._instanceNo;
  }, enumerable: false, configurable: true }), t2.prototype.open = function() {
    this.setupResizeObserver(), this.setEditingTarget(), this.setTopLeft(), this.initMarkerCanvas(), this.initOverlay(), this.attachEvents(), "popup" === this.settings.displayMode && this.onPopupTargetResize(), n.isLicensed || this.addLogo(), this._isOpen = true, this._isFocused = true;
  }, t2.prototype.show = function() {
    var t3 = this;
    void 0 === this.styles.styleSheetRoot && void 0 !== h.styleSheetRoot && (this.styles.styleSheetRoot = h.styleSheetRoot), this.markers.splice(0), this.setWindowHeight(), this.showUI(), this.open(), this.eventListeners.show.forEach((function(e2) {
      return e2(new U(t3));
    }));
  }, t2.prototype.render = function() {
    return i(this, void 0, void 0, (function() {
      var t3;
      return o(this, (function(e2) {
        switch (e2.label) {
          case 0:
            return this.setCurrentMarker(), (t3 = new a()).naturalSize = this.renderAtNaturalSize, t3.imageType = this.renderImageType, t3.imageQuality = this.renderImageQuality, t3.markersOnly = this.renderMarkersOnly, t3.width = this.renderWidth, t3.height = this.renderHeight, [4, t3.rasterize(this.target instanceof HTMLImageElement ? this.target : null, this.markerImage, this.renderTarget)];
          case 1:
            return e2.sent(), [4, t3.rasterize(this.target instanceof HTMLImageElement ? this.target : null, this.markerImage, this.renderTarget)];
          case 2:
            return [2, e2.sent()];
        }
      }));
    }));
  }, t2.prototype.close = function(t3) {
    var e2 = this;
    if (void 0 === t3 && (t3 = false), this.isOpen) {
      var i2 = false;
      t3 || this.eventListeners.beforeclose.forEach((function(t4) {
        var o2 = new U(e2, true);
        t4(o2), o2.defaultPrevented && (i2 = true);
      })), i2 || (this.coverDiv && this.closeUI(), this.targetObserver && (this.targetObserver.unobserve(this.target), this.targetObserver.unobserve(this.editorCanvas)), "popup" === this.settings.displayMode && window.removeEventListener("resize", this.setWindowHeight), this.eventListeners.close.forEach((function(t4) {
        return t4(new U(e2));
      })), this.detachEvents(), this._isOpen = false);
    }
  }, t2.prototype.addMarkersToToolbar = function() {
    for (var t3, e2 = [], i2 = 0; i2 < arguments.length; i2++) e2[i2] = arguments[i2];
    (t3 = this._availableMarkerTypes).push.apply(t3, e2);
  }, t2.prototype.addRenderEventListener = function(t3) {
    this.addEventListener("render", (function(e2) {
      t3(e2.dataUrl, e2.state);
    }));
  }, t2.prototype.removeRenderEventListener = function(t3) {
  }, t2.prototype.addCloseEventListener = function(t3) {
    this.addEventListener("close", (function() {
      t3();
    }));
  }, t2.prototype.removeCloseEventListener = function(t3) {
  }, t2.prototype.setupResizeObserver = function() {
    var t3 = this;
    "inline" === this.settings.displayMode ? window.ResizeObserver && (this.targetObserver = new ResizeObserver((function() {
      t3.resize(t3.target.clientWidth, t3.target.clientHeight);
    })), this.targetObserver.observe(this.target)) : "popup" === this.settings.displayMode && (window.ResizeObserver && (this.targetObserver = new ResizeObserver((function() {
      return t3.onPopupTargetResize();
    })), this.targetObserver.observe(this.editorCanvas)), window.addEventListener("resize", this.setWindowHeight));
  }, t2.prototype.onPopupTargetResize = function() {
    var t3 = 1 * this.target.clientWidth / this.target.clientHeight, e2 = this.editorCanvas.clientWidth / t3 > this.editorCanvas.clientHeight ? this.editorCanvas.clientHeight * t3 : this.editorCanvas.clientWidth, i2 = e2 < this.editorCanvas.clientWidth ? this.editorCanvas.clientHeight : this.editorCanvas.clientWidth / t3;
    this.resize(e2, i2);
  }, t2.prototype.setWindowHeight = function() {
    this.windowHeight = window.innerHeight;
  }, t2.prototype.resize = function(t3, e2) {
    this._isResizing = true;
    var i2 = t3 / this.imageWidth, o2 = e2 / this.imageHeight;
    this.imageWidth = Math.round(t3), this.imageHeight = Math.round(e2), this.target instanceof HTMLImageElement && this.editingTarget instanceof HTMLImageElement && (this.editingTarget.src = this.target.src), this.editingTarget.width = this.imageWidth, this.editingTarget.height = this.imageHeight, this.editingTarget.style.width = this.imageWidth + "px", this.editingTarget.style.height = this.imageHeight + "px", this.markerImage.setAttribute("width", this.imageWidth.toString()), this.markerImage.setAttribute("height", this.imageHeight.toString()), this.markerImage.setAttribute("viewBox", "0 0 " + this.imageWidth.toString() + " " + this.imageHeight.toString()), this.markerImageHolder.style.width = this.imageWidth + "px", this.markerImageHolder.style.height = this.imageHeight + "px", this.overlayContainer.style.width = this.imageWidth + "px", this.overlayContainer.style.height = this.imageHeight + "px", "popup" !== this.settings.displayMode ? this.coverDiv.style.width = this.imageWidth.toString() + "px" : (this.setTopLeft(), this.positionMarkerImage()), void 0 !== this.toolbar && this.toolbar.adjustLayout(), this.positionLogo(), this.scaleMarkers(i2, o2), this._isResizing = false;
  }, t2.prototype.scaleMarkers = function(t3, e2) {
    var i2, o2 = this;
    this._currentMarker && this._currentMarker instanceof P ? this._currentMarker.scale(t3, e2) : (i2 = this._currentMarker, this.setCurrentMarker()), this.markers.forEach((function(i3) {
      i3 !== o2._currentMarker && i3.scale(t3, e2);
    })), void 0 !== i2 && this.setCurrentMarker(i2);
  }, t2.prototype.setEditingTarget = function() {
    this.imageWidth = Math.round(this.target.clientWidth), this.imageHeight = Math.round(this.target.clientHeight), this.target instanceof HTMLImageElement && this.editingTarget instanceof HTMLImageElement && (this.editingTarget.src = this.target.src), this.editingTarget.width = this.imageWidth, this.editingTarget.height = this.imageHeight, this.editingTarget.style.width = this.imageWidth + "px", this.editingTarget.style.height = this.imageHeight + "px";
  }, t2.prototype.setTopLeft = function() {
    var t3 = this.editingTarget.getBoundingClientRect(), e2 = this.editorCanvas.getBoundingClientRect();
    this.left = t3.left - e2.left, this.top = t3.top - e2.top;
  }, t2.prototype.initMarkerCanvas = function() {
    this.markerImageHolder = document.createElement("div"), this.markerImageHolder.style.setProperty("touch-action", "pinch-zoom"), this.markerImage = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.markerImage.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.markerImage.setAttribute("width", this.imageWidth.toString()), this.markerImage.setAttribute("height", this.imageHeight.toString()), this.markerImage.setAttribute("viewBox", "0 0 " + this.imageWidth.toString() + " " + this.imageHeight.toString()), this.markerImage.style.pointerEvents = "auto", this.markerImageHolder.style.position = "absolute", this.markerImageHolder.style.width = this.imageWidth + "px", this.markerImageHolder.style.height = this.imageHeight + "px", this.markerImageHolder.style.transformOrigin = "top left", this.positionMarkerImage(), this.markerImageHolder.appendChild(this.markerImage), this.editorCanvas.appendChild(this.markerImageHolder);
  }, t2.prototype.addDefs = function() {
    for (var t3, e2 = [], i2 = 0; i2 < arguments.length; i2++) e2[i2] = arguments[i2];
    this.defs = r.createDefs(), this.addDefsToImage(), (t3 = this.defs).append.apply(t3, e2);
  }, t2.prototype.addDefsToImage = function() {
    this.defs && this.markerImage.insertBefore(this.defs, this.markerImage.firstChild);
  }, t2.prototype.initOverlay = function() {
    this.overlayContainer = document.createElement("div"), this.overlayContainer.style.position = "absolute", this.overlayContainer.style.left = "0px", this.overlayContainer.style.top = "0px", this.overlayContainer.style.width = this.imageWidth + "px", this.overlayContainer.style.height = this.imageHeight + "px", this.overlayContainer.style.display = "flex", this.markerImageHolder.appendChild(this.overlayContainer);
  }, t2.prototype.positionMarkerImage = function() {
    this.markerImageHolder.style.top = this.top / this.zoomLevel + "px", this.markerImageHolder.style.left = this.left / this.zoomLevel + "px";
  }, t2.prototype.attachEvents = function() {
    this.markerImage.addEventListener("pointerdown", this.onPointerDown), this.markerImage.addEventListener("touchmove", (function(t3) {
      return t3.preventDefault();
    })), this.markerImage.addEventListener("dblclick", this.onDblClick), this.attachWindowEvents();
  }, t2.prototype.attachWindowEvents = function() {
    window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerup", this.onPointerUp), window.addEventListener("pointercancel", this.onPointerOut), window.addEventListener("pointerout", this.onPointerOut), window.addEventListener("pointerleave", this.onPointerUp), window.addEventListener("resize", this.onWindowResize), window.addEventListener("keyup", this.onKeyUp);
  }, t2.prototype.detachEvents = function() {
    this.markerImage.removeEventListener("pointerdown", this.onPointerDown), this.markerImage.removeEventListener("dblclick", this.onDblClick), this.detachWindowEvents();
  }, t2.prototype.detachWindowEvents = function() {
    window.removeEventListener("pointermove", this.onPointerMove), window.removeEventListener("pointerup", this.onPointerUp), window.removeEventListener("pointercancel", this.onPointerOut), window.removeEventListener("pointerout", this.onPointerOut), window.removeEventListener("pointerleave", this.onPointerUp), window.removeEventListener("resize", this.onWindowResize), window.removeEventListener("keyup", this.onKeyUp);
  }, t2.prototype.addLogo = function() {
    this.logoUI = document.createElement("div"), this.logoUI.style.display = "inline-block", this.logoUI.style.margin = "0px", this.logoUI.style.padding = "0px", this.logoUI.style.fill = "#333333";
    var t3 = document.createElement("a");
    t3.href = "https://markerjs.com/", t3.target = "_blank", t3.innerHTML = '<svg viewBox="0 0 112 96" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path fill="#e5f20d" fill-opacity=".647" d="M0 40.386h111.96V95.62H0z"/><path d="M93.61 61.452c0 .987-.328 1.831-.987 2.53-.657.7-1.52 1.048-2.591 1.048-1.481 0-2.222-.74-2.222-2.22 0-16.617-.533-29.347-1.604-38.192-1.068-8.842-2.92-13.265-5.552-13.265-4.443 0-10.94 15.509-19.497 46.52v.124c0 .987-.328 1.831-.987 2.53-.657.7-1.52 1.048-2.592 1.048-1.48 0-2.22-.74-2.22-2.22 0-3.29.165-8.392.493-15.302.33-7.732.494-13.82.494-18.262 0-6.17-.186-10.55-.556-13.142-.37-2.591-1.172-3.887-2.406-3.887-2.796 0-6.333 5.12-10.612 15.363C38.494 34.367 34.01 46.44 29.32 60.34l-1.11 3.209a5.714 5.714 0 01-1.42 2.097c-.617.578-1.295.864-2.036.864-.987 0-1.644-.081-1.974-.247-.328-.162-.533-.656-.617-1.48-.41-4.03-.74-9.418-.987-16.165-.163-1.728-.329-4.566-.494-8.515-.822-13.901-1.562-23.3-2.221-28.196-.657-4.893-.987-7.628-.987-8.205 0-.657.33-1.44.987-2.345.659-.903 1.276-1.357 1.85-1.357 1.319 0 2.387.947 3.21 2.838.411.906.863 4.526 1.357 10.859.493 6.335.905 14.19 1.233 23.568l.617 18.88c4.527-13.983 9.216-26.673 14.068-38.068C45.65 6.686 50.093.988 54.123.988c2.715 0 4.566 1.974 5.553 5.923.987 3.949 1.481 9.667 1.481 17.152 0 3.949-.081 9.625-.247 17.029l-.123 5.676c3.373-11.762 6.725-21.634 10.057-29.615 3.331-7.979 6.685-11.97 10.056-11.97 8.475 0 12.71 18.757 12.71 56.269z" fill-rule="nonzero"/></svg>', t3.title = "Powered by marker.js", t3.style.display = "grid", t3.style.alignItems = "center", t3.style.justifyItems = "center", t3.style.padding = "3px", t3.style.width = "20px", t3.style.height = "20px", this.logoUI.appendChild(t3), this.editorCanvas.appendChild(this.logoUI), this.logoUI.style.position = "absolute", this.logoUI.style.pointerEvents = "all", this.positionLogo();
  }, t2.prototype.positionLogo = function() {
    this.logoUI && ("right" !== this.uiStyleSettings.logoPosition ? this.logoUI.style.left = this.markerImageHolder.offsetLeft + 10 + "px" : this.logoUI.style.left = this.markerImageHolder.offsetLeft + this.markerImageHolder.offsetWidth - this.logoUI.clientWidth - 10 + "px", this.logoUI.style.top = this.markerImageHolder.offsetTop + this.markerImageHolder.offsetHeight - this.logoUI.clientHeight - 10 + "px");
  }, t2.prototype.overrideOverflow = function() {
    this.scrollXState = window.scrollX, this.scrollYState = window.scrollY, this.bodyOverflowState = document.body.style.overflow, window.scroll({ top: 0, left: 0 }), document.body.style.overflow = "hidden";
  }, t2.prototype.restoreOverflow = function() {
    document.body.style.overflow = this.bodyOverflowState, window.scroll({ top: this.scrollYState, left: this.scrollXState });
  }, t2.prototype.showUI = function() {
    var t3;
    switch ("popup" === this.settings.displayMode && this.overrideOverflow(), this.coverDiv = document.createElement("div"), this.coverDiv.style.visibility = this._silentRenderMode ? "hidden" : "visible", this.coverDiv.className = this.styles.classNamePrefixBase + " " + this.styles.classNamePrefix, this.coverDiv.style.fontSize = "16px", this.coverDiv.style.userSelect = "none", this.settings.displayMode) {
      case "inline":
        this.coverDiv.style.position = "absolute";
        var e2 = void 0 !== this.settings.uiOffsetTop ? this.target.offsetTop + this.settings.uiOffsetTop : this.target.offsetTop > this.styles.settings.toolbarHeight ? this.target.offsetTop - this.styles.settings.toolbarHeight : 0, i2 = this.target.offsetLeft + (null !== (t3 = this.settings.uiOffsetLeft) && void 0 !== t3 ? t3 : 0);
        this.coverDiv.style.top = e2 + "px", this.coverDiv.style.left = i2 + "px", this.coverDiv.style.width = this.target.offsetWidth.toString() + "px", this.coverDiv.style.zIndex = void 0 !== this.uiStyleSettings.zIndex ? this.uiStyleSettings.zIndex : "5";
        break;
      case "popup":
        this.coverDiv.style.position = "fixed", this.coverDiv.style.top = "0px", this.coverDiv.style.left = "0px", this.coverDiv.style.width = "100vw", this.coverDiv.style.height = window.innerHeight + "px", this.coverDiv.style.backgroundColor = "rgba(0, 0, 0, 0.75)", this.coverDiv.style.zIndex = void 0 !== this.uiStyleSettings.zIndex ? this.uiStyleSettings.zIndex : "1000", this.coverDiv.style.display = "flex";
    }
    this.targetRoot.appendChild(this.coverDiv), this.uiDiv = document.createElement("div"), this.uiDiv.style.display = "flex", this.uiDiv.style.flexDirection = "column", this.uiDiv.style.flexGrow = "2", this.uiDiv.style.margin = "popup" === this.settings.displayMode ? this.settings.popupMargin + "px" : "0px", "popup" === this.settings.displayMode && (this.uiDiv.style.maxWidth = "calc(100vw - " + 2 * this.settings.popupMargin + "px"), this.uiDiv.style.border = "0px", this.coverDiv.appendChild(this.uiDiv), this.toolbar = new d(this.uiDiv, this.settings.displayMode, this._availableMarkerTypes, this.uiStyleSettings, this.styles), this.toolbar.addButtonClickListener(this.toolbarButtonClicked), this.toolbar.show(this._silentRenderMode || this.uiStyleSettings.hideToolbar ? "hidden" : "visible"), this.contentDiv = document.createElement("div"), this.contentDiv.style.display = "flex", this.contentDiv.style.flexDirection = "row", this.contentDiv.style.flexGrow = "2", this.contentDiv.style.flexShrink = "1", "popup" === this.settings.displayMode && (this.contentDiv.style.backgroundColor = this.uiStyleSettings.canvasBackgroundColor, this.contentDiv.style.maxHeight = this.windowHeight - 2 * this.settings.popupMargin - 3.5 * this.uiStyleSettings.toolbarHeight + "px", this.contentDiv.style.maxWidth = "calc(100vw - " + 2 * this.settings.popupMargin + "px)"), this.contentDiv.style.overflow = "auto", this.uiDiv.appendChild(this.contentDiv), this.editorCanvas = document.createElement("div"), this.editorCanvas.style.flexGrow = "2", this.editorCanvas.style.flexShrink = "1", this.editorCanvas.style.position = "relative", this.editorCanvas.style.overflow = "hidden", this.editorCanvas.style.display = "flex", "popup" === this.settings.displayMode && (this.editorCanvas.style.alignItems = "center", this.editorCanvas.style.justifyContent = "center"), this.editorCanvas.style.pointerEvents = "none", this.editorCanvas.style.transformOrigin = "left top", this.editorCanvas.style.transform = "scale(" + this.zoomLevel + ")", this.contentDiv.appendChild(this.editorCanvas), this.editingTarget = this.target instanceof HTMLImageElement ? document.createElement("img") : document.createElement("canvas"), "inline" === this.settings.displayMode && void 0 === this.settings.uiOffsetTop && this.target.offsetTop < this.styles.settings.toolbarHeight && (this.editingTarget.style.marginTop = this.target.offsetTop - this.styles.settings.toolbarHeight + "px"), this.editorCanvas.appendChild(this.editingTarget), this.toolbox = new u(this.uiDiv, this.settings.displayMode, this.uiStyleSettings, this.styles), this.toolbox.show(this._silentRenderMode || this.uiStyleSettings.hideToolbox ? "hidden" : "visible");
  }, t2.prototype.closeUI = function() {
    "popup" === this.settings.displayMode && this.restoreOverflow(), this.targetRoot.removeChild(this.coverDiv), this.coverDiv.remove(), this.coverDiv = null;
  }, t2.prototype.removeMarker = function(t3) {
    this.markerImage.removeChild(t3.container), this.markers.indexOf(t3) > -1 && this.markers.splice(this.markers.indexOf(t3), 1), t3.dispose();
  }, t2.prototype.switchToSelectMode = function() {
    this.mode = "select", this.hideNotesEditor(), void 0 !== this._currentMarker && ("new" !== this._currentMarker.state ? this._currentMarker.select() : (this.removeMarker(this._currentMarker), this.setCurrentMarker(), this.markerImage.style.cursor = "default"), this.addUndoStep()), this.toolbar.setSelectMode();
  }, t2.prototype.toolbarButtonClicked = function(t3, e2) {
    if ("marker" === t3 && void 0 !== e2) this.createNewMarker(e2);
    else if ("action" === t3) switch (e2) {
      case "select":
        this.switchToSelectMode(), this.switchToSelectMode();
        break;
      case "delete":
        this.deleteSelectedMarker();
        break;
      case "clear":
        this.clear();
        break;
      case "undo":
        this.undo();
        break;
      case "redo":
        this.redo();
        break;
      case "zoom":
        this.stepZoom();
        break;
      case "zoom-out":
        this.zoomLevel = 1;
        break;
      case "notes":
        void 0 === this.notesArea ? (this.switchToSelectMode(), this.zoomLevel = 1, this.showNotesEditor()) : this.switchToSelectMode();
        break;
      case "close":
        this.close();
        break;
      case "render":
        this.switchToSelectMode(), this.startRenderAndClose();
    }
  }, t2.prototype.deleteSelectedMarker = function() {
    var t3 = this;
    if (void 0 !== this._currentMarker && "select" === this._currentMarker.state) {
      var e2 = false;
      if (this.eventListeners.markerbeforedelete.forEach((function(i3) {
        var o2 = new Y(t3, t3._currentMarker, true);
        i3(o2), o2.defaultPrevented && (e2 = true);
      })), !e2) {
        var i2 = this._currentMarker;
        this._currentMarker.dispose(), this.markerImage.removeChild(this._currentMarker.container), this.markers.splice(this.markers.indexOf(this._currentMarker), 1), this.setCurrentMarker(), this.addUndoStep(), this.eventListeners.markerdelete.forEach((function(e3) {
          return e3(new Y(t3, i2));
        }));
      }
    }
  }, t2.prototype.clear = function() {
    var t3 = this, e2 = false;
    if (this.markers.length > 0 && (this.eventListeners.markerbeforedelete.forEach((function(i3) {
      var o3 = new Y(t3, void 0, true);
      i3(o3), o3.defaultPrevented && (e2 = true);
    })), !e2)) {
      this.setCurrentMarker();
      for (var i2 = function(e3) {
        var i3 = o2.markers[e3];
        o2.setCurrentMarker(o2.markers[e3]), o2._currentMarker.dispose(), o2.markerImage.removeChild(o2._currentMarker.container), o2.markers.splice(o2.markers.indexOf(o2._currentMarker), 1), o2.eventListeners.markerdelete.forEach((function(e4) {
          return e4(new Y(t3, i3));
        }));
      }, o2 = this, s2 = this.markers.length - 1; s2 >= 0; s2--) i2(s2);
      this.addUndoStep();
    }
  }, Object.defineProperty(t2.prototype, "isNotesAreaOpen", { get: function() {
    return void 0 !== this.notesArea;
  }, enumerable: false, configurable: true }), t2.prototype.showNotesEditor = function() {
    var t3;
    void 0 !== this._currentMarker && (this.overlayContainer.innerHTML = "", this.notesArea = document.createElement("textarea"), this.notesArea.className = this.uiStyleSettings.notesAreaStyleClassName, this.notesArea.style.pointerEvents = "auto", this.notesArea.style.alignSelf = "stretch", this.notesArea.style.width = "100%", this.notesArea.style.margin = this.uiStyleSettings.toolbarHeight / 4 + "px", this.notesArea.value = null !== (t3 = this._currentMarker.notes) && void 0 !== t3 ? t3 : "", this.overlayContainer.appendChild(this.notesArea));
  }, t2.prototype.hideNotesEditor = function() {
    this.isNotesAreaOpen && (void 0 !== this._currentMarker && (this._currentMarker.notes = "" !== this.notesArea.value.trim() ? this.notesArea.value : void 0), this.overlayContainer.removeChild(this.notesArea), this.notesArea = void 0);
  }, t2.prototype.selectLastMarker = function() {
    this.markers.length > 0 ? this.setCurrentMarker(this.markers[this.markers.length - 1]) : this.setCurrentMarker();
  }, t2.prototype.addUndoStep = function() {
    var t3 = this;
    if (void 0 === this._currentMarker || "edit" !== this._currentMarker.state) {
      var e2 = this.getState(), i2 = this.undoRedoManager.getLastUndoStep();
      if (!i2 || i2.width === e2.width && i2.height === e2.height) {
        var o2 = this.undoRedoManager.undoStepCount;
        this.undoRedoManager.addUndoStep(e2), o2 < this.undoRedoManager.undoStepCount && this.eventListeners.statechange.forEach((function(e3) {
          return e3(new U(t3));
        }));
      } else this.undoRedoManager.replaceLastUndoStep(e2);
    }
  }, t2.prototype.undo = function() {
    this.switchToSelectMode(), this.addUndoStep(), this.undoStep();
  }, t2.prototype.undoStep = function() {
    var t3 = this, e2 = this.undoRedoManager.undo();
    void 0 !== e2 && (this.restoreState(e2), this.addDefsToImage(), this.selectLastMarker(), this.eventListeners.statechange.forEach((function(e3) {
      return e3(new U(t3));
    })));
  }, t2.prototype.redo = function() {
    this.switchToSelectMode(), this.redoStep();
  }, t2.prototype.redoStep = function() {
    var t3 = this, e2 = this.undoRedoManager.redo();
    void 0 !== e2 && (this.restoreState(e2), this.addDefsToImage(), this.selectLastMarker(), this.eventListeners.statechange.forEach((function(e3) {
      return e3(new U(t3));
    })));
  }, t2.prototype.stepZoom = function() {
    var t3 = this.zoomSteps.indexOf(this.zoomLevel);
    this.zoomLevel = t3 < this.zoomSteps.length - 1 ? this.zoomSteps[t3 + 1] : this.zoomSteps[0];
  }, t2.prototype.panTo = function(t3) {
    this.contentDiv.scrollBy({ left: this.prevPanPoint.x - t3.x, top: this.prevPanPoint.y - t3.y }), this.prevPanPoint = t3;
  }, t2.prototype.startRenderAndClose = function() {
    return i(this, void 0, void 0, (function() {
      var t3, e2, i2 = this;
      return o(this, (function(o2) {
        switch (o2.label) {
          case 0:
            return [4, this.render()];
          case 1:
            return t3 = o2.sent(), e2 = this.getState(), this.eventListeners.render.forEach((function(o3) {
              return o3(new X(i2, t3, e2));
            })), this.close(true), [2];
        }
      }));
    }));
  }, t2.prototype.getState = function(t3) {
    true === t3 && this.setCurrentMarker();
    var e2 = { width: this.imageWidth, height: this.imageHeight, markers: [] };
    return this.markers.forEach((function(t4) {
      return e2.markers.push(t4.getState());
    })), e2;
  }, t2.prototype.restoreState = function(t3) {
    var e2 = this;
    for (this.markers.splice(0); this.markerImage.lastChild; ) this.markerImage.removeChild(this.markerImage.lastChild);
    t3.markers.forEach((function(t4) {
      var i2 = e2._availableMarkerTypes.find((function(e3) {
        return e3.typeName === t4.typeName;
      }));
      if (void 0 !== i2) {
        var o2 = e2.addNewMarker(i2);
        o2.restoreState(t4), e2.addMarkerEvents(o2), e2.markers.push(o2);
      }
    })), t3.width && t3.height && (t3.width !== this.imageWidth || t3.height !== this.imageHeight) && this.scaleMarkers(this.imageWidth / t3.width, this.imageHeight / t3.height), this.eventListeners.restorestate.forEach((function(t4) {
      return t4(new U(e2));
    }));
  }, t2.prototype.addNewMarker = function(t3) {
    var e2 = r.createGroup();
    return this.markerImage.appendChild(e2), new t3(e2, this.overlayContainer, this.settings);
  }, t2.prototype.createNewMarker = function(t3) {
    var e2, i2 = this;
    (e2 = "string" == typeof t3 ? this._availableMarkerTypes.find((function(e3) {
      return e3.typeName === t3;
    })) : t3) && (this.setCurrentMarker(), this.addUndoStep(), this._currentMarker = this.addNewMarker(e2), this.addMarkerEvents(this._currentMarker), this.markerImage.style.cursor = "crosshair", this.toolbar.setActiveMarkerButton(e2.typeName), this.toolbox.setPanelButtons(this._currentMarker.toolboxPanels), this.eventListeners.markercreating.forEach((function(t4) {
      return t4(new Y(i2, i2._currentMarker));
    })));
  }, t2.prototype.addMarkerEvents = function(t3) {
    t3.onMarkerCreated = this.markerCreated, t3.onColorChanged = this.colorChanged, t3.onFillColorChanged = this.fillColorChanged, t3.onStateChanged = this.markerStateChanged;
  }, t2.prototype.markerCreated = function(t3) {
    var e2 = this;
    this.mode = "select", this.markerImage.style.cursor = "default", this.markers.push(t3), this.setCurrentMarker(t3), t3 instanceof L && this.settings.newFreehandMarkerOnPointerUp ? this.createNewMarker(L) : this.toolbar.setSelectMode(), this.addUndoStep(), this.eventListeners.markercreate.forEach((function(i2) {
      return i2(new Y(e2, t3));
    }));
  }, t2.prototype.colorChanged = function(t3) {
    this.settings.defaultColorsFollowCurrentColors && (this.settings.defaultColor = t3, this.settings.defaultStrokeColor = t3);
  }, t2.prototype.fillColorChanged = function(t3) {
    this.settings.defaultColorsFollowCurrentColors && (this.settings.defaultFillColor = t3);
  }, t2.prototype.markerStateChanged = function(t3) {
    var e2 = this;
    this.eventListeners.markerchange.forEach((function(i2) {
      return i2(new Y(e2, t3));
    }));
  }, t2.prototype.setCurrentMarker = function(t3) {
    var e2 = this;
    this._currentMarker !== t3 && void 0 !== this._currentMarker && (this._currentMarker.deselect(), this.toolbar.setCurrentMarker(), this.toolbox.setPanelButtons([]), this._isResizing || this.eventListeners.markerdeselect.forEach((function(t4) {
      return t4(new Y(e2, e2._currentMarker));
    }))), this._currentMarker = t3, void 0 === this._currentMarker || this._currentMarker.isSelected || ("new" !== this._currentMarker.state && this._currentMarker.select(), this.toolbar.setCurrentMarker(this._currentMarker), this.toolbox.setPanelButtons(this._currentMarker.toolboxPanels), this._isResizing || this.eventListeners.markerselect.forEach((function(t4) {
      return t4(new Y(e2, e2._currentMarker));
    })));
  }, t2.prototype.onPointerDown = function(t3) {
    if (this._isFocused || this.focus(), this.touchPoints++, 1 === this.touchPoints || "touch" !== t3.pointerType) if (void 0 === this._currentMarker || "new" !== this._currentMarker.state && "creating" !== this._currentMarker.state) {
      if ("select" === this.mode) {
        var e2 = this.markers.find((function(e3) {
          return e3.ownsTarget(t3.target);
        }));
        void 0 !== e2 ? (this.setCurrentMarker(e2), this.isDragging = true, this._currentMarker.pointerDown(this.clientToLocalCoordinates(t3.clientX, t3.clientY), t3.target)) : (this.setCurrentMarker(), this.isDragging = true, this.prevPanPoint = { x: t3.clientX, y: t3.clientY });
      }
    } else this.isDragging = true, this._currentMarker.pointerDown(this.clientToLocalCoordinates(t3.clientX, t3.clientY));
  }, t2.prototype.onDblClick = function(t3) {
    if (this._isFocused || this.focus(), "select" === this.mode) {
      var e2 = this.markers.find((function(e3) {
        return e3.ownsTarget(t3.target);
      }));
      void 0 !== e2 && e2 !== this._currentMarker && this.setCurrentMarker(e2), void 0 !== this._currentMarker ? this._currentMarker.dblClick(this.clientToLocalCoordinates(t3.clientX, t3.clientY), t3.target) : this.setCurrentMarker();
    }
  }, t2.prototype.onPointerMove = function(t3) {
    1 !== this.touchPoints && "touch" === t3.pointerType || (void 0 !== this._currentMarker || this.isDragging) && (void 0 !== this._currentMarker && "edit" === this._currentMarker.state || t3.preventDefault(), void 0 !== this._currentMarker ? this._currentMarker.manipulate(this.clientToLocalCoordinates(t3.clientX, t3.clientY)) : this.zoomLevel > 1 && this.panTo({ x: t3.clientX, y: t3.clientY }));
  }, t2.prototype.onPointerUp = function(t3) {
    this.touchPoints > 0 && this.touchPoints--, 0 === this.touchPoints && (this.isDragging && void 0 !== this._currentMarker && (this._currentMarker.pointerUp(this.clientToLocalCoordinates(t3.clientX, t3.clientY)), this.isDragging = false), this.addUndoStep());
  }, t2.prototype.onPointerOut = function() {
    this.touchPoints > 0 && this.touchPoints--;
  }, t2.prototype.onKeyUp = function(t3) {
    void 0 === this._currentMarker || void 0 !== this.notesArea || "Delete" !== t3.key && "Backspace" !== t3.key || this.deleteSelectedMarker();
  }, t2.prototype.clientToLocalCoordinates = function(t3, e2) {
    var i2 = this.markerImage.getBoundingClientRect(), o2 = i2.width / this.imageWidth / this.zoomLevel, s2 = i2.height / this.imageHeight / this.zoomLevel;
    return { x: (t3 - i2.left) / this.zoomLevel / o2, y: (e2 - i2.top) / this.zoomLevel / s2 };
  }, t2.prototype.onWindowResize = function() {
    this.positionUI();
  }, t2.prototype.positionUI = function() {
    switch (this.setTopLeft(), this.settings.displayMode) {
      case "inline":
        var t3 = this.target.getClientRects(), e2 = t3.length > 0 && t3.item(0) && t3.item(0).y > this.styles.settings.toolbarHeight ? this.target.offsetTop - this.styles.settings.toolbarHeight : 0;
        this.coverDiv.style.top = e2 + "px", this.coverDiv.style.left = this.target.offsetLeft.toString() + "px";
        break;
      case "popup":
        this.coverDiv.style.top = "0px", this.coverDiv.style.left = "0px", this.coverDiv.style.width = "100vw", this.coverDiv.style.height = this.windowHeight + "px", this.contentDiv.style.maxHeight = this.windowHeight - 2 * this.settings.popupMargin - 3.5 * this.styles.settings.toolbarHeight + "px";
    }
    this.positionMarkerImage(), this.positionLogo();
  }, t2.prototype.addLicenseKey = function(t3) {
    n.addKey(t3);
  }, t2.prototype.addEventListener = function(t3, e2) {
    this.eventListeners.addEventListener(t3, e2);
  }, t2.prototype.removeEventListener = function(t3, e2) {
    this.eventListeners.removeEventListener(t3, e2);
  }, t2.prototype.renderState = function(t3) {
    this._silentRenderMode = true, this.settings.displayMode = "inline", this.isOpen || this.show(), this.restoreState(t3), this.startRenderAndClose(), this._silentRenderMode = false;
  }, Object.defineProperty(t2.prototype, "isFocused", { get: function() {
    return this._isFocused;
  }, enumerable: false, configurable: true }), t2.prototype.focus = function() {
    var t3 = this;
    this._isFocused || (this.attachWindowEvents(), this._isFocused = true, void 0 !== this._previousCurrentMarker && this.setCurrentMarker(this._previousCurrentMarker), this.eventListeners.focus.forEach((function(e2) {
      return e2(new U(t3));
    })));
  }, t2.prototype.blur = function() {
    var t3 = this;
    this._isFocused && (this.detachWindowEvents(), this._isFocused = false, this._previousCurrentMarker = this._currentMarker, this.setCurrentMarker(), this.eventListeners.blur.forEach((function(e2) {
      return e2(new U(t3));
    })));
  }, t2.instanceCounter = 0, t2;
})();
export {
  n as Activator,
  A as ArrowMarker,
  D as ArrowTypePanel,
  z as CalloutMarker,
  j as CaptionFrameMarker,
  g as ColorPickerPanel,
  _ as CoverMarker,
  F as CurveMarker,
  V as EllipseFrameMarker,
  R as EllipseMarker,
  Z as EventListenerRepository,
  M as FontFamilyPanel,
  w as FrameMarker,
  L as FreehandMarker,
  W as HighlightMarker,
  T as LineMarker,
  k as LineStylePanel,
  S as LineWidthPanel,
  E as LinearMarkerBase,
  K as MarkerArea,
  U as MarkerAreaEvent,
  X as MarkerAreaRenderEvent,
  f as MarkerBase,
  Y as MarkerEvent,
  O as MeasurementMarker,
  I as OpacityPanel,
  x as RectangleMarker,
  b as RectangularBoxMarkerBase,
  v as RectangularBoxMarkerGrips,
  m as ResizeGrip,
  B as Settings,
  h as Style,
  c as StyleClass,
  l as StyleManager,
  r as SvgHelper,
  P as TextMarker,
  y as ToolboxPanel,
  C as TransformMatrix
};
/*! Bundled license information:

markerjs2/markerjs2.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=markerjs2.esm-RNNNTK7Y.js.map
