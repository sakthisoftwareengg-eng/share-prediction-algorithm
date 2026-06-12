import {
  Component
} from "./chunk-CRL5FSBR.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Color,
  Container,
  List,
  Percent,
  getWeek,
  p100,
  percentInterpolate
} from "./chunk-BGHA5GQX.js";
import {
  each,
  find,
  isNumber,
  map
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";
import {
  __export
} from "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/core/util/Time.js
var Time_exports = {};
__export(Time_exports, {
  add: () => add,
  checkChange: () => checkChange,
  chooseInterval: () => chooseInterval,
  copy: () => copy,
  getDateIntervalDuration: () => getDateIntervalDuration,
  getDuration: () => getDuration,
  getIntervalDuration: () => getIntervalDuration,
  getNextUnit: () => getNextUnit,
  getTime: () => getTime,
  getUnitValue: () => getUnitValue,
  now: () => now,
  roun: () => roun,
  round: () => round,
  sleep: () => sleep,
  timeUnitDurations: () => timeUnitDurations
});
function sleep(ms) {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
}
var timeUnitDurations = {
  millisecond: 1,
  second: 1e3,
  minute: 6e4,
  hour: 36e5,
  day: 864e5,
  week: 6048e5,
  month: 365.242 / 12 * 864e5,
  year: 31536e6
};
function getNextUnit(unit) {
  switch (unit) {
    case "year":
      return;
    case "month":
      return "year";
    case "week":
      return "month";
    case "day":
      return "month";
    // not a mistake
    case "hour":
      return "day";
    case "minute":
      return "hour";
    case "second":
      return "minute";
    case "millisecond":
      return "second";
  }
}
function getDuration(unit, count) {
  if (count == null) {
    count = 1;
  }
  return timeUnitDurations[unit] * count;
}
function getIntervalDuration(interval) {
  if (interval) {
    return timeUnitDurations[interval.timeUnit] * interval.count;
  }
  return 0;
}
function getDateIntervalDuration(interval, date, firstDateOfWeek, utc, timezone) {
  const unit = interval.timeUnit;
  const count = interval.count;
  if (unit == "hour" || unit == "minute" || unit == "second" || unit == "millisecond") {
    return timeUnitDurations[interval.timeUnit] * interval.count;
  } else {
    const firstTime = round(new Date(date.getTime()), unit, count, firstDateOfWeek, utc, void 0, timezone).getTime();
    let lastTime = firstTime + count * getDuration(unit) * 1.05;
    lastTime = round(new Date(lastTime), unit, 1, firstDateOfWeek, utc, void 0, timezone).getTime();
    return lastTime - firstTime;
  }
}
function now() {
  return /* @__PURE__ */ new Date();
}
function getTime() {
  return now().getTime();
}
function copy(date) {
  return new Date(date.getTime());
}
function checkChange(timeOne, timeTwo, unit, utc, timezone) {
  if (timeTwo - timeOne > getDuration(unit, 1.2)) {
    return true;
  }
  let dateOne = new Date(timeOne);
  let dateTwo = new Date(timeTwo);
  if (timezone) {
    dateOne = timezone.convertLocal(dateOne);
    dateTwo = timezone.convertLocal(dateTwo);
  }
  let timeZoneOffset1 = 0;
  let timeZoneOffset2 = 0;
  if (!utc && unit != "millisecond") {
    timeZoneOffset1 = dateOne.getTimezoneOffset();
    dateOne.setUTCMinutes(dateOne.getUTCMinutes() - timeZoneOffset1);
    timeZoneOffset2 = dateTwo.getTimezoneOffset();
    dateTwo.setUTCMinutes(dateTwo.getUTCMinutes() - timeZoneOffset2);
  }
  let changed = false;
  switch (unit) {
    case "year":
      if (dateOne.getUTCFullYear() != dateTwo.getUTCFullYear()) {
        changed = true;
      }
      break;
    case "month":
      if (dateOne.getUTCFullYear() != dateTwo.getUTCFullYear()) {
        changed = true;
      } else if (dateOne.getUTCMonth() != dateTwo.getUTCMonth()) {
        changed = true;
      }
      break;
    case "day":
      if (dateOne.getUTCMonth() != dateTwo.getUTCMonth()) {
        changed = true;
      } else if (dateOne.getUTCDate() != dateTwo.getUTCDate()) {
        changed = true;
      }
      break;
    case "hour":
      if (dateOne.getUTCHours() != dateTwo.getUTCHours()) {
        changed = true;
      }
      break;
    case "minute":
      if (dateOne.getUTCMinutes() != dateTwo.getUTCMinutes()) {
        changed = true;
      }
      break;
    case "second":
      if (dateOne.getUTCSeconds() != dateTwo.getUTCSeconds()) {
        changed = true;
      }
      break;
    case "millisecond":
      if (dateOne.getTime() != dateTwo.getTime()) {
        changed = true;
      }
      break;
  }
  if (changed) {
    return changed;
  }
  let nextUnit = getNextUnit(unit);
  if (nextUnit) {
    return checkChange(timeOne, timeTwo, nextUnit, utc, timezone);
  } else {
    return false;
  }
}
function add(date, unit, count, utc, timezone) {
  let timeZoneOffset = 0;
  if (!utc && unit != "millisecond") {
    timeZoneOffset = date.getTimezoneOffset();
    if (timezone) {
      timeZoneOffset -= timezone.offsetUTC(date);
    }
    date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffset);
  }
  switch (unit) {
    case "day":
      let day = date.getUTCDate();
      date.setUTCDate(day + count);
      break;
    case "second":
      let seconds = date.getUTCSeconds();
      date.setUTCSeconds(seconds + count);
      break;
    case "millisecond":
      let milliseconds = date.getUTCMilliseconds();
      date.setUTCMilliseconds(milliseconds + count);
      break;
    case "hour":
      let hours = date.getUTCHours();
      date.setUTCHours(hours + count);
      break;
    case "minute":
      let minutes = date.getUTCMinutes();
      date.setUTCMinutes(minutes + count);
      break;
    case "year":
      let year = date.getUTCFullYear();
      date.setUTCFullYear(year + count);
      break;
    case "month":
      const endDays = date.getUTCDate();
      const startDays = new Date(date.getUTCFullYear(), date.getUTCMonth(), 0).getUTCDate();
      let month = date.getUTCMonth();
      if (endDays > startDays) {
        date.setUTCMonth(month + count, startDays);
      } else {
        date.setUTCMonth(month + count);
      }
      break;
    case "week":
      let wday = date.getUTCDate();
      date.setUTCDate(wday + count * 7);
      break;
  }
  if (!utc && unit != "millisecond") {
    date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
    if (unit == "day" || unit == "week" || unit == "month" || unit == "year") {
      let newTimeZoneOffset = date.getTimezoneOffset();
      if (timezone) {
        newTimeZoneOffset += timezone.offsetUTC(date);
      }
      if (newTimeZoneOffset != timeZoneOffset) {
        let diff = newTimeZoneOffset - timeZoneOffset;
        date.setUTCMinutes(date.getUTCMinutes() + diff);
        if (date.getTimezoneOffset() != newTimeZoneOffset) {
          date.setUTCMinutes(date.getUTCMinutes() - diff);
        }
      }
    }
  }
  return date;
}
function roun(time, unit, count, root, firstTime) {
  let firstDate;
  if (firstTime != null) {
    firstDate = new Date(firstTime);
  }
  return round(new Date(time), unit, count, root.locale.firstDayOfWeek, root.utc, firstDate, root.timezone).getTime();
}
function round(date, unit, count, firstDateOfWeek, utc, firstDate, timezone) {
  if (!timezone || utc) {
    let timeZoneOffset = 0;
    if (!utc && unit != "millisecond") {
      timeZoneOffset = date.getTimezoneOffset();
      date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffset);
    }
    switch (unit) {
      case "day":
        let day = date.getUTCDate();
        if (count > 1) {
          if (firstDate) {
            firstDate = round(firstDate, "day", 1);
            let difference = date.getTime() - firstDate.getTime();
            let unitCount = Math.floor(difference / getDuration("day") / count);
            let duration = getDuration("day", unitCount * count);
            date.setTime(firstDate.getTime() + duration - timeZoneOffset * getDuration("minute"));
          }
        } else {
          date.setUTCDate(day);
        }
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "second":
        let seconds = date.getUTCSeconds();
        if (count > 1) {
          seconds = Math.floor(seconds / count) * count;
        }
        date.setUTCSeconds(seconds, 0);
        break;
      case "millisecond":
        if (count == 1) {
          return date;
        }
        let milliseconds = date.getUTCMilliseconds();
        milliseconds = Math.floor(milliseconds / count) * count;
        date.setUTCMilliseconds(milliseconds);
        break;
      case "hour":
        let hours = date.getUTCHours();
        if (count > 1) {
          hours = Math.floor(hours / count) * count;
        }
        date.setUTCHours(hours, 0, 0, 0);
        break;
      case "minute":
        let minutes = date.getUTCMinutes();
        if (count > 1) {
          minutes = Math.floor(minutes / count) * count;
        }
        date.setUTCMinutes(minutes, 0, 0);
        break;
      case "month":
        let month = date.getUTCMonth();
        if (count > 1) {
          month = Math.floor(month / count) * count;
        }
        date.setUTCMonth(month, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "year":
        let year = date.getUTCFullYear();
        if (count > 1) {
          year = Math.floor(year / count) * count;
        }
        date.setUTCFullYear(year, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "week":
        if (count > 1) {
          if (firstDate) {
            firstDate = round(firstDate, "week", 1);
            let difference = date.getTime() - firstDate.getTime();
            let unitCount = Math.floor(difference / getDuration("week") / count);
            let duration = getDuration("week", unitCount * count);
            date.setTime(firstDate.getTime() + duration - timeZoneOffset * getDuration("minute"));
          }
        }
        let wday = date.getUTCDate();
        let weekDay = date.getUTCDay();
        if (!isNumber(firstDateOfWeek)) {
          firstDateOfWeek = 1;
        }
        if (weekDay >= firstDateOfWeek) {
          wday = wday - weekDay + firstDateOfWeek;
        } else {
          wday = wday - (7 + weekDay) + firstDateOfWeek;
        }
        date.setUTCDate(wday);
        date.setUTCHours(0, 0, 0, 0);
        break;
    }
    if (!utc && unit != "millisecond") {
      date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
      if (unit == "day" || unit == "week" || unit == "month" || unit == "year") {
        let newTimeZoneOffset = date.getTimezoneOffset();
        if (newTimeZoneOffset != timeZoneOffset) {
          let diff = newTimeZoneOffset - timeZoneOffset;
          date.setUTCMinutes(date.getUTCMinutes() + diff);
        }
      }
    }
    return date;
  } else {
    if (isNaN(date.getTime())) {
      return date;
    }
    let initialTime = date.getTime();
    let tzoffset = timezone.offsetUTC(date);
    let timeZoneOffset = date.getTimezoneOffset();
    let parsedDate = timezone.parseDate(date);
    let year = parsedDate.year;
    let month = parsedDate.month;
    let day = parsedDate.day;
    let hour = parsedDate.hour;
    let minute = parsedDate.minute;
    let second = parsedDate.second;
    let millisecond = parsedDate.millisecond;
    let weekday = parsedDate.weekday;
    let offsetDif = tzoffset - timeZoneOffset;
    switch (unit) {
      case "day":
        if (count > 1 && firstDate) {
          firstDate = round(firstDate, "day", 1, firstDateOfWeek, utc, void 0, timezone);
          let difference = date.getTime() - firstDate.getTime();
          let unitCount = Math.floor(difference / getDuration("day") / count);
          let duration = getDuration("day", unitCount * count);
          date.setTime(firstDate.getTime() + duration);
          parsedDate = timezone.parseDate(date);
          year = parsedDate.year;
          month = parsedDate.month;
          day = parsedDate.day;
        }
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "second":
        minute += offsetDif;
        if (count > 1) {
          second = Math.floor(second / count) * count;
        }
        millisecond = 0;
        break;
      case "millisecond":
        minute += offsetDif;
        if (count > 1) {
          millisecond = Math.floor(millisecond / count) * count;
        }
        break;
      case "hour":
        if (count > 1) {
          hour = Math.floor(hour / count) * count;
        }
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "minute":
        if (count > 1) {
          minute = Math.floor(minute / count) * count;
        }
        minute += offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "month":
        if (count > 1) {
          month = Math.floor(month / count) * count;
        }
        day = 1;
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "year":
        if (count > 1) {
          year = Math.floor(year / count) * count;
        }
        month = 0;
        day = 1;
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "week":
        if (!isNumber(firstDateOfWeek)) {
          firstDateOfWeek = 1;
        }
        if (weekday >= firstDateOfWeek) {
          day = day - weekday + firstDateOfWeek;
        } else {
          day = day - (7 + weekday) + firstDateOfWeek;
        }
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
    }
    date = new Date(year, month, day, hour, minute, second, millisecond);
    const newTime = date.getTime();
    let hDuration = 36e5;
    if (unit == "hour") {
      hDuration = 36e5 * count;
    }
    if (newTime + hDuration <= initialTime) {
      if (unit == "hour" || unit == "minute" || unit == "second" || unit == "millisecond") {
        date = new Date(newTime + hDuration);
      }
    }
    let newTimeZoneOffset = date.getTimezoneOffset();
    let newTzoffset = timezone.offsetUTC(date);
    let newDiff = newTzoffset - newTimeZoneOffset;
    if (newDiff != offsetDif) {
      date.setTime(date.getTime() + (newDiff - offsetDif) * 6e4);
    }
    return date;
  }
}
function chooseInterval(index, duration, gridCount, intervals) {
  let gridInterval = intervals[index];
  let intervalDuration = getIntervalDuration(gridInterval);
  let lastIndex = intervals.length - 1;
  if (index >= lastIndex) {
    return Object.assign({}, intervals[lastIndex]);
  }
  let count = Math.ceil(duration / intervalDuration);
  if (duration < intervalDuration && index > 0) {
    return Object.assign({}, intervals[index - 1]);
  }
  if (count <= gridCount) {
    return Object.assign({}, intervals[index]);
  } else {
    if (index + 1 < intervals.length) {
      return chooseInterval(index + 1, duration, gridCount, intervals);
    } else {
      return Object.assign({}, intervals[index]);
    }
  }
}
function getUnitValue(date, unit) {
  switch (unit) {
    case "day":
      return date.getDate();
    case "second":
      return date.getSeconds();
    case "millisecond":
      return date.getMilliseconds();
    case "hour":
      return date.getHours();
    case "minute":
      return date.getMinutes();
    case "month":
      return date.getMonth();
    case "year":
      return date.getFullYear();
    case "week":
      return getWeek(date);
  }
}

// node_modules/@amcharts/amcharts5/.internal/core/render/Series.js
var Series = class extends Component {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_aggregatesCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_selectionAggregatesCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataProcessed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_psi", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pei", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_baseSeriesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, { width: p100, height: p100, position: "absolute" })
    });
  }
  _afterNew() {
    this.valueFields.push("value", "customValue");
    super._afterNew();
    this.setPrivate("customData", {});
    this._disposers.push(this.bullets.events.onAll((change) => {
      if (change.type === "clear") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "push") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "setIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "insertIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "removeIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "moveIndex") {
        this._handleBullets(this.dataItems);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  _dispose() {
    this.bulletsContainer.dispose();
    super._dispose();
  }
  startIndex() {
    let len = this.dataItems.length;
    return Math.min(this.getPrivate("startIndex", 0), len);
  }
  endIndex() {
    let len = this.dataItems.length;
    return Math.min(this.getPrivate("endIndex", len), len);
  }
  _handleBullets(dataItems) {
    each(dataItems, (dataItem) => {
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          bullet.dispose();
        });
        dataItem.bullets = void 0;
      }
    });
    this.markDirtyValues();
  }
  /**
   * Looks up and returns a data item by its ID.
   *
   * @param   id  ID
   * @return      Data item
   */
  getDataItemById(id) {
    return find(this.dataItems, (dataItem) => {
      return dataItem.get("id") == id;
    });
  }
  _makeBullets(dataItem) {
    if (this._shouldMakeBullet(dataItem)) {
      dataItem.bullets = [];
      this.bullets.each((bulletFunction) => {
        this._makeBullet(dataItem, bulletFunction);
      });
    }
  }
  _shouldMakeBullet(_dataItem) {
    return true;
  }
  _makeBullet(dataItem, bulletFunction, index) {
    const bullet = bulletFunction(this._root, this, dataItem);
    if (bullet) {
      bullet._index = index;
      this._makeBulletReal(dataItem, bullet);
    }
    return bullet;
  }
  _makeBulletReal(dataItem, bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      sprite._setDataItem(dataItem);
      sprite.setRaw("position", "absolute");
      this.bulletsContainer.children.push(sprite);
    }
    bullet.series = this;
    dataItem.bullets.push(bullet);
  }
  /**
   * Adds bullet directly to a data item.
   *
   * Please note: method accepts [[Bullet]] instance as a paramter, not a
   * reference to a function.
   *
   * You should add Bullet instance, not a method like you do it on series.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/bullets/#Adding_directly_to_data_item} for more info
   * @since 5.6.0
   *
   * @param  dataItem  Target data item
   * @param  bullet    Bullet instance
   */
  addBullet(dataItem, bullet) {
    if (!dataItem.bullets) {
      dataItem.bullets = [];
    }
    if (bullet) {
      this._makeBulletReal(dataItem, bullet);
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._aggregatesCalculated = false;
    this._baseSeriesDirty = false;
    this._selectionAggregatesCalculated = false;
  }
  _prepareChildren() {
    super._prepareChildren();
    let startIndex = this.startIndex();
    let endIndex = this.endIndex();
    if (this.isDirty("name")) {
      this.updateLegendValue();
    }
    if (this.isDirty("heatRules")) {
      this._valuesDirty = true;
    }
    if (this.isPrivateDirty("baseValueSeries")) {
      const baseValueSeries = this.getPrivate("baseValueSeries");
      if (baseValueSeries) {
        this._disposers.push(baseValueSeries.onPrivate("startIndex", () => {
          this._baseSeriesDirty = true;
          this.markDirtyValues();
        }));
      }
    }
    const calculateAggregates = this.get("calculateAggregates");
    if (calculateAggregates) {
      if (this._valuesDirty && !this._dataProcessed) {
        if (!this._aggregatesCalculated) {
          this._calculateAggregates(0, this.dataItems.length);
          this._aggregatesCalculated = true;
          if (startIndex != 0) {
            this._psi = void 0;
          }
        }
      }
      if ((this._psi != startIndex || this._pei != endIndex || this.isPrivateDirty("adjustedStartIndex")) && !this._selectionAggregatesCalculated) {
        if (startIndex === 0 && endIndex === this.dataItems.length && this._aggregatesCalculated) {
        } else {
          this._calculateAggregates(startIndex, endIndex);
        }
        this._selectionAggregatesCalculated = true;
      }
    }
    if (this.isDirty("tooltip")) {
      let tooltip = this.get("tooltip");
      if (tooltip) {
        tooltip.hide(0);
        tooltip.set("tooltipTarget", this);
      }
    }
    if (this.isDirty("fill") || this.isDirty("stroke")) {
      let markerRectangle;
      const legendDataItem = this.get("legendDataItem");
      if (legendDataItem) {
        markerRectangle = legendDataItem.get("markerRectangle");
        if (markerRectangle) {
          if (this.isVisible()) {
            if (this.isDirty("stroke")) {
              let stroke = this.get("stroke");
              markerRectangle.set("stroke", stroke);
            }
            if (this.isDirty("fill")) {
              let fill = this.get("fill");
              markerRectangle.set("fill", fill);
            }
          }
        }
      }
      this.updateLegendMarker(void 0);
    }
    if (this.bullets.length > 0) {
      let startIndex2 = this.startIndex();
      let endIndex2 = this.endIndex();
      if (endIndex2 < this.dataItems.length) {
        endIndex2++;
      }
      for (let i = startIndex2; i < endIndex2; i++) {
        let dataItem = this.dataItems[i];
        if (!dataItem.bullets) {
          this._makeBullets(dataItem);
        }
      }
    }
  }
  _handleRemoved() {
  }
  /**
   * @ignore
   */
  _adjustStartIndex(index) {
    return index;
  }
  _calculateAggregates(startIndex, endIndex) {
    let fields = this._valueFields;
    if (!fields) {
      throw new Error("No value fields are set for the series.");
    }
    const sum = {};
    const absSum = {};
    const count = {};
    const low = {};
    const high = {};
    const open = {};
    const close = {};
    const average = {};
    const previous = {};
    each(fields, (key) => {
      sum[key] = 0;
      absSum[key] = 0;
      count[key] = 0;
    });
    each(fields, (key) => {
      let change = key + "Change";
      let changePercent = key + "ChangePercent";
      let changePrevious = key + "ChangePrevious";
      let changePreviousPercent = key + "ChangePreviousPercent";
      let changeSelection = key + "ChangeSelection";
      let changeSelectionPercent = key + "ChangeSelectionPercent";
      let openKey = "valueY";
      if (key == "valueX" || key == "openValueX" || key == "lowValueX" || key == "highValueX") {
        openKey = "valueX";
      }
      const baseValueSeries = this.getPrivate("baseValueSeries");
      const adjustedStartIndex = this.getPrivate("adjustedStartIndex", startIndex);
      for (let i = adjustedStartIndex; i < endIndex; i++) {
        const dataItem = this.dataItems[i];
        if (dataItem) {
          let value = dataItem.get(key);
          if (value != null) {
            count[key]++;
            sum[key] += value;
            absSum[key] += Math.abs(value);
            average[key] = sum[key] / count[key];
            if (low[key] > value || low[key] == null) {
              low[key] = value;
            }
            if (high[key] < value || high[key] == null) {
              high[key] = value;
            }
            close[key] = value;
            if (open[key] == null) {
              open[key] = value;
              previous[key] = value;
              if (baseValueSeries) {
                open[openKey] = baseValueSeries._getBase(openKey);
              }
            }
            if (startIndex === 0) {
              dataItem.setRaw(change, value - open[openKey]);
              dataItem.setRaw(changePercent, (value - open[openKey]) / open[openKey] * 100);
            }
            dataItem.setRaw(changePrevious, value - previous[openKey]);
            dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
            dataItem.setRaw(changeSelection, value - open[openKey]);
            dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
            previous[key] = value;
          }
        }
      }
      if (endIndex < this.dataItems.length - 1) {
        const dataItem = this.dataItems[endIndex];
        if (dataItem) {
          let value = dataItem.get(key);
          dataItem.setRaw(changePrevious, value - previous[openKey]);
          dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
          dataItem.setRaw(changeSelection, value - open[openKey]);
          dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
        }
      }
      if (startIndex > 0) {
        startIndex--;
      }
      delete previous[key];
      for (let i = startIndex; i < adjustedStartIndex; i++) {
        const dataItem = this.dataItems[i];
        if (dataItem) {
          let value = dataItem.get(key);
          if (previous[key] == null) {
            previous[key] = value;
          }
          if (value != null) {
            dataItem.setRaw(changePrevious, value - previous[openKey]);
            dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
            dataItem.setRaw(changeSelection, value - open[openKey]);
            dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
            previous[key] = value;
          }
        }
      }
    });
    each(fields, (key) => {
      this.setPrivate(key + "AverageSelection", average[key]);
      this.setPrivate(key + "CountSelection", count[key]);
      this.setPrivate(key + "SumSelection", sum[key]);
      this.setPrivate(key + "AbsoluteSumSelection", absSum[key]);
      this.setPrivate(key + "LowSelection", low[key]);
      this.setPrivate(key + "HighSelection", high[key]);
      this.setPrivate(key + "OpenSelection", open[key]);
      this.setPrivate(key + "CloseSelection", close[key]);
    });
    if (startIndex === 0 && endIndex === this.dataItems.length) {
      each(fields, (key) => {
        this.setPrivate(key + "Average", average[key]);
        this.setPrivate(key + "Count", count[key]);
        this.setPrivate(key + "Sum", sum[key]);
        this.setPrivate(key + "AbsoluteSum", absSum[key]);
        this.setPrivate(key + "Low", low[key]);
        this.setPrivate(key + "High", high[key]);
        this.setPrivate(key + "Open", open[key]);
        this.setPrivate(key + "Close", close[key]);
      });
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._psi = this.startIndex();
    this._pei = this.endIndex();
    if (this.isDirty("visible")) {
      this.bulletsContainer.set("visible", this.get("visible"));
    }
    const rules = this.get("heatRules");
    if (this._valuesDirty && rules && rules.length > 0) {
      each(rules, (rule) => {
        const minValue = rule.minValue || this.getPrivate(rule.dataField + "Low") || 0;
        const maxValue = rule.maxValue || this.getPrivate(rule.dataField + "High") || 0;
        each(rule.target._entities, (target) => {
          const value = target.dataItem.get(rule.dataField);
          if (!isNumber(value)) {
            if (rule.neutral) {
              target.set(rule.key, rule.neutral);
            }
            const states = target.states;
            if (states) {
              const defaultState = states.lookup("default");
              if (defaultState && rule.neutral) {
                defaultState.set(rule.key, rule.neutral);
              }
            }
            if (!rule.customFunction) {
              return;
            }
          }
          if (rule.customFunction) {
            rule.customFunction.call(this, target, minValue, maxValue, value);
          } else {
            let percent;
            if (rule.logarithmic) {
              percent = (Math.log(value) * Math.LOG10E - Math.log(minValue) * Math.LOG10E) / (Math.log(maxValue) * Math.LOG10E - Math.log(minValue) * Math.LOG10E);
            } else {
              percent = (value - minValue) / (maxValue - minValue);
            }
            if (isNumber(value) && (!isNumber(percent) || Math.abs(percent) == Infinity)) {
              percent = 0.5;
            }
            let propertyValue;
            if (isNumber(rule.min)) {
              propertyValue = rule.min + (rule.max - rule.min) * percent;
            } else if (rule.min instanceof Color) {
              propertyValue = Color.interpolate(percent, rule.min, rule.max);
            } else if (rule.min instanceof Percent) {
              propertyValue = percentInterpolate(percent, rule.min, rule.max);
            }
            target.set(rule.key, propertyValue);
            const states = target.states;
            if (states) {
              const defaultState = states.lookup("default");
              if (defaultState) {
                defaultState.set(rule.key, propertyValue);
              }
            }
          }
        });
      });
    }
    if (this.get("visible")) {
      let count = this.dataItems.length;
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      if (endIndex < count) {
        endIndex++;
      }
      if (startIndex > 0) {
        startIndex--;
      }
      for (let i = 0; i < startIndex; i++) {
        this._hideBullets(this.dataItems[i]);
      }
      for (let i = startIndex; i < endIndex; i++) {
        this._positionBullets(this.dataItems[i]);
      }
      for (let i = endIndex; i < count; i++) {
        this._hideBullets(this.dataItems[i]);
      }
    }
  }
  _positionBullets(dataItem) {
    if (dataItem.bullets) {
      each(dataItem.bullets, (bullet) => {
        this._positionBullet(bullet);
        const sprite = bullet.get("sprite");
        if (bullet.get("dynamic")) {
          if (sprite) {
            sprite._markDirtyKey("fill");
            sprite.markDirtySize();
          }
          if (sprite instanceof Container) {
            sprite.walkChildren((child) => {
              child._markDirtyKey("fill");
              child.markDirtySize();
              if (child instanceof Label) {
                child.text.markDirtyText();
              }
            });
          }
        }
        if (sprite instanceof Label && sprite.get("populateText")) {
          sprite.text.markDirtyText();
        }
      });
    }
  }
  _hideBullets(dataItem) {
    if (dataItem.bullets) {
      each(dataItem.bullets, (bullet) => {
        let sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      });
    }
  }
  _positionBullet(_bullet) {
  }
  _placeBulletsContainer(chart) {
    chart.bulletsContainer.children.moveValue(this.bulletsContainer);
  }
  _removeBulletsContainer() {
    const bulletsContainer = this.bulletsContainer;
    if (bulletsContainer.parent) {
      bulletsContainer.parent.children.removeValue(bulletsContainer);
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        bullet.dispose();
      });
      dataItem.bullets = void 0;
    }
  }
  _getItemReaderLabel() {
    return "";
  }
  /**
   * Shows series's data item.
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
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            promises.push(sprite.show(duration));
          }
        });
      }
      yield Promise.all(promises);
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
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            promises.push(sprite.hide(duration));
          }
        });
      }
      yield Promise.all(promises);
    });
  }
  _sequencedShowHide(show, duration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.get("sequencedInterpolation")) {
        if (!isNumber(duration)) {
          duration = this.get("interpolationDuration", 0);
        }
        if (duration > 0) {
          const startIndex = this.startIndex();
          const endIndex = this.endIndex();
          yield Promise.all(map(this.dataItems, (dataItem, i) => __awaiter(this, void 0, void 0, function* () {
            let realDuration = duration || 0;
            if (i < startIndex - 10 || i > endIndex + 10) {
              realDuration = 0;
            }
            let delay = this.get("sequencedDelay", 0) + realDuration / (endIndex - startIndex);
            yield sleep(delay * (i - startIndex));
            if (show) {
              yield this.showDataItem(dataItem, realDuration);
            } else {
              yield this.hideDataItem(dataItem, realDuration);
            }
          })));
        } else {
          yield Promise.all(map(this.dataItems, (dataItem) => {
            if (show) {
              return this.showDataItem(dataItem, 0);
            } else {
              return this.hideDataItem(dataItem, 0);
            }
          }));
        }
      }
    });
  }
  /**
   * @ignore
   */
  updateLegendValue(dataItem) {
    if (dataItem) {
      const legendDataItem = dataItem.get("legendDataItem");
      if (legendDataItem) {
        const valueLabel = legendDataItem.get("valueLabel");
        if (valueLabel) {
          const text = valueLabel.text;
          let txt = "";
          valueLabel._setDataItem(dataItem);
          txt = this.get("legendValueText", text.get("text", ""));
          valueLabel.set("text", txt);
          text.markDirtyText();
        }
        const label = legendDataItem.get("label");
        if (label) {
          const text = label.text;
          let txt = "";
          label._setDataItem(dataItem);
          txt = this.get("legendLabelText", text.get("text", ""));
          label.set("text", txt);
          text.markDirtyText();
        }
      }
    }
  }
  /**
   * @ignore
   */
  updateLegendMarker(_dataItem) {
  }
  _onHide() {
    super._onHide();
    const tooltip = this.getTooltip();
    if (tooltip) {
      tooltip.hide();
    }
  }
  /**
   * @ignore
   */
  hoverDataItem(_dataItem) {
  }
  /**
   * @ignore
   */
  unhoverDataItem(_dataItem) {
  }
  /**
   * @ignore
   */
  _getBase(key) {
    const dataItem = this.dataItems[this.startIndex()];
    if (dataItem) {
      return dataItem.get(key);
    }
    return 0;
  }
};
Object.defineProperty(Series, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Series"
});
Object.defineProperty(Series, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Component.classNames.concat([Series.className])
});

export {
  getNextUnit,
  getDuration,
  getIntervalDuration,
  getDateIntervalDuration,
  checkChange,
  add,
  roun,
  round,
  chooseInterval,
  getUnitValue,
  Time_exports,
  Series
};
//# sourceMappingURL=chunk-JFXPNH7X.js.map
