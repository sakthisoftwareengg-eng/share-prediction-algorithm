import {
  collide_default,
  link_default,
  manyBody_default,
  simulation_default,
  x_default,
  y_default
} from "./chunk-AOXJJ7PT.js";
import {
  binary_default,
  dice_default,
  hierarchy,
  pack_default,
  partition_default,
  sliceDice_default,
  slice_default,
  squarify_default,
  tree_default,
  treemap_default
} from "./chunk-PTBHZ5ZK.js";
import "./chunk-TZ7OVMR6.js";
import {
  Polygon
} from "./chunk-CNNUHZ4L.js";
import {
  Slice
} from "./chunk-HNJ7BFJ7.js";
import {
  Circle
} from "./chunk-3HN5RVOK.js";
import {
  RadialLabel
} from "./chunk-AHDXI7TZ.js";
import "./chunk-TSCKTQIQ.js";
import {
  RoundedRectangle
} from "./chunk-E32SSC6Z.js";
import {
  ColorSet
} from "./chunk-AVJ6LU7H.js";
import {
  Series
} from "./chunk-JFXPNH7X.js";
import {
  DataItem
} from "./chunk-CRL5FSBR.js";
import {
  setColor
} from "./chunk-XOW4XAJF.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Container,
  Graphics,
  List,
  ListTemplate,
  RADIANS,
  cos,
  cubic,
  getArcBounds,
  mergeTags,
  out,
  p100,
  p50,
  percent,
  relativeToValue,
  round,
  sin
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  eachContinue,
  isNumber,
  move,
  remove
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-R327OCYJ.js";

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/area.js
function area_default(polygon) {
  var i = -1, n = polygon.length, a, b = polygon[n - 1], area = 0;
  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }
  return area / 2;
}
var init_area = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/area.js"() {
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/centroid.js
function centroid_default(polygon) {
  var i = -1, n = polygon.length, x = 0, y = 0, a, b = polygon[n - 1], c, k = 0;
  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }
  return k *= 3, [x / k, y / k];
}
var init_centroid = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/centroid.js"() {
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/cross.js
function cross_default(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}
var init_cross = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/cross.js"() {
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/hull.js
function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}
function computeUpperHullIndexes(points) {
  const n = points.length, indexes2 = [0, 1];
  let size = 2, i;
  for (i = 2; i < n; ++i) {
    while (size > 1 && cross_default(points[indexes2[size - 2]], points[indexes2[size - 1]], points[i]) <= 0) --size;
    indexes2[size++] = i;
  }
  return indexes2.slice(0, size);
}
function hull_default(points) {
  if ((n = points.length) < 3) return null;
  var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
  var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
  var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
  return hull;
}
var init_hull = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/hull.js"() {
    init_cross();
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/contains.js
function contains_default(polygon, point) {
  var n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], x1, y1, inside = false;
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
    x0 = x1, y0 = y1;
  }
  return inside;
}
var init_contains = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/contains.js"() {
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/length.js
function length_default(polygon) {
  var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.hypot(xa, ya);
  }
  return perimeter;
}
var init_length = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/length.js"() {
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-polygon/src/index.js
var src_exports3 = {};
__export(src_exports3, {
  polygonArea: () => area_default,
  polygonCentroid: () => centroid_default,
  polygonContains: () => contains_default,
  polygonHull: () => hull_default,
  polygonLength: () => length_default
});
var init_src = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-polygon/src/index.js"() {
    init_area();
    init_centroid();
    init_hull();
    init_contains();
    init_length();
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-timer/src/timer.js
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}
var frame, timeout, interval, pokeDelay, taskHead, taskTail, clockLast, clockNow, clockSkew, clock, setFrame;
var init_timer = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-timer/src/timer.js"() {
    frame = 0;
    timeout = 0;
    interval = 0;
    pokeDelay = 1e3;
    clockLast = 0;
    clockNow = 0;
    clockSkew = 0;
    clock = typeof performance === "object" && performance.now ? performance : Date;
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
      setTimeout(f, 17);
    };
    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}
var init_timeout = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-timer/src/timeout.js"() {
    init_timer();
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-timer/src/interval.js
function interval_default(callback, delay, time) {
  var t = new Timer(), total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  t._restart = t.restart;
  t.restart = function(callback2, delay2, time2) {
    delay2 = +delay2, time2 = time2 == null ? now() : +time2;
    t._restart(function tick(elapsed) {
      elapsed += total;
      t._restart(tick, total += delay2, time2);
      callback2(elapsed);
    }, delay2, time2);
  };
  t.restart(callback, delay, time);
  return t;
}
var init_interval = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-timer/src/interval.js"() {
    init_timer();
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-timer/src/index.js
var src_exports4 = {};
__export(src_exports4, {
  interval: () => interval_default,
  now: () => now,
  timeout: () => timeout_default,
  timer: () => timer,
  timerFlush: () => timerFlush
});
var init_src2 = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-timer/src/index.js"() {
    init_timer();
    init_timeout();
    init_interval();
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-dispatch/src/dispatch.js
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({ name, value: callback });
  return type;
}
var noop, dispatch_default;
var init_dispatch = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-dispatch/src/dispatch.js"() {
    noop = { value: () => {
    } };
    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
          return;
        }
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
        }
        return this;
      },
      copy: function() {
        var copy = {}, _ = this._;
        for (var t in _) copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };
    dispatch_default = dispatch;
  }
});

// node_modules/d3-voronoi-map/node_modules/d3-dispatch/src/index.js
var src_exports5 = {};
__export(src_exports5, {
  dispatch: () => dispatch_default
});
var init_src3 = __esm({
  "node_modules/d3-voronoi-map/node_modules/d3-dispatch/src/index.js"() {
    init_dispatch();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/ascending.js
function ascending_default(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
var init_ascending = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/ascending.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/bisector.js
function bisector_default(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }
  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }
  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left, center, right };
}
function ascendingComparator(f) {
  return (d, x) => ascending_default(f(d), x);
}
var init_bisector = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/bisector.js"() {
    init_ascending();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/number.js
function number_default(x) {
  return x === null ? NaN : +x;
}
function* numbers(values, valueof) {
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}
var init_number = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/number.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/bisect.js
var ascendingBisect, bisectRight, bisectLeft, bisectCenter, bisect_default;
var init_bisect = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/bisect.js"() {
    init_ascending();
    init_bisector();
    init_number();
    ascendingBisect = bisector_default(ascending_default);
    bisectRight = ascendingBisect.right;
    bisectLeft = ascendingBisect.left;
    bisectCenter = bisector_default(number_default).center;
    bisect_default = bisectRight;
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/count.js
function count(values, valueof) {
  let count2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count2;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        ++count2;
      }
    }
  }
  return count2;
}
var init_count = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/count.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/cross.js
function length(array2) {
  return array2.length | 0;
}
function empty(length3) {
  return !(length3 > 0);
}
function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}
function reducer(reduce2) {
  return (values) => reduce2(...values);
}
function cross(...values) {
  const reduce2 = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index2 = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index2.map((j2, i2) => values[i2][j2]));
    let i = j;
    while (++index2[i] === lengths[i]) {
      if (i === 0) return reduce2 ? product.map(reduce2) : product;
      index2[i--] = 0;
    }
  }
}
var init_cross2 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/cross.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/cumsum.js
function cumsum(values, valueof) {
  var sum2 = 0, index2 = 0;
  return Float64Array.from(values, valueof === void 0 ? (v) => sum2 += +v || 0 : (v) => sum2 += +valueof(v, index2++, values) || 0);
}
var init_cumsum = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/cumsum.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/descending.js
function descending_default(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
var init_descending = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/descending.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/variance.js
function variance(values, valueof) {
  let count2 = 0;
  let delta;
  let mean2 = 0;
  let sum2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count2;
        sum2 += delta * (value - mean2);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        delta = value - mean2;
        mean2 += delta / ++count2;
        sum2 += delta * (value - mean2);
      }
    }
  }
  if (count2 > 1) return sum2 / (count2 - 1);
}
var init_variance = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/variance.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/deviation.js
function deviation(values, valueof) {
  const v = variance(values, valueof);
  return v ? Math.sqrt(v) : v;
}
var init_deviation = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/deviation.js"() {
    init_variance();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/extent.js
function extent_default(values, valueof) {
  let min2;
  let max2;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min2 === void 0) {
          if (value >= value) min2 = max2 = value;
        } else {
          if (min2 > value) min2 = value;
          if (max2 < value) max2 = value;
        }
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null) {
        if (min2 === void 0) {
          if (value >= value) min2 = max2 = value;
        } else {
          if (min2 > value) min2 = value;
          if (max2 < value) max2 = value;
        }
      }
    }
  }
  return [min2, max2];
}
var init_extent = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/extent.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/fsum.js
function fsum(values, valueof) {
  const adder = new Adder();
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index2, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
}
function fcumsum(values, valueof) {
  const adder = new Adder();
  let index2 = -1;
  return Float64Array.from(
    values,
    valueof === void 0 ? (v) => adder.add(+v || 0) : (v) => adder.add(+valueof(v, ++index2, values) || 0)
  );
}
var Adder;
var init_fsum = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/fsum.js"() {
    Adder = class {
      constructor() {
        this._partials = new Float64Array(32);
        this._n = 0;
      }
      add(x) {
        const p = this._partials;
        let i = 0;
        for (let j = 0; j < this._n && j < 32; j++) {
          const y = p[j], hi = x + y, lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
          if (lo) p[i++] = lo;
          x = hi;
        }
        p[i] = x;
        this._n = i + 1;
        return this;
      }
      valueOf() {
        const p = this._partials;
        let n = this._n, x, y, lo, hi = 0;
        if (n > 0) {
          hi = p[--n];
          while (n > 0) {
            x = hi;
            y = p[--n];
            hi = x + y;
            lo = y - (hi - x);
            if (lo) break;
          }
          if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
            y = lo * 2;
            x = hi + y;
            if (y == x - hi) hi = x;
          }
        }
        return hi;
      }
    };
  }
});

// node_modules/d3-weighted-voronoi/node_modules/internmap/src/index.js
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(value);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
var InternMap, InternSet;
var init_src4 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/internmap/src/index.js"() {
    InternMap = class extends Map {
      constructor(entries, key = keyof) {
        super();
        Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
        if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
      }
      get(key) {
        return super.get(intern_get(this, key));
      }
      has(key) {
        return super.has(intern_get(this, key));
      }
      set(key, value) {
        return super.set(intern_set(this, key), value);
      }
      delete(key) {
        return super.delete(intern_delete(this, key));
      }
    };
    InternSet = class extends Set {
      constructor(values, key = keyof) {
        super();
        Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
        if (values != null) for (const value of values) this.add(value);
      }
      has(value) {
        return super.has(intern_get(this, value));
      }
      add(value) {
        return super.add(intern_set(this, value));
      }
      delete(value) {
        return super.delete(intern_delete(this, value));
      }
    };
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/identity.js
function identity_default(x) {
  return x;
}
var init_identity = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/identity.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/group.js
function group(values, ...keys) {
  return nest(values, identity_default, identity_default, keys);
}
function groups(values, ...keys) {
  return nest(values, Array.from, identity_default, keys);
}
function rollup(values, reduce2, ...keys) {
  return nest(values, identity_default, reduce2, keys);
}
function rollups(values, reduce2, ...keys) {
  return nest(values, Array.from, reduce2, keys);
}
function index(values, ...keys) {
  return nest(values, identity_default, unique, keys);
}
function indexes(values, ...keys) {
  return nest(values, Array.from, unique, keys);
}
function unique(values) {
  if (values.length !== 1) throw new Error("duplicate key");
  return values[0];
}
function nest(values, map3, reduce2, keys) {
  return (function regroup(values2, i) {
    if (i >= keys.length) return reduce2(values2);
    const groups2 = new InternMap();
    const keyof2 = keys[i++];
    let index2 = -1;
    for (const value of values2) {
      const key = keyof2(value, ++index2, values2);
      const group2 = groups2.get(key);
      if (group2) group2.push(value);
      else groups2.set(key, [value]);
    }
    for (const [key, values3] of groups2) {
      groups2.set(key, regroup(values3, i));
    }
    return map3(groups2);
  })(values, 0);
}
var init_group = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/group.js"() {
    init_src4();
    init_identity();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/permute.js
function permute_default(source, keys) {
  return Array.from(keys, (key) => source[key]);
}
var init_permute = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/permute.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/sort.js
function sort(values, ...F) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  values = Array.from(values);
  let [f = ascending_default] = F;
  if (f.length === 1 || F.length > 1) {
    const index2 = Uint32Array.from(values, (d, i) => i);
    if (F.length > 1) {
      F = F.map((f2) => values.map(f2));
      index2.sort((i, j) => {
        for (const f2 of F) {
          const c = ascending_default(f2[i], f2[j]);
          if (c) return c;
        }
      });
    } else {
      f = values.map(f);
      index2.sort((i, j) => ascending_default(f[i], f[j]));
    }
    return permute_default(values, index2);
  }
  return values.sort(f);
}
var init_sort = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/sort.js"() {
    init_ascending();
    init_permute();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/groupSort.js
function groupSort(values, reduce2, key) {
  return (reduce2.length === 1 ? sort(rollup(values, reduce2, key), (([ak, av], [bk, bv]) => ascending_default(av, bv) || ascending_default(ak, bk))) : sort(group(values, key), (([ak, av], [bk, bv]) => reduce2(av, bv) || ascending_default(ak, bk)))).map(([key2]) => key2);
}
var init_groupSort = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/groupSort.js"() {
    init_ascending();
    init_group();
    init_sort();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/array.js
var array, slice, map;
var init_array = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/array.js"() {
    array = Array.prototype;
    slice = array.slice;
    map = array.map;
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}
var init_constant = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/constant.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/ticks.js
function ticks_default(start, stop, count2) {
  var reverse2, i = -1, n, ticks, step;
  stop = +stop, start = +start, count2 = +count2;
  if (start === stop && count2 > 0) return [start];
  if (reverse2 = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count2)) === 0 || !isFinite(step)) return [];
  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }
  if (reverse2) ticks.reverse();
  return ticks;
}
function tickIncrement(start, stop, count2) {
  var step = (stop - start) / Math.max(0, count2), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count2) {
  var step0 = Math.abs(stop - start) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}
var e10, e5, e2;
var init_ticks = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/ticks.js"() {
    e10 = Math.sqrt(50);
    e5 = Math.sqrt(10);
    e2 = Math.sqrt(2);
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/nice.js
function nice(start, stop, count2) {
  let prestep;
  while (true) {
    const step = tickIncrement(start, stop, count2);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}
var init_nice = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/nice.js"() {
    init_ticks();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/threshold/sturges.js
function sturges_default(values) {
  return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
}
var init_sturges = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/threshold/sturges.js"() {
    init_count();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/bin.js
function bin_default() {
  var value = identity_default, domain = extent_default, threshold = sturges_default;
  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var i, n = data.length, x, values = new Array(n);
    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }
    var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
    if (!Array.isArray(tz)) {
      const max2 = x1, tn = +tz;
      if (domain === extent_default) [x0, x1] = nice(x0, x1, tn);
      tz = ticks_default(x0, x1, tn);
      if (tz[tz.length - 1] >= x1) {
        if (max2 >= x1 && domain === extent_default) {
          const step = tickIncrement(x0, x1, tn);
          if (isFinite(step)) {
            if (step > 0) {
              x1 = (Math.floor(x1 / step) + 1) * step;
            } else if (step < 0) {
              x1 = (Math.ceil(x1 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    }
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;
    var bins = new Array(m + 1), bin;
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisect_default(tz, x, 0, m)].push(data[i]);
      }
    }
    return bins;
  }
  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default(_), histogram) : value;
  };
  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant_default([_[0], _[1]]), histogram) : domain;
  };
  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default(slice.call(_)) : constant_default(_), histogram) : threshold;
  };
  return histogram;
}
var init_bin = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/bin.js"() {
    init_array();
    init_bisect();
    init_constant();
    init_extent();
    init_identity();
    init_nice();
    init_ticks();
    init_sturges();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max2;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    }
  }
  return max2;
}
var init_max = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/max.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min2;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    }
  }
  return min2;
}
var init_min = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/min.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/quickselect.js
function quickselect(array2, k, left = 0, right = array2.length - 1, compare = ascending_default) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array2, k, newLeft, newRight, compare);
    }
    const t = array2[k];
    let i = left;
    let j = right;
    swap(array2, left, k);
    if (compare(array2[right], t) > 0) swap(array2, left, right);
    while (i < j) {
      swap(array2, i, j), ++i, --j;
      while (compare(array2[i], t) < 0) ++i;
      while (compare(array2[j], t) > 0) --j;
    }
    if (compare(array2[left], t) === 0) swap(array2, left, j);
    else ++j, swap(array2, j, right);
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array2;
}
function swap(array2, i, j) {
  const t = array2[i];
  array2[i] = array2[j];
  array2[j] = t;
}
var init_quickselect = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/quickselect.js"() {
    init_ascending();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/quantile.js
function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p, valueof = number_default) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
var init_quantile = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/quantile.js"() {
    init_max();
    init_min();
    init_quickselect();
    init_number();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/threshold/freedmanDiaconis.js
function freedmanDiaconis_default(values, min2, max2) {
  return Math.ceil((max2 - min2) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(count(values), -1 / 3)));
}
var init_freedmanDiaconis = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/threshold/freedmanDiaconis.js"() {
    init_count();
    init_quantile();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/threshold/scott.js
function scott_default(values, min2, max2) {
  return Math.ceil((max2 - min2) / (3.5 * deviation(values) * Math.pow(count(values), -1 / 3)));
}
var init_scott = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/threshold/scott.js"() {
    init_count();
    init_deviation();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/maxIndex.js
function maxIndex(values, valueof) {
  let max2;
  let maxIndex2 = -1;
  let index2 = -1;
  if (valueof === void 0) {
    for (const value of values) {
      ++index2;
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value, maxIndex2 = index2;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value, maxIndex2 = index2;
      }
    }
  }
  return maxIndex2;
}
var init_maxIndex = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/maxIndex.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/mean.js
function mean(values, valueof) {
  let count2 = 0;
  let sum2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count2, sum2 += value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (value = +value) >= value) {
        ++count2, sum2 += value;
      }
    }
  }
  if (count2) return sum2 / count2;
}
var init_mean = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/mean.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/median.js
function median_default(values, valueof) {
  return quantile(values, 0.5, valueof);
}
var init_median = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/median.js"() {
    init_quantile();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/merge.js
function* flatten(arrays) {
  for (const array2 of arrays) {
    yield* array2;
  }
}
function merge(arrays) {
  return Array.from(flatten(arrays));
}
var init_merge = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/merge.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/minIndex.js
function minIndex(values, valueof) {
  let min2;
  let minIndex2 = -1;
  let index2 = -1;
  if (valueof === void 0) {
    for (const value of values) {
      ++index2;
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value, minIndex2 = index2;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index2, values)) != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value, minIndex2 = index2;
      }
    }
  }
  return minIndex2;
}
var init_minIndex = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/minIndex.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/pairs.js
function pairs(values, pairof = pair) {
  const pairs2 = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs2.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs2;
}
function pair(a, b) {
  return [a, b];
}
var init_pairs = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/pairs.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/range.js
function range_default(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
  while (++i < n) {
    range[i] = start + i * step;
  }
  return range;
}
var init_range = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/range.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/least.js
function least(values, compare = ascending_default) {
  let min2;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? ascending_default(value, minValue) < 0 : ascending_default(value, value) === 0) {
        min2 = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, min2) < 0 : compare(value, value) === 0) {
        min2 = value;
        defined = true;
      }
    }
  }
  return min2;
}
var init_least = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/least.js"() {
    init_ascending();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/leastIndex.js
function leastIndex(values, compare = ascending_default) {
  if (compare.length === 1) return minIndex(values, compare);
  let minValue;
  let min2 = -1;
  let index2 = -1;
  for (const value of values) {
    ++index2;
    if (min2 < 0 ? compare(value, value) === 0 : compare(value, minValue) < 0) {
      minValue = value;
      min2 = index2;
    }
  }
  return min2;
}
var init_leastIndex = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/leastIndex.js"() {
    init_ascending();
    init_minIndex();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/greatest.js
function greatest(values, compare = ascending_default) {
  let max2;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined ? ascending_default(value, maxValue) > 0 : ascending_default(value, value) === 0) {
        max2 = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined ? compare(value, max2) > 0 : compare(value, value) === 0) {
        max2 = value;
        defined = true;
      }
    }
  }
  return max2;
}
var init_greatest = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/greatest.js"() {
    init_ascending();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/greatestIndex.js
