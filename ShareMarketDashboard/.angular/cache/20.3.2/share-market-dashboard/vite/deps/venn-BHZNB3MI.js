import "./chunk-FLUOPSER.js";
import "./chunk-TZ7OVMR6.js";
import {
  ColorSet
} from "./chunk-AVJ6LU7H.js";
import {
  Series
} from "./chunk-JFXPNH7X.js";
import "./chunk-CRL5FSBR.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Container,
  Graphics,
  ListTemplate,
  mergeTags,
  p100,
  p50,
  visualSettings
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  find,
  isNumber
} from "./chunk-T2HS62VR.js";
import {
  __awaiter
} from "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/venn/VennDefaultTheme.js
var VennDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const r = this.rule.bind(this);
    r("Venn").setAll({
      legendLabelText: "{category}",
      legendValueText: "{value}",
      colors: ColorSet.new(this._root, {}),
      width: p100,
      height: p100
    });
    r("Label", ["venn"]).setAll({
      text: "{category}",
      populateText: true,
      centerX: p50,
      centerY: p50
    });
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/circleintersection.js
var SMALL = 1e-10;
function intersectionArea(circles, stats) {
  var intersectionPoints = getIntersectionPoints(circles);
  var innerPoints = intersectionPoints.filter(function(p3) {
    return containedInCircles(p3, circles);
  });
  var arcArea = 0, polygonArea = 0, arcs = [], i;
  if (innerPoints.length > 1) {
    var center = getCenter(innerPoints);
    for (i = 0; i < innerPoints.length; ++i) {
      var p = innerPoints[i];
      p.angle = Math.atan2(p.x - center.x, p.y - center.y);
    }
    innerPoints.sort(function(a3, b) {
      return b.angle - a3.angle;
    });
    var p2 = innerPoints[innerPoints.length - 1];
    for (i = 0; i < innerPoints.length; ++i) {
      var p1 = innerPoints[i];
      polygonArea += (p2.x + p1.x) * (p1.y - p2.y);
      var midPoint = {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2
      }, arc = null;
      for (var j = 0; j < p1.parentIndex.length; ++j) {
        if (p2.parentIndex.indexOf(p1.parentIndex[j]) > -1) {
          var circle = circles[p1.parentIndex[j]], a1 = Math.atan2(p1.x - circle.x, p1.y - circle.y), a2 = Math.atan2(p2.x - circle.x, p2.y - circle.y);
          var angleDiff = a2 - a1;
          if (angleDiff < 0) {
            angleDiff += 2 * Math.PI;
          }
          var a = a2 - angleDiff / 2, width = distance(midPoint, {
            x: circle.x + circle.radius * Math.sin(a),
            y: circle.y + circle.radius * Math.cos(a)
          });
          if (width > circle.radius * 2) {
            width = circle.radius * 2;
          }
          if (arc === null || arc.width > width) {
            arc = {
              circle,
              width,
              p1,
              p2
            };
          }
        }
      }
      if (arc !== null) {
        arcs.push(arc);
        arcArea += circleArea(arc.circle.radius, arc.width);
        p2 = p1;
      }
    }
  } else {
    var smallest = circles[0];
    for (i = 1; i < circles.length; ++i) {
      if (circles[i].radius < smallest.radius) {
        smallest = circles[i];
      }
    }
    var disjoint = false;
    for (i = 0; i < circles.length; ++i) {
      if (distance(circles[i], smallest) > Math.abs(smallest.radius - circles[i].radius)) {
        disjoint = true;
        break;
      }
    }
    if (disjoint) {
      arcArea = polygonArea = 0;
    } else {
      arcArea = smallest.radius * smallest.radius * Math.PI;
      arcs.push({
        circle: smallest,
        p1: { x: smallest.x, y: smallest.y + smallest.radius },
        p2: { x: smallest.x - SMALL, y: smallest.y + smallest.radius },
        width: smallest.radius * 2
      });
    }
  }
  polygonArea /= 2;
  if (stats) {
    stats.area = arcArea + polygonArea;
    stats.arcArea = arcArea;
    stats.polygonArea = polygonArea;
    stats.arcs = arcs;
    stats.innerPoints = innerPoints;
    stats.intersectionPoints = intersectionPoints;
  }
  return arcArea + polygonArea;
}
function containedInCircles(point, circles) {
  for (var i = 0; i < circles.length; ++i) {
    if (distance(point, circles[i]) > circles[i].radius + SMALL) {
      return false;
    }
  }
  return true;
}
function getIntersectionPoints(circles) {
  var ret = [];
  for (var i = 0; i < circles.length; ++i) {
    for (var j = i + 1; j < circles.length; ++j) {
      var intersect = circleCircleIntersection(
        circles[i],
        circles[j]
      );
      for (var k = 0; k < intersect.length; ++k) {
        var p = intersect[k];
        p.parentIndex = [i, j];
        ret.push(p);
      }
    }
  }
  return ret;
}
function circleArea(r, width) {
  return r * r * Math.acos(1 - width / r) - (r - width) * Math.sqrt(width * (2 * r - width));
}
function distance(p1, p2) {
  return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}
