import {
  Series
} from "./chunk-JFXPNH7X.js";
import "./chunk-CRL5FSBR.js";
import {
  Label
} from "./chunk-D7RPQL45.js";
import {
  Color,
  Container,
  ListTemplate,
  Rectangle,
  cubic,
  mergeTags,
  out,
  p100,
  p50,
  percent,
  relativeToValue,
  spiralPoints
} from "./chunk-BGHA5GQX.js";
import {
  Theme
} from "./chunk-KLZIQI2U.js";
import {
  Template,
  each,
  isNaN
} from "./chunk-T2HS62VR.js";
import "./chunk-UCQAVHHJ.js";
import "./chunk-R327OCYJ.js";

// node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloudDefaultTheme.js
var WordCloudDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const r = this.rule.bind(this);
    r("WordCloud").setAll({
      width: p100,
      height: p100,
      minFontSize: percent(2),
      maxFontSize: percent(15),
      excludeWords: [],
      angles: [0, -90],
      minWordLength: 1,
      step: 15,
      randomness: 0,
      autoFit: true,
      animationEasing: out(cubic)
    });
    {
      const rule = r("Label", ["wordcloud"]);
      rule.setAll({
        text: "{category}",
        centerX: p50,
        centerY: p50,
        position: "absolute",
        lineHeight: p100,
        populateText: true
      });
      rule.setup = (target) => {
        target.set("background", Rectangle.new(this._root, {
          fill: ic.get("background"),
          fillOpacity: 0
        }));
      };
    }
  }
};

