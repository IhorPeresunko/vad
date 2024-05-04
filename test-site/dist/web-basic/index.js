(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // ../../node_modules/onnxruntime-common/dist/ort-common.node.js
  var require_ort_common_node = __commonJS({
    "../../node_modules/onnxruntime-common/dist/ort-common.node.js"(exports2) {
      (() => {
        "use strict";
        var e = { d: (t2, r2) => {
          for (var n2 in r2)
            e.o(r2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: r2[n2] });
        }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        } }, t = {};
        e.r(t), e.d(t, { InferenceSession: () => c, Tensor: () => g, env: () => i, registerBackend: () => o });
        const r = {}, n = [], o = (e2, t2, o2) => {
          if (!t2 || "function" != typeof t2.init || "function" != typeof t2.createSessionHandler)
            throw new TypeError("not a valid backend");
          {
            const i2 = r[e2];
            if (void 0 === i2)
              r[e2] = { backend: t2, priority: o2 };
            else {
              if (i2.priority > o2)
                return;
              if (i2.priority === o2 && i2.backend !== t2)
                throw new Error(`cannot register backend "${e2}" using priority ${o2}`);
            }
            if (o2 >= 0) {
              const t3 = n.indexOf(e2);
              -1 !== t3 && n.splice(t3, 1);
              for (let t4 = 0; t4 < n.length; t4++)
                if (r[n[t4]].priority <= o2)
                  return void n.splice(t4, 0, e2);
              n.push(e2);
            }
          }
        }, i = new class {
          constructor() {
            this.wasm = {}, this.webgl = {}, this.logLevelInternal = "warning";
          }
          set logLevel(e2) {
            if (void 0 !== e2) {
              if ("string" != typeof e2 || -1 === ["verbose", "info", "warning", "error", "fatal"].indexOf(e2))
                throw new Error(`Unsupported logging level: ${e2}`);
              this.logLevelInternal = e2;
            }
          }
          get logLevel() {
            return this.logLevelInternal;
          }
        }(), a = "undefined" != typeof BigInt64Array && "function" == typeof BigInt64Array.from, s = "undefined" != typeof BigUint64Array && "function" == typeof BigUint64Array.from, d = /* @__PURE__ */ new Map([["float32", Float32Array], ["uint8", Uint8Array], ["int8", Int8Array], ["uint16", Uint16Array], ["int16", Int16Array], ["int32", Int32Array], ["bool", Uint8Array], ["float64", Float64Array], ["uint32", Uint32Array]]), f = /* @__PURE__ */ new Map([[Float32Array, "float32"], [Uint8Array, "uint8"], [Int8Array, "int8"], [Uint16Array, "uint16"], [Int16Array, "int16"], [Int32Array, "int32"], [Float64Array, "float64"], [Uint32Array, "uint32"]]);
        a && (d.set("int64", BigInt64Array), f.set(BigInt64Array, "int64")), s && (d.set("uint64", BigUint64Array), f.set(BigUint64Array, "uint64"));
        class h {
          constructor(e2, t2, r2) {
            let n2, o2, i2;
            if ("string" == typeof e2)
              if (n2 = e2, i2 = r2, "string" === e2) {
                if (!Array.isArray(t2))
                  throw new TypeError("A string tensor's data must be a string array.");
                o2 = t2;
              } else {
                const r3 = d.get(e2);
                if (void 0 === r3)
                  throw new TypeError(`Unsupported tensor type: ${e2}.`);
                if (Array.isArray(t2))
                  o2 = r3.from(t2);
                else {
                  if (!(t2 instanceof r3))
                    throw new TypeError(`A ${n2} tensor's data must be type of ${r3}`);
                  o2 = t2;
                }
              }
            else if (i2 = t2, Array.isArray(e2)) {
              if (0 === e2.length)
                throw new TypeError("Tensor type cannot be inferred from an empty array.");
              const t3 = typeof e2[0];
              if ("string" === t3)
                n2 = "string", o2 = e2;
              else {
                if ("boolean" !== t3)
                  throw new TypeError(`Invalid element type of data array: ${t3}.`);
                n2 = "bool", o2 = Uint8Array.from(e2);
              }
            } else {
              const t3 = f.get(e2.constructor);
              if (void 0 === t3)
                throw new TypeError(`Unsupported type for tensor data: ${e2.constructor}.`);
              n2 = t3, o2 = e2;
            }
            if (void 0 === i2)
              i2 = [o2.length];
            else if (!Array.isArray(i2))
              throw new TypeError("A tensor's dims must be a number array");
            const a2 = ((e3) => {
              let t3 = 1;
              for (let r3 = 0; r3 < e3.length; r3++) {
                const n3 = e3[r3];
                if ("number" != typeof n3 || !Number.isSafeInteger(n3))
                  throw new TypeError(`dims[${r3}] must be an integer, got: ${n3}`);
                if (n3 < 0)
                  throw new RangeError(`dims[${r3}] must be a non-negative integer, got: ${n3}`);
                t3 *= n3;
              }
              return t3;
            })(i2);
            if (a2 !== o2.length)
              throw new Error(`Tensor's size(${a2}) does not match data length(${o2.length}).`);
            this.dims = i2, this.type = n2, this.data = o2, this.size = a2;
          }
          static bufferToTensor(e2, t2) {
            if (void 0 === e2)
              throw new Error("Image buffer must be defined");
            if (void 0 === t2.height || void 0 === t2.width)
              throw new Error("Image height and width must be defined");
            const { height: r2, width: n2 } = t2, o2 = t2.norm;
            let i2, a2;
            i2 = void 0 === o2 || void 0 === o2.mean ? 255 : o2.mean, a2 = void 0 === o2 || void 0 === o2.bias ? 0 : o2.bias;
            const s2 = void 0 !== t2.bitmapFormat ? t2.bitmapFormat : "RGBA", d2 = void 0 !== t2.tensorFormat && void 0 !== t2.tensorFormat ? t2.tensorFormat : "RGB", f2 = r2 * n2, g2 = "RGBA" === d2 ? new Float32Array(4 * f2) : new Float32Array(3 * f2);
            let m2 = 4, c2 = 0, l2 = 1, w2 = 2, u = 3, p = 0, y = f2, b = 2 * f2, v = -1;
            "RGB" === s2 && (m2 = 3, c2 = 0, l2 = 1, w2 = 2, u = -1), "RGBA" === d2 ? v = 3 * f2 : "RBG" === d2 ? (p = 0, b = f2, y = 2 * f2) : "BGR" === d2 && (b = 0, y = f2, p = 2 * f2);
            for (let t3 = 0; t3 < f2; t3++, c2 += m2, w2 += m2, l2 += m2, u += m2)
              g2[p++] = (e2[c2] + a2) / i2, g2[y++] = (e2[l2] + a2) / i2, g2[b++] = (e2[w2] + a2) / i2, -1 !== v && -1 !== u && (g2[v++] = (e2[u] + a2) / i2);
            return new h("float32", g2, "RGBA" === d2 ? [1, 4, r2, n2] : [1, 3, r2, n2]);
          }
          static async fromImage(e2, t2) {
            const r2 = "undefined" != typeof HTMLImageElement && e2 instanceof HTMLImageElement, n2 = "undefined" != typeof ImageData && e2 instanceof ImageData, o2 = "undefined" != typeof ImageBitmap && e2 instanceof ImageBitmap, i2 = "undefined" != typeof String && (e2 instanceof String || "string" == typeof e2);
            let a2, s2 = {};
            if (r2) {
              const r3 = document.createElement("canvas"), n3 = r3.getContext("2d");
              if (null == n3)
                throw new Error("Can not access image data");
              {
                let o3 = e2.naturalHeight, i3 = e2.naturalWidth;
                if (void 0 !== t2 && void 0 !== t2.resizedHeight && void 0 !== t2.resizedWidth && (o3 = t2.resizedHeight, i3 = t2.resizedWidth), void 0 !== t2) {
                  if (s2 = t2, void 0 !== t2.tensorFormat)
                    throw new Error("Image input config format must be RGBA for HTMLImageElement");
                  if (s2.tensorFormat = "RGBA", void 0 !== t2.height && t2.height !== o3)
                    throw new Error("Image input config height doesn't match HTMLImageElement height");
                  if (s2.height = o3, void 0 !== t2.width && t2.width !== i3)
                    throw new Error("Image input config width doesn't match HTMLImageElement width");
                  s2.width = i3;
                } else
                  s2.tensorFormat = "RGBA", s2.height = o3, s2.width = i3;
                r3.width = i3, r3.height = o3, n3.drawImage(e2, 0, 0, i3, o3), a2 = n3.getImageData(0, 0, i3, o3).data;
              }
            } else {
              if (!n2) {
                if (o2) {
                  if (void 0 === t2)
                    throw new Error("Please provide image config with format for Imagebitmap");
                  if (void 0 !== t2.bitmapFormat)
                    throw new Error("Image input config format must be defined for ImageBitmap");
                  const r3 = document.createElement("canvas").getContext("2d");
                  if (null != r3) {
                    const n3 = e2.height, o3 = e2.width;
                    if (r3.drawImage(e2, 0, 0, o3, n3), a2 = r3.getImageData(0, 0, o3, n3).data, void 0 !== t2) {
                      if (void 0 !== t2.height && t2.height !== n3)
                        throw new Error("Image input config height doesn't match ImageBitmap height");
                      if (s2.height = n3, void 0 !== t2.width && t2.width !== o3)
                        throw new Error("Image input config width doesn't match ImageBitmap width");
                      s2.width = o3;
                    } else
                      s2.height = n3, s2.width = o3;
                    return h.bufferToTensor(a2, s2);
                  }
                  throw new Error("Can not access image data");
                }
                if (i2)
                  return new Promise((r3, n3) => {
                    const o3 = document.createElement("canvas"), i3 = o3.getContext("2d");
                    if (!e2 || !i3)
                      return n3();
                    const a3 = new Image();
                    a3.crossOrigin = "Anonymous", a3.src = e2, a3.onload = () => {
                      o3.width = a3.width, o3.height = a3.height, i3.drawImage(a3, 0, 0, o3.width, o3.height);
                      const e3 = i3.getImageData(0, 0, o3.width, o3.height);
                      if (void 0 !== t2) {
                        if (void 0 !== t2.height && t2.height !== o3.height)
                          throw new Error("Image input config height doesn't match ImageBitmap height");
                        if (s2.height = o3.height, void 0 !== t2.width && t2.width !== o3.width)
                          throw new Error("Image input config width doesn't match ImageBitmap width");
                        s2.width = o3.width;
                      } else
                        s2.height = o3.height, s2.width = o3.width;
                      r3(h.bufferToTensor(e3.data, s2));
                    };
                  });
                throw new Error("Input data provided is not supported - aborted tensor creation");
              }
              {
                const r3 = "RGBA";
                let n3, o3;
                if (void 0 !== t2 && void 0 !== t2.resizedWidth && void 0 !== t2.resizedHeight ? (n3 = t2.resizedHeight, o3 = t2.resizedWidth) : (n3 = e2.height, o3 = e2.width), void 0 !== t2) {
                  if (s2 = t2, void 0 !== t2.bitmapFormat && t2.bitmapFormat !== r3)
                    throw new Error("Image input config format must be RGBA for ImageData");
                  s2.bitmapFormat = "RGBA";
                } else
                  s2.bitmapFormat = "RGBA";
                if (s2.height = n3, s2.width = o3, void 0 !== t2) {
                  const t3 = document.createElement("canvas");
                  t3.width = o3, t3.height = n3;
                  const r4 = t3.getContext("2d");
                  if (null == r4)
                    throw new Error("Can not access image data");
                  r4.putImageData(e2, 0, 0), a2 = r4.getImageData(0, 0, o3, n3).data;
                } else
                  a2 = e2.data;
              }
            }
            if (void 0 !== a2)
              return h.bufferToTensor(a2, s2);
            throw new Error("Input data provided is not supported - aborted tensor creation");
          }
          toImageData(e2) {
            var t2, r2;
            const n2 = document.createElement("canvas").getContext("2d");
            let o2;
            if (null == n2)
              throw new Error("Can not access image data");
            {
              const i2 = this.dims[3], a2 = this.dims[2], s2 = this.dims[1], d2 = void 0 !== e2 && void 0 !== e2.format ? e2.format : "RGB", f2 = void 0 !== e2 && void 0 !== (null === (t2 = e2.norm) || void 0 === t2 ? void 0 : t2.mean) ? e2.norm.mean : 255, h2 = void 0 !== e2 && void 0 !== (null === (r2 = e2.norm) || void 0 === r2 ? void 0 : r2.bias) ? e2.norm.bias : 0, g2 = a2 * i2;
              if (void 0 !== e2) {
                if (void 0 !== e2.height && e2.height !== a2)
                  throw new Error("Image output config height doesn't match tensor height");
                if (void 0 !== e2.width && e2.width !== i2)
                  throw new Error("Image output config width doesn't match tensor width");
                if (void 0 !== e2.format && 4 === s2 && "RGBA" !== e2.format || 3 === s2 && "RGB" !== e2.format && "BGR" !== e2.format)
                  throw new Error("Tensor format doesn't match input tensor dims");
              }
              const m2 = 4;
              let c2 = 0, l2 = 1, w2 = 2, u = 3, p = 0, y = g2, b = 2 * g2, v = -1;
              "RGBA" === d2 ? (p = 0, y = g2, b = 2 * g2, v = 3 * g2) : "RGB" === d2 ? (p = 0, y = g2, b = 2 * g2) : "RBG" === d2 && (p = 0, b = g2, y = 2 * g2), o2 = n2.createImageData(i2, a2);
              for (let e3 = 0; e3 < a2 * i2; c2 += m2, l2 += m2, w2 += m2, u += m2, e3++)
                o2.data[c2] = (this.data[p++] - h2) * f2, o2.data[l2] = (this.data[y++] - h2) * f2, o2.data[w2] = (this.data[b++] - h2) * f2, o2.data[u] = -1 === v ? 255 : (this.data[v++] - h2) * f2;
            }
            return o2;
          }
          reshape(e2) {
            return new h(this.type, this.data, e2);
          }
        }
        const g = h;
        class m {
          constructor(e2) {
            this.handler = e2;
          }
          async run(e2, t2, r2) {
            const n2 = {};
            let o2 = {};
            if ("object" != typeof e2 || null === e2 || e2 instanceof g || Array.isArray(e2))
              throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
            let i2 = true;
            if ("object" == typeof t2) {
              if (null === t2)
                throw new TypeError("Unexpected argument[1]: cannot be null.");
              if (t2 instanceof g)
                throw new TypeError("'fetches' cannot be a Tensor");
              if (Array.isArray(t2)) {
                if (0 === t2.length)
                  throw new TypeError("'fetches' cannot be an empty array.");
                i2 = false;
                for (const e3 of t2) {
                  if ("string" != typeof e3)
                    throw new TypeError("'fetches' must be a string array or an object.");
                  if (-1 === this.outputNames.indexOf(e3))
                    throw new RangeError(`'fetches' contains invalid output name: ${e3}.`);
                  n2[e3] = null;
                }
                if ("object" == typeof r2 && null !== r2)
                  o2 = r2;
                else if (void 0 !== r2)
                  throw new TypeError("'options' must be an object.");
              } else {
                let e3 = false;
                const a3 = Object.getOwnPropertyNames(t2);
                for (const r3 of this.outputNames)
                  if (-1 !== a3.indexOf(r3)) {
                    const o3 = t2[r3];
                    (null === o3 || o3 instanceof g) && (e3 = true, i2 = false, n2[r3] = o3);
                  }
                if (e3) {
                  if ("object" == typeof r2 && null !== r2)
                    o2 = r2;
                  else if (void 0 !== r2)
                    throw new TypeError("'options' must be an object.");
                } else
                  o2 = t2;
              }
            } else if (void 0 !== t2)
              throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
            for (const t3 of this.inputNames)
              if (void 0 === e2[t3])
                throw new Error(`input '${t3}' is missing in 'feeds'.`);
            if (i2)
              for (const e3 of this.outputNames)
                n2[e3] = null;
            const a2 = await this.handler.run(e2, n2, o2), s2 = {};
            for (const e3 in a2)
              Object.hasOwnProperty.call(a2, e3) && (s2[e3] = new g(a2[e3].type, a2[e3].data, a2[e3].dims));
            return s2;
          }
          static async create(e2, t2, o2, i2) {
            let a2, s2 = {};
            if ("string" == typeof e2) {
              if (a2 = e2, "object" == typeof t2 && null !== t2)
                s2 = t2;
              else if (void 0 !== t2)
                throw new TypeError("'options' must be an object.");
            } else if (e2 instanceof Uint8Array) {
              if (a2 = e2, "object" == typeof t2 && null !== t2)
                s2 = t2;
              else if (void 0 !== t2)
                throw new TypeError("'options' must be an object.");
            } else {
              if (!(e2 instanceof ArrayBuffer || "undefined" != typeof SharedArrayBuffer && e2 instanceof SharedArrayBuffer))
                throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
              {
                const r2 = e2;
                let n2 = 0, d3 = e2.byteLength;
                if ("object" == typeof t2 && null !== t2)
                  s2 = t2;
                else if ("number" == typeof t2) {
                  if (n2 = t2, !Number.isSafeInteger(n2))
                    throw new RangeError("'byteOffset' must be an integer.");
                  if (n2 < 0 || n2 >= r2.byteLength)
                    throw new RangeError(`'byteOffset' is out of range [0, ${r2.byteLength}).`);
                  if (d3 = e2.byteLength - n2, "number" == typeof o2) {
                    if (d3 = o2, !Number.isSafeInteger(d3))
                      throw new RangeError("'byteLength' must be an integer.");
                    if (d3 <= 0 || n2 + d3 > r2.byteLength)
                      throw new RangeError(`'byteLength' is out of range (0, ${r2.byteLength - n2}].`);
                    if ("object" == typeof i2 && null !== i2)
                      s2 = i2;
                    else if (void 0 !== i2)
                      throw new TypeError("'options' must be an object.");
                  } else if (void 0 !== o2)
                    throw new TypeError("'byteLength' must be a number.");
                } else if (void 0 !== t2)
                  throw new TypeError("'options' must be an object.");
                a2 = new Uint8Array(r2, n2, d3);
              }
            }
            const d2 = (s2.executionProviders || []).map((e3) => "string" == typeof e3 ? e3 : e3.name), f2 = await (async (e3) => {
              const t3 = 0 === e3.length ? n : e3, o3 = [];
              for (const e4 of t3) {
                const t4 = r[e4];
                if (t4) {
                  if (t4.initialized)
                    return t4.backend;
                  if (t4.aborted)
                    continue;
                  const r2 = !!t4.initPromise;
                  try {
                    return r2 || (t4.initPromise = t4.backend.init()), await t4.initPromise, t4.initialized = true, t4.backend;
                  } catch (n2) {
                    r2 || o3.push({ name: e4, err: n2 }), t4.aborted = true;
                  } finally {
                    delete t4.initPromise;
                  }
                }
              }
              throw new Error(`no available backend found. ERR: ${o3.map((e4) => `[${e4.name}] ${e4.err}`).join(", ")}`);
            })(d2), h2 = await f2.createSessionHandler(a2, s2);
            return new m(h2);
          }
          startProfiling() {
            this.handler.startProfiling();
          }
          endProfiling() {
            this.handler.endProfiling();
          }
          get inputNames() {
            return this.handler.inputNames;
          }
          get outputNames() {
            return this.handler.outputNames;
          }
        }
        const c = m;
        var l = exports2;
        for (var w in t)
          l[w] = t[w];
        t.__esModule && Object.defineProperty(l, "__esModule", { value: true });
      })();
    }
  });

  // ../../node_modules/onnxruntime-web/dist/ort-web.min.js
  var require_ort_web_min = __commonJS({
    "../../node_modules/onnxruntime-web/dist/ort-web.min.js"(exports, module) {
      !function(t, e) {
        if ("object" == typeof exports && "object" == typeof module)
          module.exports = e(require_ort_common_node());
        else if ("function" == typeof define && define.amd)
          define([], e);
        else {
          var n = "object" == typeof exports ? e(require_ort_common_node()) : e(t.ort);
          for (var r in n)
            ("object" == typeof exports ? exports : t)[r] = n[r];
        }
      }(self, (__WEBPACK_EXTERNAL_MODULE__1670__) => (() => {
        var __webpack_modules__ = { 3474: (t, e, n) => {
          var _scriptDir, r = (_scriptDir = (_scriptDir = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(t2) {
            function e2() {
              return $.buffer != C && H($.buffer), F;
            }
            function r2() {
              return $.buffer != C && H($.buffer), N;
            }
            function i() {
              return $.buffer != C && H($.buffer), L;
            }
            function o() {
              return $.buffer != C && H($.buffer), R;
            }
            function a() {
              return $.buffer != C && H($.buffer), j;
            }
            var s, u, c;
            t2 = t2 || {}, s || (s = void 0 !== t2 ? t2 : {}), s.ready = new Promise(function(t3, e3) {
              u = t3, c = e3;
            });
            var l, p, f, d, h, g, b = Object.assign({}, s), m = "./this.program", y = (t3, e3) => {
              throw e3;
            }, _ = "object" == typeof window, v = "function" == typeof importScripts, w = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, x = s.ENVIRONMENT_IS_PTHREAD || false, T = "";
            function S(t3) {
              return s.locateFile ? s.locateFile(t3, T) : T + t3;
            }
            if (w) {
              let e3;
              T = v ? n(908).dirname(T) + "/" : "//", g = () => {
                h || (d = n(1384), h = n(908));
              }, l = function(t3, e4) {
                return g(), t3 = h.normalize(t3), d.readFileSync(t3, e4 ? void 0 : "utf8");
              }, f = (t3) => ((t3 = l(t3, true)).buffer || (t3 = new Uint8Array(t3)), t3), p = (t3, e4, n2) => {
                g(), t3 = h.normalize(t3), d.readFile(t3, function(t4, r3) {
                  t4 ? n2(t4) : e4(r3.buffer);
                });
              }, 1 < process.argv.length && (m = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(t3) {
                if (!(t3 instanceof ut))
                  throw t3;
              }), process.on("unhandledRejection", function(t3) {
                throw t3;
              }), y = (t3, e4) => {
                if (J())
                  throw process.exitCode = t3, e4;
                e4 instanceof ut || P("exiting due to exception: " + e4), process.exit(t3);
              }, s.inspect = function() {
                return "[Emscripten Module object]";
              };
              try {
                e3 = n(9925);
              } catch (t3) {
                throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'), t3;
              }
              n.g.Worker = e3.Worker;
            } else
              (_ || v) && (v ? T = self.location.href : "undefined" != typeof document && document.currentScript && (T = document.currentScript.src), _scriptDir && (T = _scriptDir), T = 0 !== T.indexOf("blob:") ? T.substr(0, T.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", w || (l = (t3) => {
                var e3 = new XMLHttpRequest();
                return e3.open("GET", t3, false), e3.send(null), e3.responseText;
              }, v && (f = (t3) => {
                var e3 = new XMLHttpRequest();
                return e3.open("GET", t3, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
              }), p = (t3, e3, n2) => {
                var r3 = new XMLHttpRequest();
                r3.open("GET", t3, true), r3.responseType = "arraybuffer", r3.onload = () => {
                  200 == r3.status || 0 == r3.status && r3.response ? e3(r3.response) : n2();
                }, r3.onerror = n2, r3.send(null);
              }));
            w && "undefined" == typeof performance && (n.g.performance = n(6953).performance);
            var O = console.log.bind(console), A = console.warn.bind(console);
            w && (g(), O = (t3) => d.writeSync(1, t3 + "\n"), A = (t3) => d.writeSync(2, t3 + "\n"));
            var E, I = s.print || O, P = s.printErr || A;
            Object.assign(s, b), b = null, s.thisProgram && (m = s.thisProgram), s.quit && (y = s.quit), s.wasmBinary && (E = s.wasmBinary);
            var D = s.noExitRuntime || false;
            "object" != typeof WebAssembly && it("no native wasm support detected");
            var $, k, C, F, N, L, R, j, M = false, U = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function V(t3, e3, n2) {
              var r3 = (e3 >>>= 0) + n2;
              for (n2 = e3; t3[n2] && !(n2 >= r3); )
                ++n2;
              if (16 < n2 - e3 && t3.buffer && U)
                return U.decode(t3.buffer instanceof SharedArrayBuffer ? t3.slice(e3, n2) : t3.subarray(e3, n2));
              for (r3 = ""; e3 < n2; ) {
                var i2 = t3[e3++];
                if (128 & i2) {
                  var o2 = 63 & t3[e3++];
                  if (192 == (224 & i2))
                    r3 += String.fromCharCode((31 & i2) << 6 | o2);
                  else {
                    var a2 = 63 & t3[e3++];
                    65536 > (i2 = 224 == (240 & i2) ? (15 & i2) << 12 | o2 << 6 | a2 : (7 & i2) << 18 | o2 << 12 | a2 << 6 | 63 & t3[e3++]) ? r3 += String.fromCharCode(i2) : (i2 -= 65536, r3 += String.fromCharCode(55296 | i2 >> 10, 56320 | 1023 & i2));
                  }
                } else
                  r3 += String.fromCharCode(i2);
              }
              return r3;
            }
            function B(t3, e3) {
              return (t3 >>>= 0) ? V(r2(), t3, e3) : "";
            }
            function z(t3, e3, n2, r3) {
              if (!(0 < r3))
                return 0;
              var i2 = n2 >>>= 0;
              r3 = n2 + r3 - 1;
              for (var o2 = 0; o2 < t3.length; ++o2) {
                var a2 = t3.charCodeAt(o2);
                if (55296 <= a2 && 57343 >= a2 && (a2 = 65536 + ((1023 & a2) << 10) | 1023 & t3.charCodeAt(++o2)), 127 >= a2) {
                  if (n2 >= r3)
                    break;
                  e3[n2++ >>> 0] = a2;
                } else {
                  if (2047 >= a2) {
                    if (n2 + 1 >= r3)
                      break;
                    e3[n2++ >>> 0] = 192 | a2 >> 6;
                  } else {
                    if (65535 >= a2) {
                      if (n2 + 2 >= r3)
                        break;
                      e3[n2++ >>> 0] = 224 | a2 >> 12;
                    } else {
                      if (n2 + 3 >= r3)
                        break;
                      e3[n2++ >>> 0] = 240 | a2 >> 18, e3[n2++ >>> 0] = 128 | a2 >> 12 & 63;
                    }
                    e3[n2++ >>> 0] = 128 | a2 >> 6 & 63;
                  }
                  e3[n2++ >>> 0] = 128 | 63 & a2;
                }
              }
              return e3[n2 >>> 0] = 0, n2 - i2;
            }
            function G(t3) {
              for (var e3 = 0, n2 = 0; n2 < t3.length; ++n2) {
                var r3 = t3.charCodeAt(n2);
                127 >= r3 ? e3++ : 2047 >= r3 ? e3 += 2 : 55296 <= r3 && 57343 >= r3 ? (e3 += 4, ++n2) : e3 += 3;
              }
              return e3;
            }
            function H(t3) {
              C = t3, s.HEAP8 = F = new Int8Array(t3), s.HEAP16 = new Int16Array(t3), s.HEAP32 = L = new Int32Array(t3), s.HEAPU8 = N = new Uint8Array(t3), s.HEAPU16 = new Uint16Array(t3), s.HEAPU32 = R = new Uint32Array(t3), s.HEAPF32 = new Float32Array(t3), s.HEAPF64 = j = new Float64Array(t3);
            }
            x && (C = s.buffer);
            var W = s.INITIAL_MEMORY || 16777216;
            if (x)
              $ = s.wasmMemory, C = s.buffer;
            else if (s.wasmMemory)
              $ = s.wasmMemory;
            else if (!(($ = new WebAssembly.Memory({ initial: W / 65536, maximum: 65536, shared: true })).buffer instanceof SharedArrayBuffer))
              throw P("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), w && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");
            $ && (C = $.buffer), W = C.byteLength, H(C);
            var q, X = [], Y = [], K = [], Z = [];
            function J() {
              return D || false;
            }
            function Q() {
              var t3 = s.preRun.shift();
              X.unshift(t3);
            }
            var tt, et = 0, nt = null, rt = null;
            function it(t3) {
              throw x ? postMessage({ cmd: "onAbort", arg: t3 }) : s.onAbort && s.onAbort(t3), P(t3 = "Aborted(" + t3 + ")"), M = true, t3 = new WebAssembly.RuntimeError(t3 + ". Build with -sASSERTIONS for more info."), c(t3), t3;
            }
            function ot() {
              return tt.startsWith("data:application/octet-stream;base64,");
            }
            function at() {
              var t3 = tt;
              try {
                if (t3 == tt && E)
                  return new Uint8Array(E);
                if (f)
                  return f(t3);
                throw "both async and sync fetching of the wasm failed";
              } catch (t4) {
                it(t4);
              }
            }
            tt = "ort-wasm-threaded.wasm", ot() || (tt = S(tt));
            var st = {};
            function ut(t3) {
              this.name = "ExitStatus", this.message = "Program terminated with exit(" + t3 + ")", this.status = t3;
            }
            function ct(t3) {
              (t3 = dt.Vb[t3]) || it(), dt.mc(t3);
            }
            function lt(t3) {
              var e3 = dt.Cc();
              if (!e3)
                return 6;
              dt.ac.push(e3), dt.Vb[t3.Ub] = e3, e3.Ub = t3.Ub;
              var n2 = { cmd: "run", start_routine: t3.Ic, arg: t3.zc, pthread_ptr: t3.Ub };
              return e3.$b = () => {
                n2.time = performance.now(), e3.postMessage(n2, t3.Nc);
              }, e3.loaded && (e3.$b(), delete e3.$b), 0;
            }
            function pt(t3) {
              if (x)
                return qt(1, 1, t3);
              J() || (dt.oc(), s.onExit && s.onExit(t3), M = true), y(t3, new ut(t3));
            }
            function ft(t3, e3) {
              if (!e3 && x)
                throw bt(t3), "unwind";
              J() || x || (me(), ht(K), be(0), re[1].length && ie(1, 10), re[2].length && ie(2, 10), dt.oc()), pt(t3);
            }
            var dt = { Yb: [], ac: [], qc: [], Vb: {}, fc: function() {
              x && dt.Ec();
            }, Pc: function() {
            }, Ec: function() {
              dt.receiveObjectTransfer = dt.Gc, dt.threadInitTLS = dt.pc, dt.setExitStatus = dt.nc, D = false;
            }, nc: function() {
            }, oc: function() {
              for (var t3 of Object.values(dt.Vb))
                dt.mc(t3);
              for (t3 of dt.Yb)
                t3.terminate();
              dt.Yb = [];
            }, mc: function(t3) {
              var e3 = t3.Ub;
              delete dt.Vb[e3], dt.Yb.push(t3), dt.ac.splice(dt.ac.indexOf(t3), 1), t3.Ub = 0, xe(e3);
            }, Gc: function() {
            }, pc: function() {
              dt.qc.forEach((t3) => t3());
            }, Fc: function(t3, e3) {
              t3.onmessage = (n2) => {
                var r3 = (n2 = n2.data).cmd;
                if (t3.Ub && (dt.Bc = t3.Ub), n2.targetThread && n2.targetThread != de()) {
                  var i2 = dt.Vb[n2.Qc];
                  i2 ? i2.postMessage(n2, n2.transferList) : P('Internal error! Worker sent a message "' + r3 + '" to target pthread ' + n2.targetThread + ", but that thread no longer exists!");
                } else
                  "processProxyingQueue" === r3 ? Vt(n2.queue) : "spawnThread" === r3 ? lt(n2) : "cleanupThread" === r3 ? ct(n2.thread) : "killThread" === r3 ? (n2 = n2.thread, r3 = dt.Vb[n2], delete dt.Vb[n2], r3.terminate(), xe(n2), dt.ac.splice(dt.ac.indexOf(r3), 1), r3.Ub = 0) : "cancelThread" === r3 ? dt.Vb[n2.thread].postMessage({ cmd: "cancel" }) : "loaded" === r3 ? (t3.loaded = true, e3 && e3(t3), t3.$b && (t3.$b(), delete t3.$b)) : "print" === r3 ? I("Thread " + n2.threadId + ": " + n2.text) : "printErr" === r3 ? P("Thread " + n2.threadId + ": " + n2.text) : "alert" === r3 ? alert("Thread " + n2.threadId + ": " + n2.text) : "setimmediate" === n2.target ? t3.postMessage(n2) : "onAbort" === r3 ? s.onAbort && s.onAbort(n2.arg) : r3 && P("worker sent an unknown command " + r3);
                dt.Bc = void 0;
              }, t3.onerror = (t4) => {
                throw P("worker sent an error! " + t4.filename + ":" + t4.lineno + ": " + t4.message), t4;
              }, w && (t3.on("message", function(e4) {
                t3.onmessage({ data: e4 });
              }), t3.on("error", function(e4) {
                t3.onerror(e4);
              }), t3.on("detachedExit", function() {
              })), t3.postMessage({ cmd: "load", urlOrBlob: s.mainScriptUrlOrBlob || _scriptDir, wasmMemory: $, wasmModule: k });
            }, yc: function() {
              var t3 = S("ort-wasm-threaded.worker.js");
              dt.Yb.push(new Worker(t3));
            }, Cc: function() {
              return 0 == dt.Yb.length && (dt.yc(), dt.Fc(dt.Yb[0])), dt.Yb.pop();
            } };
            function ht(t3) {
              for (; 0 < t3.length; )
                t3.shift()(s);
            }
            function gt(t3) {
              var e3 = Ae();
              return t3 = t3(), Ee(e3), t3;
            }
            function bt(t3) {
              if (x)
                return qt(2, 0, t3);
              try {
                ft(t3);
              } catch (t4) {
                t4 instanceof ut || "unwind" == t4 || y(1, t4);
              }
            }
            s.PThread = dt, s.establishStackSpace = function() {
              var t3 = de(), e3 = i()[t3 + 44 >> 2 >>> 0];
              t3 = i()[t3 + 48 >> 2 >>> 0], Oe(e3, e3 - t3), Ee(e3);
            };
            var mt = [];
            function yt(t3) {
              var e3 = mt[t3];
              return e3 || (t3 >= mt.length && (mt.length = t3 + 1), mt[t3] = e3 = q.get(t3)), e3;
            }
            s.invokeEntryPoint = function(t3, e3) {
              t3 = yt(t3)(e3), J() ? dt.nc(t3) : Te(t3);
            };
            var _t, vt, wt = [], xt = 0, Tt = 0;
            function St(t3) {
              this.Zb = t3, this.Sb = t3 - 24, this.xc = function(t4) {
                o()[this.Sb + 4 >> 2 >>> 0] = t4;
              }, this.bc = function() {
                return o()[this.Sb + 4 >> 2 >>> 0];
              }, this.wc = function(t4) {
                o()[this.Sb + 8 >> 2 >>> 0] = t4;
              }, this.Dc = function() {
                return o()[this.Sb + 8 >> 2 >>> 0];
              }, this.rc = function() {
                i()[this.Sb >> 2 >>> 0] = 0;
              }, this.hc = function(t4) {
                t4 = t4 ? 1 : 0, e2()[this.Sb + 12 >> 0 >>> 0] = t4;
              }, this.uc = function() {
                return 0 != e2()[this.Sb + 12 >> 0 >>> 0];
              }, this.ic = function(t4) {
                t4 = t4 ? 1 : 0, e2()[this.Sb + 13 >> 0 >>> 0] = t4;
              }, this.kc = function() {
                return 0 != e2()[this.Sb + 13 >> 0 >>> 0];
              }, this.fc = function(t4, e3) {
                this.cc(0), this.xc(t4), this.wc(e3), this.rc(), this.hc(false), this.ic(false);
              }, this.sc = function() {
                Atomics.add(i(), this.Sb >> 2, 1);
              }, this.Hc = function() {
                return 1 === Atomics.sub(i(), this.Sb >> 2, 1);
              }, this.cc = function(t4) {
                o()[this.Sb + 16 >> 2 >>> 0] = t4;
              }, this.tc = function() {
                return o()[this.Sb + 16 >> 2 >>> 0];
              }, this.vc = function() {
                if (De(this.bc()))
                  return o()[this.Zb >> 2 >>> 0];
                var t4 = this.tc();
                return 0 !== t4 ? t4 : this.Zb;
              };
            }
            function Ot(t3) {
              return ge(new St(t3).Sb);
            }
            function At(t3, e3, n2, r3) {
              return x ? qt(3, 1, t3, e3, n2, r3) : Et(t3, e3, n2, r3);
            }
            function Et(t3, e3, n2, r3) {
              if ("undefined" == typeof SharedArrayBuffer)
                return P("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
              var i2 = [];
              return x && 0 === i2.length ? At(t3, e3, n2, r3) : (t3 = { Ic: n2, Ub: t3, zc: r3, Nc: i2 }, x ? (t3.Oc = "spawnThread", postMessage(t3, i2), 0) : lt(t3));
            }
            function It(t3, e3, n2) {
              return x ? qt(4, 1, t3, e3, n2) : 0;
            }
            function Pt(t3, e3) {
              if (x)
                return qt(5, 1, t3, e3);
            }
            function Dt(t3, e3) {
              if (x)
                return qt(6, 1, t3, e3);
            }
            function $t(t3, e3, n2) {
              if (x)
                return qt(7, 1, t3, e3, n2);
            }
            function kt(t3, e3, n2) {
              return x ? qt(8, 1, t3, e3, n2) : 0;
            }
            function Ct(t3, e3) {
              if (x)
                return qt(9, 1, t3, e3);
            }
            function Ft(t3, e3, n2) {
              if (x)
                return qt(10, 1, t3, e3, n2);
            }
            function Nt(t3, e3, n2, r3) {
              if (x)
                return qt(11, 1, t3, e3, n2, r3);
            }
            function Lt(t3, e3, n2, r3) {
              if (x)
                return qt(12, 1, t3, e3, n2, r3);
            }
            function Rt(t3, e3, n2, r3) {
              if (x)
                return qt(13, 1, t3, e3, n2, r3);
            }
            function jt(t3) {
              if (x)
                return qt(14, 1, t3);
            }
            function Mt(t3, e3) {
              if (x)
                return qt(15, 1, t3, e3);
            }
            function Ut(t3, e3, n2) {
              if (x)
                return qt(16, 1, t3, e3, n2);
            }
            function Vt(t3) {
              Atomics.store(i(), t3 >> 2, 1), de() && we(t3), Atomics.compareExchange(i(), t3 >> 2, 1, 0);
            }
            function Bt(t3) {
              return o()[t3 >>> 2] + 4294967296 * i()[t3 + 4 >>> 2];
            }
            function zt(t3, e3, n2, r3, i2, o2) {
              return x ? qt(17, 1, t3, e3, n2, r3, i2, o2) : -52;
            }
            function Gt(t3, e3, n2, r3, i2, o2) {
              if (x)
                return qt(18, 1, t3, e3, n2, r3, i2, o2);
            }
            function Ht(t3) {
              var n2 = G(t3) + 1, r3 = he(n2);
              return r3 && z(t3, e2(), r3, n2), r3;
            }
            function Wt(t3, e3, n2) {
              function r3(t4) {
                return (t4 = t4.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? t4[1] : "GMT";
              }
              if (x)
                return qt(19, 1, t3, e3, n2);
              var a2 = (/* @__PURE__ */ new Date()).getFullYear(), s2 = new Date(a2, 0, 1), u2 = new Date(a2, 6, 1);
              a2 = s2.getTimezoneOffset();
              var c2 = u2.getTimezoneOffset(), l2 = Math.max(a2, c2);
              i()[t3 >> 2 >>> 0] = 60 * l2, i()[e3 >> 2 >>> 0] = Number(a2 != c2), t3 = r3(s2), e3 = r3(u2), t3 = Ht(t3), e3 = Ht(e3), c2 < a2 ? (o()[n2 >> 2 >>> 0] = t3, o()[n2 + 4 >> 2 >>> 0] = e3) : (o()[n2 >> 2 >>> 0] = e3, o()[n2 + 4 >> 2 >>> 0] = t3);
            }
            function qt(t3, e3) {
              var n2 = arguments.length - 2, r3 = arguments;
              return gt(() => {
                for (var i2 = Ie(8 * n2), o2 = i2 >> 3, s2 = 0; s2 < n2; s2++) {
                  var u2 = r3[2 + s2];
                  a()[o2 + s2 >>> 0] = u2;
                }
                return ve(t3, n2, i2, e3);
              });
            }
            s.executeNotifiedProxyingQueue = Vt, vt = w ? () => {
              var t3 = process.hrtime();
              return 1e3 * t3[0] + t3[1] / 1e6;
            } : x ? () => performance.now() - s.__performance_now_clock_drift : () => performance.now();
            var Xt, Yt = [], Kt = {};
            function Zt() {
              if (!Xt) {
                var t3, e3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: m || "./this.program" };
                for (t3 in Kt)
                  void 0 === Kt[t3] ? delete e3[t3] : e3[t3] = Kt[t3];
                var n2 = [];
                for (t3 in e3)
                  n2.push(t3 + "=" + e3[t3]);
                Xt = n2;
              }
              return Xt;
            }
            function Jt(t3, n2) {
              if (x)
                return qt(20, 1, t3, n2);
              var r3 = 0;
              return Zt().forEach(function(i2, a2) {
                var s2 = n2 + r3;
                for (a2 = o()[t3 + 4 * a2 >> 2 >>> 0] = s2, s2 = 0; s2 < i2.length; ++s2)
                  e2()[a2++ >> 0 >>> 0] = i2.charCodeAt(s2);
                e2()[a2 >> 0 >>> 0] = 0, r3 += i2.length + 1;
              }), 0;
            }
            function Qt(t3, e3) {
              if (x)
                return qt(21, 1, t3, e3);
              var n2 = Zt();
              o()[t3 >> 2 >>> 0] = n2.length;
              var r3 = 0;
              return n2.forEach(function(t4) {
                r3 += t4.length + 1;
              }), o()[e3 >> 2 >>> 0] = r3, 0;
            }
            function te(t3) {
              return x ? qt(22, 1, t3) : 52;
            }
            function ee(t3, e3, n2, r3) {
              return x ? qt(23, 1, t3, e3, n2, r3) : 52;
            }
            function ne(t3, e3, n2, r3, i2) {
              return x ? qt(24, 1, t3, e3, n2, r3, i2) : 70;
            }
            var re = [null, [], []];
            function ie(t3, e3) {
              var n2 = re[t3];
              0 === e3 || 10 === e3 ? ((1 === t3 ? I : P)(V(n2, 0)), n2.length = 0) : n2.push(e3);
            }
            function oe(t3, e3, n2, i2) {
              if (x)
                return qt(25, 1, t3, e3, n2, i2);
              for (var a2 = 0, s2 = 0; s2 < n2; s2++) {
                var u2 = o()[e3 >> 2 >>> 0], c2 = o()[e3 + 4 >> 2 >>> 0];
                e3 += 8;
                for (var l2 = 0; l2 < c2; l2++)
                  ie(t3, r2()[u2 + l2 >>> 0]);
                a2 += c2;
              }
              return o()[i2 >> 2 >>> 0] = a2, 0;
            }
            var ae = 0;
            function se(t3) {
              return 0 == t3 % 4 && (0 != t3 % 100 || 0 == t3 % 400);
            }
            var ue = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ce = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function le(t3, n2, r3, o2) {
              function a2(t4, e3, n3) {
                for (t4 = "number" == typeof t4 ? t4.toString() : t4 || ""; t4.length < e3; )
                  t4 = n3[0] + t4;
                return t4;
              }
              function s2(t4, e3) {
                return a2(t4, e3, "0");
              }
              function u2(t4, e3) {
                function n3(t5) {
                  return 0 > t5 ? -1 : 0 < t5 ? 1 : 0;
                }
                var r4;
                return 0 === (r4 = n3(t4.getFullYear() - e3.getFullYear())) && 0 === (r4 = n3(t4.getMonth() - e3.getMonth())) && (r4 = n3(t4.getDate() - e3.getDate())), r4;
              }
              function c2(t4) {
                switch (t4.getDay()) {
                  case 0:
                    return new Date(t4.getFullYear() - 1, 11, 29);
                  case 1:
                    return t4;
                  case 2:
                    return new Date(t4.getFullYear(), 0, 3);
                  case 3:
                    return new Date(t4.getFullYear(), 0, 2);
                  case 4:
                    return new Date(t4.getFullYear(), 0, 1);
                  case 5:
                    return new Date(t4.getFullYear() - 1, 11, 31);
                  case 6:
                    return new Date(t4.getFullYear() - 1, 11, 30);
                }
              }
              function l2(t4) {
                var e3 = t4.Wb;
                for (t4 = new Date(new Date(t4.Xb + 1900, 0, 1).getTime()); 0 < e3; ) {
                  var n3 = t4.getMonth(), r4 = (se(t4.getFullYear()) ? ue : ce)[n3];
                  if (!(e3 > r4 - t4.getDate())) {
                    t4.setDate(t4.getDate() + e3);
                    break;
                  }
                  e3 -= r4 - t4.getDate() + 1, t4.setDate(1), 11 > n3 ? t4.setMonth(n3 + 1) : (t4.setMonth(0), t4.setFullYear(t4.getFullYear() + 1));
                }
                return n3 = new Date(t4.getFullYear() + 1, 0, 4), e3 = c2(new Date(t4.getFullYear(), 0, 4)), n3 = c2(n3), 0 >= u2(e3, t4) ? 0 >= u2(n3, t4) ? t4.getFullYear() + 1 : t4.getFullYear() : t4.getFullYear() - 1;
              }
              var p2 = i()[o2 + 40 >> 2 >>> 0];
              for (var f2 in o2 = { Lc: i()[o2 >> 2 >>> 0], Kc: i()[o2 + 4 >> 2 >>> 0], dc: i()[o2 + 8 >> 2 >>> 0], jc: i()[o2 + 12 >> 2 >>> 0], ec: i()[o2 + 16 >> 2 >>> 0], Xb: i()[o2 + 20 >> 2 >>> 0], Tb: i()[o2 + 24 >> 2 >>> 0], Wb: i()[o2 + 28 >> 2 >>> 0], Rc: i()[o2 + 32 >> 2 >>> 0], Jc: i()[o2 + 36 >> 2 >>> 0], Mc: p2 ? B(p2) : "" }, r3 = B(r3), p2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" })
                r3 = r3.replace(new RegExp(f2, "g"), p2[f2]);
              var d2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), h2 = "January February March April May June July August September October November December".split(" ");
              for (f2 in p2 = { "%a": function(t4) {
                return d2[t4.Tb].substring(0, 3);
              }, "%A": function(t4) {
                return d2[t4.Tb];
              }, "%b": function(t4) {
                return h2[t4.ec].substring(0, 3);
              }, "%B": function(t4) {
                return h2[t4.ec];
              }, "%C": function(t4) {
                return s2((t4.Xb + 1900) / 100 | 0, 2);
              }, "%d": function(t4) {
                return s2(t4.jc, 2);
              }, "%e": function(t4) {
                return a2(t4.jc, 2, " ");
              }, "%g": function(t4) {
                return l2(t4).toString().substring(2);
              }, "%G": function(t4) {
                return l2(t4);
              }, "%H": function(t4) {
                return s2(t4.dc, 2);
              }, "%I": function(t4) {
                return 0 == (t4 = t4.dc) ? t4 = 12 : 12 < t4 && (t4 -= 12), s2(t4, 2);
              }, "%j": function(t4) {
                for (var e3 = 0, n3 = 0; n3 <= t4.ec - 1; e3 += (se(t4.Xb + 1900) ? ue : ce)[n3++])
                  ;
                return s2(t4.jc + e3, 3);
              }, "%m": function(t4) {
                return s2(t4.ec + 1, 2);
              }, "%M": function(t4) {
                return s2(t4.Kc, 2);
              }, "%n": function() {
                return "\n";
              }, "%p": function(t4) {
                return 0 <= t4.dc && 12 > t4.dc ? "AM" : "PM";
              }, "%S": function(t4) {
                return s2(t4.Lc, 2);
              }, "%t": function() {
                return "	";
              }, "%u": function(t4) {
                return t4.Tb || 7;
              }, "%U": function(t4) {
                return s2(Math.floor((t4.Wb + 7 - t4.Tb) / 7), 2);
              }, "%V": function(t4) {
                var e3 = Math.floor((t4.Wb + 7 - (t4.Tb + 6) % 7) / 7);
                if (2 >= (t4.Tb + 371 - t4.Wb - 2) % 7 && e3++, e3)
                  53 == e3 && (4 == (n3 = (t4.Tb + 371 - t4.Wb) % 7) || 3 == n3 && se(t4.Xb) || (e3 = 1));
                else {
                  e3 = 52;
                  var n3 = (t4.Tb + 7 - t4.Wb - 1) % 7;
                  (4 == n3 || 5 == n3 && se(t4.Xb % 400 - 1)) && e3++;
                }
                return s2(e3, 2);
              }, "%w": function(t4) {
                return t4.Tb;
              }, "%W": function(t4) {
                return s2(Math.floor((t4.Wb + 7 - (t4.Tb + 6) % 7) / 7), 2);
              }, "%y": function(t4) {
                return (t4.Xb + 1900).toString().substring(2);
              }, "%Y": function(t4) {
                return t4.Xb + 1900;
              }, "%z": function(t4) {
                var e3 = 0 <= (t4 = t4.Jc);
                return t4 = Math.abs(t4) / 60, (e3 ? "+" : "-") + String("0000" + (t4 / 60 * 100 + t4 % 60)).slice(-4);
              }, "%Z": function(t4) {
                return t4.Mc;
              }, "%%": function() {
                return "%";
              } }, r3 = r3.replace(/%%/g, "\0\0"), p2)
                r3.includes(f2) && (r3 = r3.replace(new RegExp(f2, "g"), p2[f2](o2)));
              return f2 = function(t4) {
                var e3 = Array(G(t4) + 1);
                return z(t4, e3, 0, e3.length), e3;
              }(r3 = r3.replace(/\0\0/g, "%")), f2.length > n2 ? 0 : (function(t4, n3) {
                e2().set(t4, n3 >>> 0);
              }(f2, t3), f2.length - 1);
            }
            dt.fc();
            var pe = [null, pt, bt, At, It, Pt, Dt, $t, kt, Ct, Ft, Nt, Lt, Rt, jt, Mt, Ut, zt, Gt, Wt, Jt, Qt, te, ee, ne, oe], fe = { b: function(t3) {
              return he(t3 + 24) + 24;
            }, n: function(t3) {
              return (t3 = new St(t3)).uc() || (t3.hc(true), xt--), t3.ic(false), wt.push(t3), t3.sc(), t3.vc();
            }, ma: function(t3) {
              throw P("Unexpected exception thrown, this is not properly supported - aborting"), M = true, t3;
            }, x: function() {
              Se(0);
              var t3 = wt.pop();
              if (t3.Hc() && !t3.kc()) {
                var e3 = t3.Dc();
                e3 && yt(e3)(t3.Zb), Ot(t3.Zb);
              }
              Tt = 0;
            }, e: function() {
              var t3 = Tt;
              if (!t3)
                return ae = 0;
              var e3 = new St(t3);
              e3.cc(t3);
              var n2 = e3.bc();
              if (!n2)
                return ae = 0, t3;
              for (var r3 = Array.prototype.slice.call(arguments), i2 = 0; i2 < r3.length; i2++) {
                var o2 = r3[i2];
                if (0 === o2 || o2 === n2)
                  break;
                if (Pe(o2, n2, e3.Sb + 16))
                  return ae = o2, t3;
              }
              return ae = n2, t3;
            }, l: function() {
              var t3 = Tt;
              if (!t3)
                return ae = 0;
              var e3 = new St(t3);
              e3.cc(t3);
              var n2 = e3.bc();
              if (!n2)
                return ae = 0, t3;
              for (var r3 = Array.prototype.slice.call(arguments), i2 = 0; i2 < r3.length; i2++) {
                var o2 = r3[i2];
                if (0 === o2 || o2 === n2)
                  break;
                if (Pe(o2, n2, e3.Sb + 16))
                  return ae = o2, t3;
              }
              return ae = n2, t3;
            }, h: function() {
              var t3 = Tt;
              if (!t3)
                return ae = 0;
              var e3 = new St(t3);
              e3.cc(t3);
              var n2 = e3.bc();
              if (!n2)
                return ae = 0, t3;
              for (var r3 = Array.prototype.slice.call(arguments), i2 = 0; i2 < r3.length; i2++) {
                var o2 = r3[i2];
                if (0 === o2 || o2 === n2)
                  break;
                if (Pe(o2, n2, e3.Sb + 16))
                  return ae = o2, t3;
              }
              return ae = n2, t3;
            }, t: Ot, M: function() {
              var t3 = wt.pop();
              t3 || it("no exception to throw");
              var e3 = t3.Zb;
              throw t3.kc() || (wt.push(t3), t3.ic(true), t3.hc(false), xt++), Tt = e3, e3;
            }, c: function(t3, e3, n2) {
              throw new St(t3).fc(e3, n2), Tt = t3, xt++, t3;
            }, pa: function() {
              return xt;
            }, Fa: function(t3) {
              ye(t3, !v, 1, !_), dt.pc();
            }, T: function(t3) {
              x ? postMessage({ cmd: "cleanupThread", thread: t3 }) : ct(t3);
            }, xa: Et, j: function(t3) {
              throw Tt || (Tt = t3), t3;
            }, H: It, Ma: Pt, ua: Dt, wa: $t, oa: kt, Ka: Ct, Ca: Ft, Ja: Nt, V: Lt, va: Rt, sa: jt, La: Mt, ta: Ut, Ta: function() {
            }, X: function() {
              it("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }, Ua: function() {
              it("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }, W: function() {
              return Date.now();
            }, ya: function() {
              return 2097152;
            }, Oa: function() {
              return true;
            }, za: function(t3, e3, n2, r3) {
              if (t3 == e3)
                setTimeout(() => Vt(r3));
              else if (x)
                postMessage({ targetThread: t3, cmd: "processProxyingQueue", queue: r3 });
              else {
                if (!(t3 = dt.Vb[t3]))
                  return;
                t3.postMessage({ cmd: "processProxyingQueue", queue: r3 });
              }
              return 1;
            }, Ea: function() {
              return -1;
            }, Pa: function(t3, e3) {
              t3 = new Date(1e3 * Bt(t3)), i()[e3 >> 2 >>> 0] = t3.getUTCSeconds(), i()[e3 + 4 >> 2 >>> 0] = t3.getUTCMinutes(), i()[e3 + 8 >> 2 >>> 0] = t3.getUTCHours(), i()[e3 + 12 >> 2 >>> 0] = t3.getUTCDate(), i()[e3 + 16 >> 2 >>> 0] = t3.getUTCMonth(), i()[e3 + 20 >> 2 >>> 0] = t3.getUTCFullYear() - 1900, i()[e3 + 24 >> 2 >>> 0] = t3.getUTCDay(), t3 = (t3.getTime() - Date.UTC(t3.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, i()[e3 + 28 >> 2 >>> 0] = t3;
            }, Qa: function(t3, e3) {
              t3 = new Date(1e3 * Bt(t3)), i()[e3 >> 2 >>> 0] = t3.getSeconds(), i()[e3 + 4 >> 2 >>> 0] = t3.getMinutes(), i()[e3 + 8 >> 2 >>> 0] = t3.getHours(), i()[e3 + 12 >> 2 >>> 0] = t3.getDate(), i()[e3 + 16 >> 2 >>> 0] = t3.getMonth(), i()[e3 + 20 >> 2 >>> 0] = t3.getFullYear() - 1900, i()[e3 + 24 >> 2 >>> 0] = t3.getDay();
              var n2 = new Date(t3.getFullYear(), 0, 1), r3 = (t3.getTime() - n2.getTime()) / 864e5 | 0;
              i()[e3 + 28 >> 2 >>> 0] = r3, i()[e3 + 36 >> 2 >>> 0] = -60 * t3.getTimezoneOffset(), r3 = new Date(t3.getFullYear(), 6, 1).getTimezoneOffset(), t3 = 0 | (r3 != (n2 = n2.getTimezoneOffset()) && t3.getTimezoneOffset() == Math.min(n2, r3)), i()[e3 + 32 >> 2 >>> 0] = t3;
            }, Ra: function(t3) {
              var e3 = new Date(i()[t3 + 20 >> 2 >>> 0] + 1900, i()[t3 + 16 >> 2 >>> 0], i()[t3 + 12 >> 2 >>> 0], i()[t3 + 8 >> 2 >>> 0], i()[t3 + 4 >> 2 >>> 0], i()[t3 >> 2 >>> 0], 0), n2 = i()[t3 + 32 >> 2 >>> 0], r3 = e3.getTimezoneOffset(), o2 = new Date(e3.getFullYear(), 0, 1), a2 = new Date(e3.getFullYear(), 6, 1).getTimezoneOffset(), s2 = o2.getTimezoneOffset(), u2 = Math.min(s2, a2);
              return 0 > n2 ? i()[t3 + 32 >> 2 >>> 0] = Number(a2 != s2 && u2 == r3) : 0 < n2 != (u2 == r3) && (a2 = Math.max(s2, a2), e3.setTime(e3.getTime() + 6e4 * ((0 < n2 ? u2 : a2) - r3))), i()[t3 + 24 >> 2 >>> 0] = e3.getDay(), n2 = (e3.getTime() - o2.getTime()) / 864e5 | 0, i()[t3 + 28 >> 2 >>> 0] = n2, i()[t3 >> 2 >>> 0] = e3.getSeconds(), i()[t3 + 4 >> 2 >>> 0] = e3.getMinutes(), i()[t3 + 8 >> 2 >>> 0] = e3.getHours(), i()[t3 + 12 >> 2 >>> 0] = e3.getDate(), i()[t3 + 16 >> 2 >>> 0] = e3.getMonth(), e3.getTime() / 1e3 | 0;
            }, Aa: zt, Ba: Gt, Sa: function t3(e3, n2, r3) {
              t3.Ac || (t3.Ac = true, Wt(e3, n2, r3));
            }, y: function() {
              it("");
            }, U: function() {
              if (!w && !v) {
                var t3 = "Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread";
                _t || (_t = {}), _t[t3] || (_t[t3] = 1, w && (t3 = "warning: " + t3), P(t3));
              }
            }, ra: function() {
              return 4294901760;
            }, B: vt, Ia: function(t3, e3, n2) {
              r2().copyWithin(t3 >>> 0, e3 >>> 0, e3 + n2 >>> 0);
            }, F: function() {
              return w ? n(3993).cpus().length : navigator.hardwareConcurrency;
            }, Da: function(t3, e3, n2) {
              Yt.length = e3, n2 >>= 3;
              for (var r3 = 0; r3 < e3; r3++)
                Yt[r3] = a()[n2 + r3 >>> 0];
              return (0 > t3 ? st[-t3 - 1] : pe[t3]).apply(null, Yt);
            }, qa: function(t3) {
              var e3 = r2().length;
              if ((t3 >>>= 0) <= e3 || 4294901760 < t3)
                return false;
              for (var n2 = 1; 4 >= n2; n2 *= 2) {
                var i2 = e3 * (1 + 0.2 / n2);
                i2 = Math.min(i2, t3 + 100663296);
                var o2 = Math;
                i2 = Math.max(t3, i2), o2 = o2.min.call(o2, 4294901760, i2 + (65536 - i2 % 65536) % 65536);
                t: {
                  try {
                    $.grow(o2 - C.byteLength + 65535 >>> 16), H($.buffer);
                    var a2 = 1;
                    break t;
                  } catch (t4) {
                  }
                  a2 = void 0;
                }
                if (a2)
                  return true;
              }
              return false;
            }, Na: function() {
              throw "unwind";
            }, Ga: Jt, Ha: Qt, J: ft, I: te, S: ee, ga: ne, R: oe, d: function() {
              return ae;
            }, na: function t3(r3, i2) {
              t3.lc || (t3.lc = function() {
                if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                  var t4 = new Uint8Array(1);
                  return () => (crypto.getRandomValues(t4), t4[0]);
                }
                if (w)
                  try {
                    var e3 = n(Object(function() {
                      var t5 = new Error("Cannot find module 'crypto'");
                      throw t5.code = "MODULE_NOT_FOUND", t5;
                    }()));
                    return () => e3.randomBytes(1)[0];
                  } catch (t5) {
                  }
                return () => it("randomDevice");
              }());
              for (var o2 = 0; o2 < i2; o2++)
                e2()[r3 + o2 >> 0 >>> 0] = t3.lc();
              return 0;
            }, ia: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                return yt(t3)(e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, ja: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                return yt(t3)(e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, K: function(t3) {
              var e3 = Ae();
              try {
                return yt(t3)();
              } catch (t4) {
                if (Ee(e3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, f: function(t3, e3) {
              var n2 = Ae();
              try {
                return yt(t3)(e3);
              } catch (t4) {
                if (Ee(n2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, P: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                return yt(t3)(e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, Q: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                return yt(t3)(e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, k: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                return yt(t3)(e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, p: function(t3, e3, n2, r3) {
              var i2 = Ae();
              try {
                return yt(t3)(e3, n2, r3);
              } catch (t4) {
                if (Ee(i2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, q: function(t3, e3, n2, r3, i2) {
              var o2 = Ae();
              try {
                return yt(t3)(e3, n2, r3, i2);
              } catch (t4) {
                if (Ee(o2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, N: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Ae();
              try {
                return yt(t3)(e3, n2, r3, i2, o2);
              } catch (t4) {
                if (Ee(a2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, s: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Ae();
              try {
                return yt(t3)(e3, n2, r3, i2, o2);
              } catch (t4) {
                if (Ee(a2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, w: function(t3, e3, n2, r3, i2, o2, a2) {
              var s2 = Ae();
              try {
                return yt(t3)(e3, n2, r3, i2, o2, a2);
              } catch (t4) {
                if (Ee(s2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, L: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Ae();
              try {
                return yt(t3)(e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (Ee(u2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, E: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2) {
              var f2 = Ae();
              try {
                return yt(t3)(e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2);
              } catch (t4) {
                if (Ee(f2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, aa: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Ae();
              try {
                return Me(t3, e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (Ee(u2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, _: function(t3, e3, n2, r3, i2, o2, a2) {
              var s2 = Ae();
              try {
                return ke(t3, e3, n2, r3, i2, o2, a2);
              } catch (t4) {
                if (Ee(s2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, Z: function(t3, e3, n2, r3, i2) {
              var o2 = Ae();
              try {
                return Ue(t3, e3, n2, r3, i2);
              } catch (t4) {
                if (Ee(o2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, ca: function(t3, e3, n2, r3) {
              var i2 = Ae();
              try {
                return Re(t3, e3, n2, r3);
              } catch (t4) {
                if (Ee(i2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, $: function(t3) {
              var e3 = Ae();
              try {
                return $e(t3);
              } catch (t4) {
                if (Ee(e3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, ba: function(t3, e3) {
              var n2 = Ae();
              try {
                return je(t3, e3);
              } catch (t4) {
                if (Ee(n2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, Y: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                return Ce(t3, e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, g: function(t3) {
              var e3 = Ae();
              try {
                yt(t3)();
              } catch (t4) {
                if (Ee(e3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, r: function(t3, e3) {
              var n2 = Ae();
              try {
                yt(t3)(e3);
              } catch (t4) {
                if (Ee(n2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, i: function(t3, e3, n2) {
              var r3 = Ae();
              try {
                yt(t3)(e3, n2);
              } catch (t4) {
                if (Ee(r3), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, ha: function(t3, e3, n2, r3) {
              var i2 = Ae();
              try {
                yt(t3)(e3, n2, r3);
              } catch (t4) {
                if (Ee(i2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, m: function(t3, e3, n2, r3) {
              var i2 = Ae();
              try {
                yt(t3)(e3, n2, r3);
              } catch (t4) {
                if (Ee(i2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, v: function(t3, e3, n2, r3, i2) {
              var o2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2);
              } catch (t4) {
                if (Ee(o2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, u: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2, o2);
              } catch (t4) {
                if (Ee(a2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, O: function(t3, e3, n2, r3, i2, o2, a2) {
              var s2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2, o2, a2);
              } catch (t4) {
                if (Ee(s2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, A: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (Ee(u2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, ka: function(t3, e3, n2, r3, i2, o2, a2, s2, u2) {
              var c2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2, o2, a2, s2, u2);
              } catch (t4) {
                if (Ee(c2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, C: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2) {
              var p2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2, o2, a2, s2, u2, c2, l2);
              } catch (t4) {
                if (Ee(p2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, D: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2, f2, d2, h2, g2) {
              var b2 = Ae();
              try {
                yt(t3)(e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2, f2, d2, h2, g2);
              } catch (t4) {
                if (Ee(b2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, fa: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Ae();
              try {
                Fe(t3, e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (Ee(u2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, da: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2) {
              var f2 = Ae();
              try {
                Le(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2);
              } catch (t4) {
                if (Ee(f2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, ea: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Ae();
              try {
                Ne(t3, e3, n2, r3, i2, o2);
              } catch (t4) {
                if (Ee(a2), t4 !== t4 + 0)
                  throw t4;
                Se(1, 0);
              }
            }, o: function(t3) {
              return t3;
            }, a: $ || s.wasmMemory, G: function(t3) {
              ae = t3;
            }, la: le, z: function(t3, e3, n2, r3) {
              return le(t3, e3, n2, r3);
            } };
            !function() {
              function t3(t4, e4) {
                s.asm = t4.exports, dt.qc.push(s.asm.sb), q = s.asm.ub, Y.unshift(s.asm.Va), k = e4, x || (et--, s.monitorRunDependencies && s.monitorRunDependencies(et), 0 == et && (null !== nt && (clearInterval(nt), nt = null), rt && (t4 = rt, rt = null, t4())));
              }
              function e3(e4) {
                t3(e4.instance, e4.module);
              }
              function n2(t4) {
                return function() {
                  if (!E && (_ || v)) {
                    if ("function" == typeof fetch && !tt.startsWith("file://"))
                      return fetch(tt, { credentials: "same-origin" }).then(function(t5) {
                        if (!t5.ok)
                          throw "failed to load wasm binary file at '" + tt + "'";
                        return t5.arrayBuffer();
                      }).catch(function() {
                        return at();
                      });
                    if (p)
                      return new Promise(function(t5, e4) {
                        p(tt, function(e5) {
                          t5(new Uint8Array(e5));
                        }, e4);
                      });
                  }
                  return Promise.resolve().then(function() {
                    return at();
                  });
                }().then(function(t5) {
                  return WebAssembly.instantiate(t5, r3);
                }).then(function(t5) {
                  return t5;
                }).then(t4, function(t5) {
                  P("failed to asynchronously prepare wasm: " + t5), it(t5);
                });
              }
              var r3 = { a: fe };
              if (x || (et++, s.monitorRunDependencies && s.monitorRunDependencies(et)), s.instantiateWasm)
                try {
                  return s.instantiateWasm(r3, t3);
                } catch (t4) {
                  return P("Module.instantiateWasm callback failed with error: " + t4), false;
                }
              (E || "function" != typeof WebAssembly.instantiateStreaming || ot() || tt.startsWith("file://") || w || "function" != typeof fetch ? n2(e3) : fetch(tt, { credentials: "same-origin" }).then(function(t4) {
                return WebAssembly.instantiateStreaming(t4, r3).then(e3, function(t5) {
                  return P("wasm streaming compile failed: " + t5), P("falling back to ArrayBuffer instantiation"), n2(e3);
                });
              })).catch(c);
            }(), s.___wasm_call_ctors = function() {
              return (s.___wasm_call_ctors = s.asm.Va).apply(null, arguments);
            }, s._OrtInit = function() {
              return (s._OrtInit = s.asm.Wa).apply(null, arguments);
            }, s._OrtCreateSessionOptions = function() {
              return (s._OrtCreateSessionOptions = s.asm.Xa).apply(null, arguments);
            }, s._OrtAppendExecutionProvider = function() {
              return (s._OrtAppendExecutionProvider = s.asm.Ya).apply(null, arguments);
            }, s._OrtAddSessionConfigEntry = function() {
              return (s._OrtAddSessionConfigEntry = s.asm.Za).apply(null, arguments);
            }, s._OrtReleaseSessionOptions = function() {
              return (s._OrtReleaseSessionOptions = s.asm._a).apply(null, arguments);
            }, s._OrtCreateSession = function() {
              return (s._OrtCreateSession = s.asm.$a).apply(null, arguments);
            }, s._OrtReleaseSession = function() {
              return (s._OrtReleaseSession = s.asm.ab).apply(null, arguments);
            }, s._OrtGetInputCount = function() {
              return (s._OrtGetInputCount = s.asm.bb).apply(null, arguments);
            }, s._OrtGetOutputCount = function() {
              return (s._OrtGetOutputCount = s.asm.cb).apply(null, arguments);
            }, s._OrtGetInputName = function() {
              return (s._OrtGetInputName = s.asm.db).apply(null, arguments);
            }, s._OrtGetOutputName = function() {
              return (s._OrtGetOutputName = s.asm.eb).apply(null, arguments);
            }, s._OrtFree = function() {
              return (s._OrtFree = s.asm.fb).apply(null, arguments);
            }, s._OrtCreateTensor = function() {
              return (s._OrtCreateTensor = s.asm.gb).apply(null, arguments);
            }, s._OrtGetTensorData = function() {
              return (s._OrtGetTensorData = s.asm.hb).apply(null, arguments);
            }, s._OrtReleaseTensor = function() {
              return (s._OrtReleaseTensor = s.asm.ib).apply(null, arguments);
            }, s._OrtCreateRunOptions = function() {
              return (s._OrtCreateRunOptions = s.asm.jb).apply(null, arguments);
            }, s._OrtAddRunConfigEntry = function() {
              return (s._OrtAddRunConfigEntry = s.asm.kb).apply(null, arguments);
            }, s._OrtReleaseRunOptions = function() {
              return (s._OrtReleaseRunOptions = s.asm.lb).apply(null, arguments);
            }, s._OrtRun = function() {
              return (s._OrtRun = s.asm.mb).apply(null, arguments);
            }, s._OrtEndProfiling = function() {
              return (s._OrtEndProfiling = s.asm.nb).apply(null, arguments);
            };
            var de = s._pthread_self = function() {
              return (de = s._pthread_self = s.asm.ob).apply(null, arguments);
            }, he = s._malloc = function() {
              return (he = s._malloc = s.asm.pb).apply(null, arguments);
            }, ge = s._free = function() {
              return (ge = s._free = s.asm.qb).apply(null, arguments);
            }, be = s._fflush = function() {
              return (be = s._fflush = s.asm.rb).apply(null, arguments);
            };
            s.__emscripten_tls_init = function() {
              return (s.__emscripten_tls_init = s.asm.sb).apply(null, arguments);
            };
            var me = s.___funcs_on_exit = function() {
              return (me = s.___funcs_on_exit = s.asm.tb).apply(null, arguments);
            }, ye = s.__emscripten_thread_init = function() {
              return (ye = s.__emscripten_thread_init = s.asm.vb).apply(null, arguments);
            };
            s.__emscripten_thread_crashed = function() {
              return (s.__emscripten_thread_crashed = s.asm.wb).apply(null, arguments);
            };
            var _e, ve = s._emscripten_run_in_main_runtime_thread_js = function() {
              return (ve = s._emscripten_run_in_main_runtime_thread_js = s.asm.xb).apply(null, arguments);
            }, we = s.__emscripten_proxy_execute_task_queue = function() {
              return (we = s.__emscripten_proxy_execute_task_queue = s.asm.yb).apply(null, arguments);
            }, xe = s.__emscripten_thread_free_data = function() {
              return (xe = s.__emscripten_thread_free_data = s.asm.zb).apply(null, arguments);
            }, Te = s.__emscripten_thread_exit = function() {
              return (Te = s.__emscripten_thread_exit = s.asm.Ab).apply(null, arguments);
            }, Se = s._setThrew = function() {
              return (Se = s._setThrew = s.asm.Bb).apply(null, arguments);
            }, Oe = s._emscripten_stack_set_limits = function() {
              return (Oe = s._emscripten_stack_set_limits = s.asm.Cb).apply(null, arguments);
            }, Ae = s.stackSave = function() {
              return (Ae = s.stackSave = s.asm.Db).apply(null, arguments);
            }, Ee = s.stackRestore = function() {
              return (Ee = s.stackRestore = s.asm.Eb).apply(null, arguments);
            }, Ie = s.stackAlloc = function() {
              return (Ie = s.stackAlloc = s.asm.Fb).apply(null, arguments);
            }, Pe = s.___cxa_can_catch = function() {
              return (Pe = s.___cxa_can_catch = s.asm.Gb).apply(null, arguments);
            }, De = s.___cxa_is_pointer_type = function() {
              return (De = s.___cxa_is_pointer_type = s.asm.Hb).apply(null, arguments);
            }, $e = s.dynCall_j = function() {
              return ($e = s.dynCall_j = s.asm.Ib).apply(null, arguments);
            }, ke = s.dynCall_iiiiij = function() {
              return (ke = s.dynCall_iiiiij = s.asm.Jb).apply(null, arguments);
            }, Ce = s.dynCall_jii = function() {
              return (Ce = s.dynCall_jii = s.asm.Kb).apply(null, arguments);
            }, Fe = s.dynCall_viiiiij = function() {
              return (Fe = s.dynCall_viiiiij = s.asm.Lb).apply(null, arguments);
            }, Ne = s.dynCall_vjji = function() {
              return (Ne = s.dynCall_vjji = s.asm.Mb).apply(null, arguments);
            }, Le = s.dynCall_viiijjjii = function() {
              return (Le = s.dynCall_viiijjjii = s.asm.Nb).apply(null, arguments);
            }, Re = s.dynCall_iij = function() {
              return (Re = s.dynCall_iij = s.asm.Ob).apply(null, arguments);
            }, je = s.dynCall_ji = function() {
              return (je = s.dynCall_ji = s.asm.Pb).apply(null, arguments);
            }, Me = s.dynCall_iiiiiij = function() {
              return (Me = s.dynCall_iiiiiij = s.asm.Qb).apply(null, arguments);
            }, Ue = s.dynCall_iiij = function() {
              return (Ue = s.dynCall_iiij = s.asm.Rb).apply(null, arguments);
            };
            function Ve() {
              function t3() {
                if (!_e && (_e = true, s.calledRun = true, !M) && (x || ht(Y), u(s), s.onRuntimeInitialized && s.onRuntimeInitialized(), !x)) {
                  if (s.postRun)
                    for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length; ) {
                      var t4 = s.postRun.shift();
                      Z.unshift(t4);
                    }
                  ht(Z);
                }
              }
              if (!(0 < et))
                if (x)
                  u(s), x || ht(Y), postMessage({ cmd: "loaded" });
                else {
                  if (s.preRun)
                    for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length; )
                      Q();
                  ht(X), 0 < et || (s.setStatus ? (s.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                      s.setStatus("");
                    }, 1), t3();
                  }, 1)) : t3());
                }
            }
            if (s.UTF8ToString = B, s.stringToUTF8 = function(t3, e3, n2) {
              return z(t3, r2(), e3, n2);
            }, s.lengthBytesUTF8 = G, s.keepRuntimeAlive = J, s.wasmMemory = $, s.stackSave = Ae, s.stackRestore = Ee, s.stackAlloc = Ie, s.ExitStatus = ut, s.PThread = dt, rt = function t3() {
              _e || Ve(), _e || (rt = t3);
            }, s.preInit)
              for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); 0 < s.preInit.length; )
                s.preInit.pop()();
            return Ve(), t2.ready;
          });
          t.exports = r;
        }, 932: (t, e, n) => {
          var _scriptDir, r = (_scriptDir = (_scriptDir = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(t2) {
            var e2, r2, i;
            t2 = t2 || {}, e2 || (e2 = void 0 !== t2 ? t2 : {}), e2.ready = new Promise(function(t3, e3) {
              r2 = t3, i = e3;
            });
            var o, a, s, u, c, l, p = Object.assign({}, e2), f = "./this.program", d = (t3, e3) => {
              throw e3;
            }, h = "object" == typeof window, g = "function" == typeof importScripts, b = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, m = "";
            b ? (m = g ? n(908).dirname(m) + "/" : "//", l = () => {
              c || (u = n(1384), c = n(908));
            }, o = function(t3, e3) {
              return l(), t3 = c.normalize(t3), u.readFileSync(t3, e3 ? void 0 : "utf8");
            }, s = (t3) => ((t3 = o(t3, true)).buffer || (t3 = new Uint8Array(t3)), t3), a = (t3, e3, n2) => {
              l(), t3 = c.normalize(t3), u.readFile(t3, function(t4, r3) {
                t4 ? n2(t4) : e3(r3.buffer);
              });
            }, 1 < process.argv.length && (f = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(t3) {
              if (!(t3 instanceof K))
                throw t3;
            }), process.on("unhandledRejection", function(t3) {
              throw t3;
            }), d = (t3, e3) => {
              if (w || 0 < U)
                throw process.exitCode = t3, e3;
              e3 instanceof K || v("exiting due to exception: " + e3), process.exit(t3);
            }, e2.inspect = function() {
              return "[Emscripten Module object]";
            }) : (h || g) && (g ? m = self.location.href : "undefined" != typeof document && document.currentScript && (m = document.currentScript.src), _scriptDir && (m = _scriptDir), m = 0 !== m.indexOf("blob:") ? m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", o = (t3) => {
              var e3 = new XMLHttpRequest();
              return e3.open("GET", t3, false), e3.send(null), e3.responseText;
            }, g && (s = (t3) => {
              var e3 = new XMLHttpRequest();
              return e3.open("GET", t3, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
            }), a = (t3, e3, n2) => {
              var r3 = new XMLHttpRequest();
              r3.open("GET", t3, true), r3.responseType = "arraybuffer", r3.onload = () => {
                200 == r3.status || 0 == r3.status && r3.response ? e3(r3.response) : n2();
              }, r3.onerror = n2, r3.send(null);
            });
            var y, _ = e2.print || console.log.bind(console), v = e2.printErr || console.warn.bind(console);
            Object.assign(e2, p), p = null, e2.thisProgram && (f = e2.thisProgram), e2.quit && (d = e2.quit), e2.wasmBinary && (y = e2.wasmBinary);
            var w = e2.noExitRuntime || false;
            "object" != typeof WebAssembly && W("no native wasm support detected");
            var x, T, S, O, A, E, I = false, P = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function D(t3, e3, n2) {
              var r3 = (e3 >>>= 0) + n2;
              for (n2 = e3; t3[n2] && !(n2 >= r3); )
                ++n2;
              if (16 < n2 - e3 && t3.buffer && P)
                return P.decode(t3.subarray(e3, n2));
              for (r3 = ""; e3 < n2; ) {
                var i2 = t3[e3++];
                if (128 & i2) {
                  var o2 = 63 & t3[e3++];
                  if (192 == (224 & i2))
                    r3 += String.fromCharCode((31 & i2) << 6 | o2);
                  else {
                    var a2 = 63 & t3[e3++];
                    65536 > (i2 = 224 == (240 & i2) ? (15 & i2) << 12 | o2 << 6 | a2 : (7 & i2) << 18 | o2 << 12 | a2 << 6 | 63 & t3[e3++]) ? r3 += String.fromCharCode(i2) : (i2 -= 65536, r3 += String.fromCharCode(55296 | i2 >> 10, 56320 | 1023 & i2));
                  }
                } else
                  r3 += String.fromCharCode(i2);
              }
              return r3;
            }
            function $(t3, e3) {
              return (t3 >>>= 0) ? D(O, t3, e3) : "";
            }
            function k(t3, e3, n2, r3) {
              if (!(0 < r3))
                return 0;
              var i2 = n2 >>>= 0;
              r3 = n2 + r3 - 1;
              for (var o2 = 0; o2 < t3.length; ++o2) {
                var a2 = t3.charCodeAt(o2);
                if (55296 <= a2 && 57343 >= a2 && (a2 = 65536 + ((1023 & a2) << 10) | 1023 & t3.charCodeAt(++o2)), 127 >= a2) {
                  if (n2 >= r3)
                    break;
                  e3[n2++ >>> 0] = a2;
                } else {
                  if (2047 >= a2) {
                    if (n2 + 1 >= r3)
                      break;
                    e3[n2++ >>> 0] = 192 | a2 >> 6;
                  } else {
                    if (65535 >= a2) {
                      if (n2 + 2 >= r3)
                        break;
                      e3[n2++ >>> 0] = 224 | a2 >> 12;
                    } else {
                      if (n2 + 3 >= r3)
                        break;
                      e3[n2++ >>> 0] = 240 | a2 >> 18, e3[n2++ >>> 0] = 128 | a2 >> 12 & 63;
                    }
                    e3[n2++ >>> 0] = 128 | a2 >> 6 & 63;
                  }
                  e3[n2++ >>> 0] = 128 | 63 & a2;
                }
              }
              return e3[n2 >>> 0] = 0, n2 - i2;
            }
            function C(t3) {
              for (var e3 = 0, n2 = 0; n2 < t3.length; ++n2) {
                var r3 = t3.charCodeAt(n2);
                127 >= r3 ? e3++ : 2047 >= r3 ? e3 += 2 : 55296 <= r3 && 57343 >= r3 ? (e3 += 4, ++n2) : e3 += 3;
              }
              return e3;
            }
            function F() {
              var t3 = x.buffer;
              T = t3, e2.HEAP8 = S = new Int8Array(t3), e2.HEAP16 = new Int16Array(t3), e2.HEAP32 = A = new Int32Array(t3), e2.HEAPU8 = O = new Uint8Array(t3), e2.HEAPU16 = new Uint16Array(t3), e2.HEAPU32 = E = new Uint32Array(t3), e2.HEAPF32 = new Float32Array(t3), e2.HEAPF64 = new Float64Array(t3);
            }
            var N, L = [], R = [], j = [], M = [], U = 0;
            function V() {
              var t3 = e2.preRun.shift();
              L.unshift(t3);
            }
            var B, z = 0, G = null, H = null;
            function W(t3) {
              throw e2.onAbort && e2.onAbort(t3), v(t3 = "Aborted(" + t3 + ")"), I = true, t3 = new WebAssembly.RuntimeError(t3 + ". Build with -sASSERTIONS for more info."), i(t3), t3;
            }
            function q() {
              return B.startsWith("data:application/octet-stream;base64,");
            }
            if (B = "ort-wasm.wasm", !q()) {
              var X = B;
              B = e2.locateFile ? e2.locateFile(X, m) : m + X;
            }
            function Y() {
              var t3 = B;
              try {
                if (t3 == B && y)
                  return new Uint8Array(y);
                if (s)
                  return s(t3);
                throw "both async and sync fetching of the wasm failed";
              } catch (t4) {
                W(t4);
              }
            }
            function K(t3) {
              this.name = "ExitStatus", this.message = "Program terminated with exit(" + t3 + ")", this.status = t3;
            }
            function Z(t3) {
              for (; 0 < t3.length; )
                t3.shift()(e2);
            }
            var J = [], Q = 0, tt = 0;
            function et(t3) {
              this.Db = t3, this.zb = t3 - 24, this.Ub = function(t4) {
                E[this.zb + 4 >> 2 >>> 0] = t4;
              }, this.Eb = function() {
                return E[this.zb + 4 >> 2 >>> 0];
              }, this.Sb = function(t4) {
                E[this.zb + 8 >> 2 >>> 0] = t4;
              }, this.Wb = function() {
                return E[this.zb + 8 >> 2 >>> 0];
              }, this.Tb = function() {
                A[this.zb >> 2 >>> 0] = 0;
              }, this.Ib = function(t4) {
                S[this.zb + 12 >> 0 >>> 0] = t4 ? 1 : 0;
              }, this.Pb = function() {
                return 0 != S[this.zb + 12 >> 0 >>> 0];
              }, this.Jb = function(t4) {
                S[this.zb + 13 >> 0 >>> 0] = t4 ? 1 : 0;
              }, this.Lb = function() {
                return 0 != S[this.zb + 13 >> 0 >>> 0];
              }, this.Rb = function(t4, e3) {
                this.Fb(0), this.Ub(t4), this.Sb(e3), this.Tb(), this.Ib(false), this.Jb(false);
              }, this.Nb = function() {
                A[this.zb >> 2 >>> 0] += 1;
              }, this.Xb = function() {
                var t4 = A[this.zb >> 2 >>> 0];
                return A[this.zb >> 2 >>> 0] = t4 - 1, 1 === t4;
              }, this.Fb = function(t4) {
                E[this.zb + 16 >> 2 >>> 0] = t4;
              }, this.Ob = function() {
                return E[this.zb + 16 >> 2 >>> 0];
              }, this.Qb = function() {
                if (Et(this.Eb()))
                  return E[this.Db >> 2 >>> 0];
                var t4 = this.Ob();
                return 0 !== t4 ? t4 : this.Db;
              };
            }
            function nt(t3) {
              return _t(new et(t3).zb);
            }
            var rt = [];
            function it(t3) {
              var e3 = rt[t3];
              return e3 || (t3 >= rt.length && (rt.length = t3 + 1), rt[t3] = e3 = N.get(t3)), e3;
            }
            function ot(t3) {
              var e3 = C(t3) + 1, n2 = yt(e3);
              return n2 && k(t3, S, n2, e3), n2;
            }
            var at = {};
            function st() {
              if (!ut) {
                var t3, e3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: f || "./this.program" };
                for (t3 in at)
                  void 0 === at[t3] ? delete e3[t3] : e3[t3] = at[t3];
                var n2 = [];
                for (t3 in e3)
                  n2.push(t3 + "=" + e3[t3]);
                ut = n2;
              }
              return ut;
            }
            var ut, ct = [null, [], []];
            function lt(t3, e3) {
              var n2 = ct[t3];
              0 === e3 || 10 === e3 ? ((1 === t3 ? _ : v)(D(n2, 0)), n2.length = 0) : n2.push(e3);
            }
            var pt = 0;
            function ft(t3) {
              return 0 == t3 % 4 && (0 != t3 % 100 || 0 == t3 % 400);
            }
            var dt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ht = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function gt(t3, e3, n2, r3) {
              function i2(t4, e4, n3) {
                for (t4 = "number" == typeof t4 ? t4.toString() : t4 || ""; t4.length < e4; )
                  t4 = n3[0] + t4;
                return t4;
              }
              function o2(t4, e4) {
                return i2(t4, e4, "0");
              }
              function a2(t4, e4) {
                function n3(t5) {
                  return 0 > t5 ? -1 : 0 < t5 ? 1 : 0;
                }
                var r4;
                return 0 === (r4 = n3(t4.getFullYear() - e4.getFullYear())) && 0 === (r4 = n3(t4.getMonth() - e4.getMonth())) && (r4 = n3(t4.getDate() - e4.getDate())), r4;
              }
              function s2(t4) {
                switch (t4.getDay()) {
                  case 0:
                    return new Date(t4.getFullYear() - 1, 11, 29);
                  case 1:
                    return t4;
                  case 2:
                    return new Date(t4.getFullYear(), 0, 3);
                  case 3:
                    return new Date(t4.getFullYear(), 0, 2);
                  case 4:
                    return new Date(t4.getFullYear(), 0, 1);
                  case 5:
                    return new Date(t4.getFullYear() - 1, 11, 31);
                  case 6:
                    return new Date(t4.getFullYear() - 1, 11, 30);
                }
              }
              function u2(t4) {
                var e4 = t4.Bb;
                for (t4 = new Date(new Date(t4.Cb + 1900, 0, 1).getTime()); 0 < e4; ) {
                  var n3 = t4.getMonth(), r4 = (ft(t4.getFullYear()) ? dt : ht)[n3];
                  if (!(e4 > r4 - t4.getDate())) {
                    t4.setDate(t4.getDate() + e4);
                    break;
                  }
                  e4 -= r4 - t4.getDate() + 1, t4.setDate(1), 11 > n3 ? t4.setMonth(n3 + 1) : (t4.setMonth(0), t4.setFullYear(t4.getFullYear() + 1));
                }
                return n3 = new Date(t4.getFullYear() + 1, 0, 4), e4 = s2(new Date(t4.getFullYear(), 0, 4)), n3 = s2(n3), 0 >= a2(e4, t4) ? 0 >= a2(n3, t4) ? t4.getFullYear() + 1 : t4.getFullYear() : t4.getFullYear() - 1;
              }
              var c2 = A[r3 + 40 >> 2 >>> 0];
              for (var l2 in r3 = { $b: A[r3 >> 2 >>> 0], Zb: A[r3 + 4 >> 2 >>> 0], Gb: A[r3 + 8 >> 2 >>> 0], Kb: A[r3 + 12 >> 2 >>> 0], Hb: A[r3 + 16 >> 2 >>> 0], Cb: A[r3 + 20 >> 2 >>> 0], Ab: A[r3 + 24 >> 2 >>> 0], Bb: A[r3 + 28 >> 2 >>> 0], bc: A[r3 + 32 >> 2 >>> 0], Yb: A[r3 + 36 >> 2 >>> 0], ac: c2 ? $(c2) : "" }, n2 = $(n2), c2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" })
                n2 = n2.replace(new RegExp(l2, "g"), c2[l2]);
              var p2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), f2 = "January February March April May June July August September October November December".split(" ");
              for (l2 in c2 = { "%a": function(t4) {
                return p2[t4.Ab].substring(0, 3);
              }, "%A": function(t4) {
                return p2[t4.Ab];
              }, "%b": function(t4) {
                return f2[t4.Hb].substring(0, 3);
              }, "%B": function(t4) {
                return f2[t4.Hb];
              }, "%C": function(t4) {
                return o2((t4.Cb + 1900) / 100 | 0, 2);
              }, "%d": function(t4) {
                return o2(t4.Kb, 2);
              }, "%e": function(t4) {
                return i2(t4.Kb, 2, " ");
              }, "%g": function(t4) {
                return u2(t4).toString().substring(2);
              }, "%G": function(t4) {
                return u2(t4);
              }, "%H": function(t4) {
                return o2(t4.Gb, 2);
              }, "%I": function(t4) {
                return 0 == (t4 = t4.Gb) ? t4 = 12 : 12 < t4 && (t4 -= 12), o2(t4, 2);
              }, "%j": function(t4) {
                for (var e4 = 0, n3 = 0; n3 <= t4.Hb - 1; e4 += (ft(t4.Cb + 1900) ? dt : ht)[n3++])
                  ;
                return o2(t4.Kb + e4, 3);
              }, "%m": function(t4) {
                return o2(t4.Hb + 1, 2);
              }, "%M": function(t4) {
                return o2(t4.Zb, 2);
              }, "%n": function() {
                return "\n";
              }, "%p": function(t4) {
                return 0 <= t4.Gb && 12 > t4.Gb ? "AM" : "PM";
              }, "%S": function(t4) {
                return o2(t4.$b, 2);
              }, "%t": function() {
                return "	";
              }, "%u": function(t4) {
                return t4.Ab || 7;
              }, "%U": function(t4) {
                return o2(Math.floor((t4.Bb + 7 - t4.Ab) / 7), 2);
              }, "%V": function(t4) {
                var e4 = Math.floor((t4.Bb + 7 - (t4.Ab + 6) % 7) / 7);
                if (2 >= (t4.Ab + 371 - t4.Bb - 2) % 7 && e4++, e4)
                  53 == e4 && (4 == (n3 = (t4.Ab + 371 - t4.Bb) % 7) || 3 == n3 && ft(t4.Cb) || (e4 = 1));
                else {
                  e4 = 52;
                  var n3 = (t4.Ab + 7 - t4.Bb - 1) % 7;
                  (4 == n3 || 5 == n3 && ft(t4.Cb % 400 - 1)) && e4++;
                }
                return o2(e4, 2);
              }, "%w": function(t4) {
                return t4.Ab;
              }, "%W": function(t4) {
                return o2(Math.floor((t4.Bb + 7 - (t4.Ab + 6) % 7) / 7), 2);
              }, "%y": function(t4) {
                return (t4.Cb + 1900).toString().substring(2);
              }, "%Y": function(t4) {
                return t4.Cb + 1900;
              }, "%z": function(t4) {
                var e4 = 0 <= (t4 = t4.Yb);
                return t4 = Math.abs(t4) / 60, (e4 ? "+" : "-") + String("0000" + (t4 / 60 * 100 + t4 % 60)).slice(-4);
              }, "%Z": function(t4) {
                return t4.ac;
              }, "%%": function() {
                return "%";
              } }, n2 = n2.replace(/%%/g, "\0\0"), c2)
                n2.includes(l2) && (n2 = n2.replace(new RegExp(l2, "g"), c2[l2](r3)));
              return l2 = function(t4) {
                var e4 = Array(C(t4) + 1);
                return k(t4, e4, 0, e4.length), e4;
              }(n2 = n2.replace(/\0\0/g, "%")), l2.length > e3 ? 0 : (S.set(l2, t3 >>> 0), l2.length - 1);
            }
            var bt = { a: function(t3) {
              return yt(t3 + 24) + 24;
            }, m: function(t3) {
              return (t3 = new et(t3)).Pb() || (t3.Ib(true), Q--), t3.Jb(false), J.push(t3), t3.Nb(), t3.Qb();
            }, ia: function(t3) {
              throw v("Unexpected exception thrown, this is not properly supported - aborting"), I = true, t3;
            }, w: function() {
              xt(0);
              var t3 = J.pop();
              if (t3.Xb() && !t3.Lb()) {
                var e3 = t3.Wb();
                e3 && it(e3)(t3.Db), nt(t3.Db);
              }
              tt = 0;
            }, d: function() {
              var t3 = tt;
              if (!t3)
                return pt = 0;
              var e3 = new et(t3);
              e3.Fb(t3);
              var n2 = e3.Eb();
              if (!n2)
                return pt = 0, t3;
              for (var r3 = Array.prototype.slice.call(arguments), i2 = 0; i2 < r3.length; i2++) {
                var o2 = r3[i2];
                if (0 === o2 || o2 === n2)
                  break;
                if (At(o2, n2, e3.zb + 16))
                  return pt = o2, t3;
              }
              return pt = n2, t3;
            }, k: function() {
              var t3 = tt;
              if (!t3)
                return pt = 0;
              var e3 = new et(t3);
              e3.Fb(t3);
              var n2 = e3.Eb();
              if (!n2)
                return pt = 0, t3;
              for (var r3 = Array.prototype.slice.call(arguments), i2 = 0; i2 < r3.length; i2++) {
                var o2 = r3[i2];
                if (0 === o2 || o2 === n2)
                  break;
                if (At(o2, n2, e3.zb + 16))
                  return pt = o2, t3;
              }
              return pt = n2, t3;
            }, g: function() {
              var t3 = tt;
              if (!t3)
                return pt = 0;
              var e3 = new et(t3);
              e3.Fb(t3);
              var n2 = e3.Eb();
              if (!n2)
                return pt = 0, t3;
              for (var r3 = Array.prototype.slice.call(arguments), i2 = 0; i2 < r3.length; i2++) {
                var o2 = r3[i2];
                if (0 === o2 || o2 === n2)
                  break;
                if (At(o2, n2, e3.zb + 16))
                  return pt = o2, t3;
              }
              return pt = n2, t3;
            }, s: nt, L: function() {
              var t3 = J.pop();
              t3 || W("no exception to throw");
              var e3 = t3.Db;
              throw t3.Lb() || (J.push(t3), t3.Jb(true), t3.Ib(false), Q++), tt = e3, e3;
            }, b: function(t3, e3, n2) {
              throw new et(t3).Rb(e3, n2), tt = t3, Q++, t3;
            }, la: function() {
              return Q;
            }, i: function(t3) {
              throw tt || (tt = t3), t3;
            }, H: function() {
              return 0;
            }, Ba: function() {
            }, pa: function() {
            }, ra: function() {
            }, ka: function() {
              return 0;
            }, za: function() {
            }, ua: function() {
            }, ya: function() {
            }, R: function() {
            }, qa: function() {
            }, na: function() {
            }, Aa: function() {
            }, oa: function() {
            }, Ha: function() {
            }, Ja: function() {
              W("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }, Ia: function() {
              W("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking");
            }, S: function() {
              return Date.now();
            }, Ca: function() {
              return true;
            }, Da: function(t3, e3) {
              t3 = new Date(1e3 * (E[t3 >>> 2] + 4294967296 * A[t3 + 4 >>> 2])), A[e3 >> 2 >>> 0] = t3.getUTCSeconds(), A[e3 + 4 >> 2 >>> 0] = t3.getUTCMinutes(), A[e3 + 8 >> 2 >>> 0] = t3.getUTCHours(), A[e3 + 12 >> 2 >>> 0] = t3.getUTCDate(), A[e3 + 16 >> 2 >>> 0] = t3.getUTCMonth(), A[e3 + 20 >> 2 >>> 0] = t3.getUTCFullYear() - 1900, A[e3 + 24 >> 2 >>> 0] = t3.getUTCDay(), A[e3 + 28 >> 2 >>> 0] = (t3.getTime() - Date.UTC(t3.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0;
            }, Ea: function(t3, e3) {
              t3 = new Date(1e3 * (E[t3 >>> 2] + 4294967296 * A[t3 + 4 >>> 2])), A[e3 >> 2 >>> 0] = t3.getSeconds(), A[e3 + 4 >> 2 >>> 0] = t3.getMinutes(), A[e3 + 8 >> 2 >>> 0] = t3.getHours(), A[e3 + 12 >> 2 >>> 0] = t3.getDate(), A[e3 + 16 >> 2 >>> 0] = t3.getMonth(), A[e3 + 20 >> 2 >>> 0] = t3.getFullYear() - 1900, A[e3 + 24 >> 2 >>> 0] = t3.getDay();
              var n2 = new Date(t3.getFullYear(), 0, 1);
              A[e3 + 28 >> 2 >>> 0] = (t3.getTime() - n2.getTime()) / 864e5 | 0, A[e3 + 36 >> 2 >>> 0] = -60 * t3.getTimezoneOffset();
              var r3 = new Date(t3.getFullYear(), 6, 1).getTimezoneOffset();
              n2 = n2.getTimezoneOffset(), A[e3 + 32 >> 2 >>> 0] = 0 | (r3 != n2 && t3.getTimezoneOffset() == Math.min(n2, r3));
            }, Fa: function(t3) {
              var e3 = new Date(A[t3 + 20 >> 2 >>> 0] + 1900, A[t3 + 16 >> 2 >>> 0], A[t3 + 12 >> 2 >>> 0], A[t3 + 8 >> 2 >>> 0], A[t3 + 4 >> 2 >>> 0], A[t3 >> 2 >>> 0], 0), n2 = A[t3 + 32 >> 2 >>> 0], r3 = e3.getTimezoneOffset(), i2 = new Date(e3.getFullYear(), 0, 1), o2 = new Date(e3.getFullYear(), 6, 1).getTimezoneOffset(), a2 = i2.getTimezoneOffset(), s2 = Math.min(a2, o2);
              return 0 > n2 ? A[t3 + 32 >> 2 >>> 0] = Number(o2 != a2 && s2 == r3) : 0 < n2 != (s2 == r3) && (o2 = Math.max(a2, o2), e3.setTime(e3.getTime() + 6e4 * ((0 < n2 ? s2 : o2) - r3))), A[t3 + 24 >> 2 >>> 0] = e3.getDay(), A[t3 + 28 >> 2 >>> 0] = (e3.getTime() - i2.getTime()) / 864e5 | 0, A[t3 >> 2 >>> 0] = e3.getSeconds(), A[t3 + 4 >> 2 >>> 0] = e3.getMinutes(), A[t3 + 8 >> 2 >>> 0] = e3.getHours(), A[t3 + 12 >> 2 >>> 0] = e3.getDate(), A[t3 + 16 >> 2 >>> 0] = e3.getMonth(), e3.getTime() / 1e3 | 0;
            }, sa: function() {
              return -52;
            }, ta: function() {
            }, Ga: function t3(e3, n2, r3) {
              t3.Vb || (t3.Vb = true, function(t4, e4, n3) {
                function r4(t5) {
                  return (t5 = t5.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? t5[1] : "GMT";
                }
                var i2 = (/* @__PURE__ */ new Date()).getFullYear(), o2 = new Date(i2, 0, 1), a2 = new Date(i2, 6, 1);
                i2 = o2.getTimezoneOffset();
                var s2 = a2.getTimezoneOffset();
                A[t4 >> 2 >>> 0] = 60 * Math.max(i2, s2), A[e4 >> 2 >>> 0] = Number(i2 != s2), t4 = r4(o2), e4 = r4(a2), t4 = ot(t4), e4 = ot(e4), s2 < i2 ? (E[n3 >> 2 >>> 0] = t4, E[n3 + 4 >> 2 >>> 0] = e4) : (E[n3 >> 2 >>> 0] = e4, E[n3 + 4 >> 2 >>> 0] = t4);
              }(e3, n2, r3));
            }, B: function() {
              W("");
            }, ma: function() {
              return 4294901760;
            }, I: b ? () => {
              var t3 = process.hrtime();
              return 1e3 * t3[0] + t3[1] / 1e6;
            } : () => performance.now(), xa: function(t3, e3, n2) {
              O.copyWithin(t3 >>> 0, e3 >>> 0, e3 + n2 >>> 0);
            }, G: function(t3) {
              var e3 = O.length;
              if (4294901760 < (t3 >>>= 0))
                return false;
              for (var n2 = 1; 4 >= n2; n2 *= 2) {
                var r3 = e3 * (1 + 0.2 / n2);
                r3 = Math.min(r3, t3 + 100663296);
                var i2 = Math;
                r3 = Math.max(t3, r3), i2 = i2.min.call(i2, 4294901760, r3 + (65536 - r3 % 65536) % 65536);
                t: {
                  try {
                    x.grow(i2 - T.byteLength + 65535 >>> 16), F();
                    var o2 = 1;
                    break t;
                  } catch (t4) {
                  }
                  o2 = void 0;
                }
                if (o2)
                  return true;
              }
              return false;
            }, va: function(t3, e3) {
              var n2 = 0;
              return st().forEach(function(r3, i2) {
                var o2 = e3 + n2;
                for (i2 = E[t3 + 4 * i2 >> 2 >>> 0] = o2, o2 = 0; o2 < r3.length; ++o2)
                  S[i2++ >> 0 >>> 0] = r3.charCodeAt(o2);
                S[i2 >> 0 >>> 0] = 0, n2 += r3.length + 1;
              }), 0;
            }, wa: function(t3, e3) {
              var n2 = st();
              E[t3 >> 2 >>> 0] = n2.length;
              var r3 = 0;
              return n2.forEach(function(t4) {
                r3 += t4.length + 1;
              }), E[e3 >> 2 >>> 0] = r3, 0;
            }, ba: function(t3) {
              w || 0 < U || (wt(), Z(j), vt(0), ct[1].length && lt(1, 10), ct[2].length && lt(2, 10)), w || 0 < U || (e2.onExit && e2.onExit(t3), I = true), d(t3, new K(t3));
            }, E: function() {
              return 52;
            }, Q: function() {
              return 52;
            }, ca: function() {
              return 70;
            }, P: function(t3, e3, n2, r3) {
              for (var i2 = 0, o2 = 0; o2 < n2; o2++) {
                var a2 = E[e3 >> 2 >>> 0], s2 = E[e3 + 4 >> 2 >>> 0];
                e3 += 8;
                for (var u2 = 0; u2 < s2; u2++)
                  lt(t3, O[a2 + u2 >>> 0]);
                i2 += s2;
              }
              return E[r3 >> 2 >>> 0] = i2, 0;
            }, c: function() {
              return pt;
            }, ja: function t3(e3, r3) {
              t3.Mb || (t3.Mb = function() {
                if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                  var t4 = new Uint8Array(1);
                  return () => (crypto.getRandomValues(t4), t4[0]);
                }
                if (b)
                  try {
                    var e4 = n(Object(function() {
                      var t5 = new Error("Cannot find module 'crypto'");
                      throw t5.code = "MODULE_NOT_FOUND", t5;
                    }()));
                    return () => e4.randomBytes(1)[0];
                  } catch (t5) {
                  }
                return () => W("randomDevice");
              }());
              for (var i2 = 0; i2 < r3; i2++)
                S[e3 + i2 >> 0 >>> 0] = t3.Mb();
              return 0;
            }, ea: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                return it(t3)(e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, fa: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                return it(t3)(e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, J: function(t3) {
              var e3 = Tt();
              try {
                return it(t3)();
              } catch (t4) {
                if (St(e3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, e: function(t3, e3) {
              var n2 = Tt();
              try {
                return it(t3)(e3);
              } catch (t4) {
                if (St(n2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, N: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                return it(t3)(e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, O: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                return it(t3)(e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, j: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                return it(t3)(e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, o: function(t3, e3, n2, r3) {
              var i2 = Tt();
              try {
                return it(t3)(e3, n2, r3);
              } catch (t4) {
                if (St(i2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, p: function(t3, e3, n2, r3, i2) {
              var o2 = Tt();
              try {
                return it(t3)(e3, n2, r3, i2);
              } catch (t4) {
                if (St(o2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, M: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Tt();
              try {
                return it(t3)(e3, n2, r3, i2, o2);
              } catch (t4) {
                if (St(a2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, r: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Tt();
              try {
                return it(t3)(e3, n2, r3, i2, o2);
              } catch (t4) {
                if (St(a2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, v: function(t3, e3, n2, r3, i2, o2, a2) {
              var s2 = Tt();
              try {
                return it(t3)(e3, n2, r3, i2, o2, a2);
              } catch (t4) {
                if (St(s2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, K: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Tt();
              try {
                return it(t3)(e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (St(u2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, D: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2) {
              var f2 = Tt();
              try {
                return it(t3)(e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2);
              } catch (t4) {
                if (St(f2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, X: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Tt();
              try {
                return Lt(t3, e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (St(u2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, V: function(t3, e3, n2, r3, i2, o2, a2) {
              var s2 = Tt();
              try {
                return Pt(t3, e3, n2, r3, i2, o2, a2);
              } catch (t4) {
                if (St(s2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, U: function(t3, e3, n2, r3, i2) {
              var o2 = Tt();
              try {
                return Rt(t3, e3, n2, r3, i2);
              } catch (t4) {
                if (St(o2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, Z: function(t3, e3, n2, r3) {
              var i2 = Tt();
              try {
                return Ft(t3, e3, n2, r3);
              } catch (t4) {
                if (St(i2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, W: function(t3) {
              var e3 = Tt();
              try {
                return It(t3);
              } catch (t4) {
                if (St(e3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, Y: function(t3, e3) {
              var n2 = Tt();
              try {
                return Nt(t3, e3);
              } catch (t4) {
                if (St(n2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, T: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                return Dt(t3, e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, f: function(t3) {
              var e3 = Tt();
              try {
                it(t3)();
              } catch (t4) {
                if (St(e3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, q: function(t3, e3) {
              var n2 = Tt();
              try {
                it(t3)(e3);
              } catch (t4) {
                if (St(n2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, h: function(t3, e3, n2) {
              var r3 = Tt();
              try {
                it(t3)(e3, n2);
              } catch (t4) {
                if (St(r3), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, da: function(t3, e3, n2, r3) {
              var i2 = Tt();
              try {
                it(t3)(e3, n2, r3);
              } catch (t4) {
                if (St(i2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, l: function(t3, e3, n2, r3) {
              var i2 = Tt();
              try {
                it(t3)(e3, n2, r3);
              } catch (t4) {
                if (St(i2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, t: function(t3, e3, n2, r3, i2) {
              var o2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2);
              } catch (t4) {
                if (St(o2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, u: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2, o2);
              } catch (t4) {
                if (St(a2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, x: function(t3, e3, n2, r3, i2, o2, a2) {
              var s2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2, o2, a2);
              } catch (t4) {
                if (St(s2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, z: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (St(u2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, ga: function(t3, e3, n2, r3, i2, o2, a2, s2, u2) {
              var c2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2, o2, a2, s2, u2);
              } catch (t4) {
                if (St(c2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, A: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2) {
              var p2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2, o2, a2, s2, u2, c2, l2);
              } catch (t4) {
                if (St(p2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, C: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2, f2, d2, h2, g2) {
              var b2 = Tt();
              try {
                it(t3)(e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2, f2, d2, h2, g2);
              } catch (t4) {
                if (St(b2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, aa: function(t3, e3, n2, r3, i2, o2, a2, s2) {
              var u2 = Tt();
              try {
                $t(t3, e3, n2, r3, i2, o2, a2, s2);
              } catch (t4) {
                if (St(u2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, _: function(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2) {
              var f2 = Tt();
              try {
                Ct(t3, e3, n2, r3, i2, o2, a2, s2, u2, c2, l2, p2);
              } catch (t4) {
                if (St(f2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, $: function(t3, e3, n2, r3, i2, o2) {
              var a2 = Tt();
              try {
                kt(t3, e3, n2, r3, i2, o2);
              } catch (t4) {
                if (St(a2), t4 !== t4 + 0)
                  throw t4;
                xt(1, 0);
              }
            }, n: function(t3) {
              return t3;
            }, F: function(t3) {
              pt = t3;
            }, ha: gt, y: function(t3, e3, n2, r3) {
              return gt(t3, e3, n2, r3);
            } };
            !function() {
              function t3(t4) {
                e2.asm = t4.exports, x = e2.asm.Ka, F(), N = e2.asm.ib, R.unshift(e2.asm.La), z--, e2.monitorRunDependencies && e2.monitorRunDependencies(z), 0 == z && (null !== G && (clearInterval(G), G = null), H && (t4 = H, H = null, t4()));
              }
              function n2(e3) {
                t3(e3.instance);
              }
              function r3(t4) {
                return function() {
                  if (!y && (h || g)) {
                    if ("function" == typeof fetch && !B.startsWith("file://"))
                      return fetch(B, { credentials: "same-origin" }).then(function(t5) {
                        if (!t5.ok)
                          throw "failed to load wasm binary file at '" + B + "'";
                        return t5.arrayBuffer();
                      }).catch(function() {
                        return Y();
                      });
                    if (a)
                      return new Promise(function(t5, e3) {
                        a(B, function(e4) {
                          t5(new Uint8Array(e4));
                        }, e3);
                      });
                  }
                  return Promise.resolve().then(function() {
                    return Y();
                  });
                }().then(function(t5) {
                  return WebAssembly.instantiate(t5, o2);
                }).then(function(t5) {
                  return t5;
                }).then(t4, function(t5) {
                  v("failed to asynchronously prepare wasm: " + t5), W(t5);
                });
              }
              var o2 = { a: bt };
              if (z++, e2.monitorRunDependencies && e2.monitorRunDependencies(z), e2.instantiateWasm)
                try {
                  return e2.instantiateWasm(o2, t3);
                } catch (t4) {
                  return v("Module.instantiateWasm callback failed with error: " + t4), false;
                }
              (y || "function" != typeof WebAssembly.instantiateStreaming || q() || B.startsWith("file://") || b || "function" != typeof fetch ? r3(n2) : fetch(B, { credentials: "same-origin" }).then(function(t4) {
                return WebAssembly.instantiateStreaming(t4, o2).then(n2, function(t5) {
                  return v("wasm streaming compile failed: " + t5), v("falling back to ArrayBuffer instantiation"), r3(n2);
                });
              })).catch(i);
            }(), e2.___wasm_call_ctors = function() {
              return (e2.___wasm_call_ctors = e2.asm.La).apply(null, arguments);
            }, e2._OrtInit = function() {
              return (e2._OrtInit = e2.asm.Ma).apply(null, arguments);
            }, e2._OrtCreateSessionOptions = function() {
              return (e2._OrtCreateSessionOptions = e2.asm.Na).apply(null, arguments);
            }, e2._OrtAppendExecutionProvider = function() {
              return (e2._OrtAppendExecutionProvider = e2.asm.Oa).apply(null, arguments);
            }, e2._OrtAddSessionConfigEntry = function() {
              return (e2._OrtAddSessionConfigEntry = e2.asm.Pa).apply(null, arguments);
            }, e2._OrtReleaseSessionOptions = function() {
              return (e2._OrtReleaseSessionOptions = e2.asm.Qa).apply(null, arguments);
            }, e2._OrtCreateSession = function() {
              return (e2._OrtCreateSession = e2.asm.Ra).apply(null, arguments);
            }, e2._OrtReleaseSession = function() {
              return (e2._OrtReleaseSession = e2.asm.Sa).apply(null, arguments);
            }, e2._OrtGetInputCount = function() {
              return (e2._OrtGetInputCount = e2.asm.Ta).apply(null, arguments);
            }, e2._OrtGetOutputCount = function() {
              return (e2._OrtGetOutputCount = e2.asm.Ua).apply(null, arguments);
            }, e2._OrtGetInputName = function() {
              return (e2._OrtGetInputName = e2.asm.Va).apply(null, arguments);
            }, e2._OrtGetOutputName = function() {
              return (e2._OrtGetOutputName = e2.asm.Wa).apply(null, arguments);
            }, e2._OrtFree = function() {
              return (e2._OrtFree = e2.asm.Xa).apply(null, arguments);
            }, e2._OrtCreateTensor = function() {
              return (e2._OrtCreateTensor = e2.asm.Ya).apply(null, arguments);
            }, e2._OrtGetTensorData = function() {
              return (e2._OrtGetTensorData = e2.asm.Za).apply(null, arguments);
            }, e2._OrtReleaseTensor = function() {
              return (e2._OrtReleaseTensor = e2.asm._a).apply(null, arguments);
            }, e2._OrtCreateRunOptions = function() {
              return (e2._OrtCreateRunOptions = e2.asm.$a).apply(null, arguments);
            }, e2._OrtAddRunConfigEntry = function() {
              return (e2._OrtAddRunConfigEntry = e2.asm.ab).apply(null, arguments);
            }, e2._OrtReleaseRunOptions = function() {
              return (e2._OrtReleaseRunOptions = e2.asm.bb).apply(null, arguments);
            }, e2._OrtRun = function() {
              return (e2._OrtRun = e2.asm.cb).apply(null, arguments);
            }, e2._OrtEndProfiling = function() {
              return (e2._OrtEndProfiling = e2.asm.db).apply(null, arguments);
            };
            var mt, yt = e2._malloc = function() {
              return (yt = e2._malloc = e2.asm.eb).apply(null, arguments);
            }, _t = e2._free = function() {
              return (_t = e2._free = e2.asm.fb).apply(null, arguments);
            }, vt = e2._fflush = function() {
              return (vt = e2._fflush = e2.asm.gb).apply(null, arguments);
            }, wt = e2.___funcs_on_exit = function() {
              return (wt = e2.___funcs_on_exit = e2.asm.hb).apply(null, arguments);
            }, xt = e2._setThrew = function() {
              return (xt = e2._setThrew = e2.asm.jb).apply(null, arguments);
            }, Tt = e2.stackSave = function() {
              return (Tt = e2.stackSave = e2.asm.kb).apply(null, arguments);
            }, St = e2.stackRestore = function() {
              return (St = e2.stackRestore = e2.asm.lb).apply(null, arguments);
            }, Ot = e2.stackAlloc = function() {
              return (Ot = e2.stackAlloc = e2.asm.mb).apply(null, arguments);
            }, At = e2.___cxa_can_catch = function() {
              return (At = e2.___cxa_can_catch = e2.asm.nb).apply(null, arguments);
            }, Et = e2.___cxa_is_pointer_type = function() {
              return (Et = e2.___cxa_is_pointer_type = e2.asm.ob).apply(null, arguments);
            }, It = e2.dynCall_j = function() {
              return (It = e2.dynCall_j = e2.asm.pb).apply(null, arguments);
            }, Pt = e2.dynCall_iiiiij = function() {
              return (Pt = e2.dynCall_iiiiij = e2.asm.qb).apply(null, arguments);
            }, Dt = e2.dynCall_jii = function() {
              return (Dt = e2.dynCall_jii = e2.asm.rb).apply(null, arguments);
            }, $t = e2.dynCall_viiiiij = function() {
              return ($t = e2.dynCall_viiiiij = e2.asm.sb).apply(null, arguments);
            }, kt = e2.dynCall_vjji = function() {
              return (kt = e2.dynCall_vjji = e2.asm.tb).apply(null, arguments);
            }, Ct = e2.dynCall_viiijjjii = function() {
              return (Ct = e2.dynCall_viiijjjii = e2.asm.ub).apply(null, arguments);
            }, Ft = e2.dynCall_iij = function() {
              return (Ft = e2.dynCall_iij = e2.asm.vb).apply(null, arguments);
            }, Nt = e2.dynCall_ji = function() {
              return (Nt = e2.dynCall_ji = e2.asm.wb).apply(null, arguments);
            }, Lt = e2.dynCall_iiiiiij = function() {
              return (Lt = e2.dynCall_iiiiiij = e2.asm.xb).apply(null, arguments);
            }, Rt = e2.dynCall_iiij = function() {
              return (Rt = e2.dynCall_iiij = e2.asm.yb).apply(null, arguments);
            };
            function jt() {
              function t3() {
                if (!mt && (mt = true, e2.calledRun = true, !I)) {
                  if (Z(R), r2(e2), e2.onRuntimeInitialized && e2.onRuntimeInitialized(), e2.postRun)
                    for ("function" == typeof e2.postRun && (e2.postRun = [e2.postRun]); e2.postRun.length; ) {
                      var t4 = e2.postRun.shift();
                      M.unshift(t4);
                    }
                  Z(M);
                }
              }
              if (!(0 < z)) {
                if (e2.preRun)
                  for ("function" == typeof e2.preRun && (e2.preRun = [e2.preRun]); e2.preRun.length; )
                    V();
                Z(L), 0 < z || (e2.setStatus ? (e2.setStatus("Running..."), setTimeout(function() {
                  setTimeout(function() {
                    e2.setStatus("");
                  }, 1), t3();
                }, 1)) : t3());
              }
            }
            if (e2.UTF8ToString = $, e2.stringToUTF8 = function(t3, e3, n2) {
              return k(t3, O, e3, n2);
            }, e2.lengthBytesUTF8 = C, e2.stackSave = Tt, e2.stackRestore = St, e2.stackAlloc = Ot, H = function t3() {
              mt || jt(), mt || (H = t3);
            }, e2.preInit)
              for ("function" == typeof e2.preInit && (e2.preInit = [e2.preInit]); 0 < e2.preInit.length; )
                e2.preInit.pop()();
            return jt(), t2.ready;
          });
          t.exports = r;
        }, 4537: (t) => {
          "use strict";
          t.exports = function(t2, e) {
            for (var n = new Array(arguments.length - 1), r = 0, i = 2, o = true; i < arguments.length; )
              n[r++] = arguments[i++];
            return new Promise(function(i2, a) {
              n[r] = function(t3) {
                if (o)
                  if (o = false, t3)
                    a(t3);
                  else {
                    for (var e2 = new Array(arguments.length - 1), n2 = 0; n2 < e2.length; )
                      e2[n2++] = arguments[n2];
                    i2.apply(null, e2);
                  }
              };
              try {
                t2.apply(e || null, n);
              } catch (t3) {
                o && (o = false, a(t3));
              }
            });
          };
        }, 7419: (t, e) => {
          "use strict";
          var n = e;
          n.length = function(t2) {
            var e2 = t2.length;
            if (!e2)
              return 0;
            for (var n2 = 0; --e2 % 4 > 1 && "=" === t2.charAt(e2); )
              ++n2;
            return Math.ceil(3 * t2.length) / 4 - n2;
          };
          for (var r = new Array(64), i = new Array(123), o = 0; o < 64; )
            i[r[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
          n.encode = function(t2, e2, n2) {
            for (var i2, o2 = null, a2 = [], s = 0, u = 0; e2 < n2; ) {
              var c = t2[e2++];
              switch (u) {
                case 0:
                  a2[s++] = r[c >> 2], i2 = (3 & c) << 4, u = 1;
                  break;
                case 1:
                  a2[s++] = r[i2 | c >> 4], i2 = (15 & c) << 2, u = 2;
                  break;
                case 2:
                  a2[s++] = r[i2 | c >> 6], a2[s++] = r[63 & c], u = 0;
              }
              s > 8191 && ((o2 || (o2 = [])).push(String.fromCharCode.apply(String, a2)), s = 0);
            }
            return u && (a2[s++] = r[i2], a2[s++] = 61, 1 === u && (a2[s++] = 61)), o2 ? (s && o2.push(String.fromCharCode.apply(String, a2.slice(0, s))), o2.join("")) : String.fromCharCode.apply(String, a2.slice(0, s));
          };
          var a = "invalid encoding";
          n.decode = function(t2, e2, n2) {
            for (var r2, o2 = n2, s = 0, u = 0; u < t2.length; ) {
              var c = t2.charCodeAt(u++);
              if (61 === c && s > 1)
                break;
              if (void 0 === (c = i[c]))
                throw Error(a);
              switch (s) {
                case 0:
                  r2 = c, s = 1;
                  break;
                case 1:
                  e2[n2++] = r2 << 2 | (48 & c) >> 4, r2 = c, s = 2;
                  break;
                case 2:
                  e2[n2++] = (15 & r2) << 4 | (60 & c) >> 2, r2 = c, s = 3;
                  break;
                case 3:
                  e2[n2++] = (3 & r2) << 6 | c, s = 0;
              }
            }
            if (1 === s)
              throw Error(a);
            return n2 - o2;
          }, n.test = function(t2) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t2);
          };
        }, 9211: (t) => {
          "use strict";
          function e() {
            this._listeners = {};
          }
          t.exports = e, e.prototype.on = function(t2, e2, n) {
            return (this._listeners[t2] || (this._listeners[t2] = [])).push({ fn: e2, ctx: n || this }), this;
          }, e.prototype.off = function(t2, e2) {
            if (void 0 === t2)
              this._listeners = {};
            else if (void 0 === e2)
              this._listeners[t2] = [];
            else
              for (var n = this._listeners[t2], r = 0; r < n.length; )
                n[r].fn === e2 ? n.splice(r, 1) : ++r;
            return this;
          }, e.prototype.emit = function(t2) {
            var e2 = this._listeners[t2];
            if (e2) {
              for (var n = [], r = 1; r < arguments.length; )
                n.push(arguments[r++]);
              for (r = 0; r < e2.length; )
                e2[r].fn.apply(e2[r++].ctx, n);
            }
            return this;
          };
        }, 945: (t) => {
          "use strict";
          function e(t2) {
            return "undefined" != typeof Float32Array ? function() {
              var e2 = new Float32Array([-0]), n2 = new Uint8Array(e2.buffer), r2 = 128 === n2[3];
              function i2(t3, r3, i3) {
                e2[0] = t3, r3[i3] = n2[0], r3[i3 + 1] = n2[1], r3[i3 + 2] = n2[2], r3[i3 + 3] = n2[3];
              }
              function o2(t3, r3, i3) {
                e2[0] = t3, r3[i3] = n2[3], r3[i3 + 1] = n2[2], r3[i3 + 2] = n2[1], r3[i3 + 3] = n2[0];
              }
              function a(t3, r3) {
                return n2[0] = t3[r3], n2[1] = t3[r3 + 1], n2[2] = t3[r3 + 2], n2[3] = t3[r3 + 3], e2[0];
              }
              function s(t3, r3) {
                return n2[3] = t3[r3], n2[2] = t3[r3 + 1], n2[1] = t3[r3 + 2], n2[0] = t3[r3 + 3], e2[0];
              }
              t2.writeFloatLE = r2 ? i2 : o2, t2.writeFloatBE = r2 ? o2 : i2, t2.readFloatLE = r2 ? a : s, t2.readFloatBE = r2 ? s : a;
            }() : function() {
              function e2(t3, e3, n2, r2) {
                var i2 = e3 < 0 ? 1 : 0;
                if (i2 && (e3 = -e3), 0 === e3)
                  t3(1 / e3 > 0 ? 0 : 2147483648, n2, r2);
                else if (isNaN(e3))
                  t3(2143289344, n2, r2);
                else if (e3 > 34028234663852886e22)
                  t3((i2 << 31 | 2139095040) >>> 0, n2, r2);
                else if (e3 < 11754943508222875e-54)
                  t3((i2 << 31 | Math.round(e3 / 1401298464324817e-60)) >>> 0, n2, r2);
                else {
                  var o2 = Math.floor(Math.log(e3) / Math.LN2);
                  t3((i2 << 31 | o2 + 127 << 23 | 8388607 & Math.round(e3 * Math.pow(2, -o2) * 8388608)) >>> 0, n2, r2);
                }
              }
              function a(t3, e3, n2) {
                var r2 = t3(e3, n2), i2 = 2 * (r2 >> 31) + 1, o2 = r2 >>> 23 & 255, a2 = 8388607 & r2;
                return 255 === o2 ? a2 ? NaN : i2 * (1 / 0) : 0 === o2 ? 1401298464324817e-60 * i2 * a2 : i2 * Math.pow(2, o2 - 150) * (a2 + 8388608);
              }
              t2.writeFloatLE = e2.bind(null, n), t2.writeFloatBE = e2.bind(null, r), t2.readFloatLE = a.bind(null, i), t2.readFloatBE = a.bind(null, o);
            }(), "undefined" != typeof Float64Array ? function() {
              var e2 = new Float64Array([-0]), n2 = new Uint8Array(e2.buffer), r2 = 128 === n2[7];
              function i2(t3, r3, i3) {
                e2[0] = t3, r3[i3] = n2[0], r3[i3 + 1] = n2[1], r3[i3 + 2] = n2[2], r3[i3 + 3] = n2[3], r3[i3 + 4] = n2[4], r3[i3 + 5] = n2[5], r3[i3 + 6] = n2[6], r3[i3 + 7] = n2[7];
              }
              function o2(t3, r3, i3) {
                e2[0] = t3, r3[i3] = n2[7], r3[i3 + 1] = n2[6], r3[i3 + 2] = n2[5], r3[i3 + 3] = n2[4], r3[i3 + 4] = n2[3], r3[i3 + 5] = n2[2], r3[i3 + 6] = n2[1], r3[i3 + 7] = n2[0];
              }
              function a(t3, r3) {
                return n2[0] = t3[r3], n2[1] = t3[r3 + 1], n2[2] = t3[r3 + 2], n2[3] = t3[r3 + 3], n2[4] = t3[r3 + 4], n2[5] = t3[r3 + 5], n2[6] = t3[r3 + 6], n2[7] = t3[r3 + 7], e2[0];
              }
              function s(t3, r3) {
                return n2[7] = t3[r3], n2[6] = t3[r3 + 1], n2[5] = t3[r3 + 2], n2[4] = t3[r3 + 3], n2[3] = t3[r3 + 4], n2[2] = t3[r3 + 5], n2[1] = t3[r3 + 6], n2[0] = t3[r3 + 7], e2[0];
              }
              t2.writeDoubleLE = r2 ? i2 : o2, t2.writeDoubleBE = r2 ? o2 : i2, t2.readDoubleLE = r2 ? a : s, t2.readDoubleBE = r2 ? s : a;
            }() : function() {
              function e2(t3, e3, n2, r2, i2, o2) {
                var a2 = r2 < 0 ? 1 : 0;
                if (a2 && (r2 = -r2), 0 === r2)
                  t3(0, i2, o2 + e3), t3(1 / r2 > 0 ? 0 : 2147483648, i2, o2 + n2);
                else if (isNaN(r2))
                  t3(0, i2, o2 + e3), t3(2146959360, i2, o2 + n2);
                else if (r2 > 17976931348623157e292)
                  t3(0, i2, o2 + e3), t3((a2 << 31 | 2146435072) >>> 0, i2, o2 + n2);
                else {
                  var s;
                  if (r2 < 22250738585072014e-324)
                    t3((s = r2 / 5e-324) >>> 0, i2, o2 + e3), t3((a2 << 31 | s / 4294967296) >>> 0, i2, o2 + n2);
                  else {
                    var u = Math.floor(Math.log(r2) / Math.LN2);
                    1024 === u && (u = 1023), t3(4503599627370496 * (s = r2 * Math.pow(2, -u)) >>> 0, i2, o2 + e3), t3((a2 << 31 | u + 1023 << 20 | 1048576 * s & 1048575) >>> 0, i2, o2 + n2);
                  }
                }
              }
              function a(t3, e3, n2, r2, i2) {
                var o2 = t3(r2, i2 + e3), a2 = t3(r2, i2 + n2), s = 2 * (a2 >> 31) + 1, u = a2 >>> 20 & 2047, c = 4294967296 * (1048575 & a2) + o2;
                return 2047 === u ? c ? NaN : s * (1 / 0) : 0 === u ? 5e-324 * s * c : s * Math.pow(2, u - 1075) * (c + 4503599627370496);
              }
              t2.writeDoubleLE = e2.bind(null, n, 0, 4), t2.writeDoubleBE = e2.bind(null, r, 4, 0), t2.readDoubleLE = a.bind(null, i, 0, 4), t2.readDoubleBE = a.bind(null, o, 4, 0);
            }(), t2;
          }
          function n(t2, e2, n2) {
            e2[n2] = 255 & t2, e2[n2 + 1] = t2 >>> 8 & 255, e2[n2 + 2] = t2 >>> 16 & 255, e2[n2 + 3] = t2 >>> 24;
          }
          function r(t2, e2, n2) {
            e2[n2] = t2 >>> 24, e2[n2 + 1] = t2 >>> 16 & 255, e2[n2 + 2] = t2 >>> 8 & 255, e2[n2 + 3] = 255 & t2;
          }
          function i(t2, e2) {
            return (t2[e2] | t2[e2 + 1] << 8 | t2[e2 + 2] << 16 | t2[e2 + 3] << 24) >>> 0;
          }
          function o(t2, e2) {
            return (t2[e2] << 24 | t2[e2 + 1] << 16 | t2[e2 + 2] << 8 | t2[e2 + 3]) >>> 0;
          }
          t.exports = e(e);
        }, 7199: (module) => {
          "use strict";
          function inquire(moduleName) {
            try {
              var mod = eval("quire".replace(/^/, "re"))(moduleName);
              if (mod && (mod.length || Object.keys(mod).length))
                return mod;
            } catch (t) {
            }
            return null;
          }
          module.exports = inquire;
        }, 6662: (t) => {
          "use strict";
          t.exports = function(t2, e, n) {
            var r = n || 8192, i = r >>> 1, o = null, a = r;
            return function(n2) {
              if (n2 < 1 || n2 > i)
                return t2(n2);
              a + n2 > r && (o = t2(r), a = 0);
              var s = e.call(o, a, a += n2);
              return 7 & a && (a = 1 + (7 | a)), s;
            };
          };
        }, 4997: (t, e) => {
          "use strict";
          var n = e;
          n.length = function(t2) {
            for (var e2 = 0, n2 = 0, r = 0; r < t2.length; ++r)
              (n2 = t2.charCodeAt(r)) < 128 ? e2 += 1 : n2 < 2048 ? e2 += 2 : 55296 == (64512 & n2) && 56320 == (64512 & t2.charCodeAt(r + 1)) ? (++r, e2 += 4) : e2 += 3;
            return e2;
          }, n.read = function(t2, e2, n2) {
            if (n2 - e2 < 1)
              return "";
            for (var r, i = null, o = [], a = 0; e2 < n2; )
              (r = t2[e2++]) < 128 ? o[a++] = r : r > 191 && r < 224 ? o[a++] = (31 & r) << 6 | 63 & t2[e2++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & t2[e2++]) << 12 | (63 & t2[e2++]) << 6 | 63 & t2[e2++]) - 65536, o[a++] = 55296 + (r >> 10), o[a++] = 56320 + (1023 & r)) : o[a++] = (15 & r) << 12 | (63 & t2[e2++]) << 6 | 63 & t2[e2++], a > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), a = 0);
            return i ? (a && i.push(String.fromCharCode.apply(String, o.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, a));
          }, n.write = function(t2, e2, n2) {
            for (var r, i, o = n2, a = 0; a < t2.length; ++a)
              (r = t2.charCodeAt(a)) < 128 ? e2[n2++] = r : r < 2048 ? (e2[n2++] = r >> 6 | 192, e2[n2++] = 63 & r | 128) : 55296 == (64512 & r) && 56320 == (64512 & (i = t2.charCodeAt(a + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++a, e2[n2++] = r >> 18 | 240, e2[n2++] = r >> 12 & 63 | 128, e2[n2++] = r >> 6 & 63 | 128, e2[n2++] = 63 & r | 128) : (e2[n2++] = r >> 12 | 224, e2[n2++] = r >> 6 & 63 | 128, e2[n2++] = 63 & r | 128);
            return n2 - o;
          };
        }, 3442: (t, e) => {
          "use strict";
          e.__esModule = true;
          var n = function() {
            function t2(e2) {
              if (!e2)
                throw new TypeError("Invalid argument; `value` has no value.");
              this.value = t2.EMPTY, e2 && t2.isGuid(e2) && (this.value = e2);
            }
            return t2.isGuid = function(e2) {
              var n2 = e2.toString();
              return e2 && (e2 instanceof t2 || t2.validator.test(n2));
            }, t2.create = function() {
              return new t2([t2.gen(2), t2.gen(1), t2.gen(1), t2.gen(1), t2.gen(3)].join("-"));
            }, t2.createEmpty = function() {
              return new t2("emptyguid");
            }, t2.parse = function(e2) {
              return new t2(e2);
            }, t2.raw = function() {
              return [t2.gen(2), t2.gen(1), t2.gen(1), t2.gen(1), t2.gen(3)].join("-");
            }, t2.gen = function(t3) {
              for (var e2 = "", n2 = 0; n2 < t3; n2++)
                e2 += (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
              return e2;
            }, t2.prototype.equals = function(e2) {
              return t2.isGuid(e2) && this.value === e2.toString();
            }, t2.prototype.isEmpty = function() {
              return this.value === t2.EMPTY;
            }, t2.prototype.toString = function() {
              return this.value;
            }, t2.prototype.toJSON = function() {
              return { value: this.value };
            }, t2.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), t2.EMPTY = "00000000-0000-0000-0000-000000000000", t2;
          }();
          e.Guid = n;
        }, 3720: (t) => {
          t.exports = n;
          var e = null;
          try {
            e = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
          } catch (t2) {
          }
          function n(t2, e2, n2) {
            this.low = 0 | t2, this.high = 0 | e2, this.unsigned = !!n2;
          }
          function r(t2) {
            return true === (t2 && t2.__isLong__);
          }
          n.prototype.__isLong__, Object.defineProperty(n.prototype, "__isLong__", { value: true }), n.isLong = r;
          var i = {}, o = {};
          function a(t2, e2) {
            var n2, r2, a2;
            return e2 ? (a2 = 0 <= (t2 >>>= 0) && t2 < 256) && (r2 = o[t2]) ? r2 : (n2 = u(t2, (0 | t2) < 0 ? -1 : 0, true), a2 && (o[t2] = n2), n2) : (a2 = -128 <= (t2 |= 0) && t2 < 128) && (r2 = i[t2]) ? r2 : (n2 = u(t2, t2 < 0 ? -1 : 0, false), a2 && (i[t2] = n2), n2);
          }
          function s(t2, e2) {
            if (isNaN(t2))
              return e2 ? m : b;
            if (e2) {
              if (t2 < 0)
                return m;
              if (t2 >= d)
                return x;
            } else {
              if (t2 <= -h)
                return T;
              if (t2 + 1 >= h)
                return w;
            }
            return t2 < 0 ? s(-t2, e2).neg() : u(t2 % f | 0, t2 / f | 0, e2);
          }
          function u(t2, e2, r2) {
            return new n(t2, e2, r2);
          }
          n.fromInt = a, n.fromNumber = s, n.fromBits = u;
          var c = Math.pow;
          function l(t2, e2, n2) {
            if (0 === t2.length)
              throw Error("empty string");
            if ("NaN" === t2 || "Infinity" === t2 || "+Infinity" === t2 || "-Infinity" === t2)
              return b;
            if ("number" == typeof e2 ? (n2 = e2, e2 = false) : e2 = !!e2, (n2 = n2 || 10) < 2 || 36 < n2)
              throw RangeError("radix");
            var r2;
            if ((r2 = t2.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (0 === r2)
              return l(t2.substring(1), e2, n2).neg();
            for (var i2 = s(c(n2, 8)), o2 = b, a2 = 0; a2 < t2.length; a2 += 8) {
              var u2 = Math.min(8, t2.length - a2), p2 = parseInt(t2.substring(a2, a2 + u2), n2);
              if (u2 < 8) {
                var f2 = s(c(n2, u2));
                o2 = o2.mul(f2).add(s(p2));
              } else
                o2 = (o2 = o2.mul(i2)).add(s(p2));
            }
            return o2.unsigned = e2, o2;
          }
          function p(t2, e2) {
            return "number" == typeof t2 ? s(t2, e2) : "string" == typeof t2 ? l(t2, e2) : u(t2.low, t2.high, "boolean" == typeof e2 ? e2 : t2.unsigned);
          }
          n.fromString = l, n.fromValue = p;
          var f = 4294967296, d = f * f, h = d / 2, g = a(1 << 24), b = a(0);
          n.ZERO = b;
          var m = a(0, true);
          n.UZERO = m;
          var y = a(1);
          n.ONE = y;
          var _ = a(1, true);
          n.UONE = _;
          var v = a(-1);
          n.NEG_ONE = v;
          var w = u(-1, 2147483647, false);
          n.MAX_VALUE = w;
          var x = u(-1, -1, true);
          n.MAX_UNSIGNED_VALUE = x;
          var T = u(0, -2147483648, false);
          n.MIN_VALUE = T;
          var S = n.prototype;
          S.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low;
          }, S.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * f + (this.low >>> 0) : this.high * f + (this.low >>> 0);
          }, S.toString = function(t2) {
            if ((t2 = t2 || 10) < 2 || 36 < t2)
              throw RangeError("radix");
            if (this.isZero())
              return "0";
            if (this.isNegative()) {
              if (this.eq(T)) {
                var e2 = s(t2), n2 = this.div(e2), r2 = n2.mul(e2).sub(this);
                return n2.toString(t2) + r2.toInt().toString(t2);
              }
              return "-" + this.neg().toString(t2);
            }
            for (var i2 = s(c(t2, 6), this.unsigned), o2 = this, a2 = ""; ; ) {
              var u2 = o2.div(i2), l2 = (o2.sub(u2.mul(i2)).toInt() >>> 0).toString(t2);
              if ((o2 = u2).isZero())
                return l2 + a2;
              for (; l2.length < 6; )
                l2 = "0" + l2;
              a2 = "" + l2 + a2;
            }
          }, S.getHighBits = function() {
            return this.high;
          }, S.getHighBitsUnsigned = function() {
            return this.high >>> 0;
          }, S.getLowBits = function() {
            return this.low;
          }, S.getLowBitsUnsigned = function() {
            return this.low >>> 0;
          }, S.getNumBitsAbs = function() {
            if (this.isNegative())
              return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
            for (var t2 = 0 != this.high ? this.high : this.low, e2 = 31; e2 > 0 && 0 == (t2 & 1 << e2); e2--)
              ;
            return 0 != this.high ? e2 + 33 : e2 + 1;
          }, S.isZero = function() {
            return 0 === this.high && 0 === this.low;
          }, S.eqz = S.isZero, S.isNegative = function() {
            return !this.unsigned && this.high < 0;
          }, S.isPositive = function() {
            return this.unsigned || this.high >= 0;
          }, S.isOdd = function() {
            return 1 == (1 & this.low);
          }, S.isEven = function() {
            return 0 == (1 & this.low);
          }, S.equals = function(t2) {
            return r(t2) || (t2 = p(t2)), (this.unsigned === t2.unsigned || this.high >>> 31 != 1 || t2.high >>> 31 != 1) && this.high === t2.high && this.low === t2.low;
          }, S.eq = S.equals, S.notEquals = function(t2) {
            return !this.eq(t2);
          }, S.neq = S.notEquals, S.ne = S.notEquals, S.lessThan = function(t2) {
            return this.comp(t2) < 0;
          }, S.lt = S.lessThan, S.lessThanOrEqual = function(t2) {
            return this.comp(t2) <= 0;
          }, S.lte = S.lessThanOrEqual, S.le = S.lessThanOrEqual, S.greaterThan = function(t2) {
            return this.comp(t2) > 0;
          }, S.gt = S.greaterThan, S.greaterThanOrEqual = function(t2) {
            return this.comp(t2) >= 0;
          }, S.gte = S.greaterThanOrEqual, S.ge = S.greaterThanOrEqual, S.compare = function(t2) {
            if (r(t2) || (t2 = p(t2)), this.eq(t2))
              return 0;
            var e2 = this.isNegative(), n2 = t2.isNegative();
            return e2 && !n2 ? -1 : !e2 && n2 ? 1 : this.unsigned ? t2.high >>> 0 > this.high >>> 0 || t2.high === this.high && t2.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t2).isNegative() ? -1 : 1;
          }, S.comp = S.compare, S.negate = function() {
            return !this.unsigned && this.eq(T) ? T : this.not().add(y);
          }, S.neg = S.negate, S.add = function(t2) {
            r(t2) || (t2 = p(t2));
            var e2 = this.high >>> 16, n2 = 65535 & this.high, i2 = this.low >>> 16, o2 = 65535 & this.low, a2 = t2.high >>> 16, s2 = 65535 & t2.high, c2 = t2.low >>> 16, l2 = 0, f2 = 0, d2 = 0, h2 = 0;
            return d2 += (h2 += o2 + (65535 & t2.low)) >>> 16, f2 += (d2 += i2 + c2) >>> 16, l2 += (f2 += n2 + s2) >>> 16, l2 += e2 + a2, u((d2 &= 65535) << 16 | (h2 &= 65535), (l2 &= 65535) << 16 | (f2 &= 65535), this.unsigned);
          }, S.subtract = function(t2) {
            return r(t2) || (t2 = p(t2)), this.add(t2.neg());
          }, S.sub = S.subtract, S.multiply = function(t2) {
            if (this.isZero())
              return b;
            if (r(t2) || (t2 = p(t2)), e)
              return u(e.mul(this.low, this.high, t2.low, t2.high), e.get_high(), this.unsigned);
            if (t2.isZero())
              return b;
            if (this.eq(T))
              return t2.isOdd() ? T : b;
            if (t2.eq(T))
              return this.isOdd() ? T : b;
            if (this.isNegative())
              return t2.isNegative() ? this.neg().mul(t2.neg()) : this.neg().mul(t2).neg();
            if (t2.isNegative())
              return this.mul(t2.neg()).neg();
            if (this.lt(g) && t2.lt(g))
              return s(this.toNumber() * t2.toNumber(), this.unsigned);
            var n2 = this.high >>> 16, i2 = 65535 & this.high, o2 = this.low >>> 16, a2 = 65535 & this.low, c2 = t2.high >>> 16, l2 = 65535 & t2.high, f2 = t2.low >>> 16, d2 = 65535 & t2.low, h2 = 0, m2 = 0, y2 = 0, _2 = 0;
            return y2 += (_2 += a2 * d2) >>> 16, m2 += (y2 += o2 * d2) >>> 16, y2 &= 65535, m2 += (y2 += a2 * f2) >>> 16, h2 += (m2 += i2 * d2) >>> 16, m2 &= 65535, h2 += (m2 += o2 * f2) >>> 16, m2 &= 65535, h2 += (m2 += a2 * l2) >>> 16, h2 += n2 * d2 + i2 * f2 + o2 * l2 + a2 * c2, u((y2 &= 65535) << 16 | (_2 &= 65535), (h2 &= 65535) << 16 | (m2 &= 65535), this.unsigned);
          }, S.mul = S.multiply, S.divide = function(t2) {
            if (r(t2) || (t2 = p(t2)), t2.isZero())
              throw Error("division by zero");
            var n2, i2, o2;
            if (e)
              return this.unsigned || -2147483648 !== this.high || -1 !== t2.low || -1 !== t2.high ? u((this.unsigned ? e.div_u : e.div_s)(this.low, this.high, t2.low, t2.high), e.get_high(), this.unsigned) : this;
            if (this.isZero())
              return this.unsigned ? m : b;
            if (this.unsigned) {
              if (t2.unsigned || (t2 = t2.toUnsigned()), t2.gt(this))
                return m;
              if (t2.gt(this.shru(1)))
                return _;
              o2 = m;
            } else {
              if (this.eq(T))
                return t2.eq(y) || t2.eq(v) ? T : t2.eq(T) ? y : (n2 = this.shr(1).div(t2).shl(1)).eq(b) ? t2.isNegative() ? y : v : (i2 = this.sub(t2.mul(n2)), o2 = n2.add(i2.div(t2)));
              if (t2.eq(T))
                return this.unsigned ? m : b;
              if (this.isNegative())
                return t2.isNegative() ? this.neg().div(t2.neg()) : this.neg().div(t2).neg();
              if (t2.isNegative())
                return this.div(t2.neg()).neg();
              o2 = b;
            }
            for (i2 = this; i2.gte(t2); ) {
              n2 = Math.max(1, Math.floor(i2.toNumber() / t2.toNumber()));
              for (var a2 = Math.ceil(Math.log(n2) / Math.LN2), l2 = a2 <= 48 ? 1 : c(2, a2 - 48), f2 = s(n2), d2 = f2.mul(t2); d2.isNegative() || d2.gt(i2); )
                d2 = (f2 = s(n2 -= l2, this.unsigned)).mul(t2);
              f2.isZero() && (f2 = y), o2 = o2.add(f2), i2 = i2.sub(d2);
            }
            return o2;
          }, S.div = S.divide, S.modulo = function(t2) {
            return r(t2) || (t2 = p(t2)), e ? u((this.unsigned ? e.rem_u : e.rem_s)(this.low, this.high, t2.low, t2.high), e.get_high(), this.unsigned) : this.sub(this.div(t2).mul(t2));
          }, S.mod = S.modulo, S.rem = S.modulo, S.not = function() {
            return u(~this.low, ~this.high, this.unsigned);
          }, S.and = function(t2) {
            return r(t2) || (t2 = p(t2)), u(this.low & t2.low, this.high & t2.high, this.unsigned);
          }, S.or = function(t2) {
            return r(t2) || (t2 = p(t2)), u(this.low | t2.low, this.high | t2.high, this.unsigned);
          }, S.xor = function(t2) {
            return r(t2) || (t2 = p(t2)), u(this.low ^ t2.low, this.high ^ t2.high, this.unsigned);
          }, S.shiftLeft = function(t2) {
            return r(t2) && (t2 = t2.toInt()), 0 == (t2 &= 63) ? this : t2 < 32 ? u(this.low << t2, this.high << t2 | this.low >>> 32 - t2, this.unsigned) : u(0, this.low << t2 - 32, this.unsigned);
          }, S.shl = S.shiftLeft, S.shiftRight = function(t2) {
            return r(t2) && (t2 = t2.toInt()), 0 == (t2 &= 63) ? this : t2 < 32 ? u(this.low >>> t2 | this.high << 32 - t2, this.high >> t2, this.unsigned) : u(this.high >> t2 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
          }, S.shr = S.shiftRight, S.shiftRightUnsigned = function(t2) {
            if (r(t2) && (t2 = t2.toInt()), 0 == (t2 &= 63))
              return this;
            var e2 = this.high;
            return t2 < 32 ? u(this.low >>> t2 | e2 << 32 - t2, e2 >>> t2, this.unsigned) : u(32 === t2 ? e2 : e2 >>> t2 - 32, 0, this.unsigned);
          }, S.shru = S.shiftRightUnsigned, S.shr_u = S.shiftRightUnsigned, S.toSigned = function() {
            return this.unsigned ? u(this.low, this.high, false) : this;
          }, S.toUnsigned = function() {
            return this.unsigned ? this : u(this.low, this.high, true);
          }, S.toBytes = function(t2) {
            return t2 ? this.toBytesLE() : this.toBytesBE();
          }, S.toBytesLE = function() {
            var t2 = this.high, e2 = this.low;
            return [255 & e2, e2 >>> 8 & 255, e2 >>> 16 & 255, e2 >>> 24, 255 & t2, t2 >>> 8 & 255, t2 >>> 16 & 255, t2 >>> 24];
          }, S.toBytesBE = function() {
            var t2 = this.high, e2 = this.low;
            return [t2 >>> 24, t2 >>> 16 & 255, t2 >>> 8 & 255, 255 & t2, e2 >>> 24, e2 >>> 16 & 255, e2 >>> 8 & 255, 255 & e2];
          }, n.fromBytes = function(t2, e2, r2) {
            return r2 ? n.fromBytesLE(t2, e2) : n.fromBytesBE(t2, e2);
          }, n.fromBytesLE = function(t2, e2) {
            return new n(t2[0] | t2[1] << 8 | t2[2] << 16 | t2[3] << 24, t2[4] | t2[5] << 8 | t2[6] << 16 | t2[7] << 24, e2);
          }, n.fromBytesBE = function(t2, e2) {
            return new n(t2[4] << 24 | t2[5] << 16 | t2[6] << 8 | t2[7], t2[0] << 24 | t2[1] << 16 | t2[2] << 8 | t2[3], e2);
          };
        }, 1446: (t, e, n) => {
          "use strict";
          var r, i, o, a = n(2100), s = a.Reader, u = a.Writer, c = a.util, l = a.roots.default || (a.roots.default = {});
          l.onnx = ((o = {}).Version = (r = {}, (i = Object.create(r))[r[0] = "_START_VERSION"] = 0, i[r[1] = "IR_VERSION_2017_10_10"] = 1, i[r[2] = "IR_VERSION_2017_10_30"] = 2, i[r[3] = "IR_VERSION_2017_11_3"] = 3, i[r[4] = "IR_VERSION_2019_1_22"] = 4, i[r[5] = "IR_VERSION"] = 5, i), o.AttributeProto = function() {
            function t2(t3) {
              if (this.floats = [], this.ints = [], this.strings = [], this.tensors = [], this.graphs = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.name = "", t2.prototype.refAttrName = "", t2.prototype.docString = "", t2.prototype.type = 0, t2.prototype.f = 0, t2.prototype.i = c.Long ? c.Long.fromBits(0, 0, false) : 0, t2.prototype.s = c.newBuffer([]), t2.prototype.t = null, t2.prototype.g = null, t2.prototype.floats = c.emptyArray, t2.prototype.ints = c.emptyArray, t2.prototype.strings = c.emptyArray, t2.prototype.tensors = c.emptyArray, t2.prototype.graphs = c.emptyArray, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.name && t3.hasOwnProperty("name") && e2.uint32(10).string(t3.name), null != t3.f && t3.hasOwnProperty("f") && e2.uint32(21).float(t3.f), null != t3.i && t3.hasOwnProperty("i") && e2.uint32(24).int64(t3.i), null != t3.s && t3.hasOwnProperty("s") && e2.uint32(34).bytes(t3.s), null != t3.t && t3.hasOwnProperty("t") && l.onnx.TensorProto.encode(t3.t, e2.uint32(42).fork()).ldelim(), null != t3.g && t3.hasOwnProperty("g") && l.onnx.GraphProto.encode(t3.g, e2.uint32(50).fork()).ldelim(), null != t3.floats && t3.floats.length) {
                e2.uint32(58).fork();
                for (var n2 = 0; n2 < t3.floats.length; ++n2)
                  e2.float(t3.floats[n2]);
                e2.ldelim();
              }
              if (null != t3.ints && t3.ints.length) {
                for (e2.uint32(66).fork(), n2 = 0; n2 < t3.ints.length; ++n2)
                  e2.int64(t3.ints[n2]);
                e2.ldelim();
              }
              if (null != t3.strings && t3.strings.length)
                for (n2 = 0; n2 < t3.strings.length; ++n2)
                  e2.uint32(74).bytes(t3.strings[n2]);
              if (null != t3.tensors && t3.tensors.length)
                for (n2 = 0; n2 < t3.tensors.length; ++n2)
                  l.onnx.TensorProto.encode(t3.tensors[n2], e2.uint32(82).fork()).ldelim();
              if (null != t3.graphs && t3.graphs.length)
                for (n2 = 0; n2 < t3.graphs.length; ++n2)
                  l.onnx.GraphProto.encode(t3.graphs[n2], e2.uint32(90).fork()).ldelim();
              return null != t3.docString && t3.hasOwnProperty("docString") && e2.uint32(106).string(t3.docString), null != t3.type && t3.hasOwnProperty("type") && e2.uint32(160).int32(t3.type), null != t3.refAttrName && t3.hasOwnProperty("refAttrName") && e2.uint32(170).string(t3.refAttrName), e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.AttributeProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.name = t3.string();
                    break;
                  case 21:
                    r2.refAttrName = t3.string();
                    break;
                  case 13:
                    r2.docString = t3.string();
                    break;
                  case 20:
                    r2.type = t3.int32();
                    break;
                  case 2:
                    r2.f = t3.float();
                    break;
                  case 3:
                    r2.i = t3.int64();
                    break;
                  case 4:
                    r2.s = t3.bytes();
                    break;
                  case 5:
                    r2.t = l.onnx.TensorProto.decode(t3, t3.uint32());
                    break;
                  case 6:
                    r2.g = l.onnx.GraphProto.decode(t3, t3.uint32());
                    break;
                  case 7:
                    if (r2.floats && r2.floats.length || (r2.floats = []), 2 == (7 & i2))
                      for (var o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.floats.push(t3.float());
                    else
                      r2.floats.push(t3.float());
                    break;
                  case 8:
                    if (r2.ints && r2.ints.length || (r2.ints = []), 2 == (7 & i2))
                      for (o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.ints.push(t3.int64());
                    else
                      r2.ints.push(t3.int64());
                    break;
                  case 9:
                    r2.strings && r2.strings.length || (r2.strings = []), r2.strings.push(t3.bytes());
                    break;
                  case 10:
                    r2.tensors && r2.tensors.length || (r2.tensors = []), r2.tensors.push(l.onnx.TensorProto.decode(t3, t3.uint32()));
                    break;
                  case 11:
                    r2.graphs && r2.graphs.length || (r2.graphs = []), r2.graphs.push(l.onnx.GraphProto.decode(t3, t3.uint32()));
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.name && t3.hasOwnProperty("name") && !c.isString(t3.name))
                return "name: string expected";
              if (null != t3.refAttrName && t3.hasOwnProperty("refAttrName") && !c.isString(t3.refAttrName))
                return "refAttrName: string expected";
              if (null != t3.docString && t3.hasOwnProperty("docString") && !c.isString(t3.docString))
                return "docString: string expected";
              if (null != t3.type && t3.hasOwnProperty("type"))
                switch (t3.type) {
                  default:
                    return "type: enum value expected";
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                  case 8:
                  case 9:
                  case 10:
                }
              if (null != t3.f && t3.hasOwnProperty("f") && "number" != typeof t3.f)
                return "f: number expected";
              if (null != t3.i && t3.hasOwnProperty("i") && !(c.isInteger(t3.i) || t3.i && c.isInteger(t3.i.low) && c.isInteger(t3.i.high)))
                return "i: integer|Long expected";
              if (null != t3.s && t3.hasOwnProperty("s") && !(t3.s && "number" == typeof t3.s.length || c.isString(t3.s)))
                return "s: buffer expected";
              if (null != t3.t && t3.hasOwnProperty("t") && (n2 = l.onnx.TensorProto.verify(t3.t)))
                return "t." + n2;
              if (null != t3.g && t3.hasOwnProperty("g") && (n2 = l.onnx.GraphProto.verify(t3.g)))
                return "g." + n2;
              if (null != t3.floats && t3.hasOwnProperty("floats")) {
                if (!Array.isArray(t3.floats))
                  return "floats: array expected";
                for (var e2 = 0; e2 < t3.floats.length; ++e2)
                  if ("number" != typeof t3.floats[e2])
                    return "floats: number[] expected";
              }
              if (null != t3.ints && t3.hasOwnProperty("ints")) {
                if (!Array.isArray(t3.ints))
                  return "ints: array expected";
                for (e2 = 0; e2 < t3.ints.length; ++e2)
                  if (!(c.isInteger(t3.ints[e2]) || t3.ints[e2] && c.isInteger(t3.ints[e2].low) && c.isInteger(t3.ints[e2].high)))
                    return "ints: integer|Long[] expected";
              }
              if (null != t3.strings && t3.hasOwnProperty("strings")) {
                if (!Array.isArray(t3.strings))
                  return "strings: array expected";
                for (e2 = 0; e2 < t3.strings.length; ++e2)
                  if (!(t3.strings[e2] && "number" == typeof t3.strings[e2].length || c.isString(t3.strings[e2])))
                    return "strings: buffer[] expected";
              }
              if (null != t3.tensors && t3.hasOwnProperty("tensors")) {
                if (!Array.isArray(t3.tensors))
                  return "tensors: array expected";
                for (e2 = 0; e2 < t3.tensors.length; ++e2)
                  if (n2 = l.onnx.TensorProto.verify(t3.tensors[e2]))
                    return "tensors." + n2;
              }
              if (null != t3.graphs && t3.hasOwnProperty("graphs")) {
                if (!Array.isArray(t3.graphs))
                  return "graphs: array expected";
                for (e2 = 0; e2 < t3.graphs.length; ++e2) {
                  var n2;
                  if (n2 = l.onnx.GraphProto.verify(t3.graphs[e2]))
                    return "graphs." + n2;
                }
              }
              return null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.AttributeProto)
                return t3;
              var e2 = new l.onnx.AttributeProto();
              switch (null != t3.name && (e2.name = String(t3.name)), null != t3.refAttrName && (e2.refAttrName = String(t3.refAttrName)), null != t3.docString && (e2.docString = String(t3.docString)), t3.type) {
                case "UNDEFINED":
                case 0:
                  e2.type = 0;
                  break;
                case "FLOAT":
                case 1:
                  e2.type = 1;
                  break;
                case "INT":
                case 2:
                  e2.type = 2;
                  break;
                case "STRING":
                case 3:
                  e2.type = 3;
                  break;
                case "TENSOR":
                case 4:
                  e2.type = 4;
                  break;
                case "GRAPH":
                case 5:
                  e2.type = 5;
                  break;
                case "FLOATS":
                case 6:
                  e2.type = 6;
                  break;
                case "INTS":
                case 7:
                  e2.type = 7;
                  break;
                case "STRINGS":
                case 8:
                  e2.type = 8;
                  break;
                case "TENSORS":
                case 9:
                  e2.type = 9;
                  break;
                case "GRAPHS":
                case 10:
                  e2.type = 10;
              }
              if (null != t3.f && (e2.f = Number(t3.f)), null != t3.i && (c.Long ? (e2.i = c.Long.fromValue(t3.i)).unsigned = false : "string" == typeof t3.i ? e2.i = parseInt(t3.i, 10) : "number" == typeof t3.i ? e2.i = t3.i : "object" == typeof t3.i && (e2.i = new c.LongBits(t3.i.low >>> 0, t3.i.high >>> 0).toNumber())), null != t3.s && ("string" == typeof t3.s ? c.base64.decode(t3.s, e2.s = c.newBuffer(c.base64.length(t3.s)), 0) : t3.s.length && (e2.s = t3.s)), null != t3.t) {
                if ("object" != typeof t3.t)
                  throw TypeError(".onnx.AttributeProto.t: object expected");
                e2.t = l.onnx.TensorProto.fromObject(t3.t);
              }
              if (null != t3.g) {
                if ("object" != typeof t3.g)
                  throw TypeError(".onnx.AttributeProto.g: object expected");
                e2.g = l.onnx.GraphProto.fromObject(t3.g);
              }
              if (t3.floats) {
                if (!Array.isArray(t3.floats))
                  throw TypeError(".onnx.AttributeProto.floats: array expected");
                e2.floats = [];
                for (var n2 = 0; n2 < t3.floats.length; ++n2)
                  e2.floats[n2] = Number(t3.floats[n2]);
              }
              if (t3.ints) {
                if (!Array.isArray(t3.ints))
                  throw TypeError(".onnx.AttributeProto.ints: array expected");
                for (e2.ints = [], n2 = 0; n2 < t3.ints.length; ++n2)
                  c.Long ? (e2.ints[n2] = c.Long.fromValue(t3.ints[n2])).unsigned = false : "string" == typeof t3.ints[n2] ? e2.ints[n2] = parseInt(t3.ints[n2], 10) : "number" == typeof t3.ints[n2] ? e2.ints[n2] = t3.ints[n2] : "object" == typeof t3.ints[n2] && (e2.ints[n2] = new c.LongBits(t3.ints[n2].low >>> 0, t3.ints[n2].high >>> 0).toNumber());
              }
              if (t3.strings) {
                if (!Array.isArray(t3.strings))
                  throw TypeError(".onnx.AttributeProto.strings: array expected");
                for (e2.strings = [], n2 = 0; n2 < t3.strings.length; ++n2)
                  "string" == typeof t3.strings[n2] ? c.base64.decode(t3.strings[n2], e2.strings[n2] = c.newBuffer(c.base64.length(t3.strings[n2])), 0) : t3.strings[n2].length && (e2.strings[n2] = t3.strings[n2]);
              }
              if (t3.tensors) {
                if (!Array.isArray(t3.tensors))
                  throw TypeError(".onnx.AttributeProto.tensors: array expected");
                for (e2.tensors = [], n2 = 0; n2 < t3.tensors.length; ++n2) {
                  if ("object" != typeof t3.tensors[n2])
                    throw TypeError(".onnx.AttributeProto.tensors: object expected");
                  e2.tensors[n2] = l.onnx.TensorProto.fromObject(t3.tensors[n2]);
                }
              }
              if (t3.graphs) {
                if (!Array.isArray(t3.graphs))
                  throw TypeError(".onnx.AttributeProto.graphs: array expected");
                for (e2.graphs = [], n2 = 0; n2 < t3.graphs.length; ++n2) {
                  if ("object" != typeof t3.graphs[n2])
                    throw TypeError(".onnx.AttributeProto.graphs: object expected");
                  e2.graphs[n2] = l.onnx.GraphProto.fromObject(t3.graphs[n2]);
                }
              }
              return e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.floats = [], n2.ints = [], n2.strings = [], n2.tensors = [], n2.graphs = []), e2.defaults) {
                if (n2.name = "", n2.f = 0, c.Long) {
                  var r2 = new c.Long(0, 0, false);
                  n2.i = e2.longs === String ? r2.toString() : e2.longs === Number ? r2.toNumber() : r2;
                } else
                  n2.i = e2.longs === String ? "0" : 0;
                e2.bytes === String ? n2.s = "" : (n2.s = [], e2.bytes !== Array && (n2.s = c.newBuffer(n2.s))), n2.t = null, n2.g = null, n2.docString = "", n2.type = e2.enums === String ? "UNDEFINED" : 0, n2.refAttrName = "";
              }
              if (null != t3.name && t3.hasOwnProperty("name") && (n2.name = t3.name), null != t3.f && t3.hasOwnProperty("f") && (n2.f = e2.json && !isFinite(t3.f) ? String(t3.f) : t3.f), null != t3.i && t3.hasOwnProperty("i") && ("number" == typeof t3.i ? n2.i = e2.longs === String ? String(t3.i) : t3.i : n2.i = e2.longs === String ? c.Long.prototype.toString.call(t3.i) : e2.longs === Number ? new c.LongBits(t3.i.low >>> 0, t3.i.high >>> 0).toNumber() : t3.i), null != t3.s && t3.hasOwnProperty("s") && (n2.s = e2.bytes === String ? c.base64.encode(t3.s, 0, t3.s.length) : e2.bytes === Array ? Array.prototype.slice.call(t3.s) : t3.s), null != t3.t && t3.hasOwnProperty("t") && (n2.t = l.onnx.TensorProto.toObject(t3.t, e2)), null != t3.g && t3.hasOwnProperty("g") && (n2.g = l.onnx.GraphProto.toObject(t3.g, e2)), t3.floats && t3.floats.length) {
                n2.floats = [];
                for (var i2 = 0; i2 < t3.floats.length; ++i2)
                  n2.floats[i2] = e2.json && !isFinite(t3.floats[i2]) ? String(t3.floats[i2]) : t3.floats[i2];
              }
              if (t3.ints && t3.ints.length)
                for (n2.ints = [], i2 = 0; i2 < t3.ints.length; ++i2)
                  "number" == typeof t3.ints[i2] ? n2.ints[i2] = e2.longs === String ? String(t3.ints[i2]) : t3.ints[i2] : n2.ints[i2] = e2.longs === String ? c.Long.prototype.toString.call(t3.ints[i2]) : e2.longs === Number ? new c.LongBits(t3.ints[i2].low >>> 0, t3.ints[i2].high >>> 0).toNumber() : t3.ints[i2];
              if (t3.strings && t3.strings.length)
                for (n2.strings = [], i2 = 0; i2 < t3.strings.length; ++i2)
                  n2.strings[i2] = e2.bytes === String ? c.base64.encode(t3.strings[i2], 0, t3.strings[i2].length) : e2.bytes === Array ? Array.prototype.slice.call(t3.strings[i2]) : t3.strings[i2];
              if (t3.tensors && t3.tensors.length)
                for (n2.tensors = [], i2 = 0; i2 < t3.tensors.length; ++i2)
                  n2.tensors[i2] = l.onnx.TensorProto.toObject(t3.tensors[i2], e2);
              if (t3.graphs && t3.graphs.length)
                for (n2.graphs = [], i2 = 0; i2 < t3.graphs.length; ++i2)
                  n2.graphs[i2] = l.onnx.GraphProto.toObject(t3.graphs[i2], e2);
              return null != t3.docString && t3.hasOwnProperty("docString") && (n2.docString = t3.docString), null != t3.type && t3.hasOwnProperty("type") && (n2.type = e2.enums === String ? l.onnx.AttributeProto.AttributeType[t3.type] : t3.type), null != t3.refAttrName && t3.hasOwnProperty("refAttrName") && (n2.refAttrName = t3.refAttrName), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2.AttributeType = function() {
              var t3 = {}, e2 = Object.create(t3);
              return e2[t3[0] = "UNDEFINED"] = 0, e2[t3[1] = "FLOAT"] = 1, e2[t3[2] = "INT"] = 2, e2[t3[3] = "STRING"] = 3, e2[t3[4] = "TENSOR"] = 4, e2[t3[5] = "GRAPH"] = 5, e2[t3[6] = "FLOATS"] = 6, e2[t3[7] = "INTS"] = 7, e2[t3[8] = "STRINGS"] = 8, e2[t3[9] = "TENSORS"] = 9, e2[t3[10] = "GRAPHS"] = 10, e2;
            }(), t2;
          }(), o.ValueInfoProto = function() {
            function t2(t3) {
              if (t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.name = "", t2.prototype.type = null, t2.prototype.docString = "", t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              return e2 || (e2 = u.create()), null != t3.name && t3.hasOwnProperty("name") && e2.uint32(10).string(t3.name), null != t3.type && t3.hasOwnProperty("type") && l.onnx.TypeProto.encode(t3.type, e2.uint32(18).fork()).ldelim(), null != t3.docString && t3.hasOwnProperty("docString") && e2.uint32(26).string(t3.docString), e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.ValueInfoProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.name = t3.string();
                    break;
                  case 2:
                    r2.type = l.onnx.TypeProto.decode(t3, t3.uint32());
                    break;
                  case 3:
                    r2.docString = t3.string();
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.name && t3.hasOwnProperty("name") && !c.isString(t3.name))
                return "name: string expected";
              if (null != t3.type && t3.hasOwnProperty("type")) {
                var e2 = l.onnx.TypeProto.verify(t3.type);
                if (e2)
                  return "type." + e2;
              }
              return null != t3.docString && t3.hasOwnProperty("docString") && !c.isString(t3.docString) ? "docString: string expected" : null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.ValueInfoProto)
                return t3;
              var e2 = new l.onnx.ValueInfoProto();
              if (null != t3.name && (e2.name = String(t3.name)), null != t3.type) {
                if ("object" != typeof t3.type)
                  throw TypeError(".onnx.ValueInfoProto.type: object expected");
                e2.type = l.onnx.TypeProto.fromObject(t3.type);
              }
              return null != t3.docString && (e2.docString = String(t3.docString)), e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              return e2.defaults && (n2.name = "", n2.type = null, n2.docString = ""), null != t3.name && t3.hasOwnProperty("name") && (n2.name = t3.name), null != t3.type && t3.hasOwnProperty("type") && (n2.type = l.onnx.TypeProto.toObject(t3.type, e2)), null != t3.docString && t3.hasOwnProperty("docString") && (n2.docString = t3.docString), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o.NodeProto = function() {
            function t2(t3) {
              if (this.input = [], this.output = [], this.attribute = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.input = c.emptyArray, t2.prototype.output = c.emptyArray, t2.prototype.name = "", t2.prototype.opType = "", t2.prototype.domain = "", t2.prototype.attribute = c.emptyArray, t2.prototype.docString = "", t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.input && t3.input.length)
                for (var n2 = 0; n2 < t3.input.length; ++n2)
                  e2.uint32(10).string(t3.input[n2]);
              if (null != t3.output && t3.output.length)
                for (n2 = 0; n2 < t3.output.length; ++n2)
                  e2.uint32(18).string(t3.output[n2]);
              if (null != t3.name && t3.hasOwnProperty("name") && e2.uint32(26).string(t3.name), null != t3.opType && t3.hasOwnProperty("opType") && e2.uint32(34).string(t3.opType), null != t3.attribute && t3.attribute.length)
                for (n2 = 0; n2 < t3.attribute.length; ++n2)
                  l.onnx.AttributeProto.encode(t3.attribute[n2], e2.uint32(42).fork()).ldelim();
              return null != t3.docString && t3.hasOwnProperty("docString") && e2.uint32(50).string(t3.docString), null != t3.domain && t3.hasOwnProperty("domain") && e2.uint32(58).string(t3.domain), e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.NodeProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.input && r2.input.length || (r2.input = []), r2.input.push(t3.string());
                    break;
                  case 2:
                    r2.output && r2.output.length || (r2.output = []), r2.output.push(t3.string());
                    break;
                  case 3:
                    r2.name = t3.string();
                    break;
                  case 4:
                    r2.opType = t3.string();
                    break;
                  case 7:
                    r2.domain = t3.string();
                    break;
                  case 5:
                    r2.attribute && r2.attribute.length || (r2.attribute = []), r2.attribute.push(l.onnx.AttributeProto.decode(t3, t3.uint32()));
                    break;
                  case 6:
                    r2.docString = t3.string();
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.input && t3.hasOwnProperty("input")) {
                if (!Array.isArray(t3.input))
                  return "input: array expected";
                for (var e2 = 0; e2 < t3.input.length; ++e2)
                  if (!c.isString(t3.input[e2]))
                    return "input: string[] expected";
              }
              if (null != t3.output && t3.hasOwnProperty("output")) {
                if (!Array.isArray(t3.output))
                  return "output: array expected";
                for (e2 = 0; e2 < t3.output.length; ++e2)
                  if (!c.isString(t3.output[e2]))
                    return "output: string[] expected";
              }
              if (null != t3.name && t3.hasOwnProperty("name") && !c.isString(t3.name))
                return "name: string expected";
              if (null != t3.opType && t3.hasOwnProperty("opType") && !c.isString(t3.opType))
                return "opType: string expected";
              if (null != t3.domain && t3.hasOwnProperty("domain") && !c.isString(t3.domain))
                return "domain: string expected";
              if (null != t3.attribute && t3.hasOwnProperty("attribute")) {
                if (!Array.isArray(t3.attribute))
                  return "attribute: array expected";
                for (e2 = 0; e2 < t3.attribute.length; ++e2) {
                  var n2 = l.onnx.AttributeProto.verify(t3.attribute[e2]);
                  if (n2)
                    return "attribute." + n2;
                }
              }
              return null != t3.docString && t3.hasOwnProperty("docString") && !c.isString(t3.docString) ? "docString: string expected" : null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.NodeProto)
                return t3;
              var e2 = new l.onnx.NodeProto();
              if (t3.input) {
                if (!Array.isArray(t3.input))
                  throw TypeError(".onnx.NodeProto.input: array expected");
                e2.input = [];
                for (var n2 = 0; n2 < t3.input.length; ++n2)
                  e2.input[n2] = String(t3.input[n2]);
              }
              if (t3.output) {
                if (!Array.isArray(t3.output))
                  throw TypeError(".onnx.NodeProto.output: array expected");
                for (e2.output = [], n2 = 0; n2 < t3.output.length; ++n2)
                  e2.output[n2] = String(t3.output[n2]);
              }
              if (null != t3.name && (e2.name = String(t3.name)), null != t3.opType && (e2.opType = String(t3.opType)), null != t3.domain && (e2.domain = String(t3.domain)), t3.attribute) {
                if (!Array.isArray(t3.attribute))
                  throw TypeError(".onnx.NodeProto.attribute: array expected");
                for (e2.attribute = [], n2 = 0; n2 < t3.attribute.length; ++n2) {
                  if ("object" != typeof t3.attribute[n2])
                    throw TypeError(".onnx.NodeProto.attribute: object expected");
                  e2.attribute[n2] = l.onnx.AttributeProto.fromObject(t3.attribute[n2]);
                }
              }
              return null != t3.docString && (e2.docString = String(t3.docString)), e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.input = [], n2.output = [], n2.attribute = []), e2.defaults && (n2.name = "", n2.opType = "", n2.docString = "", n2.domain = ""), t3.input && t3.input.length) {
                n2.input = [];
                for (var r2 = 0; r2 < t3.input.length; ++r2)
                  n2.input[r2] = t3.input[r2];
              }
              if (t3.output && t3.output.length)
                for (n2.output = [], r2 = 0; r2 < t3.output.length; ++r2)
                  n2.output[r2] = t3.output[r2];
              if (null != t3.name && t3.hasOwnProperty("name") && (n2.name = t3.name), null != t3.opType && t3.hasOwnProperty("opType") && (n2.opType = t3.opType), t3.attribute && t3.attribute.length)
                for (n2.attribute = [], r2 = 0; r2 < t3.attribute.length; ++r2)
                  n2.attribute[r2] = l.onnx.AttributeProto.toObject(t3.attribute[r2], e2);
              return null != t3.docString && t3.hasOwnProperty("docString") && (n2.docString = t3.docString), null != t3.domain && t3.hasOwnProperty("domain") && (n2.domain = t3.domain), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o.ModelProto = function() {
            function t2(t3) {
              if (this.opsetImport = [], this.metadataProps = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.irVersion = c.Long ? c.Long.fromBits(0, 0, false) : 0, t2.prototype.opsetImport = c.emptyArray, t2.prototype.producerName = "", t2.prototype.producerVersion = "", t2.prototype.domain = "", t2.prototype.modelVersion = c.Long ? c.Long.fromBits(0, 0, false) : 0, t2.prototype.docString = "", t2.prototype.graph = null, t2.prototype.metadataProps = c.emptyArray, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.irVersion && t3.hasOwnProperty("irVersion") && e2.uint32(8).int64(t3.irVersion), null != t3.producerName && t3.hasOwnProperty("producerName") && e2.uint32(18).string(t3.producerName), null != t3.producerVersion && t3.hasOwnProperty("producerVersion") && e2.uint32(26).string(t3.producerVersion), null != t3.domain && t3.hasOwnProperty("domain") && e2.uint32(34).string(t3.domain), null != t3.modelVersion && t3.hasOwnProperty("modelVersion") && e2.uint32(40).int64(t3.modelVersion), null != t3.docString && t3.hasOwnProperty("docString") && e2.uint32(50).string(t3.docString), null != t3.graph && t3.hasOwnProperty("graph") && l.onnx.GraphProto.encode(t3.graph, e2.uint32(58).fork()).ldelim(), null != t3.opsetImport && t3.opsetImport.length)
                for (var n2 = 0; n2 < t3.opsetImport.length; ++n2)
                  l.onnx.OperatorSetIdProto.encode(t3.opsetImport[n2], e2.uint32(66).fork()).ldelim();
              if (null != t3.metadataProps && t3.metadataProps.length)
                for (n2 = 0; n2 < t3.metadataProps.length; ++n2)
                  l.onnx.StringStringEntryProto.encode(t3.metadataProps[n2], e2.uint32(114).fork()).ldelim();
              return e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.ModelProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.irVersion = t3.int64();
                    break;
                  case 8:
                    r2.opsetImport && r2.opsetImport.length || (r2.opsetImport = []), r2.opsetImport.push(l.onnx.OperatorSetIdProto.decode(t3, t3.uint32()));
                    break;
                  case 2:
                    r2.producerName = t3.string();
                    break;
                  case 3:
                    r2.producerVersion = t3.string();
                    break;
                  case 4:
                    r2.domain = t3.string();
                    break;
                  case 5:
                    r2.modelVersion = t3.int64();
                    break;
                  case 6:
                    r2.docString = t3.string();
                    break;
                  case 7:
                    r2.graph = l.onnx.GraphProto.decode(t3, t3.uint32());
                    break;
                  case 14:
                    r2.metadataProps && r2.metadataProps.length || (r2.metadataProps = []), r2.metadataProps.push(l.onnx.StringStringEntryProto.decode(t3, t3.uint32()));
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.irVersion && t3.hasOwnProperty("irVersion") && !(c.isInteger(t3.irVersion) || t3.irVersion && c.isInteger(t3.irVersion.low) && c.isInteger(t3.irVersion.high)))
                return "irVersion: integer|Long expected";
              if (null != t3.opsetImport && t3.hasOwnProperty("opsetImport")) {
                if (!Array.isArray(t3.opsetImport))
                  return "opsetImport: array expected";
                for (var e2 = 0; e2 < t3.opsetImport.length; ++e2)
                  if (n2 = l.onnx.OperatorSetIdProto.verify(t3.opsetImport[e2]))
                    return "opsetImport." + n2;
              }
              if (null != t3.producerName && t3.hasOwnProperty("producerName") && !c.isString(t3.producerName))
                return "producerName: string expected";
              if (null != t3.producerVersion && t3.hasOwnProperty("producerVersion") && !c.isString(t3.producerVersion))
                return "producerVersion: string expected";
              if (null != t3.domain && t3.hasOwnProperty("domain") && !c.isString(t3.domain))
                return "domain: string expected";
              if (null != t3.modelVersion && t3.hasOwnProperty("modelVersion") && !(c.isInteger(t3.modelVersion) || t3.modelVersion && c.isInteger(t3.modelVersion.low) && c.isInteger(t3.modelVersion.high)))
                return "modelVersion: integer|Long expected";
              if (null != t3.docString && t3.hasOwnProperty("docString") && !c.isString(t3.docString))
                return "docString: string expected";
              if (null != t3.graph && t3.hasOwnProperty("graph") && (n2 = l.onnx.GraphProto.verify(t3.graph)))
                return "graph." + n2;
              if (null != t3.metadataProps && t3.hasOwnProperty("metadataProps")) {
                if (!Array.isArray(t3.metadataProps))
                  return "metadataProps: array expected";
                for (e2 = 0; e2 < t3.metadataProps.length; ++e2) {
                  var n2;
                  if (n2 = l.onnx.StringStringEntryProto.verify(t3.metadataProps[e2]))
                    return "metadataProps." + n2;
                }
              }
              return null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.ModelProto)
                return t3;
              var e2 = new l.onnx.ModelProto();
              if (null != t3.irVersion && (c.Long ? (e2.irVersion = c.Long.fromValue(t3.irVersion)).unsigned = false : "string" == typeof t3.irVersion ? e2.irVersion = parseInt(t3.irVersion, 10) : "number" == typeof t3.irVersion ? e2.irVersion = t3.irVersion : "object" == typeof t3.irVersion && (e2.irVersion = new c.LongBits(t3.irVersion.low >>> 0, t3.irVersion.high >>> 0).toNumber())), t3.opsetImport) {
                if (!Array.isArray(t3.opsetImport))
                  throw TypeError(".onnx.ModelProto.opsetImport: array expected");
                e2.opsetImport = [];
                for (var n2 = 0; n2 < t3.opsetImport.length; ++n2) {
                  if ("object" != typeof t3.opsetImport[n2])
                    throw TypeError(".onnx.ModelProto.opsetImport: object expected");
                  e2.opsetImport[n2] = l.onnx.OperatorSetIdProto.fromObject(t3.opsetImport[n2]);
                }
              }
              if (null != t3.producerName && (e2.producerName = String(t3.producerName)), null != t3.producerVersion && (e2.producerVersion = String(t3.producerVersion)), null != t3.domain && (e2.domain = String(t3.domain)), null != t3.modelVersion && (c.Long ? (e2.modelVersion = c.Long.fromValue(t3.modelVersion)).unsigned = false : "string" == typeof t3.modelVersion ? e2.modelVersion = parseInt(t3.modelVersion, 10) : "number" == typeof t3.modelVersion ? e2.modelVersion = t3.modelVersion : "object" == typeof t3.modelVersion && (e2.modelVersion = new c.LongBits(t3.modelVersion.low >>> 0, t3.modelVersion.high >>> 0).toNumber())), null != t3.docString && (e2.docString = String(t3.docString)), null != t3.graph) {
                if ("object" != typeof t3.graph)
                  throw TypeError(".onnx.ModelProto.graph: object expected");
                e2.graph = l.onnx.GraphProto.fromObject(t3.graph);
              }
              if (t3.metadataProps) {
                if (!Array.isArray(t3.metadataProps))
                  throw TypeError(".onnx.ModelProto.metadataProps: array expected");
                for (e2.metadataProps = [], n2 = 0; n2 < t3.metadataProps.length; ++n2) {
                  if ("object" != typeof t3.metadataProps[n2])
                    throw TypeError(".onnx.ModelProto.metadataProps: object expected");
                  e2.metadataProps[n2] = l.onnx.StringStringEntryProto.fromObject(t3.metadataProps[n2]);
                }
              }
              return e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.opsetImport = [], n2.metadataProps = []), e2.defaults) {
                if (c.Long) {
                  var r2 = new c.Long(0, 0, false);
                  n2.irVersion = e2.longs === String ? r2.toString() : e2.longs === Number ? r2.toNumber() : r2;
                } else
                  n2.irVersion = e2.longs === String ? "0" : 0;
                n2.producerName = "", n2.producerVersion = "", n2.domain = "", c.Long ? (r2 = new c.Long(0, 0, false), n2.modelVersion = e2.longs === String ? r2.toString() : e2.longs === Number ? r2.toNumber() : r2) : n2.modelVersion = e2.longs === String ? "0" : 0, n2.docString = "", n2.graph = null;
              }
              if (null != t3.irVersion && t3.hasOwnProperty("irVersion") && ("number" == typeof t3.irVersion ? n2.irVersion = e2.longs === String ? String(t3.irVersion) : t3.irVersion : n2.irVersion = e2.longs === String ? c.Long.prototype.toString.call(t3.irVersion) : e2.longs === Number ? new c.LongBits(t3.irVersion.low >>> 0, t3.irVersion.high >>> 0).toNumber() : t3.irVersion), null != t3.producerName && t3.hasOwnProperty("producerName") && (n2.producerName = t3.producerName), null != t3.producerVersion && t3.hasOwnProperty("producerVersion") && (n2.producerVersion = t3.producerVersion), null != t3.domain && t3.hasOwnProperty("domain") && (n2.domain = t3.domain), null != t3.modelVersion && t3.hasOwnProperty("modelVersion") && ("number" == typeof t3.modelVersion ? n2.modelVersion = e2.longs === String ? String(t3.modelVersion) : t3.modelVersion : n2.modelVersion = e2.longs === String ? c.Long.prototype.toString.call(t3.modelVersion) : e2.longs === Number ? new c.LongBits(t3.modelVersion.low >>> 0, t3.modelVersion.high >>> 0).toNumber() : t3.modelVersion), null != t3.docString && t3.hasOwnProperty("docString") && (n2.docString = t3.docString), null != t3.graph && t3.hasOwnProperty("graph") && (n2.graph = l.onnx.GraphProto.toObject(t3.graph, e2)), t3.opsetImport && t3.opsetImport.length) {
                n2.opsetImport = [];
                for (var i2 = 0; i2 < t3.opsetImport.length; ++i2)
                  n2.opsetImport[i2] = l.onnx.OperatorSetIdProto.toObject(t3.opsetImport[i2], e2);
              }
              if (t3.metadataProps && t3.metadataProps.length)
                for (n2.metadataProps = [], i2 = 0; i2 < t3.metadataProps.length; ++i2)
                  n2.metadataProps[i2] = l.onnx.StringStringEntryProto.toObject(t3.metadataProps[i2], e2);
              return n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o.StringStringEntryProto = function() {
            function t2(t3) {
              if (t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.key = "", t2.prototype.value = "", t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              return e2 || (e2 = u.create()), null != t3.key && t3.hasOwnProperty("key") && e2.uint32(10).string(t3.key), null != t3.value && t3.hasOwnProperty("value") && e2.uint32(18).string(t3.value), e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.StringStringEntryProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.key = t3.string();
                    break;
                  case 2:
                    r2.value = t3.string();
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              return "object" != typeof t3 || null === t3 ? "object expected" : null != t3.key && t3.hasOwnProperty("key") && !c.isString(t3.key) ? "key: string expected" : null != t3.value && t3.hasOwnProperty("value") && !c.isString(t3.value) ? "value: string expected" : null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.StringStringEntryProto)
                return t3;
              var e2 = new l.onnx.StringStringEntryProto();
              return null != t3.key && (e2.key = String(t3.key)), null != t3.value && (e2.value = String(t3.value)), e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              return e2.defaults && (n2.key = "", n2.value = ""), null != t3.key && t3.hasOwnProperty("key") && (n2.key = t3.key), null != t3.value && t3.hasOwnProperty("value") && (n2.value = t3.value), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o.TensorAnnotation = function() {
            function t2(t3) {
              if (this.quantParameterTensorNames = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.tensorName = "", t2.prototype.quantParameterTensorNames = c.emptyArray, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.tensorName && t3.hasOwnProperty("tensorName") && e2.uint32(10).string(t3.tensorName), null != t3.quantParameterTensorNames && t3.quantParameterTensorNames.length)
                for (var n2 = 0; n2 < t3.quantParameterTensorNames.length; ++n2)
                  l.onnx.StringStringEntryProto.encode(t3.quantParameterTensorNames[n2], e2.uint32(18).fork()).ldelim();
              return e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.TensorAnnotation(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.tensorName = t3.string();
                    break;
                  case 2:
                    r2.quantParameterTensorNames && r2.quantParameterTensorNames.length || (r2.quantParameterTensorNames = []), r2.quantParameterTensorNames.push(l.onnx.StringStringEntryProto.decode(t3, t3.uint32()));
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.tensorName && t3.hasOwnProperty("tensorName") && !c.isString(t3.tensorName))
                return "tensorName: string expected";
              if (null != t3.quantParameterTensorNames && t3.hasOwnProperty("quantParameterTensorNames")) {
                if (!Array.isArray(t3.quantParameterTensorNames))
                  return "quantParameterTensorNames: array expected";
                for (var e2 = 0; e2 < t3.quantParameterTensorNames.length; ++e2) {
                  var n2 = l.onnx.StringStringEntryProto.verify(t3.quantParameterTensorNames[e2]);
                  if (n2)
                    return "quantParameterTensorNames." + n2;
                }
              }
              return null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.TensorAnnotation)
                return t3;
              var e2 = new l.onnx.TensorAnnotation();
              if (null != t3.tensorName && (e2.tensorName = String(t3.tensorName)), t3.quantParameterTensorNames) {
                if (!Array.isArray(t3.quantParameterTensorNames))
                  throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");
                e2.quantParameterTensorNames = [];
                for (var n2 = 0; n2 < t3.quantParameterTensorNames.length; ++n2) {
                  if ("object" != typeof t3.quantParameterTensorNames[n2])
                    throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");
                  e2.quantParameterTensorNames[n2] = l.onnx.StringStringEntryProto.fromObject(t3.quantParameterTensorNames[n2]);
                }
              }
              return e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.quantParameterTensorNames = []), e2.defaults && (n2.tensorName = ""), null != t3.tensorName && t3.hasOwnProperty("tensorName") && (n2.tensorName = t3.tensorName), t3.quantParameterTensorNames && t3.quantParameterTensorNames.length) {
                n2.quantParameterTensorNames = [];
                for (var r2 = 0; r2 < t3.quantParameterTensorNames.length; ++r2)
                  n2.quantParameterTensorNames[r2] = l.onnx.StringStringEntryProto.toObject(t3.quantParameterTensorNames[r2], e2);
              }
              return n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o.GraphProto = function() {
            function t2(t3) {
              if (this.node = [], this.initializer = [], this.input = [], this.output = [], this.valueInfo = [], this.quantizationAnnotation = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.node = c.emptyArray, t2.prototype.name = "", t2.prototype.initializer = c.emptyArray, t2.prototype.docString = "", t2.prototype.input = c.emptyArray, t2.prototype.output = c.emptyArray, t2.prototype.valueInfo = c.emptyArray, t2.prototype.quantizationAnnotation = c.emptyArray, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.node && t3.node.length)
                for (var n2 = 0; n2 < t3.node.length; ++n2)
                  l.onnx.NodeProto.encode(t3.node[n2], e2.uint32(10).fork()).ldelim();
              if (null != t3.name && t3.hasOwnProperty("name") && e2.uint32(18).string(t3.name), null != t3.initializer && t3.initializer.length)
                for (n2 = 0; n2 < t3.initializer.length; ++n2)
                  l.onnx.TensorProto.encode(t3.initializer[n2], e2.uint32(42).fork()).ldelim();
              if (null != t3.docString && t3.hasOwnProperty("docString") && e2.uint32(82).string(t3.docString), null != t3.input && t3.input.length)
                for (n2 = 0; n2 < t3.input.length; ++n2)
                  l.onnx.ValueInfoProto.encode(t3.input[n2], e2.uint32(90).fork()).ldelim();
              if (null != t3.output && t3.output.length)
                for (n2 = 0; n2 < t3.output.length; ++n2)
                  l.onnx.ValueInfoProto.encode(t3.output[n2], e2.uint32(98).fork()).ldelim();
              if (null != t3.valueInfo && t3.valueInfo.length)
                for (n2 = 0; n2 < t3.valueInfo.length; ++n2)
                  l.onnx.ValueInfoProto.encode(t3.valueInfo[n2], e2.uint32(106).fork()).ldelim();
              if (null != t3.quantizationAnnotation && t3.quantizationAnnotation.length)
                for (n2 = 0; n2 < t3.quantizationAnnotation.length; ++n2)
                  l.onnx.TensorAnnotation.encode(t3.quantizationAnnotation[n2], e2.uint32(114).fork()).ldelim();
              return e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.GraphProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.node && r2.node.length || (r2.node = []), r2.node.push(l.onnx.NodeProto.decode(t3, t3.uint32()));
                    break;
                  case 2:
                    r2.name = t3.string();
                    break;
                  case 5:
                    r2.initializer && r2.initializer.length || (r2.initializer = []), r2.initializer.push(l.onnx.TensorProto.decode(t3, t3.uint32()));
                    break;
                  case 10:
                    r2.docString = t3.string();
                    break;
                  case 11:
                    r2.input && r2.input.length || (r2.input = []), r2.input.push(l.onnx.ValueInfoProto.decode(t3, t3.uint32()));
                    break;
                  case 12:
                    r2.output && r2.output.length || (r2.output = []), r2.output.push(l.onnx.ValueInfoProto.decode(t3, t3.uint32()));
                    break;
                  case 13:
                    r2.valueInfo && r2.valueInfo.length || (r2.valueInfo = []), r2.valueInfo.push(l.onnx.ValueInfoProto.decode(t3, t3.uint32()));
                    break;
                  case 14:
                    r2.quantizationAnnotation && r2.quantizationAnnotation.length || (r2.quantizationAnnotation = []), r2.quantizationAnnotation.push(l.onnx.TensorAnnotation.decode(t3, t3.uint32()));
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.node && t3.hasOwnProperty("node")) {
                if (!Array.isArray(t3.node))
                  return "node: array expected";
                for (var e2 = 0; e2 < t3.node.length; ++e2)
                  if (n2 = l.onnx.NodeProto.verify(t3.node[e2]))
                    return "node." + n2;
              }
              if (null != t3.name && t3.hasOwnProperty("name") && !c.isString(t3.name))
                return "name: string expected";
              if (null != t3.initializer && t3.hasOwnProperty("initializer")) {
                if (!Array.isArray(t3.initializer))
                  return "initializer: array expected";
                for (e2 = 0; e2 < t3.initializer.length; ++e2)
                  if (n2 = l.onnx.TensorProto.verify(t3.initializer[e2]))
                    return "initializer." + n2;
              }
              if (null != t3.docString && t3.hasOwnProperty("docString") && !c.isString(t3.docString))
                return "docString: string expected";
              if (null != t3.input && t3.hasOwnProperty("input")) {
                if (!Array.isArray(t3.input))
                  return "input: array expected";
                for (e2 = 0; e2 < t3.input.length; ++e2)
                  if (n2 = l.onnx.ValueInfoProto.verify(t3.input[e2]))
                    return "input." + n2;
              }
              if (null != t3.output && t3.hasOwnProperty("output")) {
                if (!Array.isArray(t3.output))
                  return "output: array expected";
                for (e2 = 0; e2 < t3.output.length; ++e2)
                  if (n2 = l.onnx.ValueInfoProto.verify(t3.output[e2]))
                    return "output." + n2;
              }
              if (null != t3.valueInfo && t3.hasOwnProperty("valueInfo")) {
                if (!Array.isArray(t3.valueInfo))
                  return "valueInfo: array expected";
                for (e2 = 0; e2 < t3.valueInfo.length; ++e2)
                  if (n2 = l.onnx.ValueInfoProto.verify(t3.valueInfo[e2]))
                    return "valueInfo." + n2;
              }
              if (null != t3.quantizationAnnotation && t3.hasOwnProperty("quantizationAnnotation")) {
                if (!Array.isArray(t3.quantizationAnnotation))
                  return "quantizationAnnotation: array expected";
                for (e2 = 0; e2 < t3.quantizationAnnotation.length; ++e2) {
                  var n2;
                  if (n2 = l.onnx.TensorAnnotation.verify(t3.quantizationAnnotation[e2]))
                    return "quantizationAnnotation." + n2;
                }
              }
              return null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.GraphProto)
                return t3;
              var e2 = new l.onnx.GraphProto();
              if (t3.node) {
                if (!Array.isArray(t3.node))
                  throw TypeError(".onnx.GraphProto.node: array expected");
                e2.node = [];
                for (var n2 = 0; n2 < t3.node.length; ++n2) {
                  if ("object" != typeof t3.node[n2])
                    throw TypeError(".onnx.GraphProto.node: object expected");
                  e2.node[n2] = l.onnx.NodeProto.fromObject(t3.node[n2]);
                }
              }
              if (null != t3.name && (e2.name = String(t3.name)), t3.initializer) {
                if (!Array.isArray(t3.initializer))
                  throw TypeError(".onnx.GraphProto.initializer: array expected");
                for (e2.initializer = [], n2 = 0; n2 < t3.initializer.length; ++n2) {
                  if ("object" != typeof t3.initializer[n2])
                    throw TypeError(".onnx.GraphProto.initializer: object expected");
                  e2.initializer[n2] = l.onnx.TensorProto.fromObject(t3.initializer[n2]);
                }
              }
              if (null != t3.docString && (e2.docString = String(t3.docString)), t3.input) {
                if (!Array.isArray(t3.input))
                  throw TypeError(".onnx.GraphProto.input: array expected");
                for (e2.input = [], n2 = 0; n2 < t3.input.length; ++n2) {
                  if ("object" != typeof t3.input[n2])
                    throw TypeError(".onnx.GraphProto.input: object expected");
                  e2.input[n2] = l.onnx.ValueInfoProto.fromObject(t3.input[n2]);
                }
              }
              if (t3.output) {
                if (!Array.isArray(t3.output))
                  throw TypeError(".onnx.GraphProto.output: array expected");
                for (e2.output = [], n2 = 0; n2 < t3.output.length; ++n2) {
                  if ("object" != typeof t3.output[n2])
                    throw TypeError(".onnx.GraphProto.output: object expected");
                  e2.output[n2] = l.onnx.ValueInfoProto.fromObject(t3.output[n2]);
                }
              }
              if (t3.valueInfo) {
                if (!Array.isArray(t3.valueInfo))
                  throw TypeError(".onnx.GraphProto.valueInfo: array expected");
                for (e2.valueInfo = [], n2 = 0; n2 < t3.valueInfo.length; ++n2) {
                  if ("object" != typeof t3.valueInfo[n2])
                    throw TypeError(".onnx.GraphProto.valueInfo: object expected");
                  e2.valueInfo[n2] = l.onnx.ValueInfoProto.fromObject(t3.valueInfo[n2]);
                }
              }
              if (t3.quantizationAnnotation) {
                if (!Array.isArray(t3.quantizationAnnotation))
                  throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");
                for (e2.quantizationAnnotation = [], n2 = 0; n2 < t3.quantizationAnnotation.length; ++n2) {
                  if ("object" != typeof t3.quantizationAnnotation[n2])
                    throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");
                  e2.quantizationAnnotation[n2] = l.onnx.TensorAnnotation.fromObject(t3.quantizationAnnotation[n2]);
                }
              }
              return e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.node = [], n2.initializer = [], n2.input = [], n2.output = [], n2.valueInfo = [], n2.quantizationAnnotation = []), e2.defaults && (n2.name = "", n2.docString = ""), t3.node && t3.node.length) {
                n2.node = [];
                for (var r2 = 0; r2 < t3.node.length; ++r2)
                  n2.node[r2] = l.onnx.NodeProto.toObject(t3.node[r2], e2);
              }
              if (null != t3.name && t3.hasOwnProperty("name") && (n2.name = t3.name), t3.initializer && t3.initializer.length)
                for (n2.initializer = [], r2 = 0; r2 < t3.initializer.length; ++r2)
                  n2.initializer[r2] = l.onnx.TensorProto.toObject(t3.initializer[r2], e2);
              if (null != t3.docString && t3.hasOwnProperty("docString") && (n2.docString = t3.docString), t3.input && t3.input.length)
                for (n2.input = [], r2 = 0; r2 < t3.input.length; ++r2)
                  n2.input[r2] = l.onnx.ValueInfoProto.toObject(t3.input[r2], e2);
              if (t3.output && t3.output.length)
                for (n2.output = [], r2 = 0; r2 < t3.output.length; ++r2)
                  n2.output[r2] = l.onnx.ValueInfoProto.toObject(t3.output[r2], e2);
              if (t3.valueInfo && t3.valueInfo.length)
                for (n2.valueInfo = [], r2 = 0; r2 < t3.valueInfo.length; ++r2)
                  n2.valueInfo[r2] = l.onnx.ValueInfoProto.toObject(t3.valueInfo[r2], e2);
              if (t3.quantizationAnnotation && t3.quantizationAnnotation.length)
                for (n2.quantizationAnnotation = [], r2 = 0; r2 < t3.quantizationAnnotation.length; ++r2)
                  n2.quantizationAnnotation[r2] = l.onnx.TensorAnnotation.toObject(t3.quantizationAnnotation[r2], e2);
              return n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o.TensorProto = function() {
            function t2(t3) {
              if (this.dims = [], this.floatData = [], this.int32Data = [], this.stringData = [], this.int64Data = [], this.externalData = [], this.doubleData = [], this.uint64Data = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.dims = c.emptyArray, t2.prototype.dataType = 0, t2.prototype.segment = null, t2.prototype.floatData = c.emptyArray, t2.prototype.int32Data = c.emptyArray, t2.prototype.stringData = c.emptyArray, t2.prototype.int64Data = c.emptyArray, t2.prototype.name = "", t2.prototype.docString = "", t2.prototype.rawData = c.newBuffer([]), t2.prototype.externalData = c.emptyArray, t2.prototype.dataLocation = 0, t2.prototype.doubleData = c.emptyArray, t2.prototype.uint64Data = c.emptyArray, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.dims && t3.dims.length) {
                e2.uint32(10).fork();
                for (var n2 = 0; n2 < t3.dims.length; ++n2)
                  e2.int64(t3.dims[n2]);
                e2.ldelim();
              }
              if (null != t3.dataType && t3.hasOwnProperty("dataType") && e2.uint32(16).int32(t3.dataType), null != t3.segment && t3.hasOwnProperty("segment") && l.onnx.TensorProto.Segment.encode(t3.segment, e2.uint32(26).fork()).ldelim(), null != t3.floatData && t3.floatData.length) {
                for (e2.uint32(34).fork(), n2 = 0; n2 < t3.floatData.length; ++n2)
                  e2.float(t3.floatData[n2]);
                e2.ldelim();
              }
              if (null != t3.int32Data && t3.int32Data.length) {
                for (e2.uint32(42).fork(), n2 = 0; n2 < t3.int32Data.length; ++n2)
                  e2.int32(t3.int32Data[n2]);
                e2.ldelim();
              }
              if (null != t3.stringData && t3.stringData.length)
                for (n2 = 0; n2 < t3.stringData.length; ++n2)
                  e2.uint32(50).bytes(t3.stringData[n2]);
              if (null != t3.int64Data && t3.int64Data.length) {
                for (e2.uint32(58).fork(), n2 = 0; n2 < t3.int64Data.length; ++n2)
                  e2.int64(t3.int64Data[n2]);
                e2.ldelim();
              }
              if (null != t3.name && t3.hasOwnProperty("name") && e2.uint32(66).string(t3.name), null != t3.rawData && t3.hasOwnProperty("rawData") && e2.uint32(74).bytes(t3.rawData), null != t3.doubleData && t3.doubleData.length) {
                for (e2.uint32(82).fork(), n2 = 0; n2 < t3.doubleData.length; ++n2)
                  e2.double(t3.doubleData[n2]);
                e2.ldelim();
              }
              if (null != t3.uint64Data && t3.uint64Data.length) {
                for (e2.uint32(90).fork(), n2 = 0; n2 < t3.uint64Data.length; ++n2)
                  e2.uint64(t3.uint64Data[n2]);
                e2.ldelim();
              }
              if (null != t3.docString && t3.hasOwnProperty("docString") && e2.uint32(98).string(t3.docString), null != t3.externalData && t3.externalData.length)
                for (n2 = 0; n2 < t3.externalData.length; ++n2)
                  l.onnx.StringStringEntryProto.encode(t3.externalData[n2], e2.uint32(106).fork()).ldelim();
              return null != t3.dataLocation && t3.hasOwnProperty("dataLocation") && e2.uint32(112).int32(t3.dataLocation), e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.TensorProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    if (r2.dims && r2.dims.length || (r2.dims = []), 2 == (7 & i2))
                      for (var o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.dims.push(t3.int64());
                    else
                      r2.dims.push(t3.int64());
                    break;
                  case 2:
                    r2.dataType = t3.int32();
                    break;
                  case 3:
                    r2.segment = l.onnx.TensorProto.Segment.decode(t3, t3.uint32());
                    break;
                  case 4:
                    if (r2.floatData && r2.floatData.length || (r2.floatData = []), 2 == (7 & i2))
                      for (o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.floatData.push(t3.float());
                    else
                      r2.floatData.push(t3.float());
                    break;
                  case 5:
                    if (r2.int32Data && r2.int32Data.length || (r2.int32Data = []), 2 == (7 & i2))
                      for (o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.int32Data.push(t3.int32());
                    else
                      r2.int32Data.push(t3.int32());
                    break;
                  case 6:
                    r2.stringData && r2.stringData.length || (r2.stringData = []), r2.stringData.push(t3.bytes());
                    break;
                  case 7:
                    if (r2.int64Data && r2.int64Data.length || (r2.int64Data = []), 2 == (7 & i2))
                      for (o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.int64Data.push(t3.int64());
                    else
                      r2.int64Data.push(t3.int64());
                    break;
                  case 8:
                    r2.name = t3.string();
                    break;
                  case 12:
                    r2.docString = t3.string();
                    break;
                  case 9:
                    r2.rawData = t3.bytes();
                    break;
                  case 13:
                    r2.externalData && r2.externalData.length || (r2.externalData = []), r2.externalData.push(l.onnx.StringStringEntryProto.decode(t3, t3.uint32()));
                    break;
                  case 14:
                    r2.dataLocation = t3.int32();
                    break;
                  case 10:
                    if (r2.doubleData && r2.doubleData.length || (r2.doubleData = []), 2 == (7 & i2))
                      for (o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.doubleData.push(t3.double());
                    else
                      r2.doubleData.push(t3.double());
                    break;
                  case 11:
                    if (r2.uint64Data && r2.uint64Data.length || (r2.uint64Data = []), 2 == (7 & i2))
                      for (o2 = t3.uint32() + t3.pos; t3.pos < o2; )
                        r2.uint64Data.push(t3.uint64());
                    else
                      r2.uint64Data.push(t3.uint64());
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.dims && t3.hasOwnProperty("dims")) {
                if (!Array.isArray(t3.dims))
                  return "dims: array expected";
                for (var e2 = 0; e2 < t3.dims.length; ++e2)
                  if (!(c.isInteger(t3.dims[e2]) || t3.dims[e2] && c.isInteger(t3.dims[e2].low) && c.isInteger(t3.dims[e2].high)))
                    return "dims: integer|Long[] expected";
              }
              if (null != t3.dataType && t3.hasOwnProperty("dataType") && !c.isInteger(t3.dataType))
                return "dataType: integer expected";
              if (null != t3.segment && t3.hasOwnProperty("segment") && (n2 = l.onnx.TensorProto.Segment.verify(t3.segment)))
                return "segment." + n2;
              if (null != t3.floatData && t3.hasOwnProperty("floatData")) {
                if (!Array.isArray(t3.floatData))
                  return "floatData: array expected";
                for (e2 = 0; e2 < t3.floatData.length; ++e2)
                  if ("number" != typeof t3.floatData[e2])
                    return "floatData: number[] expected";
              }
              if (null != t3.int32Data && t3.hasOwnProperty("int32Data")) {
                if (!Array.isArray(t3.int32Data))
                  return "int32Data: array expected";
                for (e2 = 0; e2 < t3.int32Data.length; ++e2)
                  if (!c.isInteger(t3.int32Data[e2]))
                    return "int32Data: integer[] expected";
              }
              if (null != t3.stringData && t3.hasOwnProperty("stringData")) {
                if (!Array.isArray(t3.stringData))
                  return "stringData: array expected";
                for (e2 = 0; e2 < t3.stringData.length; ++e2)
                  if (!(t3.stringData[e2] && "number" == typeof t3.stringData[e2].length || c.isString(t3.stringData[e2])))
                    return "stringData: buffer[] expected";
              }
              if (null != t3.int64Data && t3.hasOwnProperty("int64Data")) {
                if (!Array.isArray(t3.int64Data))
                  return "int64Data: array expected";
                for (e2 = 0; e2 < t3.int64Data.length; ++e2)
                  if (!(c.isInteger(t3.int64Data[e2]) || t3.int64Data[e2] && c.isInteger(t3.int64Data[e2].low) && c.isInteger(t3.int64Data[e2].high)))
                    return "int64Data: integer|Long[] expected";
              }
              if (null != t3.name && t3.hasOwnProperty("name") && !c.isString(t3.name))
                return "name: string expected";
              if (null != t3.docString && t3.hasOwnProperty("docString") && !c.isString(t3.docString))
                return "docString: string expected";
              if (null != t3.rawData && t3.hasOwnProperty("rawData") && !(t3.rawData && "number" == typeof t3.rawData.length || c.isString(t3.rawData)))
                return "rawData: buffer expected";
              if (null != t3.externalData && t3.hasOwnProperty("externalData")) {
                if (!Array.isArray(t3.externalData))
                  return "externalData: array expected";
                for (e2 = 0; e2 < t3.externalData.length; ++e2) {
                  var n2;
                  if (n2 = l.onnx.StringStringEntryProto.verify(t3.externalData[e2]))
                    return "externalData." + n2;
                }
              }
              if (null != t3.dataLocation && t3.hasOwnProperty("dataLocation"))
                switch (t3.dataLocation) {
                  default:
                    return "dataLocation: enum value expected";
                  case 0:
                  case 1:
                }
              if (null != t3.doubleData && t3.hasOwnProperty("doubleData")) {
                if (!Array.isArray(t3.doubleData))
                  return "doubleData: array expected";
                for (e2 = 0; e2 < t3.doubleData.length; ++e2)
                  if ("number" != typeof t3.doubleData[e2])
                    return "doubleData: number[] expected";
              }
              if (null != t3.uint64Data && t3.hasOwnProperty("uint64Data")) {
                if (!Array.isArray(t3.uint64Data))
                  return "uint64Data: array expected";
                for (e2 = 0; e2 < t3.uint64Data.length; ++e2)
                  if (!(c.isInteger(t3.uint64Data[e2]) || t3.uint64Data[e2] && c.isInteger(t3.uint64Data[e2].low) && c.isInteger(t3.uint64Data[e2].high)))
                    return "uint64Data: integer|Long[] expected";
              }
              return null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.TensorProto)
                return t3;
              var e2 = new l.onnx.TensorProto();
              if (t3.dims) {
                if (!Array.isArray(t3.dims))
                  throw TypeError(".onnx.TensorProto.dims: array expected");
                e2.dims = [];
                for (var n2 = 0; n2 < t3.dims.length; ++n2)
                  c.Long ? (e2.dims[n2] = c.Long.fromValue(t3.dims[n2])).unsigned = false : "string" == typeof t3.dims[n2] ? e2.dims[n2] = parseInt(t3.dims[n2], 10) : "number" == typeof t3.dims[n2] ? e2.dims[n2] = t3.dims[n2] : "object" == typeof t3.dims[n2] && (e2.dims[n2] = new c.LongBits(t3.dims[n2].low >>> 0, t3.dims[n2].high >>> 0).toNumber());
              }
              if (null != t3.dataType && (e2.dataType = 0 | t3.dataType), null != t3.segment) {
                if ("object" != typeof t3.segment)
                  throw TypeError(".onnx.TensorProto.segment: object expected");
                e2.segment = l.onnx.TensorProto.Segment.fromObject(t3.segment);
              }
              if (t3.floatData) {
                if (!Array.isArray(t3.floatData))
                  throw TypeError(".onnx.TensorProto.floatData: array expected");
                for (e2.floatData = [], n2 = 0; n2 < t3.floatData.length; ++n2)
                  e2.floatData[n2] = Number(t3.floatData[n2]);
              }
              if (t3.int32Data) {
                if (!Array.isArray(t3.int32Data))
                  throw TypeError(".onnx.TensorProto.int32Data: array expected");
                for (e2.int32Data = [], n2 = 0; n2 < t3.int32Data.length; ++n2)
                  e2.int32Data[n2] = 0 | t3.int32Data[n2];
              }
              if (t3.stringData) {
                if (!Array.isArray(t3.stringData))
                  throw TypeError(".onnx.TensorProto.stringData: array expected");
                for (e2.stringData = [], n2 = 0; n2 < t3.stringData.length; ++n2)
                  "string" == typeof t3.stringData[n2] ? c.base64.decode(t3.stringData[n2], e2.stringData[n2] = c.newBuffer(c.base64.length(t3.stringData[n2])), 0) : t3.stringData[n2].length && (e2.stringData[n2] = t3.stringData[n2]);
              }
              if (t3.int64Data) {
                if (!Array.isArray(t3.int64Data))
                  throw TypeError(".onnx.TensorProto.int64Data: array expected");
                for (e2.int64Data = [], n2 = 0; n2 < t3.int64Data.length; ++n2)
                  c.Long ? (e2.int64Data[n2] = c.Long.fromValue(t3.int64Data[n2])).unsigned = false : "string" == typeof t3.int64Data[n2] ? e2.int64Data[n2] = parseInt(t3.int64Data[n2], 10) : "number" == typeof t3.int64Data[n2] ? e2.int64Data[n2] = t3.int64Data[n2] : "object" == typeof t3.int64Data[n2] && (e2.int64Data[n2] = new c.LongBits(t3.int64Data[n2].low >>> 0, t3.int64Data[n2].high >>> 0).toNumber());
              }
              if (null != t3.name && (e2.name = String(t3.name)), null != t3.docString && (e2.docString = String(t3.docString)), null != t3.rawData && ("string" == typeof t3.rawData ? c.base64.decode(t3.rawData, e2.rawData = c.newBuffer(c.base64.length(t3.rawData)), 0) : t3.rawData.length && (e2.rawData = t3.rawData)), t3.externalData) {
                if (!Array.isArray(t3.externalData))
                  throw TypeError(".onnx.TensorProto.externalData: array expected");
                for (e2.externalData = [], n2 = 0; n2 < t3.externalData.length; ++n2) {
                  if ("object" != typeof t3.externalData[n2])
                    throw TypeError(".onnx.TensorProto.externalData: object expected");
                  e2.externalData[n2] = l.onnx.StringStringEntryProto.fromObject(t3.externalData[n2]);
                }
              }
              switch (t3.dataLocation) {
                case "DEFAULT":
                case 0:
                  e2.dataLocation = 0;
                  break;
                case "EXTERNAL":
                case 1:
                  e2.dataLocation = 1;
              }
              if (t3.doubleData) {
                if (!Array.isArray(t3.doubleData))
                  throw TypeError(".onnx.TensorProto.doubleData: array expected");
                for (e2.doubleData = [], n2 = 0; n2 < t3.doubleData.length; ++n2)
                  e2.doubleData[n2] = Number(t3.doubleData[n2]);
              }
              if (t3.uint64Data) {
                if (!Array.isArray(t3.uint64Data))
                  throw TypeError(".onnx.TensorProto.uint64Data: array expected");
                for (e2.uint64Data = [], n2 = 0; n2 < t3.uint64Data.length; ++n2)
                  c.Long ? (e2.uint64Data[n2] = c.Long.fromValue(t3.uint64Data[n2])).unsigned = true : "string" == typeof t3.uint64Data[n2] ? e2.uint64Data[n2] = parseInt(t3.uint64Data[n2], 10) : "number" == typeof t3.uint64Data[n2] ? e2.uint64Data[n2] = t3.uint64Data[n2] : "object" == typeof t3.uint64Data[n2] && (e2.uint64Data[n2] = new c.LongBits(t3.uint64Data[n2].low >>> 0, t3.uint64Data[n2].high >>> 0).toNumber(true));
              }
              return e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.dims = [], n2.floatData = [], n2.int32Data = [], n2.stringData = [], n2.int64Data = [], n2.doubleData = [], n2.uint64Data = [], n2.externalData = []), e2.defaults && (n2.dataType = 0, n2.segment = null, n2.name = "", e2.bytes === String ? n2.rawData = "" : (n2.rawData = [], e2.bytes !== Array && (n2.rawData = c.newBuffer(n2.rawData))), n2.docString = "", n2.dataLocation = e2.enums === String ? "DEFAULT" : 0), t3.dims && t3.dims.length) {
                n2.dims = [];
                for (var r2 = 0; r2 < t3.dims.length; ++r2)
                  "number" == typeof t3.dims[r2] ? n2.dims[r2] = e2.longs === String ? String(t3.dims[r2]) : t3.dims[r2] : n2.dims[r2] = e2.longs === String ? c.Long.prototype.toString.call(t3.dims[r2]) : e2.longs === Number ? new c.LongBits(t3.dims[r2].low >>> 0, t3.dims[r2].high >>> 0).toNumber() : t3.dims[r2];
              }
              if (null != t3.dataType && t3.hasOwnProperty("dataType") && (n2.dataType = t3.dataType), null != t3.segment && t3.hasOwnProperty("segment") && (n2.segment = l.onnx.TensorProto.Segment.toObject(t3.segment, e2)), t3.floatData && t3.floatData.length)
                for (n2.floatData = [], r2 = 0; r2 < t3.floatData.length; ++r2)
                  n2.floatData[r2] = e2.json && !isFinite(t3.floatData[r2]) ? String(t3.floatData[r2]) : t3.floatData[r2];
              if (t3.int32Data && t3.int32Data.length)
                for (n2.int32Data = [], r2 = 0; r2 < t3.int32Data.length; ++r2)
                  n2.int32Data[r2] = t3.int32Data[r2];
              if (t3.stringData && t3.stringData.length)
                for (n2.stringData = [], r2 = 0; r2 < t3.stringData.length; ++r2)
                  n2.stringData[r2] = e2.bytes === String ? c.base64.encode(t3.stringData[r2], 0, t3.stringData[r2].length) : e2.bytes === Array ? Array.prototype.slice.call(t3.stringData[r2]) : t3.stringData[r2];
              if (t3.int64Data && t3.int64Data.length)
                for (n2.int64Data = [], r2 = 0; r2 < t3.int64Data.length; ++r2)
                  "number" == typeof t3.int64Data[r2] ? n2.int64Data[r2] = e2.longs === String ? String(t3.int64Data[r2]) : t3.int64Data[r2] : n2.int64Data[r2] = e2.longs === String ? c.Long.prototype.toString.call(t3.int64Data[r2]) : e2.longs === Number ? new c.LongBits(t3.int64Data[r2].low >>> 0, t3.int64Data[r2].high >>> 0).toNumber() : t3.int64Data[r2];
              if (null != t3.name && t3.hasOwnProperty("name") && (n2.name = t3.name), null != t3.rawData && t3.hasOwnProperty("rawData") && (n2.rawData = e2.bytes === String ? c.base64.encode(t3.rawData, 0, t3.rawData.length) : e2.bytes === Array ? Array.prototype.slice.call(t3.rawData) : t3.rawData), t3.doubleData && t3.doubleData.length)
                for (n2.doubleData = [], r2 = 0; r2 < t3.doubleData.length; ++r2)
                  n2.doubleData[r2] = e2.json && !isFinite(t3.doubleData[r2]) ? String(t3.doubleData[r2]) : t3.doubleData[r2];
              if (t3.uint64Data && t3.uint64Data.length)
                for (n2.uint64Data = [], r2 = 0; r2 < t3.uint64Data.length; ++r2)
                  "number" == typeof t3.uint64Data[r2] ? n2.uint64Data[r2] = e2.longs === String ? String(t3.uint64Data[r2]) : t3.uint64Data[r2] : n2.uint64Data[r2] = e2.longs === String ? c.Long.prototype.toString.call(t3.uint64Data[r2]) : e2.longs === Number ? new c.LongBits(t3.uint64Data[r2].low >>> 0, t3.uint64Data[r2].high >>> 0).toNumber(true) : t3.uint64Data[r2];
              if (null != t3.docString && t3.hasOwnProperty("docString") && (n2.docString = t3.docString), t3.externalData && t3.externalData.length)
                for (n2.externalData = [], r2 = 0; r2 < t3.externalData.length; ++r2)
                  n2.externalData[r2] = l.onnx.StringStringEntryProto.toObject(t3.externalData[r2], e2);
              return null != t3.dataLocation && t3.hasOwnProperty("dataLocation") && (n2.dataLocation = e2.enums === String ? l.onnx.TensorProto.DataLocation[t3.dataLocation] : t3.dataLocation), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2.DataType = function() {
              var t3 = {}, e2 = Object.create(t3);
              return e2[t3[0] = "UNDEFINED"] = 0, e2[t3[1] = "FLOAT"] = 1, e2[t3[2] = "UINT8"] = 2, e2[t3[3] = "INT8"] = 3, e2[t3[4] = "UINT16"] = 4, e2[t3[5] = "INT16"] = 5, e2[t3[6] = "INT32"] = 6, e2[t3[7] = "INT64"] = 7, e2[t3[8] = "STRING"] = 8, e2[t3[9] = "BOOL"] = 9, e2[t3[10] = "FLOAT16"] = 10, e2[t3[11] = "DOUBLE"] = 11, e2[t3[12] = "UINT32"] = 12, e2[t3[13] = "UINT64"] = 13, e2[t3[14] = "COMPLEX64"] = 14, e2[t3[15] = "COMPLEX128"] = 15, e2[t3[16] = "BFLOAT16"] = 16, e2;
            }(), t2.Segment = function() {
              function t3(t4) {
                if (t4)
                  for (var e2 = Object.keys(t4), n2 = 0; n2 < e2.length; ++n2)
                    null != t4[e2[n2]] && (this[e2[n2]] = t4[e2[n2]]);
              }
              return t3.prototype.begin = c.Long ? c.Long.fromBits(0, 0, false) : 0, t3.prototype.end = c.Long ? c.Long.fromBits(0, 0, false) : 0, t3.create = function(e2) {
                return new t3(e2);
              }, t3.encode = function(t4, e2) {
                return e2 || (e2 = u.create()), null != t4.begin && t4.hasOwnProperty("begin") && e2.uint32(8).int64(t4.begin), null != t4.end && t4.hasOwnProperty("end") && e2.uint32(16).int64(t4.end), e2;
              }, t3.encodeDelimited = function(t4, e2) {
                return this.encode(t4, e2).ldelim();
              }, t3.decode = function(t4, e2) {
                t4 instanceof s || (t4 = s.create(t4));
                for (var n2 = void 0 === e2 ? t4.len : t4.pos + e2, r2 = new l.onnx.TensorProto.Segment(); t4.pos < n2; ) {
                  var i2 = t4.uint32();
                  switch (i2 >>> 3) {
                    case 1:
                      r2.begin = t4.int64();
                      break;
                    case 2:
                      r2.end = t4.int64();
                      break;
                    default:
                      t4.skipType(7 & i2);
                  }
                }
                return r2;
              }, t3.decodeDelimited = function(t4) {
                return t4 instanceof s || (t4 = new s(t4)), this.decode(t4, t4.uint32());
              }, t3.verify = function(t4) {
                return "object" != typeof t4 || null === t4 ? "object expected" : null != t4.begin && t4.hasOwnProperty("begin") && !(c.isInteger(t4.begin) || t4.begin && c.isInteger(t4.begin.low) && c.isInteger(t4.begin.high)) ? "begin: integer|Long expected" : null != t4.end && t4.hasOwnProperty("end") && !(c.isInteger(t4.end) || t4.end && c.isInteger(t4.end.low) && c.isInteger(t4.end.high)) ? "end: integer|Long expected" : null;
              }, t3.fromObject = function(t4) {
                if (t4 instanceof l.onnx.TensorProto.Segment)
                  return t4;
                var e2 = new l.onnx.TensorProto.Segment();
                return null != t4.begin && (c.Long ? (e2.begin = c.Long.fromValue(t4.begin)).unsigned = false : "string" == typeof t4.begin ? e2.begin = parseInt(t4.begin, 10) : "number" == typeof t4.begin ? e2.begin = t4.begin : "object" == typeof t4.begin && (e2.begin = new c.LongBits(t4.begin.low >>> 0, t4.begin.high >>> 0).toNumber())), null != t4.end && (c.Long ? (e2.end = c.Long.fromValue(t4.end)).unsigned = false : "string" == typeof t4.end ? e2.end = parseInt(t4.end, 10) : "number" == typeof t4.end ? e2.end = t4.end : "object" == typeof t4.end && (e2.end = new c.LongBits(t4.end.low >>> 0, t4.end.high >>> 0).toNumber())), e2;
              }, t3.toObject = function(t4, e2) {
                e2 || (e2 = {});
                var n2 = {};
                if (e2.defaults) {
                  if (c.Long) {
                    var r2 = new c.Long(0, 0, false);
                    n2.begin = e2.longs === String ? r2.toString() : e2.longs === Number ? r2.toNumber() : r2;
                  } else
                    n2.begin = e2.longs === String ? "0" : 0;
                  c.Long ? (r2 = new c.Long(0, 0, false), n2.end = e2.longs === String ? r2.toString() : e2.longs === Number ? r2.toNumber() : r2) : n2.end = e2.longs === String ? "0" : 0;
                }
                return null != t4.begin && t4.hasOwnProperty("begin") && ("number" == typeof t4.begin ? n2.begin = e2.longs === String ? String(t4.begin) : t4.begin : n2.begin = e2.longs === String ? c.Long.prototype.toString.call(t4.begin) : e2.longs === Number ? new c.LongBits(t4.begin.low >>> 0, t4.begin.high >>> 0).toNumber() : t4.begin), null != t4.end && t4.hasOwnProperty("end") && ("number" == typeof t4.end ? n2.end = e2.longs === String ? String(t4.end) : t4.end : n2.end = e2.longs === String ? c.Long.prototype.toString.call(t4.end) : e2.longs === Number ? new c.LongBits(t4.end.low >>> 0, t4.end.high >>> 0).toNumber() : t4.end), n2;
              }, t3.prototype.toJSON = function() {
                return this.constructor.toObject(this, a.util.toJSONOptions);
              }, t3;
            }(), t2.DataLocation = function() {
              var t3 = {}, e2 = Object.create(t3);
              return e2[t3[0] = "DEFAULT"] = 0, e2[t3[1] = "EXTERNAL"] = 1, e2;
            }(), t2;
          }(), o.TensorShapeProto = function() {
            function t2(t3) {
              if (this.dim = [], t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.dim = c.emptyArray, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              if (e2 || (e2 = u.create()), null != t3.dim && t3.dim.length)
                for (var n2 = 0; n2 < t3.dim.length; ++n2)
                  l.onnx.TensorShapeProto.Dimension.encode(t3.dim[n2], e2.uint32(10).fork()).ldelim();
              return e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.TensorShapeProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                i2 >>> 3 == 1 ? (r2.dim && r2.dim.length || (r2.dim = []), r2.dim.push(l.onnx.TensorShapeProto.Dimension.decode(t3, t3.uint32()))) : t3.skipType(7 & i2);
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.dim && t3.hasOwnProperty("dim")) {
                if (!Array.isArray(t3.dim))
                  return "dim: array expected";
                for (var e2 = 0; e2 < t3.dim.length; ++e2) {
                  var n2 = l.onnx.TensorShapeProto.Dimension.verify(t3.dim[e2]);
                  if (n2)
                    return "dim." + n2;
                }
              }
              return null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.TensorShapeProto)
                return t3;
              var e2 = new l.onnx.TensorShapeProto();
              if (t3.dim) {
                if (!Array.isArray(t3.dim))
                  throw TypeError(".onnx.TensorShapeProto.dim: array expected");
                e2.dim = [];
                for (var n2 = 0; n2 < t3.dim.length; ++n2) {
                  if ("object" != typeof t3.dim[n2])
                    throw TypeError(".onnx.TensorShapeProto.dim: object expected");
                  e2.dim[n2] = l.onnx.TensorShapeProto.Dimension.fromObject(t3.dim[n2]);
                }
              }
              return e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if ((e2.arrays || e2.defaults) && (n2.dim = []), t3.dim && t3.dim.length) {
                n2.dim = [];
                for (var r2 = 0; r2 < t3.dim.length; ++r2)
                  n2.dim[r2] = l.onnx.TensorShapeProto.Dimension.toObject(t3.dim[r2], e2);
              }
              return n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2.Dimension = function() {
              function t3(t4) {
                if (t4)
                  for (var e3 = Object.keys(t4), n2 = 0; n2 < e3.length; ++n2)
                    null != t4[e3[n2]] && (this[e3[n2]] = t4[e3[n2]]);
              }
              var e2;
              return t3.prototype.dimValue = c.Long ? c.Long.fromBits(0, 0, false) : 0, t3.prototype.dimParam = "", t3.prototype.denotation = "", Object.defineProperty(t3.prototype, "value", { get: c.oneOfGetter(e2 = ["dimValue", "dimParam"]), set: c.oneOfSetter(e2) }), t3.create = function(e3) {
                return new t3(e3);
              }, t3.encode = function(t4, e3) {
                return e3 || (e3 = u.create()), null != t4.dimValue && t4.hasOwnProperty("dimValue") && e3.uint32(8).int64(t4.dimValue), null != t4.dimParam && t4.hasOwnProperty("dimParam") && e3.uint32(18).string(t4.dimParam), null != t4.denotation && t4.hasOwnProperty("denotation") && e3.uint32(26).string(t4.denotation), e3;
              }, t3.encodeDelimited = function(t4, e3) {
                return this.encode(t4, e3).ldelim();
              }, t3.decode = function(t4, e3) {
                t4 instanceof s || (t4 = s.create(t4));
                for (var n2 = void 0 === e3 ? t4.len : t4.pos + e3, r2 = new l.onnx.TensorShapeProto.Dimension(); t4.pos < n2; ) {
                  var i2 = t4.uint32();
                  switch (i2 >>> 3) {
                    case 1:
                      r2.dimValue = t4.int64();
                      break;
                    case 2:
                      r2.dimParam = t4.string();
                      break;
                    case 3:
                      r2.denotation = t4.string();
                      break;
                    default:
                      t4.skipType(7 & i2);
                  }
                }
                return r2;
              }, t3.decodeDelimited = function(t4) {
                return t4 instanceof s || (t4 = new s(t4)), this.decode(t4, t4.uint32());
              }, t3.verify = function(t4) {
                if ("object" != typeof t4 || null === t4)
                  return "object expected";
                var e3 = {};
                if (null != t4.dimValue && t4.hasOwnProperty("dimValue") && (e3.value = 1, !(c.isInteger(t4.dimValue) || t4.dimValue && c.isInteger(t4.dimValue.low) && c.isInteger(t4.dimValue.high))))
                  return "dimValue: integer|Long expected";
                if (null != t4.dimParam && t4.hasOwnProperty("dimParam")) {
                  if (1 === e3.value)
                    return "value: multiple values";
                  if (e3.value = 1, !c.isString(t4.dimParam))
                    return "dimParam: string expected";
                }
                return null != t4.denotation && t4.hasOwnProperty("denotation") && !c.isString(t4.denotation) ? "denotation: string expected" : null;
              }, t3.fromObject = function(t4) {
                if (t4 instanceof l.onnx.TensorShapeProto.Dimension)
                  return t4;
                var e3 = new l.onnx.TensorShapeProto.Dimension();
                return null != t4.dimValue && (c.Long ? (e3.dimValue = c.Long.fromValue(t4.dimValue)).unsigned = false : "string" == typeof t4.dimValue ? e3.dimValue = parseInt(t4.dimValue, 10) : "number" == typeof t4.dimValue ? e3.dimValue = t4.dimValue : "object" == typeof t4.dimValue && (e3.dimValue = new c.LongBits(t4.dimValue.low >>> 0, t4.dimValue.high >>> 0).toNumber())), null != t4.dimParam && (e3.dimParam = String(t4.dimParam)), null != t4.denotation && (e3.denotation = String(t4.denotation)), e3;
              }, t3.toObject = function(t4, e3) {
                e3 || (e3 = {});
                var n2 = {};
                return e3.defaults && (n2.denotation = ""), null != t4.dimValue && t4.hasOwnProperty("dimValue") && ("number" == typeof t4.dimValue ? n2.dimValue = e3.longs === String ? String(t4.dimValue) : t4.dimValue : n2.dimValue = e3.longs === String ? c.Long.prototype.toString.call(t4.dimValue) : e3.longs === Number ? new c.LongBits(t4.dimValue.low >>> 0, t4.dimValue.high >>> 0).toNumber() : t4.dimValue, e3.oneofs && (n2.value = "dimValue")), null != t4.dimParam && t4.hasOwnProperty("dimParam") && (n2.dimParam = t4.dimParam, e3.oneofs && (n2.value = "dimParam")), null != t4.denotation && t4.hasOwnProperty("denotation") && (n2.denotation = t4.denotation), n2;
              }, t3.prototype.toJSON = function() {
                return this.constructor.toObject(this, a.util.toJSONOptions);
              }, t3;
            }(), t2;
          }(), o.TypeProto = function() {
            function t2(t3) {
              if (t3)
                for (var e3 = Object.keys(t3), n2 = 0; n2 < e3.length; ++n2)
                  null != t3[e3[n2]] && (this[e3[n2]] = t3[e3[n2]]);
            }
            var e2;
            return t2.prototype.tensorType = null, t2.prototype.denotation = "", Object.defineProperty(t2.prototype, "value", { get: c.oneOfGetter(e2 = ["tensorType"]), set: c.oneOfSetter(e2) }), t2.create = function(e3) {
              return new t2(e3);
            }, t2.encode = function(t3, e3) {
              return e3 || (e3 = u.create()), null != t3.tensorType && t3.hasOwnProperty("tensorType") && l.onnx.TypeProto.Tensor.encode(t3.tensorType, e3.uint32(10).fork()).ldelim(), null != t3.denotation && t3.hasOwnProperty("denotation") && e3.uint32(50).string(t3.denotation), e3;
            }, t2.encodeDelimited = function(t3, e3) {
              return this.encode(t3, e3).ldelim();
            }, t2.decode = function(t3, e3) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e3 ? t3.len : t3.pos + e3, r2 = new l.onnx.TypeProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.tensorType = l.onnx.TypeProto.Tensor.decode(t3, t3.uint32());
                    break;
                  case 6:
                    r2.denotation = t3.string();
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              if ("object" != typeof t3 || null === t3)
                return "object expected";
              if (null != t3.tensorType && t3.hasOwnProperty("tensorType")) {
                var e3 = l.onnx.TypeProto.Tensor.verify(t3.tensorType);
                if (e3)
                  return "tensorType." + e3;
              }
              return null != t3.denotation && t3.hasOwnProperty("denotation") && !c.isString(t3.denotation) ? "denotation: string expected" : null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.TypeProto)
                return t3;
              var e3 = new l.onnx.TypeProto();
              if (null != t3.tensorType) {
                if ("object" != typeof t3.tensorType)
                  throw TypeError(".onnx.TypeProto.tensorType: object expected");
                e3.tensorType = l.onnx.TypeProto.Tensor.fromObject(t3.tensorType);
              }
              return null != t3.denotation && (e3.denotation = String(t3.denotation)), e3;
            }, t2.toObject = function(t3, e3) {
              e3 || (e3 = {});
              var n2 = {};
              return e3.defaults && (n2.denotation = ""), null != t3.tensorType && t3.hasOwnProperty("tensorType") && (n2.tensorType = l.onnx.TypeProto.Tensor.toObject(t3.tensorType, e3), e3.oneofs && (n2.value = "tensorType")), null != t3.denotation && t3.hasOwnProperty("denotation") && (n2.denotation = t3.denotation), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2.Tensor = function() {
              function t3(t4) {
                if (t4)
                  for (var e3 = Object.keys(t4), n2 = 0; n2 < e3.length; ++n2)
                    null != t4[e3[n2]] && (this[e3[n2]] = t4[e3[n2]]);
              }
              return t3.prototype.elemType = 0, t3.prototype.shape = null, t3.create = function(e3) {
                return new t3(e3);
              }, t3.encode = function(t4, e3) {
                return e3 || (e3 = u.create()), null != t4.elemType && t4.hasOwnProperty("elemType") && e3.uint32(8).int32(t4.elemType), null != t4.shape && t4.hasOwnProperty("shape") && l.onnx.TensorShapeProto.encode(t4.shape, e3.uint32(18).fork()).ldelim(), e3;
              }, t3.encodeDelimited = function(t4, e3) {
                return this.encode(t4, e3).ldelim();
              }, t3.decode = function(t4, e3) {
                t4 instanceof s || (t4 = s.create(t4));
                for (var n2 = void 0 === e3 ? t4.len : t4.pos + e3, r2 = new l.onnx.TypeProto.Tensor(); t4.pos < n2; ) {
                  var i2 = t4.uint32();
                  switch (i2 >>> 3) {
                    case 1:
                      r2.elemType = t4.int32();
                      break;
                    case 2:
                      r2.shape = l.onnx.TensorShapeProto.decode(t4, t4.uint32());
                      break;
                    default:
                      t4.skipType(7 & i2);
                  }
                }
                return r2;
              }, t3.decodeDelimited = function(t4) {
                return t4 instanceof s || (t4 = new s(t4)), this.decode(t4, t4.uint32());
              }, t3.verify = function(t4) {
                if ("object" != typeof t4 || null === t4)
                  return "object expected";
                if (null != t4.elemType && t4.hasOwnProperty("elemType") && !c.isInteger(t4.elemType))
                  return "elemType: integer expected";
                if (null != t4.shape && t4.hasOwnProperty("shape")) {
                  var e3 = l.onnx.TensorShapeProto.verify(t4.shape);
                  if (e3)
                    return "shape." + e3;
                }
                return null;
              }, t3.fromObject = function(t4) {
                if (t4 instanceof l.onnx.TypeProto.Tensor)
                  return t4;
                var e3 = new l.onnx.TypeProto.Tensor();
                if (null != t4.elemType && (e3.elemType = 0 | t4.elemType), null != t4.shape) {
                  if ("object" != typeof t4.shape)
                    throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");
                  e3.shape = l.onnx.TensorShapeProto.fromObject(t4.shape);
                }
                return e3;
              }, t3.toObject = function(t4, e3) {
                e3 || (e3 = {});
                var n2 = {};
                return e3.defaults && (n2.elemType = 0, n2.shape = null), null != t4.elemType && t4.hasOwnProperty("elemType") && (n2.elemType = t4.elemType), null != t4.shape && t4.hasOwnProperty("shape") && (n2.shape = l.onnx.TensorShapeProto.toObject(t4.shape, e3)), n2;
              }, t3.prototype.toJSON = function() {
                return this.constructor.toObject(this, a.util.toJSONOptions);
              }, t3;
            }(), t2;
          }(), o.OperatorSetIdProto = function() {
            function t2(t3) {
              if (t3)
                for (var e2 = Object.keys(t3), n2 = 0; n2 < e2.length; ++n2)
                  null != t3[e2[n2]] && (this[e2[n2]] = t3[e2[n2]]);
            }
            return t2.prototype.domain = "", t2.prototype.version = c.Long ? c.Long.fromBits(0, 0, false) : 0, t2.create = function(e2) {
              return new t2(e2);
            }, t2.encode = function(t3, e2) {
              return e2 || (e2 = u.create()), null != t3.domain && t3.hasOwnProperty("domain") && e2.uint32(10).string(t3.domain), null != t3.version && t3.hasOwnProperty("version") && e2.uint32(16).int64(t3.version), e2;
            }, t2.encodeDelimited = function(t3, e2) {
              return this.encode(t3, e2).ldelim();
            }, t2.decode = function(t3, e2) {
              t3 instanceof s || (t3 = s.create(t3));
              for (var n2 = void 0 === e2 ? t3.len : t3.pos + e2, r2 = new l.onnx.OperatorSetIdProto(); t3.pos < n2; ) {
                var i2 = t3.uint32();
                switch (i2 >>> 3) {
                  case 1:
                    r2.domain = t3.string();
                    break;
                  case 2:
                    r2.version = t3.int64();
                    break;
                  default:
                    t3.skipType(7 & i2);
                }
              }
              return r2;
            }, t2.decodeDelimited = function(t3) {
              return t3 instanceof s || (t3 = new s(t3)), this.decode(t3, t3.uint32());
            }, t2.verify = function(t3) {
              return "object" != typeof t3 || null === t3 ? "object expected" : null != t3.domain && t3.hasOwnProperty("domain") && !c.isString(t3.domain) ? "domain: string expected" : null != t3.version && t3.hasOwnProperty("version") && !(c.isInteger(t3.version) || t3.version && c.isInteger(t3.version.low) && c.isInteger(t3.version.high)) ? "version: integer|Long expected" : null;
            }, t2.fromObject = function(t3) {
              if (t3 instanceof l.onnx.OperatorSetIdProto)
                return t3;
              var e2 = new l.onnx.OperatorSetIdProto();
              return null != t3.domain && (e2.domain = String(t3.domain)), null != t3.version && (c.Long ? (e2.version = c.Long.fromValue(t3.version)).unsigned = false : "string" == typeof t3.version ? e2.version = parseInt(t3.version, 10) : "number" == typeof t3.version ? e2.version = t3.version : "object" == typeof t3.version && (e2.version = new c.LongBits(t3.version.low >>> 0, t3.version.high >>> 0).toNumber())), e2;
            }, t2.toObject = function(t3, e2) {
              e2 || (e2 = {});
              var n2 = {};
              if (e2.defaults)
                if (n2.domain = "", c.Long) {
                  var r2 = new c.Long(0, 0, false);
                  n2.version = e2.longs === String ? r2.toString() : e2.longs === Number ? r2.toNumber() : r2;
                } else
                  n2.version = e2.longs === String ? "0" : 0;
              return null != t3.domain && t3.hasOwnProperty("domain") && (n2.domain = t3.domain), null != t3.version && t3.hasOwnProperty("version") && ("number" == typeof t3.version ? n2.version = e2.longs === String ? String(t3.version) : t3.version : n2.version = e2.longs === String ? c.Long.prototype.toString.call(t3.version) : e2.longs === Number ? new c.LongBits(t3.version.low >>> 0, t3.version.high >>> 0).toNumber() : t3.version), n2;
            }, t2.prototype.toJSON = function() {
              return this.constructor.toObject(this, a.util.toJSONOptions);
            }, t2;
          }(), o), t.exports = l;
        }, 2100: (t, e, n) => {
          "use strict";
          t.exports = n(9482);
        }, 9482: (t, e, n) => {
          "use strict";
          var r = e;
          function i() {
            r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader);
          }
          r.build = "minimal", r.Writer = n(1173), r.BufferWriter = n(3155), r.Reader = n(1408), r.BufferReader = n(593), r.util = n(9693), r.rpc = n(5994), r.roots = n(5054), r.configure = i, i();
        }, 1408: (t, e, n) => {
          "use strict";
          t.exports = u;
          var r, i = n(9693), o = i.LongBits, a = i.utf8;
          function s(t2, e2) {
            return RangeError("index out of range: " + t2.pos + " + " + (e2 || 1) + " > " + t2.len);
          }
          function u(t2) {
            this.buf = t2, this.pos = 0, this.len = t2.length;
          }
          var c, l = "undefined" != typeof Uint8Array ? function(t2) {
            if (t2 instanceof Uint8Array || Array.isArray(t2))
              return new u(t2);
            throw Error("illegal buffer");
          } : function(t2) {
            if (Array.isArray(t2))
              return new u(t2);
            throw Error("illegal buffer");
          }, p = function() {
            return i.Buffer ? function(t2) {
              return (u.create = function(t3) {
                return i.Buffer.isBuffer(t3) ? new r(t3) : l(t3);
              })(t2);
            } : l;
          };
          function f() {
            var t2 = new o(0, 0), e2 = 0;
            if (!(this.len - this.pos > 4)) {
              for (; e2 < 3; ++e2) {
                if (this.pos >= this.len)
                  throw s(this);
                if (t2.lo = (t2.lo | (127 & this.buf[this.pos]) << 7 * e2) >>> 0, this.buf[this.pos++] < 128)
                  return t2;
              }
              return t2.lo = (t2.lo | (127 & this.buf[this.pos++]) << 7 * e2) >>> 0, t2;
            }
            for (; e2 < 4; ++e2)
              if (t2.lo = (t2.lo | (127 & this.buf[this.pos]) << 7 * e2) >>> 0, this.buf[this.pos++] < 128)
                return t2;
            if (t2.lo = (t2.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t2.hi = (t2.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
              return t2;
            if (e2 = 0, this.len - this.pos > 4) {
              for (; e2 < 5; ++e2)
                if (t2.hi = (t2.hi | (127 & this.buf[this.pos]) << 7 * e2 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return t2;
            } else
              for (; e2 < 5; ++e2) {
                if (this.pos >= this.len)
                  throw s(this);
                if (t2.hi = (t2.hi | (127 & this.buf[this.pos]) << 7 * e2 + 3) >>> 0, this.buf[this.pos++] < 128)
                  return t2;
              }
            throw Error("invalid varint encoding");
          }
          function d(t2, e2) {
            return (t2[e2 - 4] | t2[e2 - 3] << 8 | t2[e2 - 2] << 16 | t2[e2 - 1] << 24) >>> 0;
          }
          function h() {
            if (this.pos + 8 > this.len)
              throw s(this, 8);
            return new o(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
          }
          u.create = p(), u.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, u.prototype.uint32 = (c = 4294967295, function() {
            if (c = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)
              return c;
            if ((this.pos += 5) > this.len)
              throw this.pos = this.len, s(this, 10);
            return c;
          }), u.prototype.int32 = function() {
            return 0 | this.uint32();
          }, u.prototype.sint32 = function() {
            var t2 = this.uint32();
            return t2 >>> 1 ^ -(1 & t2) | 0;
          }, u.prototype.bool = function() {
            return 0 !== this.uint32();
          }, u.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len)
              throw s(this, 4);
            return d(this.buf, this.pos += 4);
          }, u.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len)
              throw s(this, 4);
            return 0 | d(this.buf, this.pos += 4);
          }, u.prototype.float = function() {
            if (this.pos + 4 > this.len)
              throw s(this, 4);
            var t2 = i.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, t2;
          }, u.prototype.double = function() {
            if (this.pos + 8 > this.len)
              throw s(this, 4);
            var t2 = i.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, t2;
          }, u.prototype.bytes = function() {
            var t2 = this.uint32(), e2 = this.pos, n2 = this.pos + t2;
            if (n2 > this.len)
              throw s(this, t2);
            return this.pos += t2, Array.isArray(this.buf) ? this.buf.slice(e2, n2) : e2 === n2 ? new this.buf.constructor(0) : this._slice.call(this.buf, e2, n2);
          }, u.prototype.string = function() {
            var t2 = this.bytes();
            return a.read(t2, 0, t2.length);
          }, u.prototype.skip = function(t2) {
            if ("number" == typeof t2) {
              if (this.pos + t2 > this.len)
                throw s(this, t2);
              this.pos += t2;
            } else
              do {
                if (this.pos >= this.len)
                  throw s(this);
              } while (128 & this.buf[this.pos++]);
            return this;
          }, u.prototype.skipType = function(t2) {
            switch (t2) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; 4 != (t2 = 7 & this.uint32()); )
                  this.skipType(t2);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error("invalid wire type " + t2 + " at offset " + this.pos);
            }
            return this;
          }, u._configure = function(t2) {
            r = t2, u.create = p(), r._configure();
            var e2 = i.Long ? "toLong" : "toNumber";
            i.merge(u.prototype, { int64: function() {
              return f.call(this)[e2](false);
            }, uint64: function() {
              return f.call(this)[e2](true);
            }, sint64: function() {
              return f.call(this).zzDecode()[e2](false);
            }, fixed64: function() {
              return h.call(this)[e2](true);
            }, sfixed64: function() {
              return h.call(this)[e2](false);
            } });
          };
        }, 593: (t, e, n) => {
          "use strict";
          t.exports = o;
          var r = n(1408);
          (o.prototype = Object.create(r.prototype)).constructor = o;
          var i = n(9693);
          function o(t2) {
            r.call(this, t2);
          }
          o._configure = function() {
            i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
          }, o.prototype.string = function() {
            var t2 = this.uint32();
            return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t2, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t2, this.len));
          }, o._configure();
        }, 5054: (t) => {
          "use strict";
          t.exports = {};
        }, 5994: (t, e, n) => {
          "use strict";
          e.Service = n(7948);
        }, 7948: (t, e, n) => {
          "use strict";
          t.exports = i;
          var r = n(9693);
          function i(t2, e2, n2) {
            if ("function" != typeof t2)
              throw TypeError("rpcImpl must be a function");
            r.EventEmitter.call(this), this.rpcImpl = t2, this.requestDelimited = Boolean(e2), this.responseDelimited = Boolean(n2);
          }
          (i.prototype = Object.create(r.EventEmitter.prototype)).constructor = i, i.prototype.rpcCall = function t2(e2, n2, i2, o, a) {
            if (!o)
              throw TypeError("request must be specified");
            var s = this;
            if (!a)
              return r.asPromise(t2, s, e2, n2, i2, o);
            if (s.rpcImpl)
              try {
                return s.rpcImpl(e2, n2[s.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function(t3, n3) {
                  if (t3)
                    return s.emit("error", t3, e2), a(t3);
                  if (null !== n3) {
                    if (!(n3 instanceof i2))
                      try {
                        n3 = i2[s.responseDelimited ? "decodeDelimited" : "decode"](n3);
                      } catch (t4) {
                        return s.emit("error", t4, e2), a(t4);
                      }
                    return s.emit("data", n3, e2), a(null, n3);
                  }
                  s.end(true);
                });
              } catch (t3) {
                return s.emit("error", t3, e2), void setTimeout(function() {
                  a(t3);
                }, 0);
              }
            else
              setTimeout(function() {
                a(Error("already ended"));
              }, 0);
          }, i.prototype.end = function(t2) {
            return this.rpcImpl && (t2 || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
          };
        }, 1945: (t, e, n) => {
          "use strict";
          t.exports = i;
          var r = n(9693);
          function i(t2, e2) {
            this.lo = t2 >>> 0, this.hi = e2 >>> 0;
          }
          var o = i.zero = new i(0, 0);
          o.toNumber = function() {
            return 0;
          }, o.zzEncode = o.zzDecode = function() {
            return this;
          }, o.length = function() {
            return 1;
          };
          var a = i.zeroHash = "\0\0\0\0\0\0\0\0";
          i.fromNumber = function(t2) {
            if (0 === t2)
              return o;
            var e2 = t2 < 0;
            e2 && (t2 = -t2);
            var n2 = t2 >>> 0, r2 = (t2 - n2) / 4294967296 >>> 0;
            return e2 && (r2 = ~r2 >>> 0, n2 = ~n2 >>> 0, ++n2 > 4294967295 && (n2 = 0, ++r2 > 4294967295 && (r2 = 0))), new i(n2, r2);
          }, i.from = function(t2) {
            if ("number" == typeof t2)
              return i.fromNumber(t2);
            if (r.isString(t2)) {
              if (!r.Long)
                return i.fromNumber(parseInt(t2, 10));
              t2 = r.Long.fromString(t2);
            }
            return t2.low || t2.high ? new i(t2.low >>> 0, t2.high >>> 0) : o;
          }, i.prototype.toNumber = function(t2) {
            if (!t2 && this.hi >>> 31) {
              var e2 = 1 + ~this.lo >>> 0, n2 = ~this.hi >>> 0;
              return e2 || (n2 = n2 + 1 >>> 0), -(e2 + 4294967296 * n2);
            }
            return this.lo + 4294967296 * this.hi;
          }, i.prototype.toLong = function(t2) {
            return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(t2)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t2) };
          };
          var s = String.prototype.charCodeAt;
          i.fromHash = function(t2) {
            return t2 === a ? o : new i((s.call(t2, 0) | s.call(t2, 1) << 8 | s.call(t2, 2) << 16 | s.call(t2, 3) << 24) >>> 0, (s.call(t2, 4) | s.call(t2, 5) << 8 | s.call(t2, 6) << 16 | s.call(t2, 7) << 24) >>> 0);
          }, i.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
          }, i.prototype.zzEncode = function() {
            var t2 = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t2) >>> 0, this.lo = (this.lo << 1 ^ t2) >>> 0, this;
          }, i.prototype.zzDecode = function() {
            var t2 = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t2) >>> 0, this.hi = (this.hi >>> 1 ^ t2) >>> 0, this;
          }, i.prototype.length = function() {
            var t2 = this.lo, e2 = (this.lo >>> 28 | this.hi << 4) >>> 0, n2 = this.hi >>> 24;
            return 0 === n2 ? 0 === e2 ? t2 < 16384 ? t2 < 128 ? 1 : 2 : t2 < 2097152 ? 3 : 4 : e2 < 16384 ? e2 < 128 ? 5 : 6 : e2 < 2097152 ? 7 : 8 : n2 < 128 ? 9 : 10;
          };
        }, 9693: function(t, e, n) {
          "use strict";
          var r = e;
          function i(t2, e2, n2) {
            for (var r2 = Object.keys(e2), i2 = 0; i2 < r2.length; ++i2)
              void 0 !== t2[r2[i2]] && n2 || (t2[r2[i2]] = e2[r2[i2]]);
            return t2;
          }
          function o(t2) {
            function e2(t3, n2) {
              if (!(this instanceof e2))
                return new e2(t3, n2);
              Object.defineProperty(this, "message", { get: function() {
                return t3;
              } }), Error.captureStackTrace ? Error.captureStackTrace(this, e2) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), n2 && i(this, n2);
            }
            return (e2.prototype = Object.create(Error.prototype)).constructor = e2, Object.defineProperty(e2.prototype, "name", { get: function() {
              return t2;
            } }), e2.prototype.toString = function() {
              return this.name + ": " + this.message;
            }, e2;
          }
          r.asPromise = n(4537), r.base64 = n(7419), r.EventEmitter = n(9211), r.float = n(945), r.inquire = n(7199), r.utf8 = n(4997), r.pool = n(6662), r.LongBits = n(1945), r.isNode = Boolean(void 0 !== n.g && n.g && n.g.process && n.g.process.versions && n.g.process.versions.node), r.global = r.isNode && n.g || "undefined" != typeof window && window || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function(t2) {
            return "number" == typeof t2 && isFinite(t2) && Math.floor(t2) === t2;
          }, r.isString = function(t2) {
            return "string" == typeof t2 || t2 instanceof String;
          }, r.isObject = function(t2) {
            return t2 && "object" == typeof t2;
          }, r.isset = r.isSet = function(t2, e2) {
            var n2 = t2[e2];
            return !(null == n2 || !t2.hasOwnProperty(e2)) && ("object" != typeof n2 || (Array.isArray(n2) ? n2.length : Object.keys(n2).length) > 0);
          }, r.Buffer = function() {
            try {
              var t2 = r.inquire("buffer").Buffer;
              return t2.prototype.utf8Write ? t2 : null;
            } catch (t3) {
              return null;
            }
          }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(t2) {
            return "number" == typeof t2 ? r.Buffer ? r._Buffer_allocUnsafe(t2) : new r.Array(t2) : r.Buffer ? r._Buffer_from(t2) : "undefined" == typeof Uint8Array ? t2 : new Uint8Array(t2);
          }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(t2) {
            return t2 ? r.LongBits.from(t2).toHash() : r.LongBits.zeroHash;
          }, r.longFromHash = function(t2, e2) {
            var n2 = r.LongBits.fromHash(t2);
            return r.Long ? r.Long.fromBits(n2.lo, n2.hi, e2) : n2.toNumber(Boolean(e2));
          }, r.merge = i, r.lcFirst = function(t2) {
            return t2.charAt(0).toLowerCase() + t2.substring(1);
          }, r.newError = o, r.ProtocolError = o("ProtocolError"), r.oneOfGetter = function(t2) {
            for (var e2 = {}, n2 = 0; n2 < t2.length; ++n2)
              e2[t2[n2]] = 1;
            return function() {
              for (var t3 = Object.keys(this), n3 = t3.length - 1; n3 > -1; --n3)
                if (1 === e2[t3[n3]] && void 0 !== this[t3[n3]] && null !== this[t3[n3]])
                  return t3[n3];
            };
          }, r.oneOfSetter = function(t2) {
            return function(e2) {
              for (var n2 = 0; n2 < t2.length; ++n2)
                t2[n2] !== e2 && delete this[t2[n2]];
            };
          }, r.toJSONOptions = { longs: String, enums: String, bytes: String, json: true }, r._configure = function() {
            var t2 = r.Buffer;
            t2 ? (r._Buffer_from = t2.from !== Uint8Array.from && t2.from || function(e2, n2) {
              return new t2(e2, n2);
            }, r._Buffer_allocUnsafe = t2.allocUnsafe || function(e2) {
              return new t2(e2);
            }) : r._Buffer_from = r._Buffer_allocUnsafe = null;
          };
        }, 1173: (t, e, n) => {
          "use strict";
          t.exports = p;
          var r, i = n(9693), o = i.LongBits, a = i.base64, s = i.utf8;
          function u(t2, e2, n2) {
            this.fn = t2, this.len = e2, this.next = void 0, this.val = n2;
          }
          function c() {
          }
          function l(t2) {
            this.head = t2.head, this.tail = t2.tail, this.len = t2.len, this.next = t2.states;
          }
          function p() {
            this.len = 0, this.head = new u(c, 0, 0), this.tail = this.head, this.states = null;
          }
          var f = function() {
            return i.Buffer ? function() {
              return (p.create = function() {
                return new r();
              })();
            } : function() {
              return new p();
            };
          };
          function d(t2, e2, n2) {
            e2[n2] = 255 & t2;
          }
          function h(t2, e2) {
            this.len = t2, this.next = void 0, this.val = e2;
          }
          function g(t2, e2, n2) {
            for (; t2.hi; )
              e2[n2++] = 127 & t2.lo | 128, t2.lo = (t2.lo >>> 7 | t2.hi << 25) >>> 0, t2.hi >>>= 7;
            for (; t2.lo > 127; )
              e2[n2++] = 127 & t2.lo | 128, t2.lo = t2.lo >>> 7;
            e2[n2++] = t2.lo;
          }
          function b(t2, e2, n2) {
            e2[n2] = 255 & t2, e2[n2 + 1] = t2 >>> 8 & 255, e2[n2 + 2] = t2 >>> 16 & 255, e2[n2 + 3] = t2 >>> 24;
          }
          p.create = f(), p.alloc = function(t2) {
            return new i.Array(t2);
          }, i.Array !== Array && (p.alloc = i.pool(p.alloc, i.Array.prototype.subarray)), p.prototype._push = function(t2, e2, n2) {
            return this.tail = this.tail.next = new u(t2, e2, n2), this.len += e2, this;
          }, h.prototype = Object.create(u.prototype), h.prototype.fn = function(t2, e2, n2) {
            for (; t2 > 127; )
              e2[n2++] = 127 & t2 | 128, t2 >>>= 7;
            e2[n2] = t2;
          }, p.prototype.uint32 = function(t2) {
            return this.len += (this.tail = this.tail.next = new h((t2 >>>= 0) < 128 ? 1 : t2 < 16384 ? 2 : t2 < 2097152 ? 3 : t2 < 268435456 ? 4 : 5, t2)).len, this;
          }, p.prototype.int32 = function(t2) {
            return t2 < 0 ? this._push(g, 10, o.fromNumber(t2)) : this.uint32(t2);
          }, p.prototype.sint32 = function(t2) {
            return this.uint32((t2 << 1 ^ t2 >> 31) >>> 0);
          }, p.prototype.uint64 = function(t2) {
            var e2 = o.from(t2);
            return this._push(g, e2.length(), e2);
          }, p.prototype.int64 = p.prototype.uint64, p.prototype.sint64 = function(t2) {
            var e2 = o.from(t2).zzEncode();
            return this._push(g, e2.length(), e2);
          }, p.prototype.bool = function(t2) {
            return this._push(d, 1, t2 ? 1 : 0);
          }, p.prototype.fixed32 = function(t2) {
            return this._push(b, 4, t2 >>> 0);
          }, p.prototype.sfixed32 = p.prototype.fixed32, p.prototype.fixed64 = function(t2) {
            var e2 = o.from(t2);
            return this._push(b, 4, e2.lo)._push(b, 4, e2.hi);
          }, p.prototype.sfixed64 = p.prototype.fixed64, p.prototype.float = function(t2) {
            return this._push(i.float.writeFloatLE, 4, t2);
          }, p.prototype.double = function(t2) {
            return this._push(i.float.writeDoubleLE, 8, t2);
          };
          var m = i.Array.prototype.set ? function(t2, e2, n2) {
            e2.set(t2, n2);
          } : function(t2, e2, n2) {
            for (var r2 = 0; r2 < t2.length; ++r2)
              e2[n2 + r2] = t2[r2];
          };
          p.prototype.bytes = function(t2) {
            var e2 = t2.length >>> 0;
            if (!e2)
              return this._push(d, 1, 0);
            if (i.isString(t2)) {
              var n2 = p.alloc(e2 = a.length(t2));
              a.decode(t2, n2, 0), t2 = n2;
            }
            return this.uint32(e2)._push(m, e2, t2);
          }, p.prototype.string = function(t2) {
            var e2 = s.length(t2);
            return e2 ? this.uint32(e2)._push(s.write, e2, t2) : this._push(d, 1, 0);
          }, p.prototype.fork = function() {
            return this.states = new l(this), this.head = this.tail = new u(c, 0, 0), this.len = 0, this;
          }, p.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new u(c, 0, 0), this.len = 0), this;
          }, p.prototype.ldelim = function() {
            var t2 = this.head, e2 = this.tail, n2 = this.len;
            return this.reset().uint32(n2), n2 && (this.tail.next = t2.next, this.tail = e2, this.len += n2), this;
          }, p.prototype.finish = function() {
            for (var t2 = this.head.next, e2 = this.constructor.alloc(this.len), n2 = 0; t2; )
              t2.fn(t2.val, e2, n2), n2 += t2.len, t2 = t2.next;
            return e2;
          }, p._configure = function(t2) {
            r = t2, p.create = f(), r._configure();
          };
        }, 3155: (t, e, n) => {
          "use strict";
          t.exports = o;
          var r = n(1173);
          (o.prototype = Object.create(r.prototype)).constructor = o;
          var i = n(9693);
          function o() {
            r.call(this);
          }
          function a(t2, e2, n2) {
            t2.length < 40 ? i.utf8.write(t2, e2, n2) : e2.utf8Write ? e2.utf8Write(t2, n2) : e2.write(t2, n2);
          }
          o._configure = function() {
            o.alloc = i._Buffer_allocUnsafe, o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function(t2, e2, n2) {
              e2.set(t2, n2);
            } : function(t2, e2, n2) {
              if (t2.copy)
                t2.copy(e2, n2, 0, t2.length);
              else
                for (var r2 = 0; r2 < t2.length; )
                  e2[n2++] = t2[r2++];
            };
          }, o.prototype.bytes = function(t2) {
            i.isString(t2) && (t2 = i._Buffer_from(t2, "base64"));
            var e2 = t2.length >>> 0;
            return this.uint32(e2), e2 && this._push(o.writeBytesBuffer, e2, t2), this;
          }, o.prototype.string = function(t2) {
            var e2 = i.Buffer.byteLength(t2);
            return this.uint32(e2), e2 && this._push(a, e2, t2), this;
          }, o._configure();
        }, 7714: (t, e, n) => {
          "use strict";
          e.R = void 0;
          const r = n(6919), i = n(7448);
          e.R = new class {
            async init() {
            }
            async createSessionHandler(t2, e2) {
              const n2 = new r.Session(e2);
              return await n2.loadModel(t2), new i.OnnxjsSessionHandler(n2);
            }
          }();
        }, 4200: (t, e, n) => {
          "use strict";
          e.c8 = e.rX = void 0;
          const r = n(1670), i = n(5381), o = n(2157), a = n(2306);
          e.rX = () => {
            if (("number" != typeof r.env.wasm.initTimeout || r.env.wasm.initTimeout < 0) && (r.env.wasm.initTimeout = 0), "boolean" != typeof r.env.wasm.simd && (r.env.wasm.simd = true), "boolean" != typeof r.env.wasm.proxy && (r.env.wasm.proxy = false), "number" != typeof r.env.wasm.numThreads || !Number.isInteger(r.env.wasm.numThreads) || r.env.wasm.numThreads <= 0) {
              const t2 = "undefined" == typeof navigator ? (0, i.cpus)().length : navigator.hardwareConcurrency;
              r.env.wasm.numThreads = Math.min(4, Math.ceil((t2 || 1) / 2));
            }
          }, e.c8 = new class {
            async init() {
              (0, e.rX)(), await (0, o.initWasm)();
            }
            async createSessionHandler(t2, e2) {
              const n2 = new a.OnnxruntimeWebAssemblySessionHandler();
              return await n2.loadModel(t2, e2), Promise.resolve(n2);
            }
          }();
        }, 6018: function(t, e, n) {
          "use strict";
          var r = this && this.__createBinding || (Object.create ? function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2);
            var i2 = Object.getOwnPropertyDescriptor(e2, n2);
            i2 && !("get" in i2 ? !e2.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
              return e2[n2];
            } }), Object.defineProperty(t2, r2, i2);
          } : function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2), t2[r2] = e2[n2];
          }), i = this && this.__exportStar || function(t2, e2) {
            for (var n2 in t2)
              "default" === n2 || Object.prototype.hasOwnProperty.call(e2, n2) || r(e2, t2, n2);
          };
          Object.defineProperty(e, "__esModule", { value: true }), i(n(1670), e);
          const o = n(1670);
          {
            const t2 = n(7714).R;
            (0, o.registerBackend)("webgl", t2, -10);
          }
          {
            const t2 = n(4200).c8;
            (0, o.registerBackend)("cpu", t2, 10), (0, o.registerBackend)("wasm", t2, 10), (0, o.registerBackend)("xnnpack", t2, 9);
          }
        }, 246: (t, e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createAttributeWithCacheKey = void 0;
          class n {
            constructor(t2) {
              Object.assign(this, t2);
            }
            get cacheKey() {
              return this._cacheKey || (this._cacheKey = Object.getOwnPropertyNames(this).sort().map((t2) => `${this[t2]}`).join(";")), this._cacheKey;
            }
          }
          e.createAttributeWithCacheKey = (t2) => new n(t2);
        }, 7778: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Attribute = void 0;
          const r = n(1446), i = n(9395), o = n(9162), a = n(2517);
          var s = i.onnxruntime.experimental.fbs;
          class u {
            constructor(t2) {
              if (this._attributes = /* @__PURE__ */ new Map(), null != t2) {
                for (const e2 of t2)
                  e2 instanceof r.onnx.AttributeProto ? this._attributes.set(e2.name, [u.getValue(e2), u.getType(e2)]) : e2 instanceof s.Attribute && this._attributes.set(e2.name(), [u.getValue(e2), u.getType(e2)]);
                if (this._attributes.size < t2.length)
                  throw new Error("duplicated attribute names");
              }
            }
            set(t2, e2, n2) {
              this._attributes.set(t2, [n2, e2]);
            }
            delete(t2) {
              this._attributes.delete(t2);
            }
            getFloat(t2, e2) {
              return this.get(t2, "float", e2);
            }
            getInt(t2, e2) {
              return this.get(t2, "int", e2);
            }
            getString(t2, e2) {
              return this.get(t2, "string", e2);
            }
            getTensor(t2, e2) {
              return this.get(t2, "tensor", e2);
            }
            getFloats(t2, e2) {
              return this.get(t2, "floats", e2);
            }
            getInts(t2, e2) {
              return this.get(t2, "ints", e2);
            }
            getStrings(t2, e2) {
              return this.get(t2, "strings", e2);
            }
            getTensors(t2, e2) {
              return this.get(t2, "tensors", e2);
            }
            get(t2, e2, n2) {
              const r2 = this._attributes.get(t2);
              if (void 0 === r2) {
                if (void 0 !== n2)
                  return n2;
                throw new Error(`required attribute not found: ${t2}`);
              }
              if (r2[1] !== e2)
                throw new Error(`type mismatch: expected ${e2} but got ${r2[1]}`);
              return r2[0];
            }
            static getType(t2) {
              const e2 = t2 instanceof r.onnx.AttributeProto ? t2.type : t2.type();
              switch (e2) {
                case r.onnx.AttributeProto.AttributeType.FLOAT:
                  return "float";
                case r.onnx.AttributeProto.AttributeType.INT:
                  return "int";
                case r.onnx.AttributeProto.AttributeType.STRING:
                  return "string";
                case r.onnx.AttributeProto.AttributeType.TENSOR:
                  return "tensor";
                case r.onnx.AttributeProto.AttributeType.FLOATS:
                  return "floats";
                case r.onnx.AttributeProto.AttributeType.INTS:
                  return "ints";
                case r.onnx.AttributeProto.AttributeType.STRINGS:
                  return "strings";
                case r.onnx.AttributeProto.AttributeType.TENSORS:
                  return "tensors";
                default:
                  throw new Error(`attribute type is not supported yet: ${r.onnx.AttributeProto.AttributeType[e2]}`);
              }
            }
            static getValue(t2) {
              const e2 = t2 instanceof r.onnx.AttributeProto ? t2.type : t2.type();
              if (e2 === r.onnx.AttributeProto.AttributeType.GRAPH || e2 === r.onnx.AttributeProto.AttributeType.GRAPHS)
                throw new Error("graph attribute is not supported yet");
              const n2 = this.getValueNoCheck(t2);
              if (e2 === r.onnx.AttributeProto.AttributeType.INT && a.LongUtil.isLong(n2))
                return a.LongUtil.longToNumber(n2);
              if (e2 === r.onnx.AttributeProto.AttributeType.INTS) {
                const t3 = n2, e3 = new Array(t3.length);
                for (let n3 = 0; n3 < t3.length; n3++) {
                  const r2 = t3[n3];
                  e3[n3] = a.LongUtil.longToNumber(r2);
                }
                return e3;
              }
              if (e2 === r.onnx.AttributeProto.AttributeType.TENSOR)
                return t2 instanceof r.onnx.AttributeProto ? o.Tensor.fromProto(n2) : o.Tensor.fromOrtTensor(n2);
              if (e2 === r.onnx.AttributeProto.AttributeType.TENSORS) {
                if (t2 instanceof r.onnx.AttributeProto)
                  return n2.map((t3) => o.Tensor.fromProto(t3));
                if (t2 instanceof s.Attribute)
                  return n2.map((t3) => o.Tensor.fromOrtTensor(t3));
              }
              if (e2 === r.onnx.AttributeProto.AttributeType.STRING && t2 instanceof r.onnx.AttributeProto) {
                const t3 = n2;
                return (0, a.decodeUtf8String)(t3);
              }
              return e2 === r.onnx.AttributeProto.AttributeType.STRINGS && t2 instanceof r.onnx.AttributeProto ? n2.map(a.decodeUtf8String) : n2;
            }
            static getValueNoCheck(t2) {
              return t2 instanceof r.onnx.AttributeProto ? this.getValueNoCheckFromOnnxFormat(t2) : this.getValueNoCheckFromOrtFormat(t2);
            }
            static getValueNoCheckFromOnnxFormat(t2) {
              switch (t2.type) {
                case r.onnx.AttributeProto.AttributeType.FLOAT:
                  return t2.f;
                case r.onnx.AttributeProto.AttributeType.INT:
                  return t2.i;
                case r.onnx.AttributeProto.AttributeType.STRING:
                  return t2.s;
                case r.onnx.AttributeProto.AttributeType.TENSOR:
                  return t2.t;
                case r.onnx.AttributeProto.AttributeType.GRAPH:
                  return t2.g;
                case r.onnx.AttributeProto.AttributeType.FLOATS:
                  return t2.floats;
                case r.onnx.AttributeProto.AttributeType.INTS:
                  return t2.ints;
                case r.onnx.AttributeProto.AttributeType.STRINGS:
                  return t2.strings;
                case r.onnx.AttributeProto.AttributeType.TENSORS:
                  return t2.tensors;
                case r.onnx.AttributeProto.AttributeType.GRAPHS:
                  return t2.graphs;
                default:
                  throw new Error(`unsupported attribute type: ${r.onnx.AttributeProto.AttributeType[t2.type]}`);
              }
            }
            static getValueNoCheckFromOrtFormat(t2) {
              switch (t2.type()) {
                case s.AttributeType.FLOAT:
                  return t2.f();
                case s.AttributeType.INT:
                  return t2.i();
                case s.AttributeType.STRING:
                  return t2.s();
                case s.AttributeType.TENSOR:
                  return t2.t();
                case s.AttributeType.GRAPH:
                  return t2.g();
                case s.AttributeType.FLOATS:
                  return t2.floatsArray();
                case s.AttributeType.INTS: {
                  const e2 = [];
                  for (let n2 = 0; n2 < t2.intsLength(); n2++)
                    e2.push(t2.ints(n2));
                  return e2;
                }
                case s.AttributeType.STRINGS: {
                  const e2 = [];
                  for (let n2 = 0; n2 < t2.stringsLength(); n2++)
                    e2.push(t2.strings(n2));
                  return e2;
                }
                case s.AttributeType.TENSORS: {
                  const e2 = [];
                  for (let n2 = 0; n2 < t2.tensorsLength(); n2++)
                    e2.push(t2.tensors(n2));
                  return e2;
                }
                default:
                  throw new Error(`unsupported attribute type: ${s.AttributeType[t2.type()]}`);
              }
            }
          }
          e.Attribute = u;
        }, 7091: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.resolveBackend = e.backend = void 0;
          const r = n(5038), i = /* @__PURE__ */ new Map();
          async function o(t2) {
            const n2 = e.backend;
            if (void 0 !== n2[t2] && function(t3) {
              const e2 = t3;
              return "initialize" in e2 && "function" == typeof e2.initialize && "createSessionHandler" in e2 && "function" == typeof e2.createSessionHandler && "dispose" in e2 && "function" == typeof e2.dispose;
            }(n2[t2])) {
              const e2 = n2[t2];
              let r2 = e2.initialize();
              if ("object" == typeof r2 && "then" in r2 && (r2 = await r2), r2)
                return i.set(t2, e2), e2;
            }
          }
          e.backend = { webgl: new r.WebGLBackend() }, e.resolveBackend = async function t2(e2) {
            if (!e2)
              return t2(["webgl"]);
            {
              const t3 = "string" == typeof e2 ? [e2] : e2;
              for (const e3 of t3) {
                const t4 = i.get(e3);
                if (t4)
                  return t4;
                const n2 = await o(e3);
                if (n2)
                  return n2;
              }
            }
            throw new Error("no available backend to use");
          };
        }, 5038: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.WebGLBackend = void 0;
          const r = n(1670), i = n(6231), o = n(6416), a = n(7305);
          e.WebGLBackend = class {
            get contextId() {
              return r.env.webgl.contextId;
            }
            set contextId(t2) {
              r.env.webgl.contextId = t2;
            }
            get matmulMaxBatchSize() {
              return r.env.webgl.matmulMaxBatchSize;
            }
            set matmulMaxBatchSize(t2) {
              r.env.webgl.matmulMaxBatchSize = t2;
            }
            get textureCacheMode() {
              return r.env.webgl.textureCacheMode;
            }
            set textureCacheMode(t2) {
              r.env.webgl.textureCacheMode = t2;
            }
            get pack() {
              return r.env.webgl.pack;
            }
            set pack(t2) {
              r.env.webgl.pack = t2;
            }
            get async() {
              return r.env.webgl.async;
            }
            set async(t2) {
              r.env.webgl.async = t2;
            }
            initialize() {
              try {
                return this.glContext = (0, a.createWebGLContext)(this.contextId), "number" != typeof this.matmulMaxBatchSize && (this.matmulMaxBatchSize = 16), "string" != typeof this.textureCacheMode && (this.textureCacheMode = "full"), "boolean" != typeof this.pack && (this.pack = false), "boolean" != typeof this.async && (this.async = false), i.Logger.setWithEnv(r.env), i.Logger.verbose("WebGLBackend", `Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`), true;
              } catch (t2) {
                return i.Logger.warning("WebGLBackend", `Unable to initialize WebGLBackend. ${t2}`), false;
              }
            }
            createSessionHandler(t2) {
              return new o.WebGLSessionHandler(this, t2);
            }
            dispose() {
              this.glContext.dispose();
            }
          };
        }, 5107: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.CoordsGlslLib = void 0;
          const r = n(2517), i = n(8520), o = n(5060), a = n(7859), s = n(9390);
          class u extends i.GlslLib {
            constructor(t2) {
              super(t2);
            }
            getFunctions() {
              return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.offsetToCoords()), this.coordsToOffset()), this.toVec()), this.valueFrom()), this.getCommonUtilFuncs()), this.getInputsSamplingSnippets()), this.getOutputSamplingSnippet());
            }
            getCustomTypes() {
              return {};
            }
            offsetToCoords() {
              return { offsetToCoords: new i.GlslLibRoutine("\n      vec2 offsetToCoords(int offset, int width, int height) {\n        int t = offset / width;\n        int s = offset - t*width;\n        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);\n        return coords;\n      }\n      ") };
            }
            coordsToOffset() {
              return { coordsToOffset: new i.GlslLibRoutine("\n      int coordsToOffset(vec2 coords, int width, int height) {\n        float s = coords.s * float(width);\n        float t = coords.t * float(height);\n        int offset = int(t) * width + int(s);\n        return offset;\n      }\n      ") };
            }
            getOutputSamplingSnippet() {
              const t2 = this.context.outputTextureLayout;
              return t2.isPacked ? this.getPackedOutputSamplingSnippet(t2) : this.getUnpackedOutputSamplingSnippet(t2);
            }
            getPackedOutputSamplingSnippet(t2) {
              const e2 = t2.unpackedShape, n2 = [t2.width, t2.height], r2 = {}, a2 = "getOutputCoords";
              switch (e2.length) {
                case 0:
                  r2[a2] = this.getOutputScalarCoords();
                  break;
                case 1:
                  r2[a2] = this.getOutputPacked1DCoords(e2, n2);
                  break;
                case 2:
                  r2[a2] = this.getOutputPacked2DCoords(e2, n2);
                  break;
                case 3:
                  r2[a2] = this.getOutputPacked3DCoords(e2, n2);
                  break;
                default:
                  r2[a2] = this.getOutputPackedNDCoords(e2, n2);
              }
              const s2 = `
      void setOutput(vec4 val) {
        ${(0, o.getGlsl)(this.context.glContext.version).output} = val;
      }
    `;
              return r2.floatTextureSetRGBA = new i.GlslLibRoutine(s2), r2;
            }
            getUnpackedOutputSamplingSnippet(t2) {
              const e2 = t2.unpackedShape, n2 = [t2.width, t2.height], r2 = {}, a2 = "getOutputCoords";
              switch (e2.length) {
                case 0:
                  r2[a2] = this.getOutputScalarCoords();
                  break;
                case 1:
                  r2[a2] = this.getOutputUnpacked1DCoords(e2, n2);
                  break;
                case 2:
                  r2[a2] = this.getOutputUnpacked2DCoords(e2, n2);
                  break;
                case 3:
                  r2[a2] = this.getOutputUnpacked3DCoords(e2, n2);
                  break;
                case 4:
                  r2[a2] = this.getOutputUnpacked4DCoords(e2, n2);
                  break;
                case 5:
                  r2[a2] = this.getOutputUnpacked5DCoords(e2, n2);
                  break;
                case 6:
                  r2[a2] = this.getOutputUnpacked6DCoords(e2, n2);
                  break;
                default:
                  throw new Error(`Unsupported output dimensionality: ${e2.length}`);
              }
              const s2 = `
        void setOutput(float val) {
          ${(0, o.getGlsl)(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `;
              return r2.floatTextureSetR = new i.GlslLibRoutine(s2), r2;
            }
            getOutputScalarCoords() {
              return new i.GlslLibRoutine("\n      int getOutputCoords() {\n        return 0;\n      }\n    ");
            }
            getOutputPacked1DCoords(t2, e2) {
              const n2 = e2;
              let r2 = "";
              return 1 === n2[0] ? (r2 = `
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n2[1]}.0);
          }
        `, new i.GlslLibRoutine(r2)) : 1 === n2[1] ? (r2 = `
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n2[0]}.0);
          }
        `, new i.GlslLibRoutine(r2)) : (r2 = `
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n2[0]}, ${n2[1]}));
          return 2 * (resTexRC.y * ${n2[0]} + resTexRC.x);
        }
      `, new i.GlslLibRoutine(r2));
            }
            getOutputPacked2DCoords(t2, e2) {
              let n2 = "";
              if (r.ArrayUtil.arraysEqual(t2, e2))
                return n2 = `
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${e2[0]}, ${e2[1]}));
        }
      `, new i.GlslLibRoutine(n2);
              const o2 = e2, a2 = Math.ceil(t2[1] / 2);
              return n2 = `
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${o2[0]}, ${o2[1]}));

          int index = resTexRC.y * ${o2[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${a2}) * 2;
          int c = 2 * (index / ${a2});

          return ivec2(r, c);
        }
      `, new i.GlslLibRoutine(n2);
            }
            getOutputPacked3DCoords(t2, e2) {
              const n2 = [e2[0], e2[1]], r2 = Math.ceil(t2[2] / 2), o2 = r2 * Math.ceil(t2[1] / 2), a2 = `
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n2[0]}, ${n2[1]}));
          int index = resTexRC.y * ${n2[0]} + resTexRC.x;

          int b = index / ${o2};
          index -= b * ${o2};

          // reverse r and c order for packed texture
          int r = imod(index, ${r2}) * 2;
          int c = 2 * (index / ${r2});

          return ivec3(b, r, c);
        }
      `;
              return new i.GlslLibRoutine(a2);
            }
            getOutputPackedNDCoords(t2, e2) {
              const n2 = [e2[0], e2[1]], r2 = Math.ceil(t2[t2.length - 1] / 2), o2 = r2 * Math.ceil(t2[t2.length - 2] / 2);
              let a2 = o2, s2 = "", u2 = "b, r, c";
              for (let e3 = 2; e3 < t2.length - 1; e3++)
                a2 *= t2[t2.length - e3 - 1], s2 = `
      int b${e3} = index / ${a2};
      index -= b${e3} * ${a2};
    ` + s2, u2 = `b${e3}, ` + u2;
              const c = `
      ivec${t2.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n2[0]}, ${n2[1]}));
        int index = resTexRC.y * ${n2[0]} + resTexRC.x;

        ${s2}

        int b = index / ${o2};
        index -= b * ${o2};

        // reverse r and c order for packed texture
        int r = imod(index, ${r2}) * 2;
        int c = 2 * (index / ${r2});

        return ivec${t2.length}(${u2});
      }
    `;
              return new i.GlslLibRoutine(c);
            }
            getOutputUnpacked1DCoords(t2, e2) {
              const n2 = `
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${e2[0]}, ${e2[1]}));
          return resTexRC.y * ${e2[0]} + resTexRC.x;
        }
      `;
              return new i.GlslLibRoutine(n2);
            }
            getOutputUnpacked2DCoords(t2, e2) {
              const n2 = `
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${e2[0]}, ${e2[1]}));
          int index = resTexRC.y * ${e2[0]} + resTexRC.x;
          int r = index / ${t2[1]};
          int c = index - r * ${t2[1]};
          return ivec2(r, c);
        }
      `;
              return new i.GlslLibRoutine(n2);
            }
            getOutputUnpacked3DCoords(t2, e2) {
              let n2 = "";
              const r2 = t2.length;
              let o2 = null;
              r2 < 2 && (o2 = []), o2 = new Array(r2 - 1), o2[r2 - 2] = t2[r2 - 1];
              for (let e3 = r2 - 3; e3 >= 0; --e3)
                o2[e3] = o2[e3 + 1] * t2[e3 + 1];
              const a2 = ["r", "c", "d"], s2 = o2.map((t3, e3) => `int ${a2[e3]} = index / ${t3}; ${e3 === o2.length - 1 ? `int ${a2[e3 + 1]} = index - ${a2[e3]} * ${t3}` : `index -= ${a2[e3]} * ${t3}`};`).join("");
              return n2 = `
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${e2[0]}, ${e2[1]}));
          int index = resTexRC.y * ${e2[0]} + resTexRC.x;
          ${s2}
          return ivec3(r, c, d);
        }
      `, new i.GlslLibRoutine(n2);
            }
            getOutputUnpacked4DCoords(t2, e2) {
              let n2 = "";
              const r2 = t2.length;
              let o2 = null;
              r2 < 2 && (o2 = []), o2 = new Array(r2 - 1), o2[r2 - 2] = t2[r2 - 1];
              for (let e3 = r2 - 3; e3 >= 0; --e3)
                o2[e3] = o2[e3 + 1] * t2[e3 + 1];
              const a2 = ["r", "c", "d", "d2"], s2 = o2.map((t3, e3) => `int ${a2[e3]} = index / ${t3}; ${e3 === o2.length - 1 ? `int ${a2[e3 + 1]} = index - ${a2[e3]} * ${t3}` : `index -= ${a2[e3]} * ${t3}`};`).join("");
              return n2 = `
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${e2[0]}, ${e2[1]}));
          int index = resTexRC.y * ${e2[0]} + resTexRC.x;
          ${s2}
          return ivec4(r, c, d, d2);
        }
      `, new i.GlslLibRoutine(n2);
            }
            getOutputUnpacked5DCoords(t2, e2) {
              let n2 = "";
              const r2 = t2.length;
              let o2 = null;
              r2 < 2 && (o2 = []), o2 = new Array(r2 - 1), o2[r2 - 2] = t2[r2 - 1];
              for (let e3 = r2 - 3; e3 >= 0; --e3)
                o2[e3] = o2[e3 + 1] * t2[e3 + 1];
              const a2 = ["r", "c", "d", "d2", "d3"], s2 = o2.map((t3, e3) => `int ${a2[e3]} = index / ${t3}; ${e3 === o2.length - 1 ? `int ${a2[e3 + 1]} = index - ${a2[e3]} * ${t3}` : `index -= ${a2[e3]} * ${t3}`};`).join("");
              return n2 = `
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${e2[0]}, ${e2[1]}));
          int index = resTexRC.y * ${e2[0]} + resTexRC.x;
          ${s2}
          return ivec5(r, c, d, d2, d3);
        }
      `, new i.GlslLibRoutine(n2);
            }
            getOutputUnpacked6DCoords(t2, e2) {
              let n2 = "";
              const r2 = t2.length;
              let o2 = null;
              r2 < 2 && (o2 = []), o2 = new Array(r2 - 1), o2[r2 - 2] = t2[r2 - 1];
              for (let e3 = r2 - 3; e3 >= 0; --e3)
                o2[e3] = o2[e3 + 1] * t2[e3 + 1];
              const a2 = ["r", "c", "d", "d2", "d3", "d4"], s2 = o2.map((t3, e3) => `int ${a2[e3]} = index / ${t3}; ${e3 === o2.length - 1 ? `int ${a2[e3 + 1]} = index - ${a2[e3]} * ${t3}` : `index -= ${a2[e3]} * ${t3}`};`).join("");
              return n2 = `
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${e2[0]}, ${e2[1]}));
         int index = resTexRC.y * ${e2[0]} + resTexRC.x;
         ${s2}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `, new i.GlslLibRoutine(n2);
            }
            getCommonUtilFuncs() {
              const t2 = {};
              let e2 = "uvFromFlat";
              t2[e2] = new i.GlslLibRoutine("\n    vec2 uvFromFlat(int texNumR, int texNumC, int index) {\n      int texC = index / texNumR;\n      int texR = index - texC * texNumR;\n      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to\n      //       v.\n      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);\n    }\n    "), e2 = "packedUVfrom1D", t2[e2] = new i.GlslLibRoutine("\n      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n        int texelIndex = index / 2;\n        int texR = texelIndex / texNumC;\n        int texC = texelIndex - texR * texNumC;\n        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n      }\n      "), e2 = "packedUVfrom2D", t2[e2] = new i.GlslLibRoutine("\n      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {\n        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n        int texR = texelIndex / texNumC;\n        int texC = texelIndex - texR * texNumC;\n        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n      }\n      "), e2 = "packedUVfrom3D", t2[e2] = new i.GlslLibRoutine("\n      vec2 packedUVfrom3D(int texNumR, int texNumC,\n          int texelsInBatch, int texelsInLogicalRow, int b,\n          int row, int col) {\n        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n        int texR = index / texNumC;\n        int texC = index - texR * texNumC;\n        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n      }\n      "), e2 = "sampleTexture";
              const n2 = (0, o.getGlsl)(this.context.glContext.version);
              return t2[e2] = new i.GlslLibRoutine(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n2.texture2D}(textureSampler, uv).r;
        }`), t2;
            }
            getInputsSamplingSnippets() {
              const t2 = {}, e2 = this.context.outputTextureLayout;
              return this.context.programInfo.inputNames.forEach((n2, r2) => {
                const i2 = this.context.inputTextureLayouts[r2], o2 = (0, s.generateShaderFuncNameFromInputSamplerName)(n2);
                i2.isPacked ? t2[o2] = this.getPackedSamplerFromInput(o2, n2, i2) : t2[o2] = this.getUnpackedSamplerFromInput(o2, n2, i2);
                const a2 = (0, s.generateShaderFuncNameFromInputSamplerNameAtOutCoords)(n2);
                i2.unpackedShape.length <= e2.unpackedShape.length && (i2.isPacked ? t2[a2] = this.getPackedSamplerAtOutputCoords(a2, i2, e2, n2) : t2[a2] = this.getUnpackedSamplerAtOutputCoords(a2, i2, e2, n2));
              }), t2;
            }
            getPackedSamplerAtOutputCoords(t2, e2, n2, o2) {
              const a2 = e2.unpackedShape, u2 = n2.unpackedShape, c = o2, l = (0, s.generateShaderFuncNameFromInputSamplerName)(c), p = a2.length, f = u2.length, d = r.BroadcastUtil.getBroadcastDims(a2, u2), h = (0, s.getCoordsDataType)(f), g = f - p;
              let b;
              const m = (0, s.getGlChannels)();
              b = 0 === p ? "" : f < 2 && d.length >= 1 ? "coords = 0;" : d.map((t3) => `coords.${m[t3 + g]} = 0;`).join("\n");
              let y = "";
              y = f < 2 && p > 0 ? "coords" : a2.map((t3, e3) => `coords.${m[e3 + g]}`).join(", ");
              let _ = "return outputValue;";
              const v = 1 === r.ShapeUtil.size(a2), w = 1 === r.ShapeUtil.size(u2);
              if (1 !== p || v || w) {
                if (v && !w)
                  _ = 1 === f ? "\n          return vec4(outputValue.x, outputValue.x, 0., 0.);\n        " : "\n          return vec4(outputValue.x);\n        ";
                else if (d.length) {
                  const t3 = p - 2, e3 = p - 1;
                  d.indexOf(t3) > -1 && d.indexOf(e3) > -1 ? _ = "return vec4(outputValue.x);" : d.indexOf(t3) > -1 ? _ = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : d.indexOf(e3) > -1 && (_ = "return vec4(outputValue.xx, outputValue.zz);");
                }
              } else
                _ = "\n        return vec4(outputValue.xy, outputValue.xy);\n      ";
              const x = `
      vec4 ${t2}() {
        ${h} coords = getOutputCoords();
        
        int lastDim = coords.${m[f - 1]};
        coords.${m[f - 1]} = coords.${m[f - 2]};
        coords.${m[f - 2]} = lastDim;
      
        ${b}
        vec4 outputValue = ${l}(${y});
        ${_}
      }
    `;
              return new i.GlslLibRoutine(x, ["coordinates.getOutputCoords"]);
            }
            getUnpackedSamplerAtOutputCoords(t2, e2, n2, o2) {
              const a2 = [n2.width, n2.height], u2 = [e2.width, e2.height], c = e2.unpackedShape.length, l = n2.unpackedShape.length, p = e2.unpackedShape, f = n2.unpackedShape, d = (0, s.generateShaderFuncNameFromInputSamplerName)(o2);
              if (c === l && r.ArrayUtil.arraysEqual(u2, a2)) {
                const e3 = `
          float ${t2}() {
            return sampleTexture(${o2}, TexCoords);
          }
        `;
                return new i.GlslLibRoutine(e3, ["coordinates.sampleTexture"]);
              }
              const h = (0, s.getCoordsDataType)(l), g = r.BroadcastUtil.getBroadcastDims(p, f), b = l - c;
              let m;
              const y = (0, s.getGlChannels)();
              m = 0 === c ? "" : l < 2 && g.length >= 1 ? "coords = 0;" : g.map((t3) => `coords.${y[t3 + b]} = 0;`).join("\n");
              let _ = "";
              _ = l < 2 && c > 0 ? "coords" : e2.unpackedShape.map((t3, e3) => `coords.${y[e3 + b]}`).join(", ");
              const v = `
        float ${t2}() {
          ${h} coords = getOutputCoords();
          ${m}
          return ${d}(${_});
        }
      `;
              return new i.GlslLibRoutine(v, ["coordinates.getOutputCoords"]);
            }
            getPackedSamplerFromInput(t2, e2, n2) {
              switch (n2.unpackedShape.length) {
                case 0:
                  return this.getPackedSamplerScalar(t2, e2);
                case 1:
                  return this.getPackedSampler1D(t2, e2, n2);
                case 2:
                  return this.getPackedSampler2D(t2, e2, n2);
                case 3:
                  return this.getPackedSampler3D(t2, e2, n2);
                default:
                  return this.getPackedSamplerND(t2, e2, n2);
              }
            }
            getUnpackedSamplerFromInput(t2, e2, n2) {
              const r2 = n2.unpackedShape;
              switch (r2.length) {
                case 0:
                  return this.getUnpackedSamplerScalar(t2, e2, n2);
                case 1:
                  return this.getUnpackedSampler1D(t2, e2, n2);
                case 2:
                  return this.getUnpackedSampler2D(t2, e2, n2);
                case 3:
                  return this.getUnpackedSampler3D(t2, e2, n2);
                case 4:
                  return this.getUnpackedSampler4D(t2, e2, n2);
                case 5:
                  return this.getUnpackedSampler5D(t2, e2, n2);
                case 6:
                  return this.getUnpackedSampler6D(t2, e2, n2);
                default:
                  throw new Error(`Unsupported dimension ${r2.length}-D`);
              }
            }
            getPackedSamplerScalar(t2, e2) {
              const n2 = `
          vec4 ${t2}() {
            return ${(0, o.getGlsl)(this.context.glContext.version).texture2D}(${e2}, halfCR);
          }
        `;
              return new i.GlslLibRoutine(n2);
            }
            getPackedSampler1D(t2, e2, n2) {
              const r2 = [n2.width, n2.height], a2 = [r2[1], r2[0]], s2 = (0, o.getGlsl)(this.context.glContext.version), u2 = `vec4 ${t2}(int index) {
      vec2 uv = packedUVfrom1D(
      ${a2[0]}, ${a2[1]}, index);
      return ${s2.texture2D}(${e2}, uv);
    }`;
              return new i.GlslLibRoutine(u2, ["coordinates.packedUVfrom1D"]);
            }
            getPackedSampler2D(t2, e2, n2) {
              const a2 = n2.unpackedShape, s2 = [n2.width, n2.height], u2 = (0, o.getGlsl)(this.context.glContext.version), c = s2[0], l = s2[1];
              if (null != s2 && r.ArrayUtil.arraysEqual(a2, s2)) {
                const n3 = `vec4 ${t2}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${l}.0, ${c}.0);
        return ${u2.texture2D}(${e2}, uv);
      }`;
                return new i.GlslLibRoutine(n3);
              }
              const p = s2, f = Math.ceil(a2[1] / 2), d = `vec4 ${t2}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p[1]}, ${p[0]}, ${f}, row, col);
      return ${u2.texture2D}(${e2}, uv);
    }`;
              return new i.GlslLibRoutine(d, ["coordinates.packedUVfrom2D"]);
            }
            getPackedSampler3D(t2, e2, n2) {
              const r2 = n2.unpackedShape, a2 = [n2.width, n2.height], u2 = [a2[0], a2[1]], c = (0, o.getGlsl)(this.context.glContext.version);
              if (1 === r2[0]) {
                const o2 = r2.slice(1), a3 = [1, 2], u3 = (0, s.squeezeInputShape)(r2, o2), c2 = ["b", "row", "col"], l2 = JSON.parse(JSON.stringify(n2));
                l2.unpackedShape = u3;
                const p2 = this.getPackedSamplerFromInput(t2, e2, l2), f2 = `${p2.routineBody}
      vec4 ${t2}(int b, int row, int col) {
        return ${t2}(${(0, s.getSqueezedParams)(c2, a3)});
      } `;
                return new i.GlslLibRoutine(f2, p2.dependencies);
              }
              const l = u2[0], p = u2[1], f = Math.ceil(r2[2] / 2), d = `vec4 ${t2}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${p}, ${l}, ${f * Math.ceil(r2[1] / 2)}, ${f}, b, row, col);
      return ${c.texture2D}(${e2}, uv);}`;
              return new i.GlslLibRoutine(d, ["coordinates.packedUVfrom3D"]);
            }
            getPackedSamplerND(t2, e2, n2) {
              const r2 = n2.unpackedShape, a2 = r2.length, s2 = [n2.width, n2.height], u2 = (0, o.getGlsl)(this.context.glContext.version), c = [s2[0], s2[1]], l = c[1], p = c[0], f = Math.ceil(r2[a2 - 1] / 2);
              let d = f * Math.ceil(r2[a2 - 2] / 2), h = "int b, int row, int col", g = `b * ${d} + (row / 2) * ${f} + (col / 2)`;
              for (let t3 = 2; t3 < a2 - 1; t3++)
                h = `int b${t3}, ` + h, d *= r2[a2 - t3 - 1], g = `b${t3} * ${d} + ` + g;
              const b = `vec4 ${t2}(${h}) {
      int index = ${g};
      int texR = index / ${p};
      int texC = index - texR * ${p};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${p}, ${l});
      return ${u2.texture2D}(${e2}, uv);
    }`;
              return new i.GlslLibRoutine(b);
            }
            getUnpackedSamplerScalar(t2, e2, n2) {
              const [r2, o2] = [n2.width, n2.height];
              if (1 === r2 && 1 === o2) {
                const n3 = `
          float ${t2}() {
            return sampleTexture(${e2}, halfCR);
          }
        `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture"]);
              }
              const a2 = `
        float ${t2}() {
          int offset_${e2} = coordsToOffset(TexCoords, ${r2}, ${o2});
          vec2 uv = uvFromFlat(${r2}, ${o2}, offset_${e2});
          return sampleTexture(${e2}, uv);
        }
      `;
              return new i.GlslLibRoutine(a2, ["coordinates.uvFromFlat", "coordinates.sampleTexture", "coordinates.coordsToOffset"]);
            }
            getUnpackedSampler1D(t2, e2, n2) {
              const r2 = n2.width, o2 = n2.height;
              if (1 === o2 && 1 === r2) {
                const n3 = `
        float ${t2}(int index) {
          return sampleTexture(${e2}, halfCR);
        }
      `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture"]);
              }
              if (1 === o2) {
                const n3 = `
          float ${t2}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${r2}.0, 0.5);
            return sampleTexture(${e2}, uv);
          }
        `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture"]);
              }
              if (1 === r2) {
                const n3 = `
          float ${t2}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${o2}.0);
            return sampleTexture(${e2}, uv);
          }
        `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture"]);
              }
              const a2 = `
        float ${t2}(int index) {
          vec2 uv = uvFromFlat(${r2}, ${o2}, index);
          return sampleTexture(${e2}, uv);
        }
      `;
              return new i.GlslLibRoutine(a2, ["coordinates.uvFromFlat", "coordinates.sampleTexture"]);
            }
            getUnpackedSampler2D(t2, e2, n2) {
              const o2 = n2.unpackedShape, u2 = [n2.height, n2.width];
              if (null != u2 && r.ArrayUtil.arraysEqual(o2, u2)) {
                const n3 = `
          float ${t2}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${u2[1]}.0, ${u2[0]}.0);
            return sampleTexture(${e2}, uv);
          }
        `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture"]);
              }
              const { newShape: c, keptDims: l } = (0, a.squeezeShape)(o2), p = c;
              if (p.length < o2.length) {
                const r2 = (0, s.squeezeInputShape)(o2, p), a2 = JSON.parse(JSON.stringify(n2));
                a2.unpackedShape = r2;
                const u3 = ["col", "row"], c2 = `
          ${this.getUnpackedSamplerFromInput(t2, e2, a2).routineBody}
          float ${t2}(int row, int col) {
            return ${t2}(${(0, s.getSqueezedParams)(u3, l)});
          }
        `;
                return new i.GlslLibRoutine(c2, ["coordinates.sampleTexture"]);
              }
              const f = u2[1], d = u2[0];
              if (1 === d) {
                const n3 = `
          float ${t2}(int row, int col) {
            int offset_${e2} = coordsToOffset(TexCoords, ${f}, ${d});
            float index = dot(vec3(row, col, offset_${e2}), vec3(${o2[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${f}.0);
            return sampleTexture(${e2}, uv);
          }
        `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture", "coordinates.coordsToOffset"]);
              }
              if (1 === f) {
                const n3 = `
          float ${t2}(int row, int col) {
            int offset_${e2} = coordsToOffset(TexCoords, ${f}, ${d});
            float index = dot(vec3(row, col, offset_${e2}), vec3(${o2[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${d}.0, 0.5);
            return sampleTexture(${e2}, uv);
          }
        `;
                return new i.GlslLibRoutine(n3, ["coordinates.sampleTexture", "coordinates.coordsToOffset"]);
              }
              const h = `
        float ${t2}(int row, int col) {
          int index = col * ${o2[1]} + row;
          vec2 uv = uvFromFlat(${f}, ${d}, index);
          return sampleTexture(${e2}, uv);
        }
      `;
              return new i.GlslLibRoutine(h, ["coordinates.uvFromFlat", "coordinates.sampleTexture", "coordinates.coordsToOffset"]);
            }
            getUnpackedSampler3D(t2, e2, n2) {
              const r2 = n2.unpackedShape, o2 = r2[1] * r2[2], u2 = r2[2], { newShape: c, keptDims: l } = (0, a.squeezeShape)(r2), p = c;
              if (p.length < r2.length) {
                const o3 = (0, s.squeezeInputShape)(r2, p), a2 = ["batch", "col", "row"], u3 = JSON.parse(JSON.stringify(n2));
                u3.unpackedShape = o3;
                const c2 = this.getUnpackedSamplerFromInput(t2, e2, u3), f2 = l.reverse(), d = `
          ${c2.routineBody}
          float ${t2}(int batch, int row, int col) {
            return ${t2}(${(0, s.getSqueezedParams)(a2, f2)});
          }
        `;
                return new i.GlslLibRoutine(d, c2.dependencies);
              }
              const f = `
          float ${t2}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${o2} + col * ${u2} + row;
            vec2 uv = uvFromFlat(${n2.width}, ${n2.height}, index);
            return sampleTexture(${e2}, uv);
          }
      `;
              return new i.GlslLibRoutine(f, ["coordinates.uvFromFlat", "coordinates.sampleTexture", "coordinates.coordsToOffset"]);
            }
            getUnpackedSampler4D(t2, e2, n2) {
              const r2 = n2.unpackedShape, o2 = r2[3], a2 = r2[2] * o2, s2 = `
        float ${t2}(int row, int col, int depth, int depth2) {
          int index = row * ${r2[1] * a2} + col * ${a2} +
              depth2 * ${o2} + depth;
          vec2 uv = uvFromFlat(${n2.width}, ${n2.height}, index);
          return sampleTexture(${e2}, uv);
        }
      `;
              return new i.GlslLibRoutine(s2, ["coordinates.uvFromFlat", "coordinates.sampleTexture"]);
            }
            getUnpackedSampler5D(t2, e2, n2) {
              const r2 = n2.unpackedShape, o2 = r2[4], u2 = r2[3] * o2, c = r2[2] * u2, l = r2[1] * c, { newShape: p, keptDims: f } = (0, a.squeezeShape)(r2);
              if (p.length < r2.length) {
                const o3 = (0, s.squeezeInputShape)(r2, p), a2 = ["row", "col", "depth", "depth2", "depth3"], u3 = JSON.parse(JSON.stringify(n2));
                u3.unpackedShape = o3;
                const c2 = `
          ${this.getUnpackedSamplerFromInput(t2, e2, u3).routineBody}
          float ${t2}(int row, int col, int depth, int depth2, int depth3) {
            return ${t2}(${(0, s.getSqueezedParams)(a2, f)});
          }
        `;
                return new i.GlslLibRoutine(c2, ["coordinates.sampleTexture", "coordinates.uvFromFlat"]);
              }
              const d = `
        float ${t2}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${l} + col * ${c} + depth * ${u2} +
          depth3 * ${o2} + depth2;
          vec2 uv = uvFromFlat(${n2.width}, ${n2.height}, index);
          return sampleTexture(${e2}, uv);
        }
      `;
              return new i.GlslLibRoutine(d, ["coordinates.sampleTexture", "coordinates.uvFromFlat"]);
            }
            getUnpackedSampler6D(t2, e2, n2) {
              const r2 = n2.unpackedShape, o2 = r2[5], u2 = r2[4] * o2, c = r2[3] * u2, l = r2[2] * c, p = r2[1] * l, { newShape: f, keptDims: d } = (0, a.squeezeShape)(r2);
              if (f.length < r2.length) {
                const o3 = (0, s.squeezeInputShape)(r2, f), a2 = ["row", "col", "depth", "depth2", "depth3", "depth4"], u3 = JSON.parse(JSON.stringify(n2));
                u3.unpackedShape = o3;
                const c2 = `
            ${this.getUnpackedSamplerFromInput(t2, e2, u3).routineBody}
            float ${t2}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${t2}(${(0, s.getSqueezedParams)(a2, d)});
            }
          `;
                return new i.GlslLibRoutine(c2, ["coordinates.sampleTexture", "coordinates.uvFromFlat"]);
              }
              const h = `
          float ${t2}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${p} + col * ${l} + depth * ${c} +
            depth2 * ${u2} + depth3 * ${o2} + depth4;
            vec2 uv = uvFromFlat(${n2.width}, ${n2.height}, index);
            return sampleTexture(${e2}, uv);
          }
        `;
              return new i.GlslLibRoutine(h, ["coordinates.uvFromFlat", "coordinates.sampleTexture", "coordinates.coordsToOffset"]);
            }
            toVec() {
              const t2 = this.context.outputTextureLayout, e2 = t2.shape.length, n2 = t2.strides, r2 = t2.width, o2 = t2.height, a2 = [];
              for (let t3 = 0; t3 < e2 - 1; ++t3)
                a2.push(`
        c[${t3}] = offset / ${n2[t3]};`), a2.push(`
        offset -= c[${t3}] * ${n2[t3]};`);
              a2.push(`
        c[${e2 - 1}] = offset;`);
              const s2 = `
      void toVec(vec2 texCoords, out int c[${e2}]) {
        int offset = coordsToOffset(texCoords, ${r2}, ${o2});
        ${a2.join("")}
      }
      void toVec(int offset, out int c[${e2}]) {
        ${a2.join("")}
      }
    `;
              return { toVec: new i.GlslLibRoutine(s2, ["coordinates.coordsToOffset"]) };
            }
            valueFrom() {
              const t2 = {};
              return this.context.programInfo.inputNames.forEach((e2, n2) => {
                const r2 = this.context.inputTextureLayouts[n2], o2 = (r2.unpackedShape.length > 0 ? r2.unpackedShape : r2.shape).length;
                let a2 = `_${e2}`;
                t2[a2] = new i.GlslLibRoutine(this.getValueFromSingle(e2, o2, r2.width, r2.height, false), [`shapeUtils.indicesToOffset${a2}`, "coordinates.offsetToCoords", "fragcolor.getColorAsFloat"]), a2 += "_T", t2[a2] = new i.GlslLibRoutine(this.getValueFromSingle(e2, o2, r2.width, r2.height, true), [`shapeUtils.indicesToOffset${a2}`, "coordinates.offsetToCoords", "fragcolor.getColorAsFloat"]);
              }), t2;
            }
            getValueFromSingle(t2, e2, n2, r2, i2) {
              let a2 = `_${t2}`;
              return i2 && (a2 += "_T"), `
        float ${a2}(int m[${e2}]) {
          int offset = indicesToOffset${a2}(m);
          vec2 coords = offsetToCoords(offset, ${n2}, ${r2});
          float value = getColorAsFloat(${(0, o.getGlsl)(this.context.glContext.version).texture2D}(${t2}, coords));
          return value;
        }
        `;
            }
            getPackedValueFrom(t2, e2, n2, r2, i2) {
              let a2 = `_${t2}_Pack`;
              return i2 && (a2 += "_T"), `
        vec4 ${a2}(int m[${e2}]) {
          int offset = indicesToOffset_${t2}(m);
          vec2 coords = offsetToCoords(offset, ${n2}, ${r2});
          return ${(0, o.getGlsl)(this.context.glContext.version).texture2D}(${t2}, coords);
        }
        `;
            }
          }
          e.CoordsGlslLib = u;
        }, 8520: (t, e) => {
          "use strict";
          var n;
          Object.defineProperty(e, "__esModule", { value: true }), e.TopologicalSortGlslRoutines = e.GlslLibRoutineNode = e.GlslLibRoutine = e.GlslLib = e.GlslContext = e.FunctionType = void 0, (n = e.FunctionType || (e.FunctionType = {}))[n.ValueBased = 0] = "ValueBased", n[n.Positional = 1] = "Positional", e.GlslContext = class {
            constructor(t2, e2, n2, r) {
              this.glContext = t2, this.programInfo = e2, this.inputTextureLayouts = n2, this.outputTextureLayout = r;
            }
          }, e.GlslLib = class {
            constructor(t2) {
              this.context = t2;
            }
          }, e.GlslLibRoutine = class {
            constructor(t2, e2) {
              this.routineBody = t2, this.dependencies = e2;
            }
          }, e.GlslLibRoutineNode = class {
            constructor(t2, e2, n2) {
              this.name = t2, this.dependencies = n2 || [], e2 && (this.routineBody = e2);
            }
            addDependency(t2) {
              t2 && this.dependencies.push(t2);
            }
          }, e.TopologicalSortGlslRoutines = class {
            static returnOrderedNodes(t2) {
              if (!t2 || 0 === t2.length)
                return [];
              if (1 === t2.length)
                return t2;
              const e2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r = new Array();
              return this.createOrderedNodes(t2, e2, n2, r), r;
            }
            static createOrderedNodes(t2, e2, n2, r) {
              for (let i = 0; i < t2.length; ++i)
                this.dfsTraverse(t2[i], e2, n2, r);
            }
            static dfsTraverse(t2, e2, n2, r) {
              if (!t2 || n2.has(t2.name))
                return;
              if (e2.has(t2.name))
                throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");
              e2.add(t2.name);
              const i = t2.dependencies;
              if (i && i.length > 0)
                for (let t3 = 0; t3 < i.length; ++t3)
                  this.dfsTraverse(i[t3], e2, n2, r);
              r.push(t2), n2.add(t2.name), e2.delete(t2.name);
            }
          };
        }, 7341: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.EncodingGlslLib = void 0;
          const r = n(8520);
          class i extends r.GlslLib {
            constructor(t2) {
              super(t2);
            }
            getFunctions() {
              return Object.assign(Object.assign({}, this.encodeFloat32()), this.decodeFloat32());
            }
            getCustomTypes() {
              return {};
            }
            encodeFloat32() {
              return { encode: new r.GlslLibRoutine("highp vec4 encode(highp float f) {\n        return vec4(f, 0.0, 0.0, 0.0);\n      }\n        ") };
            }
            decodeFloat32() {
              return { decode: new r.GlslLibRoutine("highp float decode(highp vec4 rgba) {\n        return rgba.r;\n      }\n        ") };
            }
            encodeUint8() {
              const t2 = i.isLittleEndian() ? "rgba.rgba=rgba.abgr;" : "";
              return { encode: new r.GlslLibRoutine(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${t2}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `) };
            }
            decodeUint8() {
              const t2 = i.isLittleEndian() ? "rgba.rgba=rgba.abgr;" : "";
              return { decode: new r.GlslLibRoutine(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t2}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `) };
            }
            static isLittleEndian() {
              const t2 = new ArrayBuffer(4), e2 = new Uint32Array(t2), n2 = new Uint8Array(t2);
              if (e2[0] = 3735928559, 239 === n2[0])
                return true;
              if (222 === n2[0])
                return false;
              throw new Error("unknown endianness");
            }
          }
          e.EncodingGlslLib = i;
        }, 9894: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.FragColorGlslLib = void 0;
          const r = n(8520), i = n(5060);
          class o extends r.GlslLib {
            constructor(t2) {
              super(t2);
            }
            getFunctions() {
              return Object.assign(Object.assign({}, this.setFragColor()), this.getColorAsFloat());
            }
            getCustomTypes() {
              return {};
            }
            setFragColor() {
              const t2 = (0, i.getGlsl)(this.context.glContext.version);
              return { setFragColor: new r.GlslLibRoutine(`
        void setFragColor(float value) {
            ${t2.output} = encode(value);
        }
        `, ["encoding.encode"]) };
            }
            getColorAsFloat() {
              return { getColorAsFloat: new r.GlslLibRoutine("\n        float getColorAsFloat(vec4 color) {\n            return decode(color);\n        }\n        ", ["encoding.decode"]) };
            }
          }
          e.FragColorGlslLib = o;
        }, 2848: (t, e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.replaceInlines = void 0;
          const n = /@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm;
          e.replaceInlines = function(t2) {
            const e2 = {};
            let r;
            for (; null !== (r = n.exec(t2)); ) {
              const t3 = r[3].split(",").map((t4) => {
                const e3 = t4.trim().split(" ");
                return e3 && 2 === e3.length ? { type: e3[0], name: e3[1] } : null;
              }).filter((t4) => null !== t4);
              e2[r[2]] = { params: t3, body: r[4] };
            }
            for (const n2 in e2) {
              const i = "(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;".replace("__FUNC__", n2), o = new RegExp(i, "gm");
              for (; null !== (r = o.exec(t2)); ) {
                const i2 = r[1], o2 = r[2], a = r[3].split(","), s = i2 ? `${i2} ${o2};` : "";
                let u = e2[n2].body, c = "";
                e2[n2].params.forEach((t3, e3) => {
                  t3 && (c += `${t3.type} ${t3.name} = ${a[e3]};
`);
                }), u = `${c}
 ${u}`, u = u.replace("return", `${o2} = `);
                const l = `
      ${s}
      {
        ${u}
      }
      `;
                t2 = t2.replace(r[0], l);
              }
            }
            return t2.replace(n, "");
          };
        }, 8879: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.GlslPreprocessor = void 0;
          const r = n(8520), i = n(2848), o = n(5483), a = n(5060);
          e.GlslPreprocessor = class {
            constructor(t2, e2, n2, i2) {
              this.libs = {}, this.glslLibRoutineDependencyGraph = {}, this.context = new r.GlslContext(t2, e2, n2, i2), Object.keys(o.glslRegistry).forEach((t3) => {
                const e3 = new o.glslRegistry[t3](this.context);
                this.libs[t3] = e3;
              });
              const a2 = this.glslLibRoutineDependencyGraph;
              for (const t3 in this.libs) {
                const e3 = this.libs[t3].getFunctions();
                for (const n3 in e3) {
                  const i3 = t3 + "." + n3;
                  let o2;
                  a2[i3] ? (o2 = a2[i3], o2.routineBody = e3[n3].routineBody) : (o2 = new r.GlslLibRoutineNode(i3, e3[n3].routineBody), a2[i3] = o2);
                  const s = e3[n3].dependencies;
                  if (s)
                    for (let t4 = 0; t4 < s.length; ++t4)
                      if (a2[s[t4]])
                        o2.addDependency(a2[s[t4]]);
                      else {
                        const e4 = new r.GlslLibRoutineNode(s[t4]);
                        a2[s[t4]] = e4, o2.addDependency(e4);
                      }
                }
              }
            }
            preprocess() {
              const t2 = this.context.programInfo;
              let e2 = t2.shaderSource;
              return this.context.programInfo.hasMain || (e2 = `${e2}
      ${(0, a.getDefaultFragShaderMain)(this.context.glContext.version, this.context.outputTextureLayout.shape.length)}`), e2 = (0, i.replaceInlines)(e2), `${(0, a.getFragShaderPreamble)(this.context.glContext.version)}
    ${this.getUniforms(t2.inputNames, t2.variables)}
    ${this.getImports(e2)}
    ${e2}`;
            }
            getImports(t2) {
              const e2 = this.selectGlslLibRoutinesToBeIncluded(t2);
              if (0 === e2.length)
                return "";
              let n2 = "";
              for (let t3 = 0; t3 < e2.length; ++t3) {
                if (!e2[t3].routineBody)
                  throw new Error(`Missing body for the Glsl Library routine: ${e2[t3].name}`);
                n2 += e2[t3].routineBody + "\n";
              }
              return n2;
            }
            selectGlslLibRoutinesToBeIncluded(t2) {
              const e2 = [];
              return Object.keys(this.glslLibRoutineDependencyGraph).forEach((n2) => {
                const r2 = n2.split(".")[1];
                -1 !== t2.indexOf(r2) && e2.push(this.glslLibRoutineDependencyGraph[n2]);
              }), r.TopologicalSortGlslRoutines.returnOrderedNodes(e2);
            }
            getUniforms(t2, e2) {
              const n2 = [];
              if (t2)
                for (const e3 of t2)
                  n2.push(`uniform sampler2D ${e3};`);
              if (e2)
                for (const t3 of e2)
                  n2.push(`uniform ${t3.type} ${t3.name}${t3.arrayLength ? `[${t3.arrayLength}]` : ""};`);
              return n2.join("\n");
            }
          };
        }, 5483: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.glslRegistry = void 0;
          const r = n(5107), i = n(7341), o = n(9894), a = n(2655), s = n(3891);
          e.glslRegistry = { encoding: i.EncodingGlslLib, fragcolor: o.FragColorGlslLib, vec: s.VecGlslLib, shapeUtils: a.ShapeUtilsGlslLib, coordinates: r.CoordsGlslLib };
        }, 2655: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.ShapeUtilsGlslLib = void 0;
          const r = n(8520);
          class i extends r.GlslLib {
            constructor(t2) {
              super(t2);
            }
            getFunctions() {
              return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.bcastIndex()), this.bcastMatmulIndex()), this.offsetToIndices()), this.indicesToOffset()), this.incrementIndices());
            }
            getCustomTypes() {
              return {};
            }
            bcastIndex() {
              const t2 = this.context.outputTextureLayout.shape.length, e2 = {};
              return this.context.programInfo.inputNames.forEach((n2, i2) => {
                const o = this.context.inputTextureLayouts[i2].unpackedShape;
                if (o.length <= t2) {
                  const i3 = o.length, a = t2 - i3, s = `bcastIndices_${n2}`;
                  let u = "";
                  for (let t3 = 0; t3 < i3; ++t3)
                    u += `
          realIndices[${t3}] = int( mod(float(bcastedIndices[${a + t3}]), ${o[t3]}.0) );
          `;
                  const c = `
        void ${s} (int bcastedIndices[${t2}], out int realIndices[${i3}]) {
          ${u}
        }
        `;
                  e2[s] = new r.GlslLibRoutine(c);
                }
              }), e2;
            }
            bcastMatmulIndex() {
              const t2 = this.context.outputTextureLayout.shape.length, e2 = {};
              return this.context.programInfo.inputNames.forEach((n2, i2) => {
                const o = this.context.inputTextureLayouts[i2].shape;
                if (!(o.length < 2 || o.length > t2)) {
                  const i3 = o.length, a = t2 - i3, s = `bcastMatmulIndices_${n2}`;
                  let u = "";
                  for (let t3 = 0; t3 < i3 - 2; ++t3)
                    u += `
          realIndices[${t3}] = int( mod(float(bcastedIndices[${a + t3}]), ${o[t3]}.0) );
          `;
                  const c = `
        void ${s}(int bcastedIndices[${t2}], out int realIndices[${i3}]) {
          ${u}
          realIndices[${i3 - 1}] = bcastedIndices[${t2 - 1}];
          realIndices[${i3 - 2}] = bcastedIndices[${t2 - 2}];
        }
        `;
                  e2[s] = new r.GlslLibRoutine(c);
                }
              }), e2;
            }
            indicesToOffset() {
              const t2 = {};
              return this.context.programInfo.inputNames.forEach((e2, n2) => {
                const o = this.context.inputTextureLayouts[n2].shape, a = this.context.inputTextureLayouts[n2].strides, s = o.length;
                let u = `indicesToOffset_${e2}`;
                t2[u] = new r.GlslLibRoutine(i.indexToOffsetSingle(u, s, a)), u = `indicesToOffset_${e2}_T`, t2[u] = new r.GlslLibRoutine(i.indexToOffsetSingle(u, s, a.slice().reverse()));
              }), t2;
            }
            static indexToOffsetSingle(t2, e2, n2) {
              let r2 = "";
              for (let t3 = e2 - 1; t3 >= 0; --t3)
                r2 += `
        offset += indices[${t3}] * ${n2[t3]};
        `;
              return `
      int ${t2}(int indices[${e2}]) {
        int offset = 0;
        ${r2}
        return offset;
      }
      `;
            }
            offsetToIndices() {
              const t2 = {};
              return this.context.programInfo.inputNames.forEach((e2, n2) => {
                const o = this.context.inputTextureLayouts[n2].shape, a = this.context.inputTextureLayouts[n2].strides, s = o.length;
                let u = `offsetToIndices_${e2}`;
                t2[u] = new r.GlslLibRoutine(i.offsetToIndicesSingle(u, s, a)), u = `offsetToIndices_${e2}_T`, t2[u] = new r.GlslLibRoutine(i.offsetToIndicesSingle(u, s, a.slice().reverse()));
              }), t2;
            }
            static offsetToIndicesSingle(t2, e2, n2) {
              const r2 = [];
              for (let t3 = 0; t3 < e2 - 1; ++t3)
                r2.push(`
      indices[${t3}] = offset / ${n2[t3]};`), r2.push(`
        offset -= indices[${t3}] * ${n2[t3]};`);
              return r2.push(`
      indices[${e2 - 1}] = offset;`), `
      void ${t2}(int offset, out int indices[${e2}]) {
        ${r2.join("")}
      }
      `;
            }
            incrementIndices() {
              const t2 = {};
              return this.context.programInfo.inputNames.forEach((e2, n2) => {
                const i2 = this.context.inputTextureLayouts[n2].shape, o = i2.length, a = `incrementIndices_${e2}`;
                let s = "";
                for (let t3 = 0; t3 < o; ++t3)
                  s += `
        shape[${t3}] = ${i2[t3]};`;
                const u = `
        void ${a}(int axis, out int indices[${o}]) {
          int shape[${o}];
          ${s};
          for(int i = ${o} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;
                t2[a] = new r.GlslLibRoutine(u);
              }), t2;
            }
          }
          e.ShapeUtilsGlslLib = i;
        }, 5060: (t, e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.getDefaultFragShaderMain = e.getFragShaderPreamble = e.getVertexShaderSource = e.getGlsl = void 0;
          const n = { version: "", attribute: "attribute", varyingVertex: "varying", varyingFrag: "varying", texture2D: "texture2D", output: "gl_FragColor", outputDeclaration: "" }, r = { version: "#version 300 es", attribute: "in", varyingVertex: "out", varyingFrag: "in", texture2D: "texture", output: "outputColor", outputDeclaration: "out vec4 outputColor;" };
          function i(t2) {
            return 1 === t2 ? n : r;
          }
          e.getGlsl = i, e.getVertexShaderSource = function(t2) {
            const e2 = i(t2);
            return `${e2.version}
      precision highp float;
      ${e2.attribute} vec3 position;
      ${e2.attribute} vec2 textureCoord;

      ${e2.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`;
          }, e.getFragShaderPreamble = function(t2) {
            const e2 = i(t2);
            return `${e2.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e2.varyingFrag} vec2 TexCoords;
    ${e2.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `;
          }, e.getDefaultFragShaderMain = function(t2, e2) {
            return `
  void main() {
    int indices[${e2}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${i(t2).output} = result;
  }
  `;
          };
        }, 3891: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.VecGlslLib = void 0;
          const r = n(8520);
          class i extends r.GlslLib {
            constructor(t2) {
              super(t2);
            }
            getCustomTypes() {
              return {};
            }
            getFunctions() {
              return Object.assign(Object.assign(Object.assign(Object.assign({}, this.binaryVecFunctions()), this.copyVec()), this.setVecItem()), this.getVecItem());
            }
            binaryVecFunctions() {
              const t2 = this.context.outputTextureLayout.shape.length, e2 = { add: "+=", sub: "-=", mul: "*=", div: "/=" }, n2 = {};
              for (const i2 in e2) {
                const o = `${i2}Vec`;
                let a = "";
                for (let n3 = 0; n3 < t2; ++n3)
                  a += `
          dest[${n3}] ${e2[i2]} src[${n3}];
          `;
                const s = `
        void ${o}(int src[${t2}], out int dest[${t2}]) {
          ${a}
        }
        `;
                n2[o] = new r.GlslLibRoutine(s);
              }
              return n2;
            }
            copyVec() {
              const t2 = this.context.outputTextureLayout.shape.length;
              let e2 = "";
              for (let n3 = 0; n3 < t2; ++n3)
                e2 += `
        dest[${n3}] = src[${n3}];
        `;
              const n2 = `
      void copyVec(int src[${t2}], out int dest[${t2}]) {
        ${e2}
      }
      `;
              return { copyVec: new r.GlslLibRoutine(n2) };
            }
            setVecItem() {
              const t2 = this.context.outputTextureLayout.shape.length;
              let e2 = `
        if(index < 0)
            index =${t2} + index;
        if (index == 0)
            m[0] = value;
        `;
              for (let n3 = 1; n3 < t2 - 1; ++n3)
                e2 += `
        else if (index == ${n3})
            m[${n3}] = value;
            `;
              e2 += `
        else
            m[${t2 - 1}] = value;
        `;
              const n2 = `
      void setVecItem(out int m[${t2}], int index, int value) {
        ${e2}
      }
        `;
              return { setVecItem: new r.GlslLibRoutine(n2) };
            }
            getVecItem() {
              const t2 = this.context.outputTextureLayout.shape.length;
              let e2 = `
        if(index < 0)
            index = ${t2} + index;
        if (index == 0)
            return m[0];
      `;
              for (let n3 = 1; n3 < t2 - 1; ++n3)
                e2 += `
        else if (index == ${n3})
            return m[${n3}];
      `;
              e2 += `
        else
            return m[${t2 - 1}];
        `;
              const n2 = `
      int getVecItem(int m[${t2}], int index) {
        ${e2}
      }
    `;
              return { getVecItem: new r.GlslLibRoutine(n2) };
            }
          }
          e.VecGlslLib = i;
        }, 8316: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.WebGLInferenceHandler = void 0;
          const r = n(6231), i = n(9162), o = n(2517), a = n(2403), s = n(7019), u = n(8710), c = n(5611), l = n(4057), p = n(2039);
          e.WebGLInferenceHandler = class {
            constructor(t2) {
              this.session = t2, this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache = /* @__PURE__ */ new Map();
            }
            calculateTextureWidthAndHeight(t2, e2) {
              return (0, l.calculateTextureWidthAndHeight)(this.session.layoutStrategy, t2, e2);
            }
            executeProgram(t2, e2) {
              if (e2.length < t2.inputNames.length)
                throw new Error(`Input size mustn't be less than ${t2.inputNames.length}.`);
              if (t2.inputNames.length !== t2.inputTypes.length)
                throw new Error("input names size does not match input types");
              const n2 = [];
              for (let r3 = 0; r3 < t2.inputNames.length; ++r3)
                n2[r3] = this.getOrCreateTextureData(e2[r3], t2.inputTypes[r3]);
              const r2 = ((t3, e3) => {
                const n3 = e3.map((t4) => `${t4.unpackedShape.join(",")};${t4.width}x${t4.height}`).join("_");
                let r3 = t3.name;
                return t3.cacheHint && (r3 += "[" + t3.cacheHint + "]"), r3 += ":" + n3, r3;
              })(t2, n2);
              let i2 = this.session.programManager.getArtifact(r2);
              const o2 = i2 ? i2.programInfo : "function" == typeof t2.get ? t2.get() : t2, a2 = (0, l.createTextureLayoutFromTextureType)(this.session.layoutStrategy, o2.output.dims, o2.output.textureType), s2 = this.createTextureData(a2, o2.output.type);
              return i2 || (i2 = this.session.programManager.build(o2, n2, s2), this.session.programManager.setArtifact(r2, i2)), this.runProgram(i2, n2, s2), s2;
            }
            run(t2, e2) {
              return this.executeProgram(t2, e2).tensor;
            }
            runProgram(t2, e2, n2) {
              for (let n3 = 0; n3 < e2.length; ++n3)
                if (!!e2[n3].isPacked != (t2.programInfo.inputTypes[n3] === p.TextureType.packed))
                  throw new Error(`input[${n3}] property packed inconsistent`);
              if (!!n2.isPacked != (t2.programInfo.output.textureType === p.TextureType.packed))
                throw new Error("output property packed inconsistent");
              this.session.programManager.run(t2, e2, n2);
            }
            getOrCreateTextureData(t2, e2) {
              let n2 = this.getTextureData(t2.dataId, e2 === p.TextureType.packed);
              if (!n2 && (n2 = this.getTextureData(t2.dataId, e2 !== p.TextureType.packed), n2))
                return e2 === p.TextureType.packed ? this.pack(n2) : this.unpack(n2);
              if (!n2) {
                const r2 = (0, l.createTextureLayoutFromTextureType)(this.session.layoutStrategy, t2.dims, e2);
                if (e2 === p.TextureType.packedLastDimension) {
                  const n3 = 1, r3 = 4, i2 = t2.dims;
                  if (4 === i2.length) {
                    const o2 = [i2[0], Math.ceil(i2[1] * i2[2] * i2[3] / r3)], a2 = (0, l.createTextureLayoutFromTextureType)(this.session.layoutStrategy, o2, e2);
                    let s2 = t2.numberData;
                    if (i2[1] * i2[2] * i2[3] % r3 != 0) {
                      const e3 = i2[0], o3 = i2[1] * i2[2] * i2[3], a3 = Math.ceil(o3 * n3 / r3) * r3;
                      s2 = new Float32Array(e3 * a3);
                      for (let r4 = 0; r4 < e3; ++r4) {
                        const e4 = r4 * o3, i3 = r4 * a3 + r4 % n3 * o3;
                        s2.set(t2.numberData.subarray(e4, e4 + o3), i3);
                      }
                    }
                    return this.createTextureData(a2, t2.type, s2, t2, 1);
                  }
                }
                if (e2 === p.TextureType.packed) {
                  const e3 = (0, l.createTextureLayoutFromShape)(this.session.layoutStrategy, t2.dims, 1, [], { reverseWH: true }), r3 = this.createTextureData(e3, t2.type, t2.numberData, t2, 1);
                  n2 = this.pack(r3);
                } else
                  n2 = this.createTextureData(r2, t2.type, t2.numberData, t2, 1);
              }
              return n2;
            }
            createTextureDataFromLayoutBindTensor(t2, e2, n2, r2) {
              return this.createTextureData(t2, e2, n2, r2, 1);
            }
            createTextureData(t2, e2, n2, i2, o2) {
              r.Logger.verbose("InferenceHandler", `Creating TextureData: layout:[${JSON.stringify(t2)}]`);
              const a2 = this.session.textureManager.createTextureFromLayout(e2, t2, n2, o2);
              return this.createTextureDataFromTexture(t2, e2, a2, i2);
            }
            reshapeUnpacked(t2, e2) {
              const n2 = this.getOrCreateTextureData(t2, p.TextureType.unpacked), r2 = { channels: n2.channels, height: n2.height, width: n2.width, shape: 0 !== e2.length ? e2 : [1], strides: o.ShapeUtil.computeStrides(e2), unpackedShape: e2 };
              return this.createTextureDataFromTexture(r2, t2.type, n2.texture).tensor;
            }
            reshapePacked(t2, e2) {
              const n2 = this.getOrCreateTextureData(t2, p.TextureType.packed);
              if ((0, s.isReshapeCheap)(t2.dims, e2)) {
                const r3 = { channels: n2.channels, height: n2.height, width: n2.width, shape: 0 !== e2.length ? e2 : [1], strides: o.ShapeUtil.computeStrides(e2), unpackedShape: e2, isPacked: true };
                return this.createTextureDataFromTexture(r3, t2.type, n2.texture).tensor;
              }
              const r2 = (0, s.processDims3D)(t2.dims), i2 = (0, s.processDims3D)(e2), a2 = this.reshapePacked(t2, r2), u2 = this.run((0, s.createPackedReshape3DProgramInfoLoader)(this, a2, i2), [a2]);
              return this.reshapePacked(u2, e2);
            }
            cast(t2, e2) {
              const n2 = this.getOrCreateTextureData(t2, p.TextureType.unpacked);
              return this.createTextureDataFromTexture(n2, e2, n2.texture).tensor;
            }
            createTextureDataFromTexture(t2, e2, n2, r2, o2) {
              const a2 = Object.assign(Object.assign({}, t2), { tensor: r2 || new i.Tensor(t2.unpackedShape, e2, (t3) => this.readTexture(a2), async (t3) => this.readTextureAsync(a2), void 0, o2), texture: n2 });
              return this.setTextureData(a2.tensor.dataId, a2, t2.isPacked), a2;
            }
            getTextureData(t2, e2 = false) {
              return this.session.isInitializer(t2) ? this.session.getTextureData(t2, e2) : e2 ? this.packedTextureDataCache.get(t2) : this.unpackedTextureDataCache.get(t2);
            }
            setTextureData(t2, e2, n2 = false) {
              this.session.isInitializer(t2) ? this.session.setTextureData(t2, e2, n2) : (n2 ? this.packedTextureDataCache : this.unpackedTextureDataCache).set(t2, e2);
            }
            isTextureLayoutCached(t2, e2 = false) {
              return !!this.getTextureData(t2.dataId, e2);
            }
            dispose() {
              this.session.textureManager.clearActiveTextures(), this.packedTextureDataCache.forEach((t2) => this.session.textureManager.releaseTexture(t2)), this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache.forEach((t2) => this.session.textureManager.releaseTexture(t2)), this.unpackedTextureDataCache = /* @__PURE__ */ new Map();
            }
            readTexture(t2) {
              return t2.isPacked ? this.readTexture(this.unpack(t2)) : this.session.backend.glContext.isFloat32DownloadSupported ? this.session.textureManager.readTexture(t2, t2.tensor.type, t2.channels) : this.session.textureManager.readUint8TextureAsFloat((0, u.encodeAsUint8)(this, t2));
            }
            async readTextureAsync(t2) {
              return t2.isPacked ? this.readTextureAsync(this.unpack(t2)) : this.session.backend.glContext.isFloat32DownloadSupported ? this.session.textureManager.readTextureAsync(t2, t2.tensor.type, t2.channels) : this.session.textureManager.readUint8TextureAsFloat((0, u.encodeAsUint8)(this, t2));
            }
            pack(t2) {
              return this.executeProgram((0, a.createPackProgramInfoLoader)(this, t2.tensor), [t2.tensor]);
            }
            unpack(t2) {
              return this.executeProgram((0, c.createUnpackProgramInfoLoader)(this, t2.tensor), [t2.tensor]);
            }
          };
        }, 1640: function(t, e, n) {
          "use strict";
          var r = this && this.__createBinding || (Object.create ? function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2);
            var i2 = Object.getOwnPropertyDescriptor(e2, n2);
            i2 && !("get" in i2 ? !e2.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
              return e2[n2];
            } }), Object.defineProperty(t2, r2, i2);
          } : function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2), t2[r2] = e2[n2];
          }), i = this && this.__setModuleDefault || (Object.create ? function(t2, e2) {
            Object.defineProperty(t2, "default", { enumerable: true, value: e2 });
          } : function(t2, e2) {
            t2.default = e2;
          }), o = this && this.__importStar || function(t2) {
            if (t2 && t2.__esModule)
              return t2;
            var e2 = {};
            if (null != t2)
              for (var n2 in t2)
                "default" !== n2 && Object.prototype.hasOwnProperty.call(t2, n2) && r(e2, t2, n2);
            return i(e2, t2), e2;
          };
          Object.defineProperty(e, "__esModule", { value: true }), e.WEBGL_OP_RESOLVE_RULES = void 0;
          const a = n(2898), s = o(n(7839)), u = n(4196), c = n(2069), l = n(8138), p = n(9663), f = n(5193), d = n(7992), h = n(1253), g = n(4776), b = n(6572), m = n(3346), y = n(5623), _ = n(2870), v = n(2143), w = n(4939), x = n(718), T = n(2268), S = n(8117), O = n(2278), A = n(5524), E = n(5975), I = n(3933), P = n(6558), D = n(5723), $ = n(3738), k = o(n(4909)), C = n(8428), F = n(9793);
          e.WEBGL_OP_RESOLVE_RULES = [["Abs", "", "6+", k.abs], ["Acos", "", "7+", k.acos], ["Add", "", "7+", s.add], ["And", "", "7+", s.and], ["Asin", "", "7+", k.asin], ["Atan", "", "7+", k.atan], ["AveragePool", "", "7+", v.averagePool, v.parseAveragePoolAttributes], ["BatchNormalization", "", "7+", a.batchNormalization, a.parseBatchNormalizationAttributes], ["Cast", "", "6+", u.cast, u.parseCastAttributes], ["Ceil", "", "6+", k.ceil], ["Clip", "", "6-10", k.clip, k.parseClipAttributes], ["Clip", "", "11+", k.clipV11], ["Concat", "", "4+", c.concat, c.parseConcatAttributes], ["Conv", "", "1+", l.conv, l.parseConvAttributes], ["ConvTranspose", "", "1+", p.convTranspose, p.parseConvTransposeAttributes], ["Cos", "", "7+", k.cos], ["Div", "", "7+", s.div], ["Dropout", "", "7+", k.identity], ["DepthToSpace", "", "1+", f.depthToSpace, f.parseDepthToSpaceAttributes], ["Equal", "", "7+", s.equal], ["Elu", "", "6+", k.elu, k.parseEluAttributes], ["Exp", "", "6+", k.exp], ["Flatten", "", "1+", d.flatten, d.parseFlattenAttributes], ["Floor", "", "6+", k.floor], ["FusedConv", "com.microsoft", "1+", l.conv, l.parseConvAttributes], ["Gather", "", "1+", h.gather, h.parseGatherAttributes], ["Gemm", "", "7-10", g.gemm, g.parseGemmAttributesV7], ["Gemm", "", "11+", g.gemm, g.parseGemmAttributesV11], ["GlobalAveragePool", "", "1+", v.globalAveragePool, v.parseGlobalAveragePoolAttributes], ["GlobalMaxPool", "", "1+", v.globalMaxPool], ["Greater", "", "7+", s.greater], ["Identity", "", "1+", k.identity], ["ImageScaler", "", "1+", b.imageScaler, b.parseImageScalerAttributes], ["InstanceNormalization", "", "6+", m.instanceNormalization, m.parseInstanceNormalizationAttributes], ["LeakyRelu", "", "6+", k.leakyRelu, k.parseLeakyReluAttributes], ["Less", "", "7+", s.less], ["Log", "", "6+", k.log], ["MatMul", "", "1+", y.matMul, y.parseMatMulAttributes], ["MaxPool", "", "1+", v.maxPool, v.parseMaxPoolAttributes], ["Mul", "", "7+", s.mul], ["Neg", "", "6+", k.neg], ["Not", "", "1+", k.not], ["Or", "", "7+", s.or], ["Pad", "", "2-10", _.padV2, _.parsePadAttributesV2], ["Pad", "", "11+", _.padV11, _.parsePadAttributesV11], ["Pow", "", "7+", s.pow], ["PRelu", "", "7+", s.pRelu], ["ReduceLogSum", "", "1+", w.reduceLogSum, w.parseReduceAttributes], ["ReduceMax", "", "1+", w.reduceMax, w.parseReduceAttributes], ["ReduceMean", "", "1+", w.reduceMean, w.parseReduceAttributes], ["ReduceMin", "", "1+", w.reduceMin, w.parseReduceAttributes], ["ReduceProd", "", "1+", w.reduceProd, w.parseReduceAttributes], ["ReduceSum", "", "1-12", w.reduceSum, w.parseReduceAttributes], ["ReduceSumSquare", "", "1+", w.reduceLogSumSquare, w.parseReduceAttributes], ["Relu", "", "6+", k.relu], ["Reshape", "", "5+", x.reshape], ["Resize", "", "10", T.resize, T.parseResizeAttributesV10], ["Resize", "", "11+", T.resize, T.parseResizeAttributesV11], ["Shape", "", "1+", S.shape], ["Sigmoid", "", "6+", k.sigmoid], ["Sin", "", "7+", k.sin], ["Slice", "", "10+", O.sliceV10], ["Slice", "", "1-9", O.slice, O.parseSliceAttributes], ["Softmax", "", "1-12", A.softmax, A.parseSoftmaxAttributes], ["Softmax", "", "13+", A.softmaxV13, A.parseSoftmaxAttributesV13], ["Split", "", "2-12", E.split, E.parseSplitAttributes], ["Sqrt", "", "6+", k.sqrt], ["Squeeze", "", "1-12", I.squeeze, I.parseSqueezeAttributes], ["Squeeze", "", "13+", I.squeezeV13], ["Sub", "", "7+", s.sub], ["Sum", "", "6+", P.sum], ["Tan", "", "7+", k.tan], ["Tanh", "", "6+", k.tanh], ["Tile", "", "6+", D.tile], ["Transpose", "", "1+", $.transpose, $.parseTransposeAttributes], ["Upsample", "", "7-8", F.upsample, F.parseUpsampleAttributesV7], ["Upsample", "", "9", F.upsample, F.parseUpsampleAttributesV9], ["Unsqueeze", "", "1-12", C.unsqueeze, C.parseUnsqueezeAttributes], ["Unsqueeze", "", "13+", C.unsqueezeV13], ["Xor", "", "7+", s.xor]];
        }, 2898: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseBatchNormalizationAttributes = e.batchNormalization = void 0;
          const r = n(246), i = n(5060), o = n(2039), a = { name: "BatchNormalization", inputNames: ["A", "Scale", "B", "Mean", "Variance"], inputTypes: [o.TextureType.unpacked, o.TextureType.unpacked, o.TextureType.unpacked, o.TextureType.unpacked, o.TextureType.unpacked] };
          e.batchNormalization = (t2, e2, n2) => (u(e2), [t2.run(Object.assign(Object.assign({}, a), { cacheHint: n2.cacheKey, get: () => s(t2, e2, n2) }), e2)]), e.parseBatchNormalizationAttributes = (t2) => {
            const e2 = t2.attributes.getFloat("epsilon", 1e-5), n2 = t2.attributes.getFloat("momentum", 0.9), i2 = t2.attributes.getInt("spatial", 1);
            return (0, r.createAttributeWithCacheKey)({ epsilon: e2, momentum: n2, spatial: i2 });
          };
          const s = (t2, e2, n2) => {
            const r2 = (0, i.getGlsl)(t2.session.backend.glContext.version), s2 = e2[0].dims.length, [u2, c] = t2.calculateTextureWidthAndHeight(e2[1].dims, o.TextureType.unpacked), l = `
  float process(int[${s2}] indices) {
    vec2 position = offsetToCoords(indices[1], ${u2}, ${c});
    float scale = getColorAsFloat(${r2.texture2D}(Scale, position));
    float mean = getColorAsFloat(${r2.texture2D}(Mean, position));
    float variance = getColorAsFloat(${r2.texture2D}(Variance, position));
    float b = getColorAsFloat(${r2.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${n2.epsilon})) ) + b;
  }`;
            return Object.assign(Object.assign({}, a), { output: { dims: e2[0].dims, type: e2[0].type, textureType: o.TextureType.unpacked }, shaderSource: l });
          }, u = (t2) => {
            if (!t2 || 5 !== t2.length)
              throw new Error("BatchNormalization requires 5 inputs.");
            const e2 = t2[0], n2 = t2[1], r2 = t2[2], i2 = t2[3], o2 = t2[4];
            if (e2.dims.length < 3 || 1 !== n2.dims.length || 1 !== r2.dims.length || 1 !== i2.dims.length || 1 !== o2.dims.length)
              throw new Error("invalid input shape.");
            if (n2.dims[0] !== e2.dims[1] || r2.dims[0] !== e2.dims[1] || i2.dims[0] !== e2.dims[1] || o2.dims[0] !== e2.dims[1])
              throw new Error("invalid input shape.");
            if ("float32" !== e2.type && "float64" !== e2.type || "float32" !== n2.type && "float64" !== n2.type || "float32" !== r2.type && "float64" !== r2.type || "float32" !== i2.type && "float64" !== i2.type || "float32" !== o2.type && "float64" !== o2.type)
              throw new Error("invalid input tensor types.");
          };
        }, 7839: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.xor = e.sub = e.pRelu = e.pow = e.or = e.mul = e.less = e.greater = e.equal = e.div = e.and = e.add = e.glslPRelu = e.glslPow = e.glslXor = e.glslOr = e.glslAnd = e.glslLess = e.glslGreater = e.glslEqual = e.glslSub = e.glslMul = e.glslDiv = e.glslAdd = void 0;
          const r = n(2517), i = n(8520), o = n(5060), a = n(2039);
          function s() {
            const t2 = "add_";
            return { body: `
  float ${t2}(float a, float b) {
    return a + b;
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function u() {
            const t2 = "div_";
            return { body: `
  float ${t2}(float a, float b) {
    return a / b;
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function c() {
            const t2 = "mul_";
            return { body: `
  float ${t2}(float a, float b) {
    return a * b;
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function l() {
            const t2 = "sub_";
            return { body: `
  float ${t2}(float a, float b) {
    return a - b;
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function p() {
            const t2 = "equal_";
            return { body: `
  float ${t2}(float a, float b) {
    return float(a == b);
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function f() {
            const t2 = "greater_";
            return { body: `
  float ${t2}(float a, float b) {
    return float(a > b);
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function d() {
            const t2 = "less_";
            return { body: `
  float ${t2}(float a, float b) {
    return float(a < b);
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function h() {
            const t2 = "and_";
            return { body: `
  float ${t2}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function g() {
            const t2 = "or_";
            return { body: `
  float ${t2}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function b() {
            const t2 = "xor_";
            return { body: `
  float ${t2}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          function m() {
            return function(t2) {
              const e2 = `${t2}_`;
              return { body: `
  float ${e2}(float a, float b) {
    return ${t2}(a, b);
  }
  vec4 ${e2}(vec4 v1, vec4 v2) {
    return ${t2}(v1, v2);
  }
  `, name: e2, type: i.FunctionType.ValueBased };
            }("pow");
          }
          function y() {
            const t2 = "prelu_";
            return { body: `
  float ${t2}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${t2}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `, name: t2, type: i.FunctionType.ValueBased };
          }
          e.glslAdd = s, e.glslDiv = u, e.glslMul = c, e.glslSub = l, e.glslEqual = p, e.glslGreater = f, e.glslLess = d, e.glslAnd = h, e.glslOr = g, e.glslXor = b, e.glslPow = m, e.glslPRelu = y;
          const _ = (t2, e2, n2, r2 = e2[0].type, i2) => {
            const o2 = t2.session.pack ? a.TextureType.packed : a.TextureType.unpacked;
            return { name: n2.name, inputNames: ["A", "B"], inputTypes: [o2, o2], cacheHint: i2, get: () => v(t2, e2, n2, r2) };
          }, v = (t2, e2, n2, i2 = e2[0].type) => {
            const s2 = t2.session.pack ? a.TextureType.packed : a.TextureType.unpacked, u2 = !r.ShapeUtil.areEqual(e2[0].dims, e2[1].dims);
            let c2 = e2[0].dims;
            const l2 = t2.session.pack;
            if (u2) {
              const a2 = r.BroadcastUtil.calcShape(e2[0].dims, e2[1].dims, false);
              if (!a2)
                throw new Error("Can't perform binary op on the given tensors");
              c2 = a2;
              const u3 = c2.length, p3 = 0 !== e2[0].dims.length ? e2[0].dims.length : 1, f3 = 0 !== e2[1].dims.length ? e2[1].dims.length : 1, d2 = 0 !== e2[0].dims.length ? "bcastIndices_A(indices, aindices);" : "aindices[0] = 0;", h2 = 0 !== e2[1].dims.length ? "bcastIndices_B(indices, bindices);" : "bindices[0] = 0;", g2 = (0, o.getGlsl)(t2.session.backend.glContext.version), b2 = l2 ? `
      ${n2.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${n2.name}(a, b);
        ${g2.output} = result;
      }` : `
      ${n2.body}
      float process(int indices[${u3}]) {
        int aindices[${p3}];
        int bindices[${f3}];
        ${d2}
        ${h2}
        return ${n2.name}(_A(aindices), _B(bindices));
      }`;
              return { name: n2.name, inputNames: ["A", "B"], inputTypes: [s2, s2], output: { dims: c2, type: i2, textureType: s2 }, shaderSource: b2, hasMain: l2 };
            }
            const p2 = (0, o.getGlsl)(t2.session.backend.glContext.version), f2 = `
    ${n2.body}
    void main() {
      vec4 v1 = ${p2.texture2D}(A, TexCoords);
      vec4 v2 = ${p2.texture2D}(B, TexCoords);
      vec4 result = ${n2.name}(v1, v2);
      ${p2.output} = result;
    }
    `;
            return { name: n2.name, inputNames: ["A", "B"], inputTypes: [s2, s2], output: { dims: e2[0].dims, type: i2, textureType: s2 }, shaderSource: f2, hasMain: true };
          };
          e.add = (t2, e2) => [t2.run(_(t2, e2, s()), e2)], e.and = (t2, e2) => [t2.run(_(t2, e2, h(), "bool"), e2)], e.div = (t2, e2) => [t2.run(_(t2, e2, u()), e2)], e.equal = (t2, e2) => [t2.run(_(t2, e2, p(), "bool"), e2)], e.greater = (t2, e2) => [t2.run(_(t2, e2, f(), "bool"), e2)], e.less = (t2, e2) => [t2.run(_(t2, e2, d(), "bool"), e2)], e.mul = (t2, e2) => [t2.run(_(t2, e2, c()), e2)], e.or = (t2, e2) => [t2.run(_(t2, e2, g(), "bool"), e2)], e.pow = (t2, e2) => [t2.run(_(t2, e2, m()), e2)], e.pRelu = (t2, e2) => [t2.run(_(t2, e2, y()), e2)], e.sub = (t2, e2) => [t2.run(_(t2, e2, l()), e2)], e.xor = (t2, e2) => [t2.run(_(t2, e2, b(), "bool"), e2)];
        }, 4196: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseCastAttributes = e.cast = void 0;
          const r = n(2517);
          e.cast = (t2, e2, n2) => (i(e2), [t2.cast(e2[0], n2)]), e.parseCastAttributes = (t2) => r.ProtoUtil.tensorDataTypeFromProto(t2.attributes.getInt("to"));
          const i = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Cast requires 1 input.");
            if ("string" === t2[0].type)
              throw new Error("Invalid input type.");
          };
        }, 1163: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createPackedConcatProgramInfoLoader = void 0;
          const r = n(5060), i = n(2039), o = n(9390), a = n(2827);
          e.createPackedConcatProgramInfoLoader = (t2, e2, n2) => {
            const u = (c = e2.length, l = n2.cacheKey, { name: "Concat (packed)", inputNames: Array.from({ length: c }, (t3, e3) => `X${e3}`), inputTypes: Array(c).fill(i.TextureType.packed), cacheHint: l });
            var c, l;
            return Object.assign(Object.assign({}, u), { get: () => ((t3, e3, n3, u2) => {
              const c2 = n3[0].dims.slice();
              if (u2 >= c2.length || u2 < -1 * c2.length)
                throw new Error("axis specified for concat doesn't match input dimensionality");
              u2 < 0 && (u2 = c2.length + u2);
              const l2 = c2.slice(0);
              for (let t4 = 1; t4 < n3.length; t4++) {
                const e4 = n3[t4].dims.slice();
                for (let t5 = 0; t5 < c2.length; t5++)
                  if (t5 === u2)
                    l2[u2] += e4[t5];
                  else if (c2[t5] !== e4[t5])
                    throw new Error("non concat dimensions must match");
              }
              const p = l2.length, f = (0, a.getChannels)("coords", p), d = (0, o.getCoordsDataType)(p), h = (0, a.unpackFromChannel)(), g = n3.map((t4) => t4.dims), b = (0, o.getGlChannels)(p), m = new Array(g.length - 1);
              m[0] = g[0][u2];
              for (let t4 = 1; t4 < m.length; t4++)
                m[t4] = m[t4 - 1] + g[t4][u2];
              const y = b[u2], _ = b.slice(-2), v = b.join();
              let w = `if (${y} < ${m[0]}) {
        return getChannel(
            getX0(${v}), vec2(${_.join()}));
        }`;
              for (let t4 = 1; t4 < m.length; t4++) {
                const e4 = m[t4 - 1];
                w += `
            if (${y} < ${m[t4]}  && ${y} >= ${m[t4 - 1]}) {
              return getChannel(
                getX${t4}(${s(b, y, e4)}),
                vec2(${s(_, y, e4)}));
            }`;
              }
              const x = m.length, T = m[m.length - 1];
              w += `
            return getChannel(
              getX${x}(${s(b, y, T)}),
              vec2(${s(_, y, T)}));`;
              const S = (0, r.getGlsl)(t3.session.backend.glContext.version), O = `
          ${h}
          float getValue(${b.map((t4) => "int " + t4)}) {
            ${w}
          }

          void main() {
            ${d} coords = getOutputCoords();
            int lastDim = coords.${b[p - 1]};
            coords.${b[p - 1]} = coords.${b[p - 2]};
            coords.${b[p - 2]} = lastDim;

            vec4 result = vec4(getValue(${f}), 0., 0., 0.);

            ${f[p - 1]} = ${f[p - 1]} + 1;
            if (${f[p - 1]} < ${l2[p - 1]}) {
              result.g = getValue(${f});
            }

            ${f[p - 2]} = ${f[p - 2]} + 1;
            if (${f[p - 2]} < ${l2[p - 2]}) {
              result.a = getValue(${f});
            }

            ${f[p - 1]} = ${f[p - 1]} - 1;
            if (${f[p - 2]} < ${l2[p - 2]} &&
                ${f[p - 1]} < ${l2[p - 1]}) {
              result.b = getValue(${f});
            }
            ${S.output} = result;
          }
        `;
              return Object.assign(Object.assign({}, e3), { output: { dims: l2, type: n3[0].type, textureType: i.TextureType.packed }, shaderSource: O, hasMain: true });
            })(t2, u, e2, n2.axis) });
          };
          const s = (t2, e2, n2) => {
            const r2 = t2.indexOf(e2);
            return t2.map((t3, e3) => e3 === r2 ? `${t3} - ${n2}` : t3).join();
          };
        }, 2069: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseConcatAttributes = e.concat = void 0;
          const r = n(246), i = n(2039), o = n(1163);
          e.concat = (t2, e2, n2) => (p(e2), t2.session.pack && e2[0].dims.length > 1 ? [t2.run((0, o.createPackedConcatProgramInfoLoader)(t2, e2, n2), e2)] : [t2.run(a(t2, e2, n2), e2)]);
          const a = (t2, e2, n2) => {
            const r2 = (o2 = e2.length, a2 = n2.cacheKey, { name: "Concat", inputNames: Array.from({ length: o2 }, (t3, e3) => `X${e3}`), inputTypes: Array(o2).fill(i.TextureType.unpacked), cacheHint: a2 });
            var o2, a2;
            return Object.assign(Object.assign({}, r2), { get: () => ((t3, e3, n3, r3) => {
              const o3 = n3[0].dims.slice();
              if (r3 >= o3.length || r3 < -1 * o3.length)
                throw new Error("axis specified for concat doesn't match input dimensionality");
              r3 < 0 && (r3 = o3.length + r3);
              const a3 = o3.slice(0);
              for (let t4 = 1; t4 < n3.length; t4++) {
                const e4 = n3[t4].dims.slice();
                for (let t5 = 0; t5 < o3.length; t5++)
                  if (t5 === r3)
                    a3[r3] += e4[t5];
                  else if (o3[t5] !== e4[t5])
                    throw new Error("non concat dimensions must match");
              }
              const p2 = a3.length, f = new Array(n3.length);
              let d = 0;
              for (let t4 = 0; t4 < f.length; ++t4)
                d += n3[t4].dims[r3], f[t4] = d;
              let h = "";
              h = n3.length < 5 ? s(f) : u(f);
              const g = `
        ${c(n3.length, p2)}
        ${l(f)}
        ${h}
        float process(int indices[${p2}]) {
          int textureIndex = getTextureWhereDataResides (indices[${r3}]);

          if(textureIndex != 0) {
            indices[${r3}] = indices[${r3}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;
              return Object.assign(Object.assign({}, e3), { output: { dims: a3, type: n3[0].type, textureType: i.TextureType.unpacked }, shaderSource: g });
            })(0, r2, e2, n2.axis) });
          }, s = (t2) => `int getTextureWhereDataResides(int index) {
      ${t2.map((t3, e2) => `if(index<${t3}) {return ${e2};}
`).join("")}
    }`, u = (t2) => s(t2), c = (t2, e2) => {
            const n2 = [`float fetchDataFromCorrectTexture(int textureIndex, int indices[${e2}]) {`];
            for (let e3 = 0; e3 < t2; ++e3)
              0 === e3 ? n2.push(`	if (textureIndex == ${e3}) { return _X${e3}(indices); }`) : e3 === t2 - 1 ? n2.push(`	else { return _X${e3}(indices); }`) : n2.push(`	else if (textureIndex == ${e3}) { return _X${e3}(indices); }`);
            return n2.push("	}"), n2.join("\n");
          }, l = (t2) => {
            const e2 = ["int getSizeInConcatAxisValueFromIndex(int index) {"];
            for (let n2 = 0; n2 < t2.length; ++n2)
              0 === n2 ? e2.push(`	if (index == ${n2}) { return ${t2[n2]}; }`) : n2 === t2.length - 1 ? e2.push(`	else { return ${t2[n2]}; }`) : e2.push(`	else if (index == ${n2}) { return ${t2[n2]}; }`);
            return e2.push("	}"), e2.join("\n");
          };
          e.parseConcatAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ axis: t2.attributes.getInt("axis") });
          const p = (t2) => {
            if (!t2 || t2.length < 1)
              throw new Error("too few inputs");
            const e2 = t2[0].type, n2 = t2[0].dims.length;
            if ("string" === e2)
              throw new Error("string tensor is not supported yet");
            for (const r2 of t2) {
              if (r2.type !== e2)
                throw new Error("input tensors should be one type");
              if (r2.dims.length !== n2)
                throw new Error("input tensors should have the same shape");
            }
          };
        }, 4770: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createUnpackedGroupedConvProgramInfoLoader = void 0;
          const r = n(6231), i = n(5060), o = n(2039), a = n(8138), s = n(2823);
          e.createUnpackedGroupedConvProgramInfoLoader = (t2, e2, n2) => {
            const u = (c = e2.length > 2, l = n2.cacheKey, { name: "GroupedConv", inputNames: c ? ["X", "W", "Bias"] : ["X", "W"], inputTypes: c ? [o.TextureType.unpacked, o.TextureType.unpacked, o.TextureType.unpacked] : [o.TextureType.unpacked, o.TextureType.unpacked], cacheHint: l });
            var c, l;
            return Object.assign(Object.assign({}, u), { get: () => ((t3, e3, n3, u2) => {
              const c2 = e3.length > 2 ? "value += getBias(output_channel);" : "", l2 = e3[0].dims.slice(), p = e3[1].dims.slice(), f = p[0] / u2.group;
              r.Logger.verbose("GroupedConv", `autpPad:${u2.autoPad}, dilations:${u2.dilations}, group:${u2.group}, kernelShape:${u2.kernelShape}, pads:${u2.pads}, strides:${u2.strides}`);
              const d = (0, a.calculateOutputShape)(l2, p, u2.dilations, u2.pads, u2.strides), h = (0, i.getGlsl)(t3.session.backend.glContext.version), { activationFunction: g, applyActivation: b } = (0, s.getActivationSnippet)(u2), m = `
  const ivec2 strides = ivec2(${u2.strides[0]}, ${u2.strides[1]});
  const ivec2 pads = ivec2(${u2.pads[0]}, ${u2.pads[1]});
  ${g}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${f};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${p[1]}; wInChannel++) {
      int input_channel = group_id * ${p[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${p[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${u2.dilations[0]};

        if (xHeight < 0 || xHeight >= ${l2[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${p[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${u2.dilations[1]};
          if (xWidth < 0 || xWidth >= ${l2[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${c2}
    ${b}
    ${h.output} = vec4(value, .0, .0, .0);
  }
`;
              return Object.assign(Object.assign({}, n3), { output: { dims: d, type: e3[0].type, textureType: o.TextureType.unpacked }, shaderSource: m, hasMain: true });
            })(t2, e2, u, n2) });
          };
        }, 1386: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.conv2DPacked = e.conv2DPackedPointwise = void 0;
          const r = n(8138), i = n(8555), o = n(708);
          e.conv2DPackedPointwise = (t2, e2, n2) => {
            const i2 = e2[0].dims, a = e2[1].dims, s = (0, r.calculateOutputShape)(i2, a, n2.dilations, n2.pads, n2.strides), u = t2.reshapePacked(e2[0], [i2[1], i2[2] * i2[3]]), c = t2.reshapePacked(e2[1], [a[0], a[1]]), l = e2.length > 2 ? [c, u, e2[2]] : [c, u], p = t2.run((0, o.createPackedMatmulProgramInfoLoader)(t2, l, n2), l);
            return t2.reshapePacked(p, s);
          }, e.conv2DPacked = (t2, e2, n2) => {
            const a = e2[0].dims, s = e2[1].dims, u = (0, r.calculateOutputShape)(a, s, n2.dilations, n2.pads, n2.strides), c = t2.run((0, i.createPackedIm2ColProgramInfoLoader)(t2, e2[0], e2[1], u, n2), [e2[0]]), l = t2.reshapePacked(e2[1], [s[0], s[1] * s[2] * s[3]]), p = 3 === e2.length ? [l, c, e2[2]] : [l, c], f = t2.run((0, o.createPackedMatmulProgramInfoLoader)(t2, p, n2), p);
            return t2.reshapePacked(f, u);
          };
        }, 9663: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseConvTransposeAttributes = e.convTranspose = void 0;
          const r = n(246), i = n(5060), o = n(2039), a = n(2823), s = (t2, e2, n2, r2, i2, o2) => (t2 - 1) * e2 + n2 + (r2 - 1) * i2 + 1 - o2, u = (t2, e2, n2, r2, i2) => {
            const o2 = Math.floor(t2 / 2);
            "SAME_UPPER" === e2 ? (n2[r2] = o2, n2[i2] = t2 - o2) : "SAME_LOWER" === e2 && (n2[r2] = t2 - o2, n2[i2] = o2);
          };
          e.convTranspose = (t2, e2, n2) => (f(e2, n2), c(t2, e2, n2));
          const c = (t2, e2, n2) => {
            const r2 = p(n2, e2);
            return [l(t2, e2, r2)];
          }, l = (t2, e2, n2) => t2.run(((t3, e3, n3) => {
            const r2 = (s2 = e3.length > 2, u2 = n3.cacheKey, { name: "ConvTranspose", inputNames: s2 ? ["X", "W", "B"] : ["X", "W"], inputTypes: s2 ? [o.TextureType.unpacked, o.TextureType.unpacked, o.TextureType.unpacked] : [o.TextureType.unpacked, o.TextureType.unpacked], cacheHint: u2 });
            var s2, u2;
            return Object.assign(Object.assign({}, r2), { get: () => ((t4, e4, n4, r3) => {
              const s3 = e4.length > 2 ? "getB(output_channel)" : "0.0", u3 = e4[0].dims, c2 = e4[1].dims, l2 = c2[1], p2 = c2[0] / r3.group, f2 = [e4[0].dims[0], e4[1].dims[1] * r3.group, ...r3.outputShape], d = (0, i.getGlsl)(t4.session.backend.glContext.version), { activationFunction: h, applyActivation: g } = (0, a.getActivationSnippet)(r3), b = `
  const ivec2 strides = ivec2(${r3.strides[0]}, ${r3.strides[1]});
  const ivec2 pads = ivec2(${r3.pads[0]}, ${r3.pads[1]});
  ${h}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${l2};
    int wOutChannel = output_channel - group_id * ${l2};

    float value = ${s3};
    for (int inChannelOffset = 0; inChannelOffset < ${p2}; inChannelOffset++) {
      int input_channel = group_id * ${p2} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${c2[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${c2[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${r3.dilations[0]}, wHOff * ${r3.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${u3[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${u3[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${g}
    ${d.output} = vec4(value, .0, .0, .0);
  }
`;
              return Object.assign(Object.assign({}, n4), { output: { dims: f2, type: e4[0].type, textureType: o.TextureType.unpacked }, shaderSource: b, hasMain: true });
            })(t3, e3, r2, n3) });
          })(t2, e2, n2), e2), p = (t2, e2) => {
            const n2 = t2.kernelShape.slice();
            if (0 === t2.kernelShape.length)
              for (let t3 = 2; t3 < e2[1].dims.length; ++t3)
                n2.push(e2[1].dims[t3]);
            const r2 = t2.pads.slice(), i2 = t2.outputShape.slice();
            ((t3, e3, n3, r3, i3, o3, a2, c2) => {
              const l2 = t3.length - 2, p2 = 0 === c2.length;
              for (let f2 = 0; f2 < l2; ++f2) {
                const d = p2 ? t3[f2 + 2] * o3[f2] : c2[f2], h = s(t3[f2 + 2], o3[f2], i3[f2], e3[f2], n3[f2], d);
                u(h, r3, i3, f2, f2 + l2), p2 && c2.push(o3[f2] * (t3[f2 + 2] - 1) + a2[f2] + (e3[f2] - 1) * n3[f2] + 1 - i3[f2] - i3[f2 + l2]);
              }
            })(e2[0].dims, n2, t2.dilations, t2.autoPad, r2, t2.strides, t2.outputPadding, i2);
            const o2 = Object.assign({}, t2);
            return Object.assign(o2, { kernelShape: n2, pads: r2, outputShape: i2, cacheKey: t2.cacheKey }), o2;
          };
          e.parseConvTransposeAttributes = (t2) => {
            const e2 = t2.attributes, n2 = (0, a.parseInternalActivationAttributes)(e2), i2 = e2.getString("auto_pad", "NOTSET"), o2 = e2.getInts("dilations", [1, 1]), s2 = e2.getInt("group", 1), u2 = e2.getInts("kernel_shape", []), c2 = e2.getInts("output_padding", [0, 0]), l2 = e2.getInts("output_shape", []), p2 = e2.getInts("pads", [0, 0, 0, 0]), f2 = e2.getInts("strides", [1, 1]);
            return (0, r.createAttributeWithCacheKey)(Object.assign({ autoPad: i2, dilations: o2, group: s2, kernelShape: u2, outputPadding: c2, outputShape: l2, pads: p2, strides: f2 }, n2));
          };
          const f = (t2, e2) => {
            if (!t2 || 2 !== t2.length && 3 !== t2.length)
              throw new Error("Conv requires 2 or 3 inputs");
            if (4 !== t2[0].dims.length || 4 !== t2[1].dims.length)
              throw new Error("currently only support 2-dimensional conv");
            if (t2[0].dims[1] !== t2[1].dims[0])
              throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");
            const n2 = t2[1].dims[1] * e2.group;
            if (3 === t2.length && (1 !== t2[2].dims.length || t2[2].dims[0] !== n2))
              throw new Error("invalid bias");
            const r2 = t2[0].dims.length - 2;
            if (e2.dilations.length !== r2)
              throw new Error(`dilations should be ${r2}D`);
            if (e2.strides.length !== r2)
              throw new Error(`strides should be ${r2}D`);
            if (e2.pads.length !== 2 * r2)
              throw new Error(`pads should be ${2 * r2}D`);
            if (e2.outputPadding.length !== r2)
              throw new Error(`output_padding should be ${r2}D`);
            if (0 !== e2.kernelShape.length && e2.kernelShape.length !== t2[1].dims.length - 2)
              throw new Error("invalid kernel shape");
            if (0 !== e2.outputShape.length && e2.outputShape.length !== t2[0].dims.length - 2)
              throw new Error("invalid output shape");
            if ("float32" !== t2[0].type || "float32" !== t2[1].type)
              throw new Error("ConvTranspose input(X,W) should be float tensor");
            if (3 === t2.length && "float32" !== t2[2].type)
              throw new Error("ConvTranspose input(bias) should be float tensor");
          };
        }, 8138: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseConvAttributes = e.conv = e.calculateOutputShape = void 0;
          const r = n(246), i = n(2517), o = n(4770), a = n(1386), s = n(9828), u = n(2823), c = n(3248), l = n(5623);
          e.calculateOutputShape = (t2, e2, n2, r2, i2) => {
            const o2 = t2[0], a2 = t2.slice(2), s2 = a2.length, u2 = e2[0], c2 = e2.slice(2).map((t3, e3) => t3 + (t3 - 1) * (n2[e3] - 1)), l2 = a2.map((t3, e3) => t3 + r2[e3] + r2[e3 + s2]).map((t3, e3) => Math.floor((t3 - c2[e3] + i2[e3]) / i2[e3]));
            return [o2, u2].concat(...l2);
          }, e.conv = (t2, e2, n2) => (g(e2, n2), p(t2, e2, n2));
          const p = (t2, e2, n2) => {
            const r2 = h(n2, e2), i2 = t2.session.pack, s2 = 1 === r2.kernelShape[0] && 1 === r2.kernelShape[1];
            return r2.group > 1 ? [t2.run((0, o.createUnpackedGroupedConvProgramInfoLoader)(t2, e2, r2), e2)] : s2 && i2 ? [f(t2, e2, r2)] : i2 && 4 === e2[0].dims.length && 1 === e2[0].dims[0] && !s2 ? [(0, a.conv2DPacked)(t2, e2, r2)] : [d(t2, e2, r2)];
          }, f = (t2, n2, r2) => {
            const i2 = n2[0].dims, o2 = n2[1].dims, a2 = (0, e.calculateOutputShape)(i2, o2, r2.dilations, r2.pads, r2.strides), s2 = t2.reshapeUnpacked(n2[0], [i2[1], i2[2] * i2[3]]), u2 = t2.reshapeUnpacked(n2[1], [o2[0], o2[1]]), c2 = n2.length > 2 ? [u2, s2, n2[2]] : [u2, s2], p2 = t2.run((0, l.createMatmulProgramInfoLoader)(c2, r2), c2);
            return t2.reshapeUnpacked(p2, a2);
          }, d = (t2, n2, r2) => {
            const i2 = n2[0].dims, o2 = n2[1].dims, a2 = (0, e.calculateOutputShape)(i2, o2, r2.dilations, r2.pads, r2.strides), u2 = t2.run((0, c.createIm2ColProgramInfoLoader)(t2, n2[0], n2[1], a2, r2), [n2[0]]), l2 = 3 === n2.length ? [u2, n2[1], n2[2]] : [u2, n2[1]];
            return t2.run((0, s.createDotProductProgramInfoLoader)(t2, n2, a2, r2), l2);
          }, h = (t2, e2) => {
            const n2 = t2.kernelShape.slice();
            if (0 === t2.kernelShape.length)
              for (let t3 = 2; t3 < e2[1].dims.length; ++t3)
                n2.push(e2[1].dims[t3]);
            const r2 = t2.pads.slice();
            i.PoolConvUtil.adjustPadsBasedOnAutoPad(e2[0].dims, t2.strides, t2.dilations, n2, r2, t2.autoPad);
            const o2 = Object.assign({}, t2);
            return Object.assign(o2, { kernelShape: n2, pads: r2, cacheKey: t2.cacheKey }), o2;
          };
          e.parseConvAttributes = (t2) => {
            const e2 = t2.attributes, n2 = (0, u.parseInternalActivationAttributes)(e2), i2 = e2.getString("auto_pad", "NOTSET"), o2 = e2.getInts("dilations", [1, 1]), a2 = e2.getInt("group", 1), s2 = e2.getInts("kernel_shape", []), c2 = e2.getInts("pads", [0, 0, 0, 0]), l2 = e2.getInts("strides", [1, 1]);
            return (0, r.createAttributeWithCacheKey)(Object.assign({ autoPad: i2, dilations: o2, group: a2, kernelShape: s2, pads: c2, strides: l2 }, n2));
          };
          const g = (t2, e2) => {
            if (!t2 || 2 !== t2.length && 3 !== t2.length)
              throw new Error("Conv requires 2 or 3 inputs");
            if (4 !== t2[0].dims.length || 4 !== t2[1].dims.length)
              throw new Error("currently only support 2-dimensional conv");
            if (t2[0].dims[1] !== t2[1].dims[1] * e2.group)
              throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");
            if (3 === t2.length && (1 !== t2[2].dims.length || t2[1].dims[0] !== t2[2].dims[0]))
              throw new Error("invalid bias");
            const n2 = t2[0].dims.length - 2;
            if (e2.dilations.length !== n2)
              throw new Error(`dilations should be ${n2}D`);
            if (e2.strides.length !== n2)
              throw new Error(`strides should be ${n2}D`);
            if (e2.pads.length !== 2 * n2)
              throw new Error(`pads should be ${2 * n2}D`);
            if (0 !== e2.kernelShape.length && e2.kernelShape.length !== t2[1].dims.length - 2)
              throw new Error("invalid kernel shape");
            if ("float32" !== t2[0].type || "float32" !== t2[1].type)
              throw new Error("Conv input(X,W) should be float tensor");
            if (3 === t2.length && "float32" !== t2[2].type)
              throw new Error("Conv input(bias) should be float tensor");
          };
        }, 5193: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseDepthToSpaceAttributes = e.depthToSpace = void 0;
          const r = n(3738);
          e.depthToSpace = (t2, e2, n2) => {
            i(e2);
            const o = n2.blocksize, a = o * o, s = "DCR" === n2.mode ? [0, 3, 4, 1, 5, 2] : [0, 1, 4, 2, 5, 3], u = "DCR" === n2.mode ? [e2[0].dims[0], o, o, e2[0].dims[1] / a, e2[0].dims[2], e2[0].dims[3]] : [e2[0].dims[0], e2[0].dims[1] / a, o, o, e2[0].dims[2], e2[0].dims[3]], c = t2.reshapeUnpacked(e2[0], u), l = { perm: s, cacheKey: `${s}` }, [p] = (0, r.transpose)(t2, [c], l), f = [e2[0].dims[0], e2[0].dims[1] / a, e2[0].dims[2] * o, e2[0].dims[3] * o];
            return [t2.reshapeUnpacked(p, f)];
          }, e.parseDepthToSpaceAttributes = (t2) => {
            const e2 = t2.attributes.getInt("blocksize");
            if (e2 < 1)
              throw new Error(`blocksize must be >= 1, but got : ${e2} for DepthToSpace`);
            const n2 = t2.attributes.getString("mode", "DCR");
            if ("DCR" !== n2 && "CRD" !== n2)
              throw new Error(`unrecognized mode: ${n2} for DepthToSpace`);
            return { mode: n2, blocksize: e2 };
          };
          const i = (t2) => {
            if (1 !== t2.length)
              throw new Error(`DepthToSpace expect 1 inputs, but got ${t2.length}`);
            if ("string" === t2[0].type || 4 !== t2[0].dims.length)
              throw new TypeError("DepthToSpace input should be a 4-D numeric tensor");
          };
        }, 9828: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createDotProductProgramInfoLoader = void 0;
          const r = n(2517), i = n(5060), o = n(2039), a = n(2823), s = n(3248);
          e.createDotProductProgramInfoLoader = (t2, e2, n2, u) => {
            const c = ((t3, e3) => ({ name: "ConvDotProduct", inputNames: t3 ? ["Im2Col", "K", "B"] : ["Im2Col", "K"], inputTypes: t3 ? [o.TextureType.unpacked, o.TextureType.packedLastDimension, o.TextureType.unpacked] : [o.TextureType.unpacked, o.TextureType.packedLastDimension], cacheKey: e3.activationCacheKey }))(e2.length > 2, u);
            return Object.assign(Object.assign({}, c), { get: () => ((t3, e3, n3, u2, c2) => {
              const l = n3[0].dims, p = n3[1].dims, f = [p[0], Math.ceil(l[1] * p[2] * p[3] / 4)], d = (0, s.calculateIm2ColDims)(l, p, u2), [h, g] = t3.calculateTextureWidthAndHeight(f, o.TextureType.packedLastDimension), b = r.ShapeUtil.computeStrides(d), [m, y] = t3.calculateTextureWidthAndHeight(d, o.TextureType.packedLastDimension), _ = u2.length, v = n3.length < 3 ? "0.0" : "_B(b)", w = Math.ceil(l[1] * p[2] * p[3] / 4), { activationFunction: x, applyActivation: T } = (0, a.getActivationSnippet)(c2), S = (0, i.getGlsl)(t3.session.backend.glContext.version), O = `
${x}
float process(int indices[${_}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${b[0]} + im2col[1] * ${b[1]} + im2col[2] * ${b[2]};
  int kernelOffset = indices[1] * ${f[1]};
  float value = ${v};
  for (int i = 0; i < ${w}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${m}, ${y});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${h}, ${g});
    value += dot(${S.texture2D}(Im2Col, im2colCoords), ${S.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${T}
  return value;
}`;
              return Object.assign(Object.assign({}, e3), { output: { dims: u2, type: n3[0].type, textureType: o.TextureType.unpacked }, shaderSource: O });
            })(t2, c, e2, n2, u) });
          };
        }, 7992: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseFlattenAttributes = e.flatten = void 0;
          const r = n(2517);
          e.flatten = (t2, e2, n2) => {
            i(e2, n2);
            const o = r.ShapeUtil.flattenShape(e2[0].dims, n2);
            return [t2.reshapeUnpacked(e2[0], o)];
          }, e.parseFlattenAttributes = (t2) => t2.attributes.getInt("axis", 1);
          const i = (t2, e2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Flatten requires 1 input.");
            const n2 = t2[0].dims.length;
            if (0 === n2)
              throw new Error("scalar tensor is not supported.");
            if (e2 < -n2 || e2 > n2)
              throw new Error("Invalid axis");
            if ("string" === t2[0].type)
              throw new Error("string tensor is not supported.");
          };
        }, 2823: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseInternalActivationAttributes = e.getActivationSnippet = void 0;
          const r = n(2517), i = n(4909);
          e.getActivationSnippet = function(t2) {
            let e2;
            switch (t2.activation) {
              case "Relu":
                e2 = (0, i.glslRelu)();
                break;
              case "Sigmoid":
                e2 = (0, i.glslSigmoid)();
                break;
              case "Clip":
                e2 = (0, i.glslClip)(t2.clipMin, t2.clipMax);
                break;
              default:
                return { activationFunction: "", applyActivation: "" };
            }
            const n2 = e2.name;
            return { activationFunction: e2.body, applyActivation: `value = ${n2}_(value);` };
          }, e.parseInternalActivationAttributes = (t2) => {
            const e2 = t2.getString("activation", "");
            if ("Clip" === e2) {
              const [n2, i2] = t2.getFloats("activation_params", [r.MIN_CLIP, r.MAX_CLIP]);
              return { activation: e2, clipMax: i2, clipMin: n2, activationCacheKey: `${e2}:${n2},${i2}` };
            }
            return { activation: e2, activationCacheKey: e2 };
          };
        }, 1253: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseGatherAttributes = e.gather = void 0;
          const r = n(246), i = n(782), o = n(2517), a = n(2039);
          e.gather = (t2, e2, n2) => (c(e2, n2.axis), [t2.run(u(t2, e2, n2), e2)]), e.parseGatherAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ axis: t2.attributes.getInt("axis", 0) });
          const s = { name: "Gather", inputNames: ["A", "B"], inputTypes: [a.TextureType.unpacked, a.TextureType.unpacked] }, u = (t2, e2, n2) => {
            const r2 = Object.assign(Object.assign({}, s), { cacheHint: n2.cacheKey });
            return Object.assign(Object.assign({}, r2), { get: () => ((t3, e3, n3, r3) => {
              const i2 = n3[0].dims.slice(), s2 = n3[1].dims.slice(), u2 = new Array(i2.length + s2.length - 1);
              r3 = o.ShapeUtil.normalizeAxis(r3, i2.length);
              const c2 = [];
              for (let t4 = 0; t4 < u2.length; t4++)
                t4 < r3 ? (u2[t4] = i2[t4], c2.push(`inputIdx[${t4}] = outputIdx[${t4}];`)) : t4 < r3 + s2.length ? (u2[t4] = s2[t4 - r3], c2.push(`indexDataIdx[${t4 - r3}] = outputIdx[${t4}];`)) : (u2[t4] = i2[t4 - s2.length + 1], c2.push(`inputIdx[${t4 - s2.length + 1}] = outputIdx[${t4}];`));
              const l = `
      float process(int outputIdx[${u2.length || 1}]) {
        int inputIdx[${i2.length}];
        int indexDataIdx[${s2.length || 1}];
        indexDataIdx[0] = 0;
        ${c2.join("\n        ")}
        int idx = int(_B(indexDataIdx));
        inputIdx[${r3}] = idx < 0 ? idx + ${i2[r3]} : idx;
        return _A(inputIdx);
      }`;
              return Object.assign(Object.assign({}, e3), { output: { dims: u2, type: n3[0].type, textureType: a.TextureType.unpacked }, shaderSource: l });
            })(0, r2, e2, n2.axis) });
          }, c = (t2, e2) => {
            if (!t2 || 2 !== t2.length)
              throw new Error("Gather requires 2 inputs.");
            const n2 = t2[0].dims.length;
            if (n2 < 1)
              throw new Error("Invalid input shape.");
            if (e2 < -n2 || e2 > n2 - 1)
              throw new Error("Invalid axis.");
            if (-1 === i.NUMBER_TYPES.indexOf(t2[0].type))
              throw new Error("Invaid input type.");
            if ("int32" !== t2[1].type && "int16" !== t2[1].type)
              throw new Error("Invaid input type.");
          };
        }, 4776: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseGemmAttributesV11 = e.parseGemmAttributesV7 = e.gemm = void 0;
          const r = n(246), i = n(2517), o = n(2039);
          e.gemm = (t2, e2, n2) => (c(e2, n2), [t2.run(s(e2, n2), e2)]);
          const a = (t2, e2) => {
            const n2 = 0 !== t2.attributes.getInt("transA", 0), i2 = 0 !== t2.attributes.getInt("transB", 0), o2 = t2.attributes.getFloat("alpha", 1), a2 = t2.attributes.getFloat("beta", 1);
            return (0, r.createAttributeWithCacheKey)({ transA: n2, transB: i2, alpha: o2, beta: a2, isOptionalC: e2 });
          };
          e.parseGemmAttributesV7 = (t2) => a(t2, false), e.parseGemmAttributesV11 = (t2) => a(t2, true);
          const s = (t2, e2) => {
            const n2 = { name: "Gemm", inputNames: 3 === t2.length ? ["A", "B", "C"] : ["A", "B"], inputTypes: 3 === t2.length ? [o.TextureType.unpacked, o.TextureType.unpacked, o.TextureType.unpacked] : [o.TextureType.unpacked, o.TextureType.unpacked], key: e2.cacheKey };
            return Object.assign(Object.assign({}, n2), { get: () => u(n2, t2, e2) });
          }, u = (t2, e2, n2) => {
            const r2 = e2[0].dims.slice(), a2 = e2[1].dims.slice(), [s2, u2] = i.GemmUtil.getShapeOfGemmResult(r2, n2.transA, a2, n2.transB, 3 === e2.length ? e2[2].dims : void 0), c2 = [s2, u2];
            if (!c2)
              throw new Error("Can't use gemm on the given tensors");
            let l = r2[r2.length - 1], p = "";
            n2.transA && (l = r2[0]), n2.transA && n2.transB ? p = "value += _A_T(a) * _B_T(b);" : n2.transA && !n2.transB ? p = "value += _A_T(a) * _B(b);" : !n2.transA && n2.transB ? p = "value += _A(a) * _B_T(b);" : n2.transA || n2.transB || (p = "value += _A(a) * _B(b);");
            const f = c2.length, d = `
      float process(int indices[${f}]) {
          int a[${f}];
          int b[${f}];
          ${3 === e2.length ? `int c[${e2[2].dims.length}];` : ""}

          copyVec(indices, a);
          copyVec(indices, b);
          ${3 === e2.length ? "bcastIndices_C(indices, c);" : ""}

          float value = 0.0;
          for (int k=0; k<${l}; ++k) {
              a[${f - 1}] = k;
              b[${f - 2}] = k;
              ${p}
          }

          value = value * alpha;
          ${3 === e2.length ? "value += beta * _C(c);" : ""}
          return value;
      }`;
            return Object.assign(Object.assign({}, t2), { output: { dims: c2, type: e2[0].type, textureType: o.TextureType.unpacked }, variables: [{ name: "alpha", type: "float", data: n2.alpha }, { name: "beta", type: "float", data: n2.beta }], shaderSource: d });
          }, c = (t2, e2) => {
            if (!t2)
              throw new Error("Input is missing");
            if (e2.isOptionalC && (t2.length < 2 || t2.length > 3))
              throw new Error("Invaid input shape.");
            if (!e2.isOptionalC && 3 !== t2.length)
              throw new Error("Gemm requires 3 inputs");
            if (3 === t2.length && 1 !== t2[2].dims.length && 2 !== t2[2].dims.length)
              throw new Error("Invalid input shape of C");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type || "float32" !== t2[1].type && "float64" !== t2[1].type || 3 === t2.length && "float32" !== t2[2].type && "float64" !== t2[2].type)
              throw new Error("Invalid input type.");
            if (t2[0].type !== t2[1].type || 3 === t2.length && t2[0].type !== t2[2].type)
              throw new Error("Input types are mismatched");
          };
        }, 8555: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createPackedIm2ColProgramInfoLoader = void 0;
          const r = n(5060), i = n(2039), o = n(2827);
          e.createPackedIm2ColProgramInfoLoader = (t2, e2, n2, a, s) => {
            const u = (c = s.cacheKey, { name: "Im2Col (packed)", inputNames: ["A"], inputTypes: [i.TextureType.packed], cacheHint: c });
            var c;
            return Object.assign(Object.assign({}, u), { get: () => ((t3, e3, n3, a2, s2, u2) => {
              const c2 = n3.dims, l = a2.dims, p = s2.length, f = [l[1] * l[2] * l[3], s2[2] * s2[3]], d = l[2] * l[3], h = (0, o.unpackFromChannel)(), g = (0, r.getGlsl)(t3.session.backend.glContext.version);
              let b = "";
              for (let t4 = 0; t4 <= 1; t4++)
                for (let e4 = 0; e4 <= 1; e4++)
                  b += `
            blockIndex = rc.x + ${e4};
            pos = rc.y + ${t4};

            if(blockIndex < ${f[1]} && pos < ${f[0]}) {
              offsetY = int(blockIndex / (${s2[p - 1]})) * ${u2.strides[0]} -
                ${u2.pads[0]};
              d0 = offsetY + ${u2.dilations[0]} * (imod(pos, ${d}) / ${l[2]});

              if(d0 < ${c2[2]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${s2[p - 1]}) * ${u2.strides[1]} -
                  ${u2.pads[1]};
                d1 = offsetX + ${u2.dilations[1]} * imod(imod(pos, ${d}), ${l[2]});

                if(d1 < ${c2[3]} && d1 >= 0) {

                  ch = int(float(pos)/ ${d}.);
                    innerDims = vec2(d0, d1);
                    result[${2 * t4 + e4}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;
              const m = `
      ${h}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${b}
          ${g.output} = result;
      }
            `;
              return Object.assign(Object.assign({}, e3), { output: { dims: f, type: n3.type, textureType: i.TextureType.packed }, shaderSource: m, hasMain: true });
            })(t2, u, e2, n2, a, s) });
          };
        }, 3248: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.calculateIm2ColDims = e.createIm2ColProgramInfoLoader = void 0;
          const r = n(2039);
          e.createIm2ColProgramInfoLoader = (t2, n2, i, o, a) => {
            const s = (u = a.cacheKey, { name: "Im2Col", inputNames: ["X"], inputTypes: [r.TextureType.unpacked], cacheHint: u });
            var u;
            return Object.assign(Object.assign({}, s), { get: () => ((t3, n3, i2, o2, a2, s2) => {
              const u2 = i2.dims, c = o2.dims, l = a2.length, p = (0, e.calculateIm2ColDims)(u2, c, a2, 4), f = `
        const int XC = ${u2[1]};
        const int XH = ${u2[2]};
        const int XW = ${u2[3]};
        const int KH = ${s2.kernelShape[0]};
        const int KW = ${s2.kernelShape[1]};
        const int dilationH = ${s2.dilations[0]};
        const int dilationW = ${s2.dilations[1]};
        const int strideH = ${s2.strides[0]};
        const int strideW = ${s2.strides[1]};
        const int padH = ${s2.pads[0]};
        const int padW = ${s2.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${l}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${u2.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;
              return Object.assign(Object.assign({}, n3), { output: { dims: p, type: i2.type, textureType: r.TextureType.packedLastDimension }, shaderSource: f });
            })(0, s, n2, i, o, a) });
          }, e.calculateIm2ColDims = (t2, e2, n2, r2 = 4) => [n2[0], n2[2], n2[3], Math.ceil(t2[1] * e2[2] * e2[3] / r2)];
        }, 6572: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseImageScalerAttributes = e.imageScaler = void 0;
          const r = n(246), i = n(2039);
          e.imageScaler = (t2, e2, n2) => (u(e2), [t2.run(a(t2, e2, n2), e2)]), e.parseImageScalerAttributes = (t2) => {
            const e2 = t2.attributes.getFloat("scale"), n2 = t2.attributes.getFloats("bias");
            return (0, r.createAttributeWithCacheKey)({ scale: e2, bias: n2 });
          };
          const o = { name: "ImageScaler", inputNames: ["X"], inputTypes: [i.TextureType.unpacked] }, a = (t2, e2, n2) => {
            const r2 = Object.assign(Object.assign({}, o), { cacheHint: n2.cacheKey });
            return Object.assign(Object.assign({}, r2), { get: () => ((t3, e3, n3, r3) => {
              const o2 = n3[0].dims.slice(), a2 = o2.length, u2 = `
      ${s(r3.bias.length)}
      float process(int indices[${a2}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;
              return Object.assign(Object.assign({}, e3), { output: { dims: o2, type: n3[0].type, textureType: i.TextureType.unpacked }, variables: [{ name: "bias", type: "float", arrayLength: r3.bias.length, data: r3.bias }, { name: "scale", type: "float", data: r3.scale }], shaderSource: u2 });
            })(0, r2, e2, n2) });
          }, s = (t2) => {
            const e2 = [`float getBias(float bias[${t2}], int channel) {`];
            for (let n2 = 0; n2 < t2; ++n2)
              0 === n2 ? e2.push(`	if (channel == ${n2}) { return bias[${n2}]; }`) : n2 === t2 - 1 ? e2.push(`	else { return bias[${n2}]; }`) : e2.push(`	else if (channel == ${n2}) { return bias[${n2}]; }`);
            return e2.push("	}"), e2.join("\n");
          }, u = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("ImageScaler requires 1 input.");
            if (4 !== t2[0].dims.length)
              throw new Error("Invalid input shape.");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type)
              throw new Error("Invalid input type.");
          };
        }, 3346: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseInstanceNormalizationAttributes = e.instanceNormalization = void 0;
          const r = n(5060), i = n(2039);
          e.instanceNormalization = (t2, e2, n2) => {
            c(e2);
            const r2 = t2.run(a(e2[0]), e2);
            return [t2.run(u(t2, e2[0], n2, r2.dims), [e2[0], r2, e2[1], e2[2]])];
          }, e.parseInstanceNormalizationAttributes = (t2) => t2.attributes.getFloat("epsilon", 1e-5);
          const o = { name: "InstanceNormalization_MeanAndVariance", inputNames: ["X"], inputTypes: [i.TextureType.unpacked] }, a = (t2) => Object.assign(Object.assign({}, o), { get: () => ((t3, e2) => {
            const n2 = e2.dims.slice(), r2 = n2[1], o2 = n2[2] * n2[3], a2 = [n2[0], r2], s2 = `
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${n2[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n2[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${o2});
        temp = 0.0;
        for(int a2=0; a2<${n2[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n2[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${o2});

        return v;
      }`;
            return Object.assign(Object.assign({}, t3), { output: { dims: a2, type: e2.type, textureType: i.TextureType.packedLastDimension }, shaderSource: s2 });
          })(o, t2) }), s = { name: "InstanceNormalization_ComputeOutput", inputNames: ["X", "MeanAndVariance", "Scale", "B"], inputTypes: [i.TextureType.unpacked, i.TextureType.packedLastDimension, i.TextureType.unpacked, i.TextureType.unpacked] }, u = (t2, e2, n2, o2) => {
            const a2 = Object.assign(Object.assign({}, s), { cacheHint: `${n2}` });
            return Object.assign(Object.assign({}, a2), { get: () => ((t3, e3, n3, o3, a3) => {
              const s2 = (0, r.getGlsl)(t3.session.backend.glContext.version), [u2, c2] = t3.calculateTextureWidthAndHeight(a3, i.TextureType.packedLastDimension), [l, p] = [u2 / 4, c2], f = `
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${l}, ${p});
        return ${s2.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;
              return Object.assign(Object.assign({}, e3), { output: { dims: n3.dims, type: n3.type, textureType: i.TextureType.unpacked }, variables: [{ name: "epsilon", type: "float", data: o3 }], shaderSource: f });
            })(t2, a2, e2, n2, o2) });
          }, c = (t2) => {
            if (!t2 || 3 !== t2.length)
              throw new Error("InstanceNormalization requires 3 inputs.");
            const e2 = t2[0], n2 = t2[1], r2 = t2[2];
            if (e2.dims.length < 3 || 1 !== n2.dims.length || 1 !== r2.dims.length)
              throw new Error("Invalid input shape.");
            if (n2.dims[0] !== e2.dims[1] || r2.dims[0] !== e2.dims[1])
              throw new Error("Input shapes are mismatched.");
            if ("float32" !== e2.type && "float64" !== e2.type || "float32" !== n2.type && "float64" !== n2.type || "float32" !== r2.type && "float64" !== r2.type)
              throw new Error("Invalid input type.");
            if (4 !== t2[0].dims.length)
              throw new Error("Only support 4-D input shape.");
          };
        }, 708: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createPackedMatmulProgramInfoLoader = void 0;
          const r = n(2517), i = n(5060), o = n(2039), a = n(9390), s = n(2823), u = n(5623);
          e.createPackedMatmulProgramInfoLoader = (t2, e2, n2) => {
            const c = (l = e2.length > 2, p = n2.activationCacheKey, { name: "MatMul (packed)", inputNames: l ? ["A", "B", "Bias"] : ["A", "B"], inputTypes: l ? [o.TextureType.packed, o.TextureType.packed, o.TextureType.packed] : [o.TextureType.packed, o.TextureType.packed], cacheHint: p });
            var l, p;
            return Object.assign(Object.assign({}, c), { get: () => ((t3, e3, n3, c2) => {
              const l2 = n3.length > 2, p2 = l2 ? "value += getBiasForMatmul();" : "", f = n3[0].dims, d = n3[1].dims, h = r.BroadcastUtil.calcShape(f, d, true), g = !r.ShapeUtil.areEqual(n3[0].dims, n3[1].dims);
              if (!h)
                throw new Error("Can't use matmul on the given tensors");
              const b = f[f.length - 1], m = Math.ceil(b / 2), y = f.length, _ = d.length, v = (0, i.getGlsl)(t3.session.backend.glContext.version), w = (0, a.getCoordsDataType)(h.length), x = h.length, T = (0, a.getGlChannels)(), { activationFunction: S, applyActivation: O } = (0, s.getActivationSnippet)(c2), A = l2 ? `${(0, u.getBiasForMatmul)(w, T, n3[2].dims, h, true)}` : "", E = g ? `${function(t4, e4, n4, i2) {
                let o2 = [], a2 = [];
                const s2 = n4[0].dims, u2 = n4[1].dims, c3 = s2.length, l3 = u2.length, p3 = i2.length, f2 = p3 - c3, d2 = p3 - l3;
                o2 = s2.map((t5, n5) => `coords.${e4[n5 + f2]}`), o2[c3 - 1] = "i*2", o2.join(", "), a2 = u2.map((t5, n5) => `coords.${e4[n5 + d2]}`), a2[l3 - 2] = "i*2", a2.join(", ");
                const h2 = r.BroadcastUtil.getBroadcastDims(s2, i2), g2 = r.BroadcastUtil.getBroadcastDims(u2, i2), b2 = h2.map((t5) => `coords.${e4[t5 + f2]} = 0;`).join("\n"), m2 = g2.map((t5) => `coords.${e4[t5 + d2]} = 0;`).join("\n"), y2 = `int lastDim = coords.${e4[p3 - 1]};
  coords.${e4[p3 - 1]} = coords.${e4[p3 - 2]};
  coords.${e4[p3 - 2]} = lastDim;`;
                return `
vec4 getAAtOutCoordsMatmul(int i) {
  ${t4} coords = getOutputCoords();
  ${y2}
  ${b2}
  vec4 outputValue = getA(${o2});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${t4} coords = getOutputCoords();
  ${y2}
  ${m2}
  vec4 outputValue = getB(${a2});
  return outputValue;
}`;
              }(w, T, n3, h)}` : "", I = g ? "getAAtOutCoordsMatmul(i)" : `getA(${function(t4, e4) {
                let n4 = "";
                for (let r2 = 0; r2 < e4 - 2; r2++)
                  n4 += `rc.${t4[r2]}, `;
                return n4 += `rc.${t4[e4 - 2]}, i*2`, n4;
              }(T, y)})`, P = g ? "getBAtOutCoordsMatmul(i)" : `getB(${function(t4, e4) {
                let n4 = "";
                for (let r2 = 0; r2 < e4 - 2; r2++)
                  n4 += `rc.${t4[r2]}, `;
                return n4 += `i*2, rc.${t4[e4 - 1]}`, n4;
              }(T, _)})`, D = `
            ${E}
            ${A}
            ${S}
            void main() {
              ${g ? "" : `${w} rc =
          getOutputCoords(); int lastDim = rc.${T[x - 1]}; rc.${T[x - 1]} =
          rc.${T[x - 2]}; rc.${T[x - 2]} = lastDim;
      `}

              vec4 value = vec4(0);
              for (int i = 0; i < ${m}; i++) {
                vec4 a = ${I};
                vec4 b = ${P};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${p2}
              ${O}
              ${v.output} = value;
            }`;
              return Object.assign(Object.assign({}, e3), { output: { dims: h, type: n3[0].type, textureType: o.TextureType.packed }, shaderSource: D, hasMain: true });
            })(t2, c, e2, n2) });
          };
        }, 5623: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.getBiasForMatmul = e.createMatmulProgramInfoLoader = e.parseMatMulAttributes = e.matMul = void 0;
          const r = n(2517), i = n(2039), o = n(9390), a = n(2823), s = n(708);
          function u(t2, e2) {
            const n2 = (s2 = t2.length > 2, u2 = e2.activationCacheKey, { name: "MatMul", inputNames: s2 ? ["A", "B", "Bias"] : ["A", "B"], inputTypes: s2 ? [i.TextureType.unpacked, i.TextureType.unpacked, i.TextureType.unpacked] : [i.TextureType.unpacked, i.TextureType.unpacked], cacheHint: u2 });
            var s2, u2;
            return Object.assign(Object.assign({}, n2), { get: () => function(t3, e3, n3) {
              const s3 = e3[0].dims, u3 = e3[1].dims, c2 = r.BroadcastUtil.calcShape(s3, u3, true);
              if (!c2)
                throw new Error("Can't use matmul on the given tensors");
              const p = (0, o.getCoordsDataType)(c2.length), f = (0, o.getGlChannels)(), { activationFunction: d, applyActivation: h } = (0, a.getActivationSnippet)(n3), g = e3.length > 2, b = g ? "value += getBiasForMatmul();" : "", m = g ? `${l(p, f, e3[2].dims, c2, false)}` : "", y = c2.length, _ = s3.length, v = u3.length, w = `
    ${d}
    ${m}
    float process(int indices[${y}]) {
        int a[${_}];
        int b[${v}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${s3[s3.length - 1]}; ++k) {
            a[${_ - 1}] = k;
            b[${v - 2}] = k;
            value += _A(a) * _B(b);
        }
        ${b}
        ${h}
        return value;
    }`;
              return Object.assign(Object.assign({}, t3), { output: { dims: c2, type: e3[0].type, textureType: i.TextureType.unpacked }, shaderSource: w });
            }(n2, t2, e2) });
          }
          e.matMul = (t2, e2, n2) => (c(e2), t2.session.pack ? [t2.run((0, s.createPackedMatmulProgramInfoLoader)(t2, e2, n2), e2)] : [t2.run(u(e2, n2), e2)]), e.parseMatMulAttributes = (t2) => (0, a.parseInternalActivationAttributes)(t2.attributes), e.createMatmulProgramInfoLoader = u;
          const c = (t2) => {
            if (!t2 || 2 !== t2.length)
              throw new Error("MatMul requires 2 inputs.");
            if (t2[0].dims[t2[0].dims.length - 1] !== t2[1].dims[t2[1].dims.length - 2])
              throw new Error("shared dimension does not match.");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type || "float32" !== t2[1].type && "float64" !== t2[1].type)
              throw new Error("inputs should be float type");
            if (t2[0].type !== t2[1].type)
              throw new Error("inputs types should match");
          };
          function l(t2, e2, n2, i2, o2) {
            let a2 = "";
            const s2 = n2.length, u2 = i2.length, c2 = u2 - s2;
            a2 = u2 < 2 && s2 > 0 ? "coords" : n2.map((t3, n3) => `coords.${e2[n3 + c2]}`).join(", ");
            const l2 = r.BroadcastUtil.getBroadcastDims(n2, i2).map((t3) => `coords.${e2[t3 + c2]} = 0;`).join("\n");
            let p = "vec4(outputValue.xx, outputValue.yy)";
            return 1 === r.ShapeUtil.size(n2) && (p = "vec4(outputValue.x)"), o2 ? `
vec4 getBiasForMatmul() {
  ${t2} coords = getOutputCoords();
  ${l2}
  vec4 outputValue = getBias(${a2});
  return ${p};
}` : `
float getBiasForMatmul() {
  ${t2} coords = getOutputCoords();
  ${l2}
  return getBias(coords.x);
}`;
          }
          e.getBiasForMatmul = l;
        }, 2403: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createPackProgramInfoLoader = void 0;
          const r = n(5060), i = n(2039), o = n(9390), a = n(2827), s = { name: "pack", inputNames: ["A"], inputTypes: [i.TextureType.unpackedReversed] };
          e.createPackProgramInfoLoader = (t2, e2) => Object.assign(Object.assign({}, s), { get: () => ((t3, e3) => {
            const n2 = (0, r.getGlsl)(t3.session.backend.glContext.version), u = e3.dims, c = u.length, l = e3.dims.length, p = (0, o.getCoordsDataType)(l), f = (0, a.getChannels)("rc", l), d = (h = l, g = f, b = u[u.length - 2], m = u[u.length - 1], 0 === h || 1 === h ? "" : `
    int r = ${g[h - 2]};
    int c = ${g[h - 1]};
    int rp1 = ${g[h - 2]} + 1;
    int cp1 = ${g[h - 1]} + 1;
    bool rEdge = rp1 >= ${m};
    bool cEdge = cp1 >= ${b};
    `);
            var h, g, b, m;
            let y;
            y = 0 === c ? [1, 1] : 1 === c ? [u[0], 1] : [u[l - 1], u[l - 2]];
            const _ = function(t4, e4, n3) {
              if (0 === t4)
                return "false";
              if (1 === t4)
                return `rc > ${e4[0]}`;
              let r2 = "";
              for (let i2 = t4 - 2; i2 < t4; i2++)
                r2 += `${n3[i2]} >= ${e4[i2 - t4 + 2]}`, i2 < t4 - 1 && (r2 += "||");
              return r2;
            }(l, y, f), v = function(t4, e4) {
              const n3 = t4.length;
              if (0 === n3)
                return "getA(), 0, 0, 0";
              if (1 === n3)
                return `getA(rc),
            rc + 1 >= ${t4[0]} ? 0. : getA(rc + 1),
            0, 0`;
              let r2 = "";
              if (n3 > 2)
                for (let t5 = 0; t5 < n3 - 2; ++t5)
                  r2 += `${e4[t5]},`;
              return `getA(${r2}r, c),
          rEdge ? 0. : getA(${r2}rp1, c),
          cEdge ? 0. : getA(${r2}r, cp1),
          rEdge || cEdge ? 0. : getA(${r2}rp1, cp1)`;
            }(u, f), w = `
        void main() {
          ${p} rc = getOutputCoords();

          if(${_}) {
            ${n2.output} = vec4(0);
          } else {
            ${d}

            ${n2.output} = vec4(${v});
          }
        }
      `;
            return Object.assign(Object.assign({}, s), { hasMain: true, output: { dims: e3.dims, type: e3.type, textureType: i.TextureType.packed }, shaderSource: w });
          })(t2, e2) });
        }, 2827: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.unpackFromChannel = e.getChannels = e.getVecChannels = void 0;
          const r = n(9390);
          function i(t2, e2) {
            return (0, r.getGlChannels)(e2).map((e3) => `${t2}.${e3}`);
          }
          e.getVecChannels = i, e.getChannels = function(t2, e2) {
            return 1 === e2 ? [t2] : i(t2, e2);
          }, e.unpackFromChannel = function() {
            return "\n    float getChannel(vec4 frag, int dim) {\n      int modCoord = imod(dim, 2);\n      return modCoord == 0 ? frag.r : frag.g;\n    }\n\n    float getChannel(vec4 frag, vec2 innerDims) {\n      vec2 modCoord = mod(innerDims, 2.);\n      return modCoord.x == 0. ?\n        (modCoord.y == 0. ? frag.r : frag.g) :\n        (modCoord.y == 0. ? frag.b : frag.a);\n    }\n  ";
          };
        }, 2870: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parsePadAttributesV11 = e.padV11 = e.parsePadAttributesV2 = e.padV2 = void 0;
          const r = n(246), i = n(2517), o = n(5060), a = n(2039), s = { name: "Pad", inputNames: ["A"], inputTypes: [a.TextureType.unpacked] };
          e.padV2 = (t2, e2, n2) => (l(e2), [t2.run(Object.assign(Object.assign({}, s), { cacheHint: n2.cacheKey, get: () => c(t2, e2[0], n2) }), e2)]), e.parsePadAttributesV2 = (t2) => {
            const e2 = t2.attributes.getString("mode", "constant"), n2 = t2.attributes.getFloat("value", 0), i2 = t2.attributes.getInts("pads");
            return (0, r.createAttributeWithCacheKey)({ mode: e2, value: n2, pads: i2 });
          }, e.padV11 = (t2, n2, r2) => {
            p(n2);
            const i2 = u(t2, n2, r2);
            return (0, e.padV2)(t2, [n2[0]], i2);
          }, e.parsePadAttributesV11 = (t2) => t2.attributes.getString("mode", "constant");
          const u = (t2, e2, n2) => {
            if (!t2.session.isInitializer(e2[1].dataId) || e2.length >= 3 && !t2.session.isInitializer(e2[2].dataId))
              throw new Error("dynamic pad attributes are not allowed");
            const i2 = Array.from(e2[1].integerData), o2 = e2.length >= 3 ? e2[2].floatData[0] : 0;
            return (0, r.createAttributeWithCacheKey)({ mode: n2, pads: i2, value: o2 });
          }, c = (t2, e2, n2) => {
            const r2 = i.ShapeUtil.padShape(e2.dims.slice(), n2.pads), o2 = r2.length, s2 = `
      ${f(t2, e2, n2)}
      float process(int[${o2}] indices) {
          return padA(indices);
      }`;
            return { name: "Pad", inputNames: ["A"], inputTypes: [a.TextureType.unpacked], output: { dims: r2, type: e2.type, textureType: a.TextureType.unpacked }, shaderSource: s2 };
          }, l = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Pad requires 1 input");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type)
              throw new Error("Invalid input type.");
          }, p = (t2) => {
            if (!t2 || 2 !== t2.length && 3 !== t2.length)
              throw new Error("Pad requires 2 or 3 inputs");
            if ("int32" !== t2[1].type)
              throw new Error("Invalid input type.");
            if (t2.length >= 3 && "string" === t2[2].type)
              throw new Error("Invalid input type.");
          }, f = (t2, e2, n2) => {
            const r2 = (0, o.getGlsl)(t2.session.backend.glContext.version), [s2, u2] = t2.calculateTextureWidthAndHeight(e2.dims, a.TextureType.unpacked), c2 = i.ShapeUtil.computeStrides(e2.dims);
            switch (n2.mode) {
              case "constant":
                return d(r2, e2.dims, c2, s2, u2, n2.pads, n2.value);
              case "reflect":
                return h(r2, e2.dims, c2, s2, u2, n2.pads);
              case "edge":
                return g(r2, e2.dims, c2, s2, u2, n2.pads);
              default:
                throw new Error("Invalid mode");
            }
          }, d = (t2, e2, n2, r2, i2, o2, a2) => {
            const s2 = e2.length;
            let u2 = "";
            for (let t3 = s2 - 1; t3 >= 0; --t3)
              u2 += `
        k = m[${t3}] - ${o2[t3]};
        if (k < 0)  return constant;
        if (k >= ${e2[t3]}) return constant;
        offset += k * ${n2[t3]};
        `;
            return `
      float padA(int m[${s2}]) {
        const float constant = float(${a2});
        int offset = 0;
        int k = 0;
        ${u2}
        vec2 coords = offsetToCoords(offset, ${r2}, ${i2});
        float value = getColorAsFloat(${t2.texture2D}(A, coords));
        return value;
      }
      `;
          }, h = (t2, e2, n2, r2, i2, o2) => {
            const a2 = e2.length;
            let s2 = "";
            for (let t3 = a2 - 1; t3 >= 0; --t3)
              s2 += `
        k = m[${t3}] - ${o2[t3]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2 * (e2[t3] - 1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${e2[t3]}) { k = _2n_1 - k; }
        }
        offset += k * ${n2[t3]};
        `;
            return `
      float padA(int m[${a2}]) {
        int offset = 0;
        int k = 0;
        ${s2}
        vec2 coords = offsetToCoords(offset, ${r2}, ${i2});
        float value = getColorAsFloat(${t2.texture2D}(A, coords));
        return value;
      }
      `;
          }, g = (t2, e2, n2, r2, i2, o2) => {
            const a2 = e2.length;
            let s2 = "";
            for (let t3 = a2 - 1; t3 >= 0; --t3)
              s2 += `
        k = m[${t3}] - ${o2[t3]};
        if (k < 0)  k = 0;
        if (k >= ${e2[t3]}) k = ${e2[t3] - 1};
        offset += k * ${n2[t3]};
      `;
            return `
      float padA(int m[${a2}]) {
        int offset = 0;
        int k = 0;
        ${s2}
        vec2 coords = offsetToCoords(offset, ${r2}, ${i2});
        float value = getColorAsFloat(${t2.texture2D}(A, coords));
        return value;
      }
      `;
          };
        }, 2143: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.globalMaxPool = e.parseMaxPoolAttributes = e.maxPool = e.parseGlobalAveragePoolAttributes = e.globalAveragePool = e.parseAveragePoolAttributes = e.averagePool = void 0;
          const r = n(246), i = n(2517), o = n(2039);
          e.averagePool = (t2, e2, n2) => {
            p(e2);
            const r2 = { name: "AveragePool", inputNames: ["X"], inputTypes: [o.TextureType.unpacked], cacheHint: n2.cacheKey };
            return [t2.run(Object.assign(Object.assign({}, r2), { get: () => a(e2, r2, false, n2) }), e2)];
          }, e.parseAveragePoolAttributes = (t2) => {
            const e2 = t2.attributes.getString("auto_pad", "NOTSET"), n2 = t2.attributes.getInt("ceil_mode", 0), i2 = 0 !== t2.attributes.getInt("count_include_pad", 0), o2 = t2.attributes.getInts("kernel_shape"), a2 = t2.attributes.getInts("strides", []), s2 = t2.attributes.getInts("pads", []);
            if (0 !== n2)
              throw new Error("using ceil() in shape computation is not yet supported for AveragePool");
            return (0, r.createAttributeWithCacheKey)({ autoPad: e2, ceilMode: n2, countIncludePad: i2, kernelShape: o2, strides: a2, pads: s2 });
          };
          const a = (t2, e2, n2, r2) => {
            const [a2, s2] = u(t2, r2, n2), c2 = i.ShapeUtil.size(a2.kernelShape);
            let l2 = "";
            a2.countIncludePad ? l2 += `value /= float(${c2});` : l2 += `value /= float(${c2} - pad);`;
            const p2 = `
        ${f(t2[0].dims, a2, "value += _X(x);", l2, "0.0")}
      `;
            return Object.assign(Object.assign({}, e2), { output: { dims: s2, type: t2[0].type, textureType: o.TextureType.unpacked }, shaderSource: p2 });
          };
          e.globalAveragePool = (t2, e2, n2) => {
            p(e2);
            const r2 = { name: "GlobalAveragePool", inputNames: ["X"], inputTypes: [o.TextureType.unpacked], cacheHint: `${n2.countIncludePad}` };
            return [t2.run(Object.assign(Object.assign({}, r2), { get: () => a(e2, r2, true, n2) }), e2)];
          }, e.parseGlobalAveragePoolAttributes = (t2) => {
            const e2 = 0 !== t2.attributes.getInt("count_include_pad", 0);
            return (0, r.createAttributeWithCacheKey)({ autoPad: "", ceilMode: 0, countIncludePad: e2, kernelShape: [], strides: [], pads: [] });
          }, e.maxPool = (t2, e2, n2) => {
            p(e2);
            const r2 = { name: "MaxPool", inputNames: ["X"], inputTypes: [o.TextureType.unpacked], cacheHint: n2.cacheKey };
            return [t2.run(Object.assign(Object.assign({}, r2), { get: () => s(e2, r2, false, n2) }), e2)];
          }, e.parseMaxPoolAttributes = (t2) => {
            const e2 = t2.attributes.getString("auto_pad", "NOTSET"), n2 = t2.attributes.getInt("ceil_mode", 0), i2 = t2.attributes.getInts("kernel_shape"), o2 = t2.attributes.getInts("strides", []), a2 = t2.attributes.getInts("pads", []), s2 = t2.attributes.getInt("storage_order", 0), u2 = t2.attributes.getInts("dilations", []);
            if (0 !== s2)
              throw new Error("column major storage order is not yet supported for MaxPool");
            if (0 !== n2)
              throw new Error("using ceil() in shape computation is not yet supported for MaxPool");
            return (0, r.createAttributeWithCacheKey)({ autoPad: e2, ceilMode: n2, countIncludePad: false, kernelShape: i2, strides: o2, pads: a2, storageOrder: s2, dilations: u2 });
          };
          const s = (t2, e2, n2, r2) => {
            const [i2, a2] = u(t2, r2, n2), s2 = `
      ${f(t2[0].dims, i2, "\n      value = max(_X(x), value);\n    ", "", "-1e5")}
    `;
            return Object.assign(Object.assign({}, e2), { output: { dims: a2, type: t2[0].type, textureType: o.TextureType.unpacked }, shaderSource: s2 });
          }, u = (t2, e2, n2) => {
            const r2 = t2[0].dims.slice(), o2 = Object.hasOwnProperty.call(e2, "dilations"), a2 = e2.kernelShape.slice(), s2 = e2.strides.slice(), u2 = o2 ? e2.dilations.slice() : [], c2 = e2.pads.slice();
            i.PoolConvUtil.adjustPoolAttributes(n2, r2, a2, s2, u2, c2);
            const l2 = i.PoolConvUtil.computePoolOutputShape(n2, r2, s2, u2, a2, c2, e2.autoPad), p2 = Object.assign({}, e2);
            return o2 ? Object.assign(p2, { kernelShape: a2, strides: s2, pads: c2, dilations: u2, cacheKey: e2.cacheKey }) : Object.assign(p2, { kernelShape: a2, strides: s2, pads: c2, cacheKey: e2.cacheKey }), [p2, l2];
          }, c = { autoPad: "", ceilMode: 0, countIncludePad: false, kernelShape: [], strides: [], pads: [], storageOrder: 0, dilations: [], cacheKey: "" }, l = { name: "GlobalMaxPool", inputNames: ["X"], inputTypes: [o.TextureType.unpacked] };
          e.globalMaxPool = (t2, e2) => (p(e2), [t2.run(Object.assign(Object.assign({}, l), { get: () => s(e2, l, true, c) }), e2)]);
          const p = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Pool ops requires 1 input.");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type)
              throw new Error("Invalid input type.");
          }, f = (t2, e2, n2, r2, o2) => {
            const a2 = t2.length;
            if (e2.kernelShape.length <= 2) {
              const i2 = e2.kernelShape[e2.kernelShape.length - 1], s2 = e2.strides[e2.strides.length - 1], u2 = e2.pads[e2.pads.length / 2 - 1], c2 = e2.pads[e2.pads.length - 1], l2 = t2[a2 - 1];
              let p2 = "", f2 = "", d2 = "";
              if (p2 = u2 + c2 !== 0 ? `
          for (int i = 0; i < ${i2}; i++) {
            x[${a2} - 1] = indices[${a2} - 1] * ${s2} - ${u2} + i;
            if (x[${a2} - 1] < 0 || x[${a2} - 1] >= ${l2}) {
              pad++;
              continue;
            }
            ${n2}
          }` : `
          for (int i = 0; i < ${i2}; i++) {
            x[${a2} - 1] = indices[${a2} - 1] * ${s2} - ${u2} + i;
            ${n2}
          }`, 2 === e2.kernelShape.length) {
                const n3 = e2.kernelShape[e2.kernelShape.length - 2], r3 = e2.strides[e2.strides.length - 2], o3 = e2.pads[e2.pads.length / 2 - 2], s3 = e2.pads[e2.pads.length - 2], u3 = t2[a2 - 2];
                f2 = o3 + s3 !== 0 ? `
            for (int j = 0; j < ${n3}; j++) {
              x[${a2} - 2] = indices[${a2} - 2] * ${r3} - ${o3} + j;
              if (x[${a2} - 2] < 0 || x[${a2} - 2] >= ${u3}) {
                pad+= ${i2};
                continue;
              }
          ` : `
            for (int j = 0; j < ${n3}; j++) {
              x[${a2} - 2] = indices[${a2} - 2] * ${r3} - ${o3} + j;
            `, d2 = "\n          }\n        ";
              }
              return `
        float process(int indices[${a2}]) {
          int x[${a2}];
          copyVec(indices, x);

          float value = ${o2};
          int pad = 0;
          ${f2}
          ${p2}
          ${d2}
          ${r2}
          return value;
        }
      `;
            }
            {
              const s2 = i.ShapeUtil.size(e2.kernelShape), u2 = i.ShapeUtil.computeStrides(e2.kernelShape), c2 = u2.length, l2 = e2.pads.length, p2 = h(c2), f2 = d(t2, "inputDims"), g = d(e2.pads, "pads"), b = d(u2, "kernelStrides"), m = d(e2.strides, "strides");
              let y = "";
              return y = e2.pads.reduce((t3, e3) => t3 + e3) ? `
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${n2}
          }` : `
          }
          ${n2}
        `, `
        ${p2}
        float process(int indices[${a2}]) {
          int x[${a2}];
          copyVec(indices, x);
          int offset[${c2}];
          int pads[${l2}];
          int inputDims[${a2}];
          int kernelStrides[${c2}];
          int strides[${c2}];
          ${g}
          ${f2}
          ${m}
          ${b}

          float value = ${o2};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${s2}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${a2} - ${c2}; j < ${a2}; j++) {
              x[j] = indices[j] * strides[j - ${a2} + ${c2}]
                + offset[j - ${a2} + ${c2}] - pads[j - 2];
              ${y}
          }
          ${r2}

          return value;
        }
      `;
            }
          }, d = (t2, e2) => {
            let n2 = "";
            for (let r2 = 0; r2 < t2.length; r2++)
              n2 += `
      ${e2}[${r2}] = ${t2[r2]};
    `;
            return n2;
          }, h = (t2) => `
  void offsetToIndices(int offset, int[${t2}] strides, out int[${t2}] indices) {
    if (${t2} == 0) {
      return;
    }
    for (int i = 0; i < ${t2} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${t2} - 1] = offset;
  }`;
        }, 4939: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.reduceLogSumSquare = e.reduceLogSum = e.reduceProd = e.reduceMin = e.reduceMax = e.reduceMean = e.reduceSum = e.parseReduceAttributes = void 0;
          const r = n(246), i = n(782), o = n(2517), a = n(2039), s = (t2, e2, n2, r2, i2) => {
            c(e2);
            const o2 = { name: r2, inputNames: ["A"], inputTypes: [a.TextureType.unpacked] };
            return [t2.run(Object.assign(Object.assign({}, o2), { cacheHint: n2.cacheKey, get: () => u(t2, e2, n2, r2, i2, o2) }), e2)];
          };
          e.parseReduceAttributes = (t2) => {
            const e2 = t2.attributes.getInts("axes", []), n2 = 1 === t2.attributes.getInt("keepdims", 1);
            return (0, r.createAttributeWithCacheKey)({ axes: e2, keepDims: n2 });
          };
          const u = (t2, e2, n2, r2, i2, s2) => {
            const u2 = [], c2 = e2[0].dims.length || 1, l = [], p = o.ShapeUtil.normalizeAxes(n2.axes, e2[0].dims.length), f = i2(e2, p);
            let d = f[1];
            for (let t3 = 0; t3 < e2[0].dims.length; t3++)
              p.indexOf(t3) >= 0 || 0 === p.length ? (n2.keepDims && u2.push(1), d = `
          for(int j${t3} = 0; j${t3} < ${e2[0].dims[t3]}; j${t3}++) {
            inputIdx[${t3}] = j${t3};
            ${d}
          }`) : (l.push(`inputIdx[${t3}] = outputIdx[${u2.length}];`), u2.push(e2[0].dims[t3]));
            const h = `
      float process(int outputIdx[${u2.length || 1}]) {
        float value;                 // final result
        int inputIdx[${c2}];      // addressing input data
        ${l.join("\n")}
        ${f[0]}       // init ops for reduce max/min
        ${d}
        ${f[2]}       // final computation for reduce mean
        return value;
      }`;
            return Object.assign(Object.assign({}, s2), { output: { dims: u2, type: e2[0].type, textureType: a.TextureType.unpacked }, shaderSource: h });
          }, c = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Reduce op requires 1 input.");
            if (-1 === i.NUMBER_TYPES.indexOf(t2[0].type))
              throw new Error("Invalid input type.");
          };
          e.reduceSum = (t2, e2, n2) => s(t2, e2, n2, "ReduceSum", () => ["value = 0.0;", "value += _A(inputIdx);", ""]), e.reduceMean = (t2, e2, n2) => s(t2, e2, n2, "ReduceMean", (t3, e3) => {
            let n3 = 1;
            for (let r2 = 0; r2 < t3[0].dims.length; r2++)
              (e3.indexOf(r2) >= 0 || 0 === e3.length) && (n3 *= t3[0].dims[r2]);
            return ["value = 0.0;", "value += _A(inputIdx);", `value /= ${n3}.;`];
          }), e.reduceMax = (t2, e2, n2) => s(t2, e2, n2, "ReduceMax", (t3, e3) => {
            const n3 = [];
            for (let r2 = 0; r2 < t3[0].dims.length; r2++)
              (e3.indexOf(r2) >= 0 || 0 === e3.length) && n3.push(`inputIdx[${r2}] = 0;`);
            return [`${n3.join("\n")}
value = _A(inputIdx);`, "value = max(value, _A(inputIdx));", ""];
          }), e.reduceMin = (t2, e2, n2) => s(t2, e2, n2, "ReduceMin", (t3, e3) => {
            const n3 = [];
            for (let r2 = 0; r2 < t3[0].dims.length; r2++)
              (e3.indexOf(r2) >= 0 || 0 === e3.length) && n3.push(`inputIdx[${r2}] = 0;`);
            return [`${n3.join("\n")}
value = _A(inputIdx);`, "value = min(value, _A(inputIdx));", ""];
          }), e.reduceProd = (t2, e2, n2) => s(t2, e2, n2, "ReduceProd", () => ["value = 1.0;", "value *= _A(inputIdx);", ""]), e.reduceLogSum = (t2, e2, n2) => s(t2, e2, n2, "ReduceLogSum", () => ["value = 0.0;", "value += _A(inputIdx);", "value = log(value);"]), e.reduceLogSumSquare = (t2, e2, n2) => s(t2, e2, n2, "ReduceLogSumSquare", () => ["float t; value = 0.0;", "t = _A(inputIdx); value += t * t;", ""]);
        }, 7019: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.isReshapeCheap = e.processDims3D = e.createPackedReshape3DProgramInfoLoader = void 0;
          const r = n(2517), i = n(5060), o = n(2039), a = n(2827);
          e.createPackedReshape3DProgramInfoLoader = (t2, e2, n2) => {
            const s = ((t3) => ({ name: "Reshape (packed)", inputTypes: [o.TextureType.packed], inputNames: ["A"], cacheHint: `${t3}` }))(n2);
            return Object.assign(Object.assign({}, s), { get: () => ((t3, e3, n3, s2) => {
              const u = e3.dims, c = s2;
              let l = "";
              for (let t4 = 0; t4 < 4; t4++) {
                let e4 = "";
                switch (t4) {
                  case 0:
                    e4 = "outputCoords = rc;";
                    break;
                  case 1:
                    e4 = "outputCoords = ivec3(rc.x, rc.y+1, rc.z);";
                    break;
                  case 2:
                    e4 = "outputCoords = ivec3(rc.x, rc.y, rc.z+1);";
                    break;
                  case 3:
                    e4 = "outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";
                    break;
                  default:
                    throw new Error();
                }
                l += `
        ${e4}
        ${t4 > 0 ? "if(outputCoords.y < rows && outputCoords.z < cols){" : ""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${t4}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${t4 > 0 ? "}" : ""}
      `;
              }
              const p = (0, i.getGlsl)(t3.session.backend.glContext.version), f = `
      ${function(t4) {
                const e4 = r.ShapeUtil.computeStrides(t4), n4 = ["b", "r", "c"], i2 = "index";
                return `
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e4.map((t5, r2) => `int ${n4[r2]} = ${i2} / ${t5}; ${r2 === e4.length - 1 ? `int ${n4[r2 + 1]} = ${i2} - ${n4[r2]} * ${t5}` : `index -= ${n4[r2]} * ${t5}`};`).join("")}
      return ivec3(b, r, c);
    }
  `;
              }(u)}
      ${function(t4) {
                const e4 = r.ShapeUtil.computeStrides(t4);
                return `
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${e4[0]} + coords.z * ${e4[1]} + coords.y;
  }
`;
              }(c)}
      ${(0, a.unpackFromChannel)()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${c[2]};
        int cols = ${c[1]};

        ${l}
        ${p.output} = result;
      }
    `;
              return Object.assign(Object.assign({}, n3), { output: { dims: c, type: e3.type, textureType: o.TextureType.packed }, shaderSource: f, hasMain: true });
            })(t2, e2, s, n2) });
          }, e.processDims3D = function(t2) {
            if (0 === t2.length)
              return [1, 1, 1];
            let e2 = 1;
            for (let n2 = 0; n2 < t2.length - 2; ++n2)
              e2 *= t2[n2];
            return [e2, t2.length > 1 ? t2[t2.length - 2] : 1, t2[t2.length - 1]];
          }, e.isReshapeCheap = function(t2, e2) {
            let n2 = false;
            return n2 = 0 === t2.length || 0 === e2.length || (t2.length < 2 || e2.length < 2 ? t2[t2.length - 1] === e2[e2.length - 1] : t2[t2.length - 1] === e2[e2.length - 1] && t2[t2.length - 2] === e2[e2.length - 2]), n2;
          };
        }, 718: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.reshape = void 0;
          const r = n(2517);
          e.reshape = (t2, e2) => {
            const n2 = r.ShapeUtil.calculateReshapedDims(e2[0].dims, e2[1].integerData);
            return t2.session.pack ? [t2.reshapePacked(e2[0], n2)] : [t2.reshapeUnpacked(e2[0], n2)];
          };
        }, 2268: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseResizeAttributesV11 = e.parseResizeAttributesV10 = e.resize = void 0;
          const r = n(5060), i = n(2039), o = n(9390), a = n(2827), s = n(9793), u = { name: "Resize", inputNames: ["A"], inputTypes: [i.TextureType.packed] };
          e.resize = (t2, e2, n2) => ((0, s.validateInputs)(e2, n2), [t2.run(Object.assign(Object.assign({}, u), { cacheHint: n2.cacheKey, get: () => c(t2, e2, n2) }), e2)]), e.parseResizeAttributesV10 = (t2) => (0, s.parseUpsampleAttributes)(t2, 10), e.parseResizeAttributesV11 = (t2) => (0, s.parseUpsampleAttributes)(t2, 11);
          const c = (t2, e2, n2) => {
            const s2 = (0, r.getGlsl)(t2.session.backend.glContext.version), [c2, p2] = l(e2, n2);
            if (c2.every((t3) => 1 === t3) && "tf_crop_and_resize" !== n2.coordinateTransformMode)
              return Object.assign(Object.assign({}, u), { output: { dims: p2, type: e2[0].type, textureType: i.TextureType.packed }, hasMain: true, shaderSource: `void main() {
                    vec4 v = ${s2.texture2D}(X, TexCoords);
                    ${s2.output} = v;
                }` });
            const f2 = p2.length;
            if (f2 < 2)
              throw new Error(`output dimension should be at least 2, but got ${f2}`);
            const d = p2[f2 - 2], h = p2[f2 - 1], g = e2[0].dims;
            if (f2 !== g.length)
              throw new Error(`output dimension should match input ${g.length}, but got ${f2}`);
            const b = g[f2 - 2], m = g[f2 - 1], y = c2[f2 - 2], _ = c2[f2 - 1];
            let v = "";
            if ("linear" !== n2.mode)
              throw new Error(`resize (packed) does not support mode: '${n2.mode}'`);
            switch (n2.coordinateTransformMode) {
              case "asymmetric":
                v = "\n                    vec4 getSourceFracIndex(ivec4 coords) {\n                        return vec4(coords) / scaleWHWH;\n                    }\n                ";
                break;
              case "half_pixel":
                v = "\n                    vec4 getSourceFracIndex(ivec4 coords) {\n                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;\n                    }\n                ";
                break;
              case "pytorch_half_pixel":
                v = `
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${h}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${h}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;
                break;
              case "align_corners":
                v = `
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${h}.0 - 1.0, ${d}.0 - 1.0, ${h}.0 - 1.0,
                            ${d}.0 - 1.0);
                        vec4 original = vec4(${m}.0 - 1.0, ${b}.0 - 1.0, ${m}.0 - 1.0,
                            ${b}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;
                break;
              default:
                throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${n2.coordinateTransformMode}'`);
            }
            const w = (0, o.getCoordsDataType)(f2), x = `
            const vec2 inputWH = vec2(${b}.0, ${m}.0);
            const vec4 scaleWHWH = vec4(float(${y}), float(${_}), float(${y}), float(${_}));
            ${(0, a.unpackFromChannel)()}
            ${v}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${w} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${d - 1};
                bool hasNextCol = rc.z < ${h - 1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${s2.output} = vec4(newValue);
            }
        `;
            return Object.assign(Object.assign({}, u), { output: { dims: p2, type: e2[0].type, textureType: i.TextureType.packed }, hasMain: true, shaderSource: x });
          }, l = (t2, e2) => {
            const n2 = t2[0].dims;
            let r2, i2 = e2.scales;
            if (0 === i2.length) {
              const o3 = t2[e2.scalesInputIdx];
              if (o3 && 0 !== o3.size) {
                if (t2[e2.sizesInputIdx])
                  throw new Error("Only one of scales or sizes must be provided as input.");
                i2 = p(o3, e2.mode, e2.isResize);
              } else {
                const o4 = t2[e2.sizesInputIdx];
                if (!o4 || 0 === o4.size)
                  throw new Error("Either scales or sizes MUST be provided as input.");
                r2 = Array.from(o4.integerData), i2 = f(r2, n2, e2.mode, e2.isResize);
              }
            } else if (t2[e2.sizesInputIdx])
              throw new Error("Only one of scales or sizes must be provided as input.");
            const o2 = r2 || n2.map((t3, e3) => Math.floor(t3 * i2[e3]));
            return [i2, o2];
          }, p = (t2, e2, n2) => {
            const r2 = Array.from(t2.floatData);
            return (0, s.scalesValidation)(r2, e2, n2), r2;
          }, f = (t2, e2, n2, r2) => {
            const i2 = e2.length, o2 = new Array(i2);
            for (let n3 = 0, r3 = i2; n3 < r3; n3++)
              if (0 === e2[n3]) {
                if (0 !== t2[n3])
                  throw new Error("Input dim is zero but required output dim is non-zero.");
                o2[n3] = 1;
              } else
                o2[n3] = t2[n3] / e2[n3];
            return (0, s.scalesValidation)(o2, n2, r2), o2;
          };
        }, 8117: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.shape = void 0;
          const r = n(9162);
          e.shape = (t2, e2) => (i(e2), [new r.Tensor([e2[0].dims.length], "int32", void 0, void 0, new Int32Array(e2[0].dims))]);
          const i = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Shape requires 1 input.");
          };
        }, 2278: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.sliceV10 = e.parseSliceAttributes = e.slice = void 0;
          const r = n(246), i = n(782), o = n(2517), a = n(2039), s = { name: "Slice", inputNames: ["A"], inputTypes: [a.TextureType.unpacked] };
          e.slice = (t2, e2, n2) => (c(e2), [t2.run(Object.assign(Object.assign({}, s), { cacheHint: n2.cacheKey, get: () => u(t2, e2[0], n2) }), e2)]), e.parseSliceAttributes = (t2) => {
            const e2 = t2.attributes.getInts("starts"), n2 = t2.attributes.getInts("ends"), i2 = t2.attributes.getInts("axes", []);
            return (0, r.createAttributeWithCacheKey)({ starts: e2, ends: n2, axes: i2 });
          };
          const u = (t2, e2, n2) => {
            const r2 = 0 === n2.axes.length ? e2.dims.slice(0).map((t3, e3) => e3) : n2.axes, i2 = o.ShapeUtil.normalizeAxes(r2, e2.dims.length), u2 = n2.starts.map((t3, n3) => t3 > e2.dims[i2[n3]] - 1 ? e2.dims[i2[n3]] : o.ShapeUtil.normalizeAxis(t3, e2.dims[i2[n3]])), c2 = n2.ends.map((t3, n3) => t3 > e2.dims[i2[n3]] - 1 ? e2.dims[i2[n3]] : o.ShapeUtil.normalizeAxis(t3, e2.dims[i2[n3]])), l2 = e2.dims.slice(), p2 = [];
            for (let t3 = 0; t3 < i2.length; t3++)
              l2[i2[t3]] = c2[t3] - u2[t3], u2[t3] > 0 && p2.push(`outputIdx[${i2[t3]}] += ${u2[t3]};`);
            const f = `
      float process(int outputIdx[${l2.length}]) {
        ${p2.join("\n      ")}
        return _A(outputIdx);
      }`;
            return Object.assign(Object.assign({}, s), { output: { dims: l2, type: e2.type, textureType: a.TextureType.unpacked }, shaderSource: f });
          }, c = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Slice requires 1 input.");
            if (-1 === i.NUMBER_TYPES.indexOf(t2[0].type))
              throw new Error("Invalid input type.");
          };
          e.sliceV10 = (t2, e2) => {
            p(e2);
            const n2 = l(t2, e2);
            return [t2.run(Object.assign(Object.assign({}, s), { cacheHint: n2.cacheKey, get: () => u(t2, e2[0], n2) }), [e2[0]])];
          };
          const l = (t2, e2) => {
            if (!t2.session.isInitializer(e2[1].dataId) || !t2.session.isInitializer(e2[2].dataId) || e2.length >= 4 && !t2.session.isInitializer(e2[3].dataId) || e2.length >= 5 && !t2.session.isInitializer(e2[4].dataId))
              throw new Error("dynamic slice attributes are not allowed");
            if (e2.length >= 5 && e2[4].integerData.some((t3) => 1 !== t3))
              throw new Error("currently non-1 steps is not supported for Slice");
            const n2 = Array.from(e2[1].integerData), r2 = Array.from(e2[2].integerData), i2 = e2.length >= 4 ? Array.from(e2[3].integerData) : [];
            return { starts: n2, ends: r2, axes: i2, cacheKey: `${i2};${n2};${r2}` };
          }, p = (t2) => {
            if (!t2 || t2.length < 3 || t2.length > 5)
              throw new Error("Invalid input number.");
            if ("int32" !== t2[1].type || 1 !== t2[1].dims.length)
              throw new Error("Invalid input type.");
            if ("int32" !== t2[2].type || 1 !== t2[2].dims.length)
              throw new Error("Invalid input type.");
            if (t2.length >= 4 && ("int32" !== t2[3].type || 1 !== t2[3].dims.length))
              throw new Error("Invalid input type.");
            if (t2.length >= 5 && ("int32" !== t2[4].type || 1 !== t2[4].dims.length))
              throw new Error("Invalid input type.");
          };
        }, 5524: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.softmaxV13 = e.parseSoftmaxAttributesV13 = e.parseSoftmaxAttributes = e.softmax = void 0;
          const r = n(246), i = n(2517), o = n(5060), a = n(2039), s = n(3738), u = { name: "SoftmaxComputeMax", inputNames: ["A"], inputTypes: [a.TextureType.unpacked] }, c = { name: "SoftmaxComputeScale", inputNames: ["A", "Max"], inputTypes: [a.TextureType.unpacked, a.TextureType.unpacked] }, l = { name: "SoftMax", inputNames: ["A", "Max", "Norm"], inputTypes: [a.TextureType.unpacked, a.TextureType.unpacked, a.TextureType.unpacked] };
          e.softmax = (t2, e2, n2) => {
            g(e2);
            const r2 = e2[0].dims.slice(), o2 = i.ShapeUtil.normalizeAxis(n2.axis, r2.length), a2 = i.ShapeUtil.sizeToDimension(r2, o2), s2 = i.ShapeUtil.sizeFromDimension(r2, o2);
            return p(t2, e2, n2, a2, s2);
          }, e.parseSoftmaxAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ axis: t2.attributes.getInt("axis", 1) }), e.parseSoftmaxAttributesV13 = (t2) => (0, r.createAttributeWithCacheKey)({ axis: t2.attributes.getInt("axis", -1) }), e.softmaxV13 = (t2, e2, n2) => {
            g(e2);
            const o2 = e2[0].dims.slice(), a2 = i.ShapeUtil.normalizeAxis(n2.axis, o2.length), u2 = o2.length, c2 = a2 !== u2 - 1, l2 = [];
            let f2, d2 = [], h2 = [];
            c2 && (d2 = Array.from({ length: u2 }).map((t3, e3) => e3), d2[a2] = u2 - 1, d2[u2 - 1] = a2, d2.map((t3) => l2.push(o2[t3])), f2 = (0, r.createAttributeWithCacheKey)({ perm: d2 }), h2 = (0, s.transpose)(t2, e2, f2));
            const b = c2 ? i.ShapeUtil.sizeToDimension(l2, u2 - 1) : i.ShapeUtil.sizeToDimension(o2, u2 - 1), m = c2 ? i.ShapeUtil.sizeFromDimension(l2, u2 - 1) : i.ShapeUtil.sizeFromDimension(o2, u2 - 1), y = p(t2, c2 ? h2 : e2, n2, b, m);
            return c2 ? (0, s.transpose)(t2, y, f2) : y;
          };
          const p = (t2, e2, n2, r2, i2) => {
            const o2 = f(t2, e2[0], r2, i2, [r2]), a2 = t2.run(Object.assign(Object.assign({}, u), { cacheHint: n2.cacheKey, get: () => o2 }), e2), s2 = d(t2, e2[0], r2, i2, o2.output.dims, [r2]), p2 = t2.run(Object.assign(Object.assign({}, c), { cacheHint: n2.cacheKey, get: () => s2 }), [e2[0], a2]), g2 = h(t2, e2[0], r2, i2, o2.output.dims, s2.output.dims);
            return [t2.run(Object.assign(Object.assign({}, l), { cacheHint: n2.cacheKey, get: () => g2 }), [e2[0], a2, p2])];
          }, f = (t2, e2, n2, r2, i2) => {
            const [s2, c2] = t2.calculateTextureWidthAndHeight(e2.dims, a.TextureType.unpacked), l2 = i2.length;
            if (n2 < 1 || r2 < 1)
              throw new Error("Logical row count N and feature count D must be greater than or equal to 1");
            if (1 !== i2.length)
              throw new Error("Dimensionality of the output should be 1");
            if (i2[0] !== n2)
              throw new Error("Shape of the output should be equal to logical row count");
            const p2 = (0, o.getGlsl)(t2.session.backend.glContext.version), f2 = `
      float process(int[${l2}] indices) {
        int logical_row_start_offset = indices[0] * ${r2};

        float max = getColorAsFloat(${p2.texture2D}(A, offsetToCoords(logical_row_start_offset, ${s2},
        ${c2} )));
        for(int i=1; i<${r2}; ++i)
        {
          float current = getColorAsFloat(${p2.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${s2}, ${c2})));
          if(current > max)
          max = current;
        }

        return max;
      }`;
            return Object.assign(Object.assign({}, u), { output: { dims: i2, type: e2.type, textureType: a.TextureType.unpacked }, shaderSource: f2 });
          }, d = (t2, e2, n2, r2, i2, s2) => {
            const [u2, l2] = t2.calculateTextureWidthAndHeight(e2.dims, a.TextureType.unpacked), p2 = s2.length;
            if (n2 < 1 || r2 < 1)
              throw new Error("Logical row count N and feature count D must be greater than or equal to 1");
            if (1 !== s2.length)
              throw new Error("Dimensionality of the output should be 1");
            if (s2[0] !== n2)
              throw new Error("Shape of the output should be equal to logical row count");
            if (1 !== i2.length)
              throw new Error("Dimensionality of the intermediate results should be 1");
            if (i2[0] !== n2)
              throw new Error("Shape of the intermediate results should be equal to logical row count");
            const f2 = `
      float process(int[${p2}] indices) {
        int logical_row_start_offset = indices[0] * ${r2};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${r2}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${(0, o.getGlsl)(t2.session.backend.glContext.version).texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${u2}, ${l2}))) - max);
        }

        return norm_factor;
      }`;
            return Object.assign(Object.assign({}, c), { output: { dims: s2, type: e2.type, textureType: a.TextureType.unpacked }, shaderSource: f2 });
          }, h = (t2, e2, n2, r2, i2, o2) => {
            const [s2, u2] = t2.calculateTextureWidthAndHeight(e2.dims, a.TextureType.unpacked), c2 = e2.dims.length;
            if (n2 < 1 || r2 < 1)
              throw new Error("Logical row count N and feature count D must be greater than or equal to 1");
            if (1 !== i2.length || 1 !== o2.length)
              throw new Error("Dimensionality of the intermediate results should be 1");
            if (i2[0] !== n2 || o2[0] !== n2)
              throw new Error("Shape of the intermediate results should be equal to logical row count");
            const p2 = `
      float process(int[${c2}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${s2}, ${u2});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${r2};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;
            return Object.assign(Object.assign({}, l), { output: { dims: e2.dims, type: e2.type, textureType: a.TextureType.unpacked }, shaderSource: p2 });
          }, g = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Softmax requires 1 input.");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type)
              throw new Error("Invalid input type");
          };
        }, 5975: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseSplitAttributes = e.split = void 0;
          const r = n(246), i = n(2517), o = n(2039), a = { name: "Split", inputNames: ["A"], inputTypes: [o.TextureType.unpacked] };
          e.split = (t2, e2, n2) => {
            c(e2);
            const r2 = i.ShapeUtil.normalizeAxis(n2.axis, e2[0].dims.length), o2 = s(t2, e2, r2, n2), l = [];
            for (let i2 = 0; i2 < o2; ++i2)
              l.push(t2.run(Object.assign(Object.assign({}, a), { cacheHint: `${n2.cacheKey};${i2}`, get: () => u(t2, e2[0], n2, r2, i2) }), e2));
            return l;
          }, e.parseSplitAttributes = (t2) => {
            const e2 = t2.attributes.getInt("axis", 0), n2 = t2.attributes.getInts("split", []), i2 = t2.outputs.length;
            return (0, r.createAttributeWithCacheKey)({ axis: e2, split: n2, numOutputs: i2 });
          };
          const s = (t2, e2, n2, r2) => {
            const [, o2] = i.SplitUtil.splitShape(e2[0].dims, n2, r2.split, r2.numOutputs);
            return o2.length;
          }, u = (t2, e2, n2, r2, s2) => {
            const [u2, c2] = i.SplitUtil.splitShape(e2.dims, r2, n2.split, n2.numOutputs), l = c2[s2], p = u2[s2], f = `
      float process(int indices[${p.length}]) {
        indices[${r2}] += ${l};
        return _A(indices);
      }
    `;
            return Object.assign(Object.assign({}, a), { cacheHint: `${n2.cacheKey}:${s2}`, output: { dims: p, type: e2.type, textureType: o.TextureType.unpacked }, shaderSource: f });
          }, c = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Split requires one input.");
            if ("int8" !== t2[0].type && "uint8" !== t2[0].type && "int16" !== t2[0].type && "uint16" !== t2[0].type && "int32" !== t2[0].type && "uint32" !== t2[0].type && "float32" !== t2[0].type && "float64" !== t2[0].type && "bool" !== t2[0].type)
              throw new Error("Invalid input type.");
          };
        }, 3933: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseSqueezeAttributes = e.squeezeV13 = e.squeeze = void 0;
          const r = n(2517);
          e.squeeze = (t2, e2, n2) => {
            i(e2);
            const o2 = r.ShapeUtil.squeezeShape(e2[0].dims, n2);
            return [t2.reshapeUnpacked(e2[0], o2)];
          }, e.squeezeV13 = (t2, n2) => (o(n2), (0, e.squeeze)(t2, [n2[0]], Array.from(n2[1].integerData))), e.parseSqueezeAttributes = (t2) => t2.attributes.getInts("axes");
          const i = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Squeeze requires 1 input.");
            if ("string" === t2[0].type)
              throw new Error("invalid input tensor types.");
          }, o = (t2) => {
            if (!t2 || 2 !== t2.length)
              throw new Error("Squeeze requires 2 inputs.");
            if ("int32" !== t2[1].type)
              throw new Error("Invalid input type.");
          };
        }, 6558: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.sum = void 0;
          const r = n(5060), i = n(2039);
          e.sum = (t2, e2) => {
            a(e2);
            const n2 = { name: "Sum", inputNames: e2.map((t3, e3) => `X${e3}`), inputTypes: new Array(e2.length).fill(i.TextureType.unpacked) };
            return [t2.run(Object.assign(Object.assign({}, n2), { get: () => o(t2, e2, n2) }), e2)];
          };
          const o = (t2, e2, n2) => {
            const o2 = (0, r.getGlsl)(t2.session.backend.glContext.version), a2 = e2[0].dims.slice(), s = `
      void main() {
        vec4 result = ${e2.map((t3, e3) => `${o2.texture2D}(X${e3},TexCoords)`).join(" + ")};
        ${o2.output} = result;
      }
    `;
            return Object.assign(Object.assign({}, n2), { output: { dims: a2, type: e2[0].type, textureType: i.TextureType.unpacked }, hasMain: true, shaderSource: s });
          }, a = (t2) => {
            if (!t2 || 0 === t2.length)
              throw new Error("Sum requires inputs.");
            const e2 = t2[0].dims.length;
            for (let n2 = 1; n2 < t2.length; n2++) {
              if (e2 !== t2[n2].dims.length)
                throw new Error("Input shapes are mismatched.");
              for (let r2 = 0; r2 < e2; r2++)
                if (t2[0].dims[r2] !== t2[n2].dims[r2])
                  throw new Error("Input shapes are not matched.");
            }
            if ("float32" !== t2[0].type && "float64" !== t2[0].type)
              throw new Error("Invalid input type.");
            for (let e3 = 1; e3 < t2.length; e3++)
              if (t2[0].type !== t2[e3].type)
                throw new Error("Input types are not matched.");
          };
        }, 5723: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.tile = void 0;
          const r = n(782), i = n(2039);
          e.tile = (t2, e2) => {
            a(e2);
            const n2 = { name: "Tile", inputNames: ["A"], inputTypes: [i.TextureType.unpacked] };
            return [t2.run(Object.assign(Object.assign({}, n2), { get: () => o(t2, e2, n2) }), e2)];
          };
          const o = (t2, e2, n2) => {
            const r2 = e2[0].dims.slice(), o2 = new Array(r2.length), a2 = [];
            for (let t3 = 0; t3 < r2.length; t3++)
              o2[t3] = r2[t3] * e2[1].numberData[t3], a2.push(`inputIdx[${t3}] = int(mod(float(outputIdx[${t3}]), ${r2[t3]}.));`);
            const s = o2.length, u = `
      float process(int outputIdx[${s}]) {
        int inputIdx[${s}];
        ${a2.join("\n")}
        return _A(inputIdx);
      }
    `;
            return Object.assign(Object.assign({}, n2), { output: { dims: o2, type: e2[0].type, textureType: i.TextureType.unpacked }, shaderSource: u });
          }, a = (t2) => {
            if (!t2 || 2 !== t2.length)
              throw new Error("Tile requires 2 input.");
            if (1 !== t2[1].dims.length)
              throw new Error("The second input shape must 1 dimension.");
            if (t2[1].dims[0] !== t2[0].dims.length)
              throw new Error("Invalid input shape.");
            if (-1 === r.NUMBER_TYPES.indexOf(t2[0].type))
              throw new Error("Invalid input type.");
            if ("int32" !== t2[1].type && "int16" !== t2[1].type)
              throw new Error("Invalid repeat type.");
          };
        }, 3738: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseTransposeAttributes = e.transpose = void 0;
          const r = n(246), i = n(2517), o = n(2039), a = { name: "Transpose", inputNames: ["A"], inputTypes: [o.TextureType.unpacked] };
          e.transpose = (t2, e2, n2) => (p(e2), [t2.run(Object.assign(Object.assign({}, a), { cacheHint: n2.cacheKey, get: () => s(t2, e2[0], n2.perm) }), e2)]), e.parseTransposeAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ perm: t2.attributes.getInts("perm", []) });
          const s = (t2, e2, n2) => {
            const r2 = e2.dims;
            n2 = u(r2, n2);
            const i2 = c(r2, n2), s2 = r2.length, p2 = `
      ${l("perm", n2, s2)}
      float process(int indices[${s2}]) {
        int a[${s2}];
        perm(a, indices);
        return _A(a);
      }`;
            return Object.assign(Object.assign({}, a), { output: { dims: i2, type: e2.type, textureType: o.TextureType.unpacked }, shaderSource: p2 });
          }, u = (t2, e2) => (e2 && e2.length !== t2.length && (e2 = [...t2.keys()].reverse()), e2), c = (t2, e2) => (e2 = u(t2, e2), i.ShapeUtil.sortBasedOnPerm(t2, e2)), l = (t2, e2, n2) => {
            const r2 = [];
            r2.push(`void ${t2}(out int a[${n2}], int src[${n2}]) {`);
            for (let t3 = 0; t3 < n2; ++t3)
              r2.push(`	a[${e2[t3]}]=src[${t3}];`);
            return r2.push("	}"), r2.join("\n");
          }, p = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Transpose requires 1 input.");
            if ("float32" !== t2[0].type && "float64" !== t2[0].type)
              throw new Error("input should be float tensor");
          };
        }, 8710: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.encodeAsUint8 = void 0;
          const r = n(5060), i = n(2039);
          e.encodeAsUint8 = (t2, e2) => {
            const n2 = e2.shape, o = (0, r.getGlsl)(t2.session.backend.glContext.version), a = `
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${o.texture2D}(X,TexCoords).r;
      ${o.output} = encodeAsUint8(value);
    }`, s = { name: "Uint8Encode", inputTypes: [i.TextureType.unpacked], inputNames: ["X"], output: { dims: n2, type: e2.tensor.type, textureType: i.TextureType.downloadUint8AsFloat }, shaderSource: a, hasMain: true };
            return t2.executeProgram(s, [e2.tensor]);
          };
        }, 4909: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.tanh = e.tan = e.sqrt = e.sin = e.sigmoid = e.relu = e.not = e.neg = e.log = e.parseLeakyReluAttributes = e.leakyRelu = e.identity = e.floor = e.exp = e.parseEluAttributes = e.elu = e.cos = e.ceil = e.clipV11 = e.parseClipAttributes = e.clip = e.atan = e.asin = e.acos = e.abs = e.glslTanh = e.glslTan = e.glslSqrt = e.glslSigmoid = e.glslRelu = e.glslSin = e.glslNot = e.glslNeg = e.glslLog = e.glslLeakyRelu = e.glslIdentity = e.glslClip = e.glslFloor = e.glslExp = e.glslElu = e.glslCos = e.glslCeil = e.glslAtan = e.glslAsin = e.glslAcos = e.glslAbs = void 0;
          const r = n(246), i = n(2517), o = n(8520), a = n(5060), s = n(2039);
          function u() {
            return P("abs");
          }
          function c() {
            return P("acos");
          }
          function l() {
            return P("asin");
          }
          function p() {
            return P("atan");
          }
          function f() {
            return P("ceil");
          }
          function d() {
            return P("cos");
          }
          function h(t2) {
            const e2 = "elu";
            return { body: `
  const float alpha = float(${t2});

  float ${e2}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${e2}_(vec4 v) {
    return vec4(${e2}_(v.x), ${e2}_(v.y), ${e2}_(v.z), ${e2}_(v.w));
  }
  `, name: e2, type: o.FunctionType.ValueBased };
          }
          function g() {
            return P("exp");
          }
          function b() {
            return P("floor");
          }
          function m(t2, e2) {
            const n2 = "clip";
            return { body: `
  const float min = float(${t2});
  const float max = float(${e2});

  float ${n2}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${n2}_(vec4 v) {
    return clamp(v, min, max);
  }
  `, name: n2, type: o.FunctionType.ValueBased };
          }
          function y() {
            const t2 = "indentity";
            return { body: `
  float ${t2}_(float a) {
    return a;
  }
  vec4 ${t2}_(vec4 v) {
    return v;
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          function _(t2) {
            const e2 = "leakyRelu";
            return { body: `
  const float alpha = float(${t2});

  float ${e2}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${e2}_(vec4 v) {
    return vec4(${e2}_(v.x), ${e2}_(v.y), ${e2}_(v.z), ${e2}_(v.w));
  }
  `, name: e2, type: o.FunctionType.ValueBased };
          }
          function v() {
            return P("log");
          }
          function w() {
            const t2 = "neg";
            return { body: `
  float ${t2}_(float a) {
    return -a;
  }
  vec4 ${t2}_(vec4 v) {
    return -v;
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          function x() {
            const t2 = "not";
            return { body: `
  float ${t2}_(float a) {
    return float( ! bool(a) );
  }
  bool ${t2}_(bool a) {
    return !a;
  }
  vec4 ${t2}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${t2}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          function T() {
            return P("sin");
          }
          function S() {
            const t2 = "relu";
            return { body: `
  float ${t2}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${t2}_(vec4 v) {
    return max( v, 0.0 );
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          function O() {
            const t2 = "sigmoid";
            return { body: `
  float ${t2}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${t2}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          function A() {
            return P("sqrt");
          }
          function E() {
            return P("tan");
          }
          function I() {
            const t2 = "tanh";
            return { body: `
  float ${t2}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${t2}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          function P(t2) {
            return { body: `
  float ${t2}_(float a) {
    return ${t2}(a);
  }
  vec4 ${t2}_(vec4 v) {
    return ${t2}(v);
  }
  `, name: t2, type: o.FunctionType.ValueBased };
          }
          e.glslAbs = u, e.glslAcos = c, e.glslAsin = l, e.glslAtan = p, e.glslCeil = f, e.glslCos = d, e.glslElu = h, e.glslExp = g, e.glslFloor = b, e.glslClip = m, e.glslIdentity = y, e.glslLeakyRelu = _, e.glslLog = v, e.glslNeg = w, e.glslNot = x, e.glslSin = T, e.glslRelu = S, e.glslSigmoid = O, e.glslSqrt = A, e.glslTan = E, e.glslTanh = I;
          const D = (t2, e2, n2, r2) => {
            const i2 = t2.session.pack ? s.TextureType.packed : s.TextureType.unpacked, o2 = { name: n2.name, inputTypes: [i2], inputNames: ["A"], cacheHint: r2 };
            return Object.assign(Object.assign({}, o2), { get: () => ((t3, e3, n3, r3) => {
              const i3 = t3.session.pack ? s.TextureType.packed : s.TextureType.unpacked, o3 = (0, a.getGlsl)(t3.session.backend.glContext.version);
              return Object.assign(Object.assign({}, e3), { output: { dims: n3.dims, type: n3.type, textureType: i3 }, shaderSource: `
     ${r3.body}
     void main() {
       vec4 v = ${o3.texture2D}(A, TexCoords);
       v = ${r3.name}_(v);
       ${o3.output} = v;
     }
     `, hasMain: true });
            })(t2, o2, e2, n2) });
          };
          e.abs = (t2, e2) => [t2.run(D(t2, e2[0], u()), e2)], e.acos = (t2, e2) => [t2.run(D(t2, e2[0], c()), e2)], e.asin = (t2, e2) => [t2.run(D(t2, e2[0], l()), e2)], e.atan = (t2, e2) => [t2.run(D(t2, e2[0], p()), e2)], e.clip = (t2, e2, n2) => [t2.run(D(t2, e2[0], m(n2.min, n2.max), n2.cacheKey), e2)], e.parseClipAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ min: t2.attributes.getFloat("min", i.MIN_CLIP), max: t2.attributes.getFloat("max", i.MAX_CLIP) }), e.clipV11 = (t2, n2) => {
            const r2 = $(t2, n2);
            return (0, e.clip)(t2, [n2[0]], r2);
          };
          const $ = (t2, e2) => {
            if (e2.length >= 3 && (!t2.session.isInitializer(e2[1].dataId) || !t2.session.isInitializer(e2[2].dataId)))
              throw new Error("dynamic clip attributes are not allowed");
            const n2 = e2.length >= 3 ? e2[1].numberData[0] : i.MIN_CLIP, o2 = e2.length >= 3 ? e2[2].numberData[0] : i.MAX_CLIP;
            return (0, r.createAttributeWithCacheKey)({ min: n2, max: o2 });
          };
          e.ceil = (t2, e2) => [t2.run(D(t2, e2[0], f()), e2)], e.cos = (t2, e2) => [t2.run(D(t2, e2[0], d()), e2)], e.elu = (t2, e2, n2) => [t2.run(D(t2, e2[0], h(n2.alpha), n2.cacheKey), e2)], e.parseEluAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ alpha: t2.attributes.getFloat("alpha", 1) }), e.exp = (t2, e2) => [t2.run(D(t2, e2[0], g()), e2)], e.floor = (t2, e2) => [t2.run(D(t2, e2[0], b()), e2)], e.identity = (t2, e2) => [t2.run(D(t2, e2[0], y()), e2)], e.leakyRelu = (t2, e2, n2) => [t2.run(D(t2, e2[0], _(n2.alpha), n2.cacheKey), e2)], e.parseLeakyReluAttributes = (t2) => (0, r.createAttributeWithCacheKey)({ alpha: t2.attributes.getFloat("alpha", 0.01) }), e.log = (t2, e2) => [t2.run(D(t2, e2[0], v()), e2)], e.neg = (t2, e2) => [t2.run(D(t2, e2[0], w()), e2)], e.not = (t2, e2) => [t2.run(D(t2, e2[0], x()), e2)], e.relu = (t2, e2) => [t2.run(D(t2, e2[0], S()), e2)], e.sigmoid = (t2, e2) => [t2.run(D(t2, e2[0], O()), e2)], e.sin = (t2, e2) => [t2.run(D(t2, e2[0], T()), e2)], e.sqrt = (t2, e2) => [t2.run(D(t2, e2[0], A()), e2)], e.tan = (t2, e2) => [t2.run(D(t2, e2[0], E()), e2)], e.tanh = (t2, e2) => [t2.run(D(t2, e2[0], I()), e2)];
        }, 5611: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createUnpackProgramInfoLoader = e.createUnpackProgramInfo = void 0;
          const r = n(5060), i = n(2039), o = n(9390), a = n(2827), s = { name: "unpack", inputNames: ["A"], inputTypes: [i.TextureType.packed] };
          e.createUnpackProgramInfo = (t2, e2) => {
            const n2 = e2.dims.length, u = (0, a.getChannels)("rc", n2), c = u.slice(-2), l = (0, o.getCoordsDataType)(n2), p = (0, a.unpackFromChannel)(), f = 0 === e2.dims.length ? "" : function(t3, e3) {
              if (1 === t3)
                return "rc";
              let n3 = "";
              for (let r2 = 0; r2 < t3; r2++)
                n3 += e3[r2], r2 < t3 - 1 && (n3 += ",");
              return n3;
            }(n2, u), d = n2 <= 1 ? "rc" : `vec2(${c.join(",")})`, h = `
    ${p}
    void main() {
      ${l} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${f});

       ${(0, r.getGlsl)(t2.session.backend.glContext.version).output} = vec4(getChannel(packedInput, ${d}), 0, 0, 0);
     }
   `;
            return Object.assign(Object.assign({}, s), { hasMain: true, output: { dims: e2.dims, type: e2.type, textureType: i.TextureType.unpacked }, shaderSource: h });
          }, e.createUnpackProgramInfoLoader = (t2, n2) => Object.assign(Object.assign({}, s), { get: () => (0, e.createUnpackProgramInfo)(t2, n2) });
        }, 8428: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.parseUnsqueezeAttributes = e.unsqueezeV13 = e.unsqueeze = void 0;
          const r = n(2517);
          e.unsqueeze = (t2, e2, n2) => {
            i(e2);
            const o2 = r.ShapeUtil.unsqueezeShape(e2[0].dims, n2);
            return [t2.reshapeUnpacked(e2[0], o2)];
          }, e.unsqueezeV13 = (t2, n2) => (o(n2), (0, e.unsqueeze)(t2, [n2[0]], Array.from(n2[1].integerData))), e.parseUnsqueezeAttributes = (t2) => t2.attributes.getInts("axes");
          const i = (t2) => {
            if (!t2 || 1 !== t2.length)
              throw new Error("Unsqueeze requires 1 input.");
            if ("string" === t2[0].type)
              throw new Error("invalid input tensor types.");
          }, o = (t2) => {
            if (!t2 || 2 !== t2.length)
              throw new Error("Unsqueeze requires 2 inputs.");
            if ("int32" !== t2[1].type)
              throw new Error("Invalid input type.");
          };
        }, 9793: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.scalesValidation = e.validateInputs = e.parseUpsampleAttributes = e.parseUpsampleAttributesV9 = e.parseUpsampleAttributesV7 = e.upsample = void 0;
          const r = n(246), i = n(5060), o = n(2039), a = { name: "Upsample", inputNames: ["X"], inputTypes: [o.TextureType.unpacked] };
          e.upsample = (t2, n2, r2) => ((0, e.validateInputs)(n2, r2), [t2.run(Object.assign(Object.assign({}, a), { cacheHint: r2.cacheKey, get: () => s(t2, n2, r2) }), n2)]), e.parseUpsampleAttributesV7 = (t2) => (0, e.parseUpsampleAttributes)(t2, 7), e.parseUpsampleAttributesV9 = (t2) => (0, e.parseUpsampleAttributes)(t2, 9), e.parseUpsampleAttributes = (t2, n2) => {
            const i2 = n2 >= 10, o2 = t2.attributes.getString("mode", "nearest");
            if ("nearest" !== o2 && "linear" !== o2 && (n2 < 11 || "cubic" !== o2))
              throw new Error(`unrecognized mode: ${o2}`);
            let a2 = [];
            n2 < 9 && (a2 = t2.attributes.getFloats("scales"), (0, e.scalesValidation)(a2, o2, i2));
            const s2 = t2.attributes.getFloat("extrapolation_value", 0), u = n2 > 10 ? t2.attributes.getString("coordinate_transformation_mode", "half_pixel") : "asymmetric";
            if (-1 === ["asymmetric", "pytorch_half_pixel", "tf_half_pixel_for_nn", "align_corners", "tf_crop_and_resize", "half_pixel"].indexOf(u))
              throw new Error(`coordinate_transform_mode '${u}' is not supported`);
            const c = "tf_crop_and_resize" === u, l = c, p = "nearest" === o2 && n2 >= 11 ? t2.attributes.getString("nearest_mode", "round_prefer_floor") : "";
            if (-1 === ["round_prefer_floor", "round_prefer_ceil", "floor", "ceil", ""].indexOf(p))
              throw new Error(`nearest_mode '${p}' is not supported`);
            const f = t2.attributes.getFloat("cubic_coeff_a", -0.75), d = 0 !== t2.attributes.getInt("exclude_outside", 0);
            if (d && "cubic" !== o2)
              throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");
            const h = n2 < 11 || "nearest" === o2 && "asymmetric" === u && "floor" === p;
            let g = 0, b = 0, m = 0;
            return n2 > 10 ? t2.inputs.length > 2 ? (g = 1, b = 2, m = 3) : (b = 1, m = 2) : 9 === n2 && (b = 1), (0, r.createAttributeWithCacheKey)({ opset: n2, isResize: i2, mode: o2, scales: a2, extrapolationValue: s2, coordinateTransformMode: u, useExtrapolation: l, needRoiInput: c, nearestMode: p, cubicCoefficientA: f, excludeOutside: d, useNearest2xOptimization: h, roiInputIdx: g, scalesInputIdx: b, sizesInputIdx: m });
          };
          const s = (t2, e2, n2) => {
            const r2 = (0, i.getGlsl)(t2.session.backend.glContext.version), [s2, u] = t2.calculateTextureWidthAndHeight(e2[0].dims, o.TextureType.unpacked), c = e2[0].dims.map((t3, e3) => Math.floor(t3 * n2.scales[e3])), [l, p] = t2.calculateTextureWidthAndHeight(c, o.TextureType.unpacked), f = c.length, d = new Array(f), h = new Array(f);
            let g = `
      int output_pitches[${f}];
      int input_pitches[${f}];
      `;
            for (let t3 = f - 1; t3 >= 0; t3--)
              d[t3] = t3 === f - 1 ? 1 : d[t3 + 1] * c[t3 + 1], h[t3] = t3 === f - 1 ? 1 : h[t3 + 1] * e2[0].dims[t3 + 1], g += `
        output_pitches[${t3}] = ${d[t3]};
        input_pitches[${t3}] = ${h[t3]};
        `;
            const b = `
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${s2}, ${u});
        float value = getColorAsFloat(${r2.texture2D}(X, coords));
        return value;
      }
      `, m = "nearest" === n2.mode ? `
    ${b}
    float process(int indices[${f}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${l}, ${p});

      ${g}

      int d, m;
      for (int dim = 0; dim < ${f}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }` : 4 === f ? `
    ${b}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${l}, ${p});

      ${g}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${e2[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }` : `
    ${b}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${l}, ${p});

      ${g}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${e2[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;
            return Object.assign(Object.assign({}, a), { output: { dims: c, type: e2[0].type, textureType: o.TextureType.unpacked }, shaderSource: m, variables: [{ name: "scales", type: "int", arrayLength: n2.scales.length, data: n2.scales.map((t3) => Math.ceil(t3)) }] });
          };
          e.validateInputs = (t2, e2) => {
            if (!t2 || e2.opset < 9 && 1 !== t2.length || e2.opset >= 9 && e2.opset < 11 && 2 !== t2.length || e2.opset >= 11 && t2.length < 2)
              throw new Error("invalid inputs.");
            if (e2.scales.length > 0 && t2[0].dims.length !== e2.scales.length)
              throw new Error("Invalid input shape.");
            if ("string" === t2[0].type)
              throw new Error("Invalid input tensor types.");
          }, e.scalesValidation = (t2, e2, n2) => {
            if (n2) {
              for (const e3 of t2)
                if (e3 <= 0)
                  throw new Error("Scale value should be greater than 0.");
            } else
              for (const e3 of t2)
                if (e3 < 1)
                  throw new Error("Scale value should be greater than or equal to 1.");
            if (!("linear" !== e2 && "cubic" !== e2 || 2 === t2.length || 4 === t2.length && 1 === t2[0] && 1 === t2[1]))
              throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${n2 ? "Resize" : "Upsample"} opeartor.`);
          };
        }, 1958: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.ProgramManager = void 0;
          const r = n(1670), i = n(6231), o = n(8879), a = n(5060);
          e.ProgramManager = class {
            constructor(t2, e2, n2) {
              this.profiler = t2, this.glContext = e2, this.textureLayoutStrategy = n2, this.repo = /* @__PURE__ */ new Map(), this.attributesBound = false;
            }
            getArtifact(t2) {
              return this.repo.get(t2);
            }
            setArtifact(t2, e2) {
              this.repo.set(t2, e2);
            }
            run(t2, e2, n2) {
              var r2;
              this.profiler.event("op", `ProgramManager.run ${null !== (r2 = t2.programInfo.name) && void 0 !== r2 ? r2 : "unknown kernel"}`, () => {
                var r3;
                const o2 = this.glContext.gl, a2 = t2.program;
                o2.useProgram(a2);
                try {
                  this.bindOutput(n2), this.attributesBound || this.bindAttributes(t2.attribLocations), this.bindUniforms(t2.uniformLocations, null !== (r3 = t2.programInfo.variables) && void 0 !== r3 ? r3 : [], e2);
                } catch (e3) {
                  throw i.Logger.error("ProgramManager", t2.programInfo.shaderSource), e3;
                }
                this.profiler.event("backend", "GlContext.draw()", () => {
                  this.glContext.draw();
                });
              }, this.glContext);
            }
            dispose() {
              this.vertexShader && this.glContext.deleteShader(this.vertexShader), this.repo.forEach((t2) => this.glContext.deleteProgram(t2.program));
            }
            build(t2, e2, n2) {
              return this.profiler.event("backend", "ProgramManager.build", () => {
                const r2 = new o.GlslPreprocessor(this.glContext, t2, e2, n2), i2 = r2.preprocess(), a2 = this.compile(i2);
                return { programInfo: t2, program: a2, uniformLocations: this.getUniformLocations(a2, r2.context.programInfo.inputNames, r2.context.programInfo.variables), attribLocations: this.getAttribLocations(a2) };
              });
            }
            compile(t2) {
              if (!this.vertexShader) {
                i.Logger.verbose("ProrgramManager", "Compiling and caching Vertex shader for the first time");
                const t3 = (0, a.getVertexShaderSource)(this.glContext.version);
                this.vertexShader = this.glContext.compileShader(t3, this.glContext.gl.VERTEX_SHADER);
              }
              r.env.debug && i.Logger.verbose("ProrgramManager", `FragShader:
${t2}
`);
              const e2 = this.glContext.compileShader(t2, this.glContext.gl.FRAGMENT_SHADER), n2 = this.glContext.createProgram(this.vertexShader, e2);
              return this.glContext.deleteShader(e2), n2;
            }
            bindOutput(t2) {
              const e2 = t2.width, n2 = t2.height;
              i.Logger.verbose("ProrgramManager", `Binding output texture to Framebuffer: w/h=${e2}/${n2}, shape=${t2.shape}, type=${t2.tensor.type}`), this.glContext.attachFramebuffer(t2.texture, e2, n2);
            }
            bindAttributes(t2) {
              const e2 = t2.position, n2 = t2.textureCoord;
              this.glContext.setVertexAttributes(e2, n2), this.attributesBound = true;
            }
            bindUniforms(t2, e2, n2) {
              var r2;
              const i2 = this.glContext.gl;
              let o2 = 0;
              for (const { name: a2, type: s, location: u, arrayLength: c } of t2) {
                const t3 = null === (r2 = e2.find((t4) => t4.name === a2)) || void 0 === r2 ? void 0 : r2.data;
                if ("sampler2D" !== s && !t3)
                  throw new Error(`variable '${a2}' does not have data defined in program info`);
                switch (s) {
                  case "sampler2D":
                    this.bindTexture(n2[o2], u, o2), o2++;
                    break;
                  case "float":
                    c ? i2.uniform1fv(u, t3) : i2.uniform1f(u, t3);
                    break;
                  case "int":
                    c ? i2.uniform1iv(u, t3) : i2.uniform1i(u, t3);
                    break;
                  default:
                    throw new Error(`Uniform not implemented: ${s}`);
                }
              }
            }
            bindTexture(t2, e2, n2) {
              this.glContext.bindTextureToUniform(t2.texture, n2, e2);
            }
            getAttribLocations(t2) {
              return { position: this.getAttribLocation(t2, "position"), textureCoord: this.getAttribLocation(t2, "textureCoord") };
            }
            getUniformLocations(t2, e2, n2) {
              const r2 = [];
              if (e2)
                for (const n3 of e2)
                  r2.push({ name: n3, type: "sampler2D", location: this.getUniformLocation(t2, n3) });
              if (n2)
                for (const e3 of n2)
                  r2.push(Object.assign(Object.assign({}, e3), { location: this.getUniformLocation(t2, e3.name) }));
              return r2;
            }
            getUniformLocation(t2, e2) {
              const n2 = this.glContext.gl.getUniformLocation(t2, e2);
              if (null === n2)
                throw new Error(`Uniform ${e2} not found.`);
              return n2;
            }
            getAttribLocation(t2, e2) {
              return this.glContext.gl.getAttribLocation(t2, e2);
            }
          };
        }, 6416: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.WebGLSessionHandler = void 0;
          const r = n(6231), i = n(1047), o = n(8316), a = n(1640), s = n(1958), u = n(7859), c = n(5702);
          e.WebGLSessionHandler = class {
            constructor(t2, e2) {
              this.backend = t2, this.context = e2, this.layoutStrategy = new u.PreferLogicalStrategy(t2.glContext.maxTextureSize), this.programManager = new s.ProgramManager(this.context.profiler, t2.glContext, this.layoutStrategy), this.textureManager = new c.TextureManager(t2.glContext, this.layoutStrategy, this.context.profiler, { reuseTextures: "full" === t2.textureCacheMode }), this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache = /* @__PURE__ */ new Map(), this.pack = t2.pack, this.pack2unpackMap = /* @__PURE__ */ new Map(), this.unpack2packMap = /* @__PURE__ */ new Map();
            }
            createInferenceHandler() {
              return new o.WebGLInferenceHandler(this);
            }
            onGraphInitialized(t2) {
              const e2 = t2.getValues().filter((t3) => -1 === t3.from && t3.tensor).map((t3) => t3.tensor.dataId);
              this.initializers = new Set(e2);
            }
            isInitializer(t2) {
              return !!this.initializers && this.initializers.has(t2);
            }
            addInitializer(t2) {
              this.initializers.add(t2);
            }
            getTextureData(t2, e2) {
              return e2 ? this.packedTextureDataCache.get(t2) : this.unpackedTextureDataCache.get(t2);
            }
            setTextureData(t2, e2, n2 = false) {
              r.Logger.verbose("WebGLSessionHandler", "Storing Texture data in cache"), n2 ? this.packedTextureDataCache.set(t2, e2) : this.unpackedTextureDataCache.set(t2, e2);
            }
            dispose() {
              this.programManager.dispose(), this.textureManager.clearActiveTextures(), this.packedTextureDataCache.forEach((t2) => this.textureManager.releaseTexture(t2, true)), this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache.forEach((t2) => this.textureManager.releaseTexture(t2, true)), this.unpackedTextureDataCache = /* @__PURE__ */ new Map();
            }
            resolve(t2, e2, n2) {
              const r2 = (0, i.resolveOperator)(t2, e2, a.WEBGL_OP_RESOLVE_RULES);
              return { impl: r2.opImpl, context: r2.opInit ? r2.opInit(t2, n2) : t2 };
            }
          };
        }, 7769: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Uint8DataEncoder = e.RGBAFloatDataEncoder = e.RedFloat32DataEncoder = void 0;
          const r = n(6231);
          e.RedFloat32DataEncoder = class {
            constructor(t2, e2 = 1) {
              if (1 === e2)
                this.internalFormat = t2.R32F, this.format = t2.RED, this.textureType = t2.FLOAT, this.channelSize = e2;
              else {
                if (4 !== e2)
                  throw new Error(`Invalid number of channels: ${e2}`);
                this.internalFormat = t2.RGBA32F, this.format = t2.RGBA, this.textureType = t2.FLOAT, this.channelSize = e2;
              }
            }
            encode(t2, e2) {
              let n2, i;
              return t2.constructor !== Float32Array && (r.Logger.warning("Encoder", "data was not of type Float32; creating new Float32Array"), i = new Float32Array(t2)), e2 * this.channelSize > t2.length ? (r.Logger.warning("Encoder", "Source data too small. Allocating larger array"), i = t2, n2 = this.allocate(e2 * this.channelSize), i.forEach((t3, e3) => n2[e3] = t3)) : (i = t2, n2 = i), n2;
            }
            allocate(t2) {
              return new Float32Array(4 * t2);
            }
            decode(t2, e2) {
              return 1 === this.channelSize ? t2.filter((t3, e3) => e3 % 4 == 0).subarray(0, e2) : t2.subarray(0, e2);
            }
          }, e.RGBAFloatDataEncoder = class {
            constructor(t2, e2 = 1, n2) {
              if (1 !== e2 && 4 !== e2)
                throw new Error(`Invalid number of channels: ${e2}`);
              this.internalFormat = t2.RGBA, this.format = t2.RGBA, this.channelSize = e2, this.textureType = n2 || t2.FLOAT;
            }
            encode(t2, e2) {
              let n2 = t2;
              return 1 === this.channelSize && (r.Logger.verbose("Encoder", "Exploding into a larger array"), n2 = this.allocate(e2), t2.forEach((t3, e3) => n2[4 * e3] = t3)), n2;
            }
            allocate(t2) {
              return new Float32Array(4 * t2);
            }
            decode(t2, e2) {
              return 1 === this.channelSize ? t2.filter((t3, e3) => e3 % 4 == 0).subarray(0, e2) : t2.subarray(0, e2);
            }
          }, e.Uint8DataEncoder = class {
            constructor(t2, e2 = 1) {
              if (this.channelSize = 4, 1 === e2)
                this.internalFormat = t2.ALPHA, this.format = t2.ALPHA, this.textureType = t2.UNSIGNED_BYTE, this.channelSize = e2;
              else {
                if (4 !== e2)
                  throw new Error(`Invalid number of channels: ${e2}`);
                this.internalFormat = t2.RGBA, this.format = t2.RGBA, this.textureType = t2.UNSIGNED_BYTE, this.channelSize = e2;
              }
            }
            encode(t2, e2) {
              return new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength);
            }
            allocate(t2) {
              return new Uint8Array(t2 * this.channelSize);
            }
            decode(t2, e2) {
              if (t2 instanceof Uint8Array)
                return t2.subarray(0, e2);
              throw new Error(`Invalid array type: ${t2.constructor}`);
            }
          };
        }, 7859: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.getBatchDim = e.sizeToSquarishShape = e.getRowsCols = e.sizeFromShape = e.isInt = e.parseAxisParam = e.squeezeShape = e.PreferLogicalStrategy = e.AlwaysKeepOriginalSizeStrategy = void 0;
          const r = n(6231), i = n(2517);
          function o(t2, e2) {
            const n2 = [], r2 = [], i2 = null != e2 && Array.isArray(e2) && 0 === e2.length, o2 = null == e2 || i2 ? null : a(e2, t2).sort();
            let s2 = 0;
            for (let e3 = 0; e3 < t2.length; ++e3) {
              if (null != o2) {
                if (o2[s2] === e3 && 1 !== t2[e3])
                  throw new Error(`Can't squeeze axis ${e3} since its dim '${t2[e3]}' is not 1`);
                (null == o2[s2] || o2[s2] > e3) && 1 === t2[e3] && (n2.push(t2[e3]), r2.push(e3)), o2[s2] <= e3 && s2++;
              }
              1 !== t2[e3] && (n2.push(t2[e3]), r2.push(e3));
            }
            return { newShape: n2, keptDims: r2 };
          }
          function a(t2, e2) {
            const n2 = e2.length;
            return t2 = null == t2 ? e2.map((t3, e3) => e3) : [].concat(t2), (0, i.assert)(t2.every((t3) => t3 >= -n2 && t3 < n2), () => `All values in axis param must be in range [-${n2}, ${n2}) but got axis ${t2}`), (0, i.assert)(t2.every(s), () => `All values in axis param must be integers but got axis ${t2}`), t2.map((t3) => t3 < 0 ? n2 + t3 : t3);
          }
          function s(t2) {
            return t2 % 1 == 0;
          }
          function u(t2) {
            if (0 === t2.length)
              return 1;
            let e2 = t2[0];
            for (let n2 = 1; n2 < t2.length; n2++)
              e2 *= t2[n2];
            return e2;
          }
          function c(t2) {
            const e2 = Math.ceil(Math.sqrt(t2));
            return [e2, Math.ceil(t2 / e2)];
          }
          e.AlwaysKeepOriginalSizeStrategy = class {
            constructor(t2) {
              this.maxTextureSize = t2;
            }
            computeTextureWH(t2, e2) {
              if (0 === t2.length)
                return [1, 1];
              const n2 = this.maxTextureSize;
              if (e2 && void 0 !== e2.breakAxis) {
                const i3 = e2.breakAxis >= t2.length ? 1 : t2.slice(e2.breakAxis).reduce((t3, e3) => t3 * e3), o3 = e2.breakAxis <= 0 ? 1 : t2.slice(0, e2.breakAxis).reduce((t3, e3) => t3 * e3);
                if (!(i3 > n2 || o3 > n2))
                  return [i3, o3];
                r.Logger.verbose("TextureLayout", `Given width/height preferences were unattainable: shape:${t2}, breakAxis:${e2.breakAxis}`);
              }
              const i2 = t2.reduce((t3, e3) => t3 * e3);
              let o2 = Math.floor(Math.sqrt(i2));
              for (; o2 < n2 && o2 < i2 && i2 % o2 != 0; o2++)
                ;
              if (o2 >= n2 || i2 % o2 != 0)
                throw new Error(`The given dimensions are outside this GPU's boundaries: ${t2}`);
              return [o2, i2 / o2];
            }
          }, e.PreferLogicalStrategy = class {
            constructor(t2) {
              this.maxTextureSize = t2;
            }
            computeTextureWH(t2, e2) {
              const n2 = this.computeTexture(t2, e2);
              return e2 && e2.isPacked && (n2[0] /= 2, n2[1] /= 2), e2 && e2.reverseWH ? [n2[1], n2[0]] : n2;
            }
            computeTexture(t2, e2) {
              const n2 = e2 && e2.isPacked;
              if (0 === t2.length)
                return n2 ? [2, 2] : [1, 1];
              let i2 = this.maxTextureSize;
              if (e2 && void 0 !== e2.breakAxis) {
                const n3 = e2.breakAxis >= t2.length ? 1 : t2.slice(e2.breakAxis).reduce((t3, e3) => t3 * e3), o2 = e2.breakAxis <= 0 ? 1 : t2.slice(0, e2.breakAxis).reduce((t3, e3) => t3 * e3);
                if (!(n3 > i2 || o2 > i2))
                  return [n3, o2];
                r.Logger.verbose("TextureLayout", `Given width/height preferences were unattainable: shape:${t2}, breakAxis:${e2.breakAxis}`);
              }
              let a2 = t2.slice(0);
              if (n2 && (i2 *= 2, a2 = a2.map((t3, e3) => e3 >= a2.length - 2 ? a2[e3] % 2 == 0 ? a2[e3] : a2[e3] + 1 : a2[e3]), 1 === a2.length && (a2 = [2, a2[0]])), 2 !== a2.length) {
                const t3 = o(a2);
                a2 = t3.newShape;
              }
              const s2 = u(a2);
              return a2.length <= 1 && s2 <= i2 ? [1, s2] : 2 === a2.length && a2[0] <= i2 && a2[1] <= i2 ? a2 : 3 === a2.length && a2[0] * a2[1] <= i2 && a2[2] <= i2 ? [a2[0] * a2[1], a2[2]] : 3 === a2.length && a2[0] <= i2 && a2[1] * a2[2] <= i2 ? [a2[0], a2[1] * a2[2]] : 4 === a2.length && a2[0] * a2[1] * a2[2] <= i2 && a2[3] <= i2 ? [a2[0] * a2[1] * a2[2], a2[3]] : 4 === a2.length && a2[0] <= i2 && a2[1] * a2[2] * a2[3] <= i2 ? [a2[0], a2[1] * a2[2] * a2[3]] : n2 ? c(s2 / 4).map((t3) => 2 * t3) : c(s2);
            }
          }, e.squeezeShape = o, e.parseAxisParam = a, e.isInt = s, e.sizeFromShape = u, e.getRowsCols = function(t2) {
            if (0 === t2.length)
              throw Error("Cannot get rows and columns of an empty shape array.");
            return [t2.length > 1 ? t2[t2.length - 2] : 1, t2[t2.length - 1]];
          }, e.sizeToSquarishShape = c, e.getBatchDim = function(t2, e2 = 2) {
            return u(t2.slice(0, t2.length - e2));
          };
        }, 4057: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createTextureLayoutFromShape = e.calculateTextureWidthAndHeight = e.createTextureLayoutFromTextureType = void 0;
          const r = n(2517), i = n(2039);
          e.createTextureLayoutFromTextureType = (t2, n2, r2) => {
            const o = r2 === i.TextureType.unpacked || r2 === i.TextureType.unpackedReversed ? 1 : 4, a = r2 === i.TextureType.packed, s = r2 === i.TextureType.unpackedReversed || r2 === i.TextureType.packed, u = r2 === i.TextureType.packedLastDimension ? n2.length - 1 : void 0, c = r2 === i.TextureType.packedLastDimension ? n2.map((t3, e2) => e2 === n2.length - 1 ? 4 * t3 : t3) : void 0;
            return (0, e.createTextureLayoutFromShape)(t2, n2, o, c, { isPacked: a, reverseWH: s, breakAxis: u });
          }, e.calculateTextureWidthAndHeight = (t2, n2, r2) => {
            const i2 = (0, e.createTextureLayoutFromTextureType)(t2, n2, r2);
            return [i2.width, i2.height];
          }, e.createTextureLayoutFromShape = (t2, e2, n2 = 1, i2, o) => {
            const a = !(!o || !o.isPacked), [s, u] = t2.computeTextureWH(a && i2 || e2, o), c = e2.length;
            let l = e2.slice(0);
            if (0 === c && (l = [1]), 1 === n2)
              i2 = e2;
            else if (a) {
              if (4 !== n2)
                throw new Error("a packed texture must be 4-channel");
              i2 = e2, c > 0 && (l[c - 1] = Math.ceil(l[c - 1] / 2)), c > 1 && (l[c - 2] = Math.ceil(l[c - 2] / 2));
            } else if (!i2)
              throw new Error("Unpacked shape is needed when using channels > 1");
            return { width: s, height: u, channels: n2, isPacked: a, shape: l, strides: r.ShapeUtil.computeStrides(l), unpackedShape: i2, reversedWH: o && o.reverseWH };
          };
        }, 5702: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.TextureManager = void 0;
          const r = n(6231);
          e.TextureManager = class {
            constructor(t2, e2, n2, r2) {
              this.glContext = t2, this.layoutStrategy = e2, this.profiler = n2, this.config = r2, this.pendingRead = /* @__PURE__ */ new Map(), r2.reuseTextures && (this.inUseTextures = /* @__PURE__ */ new Map(), this.idleTextures = /* @__PURE__ */ new Map(), this.textureLookup = /* @__PURE__ */ new Map());
            }
            createTextureFromLayout(t2, e2, n2, i) {
              const o = this.toEncoderType(t2), a = this.glContext.getEncoder(o, e2.channels || 1, i);
              if (e2.isPacked && 1 === i)
                throw new Error("not implemented");
              const s = e2.width, u = e2.height;
              let c, l;
              if (this.config.reuseTextures) {
                c = `${s}x${u}_${a.format}_${a.internalFormat}_${a.textureType}`, l = this.inUseTextures.get(c), l || (l = [], this.inUseTextures.set(c, l));
                const e3 = this.idleTextures.get(c);
                if (e3 && e3.length > 0) {
                  const r2 = e3.pop();
                  return l.push(r2), 1 === i && this.glContext.updateTexture(r2, s, u, a, this.toTextureData(t2, n2)), r2;
                }
              }
              r.Logger.verbose("TextureManager", `Creating new texture of size ${e2.width}x${e2.height}`);
              const p = this.glContext.allocateTexture(s, u, a, this.toTextureData(t2, n2));
              return this.config.reuseTextures && (l.push(p), this.textureLookup.set(p, c)), p;
            }
            readTexture(t2, e2, n2) {
              return n2 || (n2 = 1), this.profiler.event("backend", "TextureManager.readTexture", () => {
                const r2 = t2.shape.reduce((t3, e3) => t3 * e3) * n2, i = this.glContext.readTexture(t2.texture, t2.width, t2.height, r2, this.toEncoderType(e2), n2);
                return this.toTensorData(e2, i);
              });
            }
            async readTextureAsync(t2, e2, n2) {
              const r2 = t2.tensor.dataId;
              if (n2 || (n2 = 1), this.pendingRead.has(r2)) {
                const t3 = this.pendingRead.get(r2);
                return new Promise((e3) => null == t3 ? void 0 : t3.push(e3));
              }
              return this.profiler.event("backend", "TextureManager.readTextureAsync", async () => {
                this.pendingRead.set(r2, []);
                const i = t2.shape.reduce((t3, e3) => t3 * e3) * n2;
                await this.glContext.createAndWaitForFence();
                const o = this.glContext.readTexture(t2.texture, t2.width, t2.height, i, this.toEncoderType(e2), n2), a = this.toTensorData(e2, o), s = this.pendingRead.get(r2);
                return this.pendingRead.delete(r2), null == s || s.forEach((t3) => t3(a)), a;
              });
            }
            readUint8TextureAsFloat(t2) {
              return this.profiler.event("backend", "TextureManager.readUint8TextureAsFloat", () => {
                const e2 = t2.shape.reduce((t3, e3) => t3 * e3), n2 = this.glContext.readTexture(t2.texture, t2.width, t2.height, 4 * e2, "byte", 4);
                return new Float32Array(n2.buffer, n2.byteOffset, e2);
              });
            }
            releaseTexture(t2, e2) {
              let n2;
              if (this.config.reuseTextures && (n2 = this.textureLookup.get(t2.texture), n2)) {
                e2 && this.textureLookup.delete(n2);
                const r2 = this.inUseTextures.get(n2);
                if (r2) {
                  const e3 = r2.indexOf(t2.texture);
                  if (-1 !== e3) {
                    r2.splice(e3, 1);
                    let i = this.idleTextures.get(n2);
                    i || (i = [], this.idleTextures.set(n2, i)), i.push(t2.texture);
                  }
                }
              }
              n2 && !e2 || (r.Logger.verbose("TextureManager", `Deleting texture of size ${t2.width}x${t2.height}`), this.glContext.deleteTexture(t2.texture));
            }
            toTensorData(t2, e2) {
              switch (t2) {
                case "int16":
                  return e2 instanceof Int16Array ? e2 : Int16Array.from(e2);
                case "int32":
                  return e2 instanceof Int32Array ? e2 : Int32Array.from(e2);
                case "int8":
                  return e2 instanceof Int8Array ? e2 : Int8Array.from(e2);
                case "uint16":
                  return e2 instanceof Uint16Array ? e2 : Uint16Array.from(e2);
                case "uint32":
                  return e2 instanceof Uint32Array ? e2 : Uint32Array.from(e2);
                case "uint8":
                case "bool":
                  return e2 instanceof Uint8Array ? e2 : Uint8Array.from(e2);
                case "float32":
                  return e2 instanceof Float32Array ? e2 : Float32Array.from(e2);
                case "float64":
                  return e2 instanceof Float64Array ? e2 : Float64Array.from(e2);
                default:
                  throw new Error(`TensorData type ${t2} is not supported`);
              }
            }
            toTextureData(t2, e2) {
              if (e2)
                return e2 instanceof Float32Array ? e2 : new Float32Array(e2);
            }
            toEncoderType(t2) {
              return "float";
            }
            clearActiveTextures() {
              this.glContext.clearActiveTextures();
            }
          };
        }, 2039: (t, e) => {
          "use strict";
          var n;
          Object.defineProperty(e, "__esModule", { value: true }), e.TextureType = void 0, (n = e.TextureType || (e.TextureType = {}))[n.unpacked = 0] = "unpacked", n[n.unpackedReversed = 1] = "unpackedReversed", n[n.packed = 2] = "packed", n[n.downloadUint8AsFloat = 3] = "downloadUint8AsFloat", n[n.packedLastDimension = 4] = "packedLastDimension";
        }, 9390: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.getGlChannels = e.getCoordsDataType = e.getSqueezedParams = e.squeezeInputShape = e.generateShaderFuncNameFromInputSamplerNameAtOutCoords = e.generateShaderFuncNameFromInputSamplerName = e.repeatedTry = e.getPackedShape = void 0;
          const r = n(2517);
          e.getPackedShape = function(t2) {
            const e2 = t2.length;
            return t2.slice(0, e2 - 1).concat(t2[e2 - 1] / 4);
          }, e.repeatedTry = async function(t2, e2 = (t3) => 0, n2) {
            return new Promise((r2, i) => {
              let o = 0;
              const a = () => {
                if (t2())
                  return void r2();
                o++;
                const s = e2(o);
                null != n2 && o >= n2 ? i() : setTimeout(a, s);
              };
              a();
            });
          }, e.generateShaderFuncNameFromInputSamplerName = function(t2) {
            return (0, r.assert)(void 0 !== t2 && 0 !== t2.length, () => "empty string found for sampler name"), "get" + t2.charAt(0).toUpperCase() + t2.slice(1);
          }, e.generateShaderFuncNameFromInputSamplerNameAtOutCoords = function(t2) {
            return (0, r.assert)(void 0 !== t2 && 0 !== t2.length, () => "empty string found for sampler name"), "get" + t2.charAt(0).toUpperCase() + t2.slice(1) + "AtOutCoords";
          }, e.squeezeInputShape = function(t2, e2) {
            let n2 = JSON.parse(JSON.stringify(t2));
            return n2 = e2, n2;
          }, e.getSqueezedParams = function(t2, e2) {
            return e2.map((e3) => t2[e3]).join(", ");
          }, e.getCoordsDataType = function(t2) {
            if (t2 <= 1)
              return "int";
            if (2 === t2)
              return "ivec2";
            if (3 === t2)
              return "ivec3";
            if (4 === t2)
              return "ivec4";
            if (5 === t2)
              return "ivec5";
            if (6 === t2)
              return "ivec6";
            throw Error(`GPU for rank ${t2} is not yet supported`);
          }, e.getGlChannels = function(t2 = 6) {
            return ["x", "y", "z", "w", "u", "v"].slice(0, t2);
          };
        }, 7305: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.createNewWebGLContext = e.createWebGLContext = void 0;
          const r = n(6231), i = n(1713), o = {};
          function a(t2) {
            const e2 = function() {
              if ("undefined" == typeof document) {
                if ("undefined" == typeof OffscreenCanvas)
                  throw new TypeError("failed to create canvas: OffscreenCanvas is not supported");
                return new OffscreenCanvas(1, 1);
              }
              const t3 = document.createElement("canvas");
              return t3.width = 1, t3.height = 1, t3;
            }();
            let n2;
            const o2 = { alpha: false, depth: false, antialias: false, stencil: false, preserveDrawingBuffer: false, premultipliedAlpha: false, failIfMajorPerformanceCaveat: false };
            if ((!t2 || "webgl2" === t2) && (n2 = e2.getContext("webgl2", o2), n2))
              try {
                return new i.WebGLContext(n2, 2);
              } catch (t3) {
                r.Logger.warning("GlContextFactory", `failed to create WebGLContext using contextId 'webgl2'. Error: ${t3}`);
              }
            if ((!t2 || "webgl" === t2) && (n2 = e2.getContext("webgl", o2) || e2.getContext("experimental-webgl", o2), n2))
              try {
                return new i.WebGLContext(n2, 1);
              } catch (t3) {
                r.Logger.warning("GlContextFactory", `failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${t3}`);
              }
            throw new Error("WebGL is not supported");
          }
          e.createWebGLContext = function t2(e2) {
            let n2;
            e2 && "webgl2" !== e2 || !("webgl2" in o) ? e2 && "webgl" !== e2 || !("webgl" in o) || (n2 = o.webgl) : n2 = o.webgl2, n2 = n2 || a(e2), e2 = e2 || 1 === n2.version ? "webgl" : "webgl2";
            const r2 = n2.gl;
            return o[e2] = n2, r2.isContextLost() ? (delete o[e2], t2(e2)) : (r2.disable(r2.DEPTH_TEST), r2.disable(r2.STENCIL_TEST), r2.disable(r2.BLEND), r2.disable(r2.DITHER), r2.disable(r2.POLYGON_OFFSET_FILL), r2.disable(r2.SAMPLE_COVERAGE), r2.enable(r2.SCISSOR_TEST), r2.enable(r2.CULL_FACE), r2.cullFace(r2.BACK), n2);
          }, e.createNewWebGLContext = a;
        }, 1713: function(t, e, n) {
          "use strict";
          var r = this && this.__createBinding || (Object.create ? function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2);
            var i2 = Object.getOwnPropertyDescriptor(e2, n2);
            i2 && !("get" in i2 ? !e2.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
              return e2[n2];
            } }), Object.defineProperty(t2, r2, i2);
          } : function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2), t2[r2] = e2[n2];
          }), i = this && this.__setModuleDefault || (Object.create ? function(t2, e2) {
            Object.defineProperty(t2, "default", { enumerable: true, value: e2 });
          } : function(t2, e2) {
            t2.default = e2;
          }), o = this && this.__importStar || function(t2) {
            if (t2 && t2.__esModule)
              return t2;
            var e2 = {};
            if (null != t2)
              for (var n2 in t2)
                "default" !== n2 && Object.prototype.hasOwnProperty.call(t2, n2) && r(e2, t2, n2);
            return i(e2, t2), e2;
          };
          Object.defineProperty(e, "__esModule", { value: true }), e.WebGLContext = e.linearSearchLastTrue = void 0;
          const a = n(1670), s = o(n(7769)), u = n(9390);
          function c(t2) {
            let e2 = 0;
            for (; e2 < t2.length && t2[e2](); ++e2)
              ;
            return e2 - 1;
          }
          e.linearSearchLastTrue = c, e.WebGLContext = class {
            constructor(t2, e2) {
              this.frameBufferBound = false, this.itemsToPoll = [], this.gl = t2, this.version = e2, this.getExtensions(), this.vertexbuffer = this.createVertexbuffer(), this.framebuffer = this.createFramebuffer(), this.queryVitalParameters();
            }
            allocateTexture(t2, e2, n2, r2) {
              const i2 = this.gl, o2 = i2.createTexture();
              i2.bindTexture(i2.TEXTURE_2D, o2), i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_MIN_FILTER, i2.NEAREST), i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_MAG_FILTER, i2.NEAREST), i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_WRAP_S, i2.CLAMP_TO_EDGE), i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_WRAP_T, i2.CLAMP_TO_EDGE);
              const a2 = r2 ? n2.encode(r2, t2 * e2) : null;
              return i2.texImage2D(i2.TEXTURE_2D, 0, n2.internalFormat, t2, e2, 0, n2.format, n2.textureType, a2), this.checkError(), o2;
            }
            updateTexture(t2, e2, n2, r2, i2) {
              const o2 = this.gl;
              o2.bindTexture(o2.TEXTURE_2D, t2);
              const a2 = r2.encode(i2, e2 * n2);
              o2.texSubImage2D(o2.TEXTURE_2D, 0, 0, 0, e2, n2, r2.format, r2.textureType, a2), this.checkError();
            }
            attachFramebuffer(t2, e2, n2) {
              const r2 = this.gl;
              r2.bindTexture(r2.TEXTURE_2D, t2), r2.bindFramebuffer(r2.FRAMEBUFFER, this.framebuffer), r2.framebufferTexture2D(r2.FRAMEBUFFER, r2.COLOR_ATTACHMENT0, r2.TEXTURE_2D, t2, 0), this.checkError(), r2.viewport(0, 0, e2, n2), r2.scissor(0, 0, e2, n2);
            }
            readTexture(t2, e2, n2, r2, i2, o2) {
              const a2 = this.gl;
              o2 || (o2 = 1), this.frameBufferBound || this.attachFramebuffer(t2, e2, n2);
              const s2 = this.getEncoder(i2, o2), u2 = s2.allocate(e2 * n2);
              return a2.bindTexture(a2.TEXTURE_2D, t2), a2.framebufferTexture2D(a2.FRAMEBUFFER, a2.COLOR_ATTACHMENT0, a2.TEXTURE_2D, t2, 0), a2.readPixels(0, 0, e2, n2, a2.RGBA, s2.textureType, u2), this.checkError(), s2.decode(u2, r2);
            }
            isFramebufferReady() {
              return true;
            }
            getActiveTexture() {
              const t2 = this.gl;
              return "TEXTURE" + (t2.getParameter(this.gl.ACTIVE_TEXTURE) - t2.TEXTURE0);
            }
            getTextureBinding() {
              return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D);
            }
            getFramebufferBinding() {
              return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING);
            }
            setVertexAttributes(t2, e2) {
              const n2 = this.gl;
              n2.vertexAttribPointer(t2, 3, n2.FLOAT, false, 20, 0), n2.enableVertexAttribArray(t2), -1 !== e2 && (n2.vertexAttribPointer(e2, 2, n2.FLOAT, false, 20, 12), n2.enableVertexAttribArray(e2)), this.checkError();
            }
            createProgram(t2, e2) {
              const n2 = this.gl, r2 = n2.createProgram();
              return n2.attachShader(r2, t2), n2.attachShader(r2, e2), n2.linkProgram(r2), r2;
            }
            compileShader(t2, e2) {
              const n2 = this.gl, r2 = n2.createShader(e2);
              if (!r2)
                throw new Error(`createShader() returned null with type ${e2}`);
              if (n2.shaderSource(r2, t2), n2.compileShader(r2), false === n2.getShaderParameter(r2, n2.COMPILE_STATUS))
                throw new Error(`Failed to compile shader: ${n2.getShaderInfoLog(r2)}
Shader source:
${t2}`);
              return r2;
            }
            deleteShader(t2) {
              this.gl.deleteShader(t2);
            }
            bindTextureToUniform(t2, e2, n2) {
              const r2 = this.gl;
              r2.activeTexture(r2.TEXTURE0 + e2), this.checkError(), r2.bindTexture(r2.TEXTURE_2D, t2), this.checkError(), r2.uniform1i(n2, e2), this.checkError();
            }
            draw() {
              this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4), this.checkError();
            }
            checkError() {
              if (a.env.debug) {
                const t2 = this.gl, e2 = t2.getError();
                let n2 = "";
                switch (e2) {
                  case t2.NO_ERROR:
                    return;
                  case t2.INVALID_ENUM:
                    n2 = "INVALID_ENUM";
                    break;
                  case t2.INVALID_VALUE:
                    n2 = "INVALID_VALUE";
                    break;
                  case t2.INVALID_OPERATION:
                    n2 = "INVALID_OPERATION";
                    break;
                  case t2.INVALID_FRAMEBUFFER_OPERATION:
                    n2 = "INVALID_FRAMEBUFFER_OPERATION";
                    break;
                  case t2.OUT_OF_MEMORY:
                    n2 = "OUT_OF_MEMORY";
                    break;
                  case t2.CONTEXT_LOST_WEBGL:
                    n2 = "CONTEXT_LOST_WEBGL";
                    break;
                  default:
                    n2 = `Unknown WebGL Error: ${e2.toString(16)}`;
                }
                throw new Error(n2);
              }
            }
            deleteTexture(t2) {
              this.gl.deleteTexture(t2);
            }
            deleteProgram(t2) {
              this.gl.deleteProgram(t2);
            }
            getEncoder(t2, e2, n2 = 0) {
              if (2 === this.version)
                return new s.RedFloat32DataEncoder(this.gl, e2);
              switch (t2) {
                case "float":
                  return 1 === n2 || this.isRenderFloat32Supported ? new s.RGBAFloatDataEncoder(this.gl, e2) : new s.RGBAFloatDataEncoder(this.gl, e2, this.textureHalfFloatExtension.HALF_FLOAT_OES);
                case "int":
                  throw new Error("not implemented");
                case "byte":
                  return new s.Uint8DataEncoder(this.gl, e2);
                default:
                  throw new Error(`Invalid dataType: ${t2}`);
              }
            }
            clearActiveTextures() {
              const t2 = this.gl;
              for (let e2 = 0; e2 < this.maxTextureImageUnits; ++e2)
                t2.activeTexture(t2.TEXTURE0 + e2), t2.bindTexture(t2.TEXTURE_2D, null);
            }
            dispose() {
              if (this.disposed)
                return;
              const t2 = this.gl;
              t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.deleteFramebuffer(this.framebuffer), t2.bindBuffer(t2.ARRAY_BUFFER, null), t2.deleteBuffer(this.vertexbuffer), t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, null), t2.finish(), this.disposed = true;
            }
            createDefaultGeometry() {
              return new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
            }
            createVertexbuffer() {
              const t2 = this.gl, e2 = t2.createBuffer();
              if (!e2)
                throw new Error("createBuffer() returned null");
              const n2 = this.createDefaultGeometry();
              return t2.bindBuffer(t2.ARRAY_BUFFER, e2), t2.bufferData(t2.ARRAY_BUFFER, n2, t2.STATIC_DRAW), this.checkError(), e2;
            }
            createFramebuffer() {
              const t2 = this.gl.createFramebuffer();
              if (!t2)
                throw new Error("createFramebuffer returned null");
              return t2;
            }
            queryVitalParameters() {
              const t2 = this.gl;
              if (this.isFloatTextureAttachableToFrameBuffer = this.checkFloatTextureAttachableToFrameBuffer(), this.isRenderFloat32Supported = this.checkRenderFloat32(), this.isFloat32DownloadSupported = this.checkFloat32Download(), 1 === this.version && !this.textureHalfFloatExtension && !this.isRenderFloat32Supported)
                throw new Error("both float32 and float16 TextureType are not supported");
              this.isBlendSupported = !this.isRenderFloat32Supported || this.checkFloat32Blend(), this.maxTextureSize = t2.getParameter(t2.MAX_TEXTURE_SIZE), this.maxTextureImageUnits = t2.getParameter(t2.MAX_TEXTURE_IMAGE_UNITS), this.version;
            }
            getExtensions() {
              2 === this.version ? (this.colorBufferFloatExtension = this.gl.getExtension("EXT_color_buffer_float"), this.disjointTimerQueryWebgl2Extension = this.gl.getExtension("EXT_disjoint_timer_query_webgl2")) : (this.textureFloatExtension = this.gl.getExtension("OES_texture_float"), this.textureHalfFloatExtension = this.gl.getExtension("OES_texture_half_float"));
            }
            checkFloatTextureAttachableToFrameBuffer() {
              const t2 = this.gl, e2 = t2.createTexture();
              t2.bindTexture(t2.TEXTURE_2D, e2);
              const n2 = 2 === this.version ? t2.RGBA32F : t2.RGBA;
              t2.texImage2D(t2.TEXTURE_2D, 0, n2, 1, 1, 0, t2.RGBA, t2.FLOAT, null);
              const r2 = t2.createFramebuffer();
              t2.bindFramebuffer(t2.FRAMEBUFFER, r2), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, e2, 0);
              const i2 = t2.checkFramebufferStatus(t2.FRAMEBUFFER) === t2.FRAMEBUFFER_COMPLETE;
              return t2.bindTexture(t2.TEXTURE_2D, null), t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.deleteTexture(e2), t2.deleteFramebuffer(r2), i2;
            }
            checkRenderFloat32() {
              if (2 === this.version) {
                if (!this.colorBufferFloatExtension)
                  return false;
              } else if (!this.textureFloatExtension)
                return false;
              return this.isFloatTextureAttachableToFrameBuffer;
            }
            checkFloat32Download() {
              if (2 === this.version) {
                if (!this.colorBufferFloatExtension)
                  return false;
              } else {
                if (!this.textureFloatExtension)
                  return false;
                if (!this.gl.getExtension("WEBGL_color_buffer_float"))
                  return false;
              }
              return this.isFloatTextureAttachableToFrameBuffer;
            }
            checkFloat32Blend() {
              const t2 = this.gl;
              let e2, n2, r2, i2, o2;
              try {
                e2 = t2.createTexture(), n2 = t2.createFramebuffer(), t2.bindTexture(t2.TEXTURE_2D, e2);
                const a2 = 2 === this.version ? t2.RGBA32F : t2.RGBA;
                return t2.texImage2D(t2.TEXTURE_2D, 0, a2, 1, 1, 0, t2.RGBA, t2.FLOAT, null), t2.bindFramebuffer(t2.FRAMEBUFFER, n2), t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, e2, 0), t2.enable(t2.BLEND), r2 = t2.createShader(t2.VERTEX_SHADER), !!r2 && (t2.shaderSource(r2, "void main(){}"), t2.compileShader(r2), i2 = t2.createShader(t2.FRAGMENT_SHADER), !!i2 && (t2.shaderSource(i2, "precision highp float;void main(){gl_FragColor=vec4(0.5);}"), t2.compileShader(i2), o2 = t2.createProgram(), !!o2 && (t2.attachShader(o2, r2), t2.attachShader(o2, i2), t2.linkProgram(o2), t2.useProgram(o2), t2.drawArrays(t2.POINTS, 0, 1), t2.getError() === t2.NO_ERROR)));
              } finally {
                t2.disable(t2.BLEND), o2 && t2.deleteProgram(o2), r2 && t2.deleteShader(r2), i2 && t2.deleteShader(i2), n2 && (t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.deleteFramebuffer(n2)), e2 && (t2.bindTexture(t2.TEXTURE_2D, null), t2.deleteTexture(e2));
              }
            }
            beginTimer() {
              if (2 === this.version && this.disjointTimerQueryWebgl2Extension) {
                const t2 = this.gl, e2 = this.disjointTimerQueryWebgl2Extension, n2 = t2.createQuery();
                return t2.beginQuery(e2.TIME_ELAPSED_EXT, n2), n2;
              }
              throw new Error("WebGL1 profiling currently not supported.");
            }
            endTimer() {
              if (2 !== this.version || !this.disjointTimerQueryWebgl2Extension)
                throw new Error("WebGL1 profiling currently not supported");
              {
                const t2 = this.gl, e2 = this.disjointTimerQueryWebgl2Extension;
                t2.endQuery(e2.TIME_ELAPSED_EXT);
              }
            }
            isTimerResultAvailable(t2) {
              let e2 = false, n2 = false;
              if (2 !== this.version || !this.disjointTimerQueryWebgl2Extension)
                throw new Error("WebGL1 profiling currently not supported");
              {
                const r2 = this.gl, i2 = this.disjointTimerQueryWebgl2Extension;
                e2 = r2.getQueryParameter(t2, r2.QUERY_RESULT_AVAILABLE), n2 = r2.getParameter(i2.GPU_DISJOINT_EXT);
              }
              return e2 && !n2;
            }
            getTimerResult(t2) {
              let e2 = 0;
              if (2 !== this.version)
                throw new Error("WebGL1 profiling currently not supported");
              {
                const n2 = this.gl;
                e2 = n2.getQueryParameter(t2, n2.QUERY_RESULT), n2.deleteQuery(t2);
              }
              return e2 / 1e6;
            }
            async waitForQueryAndGetTime(t2) {
              return await (0, u.repeatedTry)(() => this.isTimerResultAvailable(t2)), this.getTimerResult(t2);
            }
            async createAndWaitForFence() {
              const t2 = this.createFence(this.gl);
              return this.pollFence(t2);
            }
            createFence(t2) {
              let e2;
              const n2 = t2, r2 = n2.fenceSync(n2.SYNC_GPU_COMMANDS_COMPLETE, 0);
              return t2.flush(), e2 = null === r2 ? () => true : () => {
                const t3 = n2.clientWaitSync(r2, 0, 0);
                return t3 === n2.ALREADY_SIGNALED || t3 === n2.CONDITION_SATISFIED;
              }, { query: r2, isFencePassed: e2 };
            }
            async pollFence(t2) {
              return new Promise((e2) => {
                this.addItemToPoll(() => t2.isFencePassed(), () => e2());
              });
            }
            pollItems() {
              const t2 = c(this.itemsToPoll.map((t3) => t3.isDoneFn));
              for (let e2 = 0; e2 <= t2; ++e2) {
                const { resolveFn: t3 } = this.itemsToPoll[e2];
                t3();
              }
              this.itemsToPoll = this.itemsToPoll.slice(t2 + 1);
            }
            async addItemToPoll(t2, e2) {
              this.itemsToPoll.push({ isDoneFn: t2, resolveFn: e2 }), this.itemsToPoll.length > 1 || await (0, u.repeatedTry)(() => (this.pollItems(), 0 === this.itemsToPoll.length));
            }
          };
        }, 1036: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.ExecutionPlan = void 0;
          const r = n(6231);
          class i {
            constructor(t2, e2) {
              this.op = t2, this.node = e2;
            }
          }
          e.ExecutionPlan = class {
            constructor(t2, e2, n2) {
              this.graph = t2, this.profiler = n2, this.initialize(e2);
            }
            initialize(t2) {
              this.profiler.event("session", "ExecutionPlan.initialize", () => {
                const e2 = this.graph.getNodes();
                if (e2.length !== t2.length)
                  throw new Error("The size of nodes and OPs do not match.");
                this._ops = t2.map((t3, n2) => new i(t3, e2[n2])), this.reset(), this._starter = [], this._ops.forEach((t3, e3) => {
                  let n2 = true;
                  for (const e4 of t3.node.inputs)
                    if (!this._values[e4] && -1 === this.graph.getInputIndices().indexOf(e4)) {
                      n2 = false;
                      break;
                    }
                  n2 && this._starter.push(e3);
                });
              });
            }
            reset() {
              this._values = this.graph.getValues().map((t2) => t2.tensor);
            }
            async execute(t2, e2) {
              return this.profiler.event("session", "ExecutionPlan.execute", async () => {
                this.reset();
                const n2 = t2.createInferenceHandler(), i2 = this.graph.getInputIndices();
                if (e2.length !== i2.length)
                  throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${e2.length} expected: ${i2.length}`);
                e2.forEach((t3, e3) => {
                  const n3 = i2[e3];
                  this._values[n3] = t3;
                });
                const o = this._starter.slice(0), a = this.graph.getValues(), s = this.graph.getNodes();
                let u = 0;
                for (; u < o.length; ) {
                  const t3 = o[u++], e3 = this._ops[t3], i3 = e3.node.inputs.map((t4) => this._values[t4]);
                  if (-1 !== i3.indexOf(void 0))
                    throw new Error(`unresolved input detected: op: ${e3.node}`);
                  const c2 = i3;
                  r.Logger.verbose("ExecPlan", `Runing op:${e3.node.name} (${c2.map((t4, n3) => `'${e3.node.inputs[n3]}': ${t4.type}[${t4.dims.join(",")}]`).join(", ")})`);
                  const l = await this.profiler.event("node", e3.node.name, async () => e3.op.impl(n2, c2, e3.op.context));
                  if (l.length !== e3.node.outputs.length)
                    throw new Error("the size of output does not match model definition.");
                  l.forEach((t4, n3) => {
                    const r2 = e3.node.outputs[n3];
                    if (this._values[r2])
                      throw new Error(`output [${r2}] already has value: op:${e3.node.name}`);
                    this._values[r2] = t4;
                  });
                  const p = /* @__PURE__ */ new Set();
                  l.forEach((t4, n3) => {
                    const r2 = e3.node.outputs[n3];
                    for (const t5 of a[r2].to) {
                      const e4 = s[t5];
                      let n4 = true;
                      for (const t6 of e4.inputs)
                        if (!this._values[t6]) {
                          n4 = false;
                          break;
                        }
                      n4 && p.add(t5);
                    }
                  }), o.push(...p);
                }
                const c = [];
                for (let t3 = 0; t3 < this.graph.getOutputIndices().length; t3++) {
                  const e3 = this.graph.getOutputIndices()[t3], n3 = this._values[e3];
                  if (void 0 === n3)
                    throw new Error(`required output [${e3}] does not have value`);
                  0 === e3 ? await n3.getData() : n3.data, c.push(n3);
                }
                return r.Logger.verbose("ExecPlan", "disposing of inferenceHandler"), n2.dispose(), c;
              });
            }
          };
        }, 7070: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Graph = void 0;
          const r = n(1446), i = n(7778), o = n(9395), a = n(9162), s = n(2517);
          var u = o.onnxruntime.experimental.fbs;
          e.Graph = { from: (t2, e2) => new p(t2, e2) };
          class c {
            constructor(t2) {
              this._from = void 0, this._to = [], this.tensor = void 0, this.type = void 0, t2 && (this.type = s.ProtoUtil.tensorValueTypeFromProto(t2.type.tensorType));
            }
            get from() {
              return this._from;
            }
            get to() {
              return this._to;
            }
          }
          class l {
            constructor(t2, e2) {
              t2 instanceof r.onnx.NodeProto ? (this.name = t2.name, this.opType = t2.opType, this.attributes = new i.Attribute(t2.attribute)) : t2 instanceof u.Node && (this.name = null != e2 ? e2 : t2.name(), this.opType = t2.opType(), this.attributes = new i.Attribute(s.ProtoUtil.tensorAttributesFromORTFormat(t2))), this.inputs = [], this.outputs = [], this.executeNode = true;
            }
          }
          class p {
            constructor(t2, e2) {
              if (!t2)
                throw new TypeError("graph is empty");
              this.buildGraph(t2), this.transformGraph(e2), this.checkIsAcyclic();
            }
            getInputIndices() {
              return this._allInputIndices;
            }
            getInputNames() {
              return this._allInputNames;
            }
            getOutputIndices() {
              return this._allOutputIndices;
            }
            getOutputNames() {
              return this._allOutputNames;
            }
            getValues() {
              return this._allData;
            }
            getNodes() {
              return this._nodes;
            }
            buildGraph(t2) {
              if (t2 instanceof r.onnx.GraphProto)
                this.buildGraphFromOnnxFormat(t2);
              else {
                if (!(t2 instanceof u.Graph))
                  throw new TypeError("Graph type is not supported.");
                this.buildGraphFromOrtFormat(t2);
              }
            }
            buildGraphFromOnnxFormat(t2) {
              const e2 = /* @__PURE__ */ new Map();
              this._allData = [], this._allInputIndices = [], this._allInputNames = [], this._allOutputIndices = [], this._allOutputNames = [], this._nodes = [];
              const n2 = /* @__PURE__ */ new Map();
              if (!t2.input)
                throw new Error("missing information in graph: input");
              const r2 = [];
              for (const n3 of t2.input) {
                if (e2.has(n3.name))
                  throw new Error(`duplicated input name: ${n3.name}`);
                const t3 = this._allData.push(new c(n3)) - 1;
                e2.set(n3.name, t3), r2.push(n3.name);
              }
              if (!t2.initializer)
                throw new Error("missing information in graph: initializer");
              for (const n3 of t2.initializer) {
                let t3 = e2.get(n3.name);
                if (void 0 === t3) {
                  const r3 = new c();
                  r3.type = { shape: { dims: s.ProtoUtil.tensorDimsFromProto(n3.dims) }, tensorType: s.ProtoUtil.tensorDataTypeFromProto(n3.dataType) }, t3 = this._allData.push(r3) - 1, e2.set(n3.name, t3);
                }
                this._allData[t3]._from = -1, this._allData[t3].tensor = a.Tensor.fromProto(n3);
              }
              for (let t3 = 0; t3 < this._allData.length; t3++)
                this._allData[t3].tensor || (this._allInputIndices.push(t3), this._allInputNames.push(r2[t3]));
              if (!t2.output)
                throw new Error("missing information in graph: output");
              for (const n3 of t2.output) {
                if (e2.has(n3.name))
                  throw new Error(`duplicated output name: ${n3.name}`);
                const t3 = this._allData.push(new c(n3)) - 1;
                e2.set(n3.name, t3), this._allOutputIndices.push(t3), this._allOutputNames.push(n3.name);
              }
              if (!t2.node)
                throw new Error("missing information in graph: node");
              for (const e3 of t2.node) {
                if (!e3.name)
                  for (let t4 = 0; ; t4++) {
                    const r3 = `unnamed_${e3.opType}_${t4}`;
                    if (!n2.has(r3)) {
                      e3.name = r3;
                      break;
                    }
                  }
                if (n2.has(e3.name))
                  throw new Error(`duplicated node name: ${e3.name}`);
                const t3 = this._nodes.push(new l(e3)) - 1;
                n2.set(e3.name, t3);
              }
              for (let n3 = 0; n3 < this._nodes.length; n3++) {
                const r3 = this._nodes[n3], i2 = t2.node[n3];
                if (!i2.output)
                  throw new Error(`missing output for node: ${i2.name}`);
                for (const t3 of i2.output) {
                  let o2 = e2.get(t3);
                  if (void 0 === o2 && (o2 = this._allData.push(new c()) - 1, e2.set(t3, o2)), r3.outputs.push(o2), void 0 !== this._allData[o2]._from)
                    throw new Error(`multiple nodes output to one data value: ${o2}`);
                  if (this._allData[o2]._from = n3, "Constant" === i2.opType) {
                    if (!i2.attribute || 1 !== i2.attribute.length || !i2.attribute[0].t)
                      throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");
                    if (!i2.output || 1 !== i2.output.length)
                      throw new Error("missing output or incorrect number of outputs for this Constant operator");
                    r3.outputs.pop(), r3.executeNode = false, this._allData[o2]._from = -1, this._allData[o2].tensor = a.Tensor.fromProto(i2.attribute[0].t);
                  }
                }
              }
              for (let n3 = 0; n3 < this._nodes.length; n3++) {
                const r3 = this._nodes[n3], i2 = t2.node[n3];
                if (!i2.input)
                  throw new Error(`missing input for node: ${i2.name}`);
                for (const t3 of i2.input) {
                  const o2 = e2.get(t3);
                  if (void 0 === o2) {
                    if ("" === t3 && 3 === i2.input.length && "Resize" === i2.opType)
                      continue;
                    throw new Error(`unrecognized input '${t3}' for node: ${i2.name}`);
                  }
                  r3.inputs.push(o2), this._allData[o2]._to.push(n3);
                }
              }
              return true;
            }
            buildGraphFromOrtFormat(t2) {
              var e2, n2, r2;
              const i2 = /* @__PURE__ */ new Map();
              this._allData = [], this._allInputIndices = [], this._allInputNames = [], this._allOutputIndices = [], this._allOutputNames = [], this._nodes = [];
              const o2 = /* @__PURE__ */ new Map(), p2 = [];
              for (let o3 = 0; o3 < t2.inputsLength(); o3++) {
                const a2 = t2.inputs(o3);
                if (i2.has(a2))
                  throw new Error(`duplicated input name: ${a2}`);
                for (let o4 = 0; o4 < t2.nodeArgsLength(); o4++)
                  if ((null === (e2 = t2.nodeArgs(o4)) || void 0 === e2 ? void 0 : e2.name()) === a2) {
                    const e3 = new c();
                    if ((null === (r2 = null === (n2 = t2.nodeArgs(o4)) || void 0 === n2 ? void 0 : n2.type()) || void 0 === r2 ? void 0 : r2.valueType()) !== u.TypeInfoValue.tensor_type)
                      throw new Error("Unexpected value type for the nodeArg.");
                    const l2 = t2.nodeArgs(o4).type().value(new u.TensorTypeAndShape()), f = s.ProtoUtil.tensorDataTypeFromProto(l2.elemType()), d = l2.shape(), h = [];
                    for (let t3 = 0; t3 < d.dimLength(); t3++)
                      h.push(s.LongUtil.longToNumber(d.dim(t3).value().dimValue()));
                    e3.type = { shape: { dims: h }, tensorType: f };
                    const g = this._allData.push(e3) - 1;
                    i2.set(a2, g), p2.push(a2);
                  }
              }
              for (let e3 = 0; e3 < t2.initializersLength(); e3++) {
                const n3 = t2.initializers(e3);
                let r3 = i2.get(n3.name());
                if (void 0 === r3) {
                  const t3 = new c(), e4 = s.ProtoUtil.tensorDimsFromORTFormat(n3), o3 = s.ProtoUtil.tensorDataTypeFromProto(n3.dataType());
                  t3.type = { shape: { dims: e4 }, tensorType: o3 }, r3 = this._allData.push(t3) - 1, i2.set(n3.name(), r3);
                }
                this._allData[r3]._from = -1, this._allData[r3].tensor = a.Tensor.fromOrtTensor(n3);
              }
              for (let t3 = 0; t3 < this._allData.length; t3++)
                this._allData[t3].tensor || (this._allInputIndices.push(t3), this._allInputNames.push(p2[t3]));
              for (let e3 = 0; e3 < t2.outputsLength(); e3++) {
                const n3 = t2.outputs(e3);
                if (i2.has(n3))
                  throw new Error(`duplicated output name: ${n3}`);
                const r3 = this._allData.push(new c()) - 1;
                i2.set(n3, r3), this._allOutputIndices.push(r3), this._allOutputNames.push(n3);
              }
              if (!t2.nodes)
                throw new Error("missing information in graph: node");
              for (let e3 = 0; e3 < t2.nodesLength(); e3++) {
                const n3 = t2.nodes(e3);
                let r3 = n3.name();
                if (!r3)
                  for (let t3 = 0; r3 = `unnamed_${n3.opType()}_${t3}`, o2.has(r3); t3++)
                    ;
                if (o2.has(r3))
                  throw new Error(`duplicated node name: ${r3}`);
                const i3 = this._nodes.push(new l(n3, r3)) - 1;
                o2.set(r3, i3);
              }
              for (let e3 = 0; e3 < this._nodes.length; e3++) {
                const n3 = this._nodes[e3], r3 = t2.nodes(e3);
                if (null == r3)
                  throw new Error(`No node exists at index ${e3}`);
                if (0 === (null == r3 ? void 0 : r3.outputsLength()))
                  throw new Error(`missing output for node: ${r3.name}`);
                for (let t3 = 0; t3 < (null == r3 ? void 0 : r3.outputsLength()); t3++) {
                  const o3 = null == r3 ? void 0 : r3.outputs(t3);
                  let s2 = i2.get(o3);
                  if (void 0 === s2 && (s2 = this._allData.push(new c()) - 1, i2.set(o3, s2)), n3.outputs.push(s2), void 0 !== this._allData[s2]._from)
                    throw new Error(`multiple nodes output to one data value: ${s2}`);
                  if (this._allData[s2]._from = e3, "Constant" === r3.opType()) {
                    if (1 !== r3.attributesLength() || !r3.attributes(0).t())
                      throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");
                    if (1 !== r3.outputsLength())
                      throw new Error("missing output or incorrect number of outputs for this Constant operator");
                    n3.outputs.pop(), n3.executeNode = false, this._allData[s2]._from = -1, this._allData[s2].tensor = a.Tensor.fromOrtTensor(r3.attributes(0).t());
                  }
                }
              }
              for (let e3 = 0; e3 < this._nodes.length; e3++) {
                const n3 = this._nodes[e3], r3 = t2.nodes(e3);
                if (0 === r3.inputsLength())
                  throw new Error(`missing input for node: ${r3.name}`);
                for (let t3 = 0; t3 < r3.inputsLength(); t3++) {
                  const o3 = r3.inputs(t3), a2 = i2.get(o3);
                  if (void 0 === a2)
                    throw new Error(`unrecognized input '${o3}' for node: ${r3.name()}`);
                  n3.inputs.push(a2), this._allData[a2]._to.push(e3);
                }
              }
            }
            checkIsAcyclic() {
              const t2 = /* @__PURE__ */ new Set();
              this._allInputIndices.forEach((e3) => {
                this._allData[e3]._to.forEach((e4) => {
                  t2.add(e4);
                });
              });
              const e2 = Array.from(t2), n2 = new Array(this._nodes.length).fill("white");
              for (; e2.length > 0; ) {
                const t3 = e2.pop();
                "gray" === n2[t3] ? n2[t3] = "black" : (e2.push(t3), n2[t3] = "gray", this._nodes[t3].outputs.forEach((r2) => {
                  const i2 = this._allData[r2];
                  if (void 0 !== i2.tensor)
                    throw new Error("node outputs should not be initialized");
                  if (i2._from !== t3)
                    throw new Error("from property of the Value object doesn't match index of Node being processed");
                  i2._to.forEach((t4) => {
                    if ("gray" === n2[t4])
                      throw new Error("model graph is cyclic");
                    "white" === n2[t4] && e2.push(t4);
                  });
                }));
              }
            }
            transformGraph(t2) {
              this.removeAllIdentityNodes(), this.removeAllDropoutNodes(), this.fuseConvActivationNodes(), t2 && t2.transformGraph(this), this.finalizeGraph();
            }
            finalizeGraph() {
              let t2 = 0;
              for (let e2 = 0; e2 < this._nodes.length; e2++)
                this._nodes[e2].executeNode ? t2 > 0 && (this._nodes[e2].inputs.forEach((n2) => {
                  const r2 = this._allData[n2]._to.indexOf(e2 + t2);
                  -1 !== r2 && (this._allData[n2]._to[r2] = e2);
                }), this._nodes[e2].outputs.forEach((n2) => {
                  this._allData[n2]._from && this._allData[n2]._from === e2 + t2 && (this._allData[n2]._from = e2);
                })) : (t2++, this._nodes[e2].outputs.forEach((t3) => {
                  this._allData[t3]._from = -2;
                }), this._nodes.splice(e2, 1), e2--);
              t2 = 0;
              for (let e2 = 0; e2 < this._allData.length; e2++)
                if (-2 !== this._allData[e2].from || -1 !== this._allOutputIndices.indexOf(e2 + t2)) {
                  if (t2 > 0) {
                    let n2 = -1;
                    void 0 !== this._allData[e2].from && -1 !== this._allData[e2].from ? (n2 = this._nodes[this._allData[e2].from].outputs.indexOf(e2 + t2), -1 !== n2 && (this._nodes[this._allData[e2].from].outputs[n2] = e2)) : (n2 = this._allInputIndices.indexOf(e2 + t2), -1 !== n2 && (this._allInputIndices[n2] = e2)), this._allData[e2].to.forEach((r2) => {
                      n2 = this._nodes[r2].inputs.indexOf(e2 + t2), -1 !== n2 && (this._nodes[r2].inputs[n2] = e2);
                    }), 0 === this._allData[e2].to.length && (n2 = this._allOutputIndices.indexOf(e2 + t2), -1 !== n2 && (this._allOutputIndices[n2] = e2));
                  }
                } else
                  t2++, this._allData.splice(e2, 1), e2--;
            }
            deleteNode(t2) {
              const e2 = this._nodes[t2];
              if (e2.outputs.length > 1) {
                for (let t3 = 1; t3 < e2.outputs.length; t3++)
                  if (this._allData[e2.outputs[t3]].to.length > 0)
                    throw new Error("Node deletion with more than one output connected to other nodes is not supported. ");
              }
              e2.executeNode = false;
              const n2 = e2.inputs[0], r2 = e2.outputs[0], i2 = this._allData[r2].to, o2 = this._allData[n2].to.indexOf(t2);
              if (-1 === o2)
                throw new Error("The Value object doesn't have the current Node in it's 'to' property ");
              this._allData[n2].to.splice(o2, 1), this._allData[r2]._to = [];
              const a2 = this._allOutputIndices.indexOf(r2);
              if (-1 !== a2 && (this._allOutputIndices[a2] = n2), i2 && i2.length > 0)
                for (const t3 of i2) {
                  const e3 = this._nodes[t3].inputs.indexOf(r2);
                  if (-1 === e3)
                    throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");
                  this._nodes[t3].inputs[e3] = n2, this._allData[n2].to.push(t3);
                }
            }
            removeAllDropoutNodes() {
              let t2 = 0;
              for (const e2 of this._nodes) {
                if ("Dropout" === e2.opType) {
                  if (1 !== e2.inputs.length)
                    throw new Error("Dropout nodes should only contain one input. ");
                  if (1 !== e2.outputs.length && 2 !== e2.outputs.length)
                    throw new Error("Dropout nodes should contain either 1 or 2 output(s)");
                  if (2 === e2.outputs.length && 0 !== this._allData[e2.outputs[1]]._to.length)
                    throw new Error("Dropout nodes's second output should not be referenced by other nodes");
                  this.deleteNode(t2);
                }
                t2++;
              }
            }
            removeAllIdentityNodes() {
              let t2 = 0;
              for (const e2 of this._nodes)
                "Identity" === e2.opType && this.deleteNode(t2), t2++;
            }
            isActivation(t2) {
              switch (t2.opType) {
                case "Relu":
                case "Sigmoid":
                case "Clip":
                  return true;
                default:
                  return false;
              }
            }
            fuseConvActivationNodes() {
              for (const t2 of this._nodes)
                if ("Conv" === t2.opType) {
                  const e2 = this._allData[t2.outputs[0]]._to;
                  if (1 === e2.length && this.isActivation(this._nodes[e2[0]])) {
                    const n2 = this._nodes[e2[0]];
                    if ("Clip" === n2.opType)
                      if (1 === n2.inputs.length)
                        try {
                          t2.attributes.set("activation_params", "floats", [n2.attributes.getFloat("min"), n2.attributes.getFloat("max")]);
                        } catch (e3) {
                          t2.attributes.set("activation_params", "floats", [s.MIN_CLIP, s.MAX_CLIP]);
                        }
                      else {
                        if (!(n2.inputs.length >= 3 && void 0 !== this._allData[n2.inputs[1]].tensor && void 0 !== this._allData[n2.inputs[2]].tensor))
                          continue;
                        t2.attributes.set("activation_params", "floats", [this._allData[n2.inputs[1]].tensor.floatData[0], this._allData[n2.inputs[2]].tensor.floatData[0]]);
                      }
                    t2.attributes.set("activation", "string", n2.opType), this.deleteNode(e2[0]);
                  }
                }
            }
          }
        }, 6231: (t, e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.now = e.Profiler = e.Logger = void 0;
          const n = { verbose: 1e3, info: 2e3, warning: 4e3, error: 5e3, fatal: 6e3 }, r = { none: new class {
            log(t2, e2, n2) {
            }
          }(), console: new class {
            log(t2, e2, n2) {
              console.log(`${this.color(t2)} ${n2 ? "\x1B[35m" + n2 + "\x1B[0m " : ""}${e2}`);
            }
            color(t2) {
              switch (t2) {
                case "verbose":
                  return "\x1B[34;40mv\x1B[0m";
                case "info":
                  return "\x1B[32mi\x1B[0m";
                case "warning":
                  return "\x1B[30;43mw\x1B[0m";
                case "error":
                  return "\x1B[31;40me\x1B[0m";
                case "fatal":
                  return "\x1B[101mf\x1B[0m";
                default:
                  throw new Error(`unsupported severity: ${t2}`);
              }
            }
          }() }, i = { provider: "console", minimalSeverity: "warning", logDateTime: true, logSourceLocation: false };
          let o = { "": i };
          function a(t2, e2, n2, r2) {
            if (void 0 === e2)
              return i2 = t2, { verbose: a.verbose.bind(null, i2), info: a.info.bind(null, i2), warning: a.warning.bind(null, i2), error: a.error.bind(null, i2), fatal: a.fatal.bind(null, i2) };
            if (void 0 === n2)
              s(t2, e2);
            else if ("number" == typeof n2 && void 0 === r2)
              s(t2, e2);
            else if ("string" == typeof n2 && void 0 === r2)
              s(t2, n2, 0, e2);
            else {
              if ("string" != typeof n2 || "number" != typeof r2)
                throw new TypeError("input is valid");
              s(t2, n2, 0, e2);
            }
            var i2;
          }
          function s(t2, e2, i2, a2) {
            const s2 = o[a2 || ""] || o[""];
            n[t2] < n[s2.minimalSeverity] || (s2.logDateTime && (e2 = `${(/* @__PURE__ */ new Date()).toISOString()}|${e2}`), s2.logSourceLocation, r[s2.provider].log(t2, e2, a2));
          }
          !function(t2) {
            function e2(t3) {
              o = {}, n2("", t3 || {});
            }
            function n2(t3, n3) {
              if ("*" === t3)
                e2(n3);
              else {
                const e3 = o[t3] || i;
                o[t3] = { provider: n3.provider || e3.provider, minimalSeverity: n3.minimalSeverity || e3.minimalSeverity, logDateTime: void 0 === n3.logDateTime ? e3.logDateTime : n3.logDateTime, logSourceLocation: void 0 === n3.logSourceLocation ? e3.logSourceLocation : n3.logSourceLocation };
              }
            }
            t2.verbose = function(e3, n3) {
              t2("verbose", e3, n3);
            }, t2.info = function(e3, n3) {
              t2("info", e3, n3);
            }, t2.warning = function(e3, n3) {
              t2("warning", e3, n3);
            }, t2.error = function(e3, n3) {
              t2("error", e3, n3);
            }, t2.fatal = function(e3, n3) {
              t2("fatal", e3, n3);
            }, t2.reset = e2, t2.set = n2, t2.setWithEnv = function(t3) {
              const e3 = {};
              t3.logLevel && (e3.minimalSeverity = t3.logLevel), n2("", e3);
            };
          }(a || (a = {})), e.Logger = a;
          class u {
            constructor(t2, e2, n2, r2, i2, o2) {
              this.category = t2, this.name = e2, this.startTime = n2, this.endCallback = r2, this.timer = i2, this.ctx = o2;
            }
            end() {
              return this.endCallback(this);
            }
            async checkTimer() {
              if (void 0 === this.ctx || void 0 === this.timer)
                throw new Error("No webgl timer found");
              return this.ctx.endTimer(), this.ctx.waitForQueryAndGetTime(this.timer);
            }
          }
          class c {
            constructor(t2, e2, n2, r2) {
              this.category = t2, this.name = e2, this.startTime = n2, this.endTime = r2;
            }
          }
          e.Profiler = class {
            static create(t2) {
              return void 0 === t2 ? new this() : new this(t2.maxNumberEvents, t2.flushBatchSize, t2.flushIntervalInMilliseconds);
            }
            constructor(t2, e2, n2) {
              this._started = false, this._flushPointer = 0, this._started = false, this._maxNumberEvents = void 0 === t2 ? 1e4 : t2, this._flushBatchSize = void 0 === e2 ? 10 : e2, this._flushIntervalInMilliseconds = void 0 === n2 ? 5e3 : n2;
            }
            start() {
              this._started = true, this._timingEvents = [], this._flushTime = (0, e.now)(), this._flushPointer = 0;
            }
            stop() {
              for (this._started = false; this._flushPointer < this._timingEvents.length; this._flushPointer++)
                this.logOneEvent(this._timingEvents[this._flushPointer]);
            }
            event(t2, e2, n2, r2) {
              const i2 = this._started ? this.begin(t2, e2, r2) : void 0;
              let o2 = false;
              const a2 = n2();
              if (a2 && "function" == typeof a2.then)
                return o2 = true, new Promise((t3, e3) => {
                  a2.then(async (e4) => {
                    i2 && await i2.end(), t3(e4);
                  }, async (t4) => {
                    i2 && await i2.end(), e3(t4);
                  });
                });
              if (!o2 && i2) {
                const t3 = i2.end();
                if (t3 && "function" == typeof t3.then)
                  return new Promise((e3, n3) => {
                    t3.then(() => {
                      e3(a2);
                    }, (t4) => {
                      n3(t4);
                    });
                  });
              }
              return a2;
            }
            begin(t2, n2, r2) {
              if (!this._started)
                throw new Error("profiler is not started yet");
              if (void 0 === r2) {
                const r3 = (0, e.now)();
                return this.flush(r3), new u(t2, n2, r3, (t3) => this.endSync(t3));
              }
              {
                const e2 = r2.beginTimer();
                return new u(t2, n2, 0, async (t3) => this.end(t3), e2, r2);
              }
            }
            async end(t2) {
              const e2 = await t2.checkTimer();
              this._timingEvents.length < this._maxNumberEvents && (this._timingEvents.push(new c(t2.category, t2.name, t2.startTime, e2)), this.flush(e2));
            }
            endSync(t2) {
              const n2 = (0, e.now)();
              this._timingEvents.length < this._maxNumberEvents && (this._timingEvents.push(new c(t2.category, t2.name, t2.startTime, n2)), this.flush(n2));
            }
            logOneEvent(t2) {
              e.Logger.verbose(`Profiler.${t2.category}`, `${(t2.endTime - t2.startTime).toFixed(2)}ms on event '${t2.name}' at ${t2.endTime.toFixed(2)}`);
            }
            flush(t2) {
              if (this._timingEvents.length - this._flushPointer >= this._flushBatchSize || t2 - this._flushTime >= this._flushIntervalInMilliseconds) {
                for (const t3 = this._flushPointer; this._flushPointer < t3 + this._flushBatchSize && this._flushPointer < this._timingEvents.length; this._flushPointer++)
                  this.logOneEvent(this._timingEvents[this._flushPointer]);
                this._flushTime = (0, e.now)();
              }
            }
            get started() {
              return this._started;
            }
          }, e.now = "undefined" != typeof performance && performance.now ? () => performance.now() : Date.now;
        }, 2644: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Model = void 0;
          const r = n(5686), i = n(1446), o = n(7070), a = n(9395), s = n(2517);
          var u = a.onnxruntime.experimental.fbs;
          e.Model = class {
            constructor() {
            }
            load(t2, e2, n2) {
              if (!n2)
                try {
                  return void this.loadFromOnnxFormat(t2, e2);
                } catch (t3) {
                  if (void 0 !== n2)
                    throw t3;
                }
              this.loadFromOrtFormat(t2, e2);
            }
            loadFromOnnxFormat(t2, e2) {
              const n2 = i.onnx.ModelProto.decode(t2);
              if (s.LongUtil.longToNumber(n2.irVersion) < 3)
                throw new Error("only support ONNX model with IR_VERSION>=3");
              this._opsets = n2.opsetImport.map((t3) => ({ domain: t3.domain, version: s.LongUtil.longToNumber(t3.version) })), this._graph = o.Graph.from(n2.graph, e2);
            }
            loadFromOrtFormat(t2, e2) {
              const n2 = new r.flatbuffers.ByteBuffer(t2), i2 = u.InferenceSession.getRootAsInferenceSession(n2).model();
              if (s.LongUtil.longToNumber(i2.irVersion()) < 3)
                throw new Error("only support ONNX model with IR_VERSION>=3");
              this._opsets = [];
              for (let t3 = 0; t3 < i2.opsetImportLength(); t3++) {
                const e3 = i2.opsetImport(t3);
                this._opsets.push({ domain: null == e3 ? void 0 : e3.domain(), version: s.LongUtil.longToNumber(e3.version()) });
              }
              this._graph = o.Graph.from(i2.graph(), e2);
            }
            get graph() {
              return this._graph;
            }
            get opsets() {
              return this._opsets;
            }
          };
        }, 782: (t, e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.FLOAT_TYPES = e.INT_TYPES = e.NUMBER_TYPES = void 0, e.NUMBER_TYPES = ["float32", "float64", "int32", "int16", "int8", "uint16", "uint32", "uint8"], e.INT_TYPES = ["int32", "int16", "int8", "uint16", "uint32", "uint8"], e.FLOAT_TYPES = ["float32", "float64"];
        }, 1047: (t, e) => {
          "use strict";
          function n(t2, e2) {
            if (e2.endsWith("+")) {
              const n2 = Number.parseInt(e2.substring(0, e2.length - 1), 10);
              return !isNaN(n2) && n2 <= t2;
            }
            if (2 === e2.split("-").length) {
              const n2 = e2.split("-"), r = Number.parseInt(n2[0], 10), i = Number.parseInt(n2[1], 10);
              return !isNaN(r) && !isNaN(i) && r <= t2 && t2 <= i;
            }
            return Number.parseInt(e2, 10) === t2;
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.resolveOperator = void 0, e.resolveOperator = function(t2, e2, r) {
            for (const i of r) {
              const r2 = i[0], o = i[1], a = i[2], s = i[3], u = i[4];
              if (t2.opType === r2) {
                for (const t3 of e2)
                  if ((t3.domain === o || "ai.onnx" === t3.domain && "" === o) && n(t3.version, a))
                    return { opImpl: s, opInit: u };
              }
            }
            throw new TypeError(`cannot resolve operator '${t2.opType}' with opsets: ${e2.map((t3) => `${t3.domain || "ai.onnx"} v${t3.version}`).join(", ")}`);
          };
        }, 9395: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.onnxruntime = void 0;
          const r = n(5686);
          var i, o;
          i = e.onnxruntime || (e.onnxruntime = {}), function(t2) {
            let e2;
            !function(t3) {
              t3[t3.UNDEFINED = 0] = "UNDEFINED", t3[t3.FLOAT = 1] = "FLOAT", t3[t3.INT = 2] = "INT", t3[t3.STRING = 3] = "STRING", t3[t3.TENSOR = 4] = "TENSOR", t3[t3.GRAPH = 5] = "GRAPH", t3[t3.FLOATS = 6] = "FLOATS", t3[t3.INTS = 7] = "INTS", t3[t3.STRINGS = 8] = "STRINGS", t3[t3.TENSORS = 9] = "TENSORS", t3[t3.GRAPHS = 10] = "GRAPHS", t3[t3.SPARSE_TENSOR = 11] = "SPARSE_TENSOR", t3[t3.SPARSE_TENSORS = 12] = "SPARSE_TENSORS";
            }(e2 = t2.AttributeType || (t2.AttributeType = {}));
          }((o = i.experimental || (i.experimental = {})).fbs || (o.fbs = {})), function(t2) {
            !function(t3) {
              !function(t4) {
                let e2;
                !function(t5) {
                  t5[t5.UNKNOWN = 0] = "UNKNOWN", t5[t5.VALUE = 1] = "VALUE", t5[t5.PARAM = 2] = "PARAM";
                }(e2 = t4.DimensionValueType || (t4.DimensionValueType = {}));
              }(t3.fbs || (t3.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(t3) {
              !function(t4) {
                let e2;
                !function(t5) {
                  t5[t5.UNDEFINED = 0] = "UNDEFINED", t5[t5.FLOAT = 1] = "FLOAT", t5[t5.UINT8 = 2] = "UINT8", t5[t5.INT8 = 3] = "INT8", t5[t5.UINT16 = 4] = "UINT16", t5[t5.INT16 = 5] = "INT16", t5[t5.INT32 = 6] = "INT32", t5[t5.INT64 = 7] = "INT64", t5[t5.STRING = 8] = "STRING", t5[t5.BOOL = 9] = "BOOL", t5[t5.FLOAT16 = 10] = "FLOAT16", t5[t5.DOUBLE = 11] = "DOUBLE", t5[t5.UINT32 = 12] = "UINT32", t5[t5.UINT64 = 13] = "UINT64", t5[t5.COMPLEX64 = 14] = "COMPLEX64", t5[t5.COMPLEX128 = 15] = "COMPLEX128", t5[t5.BFLOAT16 = 16] = "BFLOAT16";
                }(e2 = t4.TensorDataType || (t4.TensorDataType = {}));
              }(t3.fbs || (t3.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(t3) {
              !function(t4) {
                let e2;
                !function(t5) {
                  t5[t5.Primitive = 0] = "Primitive", t5[t5.Fused = 1] = "Fused";
                }(e2 = t4.NodeType || (t4.NodeType = {}));
              }(t3.fbs || (t3.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(t3) {
              !function(t4) {
                let e2;
                !function(t5) {
                  t5[t5.NONE = 0] = "NONE", t5[t5.tensor_type = 1] = "tensor_type", t5[t5.sequence_type = 2] = "sequence_type", t5[t5.map_type = 3] = "map_type";
                }(e2 = t4.TypeInfoValue || (t4.TypeInfoValue = {}));
              }(t3.fbs || (t3.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsShape(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsShape(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  dim(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 4);
                    return r2 ? (n3 || new t2.experimental.fbs.Dimension()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  dimLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 4);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startShape(t3) {
                    t3.startObject(1);
                  }
                  static addDim(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static createDimVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startDimVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static endShape(t3) {
                    return t3.endObject();
                  }
                  static createShape(t3, e4) {
                    return n2.startShape(t3), n2.addDim(t3, e4), n2.endShape(t3);
                  }
                }
                e3.Shape = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsDimension(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsDimension(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  value(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 4);
                    return n3 ? (e4 || new t2.experimental.fbs.DimensionValue()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  denotation(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 6);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  static startDimension(t3) {
                    t3.startObject(2);
                  }
                  static addValue(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addDenotation(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static endDimension(t3) {
                    return t3.endObject();
                  }
                  static createDimension(t3, e4, r2) {
                    return n2.startDimension(t3), n2.addValue(t3, e4), n2.addDenotation(t3, r2), n2.endDimension(t3);
                  }
                }
                e3.Dimension = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsDimensionValue(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsDimensionValue(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  dimType() {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.readInt8(this.bb_pos + e4) : t2.experimental.fbs.DimensionValueType.UNKNOWN;
                  }
                  dimValue() {
                    let t3 = this.bb.__offset(this.bb_pos, 6);
                    return t3 ? this.bb.readInt64(this.bb_pos + t3) : this.bb.createLong(0, 0);
                  }
                  dimParam(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  static startDimensionValue(t3) {
                    t3.startObject(3);
                  }
                  static addDimType(e4, n3) {
                    e4.addFieldInt8(0, n3, t2.experimental.fbs.DimensionValueType.UNKNOWN);
                  }
                  static addDimValue(t3, e4) {
                    t3.addFieldInt64(1, e4, t3.createLong(0, 0));
                  }
                  static addDimParam(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static endDimensionValue(t3) {
                    return t3.endObject();
                  }
                  static createDimensionValue(t3, e4, r2, i2) {
                    return n2.startDimensionValue(t3), n2.addDimType(t3, e4), n2.addDimValue(t3, r2), n2.addDimParam(t3, i2), n2.endDimensionValue(t3);
                  }
                }
                e3.DimensionValue = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsTensorTypeAndShape(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsTensorTypeAndShape(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  elemType() {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.readInt32(this.bb_pos + e4) : t2.experimental.fbs.TensorDataType.UNDEFINED;
                  }
                  shape(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 6);
                    return n3 ? (e4 || new t2.experimental.fbs.Shape()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  static startTensorTypeAndShape(t3) {
                    t3.startObject(2);
                  }
                  static addElemType(e4, n3) {
                    e4.addFieldInt32(0, n3, t2.experimental.fbs.TensorDataType.UNDEFINED);
                  }
                  static addShape(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static endTensorTypeAndShape(t3) {
                    return t3.endObject();
                  }
                  static createTensorTypeAndShape(t3, e4, r2) {
                    return n2.startTensorTypeAndShape(t3), n2.addElemType(t3, e4), n2.addShape(t3, r2), n2.endTensorTypeAndShape(t3);
                  }
                }
                e3.TensorTypeAndShape = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsMapType(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsMapType(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  keyType() {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.readInt32(this.bb_pos + e4) : t2.experimental.fbs.TensorDataType.UNDEFINED;
                  }
                  valueType(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 6);
                    return n3 ? (e4 || new t2.experimental.fbs.TypeInfo()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  static startMapType(t3) {
                    t3.startObject(2);
                  }
                  static addKeyType(e4, n3) {
                    e4.addFieldInt32(0, n3, t2.experimental.fbs.TensorDataType.UNDEFINED);
                  }
                  static addValueType(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static endMapType(t3) {
                    return t3.endObject();
                  }
                  static createMapType(t3, e4, r2) {
                    return n2.startMapType(t3), n2.addKeyType(t3, e4), n2.addValueType(t3, r2), n2.endMapType(t3);
                  }
                }
                e3.MapType = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsSequenceType(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsSequenceType(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  elemType(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 4);
                    return n3 ? (e4 || new t2.experimental.fbs.TypeInfo()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  static startSequenceType(t3) {
                    t3.startObject(1);
                  }
                  static addElemType(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static endSequenceType(t3) {
                    return t3.endObject();
                  }
                  static createSequenceType(t3, e4) {
                    return n2.startSequenceType(t3), n2.addElemType(t3, e4), n2.endSequenceType(t3);
                  }
                }
                e3.SequenceType = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(t3) {
              (t3.fbs || (t3.fbs = {})).EdgeEnd = class {
                constructor() {
                  this.bb = null, this.bb_pos = 0;
                }
                __init(t4, e2) {
                  return this.bb_pos = t4, this.bb = e2, this;
                }
                nodeIndex() {
                  return this.bb.readUint32(this.bb_pos);
                }
                srcArgIndex() {
                  return this.bb.readInt32(this.bb_pos + 4);
                }
                dstArgIndex() {
                  return this.bb.readInt32(this.bb_pos + 8);
                }
                static createEdgeEnd(t4, e2, n2, r2) {
                  return t4.prep(4, 12), t4.writeInt32(r2), t4.writeInt32(n2), t4.writeInt32(e2), t4.offset();
                }
              };
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsNodeEdge(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsNodeEdge(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  nodeIndex() {
                    let t3 = this.bb.__offset(this.bb_pos, 4);
                    return t3 ? this.bb.readUint32(this.bb_pos + t3) : 0;
                  }
                  inputEdges(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 6);
                    return r2 ? (n3 || new t2.experimental.fbs.EdgeEnd()).__init(this.bb.__vector(this.bb_pos + r2) + 12 * e4, this.bb) : null;
                  }
                  inputEdgesLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 6);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  outputEdges(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 8);
                    return r2 ? (n3 || new t2.experimental.fbs.EdgeEnd()).__init(this.bb.__vector(this.bb_pos + r2) + 12 * e4, this.bb) : null;
                  }
                  outputEdgesLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 8);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startNodeEdge(t3) {
                    t3.startObject(3);
                  }
                  static addNodeIndex(t3, e4) {
                    t3.addFieldInt32(0, e4, 0);
                  }
                  static addInputEdges(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static startInputEdgesVector(t3, e4) {
                    t3.startVector(12, e4, 4);
                  }
                  static addOutputEdges(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static startOutputEdgesVector(t3, e4) {
                    t3.startVector(12, e4, 4);
                  }
                  static endNodeEdge(t3) {
                    return t3.endObject();
                  }
                  static createNodeEdge(t3, e4, r2, i2) {
                    return n2.startNodeEdge(t3), n2.addNodeIndex(t3, e4), n2.addInputEdges(t3, r2), n2.addOutputEdges(t3, i2), n2.endNodeEdge(t3);
                  }
                }
                e3.NodeEdge = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsNode(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsNode(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  name(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  docString(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 6);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  domain(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  sinceVersion() {
                    let t3 = this.bb.__offset(this.bb_pos, 10);
                    return t3 ? this.bb.readInt32(this.bb_pos + t3) : 0;
                  }
                  index() {
                    let t3 = this.bb.__offset(this.bb_pos, 12);
                    return t3 ? this.bb.readUint32(this.bb_pos + t3) : 0;
                  }
                  opType(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 14);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  type() {
                    let e4 = this.bb.__offset(this.bb_pos, 16);
                    return e4 ? this.bb.readInt32(this.bb_pos + e4) : t2.experimental.fbs.NodeType.Primitive;
                  }
                  executionProviderType(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 18);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  inputs(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 20);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  inputsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 20);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  outputs(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 22);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  outputsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 22);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  attributes(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 24);
                    return r2 ? (n3 || new t2.experimental.fbs.Attribute()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  attributesLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 24);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  inputArgCounts(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 26);
                    return e4 ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e4) + 4 * t3) : 0;
                  }
                  inputArgCountsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 26);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  inputArgCountsArray() {
                    let t3 = this.bb.__offset(this.bb_pos, 26);
                    return t3 ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t3), this.bb.__vector_len(this.bb_pos + t3)) : null;
                  }
                  implicitInputs(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 28);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  implicitInputsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 28);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startNode(t3) {
                    t3.startObject(13);
                  }
                  static addName(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addDocString(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static addDomain(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static addSinceVersion(t3, e4) {
                    t3.addFieldInt32(3, e4, 0);
                  }
                  static addIndex(t3, e4) {
                    t3.addFieldInt32(4, e4, 0);
                  }
                  static addOpType(t3, e4) {
                    t3.addFieldOffset(5, e4, 0);
                  }
                  static addType(e4, n3) {
                    e4.addFieldInt32(6, n3, t2.experimental.fbs.NodeType.Primitive);
                  }
                  static addExecutionProviderType(t3, e4) {
                    t3.addFieldOffset(7, e4, 0);
                  }
                  static addInputs(t3, e4) {
                    t3.addFieldOffset(8, e4, 0);
                  }
                  static createInputsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startInputsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addOutputs(t3, e4) {
                    t3.addFieldOffset(9, e4, 0);
                  }
                  static createOutputsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startOutputsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addAttributes(t3, e4) {
                    t3.addFieldOffset(10, e4, 0);
                  }
                  static createAttributesVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startAttributesVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addInputArgCounts(t3, e4) {
                    t3.addFieldOffset(11, e4, 0);
                  }
                  static createInputArgCountsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addInt32(e4[n3]);
                    return t3.endVector();
                  }
                  static startInputArgCountsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addImplicitInputs(t3, e4) {
                    t3.addFieldOffset(12, e4, 0);
                  }
                  static createImplicitInputsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startImplicitInputsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static endNode(t3) {
                    return t3.endObject();
                  }
                  static createNode(t3, e4, r2, i2, o2, a, s, u, c, l, p, f, d, h) {
                    return n2.startNode(t3), n2.addName(t3, e4), n2.addDocString(t3, r2), n2.addDomain(t3, i2), n2.addSinceVersion(t3, o2), n2.addIndex(t3, a), n2.addOpType(t3, s), n2.addType(t3, u), n2.addExecutionProviderType(t3, c), n2.addInputs(t3, l), n2.addOutputs(t3, p), n2.addAttributes(t3, f), n2.addInputArgCounts(t3, d), n2.addImplicitInputs(t3, h), n2.endNode(t3);
                  }
                }
                e3.Node = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsValueInfo(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsValueInfo(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  name(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  docString(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 6);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  type(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 8);
                    return n3 ? (e4 || new t2.experimental.fbs.TypeInfo()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  static startValueInfo(t3) {
                    t3.startObject(3);
                  }
                  static addName(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addDocString(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static addType(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static endValueInfo(t3) {
                    return t3.endObject();
                  }
                  static createValueInfo(t3, e4, r2, i2) {
                    return n2.startValueInfo(t3), n2.addName(t3, e4), n2.addDocString(t3, r2), n2.addType(t3, i2), n2.endValueInfo(t3);
                  }
                }
                e3.ValueInfo = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsTypeInfo(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsTypeInfo(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  denotation(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  valueType() {
                    let e4 = this.bb.__offset(this.bb_pos, 6);
                    return e4 ? this.bb.readUint8(this.bb_pos + e4) : t2.experimental.fbs.TypeInfoValue.NONE;
                  }
                  value(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.__union(t3, this.bb_pos + e4) : null;
                  }
                  static startTypeInfo(t3) {
                    t3.startObject(3);
                  }
                  static addDenotation(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addValueType(e4, n3) {
                    e4.addFieldInt8(1, n3, t2.experimental.fbs.TypeInfoValue.NONE);
                  }
                  static addValue(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static endTypeInfo(t3) {
                    return t3.endObject();
                  }
                  static createTypeInfo(t3, e4, r2, i2) {
                    return n2.startTypeInfo(t3), n2.addDenotation(t3, e4), n2.addValueType(t3, r2), n2.addValue(t3, i2), n2.endTypeInfo(t3);
                  }
                }
                e3.TypeInfo = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(t3) {
              !function(t4) {
                class e2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t5, e3) {
                    return this.bb_pos = t5, this.bb = e3, this;
                  }
                  static getRootAsOperatorSetId(t5, n2) {
                    return (n2 || new e2()).__init(t5.readInt32(t5.position()) + t5.position(), t5);
                  }
                  static getSizePrefixedRootAsOperatorSetId(t5, n2) {
                    return t5.setPosition(t5.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (n2 || new e2()).__init(t5.readInt32(t5.position()) + t5.position(), t5);
                  }
                  domain(t5) {
                    let e3 = this.bb.__offset(this.bb_pos, 4);
                    return e3 ? this.bb.__string(this.bb_pos + e3, t5) : null;
                  }
                  version() {
                    let t5 = this.bb.__offset(this.bb_pos, 6);
                    return t5 ? this.bb.readInt64(this.bb_pos + t5) : this.bb.createLong(0, 0);
                  }
                  static startOperatorSetId(t5) {
                    t5.startObject(2);
                  }
                  static addDomain(t5, e3) {
                    t5.addFieldOffset(0, e3, 0);
                  }
                  static addVersion(t5, e3) {
                    t5.addFieldInt64(1, e3, t5.createLong(0, 0));
                  }
                  static endOperatorSetId(t5) {
                    return t5.endObject();
                  }
                  static createOperatorSetId(t5, n2, r2) {
                    return e2.startOperatorSetId(t5), e2.addDomain(t5, n2), e2.addVersion(t5, r2), e2.endOperatorSetId(t5);
                  }
                }
                t4.OperatorSetId = e2;
              }(t3.fbs || (t3.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsTensor(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsTensor(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  name(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  docString(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 6);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  dims(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e4) + 8 * t3) : this.bb.createLong(0, 0);
                  }
                  dimsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 8);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  dataType() {
                    let e4 = this.bb.__offset(this.bb_pos, 10);
                    return e4 ? this.bb.readInt32(this.bb_pos + e4) : t2.experimental.fbs.TensorDataType.UNDEFINED;
                  }
                  rawData(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 12);
                    return e4 ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e4) + t3) : 0;
                  }
                  rawDataLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 12);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  rawDataArray() {
                    let t3 = this.bb.__offset(this.bb_pos, 12);
                    return t3 ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t3), this.bb.__vector_len(this.bb_pos + t3)) : null;
                  }
                  stringData(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 14);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  stringDataLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 14);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startTensor(t3) {
                    t3.startObject(6);
                  }
                  static addName(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addDocString(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static addDims(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static createDimsVector(t3, e4) {
                    t3.startVector(8, e4.length, 8);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addInt64(e4[n3]);
                    return t3.endVector();
                  }
                  static startDimsVector(t3, e4) {
                    t3.startVector(8, e4, 8);
                  }
                  static addDataType(e4, n3) {
                    e4.addFieldInt32(3, n3, t2.experimental.fbs.TensorDataType.UNDEFINED);
                  }
                  static addRawData(t3, e4) {
                    t3.addFieldOffset(4, e4, 0);
                  }
                  static createRawDataVector(t3, e4) {
                    t3.startVector(1, e4.length, 1);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addInt8(e4[n3]);
                    return t3.endVector();
                  }
                  static startRawDataVector(t3, e4) {
                    t3.startVector(1, e4, 1);
                  }
                  static addStringData(t3, e4) {
                    t3.addFieldOffset(5, e4, 0);
                  }
                  static createStringDataVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startStringDataVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static endTensor(t3) {
                    return t3.endObject();
                  }
                  static createTensor(t3, e4, r2, i2, o2, a, s) {
                    return n2.startTensor(t3), n2.addName(t3, e4), n2.addDocString(t3, r2), n2.addDims(t3, i2), n2.addDataType(t3, o2), n2.addRawData(t3, a), n2.addStringData(t3, s), n2.endTensor(t3);
                  }
                }
                e3.Tensor = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsSparseTensor(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsSparseTensor(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  values(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 4);
                    return n3 ? (e4 || new t2.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  indices(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 6);
                    return n3 ? (e4 || new t2.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  dims(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e4) + 8 * t3) : this.bb.createLong(0, 0);
                  }
                  dimsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 8);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startSparseTensor(t3) {
                    t3.startObject(3);
                  }
                  static addValues(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addIndices(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static addDims(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static createDimsVector(t3, e4) {
                    t3.startVector(8, e4.length, 8);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addInt64(e4[n3]);
                    return t3.endVector();
                  }
                  static startDimsVector(t3, e4) {
                    t3.startVector(8, e4, 8);
                  }
                  static endSparseTensor(t3) {
                    return t3.endObject();
                  }
                  static createSparseTensor(t3, e4, r2, i2) {
                    return n2.startSparseTensor(t3), n2.addValues(t3, e4), n2.addIndices(t3, r2), n2.addDims(t3, i2), n2.endSparseTensor(t3);
                  }
                }
                e3.SparseTensor = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsAttribute(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsAttribute(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  name(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  docString(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 6);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  type() {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.readInt32(this.bb_pos + e4) : t2.experimental.fbs.AttributeType.UNDEFINED;
                  }
                  f() {
                    let t3 = this.bb.__offset(this.bb_pos, 10);
                    return t3 ? this.bb.readFloat32(this.bb_pos + t3) : 0;
                  }
                  i() {
                    let t3 = this.bb.__offset(this.bb_pos, 12);
                    return t3 ? this.bb.readInt64(this.bb_pos + t3) : this.bb.createLong(0, 0);
                  }
                  s(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 14);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  t(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 16);
                    return n3 ? (e4 || new t2.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  g(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 18);
                    return n3 ? (e4 || new t2.experimental.fbs.Graph()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  floats(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 20);
                    return e4 ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + e4) + 4 * t3) : 0;
                  }
                  floatsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 20);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  floatsArray() {
                    let t3 = this.bb.__offset(this.bb_pos, 20);
                    return t3 ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t3), this.bb.__vector_len(this.bb_pos + t3)) : null;
                  }
                  ints(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 22);
                    return e4 ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e4) + 8 * t3) : this.bb.createLong(0, 0);
                  }
                  intsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 22);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  strings(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 24);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  stringsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 24);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  tensors(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 26);
                    return r2 ? (n3 || new t2.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  tensorsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 26);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  graphs(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 28);
                    return r2 ? (n3 || new t2.experimental.fbs.Graph()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  graphsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 28);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startAttribute(t3) {
                    t3.startObject(13);
                  }
                  static addName(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addDocString(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static addType(e4, n3) {
                    e4.addFieldInt32(2, n3, t2.experimental.fbs.AttributeType.UNDEFINED);
                  }
                  static addF(t3, e4) {
                    t3.addFieldFloat32(3, e4, 0);
                  }
                  static addI(t3, e4) {
                    t3.addFieldInt64(4, e4, t3.createLong(0, 0));
                  }
                  static addS(t3, e4) {
                    t3.addFieldOffset(5, e4, 0);
                  }
                  static addT(t3, e4) {
                    t3.addFieldOffset(6, e4, 0);
                  }
                  static addG(t3, e4) {
                    t3.addFieldOffset(7, e4, 0);
                  }
                  static addFloats(t3, e4) {
                    t3.addFieldOffset(8, e4, 0);
                  }
                  static createFloatsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addFloat32(e4[n3]);
                    return t3.endVector();
                  }
                  static startFloatsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addInts(t3, e4) {
                    t3.addFieldOffset(9, e4, 0);
                  }
                  static createIntsVector(t3, e4) {
                    t3.startVector(8, e4.length, 8);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addInt64(e4[n3]);
                    return t3.endVector();
                  }
                  static startIntsVector(t3, e4) {
                    t3.startVector(8, e4, 8);
                  }
                  static addStrings(t3, e4) {
                    t3.addFieldOffset(10, e4, 0);
                  }
                  static createStringsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startStringsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addTensors(t3, e4) {
                    t3.addFieldOffset(11, e4, 0);
                  }
                  static createTensorsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startTensorsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addGraphs(t3, e4) {
                    t3.addFieldOffset(12, e4, 0);
                  }
                  static createGraphsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startGraphsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static endAttribute(t3) {
                    return t3.endObject();
                  }
                  static createAttribute(t3, e4, r2, i2, o2, a, s, u, c, l, p, f, d, h) {
                    return n2.startAttribute(t3), n2.addName(t3, e4), n2.addDocString(t3, r2), n2.addType(t3, i2), n2.addF(t3, o2), n2.addI(t3, a), n2.addS(t3, s), n2.addT(t3, u), n2.addG(t3, c), n2.addFloats(t3, l), n2.addInts(t3, p), n2.addStrings(t3, f), n2.addTensors(t3, d), n2.addGraphs(t3, h), n2.endAttribute(t3);
                  }
                }
                e3.Attribute = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsGraph(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsGraph(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  initializers(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 4);
                    return r2 ? (n3 || new t2.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  initializersLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 4);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  nodeArgs(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 6);
                    return r2 ? (n3 || new t2.experimental.fbs.ValueInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  nodeArgsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 6);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  nodes(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 8);
                    return r2 ? (n3 || new t2.experimental.fbs.Node()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  nodesLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 8);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  maxNodeIndex() {
                    let t3 = this.bb.__offset(this.bb_pos, 10);
                    return t3 ? this.bb.readUint32(this.bb_pos + t3) : 0;
                  }
                  nodeEdges(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 12);
                    return r2 ? (n3 || new t2.experimental.fbs.NodeEdge()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  nodeEdgesLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 12);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  inputs(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 14);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  inputsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 14);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  outputs(t3, e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 16);
                    return n3 ? this.bb.__string(this.bb.__vector(this.bb_pos + n3) + 4 * t3, e4) : null;
                  }
                  outputsLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 16);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  sparseInitializers(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 18);
                    return r2 ? (n3 || new t2.experimental.fbs.SparseTensor()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  sparseInitializersLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 18);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startGraph(t3) {
                    t3.startObject(8);
                  }
                  static addInitializers(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static createInitializersVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startInitializersVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addNodeArgs(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static createNodeArgsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startNodeArgsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addNodes(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static createNodesVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startNodesVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addMaxNodeIndex(t3, e4) {
                    t3.addFieldInt32(3, e4, 0);
                  }
                  static addNodeEdges(t3, e4) {
                    t3.addFieldOffset(4, e4, 0);
                  }
                  static createNodeEdgesVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startNodeEdgesVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addInputs(t3, e4) {
                    t3.addFieldOffset(5, e4, 0);
                  }
                  static createInputsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startInputsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addOutputs(t3, e4) {
                    t3.addFieldOffset(6, e4, 0);
                  }
                  static createOutputsVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startOutputsVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addSparseInitializers(t3, e4) {
                    t3.addFieldOffset(7, e4, 0);
                  }
                  static createSparseInitializersVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startSparseInitializersVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static endGraph(t3) {
                    return t3.endObject();
                  }
                  static createGraph(t3, e4, r2, i2, o2, a, s, u, c) {
                    return n2.startGraph(t3), n2.addInitializers(t3, e4), n2.addNodeArgs(t3, r2), n2.addNodes(t3, i2), n2.addMaxNodeIndex(t3, o2), n2.addNodeEdges(t3, a), n2.addInputs(t3, s), n2.addOutputs(t3, u), n2.addSparseInitializers(t3, c), n2.endGraph(t3);
                  }
                }
                e3.Graph = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsModel(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsModel(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  irVersion() {
                    let t3 = this.bb.__offset(this.bb_pos, 4);
                    return t3 ? this.bb.readInt64(this.bb_pos + t3) : this.bb.createLong(0, 0);
                  }
                  opsetImport(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 6);
                    return r2 ? (n3 || new t2.experimental.fbs.OperatorSetId()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  opsetImportLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 6);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  producerName(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 8);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  producerVersion(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 10);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  domain(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 12);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  modelVersion() {
                    let t3 = this.bb.__offset(this.bb_pos, 14);
                    return t3 ? this.bb.readInt64(this.bb_pos + t3) : this.bb.createLong(0, 0);
                  }
                  docString(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 16);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  graph(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 18);
                    return n3 ? (e4 || new t2.experimental.fbs.Graph()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  graphDocString(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 20);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  static startModel(t3) {
                    t3.startObject(9);
                  }
                  static addIrVersion(t3, e4) {
                    t3.addFieldInt64(0, e4, t3.createLong(0, 0));
                  }
                  static addOpsetImport(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static createOpsetImportVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startOpsetImportVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static addProducerName(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static addProducerVersion(t3, e4) {
                    t3.addFieldOffset(3, e4, 0);
                  }
                  static addDomain(t3, e4) {
                    t3.addFieldOffset(4, e4, 0);
                  }
                  static addModelVersion(t3, e4) {
                    t3.addFieldInt64(5, e4, t3.createLong(0, 0));
                  }
                  static addDocString(t3, e4) {
                    t3.addFieldOffset(6, e4, 0);
                  }
                  static addGraph(t3, e4) {
                    t3.addFieldOffset(7, e4, 0);
                  }
                  static addGraphDocString(t3, e4) {
                    t3.addFieldOffset(8, e4, 0);
                  }
                  static endModel(t3) {
                    return t3.endObject();
                  }
                  static createModel(t3, e4, r2, i2, o2, a, s, u, c, l) {
                    return n2.startModel(t3), n2.addIrVersion(t3, e4), n2.addOpsetImport(t3, r2), n2.addProducerName(t3, i2), n2.addProducerVersion(t3, o2), n2.addDomain(t3, a), n2.addModelVersion(t3, s), n2.addDocString(t3, u), n2.addGraph(t3, c), n2.addGraphDocString(t3, l), n2.endModel(t3);
                  }
                }
                e3.Model = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(t3) {
              !function(t4) {
                class e2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t5, e3) {
                    return this.bb_pos = t5, this.bb = e3, this;
                  }
                  static getRootAsKernelCreateInfos(t5, n2) {
                    return (n2 || new e2()).__init(t5.readInt32(t5.position()) + t5.position(), t5);
                  }
                  static getSizePrefixedRootAsKernelCreateInfos(t5, n2) {
                    return t5.setPosition(t5.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (n2 || new e2()).__init(t5.readInt32(t5.position()) + t5.position(), t5);
                  }
                  nodeIndices(t5) {
                    let e3 = this.bb.__offset(this.bb_pos, 4);
                    return e3 ? this.bb.readUint32(this.bb.__vector(this.bb_pos + e3) + 4 * t5) : 0;
                  }
                  nodeIndicesLength() {
                    let t5 = this.bb.__offset(this.bb_pos, 4);
                    return t5 ? this.bb.__vector_len(this.bb_pos + t5) : 0;
                  }
                  nodeIndicesArray() {
                    let t5 = this.bb.__offset(this.bb_pos, 4);
                    return t5 ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t5), this.bb.__vector_len(this.bb_pos + t5)) : null;
                  }
                  kernelDefHashes(t5) {
                    let e3 = this.bb.__offset(this.bb_pos, 6);
                    return e3 ? this.bb.readUint64(this.bb.__vector(this.bb_pos + e3) + 8 * t5) : this.bb.createLong(0, 0);
                  }
                  kernelDefHashesLength() {
                    let t5 = this.bb.__offset(this.bb_pos, 6);
                    return t5 ? this.bb.__vector_len(this.bb_pos + t5) : 0;
                  }
                  static startKernelCreateInfos(t5) {
                    t5.startObject(2);
                  }
                  static addNodeIndices(t5, e3) {
                    t5.addFieldOffset(0, e3, 0);
                  }
                  static createNodeIndicesVector(t5, e3) {
                    t5.startVector(4, e3.length, 4);
                    for (let n2 = e3.length - 1; n2 >= 0; n2--)
                      t5.addInt32(e3[n2]);
                    return t5.endVector();
                  }
                  static startNodeIndicesVector(t5, e3) {
                    t5.startVector(4, e3, 4);
                  }
                  static addKernelDefHashes(t5, e3) {
                    t5.addFieldOffset(1, e3, 0);
                  }
                  static createKernelDefHashesVector(t5, e3) {
                    t5.startVector(8, e3.length, 8);
                    for (let n2 = e3.length - 1; n2 >= 0; n2--)
                      t5.addInt64(e3[n2]);
                    return t5.endVector();
                  }
                  static startKernelDefHashesVector(t5, e3) {
                    t5.startVector(8, e3, 8);
                  }
                  static endKernelCreateInfos(t5) {
                    return t5.endObject();
                  }
                  static createKernelCreateInfos(t5, n2, r2) {
                    return e2.startKernelCreateInfos(t5), e2.addNodeIndices(t5, n2), e2.addKernelDefHashes(t5, r2), e2.endKernelCreateInfos(t5);
                  }
                }
                t4.KernelCreateInfos = e2;
              }(t3.fbs || (t3.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsSubGraphSessionState(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsSubGraphSessionState(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  graphId(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  sessionState(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 6);
                    return n3 ? (e4 || new t2.experimental.fbs.SessionState()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  static startSubGraphSessionState(t3) {
                    t3.startObject(2);
                  }
                  static addGraphId(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addSessionState(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static endSubGraphSessionState(t3) {
                    let e4 = t3.endObject();
                    return t3.requiredField(e4, 4), e4;
                  }
                  static createSubGraphSessionState(t3, e4, r2) {
                    return n2.startSubGraphSessionState(t3), n2.addGraphId(t3, e4), n2.addSessionState(t3, r2), n2.endSubGraphSessionState(t3);
                  }
                }
                e3.SubGraphSessionState = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsSessionState(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsSessionState(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  kernels(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 4);
                    return n3 ? (e4 || new t2.experimental.fbs.KernelCreateInfos()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  subGraphSessionStates(e4, n3) {
                    let r2 = this.bb.__offset(this.bb_pos, 6);
                    return r2 ? (n3 || new t2.experimental.fbs.SubGraphSessionState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r2) + 4 * e4), this.bb) : null;
                  }
                  subGraphSessionStatesLength() {
                    let t3 = this.bb.__offset(this.bb_pos, 6);
                    return t3 ? this.bb.__vector_len(this.bb_pos + t3) : 0;
                  }
                  static startSessionState(t3) {
                    t3.startObject(2);
                  }
                  static addKernels(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addSubGraphSessionStates(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static createSubGraphSessionStatesVector(t3, e4) {
                    t3.startVector(4, e4.length, 4);
                    for (let n3 = e4.length - 1; n3 >= 0; n3--)
                      t3.addOffset(e4[n3]);
                    return t3.endVector();
                  }
                  static startSubGraphSessionStatesVector(t3, e4) {
                    t3.startVector(4, e4, 4);
                  }
                  static endSessionState(t3) {
                    return t3.endObject();
                  }
                  static createSessionState(t3, e4, r2) {
                    return n2.startSessionState(t3), n2.addKernels(t3, e4), n2.addSubGraphSessionStates(t3, r2), n2.endSessionState(t3);
                  }
                }
                e3.SessionState = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {})), function(t2) {
            !function(e2) {
              !function(e3) {
                class n2 {
                  constructor() {
                    this.bb = null, this.bb_pos = 0;
                  }
                  __init(t3, e4) {
                    return this.bb_pos = t3, this.bb = e4, this;
                  }
                  static getRootAsInferenceSession(t3, e4) {
                    return (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static getSizePrefixedRootAsInferenceSession(t3, e4) {
                    return t3.setPosition(t3.position() + r.flatbuffers.SIZE_PREFIX_LENGTH), (e4 || new n2()).__init(t3.readInt32(t3.position()) + t3.position(), t3);
                  }
                  static bufferHasIdentifier(t3) {
                    return t3.__has_identifier("ORTM");
                  }
                  ortVersion(t3) {
                    let e4 = this.bb.__offset(this.bb_pos, 4);
                    return e4 ? this.bb.__string(this.bb_pos + e4, t3) : null;
                  }
                  model(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 6);
                    return n3 ? (e4 || new t2.experimental.fbs.Model()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  sessionState(e4) {
                    let n3 = this.bb.__offset(this.bb_pos, 8);
                    return n3 ? (e4 || new t2.experimental.fbs.SessionState()).__init(this.bb.__indirect(this.bb_pos + n3), this.bb) : null;
                  }
                  static startInferenceSession(t3) {
                    t3.startObject(3);
                  }
                  static addOrtVersion(t3, e4) {
                    t3.addFieldOffset(0, e4, 0);
                  }
                  static addModel(t3, e4) {
                    t3.addFieldOffset(1, e4, 0);
                  }
                  static addSessionState(t3, e4) {
                    t3.addFieldOffset(2, e4, 0);
                  }
                  static endInferenceSession(t3) {
                    return t3.endObject();
                  }
                  static finishInferenceSessionBuffer(t3, e4) {
                    t3.finish(e4, "ORTM");
                  }
                  static finishSizePrefixedInferenceSessionBuffer(t3, e4) {
                    t3.finish(e4, "ORTM", true);
                  }
                  static createInferenceSession(t3, e4, r2, i2) {
                    return n2.startInferenceSession(t3), n2.addOrtVersion(t3, e4), n2.addModel(t3, r2), n2.addSessionState(t3, i2), n2.endInferenceSession(t3);
                  }
                }
                e3.InferenceSession = n2;
              }(e2.fbs || (e2.fbs = {}));
            }(t2.experimental || (t2.experimental = {}));
          }(e.onnxruntime || (e.onnxruntime = {}));
        }, 7448: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.OnnxjsSessionHandler = void 0;
          const r = n(1670), i = n(9162);
          e.OnnxjsSessionHandler = class {
            constructor(t2) {
              this.session = t2, this.inputNames = this.session.inputNames, this.outputNames = this.session.outputNames;
            }
            async dispose() {
            }
            async run(t2, e2, n2) {
              const o = /* @__PURE__ */ new Map();
              for (const e3 in t2)
                if (Object.hasOwnProperty.call(t2, e3)) {
                  const n3 = t2[e3];
                  o.set(e3, new i.Tensor(n3.dims, n3.type, void 0, void 0, n3.data));
                }
              const a = await this.session.run(o), s = {};
              return a.forEach((t3, e3) => {
                s[e3] = new r.Tensor(t3.type, t3.data, t3.dims);
              }), s;
            }
            startProfiling() {
              this.session.startProfiling();
            }
            endProfiling() {
              this.session.endProfiling();
            }
          };
        }, 6919: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.Session = void 0;
          const r = n(7067), i = n(1296), o = n(7091), a = n(1036), s = n(6231), u = n(2644);
          e.Session = class {
            constructor(t2 = {}) {
              this._initialized = false, this.backendHint = t2.backendHint, this.profiler = s.Profiler.create(t2.profiler), this.context = { profiler: this.profiler, graphInputTypes: [], graphInputDims: [] };
            }
            get inputNames() {
              return this._model.graph.getInputNames();
            }
            get outputNames() {
              return this._model.graph.getOutputNames();
            }
            startProfiling() {
              this.profiler.start();
            }
            endProfiling() {
              this.profiler.stop();
            }
            async loadModel(t2, e2, n2) {
              await this.profiler.event("session", "Session.loadModel", async () => {
                const a2 = await (0, o.resolveBackend)(this.backendHint);
                if (this.sessionHandler = a2.createSessionHandler(this.context), this._model = new u.Model(), "string" == typeof t2) {
                  const e3 = t2.endsWith(".ort");
                  if ("undefined" == typeof fetch) {
                    const n3 = await (0, i.promisify)(r.readFile)(t2);
                    this.initialize(n3, e3);
                  } else {
                    const n3 = await fetch(t2), r2 = await n3.arrayBuffer();
                    this.initialize(new Uint8Array(r2), e3);
                  }
                } else if (ArrayBuffer.isView(t2))
                  this.initialize(t2);
                else {
                  const r2 = new Uint8Array(t2, e2 || 0, n2 || t2.byteLength);
                  this.initialize(r2);
                }
              });
            }
            initialize(t2, e2) {
              if (this._initialized)
                throw new Error("already initialized");
              this.profiler.event("session", "Session.initialize", () => {
                const n2 = this.sessionHandler.transformGraph ? this.sessionHandler : void 0;
                this._model.load(t2, n2, e2), this.sessionHandler.onGraphInitialized && this.sessionHandler.onGraphInitialized(this._model.graph), this.initializeOps(this._model.graph), this._executionPlan = new a.ExecutionPlan(this._model.graph, this._ops, this.profiler);
              }), this._initialized = true;
            }
            async run(t2) {
              if (!this._initialized)
                throw new Error("session not initialized yet");
              return this.profiler.event("session", "Session.run", async () => {
                const e2 = this.normalizeAndValidateInputs(t2), n2 = await this._executionPlan.execute(this.sessionHandler, e2);
                return this.createOutput(n2);
              });
            }
            normalizeAndValidateInputs(t2) {
              const e2 = this._model.graph.getInputNames();
              if (Array.isArray(t2)) {
                if (t2.length !== e2.length)
                  throw new Error(`incorrect input array length: expected ${e2.length} but got ${t2.length}`);
              } else {
                if (t2.size !== e2.length)
                  throw new Error(`incorrect input map size: expected ${e2.length} but got ${t2.size}`);
                const n2 = new Array(t2.size);
                let r2 = 0;
                for (let i2 = 0; i2 < e2.length; ++i2) {
                  const o2 = t2.get(e2[i2]);
                  if (!o2)
                    throw new Error(`missing input tensor for: '${name}'`);
                  n2[r2++] = o2;
                }
                t2 = n2;
              }
              if (this.context.graphInputTypes && 0 !== this.context.graphInputTypes.length && this.context.graphInputDims && 0 !== this.context.graphInputDims.length)
                this.validateInputTensorDims(this.context.graphInputDims, t2, false);
              else {
                const e3 = this._model.graph.getInputIndices(), n2 = this._model.graph.getValues(), r2 = new Array(e3.length);
                for (let i2 = 0; i2 < e3.length; ++i2) {
                  const o2 = n2[e3[i2]];
                  r2[i2] = o2.type.shape.dims, this.context.graphInputTypes.push(o2.type.tensorType), this.context.graphInputDims.push(t2[i2].dims);
                }
                this.validateInputTensorDims(r2, t2, true);
              }
              return this.validateInputTensorTypes(this.context.graphInputTypes, t2), t2;
            }
            validateInputTensorTypes(t2, e2) {
              for (let n2 = 0; n2 < e2.length; n2++) {
                const r2 = t2[n2], i2 = e2[n2].type;
                if (r2 !== i2)
                  throw new Error(`input tensor[${n2}] check failed: expected type '${r2}' but got ${i2}`);
              }
            }
            validateInputTensorDims(t2, e2, n2) {
              for (let r2 = 0; r2 < e2.length; r2++) {
                const i2 = t2[r2], o2 = e2[r2].dims;
                if (!this.compareTensorDims(i2, o2, n2))
                  throw new Error(`input tensor[${r2}] check failed: expected shape '[${i2.join(",")}]' but got [${o2.join(",")}]`);
              }
            }
            compareTensorDims(t2, e2, n2) {
              if (t2.length !== e2.length)
                return false;
              for (let r2 = 0; r2 < t2.length; ++r2)
                if (t2[r2] !== e2[r2] && (!n2 || 0 !== t2[r2]))
                  return false;
              return true;
            }
            createOutput(t2) {
              const e2 = this._model.graph.getOutputNames();
              if (t2.length !== e2.length)
                throw new Error("expected number of outputs do not match number of generated outputs");
              const n2 = /* @__PURE__ */ new Map();
              for (let r2 = 0; r2 < e2.length; ++r2)
                n2.set(e2[r2], t2[r2]);
              return n2;
            }
            initializeOps(t2) {
              const e2 = t2.getNodes();
              this._ops = new Array(e2.length);
              for (let n2 = 0; n2 < e2.length; n2++)
                this._ops[n2] = this.sessionHandler.resolve(e2[n2], this._model.opsets, t2);
            }
          };
        }, 9162: function(t, e, n) {
          "use strict";
          var r = this && this.__importDefault || function(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          };
          Object.defineProperty(e, "__esModule", { value: true }), e.Tensor = void 0;
          const i = n(3442), o = r(n(3720)), a = n(1446), s = n(9395), u = n(2517);
          var c = s.onnxruntime.experimental.fbs;
          class l {
            get data() {
              if (void 0 === this.cache) {
                const t2 = this.dataProvider(this.dataId);
                if (t2.length !== this.size)
                  throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");
                this.cache = t2;
              }
              return this.cache;
            }
            get stringData() {
              if ("string" !== this.type)
                throw new TypeError("data type is not string");
              return this.data;
            }
            get integerData() {
              switch (this.type) {
                case "uint8":
                case "int8":
                case "uint16":
                case "int16":
                case "int32":
                case "uint32":
                case "bool":
                  return this.data;
                default:
                  throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)");
              }
            }
            get floatData() {
              switch (this.type) {
                case "float32":
                case "float64":
                  return this.data;
                default:
                  throw new TypeError("data type is not float (float32, float64)");
              }
            }
            get numberData() {
              if ("string" !== this.type)
                return this.data;
              throw new TypeError("type cannot be non-number (string)");
            }
            get(t2) {
              return this.data[u.ShapeUtil.indicesToOffset(t2, this.strides)];
            }
            set(t2, e2) {
              this.data[u.ShapeUtil.indicesToOffset(t2, this.strides)] = e2;
            }
            async getData() {
              return void 0 === this.cache && (this.cache = await this.asyncDataProvider(this.dataId)), this.cache;
            }
            get strides() {
              return this._strides || (this._strides = u.ShapeUtil.computeStrides(this.dims)), this._strides;
            }
            constructor(t2, e2, n2, r2, o2, a2 = i.Guid.create()) {
              this.dims = t2, this.type = e2, this.dataProvider = n2, this.asyncDataProvider = r2, this.cache = o2, this.dataId = a2, this.size = u.ShapeUtil.validateDimsAndCalcSize(t2);
              const s2 = this.size, c2 = void 0 === n2 && void 0 === r2 && void 0 === o2;
              if (void 0 !== o2 && o2.length !== s2)
                throw new RangeError("Input dims doesn't match data length.");
              if ("string" === e2) {
                if (!(void 0 === o2 || Array.isArray(o2) && o2.every((t3) => "string" == typeof t3)))
                  throw new TypeError("cache should be a string array");
                c2 && (this.cache = new Array(s2));
              } else {
                if (void 0 !== o2) {
                  const t3 = f(e2);
                  if (!(o2 instanceof t3))
                    throw new TypeError(`cache should be type ${t3.name}`);
                }
                if (c2) {
                  const t3 = new ArrayBuffer(s2 * function(t4) {
                    switch (t4) {
                      case "bool":
                      case "int8":
                      case "uint8":
                        return 1;
                      case "int16":
                      case "uint16":
                        return 2;
                      case "int32":
                      case "uint32":
                      case "float32":
                        return 4;
                      case "float64":
                        return 8;
                      default:
                        throw new Error(`cannot calculate sizeof() on type ${t4}`);
                    }
                  }(e2));
                  this.cache = function(t4, e3) {
                    return new (f(e3))(t4);
                  }(t3, e2);
                }
              }
            }
            static fromProto(t2) {
              if (!t2)
                throw new Error("cannot construct Value from an empty tensor");
              const e2 = u.ProtoUtil.tensorDataTypeFromProto(t2.dataType), n2 = u.ProtoUtil.tensorDimsFromProto(t2.dims), r2 = new l(n2, e2);
              if ("string" === e2)
                t2.stringData.forEach((t3, e3) => {
                  r2.data[e3] = (0, u.decodeUtf8String)(t3);
                });
              else if (t2.rawData && "number" == typeof t2.rawData.byteLength && t2.rawData.byteLength > 0) {
                const e3 = r2.data, n3 = new DataView(t2.rawData.buffer, t2.rawData.byteOffset, t2.rawData.byteLength), i2 = p(t2.dataType), o2 = t2.rawData.byteLength / i2;
                if (t2.rawData.byteLength % i2 != 0)
                  throw new Error("invalid buffer length");
                if (e3.length !== o2)
                  throw new Error("buffer length mismatch");
                for (let r3 = 0; r3 < o2; r3++) {
                  const o3 = h(n3, t2.dataType, r3 * i2);
                  e3[r3] = o3;
                }
              } else {
                let e3;
                switch (t2.dataType) {
                  case a.onnx.TensorProto.DataType.FLOAT:
                    e3 = t2.floatData;
                    break;
                  case a.onnx.TensorProto.DataType.INT32:
                  case a.onnx.TensorProto.DataType.INT16:
                  case a.onnx.TensorProto.DataType.UINT16:
                  case a.onnx.TensorProto.DataType.INT8:
                  case a.onnx.TensorProto.DataType.UINT8:
                  case a.onnx.TensorProto.DataType.BOOL:
                    e3 = t2.int32Data;
                    break;
                  case a.onnx.TensorProto.DataType.INT64:
                    e3 = t2.int64Data;
                    break;
                  case a.onnx.TensorProto.DataType.DOUBLE:
                    e3 = t2.doubleData;
                    break;
                  case a.onnx.TensorProto.DataType.UINT32:
                  case a.onnx.TensorProto.DataType.UINT64:
                    e3 = t2.uint64Data;
                    break;
                  default:
                    throw new Error("unspecific error");
                }
                if (null == e3)
                  throw new Error("failed to populate data from a tensorproto value");
                const n3 = r2.data;
                if (n3.length !== e3.length)
                  throw new Error("array length mismatch");
                for (let r3 = 0; r3 < e3.length; r3++) {
                  const i2 = e3[r3];
                  o.default.isLong(i2) ? n3[r3] = d(i2, t2.dataType) : n3[r3] = i2;
                }
              }
              return r2;
            }
            static fromData(t2, e2, n2) {
              return new l(e2, n2, void 0, void 0, t2);
            }
            static fromOrtTensor(t2) {
              if (!t2)
                throw new Error("cannot construct Value from an empty tensor");
              const e2 = u.ProtoUtil.tensorDimsFromORTFormat(t2), n2 = u.ProtoUtil.tensorDataTypeFromProto(t2.dataType()), r2 = new l(e2, n2);
              if ("string" === n2)
                for (let e3 = 0; e3 < t2.stringDataLength(); e3++)
                  r2.data[e3] = t2.stringData(e3);
              else if (t2.rawDataArray() && "number" == typeof t2.rawDataLength() && t2.rawDataLength() > 0) {
                const e3 = r2.data, n3 = new DataView(t2.rawDataArray().buffer, t2.rawDataArray().byteOffset, t2.rawDataLength()), i2 = p(t2.dataType()), o2 = t2.rawDataLength() / i2;
                if (t2.rawDataLength() % i2 != 0)
                  throw new Error("invalid buffer length");
                if (e3.length !== o2)
                  throw new Error("buffer length mismatch");
                for (let r3 = 0; r3 < o2; r3++) {
                  const o3 = h(n3, t2.dataType(), r3 * i2);
                  e3[r3] = o3;
                }
              }
              return r2;
            }
          }
          function p(t2) {
            switch (t2) {
              case a.onnx.TensorProto.DataType.UINT8:
              case a.onnx.TensorProto.DataType.INT8:
              case a.onnx.TensorProto.DataType.BOOL:
                return 1;
              case a.onnx.TensorProto.DataType.UINT16:
              case a.onnx.TensorProto.DataType.INT16:
                return 2;
              case a.onnx.TensorProto.DataType.FLOAT:
              case a.onnx.TensorProto.DataType.INT32:
              case a.onnx.TensorProto.DataType.UINT32:
                return 4;
              case a.onnx.TensorProto.DataType.INT64:
              case a.onnx.TensorProto.DataType.DOUBLE:
              case a.onnx.TensorProto.DataType.UINT64:
                return 8;
              default:
                throw new Error(`cannot calculate sizeof() on type ${a.onnx.TensorProto.DataType[t2]}`);
            }
          }
          function f(t2) {
            switch (t2) {
              case "bool":
              case "uint8":
                return Uint8Array;
              case "int8":
                return Int8Array;
              case "int16":
                return Int16Array;
              case "uint16":
                return Uint16Array;
              case "int32":
                return Int32Array;
              case "uint32":
                return Uint32Array;
              case "float32":
                return Float32Array;
              case "float64":
                return Float64Array;
              default:
                throw new Error("unspecified error");
            }
          }
          function d(t2, e2) {
            if (e2 === a.onnx.TensorProto.DataType.INT64 || e2 === c.TensorDataType.INT64) {
              if (t2.greaterThanOrEqual(2147483648) || t2.lessThan(-2147483648))
                throw new TypeError("int64 is not supported");
            } else {
              if (e2 !== a.onnx.TensorProto.DataType.UINT32 && e2 !== c.TensorDataType.UINT32 && e2 !== a.onnx.TensorProto.DataType.UINT64 && e2 !== c.TensorDataType.UINT64)
                throw new TypeError(`not a LONG type: ${a.onnx.TensorProto.DataType[e2]}`);
              if (t2.greaterThanOrEqual(4294967296) || t2.lessThan(0))
                throw new TypeError("uint64 is not supported");
            }
            return t2.toNumber();
          }
          function h(t2, e2, n2) {
            switch (e2) {
              case a.onnx.TensorProto.DataType.BOOL:
              case a.onnx.TensorProto.DataType.UINT8:
                return t2.getUint8(n2);
              case a.onnx.TensorProto.DataType.INT8:
                return t2.getInt8(n2);
              case a.onnx.TensorProto.DataType.UINT16:
                return t2.getUint16(n2, true);
              case a.onnx.TensorProto.DataType.INT16:
                return t2.getInt16(n2, true);
              case a.onnx.TensorProto.DataType.FLOAT:
                return t2.getFloat32(n2, true);
              case a.onnx.TensorProto.DataType.INT32:
                return t2.getInt32(n2, true);
              case a.onnx.TensorProto.DataType.UINT32:
                return t2.getUint32(n2, true);
              case a.onnx.TensorProto.DataType.INT64:
                return d(o.default.fromBits(t2.getUint32(n2, true), t2.getUint32(n2 + 4, true), false), e2);
              case a.onnx.TensorProto.DataType.DOUBLE:
                return t2.getFloat64(n2, true);
              case a.onnx.TensorProto.DataType.UINT64:
                return d(o.default.fromBits(t2.getUint32(n2, true), t2.getUint32(n2 + 4, true), true), e2);
              default:
                throw new Error(`cannot read from DataView for type ${a.onnx.TensorProto.DataType[e2]}`);
            }
          }
          e.Tensor = l;
        }, 2517: function(t, e, n) {
          "use strict";
          var r = this && this.__importDefault || function(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          };
          Object.defineProperty(e, "__esModule", { value: true }), e.decodeUtf8String = e.MAX_CLIP = e.MIN_CLIP = e.PoolConvUtil = e.ReduceUtil = e.SplitUtil = e.MathUtil = e.ShapeUtil = e.LongUtil = e.ProtoUtil = e.GemmUtil = e.arrayCopyHelper = e.BroadcastUtil = e.MatMulUtil = e.ArrayUtil = e.assert = e.checkInputsShape = void 0;
          const i = n(5686), o = r(n(3720)), a = n(1446), s = n(9162);
          e.checkInputsShape = function(t2, ...e2) {
            if (!t2 || t2.length !== e2.length)
              return false;
            for (let n2 = 0; n2 < t2.length; n2++)
              if (!t2[n2].dims || t2[n2].dims.length !== e2[n2])
                return false;
            return true;
          }, e.assert = function(t2, e2) {
            if (!t2)
              throw new Error("string" == typeof e2 ? e2 : e2());
          }, e.ArrayUtil = class {
            static arraysEqual(t2, e2) {
              if (t2.length !== e2.length)
                return false;
              for (let n2 = 0; n2 < t2.length; n2++)
                if (t2[n2] !== e2[n2])
                  return false;
              return true;
            }
          };
          class u {
            static preprocessInputShapes(t2, e2) {
              return [1 === t2.length ? [1, t2[0]] : t2, 1 === e2.length ? [e2[0], 1] : e2];
            }
            static postprocessOutputShape(t2, e2, n2) {
              1 === e2 && t2.splice(t2.length - 2, 1), 1 === n2 && t2.pop();
            }
            static calcMatMulShape(t2, e2) {
              return t2[1] !== e2[0] ? void 0 : [t2[0], e2[1]];
            }
          }
          e.MatMulUtil = u;
          class c {
            static calcShape(t2, e2, n2 = false) {
              const r2 = t2.length, i2 = e2.length;
              if (0 === r2)
                return e2;
              if (0 === i2)
                return t2;
              const o2 = Math.max(t2.length, e2.length), a2 = new Array(o2);
              if (n2) {
                if (r2 < 2 || i2 < 2)
                  return;
                const n3 = u.calcMatMulShape([t2[r2 - 2], t2[r2 - 1]], [e2[i2 - 2], e2[i2 - 1]]);
                if (void 0 === n3)
                  return;
                [a2[o2 - 2], a2[o2 - 1]] = n3;
              }
              for (let s2 = n2 ? 3 : 1; s2 <= o2; s2++) {
                const n3 = r2 - s2 < 0 ? 1 : t2[r2 - s2], u2 = i2 - s2 < 0 ? 1 : e2[i2 - s2];
                if (n3 !== u2 && n3 > 1 && u2 > 1)
                  return;
                a2[o2 - s2] = Math.max(n3, u2);
              }
              return a2;
            }
            static index(t2, e2) {
              const n2 = new Array(e2.length);
              return c.fillIndex(t2, e2, n2), n2;
            }
            static fillIndex(t2, e2, n2) {
              const r2 = t2.length - e2.length;
              for (let i2 = 0; i2 < e2.length; i2++)
                n2[i2] = t2[r2 + i2] % e2[i2];
            }
            static calc(t2, e2, n2, r2, i2) {
              const o2 = c.calcShape(t2.dims, e2.dims);
              if (o2) {
                if (r2 && !f.areEqual(o2, t2.dims))
                  return;
                const a2 = f.size(o2), u2 = r2 ? t2 : new s.Tensor(o2, i2 || t2.type);
                if (0 === o2.length)
                  u2.set([], n2(t2.get([]), e2.get([])));
                else {
                  const r3 = new Array(o2.length), i3 = new Array(t2.dims.length), s2 = new Array(e2.dims.length);
                  let l2, p2 = 0, f2 = 0, d2 = false, h2 = false;
                  0 === t2.dims.length && (p2 = t2.get([]), d2 = true), 0 === e2.dims.length && (f2 = e2.get([]), h2 = true);
                  for (let g2 = 0; g2 < a2; g2++) {
                    l2 = g2;
                    for (let t3 = o2.length - 1; t3 >= 0; t3--)
                      r3[t3] = l2 % o2[t3], l2 = Math.floor(l2 / o2[t3]);
                    d2 || (c.fillIndex(r3, t2.dims, i3), p2 = t2.get(i3)), h2 || (c.fillIndex(r3, e2.dims, s2), f2 = e2.get(s2)), u2.set(r3, n2(p2, f2));
                  }
                }
                return u2;
              }
            }
            static isValidBroadcast(t2, e2) {
              const n2 = t2.length, r2 = e2.length;
              if (n2 > r2)
                return false;
              for (let i2 = 1; i2 <= n2; i2++)
                if (1 !== t2[n2 - i2] && t2[n2 - i2] !== e2[r2 - i2])
                  return false;
              return true;
            }
            static getBroadcastDims(t2, e2) {
              const n2 = t2.length, r2 = [];
              for (let i2 = 0; i2 < n2; i2++) {
                const o2 = n2 - 1 - i2, a2 = t2[o2] || 1;
                (e2[e2.length - 1 - i2] || 1) > 1 && 1 === a2 && r2.unshift(o2);
              }
              return r2;
            }
          }
          e.BroadcastUtil = c, e.arrayCopyHelper = function(t2, e2, n2, r2, i2) {
            if (r2 < 0 || r2 >= e2.length)
              throw new Error("sourceIndex out of bounds");
            if (n2 < 0 || n2 >= t2.length)
              throw new Error("targetIndex out of bounds");
            if (r2 + i2 > e2.length)
              throw new Error("source indices to be copied are outside bounds");
            if (n2 + i2 > t2.length)
              throw new Error("target array is too small to hold result");
            for (let o2 = 0; o2 < i2; o2++)
              t2[n2 + o2] = e2[r2 + o2];
          }, e.GemmUtil = class {
            static getShapeOfGemmResult(t2, e2, n2, r2, i2) {
              if (2 !== t2.length || 2 !== n2.length)
                throw new Error("shape need to be of size 2");
              let o2, a2, s2;
              e2 ? (o2 = t2[1], a2 = t2[0]) : (o2 = t2[0], a2 = t2[1]);
              let u2 = -1;
              if (r2 ? (s2 = n2[0], u2 = 1) : (s2 = n2[1], u2 = 0), n2[u2] !== a2)
                throw new Error("dimension mismatch");
              if (o2 <= 0 || s2 <= 0 || a2 <= 0)
                throw new Error("invalid shape specified");
              if (i2 && !c.isValidBroadcast(i2, [o2, s2]))
                throw new Error("gemm: invalid bias shape for broadcast");
              return [o2, s2, a2];
            }
          };
          class l {
            static tensorDataTypeFromProto(t2) {
              switch (t2) {
                case a.onnx.TensorProto.DataType.INT8:
                  return "int8";
                case a.onnx.TensorProto.DataType.UINT8:
                  return "uint8";
                case a.onnx.TensorProto.DataType.BOOL:
                  return "bool";
                case a.onnx.TensorProto.DataType.INT16:
                  return "int16";
                case a.onnx.TensorProto.DataType.UINT16:
                  return "uint16";
                case a.onnx.TensorProto.DataType.INT32:
                  return "int32";
                case a.onnx.TensorProto.DataType.UINT32:
                  return "uint32";
                case a.onnx.TensorProto.DataType.FLOAT:
                  return "float32";
                case a.onnx.TensorProto.DataType.DOUBLE:
                  return "float64";
                case a.onnx.TensorProto.DataType.STRING:
                  return "string";
                case a.onnx.TensorProto.DataType.INT64:
                  return "int32";
                case a.onnx.TensorProto.DataType.UINT64:
                  return "uint32";
                default:
                  throw new Error(`unsupported data type: ${a.onnx.TensorProto.DataType[t2]}`);
              }
            }
            static tensorDataTypeStringToEnum(t2) {
              switch (t2) {
                case "int8":
                  return a.onnx.TensorProto.DataType.INT8;
                case "uint8":
                  return a.onnx.TensorProto.DataType.UINT8;
                case "bool":
                  return a.onnx.TensorProto.DataType.BOOL;
                case "int16":
                  return a.onnx.TensorProto.DataType.INT16;
                case "uint16":
                  return a.onnx.TensorProto.DataType.UINT16;
                case "int32":
                  return a.onnx.TensorProto.DataType.INT32;
                case "uint32":
                  return a.onnx.TensorProto.DataType.UINT32;
                case "float32":
                  return a.onnx.TensorProto.DataType.FLOAT;
                case "float64":
                  return a.onnx.TensorProto.DataType.DOUBLE;
                case "string":
                  return a.onnx.TensorProto.DataType.STRING;
                case "int64":
                  return a.onnx.TensorProto.DataType.INT64;
                case "uint64":
                  return a.onnx.TensorProto.DataType.UINT64;
                default:
                  throw new Error(`unsupported data type: ${t2}`);
              }
            }
            static tensorDimsFromProto(t2) {
              return t2.map((t3) => o.default.isLong(t3) ? t3.toNumber() : t3);
            }
            static tensorValueTypeFromProto(t2) {
              return { tensorType: l.tensorDataTypeFromProto(t2.elemType), shape: { dims: l.tensorDimsFromProto(t2.shape.dim.map((t3) => t3.dimValue)) } };
            }
            static tensorDimsFromORTFormat(t2) {
              const e2 = [];
              for (let n2 = 0; n2 < t2.dimsLength(); n2++)
                e2.push(p.longToNumber(t2.dims(n2)));
              return e2;
            }
            static tensorAttributesFromORTFormat(t2) {
              const e2 = [];
              for (let n2 = 0; n2 < t2.attributesLength(); n2++)
                e2.push(t2.attributes(n2));
              return e2;
            }
          }
          e.ProtoUtil = l;
          class p {
            static longToNumber(t2, e2) {
              return o.default.isLong(t2) ? t2.toNumber() : t2 instanceof i.flatbuffers.Long ? o.default.fromValue({ low: t2.low, high: t2.high, unsigned: null != e2 && e2 }).toNumber() : t2;
            }
            static isLong(t2) {
              return o.default.isLong(t2) || t2 instanceof i.flatbuffers.Long;
            }
          }
          e.LongUtil = p;
          class f {
            static size(t2) {
              return f.getSizeFromDimensionRange(t2, 0, t2.length);
            }
            static sizeFromDimension(t2, e2) {
              if (e2 < 0 || e2 > t2.length)
                throw new Error(`invalid dimension of ${e2} for sizeFromDimension as Tensor has ${t2.length} dimensions.`);
              return f.getSizeFromDimensionRange(t2, e2, t2.length);
            }
            static sizeToDimension(t2, e2) {
              if (e2 < 0 || e2 > t2.length)
                throw new Error(`invalid dimension of ${e2} for sizeToDimension as Tensor has ${t2.length} dimensions.`);
              return f.getSizeFromDimensionRange(t2, 0, e2);
            }
            static getSizeFromDimensionRange(t2, e2, n2) {
              let r2 = 1;
              for (let i2 = e2; i2 < n2; i2++) {
                if (t2[i2] <= 0)
                  throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");
                r2 *= t2[i2];
              }
              return r2;
            }
            static computeStrides(t2) {
              const e2 = t2.length;
              if (0 === e2)
                return [];
              if (1 === e2)
                return [1];
              const n2 = new Array(e2);
              n2[e2 - 1] = 1, n2[e2 - 2] = t2[e2 - 1];
              for (let r2 = e2 - 3; r2 >= 0; --r2)
                n2[r2] = n2[r2 + 1] * t2[r2 + 1];
              return n2;
            }
            static transpose(t2) {
              return t2.slice().reverse();
            }
            static indicesToOffset(t2, e2, n2) {
              void 0 === n2 && (n2 = t2.length);
              let r2 = 0;
              for (let i2 = 0; i2 < n2; ++i2)
                r2 += e2[i2] * t2[i2];
              return r2;
            }
            static offsetToIndices(t2, e2) {
              const n2 = e2.length;
              if (0 === n2)
                return [];
              if (1 === n2)
                return [t2 * e2[0]];
              const r2 = new Array(e2.length);
              for (let n3 = 0; n3 < r2.length - 1; ++n3)
                r2[n3] = Math.floor(t2 / e2[n3]), t2 -= r2[n3] * e2[n3];
              return r2[r2.length - 1] = t2, r2;
            }
            static normalizeAxis(t2, e2) {
              if (t2 < -e2 && t2 >= e2)
                throw new Error("unsupported axis for this operation.");
              return t2 < 0 ? t2 + e2 : t2;
            }
            static normalizeAxes(t2, e2) {
              return t2.map((t3) => this.normalizeAxis(t3, e2));
            }
            static incrementIndex(t2, e2, n2) {
              if (0 === e2.length || 0 === t2.length)
                throw new Error("Index incrementing unsupported for scalar Tensor");
              if (void 0 === n2)
                n2 = e2.length;
              else if (n2 <= 0 || n2 > e2.length)
                throw new Error("Incorrect axis to increment on");
              for (let r2 = n2 - 1; r2 >= 0 && (t2[r2]++, !(t2[r2] < e2[r2])); --r2)
                t2[r2] = 0;
            }
            static calculateReshapedDims(t2, e2) {
              if (0 === e2.length) {
                if (0 === t2.length || 1 === f.size(t2))
                  return [];
                throw new Error("cannot reshape to a scalar Tensor");
              }
              const n2 = e2.length, r2 = new Array(n2);
              let i2 = -1, o2 = 1;
              for (let a3 = 0; a3 < n2; a3++) {
                if (e2[a3] < -1)
                  throw new Error("a dimension in shape hints cannot be less than -1");
                if (-1 === e2[a3]) {
                  if (-1 !== i2)
                    throw new Error("at most one dimension in shape hints can be -1");
                  i2 = a3;
                } else {
                  if (0 === e2[a3]) {
                    if (a3 >= t2.length)
                      throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");
                    r2[a3] = t2[a3];
                  } else
                    r2[a3] = e2[a3];
                  o2 *= r2[a3];
                }
              }
              const a2 = f.size(t2);
              if (-1 !== i2) {
                if (a2 % o2 != 0)
                  throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t2}] Output shape: [${e2}]`);
                r2[i2] = a2 / o2;
              } else if (o2 !== a2)
                throw new Error("reshapedDims and originalDims don't have matching sizes");
              return r2;
            }
            static sortBasedOnPerm(t2, e2) {
              return e2 ? e2.map((e3) => t2[e3]) : t2.slice().reverse();
            }
            static padShape(t2, e2) {
              const n2 = t2.length;
              return t2.map((t3, r2) => t3 + e2[r2] + e2[r2 + n2]);
            }
            static areEqual(t2, e2) {
              return t2.length === e2.length && t2.every((t3, n2) => t3 === e2[n2]);
            }
            static validateDimsAndCalcSize(t2) {
              if (t2.length > 6)
                throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");
              let e2 = 1;
              for (const n2 of t2) {
                if (!Number.isInteger(n2))
                  throw new TypeError(`Invalid shape: ${n2} is not an integer`);
                if (n2 < 0 || n2 > 2147483647)
                  throw new TypeError(`Invalid shape: length ${n2} is not allowed`);
                e2 *= n2;
              }
              return e2;
            }
            static flattenShape(t2, e2) {
              e2 < 0 && (e2 += t2.length);
              const n2 = t2.reduce((t3, e3) => t3 * e3, 1), r2 = t2.slice(e2).reduce((t3, e3) => t3 * e3, 1);
              return [n2 / r2, r2];
            }
            static squeezeShape(t2, e2) {
              const n2 = new Array();
              e2 = f.normalizeAxes(e2, t2.length);
              for (let r2 = 0; r2 < t2.length; r2++) {
                const i2 = e2.indexOf(r2) >= 0;
                if (i2 && 1 !== t2[r2])
                  throw new Error("squeeze an axis of size different than 1");
                (0 === e2.length && t2[r2] > 1 || e2.length > 0 && !i2) && n2.push(t2[r2]);
              }
              return n2;
            }
            static unsqueezeShape(t2, e2) {
              const n2 = new Array(t2.length + e2.length);
              n2.fill(0);
              for (let t3 = 0; t3 < e2.length; t3++) {
                const r3 = f.normalizeAxis(e2[t3], n2.length);
                if (r3 >= n2.length)
                  throw new Error("'axes' has an out of range axis");
                if (0 !== n2[r3])
                  throw new Error("'axes' has a duplicate axis");
                n2[r3] = 1;
              }
              let r2 = 0;
              for (let e3 = 0; e3 < n2.length; e3++)
                0 === n2[e3] && (n2[e3] = t2[r2++]);
              if (r2 !== t2.length)
                throw new Error("the unsqueezed dimension could not be established");
              return n2;
            }
          }
          e.ShapeUtil = f, e.MathUtil = class {
            static sqr(t2, e2, n2, r2, i2) {
              if (r2 < 0 || r2 >= e2.length)
                throw new Error("sourceIndex out of bounds");
              if (n2 < 0 || n2 >= t2.length)
                throw new Error("targetIndex out of bounds");
              if (r2 + i2 > e2.length)
                throw new Error("source indices to be copied are outside bounds");
              if (n2 + i2 > t2.length)
                throw new Error("target array is too small to hold result");
              for (let o2 = 0; o2 < i2; o2++)
                t2[n2 + o2] += Math.pow(e2[r2 + o2], 2);
            }
            static axpy(t2, e2, n2, r2, i2, o2) {
              if (r2 < 0 || r2 >= e2.length)
                throw new Error("sourceIndex out of bounds");
              if (n2 < 0 || n2 >= t2.length)
                throw new Error("targetIndex out of bounds");
              if (r2 + i2 > e2.length)
                throw new Error("source indices to be copied are outside bounds");
              if (n2 + i2 > t2.length)
                throw new Error("target array is too small to hold result");
              for (let a2 = 0; a2 < i2; a2++)
                t2[n2 + a2] += o2 * e2[r2 + a2];
            }
            static powx(t2, e2, n2, r2, i2, o2) {
              if (r2 < 0 || r2 >= e2.length)
                throw new Error("sourceIndex out of bounds");
              if (n2 < 0 || n2 >= t2.length)
                throw new Error("targetIndex out of bounds");
              if (r2 + i2 > e2.length)
                throw new Error("source indices to be copied are outside bounds");
              if (n2 + i2 > t2.length)
                throw new Error("target array is too small to hold result");
              for (let a2 = 0; a2 < i2; a2++)
                t2[n2 + a2] = Math.pow(e2[r2 + a2], o2);
            }
            static mul(t2, e2, n2, r2, i2) {
              if (r2 < 0 || r2 >= e2.length)
                throw new Error("sourceIndex out of bounds");
              if (n2 < 0 || n2 >= t2.length)
                throw new Error("targetIndex out of bounds");
              if (r2 + i2 > e2.length)
                throw new Error("source indices to be copied are outside bounds");
              if (n2 + i2 > t2.length)
                throw new Error("target array is too small to hold result");
              for (let o2 = 0; o2 < i2; o2++)
                t2[n2 + o2] = e2[r2 + o2] * t2[n2 + o2];
            }
          };
          class d {
            static splitShape(t2, e2, n2, r2) {
              if (0 === n2.length) {
                if (!r2)
                  throw new Error("need to know number of outputs when the 'split' attribute is not specified");
                d.determineSplit(t2[e2], r2, n2);
              }
              const i2 = [], o2 = [0];
              for (let r3 = 0; r3 < n2.length; ++r3) {
                0 !== r3 && o2.push(o2[r3 - 1] + n2[r3 - 1]);
                const a2 = t2.slice();
                a2[e2] = n2[r3], i2.push(a2);
              }
              return [i2, o2];
            }
            static determineSplit(t2, e2, n2) {
              if (t2 % e2 != 0)
                throw new Error("cannot split tensor to equal sized parts");
              for (let r2 = 0; r2 < e2; ++r2)
                n2.push(t2 / e2);
            }
          }
          e.SplitUtil = d;
          class h {
            static calcReduce(t2, e2, n2, r2, i2) {
              const o2 = t2.dims.slice(0);
              0 === e2.length && o2.forEach((t3, n3) => e2.push(n3));
              const a2 = h.calcReduceShape(o2, e2, true), u2 = f.size(a2), l2 = new s.Tensor(a2, t2.type), p2 = f.computeStrides(a2), d2 = f.computeStrides(o2), g2 = new Array(o2.length);
              for (let n3 = 0; n3 < u2; n3++) {
                const a3 = f.offsetToIndices(n3, p2);
                c.fillIndex(a3, o2, g2), l2.set(a3, h.calcReduceByAxis(t2.numberData, e2, o2, 0, f.indicesToOffset(g2, d2), r2, i2));
              }
              return n2 ? l2 : new s.Tensor(h.calcReduceShape(o2, e2, n2), l2.type, void 0, void 0, l2.data, l2.dataId);
            }
            static calcReduceByAxis(t2, e2, n2, r2, i2, o2, a2) {
              let s2 = 0;
              if (r2 >= e2.length)
                return o2(t2[i2]);
              const u2 = e2[r2], c2 = u2 >= n2.length ? 1 : f.size(n2.slice(u2 + 1));
              for (let l2 = 0; l2 < n2[u2]; l2++)
                s2 = 0 === l2 ? h.calcReduceByAxis(t2, e2, n2, r2 + 1, i2, o2, a2) : a2(s2, h.calcReduceByAxis(t2, e2, n2, r2 + 1, i2, o2, a2)), i2 += c2;
              return s2;
            }
            static calcReduceShape(t2, e2, n2) {
              const r2 = t2.slice();
              for (let t3 = 0; t3 < e2.length; t3++)
                r2[e2[t3]] = n2 ? 1 : 0;
              return r2.filter((t3) => 0 !== t3);
            }
          }
          e.ReduceUtil = h;
          class g {
            static adjustPoolAttributes(t2, e2, n2, r2, i2, o2) {
              if (!t2 && n2.length !== e2.length - 2)
                throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");
              if (t2)
                for (let t3 = 0; t3 < e2.length - 2; t3++)
                  t3 >= n2.length ? n2.push(e2[t3 + 2]) : n2[t3] = e2[t3 + 2];
              for (let t3 = 0; t3 < n2.length; t3++)
                if (t3 < r2.length) {
                  if (r2[t3] < 0)
                    throw new Error("strides should be greater than or equal to 1");
                } else
                  r2.push(1);
              for (let t3 = 0; t3 < n2.length; t3++)
                if (t3 < i2.length) {
                  if (i2[t3] < 0)
                    throw new Error("dilations should be greater than or equal to 1");
                } else
                  i2.push(1);
              for (let t3 = 0; t3 < 2 * n2.length; t3++)
                if (t3 < o2.length) {
                  if (o2[t3] < 0)
                    throw new Error("pad should be greater than or equal to 1");
                } else
                  o2.push(0);
              for (let t3 = 0; t3 < n2.length; t3++) {
                if (n2[t3] <= 0)
                  throw new Error("kernel shapes need to be greater than 0");
                if (o2[t3] >= n2[t3] || o2[t3 + n2.length] >= n2[t3])
                  throw new Error("pads should be smaller than kernel");
              }
            }
            static adjustPadsBasedOnAutoPad(t2, e2, n2, r2, i2, o2) {
              if (o2) {
                if (i2.length !== 2 * (t2.length - 2))
                  throw new Error("length of pads should be twice the length of data dimensions");
                if (e2.length !== t2.length - 2)
                  throw new Error("length of strides should be the length of data dimensions");
                if (r2.length !== t2.length - 2)
                  throw new Error("length of kernel shapes should be the length of data dimensions");
                for (let a2 = 0; a2 < t2.length - 2; a2++)
                  g.adjustPadAndReturnShape(t2[a2 + 2], e2[a2], n2[a2], r2[a2], i2, a2, a2 + t2.length - 2, o2);
              }
            }
            static computePoolOutputShape(t2, e2, n2, r2, i2, o2, a2) {
              if (e2.length <= 0)
                throw new Error("input shape must be of size greater than 0");
              const s2 = [e2[0], e2[1]];
              return g.computeShapeHelper(t2, e2, s2, n2, r2, i2, o2, a2), s2;
            }
            static computeConvOutputShape(t2, e2, n2, r2, i2, o2, a2) {
              if (t2.length <= 0 || e2.length <= 0)
                throw new Error("invalid input tensor dims or invalid filter tensor dims");
              const s2 = [t2[0], e2[0]];
              return g.computeShapeHelper(false, t2, s2, n2, r2, i2, o2, a2), s2;
            }
            static computeShapeHelper(t2, e2, n2, r2, i2, o2, a2, s2) {
              if (t2)
                for (let t3 = 0; t3 < e2.length - 2; t3++)
                  n2.push(1);
              else
                for (let t3 = 0; t3 < e2.length - 2; t3++)
                  n2.push(g.adjustPadAndReturnShape(e2[t3 + 2], r2[t3], i2[t3], o2[t3], a2, t3, t3 + e2.length - 2, s2));
            }
            static adjustPadAndReturnShape(t2, e2, n2, r2, i2, o2, a2, s2) {
              const u2 = n2 * (r2 - 1) + 1;
              if (!s2 || "NOTSET" === s2)
                return Math.floor((t2 + i2[o2] + i2[a2] - u2) / e2 + 1);
              switch (s2) {
                case "VALID":
                  return i2[o2] = 0, i2[a2] = 0, Math.floor((t2 - u2) / e2 + 1);
                case "SAME_LOWER":
                case "SAME_UPPER":
                  if (1 !== n2)
                    throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");
                  {
                    const n3 = ((t2 + e2 - 1) / e2 - 1) * e2 + r2 - t2;
                    return i2[o2] = "SAME_LOWER" === s2 ? Math.floor((n3 + 1) / 2) : Math.floor(n3 / 2), i2[a2] = n3 - i2[o2], Math.floor((t2 + n3 - r2) / e2 + 1);
                  }
                default:
                  throw new Error("Unsupported AutoPad type");
              }
            }
          }
          e.PoolConvUtil = g, e.MIN_CLIP = -34028234663852886e22, e.MAX_CLIP = 34028234663852886e22, e.decodeUtf8String = function(t2) {
            return new TextDecoder().decode(t2);
          };
        }, 7967: (t, e) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.iterateExtraOptions = void 0, e.iterateExtraOptions = (t2, n, r, i) => {
            if ("object" == typeof t2 && null !== t2) {
              if (r.has(t2))
                throw new Error("Circular reference in options");
              r.add(t2);
            }
            Object.entries(t2).forEach(([t3, o]) => {
              const a = n ? n + t3 : t3;
              if ("object" == typeof o)
                (0, e.iterateExtraOptions)(o, a + ".", r, i);
              else if ("string" == typeof o || "number" == typeof o)
                i(a, o.toString());
              else {
                if ("boolean" != typeof o)
                  throw new Error("Can't handle extra config type: " + typeof o);
                i(a, o ? "1" : "0");
              }
            });
          };
        }, 2157: function(t, e, n) {
          "use strict";
          var r, i = this && this.__createBinding || (Object.create ? function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2);
            var i2 = Object.getOwnPropertyDescriptor(e2, n2);
            i2 && !("get" in i2 ? !e2.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
              return e2[n2];
            } }), Object.defineProperty(t2, r2, i2);
          } : function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2), t2[r2] = e2[n2];
          }), o = this && this.__setModuleDefault || (Object.create ? function(t2, e2) {
            Object.defineProperty(t2, "default", { enumerable: true, value: e2 });
          } : function(t2, e2) {
            t2.default = e2;
          }), a = this && this.__importStar || function(t2) {
            if (t2 && t2.__esModule)
              return t2;
            var e2 = {};
            if (null != t2)
              for (var n2 in t2)
                "default" !== n2 && Object.prototype.hasOwnProperty.call(t2, n2) && i(e2, t2, n2);
            return o(e2, t2), e2;
          };
          Object.defineProperty(e, "__esModule", { value: true }), e.endProfiling = e.run = e.releaseSession = e.createSession = e.createSessionFinalize = e.createSessionAllocate = e.initOrt = e.initWasm = void 0;
          const s = n(1670), u = a(n(349)), c = n(6361), l = () => !!s.env.wasm.proxy && "undefined" != typeof document;
          let p, f, d, h = false, g = false, b = false;
          const m = [], y = [], _ = [], v = [], w = [], x = [], T = () => {
            if (h || !g || b || !p)
              throw new Error("worker not ready");
          }, S = (t2) => {
            switch (t2.data.type) {
              case "init-wasm":
                h = false, t2.data.err ? (b = true, f[1](t2.data.err)) : (g = true, f[0]());
                break;
              case "init-ort":
                t2.data.err ? d[1](t2.data.err) : d[0]();
                break;
              case "create_allocate":
                t2.data.err ? m.shift()[1](t2.data.err) : m.shift()[0](t2.data.out);
                break;
              case "create_finalize":
                t2.data.err ? y.shift()[1](t2.data.err) : y.shift()[0](t2.data.out);
                break;
              case "create":
                t2.data.err ? _.shift()[1](t2.data.err) : _.shift()[0](t2.data.out);
                break;
              case "release":
                t2.data.err ? v.shift()[1](t2.data.err) : v.shift()[0]();
                break;
              case "run":
                t2.data.err ? w.shift()[1](t2.data.err) : w.shift()[0](t2.data.out);
                break;
              case "end-profiling":
                t2.data.err ? x.shift()[1](t2.data.err) : x.shift()[0]();
            }
          }, O = "undefined" != typeof document ? null === (r = null === document || void 0 === document ? void 0 : document.currentScript) || void 0 === r ? void 0 : r.src : void 0;
          e.initWasm = async () => {
            if (l()) {
              if (g)
                return;
              if (h)
                throw new Error("multiple calls to 'initWasm()' detected.");
              if (b)
                throw new Error("previous call to 'initWasm()' failed.");
              return h = true, void 0 === s.env.wasm.wasmPaths && O && 0 !== O.indexOf("blob:") && (s.env.wasm.wasmPaths = O.substr(0, +O.lastIndexOf("/") + 1)), new Promise((t2, e2) => {
                null == p || p.terminate(), p = n(9710).Z(), p.onmessage = S, f = [t2, e2];
                const r2 = { type: "init-wasm", in: s.env.wasm };
                p.postMessage(r2);
              });
            }
            return (0, c.initializeWebAssembly)(s.env.wasm);
          }, e.initOrt = async (t2, e2) => {
            if (l())
              return T(), new Promise((n2, r2) => {
                d = [n2, r2];
                const i2 = { type: "init-ort", in: { numThreads: t2, loggingLevel: e2 } };
                p.postMessage(i2);
              });
            u.initOrt(t2, e2);
          }, e.createSessionAllocate = async (t2) => l() ? (T(), new Promise((e2, n2) => {
            m.push([e2, n2]);
            const r2 = { type: "create_allocate", in: { model: t2 } };
            p.postMessage(r2, [t2.buffer]);
          })) : u.createSessionAllocate(t2), e.createSessionFinalize = async (t2, e2) => l() ? (T(), new Promise((n2, r2) => {
            y.push([n2, r2]);
            const i2 = { type: "create_finalize", in: { modeldata: t2, options: e2 } };
            p.postMessage(i2);
          })) : u.createSessionFinalize(t2, e2), e.createSession = async (t2, e2) => l() ? (T(), new Promise((n2, r2) => {
            _.push([n2, r2]);
            const i2 = { type: "create", in: { model: t2, options: e2 } };
            p.postMessage(i2, [t2.buffer]);
          })) : u.createSession(t2, e2), e.releaseSession = async (t2) => {
            if (l())
              return T(), new Promise((e2, n2) => {
                v.push([e2, n2]);
                const r2 = { type: "release", in: t2 };
                p.postMessage(r2);
              });
            u.releaseSession(t2);
          }, e.run = async (t2, e2, n2, r2, i2) => l() ? (T(), new Promise((o2, a2) => {
            w.push([o2, a2]);
            const s2 = { type: "run", in: { sessionId: t2, inputIndices: e2, inputs: n2, outputIndices: r2, options: i2 } };
            p.postMessage(s2, u.extractTransferableBuffers(n2));
          })) : u.run(t2, e2, n2, r2, i2), e.endProfiling = async (t2) => {
            if (l())
              return T(), new Promise((e2, n2) => {
                x.push([e2, n2]);
                const r2 = { type: "end-profiling", in: t2 };
                p.postMessage(r2);
              });
            u.endProfiling(t2);
          };
        }, 586: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.setRunOptions = void 0;
          const r = n(7967), i = n(4983), o = n(6361);
          e.setRunOptions = (t2) => {
            const e2 = (0, o.getInstance)();
            let n2 = 0;
            const a = [], s = t2 || {};
            try {
              if (void 0 === (null == t2 ? void 0 : t2.logSeverityLevel))
                s.logSeverityLevel = 2;
              else if ("number" != typeof t2.logSeverityLevel || !Number.isInteger(t2.logSeverityLevel) || t2.logSeverityLevel < 0 || t2.logSeverityLevel > 4)
                throw new Error(`log serverity level is not valid: ${t2.logSeverityLevel}`);
              if (void 0 === (null == t2 ? void 0 : t2.logVerbosityLevel))
                s.logVerbosityLevel = 0;
              else if ("number" != typeof t2.logVerbosityLevel || !Number.isInteger(t2.logVerbosityLevel))
                throw new Error(`log verbosity level is not valid: ${t2.logVerbosityLevel}`);
              void 0 === (null == t2 ? void 0 : t2.terminate) && (s.terminate = false);
              let o2 = 0;
              if (void 0 !== (null == t2 ? void 0 : t2.tag) && (o2 = (0, i.allocWasmString)(t2.tag, a)), n2 = e2._OrtCreateRunOptions(s.logSeverityLevel, s.logVerbosityLevel, !!s.terminate, o2), 0 === n2)
                throw new Error("Can't create run options");
              return void 0 !== (null == t2 ? void 0 : t2.extra) && (0, r.iterateExtraOptions)(t2.extra, "", /* @__PURE__ */ new WeakSet(), (t3, r2) => {
                const o3 = (0, i.allocWasmString)(t3, a), s2 = (0, i.allocWasmString)(r2, a);
                if (0 !== e2._OrtAddRunConfigEntry(n2, o3, s2))
                  throw new Error(`Can't set a run config entry: ${t3} - ${r2}`);
              }), [n2, a];
            } catch (t3) {
              throw 0 !== n2 && e2._OrtReleaseRunOptions(n2), a.forEach(e2._free), t3;
            }
          };
        }, 2306: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.OnnxruntimeWebAssemblySessionHandler = void 0;
          const r = n(2806), i = n(1670), o = n(2850), a = n(2157);
          let s;
          e.OnnxruntimeWebAssemblySessionHandler = class {
            async createSessionAllocate(t2) {
              const e2 = await fetch(t2), n2 = await e2.arrayBuffer();
              return (0, a.createSessionAllocate)(new Uint8Array(n2));
            }
            async loadModel(t2, e2) {
              if (s || (await (0, a.initOrt)(i.env.wasm.numThreads, ((t3) => {
                switch (t3) {
                  case "verbose":
                    return 0;
                  case "info":
                    return 1;
                  case "warning":
                    return 2;
                  case "error":
                    return 3;
                  case "fatal":
                    return 4;
                  default:
                    throw new Error(`unsupported logging level: ${t3}`);
                }
              })(i.env.logLevel)), s = true), "string" == typeof t2)
                if ("undefined" == typeof fetch) {
                  const n2 = await (0, o.promisify)(r.readFile)(t2);
                  [this.sessionId, this.inputNames, this.outputNames] = await (0, a.createSession)(n2, e2);
                } else {
                  const n2 = await this.createSessionAllocate(t2);
                  [this.sessionId, this.inputNames, this.outputNames] = await (0, a.createSessionFinalize)(n2, e2);
                }
              else
                [this.sessionId, this.inputNames, this.outputNames] = await (0, a.createSession)(t2, e2);
            }
            async dispose() {
              return (0, a.releaseSession)(this.sessionId);
            }
            async run(t2, e2, n2) {
              const r2 = [], o2 = [];
              Object.entries(t2).forEach((t3) => {
                const e3 = t3[0], n3 = t3[1], i2 = this.inputNames.indexOf(e3);
                if (-1 === i2)
                  throw new Error(`invalid input '${e3}'`);
                r2.push(n3), o2.push(i2);
              });
              const s2 = [];
              Object.entries(e2).forEach((t3) => {
                const e3 = t3[0], n3 = this.outputNames.indexOf(e3);
                if (-1 === n3)
                  throw new Error(`invalid output '${e3}'`);
                s2.push(n3);
              });
              const u = await (0, a.run)(this.sessionId, o2, r2.map((t3) => [t3.type, t3.dims, t3.data]), s2, n2), c = {};
              for (let t3 = 0; t3 < u.length; t3++)
                c[this.outputNames[s2[t3]]] = new i.Tensor(u[t3][0], u[t3][2], u[t3][1]);
              return c;
            }
            startProfiling() {
            }
            endProfiling() {
              (0, a.endProfiling)(this.sessionId);
            }
          };
        }, 4919: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.setSessionOptions = void 0;
          const r = n(7967), i = n(4983), o = n(6361);
          e.setSessionOptions = (t2) => {
            const e2 = (0, o.getInstance)();
            let n2 = 0;
            const a = [], s = t2 || {};
            ((t3) => {
              t3.extra || (t3.extra = {}), t3.extra.session || (t3.extra.session = {});
              const e3 = t3.extra.session;
              e3.use_ort_model_bytes_directly || (e3.use_ort_model_bytes_directly = "1");
            })(s);
            try {
              void 0 === (null == t2 ? void 0 : t2.graphOptimizationLevel) && (s.graphOptimizationLevel = "all");
              const u = ((t3) => {
                switch (t3) {
                  case "disabled":
                    return 0;
                  case "basic":
                    return 1;
                  case "extended":
                    return 2;
                  case "all":
                    return 99;
                  default:
                    throw new Error(`unsupported graph optimization level: ${t3}`);
                }
              })(s.graphOptimizationLevel);
              void 0 === (null == t2 ? void 0 : t2.enableCpuMemArena) && (s.enableCpuMemArena = true), void 0 === (null == t2 ? void 0 : t2.enableMemPattern) && (s.enableMemPattern = true), void 0 === (null == t2 ? void 0 : t2.executionMode) && (s.executionMode = "sequential");
              const c = ((t3) => {
                switch (t3) {
                  case "sequential":
                    return 0;
                  case "parallel":
                    return 1;
                  default:
                    throw new Error(`unsupported execution mode: ${t3}`);
                }
              })(s.executionMode);
              let l = 0;
              if (void 0 !== (null == t2 ? void 0 : t2.logId) && (l = (0, i.allocWasmString)(t2.logId, a)), void 0 === (null == t2 ? void 0 : t2.logSeverityLevel))
                s.logSeverityLevel = 2;
              else if ("number" != typeof t2.logSeverityLevel || !Number.isInteger(t2.logSeverityLevel) || t2.logSeverityLevel < 0 || t2.logSeverityLevel > 4)
                throw new Error(`log serverity level is not valid: ${t2.logSeverityLevel}`);
              if (void 0 === (null == t2 ? void 0 : t2.logVerbosityLevel))
                s.logVerbosityLevel = 0;
              else if ("number" != typeof t2.logVerbosityLevel || !Number.isInteger(t2.logVerbosityLevel))
                throw new Error(`log verbosity level is not valid: ${t2.logVerbosityLevel}`);
              if (void 0 === (null == t2 ? void 0 : t2.enableProfiling) && (s.enableProfiling = false), n2 = e2._OrtCreateSessionOptions(u, !!s.enableCpuMemArena, !!s.enableMemPattern, c, !!s.enableProfiling, 0, l, s.logSeverityLevel, s.logVerbosityLevel), 0 === n2)
                throw new Error("Can't create session options");
              return (null == t2 ? void 0 : t2.executionProviders) && ((t3, e3, n3) => {
                for (const r2 of e3) {
                  let e4 = "string" == typeof r2 ? r2 : r2.name;
                  switch (e4) {
                    case "xnnpack":
                      e4 = "XNNPACK";
                      break;
                    case "wasm":
                    case "cpu":
                      continue;
                    default:
                      throw new Error(`not supported EP: ${e4}`);
                  }
                  const a2 = (0, i.allocWasmString)(e4, n3);
                  if (0 !== (0, o.getInstance)()._OrtAppendExecutionProvider(t3, a2))
                    throw new Error(`Can't append execution provider: ${e4}`);
                }
              })(n2, t2.executionProviders, a), void 0 !== (null == t2 ? void 0 : t2.extra) && (0, r.iterateExtraOptions)(t2.extra, "", /* @__PURE__ */ new WeakSet(), (t3, r2) => {
                const o2 = (0, i.allocWasmString)(t3, a), s2 = (0, i.allocWasmString)(r2, a);
                if (0 !== e2._OrtAddSessionConfigEntry(n2, o2, s2))
                  throw new Error(`Can't set a session config entry: ${t3} - ${r2}`);
              }), [n2, a];
            } catch (t3) {
              throw 0 !== n2 && e2._OrtReleaseSessionOptions(n2), a.forEach(e2._free), t3;
            }
          };
        }, 4983: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.allocWasmString = void 0;
          const r = n(6361);
          e.allocWasmString = (t2, e2) => {
            const n2 = (0, r.getInstance)(), i = n2.lengthBytesUTF8(t2) + 1, o = n2._malloc(i);
            return n2.stringToUTF8(t2, o, i), e2.push(o), o;
          };
        }, 349: (t, e, n) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.extractTransferableBuffers = e.endProfiling = e.run = e.releaseSession = e.createSession = e.createSessionFinalize = e.createSessionAllocate = e.initOrt = void 0;
          const r = n(586), i = n(4919), o = n(4983), a = n(6361);
          e.initOrt = (t2, e2) => {
            const n2 = (0, a.getInstance)()._OrtInit(t2, e2);
            if (0 !== n2)
              throw new Error(`Can't initialize onnxruntime. error code = ${n2}`);
          };
          const s = /* @__PURE__ */ new Map();
          e.createSessionAllocate = (t2) => {
            const e2 = (0, a.getInstance)(), n2 = e2._malloc(t2.byteLength);
            return e2.HEAPU8.set(t2, n2), [n2, t2.byteLength];
          }, e.createSessionFinalize = (t2, e2) => {
            const n2 = (0, a.getInstance)();
            let r2 = 0, o2 = 0, u2 = [];
            try {
              if ([o2, u2] = (0, i.setSessionOptions)(e2), r2 = n2._OrtCreateSession(t2[0], t2[1], o2), 0 === r2)
                throw new Error("Can't create a session");
            } finally {
              n2._free(t2[0]), n2._OrtReleaseSessionOptions(o2), u2.forEach(n2._free);
            }
            const c2 = n2._OrtGetInputCount(r2), l2 = n2._OrtGetOutputCount(r2), p = [], f = [], d = [], h = [];
            for (let t3 = 0; t3 < c2; t3++) {
              const e3 = n2._OrtGetInputName(r2, t3);
              if (0 === e3)
                throw new Error("Can't get an input name");
              f.push(e3), p.push(n2.UTF8ToString(e3));
            }
            for (let t3 = 0; t3 < l2; t3++) {
              const e3 = n2._OrtGetOutputName(r2, t3);
              if (0 === e3)
                throw new Error("Can't get an output name");
              h.push(e3), d.push(n2.UTF8ToString(e3));
            }
            return s.set(r2, [r2, f, h]), [r2, p, d];
          }, e.createSession = (t2, n2) => {
            const r2 = (0, e.createSessionAllocate)(t2);
            return (0, e.createSessionFinalize)(r2, n2);
          }, e.releaseSession = (t2) => {
            const e2 = (0, a.getInstance)(), n2 = s.get(t2);
            if (!n2)
              throw new Error("invalid session id");
            const r2 = n2[0], i2 = n2[1], o2 = n2[2];
            i2.forEach(e2._OrtFree), o2.forEach(e2._OrtFree), e2._OrtReleaseSession(r2), s.delete(t2);
          };
          const u = (t2) => {
            switch (t2) {
              case "int8":
                return 3;
              case "uint8":
                return 2;
              case "bool":
                return 9;
              case "int16":
                return 5;
              case "uint16":
                return 4;
              case "int32":
                return 6;
              case "uint32":
                return 12;
              case "float32":
                return 1;
              case "float64":
                return 11;
              case "string":
                return 8;
              case "int64":
                return 7;
              case "uint64":
                return 13;
              default:
                throw new Error(`unsupported data type: ${t2}`);
            }
          }, c = (t2) => {
            switch (t2) {
              case 3:
                return "int8";
              case 2:
                return "uint8";
              case 9:
                return "bool";
              case 5:
                return "int16";
              case 4:
                return "uint16";
              case 6:
                return "int32";
              case 12:
                return "uint32";
              case 1:
                return "float32";
              case 11:
                return "float64";
              case 8:
                return "string";
              case 7:
                return "int64";
              case 13:
                return "uint64";
              default:
                throw new Error(`unsupported data type: ${t2}`);
            }
          }, l = (t2) => {
            switch (t2) {
              case "float32":
                return Float32Array;
              case "uint8":
              case "bool":
                return Uint8Array;
              case "int8":
                return Int8Array;
              case "uint16":
                return Uint16Array;
              case "int16":
                return Int16Array;
              case "int32":
                return Int32Array;
              case "float64":
                return Float64Array;
              case "uint32":
                return Uint32Array;
              case "int64":
                return BigInt64Array;
              case "uint64":
                return BigUint64Array;
              default:
                throw new Error(`unsupported type: ${t2}`);
            }
          };
          e.run = (t2, e2, n2, i2, p) => {
            const f = (0, a.getInstance)(), d = s.get(t2);
            if (!d)
              throw new Error("invalid session id");
            const h = d[0], g = d[1], b = d[2], m = e2.length, y = i2.length;
            let _ = 0, v = [];
            const w = [], x = [];
            try {
              [_, v] = (0, r.setRunOptions)(p);
              for (let t4 = 0; t4 < m; t4++) {
                const e3 = n2[t4][0], r2 = n2[t4][1], i3 = n2[t4][2];
                let a3, s3;
                if (Array.isArray(i3)) {
                  s3 = 4 * i3.length, a3 = f._malloc(s3), x.push(a3);
                  let t5 = a3 / 4;
                  for (let e4 = 0; e4 < i3.length; e4++) {
                    if ("string" != typeof i3[e4])
                      throw new TypeError(`tensor data at index ${e4} is not a string`);
                    f.HEAPU32[t5++] = (0, o.allocWasmString)(i3[e4], x);
                  }
                } else
                  s3 = i3.byteLength, a3 = f._malloc(s3), x.push(a3), f.HEAPU8.set(new Uint8Array(i3.buffer, i3.byteOffset, s3), a3);
                const c2 = f.stackSave(), l2 = f.stackAlloc(4 * r2.length);
                try {
                  let t5 = l2 / 4;
                  r2.forEach((e4) => f.HEAP32[t5++] = e4);
                  const n3 = f._OrtCreateTensor(u(e3), a3, s3, l2, r2.length);
                  if (0 === n3)
                    throw new Error("Can't create a tensor");
                  w.push(n3);
                } finally {
                  f.stackRestore(c2);
                }
              }
              const t3 = f.stackSave(), a2 = f.stackAlloc(4 * m), s2 = f.stackAlloc(4 * m), d2 = f.stackAlloc(4 * y), T = f.stackAlloc(4 * y);
              try {
                let n3 = a2 / 4, r2 = s2 / 4, o2 = d2 / 4, u2 = T / 4;
                for (let t4 = 0; t4 < m; t4++)
                  f.HEAPU32[n3++] = w[t4], f.HEAPU32[r2++] = g[e2[t4]];
                for (let t4 = 0; t4 < y; t4++)
                  f.HEAPU32[o2++] = 0, f.HEAPU32[u2++] = b[i2[t4]];
                let p2 = f._OrtRun(h, s2, a2, m, T, y, d2, _);
                const v2 = [];
                if (0 === p2)
                  for (let t4 = 0; t4 < y; t4++) {
                    const e3 = f.HEAPU32[d2 / 4 + t4], n4 = f.stackSave(), r3 = f.stackAlloc(16);
                    let i3, o3 = 0;
                    try {
                      if (p2 = f._OrtGetTensorData(e3, r3, r3 + 4, r3 + 8, r3 + 12), 0 !== p2)
                        throw new Error(`Can't access output tensor data. error code = ${p2}`);
                      let t5 = r3 / 4;
                      const a3 = f.HEAPU32[t5++];
                      o3 = f.HEAPU32[t5++];
                      const s3 = f.HEAPU32[t5++], u3 = f.HEAPU32[t5++], d3 = [];
                      for (let t6 = 0; t6 < u3; t6++)
                        d3.push(f.HEAPU32[s3 / 4 + t6]);
                      f._OrtFree(s3);
                      const h2 = 0 === d3.length ? 1 : d3.reduce((t6, e4) => t6 * e4);
                      if (i3 = c(a3), "string" === i3) {
                        const t6 = [];
                        let e4 = o3 / 4;
                        for (let n5 = 0; n5 < h2; n5++) {
                          const r4 = f.HEAPU32[e4++], i4 = n5 === h2 - 1 ? void 0 : f.HEAPU32[e4] - r4;
                          t6.push(f.UTF8ToString(r4, i4));
                        }
                        v2.push([i3, d3, t6]);
                      } else {
                        const t6 = new (l(i3))(h2);
                        new Uint8Array(t6.buffer, t6.byteOffset, t6.byteLength).set(f.HEAPU8.subarray(o3, o3 + t6.byteLength)), v2.push([i3, d3, t6]);
                      }
                    } finally {
                      f.stackRestore(n4), "string" === i3 && o3 && f._free(o3), f._OrtReleaseTensor(e3);
                    }
                  }
                if (0 === p2)
                  return v2;
                throw new Error(`failed to call OrtRun(). error code = ${p2}.`);
              } finally {
                f.stackRestore(t3);
              }
            } finally {
              w.forEach(f._OrtReleaseTensor), x.forEach(f._free), f._OrtReleaseRunOptions(_), v.forEach(f._free);
            }
          }, e.endProfiling = (t2) => {
            const e2 = (0, a.getInstance)(), n2 = s.get(t2);
            if (!n2)
              throw new Error("invalid session id");
            const r2 = n2[0], i2 = e2._OrtEndProfiling(r2);
            if (0 === i2)
              throw new Error("Can't get an profile file name");
            e2._OrtFree(i2);
          }, e.extractTransferableBuffers = (t2) => {
            const e2 = [];
            for (const n2 of t2) {
              const t3 = n2[2];
              !Array.isArray(t3) && t3.buffer && e2.push(t3.buffer);
            }
            return e2;
          };
        }, 6361: function(t, e, n) {
          "use strict";
          var r = this && this.__createBinding || (Object.create ? function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2);
            var i2 = Object.getOwnPropertyDescriptor(e2, n2);
            i2 && !("get" in i2 ? !e2.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
              return e2[n2];
            } }), Object.defineProperty(t2, r2, i2);
          } : function(t2, e2, n2, r2) {
            void 0 === r2 && (r2 = n2), t2[r2] = e2[n2];
          }), i = this && this.__setModuleDefault || (Object.create ? function(t2, e2) {
            Object.defineProperty(t2, "default", { enumerable: true, value: e2 });
          } : function(t2, e2) {
            t2.default = e2;
          }), o = this && this.__importStar || function(t2) {
            if (t2 && t2.__esModule)
              return t2;
            var e2 = {};
            if (null != t2)
              for (var n2 in t2)
                "default" !== n2 && Object.prototype.hasOwnProperty.call(t2, n2) && r(e2, t2, n2);
            return i(e2, t2), e2;
          }, a = this && this.__importDefault || function(t2) {
            return t2 && t2.__esModule ? t2 : { default: t2 };
          };
          Object.defineProperty(e, "__esModule", { value: true }), e.dispose = e.getInstance = e.initializeWebAssembly = void 0;
          const s = o(n(6449)), u = a(n(932)), c = n(3474);
          let l, p = false, f = false, d = false;
          const h = (t2, e2) => e2 ? t2 ? "ort-wasm-simd-threaded.wasm" : "ort-wasm-threaded.wasm" : t2 ? "ort-wasm-simd.wasm" : "ort-wasm.wasm";
          e.initializeWebAssembly = async (t2) => {
            if (p)
              return Promise.resolve();
            if (f)
              throw new Error("multiple calls to 'initializeWebAssembly()' detected.");
            if (d)
              throw new Error("previous call to 'initializeWebAssembly()' failed.");
            f = true;
            const e2 = t2.initTimeout, r2 = t2.numThreads, i2 = t2.simd, o2 = r2 > 1 && (() => {
              try {
                return "undefined" != typeof SharedArrayBuffer && ("undefined" != typeof MessageChannel && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11])));
              } catch (t3) {
                return false;
              }
            })(), a2 = i2 && (() => {
              try {
                return WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 30, 1, 28, 0, 65, 0, 253, 15, 253, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 253, 186, 1, 26, 11]));
              } catch (t3) {
                return false;
              }
            })(), g = "string" == typeof t2.wasmPaths ? t2.wasmPaths : void 0, b = h(false, o2), m = h(a2, o2), y = "object" == typeof t2.wasmPaths ? t2.wasmPaths[m] : void 0;
            let _ = false;
            const v = [];
            if (e2 > 0 && v.push(new Promise((t3) => {
              setTimeout(() => {
                _ = true, t3();
              }, e2);
            })), v.push(new Promise((t3, e3) => {
              const r3 = o2 ? c : u.default, i3 = { locateFile: (t4, e4) => o2 && t4.endsWith(".worker.js") && "undefined" != typeof Blob ? URL.createObjectURL(new Blob([n(4154)], { type: "text/javascript" })) : t4 === b ? null != y ? y : (null != g ? g : e4) + m : e4 + t4 };
              if (o2)
                if ("undefined" == typeof Blob)
                  i3.mainScriptUrlOrBlob = s.join("/", "ort-wasm-threaded.js");
                else {
                  const t4 = `var ortWasmThreaded=(function(){var _scriptDir;return ${r3.toString()}})();`;
                  i3.mainScriptUrlOrBlob = new Blob([t4], { type: "text/javascript" });
                }
              r3(i3).then((e4) => {
                f = false, p = true, l = e4, t3();
              }, (t4) => {
                f = false, d = true, e3(t4);
              });
            })), await Promise.race(v), _)
              throw new Error(`WebAssembly backend initializing failed due to timeout: ${e2}ms`);
          }, e.getInstance = () => {
            if (p && l)
              return l;
            throw new Error("WebAssembly is not initialized yet.");
          }, e.dispose = () => {
            var t2;
            !p || f || d || (f = true, null === (t2 = l.PThread) || void 0 === t2 || t2.terminateAllThreads(), l = void 0, f = false, p = false, d = true);
          };
        }, 9710: (t, e, n) => {
          "use strict";
          n.d(e, { Z: () => o });
          var r = n(477), i = n.n(r);
          function o() {
            return i()('/*!\n* ONNX Runtime Web v1.14.0\n* Copyright (c) Microsoft Corporation. All rights reserved.\n* Licensed under the MIT License.\n*/\n(()=>{var t={474:(t,e,n)=>{var _scriptDir,r=(_scriptDir=(_scriptDir="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(t){function e(){return j.buffer!=D&&N(j.buffer),P}function r(){return j.buffer!=D&&N(j.buffer),U}function a(){return j.buffer!=D&&N(j.buffer),F}function i(){return j.buffer!=D&&N(j.buffer),I}function o(){return j.buffer!=D&&N(j.buffer),W}var u,c,s;t=t||{},u||(u=void 0!==t?t:{}),u.ready=new Promise((function(t,e){c=t,s=e}));var l,f,p,h,d,y,b=Object.assign({},u),m="./this.program",g=(t,e)=>{throw e},v="object"==typeof window,w="function"==typeof importScripts,_="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,O=u.ENVIRONMENT_IS_PTHREAD||!1,A="";function S(t){return u.locateFile?u.locateFile(t,A):A+t}if(_){let e;A=w?n(908).dirname(A)+"/":"//",y=()=>{d||(h=n(384),d=n(908))},l=function(t,e){return y(),t=d.normalize(t),h.readFileSync(t,e?void 0:"utf8")},p=t=>((t=l(t,!0)).buffer||(t=new Uint8Array(t)),t),f=(t,e,n)=>{y(),t=d.normalize(t),h.readFile(t,(function(t,r){t?n(t):e(r.buffer)}))},1<process.argv.length&&(m=process.argv[1].replace(/\\\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof ct))throw t})),process.on("unhandledRejection",(function(t){throw t})),g=(t,e)=>{if(Q())throw process.exitCode=t,e;e instanceof ct||x("exiting due to exception: "+e),process.exit(t)},u.inspect=function(){return"[Emscripten Module object]"};try{e=n(925)}catch(t){throw console.error(\'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?\'),t}n.g.Worker=e.Worker}else(v||w)&&(w?A=self.location.href:"undefined"!=typeof document&&document.currentScript&&(A=document.currentScript.src),_scriptDir&&(A=_scriptDir),A=0!==A.indexOf("blob:")?A.substr(0,A.replace(/[?#].*/,"").lastIndexOf("/")+1):"",_||(l=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},w&&(p=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),f=(t,e,n)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?e(r.response):n()},r.onerror=n,r.send(null)}));_&&"undefined"==typeof performance&&(n.g.performance=n(953).performance);var T=console.log.bind(console),E=console.warn.bind(console);_&&(y(),T=t=>h.writeSync(1,t+"\\n"),E=t=>h.writeSync(2,t+"\\n"));var M,C=u.print||T,x=u.printErr||E;Object.assign(u,b),b=null,u.thisProgram&&(m=u.thisProgram),u.quit&&(g=u.quit),u.wasmBinary&&(M=u.wasmBinary);var R=u.noExitRuntime||!1;"object"!=typeof WebAssembly&&at("no native wasm support detected");var j,k,D,P,U,F,I,W,H=!1,L="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function z(t,e,n){var r=(e>>>=0)+n;for(n=e;t[n]&&!(n>=r);)++n;if(16<n-e&&t.buffer&&L)return L.decode(t.buffer instanceof SharedArrayBuffer?t.slice(e,n):t.subarray(e,n));for(r="";e<n;){var a=t[e++];if(128&a){var i=63&t[e++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&t[e++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&t[e++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function Y(t,e){return(t>>>=0)?z(r(),t,e):""}function B(t,e,n,r){if(!(0<r))return 0;var a=n>>>=0;r=n+r-1;for(var i=0;i<t.length;++i){var o=t.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++i)),127>=o){if(n>=r)break;e[n++>>>0]=o}else{if(2047>=o){if(n+1>=r)break;e[n++>>>0]=192|o>>6}else{if(65535>=o){if(n+2>=r)break;e[n++>>>0]=224|o>>12}else{if(n+3>=r)break;e[n++>>>0]=240|o>>18,e[n++>>>0]=128|o>>12&63}e[n++>>>0]=128|o>>6&63}e[n++>>>0]=128|63&o}}return e[n>>>0]=0,n-a}function G(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);127>=r?e++:2047>=r?e+=2:55296<=r&&57343>=r?(e+=4,++n):e+=3}return e}function N(t){D=t,u.HEAP8=P=new Int8Array(t),u.HEAP16=new Int16Array(t),u.HEAP32=F=new Int32Array(t),u.HEAPU8=U=new Uint8Array(t),u.HEAPU16=new Uint16Array(t),u.HEAPU32=I=new Uint32Array(t),u.HEAPF32=new Float32Array(t),u.HEAPF64=W=new Float64Array(t)}O&&(D=u.buffer);var V=u.INITIAL_MEMORY||16777216;if(O)j=u.wasmMemory,D=u.buffer;else if(u.wasmMemory)j=u.wasmMemory;else if(!((j=new WebAssembly.Memory({initial:V/65536,maximum:65536,shared:!0})).buffer instanceof SharedArrayBuffer))throw x("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),_&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory");j&&(D=j.buffer),V=D.byteLength,N(D);var $,q=[],X=[],J=[],Z=[];function Q(){return R||!1}function K(){var t=u.preRun.shift();q.unshift(t)}var tt,et=0,nt=null,rt=null;function at(t){throw O?postMessage({cmd:"onAbort",arg:t}):u.onAbort&&u.onAbort(t),x(t="Aborted("+t+")"),H=!0,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),s(t),t}function it(){return tt.startsWith("data:application/octet-stream;base64,")}function ot(){var t=tt;try{if(t==tt&&M)return new Uint8Array(M);if(p)return p(t);throw"both async and sync fetching of the wasm failed"}catch(t){at(t)}}tt="ort-wasm-threaded.wasm",it()||(tt=S(tt));var ut={};function ct(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function st(t){(t=ht.Vb[t])||at(),ht.mc(t)}function lt(t){var e=ht.Cc();if(!e)return 6;ht.ac.push(e),ht.Vb[t.Ub]=e,e.Ub=t.Ub;var n={cmd:"run",start_routine:t.Ic,arg:t.zc,pthread_ptr:t.Ub};return e.$b=()=>{n.time=performance.now(),e.postMessage(n,t.Nc)},e.loaded&&(e.$b(),delete e.$b),0}function ft(t){if(O)return $t(1,1,t);Q()||(ht.oc(),u.onExit&&u.onExit(t),H=!0),g(t,new ct(t))}function pt(t,e){if(!e&&O)throw bt(t),"unwind";Q()||O||(me(),dt(J),be(0),re[1].length&&ae(1,10),re[2].length&&ae(2,10),ht.oc()),ft(t)}var ht={Yb:[],ac:[],qc:[],Vb:{},fc:function(){O&&ht.Ec()},Pc:function(){},Ec:function(){ht.receiveObjectTransfer=ht.Gc,ht.threadInitTLS=ht.pc,ht.setExitStatus=ht.nc,R=!1},nc:function(){},oc:function(){for(var t of Object.values(ht.Vb))ht.mc(t);for(t of ht.Yb)t.terminate();ht.Yb=[]},mc:function(t){var e=t.Ub;delete ht.Vb[e],ht.Yb.push(t),ht.ac.splice(ht.ac.indexOf(t),1),t.Ub=0,Oe(e)},Gc:function(){},pc:function(){ht.qc.forEach((t=>t()))},Fc:function(t,e){t.onmessage=n=>{var r=(n=n.data).cmd;if(t.Ub&&(ht.Bc=t.Ub),n.targetThread&&n.targetThread!=he()){var a=ht.Vb[n.Qc];a?a.postMessage(n,n.transferList):x(\'Internal error! Worker sent a message "\'+r+\'" to target pthread \'+n.targetThread+", but that thread no longer exists!")}else"processProxyingQueue"===r?zt(n.queue):"spawnThread"===r?lt(n):"cleanupThread"===r?st(n.thread):"killThread"===r?(n=n.thread,r=ht.Vb[n],delete ht.Vb[n],r.terminate(),Oe(n),ht.ac.splice(ht.ac.indexOf(r),1),r.Ub=0):"cancelThread"===r?ht.Vb[n.thread].postMessage({cmd:"cancel"}):"loaded"===r?(t.loaded=!0,e&&e(t),t.$b&&(t.$b(),delete t.$b)):"print"===r?C("Thread "+n.threadId+": "+n.text):"printErr"===r?x("Thread "+n.threadId+": "+n.text):"alert"===r?alert("Thread "+n.threadId+": "+n.text):"setimmediate"===n.target?t.postMessage(n):"onAbort"===r?u.onAbort&&u.onAbort(n.arg):r&&x("worker sent an unknown command "+r);ht.Bc=void 0},t.onerror=t=>{throw x("worker sent an error! "+t.filename+":"+t.lineno+": "+t.message),t},_&&(t.on("message",(function(e){t.onmessage({data:e})})),t.on("error",(function(e){t.onerror(e)})),t.on("detachedExit",(function(){}))),t.postMessage({cmd:"load",urlOrBlob:u.mainScriptUrlOrBlob||_scriptDir,wasmMemory:j,wasmModule:k})},yc:function(){var t=S("ort-wasm-threaded.worker.js");ht.Yb.push(new Worker(t))},Cc:function(){return 0==ht.Yb.length&&(ht.yc(),ht.Fc(ht.Yb[0])),ht.Yb.pop()}};function dt(t){for(;0<t.length;)t.shift()(u)}function yt(t){var e=Ee();return t=t(),Me(e),t}function bt(t){if(O)return $t(2,0,t);try{pt(t)}catch(t){t instanceof ct||"unwind"==t||g(1,t)}}u.PThread=ht,u.establishStackSpace=function(){var t=he(),e=a()[t+44>>2>>>0];t=a()[t+48>>2>>>0],Te(e,e-t),Me(e)};var mt=[];function gt(t){var e=mt[t];return e||(t>=mt.length&&(mt.length=t+1),mt[t]=e=$.get(t)),e}u.invokeEntryPoint=function(t,e){t=gt(t)(e),Q()?ht.nc(t):Ae(t)};var vt,wt,_t=[],Ot=0,At=0;function St(t){this.Zb=t,this.Sb=t-24,this.xc=function(t){i()[this.Sb+4>>2>>>0]=t},this.bc=function(){return i()[this.Sb+4>>2>>>0]},this.wc=function(t){i()[this.Sb+8>>2>>>0]=t},this.Dc=function(){return i()[this.Sb+8>>2>>>0]},this.rc=function(){a()[this.Sb>>2>>>0]=0},this.hc=function(t){t=t?1:0,e()[this.Sb+12>>0>>>0]=t},this.uc=function(){return 0!=e()[this.Sb+12>>0>>>0]},this.ic=function(t){t=t?1:0,e()[this.Sb+13>>0>>>0]=t},this.kc=function(){return 0!=e()[this.Sb+13>>0>>>0]},this.fc=function(t,e){this.cc(0),this.xc(t),this.wc(e),this.rc(),this.hc(!1),this.ic(!1)},this.sc=function(){Atomics.add(a(),this.Sb>>2,1)},this.Hc=function(){return 1===Atomics.sub(a(),this.Sb>>2,1)},this.cc=function(t){i()[this.Sb+16>>2>>>0]=t},this.tc=function(){return i()[this.Sb+16>>2>>>0]},this.vc=function(){if(Re(this.bc()))return i()[this.Zb>>2>>>0];var t=this.tc();return 0!==t?t:this.Zb}}function Tt(t){return ye(new St(t).Sb)}function Et(t,e,n,r){return O?$t(3,1,t,e,n,r):Mt(t,e,n,r)}function Mt(t,e,n,r){if("undefined"==typeof SharedArrayBuffer)return x("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var a=[];return O&&0===a.length?Et(t,e,n,r):(t={Ic:n,Ub:t,zc:r,Nc:a},O?(t.Oc="spawnThread",postMessage(t,a),0):lt(t))}function Ct(t,e,n){return O?$t(4,1,t,e,n):0}function xt(t,e){if(O)return $t(5,1,t,e)}function Rt(t,e){if(O)return $t(6,1,t,e)}function jt(t,e,n){if(O)return $t(7,1,t,e,n)}function kt(t,e,n){return O?$t(8,1,t,e,n):0}function Dt(t,e){if(O)return $t(9,1,t,e)}function Pt(t,e,n){if(O)return $t(10,1,t,e,n)}function Ut(t,e,n,r){if(O)return $t(11,1,t,e,n,r)}function Ft(t,e,n,r){if(O)return $t(12,1,t,e,n,r)}function It(t,e,n,r){if(O)return $t(13,1,t,e,n,r)}function Wt(t){if(O)return $t(14,1,t)}function Ht(t,e){if(O)return $t(15,1,t,e)}function Lt(t,e,n){if(O)return $t(16,1,t,e,n)}function zt(t){Atomics.store(a(),t>>2,1),he()&&_e(t),Atomics.compareExchange(a(),t>>2,1,0)}function Yt(t){return i()[t>>>2]+4294967296*a()[t+4>>>2]}function Bt(t,e,n,r,a,i){return O?$t(17,1,t,e,n,r,a,i):-52}function Gt(t,e,n,r,a,i){if(O)return $t(18,1,t,e,n,r,a,i)}function Nt(t){var n=G(t)+1,r=de(n);return r&&B(t,e(),r,n),r}function Vt(t,e,n){function r(t){return(t=t.toTimeString().match(/\\(([A-Za-z ]+)\\)$/))?t[1]:"GMT"}if(O)return $t(19,1,t,e,n);var o=(new Date).getFullYear(),u=new Date(o,0,1),c=new Date(o,6,1);o=u.getTimezoneOffset();var s=c.getTimezoneOffset(),l=Math.max(o,s);a()[t>>2>>>0]=60*l,a()[e>>2>>>0]=Number(o!=s),t=r(u),e=r(c),t=Nt(t),e=Nt(e),s<o?(i()[n>>2>>>0]=t,i()[n+4>>2>>>0]=e):(i()[n>>2>>>0]=e,i()[n+4>>2>>>0]=t)}function $t(t,e){var n=arguments.length-2,r=arguments;return yt((()=>{for(var a=Ce(8*n),i=a>>3,u=0;u<n;u++){var c=r[2+u];o()[i+u>>>0]=c}return we(t,n,a,e)}))}u.executeNotifiedProxyingQueue=zt,wt=_?()=>{var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:O?()=>performance.now()-u.__performance_now_clock_drift:()=>performance.now();var qt,Xt=[],Jt={};function Zt(){if(!qt){var t,e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:m||"./this.program"};for(t in Jt)void 0===Jt[t]?delete e[t]:e[t]=Jt[t];var n=[];for(t in e)n.push(t+"="+e[t]);qt=n}return qt}function Qt(t,n){if(O)return $t(20,1,t,n);var r=0;return Zt().forEach((function(a,o){var u=n+r;for(o=i()[t+4*o>>2>>>0]=u,u=0;u<a.length;++u)e()[o++>>0>>>0]=a.charCodeAt(u);e()[o>>0>>>0]=0,r+=a.length+1})),0}function Kt(t,e){if(O)return $t(21,1,t,e);var n=Zt();i()[t>>2>>>0]=n.length;var r=0;return n.forEach((function(t){r+=t.length+1})),i()[e>>2>>>0]=r,0}function te(t){return O?$t(22,1,t):52}function ee(t,e,n,r){return O?$t(23,1,t,e,n,r):52}function ne(t,e,n,r,a){return O?$t(24,1,t,e,n,r,a):70}var re=[null,[],[]];function ae(t,e){var n=re[t];0===e||10===e?((1===t?C:x)(z(n,0)),n.length=0):n.push(e)}function ie(t,e,n,a){if(O)return $t(25,1,t,e,n,a);for(var o=0,u=0;u<n;u++){var c=i()[e>>2>>>0],s=i()[e+4>>2>>>0];e+=8;for(var l=0;l<s;l++)ae(t,r()[c+l>>>0]);o+=s}return i()[a>>2>>>0]=o,0}var oe=0;function ue(t){return 0==t%4&&(0!=t%100||0==t%400)}var ce=[31,29,31,30,31,30,31,31,30,31,30,31],se=[31,28,31,30,31,30,31,31,30,31,30,31];function le(t,n,r,i){function o(t,e,n){for(t="number"==typeof t?t.toString():t||"";t.length<e;)t=n[0]+t;return t}function u(t,e){return o(t,e,"0")}function c(t,e){function n(t){return 0>t?-1:0<t?1:0}var r;return 0===(r=n(t.getFullYear()-e.getFullYear()))&&0===(r=n(t.getMonth()-e.getMonth()))&&(r=n(t.getDate()-e.getDate())),r}function s(t){switch(t.getDay()){case 0:return new Date(t.getFullYear()-1,11,29);case 1:return t;case 2:return new Date(t.getFullYear(),0,3);case 3:return new Date(t.getFullYear(),0,2);case 4:return new Date(t.getFullYear(),0,1);case 5:return new Date(t.getFullYear()-1,11,31);case 6:return new Date(t.getFullYear()-1,11,30)}}function l(t){var e=t.Wb;for(t=new Date(new Date(t.Xb+1900,0,1).getTime());0<e;){var n=t.getMonth(),r=(ue(t.getFullYear())?ce:se)[n];if(!(e>r-t.getDate())){t.setDate(t.getDate()+e);break}e-=r-t.getDate()+1,t.setDate(1),11>n?t.setMonth(n+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return n=new Date(t.getFullYear()+1,0,4),e=s(new Date(t.getFullYear(),0,4)),n=s(n),0>=c(e,t)?0>=c(n,t)?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var f=a()[i+40>>2>>>0];for(var p in i={Lc:a()[i>>2>>>0],Kc:a()[i+4>>2>>>0],dc:a()[i+8>>2>>>0],jc:a()[i+12>>2>>>0],ec:a()[i+16>>2>>>0],Xb:a()[i+20>>2>>>0],Tb:a()[i+24>>2>>>0],Wb:a()[i+28>>2>>>0],Rc:a()[i+32>>2>>>0],Jc:a()[i+36>>2>>>0],Mc:f?Y(f):""},r=Y(r),f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})r=r.replace(new RegExp(p,"g"),f[p]);var h="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),d="January February March April May June July August September October November December".split(" ");for(p in f={"%a":function(t){return h[t.Tb].substring(0,3)},"%A":function(t){return h[t.Tb]},"%b":function(t){return d[t.ec].substring(0,3)},"%B":function(t){return d[t.ec]},"%C":function(t){return u((t.Xb+1900)/100|0,2)},"%d":function(t){return u(t.jc,2)},"%e":function(t){return o(t.jc,2," ")},"%g":function(t){return l(t).toString().substring(2)},"%G":function(t){return l(t)},"%H":function(t){return u(t.dc,2)},"%I":function(t){return 0==(t=t.dc)?t=12:12<t&&(t-=12),u(t,2)},"%j":function(t){for(var e=0,n=0;n<=t.ec-1;e+=(ue(t.Xb+1900)?ce:se)[n++]);return u(t.jc+e,3)},"%m":function(t){return u(t.ec+1,2)},"%M":function(t){return u(t.Kc,2)},"%n":function(){return"\\n"},"%p":function(t){return 0<=t.dc&&12>t.dc?"AM":"PM"},"%S":function(t){return u(t.Lc,2)},"%t":function(){return"\\t"},"%u":function(t){return t.Tb||7},"%U":function(t){return u(Math.floor((t.Wb+7-t.Tb)/7),2)},"%V":function(t){var e=Math.floor((t.Wb+7-(t.Tb+6)%7)/7);if(2>=(t.Tb+371-t.Wb-2)%7&&e++,e)53==e&&(4==(n=(t.Tb+371-t.Wb)%7)||3==n&&ue(t.Xb)||(e=1));else{e=52;var n=(t.Tb+7-t.Wb-1)%7;(4==n||5==n&&ue(t.Xb%400-1))&&e++}return u(e,2)},"%w":function(t){return t.Tb},"%W":function(t){return u(Math.floor((t.Wb+7-(t.Tb+6)%7)/7),2)},"%y":function(t){return(t.Xb+1900).toString().substring(2)},"%Y":function(t){return t.Xb+1900},"%z":function(t){var e=0<=(t=t.Jc);return t=Math.abs(t)/60,(e?"+":"-")+String("0000"+(t/60*100+t%60)).slice(-4)},"%Z":function(t){return t.Mc},"%%":function(){return"%"}},r=r.replace(/%%/g,"\\0\\0"),f)r.includes(p)&&(r=r.replace(new RegExp(p,"g"),f[p](i)));return p=function(t){var e=Array(G(t)+1);return B(t,e,0,e.length),e}(r=r.replace(/\\0\\0/g,"%")),p.length>n?0:(function(t,n){e().set(t,n>>>0)}(p,t),p.length-1)}ht.fc();var fe=[null,ft,bt,Et,Ct,xt,Rt,jt,kt,Dt,Pt,Ut,Ft,It,Wt,Ht,Lt,Bt,Gt,Vt,Qt,Kt,te,ee,ne,ie],pe={b:function(t){return de(t+24)+24},n:function(t){return(t=new St(t)).uc()||(t.hc(!0),Ot--),t.ic(!1),_t.push(t),t.sc(),t.vc()},ma:function(t){throw x("Unexpected exception thrown, this is not properly supported - aborting"),H=!0,t},x:function(){Se(0);var t=_t.pop();if(t.Hc()&&!t.kc()){var e=t.Dc();e&&gt(e)(t.Zb),Tt(t.Zb)}At=0},e:function(){var t=At;if(!t)return oe=0;var e=new St(t);e.cc(t);var n=e.bc();if(!n)return oe=0,t;for(var r=Array.prototype.slice.call(arguments),a=0;a<r.length;a++){var i=r[a];if(0===i||i===n)break;if(xe(i,n,e.Sb+16))return oe=i,t}return oe=n,t},l:function(){var t=At;if(!t)return oe=0;var e=new St(t);e.cc(t);var n=e.bc();if(!n)return oe=0,t;for(var r=Array.prototype.slice.call(arguments),a=0;a<r.length;a++){var i=r[a];if(0===i||i===n)break;if(xe(i,n,e.Sb+16))return oe=i,t}return oe=n,t},h:function(){var t=At;if(!t)return oe=0;var e=new St(t);e.cc(t);var n=e.bc();if(!n)return oe=0,t;for(var r=Array.prototype.slice.call(arguments),a=0;a<r.length;a++){var i=r[a];if(0===i||i===n)break;if(xe(i,n,e.Sb+16))return oe=i,t}return oe=n,t},t:Tt,M:function(){var t=_t.pop();t||at("no exception to throw");var e=t.Zb;throw t.kc()||(_t.push(t),t.ic(!0),t.hc(!1),Ot++),At=e,e},c:function(t,e,n){throw new St(t).fc(e,n),At=t,Ot++,t},pa:function(){return Ot},Fa:function(t){ge(t,!w,1,!v),ht.pc()},T:function(t){O?postMessage({cmd:"cleanupThread",thread:t}):st(t)},xa:Mt,j:function(t){throw At||(At=t),t},H:Ct,Ma:xt,ua:Rt,wa:jt,oa:kt,Ka:Dt,Ca:Pt,Ja:Ut,V:Ft,va:It,sa:Wt,La:Ht,ta:Lt,Ta:function(){},X:function(){at("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},Ua:function(){at("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},W:function(){return Date.now()},ya:function(){return 2097152},Oa:function(){return!0},za:function(t,e,n,r){if(t==e)setTimeout((()=>zt(r)));else if(O)postMessage({targetThread:t,cmd:"processProxyingQueue",queue:r});else{if(!(t=ht.Vb[t]))return;t.postMessage({cmd:"processProxyingQueue",queue:r})}return 1},Ea:function(){return-1},Pa:function(t,e){t=new Date(1e3*Yt(t)),a()[e>>2>>>0]=t.getUTCSeconds(),a()[e+4>>2>>>0]=t.getUTCMinutes(),a()[e+8>>2>>>0]=t.getUTCHours(),a()[e+12>>2>>>0]=t.getUTCDate(),a()[e+16>>2>>>0]=t.getUTCMonth(),a()[e+20>>2>>>0]=t.getUTCFullYear()-1900,a()[e+24>>2>>>0]=t.getUTCDay(),t=(t.getTime()-Date.UTC(t.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,a()[e+28>>2>>>0]=t},Qa:function(t,e){t=new Date(1e3*Yt(t)),a()[e>>2>>>0]=t.getSeconds(),a()[e+4>>2>>>0]=t.getMinutes(),a()[e+8>>2>>>0]=t.getHours(),a()[e+12>>2>>>0]=t.getDate(),a()[e+16>>2>>>0]=t.getMonth(),a()[e+20>>2>>>0]=t.getFullYear()-1900,a()[e+24>>2>>>0]=t.getDay();var n=new Date(t.getFullYear(),0,1),r=(t.getTime()-n.getTime())/864e5|0;a()[e+28>>2>>>0]=r,a()[e+36>>2>>>0]=-60*t.getTimezoneOffset(),r=new Date(t.getFullYear(),6,1).getTimezoneOffset(),t=0|(r!=(n=n.getTimezoneOffset())&&t.getTimezoneOffset()==Math.min(n,r)),a()[e+32>>2>>>0]=t},Ra:function(t){var e=new Date(a()[t+20>>2>>>0]+1900,a()[t+16>>2>>>0],a()[t+12>>2>>>0],a()[t+8>>2>>>0],a()[t+4>>2>>>0],a()[t>>2>>>0],0),n=a()[t+32>>2>>>0],r=e.getTimezoneOffset(),i=new Date(e.getFullYear(),0,1),o=new Date(e.getFullYear(),6,1).getTimezoneOffset(),u=i.getTimezoneOffset(),c=Math.min(u,o);return 0>n?a()[t+32>>2>>>0]=Number(o!=u&&c==r):0<n!=(c==r)&&(o=Math.max(u,o),e.setTime(e.getTime()+6e4*((0<n?c:o)-r))),a()[t+24>>2>>>0]=e.getDay(),n=(e.getTime()-i.getTime())/864e5|0,a()[t+28>>2>>>0]=n,a()[t>>2>>>0]=e.getSeconds(),a()[t+4>>2>>>0]=e.getMinutes(),a()[t+8>>2>>>0]=e.getHours(),a()[t+12>>2>>>0]=e.getDate(),a()[t+16>>2>>>0]=e.getMonth(),e.getTime()/1e3|0},Aa:Bt,Ba:Gt,Sa:function t(e,n,r){t.Ac||(t.Ac=!0,Vt(e,n,r))},y:function(){at("")},U:function(){if(!_&&!w){var t="Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread";vt||(vt={}),vt[t]||(vt[t]=1,_&&(t="warning: "+t),x(t))}},ra:function(){return 4294901760},B:wt,Ia:function(t,e,n){r().copyWithin(t>>>0,e>>>0,e+n>>>0)},F:function(){return _?n(993).cpus().length:navigator.hardwareConcurrency},Da:function(t,e,n){Xt.length=e,n>>=3;for(var r=0;r<e;r++)Xt[r]=o()[n+r>>>0];return(0>t?ut[-t-1]:fe[t]).apply(null,Xt)},qa:function(t){var e=r().length;if((t>>>=0)<=e||4294901760<t)return!1;for(var n=1;4>=n;n*=2){var a=e*(1+.2/n);a=Math.min(a,t+100663296);var i=Math;a=Math.max(t,a),i=i.min.call(i,4294901760,a+(65536-a%65536)%65536);t:{try{j.grow(i-D.byteLength+65535>>>16),N(j.buffer);var o=1;break t}catch(t){}o=void 0}if(o)return!0}return!1},Na:function(){throw"unwind"},Ga:Qt,Ha:Kt,J:pt,I:te,S:ee,ga:ne,R:ie,d:function(){return oe},na:function t(r,a){t.lc||(t.lc=function(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var t=new Uint8Array(1);return()=>(crypto.getRandomValues(t),t[0])}if(_)try{var e=n(Object(function(){var t=new Error("Cannot find module \'crypto\'");throw t.code="MODULE_NOT_FOUND",t}()));return()=>e.randomBytes(1)[0]}catch(t){}return()=>at("randomDevice")}());for(var i=0;i<a;i++)e()[r+i>>0>>>0]=t.lc();return 0},ia:function(t,e,n){var r=Ee();try{return gt(t)(e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},ja:function(t,e,n){var r=Ee();try{return gt(t)(e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},K:function(t){var e=Ee();try{return gt(t)()}catch(t){if(Me(e),t!==t+0)throw t;Se(1,0)}},f:function(t,e){var n=Ee();try{return gt(t)(e)}catch(t){if(Me(n),t!==t+0)throw t;Se(1,0)}},P:function(t,e,n){var r=Ee();try{return gt(t)(e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},Q:function(t,e,n){var r=Ee();try{return gt(t)(e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},k:function(t,e,n){var r=Ee();try{return gt(t)(e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},p:function(t,e,n,r){var a=Ee();try{return gt(t)(e,n,r)}catch(t){if(Me(a),t!==t+0)throw t;Se(1,0)}},q:function(t,e,n,r,a){var i=Ee();try{return gt(t)(e,n,r,a)}catch(t){if(Me(i),t!==t+0)throw t;Se(1,0)}},N:function(t,e,n,r,a,i){var o=Ee();try{return gt(t)(e,n,r,a,i)}catch(t){if(Me(o),t!==t+0)throw t;Se(1,0)}},s:function(t,e,n,r,a,i){var o=Ee();try{return gt(t)(e,n,r,a,i)}catch(t){if(Me(o),t!==t+0)throw t;Se(1,0)}},w:function(t,e,n,r,a,i,o){var u=Ee();try{return gt(t)(e,n,r,a,i,o)}catch(t){if(Me(u),t!==t+0)throw t;Se(1,0)}},L:function(t,e,n,r,a,i,o,u){var c=Ee();try{return gt(t)(e,n,r,a,i,o,u)}catch(t){if(Me(c),t!==t+0)throw t;Se(1,0)}},E:function(t,e,n,r,a,i,o,u,c,s,l,f){var p=Ee();try{return gt(t)(e,n,r,a,i,o,u,c,s,l,f)}catch(t){if(Me(p),t!==t+0)throw t;Se(1,0)}},aa:function(t,e,n,r,a,i,o,u){var c=Ee();try{return He(t,e,n,r,a,i,o,u)}catch(t){if(Me(c),t!==t+0)throw t;Se(1,0)}},_:function(t,e,n,r,a,i,o){var u=Ee();try{return ke(t,e,n,r,a,i,o)}catch(t){if(Me(u),t!==t+0)throw t;Se(1,0)}},Z:function(t,e,n,r,a){var i=Ee();try{return Le(t,e,n,r,a)}catch(t){if(Me(i),t!==t+0)throw t;Se(1,0)}},ca:function(t,e,n,r){var a=Ee();try{return Ie(t,e,n,r)}catch(t){if(Me(a),t!==t+0)throw t;Se(1,0)}},$:function(t){var e=Ee();try{return je(t)}catch(t){if(Me(e),t!==t+0)throw t;Se(1,0)}},ba:function(t,e){var n=Ee();try{return We(t,e)}catch(t){if(Me(n),t!==t+0)throw t;Se(1,0)}},Y:function(t,e,n){var r=Ee();try{return De(t,e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},g:function(t){var e=Ee();try{gt(t)()}catch(t){if(Me(e),t!==t+0)throw t;Se(1,0)}},r:function(t,e){var n=Ee();try{gt(t)(e)}catch(t){if(Me(n),t!==t+0)throw t;Se(1,0)}},i:function(t,e,n){var r=Ee();try{gt(t)(e,n)}catch(t){if(Me(r),t!==t+0)throw t;Se(1,0)}},ha:function(t,e,n,r){var a=Ee();try{gt(t)(e,n,r)}catch(t){if(Me(a),t!==t+0)throw t;Se(1,0)}},m:function(t,e,n,r){var a=Ee();try{gt(t)(e,n,r)}catch(t){if(Me(a),t!==t+0)throw t;Se(1,0)}},v:function(t,e,n,r,a){var i=Ee();try{gt(t)(e,n,r,a)}catch(t){if(Me(i),t!==t+0)throw t;Se(1,0)}},u:function(t,e,n,r,a,i){var o=Ee();try{gt(t)(e,n,r,a,i)}catch(t){if(Me(o),t!==t+0)throw t;Se(1,0)}},O:function(t,e,n,r,a,i,o){var u=Ee();try{gt(t)(e,n,r,a,i,o)}catch(t){if(Me(u),t!==t+0)throw t;Se(1,0)}},A:function(t,e,n,r,a,i,o,u){var c=Ee();try{gt(t)(e,n,r,a,i,o,u)}catch(t){if(Me(c),t!==t+0)throw t;Se(1,0)}},ka:function(t,e,n,r,a,i,o,u,c){var s=Ee();try{gt(t)(e,n,r,a,i,o,u,c)}catch(t){if(Me(s),t!==t+0)throw t;Se(1,0)}},C:function(t,e,n,r,a,i,o,u,c,s,l){var f=Ee();try{gt(t)(e,n,r,a,i,o,u,c,s,l)}catch(t){if(Me(f),t!==t+0)throw t;Se(1,0)}},D:function(t,e,n,r,a,i,o,u,c,s,l,f,p,h,d,y){var b=Ee();try{gt(t)(e,n,r,a,i,o,u,c,s,l,f,p,h,d,y)}catch(t){if(Me(b),t!==t+0)throw t;Se(1,0)}},fa:function(t,e,n,r,a,i,o,u){var c=Ee();try{Pe(t,e,n,r,a,i,o,u)}catch(t){if(Me(c),t!==t+0)throw t;Se(1,0)}},da:function(t,e,n,r,a,i,o,u,c,s,l,f){var p=Ee();try{Fe(t,e,n,r,a,i,o,u,c,s,l,f)}catch(t){if(Me(p),t!==t+0)throw t;Se(1,0)}},ea:function(t,e,n,r,a,i){var o=Ee();try{Ue(t,e,n,r,a,i)}catch(t){if(Me(o),t!==t+0)throw t;Se(1,0)}},o:function(t){return t},a:j||u.wasmMemory,G:function(t){oe=t},la:le,z:function(t,e,n,r){return le(t,e,n,r)}};!function(){function t(t,e){u.asm=t.exports,ht.qc.push(u.asm.sb),$=u.asm.ub,X.unshift(u.asm.Va),k=e,O||(et--,u.monitorRunDependencies&&u.monitorRunDependencies(et),0==et&&(null!==nt&&(clearInterval(nt),nt=null),rt&&(t=rt,rt=null,t())))}function e(e){t(e.instance,e.module)}function n(t){return function(){if(!M&&(v||w)){if("function"==typeof fetch&&!tt.startsWith("file://"))return fetch(tt,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at \'"+tt+"\'";return t.arrayBuffer()})).catch((function(){return ot()}));if(f)return new Promise((function(t,e){f(tt,(function(e){t(new Uint8Array(e))}),e)}))}return Promise.resolve().then((function(){return ot()}))}().then((function(t){return WebAssembly.instantiate(t,r)})).then((function(t){return t})).then(t,(function(t){x("failed to asynchronously prepare wasm: "+t),at(t)}))}var r={a:pe};if(O||(et++,u.monitorRunDependencies&&u.monitorRunDependencies(et)),u.instantiateWasm)try{return u.instantiateWasm(r,t)}catch(t){return x("Module.instantiateWasm callback failed with error: "+t),!1}(M||"function"!=typeof WebAssembly.instantiateStreaming||it()||tt.startsWith("file://")||_||"function"!=typeof fetch?n(e):fetch(tt,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(e,(function(t){return x("wasm streaming compile failed: "+t),x("falling back to ArrayBuffer instantiation"),n(e)}))}))).catch(s)}(),u.___wasm_call_ctors=function(){return(u.___wasm_call_ctors=u.asm.Va).apply(null,arguments)},u._OrtInit=function(){return(u._OrtInit=u.asm.Wa).apply(null,arguments)},u._OrtCreateSessionOptions=function(){return(u._OrtCreateSessionOptions=u.asm.Xa).apply(null,arguments)},u._OrtAppendExecutionProvider=function(){return(u._OrtAppendExecutionProvider=u.asm.Ya).apply(null,arguments)},u._OrtAddSessionConfigEntry=function(){return(u._OrtAddSessionConfigEntry=u.asm.Za).apply(null,arguments)},u._OrtReleaseSessionOptions=function(){return(u._OrtReleaseSessionOptions=u.asm._a).apply(null,arguments)},u._OrtCreateSession=function(){return(u._OrtCreateSession=u.asm.$a).apply(null,arguments)},u._OrtReleaseSession=function(){return(u._OrtReleaseSession=u.asm.ab).apply(null,arguments)},u._OrtGetInputCount=function(){return(u._OrtGetInputCount=u.asm.bb).apply(null,arguments)},u._OrtGetOutputCount=function(){return(u._OrtGetOutputCount=u.asm.cb).apply(null,arguments)},u._OrtGetInputName=function(){return(u._OrtGetInputName=u.asm.db).apply(null,arguments)},u._OrtGetOutputName=function(){return(u._OrtGetOutputName=u.asm.eb).apply(null,arguments)},u._OrtFree=function(){return(u._OrtFree=u.asm.fb).apply(null,arguments)},u._OrtCreateTensor=function(){return(u._OrtCreateTensor=u.asm.gb).apply(null,arguments)},u._OrtGetTensorData=function(){return(u._OrtGetTensorData=u.asm.hb).apply(null,arguments)},u._OrtReleaseTensor=function(){return(u._OrtReleaseTensor=u.asm.ib).apply(null,arguments)},u._OrtCreateRunOptions=function(){return(u._OrtCreateRunOptions=u.asm.jb).apply(null,arguments)},u._OrtAddRunConfigEntry=function(){return(u._OrtAddRunConfigEntry=u.asm.kb).apply(null,arguments)},u._OrtReleaseRunOptions=function(){return(u._OrtReleaseRunOptions=u.asm.lb).apply(null,arguments)},u._OrtRun=function(){return(u._OrtRun=u.asm.mb).apply(null,arguments)},u._OrtEndProfiling=function(){return(u._OrtEndProfiling=u.asm.nb).apply(null,arguments)};var he=u._pthread_self=function(){return(he=u._pthread_self=u.asm.ob).apply(null,arguments)},de=u._malloc=function(){return(de=u._malloc=u.asm.pb).apply(null,arguments)},ye=u._free=function(){return(ye=u._free=u.asm.qb).apply(null,arguments)},be=u._fflush=function(){return(be=u._fflush=u.asm.rb).apply(null,arguments)};u.__emscripten_tls_init=function(){return(u.__emscripten_tls_init=u.asm.sb).apply(null,arguments)};var me=u.___funcs_on_exit=function(){return(me=u.___funcs_on_exit=u.asm.tb).apply(null,arguments)},ge=u.__emscripten_thread_init=function(){return(ge=u.__emscripten_thread_init=u.asm.vb).apply(null,arguments)};u.__emscripten_thread_crashed=function(){return(u.__emscripten_thread_crashed=u.asm.wb).apply(null,arguments)};var ve,we=u._emscripten_run_in_main_runtime_thread_js=function(){return(we=u._emscripten_run_in_main_runtime_thread_js=u.asm.xb).apply(null,arguments)},_e=u.__emscripten_proxy_execute_task_queue=function(){return(_e=u.__emscripten_proxy_execute_task_queue=u.asm.yb).apply(null,arguments)},Oe=u.__emscripten_thread_free_data=function(){return(Oe=u.__emscripten_thread_free_data=u.asm.zb).apply(null,arguments)},Ae=u.__emscripten_thread_exit=function(){return(Ae=u.__emscripten_thread_exit=u.asm.Ab).apply(null,arguments)},Se=u._setThrew=function(){return(Se=u._setThrew=u.asm.Bb).apply(null,arguments)},Te=u._emscripten_stack_set_limits=function(){return(Te=u._emscripten_stack_set_limits=u.asm.Cb).apply(null,arguments)},Ee=u.stackSave=function(){return(Ee=u.stackSave=u.asm.Db).apply(null,arguments)},Me=u.stackRestore=function(){return(Me=u.stackRestore=u.asm.Eb).apply(null,arguments)},Ce=u.stackAlloc=function(){return(Ce=u.stackAlloc=u.asm.Fb).apply(null,arguments)},xe=u.___cxa_can_catch=function(){return(xe=u.___cxa_can_catch=u.asm.Gb).apply(null,arguments)},Re=u.___cxa_is_pointer_type=function(){return(Re=u.___cxa_is_pointer_type=u.asm.Hb).apply(null,arguments)},je=u.dynCall_j=function(){return(je=u.dynCall_j=u.asm.Ib).apply(null,arguments)},ke=u.dynCall_iiiiij=function(){return(ke=u.dynCall_iiiiij=u.asm.Jb).apply(null,arguments)},De=u.dynCall_jii=function(){return(De=u.dynCall_jii=u.asm.Kb).apply(null,arguments)},Pe=u.dynCall_viiiiij=function(){return(Pe=u.dynCall_viiiiij=u.asm.Lb).apply(null,arguments)},Ue=u.dynCall_vjji=function(){return(Ue=u.dynCall_vjji=u.asm.Mb).apply(null,arguments)},Fe=u.dynCall_viiijjjii=function(){return(Fe=u.dynCall_viiijjjii=u.asm.Nb).apply(null,arguments)},Ie=u.dynCall_iij=function(){return(Ie=u.dynCall_iij=u.asm.Ob).apply(null,arguments)},We=u.dynCall_ji=function(){return(We=u.dynCall_ji=u.asm.Pb).apply(null,arguments)},He=u.dynCall_iiiiiij=function(){return(He=u.dynCall_iiiiiij=u.asm.Qb).apply(null,arguments)},Le=u.dynCall_iiij=function(){return(Le=u.dynCall_iiij=u.asm.Rb).apply(null,arguments)};function ze(){function t(){if(!ve&&(ve=!0,u.calledRun=!0,!H)&&(O||dt(X),c(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),!O)){if(u.postRun)for("function"==typeof u.postRun&&(u.postRun=[u.postRun]);u.postRun.length;){var t=u.postRun.shift();Z.unshift(t)}dt(Z)}}if(!(0<et))if(O)c(u),O||dt(X),postMessage({cmd:"loaded"});else{if(u.preRun)for("function"==typeof u.preRun&&(u.preRun=[u.preRun]);u.preRun.length;)K();dt(q),0<et||(u.setStatus?(u.setStatus("Running..."),setTimeout((function(){setTimeout((function(){u.setStatus("")}),1),t()}),1)):t())}}if(u.UTF8ToString=Y,u.stringToUTF8=function(t,e,n){return B(t,r(),e,n)},u.lengthBytesUTF8=G,u.keepRuntimeAlive=Q,u.wasmMemory=j,u.stackSave=Ee,u.stackRestore=Me,u.stackAlloc=Ce,u.ExitStatus=ct,u.PThread=ht,rt=function t(){ve||ze(),ve||(rt=t)},u.preInit)for("function"==typeof u.preInit&&(u.preInit=[u.preInit]);0<u.preInit.length;)u.preInit.pop()();return ze(),t.ready});t.exports=r},932:(t,e,n)=>{var _scriptDir,r=(_scriptDir=(_scriptDir="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(t){var e,r,a;t=t||{},e||(e=void 0!==t?t:{}),e.ready=new Promise((function(t,e){r=t,a=e}));var i,o,u,c,s,l,f=Object.assign({},e),p="./this.program",h=(t,e)=>{throw e},d="object"==typeof window,y="function"==typeof importScripts,b="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="";b?(m=y?n(908).dirname(m)+"/":"//",l=()=>{s||(c=n(384),s=n(908))},i=function(t,e){return l(),t=s.normalize(t),c.readFileSync(t,e?void 0:"utf8")},u=t=>((t=i(t,!0)).buffer||(t=new Uint8Array(t)),t),o=(t,e,n)=>{l(),t=s.normalize(t),c.readFile(t,(function(t,r){t?n(t):e(r.buffer)}))},1<process.argv.length&&(p=process.argv[1].replace(/\\\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof J))throw t})),process.on("unhandledRejection",(function(t){throw t})),h=(t,e)=>{if(_||0<L)throw process.exitCode=t,e;e instanceof J||w("exiting due to exception: "+e),process.exit(t)},e.inspect=function(){return"[Emscripten Module object]"}):(d||y)&&(y?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),_scriptDir&&(m=_scriptDir),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},y&&(u=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),o=(t,e,n)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?e(r.response):n()},r.onerror=n,r.send(null)});var g,v=e.print||console.log.bind(console),w=e.printErr||console.warn.bind(console);Object.assign(e,f),f=null,e.thisProgram&&(p=e.thisProgram),e.quit&&(h=e.quit),e.wasmBinary&&(g=e.wasmBinary);var _=e.noExitRuntime||!1;"object"!=typeof WebAssembly&&V("no native wasm support detected");var O,A,S,T,E,M,C=!1,x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function R(t,e,n){var r=(e>>>=0)+n;for(n=e;t[n]&&!(n>=r);)++n;if(16<n-e&&t.buffer&&x)return x.decode(t.subarray(e,n));for(r="";e<n;){var a=t[e++];if(128&a){var i=63&t[e++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|i);else{var o=63&t[e++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&t[e++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else r+=String.fromCharCode(a)}return r}function j(t,e){return(t>>>=0)?R(T,t,e):""}function k(t,e,n,r){if(!(0<r))return 0;var a=n>>>=0;r=n+r-1;for(var i=0;i<t.length;++i){var o=t.charCodeAt(i);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++i)),127>=o){if(n>=r)break;e[n++>>>0]=o}else{if(2047>=o){if(n+1>=r)break;e[n++>>>0]=192|o>>6}else{if(65535>=o){if(n+2>=r)break;e[n++>>>0]=224|o>>12}else{if(n+3>=r)break;e[n++>>>0]=240|o>>18,e[n++>>>0]=128|o>>12&63}e[n++>>>0]=128|o>>6&63}e[n++>>>0]=128|63&o}}return e[n>>>0]=0,n-a}function D(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);127>=r?e++:2047>=r?e+=2:55296<=r&&57343>=r?(e+=4,++n):e+=3}return e}function P(){var t=O.buffer;A=t,e.HEAP8=S=new Int8Array(t),e.HEAP16=new Int16Array(t),e.HEAP32=E=new Int32Array(t),e.HEAPU8=T=new Uint8Array(t),e.HEAPU16=new Uint16Array(t),e.HEAPU32=M=new Uint32Array(t),e.HEAPF32=new Float32Array(t),e.HEAPF64=new Float64Array(t)}var U,F=[],I=[],W=[],H=[],L=0;function z(){var t=e.preRun.shift();F.unshift(t)}var Y,B=0,G=null,N=null;function V(t){throw e.onAbort&&e.onAbort(t),w(t="Aborted("+t+")"),C=!0,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),a(t),t}function $(){return Y.startsWith("data:application/octet-stream;base64,")}if(Y="ort-wasm.wasm",!$()){var q=Y;Y=e.locateFile?e.locateFile(q,m):m+q}function X(){var t=Y;try{if(t==Y&&g)return new Uint8Array(g);if(u)return u(t);throw"both async and sync fetching of the wasm failed"}catch(t){V(t)}}function J(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Z(t){for(;0<t.length;)t.shift()(e)}var Q=[],K=0,tt=0;function et(t){this.Db=t,this.zb=t-24,this.Ub=function(t){M[this.zb+4>>2>>>0]=t},this.Eb=function(){return M[this.zb+4>>2>>>0]},this.Sb=function(t){M[this.zb+8>>2>>>0]=t},this.Wb=function(){return M[this.zb+8>>2>>>0]},this.Tb=function(){E[this.zb>>2>>>0]=0},this.Ib=function(t){S[this.zb+12>>0>>>0]=t?1:0},this.Pb=function(){return 0!=S[this.zb+12>>0>>>0]},this.Jb=function(t){S[this.zb+13>>0>>>0]=t?1:0},this.Lb=function(){return 0!=S[this.zb+13>>0>>>0]},this.Rb=function(t,e){this.Fb(0),this.Ub(t),this.Sb(e),this.Tb(),this.Ib(!1),this.Jb(!1)},this.Nb=function(){E[this.zb>>2>>>0]+=1},this.Xb=function(){var t=E[this.zb>>2>>>0];return E[this.zb>>2>>>0]=t-1,1===t},this.Fb=function(t){M[this.zb+16>>2>>>0]=t},this.Ob=function(){return M[this.zb+16>>2>>>0]},this.Qb=function(){if(Mt(this.Eb()))return M[this.Db>>2>>>0];var t=this.Ob();return 0!==t?t:this.Db}}function nt(t){return vt(new et(t).zb)}var rt=[];function at(t){var e=rt[t];return e||(t>=rt.length&&(rt.length=t+1),rt[t]=e=U.get(t)),e}function it(t){var e=D(t)+1,n=gt(e);return n&&k(t,S,n,e),n}var ot={};function ut(){if(!ct){var t,e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:p||"./this.program"};for(t in ot)void 0===ot[t]?delete e[t]:e[t]=ot[t];var n=[];for(t in e)n.push(t+"="+e[t]);ct=n}return ct}var ct,st=[null,[],[]];function lt(t,e){var n=st[t];0===e||10===e?((1===t?v:w)(R(n,0)),n.length=0):n.push(e)}var ft=0;function pt(t){return 0==t%4&&(0!=t%100||0==t%400)}var ht=[31,29,31,30,31,30,31,31,30,31,30,31],dt=[31,28,31,30,31,30,31,31,30,31,30,31];function yt(t,e,n,r){function a(t,e,n){for(t="number"==typeof t?t.toString():t||"";t.length<e;)t=n[0]+t;return t}function i(t,e){return a(t,e,"0")}function o(t,e){function n(t){return 0>t?-1:0<t?1:0}var r;return 0===(r=n(t.getFullYear()-e.getFullYear()))&&0===(r=n(t.getMonth()-e.getMonth()))&&(r=n(t.getDate()-e.getDate())),r}function u(t){switch(t.getDay()){case 0:return new Date(t.getFullYear()-1,11,29);case 1:return t;case 2:return new Date(t.getFullYear(),0,3);case 3:return new Date(t.getFullYear(),0,2);case 4:return new Date(t.getFullYear(),0,1);case 5:return new Date(t.getFullYear()-1,11,31);case 6:return new Date(t.getFullYear()-1,11,30)}}function c(t){var e=t.Bb;for(t=new Date(new Date(t.Cb+1900,0,1).getTime());0<e;){var n=t.getMonth(),r=(pt(t.getFullYear())?ht:dt)[n];if(!(e>r-t.getDate())){t.setDate(t.getDate()+e);break}e-=r-t.getDate()+1,t.setDate(1),11>n?t.setMonth(n+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return n=new Date(t.getFullYear()+1,0,4),e=u(new Date(t.getFullYear(),0,4)),n=u(n),0>=o(e,t)?0>=o(n,t)?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}var s=E[r+40>>2>>>0];for(var l in r={$b:E[r>>2>>>0],Zb:E[r+4>>2>>>0],Gb:E[r+8>>2>>>0],Kb:E[r+12>>2>>>0],Hb:E[r+16>>2>>>0],Cb:E[r+20>>2>>>0],Ab:E[r+24>>2>>>0],Bb:E[r+28>>2>>>0],bc:E[r+32>>2>>>0],Yb:E[r+36>>2>>>0],ac:s?j(s):""},n=j(n),s={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})n=n.replace(new RegExp(l,"g"),s[l]);var f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),p="January February March April May June July August September October November December".split(" ");for(l in s={"%a":function(t){return f[t.Ab].substring(0,3)},"%A":function(t){return f[t.Ab]},"%b":function(t){return p[t.Hb].substring(0,3)},"%B":function(t){return p[t.Hb]},"%C":function(t){return i((t.Cb+1900)/100|0,2)},"%d":function(t){return i(t.Kb,2)},"%e":function(t){return a(t.Kb,2," ")},"%g":function(t){return c(t).toString().substring(2)},"%G":function(t){return c(t)},"%H":function(t){return i(t.Gb,2)},"%I":function(t){return 0==(t=t.Gb)?t=12:12<t&&(t-=12),i(t,2)},"%j":function(t){for(var e=0,n=0;n<=t.Hb-1;e+=(pt(t.Cb+1900)?ht:dt)[n++]);return i(t.Kb+e,3)},"%m":function(t){return i(t.Hb+1,2)},"%M":function(t){return i(t.Zb,2)},"%n":function(){return"\\n"},"%p":function(t){return 0<=t.Gb&&12>t.Gb?"AM":"PM"},"%S":function(t){return i(t.$b,2)},"%t":function(){return"\\t"},"%u":function(t){return t.Ab||7},"%U":function(t){return i(Math.floor((t.Bb+7-t.Ab)/7),2)},"%V":function(t){var e=Math.floor((t.Bb+7-(t.Ab+6)%7)/7);if(2>=(t.Ab+371-t.Bb-2)%7&&e++,e)53==e&&(4==(n=(t.Ab+371-t.Bb)%7)||3==n&&pt(t.Cb)||(e=1));else{e=52;var n=(t.Ab+7-t.Bb-1)%7;(4==n||5==n&&pt(t.Cb%400-1))&&e++}return i(e,2)},"%w":function(t){return t.Ab},"%W":function(t){return i(Math.floor((t.Bb+7-(t.Ab+6)%7)/7),2)},"%y":function(t){return(t.Cb+1900).toString().substring(2)},"%Y":function(t){return t.Cb+1900},"%z":function(t){var e=0<=(t=t.Yb);return t=Math.abs(t)/60,(e?"+":"-")+String("0000"+(t/60*100+t%60)).slice(-4)},"%Z":function(t){return t.ac},"%%":function(){return"%"}},n=n.replace(/%%/g,"\\0\\0"),s)n.includes(l)&&(n=n.replace(new RegExp(l,"g"),s[l](r)));return l=function(t){var e=Array(D(t)+1);return k(t,e,0,e.length),e}(n=n.replace(/\\0\\0/g,"%")),l.length>e?0:(S.set(l,t>>>0),l.length-1)}var bt={a:function(t){return gt(t+24)+24},m:function(t){return(t=new et(t)).Pb()||(t.Ib(!0),K--),t.Jb(!1),Q.push(t),t.Nb(),t.Qb()},ia:function(t){throw w("Unexpected exception thrown, this is not properly supported - aborting"),C=!0,t},w:function(){Ot(0);var t=Q.pop();if(t.Xb()&&!t.Lb()){var e=t.Wb();e&&at(e)(t.Db),nt(t.Db)}tt=0},d:function(){var t=tt;if(!t)return ft=0;var e=new et(t);e.Fb(t);var n=e.Eb();if(!n)return ft=0,t;for(var r=Array.prototype.slice.call(arguments),a=0;a<r.length;a++){var i=r[a];if(0===i||i===n)break;if(Et(i,n,e.zb+16))return ft=i,t}return ft=n,t},k:function(){var t=tt;if(!t)return ft=0;var e=new et(t);e.Fb(t);var n=e.Eb();if(!n)return ft=0,t;for(var r=Array.prototype.slice.call(arguments),a=0;a<r.length;a++){var i=r[a];if(0===i||i===n)break;if(Et(i,n,e.zb+16))return ft=i,t}return ft=n,t},g:function(){var t=tt;if(!t)return ft=0;var e=new et(t);e.Fb(t);var n=e.Eb();if(!n)return ft=0,t;for(var r=Array.prototype.slice.call(arguments),a=0;a<r.length;a++){var i=r[a];if(0===i||i===n)break;if(Et(i,n,e.zb+16))return ft=i,t}return ft=n,t},s:nt,L:function(){var t=Q.pop();t||V("no exception to throw");var e=t.Db;throw t.Lb()||(Q.push(t),t.Jb(!0),t.Ib(!1),K++),tt=e,e},b:function(t,e,n){throw new et(t).Rb(e,n),tt=t,K++,t},la:function(){return K},i:function(t){throw tt||(tt=t),t},H:function(){return 0},Ba:function(){},pa:function(){},ra:function(){},ka:function(){return 0},za:function(){},ua:function(){},ya:function(){},R:function(){},qa:function(){},na:function(){},Aa:function(){},oa:function(){},Ha:function(){},Ja:function(){V("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},Ia:function(){V("To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking")},S:function(){return Date.now()},Ca:function(){return!0},Da:function(t,e){t=new Date(1e3*(M[t>>>2]+4294967296*E[t+4>>>2])),E[e>>2>>>0]=t.getUTCSeconds(),E[e+4>>2>>>0]=t.getUTCMinutes(),E[e+8>>2>>>0]=t.getUTCHours(),E[e+12>>2>>>0]=t.getUTCDate(),E[e+16>>2>>>0]=t.getUTCMonth(),E[e+20>>2>>>0]=t.getUTCFullYear()-1900,E[e+24>>2>>>0]=t.getUTCDay(),E[e+28>>2>>>0]=(t.getTime()-Date.UTC(t.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},Ea:function(t,e){t=new Date(1e3*(M[t>>>2]+4294967296*E[t+4>>>2])),E[e>>2>>>0]=t.getSeconds(),E[e+4>>2>>>0]=t.getMinutes(),E[e+8>>2>>>0]=t.getHours(),E[e+12>>2>>>0]=t.getDate(),E[e+16>>2>>>0]=t.getMonth(),E[e+20>>2>>>0]=t.getFullYear()-1900,E[e+24>>2>>>0]=t.getDay();var n=new Date(t.getFullYear(),0,1);E[e+28>>2>>>0]=(t.getTime()-n.getTime())/864e5|0,E[e+36>>2>>>0]=-60*t.getTimezoneOffset();var r=new Date(t.getFullYear(),6,1).getTimezoneOffset();n=n.getTimezoneOffset(),E[e+32>>2>>>0]=0|(r!=n&&t.getTimezoneOffset()==Math.min(n,r))},Fa:function(t){var e=new Date(E[t+20>>2>>>0]+1900,E[t+16>>2>>>0],E[t+12>>2>>>0],E[t+8>>2>>>0],E[t+4>>2>>>0],E[t>>2>>>0],0),n=E[t+32>>2>>>0],r=e.getTimezoneOffset(),a=new Date(e.getFullYear(),0,1),i=new Date(e.getFullYear(),6,1).getTimezoneOffset(),o=a.getTimezoneOffset(),u=Math.min(o,i);return 0>n?E[t+32>>2>>>0]=Number(i!=o&&u==r):0<n!=(u==r)&&(i=Math.max(o,i),e.setTime(e.getTime()+6e4*((0<n?u:i)-r))),E[t+24>>2>>>0]=e.getDay(),E[t+28>>2>>>0]=(e.getTime()-a.getTime())/864e5|0,E[t>>2>>>0]=e.getSeconds(),E[t+4>>2>>>0]=e.getMinutes(),E[t+8>>2>>>0]=e.getHours(),E[t+12>>2>>>0]=e.getDate(),E[t+16>>2>>>0]=e.getMonth(),e.getTime()/1e3|0},sa:function(){return-52},ta:function(){},Ga:function t(e,n,r){t.Vb||(t.Vb=!0,function(t,e,n){function r(t){return(t=t.toTimeString().match(/\\(([A-Za-z ]+)\\)$/))?t[1]:"GMT"}var a=(new Date).getFullYear(),i=new Date(a,0,1),o=new Date(a,6,1);a=i.getTimezoneOffset();var u=o.getTimezoneOffset();E[t>>2>>>0]=60*Math.max(a,u),E[e>>2>>>0]=Number(a!=u),t=r(i),e=r(o),t=it(t),e=it(e),u<a?(M[n>>2>>>0]=t,M[n+4>>2>>>0]=e):(M[n>>2>>>0]=e,M[n+4>>2>>>0]=t)}(e,n,r))},B:function(){V("")},ma:function(){return 4294901760},I:b?()=>{var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:()=>performance.now(),xa:function(t,e,n){T.copyWithin(t>>>0,e>>>0,e+n>>>0)},G:function(t){var e=T.length;if(4294901760<(t>>>=0))return!1;for(var n=1;4>=n;n*=2){var r=e*(1+.2/n);r=Math.min(r,t+100663296);var a=Math;r=Math.max(t,r),a=a.min.call(a,4294901760,r+(65536-r%65536)%65536);t:{try{O.grow(a-A.byteLength+65535>>>16),P();var i=1;break t}catch(t){}i=void 0}if(i)return!0}return!1},va:function(t,e){var n=0;return ut().forEach((function(r,a){var i=e+n;for(a=M[t+4*a>>2>>>0]=i,i=0;i<r.length;++i)S[a++>>0>>>0]=r.charCodeAt(i);S[a>>0>>>0]=0,n+=r.length+1})),0},wa:function(t,e){var n=ut();M[t>>2>>>0]=n.length;var r=0;return n.forEach((function(t){r+=t.length+1})),M[e>>2>>>0]=r,0},ba:function(t){_||0<L||(_t(),Z(W),wt(0),st[1].length&&lt(1,10),st[2].length&&lt(2,10)),_||0<L||(e.onExit&&e.onExit(t),C=!0),h(t,new J(t))},E:function(){return 52},Q:function(){return 52},ca:function(){return 70},P:function(t,e,n,r){for(var a=0,i=0;i<n;i++){var o=M[e>>2>>>0],u=M[e+4>>2>>>0];e+=8;for(var c=0;c<u;c++)lt(t,T[o+c>>>0]);a+=u}return M[r>>2>>>0]=a,0},c:function(){return ft},ja:function t(e,r){t.Mb||(t.Mb=function(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var t=new Uint8Array(1);return()=>(crypto.getRandomValues(t),t[0])}if(b)try{var e=n(Object(function(){var t=new Error("Cannot find module \'crypto\'");throw t.code="MODULE_NOT_FOUND",t}()));return()=>e.randomBytes(1)[0]}catch(t){}return()=>V("randomDevice")}());for(var a=0;a<r;a++)S[e+a>>0>>>0]=t.Mb();return 0},ea:function(t,e,n){var r=At();try{return at(t)(e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},fa:function(t,e,n){var r=At();try{return at(t)(e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},J:function(t){var e=At();try{return at(t)()}catch(t){if(St(e),t!==t+0)throw t;Ot(1,0)}},e:function(t,e){var n=At();try{return at(t)(e)}catch(t){if(St(n),t!==t+0)throw t;Ot(1,0)}},N:function(t,e,n){var r=At();try{return at(t)(e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},O:function(t,e,n){var r=At();try{return at(t)(e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},j:function(t,e,n){var r=At();try{return at(t)(e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},o:function(t,e,n,r){var a=At();try{return at(t)(e,n,r)}catch(t){if(St(a),t!==t+0)throw t;Ot(1,0)}},p:function(t,e,n,r,a){var i=At();try{return at(t)(e,n,r,a)}catch(t){if(St(i),t!==t+0)throw t;Ot(1,0)}},M:function(t,e,n,r,a,i){var o=At();try{return at(t)(e,n,r,a,i)}catch(t){if(St(o),t!==t+0)throw t;Ot(1,0)}},r:function(t,e,n,r,a,i){var o=At();try{return at(t)(e,n,r,a,i)}catch(t){if(St(o),t!==t+0)throw t;Ot(1,0)}},v:function(t,e,n,r,a,i,o){var u=At();try{return at(t)(e,n,r,a,i,o)}catch(t){if(St(u),t!==t+0)throw t;Ot(1,0)}},K:function(t,e,n,r,a,i,o,u){var c=At();try{return at(t)(e,n,r,a,i,o,u)}catch(t){if(St(c),t!==t+0)throw t;Ot(1,0)}},D:function(t,e,n,r,a,i,o,u,c,s,l,f){var p=At();try{return at(t)(e,n,r,a,i,o,u,c,s,l,f)}catch(t){if(St(p),t!==t+0)throw t;Ot(1,0)}},X:function(t,e,n,r,a,i,o,u){var c=At();try{return Ft(t,e,n,r,a,i,o,u)}catch(t){if(St(c),t!==t+0)throw t;Ot(1,0)}},V:function(t,e,n,r,a,i,o){var u=At();try{return xt(t,e,n,r,a,i,o)}catch(t){if(St(u),t!==t+0)throw t;Ot(1,0)}},U:function(t,e,n,r,a){var i=At();try{return It(t,e,n,r,a)}catch(t){if(St(i),t!==t+0)throw t;Ot(1,0)}},Z:function(t,e,n,r){var a=At();try{return Pt(t,e,n,r)}catch(t){if(St(a),t!==t+0)throw t;Ot(1,0)}},W:function(t){var e=At();try{return Ct(t)}catch(t){if(St(e),t!==t+0)throw t;Ot(1,0)}},Y:function(t,e){var n=At();try{return Ut(t,e)}catch(t){if(St(n),t!==t+0)throw t;Ot(1,0)}},T:function(t,e,n){var r=At();try{return Rt(t,e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},f:function(t){var e=At();try{at(t)()}catch(t){if(St(e),t!==t+0)throw t;Ot(1,0)}},q:function(t,e){var n=At();try{at(t)(e)}catch(t){if(St(n),t!==t+0)throw t;Ot(1,0)}},h:function(t,e,n){var r=At();try{at(t)(e,n)}catch(t){if(St(r),t!==t+0)throw t;Ot(1,0)}},da:function(t,e,n,r){var a=At();try{at(t)(e,n,r)}catch(t){if(St(a),t!==t+0)throw t;Ot(1,0)}},l:function(t,e,n,r){var a=At();try{at(t)(e,n,r)}catch(t){if(St(a),t!==t+0)throw t;Ot(1,0)}},t:function(t,e,n,r,a){var i=At();try{at(t)(e,n,r,a)}catch(t){if(St(i),t!==t+0)throw t;Ot(1,0)}},u:function(t,e,n,r,a,i){var o=At();try{at(t)(e,n,r,a,i)}catch(t){if(St(o),t!==t+0)throw t;Ot(1,0)}},x:function(t,e,n,r,a,i,o){var u=At();try{at(t)(e,n,r,a,i,o)}catch(t){if(St(u),t!==t+0)throw t;Ot(1,0)}},z:function(t,e,n,r,a,i,o,u){var c=At();try{at(t)(e,n,r,a,i,o,u)}catch(t){if(St(c),t!==t+0)throw t;Ot(1,0)}},ga:function(t,e,n,r,a,i,o,u,c){var s=At();try{at(t)(e,n,r,a,i,o,u,c)}catch(t){if(St(s),t!==t+0)throw t;Ot(1,0)}},A:function(t,e,n,r,a,i,o,u,c,s,l){var f=At();try{at(t)(e,n,r,a,i,o,u,c,s,l)}catch(t){if(St(f),t!==t+0)throw t;Ot(1,0)}},C:function(t,e,n,r,a,i,o,u,c,s,l,f,p,h,d,y){var b=At();try{at(t)(e,n,r,a,i,o,u,c,s,l,f,p,h,d,y)}catch(t){if(St(b),t!==t+0)throw t;Ot(1,0)}},aa:function(t,e,n,r,a,i,o,u){var c=At();try{jt(t,e,n,r,a,i,o,u)}catch(t){if(St(c),t!==t+0)throw t;Ot(1,0)}},_:function(t,e,n,r,a,i,o,u,c,s,l,f){var p=At();try{Dt(t,e,n,r,a,i,o,u,c,s,l,f)}catch(t){if(St(p),t!==t+0)throw t;Ot(1,0)}},$:function(t,e,n,r,a,i){var o=At();try{kt(t,e,n,r,a,i)}catch(t){if(St(o),t!==t+0)throw t;Ot(1,0)}},n:function(t){return t},F:function(t){ft=t},ha:yt,y:function(t,e,n,r){return yt(t,e,n,r)}};!function(){function t(t){e.asm=t.exports,O=e.asm.Ka,P(),U=e.asm.ib,I.unshift(e.asm.La),B--,e.monitorRunDependencies&&e.monitorRunDependencies(B),0==B&&(null!==G&&(clearInterval(G),G=null),N&&(t=N,N=null,t()))}function n(e){t(e.instance)}function r(t){return function(){if(!g&&(d||y)){if("function"==typeof fetch&&!Y.startsWith("file://"))return fetch(Y,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at \'"+Y+"\'";return t.arrayBuffer()})).catch((function(){return X()}));if(o)return new Promise((function(t,e){o(Y,(function(e){t(new Uint8Array(e))}),e)}))}return Promise.resolve().then((function(){return X()}))}().then((function(t){return WebAssembly.instantiate(t,i)})).then((function(t){return t})).then(t,(function(t){w("failed to asynchronously prepare wasm: "+t),V(t)}))}var i={a:bt};if(B++,e.monitorRunDependencies&&e.monitorRunDependencies(B),e.instantiateWasm)try{return e.instantiateWasm(i,t)}catch(t){return w("Module.instantiateWasm callback failed with error: "+t),!1}(g||"function"!=typeof WebAssembly.instantiateStreaming||$()||Y.startsWith("file://")||b||"function"!=typeof fetch?r(n):fetch(Y,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,i).then(n,(function(t){return w("wasm streaming compile failed: "+t),w("falling back to ArrayBuffer instantiation"),r(n)}))}))).catch(a)}(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.La).apply(null,arguments)},e._OrtInit=function(){return(e._OrtInit=e.asm.Ma).apply(null,arguments)},e._OrtCreateSessionOptions=function(){return(e._OrtCreateSessionOptions=e.asm.Na).apply(null,arguments)},e._OrtAppendExecutionProvider=function(){return(e._OrtAppendExecutionProvider=e.asm.Oa).apply(null,arguments)},e._OrtAddSessionConfigEntry=function(){return(e._OrtAddSessionConfigEntry=e.asm.Pa).apply(null,arguments)},e._OrtReleaseSessionOptions=function(){return(e._OrtReleaseSessionOptions=e.asm.Qa).apply(null,arguments)},e._OrtCreateSession=function(){return(e._OrtCreateSession=e.asm.Ra).apply(null,arguments)},e._OrtReleaseSession=function(){return(e._OrtReleaseSession=e.asm.Sa).apply(null,arguments)},e._OrtGetInputCount=function(){return(e._OrtGetInputCount=e.asm.Ta).apply(null,arguments)},e._OrtGetOutputCount=function(){return(e._OrtGetOutputCount=e.asm.Ua).apply(null,arguments)},e._OrtGetInputName=function(){return(e._OrtGetInputName=e.asm.Va).apply(null,arguments)},e._OrtGetOutputName=function(){return(e._OrtGetOutputName=e.asm.Wa).apply(null,arguments)},e._OrtFree=function(){return(e._OrtFree=e.asm.Xa).apply(null,arguments)},e._OrtCreateTensor=function(){return(e._OrtCreateTensor=e.asm.Ya).apply(null,arguments)},e._OrtGetTensorData=function(){return(e._OrtGetTensorData=e.asm.Za).apply(null,arguments)},e._OrtReleaseTensor=function(){return(e._OrtReleaseTensor=e.asm._a).apply(null,arguments)},e._OrtCreateRunOptions=function(){return(e._OrtCreateRunOptions=e.asm.$a).apply(null,arguments)},e._OrtAddRunConfigEntry=function(){return(e._OrtAddRunConfigEntry=e.asm.ab).apply(null,arguments)},e._OrtReleaseRunOptions=function(){return(e._OrtReleaseRunOptions=e.asm.bb).apply(null,arguments)},e._OrtRun=function(){return(e._OrtRun=e.asm.cb).apply(null,arguments)},e._OrtEndProfiling=function(){return(e._OrtEndProfiling=e.asm.db).apply(null,arguments)};var mt,gt=e._malloc=function(){return(gt=e._malloc=e.asm.eb).apply(null,arguments)},vt=e._free=function(){return(vt=e._free=e.asm.fb).apply(null,arguments)},wt=e._fflush=function(){return(wt=e._fflush=e.asm.gb).apply(null,arguments)},_t=e.___funcs_on_exit=function(){return(_t=e.___funcs_on_exit=e.asm.hb).apply(null,arguments)},Ot=e._setThrew=function(){return(Ot=e._setThrew=e.asm.jb).apply(null,arguments)},At=e.stackSave=function(){return(At=e.stackSave=e.asm.kb).apply(null,arguments)},St=e.stackRestore=function(){return(St=e.stackRestore=e.asm.lb).apply(null,arguments)},Tt=e.stackAlloc=function(){return(Tt=e.stackAlloc=e.asm.mb).apply(null,arguments)},Et=e.___cxa_can_catch=function(){return(Et=e.___cxa_can_catch=e.asm.nb).apply(null,arguments)},Mt=e.___cxa_is_pointer_type=function(){return(Mt=e.___cxa_is_pointer_type=e.asm.ob).apply(null,arguments)},Ct=e.dynCall_j=function(){return(Ct=e.dynCall_j=e.asm.pb).apply(null,arguments)},xt=e.dynCall_iiiiij=function(){return(xt=e.dynCall_iiiiij=e.asm.qb).apply(null,arguments)},Rt=e.dynCall_jii=function(){return(Rt=e.dynCall_jii=e.asm.rb).apply(null,arguments)},jt=e.dynCall_viiiiij=function(){return(jt=e.dynCall_viiiiij=e.asm.sb).apply(null,arguments)},kt=e.dynCall_vjji=function(){return(kt=e.dynCall_vjji=e.asm.tb).apply(null,arguments)},Dt=e.dynCall_viiijjjii=function(){return(Dt=e.dynCall_viiijjjii=e.asm.ub).apply(null,arguments)},Pt=e.dynCall_iij=function(){return(Pt=e.dynCall_iij=e.asm.vb).apply(null,arguments)},Ut=e.dynCall_ji=function(){return(Ut=e.dynCall_ji=e.asm.wb).apply(null,arguments)},Ft=e.dynCall_iiiiiij=function(){return(Ft=e.dynCall_iiiiiij=e.asm.xb).apply(null,arguments)},It=e.dynCall_iiij=function(){return(It=e.dynCall_iiij=e.asm.yb).apply(null,arguments)};function Wt(){function t(){if(!mt&&(mt=!0,e.calledRun=!0,!C)){if(Z(I),r(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var t=e.postRun.shift();H.unshift(t)}Z(H)}}if(!(0<B)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)z();Z(F),0<B||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),t()}),1)):t())}}if(e.UTF8ToString=j,e.stringToUTF8=function(t,e,n){return k(t,T,e,n)},e.lengthBytesUTF8=D,e.stackSave=At,e.stackRestore=St,e.stackAlloc=Tt,N=function t(){mt||Wt(),mt||(N=t)},e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return Wt(),t.ready});t.exports=r},967:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.iterateExtraOptions=void 0,e.iterateExtraOptions=(t,n,r,a)=>{if("object"==typeof t&&null!==t){if(r.has(t))throw new Error("Circular reference in options");r.add(t)}Object.entries(t).forEach((([t,i])=>{const o=n?n+t:t;if("object"==typeof i)(0,e.iterateExtraOptions)(i,o+".",r,a);else if("string"==typeof i||"number"==typeof i)a(o,i.toString());else{if("boolean"!=typeof i)throw new Error("Can\'t handle extra config type: "+typeof i);a(o,i?"1":"0")}}))}},586:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setRunOptions=void 0;const r=n(967),a=n(983),i=n(361);e.setRunOptions=t=>{const e=(0,i.getInstance)();let n=0;const o=[],u=t||{};try{if(void 0===(null==t?void 0:t.logSeverityLevel))u.logSeverityLevel=2;else if("number"!=typeof t.logSeverityLevel||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${t.logSeverityLevel}`);if(void 0===(null==t?void 0:t.logVerbosityLevel))u.logVerbosityLevel=0;else if("number"!=typeof t.logVerbosityLevel||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);void 0===(null==t?void 0:t.terminate)&&(u.terminate=!1);let i=0;if(void 0!==(null==t?void 0:t.tag)&&(i=(0,a.allocWasmString)(t.tag,o)),n=e._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,i),0===n)throw new Error("Can\'t create run options");return void 0!==(null==t?void 0:t.extra)&&(0,r.iterateExtraOptions)(t.extra,"",new WeakSet,((t,r)=>{const i=(0,a.allocWasmString)(t,o),u=(0,a.allocWasmString)(r,o);if(0!==e._OrtAddRunConfigEntry(n,i,u))throw new Error(`Can\'t set a run config entry: ${t} - ${r}`)})),[n,o]}catch(t){throw 0!==n&&e._OrtReleaseRunOptions(n),o.forEach(e._free),t}}},919:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setSessionOptions=void 0;const r=n(967),a=n(983),i=n(361);e.setSessionOptions=t=>{const e=(0,i.getInstance)();let n=0;const o=[],u=t||{};(t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});const e=t.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1")})(u);try{void 0===(null==t?void 0:t.graphOptimizationLevel)&&(u.graphOptimizationLevel="all");const c=(t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${t}`)}})(u.graphOptimizationLevel);void 0===(null==t?void 0:t.enableCpuMemArena)&&(u.enableCpuMemArena=!0),void 0===(null==t?void 0:t.enableMemPattern)&&(u.enableMemPattern=!0),void 0===(null==t?void 0:t.executionMode)&&(u.executionMode="sequential");const s=(t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${t}`)}})(u.executionMode);let l=0;if(void 0!==(null==t?void 0:t.logId)&&(l=(0,a.allocWasmString)(t.logId,o)),void 0===(null==t?void 0:t.logSeverityLevel))u.logSeverityLevel=2;else if("number"!=typeof t.logSeverityLevel||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${t.logSeverityLevel}`);if(void 0===(null==t?void 0:t.logVerbosityLevel))u.logVerbosityLevel=0;else if("number"!=typeof t.logVerbosityLevel||!Number.isInteger(t.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);if(void 0===(null==t?void 0:t.enableProfiling)&&(u.enableProfiling=!1),n=e._OrtCreateSessionOptions(c,!!u.enableCpuMemArena,!!u.enableMemPattern,s,!!u.enableProfiling,0,l,u.logSeverityLevel,u.logVerbosityLevel),0===n)throw new Error("Can\'t create session options");return(null==t?void 0:t.executionProviders)&&((t,e,n)=>{for(const r of e){let e="string"==typeof r?r:r.name;switch(e){case"xnnpack":e="XNNPACK";break;case"wasm":case"cpu":continue;default:throw new Error(`not supported EP: ${e}`)}const o=(0,a.allocWasmString)(e,n);if(0!==(0,i.getInstance)()._OrtAppendExecutionProvider(t,o))throw new Error(`Can\'t append execution provider: ${e}`)}})(n,t.executionProviders,o),void 0!==(null==t?void 0:t.extra)&&(0,r.iterateExtraOptions)(t.extra,"",new WeakSet,((t,r)=>{const i=(0,a.allocWasmString)(t,o),u=(0,a.allocWasmString)(r,o);if(0!==e._OrtAddSessionConfigEntry(n,i,u))throw new Error(`Can\'t set a session config entry: ${t} - ${r}`)})),[n,o]}catch(t){throw 0!==n&&e._OrtReleaseSessionOptions(n),o.forEach(e._free),t}}},983:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.allocWasmString=void 0;const r=n(361);e.allocWasmString=(t,e)=>{const n=(0,r.getInstance)(),a=n.lengthBytesUTF8(t)+1,i=n._malloc(a);return n.stringToUTF8(t,i,a),e.push(i),i}},349:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractTransferableBuffers=e.endProfiling=e.run=e.releaseSession=e.createSession=e.createSessionFinalize=e.createSessionAllocate=e.initOrt=void 0;const r=n(586),a=n(919),i=n(983),o=n(361);e.initOrt=(t,e)=>{const n=(0,o.getInstance)()._OrtInit(t,e);if(0!==n)throw new Error(`Can\'t initialize onnxruntime. error code = ${n}`)};const u=new Map;e.createSessionAllocate=t=>{const e=(0,o.getInstance)(),n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),[n,t.byteLength]},e.createSessionFinalize=(t,e)=>{const n=(0,o.getInstance)();let r=0,i=0,c=[];try{if([i,c]=(0,a.setSessionOptions)(e),r=n._OrtCreateSession(t[0],t[1],i),0===r)throw new Error("Can\'t create a session")}finally{n._free(t[0]),n._OrtReleaseSessionOptions(i),c.forEach(n._free)}const s=n._OrtGetInputCount(r),l=n._OrtGetOutputCount(r),f=[],p=[],h=[],d=[];for(let t=0;t<s;t++){const e=n._OrtGetInputName(r,t);if(0===e)throw new Error("Can\'t get an input name");p.push(e),f.push(n.UTF8ToString(e))}for(let t=0;t<l;t++){const e=n._OrtGetOutputName(r,t);if(0===e)throw new Error("Can\'t get an output name");d.push(e),h.push(n.UTF8ToString(e))}return u.set(r,[r,p,d]),[r,f,h]},e.createSession=(t,n)=>{const r=(0,e.createSessionAllocate)(t);return(0,e.createSessionFinalize)(r,n)},e.releaseSession=t=>{const e=(0,o.getInstance)(),n=u.get(t);if(!n)throw new Error("invalid session id");const r=n[0],a=n[1],i=n[2];a.forEach(e._OrtFree),i.forEach(e._OrtFree),e._OrtReleaseSession(r),u.delete(t)};const c=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;default:throw new Error(`unsupported data type: ${t}`)}},s=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";default:throw new Error(`unsupported data type: ${t}`)}},l=t=>{switch(t){case"float32":return Float32Array;case"uint8":case"bool":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${t}`)}};e.run=(t,e,n,a,f)=>{const p=(0,o.getInstance)(),h=u.get(t);if(!h)throw new Error("invalid session id");const d=h[0],y=h[1],b=h[2],m=e.length,g=a.length;let v=0,w=[];const _=[],O=[];try{[v,w]=(0,r.setRunOptions)(f);for(let t=0;t<m;t++){const e=n[t][0],r=n[t][1],a=n[t][2];let o,u;if(Array.isArray(a)){u=4*a.length,o=p._malloc(u),O.push(o);let t=o/4;for(let e=0;e<a.length;e++){if("string"!=typeof a[e])throw new TypeError(`tensor data at index ${e} is not a string`);p.HEAPU32[t++]=(0,i.allocWasmString)(a[e],O)}}else u=a.byteLength,o=p._malloc(u),O.push(o),p.HEAPU8.set(new Uint8Array(a.buffer,a.byteOffset,u),o);const s=p.stackSave(),l=p.stackAlloc(4*r.length);try{let t=l/4;r.forEach((e=>p.HEAP32[t++]=e));const n=p._OrtCreateTensor(c(e),o,u,l,r.length);if(0===n)throw new Error("Can\'t create a tensor");_.push(n)}finally{p.stackRestore(s)}}const t=p.stackSave(),o=p.stackAlloc(4*m),u=p.stackAlloc(4*m),h=p.stackAlloc(4*g),A=p.stackAlloc(4*g);try{let n=o/4,r=u/4,i=h/4,c=A/4;for(let t=0;t<m;t++)p.HEAPU32[n++]=_[t],p.HEAPU32[r++]=y[e[t]];for(let t=0;t<g;t++)p.HEAPU32[i++]=0,p.HEAPU32[c++]=b[a[t]];let f=p._OrtRun(d,u,o,m,A,g,h,v);const w=[];if(0===f)for(let t=0;t<g;t++){const e=p.HEAPU32[h/4+t],n=p.stackSave(),r=p.stackAlloc(16);let a,i=0;try{if(f=p._OrtGetTensorData(e,r,r+4,r+8,r+12),0!==f)throw new Error(`Can\'t access output tensor data. error code = ${f}`);let t=r/4;const o=p.HEAPU32[t++];i=p.HEAPU32[t++];const u=p.HEAPU32[t++],c=p.HEAPU32[t++],h=[];for(let t=0;t<c;t++)h.push(p.HEAPU32[u/4+t]);p._OrtFree(u);const d=0===h.length?1:h.reduce(((t,e)=>t*e));if(a=s(o),"string"===a){const t=[];let e=i/4;for(let n=0;n<d;n++){const r=p.HEAPU32[e++],a=n===d-1?void 0:p.HEAPU32[e]-r;t.push(p.UTF8ToString(r,a))}w.push([a,h,t])}else{const t=new(l(a))(d);new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(p.HEAPU8.subarray(i,i+t.byteLength)),w.push([a,h,t])}}finally{p.stackRestore(n),"string"===a&&i&&p._free(i),p._OrtReleaseTensor(e)}}if(0===f)return w;throw new Error(`failed to call OrtRun(). error code = ${f}.`)}finally{p.stackRestore(t)}}finally{_.forEach(p._OrtReleaseTensor),O.forEach(p._free),p._OrtReleaseRunOptions(v),w.forEach(p._free)}},e.endProfiling=t=>{const e=(0,o.getInstance)(),n=u.get(t);if(!n)throw new Error("invalid session id");const r=n[0],a=e._OrtEndProfiling(r);if(0===a)throw new Error("Can\'t get an profile file name");e._OrtFree(a)},e.extractTransferableBuffers=t=>{const e=[];for(const n of t){const t=n[2];!Array.isArray(t)&&t.buffer&&e.push(t.buffer)}return e}},361:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(e,n);a&&!("get"in a?!e.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,a)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&r(e,t,n);return a(e,t),e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.dispose=e.getInstance=e.initializeWebAssembly=void 0;const u=i(n(449)),c=o(n(932)),s=n(474);let l,f=!1,p=!1,h=!1;const d=(t,e)=>e?t?"ort-wasm-simd-threaded.wasm":"ort-wasm-threaded.wasm":t?"ort-wasm-simd.wasm":"ort-wasm.wasm";e.initializeWebAssembly=async t=>{if(f)return Promise.resolve();if(p)throw new Error("multiple calls to \'initializeWebAssembly()\' detected.");if(h)throw new Error("previous call to \'initializeWebAssembly()\' failed.");p=!0;const e=t.initTimeout,r=t.numThreads,a=t.simd,i=r>1&&(()=>{try{return"undefined"!=typeof SharedArrayBuffer&&("undefined"!=typeof MessageChannel&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11])))}catch(t){return!1}})(),o=a&&(()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch(t){return!1}})(),y="string"==typeof t.wasmPaths?t.wasmPaths:void 0,b=d(!1,i),m=d(o,i),g="object"==typeof t.wasmPaths?t.wasmPaths[m]:void 0;let v=!1;const w=[];if(e>0&&w.push(new Promise((t=>{setTimeout((()=>{v=!0,t()}),e)}))),w.push(new Promise(((t,e)=>{const r=i?s:c.default,a={locateFile:(t,e)=>i&&t.endsWith(".worker.js")&&"undefined"!=typeof Blob?URL.createObjectURL(new Blob([n(154)],{type:"text/javascript"})):t===b?null!=g?g:(null!=y?y:e)+m:e+t};if(i)if("undefined"==typeof Blob)a.mainScriptUrlOrBlob=u.join("/","ort-wasm-threaded.js");else{const t=`var ortWasmThreaded=(function(){var _scriptDir;return ${r.toString()}})();`;a.mainScriptUrlOrBlob=new Blob([t],{type:"text/javascript"})}r(a).then((e=>{p=!1,f=!0,l=e,t()}),(t=>{p=!1,h=!0,e(t)}))}))),await Promise.race(w),v)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},e.getInstance=()=>{if(f&&l)return l;throw new Error("WebAssembly is not initialized yet.")},e.dispose=()=>{var t;!f||p||h||(p=!0,null===(t=l.PThread)||void 0===t||t.terminateAllThreads(),l=void 0,p=!1,f=!1,h=!0)}},154:t=>{"use strict";t.exports=\'"use strict";var e={},t="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;if(t){var r=require("worker_threads"),a=r.parentPort;a.on("message",(e=>onmessage({data:e})));var o=require("fs");Object.assign(global,{self:global,require:require,Module:e,location:{href:__filename},Worker:r.Worker,importScripts:function(e){(0,eval)(o.readFileSync(e,"utf8"))},postMessage:function(e){a.postMessage(e)},performance:global.performance||{now:function(){return Date.now()}}})}var s=!1,n=[],i=function(){var e=Array.prototype.slice.call(arguments).join(" ");t?o.writeSync(2,e+"\\\\n"):console.error(e)};self.alert=function(){var t=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:t,threadId:e._pthread_self()})},e.instantiateWasm=(t,r)=>{var a=new WebAssembly.Instance(e.wasmModule,t);return r(a),e.wasmModule=null,a.exports},self.onunhandledrejection=e=>{throw e.reason??e},self.onmessage=t=>{try{if("load"===t.data.cmd){if(e.wasmModule=t.data.wasmModule,e.wasmMemory=t.data.wasmMemory,e.buffer=e.wasmMemory.buffer,e.ENVIRONMENT_IS_PTHREAD=!0,"string"==typeof t.data.urlOrBlob)importScripts(t.data.urlOrBlob);else{var r=URL.createObjectURL(t.data.urlOrBlob);importScripts(r),URL.revokeObjectURL(r)}ortWasmThreaded(e).then((function(t){e=t}))}else if("run"===t.data.cmd){e.__performance_now_clock_drift=performance.now()-t.data.time,e.__emscripten_thread_init(t.data.pthread_ptr,0,0,1),e.establishStackSpace(),e.PThread.receiveObjectTransfer(t.data),e.PThread.threadInitTLS(),s||(n.forEach((t=>{e.executeNotifiedProxyingQueue(t)})),n=[],s=!0);try{e.invokeEntryPoint(t.data.start_routine,t.data.arg)}catch(t){if("unwind"!=t){if(!(t instanceof e.ExitStatus))throw t;e.keepRuntimeAlive()||e.__emscripten_thread_exit(t.status)}}}else"cancel"===t.data.cmd?e._pthread_self()&&e.__emscripten_thread_exit(-1):"setimmediate"===t.data.target||("processProxyingQueue"===t.data.cmd?s?e.executeNotifiedProxyingQueue(t.data.queue):n.push(t.data.queue):(i("worker.js received unknown command "+t.data.cmd),i(t.data)))}catch(t){throw i("worker.js onmessage() captured an uncaught exception: "+t),t&&t.stack&&i(t.stack),e.__emscripten_thread_crashed&&e.__emscripten_thread_crashed(),t}};\\n\'},384:()=>{},993:()=>{},908:()=>{},953:()=>{},925:()=>{},449:()=>{}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";const t=n(349),e=n(361);self.onmessage=n=>{switch(n.data.type){case"init-wasm":(0,e.initializeWebAssembly)(n.data.in).then((()=>postMessage({type:"init-wasm"})),(t=>postMessage({type:"init-wasm",err:t})));break;case"init-ort":try{const{numThreads:e,loggingLevel:r}=n.data.in;(0,t.initOrt)(e,r),postMessage({type:"init-ort"})}catch(t){postMessage({type:"init-ort",err:t})}break;case"create_allocate":try{const{model:e}=n.data.in,r=(0,t.createSessionAllocate)(e);postMessage({type:"create_allocate",out:r})}catch(t){postMessage({type:"create_allocate",err:t})}break;case"create_finalize":try{const{modeldata:e,options:r}=n.data.in,a=(0,t.createSessionFinalize)(e,r);postMessage({type:"create_finalize",out:a})}catch(t){postMessage({type:"create_finalize",err:t})}break;case"create":try{const{model:e,options:r}=n.data.in,a=(0,t.createSession)(e,r);postMessage({type:"create",out:a})}catch(t){postMessage({type:"create",err:t})}break;case"release":try{const e=n.data.in;(0,t.releaseSession)(e),postMessage({type:"release"})}catch(t){postMessage({type:"release",err:t})}break;case"run":try{const{sessionId:e,inputIndices:r,inputs:a,outputIndices:i,options:o}=n.data.in,u=(0,t.run)(e,r,a,i,o);postMessage({type:"run",out:u},(0,t.extractTransferableBuffers)(u))}catch(t){postMessage({type:"run",err:t})}break;case"end-profiling":try{const e=n.data.in;(0,t.endProfiling)(e),postMessage({type:"end-profiling"})}catch(t){postMessage({type:"end-profiling",err:t})}}}})()})();\n', "Worker", void 0, void 0);
          }
        }, 477: (t) => {
          "use strict";
          t.exports = function(t2, e, n, r) {
            var i = self || window;
            try {
              try {
                var o;
                try {
                  o = new i.Blob([t2]);
                } catch (e2) {
                  (o = new (i.BlobBuilder || i.WebKitBlobBuilder || i.MozBlobBuilder || i.MSBlobBuilder)()).append(t2), o = o.getBlob();
                }
                var a = i.URL || i.webkitURL, s = a.createObjectURL(o), u = new i[e](s, n);
                return a.revokeObjectURL(s), u;
              } catch (r2) {
                return new i[e]("data:application/javascript,".concat(encodeURIComponent(t2)), n);
              }
            } catch (t3) {
              if (!r)
                throw Error("Inline worker is not supported");
              return new i[e](r, n);
            }
          };
        }, 4154: (t) => {
          "use strict";
          t.exports = '"use strict";var e={},t="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node;if(t){var r=require("worker_threads"),a=r.parentPort;a.on("message",(e=>onmessage({data:e})));var o=require("fs");Object.assign(global,{self:global,require:require,Module:e,location:{href:__filename},Worker:r.Worker,importScripts:function(e){(0,eval)(o.readFileSync(e,"utf8"))},postMessage:function(e){a.postMessage(e)},performance:global.performance||{now:function(){return Date.now()}}})}var s=!1,n=[],i=function(){var e=Array.prototype.slice.call(arguments).join(" ");t?o.writeSync(2,e+"\\n"):console.error(e)};self.alert=function(){var t=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:t,threadId:e._pthread_self()})},e.instantiateWasm=(t,r)=>{var a=new WebAssembly.Instance(e.wasmModule,t);return r(a),e.wasmModule=null,a.exports},self.onunhandledrejection=e=>{throw e.reason??e},self.onmessage=t=>{try{if("load"===t.data.cmd){if(e.wasmModule=t.data.wasmModule,e.wasmMemory=t.data.wasmMemory,e.buffer=e.wasmMemory.buffer,e.ENVIRONMENT_IS_PTHREAD=!0,"string"==typeof t.data.urlOrBlob)importScripts(t.data.urlOrBlob);else{var r=URL.createObjectURL(t.data.urlOrBlob);importScripts(r),URL.revokeObjectURL(r)}ortWasmThreaded(e).then((function(t){e=t}))}else if("run"===t.data.cmd){e.__performance_now_clock_drift=performance.now()-t.data.time,e.__emscripten_thread_init(t.data.pthread_ptr,0,0,1),e.establishStackSpace(),e.PThread.receiveObjectTransfer(t.data),e.PThread.threadInitTLS(),s||(n.forEach((t=>{e.executeNotifiedProxyingQueue(t)})),n=[],s=!0);try{e.invokeEntryPoint(t.data.start_routine,t.data.arg)}catch(t){if("unwind"!=t){if(!(t instanceof e.ExitStatus))throw t;e.keepRuntimeAlive()||e.__emscripten_thread_exit(t.status)}}}else"cancel"===t.data.cmd?e._pthread_self()&&e.__emscripten_thread_exit(-1):"setimmediate"===t.data.target||("processProxyingQueue"===t.data.cmd?s?e.executeNotifiedProxyingQueue(t.data.queue):n.push(t.data.queue):(i("worker.js received unknown command "+t.data.cmd),i(t.data)))}catch(t){throw i("worker.js onmessage() captured an uncaught exception: "+t),t&&t.stack&&i(t.stack),e.__emscripten_thread_crashed&&e.__emscripten_thread_crashed(),t}};\n';
        }, 1670: (t) => {
          "use strict";
          t.exports = __WEBPACK_EXTERNAL_MODULE__1670__;
        }, 7067: () => {
        }, 1296: () => {
        }, 1384: () => {
        }, 3993: () => {
        }, 908: () => {
        }, 6953: () => {
        }, 9925: () => {
        }, 2806: () => {
        }, 6449: () => {
        }, 2850: () => {
        }, 5381: () => {
        }, 5686: (t, e, n) => {
          "use strict";
          n.r(e), n.d(e, { flatbuffers: () => r });
          var r = {};
          r.Offset, r.Table, r.SIZEOF_SHORT = 2, r.SIZEOF_INT = 4, r.FILE_IDENTIFIER_LENGTH = 4, r.SIZE_PREFIX_LENGTH = 4, r.Encoding = { UTF8_BYTES: 1, UTF16_STRING: 2 }, r.int32 = new Int32Array(2), r.float32 = new Float32Array(r.int32.buffer), r.float64 = new Float64Array(r.int32.buffer), r.isLittleEndian = 1 === new Uint16Array(new Uint8Array([1, 0]).buffer)[0], r.Long = function(t2, e2) {
            this.low = 0 | t2, this.high = 0 | e2;
          }, r.Long.create = function(t2, e2) {
            return 0 == t2 && 0 == e2 ? r.Long.ZERO : new r.Long(t2, e2);
          }, r.Long.prototype.toFloat64 = function() {
            return (this.low >>> 0) + 4294967296 * this.high;
          }, r.Long.prototype.equals = function(t2) {
            return this.low == t2.low && this.high == t2.high;
          }, r.Long.ZERO = new r.Long(0, 0), r.Builder = function(t2) {
            if (t2)
              e2 = t2;
            else
              var e2 = 1024;
            this.bb = r.ByteBuffer.allocate(e2), this.space = e2, this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false;
          }, r.Builder.prototype.clear = function() {
            this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = false, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = false;
          }, r.Builder.prototype.forceDefaults = function(t2) {
            this.force_defaults = t2;
          }, r.Builder.prototype.dataBuffer = function() {
            return this.bb;
          }, r.Builder.prototype.asUint8Array = function() {
            return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
          }, r.Builder.prototype.prep = function(t2, e2) {
            t2 > this.minalign && (this.minalign = t2);
            for (var n2 = 1 + ~(this.bb.capacity() - this.space + e2) & t2 - 1; this.space < n2 + t2 + e2; ) {
              var i = this.bb.capacity();
              this.bb = r.Builder.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
            }
            this.pad(n2);
          }, r.Builder.prototype.pad = function(t2) {
            for (var e2 = 0; e2 < t2; e2++)
              this.bb.writeInt8(--this.space, 0);
          }, r.Builder.prototype.writeInt8 = function(t2) {
            this.bb.writeInt8(this.space -= 1, t2);
          }, r.Builder.prototype.writeInt16 = function(t2) {
            this.bb.writeInt16(this.space -= 2, t2);
          }, r.Builder.prototype.writeInt32 = function(t2) {
            this.bb.writeInt32(this.space -= 4, t2);
          }, r.Builder.prototype.writeInt64 = function(t2) {
            this.bb.writeInt64(this.space -= 8, t2);
          }, r.Builder.prototype.writeFloat32 = function(t2) {
            this.bb.writeFloat32(this.space -= 4, t2);
          }, r.Builder.prototype.writeFloat64 = function(t2) {
            this.bb.writeFloat64(this.space -= 8, t2);
          }, r.Builder.prototype.addInt8 = function(t2) {
            this.prep(1, 0), this.writeInt8(t2);
          }, r.Builder.prototype.addInt16 = function(t2) {
            this.prep(2, 0), this.writeInt16(t2);
          }, r.Builder.prototype.addInt32 = function(t2) {
            this.prep(4, 0), this.writeInt32(t2);
          }, r.Builder.prototype.addInt64 = function(t2) {
            this.prep(8, 0), this.writeInt64(t2);
          }, r.Builder.prototype.addFloat32 = function(t2) {
            this.prep(4, 0), this.writeFloat32(t2);
          }, r.Builder.prototype.addFloat64 = function(t2) {
            this.prep(8, 0), this.writeFloat64(t2);
          }, r.Builder.prototype.addFieldInt8 = function(t2, e2, n2) {
            (this.force_defaults || e2 != n2) && (this.addInt8(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldInt16 = function(t2, e2, n2) {
            (this.force_defaults || e2 != n2) && (this.addInt16(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldInt32 = function(t2, e2, n2) {
            (this.force_defaults || e2 != n2) && (this.addInt32(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldInt64 = function(t2, e2, n2) {
            !this.force_defaults && e2.equals(n2) || (this.addInt64(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldFloat32 = function(t2, e2, n2) {
            (this.force_defaults || e2 != n2) && (this.addFloat32(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldFloat64 = function(t2, e2, n2) {
            (this.force_defaults || e2 != n2) && (this.addFloat64(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldOffset = function(t2, e2, n2) {
            (this.force_defaults || e2 != n2) && (this.addOffset(e2), this.slot(t2));
          }, r.Builder.prototype.addFieldStruct = function(t2, e2, n2) {
            e2 != n2 && (this.nested(e2), this.slot(t2));
          }, r.Builder.prototype.nested = function(t2) {
            if (t2 != this.offset())
              throw new Error("FlatBuffers: struct must be serialized inline.");
          }, r.Builder.prototype.notNested = function() {
            if (this.isNested)
              throw new Error("FlatBuffers: object serialization must not be nested.");
          }, r.Builder.prototype.slot = function(t2) {
            this.vtable[t2] = this.offset();
          }, r.Builder.prototype.offset = function() {
            return this.bb.capacity() - this.space;
          }, r.Builder.growByteBuffer = function(t2) {
            var e2 = t2.capacity();
            if (3221225472 & e2)
              throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
            var n2 = e2 << 1, i = r.ByteBuffer.allocate(n2);
            return i.setPosition(n2 - e2), i.bytes().set(t2.bytes(), n2 - e2), i;
          }, r.Builder.prototype.addOffset = function(t2) {
            this.prep(r.SIZEOF_INT, 0), this.writeInt32(this.offset() - t2 + r.SIZEOF_INT);
          }, r.Builder.prototype.startObject = function(t2) {
            this.notNested(), null == this.vtable && (this.vtable = []), this.vtable_in_use = t2;
            for (var e2 = 0; e2 < t2; e2++)
              this.vtable[e2] = 0;
            this.isNested = true, this.object_start = this.offset();
          }, r.Builder.prototype.endObject = function() {
            if (null == this.vtable || !this.isNested)
              throw new Error("FlatBuffers: endObject called without startObject");
            this.addInt32(0);
            for (var t2 = this.offset(), e2 = this.vtable_in_use - 1; e2 >= 0 && 0 == this.vtable[e2]; e2--)
              ;
            for (var n2 = e2 + 1; e2 >= 0; e2--)
              this.addInt16(0 != this.vtable[e2] ? t2 - this.vtable[e2] : 0);
            this.addInt16(t2 - this.object_start);
            var i = (n2 + 2) * r.SIZEOF_SHORT;
            this.addInt16(i);
            var o = 0, a = this.space;
            t:
              for (e2 = 0; e2 < this.vtables.length; e2++) {
                var s = this.bb.capacity() - this.vtables[e2];
                if (i == this.bb.readInt16(s)) {
                  for (var u = r.SIZEOF_SHORT; u < i; u += r.SIZEOF_SHORT)
                    if (this.bb.readInt16(a + u) != this.bb.readInt16(s + u))
                      continue t;
                  o = this.vtables[e2];
                  break;
                }
              }
            return o ? (this.space = this.bb.capacity() - t2, this.bb.writeInt32(this.space, o - t2)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t2, this.offset() - t2)), this.isNested = false, t2;
          }, r.Builder.prototype.finish = function(t2, e2, n2) {
            var i = n2 ? r.SIZE_PREFIX_LENGTH : 0;
            if (e2) {
              var o = e2;
              if (this.prep(this.minalign, r.SIZEOF_INT + r.FILE_IDENTIFIER_LENGTH + i), o.length != r.FILE_IDENTIFIER_LENGTH)
                throw new Error("FlatBuffers: file identifier must be length " + r.FILE_IDENTIFIER_LENGTH);
              for (var a = r.FILE_IDENTIFIER_LENGTH - 1; a >= 0; a--)
                this.writeInt8(o.charCodeAt(a));
            }
            this.prep(this.minalign, r.SIZEOF_INT + i), this.addOffset(t2), i && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
          }, r.Builder.prototype.finishSizePrefixed = function(t2, e2) {
            this.finish(t2, e2, true);
          }, r.Builder.prototype.requiredField = function(t2, e2) {
            var n2 = this.bb.capacity() - t2, r2 = n2 - this.bb.readInt32(n2);
            if (0 == this.bb.readInt16(r2 + e2))
              throw new Error("FlatBuffers: field " + e2 + " must be set");
          }, r.Builder.prototype.startVector = function(t2, e2, n2) {
            this.notNested(), this.vector_num_elems = e2, this.prep(r.SIZEOF_INT, t2 * e2), this.prep(n2, t2 * e2);
          }, r.Builder.prototype.endVector = function() {
            return this.writeInt32(this.vector_num_elems), this.offset();
          }, r.Builder.prototype.createString = function(t2) {
            if (t2 instanceof Uint8Array)
              var e2 = t2;
            else {
              e2 = [];
              for (var n2 = 0; n2 < t2.length; ) {
                var r2, i = t2.charCodeAt(n2++);
                (r2 = i < 55296 || i >= 56320 ? i : (i << 10) + t2.charCodeAt(n2++) + -56613888) < 128 ? e2.push(r2) : (r2 < 2048 ? e2.push(r2 >> 6 & 31 | 192) : (r2 < 65536 ? e2.push(r2 >> 12 & 15 | 224) : e2.push(r2 >> 18 & 7 | 240, r2 >> 12 & 63 | 128), e2.push(r2 >> 6 & 63 | 128)), e2.push(63 & r2 | 128));
              }
            }
            this.addInt8(0), this.startVector(1, e2.length, 1), this.bb.setPosition(this.space -= e2.length), n2 = 0;
            for (var o = this.space, a = this.bb.bytes(); n2 < e2.length; n2++)
              a[o++] = e2[n2];
            return this.endVector();
          }, r.Builder.prototype.createLong = function(t2, e2) {
            return r.Long.create(t2, e2);
          }, r.ByteBuffer = function(t2) {
            this.bytes_ = t2, this.position_ = 0;
          }, r.ByteBuffer.allocate = function(t2) {
            return new r.ByteBuffer(new Uint8Array(t2));
          }, r.ByteBuffer.prototype.clear = function() {
            this.position_ = 0;
          }, r.ByteBuffer.prototype.bytes = function() {
            return this.bytes_;
          }, r.ByteBuffer.prototype.position = function() {
            return this.position_;
          }, r.ByteBuffer.prototype.setPosition = function(t2) {
            this.position_ = t2;
          }, r.ByteBuffer.prototype.capacity = function() {
            return this.bytes_.length;
          }, r.ByteBuffer.prototype.readInt8 = function(t2) {
            return this.readUint8(t2) << 24 >> 24;
          }, r.ByteBuffer.prototype.readUint8 = function(t2) {
            return this.bytes_[t2];
          }, r.ByteBuffer.prototype.readInt16 = function(t2) {
            return this.readUint16(t2) << 16 >> 16;
          }, r.ByteBuffer.prototype.readUint16 = function(t2) {
            return this.bytes_[t2] | this.bytes_[t2 + 1] << 8;
          }, r.ByteBuffer.prototype.readInt32 = function(t2) {
            return this.bytes_[t2] | this.bytes_[t2 + 1] << 8 | this.bytes_[t2 + 2] << 16 | this.bytes_[t2 + 3] << 24;
          }, r.ByteBuffer.prototype.readUint32 = function(t2) {
            return this.readInt32(t2) >>> 0;
          }, r.ByteBuffer.prototype.readInt64 = function(t2) {
            return new r.Long(this.readInt32(t2), this.readInt32(t2 + 4));
          }, r.ByteBuffer.prototype.readUint64 = function(t2) {
            return new r.Long(this.readUint32(t2), this.readUint32(t2 + 4));
          }, r.ByteBuffer.prototype.readFloat32 = function(t2) {
            return r.int32[0] = this.readInt32(t2), r.float32[0];
          }, r.ByteBuffer.prototype.readFloat64 = function(t2) {
            return r.int32[r.isLittleEndian ? 0 : 1] = this.readInt32(t2), r.int32[r.isLittleEndian ? 1 : 0] = this.readInt32(t2 + 4), r.float64[0];
          }, r.ByteBuffer.prototype.writeInt8 = function(t2, e2) {
            this.bytes_[t2] = e2;
          }, r.ByteBuffer.prototype.writeUint8 = function(t2, e2) {
            this.bytes_[t2] = e2;
          }, r.ByteBuffer.prototype.writeInt16 = function(t2, e2) {
            this.bytes_[t2] = e2, this.bytes_[t2 + 1] = e2 >> 8;
          }, r.ByteBuffer.prototype.writeUint16 = function(t2, e2) {
            this.bytes_[t2] = e2, this.bytes_[t2 + 1] = e2 >> 8;
          }, r.ByteBuffer.prototype.writeInt32 = function(t2, e2) {
            this.bytes_[t2] = e2, this.bytes_[t2 + 1] = e2 >> 8, this.bytes_[t2 + 2] = e2 >> 16, this.bytes_[t2 + 3] = e2 >> 24;
          }, r.ByteBuffer.prototype.writeUint32 = function(t2, e2) {
            this.bytes_[t2] = e2, this.bytes_[t2 + 1] = e2 >> 8, this.bytes_[t2 + 2] = e2 >> 16, this.bytes_[t2 + 3] = e2 >> 24;
          }, r.ByteBuffer.prototype.writeInt64 = function(t2, e2) {
            this.writeInt32(t2, e2.low), this.writeInt32(t2 + 4, e2.high);
          }, r.ByteBuffer.prototype.writeUint64 = function(t2, e2) {
            this.writeUint32(t2, e2.low), this.writeUint32(t2 + 4, e2.high);
          }, r.ByteBuffer.prototype.writeFloat32 = function(t2, e2) {
            r.float32[0] = e2, this.writeInt32(t2, r.int32[0]);
          }, r.ByteBuffer.prototype.writeFloat64 = function(t2, e2) {
            r.float64[0] = e2, this.writeInt32(t2, r.int32[r.isLittleEndian ? 0 : 1]), this.writeInt32(t2 + 4, r.int32[r.isLittleEndian ? 1 : 0]);
          }, r.ByteBuffer.prototype.getBufferIdentifier = function() {
            if (this.bytes_.length < this.position_ + r.SIZEOF_INT + r.FILE_IDENTIFIER_LENGTH)
              throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
            for (var t2 = "", e2 = 0; e2 < r.FILE_IDENTIFIER_LENGTH; e2++)
              t2 += String.fromCharCode(this.readInt8(this.position_ + r.SIZEOF_INT + e2));
            return t2;
          }, r.ByteBuffer.prototype.__offset = function(t2, e2) {
            var n2 = t2 - this.readInt32(t2);
            return e2 < this.readInt16(n2) ? this.readInt16(n2 + e2) : 0;
          }, r.ByteBuffer.prototype.__union = function(t2, e2) {
            return t2.bb_pos = e2 + this.readInt32(e2), t2.bb = this, t2;
          }, r.ByteBuffer.prototype.__string = function(t2, e2) {
            t2 += this.readInt32(t2);
            var n2 = this.readInt32(t2), i = "", o = 0;
            if (t2 += r.SIZEOF_INT, e2 === r.Encoding.UTF8_BYTES)
              return this.bytes_.subarray(t2, t2 + n2);
            for (; o < n2; ) {
              var a, s = this.readUint8(t2 + o++);
              if (s < 192)
                a = s;
              else {
                var u = this.readUint8(t2 + o++);
                if (s < 224)
                  a = (31 & s) << 6 | 63 & u;
                else {
                  var c = this.readUint8(t2 + o++);
                  a = s < 240 ? (15 & s) << 12 | (63 & u) << 6 | 63 & c : (7 & s) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & this.readUint8(t2 + o++);
                }
              }
              a < 65536 ? i += String.fromCharCode(a) : (a -= 65536, i += String.fromCharCode(55296 + (a >> 10), 56320 + (1023 & a)));
            }
            return i;
          }, r.ByteBuffer.prototype.__indirect = function(t2) {
            return t2 + this.readInt32(t2);
          }, r.ByteBuffer.prototype.__vector = function(t2) {
            return t2 + this.readInt32(t2) + r.SIZEOF_INT;
          }, r.ByteBuffer.prototype.__vector_len = function(t2) {
            return this.readInt32(t2 + this.readInt32(t2));
          }, r.ByteBuffer.prototype.__has_identifier = function(t2) {
            if (t2.length != r.FILE_IDENTIFIER_LENGTH)
              throw new Error("FlatBuffers: file identifier must be length " + r.FILE_IDENTIFIER_LENGTH);
            for (var e2 = 0; e2 < r.FILE_IDENTIFIER_LENGTH; e2++)
              if (t2.charCodeAt(e2) != this.readInt8(this.position_ + r.SIZEOF_INT + e2))
                return false;
            return true;
          }, r.ByteBuffer.prototype.createLong = function(t2, e2) {
            return r.Long.create(t2, e2);
          };
        } }, __webpack_module_cache__ = {};
        function __webpack_require__(t) {
          var e = __webpack_module_cache__[t];
          if (void 0 !== e)
            return e.exports;
          var n = __webpack_module_cache__[t] = { exports: {} };
          return __webpack_modules__[t].call(n.exports, n, n.exports, __webpack_require__), n.exports;
        }
        __webpack_require__.n = (t) => {
          var e = t && t.__esModule ? () => t.default : () => t;
          return __webpack_require__.d(e, { a: e }), e;
        }, __webpack_require__.d = (t, e) => {
          for (var n in e)
            __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, { enumerable: true, get: e[n] });
        }, __webpack_require__.g = function() {
          if ("object" == typeof globalThis)
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (t) {
            if ("object" == typeof window)
              return window;
          }
        }(), __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), __webpack_require__.r = (t) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: true });
        };
        var __webpack_exports__ = __webpack_require__(6018);
        return __webpack_exports__;
      })());
    }
  });

  // ../../packages/web/dist/_common/utils.js
  var require_utils = __commonJS({
    "../../packages/web/dist/_common/utils.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.encodeWAV = exports2.arrayBufferToBase64 = exports2.minFramesForTargetMS = void 0;
      function minFramesForTargetMS(targetDuration, frameSamples, sr = 16e3) {
        return Math.ceil(targetDuration * sr / 1e3 / frameSamples);
      }
      exports2.minFramesForTargetMS = minFramesForTargetMS;
      function arrayBufferToBase64(buffer) {
        var binary = "";
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
      }
      exports2.arrayBufferToBase64 = arrayBufferToBase64;
      function encodeWAV(samples, format = 3, sampleRate = 16e3, numChannels = 1, bitDepth = 32) {
        var bytesPerSample = bitDepth / 8;
        var blockAlign = numChannels * bytesPerSample;
        var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
        var view = new DataView(buffer);
        writeString(view, 0, "RIFF");
        view.setUint32(4, 36 + samples.length * bytesPerSample, true);
        writeString(view, 8, "WAVE");
        writeString(view, 12, "fmt ");
        view.setUint32(16, 16, true);
        view.setUint16(20, format, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * blockAlign, true);
        view.setUint16(32, blockAlign, true);
        view.setUint16(34, bitDepth, true);
        writeString(view, 36, "data");
        view.setUint32(40, samples.length * bytesPerSample, true);
        if (format === 1) {
          floatTo16BitPCM(view, 44, samples);
        } else {
          writeFloat32(view, 44, samples);
        }
        return buffer;
      }
      exports2.encodeWAV = encodeWAV;
      function writeFloat32(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 4) {
          output.setFloat32(offset, input[i], true);
        }
      }
      function floatTo16BitPCM(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 2) {
          var s = Math.max(-1, Math.min(1, input[i]));
          output.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);
        }
      }
      function writeString(view, offset, string) {
        for (var i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      }
    }
  });

  // ../../packages/web/dist/_common/messages.js
  var require_messages = __commonJS({
    "../../packages/web/dist/_common/messages.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Message = void 0;
      var Message;
      (function(Message2) {
        Message2["AudioFrame"] = "AUDIO_FRAME";
        Message2["SpeechStart"] = "SPEECH_START";
        Message2["VADMisfire"] = "VAD_MISFIRE";
        Message2["SpeechEnd"] = "SPEECH_END";
        Message2["SpeechStop"] = "SPEECH_STOP";
      })(Message || (exports2.Message = Message = {}));
    }
  });

  // ../../packages/web/dist/_common/logging.js
  var require_logging = __commonJS({
    "../../packages/web/dist/_common/logging.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.log = exports2.LOG_PREFIX = void 0;
      exports2.LOG_PREFIX = "[VAD]";
      var levels = ["error", "debug", "warn"];
      function getLog(level) {
        return (...args) => {
          console[level](exports2.LOG_PREFIX, ...args);
        };
      }
      var _log = levels.reduce((acc, level) => {
        acc[level] = getLog(level);
        return acc;
      }, {});
      exports2.log = _log;
    }
  });

  // ../../packages/web/dist/_common/frame-processor.js
  var require_frame_processor = __commonJS({
    "../../packages/web/dist/_common/frame-processor.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.FrameProcessor = exports2.validateOptions = exports2.defaultFrameProcessorOptions = void 0;
      var messages_1 = require_messages();
      var logging_1 = require_logging();
      var RECOMMENDED_FRAME_SAMPLES = [512, 1024, 1536];
      exports2.defaultFrameProcessorOptions = {
        positiveSpeechThreshold: 0.5,
        negativeSpeechThreshold: 0.5 - 0.15,
        preSpeechPadFrames: 1,
        redemptionFrames: 8,
        frameSamples: 1536,
        minSpeechFrames: 3,
        submitUserSpeechOnPause: false
      };
      function validateOptions(options) {
        if (!RECOMMENDED_FRAME_SAMPLES.includes(options.frameSamples)) {
          logging_1.log.warn("You are using an unusual frame size");
        }
        if (options.positiveSpeechThreshold < 0 || options.negativeSpeechThreshold > 1) {
          logging_1.log.error("postiveSpeechThreshold should be a number between 0 and 1");
        }
        if (options.negativeSpeechThreshold < 0 || options.negativeSpeechThreshold > options.positiveSpeechThreshold) {
          logging_1.log.error("negativeSpeechThreshold should be between 0 and postiveSpeechThreshold");
        }
        if (options.preSpeechPadFrames < 0) {
          logging_1.log.error("preSpeechPadFrames should be positive");
        }
        if (options.redemptionFrames < 0) {
          logging_1.log.error("preSpeechPadFrames should be positive");
        }
      }
      exports2.validateOptions = validateOptions;
      var concatArrays = (arrays) => {
        const sizes = arrays.reduce((out, next) => {
          out.push(out.at(-1) + next.length);
          return out;
        }, [0]);
        const outArray = new Float32Array(sizes.at(-1));
        arrays.forEach((arr, index) => {
          const place = sizes[index];
          outArray.set(arr, place);
        });
        return outArray;
      };
      var FrameProcessor = class {
        constructor(modelProcessFunc, modelResetFunc, options) {
          this.modelProcessFunc = modelProcessFunc;
          this.modelResetFunc = modelResetFunc;
          this.options = options;
          this.speaking = false;
          this.redemptionCounter = 0;
          this.active = false;
          this.reset = () => {
            this.speaking = false;
            this.audioBuffer = [];
            this.modelResetFunc();
            this.redemptionCounter = 0;
          };
          this.pause = () => {
            this.active = false;
            if (this.options.submitUserSpeechOnPause) {
              return this.endSegment();
            } else {
              this.reset();
              return {};
            }
          };
          this.resume = () => {
            this.active = true;
          };
          this.endSegment = () => {
            const audioBuffer = this.audioBuffer;
            this.audioBuffer = [];
            const speaking = this.speaking;
            this.reset();
            const speechFrameCount = audioBuffer.reduce((acc, item) => {
              return acc + +item.isSpeech;
            }, 0);
            if (speaking) {
              if (speechFrameCount >= this.options.minSpeechFrames) {
                const audio = concatArrays(audioBuffer.map((item) => item.frame));
                return { msg: messages_1.Message.SpeechEnd, audio };
              } else {
                return { msg: messages_1.Message.VADMisfire };
              }
            }
            return {};
          };
          this.process = async (frame) => {
            if (!this.active) {
              return {};
            }
            const probs = await this.modelProcessFunc(frame);
            this.audioBuffer.push({
              frame,
              isSpeech: probs.isSpeech >= this.options.positiveSpeechThreshold
            });
            if (probs.isSpeech >= this.options.positiveSpeechThreshold && this.redemptionCounter) {
              this.redemptionCounter = 0;
            }
            if (probs.isSpeech >= this.options.positiveSpeechThreshold && !this.speaking) {
              this.speaking = true;
              return { probs, msg: messages_1.Message.SpeechStart, frame };
            }
            if (probs.isSpeech < this.options.negativeSpeechThreshold && this.speaking && ++this.redemptionCounter >= this.options.redemptionFrames) {
              this.redemptionCounter = 0;
              this.speaking = false;
              const audioBuffer = this.audioBuffer;
              this.audioBuffer = [];
              const speechFrameCount = audioBuffer.reduce((acc, item) => {
                return acc + +item.isSpeech;
              }, 0);
              if (speechFrameCount >= this.options.minSpeechFrames) {
                const audio = concatArrays(audioBuffer.map((item) => item.frame));
                return { probs, msg: messages_1.Message.SpeechEnd, audio, frame };
              } else {
                return { probs, msg: messages_1.Message.VADMisfire, frame };
              }
            }
            if (!this.speaking) {
              while (this.audioBuffer.length > this.options.preSpeechPadFrames) {
                this.audioBuffer.shift();
              }
            }
            return { probs, frame };
          };
          this.audioBuffer = [];
          this.reset();
        }
      };
      exports2.FrameProcessor = FrameProcessor;
    }
  });

  // ../../packages/web/dist/_common/models.js
  var require_models = __commonJS({
    "../../packages/web/dist/_common/models.js"(exports2) {
      "use strict";
      var _a;
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Silero = void 0;
      var logging_1 = require_logging();
      var Silero = class {
        constructor(ort, modelFetcher) {
          this.ort = ort;
          this.modelFetcher = modelFetcher;
          this.init = async () => {
            logging_1.log.debug("initializing vad");
            const modelArrayBuffer = await this.modelFetcher();
            this._session = await this.ort.InferenceSession.create(modelArrayBuffer);
            this._sr = new this.ort.Tensor("int64", [16000n]);
            this.reset_state();
            logging_1.log.debug("vad is initialized");
          };
          this.reset_state = () => {
            const zeroes = Array(2 * 64).fill(0);
            this._h = new this.ort.Tensor("float32", zeroes, [2, 1, 64]);
            this._c = new this.ort.Tensor("float32", zeroes, [2, 1, 64]);
          };
          this.process = async (audioFrame) => {
            const t = new this.ort.Tensor("float32", audioFrame, [1, audioFrame.length]);
            const inputs = {
              input: t,
              h: this._h,
              c: this._c,
              sr: this._sr
            };
            const out = await this._session.run(inputs);
            this._h = out.hn;
            this._c = out.cn;
            const [isSpeech] = out.output.data;
            const notSpeech = 1 - isSpeech;
            return { notSpeech, isSpeech };
          };
        }
      };
      exports2.Silero = Silero;
      _a = Silero;
      Silero.new = async (ort, modelFetcher) => {
        const model = new _a(ort, modelFetcher);
        await model.init();
        return model;
      };
    }
  });

  // ../../packages/web/dist/_common/resampler.js
  var require_resampler = __commonJS({
    "../../packages/web/dist/_common/resampler.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Resampler = void 0;
      var logging_1 = require_logging();
      var Resampler = class {
        constructor(options) {
          this.options = options;
          this.process = (audioFrame) => {
            const outputFrames = [];
            for (const sample of audioFrame) {
              this.inputBuffer.push(sample);
            }
            while (this.inputBuffer.length * this.options.targetSampleRate / this.options.nativeSampleRate > this.options.targetFrameSize) {
              const outputFrame = new Float32Array(this.options.targetFrameSize);
              let outputIndex = 0;
              let inputIndex = 0;
              while (outputIndex < this.options.targetFrameSize) {
                let sum = 0;
                let num = 0;
                while (inputIndex < Math.min(this.inputBuffer.length, (outputIndex + 1) * this.options.nativeSampleRate / this.options.targetSampleRate)) {
                  sum += this.inputBuffer[inputIndex];
                  num++;
                  inputIndex++;
                }
                outputFrame[outputIndex] = sum / num;
                outputIndex++;
              }
              this.inputBuffer = this.inputBuffer.slice(inputIndex);
              outputFrames.push(outputFrame);
            }
            return outputFrames;
          };
          if (options.nativeSampleRate < 16e3) {
            logging_1.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate");
          }
          this.inputBuffer = [];
        }
      };
      exports2.Resampler = Resampler;
    }
  });

  // ../../packages/web/dist/_common/non-real-time-vad.js
  var require_non_real_time_vad = __commonJS({
    "../../packages/web/dist/_common/non-real-time-vad.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.PlatformAgnosticNonRealTimeVAD = exports2.defaultNonRealTimeVADOptions = void 0;
      var frame_processor_1 = require_frame_processor();
      var messages_1 = require_messages();
      var models_1 = require_models();
      var resampler_1 = require_resampler();
      exports2.defaultNonRealTimeVADOptions = {
        ...frame_processor_1.defaultFrameProcessorOptions,
        ortConfig: void 0
      };
      var PlatformAgnosticNonRealTimeVAD = class {
        static async _new(modelFetcher, ort, options = {}) {
          const fullOptions = {
            ...exports2.defaultNonRealTimeVADOptions,
            ...options
          };
          if (fullOptions.ortConfig !== void 0) {
            fullOptions.ortConfig(ort);
          }
          const vad2 = new this(modelFetcher, ort, fullOptions);
          await vad2.init();
          return vad2;
        }
        constructor(modelFetcher, ort, options) {
          this.modelFetcher = modelFetcher;
          this.ort = ort;
          this.options = options;
          this.init = async () => {
            const model = await models_1.Silero.new(this.ort, this.modelFetcher);
            this.frameProcessor = new frame_processor_1.FrameProcessor(model.process, model.reset_state, {
              frameSamples: this.options.frameSamples,
              positiveSpeechThreshold: this.options.positiveSpeechThreshold,
              negativeSpeechThreshold: this.options.negativeSpeechThreshold,
              redemptionFrames: this.options.redemptionFrames,
              preSpeechPadFrames: this.options.preSpeechPadFrames,
              minSpeechFrames: this.options.minSpeechFrames,
              submitUserSpeechOnPause: this.options.submitUserSpeechOnPause
            });
            this.frameProcessor.resume();
          };
          this.run = async function* (inputAudio, sampleRate) {
            const resamplerOptions = {
              nativeSampleRate: sampleRate,
              targetSampleRate: 16e3,
              targetFrameSize: this.options.frameSamples
            };
            const resampler = new resampler_1.Resampler(resamplerOptions);
            const frames = resampler.process(inputAudio);
            let start, end;
            for (const i of [...Array(frames.length)].keys()) {
              const f = frames[i];
              const { msg: msg2, audio: audio2 } = await this.frameProcessor.process(f);
              switch (msg2) {
                case messages_1.Message.SpeechStart:
                  start = i * this.options.frameSamples / 16;
                  break;
                case messages_1.Message.SpeechEnd:
                  end = (i + 1) * this.options.frameSamples / 16;
                  yield { audio: audio2, start, end };
                  break;
                default:
                  break;
              }
            }
            const { msg, audio } = this.frameProcessor.endSegment();
            if (msg == messages_1.Message.SpeechEnd) {
              yield {
                audio,
                // @ts-ignore
                start,
                end: frames.length * this.options.frameSamples / 16
              };
            }
          };
          (0, frame_processor_1.validateOptions)(options);
        }
      };
      exports2.PlatformAgnosticNonRealTimeVAD = PlatformAgnosticNonRealTimeVAD;
    }
  });

  // ../../packages/web/dist/_common/index.js
  var require_common = __commonJS({
    "../../packages/web/dist/_common/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod2) {
        if (mod2 && mod2.__esModule)
          return mod2;
        var result = {};
        if (mod2 != null) {
          for (var k in mod2)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod2, k))
              __createBinding(result, mod2, k);
        }
        __setModuleDefault(result, mod2);
        return result;
      };
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.utils = void 0;
      var _utils = __importStar(require_utils());
      exports2.utils = {
        minFramesForTargetMS: _utils.minFramesForTargetMS,
        arrayBufferToBase64: _utils.arrayBufferToBase64,
        encodeWAV: _utils.encodeWAV
      };
      __exportStar(require_non_real_time_vad(), exports2);
      __exportStar(require_frame_processor(), exports2);
      __exportStar(require_messages(), exports2);
      __exportStar(require_logging(), exports2);
      __exportStar(require_models(), exports2);
      __exportStar(require_resampler(), exports2);
    }
  });

  // ../../packages/web/dist/utils.js
  var require_utils2 = __commonJS({
    "../../packages/web/dist/utils.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.audioFileToArray = void 0;
      async function audioFileToArray(audioFileData) {
        const ctx = new OfflineAudioContext(1, 1, 44100);
        const reader = new FileReader();
        let audioBuffer = null;
        await new Promise((res) => {
          reader.addEventListener("loadend", (ev) => {
            const audioData = reader.result;
            ctx.decodeAudioData(audioData, (buffer) => {
              audioBuffer = buffer;
              ctx.startRendering().then((renderedBuffer) => {
                console.log("Rendering completed successfully");
                res();
              }).catch((err) => {
                console.error(`Rendering failed: ${err}`);
              });
            }, (e) => {
              console.log(`Error with decoding audio data: ${e}`);
            });
          });
          reader.readAsArrayBuffer(audioFileData);
        });
        if (audioBuffer === null) {
          throw Error("some shit");
        }
        let _audioBuffer = audioBuffer;
        let out = new Float32Array(_audioBuffer.length);
        for (let i = 0; i < _audioBuffer.length; i++) {
          for (let j = 0; j < _audioBuffer.numberOfChannels; j++) {
            out[i] += _audioBuffer.getChannelData(j)[i];
          }
        }
        return { audio: out, sampleRate: _audioBuffer.sampleRate };
      }
      exports2.audioFileToArray = audioFileToArray;
    }
  });

  // ../../packages/web/dist/default-model-fetcher.js
  var require_default_model_fetcher = __commonJS({
    "../../packages/web/dist/default-model-fetcher.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.defaultModelFetcher = void 0;
      var defaultModelFetcher = (path) => {
        return fetch(path).then((model) => model.arrayBuffer());
      };
      exports2.defaultModelFetcher = defaultModelFetcher;
    }
  });

  // ../../packages/web/dist/asset-path.js
  var require_asset_path = __commonJS({
    "../../packages/web/dist/asset-path.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.assetPath = void 0;
      var isWeb = typeof window !== "undefined" && typeof window.document !== "undefined";
      var currentScript = isWeb ? window.document.currentScript : null;
      var basePath = "/";
      if (currentScript) {
        basePath = currentScript.src.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
      }
      var assetPath = (file) => {
        return basePath + file;
      };
      exports2.assetPath = assetPath;
    }
  });

  // ../../packages/web/dist/real-time-vad.js
  var require_real_time_vad = __commonJS({
    "../../packages/web/dist/real-time-vad.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod2) {
        if (mod2 && mod2.__esModule)
          return mod2;
        var result = {};
        if (mod2 != null) {
          for (var k in mod2)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod2, k))
              __createBinding(result, mod2, k);
        }
        __setModuleDefault(result, mod2);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.AudioNodeVAD = exports2.MicVAD = exports2.defaultRealTimeVADOptions = exports2.ort = void 0;
      var ortInstance = __importStar(require_ort_web_min());
      var _common_1 = require_common();
      var asset_path_1 = require_asset_path();
      var default_model_fetcher_1 = require_default_model_fetcher();
      exports2.ort = ortInstance;
      exports2.defaultRealTimeVADOptions = {
        ..._common_1.defaultFrameProcessorOptions,
        onFrameProcessed: (probabilities) => {
        },
        onVADMisfire: () => {
          _common_1.log.debug("VAD misfire");
        },
        onSpeechStart: () => {
          _common_1.log.debug("Detected speech start");
        },
        onSpeechEnd: () => {
          _common_1.log.debug("Detected speech end");
        },
        workletURL: (0, asset_path_1.assetPath)("vad.worklet.bundle.min.js"),
        modelURL: (0, asset_path_1.assetPath)("silero_vad.onnx"),
        modelFetcher: default_model_fetcher_1.defaultModelFetcher,
        stream: void 0,
        ortConfig: void 0
      };
      var MicVAD2 = class {
        static async new(options = {}) {
          const fullOptions = {
            ...exports2.defaultRealTimeVADOptions,
            ...options
          };
          (0, _common_1.validateOptions)(fullOptions);
          let stream;
          if (fullOptions.stream === void 0)
            stream = await navigator.mediaDevices.getUserMedia({
              audio: {
                ...fullOptions.additionalAudioConstraints,
                channelCount: 1,
                echoCancellation: true,
                autoGainControl: true,
                noiseSuppression: true
              }
            });
          else
            stream = fullOptions.stream;
          const audioContext = new AudioContext();
          const sourceNode = new MediaStreamAudioSourceNode(audioContext, {
            mediaStream: stream
          });
          const audioNodeVAD = await AudioNodeVAD.new(audioContext, fullOptions);
          audioNodeVAD.receive(sourceNode);
          return new MicVAD2(fullOptions, audioContext, stream, audioNodeVAD, sourceNode);
        }
        constructor(options, audioContext, stream, audioNodeVAD, sourceNode, listening = false) {
          this.options = options;
          this.audioContext = audioContext;
          this.stream = stream;
          this.audioNodeVAD = audioNodeVAD;
          this.sourceNode = sourceNode;
          this.listening = listening;
          this.pause = () => {
            this.audioNodeVAD.pause();
            this.listening = false;
          };
          this.start = () => {
            this.audioNodeVAD.start();
            this.listening = true;
          };
          this.destroy = () => {
            if (this.listening) {
              this.pause();
            }
            if (this.options.stream === void 0) {
              this.stream.getTracks().forEach((track) => track.stop());
            }
            this.sourceNode.disconnect();
            this.audioNodeVAD.destroy();
            this.audioContext.close();
          };
        }
      };
      exports2.MicVAD = MicVAD2;
      var AudioNodeVAD = class {
        static async new(ctx, options = {}) {
          const fullOptions = {
            ...exports2.defaultRealTimeVADOptions,
            ...options
          };
          (0, _common_1.validateOptions)(fullOptions);
          if (fullOptions.ortConfig !== void 0) {
            fullOptions.ortConfig(exports2.ort);
          }
          try {
            await ctx.audioWorklet.addModule(fullOptions.workletURL);
          } catch (e) {
            console.error(`Encountered an error while loading worklet. Please make sure the worklet vad.bundle.min.js included with @ricky0123/vad-web is available at the specified path:
        ${fullOptions.workletURL}
        If need be, you can customize the worklet file location using the \`workletURL\` option.`);
            throw e;
          }
          const vadNode = new AudioWorkletNode(ctx, "vad-helper-worklet", {
            processorOptions: {
              frameSamples: fullOptions.frameSamples
            }
          });
          let model;
          try {
            model = await _common_1.Silero.new(exports2.ort, () => fullOptions.modelFetcher(fullOptions.modelURL));
          } catch (e) {
            console.error(`Encountered an error while loading model file. Please make sure silero_vad.onnx, included with @ricky0123/vad-web, is available at the specified path:
      ${fullOptions.modelURL}
      If need be, you can customize the model file location using the \`modelsURL\` option.`);
            throw e;
          }
          const frameProcessor = new _common_1.FrameProcessor(model.process, model.reset_state, {
            frameSamples: fullOptions.frameSamples,
            positiveSpeechThreshold: fullOptions.positiveSpeechThreshold,
            negativeSpeechThreshold: fullOptions.negativeSpeechThreshold,
            redemptionFrames: fullOptions.redemptionFrames,
            preSpeechPadFrames: fullOptions.preSpeechPadFrames,
            minSpeechFrames: fullOptions.minSpeechFrames,
            submitUserSpeechOnPause: fullOptions.submitUserSpeechOnPause
          });
          const audioNodeVAD = new AudioNodeVAD(ctx, fullOptions, frameProcessor, vadNode);
          vadNode.port.onmessage = async (ev) => {
            switch (ev.data?.message) {
              case _common_1.Message.AudioFrame:
                const buffer = ev.data.data;
                const frame = new Float32Array(buffer);
                await audioNodeVAD.processFrame(frame);
                break;
              default:
                break;
            }
          };
          return audioNodeVAD;
        }
        constructor(ctx, options, frameProcessor, entryNode) {
          this.ctx = ctx;
          this.options = options;
          this.frameProcessor = frameProcessor;
          this.entryNode = entryNode;
          this.pause = () => {
            const ev = this.frameProcessor.pause();
            this.handleFrameProcessorEvent(ev);
          };
          this.start = () => {
            this.frameProcessor.resume();
          };
          this.receive = (node) => {
            node.connect(this.entryNode);
          };
          this.processFrame = async (frame) => {
            const ev = await this.frameProcessor.process(frame);
            this.handleFrameProcessorEvent(ev);
          };
          this.handleFrameProcessorEvent = (ev) => {
            if (ev.probs !== void 0) {
              this.options.onFrameProcessed(ev.probs, ev.frame);
            }
            switch (ev.msg) {
              case _common_1.Message.SpeechStart:
                this.options.onSpeechStart();
                break;
              case _common_1.Message.VADMisfire:
                this.options.onVADMisfire();
                break;
              case _common_1.Message.SpeechEnd:
                this.options.onSpeechEnd(ev.audio);
                break;
              default:
                break;
            }
          };
          this.destroy = () => {
            this.entryNode.port.postMessage({
              message: _common_1.Message.SpeechStop
            });
            this.entryNode.disconnect();
          };
        }
      };
      exports2.AudioNodeVAD = AudioNodeVAD;
    }
  });

  // ../../packages/web/dist/index.js
  var require_dist = __commonJS({
    "../../packages/web/dist/index.js"(exports2) {
      "use strict";
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod2) {
        if (mod2 && mod2.__esModule)
          return mod2;
        var result = {};
        if (mod2 != null) {
          for (var k in mod2)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod2, k))
              __createBinding(result, mod2, k);
        }
        __setModuleDefault(result, mod2);
        return result;
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.defaultRealTimeVADOptions = exports2.AudioNodeVAD = exports2.MicVAD = exports2.NonRealTimeVAD = exports2.Message = exports2.FrameProcessor = exports2.utils = exports2.defaultNonRealTimeVADOptions = void 0;
      var ort = __importStar(require_ort_web_min());
      var _common_1 = require_common();
      Object.defineProperty(exports2, "FrameProcessor", { enumerable: true, get: function() {
        return _common_1.FrameProcessor;
      } });
      Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
        return _common_1.Message;
      } });
      var utils_1 = require_utils2();
      var default_model_fetcher_1 = require_default_model_fetcher();
      var asset_path_1 = require_asset_path();
      exports2.defaultNonRealTimeVADOptions = {
        modelURL: (0, asset_path_1.assetPath)("silero_vad.onnx"),
        modelFetcher: default_model_fetcher_1.defaultModelFetcher
      };
      var NonRealTimeVAD = class extends _common_1.PlatformAgnosticNonRealTimeVAD {
        static async new(options = {}) {
          const { modelURL, modelFetcher } = {
            ...exports2.defaultNonRealTimeVADOptions,
            ...options
          };
          return await this._new(() => modelFetcher(modelURL), ort, options);
        }
      };
      exports2.NonRealTimeVAD = NonRealTimeVAD;
      exports2.utils = { audioFileToArray: utils_1.audioFileToArray, ..._common_1.utils };
      var real_time_vad_1 = require_real_time_vad();
      Object.defineProperty(exports2, "MicVAD", { enumerable: true, get: function() {
        return real_time_vad_1.MicVAD;
      } });
      Object.defineProperty(exports2, "AudioNodeVAD", { enumerable: true, get: function() {
        return real_time_vad_1.AudioNodeVAD;
      } });
      Object.defineProperty(exports2, "defaultRealTimeVADOptions", { enumerable: true, get: function() {
        return real_time_vad_1.defaultRealTimeVADOptions;
      } });
    }
  });

  // web-basic/index.js
  var vad = __toESM(require_dist());
  function getToggleButton() {
    return document.getElementById("toggleVAD");
  }
  async function main() {
    try {
      const myvad = await vad.MicVAD.new({
        onSpeechStart: () => {
          console.log("Speech start");
        },
        onSpeechEnd: (arr) => {
          console.log("Speech end");
          const wavBuffer = vad.utils.encodeWAV(arr);
          const base64 = vad.utils.arrayBufferToBase64(wavBuffer);
          const url = `data:audio/wav;base64,${base64}`;
          const el = addAudio(url);
          const speechList = document.getElementById("audio-list");
          speechList.prepend(el);
        }
      });
      window.myvad = myvad;
      getToggleButton().classList.remove("is-loading");
      window.toggleVAD = () => {
        if (myvad.listening === false) {
          console.log("run start vad");
          myvad.start();
          getToggleButton().textContent = "Stop VAD";
        } else {
          console.log("run pause vad");
          myvad.pause();
          getToggleButton().textContent = "Start VAD";
        }
      };
      window.toggleVAD();
      getToggleButton().disabled = false;
    } catch (e) {
      console.error("Failed:", e);
    }
    function addAudio(audioUrl) {
      const entry = document.createElement("li");
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = audioUrl;
      entry.appendChild(audio);
      return entry;
    }
  }
  main();
})();
/*! Bundled license information:

onnxruntime-common/dist/ort-common.node.js:
  (*!
   * ONNX Runtime Common v1.14.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort-web.min.js:
  (*!
  * ONNX Runtime Web v1.14.0
  * Copyright (c) Microsoft Corporation. All rights reserved.
  * Licensed under the MIT License.
  *)
*/
//# sourceMappingURL=index.js.map
