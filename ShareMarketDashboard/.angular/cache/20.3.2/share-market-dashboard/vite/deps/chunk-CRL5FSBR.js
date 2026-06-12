import {
  Container,
  List,
  Settings
} from "./chunk-BGHA5GQX.js";
import {
  each,
  keys
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";

// node_modules/@amcharts/amcharts5/.internal/core/util/Data.js
var ListData = class extends List {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "processor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  incrementRef() {
  }
  /**
   * @ignore
   */
  decrementRef() {
  }
  _onPush(newValue) {
    if (this.processor) {
      this.processor.processRow(newValue);
    }
    super._onPush(newValue);
  }
  _onInsertIndex(index, newValue) {
    if (this.processor) {
      this.processor.processRow(newValue);
    }
    super._onInsertIndex(index, newValue);
  }
  _onSetIndex(index, oldValue, newValue) {
    if (this.processor) {
      this.processor.processRow(newValue);
    }
    super._onSetIndex(index, oldValue, newValue);
  }
};
var JsonData = class {
  constructor(value) {
    Object.defineProperty(this, "processor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._value = value;
  }
  incrementRef() {
  }
  decrementRef() {
  }
};

// node_modules/@amcharts/amcharts5/.internal/core/render/Component.js
var DataItem = class extends Settings {
  constructor(component, dataContext, settings) {
    super(settings);
    Object.defineProperty(this, "component", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "dataContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "open", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "close", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.dataContext = dataContext;
    this.component = component;
    this._settings.visible = true;
    this._checkDirty();
  }
  /**
   * @ignore
   */
  markDirty() {
    this.component.markDirtyValues(this);
  }
  _startAnimation() {
    this.component._root._addAnimation(this);
  }
  _animationTime() {
    return this.component._root.animationTime;
  }
  _dispose() {
    if (this.component) {
      this.component.disposeDataItem(this);
    }
    super._dispose();
  }
  /**
   * Shows a data item that's currently hidden.
   */
  show(duration) {
    this.setRaw("visible", true);
    if (this.component) {
      this.component.showDataItem(this, duration);
    }
  }
  /**
   * Hides a data item that's currently visible.
   */
  hide(duration) {
    this.setRaw("visible", false);
    if (this.component) {
      this.component.hideDataItem(this, duration);
    }
  }
  isHidden() {
    return !this.get("visible");
  }
};
var Component = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListData()
    });
    Object.defineProperty(this, "_dataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_mainDataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._dataItems
    });
    Object.defineProperty(this, "valueFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "fields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["id"]
    });
    Object.defineProperty(this, "_valueFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueFieldsF", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fieldsF", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valuesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataChanged", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "inited", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  /**
   * Component's data.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/data/} for more info
   */
  set data(data) {
    data.incrementRef();
    this._data.decrementRef();
    this._data = data;
  }
  /**
   * @return  Data
   */
  get data() {
    return this._data;
  }
  _dispose() {
    super._dispose();
    this._data.decrementRef();
  }
  _onDataClear() {
  }
  _afterNew() {
    super._afterNew();
    this._data.incrementRef();
    this._updateFields();
    this._disposers.push(this.data.events.onAll((change) => {
      const dataItems = this._mainDataItems;
      this.markDirtyValues();
      this._markDirtyGroup();
      this._dataChanged = true;
      if (change.type === "clear") {
        each(dataItems, (dataItem) => {
          dataItem.dispose();
        });
        dataItems.length = 0;
        this._onDataClear();
      } else if (change.type === "push") {
        const dataItem = new DataItem(this, change.newValue, this._makeDataItem(change.newValue));
        dataItems.push(dataItem);
        this.processDataItem(dataItem);
      } else if (change.type === "setIndex") {
        const dataItem = dataItems[change.index];
        const properties = this._makeDataItem(change.newValue);
        if (dataItem.bullets && dataItem.bullets.length == 0) {
          dataItem.bullets = void 0;
        }
        keys(properties).forEach((key) => {
          dataItem.animate({
            key,
            to: properties[key],
            duration: this.get("interpolationDuration", 0),
            easing: this.get("interpolationEasing")
          });
        });
        dataItem.dataContext = change.newValue;
      } else if (change.type === "insertIndex") {
        const dataItem = new DataItem(this, change.newValue, this._makeDataItem(change.newValue));
        dataItems.splice(change.index, 0, dataItem);
        this.processDataItem(dataItem);
      } else if (change.type === "removeIndex") {
        const dataItem = dataItems[change.index];
        dataItem.dispose();
        dataItems.splice(change.index, 1);
      } else if (change.type === "moveIndex") {
        const dataItem = dataItems[change.oldIndex];
        dataItems.splice(change.oldIndex, 1);
        dataItems.splice(change.newIndex, 0, dataItem);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
      this._afterDataChange();
    }));
  }
  _updateFields() {
    if (this.valueFields) {
      this._valueFields = [];
      this._valueFieldsF = {};
      each(this.valueFields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._valueFields.push(key);
          this._valueFieldsF[key] = { fieldKey: key + "Field", workingKey: key + "Working" };
        }
      });
    }
    if (this.fields) {
      this._fields = [];
      this._fieldsF = {};
      each(this.fields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._fields.push(key);
          this._fieldsF[key] = key + "Field";
        }
      });
    }
  }
  /**
   * A list of component's data items.
   *
   * @return  Data items
   */
  get dataItems() {
    return this._dataItems;
  }
  processDataItem(_dataItem) {
  }
  _makeDataItem(data) {
    const output = {};
    if (this._valueFields) {
      each(this._valueFields, (key) => {
        const field = this.get(this._valueFieldsF[key].fieldKey);
        output[key] = data[field];
        output[this._valueFieldsF[key].workingKey] = output[key];
      });
    }
    if (this._fields) {
      each(this._fields, (key) => {
        const field = this.get(this._fieldsF[key]);
        output[key] = data[field];
      });
    }
    return output;
  }
  /**
   * Creates a new data item and processes it.
   *
   * @param   data         Data item settings
   * @param   dataContext  Data context
   * @return               New data item
   */
  makeDataItem(data, dataContext) {
    let dataItem = new DataItem(this, dataContext, data);
    this.processDataItem(dataItem);
    return dataItem;
  }
  /**
   * Adds new explicit data item to series.
   *
   * @param   data         Data item settings
   * @param   dataContext  Data context
   * @return               New data item
   */
  pushDataItem(data, dataContext) {
    const dataItem = this.makeDataItem(data, dataContext);
    this._mainDataItems.push(dataItem);
    return dataItem;
  }
  /**
   * @ignore
   */
  disposeDataItem(_dataItem) {
  }
  /**
   * Shows component's data item.
   *
   * @param   dataItem   Data item
   * @param   _duration  Animation duration in milliseconds
   * @return             Promise
   */
  showDataItem(dataItem, _duration) {
    return __awaiter(this, void 0, void 0, function* () {
      dataItem.set("visible", true);
    });
  }
  /**
   * Hides component's data item.
   *
   * @param   dataItem   Data item
   * @param   _duration  Animation duration in milliseconds
   * @return             Promise
   */
  hideDataItem(dataItem, _duration) {
    return __awaiter(this, void 0, void 0, function* () {
      dataItem.set("visible", false);
    });
  }
  _clearDirty() {
    super._clearDirty();
    this._valuesDirty = false;
  }
  _afterDataChange() {
  }
  _afterChanged() {
    super._afterChanged();
    if (this._dataChanged) {
      const type = "datavalidated";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, { type, target: this });
      }
      this._dataChanged = false;
    }
    this.inited = true;
  }
  /**
   * Forces a repaint of the element which relies on data.
   *
   * @since 5.0.21
   */
  markDirtyValues(_dataItem) {
    this.markDirty();
    this._valuesDirty = true;
  }
  _markDirtyGroup() {
    this._dataGrouped = false;
  }
  /**
   * @ignore
   */
  markDirtySize() {
    this._sizeDirty = true;
    this.markDirty();
  }
};
Object.defineProperty(Component, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Component"
});
Object.defineProperty(Component, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Component.className])
});

export {
  ListData,
  JsonData,
  DataItem,
  Component
};
//# sourceMappingURL=chunk-CRL5FSBR.js.map