// node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloud.js
var WordCloud = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_currentIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_timeoutDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_ghostContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, { layer: 99, opacity: 0.01 }))
    });
    Object.defineProperty(this, "_pointSets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_sets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3
    });
    Object.defineProperty(this, "_process", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_buffer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_boundsToAdd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(this._makeLabels())
    });
  }
  _afterNew() {
    this._defaultThemes.push(WordCloudDefaultTheme.new(this._root));
    this.fields.push("category", "fill");
    this._setDefault("valueField", "value");
    this._setDefault("categoryField", "category");
    this._setDefault("fillField", "fill");
    super._afterNew();
    this._root.events.on("frameended", () => {
      this.set("progress", this._currentIndex / this.dataItems.length);
    });
  }
  /**
   * @ignore
   */
  makeLabel(dataItem) {
    const label = this.children.push(this.labels.make());
    label._setDataItem(dataItem);
    const fill = dataItem.get("fill");
    if (fill != null) {
      label.set("fill", fill);
    }
    label.set("x", -999999);
    dataItem.set("label", label);
    this.labels.push(label);
    const ghostLabel = this._ghostContainer.children.push(this.labels.make());
    ghostLabel._setDataItem(dataItem);
    ghostLabel.setAll({ fill: Color.fromHex(0), fontWeight: "900" });
    dataItem.set("ghostLabel", ghostLabel);
    this.labels.push(ghostLabel);
    return label;
  }
  _makeLabels() {
    return new ListTemplate(Template.new({}), () => Label._new(this._root, {
      themeTags: mergeTags(this.labels.template.get("themeTags", []), ["wordcloud", "series"])
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
    this.makeLabel(dataItem);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("text")) {
      this.data.setAll(this._getWords(this.get("text")));
      this._dirty["text"] = false;
    }
  }
  _updateChildren() {
    super._updateChildren();
    const resolution = this._root._renderer.resolution;
    const cols = Math.round(this._root.width() * resolution);
    let step = this.get("step", 1) * 2;
    if (this._valuesDirty || this._sizeDirty || this.isPrivateDirty("adjustedFontSize")) {
      const adjustedFontSize = this.getPrivate("adjustedFontSize", 1);
      const w = this.innerWidth();
      const h = this.innerHeight();
      const smaller = Math.min(w, h);
      const bigger = Math.max(w, h);
      this._buffer = Array(Math.ceil(this._root.width() * this._root.height() * resolution * resolution)).fill(0);
      if (smaller < 800) {
        step = step / 2;
      }
      this._ghostContainer._display.clear();
      this._pointSets = [];
      for (let i = 0; i < this._sets; i++) {
        const setStep = step * (this._sets - i);
        const points = spiralPoints(w / 2, h / 2, w, h, 0, setStep * h / bigger, setStep * w / bigger, 0, 0);
        for (let i2 = points.length - 1; i2 >= 0; i2--) {
          let point = points[i2];
          if (point.x < 0 || point.x > w || point.y < 0 || point.y > h) {
            points.splice(i2, 1);
            continue;
          }
        }
        this._pointSets.push(points);
      }
      let sum = 0;
      let absSum = 0;
      let valueHigh = 0;
      let valueLow = Infinity;
      let count = 0;
      each(this._dataItems, (dataItem) => {
        const valueWorking = dataItem.get("valueWorking", 0);
        sum += valueWorking;
        absSum += Math.abs(valueWorking);
      });
      this._dataItems.sort((a, b) => {
        let aValue = a.get("value", 0);
        let bValue = b.get("value", 0);
        if (aValue > bValue) {
          return -1;
        }
        if (aValue < bValue) {
          return 1;
        }
        return 0;
      });
      each(this._dataItems, (dataItem) => {
        const value = dataItem.get("valueWorking", 0);
        if (value >= absSum) {
          sum = dataItem.get("value", 0);
        }
        if (value > valueHigh) {
          valueHigh = value;
        }
        if (value < valueLow) {
          valueLow = value;
        }
        count++;
      });
      this.setPrivateRaw("valueLow", valueLow);
      this.setPrivateRaw("valueHigh", valueHigh);
      this.setPrivateRaw("valueSum", sum);
      this.setPrivateRaw("valueAverage", sum / count);
      this.setPrivateRaw("valueAbsoluteSum", absSum);
      const smallerSize = Math.min(w, h);
      const minFontSize = relativeToValue(this.get("minFontSize", 10), smallerSize) * adjustedFontSize;
      const maxFontSize = relativeToValue(this.get("maxFontSize", 100), smallerSize) * adjustedFontSize;
      const angles = this.get("angles", [0]);
      each(this._dataItems, (dataItem) => {
        const value = dataItem.get("valueWorking", 0);
        const ghostLabel = dataItem.get("ghostLabel");
        let fontSize = minFontSize + (maxFontSize - minFontSize) * (value - valueLow) / (valueHigh - valueLow);
        if (isNaN(fontSize)) {
          fontSize = maxFontSize;
        }
        const set = this._sets - 1 - Math.floor((fontSize - minFontSize) / (maxFontSize - minFontSize) * (this._sets - 1));
        dataItem.setRaw("set", set);
        dataItem.setRaw("fontSize", fontSize);
        let angle = angles[Math.floor(Math.random() * angles.length)];
        dataItem.setRaw("angle", angle);
        ghostLabel.setAll({ fontSize, rotation: angle, x: -1e4 });
      });
      this._process = false;
      this._currentIndex = 0;
      this._root.events.once("frameended", () => {
        this.setTimeout(() => {
          this._process = true;
          this._markDirtyKey("progress");
        }, 50);
      });
    }
    const boundsToAdd = this._boundsToAdd;
    if (boundsToAdd) {
      const context = this._ghostContainer._display.getLayer().context;
      const y = Math.round(boundsToAdd.top);
      const x = Math.round(boundsToAdd.left);
      const w = Math.round(boundsToAdd.right - boundsToAdd.left);
      const h = Math.round(boundsToAdd.bottom - boundsToAdd.top);
      const imageData = context.getImageData(x, y, w, h).data;
      const buffer = this._buffer;
      let n = 3;
      for (let r = y; r < y + h; r++) {
        for (let c = x; c < x + w; c++) {
          let i = (r + 1) * cols - (cols - c);
          if (imageData[n] != 0) {
            buffer[i] = 1;
          }
          n += 4;
        }
      }
      this._boundsToAdd = void 0;
    }
    if (this._process && this.isDirty("progress")) {
      this._processItem();
    }
  }
  _processItem() {
    this._boundsToAdd = void 0;
    if (this._currentIndex < this.dataItems.length) {
      const dataItem = this.dataItems[this._currentIndex];
      const label = dataItem.get("label");
      const ghostLabel = dataItem.get("ghostLabel");
      const resolution = this._root._renderer.resolution;
      let lw = ghostLabel.width();
      let lh = ghostLabel.height();
      const context = ghostLabel._display.getLayer().context;
      const set = dataItem.get("set");
      const points = this._pointSets[set];
      const w = this.innerWidth();
      const h = this.innerHeight();
      const cols = Math.round(this._root.width() * resolution);
      const x = this.x();
      const y = this.y();
      const angles = this.get("angles", [0]);
      if (w > h) {
        if (lw >= w / 2) {
          each(angles, (angle) => {
            if (angle == 0 && dataItem.get("angle") != 0) {
              dataItem.setRaw("angle", 0);
              ghostLabel.set("rotation", 0);
              [lw, lh] = [lh, lw];
            }
          });
        }
      }
      if (h > w) {
        if (lw >= w / 2) {
          each(angles, (angle) => {
            if (Math.abs(angle) == 90 && dataItem.get("angle") == 0) {
              dataItem.setRaw("angle", angle);
              ghostLabel.set("rotation", angle);
              [lw, lh] = [lh, lw];
            }
          });
        }
      }
      const rw = Math.ceil(lw * resolution);
      const rh = Math.ceil(lh * resolution);
      if (context && lw > 0 && lh > 0) {
        let pIndex = Math.round(Math.random() * points.length * this.get("randomness", 0));
        let intersects = true;
        while (intersects) {
          let p = points[pIndex];
          if (p) {
            intersects = false;
            if (this._currentIndex > 0) {
              let cx = Math.round((p.x + x) * resolution - rw / 2);
              let cy = Math.round((p.y + y) * resolution - rh / 2);
              intersects = this._hasColor(cx, cy, rw, rh, cols);
            }
            if (p.x - lw / 2 < 0 || p.x + lw / 2 > w || p.y - lh / 2 < 0 || p.y + lh / 2 > h) {
              pIndex++;
              intersects = true;
            } else {
              if (!intersects) {
                const angle = dataItem.get("angle", 0);
                const fontSize = dataItem.get("fontSize", 0);
                if (label.get("x") != -999999) {
                  label.animate({ key: "x", to: p.x, duration: this.get("animationDuration", 0), easing: this.get("animationEasing") });
                  label.animate({ key: "y", to: p.y, duration: this.get("animationDuration", 0), easing: this.get("animationEasing") });
                  label.animate({ key: "rotation", to: angle, duration: this.get("animationDuration", 0), easing: this.get("animationEasing") });
                  label.animate({ key: "fontSize", to: fontSize, duration: this.get("animationDuration", 0), easing: this.get("animationEasing") });
                } else {
                  label.setAll({ x: p.x, y: p.y, rotation: angle, fontSize });
                  label.appear();
                }
                ghostLabel.setAll({ x: p.x, y: p.y });
                for (let i = points.length - 1; i >= 0; i--) {
                  let point = points[i];
                  if (point.x >= p.x - lw / 2 && point.x <= p.x + lw / 2 && point.y >= p.y - lh / 2 && point.y <= p.y + lh / 2) {
                    points.splice(i, 1);
                  }
                }
                this._boundsToAdd = { left: (p.x + x - lw / 2) * resolution, right: (p.x + x + lw / 2) * resolution, top: (p.y + y - lh / 2) * resolution, bottom: (p.y + y + lh / 2) * resolution };
              } else {
                pIndex += 2;
              }
            }
          } else {
            if (this.get("autoFit")) {
              this.setTimeout(() => {
                this.setPrivate("adjustedFontSize", this.getPrivate("adjustedFontSize", 1) * 0.9);
              }, 50);
              return;
            }
            label.set("x", -999999);
            intersects = false;
          }
        }
      }
      this._currentIndex++;
    }
  }
  /**
  * @ignore
  */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    const ghostLabel = dataItem.get("ghostLabel");
    if (ghostLabel) {
      this.labels.removeValue(ghostLabel);
      ghostLabel.dispose();
    }
  }
  /**
  * Extracts words and number of their appearances from a text.
  *
  * @ignore
  * @param  input  Source text
  */
  _getWords(input) {
    let words = [];
    if (input) {
      const chars = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԣԱ-Ֆՙա-ևא-תװ-ײء-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴ-ߵߺऄ-हऽॐक़-ॡॱ-ॲॻ-ॿঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘ-ౙౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹഽൠ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཬྈ-ྋက-ဪဿၐ-ၕၚ-ၝၡၥ-ၦၮ-ၰၵ-ႁႎႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮ-ᮯᰀ-ᰣᱍ-ᱏᱚ-ᱽᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀䶵一鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘟꘪ-ꘫꙀ-ꙟꙢ-ꙮꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꤊ-ꤥꤰ-ꥆꨀ-ꨨꩀ-ꩂꩄ-ꩋ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ0-9@+";
      const reg = new RegExp("([" + chars + "]+[-" + chars + "]*[" + chars + "]+)|([" + chars + "]+)", "ig");
      let res = input.match(reg);
      if (!res) {
        return [];
      }
      let word;
      while (true) {
        word = res.pop();
        if (!word) {
          break;
        }
        let item;
        for (let i = 0; i < words.length; i++) {
          if (words[i].category.toLowerCase() == word.toLowerCase()) {
            item = words[i];
            break;
          }
        }
        if (item) {
          item.value++;
          if (!this.isCapitalized(word)) {
            item.category = word;
          }
        } else {
          words.push({
            category: word,
            value: 1
          });
        }
      }
      let excludeWords = this.get("excludeWords");
      const minValue = this.get("minValue", 1);
      const minWordLength = this.get("minWordLength", 1);
      if (minValue > 1 || minWordLength > 1 || excludeWords && excludeWords.length > 0) {
        for (let i = words.length - 1; i >= 0; i--) {
          let w = words[i];
          let word2 = w.category;
          if (w.value < minValue) {
            words.splice(i, 1);
          }
          if (word2.length < minWordLength) {
            words.splice(i, 1);
          }
          if (excludeWords && excludeWords.indexOf(word2) !== -1) {
            words.splice(i, 1);
          }
        }
      }
      words.sort(function(a, b) {
        if (a.value == b.value) {
          return 0;
        } else if (a.value > b.value) {
          return -1;
        } else {
          return 1;
        }
      });
      const maxCount = this.get("maxCount", Infinity);
      if (words.length > maxCount) {
        words = words.slice(0, maxCount);
      }
    }
    return words;
  }
  /**
  * Checks if word is capitalized (starts with an uppercase) or not.
  *
  * @ignore
  * @param   word  Word
  * @return        Capitalized?
  */
  isCapitalized(word) {
    let lword = word.toLowerCase();
    return word[0] != lword[0] && word.substr(1) == lword.substr(1) && word != lword;
  }
  _hasColor(x, y, w, h, cols) {
    const buffer = this._buffer;
    if (buffer) {
      for (let r = y; r < y + h; r += 4) {
        for (let c = x; c < x + w; c += 4) {
          let i = (r + 1) * cols - (cols - c);
          if (buffer[i] != 0) {
            return true;
          }
        }
      }
    }
    return false;
  }
};
Object.defineProperty(WordCloud, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "WordCloud"
});
Object.defineProperty(WordCloud, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([WordCloud.className])
});
export {
  WordCloudDefaultTheme as DefaultTheme,
  WordCloud
};
//# sourceMappingURL=wc-HICLURZQ.js.map