function greatestIndex(values, compare = ascending_default) {
  if (compare.length === 1) return maxIndex(values, compare);
  let maxValue;
  let max2 = -1;
  let index2 = -1;
  for (const value of values) {
    ++index2;
    if (max2 < 0 ? compare(value, value) === 0 : compare(value, maxValue) > 0) {
      maxValue = value;
      max2 = index2;
    }
  }
  return max2;
}
var init_greatestIndex = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/greatestIndex.js"() {
    init_ascending();
    init_maxIndex();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/scan.js
function scan(values, compare) {
  const index2 = leastIndex(values, compare);
  return index2 < 0 ? void 0 : index2;
}
var init_scan = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/scan.js"() {
    init_leastIndex();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/shuffle.js
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
}
var shuffle_default;
var init_shuffle = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/shuffle.js"() {
    shuffle_default = shuffler(Math.random);
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/sum.js
function sum(values, valueof) {
  let sum2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        sum2 += value;
      }
    }
  } else {
    let index2 = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index2, values)) {
        sum2 += value;
      }
    }
  }
  return sum2;
}
var init_sum = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/sum.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/transpose.js
function transpose_default(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min(matrix, length2), transpose = new Array(m); ++i < m; ) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
}
function length2(d) {
  return d.length;
}
var init_transpose = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/transpose.js"() {
    init_min();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/zip.js
function zip_default() {
  return transpose_default(arguments);
}
var init_zip = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/zip.js"() {
    init_transpose();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/every.js
function every(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index2 = -1;
  for (const value of values) {
    if (!test(value, ++index2, values)) {
      return false;
    }
  }
  return true;
}
var init_every = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/every.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/some.js
function some(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index2 = -1;
  for (const value of values) {
    if (test(value, ++index2, values)) {
      return true;
    }
  }
  return false;
}
var init_some = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/some.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/filter.js
function filter(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  const array2 = [];
  let index2 = -1;
  for (const value of values) {
    if (test(value, ++index2, values)) {
      array2.push(value);
    }
  }
  return array2;
}
var init_filter = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/filter.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/map.js
function map2(values, mapper) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
  return Array.from(values, (value, index2) => mapper(value, index2, values));
}
var init_map = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/map.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/reduce.js
function reduce(values, reducer2, value) {
  if (typeof reducer2 !== "function") throw new TypeError("reducer is not a function");
  const iterator = values[Symbol.iterator]();
  let done, next, index2 = -1;
  if (arguments.length < 3) {
    ({ done, value } = iterator.next());
    if (done) return;
    ++index2;
  }
  while ({ done, value: next } = iterator.next(), !done) {
    value = reducer2(value, next, ++index2, values);
  }
  return value;
}
var init_reduce = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/reduce.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/reverse.js
function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}
var init_reverse = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/reverse.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/difference.js
function difference(values, ...others) {
  values = new Set(values);
  for (const other of others) {
    for (const value of other) {
      values.delete(value);
    }
  }
  return values;
}
var init_difference = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/difference.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/disjoint.js
function disjoint(values, other) {
  const iterator = other[Symbol.iterator](), set3 = /* @__PURE__ */ new Set();
  for (const v of values) {
    if (set3.has(v)) return false;
    let value, done;
    while ({ value, done } = iterator.next()) {
      if (done) break;
      if (Object.is(v, value)) return false;
      set3.add(value);
    }
  }
  return true;
}
var init_disjoint = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/disjoint.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/set.js
function set2(values) {
  return values instanceof Set ? values : new Set(values);
}
var init_set = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/set.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/intersection.js
function intersection(values, ...others) {
  values = new Set(values);
  others = others.map(set2);
  out: for (const value of values) {
    for (const other of others) {
      if (!other.has(value)) {
        values.delete(value);
        continue out;
      }
    }
  }
  return values;
}
var init_intersection = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/intersection.js"() {
    init_set();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/superset.js
function superset(values, other) {
  const iterator = values[Symbol.iterator](), set3 = /* @__PURE__ */ new Set();
  for (const o of other) {
    if (set3.has(o)) continue;
    let value, done;
    while ({ value, done } = iterator.next()) {
      if (done) return false;
      set3.add(value);
      if (Object.is(o, value)) break;
    }
  }
  return true;
}
var init_superset = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/superset.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/subset.js
function subset(values, other) {
  return superset(other, values);
}
var init_subset = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/subset.js"() {
    init_superset();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/union.js
function union(...others) {
  const set3 = /* @__PURE__ */ new Set();
  for (const other of others) {
    for (const o of other) {
      set3.add(o);
    }
  }
  return set3;
}
var init_union = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/union.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-array/src/index.js
var src_exports6 = {};
__export(src_exports6, {
  Adder: () => Adder,
  InternMap: () => InternMap,
  InternSet: () => InternSet,
  ascending: () => ascending_default,
  bin: () => bin_default,
  bisect: () => bisect_default,
  bisectCenter: () => bisectCenter,
  bisectLeft: () => bisectLeft,
  bisectRight: () => bisectRight,
  bisector: () => bisector_default,
  count: () => count,
  cross: () => cross,
  cumsum: () => cumsum,
  descending: () => descending_default,
  deviation: () => deviation,
  difference: () => difference,
  disjoint: () => disjoint,
  every: () => every,
  extent: () => extent_default,
  fcumsum: () => fcumsum,
  filter: () => filter,
  fsum: () => fsum,
  greatest: () => greatest,
  greatestIndex: () => greatestIndex,
  group: () => group,
  groupSort: () => groupSort,
  groups: () => groups,
  histogram: () => bin_default,
  index: () => index,
  indexes: () => indexes,
  intersection: () => intersection,
  least: () => least,
  leastIndex: () => leastIndex,
  map: () => map2,
  max: () => max,
  maxIndex: () => maxIndex,
  mean: () => mean,
  median: () => median_default,
  merge: () => merge,
  min: () => min,
  minIndex: () => minIndex,
  nice: () => nice,
  pairs: () => pairs,
  permute: () => permute_default,
  quantile: () => quantile,
  quantileSorted: () => quantileSorted,
  quickselect: () => quickselect,
  range: () => range_default,
  reduce: () => reduce,
  reverse: () => reverse,
  rollup: () => rollup,
  rollups: () => rollups,
  scan: () => scan,
  shuffle: () => shuffle_default,
  shuffler: () => shuffler,
  some: () => some,
  sort: () => sort,
  subset: () => subset,
  sum: () => sum,
  superset: () => superset,
  thresholdFreedmanDiaconis: () => freedmanDiaconis_default,
  thresholdScott: () => scott_default,
  thresholdSturges: () => sturges_default,
  tickIncrement: () => tickIncrement,
  tickStep: () => tickStep,
  ticks: () => ticks_default,
  transpose: () => transpose_default,
  union: () => union,
  variance: () => variance,
  zip: () => zip_default
});
var init_src5 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-array/src/index.js"() {
    init_bisect();
    init_ascending();
    init_bisector();
    init_count();
    init_cross2();
    init_cumsum();
    init_descending();
    init_deviation();
    init_extent();
    init_fsum();
    init_group();
    init_groupSort();
    init_bin();
    init_freedmanDiaconis();
    init_scott();
    init_sturges();
    init_max();
    init_maxIndex();
    init_mean();
    init_median();
    init_merge();
    init_min();
    init_minIndex();
    init_nice();
    init_pairs();
    init_permute();
    init_quantile();
    init_quickselect();
    init_range();
    init_least();
    init_leastIndex();
    init_greatest();
    init_greatestIndex();
    init_scan();
    init_shuffle();
    init_sum();
    init_ticks();
    init_transpose();
    init_variance();
    init_zip();
    init_every();
    init_some();
    init_filter();
    init_map();
    init_reduce();
    init_reverse();
    init_sort();
    init_difference();
    init_disjoint();
    init_intersection();
    init_subset();
    init_superset();
    init_union();
    init_src4();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/area.js
function area_default2(polygon) {
  var i = -1, n = polygon.length, a, b = polygon[n - 1], area = 0;
  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }
  return area / 2;
}
var init_area2 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/area.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/centroid.js
function centroid_default2(polygon) {
  var i = -1, n = polygon.length, x = 0, y = 0, a, b = polygon[n - 1], c, k = 0;
  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }
  return k *= 3, [x / k, y / k];
}
var init_centroid2 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/centroid.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/cross.js
function cross_default2(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}
var init_cross3 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/cross.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/hull.js
function lexicographicOrder2(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}
function computeUpperHullIndexes2(points) {
  const n = points.length, indexes2 = [0, 1];
  let size = 2, i;
  for (i = 2; i < n; ++i) {
    while (size > 1 && cross_default2(points[indexes2[size - 2]], points[indexes2[size - 1]], points[i]) <= 0) --size;
    indexes2[size++] = i;
  }
  return indexes2.slice(0, size);
}
function hull_default2(points) {
  if ((n = points.length) < 3) return null;
  var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder2);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
  var upperIndexes = computeUpperHullIndexes2(sortedPoints), lowerIndexes = computeUpperHullIndexes2(flippedPoints);
  var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
  return hull;
}
var init_hull2 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/hull.js"() {
    init_cross3();
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/contains.js
function contains_default2(polygon, point) {
  var n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], x1, y1, inside = false;
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
    x0 = x1, y0 = y1;
  }
  return inside;
}
var init_contains2 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/contains.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/length.js
function length_default2(polygon) {
  var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.hypot(xa, ya);
  }
  return perimeter;
}
var init_length2 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/length.js"() {
  }
});

// node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/index.js
var src_exports7 = {};
__export(src_exports7, {
  polygonArea: () => area_default2,
  polygonCentroid: () => centroid_default2,
  polygonContains: () => contains_default2,
  polygonHull: () => hull_default2,
  polygonLength: () => length_default2
});
var init_src6 = __esm({
  "node_modules/d3-weighted-voronoi/node_modules/d3-polygon/src/index.js"() {
    init_area2();
    init_centroid2();
    init_hull2();
    init_contains2();
    init_length2();
  }
});

