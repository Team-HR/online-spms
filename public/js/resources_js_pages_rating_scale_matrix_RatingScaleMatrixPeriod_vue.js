(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_rating_scale_matrix_RatingScaleMatrixPeriod_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DeleteConfirmation",
  props: {
    text: String,
    success_indicator_id: Number,
    //Success Indicator id
    rating_scale_matrix_id: Number //MFO id

  },
  data: function data() {
    return {};
  },
  watch: {},
  methods: {
    submitDelete: function submitDelete() {
      var _this = this;

      // console.log({
      //   success_indicator_id: this.success_indicator_id,
      //   rating_scale_matrix_id: this.rating_scale_matrix_id
      // });
      axios({
        method: "post",
        url: "/api/rsm/delete",
        data: {
          success_indicator_id: this.success_indicator_id,
          rating_scale_matrix_id: this.rating_scale_matrix_id
        }
      }).then(function (_ref) {
        var data = _ref.data;
        console.log(data);

        _this.$emit("deleteConfirmed");
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MfoEditor",
  props: {
    mfo: Object
  },
  data: function data() {
    return {
      el: null,
      code: "",
      mfoTitle: ""
    };
  },
  watch: {},
  methods: {
    clearSubfunction: function clearSubfunction() {
      this.code = "";
      this.mfoTitle = "";
    },
    saveSubFunction: function saveSubFunction() {
      var _this = this;

      // console.log(this.mfo.rating_scale_matrix_id);
      axios.post("/api/rsm/add_subfunction", {
        parent_id: this.mfo.rating_scale_matrix_id,
        code: this.code,
        "function": this.mfoTitle,
        period: this.mfo.period,
        year: this.mfo.year,
        department_id: this.mfo.department_id
      }).then(function (_ref) {
        var data = _ref.data;
        console.log("action added subfunction!: ", data);

        _this.$emit("addedSubFunction");
      })["catch"](function (_ref2) {
        var data = _ref2.response.data;
        alert(response);
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    /* 
            get this child modal element id
        */
    this.el = document.getElementById(this.$el.id);
    /*
            everytime the modal shows the data are fetched
        */
    // this.el.addEventListener("shown.bs.modal", (event) => {
    //   if (this.success_indicator_id > 0) {
    //     this.get_success_indicator();
    //   }
    // });

    /* 
    everytime the modal hides the data are cleared!
    */

    this.el.addEventListener("hidden.bs.modal", function (event) {
      _this2.code = '';
      _this2.mfoTitle = '';
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MfoParentEditor",
  data: function data() {
    return {
      el: null,
      mfo: {},
      mfoParents: [],
      mfoIdToTransfer: 0,
      year: 0,
      period: 0
    };
  },
  watch: {},
  methods: {
    getMfoParents: function getMfoParents() {
      var _this = this;

      axios.post("/api/rsm/getMfoParents", {
        mfoIdToTransfer: this.mfoIdToTransfer,
        year: this.year,
        period: this.period
      }).then(function (_ref) {
        var data = _ref.data;
        console.log("getMfoParents:", data);
        _this.mfoParents = data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    clearData: function clearData() {
      this.mfoParents = [];
    },
    moveMfoHere: function moveMfoHere(newMfoParentId) {
      var _this2 = this;

      axios.post("/api/rsm/changeMfoParent", {
        mfoIdToTransfer: this.mfoIdToTransfer,
        newParentId: newMfoParentId
      }).then(function (_ref2) {
        var data = _ref2.data;

        // console.log(data)
        _this2.getMfoParents();

        _this2.$emit("transferedMfo");
      })["catch"](function (err) {
        console.error(err);
      });
    },
    removeMfoParent: function removeMfoParent() {
      var _this3 = this;

      axios.post("/api/rsm/removeMfoParent", {
        mfoIdToTransfer: this.mfoIdToTransfer
      }).then(function (_ref3) {
        var data = _ref3.data;

        // console.log(data)
        _this3.getMfoParents();

        _this3.$emit("transferedMfo");
      })["catch"](function (err) {
        console.error(err);
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    /* 
        get this child modal element id
    */
    this.el = document.getElementById(this.$el.id);
    /*
        everytime the modal shows the data are fetched
    */

    this.el.addEventListener("show.bs.modal", function (event) {
      var button = event.relatedTarget;
      var mfos = button.getAttribute("data-bs-mfos");
      mfos = JSON.parse(mfos);
      _this4.mfoIdToTransfer = mfos.mfo.rating_scale_matrix_id;
      _this4.mfo = mfos.mfo;
      _this4.year = mfos.year;
      _this4.period = mfos.period;

      _this4.getMfoParents();
    });
    /* 
        everytime the modal hides the data are cleared!
    */

    this.el.addEventListener("hidden.bs.modal", function (event) {
      _this4.clearData();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.js?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.js?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SuccessIndicatorEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SuccessIndicatorEditor.vue */ "./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue");
/* harmony import */ var _components_DeleteConfirmation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DeleteConfirmation.vue */ "./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue");
/* harmony import */ var _components_MfoEditor_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MfoEditor.vue */ "./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue");
/* harmony import */ var _components_MfoParentEditor_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MfoParentEditor.vue */ "./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RatingScaleMatrix",
  components: {
    SuccessIndicatorEditor: _components_SuccessIndicatorEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DeleteConfirmation: _components_DeleteConfirmation_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MfoEditor: _components_MfoEditor_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MfoParentEditor: _components_MfoParentEditor_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      period: this.$route.params.period,
      year: this.$route.params.year,
      new_mfo: {
        category: "",
        title: ""
      },
      items: [],
      edit_mfo_item: {},
      edit_rating_scale_matrix_id: 0,
      edit_success_indicator_id: 0
    };
  },
  methods: {
    addSubFunction: function addSubFunction(edit_mfo_item) {
      this.edit_mfo_item = edit_mfo_item;
    },
    deleteMfo: function deleteMfo(rating_scale_matrix_id) {
      this.edit_rating_scale_matrix_id = rating_scale_matrix_id;
      this.edit_success_indicator_id = 0;
    },
    deleteSuccessIndicator: function deleteSuccessIndicator(id) {
      this.edit_rating_scale_matrix_id = 0;
      this.edit_success_indicator_id = id;
    },
    add_success_indicator: function add_success_indicator(rating_scale_matrix_id) {
      // console.log(item.rating_scale_matrix_id);
      this.edit_rating_scale_matrix_id = rating_scale_matrix_id;
      this.edit_success_indicator_id = 0;
    },
    edit_success_indicator: function edit_success_indicator(id) {
      this.edit_rating_scale_matrix_id = 0;
      this.edit_success_indicator_id = id; // console.log('si_id',id);
    },
    edit_mfo: function edit_mfo(item) {
      var item = JSON.parse(JSON.stringify(item));
      this.edit_mfo_item = {
        id: item.rating_scale_matrix_id,
        code: item.code,
        "function": item["function"]
      }; // console.log(this.edit_mfo_item);
    },
    save_edit_mfo: function save_edit_mfo() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("/api/rsm/save_edit_mfo", {
                  id: _this.edit_mfo_item.id,
                  code: _this.edit_mfo_item.code,
                  "function": _this.edit_mfo_item["function"]
                }).then(function (_ref) {
                  var data = _ref.data;
                  console.log("action submit form!: ", data);
                  var myModalEl = document.getElementById("editMfoModal");
                  var modal = bootstrap.Modal.getInstance(myModalEl); // Returns a Bootstrap modal instance

                  // Returns a Bootstrap modal instance
                  modal.hide();

                  _this.getItems().then(function () {});
                })["catch"](function (_ref2) {// alert(response);
                  // console.log(response);

                  var data = _ref2.response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    submit_new_mfo: function submit_new_mfo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("/api/rsm/add_new_mfo", {
                  new_mfo: _this2.new_mfo,
                  period: _this2.period,
                  year: _this2.year
                }).then(function (_ref3) {
                  var data = _ref3.data;

                  _this2.getItems().then(function () {
                    _this2.new_mfo.category = "";
                    _this2.new_mfo.title = "";
                  });
                })["catch"](function (_ref4) {
                  var data = _ref4.response.data;
                  alert(data.message);
                  console.log(data);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getItems: function getItems() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("/api/rsm", {
                  params: {
                    period: _this3.period,
                    year: _this3.year
                  }
                }).then(function (_ref5) {
                  var data = _ref5.data;
                  _this3.items = JSON.parse(JSON.stringify(data));
                })["catch"](function (_ref6) {
                  var data = _ref6.response.data;
                  alert(data.message); // console.log(data);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    set_text_indent: function set_text_indent(order_number_mfo) {
      var tabs = "";
      if (!order_number_mfo) return tabs;
      tabs = "margin-left:" + 15 * order_number_mfo + "px;";
      return tabs;
    }
  },
  mounted: function mounted() {
    this.getItems(); // console.log(this.year);
    // console.log(this.period);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.js?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SuccessIndicatorEditor",
  props: {
    title: String,
    success_indicator_id: Number,
    rating_scale_matrix_id: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor

  },
  data: function data() {
    return {
      el: null,
      //this element component
      employeeSearch: "",
      employees: [],
      success_indicator: "",
      quality: [],
      efficiency: [],
      timeliness: [],
      incumbents: []
    };
  },
  watch: {
    // success_indicator_id(newValue) {
    //     // console.log("success_indicator_id", newValue)
    //     this.success_indicator = ""
    //     this.quality = []
    //     this.efficiency = []
    //     this.timeliness = []
    //     this.incumbents = []
    //     if (newValue > 0) {
    //         this.get_success_indicator()
    //     }
    // },
    // rating_scale_matrix_id(newValue) {
    //   this.success_indicator = "";
    //   this.quality = [];
    //   this.efficiency = [];
    //   this.timeliness = [];
    //   this.incumbents = [];
    // },
    employeeSearch: function employeeSearch(newValue, oldValue) {
      // console.log(newValue);
      if (newValue == "") {
        this.employees = [];
      } else this.get_employees_list();
    }
  },
  methods: {
    get_success_indicator: function get_success_indicator() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.success_indicator = "";
                _this.quality = [];
                _this.efficiency = [];
                _this.timeliness = [];
                _this.incumbents = [];
                _context.next = 7;
                return axios.get("/api/rsm/get_success_indicator", {
                  params: {
                    id: _this.success_indicator_id
                  }
                }).then(function (_ref) {
                  var data = _ref.data;
                  _this.success_indicator = data.success_indicator;
                  /* remap incumbent array */

                  /* remap incumbent array */
                  var incumbents = JSON.parse(JSON.stringify(data.incumbents));
                  incumbents.forEach(function (element) {
                    _this.incumbents.push({
                      id: element.employee_id,
                      full_name: element.full_name
                    });
                  });
                  /* sort incumbents by full_name ascending after push*/

                  /* sort incumbents by full_name ascending after push*/
                  _this.incumbents.sort(function (x, y) {
                    var a = x.full_name.toUpperCase(),
                        b = y.full_name.toUpperCase();
                    return a == b ? 0 : a > b ? 1 : -1;
                  });
                  /* quality parsing */


                  /* quality parsing */
                  if (data.quality) {
                    var quality = JSON.parse(JSON.stringify(data.quality));
                    quality.forEach(function (element) {
                      // this.quality[element.score] = element.desc;
                      _this.quality.push(element);
                    });
                  }
                  /* efficiency parsing */


                  /* efficiency parsing */
                  if (data.efficiency) {
                    var efficiency = JSON.parse(JSON.stringify(data.efficiency));
                    efficiency.forEach(function (element) {
                      // this.efficiency[element.score - 1] = element.desc;
                      _this.efficiency.push(element);
                    });
                  } // /* timeliness parsing */


                  // /* timeliness parsing */
                  if (data.timeliness) {
                    var timeliness = JSON.parse(JSON.stringify(data.timeliness));
                    timeliness.forEach(function (element) {
                      // this.timeliness[element.score - 1] = element.desc;
                      _this.timeliness.push(element);
                    });
                  } // console.log("/api/rsm/get_success_indicator", data);

                })["catch"](function (err) {
                  console.error(err);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    submit_form: function submit_form() {
      var _this2 = this;

      // var payload = {
      //     rating_scale_matrix_id: this.rating_scale_matrix_id,
      //     success_indicator_id: this.success_indicator_id,
      //     success_indicator: this.success_indicator,
      //     quality: this.quality,
      //     efficiency: this.efficiency,
      //     timeliness: this.timeliness,
      //     incumbents: this.incumbents,
      // };
      // console.log("submitted payload:", payload);
      axios({
        method: "post",
        url: "/api/rsm/save_success_indicator",
        data: {
          id: this.success_indicator_id,
          rating_scale_matrix_id: this.rating_scale_matrix_id,
          success_indicator: this.success_indicator,
          quality: this.quality,
          efficiency: this.efficiency,
          timeliness: this.timeliness,
          incumbents: this.incumbents
        }
      }).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$emit("submittedForm");
      });
    },

    /* 
      adds the selected 
      employee to list of incumbents
    */
    add_to_incumbents: function add_to_incumbents(i) {
      var employee = this.employees[i];
      this.employees.splice(i);
      this.incumbents.push(employee);
      /* sort incumbents by full_name ascending after push*/

      this.incumbents.sort(function (x, y) {
        var a = x.full_name.toUpperCase(),
            b = y.full_name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
      this.employeeSearch = "";
    },

    /* 
      remove the selected
      employee from list of incumbents
    */
    remove_from_incumbent: function remove_from_incumbent(i) {
      this.incumbents.splice(i, 1);
      /* for search to work employeeSearch must be empty */

      this.employeeSearch = "";
    },

    /* 
      gets list of available
      employees from db except the employees
      existing in list of incumbents
    */
    get_employees_list: function get_employees_list() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("/api/employees", {
                  name: _this3.employeeSearch,
                  excepts: _this3.incumbents
                }).then(function (_ref3) {
                  var data = _ref3.data;
                  // console.log(data);
                  _this3.employees = JSON.parse(JSON.stringify(data));
                })["catch"](function (err) {
                  console.error(err);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    /* 
        get this child modal element id
    */
    this.el = document.getElementById(this.$el.id);
    /*
        everytime the modal shows the data are fetched
    */

    this.el.addEventListener('shown.bs.modal', function (event) {
      if (_this4.success_indicator_id > 0) {
        _this4.get_success_indicator();
      }
    });
    /* 
        everytime the modal hides the data are cleared!
    */

    this.el.addEventListener('hidden.bs.modal', function (event) {
      _this4.success_indicator = '';
      _this4.quality = [];
      _this4.efficiency = [];
      _this4.timeliness = [];
      _this4.incumbents = [];

      var accordionButton = _this4.el.getElementsByClassName("accordion-button");

      for (var index = 0; index < accordionButton.length; index++) {
        var element = accordionButton[index];
        element.classList.remove("collapsed");
        element.classList.add("collapsed"); // console.log(element);
      }

      var accordionCollapse = _this4.el.getElementsByClassName("accordion-collapse");

      for (var _index = 0; _index < accordionCollapse.length; _index++) {
        var _element = accordionCollapse[_index];

        _element.classList.remove("show");
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatingScaleMatrixPeriod_vue_vue_type_template_id_2f0786df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df& */ "./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df&");
/* harmony import */ var _RatingScaleMatrixPeriod_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingScaleMatrixPeriod.js?vue&type=script&lang=js& */ "./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.js?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RatingScaleMatrixPeriod_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RatingScaleMatrixPeriod_vue_vue_type_template_id_2f0786df___WEBPACK_IMPORTED_MODULE_0__.render,
  _RatingScaleMatrixPeriod_vue_vue_type_template_id_2f0786df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteConfirmation_vue_vue_type_template_id_61c79609___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteConfirmation.vue?vue&type=template&id=61c79609& */ "./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=template&id=61c79609&");
/* harmony import */ var _DeleteConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteConfirmation.vue?vue&type=script&lang=js& */ "./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteConfirmation_vue_vue_type_template_id_61c79609___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeleteConfirmation_vue_vue_type_template_id_61c79609___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MfoEditor_vue_vue_type_template_id_7c07530a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MfoEditor.vue?vue&type=template&id=7c07530a& */ "./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=template&id=7c07530a&");
/* harmony import */ var _MfoEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MfoEditor.vue?vue&type=script&lang=js& */ "./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MfoEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MfoEditor_vue_vue_type_template_id_7c07530a___WEBPACK_IMPORTED_MODULE_0__.render,
  _MfoEditor_vue_vue_type_template_id_7c07530a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/rating_scale_matrix/components/MfoEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MfoParentEditor_vue_vue_type_template_id_1263f394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MfoParentEditor.vue?vue&type=template&id=1263f394& */ "./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=template&id=1263f394&");
/* harmony import */ var _MfoParentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MfoParentEditor.vue?vue&type=script&lang=js& */ "./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MfoParentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MfoParentEditor_vue_vue_type_template_id_1263f394___WEBPACK_IMPORTED_MODULE_0__.render,
  _MfoParentEditor_vue_vue_type_template_id_1263f394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SuccessIndicatorEditor_vue_vue_type_template_id_0dd00d3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c& */ "./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c&");
/* harmony import */ var _SuccessIndicatorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuccessIndicatorEditor.js?vue&type=script&lang=js& */ "./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.js?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuccessIndicatorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuccessIndicatorEditor_vue_vue_type_template_id_0dd00d3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _SuccessIndicatorEditor_vue_vue_type_template_id_0dd00d3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.js?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.js?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_RatingScaleMatrixPeriod_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./RatingScaleMatrixPeriod.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.js?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_RatingScaleMatrixPeriod_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_SuccessIndicatorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./SuccessIndicatorEditor.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.js?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_SuccessIndicatorEditor_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteConfirmation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MfoEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoParentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MfoParentEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoParentEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingScaleMatrixPeriod_vue_vue_type_template_id_2f0786df___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingScaleMatrixPeriod_vue_vue_type_template_id_2f0786df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatingScaleMatrixPeriod_vue_vue_type_template_id_2f0786df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df&");


/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=template&id=61c79609&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=template&id=61c79609& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteConfirmation_vue_vue_type_template_id_61c79609___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteConfirmation_vue_vue_type_template_id_61c79609___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteConfirmation_vue_vue_type_template_id_61c79609___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteConfirmation.vue?vue&type=template&id=61c79609& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=template&id=61c79609&");


/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=template&id=7c07530a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=template&id=7c07530a& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoEditor_vue_vue_type_template_id_7c07530a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoEditor_vue_vue_type_template_id_7c07530a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoEditor_vue_vue_type_template_id_7c07530a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MfoEditor.vue?vue&type=template&id=7c07530a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=template&id=7c07530a&");


/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=template&id=1263f394&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=template&id=1263f394& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoParentEditor_vue_vue_type_template_id_1263f394___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoParentEditor_vue_vue_type_template_id_1263f394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MfoParentEditor_vue_vue_type_template_id_1263f394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MfoParentEditor.vue?vue&type=template&id=1263f394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=template&id=1263f394&");


/***/ }),

/***/ "./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessIndicatorEditor_vue_vue_type_template_id_0dd00d3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessIndicatorEditor_vue_vue_type_template_id_0dd00d3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuccessIndicatorEditor_vue_vue_type_template_id_0dd00d3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue?vue&type=template&id=2f0786df& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("SuccessIndicatorEditor", {
        attrs: {
          id: "successIndicatorEditor",
          success_indicator_id: _vm.edit_success_indicator_id,
          rating_scale_matrix_id: _vm.edit_rating_scale_matrix_id,
        },
        on: {
          submittedForm: function ($event) {
            return _vm.getItems()
          },
        },
      }),
      _vm._v(" "),
      _c("DeleteConfirmation", {
        attrs: {
          id: "deleteConfirmation",
          text: "the item",
          success_indicator_id: _vm.edit_success_indicator_id,
          rating_scale_matrix_id: _vm.edit_rating_scale_matrix_id,
        },
        on: {
          deleteConfirmed: function ($event) {
            return _vm.getItems()
          },
        },
      }),
      _vm._v(" "),
      _c("MfoEditor", {
        attrs: { id: "mfoEditor", mfo: _vm.edit_mfo_item },
        on: {
          addedSubFunction: function ($event) {
            return _vm.getItems()
          },
        },
      }),
      _vm._v(" "),
      _c("MfoParentEditor", {
        attrs: { id: "mfoParentEditor" },
        on: {
          transferedMfo: function ($event) {
            return _vm.getItems()
          },
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            "data-bs-backdrop": "static",
            "data-bs-keyboard": "false",
            id: "editMfoModal",
            tabindex: "-1",
          },
        },
        [
          _c(
            "form",
            {
              staticClass: "modal-dialog modal-lg",
              attrs: { id: "form_edit_mfo" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.save_edit_mfo()
                },
              },
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "row g-2" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _c("div", { staticClass: "form-floating" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.edit_mfo_item.code,
                              expression: "edit_mfo_item.code",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "category_number",
                            placeholder: "Category Number",
                          },
                          domProps: { value: _vm.edit_mfo_item.code },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.edit_mfo_item,
                                "code",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "category_number" } }, [
                          _vm._v("Category Number:"),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-9" }, [
                      _c("div", { staticClass: "form-floating" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.edit_mfo_item.function,
                              expression: "edit_mfo_item.function",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "mfo_title",
                            placeholder: "Title",
                          },
                          domProps: { value: _vm.edit_mfo_item.function },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.edit_mfo_item,
                                "function",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "mfo_title" } }, [
                          _vm._v("MFO/PAP Title:"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(1),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card shadow-sm" }, [
            _c("div", { staticClass: "card-header text-center" }, [
              _c("h3", [_vm._v("Rating Scale Matrix")]),
              _vm._v(" "),
              _c("h5", { staticClass: "text-red" }, [
                _vm._v("\n            " + _vm._s() + "\n          "),
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "text-red" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(
                      (_vm.period == 1 ? "January-June" : "July-December") +
                        ", " +
                        _vm.year
                    ) +
                    "\n          "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table table-sm table-bordered" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.items.length < 1 ? _c("tr", [_vm._m(3)]) : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.items, function (item, i) {
                      return _c(
                        "tr",
                        { key: i },
                        [
                          item.code
                            ? _c(
                                "td",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { rowspan: item.rowspan },
                                },
                                [
                                  _c("span", { staticClass: "dropdown" }, [
                                    _vm._m(4, true),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        staticClass: "dropdown-menu shadow-lg",
                                        attrs: {
                                          "aria-labelledby": "dropdownMenu2",
                                        },
                                      },
                                      [
                                        _c("li", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                type: "button",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target":
                                                  "#editMfoModal",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.edit_mfo(item)
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa-solid fa-pen-to-square",
                                              }),
                                              _vm._v(
                                                "\n                          Edit MFO/PAP\n                        "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(5, true),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                type: "button",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target":
                                                  "#successIndicatorEditor",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.add_success_indicator(
                                                    item.rating_scale_matrix_id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa-solid fa-square-plus",
                                              }),
                                              _vm._v(
                                                "\n                          Add Success Indicator\n                        "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(6, true),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                type: "button",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target":
                                                  "#mfoParentEditor",
                                                "data-bs-mfos": JSON.stringify({
                                                  mfo: item,
                                                  year: _vm.year,
                                                  period: _vm.period,
                                                }),
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa-solid fa-layer-group",
                                              }),
                                              _vm._v(
                                                "\n                          Move MFO/PAP\n                        "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(7, true),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                type: "button",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target": "#mfoEditor",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.addSubFunction(
                                                    item
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa-solid fa-turn-down",
                                              }),
                                              _vm._v(
                                                "\n                          Add Subfunction\n                        "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _vm._m(8, true),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-item text-danger",
                                              attrs: {
                                                href: "#",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target":
                                                  "#deleteConfirmation",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.deleteMfo(
                                                    item.rating_scale_matrix_id
                                                  )
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa-solid fa-trash-can",
                                              }),
                                              _vm._v(
                                                "\n                          Delete MFO/PAP\n                        "
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          item.code
                            ? _c(
                                "td",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: {
                                    rowspan: item.rowspan,
                                    colspan: !item.success_indicator ? "9" : "",
                                  },
                                },
                                [
                                  _c(
                                    "span",
                                    { style: _vm.set_text_indent(item.indent) },
                                    [
                                      _vm._v(
                                        "\n                    " +
                                          _vm._s(
                                            item.code + " " + item.function
                                          ) +
                                          "\n                  "
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          item.success_indicator
                            ? [
                                _c(
                                  "td",
                                  {
                                    staticStyle: { "vertical-align": "middle" },
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(item.success_indicator) +
                                        "\n                  "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  _vm._l(
                                    item.performance_measures,
                                    function (performance_measure, pf) {
                                      return _c("span", { key: pf }, [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(performance_measure) +
                                            "\n                      "
                                        ),
                                        pf + 1 !==
                                        item.performance_measures.length
                                          ? _c("br")
                                          : _vm._e(),
                                      ])
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "white-space": "nowrap" } },
                                  _vm._l(item.quality, function (quality, q) {
                                    return _c("span", { key: q }, [
                                      item.quality[5 - q - 1]
                                        ? _c("div", [
                                            _c("b", [_vm._v(_vm._s(5 - q))]),
                                            _vm._v(
                                              " - " +
                                                _vm._s(
                                                  item.quality[5 - q - 1]
                                                ) +
                                                "\n                        "
                                            ),
                                            _c("br"),
                                          ])
                                        : _vm._e(),
                                    ])
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "white-space": "nowrap" } },
                                  _vm._l(
                                    item.efficiency,
                                    function (efficiency, e) {
                                      return _c("span", { key: e }, [
                                        item.efficiency[5 - e - 1]
                                          ? _c("div", [
                                              _c("b", [_vm._v(_vm._s(5 - e))]),
                                              _vm._v(
                                                " - " +
                                                  _vm._s(
                                                    item.efficiency[5 - e - 1]
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("br"),
                                            ])
                                          : _vm._e(),
                                      ])
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticStyle: { "white-space": "nowrap" } },
                                  _vm._l(
                                    item.timeliness,
                                    function (timeliness, t) {
                                      return _c("span", { key: t }, [
                                        item.timeliness[5 - t - 1]
                                          ? _c("div", [
                                              _c("b", [_vm._v(_vm._s(5 - t))]),
                                              _vm._v(
                                                " - " +
                                                  _vm._s(
                                                    item.timeliness[5 - t - 1]
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("br"),
                                            ])
                                          : _vm._e(),
                                      ])
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { attrs: { nowrap: "" } },
                                  _vm._l(
                                    item.incumbents,
                                    function (incumbent, i) {
                                      return _c("div", { key: i }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "btn p-0 m-0",
                                            attrs: {
                                              href: "javascript:void(0)",
                                            },
                                          },
                                          [_vm._v(_vm._s(incumbent.full_name))]
                                        ),
                                        _vm._v(" "),
                                        i + 1 !== item.incumbents.length
                                          ? _c("br")
                                          : _vm._e(),
                                      ])
                                    }
                                  ),
                                  0
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticStyle: { "vertical-align": "middle" },
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm text-success",
                                        attrs: {
                                          title: "Edit success indicator",
                                          "data-bs-toggle": "modal",
                                          "data-bs-target":
                                            "#successIndicatorEditor",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.edit_success_indicator(
                                              item.id
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa-solid fa-pen-to-square text-success",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticStyle: { "vertical-align": "middle" },
                                  },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm text-danger",
                                        attrs: {
                                          title: "Delete success indicator",
                                          "data-bs-toggle": "modal",
                                          "data-bs-target":
                                            "#deleteConfirmation",
                                        },
                                        on: {
                                          click: function ($event) {
                                            return _vm.deleteSuccessIndicator(
                                              item.id
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa-solid fa-eraser text-danger",
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            : _vm._e(),
                        ],
                        2
                      )
                    }),
                  ],
                  2
                ),
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "row g-3",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit_new_mfo()
                    },
                  },
                },
                [
                  _c("div", { staticClass: "col-auto" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.new_mfo.category,
                          expression: "new_mfo.category",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Category Number:" },
                      domProps: { value: _vm.new_mfo.category },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.new_mfo, "category", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-auto" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.new_mfo.title,
                          expression: "new_mfo.title",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "MFO/PAP Title" },
                      domProps: { value: _vm.new_mfo.title },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.new_mfo, "title", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _vm._m(9),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Edit MFO/PAP")]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n            Cancel\n          ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save changes")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-primary" }, [
      _c(
        "tr",
        {
          staticClass: "text-center",
          staticStyle: { "vertical-align": "middle" },
        },
        [
          _c("th", { attrs: { scope: "col", rowspan: "2" } }),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col", rowspan: "2" } }, [
            _vm._v("MFO/PAP"),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col", rowspan: "2" } }, [
            _vm._v("SUCCESS INDICATOR"),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col", rowspan: "2" } }, [
            _vm._v("PERFORMANCE MEASURE"),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col", colspan: "3" } }, [
            _vm._v("RATING"),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col", rowspan: "2" } }, [
            _vm._v("IN-CHARGE"),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col", rowspan: "2", colspan: "2" } }, [
            _vm._v("OPTIONS"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "tr",
        {
          staticClass: "text-center",
          staticStyle: { "vertical-align": "middle" },
        },
        [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("QUALITY")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("EFFICIENCY")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("TIMELINESS")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "td",
      { staticStyle: { "text-align": "center" }, attrs: { colspan: "9" } },
      [
        _c("h4", { staticClass: "text-secondary" }, [
          _vm._v("No records found!"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "\n                        btn btn-sm btn-light\n                        dropdown-toggle\n                        text-success\n                      ",
        attrs: {
          type: "button",
          id: "dropdownMenu2",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fa-solid fa-gear" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Add")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=template&id=61c79609&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/DeleteConfirmation.vue?vue&type=template&id=61c79609& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal fade", attrs: { tabindex: "-1" } }, [
    _c("div", { staticClass: "modal-dialog modal-sm" }, [
      _c("div", { staticClass: "modal-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c("p", [
            _vm._v("Are you sure you want to delete " + _vm._s(_vm.text) + "?"),
          ]),
          _vm._v(" "),
          _c("form", {
            attrs: { id: "confirmDeleteForm" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.submitDelete()
              },
            },
          }),
        ]),
        _vm._v(" "),
        _vm._m(1),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Confirm Deletion")]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n          Cancel\n        ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: {
            form: "confirmDeleteForm",
            type: "submit",
            "data-bs-dismiss": "modal",
          },
        },
        [_vm._v("\n          Confirm\n        ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=template&id=7c07530a&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoEditor.vue?vue&type=template&id=7c07530a& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        tabindex: "-1",
      },
    },
    [
      _c(
        "form",
        {
          staticClass: "modal-dialog modal-lg",
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.saveSubFunction()
            },
          },
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c("h5", { staticClass: "modal-title" }, [
                _c("i", { staticClass: "fa-solid fa-arrow-turn-down" }),
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.mfo.code) +
                    "\n          " +
                    _vm._s(_vm.mfo.function) +
                    "\n          "
                ),
                _c("i", { staticClass: "text-success" }, [
                  _vm._v("(Add Subfunction)"),
                ]),
              ]),
              _vm._v(" "),
              _c("button", {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row g-2" }, [
                _c("div", { staticClass: "col-3" }, [
                  _c("div", { staticClass: "form-floating" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.code,
                          expression: "code",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "category_number",
                        placeholder: "Category Number",
                      },
                      domProps: { value: _vm.code },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.code = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "category_number" } }, [
                      _vm._v("Category Number:"),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _c("div", { staticClass: "form-floating" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.mfoTitle,
                          expression: "mfoTitle",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "mfo_title",
                        placeholder: "Title",
                      },
                      domProps: { value: _vm.mfoTitle },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.mfoTitle = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "mfo_title" } }, [
                      _vm._v("MFO/PAP Title:"),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(0),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n          Cancel\n        ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "submit", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n          Save changes\n        ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=template&id=1263f394&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/MfoParentEditor.vue?vue&type=template&id=1263f394& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal fade", attrs: { tabindex: "-1" } }, [
    _c("div", { staticClass: "modal-dialog modal-lg" }, [
      _c("div", { staticClass: "modal-content" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary me-3",
              on: {
                click: function ($event) {
                  return _vm.removeMfoParent()
                },
              },
            },
            [_vm._v("\n          Set as a Main MFO/PAP\n        ")]
          ),
          _vm._v(" "),
          _c("span", [
            _c("strong", [
              _vm._v(_vm._s(_vm.mfo.code) + " " + _vm._s(_vm.mfo.function)),
            ]),
          ]),
          _vm._v(" "),
          _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.mfoParents, function (mfo, m) {
                return _c(
                  "tr",
                  {
                    key: m,
                    class: mfo.isToBeTransfered ? "bg-primary text-white" : "",
                  },
                  [
                    _c("td", [
                      !mfo.disabled
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary text-white",
                              on: {
                                click: function ($event) {
                                  return _vm.moveMfoHere(mfo.id)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n                  Move here\n                  "
                              ),
                              _c("i", {
                                staticClass: "fa-solid fa-arrow-turn-down",
                              }),
                            ]
                          )
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "span",
                        { style: "margin-left:" + mfo.indent * 15 + "px;" },
                        [_vm._v(_vm._s(mfo.code) + " " + _vm._s(mfo.function))]
                      ),
                    ]),
                  ]
                )
              }),
              0
            ),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(2),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _c("i", { staticClass: "fas fa-layer-group" }),
        _vm._v("\n          Move MFO/PAP\n        "),
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th"), _vm._v(" "), _c("th")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n          Close\n        ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/rating_scale_matrix/components/SuccessIndicatorEditor.vue?vue&type=template&id=0dd00d3c& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        tabindex: "-1",
      },
    },
    [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "form",
              {
                attrs: { id: "form_edit_mfo" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.submit_form()
                  },
                },
              },
              [
                _c("div", { staticClass: "row g-2 mb-2" }, [
                  _c("div", { staticClass: "col" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.success_indicator,
                          expression: "success_indicator",
                        },
                      ],
                      staticClass: "form-control",
                      staticStyle: { height: "100px" },
                      attrs: { id: "success_indicator", placeholder: "...." },
                      domProps: { value: _vm.success_indicator },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.success_indicator = $event.target.value
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "accordion accordion-flush pfmeasures",
                    attrs: { id: "accordionPanelsStayOpenExample" },
                  },
                  [
                    _c("div", { staticClass: "accordion-item" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "accordion-collapse collapse show",
                          attrs: {
                            id: "panelsStayOpen-collapseOne",
                            "aria-labelledby": "panelsStayOpen-headingOne",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "accordion-body" },
                            _vm._l(5, function (n) {
                              return _c(
                                "div",
                                {
                                  key: n,
                                  staticClass:
                                    "input-group input-group-sm mb-1",
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "input-group-text",
                                      attrs: { id: "inputGroup-sizing-sm" },
                                    },
                                    [_vm._v(_vm._s(5 - (n - 1)) + "=")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.quality[5 - (n - 1) - 1],
                                        expression: "quality[5 - (n - 1) - 1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      "aria-label": "Sizing example input",
                                      "aria-describedby":
                                        "inputGroup-sizing-sm",
                                    },
                                    domProps: {
                                      value: _vm.quality[5 - (n - 1) - 1],
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.quality,
                                          5 - (n - 1) - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]
                              )
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "accordion-item" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "accordion-collapse collapse show",
                          attrs: {
                            id: "panelsStayOpen-collapseTwo",
                            "aria-labelledby": "panelsStayOpen-headingTwo",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "accordion-body" },
                            _vm._l(5, function (n) {
                              return _c(
                                "div",
                                {
                                  key: n,
                                  staticClass:
                                    "input-group input-group-sm mb-1",
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "input-group-text",
                                      attrs: { id: "inputGroup-sizing-sm" },
                                    },
                                    [_vm._v(_vm._s(5 - (n - 1)) + "=")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.efficiency[5 - (n - 1) - 1],
                                        expression:
                                          "efficiency[5 - (n - 1) - 1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      "aria-label": "Sizing example input",
                                      "aria-describedby":
                                        "inputGroup-sizing-sm",
                                    },
                                    domProps: {
                                      value: _vm.efficiency[5 - (n - 1) - 1],
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.efficiency,
                                          5 - (n - 1) - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]
                              )
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "accordion-item" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "accordion-collapse collapse show",
                          attrs: {
                            id: "panelsStayOpen-collapseThree",
                            "aria-labelledby": "panelsStayOpen-headingThree",
                          },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "accordion-body" },
                            _vm._l(5, function (n) {
                              return _c(
                                "div",
                                {
                                  key: n,
                                  staticClass:
                                    "input-group input-group-sm mb-1",
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "input-group-text",
                                      attrs: { id: "inputGroup-sizing-sm" },
                                    },
                                    [_vm._v(_vm._s(5 - (n - 1)) + "=")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.timeliness[5 - (n - 1) - 1],
                                        expression:
                                          "timeliness[5 - (n - 1) - 1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      "aria-label": "Sizing example input",
                                      "aria-describedby":
                                        "inputGroup-sizing-sm",
                                    },
                                    domProps: {
                                      value: _vm.timeliness[5 - (n - 1) - 1],
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.timeliness,
                                          5 - (n - 1) - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]
                              )
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2" }, [
                  _c("div", { staticClass: "accordion" }, [
                    _c("div", { staticClass: "accordion-item" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "accordion-collapse collapse",
                          attrs: { id: "assignEmployeePanel" },
                        },
                        [
                          _c("div", { staticClass: "accordion-body" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.employeeSearch,
                                  expression: "employeeSearch",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                width: "500",
                                placeholder:
                                  "Search name of employee to add here...",
                              },
                              domProps: { value: _vm.employeeSearch },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.employeeSearch = $event.target.value
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "list-group mt-2" },
                              [
                                _vm.employees.length == 0
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "list-group-item list-group-item-action",
                                        staticStyle: { "text-align": "center" },
                                        attrs: { type: "button", disabled: "" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        ----\n                      "
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm._l(_vm.employees, function (employee, e) {
                                  return _c(
                                    "button",
                                    {
                                      key: e,
                                      staticClass:
                                        "list-group-item list-group-item-action",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.add_to_incumbents(e)
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(employee.full_name) +
                                          "\n                        "
                                      ),
                                      _vm._m(8, true),
                                    ]
                                  )
                                }),
                              ],
                              2
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "list-group my-2" },
                    [
                      _vm.incumbents.length == 0
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "list-group-item list-group-item-action",
                              staticStyle: { "text-align": "center" },
                              attrs: { type: "button", disabled: "" },
                            },
                            [
                              _vm._v(
                                "\n                -- None --\n              "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.incumbents, function (incumbent, i) {
                        return _c(
                          "div",
                          { key: i, staticClass: "list-group-item" },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn text-danger btn-light btn-sm me-2",
                                on: {
                                  click: function ($event) {
                                    return _vm.remove_from_incumbent(i)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                  Remove\n                "
                                ),
                              ]
                            ),
                            _vm._v(
                              "\n                " +
                                _vm._s(incumbent.full_name) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm._m(9),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _vm._v("Add New Success Indicator"),
      ]),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "success_indicator" } },
      [
        _c("i", { staticClass: "fa-solid fa-trophy" }),
        _vm._v(" Success Indicator:"),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _c("i", { staticClass: "fa-solid fa-pen-ruler" }),
      _vm._v(" Performance\n            Measures:"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      {
        staticClass: "accordion-header",
        attrs: { id: "panelsStayOpen-headingOne" },
      },
      [
        _c(
          "button",
          {
            staticClass: "accordion-button",
            attrs: {
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#panelsStayOpen-collapseOne",
              "aria-expanded": "true",
              "aria-controls": "panelsStayOpen-collapseOne",
            },
          },
          [_vm._v("\n                  Quality\n                ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      {
        staticClass: "accordion-header",
        attrs: { id: "panelsStayOpen-headingTwo" },
      },
      [
        _c(
          "button",
          {
            staticClass: "accordion-button",
            attrs: {
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#panelsStayOpen-collapseTwo",
              "aria-expanded": "true",
              "aria-controls": "panelsStayOpen-collapseTwo",
            },
          },
          [_vm._v("\n                  Efficiency\n                ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      {
        staticClass: "accordion-header",
        attrs: { id: "panelsStayOpen-headingThree" },
      },
      [
        _c(
          "button",
          {
            staticClass: "accordion-button",
            attrs: {
              type: "button",
              "data-bs-toggle": "collapse",
              "data-bs-target": "#panelsStayOpen-collapseThree",
              "aria-expanded": "true",
              "aria-controls": "panelsStayOpen-collapseThree",
            },
          },
          [_vm._v("\n                  Timeliness\n                ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _c("i", { staticClass: "fa-solid fa-user-tag" }),
      _vm._v(" Assigned Employees:"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "accordion-header" }, [
      _c(
        "button",
        {
          staticClass: "accordion-button collapsed",
          attrs: {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#assignEmployeePanel",
          },
        },
        [
          _c("i", { staticClass: "fa-solid fa-plus me-2" }),
          _vm._v("\n                    Add\n                    "),
          _c("i", { staticStyle: { color: "grey" } }, [
            _vm._v("(Click here to add)"),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "text-success" }, [
      _c("i", [_vm._v("(Click to add)")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_vm._v("\n          Cancel\n        ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            form: "form_edit_mfo",
            type: "submit",
            "data-bs-dismiss": "modal",
          },
        },
        [_vm._v("\n          Save changes\n        ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);