import "./chunk-AOXJJ7PT.js";
import {
  ascending,
  bisector,
  descending,
  tickStep
} from "./chunk-RVKSIHD3.js";
import "./chunk-PTBHZ5ZK.js";
import {
  cubehelix,
  cubehelixLong,
  rgb,
  rgbBasis
} from "./chunk-FLUOPSER.js";
import "./chunk-TZ7OVMR6.js";
import {
  LinearGradient
} from "./chunk-BYMJBLOE.js";
import {
  Slice
} from "./chunk-HNJ7BFJ7.js";
import {
  Circle
} from "./chunk-3HN5RVOK.js";
import {
  curveMonotoneXTension,
  curveMonotoneYTension
} from "./chunk-XUZ6UAUT.js";
import {
  RadialLabel
} from "./chunk-AHDXI7TZ.js";
import {
  area_default,
  line_default,
  path
} from "./chunk-TSCKTQIQ.js";
import {
  RoundedRectangle
} from "./chunk-E32SSC6Z.js";
import {
  ColorSet
} from "./chunk-AVJ6LU7H.js";
import {
  Series
} from "./chunk-JFXPNH7X.js";
import "./chunk-CRL5FSBR.js";
import {
  setColor
} from "./chunk-XOW4XAJF.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Container,
  DEGREES,
  Graphics,
  ListTemplate,
  Percent,
  RADIANS,
  cos,
  cubic,
  getAngle,
  getPointOnLine,
  getPointOnQuadraticCurve,
  mergeTags,
  out,
  p100,
  p50,
  percent,
  relativeToValue,
  round,
  sin,
  tan
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  isNumber
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/flow/FlowDefaultTheme.js
var FlowDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const r = this.rule.bind(this);
    r("Flow").setAll({
      width: p100,
      height: p100,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      hiddenSize: 0.05,
      minSize: 0,
      minHiddenValue: 0
    });
    r("FlowNodes").setAll({
      colors: ColorSet.new(this._root, {}),
      legendLabelText: "{name}",
      legendValueText: "{sumOutgoing.formatNumber('#.#')}"
    });
    r("FlowNode").setAll({
      setStateOnChildren: true,
      cursorOverStyle: "pointer",
      toggleKey: "disabled"
    });
    r("FlowNode").states.create("disabled", {});
    r("FlowNode", ["unknown"]).setAll({
      draggable: false,
      opacity: 0
    });
    r("Label", ["flow"]).states.create("disabled", {
      fill: ic.get("disabled")
    });
    r("RadialLabel", ["flow", "node"]).setAll({
      text: "{name}",
      populateText: true
    });
    r("FlowLink").setAll({
      fillStyle: "gradient",
      strokeStyle: "gradient"
    });
    r("FlowLink", ["source", "unknown"]).setAll({});
    r("FlowLink", ["target", "unknown"]).setAll({});
    r("FlowNode").events.on("pointerover", (e) => {
      const dataItem = e.target.dataItem;
      if (dataItem) {
        const outgoing = dataItem.get("outgoingLinks");
        if (outgoing) {
          each(outgoing, (linkDataItem) => {
            const link = linkDataItem.get("link");
            link.hover();
            link.hideTooltip();
          });
        }
        const incoming = dataItem.get("incomingLinks");
        if (incoming) {
          each(incoming, (linkDataItem) => {
            const link = linkDataItem.get("link");
            link.hover();
            link.hideTooltip();
          });
        }
      }
      let rectangle = dataItem.get("slice") || dataItem.get("rectangle");
      if (rectangle && rectangle.get("tooltipText")) {
        rectangle.showTooltip();
      }
    });
    r("FlowNode").events.on("pointerout", (e) => {
      const dataItem = e.target.dataItem;
      if (dataItem) {
        const outgoing = dataItem.get("outgoingLinks");
        if (outgoing) {
          each(outgoing, (linkDataItem) => {
            linkDataItem.get("link").unhover();
          });
        }
        const incoming = dataItem.get("incomingLinks");
        if (incoming) {
          each(incoming, (linkDataItem) => {
            linkDataItem.get("link").unhover();
          });
        }
      }
    });
    r("Sankey").setAll({
      orientation: "horizontal",
      nodeAlign: "justify",
      linkTension: 0.5,
      nodePadding: 10,
      nodeWidth: 10
    });
    r("RoundedRectangle", ["sankey", "node", "shape"]).setAll({
      cornerRadiusTL: 0,
      cornerRadiusBL: 0,
      cornerRadiusTR: 0,
      cornerRadiusBR: 0
    });
    r("RoundedRectangle", ["shape"]).states.create("disabled", {
      fill: ic.get("disabled")
    });
    r("SankeyLink").setAll({
      controlPointDistance: 0.2
    });
    r("FlowNode", ["sankey"]).setAll({
      draggable: true
    });
    {
      const rule = r("Graphics", ["sankey", "link"]);
      rule.setAll({
        fillOpacity: 0.2,
        strokeOpacity: 0,
        interactive: true,
        tooltipText: "{sourceId} - {targetId}: {value}"
      });
      setColor(rule, "fill", ic, "grid");
    }
    r("Graphics", ["sankey", "link"]).states.create("hover", { fillOpacity: 0.5 });
    r("Label", ["sankey", "node"]).setAll({
      text: "{name}",
      populateText: true
    });
    r("Label", ["sankey", "horizontal"]).setAll({
      y: p50,
      centerY: p50,
      paddingLeft: 15
    });
    r("Label", ["sankey", "vertical"]).setAll({
      x: p50,
      centerX: p50,
      paddingTop: 15
    });
    r("Chord").setAll({
      radius: percent(90),
      nodeWidth: 10,
      padAngle: 1,
      startAngle: 0,
      sort: "none"
    });
    r("ChordDirected").setAll({
      linkHeadRadius: 10
    });
    r("ChordNodes").setAll({
      x: p50,
      y: p50
    });
    r("FlowNode", ["chord"]).setAll({
      draggable: true
    });
    r("ChordLink").setAll({
      sourceRadius: p100,
      targetRadius: p100,
      fillStyle: "solid",
      strokeStyle: "solid",
      tooltipText: "{sourceId} - {targetId}: {value}"
    });
    r("Slice", ["chord", "node", "shape"]).setAll({
      cornerRadius: 0
    });
    r("Slice", ["shape"]).states.create("disabled", {
      fill: ic.get("disabled")
    });
    r("RadialLabel", ["chord", "node"]).setAll({
      radius: 5,
      textType: "circular"
    });
    r("ChordLinkDirected").setAll({
      headRadius: 10
    });
    {
      const rule = r("Graphics", ["chord", "link", "shape"]);
      rule.setAll({
        fillOpacity: 0.2,
        strokeOpacity: 0,
        interactive: true
      });
      setColor(rule, "fill", ic, "grid");
      setColor(rule, "stroke", ic, "grid");
    }
    r("Graphics", ["chord", "link", "shape"]).states.create("hover", { fillOpacity: 0.5 });
    r("ChordNonRibbon").setAll({
      linkType: "curve"
      // "line" | "curve"
    });
    r("ChordLink", ["basic"]).setAll({
      fillStyle: "none",
      strokeStyle: "source"
    });
    r("Graphics", ["chord", "link", "shape", "basic"]).setAll({
      strokeOpacity: 0.4
    });
    r("Graphics", ["chord", "link", "shape", "basic"]).states.create("hover", { strokeWidth: 2, strokeOpacity: 1 });
    r("ArcDiagram").setAll({
      orientation: "horizontal",
      nodePadding: 5,
      minRadius: 5,
      radiusKey: "sum",
      animationEasing: out(cubic)
    });
    r("ArcDiagramNodes", ["horizontal"]).setAll({
      y: p100,
      centerY: p100
    });
    r("ArcDiagramNodes", ["vertical"]).setAll({
      centerX: 0
    });
    r("Circle", ["arcdiagram", "node", "shape"]).setAll({
      tooltipText: "{name}: {sum}"
    });
    r("Circle", ["arcdiagram", "node", "shape"]).states.create("disabled", {
      fill: ic.get("disabled")
    });
    {
      const rule = r("ArcDiagramLink", ["link", "shape"]);
      rule.setAll({
        strokeOpacity: 0.15,
        strokeStyle: "solid",
        fillStyle: "none",
        isMeasured: false
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("ArcDiagramLink", ["link", "shape"]).states.create("hover", {
      strokeOpacity: 1
    });
    r("Label", ["arcdiagram", "node"]).setAll({
      text: "{name}",
      populateText: true
    });
    r("Label", ["arcdiagram", "horizontal"]).setAll({
      y: 0,
      centerY: p50,
      centerX: p100,
      rotation: -90
    });
    r("Label", ["arcdiagram", "vertical"]).setAll({
      centerY: p50,
      centerX: p100,
      paddingRight: 15
    });
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/flow/Flow.js
var Flow = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "linksContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "_nodesData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_linksData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_nodesDataSet", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_linksByIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._defaultThemes.push(FlowDefaultTheme.new(this._root));
    this.fields.push("disabled", "sourceId", "targetId");
    if (this.nodes) {
      this.nodes.flow = this;
    }
    super._afterNew();
    this.children.push(this.bulletsContainer);
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const nodes = this.nodes;
    if (nodes) {
      let unknown = false;
      let sourceId = dataItem.get("sourceId");
      let sourceDataItem = nodes.getDataItemById(sourceId);
      if (!sourceDataItem) {
        if (sourceId == null) {
          sourceId = "undefined" + this._index;
          this._index++;
          unknown = true;
        }
        nodes.data.push({ id: sourceId, unknown });
        sourceDataItem = nodes.getDataItemById(sourceId);
        if (!unknown) {
          sourceDataItem.set("name", sourceId);
        }
      }
      unknown = false;
      let targetId = dataItem.get("targetId");
      let targetDataItem = nodes.getDataItemById(targetId);
      if (!targetDataItem) {
        if (targetId == null) {
          targetId = "undefined" + this._index;
          this._index++;
          unknown = true;
        }
        nodes.data.push({ id: targetId, unknown });
        targetDataItem = nodes.getDataItemById(targetId);
        if (!unknown) {
          targetDataItem.set("name", targetId);
        }
      }
      if (sourceDataItem) {
        dataItem.set("source", sourceDataItem);
        nodes.addOutgoingLink(sourceDataItem, dataItem);
      }
      if (targetDataItem) {
        dataItem.set("target", targetDataItem);
        nodes.addincomingLink(targetDataItem, dataItem);
      }
      dataItem.set("link", this.makeLink(dataItem));
      const sourceIndex = this.nodes.dataItems.indexOf(sourceDataItem);
      const targetIndex = this.nodes.dataItems.indexOf(targetDataItem);
      this._linksByIndex[sourceIndex + "_" + targetIndex] = dataItem;
      if (sourceDataItem.get("unknown")) {
        if (targetDataItem) {
          sourceDataItem.set("fill", targetDataItem.get("fill"));
        }
        dataItem.get("link").set("fillStyle", "gradient");
      }
      if (targetDataItem.get("unknown")) {
        if (sourceDataItem) {
          targetDataItem.set("fill", sourceDataItem.get("fill"));
        }
        dataItem.get("link").set("fillStyle", "gradient");
      }
      this._updateLinkColor(dataItem);
    }
  }
  _onDataClear() {
    if (!this.nodes._userDataSet) {
      this.nodes.data.setAll([]);
      this.nodes._userDataSet = false;
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    let valueLow = Infinity;
    let valueHigh = -Infinity;
    let valueSum = 0;
    if (this._valuesDirty) {
      this._nodesData = [];
      const nodes = this.nodes;
      if (nodes) {
        each(nodes.dataItems, (dataItem) => {
          const d3SankeyNode = dataItem.get("d3SankeyNode");
          this._nodesData.push(d3SankeyNode);
          const incoming = dataItem.get("incomingLinks");
          let sumIncoming = 0;
          let sumIncomingWorking = 0;
          if (incoming) {
            each(incoming, (link) => {
              const value2 = link.get("value");
              const workingValue = link.get("valueWorking");
              sumIncoming += value2;
              sumIncomingWorking += workingValue;
            });
          }
          dataItem.set("sumIncoming", sumIncoming);
          dataItem.set("sumIncomingWorking", sumIncomingWorking);
          const outgoing = dataItem.get("outgoingLinks");
          let sumOutgoing = 0;
          let sumOutgoingWorking = 0;
          if (outgoing) {
            each(outgoing, (link) => {
              const value2 = link.get("value");
              const workingValue = link.get("valueWorking");
              sumOutgoing += value2;
              sumOutgoingWorking += workingValue;
            });
          }
          dataItem.set("sumOutgoing", sumOutgoing);
          dataItem.set("sumOutgoingWorking", sumOutgoingWorking);
          dataItem.set("sum", sumIncoming + sumOutgoing);
          dataItem.set("sumWorking", sumIncomingWorking + sumOutgoingWorking);
          nodes.updateLegendValue(dataItem);
        });
      }
      this._linksData = [];
      each(this.dataItems, (dataItem) => {
        let value2 = dataItem.get("value");
        if (isNumber(value2)) {
          if (value2 < valueLow) {
            valueLow = value2;
          }
          if (value2 > valueHigh) {
            valueHigh = value2;
          }
          valueSum += value2;
        }
      });
      each(this.dataItems, (dataItem) => {
        let value2 = dataItem.get("value");
        if (isNumber(value2)) {
          let valueWorking = dataItem.get("valueWorking");
          let minSize = this.get("minSize", 0);
          if (minSize > 0) {
            if (valueWorking < minSize * valueSum) {
              valueWorking = minSize * valueSum;
            }
          }
          let d3SankeyLink = { source: dataItem.get("source").get("d3SankeyNode"), target: dataItem.get("target").get("d3SankeyNode"), value: valueWorking };
          dataItem.setRaw("d3SankeyLink", d3SankeyLink);
          this._linksData.push(d3SankeyLink);
          this.updateLegendValue(dataItem);
        }
      });
      this.setPrivateRaw("valueHigh", valueHigh);
      this.setPrivateRaw("valueLow", valueLow);
      this.setPrivateRaw("valueSum", valueSum);
    }
  }
  _updateLinkColor(dataItem) {
    const link = dataItem.get("link");
    const fillStyle = link.get("fillStyle");
    const strokeStyle = link.get("strokeStyle");
    const source = dataItem.get("source");
    const target = dataItem.get("target");
    const sourceFill = source.get("fill");
    const targetFill = target.get("fill");
    link.remove("fillGradient");
    link.remove("strokeGradient");
    switch (fillStyle) {
      case "solid":
        link._applyTemplates();
        break;
      case "source":
        link.set("fill", sourceFill);
        break;
      case "target":
        link.set("fill", targetFill);
        break;
      case "gradient":
        let gradient = link._fillGradient;
        if (!gradient) {
          gradient = LinearGradient.new(this._root, {});
        }
        const sourceStop = { color: sourceFill };
        if (source.get("unknown")) {
          sourceStop.opacity = 0;
        }
        const targetStop = { color: targetFill };
        if (target.get("unknown")) {
          targetStop.opacity = 0;
        }
        gradient.set("stops", [sourceStop, targetStop]);
        link._fillGradient = gradient;
        link.set("fillGradient", gradient);
        break;
      case "none":
        link.set("fill", void 0);
        break;
    }
    switch (strokeStyle) {
      case "solid":
        link._applyTemplates();
        break;
      case "source":
        link.set("stroke", sourceFill);
        break;
      case "target":
        link.set("stroke", targetFill);
        break;
      case "gradient":
        let gradient = link._strokeGradient;
        if (!gradient) {
          gradient = LinearGradient.new(this._root, {});
          const sourceStop = { color: sourceFill };
          if (source.get("unknown")) {
            sourceStop.opacity = 0;
          }
          const targetStop = { color: targetFill };
          if (target.get("unknown")) {
            targetStop.opacity = 0;
          }
          gradient.set("stops", [sourceStop, targetStop]);
          link._strokeGradient = gradient;
        }
        link.set("strokeGradient", gradient);
        break;
      case "none":
        link.remove("stroke");
        break;
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    let link = dataItem.get("link");
    if (link) {
      this.links.removeValue(link);
      link.dispose();
    }
  }
  /**
   * Shows diagram's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  hideDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: { get: () => super.hideDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const hiddenState = this.states.create("hidden", {});
      const stateAnimationDuration = "stateAnimationDuration";
      const stateAnimationEasing = "stateAnimationEasing";
      if (!isNumber(duration)) {
        duration = hiddenState.get(stateAnimationDuration, this.get(stateAnimationDuration, 0));
      }
      const easing = hiddenState.get(stateAnimationEasing, this.get(stateAnimationEasing));
      promises.push(dataItem.animate({
        key: "valueWorking",
        to: Math.max(this.get("minHiddenValue", 0), this.get("hiddenSize", 0) * dataItem.get("value")),
        duration,
        easing
      }).waitForStop());
      const linkGraphics = dataItem.get("link");
      linkGraphics.hide();
      yield Promise.all(promises);
    });
  }
  /**
   * Shows diagram's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  showDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: { get: () => super.showDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      if (!isNumber(duration)) {
        duration = this.get("stateAnimationDuration", 0);
      }
      const easing = this.get("stateAnimationEasing");
      promises.push(dataItem.animate({ key: "valueWorking", to: dataItem.get("value"), duration, easing }).waitForStop());
      const linkGraphics = dataItem.get("link");
      linkGraphics.show();
      yield Promise.all(promises);
    });
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      if (dataItem) {
        const link = dataItem.get("link");
        const sprite2 = bullet.get("sprite");
        if (sprite2) {
          const point6 = link.getPoint(this._getBulletLocation(bullet));
          sprite2.setAll({ x: point6.x, y: point6.y });
          if (bullet.get("autoRotate")) {
            sprite2.set("rotation", point6.angle + bullet.get("autoRotateAngle", 0));
          }
        }
      }
    }
  }
  _getBulletLocation(bullet) {
    return bullet.get("locationY", 0);
  }
};
Object.defineProperty(Flow, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Flow"
});
Object.defineProperty(Flow, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([Flow.className])
});

// node_modules/d3-chord/src/math.js
var abs = Math.abs;
var cos2 = Math.cos;
var sin2 = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;
var epsilon = 1e-12;

// node_modules/d3-chord/src/chord.js
function range(i, j) {
  return Array.from({ length: j - i }, (_, k2) => i + k2);
}
function compareValue(compare) {
  return function(a2, b) {
    return compare(
      a2.source.value + a2.target.value,
      b.source.value + b.target.value
    );
  };
}
function chord_default() {
  return chord(false, false);
}
function chordDirected() {
  return chord(true, false);
}
function chord(directed, transpose) {
  var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
  function chord2(matrix) {
    var n = matrix.length, groupSums = new Array(n), groupIndex = range(0, n), chords = new Array(n * n), groups2 = new Array(n), k2 = 0, dx;
    matrix = Float64Array.from({ length: n * n }, transpose ? (_, i) => matrix[i % n][i / n | 0] : (_, i) => matrix[i / n | 0][i % n]);
    for (let i = 0; i < n; ++i) {
      let x2 = 0;
      for (let j = 0; j < n; ++j) x2 += matrix[i * n + j] + directed * matrix[j * n + i];
      k2 += groupSums[i] = x2;
    }
    k2 = max(0, tau - padAngle * n) / k2;
    dx = k2 ? padAngle : tau / n;
    {
      let x2 = 0;
      if (sortGroups) groupIndex.sort((a2, b) => sortGroups(groupSums[a2], groupSums[b]));
      for (const i of groupIndex) {
        const x0 = x2;
        if (directed) {
          const subgroupIndex = range(~n + 1, n).filter((j) => j < 0 ? matrix[~j * n + i] : matrix[i * n + j]);
          if (sortSubgroups) subgroupIndex.sort((a2, b) => sortSubgroups(a2 < 0 ? -matrix[~a2 * n + i] : matrix[i * n + a2], b < 0 ? -matrix[~b * n + i] : matrix[i * n + b]));
          for (const j of subgroupIndex) {
            if (j < 0) {
              const chord3 = chords[~j * n + i] || (chords[~j * n + i] = { source: null, target: null });
              chord3.target = { index: i, startAngle: x2, endAngle: x2 += matrix[~j * n + i] * k2, value: matrix[~j * n + i] };
            } else {
              const chord3 = chords[i * n + j] || (chords[i * n + j] = { source: null, target: null });
              chord3.source = { index: i, startAngle: x2, endAngle: x2 += matrix[i * n + j] * k2, value: matrix[i * n + j] };
            }
          }
          groups2[i] = { index: i, startAngle: x0, endAngle: x2, value: groupSums[i] };
        } else {
          const subgroupIndex = range(0, n).filter((j) => matrix[i * n + j] || matrix[j * n + i]);
          if (sortSubgroups) subgroupIndex.sort((a2, b) => sortSubgroups(matrix[i * n + a2], matrix[i * n + b]));
          for (const j of subgroupIndex) {
            let chord3;
            if (i < j) {
              chord3 = chords[i * n + j] || (chords[i * n + j] = { source: null, target: null });
              chord3.source = { index: i, startAngle: x2, endAngle: x2 += matrix[i * n + j] * k2, value: matrix[i * n + j] };
            } else {
              chord3 = chords[j * n + i] || (chords[j * n + i] = { source: null, target: null });
              chord3.target = { index: i, startAngle: x2, endAngle: x2 += matrix[i * n + j] * k2, value: matrix[i * n + j] };
              if (i === j) chord3.source = chord3.target;
            }
            if (chord3.source && chord3.target && chord3.source.value < chord3.target.value) {
              const source = chord3.source;
              chord3.source = chord3.target;
              chord3.target = source;
            }
          }
          groups2[i] = { index: i, startAngle: x0, endAngle: x2, value: groupSums[i] };
        }
        x2 += dx;
      }
    }
    chords = Object.values(chords);
    chords.groups = groups2;
    return sortChords ? chords.sort(sortChords) : chords;
  }
  chord2.padAngle = function(_) {
    return arguments.length ? (padAngle = max(0, _), chord2) : padAngle;
  };
  chord2.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord2) : sortGroups;
  };
  chord2.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord2) : sortSubgroups;
  };
  chord2.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord2) : sortChords && sortChords._;
  };
  return chord2;
}

// node_modules/d3-chord/src/array.js
var slice = Array.prototype.slice;

// node_modules/d3-chord/src/constant.js
function constant_default(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-chord/src/ribbon.js
function defaultSource(d) {
  return d.source;
}
function defaultTarget(d) {
  return d.target;
}
function defaultRadius(d) {
  return d.radius;
}
function defaultStartAngle(d) {
  return d.startAngle;
}
function defaultEndAngle(d) {
  return d.endAngle;
}
function defaultPadAngle() {
  return 0;
}
function defaultArrowheadRadius() {
  return 10;
}
function ribbon(headRadius) {
  var source = defaultSource, target = defaultTarget, sourceRadius = defaultRadius, targetRadius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, padAngle = defaultPadAngle, context = null;
  function ribbon2() {
    var buffer, s2 = source.apply(this, arguments), t = target.apply(this, arguments), ap = padAngle.apply(this, arguments) / 2, argv = slice.call(arguments), sr = +sourceRadius.apply(this, (argv[0] = s2, argv)), sa0 = startAngle.apply(this, argv) - halfPi, sa1 = endAngle.apply(this, argv) - halfPi, tr = +targetRadius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - halfPi, ta1 = endAngle.apply(this, argv) - halfPi;
    if (!context) context = buffer = path();
    if (ap > epsilon) {
      if (abs(sa1 - sa0) > ap * 2 + epsilon) sa1 > sa0 ? (sa0 += ap, sa1 -= ap) : (sa0 -= ap, sa1 += ap);
      else sa0 = sa1 = (sa0 + sa1) / 2;
      if (abs(ta1 - ta0) > ap * 2 + epsilon) ta1 > ta0 ? (ta0 += ap, ta1 -= ap) : (ta0 -= ap, ta1 += ap);
      else ta0 = ta1 = (ta0 + ta1) / 2;
    }
    context.moveTo(sr * cos2(sa0), sr * sin2(sa0));
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) {
      if (headRadius) {
        var hr = +headRadius.apply(this, arguments), tr2 = tr - hr, ta2 = (ta0 + ta1) / 2;
        context.quadraticCurveTo(0, 0, tr2 * cos2(ta0), tr2 * sin2(ta0));
        context.lineTo(tr * cos2(ta2), tr * sin2(ta2));
        context.lineTo(tr2 * cos2(ta1), tr2 * sin2(ta1));
      } else {
        context.quadraticCurveTo(0, 0, tr * cos2(ta0), tr * sin2(ta0));
        context.arc(0, 0, tr, ta0, ta1);
      }
    }
    context.quadraticCurveTo(0, 0, sr * cos2(sa0), sr * sin2(sa0));
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  if (headRadius) ribbon2.headRadius = function(_) {
    return arguments.length ? (headRadius = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : headRadius;
  };
  ribbon2.radius = function(_) {
    return arguments.length ? (sourceRadius = targetRadius = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : sourceRadius;
  };
  ribbon2.sourceRadius = function(_) {
    return arguments.length ? (sourceRadius = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : sourceRadius;
  };
  ribbon2.targetRadius = function(_) {
    return arguments.length ? (targetRadius = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : targetRadius;
  };
  ribbon2.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : startAngle;
  };
  ribbon2.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : endAngle;
  };
  ribbon2.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default(+_), ribbon2) : padAngle;
  };
  ribbon2.source = function(_) {
    return arguments.length ? (source = _, ribbon2) : source;
  };
  ribbon2.target = function(_) {
    return arguments.length ? (target = _, ribbon2) : target;
  };
  ribbon2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, ribbon2) : context;
  };
  return ribbon2;
}
function ribbon_default() {
  return ribbon();
}
function ribbonArrow() {
  return ribbon(defaultArrowheadRadius);
}

// node_modules/d3-drag/src/event.js
function DragEvent(type2, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x2,
  y: y2,
  dx,
  dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x2, enumerable: true, configurable: true },
    y: { value: y2, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch }
  });
}
DragEvent.prototype.on = function() {
  var value2 = this._.on.apply(this._, arguments);
  return value2 === this._ ? this : value2;
};

// node_modules/d3-brush/src/brush.js
var { abs: abs2, max: max2, min } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x2, e) {
    return x2 == null ? null : [[+x2[0], e[0][1]], [+x2[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y2, e) {
    return y2 == null ? null : [[e[0][0], +y2[0]], [e[1][0], +y2[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// node_modules/d3-contour/src/array.js
var array = Array.prototype;
var slice2 = array.slice;

// node_modules/robust-predicates/esm/util.js
var epsilon2 = 11102230246251565e-32;
var resulterrbound = (3 + 8 * epsilon2) * epsilon2;
function vec(n) {
  return new Float64Array(n);
}

// node_modules/robust-predicates/esm/orient2d.js
var ccwerrboundA = (3 + 16 * epsilon2) * epsilon2;
var ccwerrboundB = (2 + 12 * epsilon2) * epsilon2;
var ccwerrboundC = (9 + 64 * epsilon2) * epsilon2 * epsilon2;
var B = vec(4);
var C1 = vec(8);
var C2 = vec(12);
var D = vec(16);
var u = vec(4);

// node_modules/robust-predicates/esm/orient3d.js
var o3derrboundA = (7 + 56 * epsilon2) * epsilon2;
var o3derrboundB = (3 + 28 * epsilon2) * epsilon2;
var o3derrboundC = (26 + 288 * epsilon2) * epsilon2 * epsilon2;
var bc = vec(4);
var ca = vec(4);
var ab = vec(4);
var at_b = vec(4);
var at_c = vec(4);
var bt_c = vec(4);
var bt_a = vec(4);
var ct_a = vec(4);
var ct_b = vec(4);
var bct = vec(8);
var cat = vec(8);
var abt = vec(8);
var u2 = vec(4);
var _8 = vec(8);
var _8b = vec(8);
var _16 = vec(8);
var _12 = vec(12);
var fin = vec(192);
var fin2 = vec(192);

// node_modules/robust-predicates/esm/incircle.js
var iccerrboundA = (10 + 96 * epsilon2) * epsilon2;
var iccerrboundB = (4 + 48 * epsilon2) * epsilon2;
var iccerrboundC = (44 + 576 * epsilon2) * epsilon2 * epsilon2;
var bc2 = vec(4);
var ca2 = vec(4);
var ab2 = vec(4);
var aa = vec(4);
var bb = vec(4);
var cc = vec(4);
var u3 = vec(4);
var v = vec(4);
var axtbc = vec(8);
var aytbc = vec(8);
var bxtca = vec(8);
var bytca = vec(8);
var cxtab = vec(8);
var cytab = vec(8);
var abt2 = vec(8);
var bct2 = vec(8);
var cat2 = vec(8);
var abtt = vec(4);
var bctt = vec(4);
var catt = vec(4);
var _82 = vec(8);
var _162 = vec(16);
var _16b = vec(16);
var _16c = vec(16);
var _32 = vec(32);
var _32b = vec(32);
var _48 = vec(48);
var _64 = vec(64);
var fin3 = vec(1152);
var fin22 = vec(1152);

// node_modules/robust-predicates/esm/insphere.js
var isperrboundA = (16 + 224 * epsilon2) * epsilon2;
var isperrboundB = (5 + 72 * epsilon2) * epsilon2;
var isperrboundC = (71 + 1408 * epsilon2) * epsilon2 * epsilon2;
var ab3 = vec(4);
var bc3 = vec(4);
var cd = vec(4);
var de = vec(4);
var ea = vec(4);
var ac = vec(4);
var bd = vec(4);
var ce = vec(4);
var da = vec(4);
var eb = vec(4);
var abc = vec(24);
var bcd = vec(24);
var cde = vec(24);
var dea = vec(24);
var eab = vec(24);
var abd = vec(24);
var bce = vec(24);
var cda = vec(24);
var deb = vec(24);
var eac = vec(24);
var adet = vec(1152);
var bdet = vec(1152);
var cdet = vec(1152);
var ddet = vec(1152);
var edet = vec(1152);
var abdet = vec(2304);
var cddet = vec(2304);
var cdedet = vec(3456);
var deter = vec(5760);
var _83 = vec(8);
var _8b2 = vec(8);
var _8c = vec(8);
var _163 = vec(16);
var _24 = vec(24);
var _482 = vec(48);
var _48b = vec(48);
var _96 = vec(96);
var _192 = vec(192);
var _384x = vec(384);
var _384y = vec(384);
var _384z = vec(384);
var _768 = vec(768);
var xdet = vec(96);
var ydet = vec(96);
var zdet = vec(96);
var fin4 = vec(1152);

// node_modules/delaunator/index.js
var EPSILON = Math.pow(2, -52);
var EDGE_STACK = new Uint32Array(512);

// node_modules/d3-delaunay/src/delaunay.js
var tau2 = 2 * Math.PI;

// node_modules/d3-dsv/src/dsv.js
var EOL = {};
var EOF = {};
var QUOTE = 34;
var NEWLINE = 10;
var RETURN = 13;
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}
function inferColumns(rows) {
  var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value2, width) {
  var s2 = value2 + "", length = s2.length;
  return length < width ? new Array(width - length + 1).join(0) + s2 : s2;
}
function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6) : year > 9999 ? "+" + pad(year, 6) : pad(year, 4);
}
function formatDate(date) {
  var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds2 = date.getUTCSeconds(), milliseconds2 = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds2, 2) + "Z" : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z" : "");
}
function dsv_default(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f) {
    var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;
    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;
      var i, j = I, c3;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE) ;
        if ((i = I) >= N) eof = true;
        else if ((c3 = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c3 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, '"');
      }
      while (I < N) {
        if ((c3 = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c3 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE) ++I;
        } else if (c3 !== DELIMITER) continue;
        return text.slice(j, i);
      }
      return eof = true, text.slice(j, N);
    }
    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value2) {
    return value2 == null ? "" : value2 instanceof Date ? formatDate(value2) : reFormat.test(value2 += "") ? '"' + value2.replace(/"/g, '""') + '"' : value2;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}

// node_modules/d3-dsv/src/csv.js
var csv = dsv_default(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

// node_modules/d3-dsv/src/tsv.js
var tsv = dsv_default("	");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

// node_modules/d3-dsv/src/autoType.js
var fixtz = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();

// node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default(input, init) {
  return fetch(input, init).then(responseText);
}

// node_modules/d3-fetch/src/dsv.js
function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = void 0;
    return text_default(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}
var csv2 = dsvParse(csvParse);
var tsv2 = dsvParse(tsvParse);

// node_modules/d3-fetch/src/xml.js
function parser(type2) {
  return (input, init) => text_default(input, init).then((text) => new DOMParser().parseFromString(text, type2));
}
var xml_default = parser("application/xml");
var html = parser("text/html");
var svg = parser("image/svg+xml");

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value2, width) {
    var i = value2.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value2.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value2) {
    return value2.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out: for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s2[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s2[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default2(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map.call(locale3.numerals, String)), percent2 = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "−" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n") comma = true, type2 = "g";
    else if (!formatTypes_default[type2]) precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent2 : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value2) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c3;
      if (type2 === "c") {
        valueSuffix = formatType(value2) + valueSuffix;
        value2 = "";
      } else {
        value2 = +value2;
        var valueNegative = value2 < 0 || 1 / value2 < 0;
        value2 = isNaN(value2) ? nan : formatType(Math.abs(value2), precision);
        if (trim) value2 = formatTrim_default(value2);
        if (valueNegative && +value2 === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value2.length;
          while (++i < n) {
            if (c3 = value2.charCodeAt(i), 48 > c3 || c3 > 57) {
              valueSuffix = (c3 === 46 ? decimal + value2.slice(i + 1) : value2.slice(i)) + valueSuffix;
              value2 = value2.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero) value2 = group2(value2, Infinity);
      var length = valuePrefix.length + value2.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero) value2 = group2(padding + value2, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value2 = valuePrefix + value2 + valueSuffix + padding;
          break;
        case "=":
          value2 = valuePrefix + padding + value2 + valueSuffix;
          break;
        case "^":
          value2 = padding.slice(0, length = padding.length >> 1) + valuePrefix + value2 + valueSuffix + padding.slice(length);
          break;
        default:
          value2 = padding + valuePrefix + value2 + valueSuffix;
          break;
      }
      return numerals(value2);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value2) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value2) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value3) {
      return f(k2 * value3) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-random/src/defaultSource.js
var defaultSource_default = Math.random;

// node_modules/d3-random/src/uniform.js
var uniform_default = (function sourceRandomUniform(source) {
  function randomUniform(min4, max6) {
    min4 = min4 == null ? 0 : +min4;
    max6 = max6 == null ? 1 : +max6;
    if (arguments.length === 1) max6 = min4, min4 = 0;
    else max6 -= min4;
    return function() {
      return source() * max6 + min4;
    };
  }
  randomUniform.source = sourceRandomUniform;
  return randomUniform;
})(defaultSource_default);

// node_modules/d3-random/src/int.js
var int_default = (function sourceRandomInt(source) {
  function randomInt(min4, max6) {
    if (arguments.length < 2) max6 = min4, min4 = 0;
    min4 = Math.floor(min4);
    max6 = Math.floor(max6) - min4;
    return function() {
      return Math.floor(source() * max6 + min4);
    };
  }
  randomInt.source = sourceRandomInt;
  return randomInt;
})(defaultSource_default);

// node_modules/d3-random/src/normal.js
var normal_default = (function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x2, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y2;
      if (x2 != null) y2 = x2, x2 = null;
      else do {
        x2 = source() * 2 - 1;
        y2 = source() * 2 - 1;
        r = x2 * x2 + y2 * y2;
      } while (!r || r > 1);
      return mu + sigma * y2 * Math.sqrt(-2 * Math.log(r) / r);
    };
  }
  randomNormal.source = sourceRandomNormal;
  return randomNormal;
})(defaultSource_default);

// node_modules/d3-random/src/logNormal.js
var logNormal_default = (function sourceRandomLogNormal(source) {
  var N = normal_default.source(source);
  function randomLogNormal() {
    var randomNormal = N.apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }
  randomLogNormal.source = sourceRandomLogNormal;
  return randomLogNormal;
})(defaultSource_default);

// node_modules/d3-random/src/irwinHall.js
var irwinHall_default = (function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    if ((n = +n) <= 0) return () => 0;
    return function() {
      for (var sum4 = 0, i = n; i > 1; --i) sum4 += source();
      return sum4 + i * source();
    };
  }
  randomIrwinHall.source = sourceRandomIrwinHall;
  return randomIrwinHall;
})(defaultSource_default);

// node_modules/d3-random/src/bates.js
var bates_default = (function sourceRandomBates(source) {
  var I = irwinHall_default.source(source);
  function randomBates(n) {
    if ((n = +n) === 0) return source;
    var randomIrwinHall = I(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }
  randomBates.source = sourceRandomBates;
  return randomBates;
})(defaultSource_default);

// node_modules/d3-random/src/exponential.js
var exponential_default = (function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log1p(-source()) / lambda;
    };
  }
  randomExponential.source = sourceRandomExponential;
  return randomExponential;
})(defaultSource_default);

// node_modules/d3-random/src/pareto.js
var pareto_default = (function sourceRandomPareto(source) {
  function randomPareto(alpha) {
    if ((alpha = +alpha) < 0) throw new RangeError("invalid alpha");
    alpha = 1 / -alpha;
    return function() {
      return Math.pow(1 - source(), alpha);
    };
  }
  randomPareto.source = sourceRandomPareto;
  return randomPareto;
})(defaultSource_default);

// node_modules/d3-random/src/bernoulli.js
var bernoulli_default = (function sourceRandomBernoulli(source) {
  function randomBernoulli(p) {
    if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
    return function() {
      return Math.floor(source() + p);
    };
  }
  randomBernoulli.source = sourceRandomBernoulli;
  return randomBernoulli;
})(defaultSource_default);

// node_modules/d3-random/src/geometric.js
var geometric_default = (function sourceRandomGeometric(source) {
  function randomGeometric(p) {
    if ((p = +p) < 0 || p > 1) throw new RangeError("invalid p");
    if (p === 0) return () => Infinity;
    if (p === 1) return () => 1;
    p = Math.log1p(-p);
    return function() {
      return 1 + Math.floor(Math.log1p(-source()) / p);
    };
  }
  randomGeometric.source = sourceRandomGeometric;
  return randomGeometric;
})(defaultSource_default);

// node_modules/d3-random/src/gamma.js
var gamma_default = (function sourceRandomGamma(source) {
  var randomNormal = normal_default.source(source)();
  function randomGamma(k2, theta) {
    if ((k2 = +k2) < 0) throw new RangeError("invalid k");
    if (k2 === 0) return () => 0;
    theta = theta == null ? 1 : +theta;
    if (k2 === 1) return () => -Math.log1p(-source()) * theta;
    var d = (k2 < 1 ? k2 + 1 : k2) - 1 / 3, c3 = 1 / (3 * Math.sqrt(d)), multiplier = k2 < 1 ? () => Math.pow(source(), 1 / k2) : () => 1;
    return function() {
      do {
        do {
          var x2 = randomNormal(), v2 = 1 + c3 * x2;
        } while (v2 <= 0);
        v2 *= v2 * v2;
        var u4 = 1 - source();
      } while (u4 >= 1 - 0.0331 * x2 * x2 * x2 * x2 && Math.log(u4) >= 0.5 * x2 * x2 + d * (1 - v2 + Math.log(v2)));
      return d * v2 * multiplier() * theta;
    };
  }
  randomGamma.source = sourceRandomGamma;
  return randomGamma;
})(defaultSource_default);

// node_modules/d3-random/src/beta.js
var beta_default = (function sourceRandomBeta(source) {
  var G = gamma_default.source(source);
  function randomBeta(alpha, beta) {
    var X2 = G(alpha), Y2 = G(beta);
    return function() {
      var x2 = X2();
      return x2 === 0 ? 0 : x2 / (x2 + Y2());
    };
  }
  randomBeta.source = sourceRandomBeta;
  return randomBeta;
})(defaultSource_default);

// node_modules/d3-random/src/binomial.js
var binomial_default = (function sourceRandomBinomial(source) {
  var G = geometric_default.source(source), B2 = beta_default.source(source);
  function randomBinomial(n, p) {
    n = +n;
    if ((p = +p) >= 1) return () => n;
    if (p <= 0) return () => 0;
    return function() {
      var acc = 0, nn = n, pp = p;
      while (nn * pp > 16 && nn * (1 - pp) > 16) {
        var i = Math.floor((nn + 1) * pp), y2 = B2(i, nn - i + 1)();
        if (y2 <= pp) {
          acc += i;
          nn -= i;
          pp = (pp - y2) / (1 - y2);
        } else {
          nn = i - 1;
          pp /= y2;
        }
      }
      var sign2 = pp < 0.5, pFinal = sign2 ? pp : 1 - pp, g = G(pFinal);
      for (var s2 = g(), k2 = 0; s2 <= nn; ++k2) s2 += g();
      return acc + (sign2 ? k2 : nn - k2);
    };
  }
  randomBinomial.source = sourceRandomBinomial;
  return randomBinomial;
})(defaultSource_default);

// node_modules/d3-random/src/weibull.js
var weibull_default = (function sourceRandomWeibull(source) {
  function randomWeibull(k2, a2, b) {
    var outerFunc;
    if ((k2 = +k2) === 0) {
      outerFunc = (x2) => -Math.log(x2);
    } else {
      k2 = 1 / k2;
      outerFunc = (x2) => Math.pow(x2, k2);
    }
    a2 = a2 == null ? 0 : +a2;
    b = b == null ? 1 : +b;
    return function() {
      return a2 + b * outerFunc(-Math.log1p(-source()));
    };
  }
  randomWeibull.source = sourceRandomWeibull;
  return randomWeibull;
})(defaultSource_default);

// node_modules/d3-random/src/cauchy.js
var cauchy_default = (function sourceRandomCauchy(source) {
  function randomCauchy(a2, b) {
    a2 = a2 == null ? 0 : +a2;
    b = b == null ? 1 : +b;
    return function() {
      return a2 + b * Math.tan(Math.PI * source());
    };
  }
  randomCauchy.source = sourceRandomCauchy;
  return randomCauchy;
})(defaultSource_default);

// node_modules/d3-random/src/logistic.js
var logistic_default = (function sourceRandomLogistic(source) {
  function randomLogistic(a2, b) {
    a2 = a2 == null ? 0 : +a2;
    b = b == null ? 1 : +b;
    return function() {
      var u4 = source();
      return a2 + b * Math.log(u4 / (1 - u4));
    };
  }
  randomLogistic.source = sourceRandomLogistic;
  return randomLogistic;
})(defaultSource_default);

// node_modules/d3-random/src/poisson.js
var poisson_default = (function sourceRandomPoisson(source) {
  var G = gamma_default.source(source), B2 = binomial_default.source(source);
  function randomPoisson(lambda) {
    return function() {
      var acc = 0, l = lambda;
      while (l > 16) {
        var n = Math.floor(0.875 * l), t = G(n)();
        if (t > l) return acc + B2(n - 1, l / t)();
        acc += n;
        l -= t;
      }
      for (var s2 = -Math.log1p(-source()), k2 = 0; s2 <= l; ++k2) s2 -= Math.log1p(-source());
      return acc + k2;
    };
  }
  randomPoisson.source = sourceRandomPoisson;
  return randomPoisson;
})(defaultSource_default);

// node_modules/d3-random/src/lcg.js
var eps = 1 / 4294967296;

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");

// node_modules/d3-time/src/interval.js
var t0 = /* @__PURE__ */ new Date();
var t1 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count2, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
  }
  interval.floor = (date) => {
    return floori(date = /* @__PURE__ */ new Date(+date)), date;
  };
  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = (date, step) => {
    return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = (start, stop, step) => {
    const range3 = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range3;
    let previous;
    do
      range3.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range3;
  };
  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date, 1), !test(date)) {
          }
        }
      }
    });
  };
  if (count2) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count2(t0, t1));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});