// node_modules/d3-weighted-voronoi/build/d3-weighted-voronoi.js
var require_d3_weighted_voronoi = __commonJS({
  "node_modules/d3-weighted-voronoi/build/d3-weighted-voronoi.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, (init_src5(), __toCommonJS(src_exports6)), (init_src6(), __toCommonJS(src_exports7))) : typeof define === "function" && define.amd ? define(["exports", "d3-array", "d3-polygon"], factory) : factory(global.d3 = global.d3 || {}, global.d3, global.d3);
    })(exports, function(exports2, d3Array, d3Polygon) {
      "use strict";
      var epsilon = 1e-10;
      function epsilonesque(n) {
        return n <= epsilon && n >= -epsilon;
      }
      function dot(v0, v1) {
        return v0.x * v1.x + v0.y * v1.y + v0.z * v1.z;
      }
      function linearDependent(v0, v1) {
        return epsilonesque(v0.x * v1.y - v0.y * v1.x) && epsilonesque(v0.y * v1.z - v0.z * v1.y) && epsilonesque(v0.z * v1.x - v0.x * v1.z);
      }
      function polygonDirection(polygon) {
        var sign, crossproduct, p0, p1, p2, v0, v1, i;
        p0 = polygon[polygon.length - 2];
        p1 = polygon[polygon.length - 1];
        p2 = polygon[0];
        v0 = vect(p0, p1);
        v1 = vect(p1, p2);
        crossproduct = calculateCrossproduct(v0, v1);
        sign = Math.sign(crossproduct);
        p0 = p1;
        p1 = p2;
        p2 = polygon[1];
        v0 = v1;
        v1 = vect(p1, p2);
        crossproduct = calculateCrossproduct(v0, v1);
        if (Math.sign(crossproduct) !== sign) {
          return void 0;
        }
        for (i = 2; i < polygon.length - 1; i++) {
          p0 = p1;
          p1 = p2;
          p2 = polygon[i];
          v0 = v1;
          v1 = vect(p1, p2);
          crossproduct = calculateCrossproduct(v0, v1);
          if (Math.sign(crossproduct) !== sign) {
            return void 0;
          }
        }
        return sign;
      }
      function vect(from, to) {
        return [to[0] - from[0], to[1] - from[1]];
      }
      function calculateCrossproduct(v0, v1) {
        return v0[0] * v1[1] - v0[1] * v1[0];
      }
      function ConflictListNode(face, vert) {
        this.face = face;
        this.vert = vert;
        this.nextf = null;
        this.prevf = null;
        this.nextv = null;
        this.prevv = null;
      }
      function ConflictList(forFace) {
        this.forFace = forFace;
        this.head = null;
      }
      ConflictList.prototype.add = function(cln) {
        if (this.head === null) {
          this.head = cln;
        } else {
          if (this.forFace) {
            this.head.prevv = cln;
            cln.nextv = this.head;
            this.head = cln;
          } else {
            this.head.prevf = cln;
            cln.nextf = this.head;
            this.head = cln;
          }
        }
      };
      ConflictList.prototype.isEmpty = function() {
        return this.head === null;
      };
      ConflictList.prototype.fill = function(visible) {
        if (this.forFace) {
          return;
        }
        var curr = this.head;
        do {
          visible.push(curr.face);
          curr.face.marked = true;
          curr = curr.nextf;
        } while (curr !== null);
      };
      ConflictList.prototype.removeAll = function() {
        if (this.forFace) {
          var curr = this.head;
          do {
            if (curr.prevf === null) {
              if (curr.nextf === null) {
                curr.vert.conflicts.head = null;
              } else {
                curr.nextf.prevf = null;
                curr.vert.conflicts.head = curr.nextf;
              }
            } else {
              if (curr.nextf != null) {
                curr.nextf.prevf = curr.prevf;
              }
              curr.prevf.nextf = curr.nextf;
            }
            curr = curr.nextv;
            if (curr != null) {
              curr.prevv = null;
            }
          } while (curr != null);
        } else {
          var curr = this.head;
          do {
            if (curr.prevv == null) {
              if (curr.nextv == null) {
                curr.face.conflicts.head = null;
              } else {
                curr.nextv.prevv = null;
                curr.face.conflicts.head = curr.nextv;
              }
            } else {
              if (curr.nextv != null) {
                curr.nextv.prevv = curr.prevv;
              }
              curr.prevv.nextv = curr.nextv;
            }
            curr = curr.nextf;
            if (curr != null)
              curr.prevf = null;
          } while (curr != null);
        }
      };
      ConflictList.prototype.getVertices = function() {
        var list = [], curr = this.head;
        while (curr !== null) {
          list.push(curr.vert);
          curr = curr.nextv;
        }
        return list;
      };
      function Vertex(x, y, z, weight, orig, isDummy) {
        this.x = x;
        this.y = y;
        this.weight = epsilon;
        this.index = 0;
        this.conflicts = new ConflictList(false);
        this.neighbours = null;
        this.nonClippedPolygon = null;
        this.polygon = null;
        this.originalObject = null;
        this.isDummy = false;
        if (orig !== void 0) {
          this.originalObject = orig;
        }
        if (isDummy != void 0) {
          this.isDummy = isDummy;
        }
        if (weight != null) {
          this.weight = weight;
        }
        if (z != null) {
          this.z = z;
        } else {
          this.z = this.projectZ(this.x, this.y, this.weight);
        }
      }
      Vertex.prototype.projectZ = function(x, y, weight) {
        return x * x + y * y - weight;
      };
      Vertex.prototype.setWeight = function(weight) {
        this.weight = weight;
        this.z = this.projectZ(this.x, this.y, this.weight);
      };
      Vertex.prototype.subtract = function(v) {
        return new Vertex(v.x - this.x, v.y - this.y, v.z - this.z);
      };
      Vertex.prototype.crossproduct = function(v) {
        return new Vertex(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
      };
      Vertex.prototype.equals = function(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
      };
      function Plane3D(face) {
        var p1 = face.verts[0];
        var p2 = face.verts[1];
        var p3 = face.verts[2];
        this.a = p1.y * (p2.z - p3.z) + p2.y * (p3.z - p1.z) + p3.y * (p1.z - p2.z);
        this.b = p1.z * (p2.x - p3.x) + p2.z * (p3.x - p1.x) + p3.z * (p1.x - p2.x);
        this.c = p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y);
        this.d = -1 * (p1.x * (p2.y * p3.z - p3.y * p2.z) + p2.x * (p3.y * p1.z - p1.y * p3.z) + p3.x * (p1.y * p2.z - p2.y * p1.z));
      }
      Plane3D.prototype.getNormZPlane = function() {
        return [
          -1 * (this.a / this.c),
          -1 * (this.b / this.c),
          -1 * (this.d / this.c)
        ];
      };
      Plane3D.prototype.getDualPointMappedToPlane = function() {
        var nplane = this.getNormZPlane();
        var dualPoint = new Point2D(nplane[0] / 2, nplane[1] / 2);
        return dualPoint;
      };
      function Point2D(x, y) {
        this.x = x;
        this.y = y;
      }
      function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
      Vector.prototype.negate = function() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
      };
      Vector.prototype.normalize = function() {
        var lenght = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        if (lenght > 0) {
          this.x /= lenght;
          this.y /= lenght;
          this.z /= lenght;
        }
      };
      function HEdge(orig, dest, face) {
        this.next = null;
        this.prev = null;
        this.twin = null;
        this.orig = orig;
        this.dest = dest;
        this.iFace = face;
      }
      HEdge.prototype.isHorizon = function() {
        return this.twin !== null && !this.iFace.marked && this.twin.iFace.marked;
      };
      HEdge.prototype.findHorizon = function(horizon) {
        if (this.isHorizon()) {
          if (horizon.length > 0 && this === horizon[0]) {
            return;
          } else {
            horizon.push(this);
            this.next.findHorizon(horizon);
          }
        } else {
          if (this.twin !== null) {
            this.twin.next.findHorizon(horizon);
          }
        }
      };
      HEdge.prototype.isEqual = function(origin, dest) {
        return this.orig.equals(origin) && this.dest.equals(dest) || this.orig.equals(dest) && this.dest.equals(origin);
      };
      function d3WeightedVoronoiError(message) {
        this.message = message;
        this.stack = new Error().stack;
      }
      d3WeightedVoronoiError.prototype.name = "d3WeightedVoronoiError";
      d3WeightedVoronoiError.prototype = new Error();
      function Face(a, b, c, orient) {
        this.conflicts = new ConflictList(true);
        this.verts = [a, b, c];
        this.marked = false;
        var t = a.subtract(b).crossproduct(b.subtract(c));
        this.normal = new Vector(-t.x, -t.y, -t.z);
        this.normal.normalize();
        this.createEdges();
        this.dualPoint = null;
        if (orient != void 0) {
          this.orient(orient);
        }
      }
      Face.prototype.getDualPoint = function() {
        if (this.dualPoint == null) {
          var plane3d = new Plane3D(this);
          this.dualPoint = plane3d.getDualPointMappedToPlane();
        }
        return this.dualPoint;
      };
      Face.prototype.isVisibleFromBelow = function() {
        return this.normal.z < -14259414393190911e-25;
      };
      Face.prototype.createEdges = function() {
        this.edges = [];
        this.edges[0] = new HEdge(this.verts[0], this.verts[1], this);
        this.edges[1] = new HEdge(this.verts[1], this.verts[2], this);
        this.edges[2] = new HEdge(this.verts[2], this.verts[0], this);
        this.edges[0].next = this.edges[1];
        this.edges[0].prev = this.edges[2];
        this.edges[1].next = this.edges[2];
        this.edges[1].prev = this.edges[0];
        this.edges[2].next = this.edges[0];
        this.edges[2].prev = this.edges[1];
      };
      Face.prototype.orient = function(orient) {
        if (!(dot(this.normal, orient) < dot(this.normal, this.verts[0]))) {
          var temp = this.verts[1];
          this.verts[1] = this.verts[2];
          this.verts[2] = temp;
          this.normal.negate();
          this.createEdges();
        }
      };
      Face.prototype.getEdge = function(v0, v1) {
        for (var i = 0; i < 3; i++) {
          if (this.edges[i].isEqual(v0, v1)) {
            return this.edges[i];
          }
        }
        return null;
      };
      Face.prototype.link = function(face, v0, v1) {
        if (face instanceof Face) {
          var twin = face.getEdge(v0, v1);
          if (twin === null) {
            throw new d3WeightedVoronoiError("when linking, twin is null");
          }
          var edge = this.getEdge(v0, v1);
          if (edge === null) {
            throw new d3WeightedVoronoiError("when linking, twin is null");
          }
          twin.twin = edge;
          edge.twin = twin;
        } else {
          var twin = face;
          var edge = this.getEdge(twin.orig, twin.dest);
          twin.twin = edge;
          edge.twin = twin;
        }
      };
      Face.prototype.conflict = function(v) {
        return dot(this.normal, v) > dot(this.normal, this.verts[0]) + epsilon;
      };
      Face.prototype.getHorizon = function() {
        for (var i = 0; i < 3; i++) {
          if (this.edges[i].twin !== null && this.edges[i].twin.isHorizon()) {
            return this.edges[i];
          }
        }
        return null;
      };
      Face.prototype.removeConflict = function() {
        this.conflicts.removeAll();
      };
      function ConvexHull() {
        this.points = [];
        this.facets = [];
        this.created = [];
        this.horizon = [];
        this.visible = [];
        this.current = 0;
      }
      ConvexHull.prototype.init = function(boundingSites, sites) {
        this.points = [];
        for (var i = 0; i < sites.length; i++) {
          this.points[i] = new Vertex(sites[i].x, sites[i].y, sites[i].z, null, sites[i], false);
        }
        this.points = this.points.concat(boundingSites);
      };
      ConvexHull.prototype.permutate = function() {
        var pointSize = this.points.length;
        for (var i = pointSize - 1; i > 0; i--) {
          var ra = Math.floor(Math.random() * i);
          var temp = this.points[ra];
          temp.index = i;
          var currentItem = this.points[i];
          currentItem.index = ra;
          this.points.splice(ra, 1, currentItem);
          this.points.splice(i, 1, temp);
        }
      };
      ConvexHull.prototype.prep = function() {
        if (this.points.length <= 3) {
          throw new d3WeightedVoronoiError("Less than 4 points");
        }
        for (var i = 0; i < this.points.length; i++) {
          this.points[i].index = i;
        }
        var v0, v1, v2, v3;
        var f1, f2, f3, f0;
        v0 = this.points[0];
        v1 = this.points[1];
        v2 = v3 = null;
        for (var i = 2; i < this.points.length; i++) {
          if (!(linearDependent(v0, this.points[i]) && linearDependent(v1, this.points[i]))) {
            v2 = this.points[i];
            v2.index = 2;
            this.points[2].index = i;
            this.points.splice(i, 1, this.points[2]);
            this.points.splice(2, 1, v2);
            break;
          }
        }
        if (v2 === null) {
          throw new d3WeightedVoronoiError("Not enough non-planar Points (v2 is null)");
        }
        f0 = new Face(v0, v1, v2);
        for (var i = 3; i < this.points.length; i++) {
          if (!epsilonesque(dot(f0.normal, f0.verts[0]) - dot(f0.normal, this.points[i]))) {
            v3 = this.points[i];
            v3.index = 3;
            this.points[3].index = i;
            this.points.splice(i, 1, this.points[3]);
            this.points.splice(3, 1, v3);
            break;
          }
        }
        if (v3 === null) {
          throw new d3WeightedVoronoiError("Not enough non-planar Points (v3 is null)");
        }
        f0.orient(v3);
        f1 = new Face(v0, v2, v3, v1);
        f2 = new Face(v0, v1, v3, v2);
        f3 = new Face(v1, v2, v3, v0);
        this.addFacet(f0);
        this.addFacet(f1);
        this.addFacet(f2);
        this.addFacet(f3);
        f0.link(f1, v0, v2);
        f0.link(f2, v0, v1);
        f0.link(f3, v1, v2);
        f1.link(f2, v0, v3);
        f1.link(f3, v2, v3);
        f2.link(f3, v3, v1);
        this.current = 4;
        var v;
        for (var i = this.current; i < this.points.length; i++) {
          v = this.points[i];
          if (f0.conflict(v)) {
            this.addConflict(f0, v);
          }
          if (f1.conflict(v)) {
            this.addConflict(f1, v);
          }
          if (f2.conflict(v)) {
            this.addConflict(f2, v);
          }
          if (f3.conflict(v)) {
            this.addConflict(f3, v);
          }
        }
      }, // IN: Faces old1 old2 and fn
      ConvexHull.prototype.addConflicts = function(old1, old2, fn) {
        var l1 = old1.conflicts.getVertices();
        var l2 = old2.conflicts.getVertices();
        var nCL = [];
        var v1, v2;
        var i, l;
        i = l = 0;
        while (i < l1.length || l < l2.length) {
          if (i < l1.length && l < l2.length) {
            v1 = l1[i];
            v2 = l2[l];
            if (v1.index === v2.index) {
              nCL.push(v1);
              i++;
              l++;
            } else if (v1.index > v2.index) {
              nCL.push(v1);
              i++;
            } else {
              nCL.push(v2);
              l++;
            }
          } else if (i < l1.length) {
            nCL.push(l1[i++]);
          } else {
            nCL.push(l2[l++]);
          }
        }
        for (var i = nCL.length - 1; i >= 0; i--) {
          v1 = nCL[i];
          if (fn.conflict(v1)) this.addConflict(fn, v1);
        }
      };
      ConvexHull.prototype.addConflict = function(face, vert) {
        var e = new ConflictListNode(face, vert);
        face.conflicts.add(e);
        vert.conflicts.add(e);
      };
      ConvexHull.prototype.removeConflict = function(f) {
        f.removeConflict();
        var index2 = f.index;
        f.index = -1;
        if (index2 === this.facets.length - 1) {
          this.facets.splice(this.facets.length - 1, 1);
          return;
        }
        if (index2 >= this.facets.length || index2 < 0) return;
        var last = this.facets.splice(this.facets.length - 1, 1);
        last[0].index = index2;
        this.facets.splice(index2, 1, last[0]);
      };
      ConvexHull.prototype.addFacet = function(face) {
        face.index = this.facets.length;
        this.facets.push(face);
      };
      ConvexHull.prototype.compute = function() {
        this.prep();
        while (this.current < this.points.length) {
          var next = this.points[this.current];
          if (next.conflicts.isEmpty()) {
            this.current++;
            continue;
          }
          this.created = [];
          this.horizon = [];
          this.visible = [];
          next.conflicts.fill(this.visible);
          var e;
          for (var jF = 0; jF < this.visible.length; jF++) {
            e = this.visible[jF].getHorizon();
            if (e !== null) {
              e.findHorizon(this.horizon);
              break;
            }
          }
          var last = null, first = null;
          for (var hEi = 0; hEi < this.horizon.length; hEi++) {
            var hE = this.horizon[hEi];
            var fn = new Face(next, hE.orig, hE.dest, hE.twin.next.dest);
            fn.conflicts = new ConflictList(true);
            this.addFacet(fn);
            this.created.push(fn);
            this.addConflicts(hE.iFace, hE.twin.iFace, fn);
            fn.link(hE);
            if (last !== null) fn.link(last, next, hE.orig);
            last = fn;
            if (first === null) first = fn;
          }
          if (first !== null && last !== null) {
            last.link(first, next, this.horizon[0].orig);
          }
          if (this.created.length != 0) {
            for (var f = 0; f < this.visible.length; f++) {
              this.removeConflict(this.visible[f]);
            }
            this.current++;
            this.created = [];
          }
        }
        return this.facets;
      };
      ConvexHull.prototype.clear = function() {
        this.points = [];
        this.facets = [];
        this.created = [];
        this.horizon = [];
        this.visible = [];
        this.current = 0;
      };
      function polygonClip(clip, subject) {
        var input, closed = polygonClosed(subject), i = -1, n = clip.length - polygonClosed(clip), j, m, a = clip[n - 1], b, c, d, intersection2;
        while (++i < n) {
          input = subject.slice();
          subject.length = 0;
          b = clip[i];
          c = input[(m = input.length - closed) - 1];
          j = -1;
          while (++j < m) {
            d = input[j];
            if (polygonInside(d, a, b)) {
              if (!polygonInside(c, a, b)) {
                intersection2 = polygonIntersect(c, d, a, b);
                if (isFinite(intersection2[0])) {
                  subject.push(intersection2);
                }
              }
              subject.push(d);
            } else if (polygonInside(c, a, b)) {
              intersection2 = polygonIntersect(c, d, a, b);
              if (isFinite(intersection2[0])) {
                subject.push(intersection2);
              }
            }
            c = d;
          }
          if (closed) subject.push(subject[0]);
          a = b;
        }
        return subject;
      }
      function polygonInside(p, a, b) {
        return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
      }
      function polygonIntersect(c, d, a, b) {
        var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
        return [x1 + ua * x21, y1 + ua * y21];
      }
      function polygonClosed(coordinates) {
        var a = coordinates[0], b = coordinates[coordinates.length - 1];
        return !(a[0] - b[0] || a[1] - b[1]);
      }
      function getFacesOfDestVertex(edge) {
        var faces = [];
        var previous = edge;
        var first = edge.dest;
        var site = first.originalObject;
        var neighbours = [];
        do {
          previous = previous.twin.prev;
          var siteOrigin = previous.orig.originalObject;
          if (!siteOrigin.isDummy) {
            neighbours.push(siteOrigin);
          }
          var iFace = previous.iFace;
          if (iFace.isVisibleFromBelow()) {
            faces.push(iFace);
          }
        } while (previous !== edge);
        site.neighbours = neighbours;
        return faces;
      }
      function computePowerDiagramIntegrated(sites, boundingSites, clippingPolygon) {
        var convexHull = new ConvexHull();
        convexHull.clear();
        convexHull.init(boundingSites, sites);
        var facets = convexHull.compute(sites);
        var polygons = [];
        var verticesVisited = [];
        var facetCount = facets.length;
        for (var i = 0; i < facetCount; i++) {
          var facet = facets[i];
          if (facet.isVisibleFromBelow()) {
            for (var e = 0; e < 3; e++) {
              var edge = facet.edges[e];
              var destVertex = edge.dest;
              var site = destVertex.originalObject;
              if (!verticesVisited[destVertex.index]) {
                verticesVisited[destVertex.index] = true;
                if (site.isDummy) {
                  continue;
                }
                var faces = getFacesOfDestVertex(edge);
                var protopoly = [];
                var lastX = null;
                var lastY = null;
                var dx = 1;
                var dy = 1;
                for (var j = 0; j < faces.length; j++) {
                  var point = faces[j].getDualPoint();
                  var x1 = point.x;
                  var y1 = point.y;
                  if (lastX !== null) {
                    dx = lastX - x1;
                    dy = lastY - y1;
                    if (dx < 0) {
                      dx = -dx;
                    }
                    if (dy < 0) {
                      dy = -dy;
                    }
                  }
                  if (dx > epsilon || dy > epsilon) {
                    protopoly.push([x1, y1]);
                    lastX = x1;
                    lastY = y1;
                  }
                }
                site.nonClippedPolygon = protopoly.reverse();
                if (!site.isDummy && d3Polygon.polygonLength(site.nonClippedPolygon) > 0) {
                  var clippedPoly = polygonClip(clippingPolygon, site.nonClippedPolygon);
                  site.polygon = clippedPoly;
                  clippedPoly.site = site;
                  if (clippedPoly.length > 0) {
                    polygons.push(clippedPoly);
                  }
                }
              }
            }
          }
        }
        return polygons;
      }
      function weightedVoronoi() {
        var x = function(d) {
          return d.x;
        };
        var y = function(d) {
          return d.y;
        };
        var weight = function(d) {
          return d.weight;
        };
        var clip = [
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 0]
        ];
        var extent = [
          [0, 0],
          [1, 1]
        ];
        var size = [1, 1];
        function _weightedVoronoi(data) {
          var formatedSites;
          formatedSites = data.map(function(d) {
            return new Vertex(x(d), y(d), null, weight(d), d, false);
          });
          return computePowerDiagramIntegrated(formatedSites, boundingSites(), clip);
        }
        _weightedVoronoi.x = function(_) {
          if (!arguments.length) {
            return x;
          }
          x = _;
          return _weightedVoronoi;
        };
        _weightedVoronoi.y = function(_) {
          if (!arguments.length) {
            return y;
          }
          y = _;
          return _weightedVoronoi;
        };
        _weightedVoronoi.weight = function(_) {
          if (!arguments.length) {
            return weight;
          }
          weight = _;
          return _weightedVoronoi;
        };
        _weightedVoronoi.clip = function(_) {
          var direction, xExtent, yExtent;
          if (!arguments.length) {
            return clip;
          }
          xExtent = d3Array.extent(
            _.map(function(c) {
              return c[0];
            })
          );
          yExtent = d3Array.extent(
            _.map(function(c) {
              return c[1];
            })
          );
          direction = polygonDirection(_);
          if (direction === void 0) {
            clip = d3Polygon.polygonHull(_);
          } else if (direction === 1) {
            clip = _.reverse();
          } else {
            clip = _;
          }
          extent = [
            [xExtent[0], yExtent[0]],
            [xExtent[1], yExtent[1]]
          ];
          size = [xExtent[1] - xExtent[0], yExtent[1] - yExtent[0]];
          return _weightedVoronoi;
        };
        _weightedVoronoi.extent = function(_) {
          if (!arguments.length) {
            return extent;
          }
          clip = [_[0], [_[0][0], _[1][1]], _[1], [_[1][0], _[0][1]]];
          extent = _;
          size = [_[1][0] - _[0][0], _[1][1] - _[0][1]];
          return _weightedVoronoi;
        };
        _weightedVoronoi.size = function(_) {
          if (!arguments.length) {
            return size;
          }
          clip = [
            [0, 0],
            [0, _[1]],
            [_[0], _[1]],
            [_[0], 0]
          ];
          extent = [[0, 0], _];
          size = _;
          return _weightedVoronoi;
        };
        function boundingSites() {
          var minX, maxX, minY, maxY, width, height, x0, x1, y0, y1, boundingData = [], boundingSites2 = [];
          minX = extent[0][0];
          maxX = extent[1][0];
          minY = extent[0][1];
          maxY = extent[1][1];
          width = maxX - minX;
          height = maxY - minY;
          x0 = minX - width;
          x1 = maxX + width;
          y0 = minY - height;
          y1 = maxY + height;
          boundingData[0] = [x0, y0];
          boundingData[1] = [x0, y1];
          boundingData[2] = [x1, y1];
          boundingData[3] = [x1, y0];
          for (var i = 0; i < 4; i++) {
            boundingSites2.push(
              new Vertex(
                boundingData[i][0],
                boundingData[i][1],
                null,
                epsilon,
                new Vertex(boundingData[i][0], boundingData[i][1], null, epsilon, null, true),
                true
              )
            );
          }
          return boundingSites2;
        }
        return _weightedVoronoi;
      }
      exports2.weightedVoronoi = weightedVoronoi;
      exports2.d3WeightedVoronoiError = d3WeightedVoronoiError;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/d3-voronoi-map/build/d3-voronoi-map.js