function circleOverlap(r1, r2, d) {
  if (d >= r1 + r2) {
    return 0;
  }
  if (d <= Math.abs(r1 - r2)) {
    return Math.PI * Math.min(r1, r2) * Math.min(r1, r2);
  }
  var w1 = r1 - (d * d - r2 * r2 + r1 * r1) / (2 * d), w2 = r2 - (d * d - r1 * r1 + r2 * r2) / (2 * d);
  return circleArea(r1, w1) + circleArea(r2, w2);
}
function circleCircleIntersection(p1, p2) {
  var d = distance(p1, p2), r1 = p1.radius, r2 = p2.radius;
  if (d >= r1 + r2 || d <= Math.abs(r1 - r2)) {
    return [];
  }
  var a = (r1 * r1 - r2 * r2 + d * d) / (2 * d), h = Math.sqrt(r1 * r1 - a * a), x0 = p1.x + a * (p2.x - p1.x) / d, y0 = p1.y + a * (p2.y - p1.y) / d, rx = -(p2.y - p1.y) * (h / d), ry = -(p2.x - p1.x) * (h / d);
  return [
    { x: x0 + rx, y: y0 - ry },
    { x: x0 - rx, y: y0 + ry }
  ];
}
function getCenter(points) {
  var center = { x: 0, y: 0 };
  for (var i = 0; i < points.length; ++i) {
    center.x += points[i].x;
    center.y += points[i].y;
  }
  center.x /= points.length;
  center.y /= points.length;
  return center;
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/fmin/bisect.js
function bisect(f, a, b, parameters) {
  parameters = parameters || {};
  var maxIterations = parameters.maxIterations || 100, tolerance = parameters.tolerance || 1e-10, fA = f(a), fB = f(b), delta = b - a;
  if (fA * fB > 0) {
    throw "Initial bisect points must have opposite signs";
  }
  if (fA === 0) return a;
  if (fB === 0) return b;
  for (var i = 0; i < maxIterations; ++i) {
    delta /= 2;
    var mid = a + delta, fMid = f(mid);
    if (fMid * fA >= 0) {
      a = mid;
    }
    if (Math.abs(delta) < tolerance || fMid === 0) {
      return mid;
    }
  }
  return a + delta;
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/fmin/blas1.js
function zeros(x) {
  var r = new Array(x);
  for (var i = 0; i < x; ++i) {
    r[i] = 0;
  }
  return r;
}
function zerosM(x, y) {
  return zeros(x).map(function() {
    return zeros(y);
  });
}
function dot(a, b) {
  var ret = 0;
  for (var i = 0; i < a.length; ++i) {
    ret += a[i] * b[i];
  }
  return ret;
}
function norm2(a) {
  return Math.sqrt(dot(a, a));
}
function scale(ret, value, c) {
  for (var i = 0; i < value.length; ++i) {
    ret[i] = value[i] * c;
  }
}
function weightedSum(ret, w1, v1, w2, v2) {
  for (var j = 0; j < ret.length; ++j) {
    ret[j] = w1 * v1[j] + w2 * v2[j];
  }
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/fmin/nelderMead.js
function nelderMead(f, x0, parameters) {
  parameters = parameters || {};
  var maxIterations = parameters.maxIterations || x0.length * 200, nonZeroDelta = parameters.nonZeroDelta || 1.05, zeroDelta = parameters.zeroDelta || 1e-3, minErrorDelta = parameters.minErrorDelta || 1e-6, minTolerance = parameters.minErrorDelta || 1e-5, rho = parameters.rho !== void 0 ? parameters.rho : 1, chi = parameters.chi !== void 0 ? parameters.chi : 2, psi = parameters.psi !== void 0 ? parameters.psi : -0.5, sigma = parameters.sigma !== void 0 ? parameters.sigma : 0.5, maxDiff;
  var N = x0.length, simplex = new Array(N + 1);
  simplex[0] = x0;
  simplex[0].fx = f(x0);
  simplex[0].id = 0;
  for (var i = 0; i < N; ++i) {
    var point = x0.slice();
    point[i] = point[i] ? point[i] * nonZeroDelta : zeroDelta;
    simplex[i + 1] = point;
    simplex[i + 1].fx = f(point);
    simplex[i + 1].id = i + 1;
  }
  function updateSimplex(value) {
    for (var i2 = 0; i2 < value.length; i2++) {
      simplex[N][i2] = value[i2];
    }
    simplex[N].fx = value.fx;
  }
  var sortOrder = function(a, b) {
    return a.fx - b.fx;
  };
  var centroid = x0.slice(), reflected = x0.slice(), contracted = x0.slice(), expanded = x0.slice();
  for (var iteration = 0; iteration < maxIterations; ++iteration) {
    simplex.sort(sortOrder);
    if (parameters.history) {
      var sortedSimplex = simplex.map(function(x) {
        var state = x.slice();
        state.fx = x.fx;
        state.id = x.id;
        return state;
      });
      sortedSimplex.sort(function(a, b) {
        return a.id - b.id;
      });
      parameters.history.push({
        x: simplex[0].slice(),
        fx: simplex[0].fx,
        simplex: sortedSimplex
      });
    }
    maxDiff = 0;
    for (i = 0; i < N; ++i) {
      maxDiff = Math.max(maxDiff, Math.abs(simplex[0][i] - simplex[1][i]));
    }
    if (Math.abs(simplex[0].fx - simplex[N].fx) < minErrorDelta && maxDiff < minTolerance) {
      break;
    }
    for (i = 0; i < N; ++i) {
      centroid[i] = 0;
      for (var j = 0; j < N; ++j) {
        centroid[i] += simplex[j][i];
      }
      centroid[i] /= N;
    }
    var worst = simplex[N];
    weightedSum(reflected, 1 + rho, centroid, -rho, worst);
    reflected.fx = f(reflected);
    if (reflected.fx < simplex[0].fx) {
      weightedSum(expanded, 1 + chi, centroid, -chi, worst);
      expanded.fx = f(expanded);
      if (expanded.fx < reflected.fx) {
        updateSimplex(expanded);
      } else {
        updateSimplex(reflected);
      }
    } else if (reflected.fx >= simplex[N - 1].fx) {
      var shouldReduce = false;
      if (reflected.fx > worst.fx) {
        weightedSum(contracted, 1 + psi, centroid, -psi, worst);
        contracted.fx = f(contracted);
        if (contracted.fx < worst.fx) {
          updateSimplex(contracted);
        } else {
          shouldReduce = true;
        }
      } else {
        weightedSum(contracted, 1 - psi * rho, centroid, psi * rho, worst);
        contracted.fx = f(contracted);
        if (contracted.fx < reflected.fx) {
          updateSimplex(contracted);
        } else {
          shouldReduce = true;
        }
      }
      if (shouldReduce) {
        if (sigma >= 1) break;
        for (i = 1; i < simplex.length; ++i) {
          weightedSum(simplex[i], 1 - sigma, simplex[0], sigma, simplex[i]);
          simplex[i].fx = f(simplex[i]);
        }
      }
    } else {
      updateSimplex(reflected);
    }
  }
  simplex.sort(sortOrder);
  return {
    fx: simplex[0].fx,
    x: simplex[0]
  };
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/fmin/linesearch.js
function wolfeLineSearch(f, pk, current, next, a, c1, c2) {
  var phi0 = current.fx, phiPrime0 = dot(current.fxprime, pk), phi = phi0, phi_old = phi0, phiPrime = phiPrime0, a0 = 0;
  a = a || 1;
  c1 = c1 || 1e-6;
  c2 = c2 || 0.1;
  function zoom(a_lo, a_high, phi_lo) {
    for (var iteration2 = 0; iteration2 < 16; ++iteration2) {
      a = (a_lo + a_high) / 2;
      weightedSum(next.x, 1, current.x, a, pk);
      phi = next.fx = f(next.x, next.fxprime);
      phiPrime = dot(next.fxprime, pk);
      if (phi > phi0 + c1 * a * phiPrime0 || phi >= phi_lo) {
        a_high = a;
      } else {
        if (Math.abs(phiPrime) <= -c2 * phiPrime0) {
          return a;
        }
        if (phiPrime * (a_high - a_lo) >= 0) {
          a_high = a_lo;
        }
        a_lo = a;
        phi_lo = phi;
      }
    }
    return 0;
  }
  for (var iteration = 0; iteration < 10; ++iteration) {
    weightedSum(next.x, 1, current.x, a, pk);
    phi = next.fx = f(next.x, next.fxprime);
    phiPrime = dot(next.fxprime, pk);
    if (phi > phi0 + c1 * a * phiPrime0 || iteration && phi >= phi_old) {
      return zoom(a0, a, phi_old);
    }
    if (Math.abs(phiPrime) <= -c2 * phiPrime0) {
      return a;
    }
    if (phiPrime >= 0) {
      return zoom(a, a0, phi);
    }
    phi_old = phi;
    a0 = a;
    a *= 2;
  }
  return a;
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/fmin/conjugateGradient.js
function conjugateGradient(f, initial, params) {
  var current = { x: initial.slice(), fx: 0, fxprime: initial.slice() }, next = { x: initial.slice(), fx: 0, fxprime: initial.slice() }, yk = initial.slice(), pk, temp, a = 1, maxIterations;
  params = params || {};
  maxIterations = params.maxIterations || initial.length * 20;
  current.fx = f(current.x, current.fxprime);
  pk = current.fxprime.slice();
  scale(pk, current.fxprime, -1);
  for (var i = 0; i < maxIterations; ++i) {
    a = wolfeLineSearch(f, pk, current, next, a);
    if (params.history) {
      params.history.push({
        x: current.x.slice(),
        fx: current.fx,
        fxprime: current.fxprime.slice(),
        alpha: a
      });
    }
    if (!a) {
      scale(pk, current.fxprime, -1);
    } else {
      weightedSum(yk, 1, next.fxprime, -1, current.fxprime);
      var delta_k = dot(current.fxprime, current.fxprime), beta_k = Math.max(0, dot(yk, next.fxprime) / delta_k);
      weightedSum(pk, beta_k, pk, -1, next.fxprime);
      temp = current;
      current = next;
      next = temp;
    }
    if (norm2(current.fxprime) <= 1e-5) {
      break;
    }
  }
  if (params.history) {
    params.history.push({
      x: current.x.slice(),
      fx: current.fx,
      fxprime: current.fxprime.slice(),
      alpha: a
    });
  }
  return current;
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/layout.js
function venn(areas, parameters) {
  parameters = parameters || {};
  parameters.maxIterations = parameters.maxIterations || 500;
  var initialLayout = parameters.initialLayout || bestInitialLayout;
  var loss = parameters.lossFunction || lossFunction;
  areas = addMissingAreas(areas);
  var circles = initialLayout(areas, parameters);
  var initial = [], setids = [], setid;
  for (setid in circles) {
    if (circles.hasOwnProperty(setid)) {
      initial.push(circles[setid].x);
      initial.push(circles[setid].y);
      setids.push(setid);
    }
  }
  var totalFunctionCalls = 0;
  var solution = nelderMead(
    function(values) {
      totalFunctionCalls += 1;
      var current = {};
      for (var i2 = 0; i2 < setids.length; ++i2) {
        var setid2 = setids[i2];
        current[setid2] = {
          x: values[2 * i2],
          y: values[2 * i2 + 1],
          radius: circles[setid2].radius
          // size : circles[setid].size
        };
      }
      return loss(current, areas);
    },
    initial,
    parameters
  );
  var positions = solution.x;
  for (var i = 0; i < setids.length; ++i) {
    setid = setids[i];
    circles[setid].x = positions[2 * i];
    circles[setid].y = positions[2 * i + 1];
  }
  return circles;
}
var SMALL2 = 1e-10;
function distanceFromIntersectArea(r1, r2, overlap) {
  if (Math.min(r1, r2) * Math.min(r1, r2) * Math.PI <= overlap + SMALL2) {
    return Math.abs(r1 - r2);
  }
  return bisect(function(distance2) {
    return circleOverlap(r1, r2, distance2) - overlap;
  }, 0, r1 + r2);
}
function addMissingAreas(areas) {
  areas = areas.slice();
  var ids = [], pairs = {}, i, j, a, b;
  for (i = 0; i < areas.length; ++i) {
    var area = areas[i];
    if (area.sets.length == 1) {
      ids.push(area.sets[0]);
    } else if (area.sets.length == 2) {
      a = area.sets[0];
      b = area.sets[1];
      pairs[[a, b]] = true;
      pairs[[b, a]] = true;
    }
  }
  ids.sort(function(a2, b2) {
    return a2 > b2;
  });
  for (i = 0; i < ids.length; ++i) {
    a = ids[i];
    for (j = i + 1; j < ids.length; ++j) {
      b = ids[j];
      if (!([a, b] in pairs)) {
        areas.push({
          "sets": [a, b],
          "size": 0
        });
      }
    }
  }
  return areas;
}
function getDistanceMatrices(areas, sets, setids) {
  var distances = zerosM(sets.length, sets.length), constraints = zerosM(sets.length, sets.length);
  areas.filter(function(x) {
    return x.sets.length == 2;
  }).map(function(current) {
    var left = setids[current.sets[0]], right = setids[current.sets[1]], r1 = Math.sqrt(sets[left].size / Math.PI), r2 = Math.sqrt(sets[right].size / Math.PI), distance2 = distanceFromIntersectArea(r1, r2, current.size);
    distances[left][right] = distances[right][left] = distance2;
    var c = 0;
    if (current.size + 1e-10 >= Math.min(
      sets[left].size,
      sets[right].size
    )) {
      c = 1;
    } else if (current.size <= 1e-10) {
      c = -1;
    }
    constraints[left][right] = constraints[right][left] = c;
  });
  return { distances, constraints };
}
function constrainedMDSGradient(x, fxprime, distances, constraints) {
  var loss = 0, i;
  for (i = 0; i < fxprime.length; ++i) {
    fxprime[i] = 0;
  }
  for (i = 0; i < distances.length; ++i) {
    var xi = x[2 * i], yi = x[2 * i + 1];
    for (var j = i + 1; j < distances.length; ++j) {
      var xj = x[2 * j], yj = x[2 * j + 1], dij = distances[i][j], constraint = constraints[i][j];
      var squaredDistance = (xj - xi) * (xj - xi) + (yj - yi) * (yj - yi), distance2 = Math.sqrt(squaredDistance), delta = squaredDistance - dij * dij;
      if (constraint > 0 && distance2 <= dij || constraint < 0 && distance2 >= dij) {
        continue;
      }
      loss += 2 * delta * delta;
      fxprime[2 * i] += 4 * delta * (xi - xj);
      fxprime[2 * i + 1] += 4 * delta * (yi - yj);
      fxprime[2 * j] += 4 * delta * (xj - xi);
      fxprime[2 * j + 1] += 4 * delta * (yj - yi);
    }
  }
  return loss;
}
function bestInitialLayout(areas, params) {
  var initial = greedyLayout(areas, params);
  var loss = params.lossFunction || lossFunction;
  if (areas.length >= 8) {
    var constrained = constrainedMDSLayout(areas, params), constrainedLoss = loss(constrained, areas), greedyLoss = loss(initial, areas);
    if (constrainedLoss + 1e-8 < greedyLoss) {
      initial = constrained;
    }
  }
  return initial;
}
function constrainedMDSLayout(areas, params) {
  params = params || {};
  var restarts = params.restarts || 10;
  var sets = [], setids = {}, i;
  for (i = 0; i < areas.length; ++i) {
    var area = areas[i];
    if (area.sets.length == 1) {
      setids[area.sets[0]] = sets.length;
      sets.push(area);
    }
  }
  var matrices = getDistanceMatrices(areas, sets, setids), distances = matrices.distances, constraints = matrices.constraints;
  var norm = norm2(distances.map(norm2)) / distances.length;
  distances = distances.map(function(row) {
    return row.map(function(value) {
      return value / norm;
    });
  });
  var obj = function(x, fxprime) {
    return constrainedMDSGradient(x, fxprime, distances, constraints);
  };
  var best, current;
  for (i = 0; i < restarts; ++i) {
    var initial = zeros(distances.length * 2).map(Math.random);
    current = conjugateGradient(obj, initial, params);
    if (!best || current.fx < best.fx) {
      best = current;
    }
  }
  var positions = best.x;
  var circles = {};
  for (i = 0; i < sets.length; ++i) {
    var set = sets[i];
    circles[set.sets[0]] = {
      x: positions[2 * i] * norm,
      y: positions[2 * i + 1] * norm,
      radius: Math.sqrt(set.size / Math.PI)
    };
  }
  if (params.history) {
    for (i = 0; i < params.history.length; ++i) {
      scale(params.history[i].x, norm);
    }
  }
  return circles;
}
function greedyLayout(areas, params) {
  var loss = params && params.lossFunction ? params.lossFunction : lossFunction;
  var circles = {}, setOverlaps = {}, set;
  for (var i = 0; i < areas.length; ++i) {
    var area = areas[i];
    if (area.sets.length == 1) {
      set = area.sets[0];
      circles[set] = {
        x: 1e10,
        y: 1e10,
        rowid: circles.length,
        size: area.size,
        radius: Math.sqrt(area.size / Math.PI)
      };
      setOverlaps[set] = [];
    }
  }
  areas = areas.filter(function(a) {
    return a.sets.length == 2;
  });
  for (i = 0; i < areas.length; ++i) {
    var current = areas[i];
    var weight = current.hasOwnProperty("weight") ? current.weight : 1;
    var left = current.sets[0], right = current.sets[1];
    if (current.size + SMALL2 >= Math.min(
      circles[left].size,
      circles[right].size
    )) {
      weight = 0;
    }
    setOverlaps[left].push({ set: right, size: current.size, weight });
    setOverlaps[right].push({ set: left, size: current.size, weight });
  }
  var mostOverlapped = [];
  for (set in setOverlaps) {
    if (setOverlaps.hasOwnProperty(set)) {
      var size = 0;
      for (i = 0; i < setOverlaps[set].length; ++i) {
        size += setOverlaps[set][i].size * setOverlaps[set][i].weight;
      }
      mostOverlapped.push({ set, size });
    }
  }
  function sortOrder(a, b) {
    return b.size - a.size;
  }
  mostOverlapped.sort(sortOrder);
  var positioned = {};
  function isPositioned(element) {
    return element.set in positioned;
  }
  function positionSet(point, index) {
    circles[index].x = point.x;
    circles[index].y = point.y;
    positioned[index] = true;
  }
  positionSet({ x: 0, y: 0 }, mostOverlapped[0].set);
  for (i = 1; i < mostOverlapped.length; ++i) {
    var setIndex = mostOverlapped[i].set, overlap = setOverlaps[setIndex].filter(isPositioned);
    set = circles[setIndex];
    overlap.sort(sortOrder);
    if (overlap.length === 0) {
      throw "ERROR: missing pairwise overlap information";
    }
    var points = [];
    for (var j = 0; j < overlap.length; ++j) {
      var p1 = circles[overlap[j].set], d1 = distanceFromIntersectArea(
        set.radius,
        p1.radius,
        overlap[j].size
      );
      points.push({ x: p1.x + d1, y: p1.y });
      points.push({ x: p1.x - d1, y: p1.y });
      points.push({ y: p1.y + d1, x: p1.x });
      points.push({ y: p1.y - d1, x: p1.x });
      for (var k = j + 1; k < overlap.length; ++k) {
        var p2 = circles[overlap[k].set], d2 = distanceFromIntersectArea(
          set.radius,
          p2.radius,
          overlap[k].size
        );
        var extraPoints = circleCircleIntersection(
          { x: p1.x, y: p1.y, radius: d1 },
          { x: p2.x, y: p2.y, radius: d2 }
        );
        for (var l = 0; l < extraPoints.length; ++l) {
          points.push(extraPoints[l]);
        }
      }
    }
    var bestLoss = 1e50, bestPoint = points[0];
    for (j = 0; j < points.length; ++j) {
      circles[setIndex].x = points[j].x;
      circles[setIndex].y = points[j].y;
      var localLoss = loss(circles, areas);
      if (localLoss < bestLoss) {
        bestLoss = localLoss;
        bestPoint = points[j];
      }
    }
    positionSet(bestPoint, setIndex);
  }
  return circles;
}
function lossFunction(sets, overlaps) {
  var output = 0;
  function getCircles(indices) {
    return indices.map(function(i2) {
      return sets[i2];
    });
  }
  for (var i = 0; i < overlaps.length; ++i) {
    var area = overlaps[i], overlap;
    if (area.sets.length == 1) {
      continue;
    } else if (area.sets.length == 2) {
      var left = sets[area.sets[0]], right = sets[area.sets[1]];
      overlap = circleOverlap(
        left.radius,
        right.radius,
        distance(left, right)
      );
    } else {
      overlap = intersectionArea(getCircles(area.sets));
    }
    var weight = area.hasOwnProperty("weight") ? area.weight : 1;
    output += weight * (overlap - area.size) * (overlap - area.size);
  }
  return output;
}
function orientateCircles(circles, orientation, orientationOrder) {
  if (orientationOrder === null) {
    circles.sort(function(a, b) {
      return b.radius - a.radius;
    });
  } else {
    circles.sort(orientationOrder);
  }
  var i;
  if (circles.length > 0) {
    var largestX = circles[0].x, largestY = circles[0].y;
    for (i = 0; i < circles.length; ++i) {
      circles[i].x -= largestX;
      circles[i].y -= largestY;
    }
  }
  if (circles.length == 2) {
    var dist = distance(circles[0], circles[1]);
    if (dist < Math.abs(circles[1].radius - circles[0].radius)) {
      circles[1].x = circles[0].x + circles[0].radius - circles[1].radius - 1e-10;
      circles[1].y = circles[0].y;
    }
  }
  if (circles.length > 1) {
    var rotation = Math.atan2(circles[1].x, circles[1].y) - orientation, c = Math.cos(rotation), s = Math.sin(rotation), x, y;
    for (i = 0; i < circles.length; ++i) {
      x = circles[i].x;
      y = circles[i].y;
      circles[i].x = c * x - s * y;
      circles[i].y = s * x + c * y;
    }
  }
  if (circles.length > 2) {
    var angle = Math.atan2(circles[2].x, circles[2].y) - orientation;
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    if (angle > Math.PI) {
      var slope = circles[1].y / (1e-10 + circles[1].x);
      for (i = 0; i < circles.length; ++i) {
        var d = (circles[i].x + slope * circles[i].y) / (1 + slope * slope);
        circles[i].x = 2 * d - circles[i].x;
        circles[i].y = 2 * d * slope - circles[i].y;
      }
    }
  }
}
function disjointCluster(circles) {
  circles.map(function(circle) {
    circle.parent = circle;
  });
  function find2(circle) {
    if (circle.parent !== circle) {
      circle.parent = find2(circle.parent);
    }
    return circle.parent;
  }
  function union(x, y) {
    var xRoot = find2(x), yRoot = find2(y);
    xRoot.parent = yRoot;
  }
  for (var i = 0; i < circles.length; ++i) {
    for (var j = i + 1; j < circles.length; ++j) {
      var maxDistance = circles[i].radius + circles[j].radius;
      if (distance(circles[i], circles[j]) + 1e-10 < maxDistance) {
        union(circles[j], circles[i]);
      }
    }
  }
  var disjointClusters = {}, setid;
  for (i = 0; i < circles.length; ++i) {
    setid = find2(circles[i]).parent.setid;
    if (!(setid in disjointClusters)) {
      disjointClusters[setid] = [];
    }
    disjointClusters[setid].push(circles[i]);
  }
  circles.map(function(circle) {
    delete circle.parent;
  });
  var ret = [];
  for (setid in disjointClusters) {
    if (disjointClusters.hasOwnProperty(setid)) {
      ret.push(disjointClusters[setid]);
    }
  }
  return ret;
}
function getBoundingBox(circles) {
  var minMax = function(d) {
    var hi = Math.max.apply(null, circles.map(
      function(c) {
        return c[d] + c.radius;
      }
    )), lo = Math.min.apply(null, circles.map(
      function(c) {
        return c[d] - c.radius;
      }
    ));
    return { max: hi, min: lo };
  };
  return { xRange: minMax("x"), yRange: minMax("y") };
}
function normalizeSolution(solution, orientation, orientationOrder) {
  if (orientation === null) {
    orientation = Math.PI / 2;
  }
  var circles = [], i, setid;
  for (setid in solution) {
    if (solution.hasOwnProperty(setid)) {
      var previous = solution[setid];
      circles.push({
        x: previous.x,
        y: previous.y,
        radius: previous.radius,
        setid
      });
    }
  }
  var clusters = disjointCluster(circles);
  for (i = 0; i < clusters.length; ++i) {
    orientateCircles(clusters[i], orientation, orientationOrder);
    var bounds = getBoundingBox(clusters[i]);
    clusters[i].size = (bounds.xRange.max - bounds.xRange.min) * (bounds.yRange.max - bounds.yRange.min);
    clusters[i].bounds = bounds;
  }
  clusters.sort(function(a, b) {
    return b.size - a.size;
  });
  circles = clusters[0];
  var returnBounds = circles.bounds;
  var spacing = (returnBounds.xRange.max - returnBounds.xRange.min) / 50;
  function addCluster(cluster, right, bottom) {
    if (!cluster) return;
    var bounds2 = cluster.bounds, xOffset, yOffset, centreing;
    if (right) {
      xOffset = returnBounds.xRange.max - bounds2.xRange.min + spacing;
    } else {
      xOffset = returnBounds.xRange.max - bounds2.xRange.max;
      centreing = (bounds2.xRange.max - bounds2.xRange.min) / 2 - (returnBounds.xRange.max - returnBounds.xRange.min) / 2;
      if (centreing < 0) xOffset += centreing;
    }
    if (bottom) {
      yOffset = returnBounds.yRange.max - bounds2.yRange.min + spacing;
    } else {
      yOffset = returnBounds.yRange.max - bounds2.yRange.max;
      centreing = (bounds2.yRange.max - bounds2.yRange.min) / 2 - (returnBounds.yRange.max - returnBounds.yRange.min) / 2;
      if (centreing < 0) yOffset += centreing;
    }
    for (var j = 0; j < cluster.length; ++j) {
      cluster[j].x += xOffset;
      cluster[j].y += yOffset;
      circles.push(cluster[j]);
    }
  }
  var index = 1;
  while (index < clusters.length) {
    addCluster(clusters[index], true, false);
    addCluster(clusters[index + 1], false, true);
    addCluster(clusters[index + 2], true, true);
    index += 3;
    returnBounds = getBoundingBox(circles);
  }
  var ret = {};
  for (i = 0; i < circles.length; ++i) {
    ret[circles[i].setid] = circles[i];
  }
  return ret;
}
function scaleSolution(solution, width, height, padding) {
  var circles = [], setids = [];
  for (var setid in solution) {
    if (solution.hasOwnProperty(setid)) {
      setids.push(setid);
      circles.push(solution[setid]);
    }
  }
  width -= 2 * padding;
  height -= 2 * padding;
  var bounds = getBoundingBox(circles), xRange = bounds.xRange, yRange = bounds.yRange;
  if (xRange.max == xRange.min || yRange.max == yRange.min) {
    console.log("not scaling solution: zero size detected");
    return solution;
  }
  var xScaling = width / (xRange.max - xRange.min), yScaling = height / (yRange.max - yRange.min), scaling = Math.min(yScaling, xScaling), xOffset = (width - (xRange.max - xRange.min) * scaling) / 2, yOffset = (height - (yRange.max - yRange.min) * scaling) / 2;
  var scaled = {};
  for (var i = 0; i < circles.length; ++i) {
    var circle = circles[i];
    scaled[setids[i]] = {
      radius: scaling * circle.radius,
      x: padding + xOffset + (circle.x - xRange.min) * scaling,
      y: padding + yOffset + (circle.y - yRange.min) * scaling
    };
  }
  return scaled;
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/vennjs/diagram.js
function circleMargin(current, interior, exterior) {
  var margin = interior[0].radius - distance(interior[0], current), i, m;
  for (i = 1; i < interior.length; ++i) {
    m = interior[i].radius - distance(interior[i], current);
    if (m <= margin) {
      margin = m;
    }
  }
  for (i = 0; i < exterior.length; ++i) {
    m = distance(exterior[i], current) - exterior[i].radius;
    if (m <= margin) {
      margin = m;
    }
  }
  return margin;
}
function computeTextCentre(interior, exterior) {
  var points = [], i;
  for (i = 0; i < interior.length; ++i) {
    var c = interior[i];
    points.push({ x: c.x, y: c.y });
    points.push({ x: c.x + c.radius / 2, y: c.y });
    points.push({ x: c.x - c.radius / 2, y: c.y });
    points.push({ x: c.x, y: c.y + c.radius / 2 });
    points.push({ x: c.x, y: c.y - c.radius / 2 });
  }
  var initial = points[0], margin = circleMargin(points[0], interior, exterior);
  for (i = 1; i < points.length; ++i) {
    var m = circleMargin(points[i], interior, exterior);
    if (m >= margin) {
      initial = points[i];
      margin = m;
    }
  }
  var solution = nelderMead(
    function(p) {
      return -1 * circleMargin({ x: p[0], y: p[1] }, interior, exterior);
    },
    [initial.x, initial.y],
    { maxIterations: 500, minErrorDelta: 1e-10 }
  ).x;
  var ret = { x: solution[0], y: solution[1] };
  var valid = true;
  for (i = 0; i < interior.length; ++i) {
    if (distance(ret, interior[i]) > interior[i].radius) {
      valid = false;
      break;
    }
  }
  for (i = 0; i < exterior.length; ++i) {
    if (distance(ret, exterior[i]) < exterior[i].radius) {
      valid = false;
      break;
    }
  }
  if (!valid) {
    if (interior.length == 1) {
      ret = { x: interior[0].x, y: interior[0].y };
    } else {
      var areaStats = {};
      intersectionArea(interior, areaStats);
      if (areaStats.arcs.length === 0) {
        ret = { "x": 0, "y": -1e3, disjoint: true };
      } else if (areaStats.arcs.length == 1) {
        ret = {
          "x": areaStats.arcs[0].circle.x,
          "y": areaStats.arcs[0].circle.y
        };
      } else if (exterior.length) {
        ret = computeTextCentre(interior, []);
      } else {
        ret = getCenter(areaStats.arcs.map(function(a) {
          return a.p1;
        }));
      }
    }
  }
  return ret;
}
function getOverlappingCircles(circles) {
  var ret = {}, circleids = [];
  for (var circleid in circles) {
    circleids.push(circleid);
    ret[circleid] = [];
  }
  for (var i = 0; i < circleids.length; i++) {
    var a = circles[circleids[i]];
    for (var j = i + 1; j < circleids.length; ++j) {
      var b = circles[circleids[j]], d = distance(a, b);
      if (d + b.radius <= a.radius + 1e-10) {
        ret[circleids[j]].push(circleids[i]);
      } else if (d + a.radius <= b.radius + 1e-10) {
        ret[circleids[i]].push(circleids[j]);
      }
    }
  }
  return ret;
}
function computeTextCentres(circles, areas) {
  var ret = {}, overlapped = getOverlappingCircles(circles);
  for (var i = 0; i < areas.length; ++i) {
    var area = areas[i].sets, areaids = {}, exclude = {};
    for (var j = 0; j < area.length; ++j) {
      areaids[area[j]] = true;
      var overlaps = overlapped[area[j]];
      for (var k = 0; k < overlaps.length; ++k) {
        exclude[overlaps[k]] = true;
      }
    }
    var interior = [], exterior = [];
    for (var setid in circles) {
      if (setid in areaids) {
        interior.push(circles[setid]);
      } else if (!(setid in exclude)) {
        exterior.push(circles[setid]);
      }
    }
    var centre = computeTextCentre(interior, exterior);
    ret[area] = centre;
    if (centre.disjoint && areas[i].size > 0) {
      console.log("WARNING: area " + area + " not represented on screen");
    }
  }
  return ret;
}
function circlePath(x, y, r) {
  var ret = [];
  ret.push("\nM", x, y);
  ret.push("\nm", -r, 0);
  ret.push("\na", r, r, 0, 1, 0, r * 2, 0);
  ret.push("\na", r, r, 0, 1, 0, -r * 2, 0);
  return ret.join(" ");
}
function intersectionAreaPath(circles) {
  var stats = {};
  intersectionArea(circles, stats);
  var arcs = stats.arcs;
  if (arcs.length === 0) {
    return "M 0 0";
  } else if (arcs.length == 1) {
    var circle = arcs[0].circle;
    return circlePath(circle.x, circle.y, circle.radius);
  } else {
    var ret = ["\nM", arcs[0].p2.x, arcs[0].p2.y];
    for (var i = 0; i < arcs.length; ++i) {
      var arc = arcs[i], r = arc.circle.radius, wide = arc.width > r;
      ret.push(
        "\nA",
        r,
        r,
        0,
        wide ? 1 : 0,
        1,
        arc.p1.x,
        arc.p1.y
      );
    }
    return ret.join(" ");
  }
}

// node_modules/@amcharts/amcharts5/.internal/charts/venn/Venn.js
var Venn = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_sets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(this, "slicesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "labelsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "hoverGraphics", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.slicesContainer.children.push(Graphics.new(this._root, { position: "absolute", isMeasured: false }))
    });
    Object.defineProperty(this, "_hovered", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "slices", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(this._makeSlices())
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(this._makeLabels())
    });
  }
  _afterNew() {
    this._defaultThemes.push(VennDefaultTheme.new(this._root));
    this.fields.push("intersections", "category", "fill");
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeSlice(dataItem) {
    const slice = this.slicesContainer.children.push(this.slices.make());
    slice.events.on("pointerover", (e) => {
      this._hovered = e.target;
      this._updateHover();
    });
    slice.events.on("pointerout", () => {
      this._hovered = void 0;
      this.hoverGraphics.hide();
    });
    slice.on("fill", () => {
      this.updateLegendMarker(dataItem);
    });
    slice.on("fillPattern", () => {
      this.updateLegendMarker(dataItem);
    });
    slice.on("stroke", () => {
      this.updateLegendMarker(dataItem);
    });
    slice._setDataItem(dataItem);
    dataItem.set("slice", slice);
    this.slices.push(slice);
    return slice;
  }
  _updateHover() {
    if (this._hovered) {
      const hoverGraphics = this.hoverGraphics;
      hoverGraphics.set("svgPath", this._hovered.get("svgPath"));
      hoverGraphics.show();
      hoverGraphics.toFront();
    }
  }
  /**
   * @ignore
   */
  makeLabel(dataItem) {
    const label = this.labelsContainer.children.push(this.labels.make());
    label._setDataItem(dataItem);
    dataItem.set("label", label);
    this.labels.push(label);
    return label;
  }
  _makeSlices() {
    return new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
      themeTags: mergeTags(this.slices.template.get("themeTags", []), ["venn", "series"])
    }, [this.slices.template]));
  }
  _makeLabels() {
    return new ListTemplate(Template.new({}), () => Label._new(this._root, {
      themeTags: mergeTags(this.labels.template.get("themeTags", []), ["venn", "series"])
    }, [this.labels.template]));
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
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
    this.makeSlice(dataItem);
    this.makeLabel(dataItem);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this._valuesDirty || this._sizeDirty) {
      const sets = [];
      each(this.dataItems, (dataItem) => {
        const set = {};
        const intersections = dataItem.get("intersections");
        if (intersections) {
          set.sets = intersections;
        } else {
          set.sets = [dataItem.get("category")];
        }
        set.size = dataItem.get("valueWorking");
        sets.push(set);
        const label = dataItem.get("label");
        const slice = dataItem.get("slice");
        let visible = true;
        if (dataItem.get("value") == 0) {
          visible = false;
          if (slice) {
            slice.setAll({
              x: this.width() / 2,
              y: this.height() / 2
            });
          }
        }
        if (label) {
          label.setPrivate("visible", visible);
        }
      });
      const newSets = sets.toString();
      this._sets = newSets;
      if (sets.length > 0) {
        let vennData = venn(sets);
        vennData = normalizeSolution(vennData, null, null);
        vennData = scaleSolution(vennData, this.innerWidth(), this.innerHeight(), 0);
        const circles = {};
        for (let name in vennData) {
          let item = vennData[name];
          let r = item.radius;
          const dataItem = this.getDataItemByCategory(name);
          if (dataItem) {
            const slice = dataItem.get("slice");
            const color = dataItem.get("fill");
            slice._setDefault("fill", color);
            const fillPattern = dataItem.get("fillPattern");
            slice._setDefault("fillPattern", fillPattern);
            slice._setDefault("stroke", color);
            this.updateLegendMarker(dataItem);
            slice.set("svgPath", "M" + item.x + "," + item.y + " m -" + r + ", 0 a " + r + "," + r + " 0 1,1 " + r * 2 + ",0 a " + r + "," + r + " 0 1,1 -" + r * 2 + ",0");
            circles[name] = item;
          }
        }
        let centers = computeTextCentres(circles, sets);
        each(this.dataItems, (dataItem) => {
          let name = dataItem.get("category");
          let center = centers[name];
          const intersections = dataItem.get("intersections");
          if (intersections) {
            name = intersections.toString();
            center = centers[name];
            if (center) {
              let set = intersections;
              let cc = [];
              for (let s = 0; s < set.length; s++) {
                cc.push(circles[set[s]]);
              }
              let intersectionPath = intersectionAreaPath(cc);
              let slice = dataItem.get("slice");
              const color = dataItem.get("fill");
              slice._setDefault("fill", color);
              slice._setDefault("stroke", color);
              const fillPattern = dataItem.get("fillPattern");
              slice._setDefault("fillPattern", fillPattern);
              slice.setAll({ svgPath: intersectionPath });
            }
          }
          if (center) {
            let label = dataItem.get("label");
            label.setAll({ x: center.x, y: center.y });
          }
          this.updateLegendValue(dataItem);
        });
      }
      this._updateHover();
    }
  }
  /**
   * Looks up and returns a data item by its category.
   *
   * @param   category  Category
   * @return      Data item
   */
  getDataItemByCategory(id) {
    return find(this.dataItems, (dataItem) => {
      return dataItem.get("category") == id;
    });
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
      if (!isNumber(duration)) {
        duration = this.get("stateAnimationDuration", 0);
      }
      const easing = this.get("stateAnimationEasing");
      let value = dataItem.get("value");
      const animation = dataItem.animate({ key: "valueWorking", to: value, duration, easing });
      if (animation) {
        promises.push(animation.waitForStop());
      }
      const label = dataItem.get("label");
      if (label) {
        promises.push(label.show(duration));
      }
      const slice = dataItem.get("slice");
      if (slice) {
        promises.push(slice.show(duration));
      }
      const intersections = dataItem.get("intersections");
      if (intersections) {
        each(intersections, (cat) => {
          const di = this.getDataItemByCategory(cat);
          if (di && di.isHidden()) {
            this.showDataItem(di, duration);
          }
        });
      }
      if (!intersections) {
        const category = dataItem.get("category");
        each(this.dataItems, (di) => {
          const intersections2 = di.get("intersections");
          if (di != dataItem && intersections2) {
            let allVisible = true;
            each(intersections2, (cat) => {
              const dii = this.getDataItemByCategory(cat);
              if (dii && dii.isHidden()) {
                allVisible = false;
              }
            });
            if (allVisible && intersections2.indexOf(category) != -1) {
              if (di.isHidden()) {
                this.showDataItem(di, duration);
              }
            }
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
      const hiddenState = this.states.create("hidden", {});
      if (!isNumber(duration)) {
        duration = hiddenState.get("stateAnimationDuration", this.get("stateAnimationDuration", 0));
      }
      const easing = hiddenState.get("stateAnimationEasing", this.get("stateAnimationEasing"));
      const animation = dataItem.animate({ key: "valueWorking", to: 0, duration, easing });
      if (animation) {
        promises.push(animation.waitForStop());
      }
      const label = dataItem.get("label");
      if (label) {
        promises.push(label.hide(duration));
      }
      const slice = dataItem.get("slice");
      if (slice) {
        promises.push(slice.hide(duration));
        slice.hideTooltip();
      }
      if (!dataItem.get("intersections")) {
        each(this.dataItems, (di) => {
          const intersections = di.get("intersections");
          if (di != dataItem && intersections) {
            if (intersections.indexOf(dataItem.get("category")) != -1) {
              this.hideDataItem(di, duration);
            }
          }
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    let label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    let slice = dataItem.get("slice");
    if (slice) {
      this.slices.removeValue(slice);
      slice.dispose();
    }
  }
  /**
   * @ignore
   */
  updateLegendMarker(dataItem) {
    const slice = dataItem.get("slice");
    if (slice) {
      const legendDataItem = dataItem.get("legendDataItem");
      if (legendDataItem) {
        const markerRectangle = legendDataItem.get("markerRectangle");
        if (!dataItem.isHidden()) {
          each(visualSettings, (setting) => {
            markerRectangle.set(setting, slice.get(setting));
          });
        }
      }
    }
  }
  /**
   * Triggers hover on a series data item.
   *
   * @since 5.0.7
   * @param  dataItem  Target data item
   */
  hoverDataItem(dataItem) {
    const slice = dataItem.get("slice");
    if (slice && !slice.isHidden()) {
      slice.hover();
    }
  }
  /**
   * Triggers un-hover on a series data item.
   *
   * @since 5.0.7
   * @param  dataItem  Target data item
   */
  unhoverDataItem(dataItem) {
    const slice = dataItem.get("slice");
    if (slice) {
      slice.unhover();
    }
  }
};
Object.defineProperty(Venn, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Venn"
});
Object.defineProperty(Venn, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([Venn.className])
});
export {
  VennDefaultTheme as DefaultTheme,
  Venn
};
//# sourceMappingURL=venn-BHZNB3MI.js.map
