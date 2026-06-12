import {
  Color,
  GridLayout,
  cubic,
  out,
  p100,
  p50
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";

// node_modules/@amcharts/amcharts5/.internal/themes/DefaultTheme.js
function setColor(rule, key, ic, name) {
  rule.set(key, ic.get(name));
  ic.on(name, (value) => {
    rule.set(key, value);
  });
}
var DefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const language = this._root.language;
    const ic = this._root.interfaceColors;
    const horizontalLayout = this._root.horizontalLayout;
    const verticalLayout = this._root.verticalLayout;
    const r = this.rule.bind(this);
    r("InterfaceColors").setAll({
      stroke: Color.fromHex(15066597),
      fill: Color.fromHex(15987699),
      primaryButton: Color.fromHex(6788316),
      primaryButtonHover: Color.fromHex(6779356),
      primaryButtonDown: Color.fromHex(6872182),
      primaryButtonActive: Color.fromHex(6872182),
      primaryButtonDisabled: Color.fromHex(14342874),
      primaryButtonTextDisabled: Color.fromHex(16777215),
      primaryButtonText: Color.fromHex(16777215),
      primaryButtonStroke: Color.fromHex(16777215),
      secondaryButton: Color.fromHex(14277081),
      secondaryButtonHover: Color.fromHex(10724259),
      secondaryButtonDown: Color.fromHex(9276813),
      secondaryButtonActive: Color.fromHex(15132390),
      secondaryButtonText: Color.fromHex(0),
      secondaryButtonStroke: Color.fromHex(16777215),
      grid: Color.fromHex(0),
      background: Color.fromHex(16777215),
      alternativeBackground: Color.fromHex(0),
      text: Color.fromHex(0),
      alternativeText: Color.fromHex(16777215),
      disabled: Color.fromHex(11382189),
      positive: Color.fromHex(5288704),
      negative: Color.fromHex(11730944)
    });
    {
      const rule = r("ColorSet");
      rule.setAll({
        passOptions: {
          hue: 0.05,
          saturation: 0,
          lightness: 0
        },
        colors: [
          Color.fromHex(6797276)
        ],
        step: 1,
        //baseColor: Color.fromRGB(103, 183, 220),
        //count: 20,
        reuse: false,
        startIndex: 0
      });
      rule.setPrivate("currentStep", 0);
      rule.setPrivate("currentPass", 0);
    }
    r("Entity").setAll({
      stateAnimationDuration: 0,
      stateAnimationEasing: out(cubic)
    });
    r("Component").setAll({
      interpolationDuration: 0,
      interpolationEasing: out(cubic)
    });
    r("Sprite").setAll({
      visible: true,
      scale: 1,
      opacity: 1,
      rotation: 0,
      position: "relative",
      tooltipX: p50,
      tooltipY: p50,
      tooltipPosition: "fixed",
      isMeasured: true
    });
    r("Sprite").states.create("default", { "visible": true, opacity: 1 });
    r("Container").setAll({
      interactiveChildren: true,
      setStateOnChildren: false
    });
    r("Graphics").setAll({
      strokeWidth: 1
    });
    r("Chart").setAll({
      width: p100,
      height: p100,
      interactiveChildren: false
    });
    r("ZoomableContainer").setAll({
      width: p100,
      height: p100,
      wheelable: true,
      pinchZoom: true,
      maxZoomLevel: 32,
      minZoomLevel: 1,
      zoomStep: 2,
      animationEasing: out(cubic),
      animationDuration: 600,
      maxPanOut: 0.4
    });
    r("Sprite", ["horizontal", "center"]).setAll({
      centerX: p50,
      x: p50
    });
    r("Sprite", ["vertical", "center"]).setAll({
      centerY: p50,
      y: p50
    });
    r("Container", ["horizontal", "layout"]).setAll({
      layout: horizontalLayout
    });
    r("Container", ["vertical", "layout"]).setAll({
      layout: verticalLayout
    });
    r("Pattern").setAll({
      repetition: "repeat",
      width: 50,
      height: 50,
      rotation: 0,
      fillOpacity: 1
    });
    r("LinePattern").setAll({
      gap: 6,
      colorOpacity: 1,
      width: 49,
      height: 49
    });
    r("RectanglePattern").setAll({
      gap: 6,
      checkered: false,
      centered: true,
      maxWidth: 5,
      maxHeight: 5,
      width: 48,
      height: 48,
      strokeWidth: 0
    });
    r("CirclePattern").setAll({
      gap: 5,
      checkered: false,
      centered: false,
      radius: 3,
      strokeWidth: 0,
      width: 45,
      height: 45
    });
    r("GrainPattern").setAll({
      width: 200,
      height: 200,
      colors: [Color.fromHex(0)],
      size: 1,
      horizontalGap: 0,
      verticalGap: 0,
      density: 1,
      minOpacity: 0,
      maxOpacity: 0.2
    });
    {
      const rule = r("PatternSet");
      rule.setAll({
        step: 1
      });
      setColor(rule, "color", ic, "stroke");
    }
    r("LinearGradient").setAll({
      rotation: 90
    });
    r("Legend").setAll({
      fillField: "fill",
      strokeField: "stroke",
      nameField: "name",
      layout: GridLayout.new(this._root, {}),
      layer: 30,
      clickTarget: "itemContainer"
    });
    r("Container", ["legend", "item", "itemcontainer"]).setAll({
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 5,
      paddingTop: 5,
      layout: horizontalLayout,
      setStateOnChildren: true,
      interactiveChildren: false,
      ariaChecked: true,
      focusable: true,
      ariaLabel: language.translate("Press ENTER to toggle"),
      role: "checkbox"
    });
    {
      const rule = r("Rectangle", ["legend", "item", "background"]);
      rule.setAll({
        fillOpacity: 0
      });
      setColor(rule, "fill", ic, "background");
    }
    r("Container", ["legend", "marker"]).setAll({
      setStateOnChildren: true,
      centerY: p50,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 0,
      width: 18,
      height: 18
    });
    r("RoundedRectangle", ["legend", "marker", "rectangle"]).setAll({
      width: p100,
      height: p100,
      cornerRadiusBL: 3,
      cornerRadiusTL: 3,
      cornerRadiusBR: 3,
      cornerRadiusTR: 3
    });
    {
      const rule = r("RoundedRectangle", ["legend", "marker", "rectangle"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "disabled");
      setColor(rule, "stroke", ic, "disabled");
    }
    r("Label", ["legend", "label"]).setAll({
      centerY: p50,
      marginLeft: 5,
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      populateText: true
    });
    {
      const rule = r("Label", ["legend", "label"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "disabled");
    }
    r("Label", ["legend", "value", "label"]).setAll({
      centerY: p50,
      marginLeft: 5,
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: 50,
      centerX: p100,
      populateText: true
    });
    {
      const rule = r("Label", ["legend", "value", "label"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "disabled");
    }
    r("HeatLegend").setAll({
      stepCount: 1
    });
    r("RoundedRectangle", ["heatlegend", "marker"]).setAll({
      cornerRadiusTR: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusBL: 0
    });
    r("RoundedRectangle", ["vertical", "heatlegend", "marker"]).setAll({
      height: p100,
      width: 15
    });
    r("RoundedRectangle", ["horizontal", "heatlegend", "marker"]).setAll({
      width: p100,
      height: 15
    });
    r("HeatLegend", ["vertical"]).setAll({
      height: p100
    });
    r("HeatLegend", ["horizontal"]).setAll({
      width: p100
    });
    r("Label", ["heatlegend", "start"]).setAll({
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      paddingBottom: 5
    });
    r("Label", ["heatlegend", "end"]).setAll({
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      paddingBottom: 5
    });
    {
      const rule = r("Label");
      rule.setAll({
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: "1em",
        populateText: false
      });
      setColor(rule, "fill", ic, "text");
    }
    r("RadialLabel").setAll({
      textType: "regular",
      centerY: p50,
      centerX: p50,
      inside: false,
      radius: 0,
      baseRadius: p100,
      orientation: "auto",
      textAlign: "center"
    });
    r("EditableLabel").setAll({
      editOn: "click",
      //setStateOnChildren: true,
      themeTags: ["editablelabel"],
      multiLine: true
    });
    r("RoundedRectangle", ["editablelabel", "background"]).setAll({
      fillOpacity: 0,
      fill: Color.fromHex(0),
      cornerRadiusBL: 3,
      cornerRadiusBR: 3,
      cornerRadiusTL: 3,
      cornerRadiusTR: 3,
      strokeOpacity: 0,
      stroke: Color.fromHex(0)
    });
    {
      r("RoundedRectangle", ["editablelabel", "background"]).states.create("active", {
        strokeOpacity: 0.2
      });
    }
    r("RoundedRectangle").setAll({
      cornerRadiusTL: 8,
      cornerRadiusBL: 8,
      cornerRadiusTR: 8,
      cornerRadiusBR: 8
    });
    r("PointedRectangle").setAll({
      pointerBaseWidth: 15,
      pointerLength: 10,
      cornerRadius: 8
    });
    r("Slice").setAll({
      shiftRadius: 0,
      dRadius: 0,
      dInnerRadius: 0
    });
    {
      const rule = r("Tick");
      rule.setAll({
        strokeOpacity: 0.15,
        isMeasured: false,
        length: 4.5,
        position: "absolute",
        crisp: true
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("Bullet").setAll({
      locationX: 0.5,
      locationY: 0.5
    });
    r("Tooltip").setAll({
      position: "absolute",
      getFillFromSprite: true,
      getStrokeFromSprite: false,
      autoTextColor: true,
      paddingTop: 9,
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 5,
      pointerOrientation: "vertical",
      centerX: p50,
      centerY: p50,
      animationEasing: out(cubic),
      exportable: false
      //layer: 100
    });
    r("Polygon").setAll({
      animationEasing: out(cubic)
    });
    {
      const rule = r("PointedRectangle", ["tooltip", "background"]);
      rule.setAll({
        strokeOpacity: 0.9,
        cornerRadius: 4,
        pointerLength: 4,
        pointerBaseWidth: 8,
        fillOpacity: 0.9,
        stroke: Color.fromHex(16777215)
      });
    }
    {
      const rule = r("Label", ["tooltip"]);
      rule.setAll({
        role: "tooltip",
        populateText: true,
        paddingRight: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    r("Button").setAll({
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 10,
      interactive: true,
      layout: horizontalLayout,
      interactiveChildren: false,
      setStateOnChildren: true,
      focusable: true
    });
    r("Button").states.create("hover", {});
    r("Button").states.create("down", { stateAnimationDuration: 0 });
    r("Button").states.create("active", {});
    r("Button").states.create("disabled", {
      forceInactive: true
    });
    {
      const rule = r("RoundedRectangle", ["button", "background"]);
      setColor(rule, "fill", ic, "primaryButton");
      setColor(rule, "stroke", ic, "primaryButtonStroke");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("hover", {});
      setColor(rule, "fill", ic, "primaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("down", { stateAnimationDuration: 0 });
      setColor(rule, "fill", ic, "primaryButtonDown");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("active", {});
      setColor(rule, "fill", ic, "primaryButtonActive");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "primaryButtonDisabled");
    }
    {
      const rule = r("Graphics", ["button", "icon"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "primaryButtonTextDisabled");
    }
    {
      const rule = r("Label", ["button"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "primaryButtonTextDisabled");
    }
    {
      const rule = r("Graphics", ["button", "icon"]);
      rule.setAll({
        forceInactive: true
      });
      setColor(rule, "stroke", ic, "primaryButtonText");
    }
    {
      const rule = r("Label", ["button"]);
      setColor(rule, "fill", ic, "primaryButtonText");
    }
    r("Button", ["zoom"]).setAll({
      paddingTop: 18,
      paddingBottom: 18,
      paddingLeft: 12,
      paddingRight: 12,
      centerX: 46,
      centerY: -10,
      y: 0,
      x: p100,
      role: "button",
      ariaLabel: language.translate("Zoom Out"),
      layer: 30
    });
    {
      const rule = r("RoundedRectangle", ["background", "button", "zoom"]);
      rule.setAll({
        cornerRadiusBL: 40,
        cornerRadiusBR: 40,
        cornerRadiusTL: 40,
        cornerRadiusTR: 40
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("RoundedRectangle", ["background", "button", "zoom"]).states.create("hover", {});
      setColor(rule, "fill", ic, "primaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["background", "button", "zoom"]).states.create("down", { stateAnimationDuration: 0 });
      setColor(rule, "fill", ic, "primaryButtonDown");
    }
    {
      const rule = r("Graphics", ["icon", "button", "zoom"]);
      rule.setAll({
        crisp: true,
        strokeOpacity: 0.7,
        draw: (display) => {
          display.moveTo(0, 0);
          display.lineTo(12, 0);
        }
      });
      setColor(rule, "stroke", ic, "primaryButtonText");
    }
    r("Button", ["resize"]).setAll({
      paddingTop: 9,
      paddingBottom: 9,
      paddingLeft: 13,
      paddingRight: 13,
      draggable: true,
      centerX: p50,
      centerY: p50,
      position: "absolute",
      role: "slider",
      ariaValueMin: "0",
      ariaValueMax: "100",
      ariaLabel: language.translate("Use up and down arrows to move selection")
    });
    {
      const rule = r("RoundedRectangle", ["background", "resize", "button"]);
      rule.setAll({
        cornerRadiusBL: 40,
        cornerRadiusBR: 40,
        cornerRadiusTL: 40,
        cornerRadiusTR: 40
      });
      setColor(rule, "fill", ic, "secondaryButton");
      setColor(rule, "stroke", ic, "secondaryButtonStroke");
    }
    {
      const rule = r("RoundedRectangle", ["background", "resize", "button"]).states.create("hover", {});
      setColor(rule, "fill", ic, "secondaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["background", "resize", "button"]).states.create("down", { stateAnimationDuration: 0 });
      setColor(rule, "fill", ic, "secondaryButtonDown");
    }
    {
      const rule = r("Graphics", ["resize", "button", "icon"]);
      rule.setAll({
        interactive: false,
        crisp: true,
        strokeOpacity: 0.5,
        draw: (display) => {
          display.moveTo(0, 0.5);
          display.lineTo(0, 12.5);
          display.moveTo(4, 0.5);
          display.lineTo(4, 12.5);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
    }
    r("Button", ["resize", "vertical"]).setAll({
      rotation: 90,
      cursorOverStyle: "ns-resize"
    });
    r("Button", ["resize", "horizontal"]).setAll({
      cursorOverStyle: "ew-resize"
    });
    r("Button", ["play"]).setAll({
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 14,
      paddingRight: 14,
      ariaLabel: language.translate("Play"),
      toggleKey: "active"
    });
    {
      const rule = r("RoundedRectangle", ["play", "background"]);
      rule.setAll({
        strokeOpacity: 0.5,
        cornerRadiusBL: 100,
        cornerRadiusBR: 100,
        cornerRadiusTL: 100,
        cornerRadiusTR: 100
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("Graphics", ["play", "icon"]);
      rule.setAll({
        stateAnimationDuration: 0,
        dx: 1,
        draw: (display) => {
          display.moveTo(0, -5);
          display.lineTo(8, 0);
          display.lineTo(0, 5);
          display.lineTo(0, -5);
        }
      });
      setColor(rule, "fill", ic, "primaryButtonText");
    }
    r("Graphics", ["play", "icon"]).states.create("default", {
      stateAnimationDuration: 0
    });
    r("Graphics", ["play", "icon"]).states.create("active", {
      stateAnimationDuration: 0,
      draw: (display) => {
        display.moveTo(-4, -5);
        display.lineTo(-1, -5);
        display.lineTo(-1, 5);
        display.lineTo(-4, 5);
        display.lineTo(-4, -5);
        display.moveTo(4, -5);
        display.lineTo(1, -5);
        display.lineTo(1, 5);
        display.lineTo(4, 5);
        display.lineTo(4, -5);
      }
    });
    r("Button", ["switch"]).setAll({
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      ariaLabel: language.translate("Press ENTER to toggle"),
      toggleKey: "active",
      width: 40,
      height: 24,
      layout: null
    });
    {
      const rule = r("RoundedRectangle", ["switch", "background"]);
      rule.setAll({
        strokeOpacity: 0.5,
        cornerRadiusBL: 100,
        cornerRadiusBR: 100,
        cornerRadiusTL: 100,
        cornerRadiusTR: 100
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("Circle", ["switch", "icon"]);
      rule.setAll({
        radius: 8,
        centerY: 0,
        centerX: 0,
        dx: 0
      });
      setColor(rule, "fill", ic, "primaryButtonText");
    }
    r("Graphics", ["switch", "icon"]).states.create("active", {
      dx: 16
    });
    r("Scrollbar").setAll({
      start: 0,
      end: 1,
      layer: 30,
      animationEasing: out(cubic)
    });
    r("Scrollbar", ["vertical"]).setAll({
      marginRight: 13,
      marginLeft: 13,
      minWidth: 12,
      height: p100
    });
    r("Scrollbar", ["horizontal"]).setAll({
      marginTop: 13,
      marginBottom: 13,
      minHeight: 12,
      width: p100
    });
    this.rule("Button", ["scrollbar"]).setAll({
      exportable: false
    });
    {
      const rule = r("RoundedRectangle", ["scrollbar", "main", "background"]);
      rule.setAll({
        cornerRadiusTL: 8,
        cornerRadiusBL: 8,
        cornerRadiusTR: 8,
        cornerRadiusBR: 8,
        fillOpacity: 0.8
      });
      setColor(rule, "fill", ic, "fill");
    }
    {
      const rule = r("RoundedRectangle", ["scrollbar", "thumb"]);
      rule.setAll({
        role: "slider",
        ariaLive: "polite",
        position: "absolute",
        draggable: true
      });
      setColor(rule, "fill", ic, "secondaryButton");
    }
    {
      const rule = r("RoundedRectangle", ["scrollbar", "thumb"]).states.create("hover", {});
      setColor(rule, "fill", ic, "secondaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["scrollbar", "thumb"]).states.create("down", { stateAnimationDuration: 0 });
      setColor(rule, "fill", ic, "secondaryButtonDown");
    }
    r("RoundedRectangle", ["scrollbar", "thumb", "vertical"]).setAll({
      x: p50,
      width: p100,
      centerX: p50,
      ariaLabel: language.translate("Use up and down arrows to move selection")
    });
    r("RoundedRectangle", ["scrollbar", "thumb", "horizontal"]).setAll({
      y: p50,
      centerY: p50,
      height: p100,
      ariaLabel: language.translate("Use left and right arrows to move selection")
    });
    {
      const rule = r("PointedRectangle", ["axis", "tooltip", "background"]);
      rule.setAll({
        cornerRadius: 0
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("Label", ["axis", "tooltip"]).setAll({
      role: void 0
    });
    r("Label", ["axis", "tooltip", "y"]).setAll({
      textAlign: "right"
    });
    r("Label", ["axis", "tooltip", "y", "opposite"]).setAll({
      textAlign: "left"
    });
    r("Label", ["axis", "tooltip", "x"]).setAll({
      textAlign: "center"
    });
    r("Tooltip", ["categoryaxis"]).setAll({
      labelText: "{category}"
    });
    r("Star").setAll({
      spikes: 5,
      innerRadius: 5,
      radius: 10
    });
    r("Tooltip", ["stock"]).setAll({
      paddingTop: 6,
      paddingBottom: 5,
      paddingLeft: 7,
      paddingRight: 7
    });
    r("Tooltip", ["indicator"]).setAll({
      forceHidden: true
    });
    r("PointedRectangle", ["tooltip", "stock", "axis"]).setAll({
      pointerLength: 0,
      pointerBaseWidth: 0,
      cornerRadius: 3
    });
    r("Label", ["tooltip", "stock"]).setAll({
      fontSize: "0.8em"
    });
    r("SpriteResizer").setAll({
      rotationStep: 10,
      isMeasured: false
    });
    {
      const rule = r("Container", ["resizer", "grip"]);
      rule.states.create("hover", {});
    }
    {
      const rule = r("RoundedRectangle", ["resizer", "grip"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 1,
        fillOpacity: 1,
        width: 12,
        height: 12
      });
      setColor(rule, "fill", ic, "background");
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    {
      const rule = r("RoundedRectangle", ["resizer", "grip", "outline"]);
      rule.setAll({
        strokeOpacity: 0,
        fillOpacity: 0,
        width: 20,
        height: 20
      });
      rule.states.create("hover", {
        fillOpacity: 0.3
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("RoundedRectangle", ["resizer", "grip", "left"]).setAll({
      cornerRadiusBL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusTR: 0
    });
    r("RoundedRectangle", ["resizer", "grip", "right"]).setAll({
      cornerRadiusBL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusTR: 0
    });
    {
      const rule = r("Rectangle", ["resizer", "rectangle"]);
      rule.setAll({
        strokeDasharray: [2, 2],
        strokeOpacity: 0.5,
        strokeWidth: 1
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    r("Graphics", ["button", "plus", "icon"]).setAll({
      x: p50,
      y: p50,
      draw: (display) => {
        display.moveTo(-4, 0);
        display.lineTo(4, 0);
        display.moveTo(0, -4);
        display.lineTo(0, 4);
      }
    });
    r("Graphics", ["button", "minus", "icon"]).setAll({
      x: p50,
      y: p50,
      draw: (display) => {
        display.moveTo(-4, 0);
        display.lineTo(4, 0);
      }
    });
    r("Graphics", ["button", "home", "icon"]).setAll({
      x: p50,
      y: p50,
      svgPath: "M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"
    });
    r("Button", ["zoomtools"]).setAll({
      marginTop: 1,
      marginBottom: 2
    });
    r("ZoomTools").setAll({
      x: p100,
      centerX: p100,
      y: p100,
      centerY: p100,
      paddingRight: 10,
      paddingBottom: 10
    });
  }
};

export {
  setColor,
  DefaultTheme
};
//# sourceMappingURL=chunk-XOW4XAJF.js.map