var require_d3_voronoi_map = __commonJS({
  "node_modules/d3-voronoi-map/build/d3-voronoi-map.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, (init_src(), __toCommonJS(src_exports3)), (init_src2(), __toCommonJS(src_exports4)), (init_src3(), __toCommonJS(src_exports5)), require_d3_weighted_voronoi()) : typeof define === "function" && define.amd ? define(["exports", "d3-polygon", "d3-timer", "d3-dispatch", "d3-weighted-voronoi"], factory) : factory(global.d3 = global.d3 || {}, global.d3, global.d3, global.d3, global.d3);
    })(exports, function(exports2, d3Polygon, d3Timer, d3Dispatch, d3WeightedVoronoi) {
      "use strict";
      function FlickeringMitigation() {
        this.growthChangesLength = DEFAULT_LENGTH;
        this.totalAvailableArea = NaN;
        this.lastAreaError = NaN;
        this.lastGrowth = NaN;
        this.growthChanges = [];
        this.growthChangeWeights = generateGrowthChangeWeights(this.growthChangesLength);
        this.growthChangeWeightsSum = computeGrowthChangeWeightsSum(this.growthChangeWeights);
      }
      var DEFAULT_LENGTH = 10;
      function direction(h0, h1) {
        return h0 >= h1 ? 1 : -1;
      }
      function generateGrowthChangeWeights(length3) {
        var initialWeight = 3;
        var weightDecrement = 1;
        var minWeight = 1;
        var weightedCount = initialWeight;
        var growthChangeWeights = [];
        for (var i = 0; i < length3; i++) {
          growthChangeWeights.push(weightedCount);
          weightedCount -= weightDecrement;
          if (weightedCount < minWeight) {
            weightedCount = minWeight;
          }
        }
        return growthChangeWeights;
      }
      function computeGrowthChangeWeightsSum(growthChangeWeights) {
        var growthChangeWeightsSum = 0;
        for (var i = 0; i < growthChangeWeights.length; i++) {
          growthChangeWeightsSum += growthChangeWeights[i];
        }
        return growthChangeWeightsSum;
      }
      FlickeringMitigation.prototype.reset = function() {
        this.lastAreaError = NaN;
        this.lastGrowth = NaN;
        this.growthChanges = [];
        this.growthChangesLength = DEFAULT_LENGTH;
        this.growthChangeWeights = generateGrowthChangeWeights(this.growthChangesLength);
        this.growthChangeWeightsSum = computeGrowthChangeWeightsSum(this.growthChangeWeights);
        this.totalAvailableArea = NaN;
        return this;
      };
      FlickeringMitigation.prototype.clear = function() {
        this.lastAreaError = NaN;
        this.lastGrowth = NaN;
        this.growthChanges = [];
        return this;
      };
      FlickeringMitigation.prototype.length = function(_) {
        if (!arguments.length) {
          return this.growthChangesLength;
        }
        if (parseInt(_) > 0) {
          this.growthChangesLength = Math.floor(parseInt(_));
          this.growthChangeWeights = generateGrowthChangeWeights(this.growthChangesLength);
          this.growthChangeWeightsSum = computeGrowthChangeWeightsSum(this.growthChangeWeights);
        } else {
          console.warn("FlickeringMitigation.length() accepts only positive integers; unable to handle " + _);
        }
        return this;
      };
      FlickeringMitigation.prototype.totalArea = function(_) {
        if (!arguments.length) {
          return this.totalAvailableArea;
        }
        if (parseFloat(_) > 0) {
          this.totalAvailableArea = parseFloat(_);
        } else {
          console.warn("FlickeringMitigation.totalArea() accepts only positive numbers; unable to handle " + _);
        }
        return this;
      };
      FlickeringMitigation.prototype.add = function(areaError) {
        var secondToLastAreaError, secondToLastGrowth;
        secondToLastAreaError = this.lastAreaError;
        this.lastAreaError = areaError;
        if (!isNaN(secondToLastAreaError)) {
          secondToLastGrowth = this.lastGrowth;
          this.lastGrowth = direction(this.lastAreaError, secondToLastAreaError);
        }
        if (!isNaN(secondToLastGrowth)) {
          this.growthChanges.unshift(this.lastGrowth != secondToLastGrowth);
        }
        if (this.growthChanges.length > this.growthChangesLength) {
          this.growthChanges.pop();
        }
        return this;
      };
      FlickeringMitigation.prototype.ratio = function() {
        var weightedChangeCount = 0;
        var ratio;
        if (this.growthChanges.length < this.growthChangesLength) {
          return 0;
        }
        if (this.lastAreaError > this.totalAvailableArea / 10) {
          return 0;
        }
        for (var i = 0; i < this.growthChangesLength; i++) {
          if (this.growthChanges[i]) {
            weightedChangeCount += this.growthChangeWeights[i];
          }
        }
        ratio = weightedChangeCount / this.growthChangeWeightsSum;
        return ratio;
      };
      function randomInitialPosition() {
        var clippingPolygon, extent, minX, maxX, minY, maxY, dx, dy;
        function _random(d, i, arr, voronoiMapSimulation2) {
          var shouldUpdateInternals = false;
          var x, y;
          if (clippingPolygon !== voronoiMapSimulation2.clip()) {
            clippingPolygon = voronoiMapSimulation2.clip();
            extent = voronoiMapSimulation2.extent();
            shouldUpdateInternals = true;
          }
          if (shouldUpdateInternals) {
            updateInternals();
          }
          x = minX + dx * voronoiMapSimulation2.prng()();
          y = minY + dy * voronoiMapSimulation2.prng()();
          while (!d3Polygon.polygonContains(clippingPolygon, [x, y])) {
            x = minX + dx * voronoiMapSimulation2.prng()();
            y = minY + dy * voronoiMapSimulation2.prng()();
          }
          return [x, y];
        }
        ;
        function updateInternals() {
          minX = extent[0][0];
          maxX = extent[1][0];
          minY = extent[0][1];
          maxY = extent[1][1];
          dx = maxX - minX;
          dy = maxY - minY;
        }
        ;
        return _random;
      }
      ;
      function pie() {
        var startAngle = 0;
        var clippingPolygon, dataArray, dataArrayLength, clippingPolygonCentroid, halfIncircleRadius, angleBetweenData;
        function _pie(d, i, arr, voronoiMapSimulation2) {
          var shouldUpdateInternals = false;
          if (clippingPolygon !== voronoiMapSimulation2.clip()) {
            clippingPolygon = voronoiMapSimulation2.clip();
            shouldUpdateInternals |= true;
          }
          if (dataArray !== arr) {
            dataArray = arr;
            shouldUpdateInternals |= true;
          }
          if (shouldUpdateInternals) {
            updateInternals();
          }
          return [
            clippingPolygonCentroid[0] + Math.cos(startAngle + i * angleBetweenData) * halfIncircleRadius + (voronoiMapSimulation2.prng()() - 0.5) * 1e-3,
            clippingPolygonCentroid[1] + Math.sin(startAngle + i * angleBetweenData) * halfIncircleRadius + (voronoiMapSimulation2.prng()() - 0.5) * 1e-3
          ];
        }
        ;
        _pie.startAngle = function(_) {
          if (!arguments.length) {
            return startAngle;
          }
          startAngle = _;
          return _pie;
        };
        function updateInternals() {
          clippingPolygonCentroid = d3Polygon.polygonCentroid(clippingPolygon);
          halfIncircleRadius = computeMinDistFromEdges(clippingPolygonCentroid, clippingPolygon) / 2;
          dataArrayLength = dataArray.length;
          angleBetweenData = 2 * Math.PI / dataArrayLength;
        }
        ;
        function computeMinDistFromEdges(vertex, clippingPolygon2) {
          var minDistFromEdges = Infinity, edgeIndex = 0, edgeVertex0 = clippingPolygon2[clippingPolygon2.length - 1], edgeVertex1 = clippingPolygon2[edgeIndex];
          var distFromCurrentEdge;
          while (edgeIndex < clippingPolygon2.length) {
            distFromCurrentEdge = vDistance(vertex, edgeVertex0, edgeVertex1);
            if (distFromCurrentEdge < minDistFromEdges) {
              minDistFromEdges = distFromCurrentEdge;
            }
            edgeIndex++;
            edgeVertex0 = edgeVertex1;
            edgeVertex1 = clippingPolygon2[edgeIndex];
          }
          return minDistFromEdges;
        }
        function vDistance(vertex, edgeVertex0, edgeVertex1) {
          var x = vertex[0], y = vertex[1], x1 = edgeVertex0[0], y1 = edgeVertex0[1], x2 = edgeVertex1[0], y2 = edgeVertex1[1];
          var A = x - x1, B = y - y1, C = x2 - x1, D = y2 - y1;
          var dot = A * C + B * D;
          var len_sq = C * C + D * D;
          var param = -1;
          if (len_sq != 0)
            param = dot / len_sq;
          var xx, yy;
          if (param < 0) {
            xx = x1;
            yy = y1;
          } else if (param > 1) {
            xx = x2;
            yy = y2;
          } else {
            xx = x1 + param * C;
            yy = y1 + param * D;
          }
          var dx = x - xx;
          var dy = y - yy;
          return Math.sqrt(dx * dx + dy * dy);
        }
        return _pie;
      }
      function halfAverageAreaInitialWeight() {
        var clippingPolygon, dataArray, siteCount, totalArea, halfAverageArea;
        function _halfAverageArea(d, i, arr, voronoiMapSimulation2) {
          var shouldUpdateInternals = false;
          if (clippingPolygon !== voronoiMapSimulation2.clip()) {
            clippingPolygon = voronoiMapSimulation2.clip();
            shouldUpdateInternals |= true;
          }
          if (dataArray !== arr) {
            dataArray = arr;
            shouldUpdateInternals |= true;
          }
          if (shouldUpdateInternals) {
            updateInternals();
          }
          return halfAverageArea;
        }
        ;
        function updateInternals() {
          siteCount = dataArray.length;
          totalArea = d3Polygon.polygonArea(clippingPolygon);
          halfAverageArea = totalArea / siteCount / 2;
        }
        return _halfAverageArea;
      }
      ;
      function d3VoronoiMapError(message) {
        this.message = message;
        this.stack = new Error().stack;
      }
      d3VoronoiMapError.prototype.name = "d3VoronoiMapError";
      d3VoronoiMapError.prototype = new Error();
      function voronoiMapSimulation(data) {
        var DEFAULT_CONVERGENCE_RATIO = 0.01;
        var DEFAULT_MAX_ITERATION_COUNT = 50;
        var DEFAULT_MIN_WEIGHT_RATIO = 0.01;
        var DEFAULT_PRNG = Math.random;
        var DEFAULT_INITIAL_POSITION = randomInitialPosition();
        var DEFAULT_INITIAL_WEIGHT = halfAverageAreaInitialWeight();
        var RANDOM_INITIAL_POSITION = randomInitialPosition();
        var epsilon = 1e-10;
        var weight = function(d) {
          return d.weight;
        };
        var convergenceRatio = DEFAULT_CONVERGENCE_RATIO;
        var maxIterationCount = DEFAULT_MAX_ITERATION_COUNT;
        var minWeightRatio = DEFAULT_MIN_WEIGHT_RATIO;
        var prng = DEFAULT_PRNG;
        var initialPosition = DEFAULT_INITIAL_POSITION;
        var initialWeight = DEFAULT_INITIAL_WEIGHT;
        var weightedVoronoi = d3WeightedVoronoi.weightedVoronoi(), flickeringMitigation = new FlickeringMitigation(), shouldInitialize = true, siteCount, totalArea, areaErrorTreshold, iterationCount, polygons, areaError, converged, ended;
        var simulation, stepper = d3Timer.timer(step), event = d3Dispatch.dispatch("tick", "end");
        const HANDLE_OVERWEIGHTED_VARIANT = 1;
        const HANLDE_OVERWEIGHTED_MAX_ITERATION_COUNT = 1e3;
        var handleOverweighted;
        function sqr(d) {
          return Math.pow(d, 2);
        }
        function squaredDistance(s0, s1) {
          return sqr(s1.x - s0.x) + sqr(s1.y - s0.y);
        }
        simulation = {
          tick,
          restart: function() {
            stepper.restart(step);
            return simulation;
          },
          stop: function() {
            stepper.stop();
            return simulation;
          },
          weight: function(_) {
            if (!arguments.length) {
              return weight;
            }
            weight = _;
            shouldInitialize = true;
            return simulation;
          },
          convergenceRatio: function(_) {
            if (!arguments.length) {
              return convergenceRatio;
            }
            convergenceRatio = _;
            shouldInitialize = true;
            return simulation;
          },
          maxIterationCount: function(_) {
            if (!arguments.length) {
              return maxIterationCount;
            }
            maxIterationCount = _;
            return simulation;
          },
          minWeightRatio: function(_) {
            if (!arguments.length) {
              return minWeightRatio;
            }
            minWeightRatio = _;
            shouldInitialize = true;
            return simulation;
          },
          clip: function(_) {
            if (!arguments.length) {
              return weightedVoronoi.clip();
            }
            weightedVoronoi.clip(_);
            shouldInitialize = true;
            return simulation;
          },
          extent: function(_) {
            if (!arguments.length) {
              return weightedVoronoi.extent();
            }
            weightedVoronoi.extent(_);
            shouldInitialize = true;
            return simulation;
          },
          size: function(_) {
            if (!arguments.length) {
              return weightedVoronoi.size();
            }
            weightedVoronoi.size(_);
            shouldInitialize = true;
            return simulation;
          },
          prng: function(_) {
            if (!arguments.length) {
              return prng;
            }
            prng = _;
            shouldInitialize = true;
            return simulation;
          },
          initialPosition: function(_) {
            if (!arguments.length) {
              return initialPosition;
            }
            initialPosition = _;
            shouldInitialize = true;
            return simulation;
          },
          initialWeight: function(_) {
            if (!arguments.length) {
              return initialWeight;
            }
            initialWeight = _;
            shouldInitialize = true;
            return simulation;
          },
          state: function() {
            if (shouldInitialize) {
              initializeSimulation();
            }
            return {
              ended,
              iterationCount,
              convergenceRatio: areaError / totalArea,
              polygons
            };
          },
          on: function(name, _) {
            if (arguments.length === 1) {
              return event.on(name);
            }
            event.on(name, _);
            return simulation;
          }
        };
        function step() {
          tick();
          event.call("tick", simulation);
          if (ended) {
            stepper.stop();
            event.call("end", simulation);
          }
        }
        function tick() {
          if (!ended) {
            if (shouldInitialize) {
              initializeSimulation();
            }
            polygons = adapt(polygons, flickeringMitigation.ratio());
            iterationCount++;
            areaError = computeAreaError(polygons);
            flickeringMitigation.add(areaError);
            converged = areaError < areaErrorTreshold;
            ended = converged || iterationCount >= maxIterationCount;
          }
        }
        function initializeSimulation() {
          setHandleOverweighted();
          siteCount = data.length;
          totalArea = Math.abs(d3Polygon.polygonArea(weightedVoronoi.clip()));
          areaErrorTreshold = convergenceRatio * totalArea;
          flickeringMitigation.clear().totalArea(totalArea);
          iterationCount = 0;
          converged = false;
          polygons = initialize(data, simulation);
          ended = false;
          shouldInitialize = false;
        }
        function initialize(data2, simulation2) {
          var maxWeight = data2.reduce(function(max2, d) {
            return Math.max(max2, weight(d));
          }, -Infinity), minAllowedWeight = maxWeight * minWeightRatio;
          var weights, mapPoints;
          weights = data2.map(function(d, i, arr) {
            return {
              index: i,
              weight: Math.max(weight(d), minAllowedWeight),
              initialPosition: initialPosition(d, i, arr, simulation2),
              initialWeight: initialWeight(d, i, arr, simulation2),
              originalData: d
            };
          });
          mapPoints = createMapPoints(weights, simulation2);
          handleOverweighted(mapPoints);
          return weightedVoronoi(mapPoints);
        }
        function createMapPoints(basePoints, simulation2) {
          var totalWeight = basePoints.reduce(function(acc, bp) {
            return acc += bp.weight;
          }, 0);
          var initialPosition2;
          return basePoints.map(function(bp, i, bps) {
            initialPosition2 = bp.initialPosition;
            if (!d3Polygon.polygonContains(weightedVoronoi.clip(), initialPosition2)) {
              initialPosition2 = DEFAULT_INITIAL_POSITION(bp, i, bps, simulation2);
            }
            return {
              index: bp.index,
              targetedArea: totalArea * bp.weight / totalWeight,
              data: bp,
              x: initialPosition2[0],
              y: initialPosition2[1],
              weight: bp.initialWeight
              // ArlindNocaj/Voronoi-Treemap-Library uses an epsilonesque initial weight; using heavier initial weights allows faster weight adjustements, hence faster stabilization
            };
          });
        }
        function adapt(polygons2, flickeringMitigationRatio) {
          var adaptedMapPoints;
          adaptPositions(polygons2, flickeringMitigationRatio);
          adaptedMapPoints = polygons2.map(function(p) {
            return p.site.originalObject;
          });
          polygons2 = weightedVoronoi(adaptedMapPoints);
          if (polygons2.length < siteCount) {
            throw new d3VoronoiMapError("at least 1 site has no area, which is not supposed to arise");
          }
          adaptWeights(polygons2, flickeringMitigationRatio);
          adaptedMapPoints = polygons2.map(function(p) {
            return p.site.originalObject;
          });
          polygons2 = weightedVoronoi(adaptedMapPoints);
          if (polygons2.length < siteCount) {
            throw new d3VoronoiMapError("at least 1 site has no area, which is not supposed to arise");
          }
          return polygons2;
        }
        function adaptPositions(polygons2, flickeringMitigationRatio) {
          var newMapPoints = [], flickeringInfluence = 0.5;
          var flickeringMitigation2, d, polygon, mapPoint, centroid, dx, dy;
          flickeringMitigation2 = flickeringInfluence * flickeringMitigationRatio;
          d = 1 - flickeringMitigation2;
          for (var i = 0; i < siteCount; i++) {
            polygon = polygons2[i];
            mapPoint = polygon.site.originalObject;
            centroid = d3Polygon.polygonCentroid(polygon);
            dx = centroid[0] - mapPoint.x;
            dy = centroid[1] - mapPoint.y;
            dx *= d;
            dy *= d;
            mapPoint.x += dx;
            mapPoint.y += dy;
            newMapPoints.push(mapPoint);
          }
          handleOverweighted(newMapPoints);
        }
        function adaptWeights(polygons2, flickeringMitigationRatio) {
          var newMapPoints = [], flickeringInfluence = 0.1;
          var flickeringMitigation2, polygon, mapPoint, currentArea, adaptRatio, adaptedWeight;
          flickeringMitigation2 = flickeringInfluence * flickeringMitigationRatio;
          for (var i = 0; i < siteCount; i++) {
            polygon = polygons2[i];
            mapPoint = polygon.site.originalObject;
            currentArea = d3Polygon.polygonArea(polygon);
            adaptRatio = mapPoint.targetedArea / currentArea;
            adaptRatio = Math.max(adaptRatio, 1 - flickeringInfluence + flickeringMitigation2);
            adaptRatio = Math.min(adaptRatio, 1 + flickeringInfluence - flickeringMitigation2);
            adaptedWeight = mapPoint.weight * adaptRatio;
            adaptedWeight = Math.max(adaptedWeight, epsilon);
            mapPoint.weight = adaptedWeight;
            newMapPoints.push(mapPoint);
          }
          handleOverweighted(newMapPoints);
        }
        function handleOverweighted0(mapPoints) {
          var fixCount = 0;
          var fixApplied, tpi, tpj, weightest, lightest, sqrD, adaptedWeight;
          do {
            if (fixCount > HANLDE_OVERWEIGHTED_MAX_ITERATION_COUNT) {
              throw new d3VoronoiMapError("handleOverweighted0 is looping too much");
            }
            fixApplied = false;
            for (var i = 0; i < siteCount; i++) {
              tpi = mapPoints[i];
              for (var j = i + 1; j < siteCount; j++) {
                tpj = mapPoints[j];
                if (tpi.weight > tpj.weight) {
                  weightest = tpi;
                  lightest = tpj;
                } else {
                  weightest = tpj;
                  lightest = tpi;
                }
                sqrD = squaredDistance(tpi, tpj);
                if (sqrD < weightest.weight - lightest.weight) {
                  adaptedWeight = sqrD + lightest.weight / 2;
                  adaptedWeight = Math.max(adaptedWeight, epsilon);
                  weightest.weight = adaptedWeight;
                  fixApplied = true;
                  fixCount++;
                  break;
                }
              }
              if (fixApplied) {
                break;
              }
            }
          } while (fixApplied);
        }
        function handleOverweighted1(mapPoints) {
          var fixCount = 0;
          var fixApplied, tpi, tpj, weightest, lightest, sqrD, overweight;
          do {
            if (fixCount > HANLDE_OVERWEIGHTED_MAX_ITERATION_COUNT) {
              throw new d3VoronoiMapError("handleOverweighted1 is looping too much");
            }
            fixApplied = false;
            for (var i = 0; i < siteCount; i++) {
              tpi = mapPoints[i];
              for (var j = i + 1; j < siteCount; j++) {
                tpj = mapPoints[j];
                if (tpi.weight > tpj.weight) {
                  weightest = tpi;
                  lightest = tpj;
                } else {
                  weightest = tpj;
                  lightest = tpi;
                }
                sqrD = squaredDistance(tpi, tpj);
                if (sqrD < weightest.weight - lightest.weight) {
                  overweight = weightest.weight - lightest.weight - sqrD;
                  lightest.weight += overweight + epsilon;
                  fixApplied = true;
                  fixCount++;
                  break;
                }
              }
              if (fixApplied) {
                break;
              }
            }
          } while (fixApplied);
        }
        function computeAreaError(polygons2) {
          var areaErrorSum = 0;
          var polygon, mapPoint, currentArea;
          for (var i = 0; i < siteCount; i++) {
            polygon = polygons2[i];
            mapPoint = polygon.site.originalObject;
            currentArea = d3Polygon.polygonArea(polygon);
            areaErrorSum += Math.abs(mapPoint.targetedArea - currentArea);
          }
          return areaErrorSum;
        }
        function setHandleOverweighted() {
          switch (HANDLE_OVERWEIGHTED_VARIANT) {
            case 0:
              handleOverweighted = handleOverweighted0;
              break;
            case 1:
              handleOverweighted = handleOverweighted1;
              break;
            default:
              console.error("unknown 'handleOverweighted' variant; using variant #1");
              handleOverweighted = handleOverweighted0;
          }
        }
        return simulation;
      }
      exports2.voronoiMapSimulation = voronoiMapSimulation;
      exports2.voronoiMapInitialPositionRandom = randomInitialPosition;
      exports2.voronoiMapInitialPositionPie = pie;
      exports2.d3VoronoiMapError = d3VoronoiMapError;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/d3-voronoi-treemap/build/d3-voronoi-treemap.js
var require_d3_voronoi_treemap = __commonJS({
  "node_modules/d3-voronoi-treemap/build/d3-voronoi-treemap.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_d3_voronoi_map()) : typeof define === "function" && define.amd ? define(["exports", "d3-voronoi-map"], factory) : factory(global.d3 = global.d3 || {}, global.d3);
    })(exports, function(exports2, d3VoronoiMap) {
      "use strict";
      function voronoiTreemap2() {
        var DEFAULT_CONVERGENCE_RATIO = 0.01;
        var DEFAULT_MAX_ITERATION_COUNT = 50;
        var DEFAULT_MIN_WEIGHT_RATIO = 0.01;
        var DEFAULT_PRNG = Math.random;
        var clip = [
          [0, 0],
          [0, 1],
          [1, 1],
          [1, 0]
        ];
        var extent = [
          [0, 0],
          [1, 1]
        ];
        var size = [1, 1];
        var convergenceRatio = DEFAULT_CONVERGENCE_RATIO;
        var maxIterationCount = DEFAULT_MAX_ITERATION_COUNT;
        var minWeightRatio = DEFAULT_MIN_WEIGHT_RATIO;
        var prng = DEFAULT_PRNG;
        var unrelevantButNeedeData = [
          {
            weight: 1
          },
          {
            weight: 1
          }
        ];
        var _convenientReusableVoronoiMapSimulation = d3VoronoiMap.voronoiMapSimulation(unrelevantButNeedeData).stop();
        function _voronoiTreemap(rootNode) {
          recurse(clip, rootNode);
        }
        _voronoiTreemap.convergenceRatio = function(_) {
          if (!arguments.length) {
            return convergenceRatio;
          }
          convergenceRatio = _;
          return _voronoiTreemap;
        };
        _voronoiTreemap.maxIterationCount = function(_) {
          if (!arguments.length) {
            return maxIterationCount;
          }
          maxIterationCount = _;
          return _voronoiTreemap;
        };
        _voronoiTreemap.minWeightRatio = function(_) {
          if (!arguments.length) {
            return minWeightRatio;
          }
          minWeightRatio = _;
          return _voronoiTreemap;
        };
        _voronoiTreemap.clip = function(_) {
          if (!arguments.length) {
            return clip;
          }
          _convenientReusableVoronoiMapSimulation.clip(_);
          clip = _convenientReusableVoronoiMapSimulation.clip();
          extent = _convenientReusableVoronoiMapSimulation.extent();
          size = _convenientReusableVoronoiMapSimulation.size();
          return _voronoiTreemap;
        };
        _voronoiTreemap.extent = function(_) {
          if (!arguments.length) {
            return extent;
          }
          _convenientReusableVoronoiMapSimulation.extent(_);
          clip = _convenientReusableVoronoiMapSimulation.clip();
          extent = _convenientReusableVoronoiMapSimulation.extent();
          size = _convenientReusableVoronoiMapSimulation.size();
          return _voronoiTreemap;
        };
        _voronoiTreemap.size = function(_) {
          if (!arguments.length) {
            return size;
          }
          _convenientReusableVoronoiMapSimulation.size(_);
          clip = _convenientReusableVoronoiMapSimulation.clip();
          extent = _convenientReusableVoronoiMapSimulation.extent();
          size = _convenientReusableVoronoiMapSimulation.size();
          return _voronoiTreemap;
        };
        _voronoiTreemap.prng = function(_) {
          if (!arguments.length) {
            return prng;
          }
          prng = _;
          return _voronoiTreemap;
        };
        function recurse(clippingPolygon, node) {
          var simulation;
          node.polygon = clippingPolygon;
          if (node.height != 0) {
            simulation = d3VoronoiMap.voronoiMapSimulation(node.children).clip(clippingPolygon).weight(function(d) {
              return d.value;
            }).convergenceRatio(convergenceRatio).maxIterationCount(maxIterationCount).minWeightRatio(minWeightRatio).prng(prng).stop();
            var state = simulation.state();
            while (!state.ended) {
              simulation.tick();
              state = simulation.state();
            }
            state.polygons.forEach(function(cp) {
              recurse(cp, cp.site.originalObject.data.originalData);
            });
          }
        }
        return _voronoiTreemap;
      }
      exports2.voronoiTreemap = voronoiTreemap2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8) X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j) ;
          if (j == 8) w = X[7] = -1;
          else w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null) seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x) copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2) v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0) w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null) seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X) copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten2(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count2) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count2--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten2(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten2(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out2;
          if (nodecrypto && (out2 = nodecrypto.randomBytes)) {
            out2 = out2(width);
          } else {
            out2 = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out2);
          }
          return tostring(out2);
        } catch (e) {
          var browser = global.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/seedrandom/index.js"(exports, module) {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/HierarchyDefaultTheme.js
var HierarchyDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const gridLayout = this._root.gridLayout;
    const r = this.rule.bind(this);
    r("Hierarchy").setAll({
      legendLabelText: "{category}",
      legendValueText: "{sum.formatNumber('#.#')}",
      width: p100,
      height: p100,
      colors: ColorSet.new(this._root, { step: 2 }),
      downDepth: 1,
      initialDepth: 5,
      singleBranchOnly: true,
      maskContent: true,
      animationEasing: out(cubic)
    });
    r("HierarchyNode").setAll({
      toggleKey: "disabled",
      setStateOnChildren: true,
      position: "absolute",
      isMeasured: false,
      cursorOverStyle: "pointer",
      tooltipText: "{category}: {sum}"
    });
    r("HierarchyNode", ["last"]).setAll({
      cursorOverStyle: "default"
    });
    {
      const rule = r("Label", ["hierarchy", "node"]);
      rule.setAll({
        centerX: p50,
        centerY: p50,
        position: "absolute",
        paddingBottom: 1,
        paddingTop: 1,
        paddingRight: 4,
        paddingLeft: 4,
        text: "{category}",
        populateText: true,
        oversizedBehavior: "fit",
        minScale: 0.3
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    {
      const rule = r("HierarchyLink");
      rule.setAll({
        isMeasured: false,
        position: "absolute",
        strokeWidth: 1,
        strokeOpacity: 1,
        strength: 0.9,
        distance: 1.1
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("Circle", ["linkedhierarchy", "shape"]).setAll({
      position: "absolute",
      fillOpacity: 1,
      strokeOpacity: 0,
      radius: 15,
      tooltipY: 0
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).setAll({
      position: "absolute",
      opacity: 1,
      fillOpacity: 0,
      strokeDasharray: 0,
      strokeOpacity: 1,
      radius: 15,
      scale: 1.1,
      interactive: false
    });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("disabled", { opacity: 1, scale: 1.1, strokeDasharray: 2 });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("hoverDisabled", { scale: 1.2, opacity: 1, strokeDasharray: 2 });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("hover", { scale: 1.05, strokeDasharray: 0 });
    r("Circle", ["linkedhierarchy", "shape", "outer"]).states.create("hidden", { opacity: 0, strokeDasharray: 0 });
    r("BreadcrumbBar").setAll({
      paddingLeft: 8,
      layout: gridLayout
    });
    {
      const rule = r("Label", ["breadcrumb"]);
      rule.setAll({
        paddingRight: 4,
        paddingLeft: 4,
        cursorOverStyle: "pointer",
        populateText: true,
        text: "{category}:"
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("Label", ["breadcrumb"]).states.create("hover", {});
      setColor(rule, "fill", ic, "primaryButtonHover");
    }
    {
      const rule = r("Label", ["breadcrumb"]).states.create("down", { stateAnimationDuration: 0 });
      setColor(rule, "fill", ic, "primaryButtonDown");
    }
    {
      const rule = r("Label", ["breadcrumb", "last"]);
      rule.setAll({
        populateText: true,
        text: "{category}",
        fontWeight: "bold",
        cursorOverStyle: "default"
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("RoundedRectangle", ["breadcrumb", "label", "background"]);
      rule.setAll({
        fillOpacity: 0
      });
      setColor(rule, "fill", ic, "background");
    }
    r("Partition").setAll({
      downDepth: 1,
      upDepth: 0,
      initialDepth: 5
    });
    r("HierarchyNode", ["partition"]).setAll({
      setStateOnChildren: false
    });
    r("HierarchyNode", ["partition"]).states.create("hidden", {
      opacity: 1,
      visible: true
    });
    {
      const rule = r("Label", ["partition", "node"]);
      rule.setAll({
        x: p50,
        y: p50,
        centerY: p50,
        centerX: p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        rotation: 90,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    r("Label", ["horizontal", "partition", "node"]).setAll({
      rotation: 0
    });
    {
      const rule = r("RoundedRectangle", ["partition", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        cornerRadiusBR: 0,
        cornerRadiusTR: 0,
        cornerRadiusBL: 0,
        cornerRadiusTL: 0
      });
      setColor(rule, "stroke", ic, "background");
    }
    r("RoundedRectangle", ["partition", "node", "shape", "last"]).setAll({
      fillOpacity: 0.75
    });
    r("Sunburst").setAll({
      singleBranchOnly: true
    });
    r("HierarchyNode", ["sunburst"]).setAll({
      setStateOnChildren: false
    });
    r("HierarchyNode", ["sunburst"]).states.create("hidden", {
      opacity: 0,
      visible: false
    });
    {
      const rule = r("Slice", ["sunburst", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        cornerRadius: 0
      });
      setColor(rule, "stroke", ic, "background");
    }
    r("Slice", ["sunburst", "node", "shape", "last"]).setAll({
      fillOpacity: 0.75
    });
    {
      const rule = r("RadialLabel", ["sunburst", "node"]);
      rule.setAll({
        x: 0,
        y: 0,
        textType: "radial",
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        centerX: p50,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4,
        baseRadius: p50,
        rotation: 0
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    r("ForceDirected").setAll({
      minRadius: percent(1),
      maxRadius: percent(8),
      initialFrames: 500,
      centerStrength: 0.8,
      manyBodyStrength: -14,
      velocityDecay: 0.5,
      linkWithStrength: 0.5,
      showOnFrame: 10,
      singleBranchOnly: false,
      upDepth: Infinity,
      downDepth: 1,
      initialDepth: 5,
      topDepth: 0
    });
    r("Tree").setAll({
      orientation: "vertical",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      singleBranchOnly: false,
      upDepth: Infinity,
      downDepth: 1,
      initialDepth: 5,
      topDepth: 0
    });
    r("Pack").setAll({
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      nodePadding: 0
    });
    {
      const rule = r("Label", ["pack", "node"]);
      rule.setAll({
        centerY: p50,
        centerX: p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    {
      const rule = r("Circle", ["pack", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 0.5,
        fillOpacity: 0.8,
        strokeWidth: 1
      });
      setColor(rule, "stroke", ic, "background");
    }
    r("LinkedHierarchyNode").setAll({
      draggable: true
    });
    r("LinkedHierarchyNode").states.create("hidden", { scale: 0, opacity: 0, visible: false });
    r("Treemap").setAll({
      upDepth: 0,
      layoutAlgorithm: "squarify"
    });
    {
      const rule = r("Label", ["treemap", "node"]);
      rule.setAll({
        x: p50,
        y: p50,
        centerY: p50,
        centerX: p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    r("HierarchyNode", ["treemap", "node"]).setAll({
      tooltipY: percent(40),
      isMeasured: false,
      position: "absolute",
      cursorOverStyle: "pointer"
    });
    r("HierarchyNode", ["treemap", "node", "last"]).setAll({
      cursorOverStyle: "default"
    });
    {
      const rule = r("RoundedRectangle", ["treemap", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        cornerRadiusBR: 0,
        cornerRadiusTR: 0,
        cornerRadiusBL: 0,
        cornerRadiusTL: 0,
        fillOpacity: 1
      });
      setColor(rule, "stroke", ic, "background");
    }
    {
      r("VoronoiTreemap").setAll({
        type: "polygon",
        minWeightRatio: 5e-3,
        convergenceRatio: 5e-3,
        maxIterationCount: 100,
        singleBranchOnly: true
      });
    }
    {
      const rule = r("Graphics", ["voronoitreemap", "node", "shape"]);
      rule.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        fillOpacity: 1
      });
      setColor(rule, "stroke", ic, "background");
    }
    {
      r("Polygon", ["hierarchy", "node", "shape", "depth1"]).setAll({
        strokeWidth: 3
      });
    }
    {
      const rule = r("Label", ["voronoitreemap"]);
      rule.setAll({
        centerY: p50,
        centerX: p50,
        paddingBottom: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        populateText: true,
        text: "{category}",
        oversizedBehavior: "fit",
        minScale: 0.4,
        layer: 30
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/BreadcrumbBar.js
var BreadcrumbBar = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), ["label"]),
        background: RoundedRectangle.new(this._root, {
          themeTags: ["background"]
        })
      }, [this.labels.template])))
    });
    Object.defineProperty(this, "_disposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  makeLabel(dataItem) {
    const label = this.labels.make();
    label._setDataItem(dataItem);
    label.states.create("hover", {});
    label.states.create("down", {});
    label.events.on("click", () => {
      const series = this.get("series");
      if (series) {
        series.selectDataItem(dataItem);
      }
    });
    this.labels.push(label);
    return label;
  }
  _afterNew() {
    this._defaultThemes.push(HierarchyDefaultTheme.new(this._root));
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["breadcrumb"]);
    super._afterNew();
  }
  _changed() {
    super._changed();
    if (this.isDirty("series")) {
      const series = this.get("series");
      const previous = this._prevSettings.series;
      if (series != previous) {
        this._disposer = series.events.on("dataitemselected", (event) => {
          this._handleDataItem(event.dataItem);
        });
      } else if (previous) {
        if (this._disposer) {
          this._disposer.dispose();
        }
      }
      this._handleDataItem(series.get("selectedDataItem"));
    }
  }
  _handleDataItem(dataItem) {
    this.set("minHeight", this.height());
    this.children.clear();
    this.labels.clear();
    if (dataItem) {
      let parent = dataItem;
      while (parent) {
        let label = this.makeLabel(parent);
        if (parent == dataItem) {
          label.addTag("last");
        }
        this.children.moveValue(label, 0);
        parent = parent.get("parent");
      }
    }
  }
};
Object.defineProperty(BreadcrumbBar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BreadcrumbBar"
});
Object.defineProperty(BreadcrumbBar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([BreadcrumbBar.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/HierarchyNode.js
var HierarchyNode = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_clickDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this.states.create("disabled", {});
    this.states.create("hover", {});
    this.states.create("hoverDisabled", {});
    this.on("disabled", () => {
      const dataItem = this.dataItem;
      if (!dataItem.get("children")) {
        this.set("disabled", true);
        return;
      }
      const disabled = this.get("disabled");
      const series = this.series;
      if (dataItem && series) {
        if (dataItem.get("disabled") != disabled) {
          if (disabled) {
            series.disableDataItem(dataItem);
          } else {
            series.enableDataItem(dataItem, series.get("downDepth", 1), 0);
          }
        }
      }
    });
  }
  _changed() {
    super._changed();
    if (this.isDirty("toggleKey")) {
      const toggleKey = this.get("toggleKey");
      if (toggleKey == "disabled") {
        this._clickDisposer = this.events.on("click", () => {
          if (!this._isDragging) {
            let series = this.series;
            if (series) {
              series.selectDataItem(this.dataItem);
            }
          }
        });
      } else {
        if (this._clickDisposer) {
          this._clickDisposer.dispose();
        }
      }
    }
  }
};
Object.defineProperty(HierarchyNode, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HierarchyNode"
});
Object.defineProperty(HierarchyNode, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([HierarchyNode.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Hierarchy.js
var Hierarchy = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "nodesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, { isMeasured: false }))
    });
    Object.defineProperty(this, "_rootNode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_treeData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "hierarchy"
    });
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => HierarchyNode.new(this._root, {
        themeTags: mergeTags(this.nodes.template.get("themeTags", []), [this._tag, "hierarchy", "node"])
      }, this.nodes.template)))
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label.new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), [this._tag])
      }, this.labels.template)))
    });
    Object.defineProperty(this, "_currentDownDepth", {
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
    const childData = dataItem.get("childData");
    const node = this.nodes.make();
    node.series = this;
    node._setDataItem(dataItem);
    this.nodes.push(node);
    dataItem.setRaw("node", node);
    const label = this.labels.make();
    label._setDataItem(dataItem);
    dataItem.setRaw("label", label);
    this.labels.push(label);
    if (!childData || childData.length == 0) {
      node.addTag("last");
    }
    const depth = dataItem.get("depth");
    node.addTag("depth" + depth);
    this.nodesContainer.children.push(node);
    node.children.push(label);
    return node;
  }
  _afterNew() {
    this._defaultThemes.push(HierarchyDefaultTheme.new(this._root));
    this.fields.push("category", "childData", "disabled", "fill");
    this.children.push(this.bulletsContainer);
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this._valuesDirty) {
      this._treeData = {};
      const first = this.dataItems[0];
      if (first) {
        this._makeHierarchyData(this._treeData, first);
        this._index = 0;
        this._rootNode = hierarchy(this._treeData);
        if (this._rootNode) {
          this._rootNode.sum((d) => {
            return d.value;
          });
          const sort2 = this.get("sort");
          if (sort2 == "descending") {
            this._rootNode.sort((a, b) => b.value - a.value);
          } else if (sort2 == "ascending") {
            this._rootNode.sort((a, b) => a.value - b.value);
          }
          this.setPrivateRaw("valueLow", Infinity);
          this.setPrivateRaw("valueHigh", -Infinity);
          this.setPrivateRaw("maxDepth", 0);
          this._updateValues(this._rootNode);
        }
      }
    }
    if (this._valuesDirty || this._sizeDirty) {
      this._updateVisuals();
    }
    if (this._sizeDirty) {
      const dataItem = this.get("selectedDataItem");
      if (dataItem) {
        this._zoom(dataItem);
      }
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("selectedDataItem")) {
      this._selectDataItem(this.get("selectedDataItem"));
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      this._updateNodes(this._rootNode);
    }
  }
  _updateNodes(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      this._updateNode(dataItem);
      if (this.bullets.length > 0 && !dataItem.bullets) {
        this._makeBullets(dataItem);
      }
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        each(hierarchyChildren, (hierarchyChild) => {
          this._updateNodes(hierarchyChild);
        });
      }
    }
  }
  _updateNode(_dataItem) {
  }
  /**
   * Looks up and returns a data item by its ID.
   *
   * @param   id  ID
   * @return      Data item
   */
  getDataItemById(id) {
    return this._getDataItemById(this.dataItems, id);
  }
  _getDataItemById(dataItems, id) {
    let di;
    each(dataItems, (dataItem) => {
      if (dataItem.get("id") == id) {
        di = dataItem;
      }
      const children = dataItem.get("children");
      if (children) {
        let childDataItem = this._getDataItemById(children, id);
        if (childDataItem) {
          di = childDataItem;
        }
      }
    });
    return di;
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
      const children = dataItem.get("children");
      if (children) {
        this._handleBullets(children);
      }
    });
    this._updateVisuals();
  }
  _onDataClear() {
    super._onDataClear();
    const colors = this.get("colors");
    if (colors) {
      colors.reset();
    }
    const patterns = this.get("patterns");
    if (patterns) {
      patterns.reset();
    }
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const childData = dataItem.get("childData");
    const colors = this.get("colors");
    const patterns = this.get("patterns");
    const topDepth = this.get("topDepth", 0);
    if (!dataItem.get("parent")) {
      dataItem.setRaw("depth", 0);
      if (colors && topDepth == 0 && dataItem.get("fill") == null) {
        dataItem.setRaw("fill", colors.next());
        if (patterns) {
          dataItem.setRaw("fillPattern", patterns.next());
        }
      }
    }
    let depth = dataItem.get("depth");
    const initialDepth = this.get("initialDepth", 1);
    this.makeNode(dataItem);
    this._processDataItem(dataItem);
    if (childData) {
      const children2 = [];
      dataItem.setRaw("children", children2);
      each(childData, (child) => {
        const childDataItem = new DataItem(this, child, this._makeDataItem(child));
        children2.push(childDataItem);
        childDataItem.setRaw("parent", dataItem);
        childDataItem.setRaw("depth", depth + 1);
        if (this.dataItems.length == 1 && depth == 0) {
          if (colors && childDataItem.get("fill") == null) {
            childDataItem.setRaw("fill", colors.next());
          }
          if (patterns && childDataItem.get("fillPattern") == null) {
            childDataItem.setRaw("fillPattern", patterns.next());
          }
        } else {
          if (childDataItem.get("fill") == null) {
            childDataItem.setRaw("fill", dataItem.get("fill"));
          }
          if (childDataItem.get("fillPattern") == null) {
            childDataItem.setRaw("fillPattern", dataItem.get("fillPattern"));
          }
        }
        this.processDataItem(childDataItem);
      });
    }
    const children = dataItem.get("children");
    if (!children || children.length == 0) {
      const node = dataItem.get("node");
      node.setAll({ toggleKey: void 0 });
    }
    if (dataItem.get("disabled") == null) {
      if (depth >= topDepth + initialDepth) {
        this.disableDataItem(dataItem, 0);
      }
    }
  }
  /**
   * Adds children data to the target data item.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/hierarchy/hierarchy-api/#Dynamically_adding_child_nodes} for more info
   * @since 5.4.5
   */
  addChildData(dataItem, data) {
    const dataContext = dataItem.dataContext;
    const childDataField = this.get("childDataField");
    let childData = dataContext[childDataField];
    if (!childData) {
      childData = data;
      dataContext[childDataField] = childData;
    } else {
      childData.push(...data);
    }
    let children = dataItem.get("children");
    if (!children) {
      children = [];
      dataItem.set("children", children);
    }
    const node = dataItem.get("node");
    if (node) {
      node.set("toggleKey", this.nodes.template.get("toggleKey", "disabled"));
    }
    let depth = dataItem.get("depth");
    each(childData, (child) => {
      let found = false;
      eachContinue(children, (dataItem2) => {
        if (dataItem2.dataContext == child) {
          found = true;
          return false;
        }
        return true;
      });
      if (!found) {
        const childDataItem = new DataItem(this, child, this._makeDataItem(child));
        children.push(childDataItem);
        childDataItem.setRaw("parent", dataItem);
        childDataItem.setRaw("depth", depth + 1);
        if (childDataItem.get("fill") == null) {
          let fill = dataItem.get("fill");
          if (fill == null) {
            const colors = this.get("colors");
            if (colors) {
              fill = colors.next();
            }
          }
          childDataItem.setRaw("fill", fill);
        }
        this.processDataItem(childDataItem);
      }
    });
  }
  _processDataItem(_dataItem) {
  }
  _updateValues(d3HierarchyNode) {
    const dataItem = d3HierarchyNode.data.dataItem;
    if (d3HierarchyNode.depth > this.getPrivate("maxDepth")) {
      this.setPrivateRaw("maxDepth", d3HierarchyNode.depth);
    }
    if (dataItem) {
      dataItem.setRaw("d3HierarchyNode", d3HierarchyNode);
      d3HierarchyNode.index = this._index;
      this._index++;
      this.root.events.once("frameended", () => {
        dataItem.get("node").set("disabled", dataItem.get("disabled"));
      });
      let dataValue = d3HierarchyNode.data.value;
      let value = d3HierarchyNode.value;
      if (dataValue != null) {
        value = dataValue;
        d3HierarchyNode["value"] = value;
      }
      if (isNumber(value)) {
        dataItem.setRaw("sum", value);
        dataItem.setRaw("valuePercentTotal", value / this.dataItems[0].get("sum") * 100);
        let valuePercent = 100;
        const parent = dataItem.get("parent");
        if (parent) {
          valuePercent = value / parent.get("sum") * 100;
        }
        dataItem.get("label").text.markDirtyText();
        dataItem.setRaw("valuePercent", valuePercent);
        const valueLow = this.getPrivate("valueLow");
        if (valueLow != void 0 && valueLow > value) {
          this.setPrivateRaw("valueLow", value);
        }
        const valueHigh = this.getPrivate("valueHigh");
        if (valueHigh != void 0 && valueHigh < value) {
          this.setPrivateRaw("valueHigh", value);
        }
      }
      this.updateLegendValue(dataItem);
    }
    const hierarchyChildren = d3HierarchyNode.children;
    if (hierarchyChildren) {
      each(hierarchyChildren, (d3HierarchyChild) => {
        this._updateValues(d3HierarchyChild);
      });
    }
  }
  _makeHierarchyData(data, dataItem) {
    data.dataItem = dataItem;
    const children = dataItem.get("children");
    if (children) {
      const childrenDataArray = [];
      data.children = childrenDataArray;
      each(children, (childDataItem) => {
        const childData = {};
        childrenDataArray.push(childData);
        this._makeHierarchyData(childData, childDataItem);
      });
      const value = dataItem.get("valueWorking");
      if (isNumber(value)) {
        data.value = value;
      }
    } else {
      const value = dataItem.get("valueWorking");
      if (isNumber(value)) {
        data.value = value;
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const node = dataItem.get("node");
    if (node) {
      this.nodes.removeValue(node);
      node.dispose();
    }
    const label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    const children = dataItem.get("children");
    if (children) {
      each(children, (child) => {
        this.disposeDataItem(child);
      });
    }
  }
  /**
   * Hides hierarchy's data item.
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
      if (!isNumber(duration)) {
        const stateAnimationDuration = "stateAnimationDuration";
        duration = hiddenState.get(stateAnimationDuration, this.get(stateAnimationDuration, 0));
      }
      const stateAnimationEasing = "stateAnimationEasing";
      const easing = hiddenState.get(stateAnimationEasing, this.get(stateAnimationEasing));
      const children = dataItem.get("children");
      if ((!children || children.length == 0) && isNumber(dataItem.get("value"))) {
        promises.push(dataItem.animate({ key: "valueWorking", to: 0, duration, easing }).waitForStop());
      }
      const node = dataItem.get("node");
      node.hide();
      node.hideTooltip();
      if (children) {
        each(children, (childDataItem) => {
          promises.push(this.hideDataItem(childDataItem));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * Shows hierarchy's data item.
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
      const children = dataItem.get("children");
      if ((!children || children.length == 0) && isNumber(dataItem.get("value"))) {
        promises.push(dataItem.animate({ key: "valueWorking", to: dataItem.get("value"), duration, easing }).waitForStop());
      }
      const node = dataItem.get("node");
      node.show();
      if (children) {
        each(children, (childDataItem) => {
          promises.push(this.showDataItem(childDataItem));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * Enables a disabled data item.
   *
   * @param  dataItem  Target data item
   * @param  duration  Animation duration in milliseconds
   */
  enableDataItem(dataItem, maxDepth, depth, duration) {
    if (depth == null) {
      depth = 0;
    }
    if (maxDepth == null) {
      maxDepth = 1;
    }
    dataItem.set("disabled", false);
    dataItem.get("node").set("disabled", false);
    if (!dataItem.isHidden()) {
      dataItem.get("node").show(duration);
    }
    const topDepth = this.get("topDepth", 0);
    if (dataItem.get("depth") < topDepth) {
      dataItem.get("node").hide(0);
    }
    if (depth == 0) {
      const upDepth = this.get("upDepth", Infinity);
      let parent = dataItem;
      let count2 = 0;
      while (parent !== void 0) {
        if (count2 > upDepth) {
          parent.get("node").hide();
        }
        parent = parent.get("parent");
        count2++;
      }
    }
    let children = dataItem.get("children");
    if (children) {
      if (depth < maxDepth - 1) {
        each(children, (child) => {
          const disabledField = this.get("disabledField");
          if (disabledField) {
            const dataContext = child.dataContext;
            if (dataContext[disabledField] != true) {
              this.enableDataItem(child, maxDepth, depth + 1, duration);
            } else {
              this.disableDataItem(child);
            }
          } else {
            this.enableDataItem(child, maxDepth, depth + 1, duration);
          }
        });
      } else {
        each(children, (child) => {
          if (!child.isHidden()) {
            child.get("node").show(duration);
            child.get("node").states.applyAnimate("disabled");
            child.set("disabled", true);
            this.disableDataItem(child);
          }
        });
      }
    }
  }
  /**
   * Disables a data item.
   *
   * @param  dataItem  Target data item
   * @param  duration  Animation duration in milliseconds
   */
  disableDataItem(dataItem, duration) {
    dataItem.set("disabled", true);
    let children = dataItem.get("children");
    if (children) {
      each(children, (child) => {
        this.disableDataItem(child, duration);
        child.get("node").hide(duration);
      });
    }
  }
  _selectDataItem(dataItem, downDepth, skipDisptach) {
    if (dataItem) {
      if (!skipDisptach) {
        const type = "dataitemselected";
        this.events.dispatch(type, { type, target: this, dataItem });
      }
      let maxDepth = this.getPrivate("maxDepth", 1);
      const topDepth = this.get("topDepth", 0);
      if (downDepth == null) {
        downDepth = Math.min(this.get("downDepth", 1), maxDepth - dataItem.get("depth"));
      }
      const hierarchyNode = dataItem.get("d3HierarchyNode");
      let currentDepth = hierarchyNode.depth;
      if (!this.inited) {
        downDepth = Math.min(this.get("initialDepth", 1), maxDepth - topDepth);
        downDepth = Math.max(0, downDepth);
      }
      this._currentDownDepth = downDepth;
      if (currentDepth + downDepth > maxDepth) {
        downDepth = maxDepth - currentDepth;
      }
      if (currentDepth < topDepth) {
        downDepth += topDepth - currentDepth;
        currentDepth = topDepth;
      }
      const children = dataItem.get("children");
      if (children && children.length > 0) {
        if (downDepth > 0) {
          this.enableDataItem(dataItem, downDepth);
        } else {
          dataItem.get("node").show();
          each(children, (child) => {
            child.get("node").hide();
          });
        }
        if (hierarchyNode.depth < topDepth) {
          dataItem.get("node").hide(0);
        }
        if (this.get("singleBranchOnly")) {
          this._handleSingle(dataItem);
        }
      } else {
        this.enableDataItem(dataItem, downDepth);
      }
      this._root.events.once("frameended", () => {
        this._zoom(dataItem);
      });
    }
  }
  _zoom(_dataItem) {
  }
  _handleSingle(dataItem) {
    const parent = dataItem.get("parent");
    if (parent) {
      const children = parent.get("children");
      if (children) {
        each(children, (child) => {
          if (child != dataItem) {
            this.disableDataItem(child);
          }
        });
      }
    }
  }
  /**
   * Selects specific data item.
   *
   * @param  dataItem  Target data item
   */
  selectDataItem(dataItem) {
    const parent = dataItem.get("parent");
    const maxDepth = this.getPrivate("maxDepth", 1);
    if (this.get("selectedDataItem") == dataItem) {
      if (parent) {
        this.set("selectedDataItem", parent);
      } else {
        let depth = Math.min(this.get("downDepth", 1), maxDepth - dataItem.get("depth"));
        if (this._currentDownDepth == depth) {
          depth = Math.min(this.get("initialDepth", 1), maxDepth - this.get("topDepth", 0));
        }
        this._selectDataItem(dataItem, depth);
      }
    } else {
      this.set("selectedDataItem", dataItem);
    }
  }
  _makeBullet(dataItem, bulletFunction, index2) {
    const bullet = super._makeBullet(dataItem, bulletFunction, index2);
    if (bullet) {
      const sprite = bullet.get("sprite");
      const node = dataItem.get("node");
      if (sprite) {
        node.children.push(sprite);
        node.on("width", () => {
          this._positionBullet(bullet);
        });
        node.on("height", () => {
          this._positionBullet(bullet);
        });
      }
    }
    return bullet;
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const locationX = bullet.get("locationX", 0.5);
      const locationY = bullet.get("locationY", 0.5);
      const node = dataItem.get("node");
      sprite.set("x", node.width() * locationX);
      sprite.set("y", node.height() * locationY);
    }
  }
  /**
   * Triggers hover on a series data item.
   *
   * @since 5.0.7
   * @param  dataItem  Target data item
   */
  hoverDataItem(dataItem) {
    const node = dataItem.get("node");
    if (node && !node.isHidden()) {
      node.hover();
    }
  }
  /**
   * Triggers un-hover on a series data item.
   *
   * @since 5.0.7
   * @param  dataItem  Target data item
   */
  unhoverDataItem(dataItem) {
    const node = dataItem.get("node");
    if (node) {
      node.unhover();
    }
  }
};
Object.defineProperty(Hierarchy, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Hierarchy"
});
Object.defineProperty(Hierarchy, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([Hierarchy.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/LinkedHierarchyNode.js
var LinkedHierarchyNode = class extends HierarchyNode {
  _afterNew() {
    super._afterNew();
    this.states.create("disabled", {});
    this.states.create("hover", {});
    this.states.create("hoverDisabled", {});
  }
  _updateLinks(duration) {
    const dataItem = this.dataItem;
    if (dataItem) {
      let links = dataItem.get("links");
      each(links, (link) => {
        let source = link.get("source");
        let target = link.get("target");
        if (source && target) {
          if (source.get("node").isHidden() || target.get("node").isHidden()) {
            link.hide(duration);
          } else {
            link.show(duration);
          }
        }
      });
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("disabled")) {
      this._updateLinks();
    }
  }
  _onHide(duration) {
    super._onHide(duration);
    this._updateLinks(duration);
  }
  _onShow(duration) {
    super._onShow(duration);
    this._updateLinks(duration);
  }
};
Object.defineProperty(LinkedHierarchyNode, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinkedHierarchyNode"
});
Object.defineProperty(LinkedHierarchyNode, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: HierarchyNode.classNames.concat([LinkedHierarchyNode.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/HierarchyLink.js
var HierarchyLink = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _handleBullets(bullets) {
    each(this.bullets, (bullet) => {
      bullet.dispose();
    });
    bullets.each((bullet) => {
      const newBullet = bullet(this._root, this.get("source"), this.get("target"));
      if (newBullet) {
        this.bullets.push(newBullet);
        const sprite = newBullet.get("sprite");
        this.addDisposer(newBullet.on("locationX", () => {
          this._clear = true;
          this.markDirty();
        }));
        if (sprite) {
          const series = this.series;
          if (series) {
            series.linksContainer.children.push(sprite);
          }
        }
      }
    });
  }
  _changed() {
    var _a, _b;
    super._changed();
    if (this._clear) {
      let source = this.get("source");
      let target = this.get("target");
      if (source && target) {
        const sourceNode = source.get("node");
        const targetNode = target.get("node");
        const x0 = sourceNode.x();
        const y0 = sourceNode.y();
        const x1 = targetNode.x();
        const y1 = targetNode.y();
        this._display.moveTo(x0, y0);
        this._display.lineTo(x1, y1);
        const sourceRadius = (_a = sourceNode.dataItem) === null || _a === void 0 ? void 0 : _a.get("outerCircle").get("radius", 0);
        const targetRadius = (_b = targetNode.dataItem) === null || _b === void 0 ? void 0 : _b.get("outerCircle").get("radius", 0);
        const distance = Math.hypot(x1 - x0, y1 - y0);
        const trueDistance = distance - sourceRadius - targetRadius;
        each(this.bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            const location = bullet.get("locationX", 0.5);
            sprite.set("x", x0 + sourceRadius / distance * (x1 - x0) + trueDistance / distance * (x1 - x0) * location);
            sprite.set("y", y0 + sourceRadius / distance * (y1 - y0) + trueDistance / distance * (y1 - y0) * location);
            if (bullet.get("autoRotate")) {
              sprite.set("rotation", Math.atan2(y1 - y0, x1 - x0) * 180 / Math.PI + bullet.get("autoRotateAngle", 0));
            }
          }
        });
      }
    }
  }
  hide(duration) {
    each(this.bullets, (bullet) => {
      if (bullet) {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.hide(duration);
        }
      }
    });
    return super.hide();
  }
  show(duration) {
    each(this.bullets, (bullet) => {
      if (bullet) {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.show(duration);
        }
      }
    });
    return super.show();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("source")) {
      const source = this.get("source");
      if (source) {
        const sourceNode = source.get("node");
        sourceNode.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        });
      }
    }
    if (this.isDirty("target")) {
      const target = this.get("target");
      if (target) {
        const targetNode = target.get("node");
        targetNode.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        });
      }
    }
  }
  _dispose() {
    super._dispose();
    each(this.bullets, (bullet) => {
      bullet.dispose();
    });
    this.bullets = [];
  }
};
Object.defineProperty(HierarchyLink, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HierarchyLink"
});
Object.defineProperty(HierarchyLink, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([HierarchyLink.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/LinkedHierarchy.js
var LinkedHierarchy = class extends Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "linkBullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => LinkedHierarchyNode._new(this._root, {
        themeTags: mergeTags(this.nodes.template.get("themeTags", []), [this._tag, "linkedhierarchy", "hierarchy", "node"]),
        x: this.width() / 2,
        y: this.height() / 2
      }, [this.nodes.template])))
    });
    Object.defineProperty(this, "circles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Circle._new(this._root, {
        themeTags: mergeTags(this.circles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.circles.template])))
    });
    Object.defineProperty(this, "outerCircles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Circle._new(this._root, {
        themeTags: mergeTags(this.outerCircles.template.get("themeTags", []), [this._tag, "outer", "shape"])
      }, [this.outerCircles.template])))
    });
    Object.defineProperty(this, "links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => HierarchyLink._new(this._root, {
        themeTags: mergeTags(this.links.template.get("themeTags", []), [this._tag, "linkedhierarchy", "hierarchy", "link"])
      }, [this.links.template])))
    });
    Object.defineProperty(this, "linksContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.moveValue(Container.new(this._root, {}), 0)
    });
  }
  _afterNew() {
    this.fields.push("linkWith", "x", "y");
    this._disposers.push(this.linkBullets.events.onAll(() => {
      this.links.each((link) => {
        link._handleBullets(this.linkBullets);
      });
    }));
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    const circle = node.children.moveValue(this.circles.make(), 0);
    this.circles.push(circle);
    node.setPrivate("tooltipTarget", circle);
    dataItem.setRaw("circle", circle);
    const outerCircle = node.children.moveValue(this.outerCircles.make(), 0);
    this.outerCircles.push(outerCircle);
    dataItem.setRaw("outerCircle", outerCircle);
    const label = dataItem.get("label");
    circle.on("radius", () => {
      const d2 = circle.get("radius", this.width()) * 2;
      label.setAll({ maxWidth: d2, maxHeight: d2 });
      outerCircle.set("radius", d2 / 2);
      this._handleRadiusChange();
    });
    const d = circle.get("radius", this.width()) * 2;
    label.setAll({ maxWidth: d, maxHeight: d });
    circle._setDataItem(dataItem);
    outerCircle._setDataItem(dataItem);
    return node;
  }
  _handleRadiusChange() {
  }
  processDataItem(dataItem) {
    dataItem.setRaw("childLinks", []);
    dataItem.setRaw("links", []);
    super.processDataItem(dataItem);
  }
  _processDataItem(dataItem) {
    super._processDataItem(dataItem);
    const parentDataItem = dataItem.get("parent");
    if (parentDataItem && parentDataItem.get("depth") >= this.get("topDepth")) {
      const link = this.linkDataItems(parentDataItem, dataItem);
      dataItem.setRaw("parentLink", link);
    }
    const node = dataItem.get("node");
    this.updateLinkWith(this.dataItems);
    node._updateLinks(0);
  }
  /**
   * @ignore
   */
  updateLinkWith(dataItems) {
    each(dataItems, (dataItem) => {
      const linkWith = dataItem.get("linkWith");
      if (linkWith) {
        each(linkWith, (id) => {
          const linkWithDataItem = this._getDataItemById(this.dataItems, id);
          if (linkWithDataItem) {
            this.linkDataItems(dataItem, linkWithDataItem);
          }
        });
      }
      const children = dataItem.get("children");
      if (children) {
        this.updateLinkWith(children);
      }
    });
  }
  _getPoint(hierarchyNode) {
    return { x: hierarchyNode.x, y: hierarchyNode.y };
  }
  _animatePositions(dataItem) {
    const node = dataItem.get("node");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const point = this._getPoint(hierarchyNode);
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({ key: "x", to: point.x, duration, easing });
    node.animate({ key: "y", to: point.y, duration, easing });
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    this._animatePositions(dataItem);
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const hierarchyChildren = hierarchyNode.children;
    if (hierarchyChildren) {
      each(hierarchyChildren, (hierarchyChild) => {
        this._updateNodes(hierarchyChild);
      });
    }
    const fill = dataItem.get("fill");
    const fillPattern = dataItem.get("fillPattern");
    const circle = dataItem.get("circle");
    const children = dataItem.get("children");
    if (circle) {
      circle._setDefault("fill", fill);
      circle._setDefault("fillPattern", fillPattern);
      circle._setDefault("stroke", fill);
    }
    const outerCircle = dataItem.get("outerCircle");
    if (outerCircle) {
      outerCircle._setDefault("fill", fill);
      outerCircle._setDefault("stroke", fill);
      if (!children || children.length == 0) {
        outerCircle.setPrivate("visible", false);
      } else {
        outerCircle.setPrivate("visible", true);
      }
    }
  }
  /**
   * Link two data items with a link element.
   *
   * @param   source    Source node data item
   * @param   target    Target node data item
   * @param   strength  Link strength
   * @return            Link element
   */
  linkDataItems(source, target, strength) {
    let link;
    const sourceLinks = source.get("links");
    if (sourceLinks) {
      each(sourceLinks, (lnk) => {
        if (lnk.get("target") == target) {
          link = lnk;
        }
      });
    }
    const targetLinks = target.get("links");
    if (targetLinks) {
      each(targetLinks, (lnk) => {
        if (lnk.get("target") == source) {
          link = lnk;
        }
      });
    }
    if (!link) {
      link = this.links.make();
      link.series = this;
      this.links.push(link);
      this.linksContainer.children.push(link);
      link.set("source", source);
      link.set("target", target);
      link._setDataItem(source);
      link._handleBullets(this.linkBullets);
      link.set("stroke", source.get("fill"));
      if (strength != null) {
        link.set("strength", strength);
      }
      source.get("childLinks").push(link);
      move(source.get("links"), link);
      move(target.get("links"), link);
      this._processLink(link, source, target);
    }
    return link;
  }
  /**
   * Unlink two linked data items.
   *
   * @param   source  Source node data item
   * @param   target  Target node data item
   */
  unlinkDataItems(source, target) {
    let link;
    const sourceLinks = source.get("links");
    if (sourceLinks) {
      each(sourceLinks, (lnk) => {
        if (lnk && lnk.get("target") == target) {
          link = lnk;
          remove(sourceLinks, link);
        }
      });
    }
    const targetLinks = target.get("links");
    if (targetLinks) {
      each(targetLinks, (lnk) => {
        if (lnk && lnk.get("target") == source) {
          link = lnk;
          remove(targetLinks, link);
        }
      });
    }
    if (link) {
      this._disposeLink(link);
    }
    this._handleUnlink();
  }
  _handleUnlink() {
  }
  _disposeLink(link) {
    this.links.removeValue(link);
    link.dispose();
  }
  /**
   * Returns `true` if two nodes are linked with each other.
   */
  areLinked(source, target) {
    const sourceLinks = source.get("links");
    let linked = false;
    if (sourceLinks) {
      each(sourceLinks, (lnk) => {
        if (lnk.get("target") == target) {
          linked = true;
        }
      });
    }
    const targetLinks = target.get("links");
    if (targetLinks) {
      each(targetLinks, (lnk) => {
        if (lnk.get("target") == source) {
          linked = true;
        }
      });
    }
    return linked;
  }
  _processLink(_link, _source, _target) {
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const links = dataItem.get("links");
    if (links) {
      each(links, (link) => {
        this._disposeLink(link);
      });
    }
  }
  /**
   * Select a data item.
   * @param  dataItem  Data item
   */
  selectDataItem(dataItem) {
    const parent = dataItem.get("parent");
    if (!dataItem.get("disabled")) {
      this.set("selectedDataItem", dataItem);
    } else {
      if (parent) {
        this.setRaw("selectedDataItem", parent);
        const type = "dataitemselected";
        this.events.dispatch(type, { type, target: this, dataItem: parent });
        this.disableDataItem(dataItem);
      }
    }
  }
};
Object.defineProperty(LinkedHierarchy, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinkedHierarchy"
});
Object.defineProperty(LinkedHierarchy, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Hierarchy.classNames.concat([LinkedHierarchy.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/ForceDirected.js
var ForceDirected = class extends LinkedHierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "forcedirected"
    });
    Object.defineProperty(this, "d3forceSimulation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: simulation_default()
    });
    Object.defineProperty(this, "collisionForce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: collide_default(20)
    });
    Object.defineProperty(this, "linkForce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: link_default()
    });
    Object.defineProperty(this, "_nodes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_links", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_tick", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_nodesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.d3forceSimulation.on("tick", () => {
      this._tick++;
      this.updateNodePositions();
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("showOnFrame")) {
      const showOnFrame = this.get("showOnFrame");
      if (showOnFrame > this._tick) {
        this.nodesContainer.setPrivate("visible", false);
        this.linksContainer.setPrivate("visible", false);
      }
    }
    const d3forceSimulation = this.d3forceSimulation;
    if (this.isDirty("velocityDecay")) {
      d3forceSimulation.velocityDecay(this.get("velocityDecay", 0));
    }
    if (this.isDirty("initialFrames")) {
      d3forceSimulation.alphaDecay(1 - Math.pow(1e-3, 1 / this.get("initialFrames", 500)));
    }
  }
  /**
   * @ignore
   */
  restartSimulation(alpha) {
    const d3forceSimulation = this.d3forceSimulation;
    if (d3forceSimulation.alpha() < 0.25) {
      d3forceSimulation.alpha(alpha);
      d3forceSimulation.restart();
    }
  }
  _handleRadiusChange() {
    this._updateForces();
  }
  processDataItem(dataItem) {
    const d3ForceNode = { index: this._index, x: this.innerWidth() / 2, y: this.innerHeight() / 2, dataItem };
    const index2 = this._nodes.push(d3ForceNode) - 1;
    d3ForceNode.index = index2;
    this.d3forceSimulation.nodes(this._nodes);
    dataItem.set("d3ForceNode", d3ForceNode);
    super.processDataItem(dataItem);
    const node = dataItem.get("node");
    node.set("x", -1e4);
    node.on("scale", () => {
      this._updateForces();
    });
    node.events.on("dragged", () => {
      d3ForceNode.fx = node.x();
      d3ForceNode.fy = node.y();
      this._updateForces();
    });
    node.events.on("dragstop", () => {
      if (dataItem.get("x") == null) {
        d3ForceNode.fx = void 0;
      }
      if (dataItem.get("y") == null) {
        d3ForceNode.fy = void 0;
      }
    });
  }
  _updateValues(d3HierarchyNode) {
    super._updateValues(d3HierarchyNode);
    this._nodesDirty = true;
    const d3forceSimulation = this.d3forceSimulation;
    d3forceSimulation.force("collision", this.collisionForce);
    d3forceSimulation.nodes(this._nodes);
    this.linkForce = link_default(this._links);
    d3forceSimulation.force("link", this.linkForce);
  }
  _updateVisuals() {
    super._updateVisuals();
    this.restartSimulation(0.3);
  }
  _updateChildren() {
    super._updateChildren();
    const d3forceSimulation = this.d3forceSimulation;
    if (this._sizeDirty) {
      let w = Math.max(50, this.innerWidth());
      let h = Math.max(50, this.innerHeight());
      let pt = this.get("paddingTop", 0);
      let pl = this.get("paddingLeft", 0);
      let centerStrength = this.get("centerStrength", 1);
      d3forceSimulation.force("x", x_default().x(w / 2 + pl).strength(centerStrength * 100 / w));
      d3forceSimulation.force("y", y_default().y(h / 2 + pt).strength(centerStrength * 100 / h));
    }
    if (this._nodesDirty) {
      this._updateForces();
    }
  }
  _updateForces() {
    const d3forceSimulation = this.d3forceSimulation;
    d3forceSimulation.force("manybody", manyBody_default().strength((d3node) => {
      let dataItem = d3node.dataItem;
      let node = dataItem.get("node");
      let circle = dataItem.get("circle");
      let manyBodyStrength = this.get("manyBodyStrength", -15);
      if (circle) {
        return circle.get("radius", 1) * node.get("scale", 1) * manyBodyStrength;
      }
      return 0;
    }));
    this.collisionForce.radius((d3node) => {
      let dataItem = d3node.dataItem;
      let node = dataItem.get("node");
      let circle = dataItem.get("circle");
      let outerCircle = dataItem.get("outerCircle");
      if (circle && outerCircle) {
        let radius = circle.get("radius", 1);
        if (!outerCircle.isHidden()) {
          radius = radius * outerCircle.get("scale", 1.1);
        }
        radius *= node.get("scale", 1);
        return radius + this.get("nodePadding", 0);
      }
    });
    this.restartSimulation(0.3);
  }
  _animatePositions(_dataItem) {
  }
  _clearDirty() {
    super._clearDirty();
    this._nodesDirty = false;
  }
  /**
   * @ignore
   */
  updateNodePositions() {
    const linkForce = this.linkForce;
    if (linkForce) {
      linkForce.distance((linkDatum) => {
        return this.getDistance(linkDatum);
      });
      linkForce.strength((linkDatum) => {
        return this.getStrength(linkDatum);
      });
    }
    if (this._tick == this.get("showOnFrame")) {
      this.nodesContainer.setPrivate("visible", true);
      this.linksContainer.setPrivate("visible", true);
    }
    let d3Nodes = this.d3forceSimulation.nodes();
    each(d3Nodes, (d3Node) => {
      const dataItem = d3Node.dataItem;
      const node = dataItem.get("node");
      node.set("x", d3Node.x);
      node.set("y", d3Node.y);
    });
  }
  /**
   * @ignore
   */
  updateLinkWith(dataItems) {
    each(dataItems, (dataItem) => {
      const linkWith = dataItem.get("linkWith");
      if (linkWith) {
        each(linkWith, (id) => {
          const linkWithDataItem = this._getDataItemById(this.dataItems, id);
          if (linkWithDataItem) {
            this.linkDataItems(dataItem, linkWithDataItem, this.get("linkWithStrength"));
          }
        });
      }
      const children = dataItem.get("children");
      if (children) {
        this.updateLinkWith(children);
      }
    });
  }
  /**
   * @ignore
   */
  getDistance(linkDatum) {
    let sourceDataItem = linkDatum.sourceDataItem;
    let targetDataItem = linkDatum.targetDataItem;
    let distance = 0;
    if (sourceDataItem && targetDataItem) {
      const targetNode = targetDataItem.get("node");
      if (targetNode.isHidden()) {
        return 0;
      }
      let link = linkDatum.link;
      if (link) {
        distance = link.get("distance", 1);
      }
      const sourceNode = sourceDataItem.get("node");
      if (targetNode.isHidden()) {
        distance = 1;
      }
      return distance * (sourceDataItem.get("circle").get("radius", 1) * sourceNode.get("scale", 1) + targetDataItem.get("circle").get("radius", 1) * targetNode.get("scale", 1));
    }
    return distance;
  }
  /**
   * @ignore
   */
  getStrength(linkDatum) {
    let strength = 0;
    let link = linkDatum.link;
    if (link) {
      strength = link.get("strength", 1);
    }
    const targetDataItem = linkDatum.targetDataItem;
    strength *= targetDataItem.get("node").get("scale");
    return strength;
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    this._updateRadius(dataItem);
    const x = dataItem.get("x");
    const y = dataItem.get("y");
    const d3Node = dataItem.get("d3ForceNode");
    if (x != null) {
      d3Node.fx = relativeToValue(x, this.innerWidth());
    } else {
      d3Node.fx = void 0;
    }
    if (y != null) {
      d3Node.fy = relativeToValue(y, this.innerHeight());
    } else {
      d3Node.fx = void 0;
    }
  }
  _updateRadius(dataItem) {
    let size = (this.innerWidth() + this.innerHeight()) / 2;
    let minRadius = relativeToValue(this.get("minRadius", 1), size);
    let maxRadius = relativeToValue(this.get("maxRadius", 5), size);
    let valueWorking = dataItem.get("sum");
    let radius = maxRadius;
    const min2 = this.getPrivate("valueLow", 0);
    const max2 = this.getPrivate("valueHigh", 0);
    if (max2 > 0) {
      radius = minRadius + (valueWorking - min2) / (max2 - min2) * (maxRadius - minRadius);
    }
    if (!isNumber(radius)) {
      radius = minRadius;
    }
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    dataItem.get("circle").animate({ key: "radius", to: radius, duration, easing });
  }
  _processLink(link, source, target) {
    const d3Link = { link, source: source.get("d3ForceNode").index, target: target.get("d3ForceNode").index, sourceDataItem: source, targetDataItem: target };
    this._links.push(d3Link);
    link.setPrivate("d3Link", d3Link);
    this.linkForce = link_default(this._links);
    this.d3forceSimulation.force("link", this.linkForce);
    this.restartSimulation(0.5);
  }
  _disposeLink(link) {
    super._disposeLink(link);
    remove(this._links, link.getPrivate("d3Link"));
  }
  _handleUnlink() {
    this.restartSimulation(0.5);
  }
  _onDataClear() {
    super._onDataClear();
    this._nodes = [];
    this._links = [];
  }
};
Object.defineProperty(ForceDirected, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ForceDirected"
});
Object.defineProperty(ForceDirected, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LinkedHierarchy.classNames.concat([ForceDirected.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Pack.js
var Pack = class extends Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "pack"
    });
    Object.defineProperty(this, "_packLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: pack_default()
    });
    Object.defineProperty(this, "_packData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "circles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Circle._new(this._root, {
        themeTags: mergeTags(this.circles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.circles.template])))
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("scaleR", 1);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isPrivateDirty("scaleR")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const packLayout = this._packLayout;
      packLayout.size([this.innerWidth(), this.innerHeight()]);
      packLayout(this._rootNode);
      packLayout.padding(this.get("nodePadding", 0));
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const node = dataItem.get("node");
    const circle = dataItem.get("circle");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const scaleR = this.getPrivate("scaleR", 1);
    const x = hierarchyNode.x * scaleR;
    const y = hierarchyNode.y * scaleR;
    const radius = hierarchyNode.r * scaleR;
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({ key: "x", to: x, duration, easing });
    node.animate({ key: "y", to: y, duration, easing });
    if (circle) {
      const fill = dataItem.get("fill");
      const fillPattern = dataItem.get("fillPattern");
      circle.animate({ key: "radius", to: radius, duration, easing });
      circle._setDefault("fill", fill);
      circle._setDefault("fillPattern", fillPattern);
      circle._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const node = dataItem.get("node");
      const circle = dataItem.get("circle");
      const scaleR = this.getPrivate("scaleR", 1);
      const x = hierarchyNode.x * scaleR;
      const y = hierarchyNode.y * scaleR;
      const radius = hierarchyNode.r * scaleR;
      node.setAll({ x, y });
      circle.set("radius", radius);
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        each(hierarchyChildren, (hierarchyChild) => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    const circle = node.children.moveValue(this.circles.make(), 0);
    node.setPrivate("tooltipTarget", circle);
    this.circles.push(circle);
    dataItem.setRaw("circle", circle);
    const label = dataItem.get("label");
    circle.on("radius", () => {
      const d = circle.get("radius", this.width()) * 2;
      label.setAll({ maxWidth: d, maxHeight: d });
    });
    return node;
  }
  _zoom(dataItem) {
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    let x = hierarchyNode.x;
    let y = hierarchyNode.y;
    let r = hierarchyNode.r;
    let scaleR = Math.min(this.innerWidth(), this.innerHeight()) / (r * 2);
    const easing = this.get("animationEasing");
    let duration = this.get("animationDuration", 0);
    if (!this.inited) {
      duration = 0;
    }
    this.animatePrivate({ key: "scaleR", to: scaleR, duration, easing });
    const nodesContainer = this.nodesContainer;
    nodesContainer.animate({ key: "x", from: nodesContainer.x(), to: this.width() / 2 - x * scaleR, duration, easing });
    nodesContainer.animate({ key: "y", from: nodesContainer.y(), to: this.height() / 2 - y * scaleR, duration, easing });
  }
};
Object.defineProperty(Pack, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Pack"
});
Object.defineProperty(Pack, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Hierarchy.classNames.concat([Pack.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Partition.js
var Partition = class extends Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "partition"
    });
    Object.defineProperty(this, "rectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        themeTags: mergeTags(this.rectangles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.rectangles.template])))
    });
    Object.defineProperty(this, "_partitionLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: partition_default()
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["partition", this._settings.orientation || "vertical"]);
    super._afterNew();
    this.setPrivate("scaleX", 1);
    this.setPrivate("scaleY", 1);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("nodePadding")) {
      if (this._rootNode) {
        this._updateNodes(this._rootNode);
      }
    }
    if (this.isPrivateDirty("scaleX") || this.isPrivateDirty("scaleY")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
    if (this.isDirty("orientation")) {
      this._updateVisuals();
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const partitionLayout = this._partitionLayout;
      let w = this.innerWidth();
      let h = this.innerHeight();
      if (this.get("orientation") == "horizontal") {
        [w, h] = [h, w];
      }
      partitionLayout.size([w, h]);
      const nodePadding = this.get("nodePadding");
      if (isNumber(nodePadding)) {
        partitionLayout.padding(nodePadding);
      }
      partitionLayout(this._rootNode);
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const node = dataItem.get("node");
    const rectangle = dataItem.get("rectangle");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const scaleX = this.getPrivate("scaleX", 1);
    const scaleY = this.getPrivate("scaleY", 1);
    let x0, x1, y0, y1;
    if (this.get("orientation") == "horizontal") {
      x0 = hierarchyNode.y0 * scaleX;
      x1 = hierarchyNode.y1 * scaleX;
      y0 = hierarchyNode.x0 * scaleY;
      y1 = hierarchyNode.x1 * scaleY;
    } else {
      x0 = hierarchyNode.x0 * scaleX;
      x1 = hierarchyNode.x1 * scaleX;
      y0 = hierarchyNode.y0 * scaleY;
      y1 = hierarchyNode.y1 * scaleY;
    }
    let w = x1 - x0;
    let h = y1 - y0;
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({ key: "x", to: x0, duration, easing });
    node.animate({ key: "y", to: y0, duration, easing });
    node.animate({ key: "width", to: w, duration, easing });
    node.animate({ key: "height", to: h, duration, easing });
    if (rectangle) {
      const fill = dataItem.get("fill");
      const fillPattern = dataItem.get("fillPattern");
      rectangle.animate({ key: "width", to: w, duration, easing });
      rectangle.animate({ key: "height", to: h, duration, easing });
      rectangle._setDefault("fill", fill);
      rectangle._setDefault("fillPattern", fillPattern);
      rectangle._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const node = dataItem.get("node");
      const rectangle = dataItem.get("rectangle");
      const scaleX = this.getPrivate("scaleX", 1);
      const scaleY = this.getPrivate("scaleY", 1);
      let x0, x1, y0, y1;
      if (this.get("orientation") == "horizontal") {
        x0 = hierarchyNode.y0 * scaleX;
        x1 = hierarchyNode.y1 * scaleX;
        y0 = hierarchyNode.x0 * scaleY;
        y1 = hierarchyNode.x1 * scaleY;
      } else {
        x0 = hierarchyNode.x0 * scaleX;
        x1 = hierarchyNode.x1 * scaleX;
        y0 = hierarchyNode.y0 * scaleY;
        y1 = hierarchyNode.y1 * scaleY;
      }
      const w = x1 - x0;
      const h = y1 - y0;
      node.setAll({ x: x0, y: y0, width: w, height: h });
      rectangle.setAll({ width: w, height: h });
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        each(hierarchyChildren, (hierarchyChild) => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    this._makeNode(dataItem, node);
    return node;
  }
  _makeNode(dataItem, node) {
    const rectangle = node.children.moveValue(this.rectangles.make(), 0);
    node.setPrivate("tooltipTarget", rectangle);
    dataItem.setRaw("rectangle", rectangle);
    rectangle._setDataItem(dataItem);
    const label = dataItem.get("label");
    rectangle.on("width", () => {
      label.set("maxWidth", rectangle.width());
    });
    rectangle.on("height", () => {
      label.set("maxHeight", rectangle.height());
    });
  }
  _zoom(dataItem) {
    let x0 = 0;
    let x1 = 0;
    let y0 = 0;
    let y1 = 0;
    const upDepth = this.get("upDepth", 0) + 1;
    const topDepth = this.get("topDepth", 0);
    const width = this.innerWidth();
    const height = this.innerHeight();
    const maxDepth = this.getPrivate("maxDepth", 1);
    const levelHeight = height / (maxDepth + 1);
    const levelWidth = width / (maxDepth + 1);
    const initialDepth = Math.min(this.get("initialDepth", 1), maxDepth);
    let downDepth = this._currentDownDepth;
    if (downDepth == null) {
      downDepth = this.get("downDepth", 1);
    }
    if (dataItem) {
      const hierarchyNode = dataItem.get("d3HierarchyNode");
      let currentDepth = hierarchyNode.depth;
      if (this.get("orientation") == "horizontal") {
        x0 = hierarchyNode.y0;
        x1 = hierarchyNode.y1;
        y0 = hierarchyNode.x0;
        y1 = hierarchyNode.x1;
        x0 = x1 - levelWidth * upDepth;
        x1 = x0 + levelWidth * (downDepth + 1);
        if (currentDepth < topDepth) {
          y0 = 0;
          y1 = height;
          x0 = levelWidth * topDepth;
          x1 = x0 + levelWidth * initialDepth;
        }
      } else {
        x0 = hierarchyNode.x0;
        x1 = hierarchyNode.x1;
        y0 = hierarchyNode.y0;
        y1 = hierarchyNode.y1;
        y0 = y1 - levelHeight * upDepth;
        y1 = y0 + levelHeight * (downDepth + 1);
        if (currentDepth < topDepth) {
          x0 = 0;
          x1 = width;
          y0 = levelHeight * topDepth;
          y1 = y0 + levelHeight * initialDepth;
        }
      }
    }
    let scaleX = width / (x1 - x0);
    let scaleY = height / (y1 - y0);
    const easing = this.get("animationEasing");
    let duration = this.get("animationDuration", 0);
    if (!this.inited) {
      duration = 0;
    }
    this.animatePrivate({ key: "scaleX", to: scaleX, duration, easing });
    this.animatePrivate({ key: "scaleY", to: scaleY, duration, easing });
    this.animate({ key: "_d", from: 0, to: 1, duration, easing });
    this.nodesContainer.animate({ key: "x", to: -x0 * scaleX, duration, easing });
    this.nodesContainer.animate({ key: "y", to: -y0 * scaleY, duration, easing });
  }
};
Object.defineProperty(Partition, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Partition"
});
Object.defineProperty(Partition, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Hierarchy.classNames.concat([Partition.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Sunburst.js
var Sunburst = class extends Partition {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "sunburst"
    });
    Object.defineProperty(this, "_partitionLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: partition_default()
    });
    Object.defineProperty(this, "slices", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Slice._new(this._root, {
        themeTags: mergeTags(this.slices.template.get("themeTags", []), [this._tag, "hierarchy", "node", "shape"])
      }, [this.slices.template])))
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RadialLabel._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), [this._tag])
      }, [this.labels.template])))
    });
  }
  _afterNew() {
    super._afterNew();
    this.nodesContainer.setAll({ x: p50, y: p50 });
    this.setPrivateRaw("dx", 0);
    this.setPrivateRaw("dr", 0);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isPrivateDirty("dr") || this.isPrivateDirty("dx")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const partitionLayout = this._partitionLayout;
      let bounds = getArcBounds(0, 0, this.get("startAngle", 0), this.get("endAngle", 360), 1);
      let w = this.innerWidth();
      let h = this.innerHeight();
      const wr = w / (bounds.right - bounds.left);
      const hr = h / (bounds.bottom - bounds.top);
      let s = Math.min(wr, hr);
      let r = relativeToValue(this.get("radius", p100), s);
      let ir = relativeToValue(this.get("innerRadius", 0), r);
      if (ir < 0) {
        ir = r + ir;
      }
      s = r - ir;
      this.setPrivateRaw("innerRadius", ir);
      this.setPrivateRaw("hierarchySize", s);
      partitionLayout.size([s, s]);
      this.nodesContainer.setAll({
        dy: -r * (bounds.bottom + bounds.top) / 2,
        dx: -r * (bounds.right + bounds.left) / 2
      });
      const nodePadding = this.get("nodePadding");
      if (isNumber(nodePadding)) {
        partitionLayout.padding(nodePadding);
      }
      partitionLayout(this._rootNode);
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const node = dataItem.get("node");
    node.setAll({ x: 0, y: 0 });
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    const scaleX = this.getPrivate("scaleX", 1);
    const scaleY = this.getPrivate("scaleY", 1);
    const dr = this.getPrivate("dr", 0);
    const dx = this.getPrivate("dx", 0);
    const x0 = hierarchyNode.x0 * scaleX + dx;
    const x1 = hierarchyNode.x1 * scaleX + dx;
    const y0 = hierarchyNode.y0 * scaleY;
    const y1 = hierarchyNode.y1 * scaleY;
    const ir = this.getPrivate("innerRadius");
    const hs = this.getPrivate("hierarchySize", 0);
    const slice2 = dataItem.get("slice");
    if (slice2) {
      const startAngle = this.get("startAngle", -90);
      const endAngle = this.get("endAngle", 270);
      const sliceStartAngle = startAngle + x0 / hs * (endAngle - startAngle);
      const arc = startAngle + x1 / hs * (endAngle - startAngle) - sliceStartAngle;
      let sliceInnerRadius = ir + y0;
      let sliceRadius = ir + y1;
      sliceInnerRadius -= dr;
      sliceRadius -= dr;
      sliceRadius = Math.max(0, sliceRadius);
      sliceInnerRadius = Math.max(0, sliceInnerRadius);
      slice2.animate({ key: "radius", to: sliceRadius, duration, easing });
      slice2.animate({ key: "innerRadius", to: sliceInnerRadius, duration, easing });
      slice2.animate({ key: "startAngle", to: sliceStartAngle, duration, easing });
      slice2.animate({ key: "arc", to: arc, duration, easing });
      const fill = dataItem.get("fill");
      const fillPattern = dataItem.get("fillPattern");
      slice2._setDefault("fill", fill);
      slice2._setDefault("fillPattern", fillPattern);
      slice2._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const scaleX = this.getPrivate("scaleX", 1);
      const scaleY = this.getPrivate("scaleY", 1);
      const dr = this.getPrivate("dr", 0);
      const dx = this.getPrivate("dx", 0);
      const x0 = hierarchyNode.x0 * scaleX + dx;
      const x1 = hierarchyNode.x1 * scaleX + dx;
      const y0 = hierarchyNode.y0 * scaleY;
      const y1 = hierarchyNode.y1 * scaleY;
      const ir = this.getPrivate("innerRadius");
      const hs = this.getPrivate("hierarchySize", 0);
      const slice2 = dataItem.get("slice");
      if (slice2) {
        const startAngle = this.get("startAngle", -90);
        const endAngle = this.get("endAngle", 270);
        const sliceStartAngle = startAngle + x0 / hs * (endAngle - startAngle);
        const arc = startAngle + x1 / hs * (endAngle - startAngle) - sliceStartAngle;
        let sliceInnerRadius = ir + y0;
        let sliceRadius = ir + y1;
        sliceInnerRadius -= dr;
        sliceRadius -= dr;
        sliceRadius = Math.max(0, sliceRadius);
        sliceInnerRadius = Math.max(0, sliceInnerRadius);
        slice2.setAll({ radius: sliceRadius, innerRadius: sliceInnerRadius, startAngle: sliceStartAngle, arc });
      }
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        each(hierarchyChildren, (hierarchyChild) => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  _makeNode(dataItem, node) {
    const slice2 = node.children.moveValue(this.slices.make(), 0);
    node.setPrivate("tooltipTarget", slice2);
    dataItem.setRaw("slice", slice2);
    slice2._setDataItem(dataItem);
    slice2.on("arc", () => {
      this._updateLabel(dataItem);
    });
    slice2.on("innerRadius", () => {
      this._updateLabel(dataItem);
    });
    slice2.on("radius", () => {
      this._updateLabel(dataItem);
    });
  }
  _updateLabel(dataItem) {
    const slice2 = dataItem.get("slice");
    const label = dataItem.get("label");
    if (slice2 && label) {
      let innerRadius = slice2.get("innerRadius", 0);
      let radius = slice2.get("radius", 0);
      let angle = slice2.get("startAngle", 0);
      let arc = Math.abs(slice2.get("arc", 0));
      let labelAngle = angle + arc / 2;
      let textType = label.get("textType");
      let maxWidth = radius - innerRadius;
      let maxHeight = radius * arc * RADIANS;
      if (innerRadius == 0 && arc >= 360 && textType == "radial") {
        radius = 1;
        labelAngle = 0;
        maxWidth *= 2;
        maxHeight = maxWidth;
      }
      if (Math.round(arc) >= 360 && textType == "radial") {
        labelAngle = 0;
      }
      if (textType == "circular") {
        maxWidth = arc * RADIANS * (innerRadius + (radius - innerRadius) / 2) - 10;
      }
      label.setAll({ labelAngle });
      label.setPrivate("radius", radius);
      label.setPrivate("innerRadius", innerRadius);
      label.setAll({
        maxHeight,
        maxWidth
      });
    }
  }
  _zoom(dataItem) {
    let x0 = 0;
    let x1 = 0;
    let hs = this.getPrivate("hierarchySize", 0);
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    let upDepth = this.get("upDepth", 0);
    let topDepth = this.get("topDepth", 0);
    let currentDepth = hierarchyNode.depth;
    let maxDepth = this.getPrivate("maxDepth", 1);
    let downDepth = this._currentDownDepth;
    if (downDepth == null) {
      downDepth = this.get("downDepth", 1);
    }
    const levelHeight = hs / (maxDepth + 1);
    if (currentDepth < topDepth) {
      currentDepth = topDepth;
    }
    if (currentDepth - upDepth < 0) {
      upDepth = currentDepth;
    }
    x0 = hierarchyNode.x0;
    x1 = hierarchyNode.x1;
    let scaleDepth = downDepth + upDepth + 1;
    if (scaleDepth > maxDepth - topDepth + 1) {
      scaleDepth = maxDepth - topDepth + 1;
    }
    let scaleX = hs / (x1 - x0);
    let scaleY = hs / (levelHeight * scaleDepth);
    let dr = Math.max(currentDepth - upDepth, topDepth) * levelHeight * scaleY;
    const easing = this.get("animationEasing");
    let duration = this.get("animationDuration", 0);
    if (!this.inited) {
      duration = 0;
    }
    let dx = -x0 * scaleX;
    this.animatePrivate({ key: "scaleX", to: scaleX, duration, easing });
    this.animatePrivate({ key: "scaleY", to: scaleY, duration, easing });
    this.animatePrivate({ key: "dr", to: dr, duration, easing });
    this.animatePrivate({ key: "dx", to: dx, duration, easing });
  }
  _handleSingle(dataItem) {
    const parent = dataItem.get("parent");
    if (parent) {
      const children = parent.get("children");
      if (children) {
        each(children, (child) => {
          if (child != dataItem) {
            this.disableDataItem(child);
            child.get("node").hide();
          }
        });
      }
      this._handleSingle(parent);
    }
  }
  _positionBullet(bullet) {
    const sprite = bullet.get("sprite");
    if (sprite) {
      const dataItem = sprite.dataItem;
      const locationX = bullet.get("locationX", 0.5);
      const locationY = bullet.get("locationY", 0.5);
      const slice2 = dataItem.get("slice");
      const arc = slice2.get("arc", 0);
      const angle = slice2.get("startAngle", 0) + slice2.get("arc", 0) * locationX;
      const innerRadius = slice2.get("innerRadius", 0);
      const radius = innerRadius + (slice2.get("radius", 0) - innerRadius) * locationY;
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      if (round(arc, 5) === 360 && round(innerRadius, 2) === 0) {
        x = 0;
        y = 0;
      }
      sprite.set("x", x);
      sprite.set("y", y);
    }
  }
  _makeBullet(dataItem, bulletFunction, index2) {
    const bullet = super._makeBullet(dataItem, bulletFunction, index2);
    if (bullet) {
      const sprite = bullet.get("sprite");
      const slice2 = dataItem.get("slice");
      if (sprite && slice2) {
        slice2.on("arc", () => {
          this._positionBullet(bullet);
        });
        slice2.on("radius", () => {
          this._positionBullet(bullet);
        });
      }
      return bullet;
    }
  }
};
Object.defineProperty(Sunburst, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Sunburst"
});
Object.defineProperty(Sunburst, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Partition.classNames.concat([Sunburst.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Tree.js
var Tree = class extends LinkedHierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "tree"
    });
    Object.defineProperty(this, "_hierarchyLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: tree_default()
    });
    Object.defineProperty(this, "_packData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("orientation") || this.isDirty("inversed")) {
      this._updateVisuals();
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const layout = this._hierarchyLayout;
      if (this.get("orientation") == "vertical") {
        layout.size([this.innerWidth(), this.innerHeight()]);
      } else {
        layout.size([this.innerHeight(), this.innerWidth()]);
      }
      layout(this._rootNode);
    }
    super._updateVisuals();
  }
  _getPoint(hierarchyNode) {
    const inversed = this.get("inversed");
    if (this.get("orientation") == "vertical") {
      if (inversed) {
        return { x: hierarchyNode.x, y: this.innerHeight() - hierarchyNode.y };
      } else {
        return { x: hierarchyNode.x, y: hierarchyNode.y };
      }
    } else {
      if (inversed) {
        return { x: this.innerWidth() - hierarchyNode.y, y: hierarchyNode.x };
      } else {
        return { x: hierarchyNode.y, y: hierarchyNode.x };
      }
    }
  }
};
Object.defineProperty(Tree, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tree"
});
Object.defineProperty(Tree, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LinkedHierarchy.classNames.concat([Tree.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/Treemap.js
var Treemap = class extends Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "treemap"
    });
    Object.defineProperty(this, "rectangleTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Template.new({})
    });
    Object.defineProperty(this, "_treemapLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: treemap_default().tile(squarify_default)
    });
    Object.defineProperty(this, "rectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        themeTags: mergeTags(this.rectangles.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.rectangles.template])))
    });
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("scaleX", 1);
    this.setPrivate("scaleY", 1);
    this.nodes.template.setPrivate("trustBounds", true);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("layoutAlgorithm")) {
      let algorithm;
      switch (this.get("layoutAlgorithm")) {
        case "squarify":
          algorithm = squarify_default;
          break;
        case "binary":
          algorithm = binary_default;
          break;
        case "slice":
          algorithm = slice_default;
          break;
        case "dice":
          algorithm = dice_default;
          break;
        case "sliceDice":
          algorithm = sliceDice_default;
          break;
      }
      if (algorithm) {
        this._treemapLayout = treemap_default().tile(algorithm);
        this._updateVisuals();
        const selectedDataItem = this.get("selectedDataItem");
        if (selectedDataItem) {
          this._zoom(selectedDataItem);
        }
      }
    }
    if (this.isDirty("nodePaddingRight") || this.isDirty("nodePaddingLeft") || this.isDirty("nodePaddingTop") || this.isDirty("nodePaddingBottom") || this.isDirty("nodePaddingOuter") || this.isDirty("nodePaddingInner")) {
      if (this._rootNode) {
        this._updateNodes(this._rootNode);
      }
    }
    if (this.isPrivateDirty("scaleX") || this.isPrivateDirty("scaleY")) {
      if (this._rootNode) {
        this._updateNodesScale(this._rootNode);
      }
    }
  }
  _updateVisuals() {
    if (this._rootNode) {
      const treemapLayout = this._treemapLayout;
      treemapLayout.size([this.innerWidth(), this.innerHeight()]);
      const paddingLeft = this.get("nodePaddingLeft");
      const paddingRight = this.get("nodePaddingRight");
      const paddingTop = this.get("nodePaddingTop");
      const paddingBottom = this.get("nodePaddingBottom");
      const paddingInner = this.get("nodePaddingInner");
      const paddingOuter = this.get("nodePaddingOuter");
      if (isNumber(paddingLeft)) {
        treemapLayout.paddingLeft(paddingLeft);
      }
      if (isNumber(paddingRight)) {
        treemapLayout.paddingRight(paddingRight);
      }
      if (isNumber(paddingTop)) {
        treemapLayout.paddingTop(paddingTop);
      }
      if (isNumber(paddingBottom)) {
        treemapLayout.paddingBottom(paddingBottom);
      }
      if (isNumber(paddingInner)) {
        treemapLayout.paddingInner(paddingInner);
      }
      if (isNumber(paddingOuter)) {
        treemapLayout.paddingOuter(paddingOuter);
      }
      treemapLayout(this._rootNode);
      this._updateNodes(this._rootNode);
    }
  }
  _updateNode(dataItem) {
    super._updateNode(dataItem);
    const node = dataItem.get("node");
    const rectangle = dataItem.get("rectangle");
    const hierarchyNode = dataItem.get("d3HierarchyNode");
    const scaleX = this.getPrivate("scaleX", 1);
    const scaleY = this.getPrivate("scaleY", 1);
    const x0 = hierarchyNode.x0 * scaleX;
    const x1 = hierarchyNode.x1 * scaleX;
    const y0 = hierarchyNode.y0 * scaleY;
    const y1 = hierarchyNode.y1 * scaleY;
    const w = x1 - x0;
    const h = y1 - y0;
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    node.animate({ key: "x", to: x0, duration, easing });
    node.animate({ key: "y", to: y0, duration, easing });
    node.animate({ key: "width", to: w, duration, easing });
    node.animate({ key: "height", to: h, duration, easing });
    if (rectangle) {
      const fill = dataItem.get("fill");
      const fillPattern = dataItem.get("fillPattern");
      rectangle.animate({ key: "width", to: w, duration, easing });
      rectangle.animate({ key: "height", to: h, duration, easing });
      rectangle._setDefault("fill", fill);
      rectangle._setDefault("fillPattern", fillPattern);
      rectangle._setDefault("stroke", fill);
    }
  }
  _updateNodesScale(hierarchyNode) {
    const dataItem = hierarchyNode.data.dataItem;
    if (dataItem) {
      const node = dataItem.get("node");
      const rectangle = dataItem.get("rectangle");
      const scaleX = this.getPrivate("scaleX", 1);
      const scaleY = this.getPrivate("scaleY", 1);
      const x0 = hierarchyNode.x0 * scaleX;
      const x1 = hierarchyNode.x1 * scaleX;
      const y0 = hierarchyNode.y0 * scaleY;
      const y1 = hierarchyNode.y1 * scaleY;
      const w = x1 - x0;
      const h = y1 - y0;
      node.setAll({ x: x0, y: y0, width: w, height: h });
      rectangle.setAll({ width: w, height: h });
      const hierarchyChildren = hierarchyNode.children;
      if (hierarchyChildren) {
        each(hierarchyChildren, (hierarchyChild) => {
          this._updateNodesScale(hierarchyChild);
        });
      }
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    const rectangle = node.children.moveValue(this.rectangles.make(), 0);
    node.setPrivate("tooltipTarget", rectangle);
    dataItem.setRaw("rectangle", rectangle);
    const label = dataItem.get("label");
    rectangle.on("width", () => {
      label.setPrivate("maxWidth", rectangle.width());
    });
    rectangle.on("height", () => {
      label.setPrivate("maxHeight", rectangle.height());
    });
    return node;
  }
  _zoom(dataItem) {
    if (this.width() > 0 && this.height() > 0) {
      const hierarchyNode = dataItem.get("d3HierarchyNode");
      const nodePaddingOuter = this.get("nodePaddingOuter", 0);
      let x0 = hierarchyNode.x0 + nodePaddingOuter;
      let x1 = hierarchyNode.x1 - nodePaddingOuter;
      let y0 = hierarchyNode.y0 + nodePaddingOuter;
      let y1 = hierarchyNode.y1 - nodePaddingOuter;
      let scaleX = (this.innerWidth() - nodePaddingOuter * 2) / (x1 - x0);
      let scaleY = (this.innerHeight() - nodePaddingOuter * 2) / (y1 - y0);
      const easing = this.get("animationEasing");
      let duration = this.get("animationDuration", 0);
      if (!this.inited) {
        duration = 0;
      }
      this.animatePrivate({ key: "scaleX", to: scaleX, duration, easing });
      this.animatePrivate({ key: "scaleY", to: scaleY, duration, easing });
      this.nodesContainer.animate({ key: "x", to: nodePaddingOuter - x0 * scaleX, duration, easing });
      this.nodesContainer.animate({ key: "y", to: nodePaddingOuter - y0 * scaleY, duration, easing });
    }
  }
  _selectDataItem(dataItem, downDepth, skipDisptach) {
    super._selectDataItem(dataItem, downDepth, skipDisptach);
    if (dataItem) {
      let maxDepth = this.get("downDepth", 1) + dataItem.get("depth");
      if (!this.inited) {
        maxDepth = this.get("initialDepth", 1);
      }
      const visibleNodes = this._getVisibleNodes(dataItem, maxDepth);
      this.nodes.each((node) => {
        if (visibleNodes.indexOf(node.dataItem) == -1) {
          node.setPrivate("focusable", false);
        } else {
          node.removePrivate("focusable");
        }
      });
    }
    this._root._invalidateTabindexes();
  }
  _getVisibleNodes(dataItem, maxDepth) {
    const children = dataItem.get("children");
    let includedChildren = [];
    if (children) {
      each(children, (child) => {
        if (child.get("depth") == maxDepth || !child.get("children")) {
          includedChildren.push(child);
        } else {
          includedChildren = includedChildren.concat(this._getVisibleNodes(child, maxDepth));
        }
      });
    }
    return includedChildren;
  }
};
Object.defineProperty(Treemap, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Treemap"
});
Object.defineProperty(Treemap, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Hierarchy.classNames.concat([Treemap.className])
});

