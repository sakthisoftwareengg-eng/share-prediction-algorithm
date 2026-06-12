import {
  Button
} from "./chunk-KXW2OGU6.js";
import "./chunk-E32SSC6Z.js";
import {
  Entity,
  Graphics
} from "./chunk-BGHA5GQX.js";
import {
  each
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/plugins/sliceGrouper/SliceGrouper.js
var SliceGrouper = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "zoomOutButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this._setRawDefault("threshold", 5);
    this._setRawDefault("groupName", "Other");
    this._setRawDefault("clickBehavior", "none");
    this.initZoomButton();
    this._root.addDisposer(this);
    const series = this.get("series");
    if (series) {
      const colors = series.get("colors");
      if (colors) {
        this.setPrivate("currentStep", colors.getPrivate("currentStep"));
        this.setPrivate("currentPass", colors.getPrivate("currentPass"));
      }
    }
  }
  initZoomButton() {
    const clickBehavior = this.get("clickBehavior");
    if (clickBehavior !== "none") {
      const container = this.root.tooltipContainer;
      this.zoomOutButton = container.children.push(Button.new(this._root, {
        themeTags: ["zoom"],
        icon: Graphics.new(this._root, {
          themeTags: ["button", "icon"]
        })
      }));
      this.zoomOutButton.hide();
      this.zoomOutButton.events.on("click", () => {
        this.zoomOut();
      });
    }
  }
  handleData() {
    const series = this.get("series");
    if (series) {
      let groupDataItem = this.getPrivate("groupDataItem");
      if (!groupDataItem) {
        const legend = this.get("legend");
        const categoryField = series.get("categoryField", "category");
        const valueField = series.get("valueField", "value");
        const groupSliceData = {};
        groupSliceData[categoryField] = this.get("groupName", "");
        groupSliceData[valueField] = 0;
        const colors = series.get("colors");
        if (colors) {
          colors.setPrivate("currentStep", this.getPrivate("currentStep"));
          colors.setPrivate("currentPass", this.getPrivate("currentPass"));
        }
        series.data.push(groupSliceData);
        groupDataItem = series.dataItems[series.dataItems.length - 1];
        groupDataItem.get("slice").events.on("click", () => {
          this.handleClick();
        });
        this.setPrivate("groupDataItem", groupDataItem);
        if (legend) {
          legend.data.push(groupDataItem);
          groupDataItem.on("visible", (visible) => {
            if (visible) {
              this.zoomOut();
            }
          });
        }
      }
      const threshold = this.get("threshold", 0);
      const limit = this.get("limit", 1e3);
      const normalDataItems = [];
      const smallDataItems = [];
      let groupValue = 0;
      if (threshold || limit) {
        each(series.dataItems, (item, index) => {
          const legendDataItem = item.get("legendDataItem");
          if ((item.get("valuePercentTotal") <= threshold || index > limit - 1) && groupDataItem !== item) {
            groupValue += item.get("value", 0);
            smallDataItems.push(item);
            item.hide(0);
            if (legendDataItem) {
              legendDataItem.get("itemContainer").hide(0);
            }
          } else {
            normalDataItems.push(item);
            if (legendDataItem) {
              legendDataItem.get("itemContainer").show(0);
            }
          }
        });
        this.setPrivate("normalDataItems", normalDataItems);
        this.setPrivate("smallDataItems", smallDataItems);
        this.updateGroupDataItem(groupValue);
      }
    }
  }
  /**
   * Resets slice setup to original grouping state.
   */
  zoomOut() {
    const groupDataItem = this.getPrivate("groupDataItem");
    if (groupDataItem) {
      groupDataItem.show();
    }
    const clickBehavior = this.get("clickBehavior");
    if (clickBehavior == "zoom") {
      const normalDataItems = this.getPrivate("normalDataItems", []);
      each(normalDataItems, (item, _index) => {
        item.show();
      });
    }
    const smallDataItems = this.getPrivate("smallDataItems", []);
    each(smallDataItems, (item, _index) => {
      item.hide();
    });
    if (this.zoomOutButton) {
      this.zoomOutButton.hide();
    }
  }
  updateGroupDataItem(groupValue) {
    const series = this.get("series");
    if (series) {
      const groupSliceData = {};
      const categoryField = series.get("categoryField", "category");
      const valueField = series.get("valueField", "value");
      groupSliceData[categoryField] = this.get("groupName", "");
      groupSliceData[valueField] = groupValue;
      series.data.setIndex(series.data.length - 1, groupSliceData);
      const groupDataItem = this.getPrivate("groupDataItem");
      if (groupValue == 0) {
        groupDataItem.hide(0);
      } else if (groupDataItem.isHidden()) {
        groupDataItem.show();
      }
      const clickBehavior = this.get("clickBehavior");
      if (clickBehavior != "none") {
        groupDataItem.get("slice").set("toggleKey", "none");
      }
    }
  }
  handleClick() {
    const clickBehavior = this.get("clickBehavior");
    const smallDataItems = this.getPrivate("smallDataItems");
    if (clickBehavior == "none" || smallDataItems && smallDataItems.length == 0) {
      return;
    }
    const series = this.get("series");
    const groupDataItem = this.getPrivate("groupDataItem");
    groupDataItem.hide();
    each(series.dataItems, (item) => {
      if (smallDataItems.indexOf(item) !== -1) {
        item.show();
      } else if (clickBehavior == "zoom") {
        item.hide();
      }
    });
    this.zoomOutButton.show();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("series")) {
      const series = this.get("series");
      if (series) {
        series.events.on("datavalidated", (_ev) => {
          this.removePrivate("groupDataItem");
          this.handleData();
        });
      }
    }
  }
};
Object.defineProperty(SliceGrouper, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SliceGrouper"
});
Object.defineProperty(SliceGrouper, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([SliceGrouper.className])
});
export {
  SliceGrouper
};
//# sourceMappingURL=sliceGrouper-4GYO4NFM.js.map
