import {
  Container,
  ListAutoDispose,
  p100
} from "./chunk-BGHA5GQX.js";
import {
  each
} from "./chunk-T2HS62VR.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Chart.js
var Chart = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "chartContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, { width: p100, height: p100, interactiveChildren: false }))
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, { interactiveChildren: false, isMeasured: false, position: "absolute", width: p100, height: p100 })
    });
  }
};
Object.defineProperty(Chart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Chart"
});
Object.defineProperty(Chart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Chart.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/SerialChart.js
var SerialChart = class extends Chart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "seriesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, { width: p100, height: p100, isMeasured: false })
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
  }
  _afterNew() {
    super._afterNew();
    this._disposers.push(this.series);
    const children = this.seriesContainer.children;
    this._disposers.push(this.series.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (series) => {
          this._removeSeries(series);
        });
        const colors = this.get("colors");
        if (colors) {
          colors.reset();
        }
        const patterns = this.get("patterns");
        if (patterns) {
          patterns.reset();
        }
      } else if (change.type === "push") {
        children.moveValue(change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "setIndex") {
        children.setIndex(change.index, change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "insertIndex") {
        children.insertIndex(change.index, change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeSeries(change.oldValue);
      } else if (change.type === "moveIndex") {
        children.moveValue(change.value, change.newIndex);
        this._processSeries(change.value);
      } else if (change.type === "swap") {
        const a = change.a;
        const b = change.b;
        const aIndex = this.series.indexOf(a);
        const bIndex = this.series.indexOf(b);
        children.moveValue(a, bIndex);
        children.moveValue(b, aIndex);
        this.series.each((series) => {
          this._processSeries(series);
          series.markDirtyValues();
        });
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  _processSeries(series) {
    series.chart = this;
    series._placeBulletsContainer(this);
  }
  _removeSeries(series) {
    series._handleRemoved();
    if (!series.isDisposed()) {
      this.seriesContainer.children.removeValue(series);
      series._removeBulletsContainer();
    }
  }
};
Object.defineProperty(SerialChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SerialChart"
});
Object.defineProperty(SerialChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Chart.classNames.concat([SerialChart.className])
});

export {
  Chart,
  SerialChart
};
//# sourceMappingURL=chunk-NAZ7YOFP.js.map