// node_modules/@amcharts/amcharts5/.internal/charts/hierarchy/VoronoiTreemap.js
var import_d3_voronoi_treemap = __toESM(require_d3_voronoi_treemap());
var import_seedrandom = __toESM(require_seedrandom2());
var VoronoiTreemap = class extends Hierarchy {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tag", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "voronoitreemap"
    });
    Object.defineProperty(this, "polygons", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Polygon._new(this._root, {
        themeTags: mergeTags(this.polygons.template.get("themeTags", []), [this._tag, "shape"])
      }, [this.polygons.template])))
    });
    Object.defineProperty(this, "voronoi", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: (0, import_d3_voronoi_treemap.voronoiTreemap)()
    });
  }
  _afterNew() {
    this.nodesContainer.setAll({
      x: p50,
      y: p50,
      centerX: p50,
      centerY: p50
    });
    this.nodes.template.setPrivate("trustBounds", true);
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const width = this.innerWidth() / 2;
    const height = this.innerHeight() / 2;
    let node = this._rootNode;
    const selectedDataItem = this.get("selectedDataItem");
    if (selectedDataItem) {
      node = selectedDataItem.get("d3HierarchyNode");
    }
    this.voronoi.convergenceRatio(this.get("convergenceRatio", 5e-3));
    this.voronoi.maxIterationCount(this.get("maxIterationCount", 100));
    this.voronoi.minWeightRatio(this.get("minWeightRatio", 5e-3));
    if (this.isDirty("type")) {
      if (this.get("type") == "polygon") {
        this.voronoi.clip(this.getCirclePolygon(1));
        this._updateVisuals();
      }
    }
    if (this._sizeDirty) {
      if (this.get("type") == "rectangle") {
        this.voronoi.prng((0, import_seedrandom.default)("X"));
        this.voronoi.clip([[-width, -height], [-width, height], [width, height], [width, -height]])(node);
        this._updateVisuals();
      }
    }
    if ((this._valuesDirty || this.isDirty("selectedDataItem")) && node) {
      this.voronoi.prng((0, import_seedrandom.default)("X"));
      this.voronoi(node);
      this._updateVisuals();
    }
  }
  _updateNode(dataItem) {
    const coords = dataItem.get("d3HierarchyNode").polygon;
    const polygon = dataItem.get("polygon");
    if (coords && polygon) {
      let coordinates = [];
      let d = 1;
      if (this.get("type") == "polygon") {
        d = Math.min(this.innerWidth(), this.innerHeight()) / 2;
      }
      let minX = Infinity;
      let maxX = -Infinity;
      for (let i = 0, len = coords.length; i < len; i++) {
        const point = coords[i];
        let x = point[0] * d;
        let y = point[1] * d;
        coordinates.push([x, y]);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
      }
      polygon.set("coordinates", coordinates);
      const fill = dataItem.get("fill");
      const fillPattern = dataItem.get("fillPattern");
      polygon._setDefault("fill", fill);
      polygon._setDefault("fillPattern", fillPattern);
      const label = dataItem.get("label");
      if (label) {
        const site = coords.site;
        if (site) {
          label.setAll({
            x: site.x * d,
            y: site.y * d,
            maxWidth: Math.abs(maxX - minX)
          });
        }
      }
    }
  }
  _handleSingle(dataItem) {
    const parent = dataItem.get("parent");
    if (parent) {
      const children = parent.get("children");
      if (children) {
        each(children, (child) => {
          if (child != dataItem) {
            this.disableDataItem(child);
            child.get("node").hide();
          }
        });
      }
      this._handleSingle(parent);
    }
  }
  /**
   * @ignore
   */
  makeNode(dataItem) {
    const node = super.makeNode(dataItem);
    this._makeNode(dataItem, node);
    return node;
  }
  _makeNode(dataItem, node) {
    const polygon = node.children.moveValue(this.polygons.make(), 0);
    node.setPrivate("tooltipTarget", polygon);
    dataItem.setRaw("polygon", polygon);
    polygon._setDataItem(dataItem);
  }
  getCirclePolygon(radius) {
    const points = this.get("cornerCount", 120);
    const dAngle = Math.PI * 2 / points;
    const polygon = [];
    for (let i = 0; i < points; i++) {
      let angle = i * dAngle;
      polygon.push([radius * Math.cos(angle), radius * Math.sin(angle)]);
    }
    return polygon;
  }
};
Object.defineProperty(VoronoiTreemap, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VoronoiTreemap"
});
Object.defineProperty(VoronoiTreemap, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Hierarchy.classNames.concat([VoronoiTreemap.className])
});
export {
  BreadcrumbBar,
  HierarchyDefaultTheme as DefaultTheme,
  ForceDirected,
  Hierarchy,
  HierarchyLink,
  HierarchyNode,
  LinkedHierarchy,
  LinkedHierarchyNode,
  Pack,
  Partition,
  Sunburst,
  Tree,
  Treemap,
  VoronoiTreemap
};
//# sourceMappingURL=hierarchy-PPHUWJDI.js.map