millisecond.every = (k2) => {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0)) return null;
  if (!(k2 > 1)) return millisecond;
  return timeInterval((date) => {
    date.setTime(Math.floor(date / k2) * k2);
  }, (date, step) => {
    date.setTime(+date + step * k2);
  }, (start, end) => {
    return (end - start) / k2;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date) => date.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});
timeYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k2) * k2);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k2);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});
utcYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k2) * k2);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k2);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count2) {
    const reverse2 = stop < start;
    if (reverse2) [start, stop] = [stop, start];
    const interval = count2 && typeof count2.range === "function" ? count2 : tickInterval(start, stop, count2);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse2 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count2) {
    const target = Math.abs(stop - start) / count2;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count2));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count2), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear2,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date) {
      var string = [], i = -1, j = 0, n = specifier.length, c3, pad3, format2;
      if (!(date instanceof Date)) date = /* @__PURE__ */ new Date(+date);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad3 = pads[c3 = specifier.charAt(++i)]) != null) c3 = specifier.charAt(++i);
          else pad3 = c3 === "e" ? " " : "0";
          if (format2 = formats2[c3]) c3 = format2(date, pad3);
          string.push(c3);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c3, parse;
    while (i < n) {
      if (j >= m) return -1;
      c3 = specifier.charCodeAt(i++);
      if (c3 === 37) {
        c3 = specifier.charAt(i++);
        parse = parses[c3 in pads ? specifier.charAt(i++) : c3];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c3 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad2(value2, fill, width) {
  var sign2 = value2 < 0 ? "-" : "", string = (sign2 ? -value2 : value2) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad2(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad2(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad2(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad2(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad2(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad2(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad2(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad2(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad2(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad2(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad2(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear2(d, p) {
  return pad2(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad2(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad2(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad2(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad2(z / 60 | 0, "0", 2) + pad2(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad2(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad2(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad2(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad2(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad2(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad2(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad2(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad2(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad2(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad2(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad2(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad2(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad2(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad2(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad2(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
  return date.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/observable10.js
var observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c2 = rgb();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range3) {
  var n = range3.length;
  return function(t) {
    return range3[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/d3-zoom/src/transform.js
function Transform(k2, x2, y2) {
  this.k = k2;
  this.x = x2;
  this.y = y2;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k2) {
    return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
  },
  translate: function(x2, y2) {
    return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
  },
  apply: function(point6) {
    return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y2) {
    return y2 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y2) {
    return (y2 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y2) {
    return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity3 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity3;
  return node.__zoom;
}

// node_modules/@amcharts/amcharts5/.internal/charts/flow/FlowNode.js
var FlowNode = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
};
Object.defineProperty(FlowNode, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FlowNode"
});
Object.defineProperty(FlowNode, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([FlowNode.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/FlowNodes.js
var FlowNodes = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, { themeTags: ["flow"] }, [this.labels.template])))
    });
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => FlowNode._new(this._root, { themeTags: ["node"] }, [this.nodes.template])))
    });
    Object.defineProperty(this, "_userDataSet", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this.fields.push("unknown", "name", "fill");
    this.set("idField", "id");
    this.set("nameField", "id");
    this.set("fillField", "fill");
    this.set("unknownField", "unknown");
    this.children.push(this.bulletsContainer);
    super._afterNew();
  }
  _onDataClear() {
    const colors = this.get("colors");
    if (colors) {
      colors.reset();
    }
    const patterns = this.get("patterns");
    if (patterns) {
      patterns.reset();
    }
    this._userDataSet = true;
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    dataItem.setRaw("d3SankeyNode", { name: dataItem.get("id"), dataItem });
    if (dataItem.get("fill") == null) {
      let colors = this.get("colors");
      if (colors) {
        dataItem.setRaw("fill", colors.next());
      }
    }
    if (dataItem.get("fillPattern") == null) {
      let patterns = this.get("patterns");
      if (patterns) {
        dataItem.setRaw("fillPattern", patterns.next());
      }
    }
    const node = this.makeNode(dataItem);
    dataItem.setRaw("node", node);
    const disabledField = this.get("disabledField");
    if (disabledField) {
      const dataContext = dataItem.dataContext;
      if (dataContext) {
        if (dataContext[disabledField]) {
          this.root.events.once("frameended", () => {
            this.disableDataItem(dataItem, 0);
          });
        }
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem, themeTag) {
    const node = this.nodes.make();
    this.nodes.push(node);
    if (themeTag) {
      node.addTag(themeTag);
    }
    if (dataItem.get("unknown")) {
      node.addTag("unknown");
    }
    this.children.push(node);
    node._setDataItem(dataItem);
    node.series = this;
    node.events.on("click", (e) => {
      const node2 = e.target;
      if (node2.get("toggleKey") == "disabled") {
        const dataItem2 = node2.dataItem;
        if (dataItem2) {
          if (dataItem2.isHidden()) {
            this.enableDataItem(dataItem2);
          } else {
            this.disableDataItem(dataItem2);
          }
        }
      }
    });
    dataItem.on("fill", () => {
      this._updateNodeColor(dataItem);
    });
    dataItem.on("fillPattern", () => {
      this._updateNodeColor(dataItem);
    });
    dataItem.set("node", node);
    return node;
  }
  _updateNodeColor(_dataItem) {
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    let node = dataItem.get("node");
    if (node) {
      this.nodes.removeValue(node);
      node.dispose();
    }
    let label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
  }
  /**
   * @ignore
   */
  addincomingLink(dataItem, link) {
    let incoming = dataItem.get("incomingLinks");
    if (!incoming) {
      incoming = [];
      dataItem.set("incomingLinks", incoming);
    }
    incoming.push(link);
  }
  /**
   * @ignore
   */
  addOutgoingLink(dataItem, link) {
    let outgoing = dataItem.get("outgoingLinks");
    if (!outgoing) {
      outgoing = [];
      dataItem.set("outgoingLinks", outgoing);
    }
    outgoing.push(link);
  }
  /**
   * Shows node's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  showDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: { get: () => super.showDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      const flow = this.flow;
      if (flow) {
        const node = dataItem.get("node");
        if (node) {
          node.show();
        }
        let label = dataItem.get("label");
        if (label) {
          label.show(duration);
        }
        let links = dataItem.get("outgoingLinks");
        if (links) {
          each(links, (link) => {
            flow.showDataItem(link, duration);
          });
        }
        links = dataItem.get("incomingLinks");
        if (links) {
          each(links, (link) => {
            flow.showDataItem(link, duration);
          });
        }
      }
      yield promises;
    });
  }
  /**
   * Hides series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  hideDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: { get: () => super.hideDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const flow = this.flow;
      if (flow) {
        const node = dataItem.get("node");
        if (node) {
          node.hide();
        }
        let label = dataItem.get("label");
        if (label) {
          label.hide(duration);
        }
        let links = dataItem.get("outgoingLinks");
        if (links) {
          each(links, (link) => {
            flow.hideDataItem(link, duration);
          });
        }
        links = dataItem.get("incomingLinks");
        if (links) {
          each(links, (link) => {
            flow.hideDataItem(link, duration);
          });
        }
      }
      yield promises;
    });
  }
  /**
   * Shows node's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  enableDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: { get: () => super.showDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      const flow = this.flow;
      if (flow) {
        const node = dataItem.get("node");
        if (node) {
          this.root.events.once("frameended", () => {
            node.set("disabled", false);
          });
        }
        let label = dataItem.get("label");
        if (label) {
          label.set("disabled", false);
        }
        let links = dataItem.get("outgoingLinks");
        if (links) {
          each(links, (link) => {
            flow.showDataItem(link, duration);
          });
        }
        links = dataItem.get("incomingLinks");
        if (links) {
          each(links, (link) => {
            flow.showDataItem(link, duration);
          });
        }
      }
      yield promises;
    });
  }
  /**
   * Hides series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  disableDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: { get: () => super.hideDataItem }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const flow = this.flow;
      if (flow) {
        const node = dataItem.get("node");
        if (node) {
          this.root.events.once("frameended", () => {
            node.set("disabled", true);
          });
        }
        let label = dataItem.get("label");
        if (label) {
          label.set("disabled", true);
        }
        let links = dataItem.get("outgoingLinks");
        if (links) {
          each(links, (link) => {
            flow.hideDataItem(link, duration);
          });
        }
        links = dataItem.get("incomingLinks");
        if (links) {
          each(links, (link) => {
            flow.hideDataItem(link, duration);
          });
        }
      }
      yield promises;
    });
  }
};
Object.defineProperty(FlowNodes, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FlowNodes"
});
Object.defineProperty(FlowNodes, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([FlowNodes.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ChordNodes.js
var ChordNodes = class extends FlowNodes {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RadialLabel._new(this._root, {}, [this.labels.template])))
    });
    Object.defineProperty(this, "flow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "slices", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Slice._new(this._root, { themeTags: ["shape"] }, [this.slices.template])))
    });
    Object.defineProperty(this, "rectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.slices
    });
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem, "chord");
    const slice5 = node.children.insertIndex(0, this.slices.make());
    dataItem.set("slice", slice5);
    slice5._setSoft("fill", dataItem.get("fill"));
    slice5._setSoft("fillPattern", dataItem.get("fillPattern"));
    const label = this.labels.make();
    this.labels.push(label);
    label.addTag("flow");
    label.addTag("chord");
    label.addTag("node");
    node.children.push(label);
    dataItem.set("label", label);
    node.events.on("dragstart", (e) => {
      let point6 = this.toLocal(e.point);
      const angle = getAngle({ x: 0, y: 0 }, point6);
      if (this.flow) {
        this._dAngle = this.flow.get("startAngle", 0) - angle;
      }
    });
    node.events.on("dragged", (e) => {
      let point6 = this.toLocal(e.point);
      const angle = getAngle({ x: 0, y: 0 }, point6);
      node.setAll({ x: 0, y: 0 });
      if (this.flow) {
        this.flow.set("startAngle", angle + this._dAngle);
      }
    });
    label._setDataItem(dataItem);
    slice5._setDataItem(dataItem);
    return node;
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      if (dataItem) {
        const sprite2 = bullet.get("sprite");
        if (sprite2) {
          const slice5 = dataItem.get("slice");
          const locationX = bullet.get("locationX", 0.5);
          const locationY = bullet.get("locationY", 0.5);
          if (slice5) {
            const radius = slice5.get("radius", 0);
            const innerRadius = slice5.get("innerRadius", 0);
            const bulletRadius = innerRadius + (radius - innerRadius) * locationY;
            const angle = slice5.get("startAngle", 0) + slice5.get("arc", 0) * locationX;
            sprite2.setAll({ x: bulletRadius * cos(angle), y: bulletRadius * sin(angle) });
          }
        }
      }
    }
  }
  _updateNodeColor(dataItem) {
    const slice5 = dataItem.get("slice");
    if (slice5) {
      slice5.set("fill", dataItem.get("fill"));
      slice5.set("fillPattern", dataItem.get("fillPattern"));
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    let slice5 = dataItem.get("slice");
    if (slice5) {
      this.slices.removeValue(slice5);
      slice5.dispose();
    }
  }
};
Object.defineProperty(ChordNodes, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChordNodes"
});
Object.defineProperty(ChordNodes, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FlowNodes.classNames.concat([ChordNodes.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/FlowLink.js
var FlowLink = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fillGradient", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeGradient", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _changed() {
    super._changed();
    if (this.isDirty("fillStyle")) {
      const series = this.series;
      const dataItem = this.dataItem;
      if (series && dataItem) {
        series._updateLinkColor(dataItem);
      }
    }
  }
  _getTooltipPoint() {
    let tooltipY = this.get("tooltipY");
    let position = 0.5;
    if (tooltipY instanceof Percent) {
      position = tooltipY.value;
    }
    return this.getPoint(position);
  }
};
Object.defineProperty(FlowLink, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "FlowLink"
});
Object.defineProperty(FlowLink, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([FlowLink.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ChordLink.js
var ChordLink = class extends FlowLink {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_p0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_p1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_type", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  getPoint(location) {
    if (this._p0 && this._p1) {
      if (this._type === "line") {
        let p = getPointOnLine(this._p0, this._p1, location);
        return { x: p.x, y: p.y, angle: getAngle(this._p0, this._p1) };
      } else {
        let p0 = getPointOnQuadraticCurve(this._p0, this._p1, { x: 0, y: 0 }, Math.max(0, location - 0.01));
        let p1 = getPointOnQuadraticCurve(this._p0, this._p1, { x: 0, y: 0 }, Math.min(1, location + 0.01));
        let p = getPointOnQuadraticCurve(this._p0, this._p1, { x: 0, y: 0 }, location);
        return { x: p.x, y: p.y, angle: getAngle(p0, p1) };
      }
    }
    return { x: 0, y: 0, angle: 0 };
  }
};
Object.defineProperty(ChordLink, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChordLink"
});
Object.defineProperty(ChordLink, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FlowLink.classNames.concat([ChordLink.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/Chord.js
var Chord = class extends Flow {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => ChordLink._new(this._root, { themeTags: ["link", "shape"] }, [this.links.template])))
    });
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(ChordNodes.new(this._root, {}))
    });
    Object.defineProperty(this, "_d3chord", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: chord_default()
    });
    Object.defineProperty(this, "_chordLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_ribbon", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ribbon_default()
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["chord"]);
    this.linksContainer.setAll({ x: p50, y: p50 });
    this.bulletsContainer.setAll({ x: p50, y: p50 });
    super._afterNew();
  }
  _fixRibbon(ribbon2) {
    ribbon2.startAngle((d) => {
      return d.startAngle + this.get("startAngle", 0) * RADIANS + Math.PI / 2;
    });
    ribbon2.endAngle((d) => {
      return d.endAngle + this.get("startAngle", 0) * RADIANS + Math.PI / 2;
    });
  }
  /**
   * @ignore
   */
  makeLink(dataItem) {
    const link = this.linksContainer.children.push(this.links.make());
    this.links.push(link);
    link._setDataItem(dataItem);
    link.set("source", dataItem.get("source"));
    link.set("target", dataItem.get("target"));
    link.series = this;
    return link;
  }
  _makeMatrix() {
    const matrix = [];
    each(this.nodes.dataItems, (sourceDataItem) => {
      const group2 = [];
      matrix.push(group2);
      let outgoing = sourceDataItem.get("outgoingLinks");
      each(this.nodes.dataItems, (targetDataItem) => {
        let value2 = 0;
        if (outgoing) {
          each(outgoing, (outgoingLink) => {
            if (outgoingLink.get("target") === targetDataItem) {
              value2 = outgoingLink.get("valueWorking");
            }
            let valueSum = this.getPrivate("valueSum", 0);
            let minSize = this.get("minSize", 0);
            if (value2 > 0 && minSize > 0) {
              if (value2 < valueSum * minSize) {
                value2 = valueSum * minSize;
              }
            }
          });
        }
        group2.push(value2);
      });
    });
    return matrix;
  }
  _prepareChildren() {
    super._prepareChildren();
    this._fixRibbon(this._ribbon);
    let chordChanged = false;
    if (this._valuesDirty || this._sizeDirty || this.isDirty("padAngle") || this.isDirty("startAngle")) {
      const matrix = this._makeMatrix();
      this._d3chord.padAngle(this.get("padAngle", 0) * RADIANS);
      const sort2 = this.get("sort");
      if (sort2 === "ascending") {
        this._d3chord.sortGroups(ascending);
      } else if (sort2 === "descending") {
        this._d3chord.sortGroups(descending);
      }
      this._chordLayout = this._d3chord(matrix);
      chordChanged = true;
    }
    if (chordChanged || this.isDirty("radius") || this.isDirty("nodeWidth")) {
      let radius = relativeToValue(this.get("radius", 0), Math.min(this.innerWidth(), this.innerHeight())) / 2;
      let i = 0;
      const chordStartAngle = this.get("startAngle", 0);
      const nodeWidth = this.get("nodeWidth", 0);
      each(this.nodes.dataItems, (dataItem) => {
        const slice5 = dataItem.get("slice");
        const chordGroup = this._chordLayout.groups[i];
        const startAngle = chordGroup.startAngle * DEGREES + chordStartAngle;
        const endAngle = chordGroup.endAngle * DEGREES + chordStartAngle;
        slice5.setAll({ radius, innerRadius: radius - nodeWidth, startAngle, arc: endAngle - startAngle });
        const label = dataItem.get("label");
        label.setAll({ labelAngle: startAngle + (endAngle - startAngle) / 2 });
        label.setPrivate("radius", radius);
        label.setPrivate("innerRadius", 0.1);
        i++;
      });
      const linkRadius = radius - this.get("nodeWidth", 0);
      each(this._chordLayout, (chord2) => {
        let dataItem = this._linksByIndex[chord2.source.index + "_" + chord2.target.index];
        if (!dataItem) {
          dataItem = this._linksByIndex[chord2.target.index + "_" + chord2.source.index];
        }
        if (dataItem) {
          const link = dataItem.get("link");
          this._getLinkPoints(link, linkRadius, chord2);
          this._updateLink(this._ribbon, link, linkRadius, chord2);
        }
      });
    }
  }
  _getLinkPoints(link, linkRadius, chordLayoutItem) {
    const source = chordLayoutItem.source;
    const target = chordLayoutItem.target;
    const chordStartAngle = this.get("startAngle", 0) * RADIANS;
    if (source && target) {
      const startAngle0 = source.startAngle;
      const endAngle0 = source.endAngle;
      const angle0 = startAngle0 + (endAngle0 - startAngle0) / 2 + chordStartAngle;
      const startAngle1 = target.startAngle;
      const endAngle1 = target.endAngle;
      const angle1 = startAngle1 + (endAngle1 - startAngle1) / 2 + chordStartAngle;
      link._p0 = { x: linkRadius * Math.cos(angle0), y: linkRadius * Math.sin(angle0) };
      link._p1 = { x: linkRadius * Math.cos(angle1), y: linkRadius * Math.sin(angle1) };
    }
  }
  _updateLink(ribbon2, link, linkRadius, chordLayoutItem) {
    if (chordLayoutItem) {
      ribbon2.sourceRadius(relativeToValue(link.get("sourceRadius", p100), linkRadius));
      ribbon2.targetRadius(relativeToValue(link.get("targetRadius", p100), linkRadius));
      link.set("draw", (display) => {
        ribbon2.context(display);
        ribbon2(chordLayoutItem);
      });
    }
  }
};
Object.defineProperty(Chord, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Chord"
});
Object.defineProperty(Chord, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Flow.classNames.concat([Chord.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ChordLinkDirected.js
var ChordLinkDirected = class extends ChordLink {
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["chord", "link", "directed"]);
    super._afterNew();
  }
};
Object.defineProperty(ChordLinkDirected, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChordLinkDirected"
});
Object.defineProperty(ChordLinkDirected, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ChordLink.classNames.concat([ChordLinkDirected.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ChordDirected.js
var ChordDirected = class extends Chord {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_d3chord", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: chordDirected()
    });
    Object.defineProperty(this, "_ribbonArrow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ribbonArrow()
    });
    Object.defineProperty(this, "links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => ChordLinkDirected._new(this._root, { themeTags: ["link", "shape"] }, [this.links.template])))
    });
  }
  /**
   * @ignore
   */
  makeLink(dataItem) {
    const link = this.linksContainer.children.push(this.links.make());
    link._setDataItem(dataItem);
    link.set("source", dataItem.get("source"));
    link.set("target", dataItem.get("target"));
    link.series = this;
    return link;
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["directed"]);
    super._afterNew();
    this._markDirtyKey("linkHeadRadius");
  }
  _prepareChildren() {
    const linkHeadRadius = "linkHeadRadius";
    if (this.isDirty(linkHeadRadius)) {
      const headRadius = this.get(linkHeadRadius);
      if (headRadius == null) {
        this._ribbon = ribbon_default();
      } else {
        let ribbon2 = ribbonArrow();
        ribbon2.headRadius(headRadius);
        this._ribbon = ribbon2;
      }
    }
    super._prepareChildren();
  }
};
Object.defineProperty(ChordDirected, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChordDirected"
});
Object.defineProperty(ChordDirected, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Chord.classNames.concat([ChordDirected.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ChordNonRibbon.js
var ChordNonRibbon = class extends Chord {
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["chord", "basic"]);
    super._afterNew();
  }
  _makeMatrix() {
    const matrix = [];
    each(this.nodes.dataItems, (sourceDataItem) => {
      const group2 = [];
      matrix.push(group2);
      each(this.nodes.dataItems, (targetDataItem) => {
        let value2 = 1;
        if (sourceDataItem === targetDataItem) {
          value2 = 0;
        }
        group2.push(value2);
      });
    });
    return matrix;
  }
  _updateLink(_ribbon, link, _linkRadius, chordLayoutItem) {
    link._type = this.get("linkType");
    if (chordLayoutItem) {
      const linkType = this.get("linkType");
      link.set("draw", (display) => {
        let p0 = link._p0;
        let p1 = link._p1;
        if (p0 && p1) {
          display.moveTo(p0.x, p0.y);
          if (linkType == "line") {
            display.lineTo(p1.x, p1.y);
          } else {
            display.quadraticCurveTo(0, 0, p1.x, p1.y);
          }
        }
      });
    }
  }
  _getLinkPoints(link, linkRadius, _chordLayoutItem) {
    const source = link.get("source");
    const target = link.get("target");
    if (source && target) {
      const sourceSlice = source.get("slice");
      const targetSlice = target.get("slice");
      const startAngle0 = sourceSlice.get("startAngle", 0);
      const arc0 = sourceSlice.get("arc", 0);
      const angle0 = startAngle0 + arc0 / 2;
      const startAngle1 = targetSlice.get("startAngle", 0);
      const arc1 = targetSlice.get("arc", 0);
      const angle1 = startAngle1 + arc1 / 2;
      link._p0 = { x: linkRadius * cos(angle0), y: linkRadius * sin(angle0) };
      link._p1 = { x: linkRadius * cos(angle1), y: linkRadius * sin(angle1) };
    }
  }
};
Object.defineProperty(ChordNonRibbon, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ChordNonRibbon"
});
Object.defineProperty(ChordNonRibbon, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Chord.classNames.concat([ChordNonRibbon.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/SankeyNodes.js
var SankeyNodes = class extends FlowNodes {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "rectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, { themeTags: ["shape"] }, [this.rectangles.template])))
    });
    Object.defineProperty(this, "flow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const flow = this.flow;
    const node = super.makeNode(dataItem, "sankey");
    const rectangle = node.children.insertIndex(0, this.rectangles.make());
    this.rectangles.push(rectangle);
    rectangle._setSoft("fill", dataItem.get("fill"));
    rectangle._setSoft("fillPattern", dataItem.get("fillPattern"));
    dataItem.set("rectangle", rectangle);
    node.events.on("dragged", () => {
      const d3SankeyNode = node.dataItem.get("d3SankeyNode");
      if (d3SankeyNode) {
        if (flow) {
          if (flow.get("orientation") == "horizontal") {
            d3SankeyNode.x0 = node.x();
            d3SankeyNode.y0 = node.y();
          } else {
            d3SankeyNode.x0 = node.y();
            d3SankeyNode.y0 = node.x();
          }
          flow.updateSankey();
        }
      }
    });
    const label = this.labels.make();
    this.labels.push(label);
    if (flow) {
      label.addTag(flow.get("orientation", ""));
    }
    node.children.push(label);
    dataItem.set("label", label);
    label._setDataItem(dataItem);
    rectangle._setDataItem(dataItem);
    return node;
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      if (dataItem) {
        const sprite2 = bullet.get("sprite");
        if (sprite2) {
          const rectangle = dataItem.get("rectangle");
          const node = dataItem.get("node");
          const locationX = bullet.get("locationX", 0.5);
          const locationY = bullet.get("locationY", 0.5);
          if (rectangle) {
            sprite2.setAll({ x: node.x() + rectangle.width() * locationX, y: node.y() + rectangle.height() * locationY });
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    let rectangle = dataItem.get("rectangle");
    if (rectangle) {
      this.rectangles.removeValue(rectangle);
      rectangle.dispose();
    }
  }
  _updateNodeColor(dataItem) {
    const rectangle = dataItem.get("rectangle");
    if (rectangle) {
      rectangle.set("fill", dataItem.get("fill"));
      rectangle.set("fillPattern", dataItem.get("fillPattern"));
    }
  }
};
Object.defineProperty(SankeyNodes, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SankeyNodes"
});
Object.defineProperty(SankeyNodes, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FlowNodes.classNames.concat([SankeyNodes.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/SankeyLink.js
var SankeyLink = class extends FlowLink {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_svgPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElementNS("http://www.w3.org/2000/svg", "path")
    });
    Object.defineProperty(this, "_totalLength", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("source")) {
      const source2 = this.get("source");
      if (source2) {
        const sourceNode2 = source2.get("node");
        this._disposers.push(sourceNode2.events.on("positionchanged", () => {
          this.markDirty();
        }));
      }
    }
    if (this.isDirty("target")) {
      const target2 = this.get("target");
      if (target2) {
        const targetNode2 = target2.get("node");
        this._disposers.push(targetNode2.events.on("positionchanged", () => {
          this.markDirty();
        }));
      }
    }
    if (this.isPrivateDirty("orientation")) {
      const series = this.series;
      const dataItem = this.dataItem;
      if (dataItem && series) {
        series._updateLinkColor(dataItem);
      }
    }
    const target = this.get("target");
    const source = this.get("source");
    let sourceNode;
    let targetNode;
    if (source && target) {
      this._clear = true;
      sourceNode = source.get("node");
      targetNode = target.get("node");
      let x0 = 0;
      let x1 = 0;
      let y0 = 0;
      let y1 = 0;
      let xt0 = 0;
      let yt0 = 0;
      let xt1 = 0;
      let yt1 = 0;
      let xb0 = 0;
      let xb1 = 0;
      let yb0 = 0;
      let yb1 = 0;
      let xm0 = 0;
      let xm1 = 0;
      let ym0 = 0;
      let ym1 = 0;
      let angle0 = 0;
      let angle1 = 0;
      const dataItem = this.dataItem;
      if (dataItem) {
        const d3SankeyLink = dataItem.get("d3SankeyLink");
        if (d3SankeyLink) {
          let w = d3SankeyLink.width || 0;
          let orientation = this.getPrivate("orientation");
          if (orientation == "vertical") {
            if (sourceNode) {
              y0 = sourceNode.y() + sourceNode.get("dy", 0);
            }
            if (targetNode) {
              y1 = targetNode.y() + targetNode.get("dy", 0);
            }
            angle0 = 90;
            angle1 = 90;
            x0 = d3SankeyLink.y0 || 0;
            x1 = d3SankeyLink.y1 || 0;
            x0 += sourceNode.get("dx", 0);
            x1 += targetNode.get("dx", 0);
            if (y1 < y0) {
              [x0, x1] = [x1, x0];
              [y0, y1] = [y1, y0];
            }
            if (source.get("unknown")) {
              x0 = x1;
              y0 = y0 + (y1 - y0) / 2;
            }
            if (target.get("unknown")) {
              x1 = x0;
              y1 = y0 + (y1 - y0) / 2;
            }
            xt0 = x0 - w / 2;
            yt0 = y0;
            xt1 = x1 - w / 2;
            yt1 = y1;
            xb0 = x0 + w / 2;
            xb1 = x1 + w / 2;
            yb0 = y0;
            yb1 = y1;
            xm0 = x0;
            xm1 = x1;
            ym0 = y0;
            ym1 = y1;
          } else {
            if (sourceNode) {
              x0 = sourceNode.x() + sourceNode.get("dx", 0);
            }
            if (targetNode) {
              x1 = targetNode.x() + targetNode.get("dx", 0);
            }
            y0 = d3SankeyLink.y0 || 0;
            y1 = d3SankeyLink.y1 || 0;
            y0 += sourceNode.get("dy", 0);
            y1 += targetNode.get("dy", 0);
            if (x1 < x0) {
              [x0, x1] = [x1, x0];
              [y0, y1] = [y1, y0];
            }
            if (source.get("unknown")) {
              y0 = y1;
              x0 = x0 + (x1 - x0) / 2;
            }
            if (target.get("unknown")) {
              y1 = y0;
              x1 = x0 + (x1 - x0) / 2;
            }
            xt0 = x0;
            yt0 = y0 - w / 2;
            xt1 = x1;
            yt1 = y1 - w / 2;
            xb0 = x0;
            xb1 = x1;
            yb0 = y0 + w / 2;
            yb1 = y1 + w / 2;
            xm0 = x0;
            xm1 = x1;
            ym0 = y0;
            ym1 = y1;
          }
          if (round(xt0, 3) == round(xt1, 3)) {
            xt1 += 0.01;
          }
          if (round(yt0, 3) == round(yt1, 3)) {
            yt1 += 0.01;
          }
          if (round(xb0, 3) == round(xb1, 3)) {
            xb1 += 0.01;
          }
          if (round(yb0, 3) == round(yb1, 3)) {
            yb1 += 0.01;
          }
          let cpd = this.get("controlPointDistance", 0.2);
          cpd = Math.min(0.4999, cpd);
          let kxt0 = xt0 + (xt1 - xt0) * cpd * cos(angle0);
          let kyt0 = yt0 + (yt1 - yt0) * cpd * sin(angle0);
          let kxt1 = xt1 - (xt1 - xt0) * cpd * cos(angle1);
          let kyt1 = yt1 - (yt1 - yt0) * cpd * sin(angle1);
          let kxm0 = xm0 + (xm1 - xm0) * cpd * cos(angle0);
          let kym0 = ym0 + (ym1 - ym0) * cpd * sin(angle0);
          let kxm1 = xm1 - (xm1 - xm0) * cpd * cos(angle1);
          let kym1 = ym1 - (ym1 - ym0) * cpd * sin(angle1);
          let angle = getAngle({ x: kxt0, y: kyt0 }, { x: kxt1, y: kyt1 });
          let dx = (w / cos(angle) - w) / tan(angle) * cos(angle0);
          let dy = (w / sin(angle) - w) * tan(angle) * sin(angle0);
          let kxb0 = -dx / 2 + xb0 + (xb1 - xb0) * cpd * cos(angle0);
          let kyb0 = -dy / 2 + yb0 + (yb1 - yb0) * cpd * sin(angle0);
          let kxb1 = -dx / 2 + xb1 - (xb1 - xb0) * cpd * cos(angle1);
          let kyb1 = -dy / 2 + yb1 - (yb1 - yb0) * cpd * sin(angle1);
          kxt0 += dx / 2;
          kyt0 += dy / 2;
          kxt1 += dx / 2;
          kyt1 += dy / 2;
          if (orientation == "vertical") {
            kyt0 = Math.min(yt1, Math.max(yt0 + 1, kyt0));
            kyb0 = Math.min(yb1, Math.max(yb0 + 1, kyb0));
            kyt1 = Math.max(yt0, Math.min(yt1 - 1, kyt1));
            kyb1 = Math.max(yb0, Math.min(yb1 - 1, kyb1));
          } else {
            kxt0 = Math.min(xt1, Math.max(xt0 + 1, kxt0));
            kxb0 = Math.min(xb1, Math.max(xb0 + 1, kxb0));
            kxt1 = Math.max(xt0, Math.min(xt1 - 1, kxt1));
            kxb1 = Math.max(xb0, Math.min(xb1 - 1, kxb1));
          }
          let segment = [[xt0, yt0, xb0, yb0], [kxt0, kyt0, kxb0, kyb0], [kxt1, kyt1, kxb1, kyb1], [xt1, yt1, xb1, yb1]];
          this.set("draw", (display) => {
            const series = this.series;
            series._fillGenerator.context(display);
            series._fillGenerator(segment);
          });
          let middleSegment = [[xm0, ym0], [kxm0, kym0], [kxm1, kym1], [xm1, ym1]];
          const path3 = this.series._strokeGenerator(middleSegment);
          if (path3) {
            this._svgPath.setAttribute("d", path3);
            this._totalLength = this._svgPath.getTotalLength();
          }
        }
      }
    }
    if (this.series && this.dataItem) {
      this.series._positionBullets(this.dataItem);
    }
  }
  getPoint(location) {
    if (this._svgPath) {
      if (this._svgPath.getAttribute("d")) {
        let p0 = this._svgPath.getPointAtLength(location * this._totalLength - 0.1);
        let p1 = this._svgPath.getPointAtLength(location * this._totalLength + 0.1);
        let p = this.toGlobal(this._svgPath.getPointAtLength(location * this._totalLength));
        return { x: p.x, y: p.y, angle: getAngle(p0, p1) };
      }
    }
    return { x: 0, y: 0, angle: 0 };
  }
  _getTooltipPoint() {
    return this.toLocal(super._getTooltipPoint());
  }
};
Object.defineProperty(SankeyLink, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SankeyLink"
});
Object.defineProperty(SankeyLink, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FlowLink.classNames.concat([SankeyLink.className])
});

// node_modules/d3-sankey/node_modules/d3-array/src/ascending.js
function ascending_default2(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-sankey/node_modules/d3-array/src/bisector.js
function bisector_default(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x2) => f(d) - x2;
    compare = ascendingComparator(f);
  }
  function left2(a2, x2, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  function right2(a2, x2, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }
  function center2(a2, x2, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a2.length;
    const i = left2(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return { left: left2, center: center2, right: right2 };
}
function ascendingComparator(f) {
  return (d, x2) => ascending_default2(f(d), x2);
}

// node_modules/d3-sankey/node_modules/d3-array/src/number.js
function number_default2(x2) {
  return x2 === null ? NaN : +x2;
}

// node_modules/d3-sankey/node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default2);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default2).center;

// node_modules/d3-sankey/node_modules/d3-array/src/array.js
var array2 = Array.prototype;
var slice3 = array2.slice;
var map2 = array2.map;

// node_modules/d3-sankey/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

// node_modules/d3-sankey/node_modules/d3-array/src/max.js
function max4(values, valueof) {
  let max6;
  if (valueof === void 0) {
    for (const value2 of values) {
      if (value2 != null && (max6 < value2 || max6 === void 0 && value2 >= value2)) {
        max6 = value2;
      }
    }
  } else {
    let index2 = -1;
    for (let value2 of values) {
      if ((value2 = valueof(value2, ++index2, values)) != null && (max6 < value2 || max6 === void 0 && value2 >= value2)) {
        max6 = value2;
      }
    }
  }
  return max6;
}

// node_modules/d3-sankey/node_modules/d3-array/src/min.js
function min2(values, valueof) {
  let min4;
  if (valueof === void 0) {
    for (const value2 of values) {
      if (value2 != null && (min4 > value2 || min4 === void 0 && value2 >= value2)) {
        min4 = value2;
      }
    }
  } else {
    let index2 = -1;
    for (let value2 of values) {
      if ((value2 = valueof(value2, ++index2, values)) != null && (min4 > value2 || min4 === void 0 && value2 >= value2)) {
        min4 = value2;
      }
    }
  }
  return min4;
}

// node_modules/d3-sankey/node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array3, i0 = 0, i1 = array3.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array3[m + i0];
      array3[m + i0] = array3[i + i0];
      array3[i + i0] = t;
    }
    return array3;
  };
}

// node_modules/d3-sankey/node_modules/d3-array/src/sum.js
function sum2(values, valueof) {
  let sum4 = 0;
  if (valueof === void 0) {
    for (let value2 of values) {
      if (value2 = +value2) {
        sum4 += value2;
      }
    }
  } else {
    let index2 = -1;
    for (let value2 of values) {
      if (value2 = +valueof(value2, ++index2, values)) {
        sum4 += value2;
      }
    }
  }
  return sum4;
}

// node_modules/d3-sankey/src/align.js
function targetDepth(d) {
  return d.target.depth;
}
function left(node) {
  return node.depth;
}
function right(node, n) {
  return n - 1 - node.height;
}
function justify(node, n) {
  return node.sourceLinks.length ? node.depth : n - 1;
}
function center(node) {
  return node.targetLinks.length ? node.depth : node.sourceLinks.length ? min2(node.sourceLinks, targetDepth) - 1 : 0;
}

// node_modules/d3-sankey/src/constant.js
function constant(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-sankey/src/sankey.js
function ascendingSourceBreadth(a2, b) {
  return ascendingBreadth(a2.source, b.source) || a2.index - b.index;
}
function ascendingTargetBreadth(a2, b) {
  return ascendingBreadth(a2.target, b.target) || a2.index - b.index;
}
function ascendingBreadth(a2, b) {
  return a2.y0 - b.y0;
}
function value(d) {
  return d.value;
}
function defaultId(d) {
  return d.index;
}
function defaultNodes(graph) {
  return graph.nodes;
}
function defaultLinks(graph) {
  return graph.links;
}
function find(nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error("missing: " + id);
  return node;
}
function computeLinkBreadths({ nodes }) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}
function Sankey() {
  let x0 = 0, y0 = 0, x1 = 1, y1 = 1;
  let dx = 24;
  let dy = 8, py;
  let id = defaultId;
  let align = justify;
  let sort2;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let iterations = 6;
  function sankey() {
    const graph = { nodes: nodes.apply(null, arguments), links: links.apply(null, arguments) };
    computeNodeLinks(graph);
    computeNodeValues(graph);
    computeNodeDepths(graph);
    computeNodeHeights(graph);
    computeNodeBreadths(graph);
    computeLinkBreadths(graph);
    return graph;
  }
  sankey.update = function(graph) {
    computeLinkBreadths(graph);
    return graph;
  };
  sankey.nodeId = function(_) {
    return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), sankey) : id;
  };
  sankey.nodeAlign = function(_) {
    return arguments.length ? (align = typeof _ === "function" ? _ : constant(_), sankey) : align;
  };
  sankey.nodeSort = function(_) {
    return arguments.length ? (sort2 = _, sankey) : sort2;
  };
  sankey.nodeWidth = function(_) {
    return arguments.length ? (dx = +_, sankey) : dx;
  };
  sankey.nodePadding = function(_) {
    return arguments.length ? (dy = py = +_, sankey) : dy;
  };
  sankey.nodes = function(_) {
    return arguments.length ? (nodes = typeof _ === "function" ? _ : constant(_), sankey) : nodes;
  };
  sankey.links = function(_) {
    return arguments.length ? (links = typeof _ === "function" ? _ : constant(_), sankey) : links;
  };
  sankey.linkSort = function(_) {
    return arguments.length ? (linkSort = _, sankey) : linkSort;
  };
  sankey.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
  };
  sankey.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
  };
  sankey.iterations = function(_) {
    return arguments.length ? (iterations = +_, sankey) : iterations;
  };
  function computeNodeLinks({ nodes: nodes2, links: links2 }) {
    for (const [i, node] of nodes2.entries()) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    }
    const nodeById = new Map(nodes2.map((d, i) => [id(d, i, nodes2), d]));
    for (const [i, link] of links2.entries()) {
      link.index = i;
      let { source, target } = link;
      if (typeof source !== "object") source = link.source = find(nodeById, source);
      if (typeof target !== "object") target = link.target = find(nodeById, target);
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    }
    if (linkSort != null) {
      for (const { sourceLinks, targetLinks } of nodes2) {
        sourceLinks.sort(linkSort);
        targetLinks.sort(linkSort);
      }
    }
  }
  function computeNodeValues({ nodes: nodes2 }) {
    for (const node of nodes2) {
      node.value = node.fixedValue === void 0 ? Math.max(sum2(node.sourceLinks, value), sum2(node.targetLinks, value)) : node.fixedValue;
    }
  }
  function computeNodeDepths({ nodes: nodes2 }) {
    const n = nodes2.length;
    let current = new Set(nodes2);
    let next = /* @__PURE__ */ new Set();
    let x2 = 0;
    while (current.size) {
      for (const node of current) {
        node.depth = x2;
        for (const { target } of node.sourceLinks) {
          next.add(target);
        }
      }
      if (++x2 > n) throw new Error("circular link");
      current = next;
      next = /* @__PURE__ */ new Set();
    }
  }
  function computeNodeHeights({ nodes: nodes2 }) {
    const n = nodes2.length;
    let current = new Set(nodes2);
    let next = /* @__PURE__ */ new Set();
    let x2 = 0;
    while (current.size) {
      for (const node of current) {
        node.height = x2;
        for (const { source } of node.targetLinks) {
          next.add(source);
        }
      }
      if (++x2 > n) throw new Error("circular link");
      current = next;
      next = /* @__PURE__ */ new Set();
    }
  }
  function computeNodeLayers({ nodes: nodes2 }) {
    const x2 = max4(nodes2, (d) => d.depth) + 1;
    const kx2 = (x1 - x0 - dx) / (x2 - 1);
    const columns = new Array(x2);
    for (const node of nodes2) {
      const i = Math.max(0, Math.min(x2 - 1, Math.floor(align.call(null, node, x2))));
      node.layer = i;
      node.x0 = x0 + i * kx2;
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort2) for (const column of columns) {
      column.sort(sort2);
    }
    return columns;
  }
  function initializeNodeBreadths(columns) {
    const ky2 = min2(columns, (c3) => (y1 - y0 - (c3.length - 1) * py) / sum2(c3, value));
    for (const nodes2 of columns) {
      let y2 = y0;
      for (const node of nodes2) {
        node.y0 = y2;
        node.y1 = y2 + node.value * ky2;
        y2 = node.y1 + py;
        for (const link of node.sourceLinks) {
          link.width = link.value * ky2;
        }
      }
      y2 = (y1 - y2 + py) / (nodes2.length + 1);
      for (let i = 0; i < nodes2.length; ++i) {
        const node = nodes2[i];
        node.y0 += y2 * (i + 1);
        node.y1 += y2 * (i + 1);
      }
      reorderLinks(nodes2);
    }
  }
  function computeNodeBreadths(graph) {
    const columns = computeNodeLayers(graph);
    py = Math.min(dy, (y1 - y0) / (max4(columns, (c3) => c3.length) - 1));
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }
  function relaxLeftToRight(columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y2 = 0;
        let w = 0;
        for (const { source, value: value2 } of target.targetLinks) {
          let v2 = value2 * (target.layer - source.layer);
          y2 += targetTop(source, target) * v2;
          w += v2;
        }
        if (!(w > 0)) continue;
        let dy2 = (y2 / w - target.y0) * alpha;
        target.y0 += dy2;
        target.y1 += dy2;
        reorderNodeLinks(target);
      }
      if (sort2 === void 0) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }
  function relaxRightToLeft(columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y2 = 0;
        let w = 0;
        for (const { target, value: value2 } of source.sourceLinks) {
          let v2 = value2 * (target.layer - source.layer);
          y2 += sourceTop(source, target) * v2;
          w += v2;
        }
        if (!(w > 0)) continue;
        let dy2 = (y2 / w - source.y0) * alpha;
        source.y0 += dy2;
        source.y1 += dy2;
        reorderNodeLinks(source);
      }
      if (sort2 === void 0) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }
  function resolveCollisions(nodes2, alpha) {
    const i = nodes2.length >> 1;
    const subject = nodes2[i];
    resolveCollisionsBottomToTop(nodes2, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes2, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes2, y1, nodes2.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes2, y0, 0, alpha);
  }
  function resolveCollisionsTopToBottom(nodes2, y2, i, alpha) {
    for (; i < nodes2.length; ++i) {
      const node = nodes2[i];
      const dy2 = (y2 - node.y0) * alpha;
      if (dy2 > 1e-6) node.y0 += dy2, node.y1 += dy2;
      y2 = node.y1 + py;
    }
  }
  function resolveCollisionsBottomToTop(nodes2, y2, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes2[i];
      const dy2 = (node.y1 - y2) * alpha;
      if (dy2 > 1e-6) node.y0 -= dy2, node.y1 -= dy2;
      y2 = node.y0 - py;
    }
  }
  function reorderNodeLinks({ sourceLinks, targetLinks }) {
    if (linkSort === void 0) {
      for (const { source: { sourceLinks: sourceLinks2 } } of targetLinks) {
        sourceLinks2.sort(ascendingTargetBreadth);
      }
      for (const { target: { targetLinks: targetLinks2 } } of sourceLinks) {
        targetLinks2.sort(ascendingSourceBreadth);
      }
    }
  }
  function reorderLinks(nodes2) {
    if (linkSort === void 0) {
      for (const { sourceLinks, targetLinks } of nodes2) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }
  function targetTop(source, target) {
    let y2 = source.y0 - (source.sourceLinks.length - 1) * py / 2;
    for (const { target: node, width } of source.sourceLinks) {
      if (node === target) break;
      y2 += width + py;
    }
    for (const { source: node, width } of target.targetLinks) {
      if (node === source) break;
      y2 -= width;
    }
    return y2;
  }
  function sourceTop(source, target) {
    let y2 = target.y0 - (target.targetLinks.length - 1) * py / 2;
    for (const { source: node, width } of target.targetLinks) {
      if (node === source) break;
      y2 += width + py;
    }
    for (const { target: node, width } of source.sourceLinks) {
      if (node === target) break;
      y2 -= width;
    }
    return y2;
  }
  return sankey;
}

// node_modules/d3-sankey/node_modules/d3-path/src/path.js
var pi2 = Math.PI;
var tau3 = 2 * pi2;
var epsilon3 = 1e-6;
var tauEpsilon = tau3 - epsilon3;
function Path2() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null;
  this._ = "";
}
function path2() {
  return new Path2();
}
Path2.prototype = path2.prototype = {
  constructor: Path2,
  moveTo: function(x2, y2) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x2, y2) {
    this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  quadraticCurveTo: function(x1, y1, x2, y2) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon3)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon3) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon3) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da2 = ccw ? a0 - a1 : a1 - a0;
    if (r < 0) throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon3 || Math.abs(this._y1 - y0) > epsilon3) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r) return;
    if (da2 < 0) da2 = da2 % tau3 + tau3;
    if (da2 > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x2 - dx) + "," + (y2 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da2 > epsilon3) {
      this._ += "A" + r + "," + r + ",0," + +(da2 >= pi2) + "," + cw + "," + (this._x1 = x2 + r * Math.cos(a1)) + "," + (this._y1 = y2 + r * Math.sin(a1));
    }
  },
  rect: function(x2, y2, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/math.js
var epsilon4 = 1e-12;
var pi3 = Math.PI;
var halfPi2 = pi3 / 2;
var tau4 = 2 * pi3;

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // proceed
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// node_modules/d3-sankey/node_modules/d3-shape/src/array.js
var slice4 = Array.prototype.slice;

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/star.js
var kr = Math.sin(pi3 / 10) / Math.sin(7 * pi3 / 10);
var kx = Math.sin(tau4 / 10) * kr;
var ky = -Math.cos(tau4 / 10) * kr;

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = Math.sqrt(3);

// node_modules/d3-sankey/node_modules/d3-shape/src/symbol/wye.js
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;

// node_modules/d3-sankey/node_modules/d3-shape/src/noop.js
function noop_default2() {
}

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/basis.js
function point2(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      // proceed
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // proceed
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      // proceed
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, j = x2.length - 1;
    if (j > 0) {
      var x0 = x2[0], y0 = y2[0], dx = x2[j] - x0, dy = y2[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x2[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y2[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
var bundle_default = (function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
})(0.85);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x2, y2) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x2),
    that._y2 + that._k * (that._y1 - y2),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      // proceed
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinal_default = (function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
})(0);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalClosed_default = (function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
})(0);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // proceed
      default:
        point3(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalOpen_default = (function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
})(0);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x2, y2) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon4) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon4) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // proceed
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRom_default = (function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
})(0.5);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomClosed_default = (function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
})(0.5);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // proceed
      default:
        point4(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomOpen_default = (function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
})(0.5);

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) this._context.lineTo(x2, y2);
    else this._point = 1, this._context.moveTo(x2, y2);
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point5(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i) a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i) m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}

// node_modules/d3-sankey/node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/flow/Sankey.js
var Sankey2 = class extends Flow {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => SankeyLink._new(this._root, { themeTags: ["link", "shape"] }, [this.links.template])))
    });
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(SankeyNodes.new(this._root, {}))
    });
    Object.defineProperty(this, "_d3Sankey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Sankey()
    });
    Object.defineProperty(this, "_d3Graph", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fillGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: area_default()
    });
    Object.defineProperty(this, "_strokeGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: line_default()
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["sankey", this._settings.orientation || "horizontal"]);
    this._fillGenerator.y0(function(p) {
      return p[3];
    });
    this._fillGenerator.x0(function(p) {
      return p[2];
    });
    this._fillGenerator.y1(function(p) {
      return p[1];
    });
    this._fillGenerator.x1(function(p) {
      return p[0];
    });
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeLink(dataItem) {
    const source = dataItem.get("source");
    const target = dataItem.get("target");
    const link = this.links.make();
    if (source.get("unknown")) {
      link.addTag("source");
      link.addTag("unknown");
    }
    if (target.get("unknown")) {
      link.addTag("target");
      link.addTag("unknown");
    }
    this.linksContainer.children.push(link);
    link._setDataItem(dataItem);
    link.set("source", source);
    link.set("target", target);
    link.series = this;
    this.links.push(link);
    return link;
  }
  /**
   * @ignore
   */
  updateSankey() {
    const d3Graph = this._d3Graph;
    if (d3Graph) {
      this._d3Sankey.update(d3Graph);
      each(this.dataItems, (dataItem) => {
        const link = dataItem.get("link");
        link.setPrivate("orientation", this.get("orientation"));
        link.markDirty();
      });
    }
  }
  _updateLinkColor(dataItem) {
    super._updateLinkColor(dataItem);
    const orientation = this.get("orientation");
    const fillGradient = dataItem.get("link")._fillGradient;
    const strokeGradient = dataItem.get("link")._strokeGradient;
    if (orientation == "vertical") {
      if (fillGradient) {
        fillGradient.set("rotation", 90);
      }
      if (strokeGradient) {
        strokeGradient.set("rotation", 90);
      }
    } else {
      if (fillGradient) {
        fillGradient.set("rotation", 0);
      }
      if (strokeGradient) {
        strokeGradient.set("rotation", 0);
      }
    }
  }
  _getBulletLocation(bullet) {
    if (this.get("orientation") == "vertical") {
      return bullet.get("locationY", 0);
    } else {
      return bullet.get("locationX", 0);
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    let vertical = false;
    if (this.get("orientation") == "vertical") {
      vertical = true;
    }
    if (this.isDirty("orientation") || this.isDirty("linkTension")) {
      const linkTension = this.get("linkTension", 0.5);
      if (vertical) {
        this._fillGenerator.curve(curveMonotoneYTension(linkTension));
        this._strokeGenerator.curve(curveMonotoneYTension(linkTension));
      } else {
        this._fillGenerator.curve(curveMonotoneXTension(linkTension));
        this._strokeGenerator.curve(curveMonotoneXTension(linkTension));
      }
    }
    if (this._valuesDirty || this._sizeDirty || this.isDirty("nodePadding") || this.isDirty("nodeWidth") || this.isDirty("nodeAlign") || this.isDirty("nodeSort") || this.isDirty("orientation") || this.isDirty("linkTension") || this.isDirty("linkSort")) {
      if (this._nodesData.length > 0) {
        const d3Sankey = this._d3Sankey;
        let w = this.innerWidth();
        let h = this.innerHeight();
        if (vertical) {
          [w, h] = [h, w];
        }
        d3Sankey.size([w, h]);
        d3Sankey.nodePadding(this.get("nodePadding", 10));
        d3Sankey.nodeWidth(this.get("nodeWidth", 10));
        d3Sankey.nodeSort(this.get("nodeSort", null));
        d3Sankey.linkSort(this.get("linkSort"));
        switch (this.get("nodeAlign")) {
          case "right":
            d3Sankey.nodeAlign(right);
            break;
          case "justify":
            d3Sankey.nodeAlign(justify);
            break;
          case "center":
            d3Sankey.nodeAlign(center);
            break;
          default:
            d3Sankey.nodeAlign(left);
            break;
        }
        this._d3Graph = d3Sankey({ nodes: this._nodesData, links: this._linksData });
        each(this.dataItems, (dataItem) => {
          const link = dataItem.get("link");
          link.setPrivate("orientation", this.get("orientation"));
          link.markDirty();
        });
        const d3Graph = this._d3Graph;
        if (d3Graph) {
          const nodes = d3Graph.nodes;
          each(nodes, (d3SankeyNode) => {
            const dataItem = d3SankeyNode.dataItem;
            const node = dataItem.get("node");
            let x0;
            let x1;
            let y0;
            let y1;
            if (vertical) {
              x0 = d3SankeyNode.y0;
              x1 = d3SankeyNode.y1;
              y0 = d3SankeyNode.x0;
              y1 = d3SankeyNode.x1;
            } else {
              x0 = d3SankeyNode.x0;
              x1 = d3SankeyNode.x1;
              y0 = d3SankeyNode.y0;
              y1 = d3SankeyNode.y1;
            }
            if (isNumber(x0) && isNumber(x1) && isNumber(y0) && isNumber(y1)) {
              node.setAll({ x: x0, y: y0, width: x1 - x0, height: y1 - y0 });
              const rectangle = dataItem.get("rectangle");
              rectangle.setAll({ width: x1 - x0, height: y1 - y0 });
            }
          });
        }
      }
    }
  }
};
Object.defineProperty(Sankey2, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Sankey"
});
Object.defineProperty(Sankey2, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Flow.classNames.concat([Sankey2.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ArcDiagramNodes.js
var ArcDiagramNodes = class extends FlowNodes {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {}, [this.labels.template])))
    });
    Object.defineProperty(this, "flow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "circles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Circle._new(this._root, { themeTags: ["shape"] }, [this.circles.template])))
    });
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem, "ArcDiagram");
    const circle = node.children.insertIndex(0, this.circles.make());
    dataItem.set("circle", circle);
    circle._setSoft("fill", dataItem.get("fill"));
    circle._setSoft("fillPattern", dataItem.get("fillPattern"));
    const label = this.labels.make();
    this.labels.push(label);
    label.addTag("flow");
    label.addTag("arcdiagram");
    label.addTag("node");
    node.children.push(label);
    dataItem.set("label", label);
    label._setDataItem(dataItem);
    circle._setDataItem(dataItem);
    return node;
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    let circle = dataItem.get("circle");
    if (circle) {
      this.circles.removeValue(circle);
      circle.dispose();
    }
  }
  _updateNodeColor(dataItem) {
    const circle = dataItem.get("circle");
    if (circle) {
      circle.set("fill", dataItem.get("fill"));
      circle.set("fillPattern", dataItem.get("fillPattern"));
    }
  }
};
Object.defineProperty(ArcDiagramNodes, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ArcDiagramNodes"
});
Object.defineProperty(ArcDiagramNodes, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FlowNodes.classNames.concat([ArcDiagramNodes.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ArcDiagramLink.js
var ArcDiagramLink = class extends FlowLink {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_p0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_p1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("source")) {
      const source = this.get("source");
      if (source) {
        const sourceNode = source.get("node");
        this._disposers.push(sourceNode.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        }));
      }
    }
    if (this.isDirty("target")) {
      const target = this.get("target");
      if (target) {
        const targetNode = target.get("node");
        this._disposers.push(targetNode.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        }));
      }
    }
    if (this.isPrivateDirty("orientation")) {
      const series = this.series;
      const dataItem = this.dataItem;
      if (dataItem && series) {
        series._updateLinkColor(dataItem);
      }
    }
    if (this.series && this.dataItem) {
      this.series._positionBullets(this.dataItem);
    }
    if (this.get("strokeStyle") == "gradient") {
      this.set("isMeasured", true);
    } else {
      this.set("isMeasured", false);
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._draw();
    }
  }
  _draw() {
    const target = this.get("target");
    const source = this.get("source");
    if (source && target) {
      let sourceNode = source.get("node");
      let targetNode = target.get("node");
      const x0 = sourceNode.x();
      const y0 = sourceNode.y();
      const x1 = targetNode.x();
      const y1 = targetNode.y();
      this._p0 = { x: x0, y: y0 };
      this._p1 = { x: x1, y: y1 };
      let radius = 0;
      if (this.getPrivate("orientation") == "vertical") {
        radius = (y1 - y0) / 2;
        let d = 1;
        if (y0 > y1) {
          d = -1;
        }
        this._display.arc(x0, y0 + radius, radius * d, -Math.PI / 2, Math.PI / 2);
      } else {
        radius = (x1 - x0) / 2;
        let d = 1;
        if (x0 > x1) {
          d = -1;
        }
        this._display.arc(x0 + radius, y0, radius * d, -Math.PI, 0);
      }
      this._radius = radius;
    }
  }
  getPoint(location) {
    if (this._p0 && this._p1) {
      const radius = this._radius;
      if (this.getPrivate("orientation") == "vertical") {
        let angle = -90 + 180 * location;
        return { y: this._p0.y + radius + radius * sin(angle), x: radius * cos(angle), angle: angle + 90 };
      } else {
        let angle = 180 + 180 * location;
        return { x: this._p0.x + radius + radius * cos(angle), y: radius * sin(angle), angle: angle + 90 };
      }
    }
    return { x: 0, y: 0, angle: 0 };
  }
};
Object.defineProperty(ArcDiagramLink, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ArcDiagramLink"
});
Object.defineProperty(ArcDiagramLink, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: FlowLink.classNames.concat([ArcDiagramLink.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/flow/ArcDiagram.js
var ArcDiagram = class extends Flow {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => ArcDiagramLink._new(this._root, { themeTags: ["link", "shape"] }, [this.links.template])))
    });
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(ArcDiagramNodes.new(this._root, {}))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["arcdiagram", this._settings.orientation || "horizontal"]);
    super._afterNew();
    this.nodes.children.push(this.bulletsContainer);
  }
  /**
   * @ignore
   */
  makeLink(dataItem) {
    const link = this.nodes.children.moveValue(this.links.make(), 0);
    this.links.push(link);
    link._setDataItem(dataItem);
    link.set("source", dataItem.get("source"));
    link.set("target", dataItem.get("target"));
    link.series = this;
    return link;
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this._valuesDirty || this._sizeDirty || this.isDirty("orientation")) {
      let width = 1;
      const orientation = this.get("orientation");
      each(this.dataItems, (dataItem) => {
        const link = dataItem.get("link");
        link.setPrivate("orientation", this.get("orientation"));
      });
      if (orientation == "vertical") {
        width = this.innerHeight();
      } else {
        width = this.innerWidth();
      }
      let sum4 = 0;
      let low = Infinity;
      let radiusKey = this.get("radiusKey");
      if (radiusKey != "none") {
        each(this.nodes.dataItems, (dataItem) => {
          let value2 = dataItem.get(radiusKey + "Working");
          sum4 += value2;
          low = Math.min(low, value2);
        });
      }
      const count2 = this.nodes.dataItems.length;
      const nodePadding = this.get("nodePadding", 10);
      const minRadius = this.get("minRadius", 5);
      width = width - count2 * (nodePadding + minRadius * 2);
      if (width <= 0) {
        width = 0;
      }
      let sumNoLow = sum4 - count2 * low;
      let c3 = width / sumNoLow;
      let prevCoord = 0;
      const animationDuration = this.get("animationDuration", 0);
      const animationEasing = this.get("animationEasing");
      each(this.nodes.dataItems, (dataItem) => {
        let value2 = dataItem.get(radiusKey + "Working");
        const node = dataItem.get("node");
        let radius = minRadius + c3 * (value2 - low) / 2;
        if (radiusKey == "none") {
          radius = minRadius + width / count2 / 2;
        }
        if (orientation == "vertical") {
          node.set("x", 0);
          const y2 = prevCoord + nodePadding + radius;
          if (node.y() == 0) {
            node.set("y", y2);
          } else {
            node.animate({ key: "y", to: y2, duration: animationDuration, easing: animationEasing });
          }
        } else {
          node.set("y", 0);
          const x2 = prevCoord + nodePadding + radius;
          if (node.x() == 0) {
            node.set("x", x2);
          } else {
            node.animate({ key: "x", to: x2, duration: animationDuration, easing: animationEasing });
          }
        }
        prevCoord = prevCoord + nodePadding + radius * 2;
        dataItem.get("circle").set("radius", radius);
      });
    }
  }
  _updateLinkColor(dataItem) {
    super._updateLinkColor(dataItem);
    const orientation = this.get("orientation");
    const fillGradient = dataItem.get("link")._fillGradient;
    const strokeGradient = dataItem.get("link")._strokeGradient;
    if (orientation == "vertical") {
      if (fillGradient) {
        fillGradient.set("rotation", 90);
      }
      if (strokeGradient) {
        strokeGradient.set("rotation", 90);
      }
    } else {
      if (fillGradient) {
        fillGradient.set("rotation", 0);
      }
      if (strokeGradient) {
        strokeGradient.set("rotation", 0);
      }
    }
  }
};
Object.defineProperty(ArcDiagram, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ArcDiagram"
});
Object.defineProperty(ArcDiagram, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Flow.classNames.concat([ArcDiagram.className])
});
export {
  ArcDiagram,
  ArcDiagramLink,
  ArcDiagramNodes,
  Chord,
  ChordDirected,
  ChordLink,
  ChordLinkDirected,
  ChordNodes,
  ChordNonRibbon,
  FlowDefaultTheme as DefaultTheme,
  Flow,
  FlowLink,
  FlowNode,
  FlowNodes,
  Sankey2 as Sankey,
  SankeyLink,
  SankeyNodes
};
//# sourceMappingURL=flow-DXDBENG5.js.map
