"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */













const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
};
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
const SLOTS = {
  action: "action"
};

const inputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-app-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const Input = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalInputFocus = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputFocus", 6);
    this.calciteInternalInputBlur = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalInputBlur", 6);
    this.calciteInputInput = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputInput", 7);
    this.calciteInputChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputChange", 6);
    /** keep track of the rendered child type */
    this.childElType = "input";
    this.previousValueOrigin = "initial";
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_8__.c)("mutation", () => this.setDisabledAction());
    this.userChangedValue = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter" && !event.defaultPrevented) {
        if ((0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.s)(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputBlurHandler = () => {
      this.calciteInternalInputBlur.emit();
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      if (this.disabled) {
        return;
      }
      const slottedActionEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, "action");
      if (event.target !== slottedActionEl) {
        this.setFocus();
      }
    };
    this.inputFocusHandler = () => {
      this.calciteInternalInputFocus.emit();
    };
    this.inputChangeHandler = () => {
      if (this.type === "file") {
        this.files = this.childEl.files;
      }
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value
      });
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const delocalizedValue = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setValue({
          nativeEvent,
          origin: "user",
          value: (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.p)(delocalizedValue)
        });
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue({
          nativeEvent,
          origin: "user",
          value: delocalizedValue
        });
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
        event.preventDefault();
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ..._key_3389d870_js__WEBPACK_IMPORTED_MODULE_4__.n,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.emitChangeIfUserModified();
        }
        return;
      }
      _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      if (event.key === _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.decimal) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.decimal) === -1) {
          return;
        }
      }
      if (/[eE]/.test(event.key)) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
          return;
        }
      }
      if (event.key === "-") {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.split("-").length <= 2) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 150;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      if (this.nudgeNumberValueIntervalId) {
        window.clearInterval(this.nudgeNumberValueIntervalId);
      }
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.numberButtonPointerUpAndOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonPointerDownHandler = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      if (!this.disabled) {
        this.nudgeNumberValue(direction, event);
      }
    };
    this.hiddenInputChangeHandler = (event) => {
      if (event.target.name === this.name) {
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      event.stopPropagation();
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (this.type === "text" && !this.childEl) {
        return;
      }
      if (this.type === "number" && !this.childNumberEl) {
        return;
      }
      this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = this.normalizeValue(value);
    };
    this.setPreviousValue = (value) => {
      this.previousValue = this.normalizeValue(value);
    };
    this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      if (this.type === "number") {
        _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: "never"
        };
        const sanitizedValue = (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.s)(
        // no need to delocalize a string that ia already in latn numerals
        (this.numberingSystem && this.numberingSystem !== "latn") ||
          _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.a !== "latn"
          ? _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(value)
          : value);
        const newValue = value && !sanitizedValue
          ? (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.previousValue)
            ? this.previousValue
            : ""
          : sanitizedValue;
        const newLocalizedValue = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(newValue);
        this.localizedValue = newLocalizedValue;
        this.userChangedValue = origin === "user" && this.value !== newValue;
        // don't sanitize the start of negative/decimal numbers, but
        // don't set value to an invalid number
        this.value = ["-", "."].includes(newValue) ? "" : newValue;
      }
      else {
        this.userChangedValue = origin === "user" && this.value !== value;
        this.value = value;
      }
      if (origin === "direct") {
        this.setInputValue(value);
        this.previousEmittedValue = value;
      }
      if (nativeEvent) {
        const calciteInputInputEvent = this.calciteInputInput.emit();
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = this.previousValue;
          this.localizedValue =
            this.type === "number"
              ? _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.n.localize(this.previousValue)
              : this.previousValue;
        }
        else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.inputKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.alignment = "start";
    this.autofocus = false;
    this.clearable = false;
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hidden = false;
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.loading = false;
    this.numberingSystem = undefined;
    this.localeFormat = false;
    this.max = undefined;
    this.min = undefined;
    this.maxLength = undefined;
    this.minLength = undefined;
    this.name = undefined;
    this.numberButtonType = "vertical";
    this.placeholder = undefined;
    this.prefixText = undefined;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.step = undefined;
    this.autocomplete = undefined;
    this.pattern = undefined;
    this.accept = undefined;
    this.multiple = false;
    this.inputMode = "text";
    this.enterKeyHint = undefined;
    this.suffixText = undefined;
    this.editingEnabled = false;
    this.type = "text";
    this.value = "";
    this.files = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.localizedValue = undefined;
    this.slottedActionElDisabledInternally = false;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    this.maxString = this.max?.toString() || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    this.minString = this.min?.toString() || null;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == ""
          ? ""
          : this.type === "number"
            ? (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)
              ? newValue
              : this.previousValue || ""
            : newValue
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.e)(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
    if (this.type === "number") {
      this.warnAboutInvalidNumberValue(this.value);
      this.setValue({
        origin: "connected",
        value: (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.value) ? this.value : ""
      });
    }
    this.mutationObserver?.observe(this.el, { childList: true });
    this.setDisabledAction();
    this.el.addEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  disconnectedCallback() {
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.d)(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener("calciteInternalHiddenInputChange", this.hiddenInputChangeHandler);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.e)(INPUT_TYPE_ICONS, this.icon, this.type);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_10__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(newValue)) {
      this.setValue({
        origin: "reset",
        value: oldValue
      });
      return false;
    }
    return true;
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    if (this.type === "number") {
      this.childNumberEl?.focus();
    }
    else {
      this.childEl?.focus();
    }
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    if (this.type === "number") {
      this.childNumberEl?.select();
    }
    else {
      this.childEl?.select();
    }
  }
  // TODO: refactor so we don't need to sync the internals in color-picker
  // https://github.com/Esri/calcite-components/issues/6100
  /** @internal */
  async internalSyncChildElValue() {
    if (this.type === "number") {
      this.childNumberEl.value = this.value;
    }
    else {
      this.childEl.value = this.value;
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const adjustment = direction === "up" ? 1 : -1;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = new _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.B(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
      !isNaN(inputMin) &&
      nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
      !isNaN(inputMax) &&
      !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin()
      ? `${inputMin}`
      : nudgedValueAboveInputMax()
        ? `${inputMax}`
        : nudgedValue.toString();
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  onFormReset() {
    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });
  }
  syncHiddenFormInput(input) {
    const { type } = this;
    input.type = type;
    if (type === "number") {
      input.min = this.min?.toString(10) ?? "";
      input.max = this.max?.toString(10) ?? "";
    }
    else if (type === "text") {
      if (this.minLength != null) {
        input.minLength = this.minLength;
      }
      if (this.maxLength != null) {
        input.maxLength = this.maxLength;
      }
    }
  }
  setDisabledAction() {
    const slottedActionEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    if (this.disabled) {
      if (slottedActionEl.getAttribute("disabled") == null) {
        this.slottedActionElDisabledInternally = true;
      }
      slottedActionEl.setAttribute("disabled", "");
    }
    else if (this.slottedActionElDisabledInternally) {
      slottedActionEl.removeAttribute("disabled");
      this.slottedActionElDisabledInternally = false;
    }
  }
  normalizeValue(value) {
    return this.type === "number" ? ((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(value) ? value : "") : value;
  }
  warnAboutInvalidNumberValue(value) {
    if (this.type === "number" && value && !(0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.el);
    const loader = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.loader }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
    const inputClearButton = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const iconEl = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsHorizontalDown = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-hidden": "true", class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" })));
    const numberButtonsVertical = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { accept: this.accept, "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.localizedValue,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setChildNumberElRef })) : null;
    const childEl = this.type !== "number"
      ? [
        (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(this.childElType, { accept: this.accept, "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
            [CSS.editingEnabled]: this.editingEnabled,
            [CSS.inlineChild]: !!this.inlineEditableEl
          }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value,
          // eslint-disable-next-line react/jsx-sort-props
          ref: this.setChildElRef }),
        this.isTextarea ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.resizeIconWrapper }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: this.scale === "l" ? "m" : "s" }))) : null
      ]
      : null;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.inputWrapper]: true, [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__.C.rtl]: dir === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionWrapper }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
      ? numberButtonsVertical
      : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_2__.H, { component: this }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "type": ["updateRequestedIcon"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Input.style = inputCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvN2MxZWJlOGY0YjkwNWU3YjFiMjY2ZmUxYjZiMjcxMzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDZTtBQUNOO0FBQy9DO0FBQ25CO0FBQzZDO0FBQ21CO0FBQ29IO0FBQzFLO0FBQ0g7QUFDZ0U7QUFDL0Y7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sY0FBYyx5RUFBeUUsa0JBQWtCLHNCQUFzQixzQ0FBc0MsaUJBQWlCLDBCQUEwQixrQkFBa0Isc0JBQXNCLCtJQUErSSxr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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtaW5wdXQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWEzZTEyNDIyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNsb3R0ZWQsIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgZSBhcyBzZXRSZXF1ZXN0ZWRJY29uLCBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBzIGFzIHN1Ym1pdEZvcm0sIGMgYXMgY29ubmVjdEZvcm0sIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJLZXlzIH0gZnJvbSAnLi9rZXktMzM4OWQ4NzAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwtNTljOWQ0NzIuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBpIGFzIGlzVmFsaWROdW1iZXIsIHAgYXMgcGFyc2VOdW1iZXJTdHJpbmcsIHMgYXMgc2FuaXRpemVOdW1iZXJTdHJpbmcsIGEgYXMgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQsIEIgYXMgQmlnRGVjaW1hbCB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy1jMjBlYzJkZC5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgbG9hZGVyOiBcImxvYWRlclwiLFxuICBjbGVhckJ1dHRvbjogXCJjbGVhci1idXR0b25cIixcbiAgZWRpdGluZ0VuYWJsZWQ6IFwiZWRpdGluZy1lbmFibGVkXCIsXG4gIGlubGluZUNoaWxkOiBcImlubGluZS1jaGlsZFwiLFxuICBpbnB1dEljb246IFwiaWNvblwiLFxuICBwcmVmaXg6IFwicHJlZml4XCIsXG4gIHN1ZmZpeDogXCJzdWZmaXhcIixcbiAgbnVtYmVyQnV0dG9uV3JhcHBlcjogXCJudW1iZXItYnV0dG9uLXdyYXBwZXJcIixcbiAgYnV0dG9uSXRlbUhvcml6b250YWw6IFwibnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsXCIsXG4gIHdyYXBwZXI6IFwiZWxlbWVudC13cmFwcGVyXCIsXG4gIGlucHV0V3JhcHBlcjogXCJ3cmFwcGVyXCIsXG4gIGFjdGlvbldyYXBwZXI6IFwiYWN0aW9uLXdyYXBwZXJcIixcbiAgcmVzaXplSWNvbldyYXBwZXI6IFwicmVzaXplLWljb24td3JhcHBlclwiLFxuICBudW1iZXJCdXR0b25JdGVtOiBcIm51bWJlci1idXR0b24taXRlbVwiXG59O1xuY29uc3QgSU5QVVRfVFlQRV9JQ09OUyA9IHtcbiAgdGVsOiBcInBob25lXCIsXG4gIHBhc3N3b3JkOiBcImxvY2tcIixcbiAgZW1haWw6IFwiZW1haWwtYWRkcmVzc1wiLFxuICBkYXRlOiBcImNhbGVuZGFyXCIsXG4gIHRpbWU6IFwiY2xvY2tcIixcbiAgc2VhcmNoOiBcInNlYXJjaFwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbjogXCJhY3Rpb25cIlxufTtcblxuY29uc3QgaW5wdXRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmJsb2NrfTpob3N0KFtzY2FsZT1zXSkgaW5wdXQsOmhvc3QoW3NjYWxlPXNdKSAucHJlZml4LDpob3N0KFtzY2FsZT1zXSkgLnN1ZmZpeHtibG9jay1zaXplOjEuNXJlbTtwYWRkaW5nLWlubGluZTowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgdGV4dGFyZWF7YmxvY2stc2l6ZToxLjVyZW07bWluLWJsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLm51bWJlci1idXR0b24td3JhcHBlciw6aG9zdChbc2NhbGU9c10pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiw6aG9zdChbc2NhbGU9c10pIC5hY3Rpb24td3JhcHBlciBjYWxjaXRlLWJ1dHRvbiBidXR0b257YmxvY2stc2l6ZToxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSBpbnB1dFt0eXBlPWZpbGVde2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToxLjVyZW07bWluLWlubGluZS1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9c10pIHRleHRhcmVhe2Jsb2NrLXNpemU6YXV0bztwYWRkaW5nLWJsb2NrOjAuMjVyZW07cGFkZGluZy1pbmxpbmU6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0LDpob3N0KFtzY2FsZT1tXSkgLnByZWZpeCw6aG9zdChbc2NhbGU9bV0pIC5zdWZmaXh7YmxvY2stc2l6ZToycmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWF7bWluLWJsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIC5udW1iZXItYnV0dG9uLXdyYXBwZXIsOmhvc3QoW3NjYWxlPW1dKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24sOmhvc3QoW3NjYWxlPW1dKSAuYWN0aW9uLXdyYXBwZXIgY2FsY2l0ZS1idXR0b24gYnV0dG9ue2Jsb2NrLXNpemU6MnJlbX06aG9zdChbc2NhbGU9bV0pIGlucHV0W3R5cGU9ZmlsZV17YmxvY2stc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgLmNsZWFyLWJ1dHRvbnttaW4tYmxvY2stc2l6ZToycmVtO21pbi1pbmxpbmUtc2l6ZToycmVtfTpob3N0KFtzY2FsZT1tXSkgdGV4dGFyZWF7YmxvY2stc2l6ZTphdXRvO3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1sXSkgaW5wdXQsOmhvc3QoW3NjYWxlPWxdKSAucHJlZml4LDpob3N0KFtzY2FsZT1sXSkgLnN1ZmZpeHtibG9jay1zaXplOjIuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbc2NhbGU9bF0pIHRleHRhcmVhe21pbi1ibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSAubnVtYmVyLWJ1dHRvbi13cmFwcGVyLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uLDpob3N0KFtzY2FsZT1sXSkgLmFjdGlvbi13cmFwcGVyIGNhbGNpdGUtYnV0dG9uIGJ1dHRvbntibG9jay1zaXplOjIuNzVyZW19Omhvc3QoW3NjYWxlPWxdKSBpbnB1dFt0eXBlPWZpbGVde2Jsb2NrLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5jbGVhci1idXR0b257bWluLWJsb2NrLXNpemU6Mi43NXJlbTttaW4taW5saW5lLXNpemU6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIHRleHRhcmVhe2Jsb2NrLXNpemU6YXV0bztwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdChbZGlzYWJsZWRdKSB0ZXh0YXJlYXtyZXNpemU6bm9uZX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgdGV4dGFyZWEsOmhvc3QgaW5wdXR7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBibG9jay1zaXplIDAsIG91dGxpbmUtb2Zmc2V0IDBzOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgMCU7Ym9yZGVyLXJhZGl1czowcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0IGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06aG9zdCBpbnB1dCw6aG9zdCB0ZXh0YXJlYXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dDo6cGxhY2Vob2xkZXIsOmhvc3QgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLDpob3N0IGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QgdGV4dGFyZWE6OnBsYWNlaG9sZGVyLDpob3N0IHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdCB0ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QgaW5wdXQ6Zm9jdXMsOmhvc3QgdGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCBpbnB1dFtyZWFkb25seV0sOmhvc3QgdGV4dGFyZWFbcmVhZG9ubHlde2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9Omhvc3QgaW5wdXRbcmVhZG9ubHldOmZvY3VzLDpob3N0IHRleHRhcmVhW3JlYWRvbmx5XTpmb2N1c3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdCB0ZXh0YXJlYSw6aG9zdCBpbnB1dHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0IHRleHRhcmVhOmZvY3VzLDpob3N0IGlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc3RhdHVzPWludmFsaWRdKSBpbnB1dCw6aG9zdChbc3RhdHVzPWludmFsaWRdKSB0ZXh0YXJlYXtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtzdGF0dXM9aW52YWxpZF0pIGlucHV0OmZvY3VzLDpob3N0KFtzdGF0dXM9aW52YWxpZF0pIHRleHRhcmVhOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbc2NhbGU9c10pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuaWNvbntpbnNldC1pbmxpbmUtc3RhcnQ6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pIC5pY29ue2luc2V0LWlubGluZS1zdGFydDoxcmVtfTpob3N0KFtpY29uXVtzY2FsZT1zXSkgaW5wdXR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MnJlbX06aG9zdChbaWNvbl1bc2NhbGU9bV0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjIuNXJlbX06aG9zdChbaWNvbl1bc2NhbGU9bF0pIGlucHV0e3BhZGRpbmctaW5saW5lLXN0YXJ0OjMuNXJlbX0uZWxlbWVudC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO29yZGVyOjM7ZGlzcGxheTppbmxpbmUtZmxleDtmbGV4OjEgMSAwJTthbGlnbi1pdGVtczpjZW50ZXJ9Lmljb257cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5pY29uLC5yZXNpemUtaWNvbi13cmFwcGVye3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCl9aW5wdXRbdHlwZT10ZXh0XTo6LW1zLWNsZWFyLGlucHV0W3R5cGU9dGV4dF06Oi1tcy1yZXZlYWx7ZGlzcGxheTpub25lO2Jsb2NrLXNpemU6MHB4O2lubGluZS1zaXplOjBweH1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24saW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jbGVhci1idXR0b24saW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1jbGVhci1idXR0b257ZGlzcGxheTpub25lfS5jbGVhci1idXR0b257cG9pbnRlci1ldmVudHM6aW5pdGlhbDtvcmRlcjo0O21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDttaW4tYmxvY2stc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6c3RyZXRjaDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9LmNsZWFyLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30uY2xlYXItYnV0dG9uOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LmNsZWFyLWJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmNsZWFyLWJ1dHRvbjphY3RpdmUgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY2xlYXItYnV0dG9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0uY2xlYXItYnV0dG9uOmRpc2FibGVke29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX0ubG9hZGVye2luc2V0LWJsb2NrLXN0YXJ0OjFweDtpbnNldC1pbmxpbmU6MXB4O3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9ja30uYWN0aW9uLXdyYXBwZXJ7b3JkZXI6NztkaXNwbGF5OmZsZXh9LnByZWZpeCwuc3VmZml4e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZTphdXRvO21pbi1ibG9jay1zaXplOjEwMCU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7bGluZS1oZWlnaHQ6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LnByZWZpeHtvcmRlcjoyO2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweH0uc3VmZml4e29yZGVyOjU7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Omhvc3QoW2FsaWdubWVudD1zdGFydF0pIHRleHRhcmVhLDpob3N0KFthbGlnbm1lbnQ9c3RhcnRdKSBpbnB1dHt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0KFthbGlnbm1lbnQ9ZW5kXSkgdGV4dGFyZWEsOmhvc3QoW2FsaWdubWVudD1lbmRdKSBpbnB1dHt0ZXh0LWFsaWduOmVuZH06aG9zdCBpbnB1dFt0eXBlPW51bWJlcl17LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH06aG9zdCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sOmhvc3QgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7bWFyZ2luOjBweH0ubnVtYmVyLWJ1dHRvbi13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7b3JkZXI6Njtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc306aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgLndyYXBwZXJ7ZmxleC1kaXJlY3Rpb246cm93O2Rpc3BsYXk6ZmxleH06aG9zdChbbnVtYmVyLWJ1dHRvbi10eXBlPXZlcnRpY2FsXSkgaW5wdXQsOmhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIHRleHRhcmVhe29yZGVyOjJ9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT1ob3Jpem9udGFsXSkgLmNhbGNpdGUtLXJ0bCAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9aG9yaXpvbnRhbF0pIC5jYWxjaXRlLS1ydGwgLm51bWJlci1idXR0b24taXRlbVtkYXRhLWFkanVzdG1lbnQ9dXBdIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKC05MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25dLC5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD11cF17b3JkZXI6MTttYXgtYmxvY2stc2l6ZToxMDAlO21pbi1ibG9jay1zaXplOjEwMCU7YWxpZ24tc2VsZjpzdHJldGNofS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXSBjYWxjaXRlLWljb24sLm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXSBjYWxjaXRlLWljb257dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PWRvd25de2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW0ubnVtYmVyLWJ1dHRvbi1pdGVtLS1ob3Jpem9udGFsW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9ZG93bl06aG92ZXIgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBde29yZGVyOjV9Lm51bWJlci1idXR0b24taXRlbS5udW1iZXItYnV0dG9uLWl0ZW0tLWhvcml6b250YWxbZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ubnVtYmVyLWJ1dHRvbi1pdGVtLm51bWJlci1idXR0b24taXRlbS0taG9yaXpvbnRhbFtkYXRhLWFkanVzdG1lbnQ9dXBdOmhvdmVyIGNhbGNpdGUtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PWRvd25dOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD11cF06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9Omhvc3QoW251bWJlci1idXR0b24tdHlwZT12ZXJ0aWNhbF0pIC5udW1iZXItYnV0dG9uLWl0ZW1bZGF0YS1hZGp1c3RtZW50PXVwXTpob3ZlciBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtudW1iZXItYnV0dG9uLXR5cGU9dmVydGljYWxdKSAubnVtYmVyLWJ1dHRvbi1pdGVtW2RhdGEtYWRqdXN0bWVudD1kb3duXXtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MHB4fS5udW1iZXItYnV0dG9uLWl0ZW17bWF4LWJsb2NrLXNpemU6NTAlO21pbi1ibG9jay1zaXplOjUwJTtwb2ludGVyLWV2ZW50czppbml0aWFsO21hcmdpbjowcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjVyZW07dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDowcHh9Lm51bWJlci1idXR0b24taXRlbSBjYWxjaXRlLWljb257cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc30ubnVtYmVyLWJ1dHRvbi1pdGVtOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpfS5udW1iZXItYnV0dG9uLWl0ZW06Zm9jdXMgY2FsY2l0ZS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ubnVtYmVyLWJ1dHRvbi1pdGVtOmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QgaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcntkaXNwbGF5Om5vbmV9Omhvc3QgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcnt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50fTpob3N0IHRleHRhcmVhOjotd2Via2l0LXJlc2l6ZXJ7cG9zaXRpb246YWJzb2x1dGU7aW5zZXQtYmxvY2stZW5kOjBweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZy1ibG9jazowcHg7cGFkZGluZy1pbmxpbmU6MC4yNXJlbTtpbnNldC1pbmxpbmUtZW5kOjB9LnJlc2l6ZS1pY29uLXdyYXBwZXJ7aW5zZXQtYmxvY2stZW5kOjJweDtpbnNldC1pbmxpbmUtZW5kOjJweDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2Jsb2NrLXNpemU6MC43NXJlbTtpbmxpbmUtc2l6ZTowLjc1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0ucmVzaXplLWljb24td3JhcHBlciBjYWxjaXRlLWljb257aW5zZXQtYmxvY2stZW5kOjAuMjVyZW07aW5zZXQtaW5saW5lLWVuZDowLjI1cmVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uY2FsY2l0ZS0tcnRsIC5yZXNpemUtaWNvbi13cmFwcGVyIGNhbGNpdGUtaWNvbnt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX06aG9zdChbdHlwZT1jb2xvcl0pIGlucHV0e3BhZGRpbmc6MC4yNXJlbX06aG9zdChbdHlwZT1maWxlXSkgaW5wdXR7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6ZGFzaGVkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QoW3R5cGU9ZmlsZV1bc2NhbGU9c10pIGlucHV0e3BhZGRpbmctYmxvY2s6MXB4O3BhZGRpbmctaW5saW5lOjAuNXJlbX06aG9zdChbdHlwZT1maWxlXVtzY2FsZT1tXSkgaW5wdXR7cGFkZGluZy1ibG9jazowLjI1cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW19Omhvc3QoW3R5cGU9ZmlsZV1bc2NhbGU9bF0pIGlucHV0e3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjFyZW19Omhvc3QoLm5vLWJvdHRvbS1ib3JkZXIpIGlucHV0e2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fTpob3N0KC5ib3JkZXItdG9wLWNvbG9yLW9uZSkgaW5wdXR7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfTpob3N0IC5pbmxpbmUtY2hpbGR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwc306aG9zdCAuaW5saW5lLWNoaWxkIC5lZGl0aW5nLWVuYWJsZWR7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0fTpob3N0IC5pbmxpbmUtY2hpbGQ6bm90KC5lZGl0aW5nLWVuYWJsZWQpe2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWlubGluZS1zdGFydDowfTo6c2xvdHRlZChpbnB1dFtzbG90PWhpZGRlbi1mb3JtLWlucHV0XSl7bWFyZ2luOjAgIWltcG9ydGFudDtvcGFjaXR5OjAgIWltcG9ydGFudDtvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O2luc2V0OjAgIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lICFpbXBvcnRhbnQ7ei1pbmRleDotMSAhaW1wb3J0YW50fVwiO1xuXG5jb25zdCBJbnB1dCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRCbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRJbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0SW5wdXRcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW5wdXRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnB1dENoYW5nZVwiLCA2KTtcbiAgICAvKioga2VlcCB0cmFjayBvZiB0aGUgcmVuZGVyZWQgY2hpbGQgdHlwZSAqL1xuICAgIHRoaXMuY2hpbGRFbFR5cGUgPSBcImlucHV0XCI7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gXCJpbml0aWFsXCI7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnNldERpc2FibGVkQWN0aW9uKCkpO1xuICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2xlYXJhYmxlICYmIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZShldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNsZWFySW5wdXRWYWx1ZSA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgIGNvbW1pdHRpbmc6IHRydWUsXG4gICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICBvcmlnaW46IFwidXNlclwiLFxuICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWVPcmlnaW4gPT09IFwidXNlclwiICYmIHRoaXMudmFsdWUgIT09IHRoaXMucHJldmlvdXNFbWl0dGVkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW5wdXRDaGFuZ2UuZW1pdCgpO1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzRW1pdHRlZFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dEJsdXJIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEJsdXIuZW1pdCgpO1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90dGVkQWN0aW9uRWwgPSBnZXRTbG90dGVkKHRoaXMuZWwsIFwiYWN0aW9uXCIpO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gc2xvdHRlZEFjdGlvbkVsKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXRGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbElucHV0Rm9jdXMuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dENoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcImZpbGVcIikge1xuICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5jaGlsZEVsLmZpbGVzO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dElucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgIG9yaWdpbjogXCJ1c2VyXCIsXG4gICAgICAgIHZhbHVlOiBuYXRpdmVFdmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dEtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciA9IChuYXRpdmVFdmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IG5hdGl2ZUV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlbG9jYWxpemVkVmFsdWUgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIuZGVsb2NhbGl6ZSh2YWx1ZSk7XG4gICAgICBpZiAobmF0aXZlRXZlbnQuaW5wdXRUeXBlID09PSBcImluc2VydEZyb21QYXN0ZVwiKSB7XG4gICAgICAgIGlmICghaXNWYWxpZE51bWJlcihkZWxvY2FsaXplZFZhbHVlKSkge1xuICAgICAgICAgIG5hdGl2ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogcGFyc2VOdW1iZXJTdHJpbmcoZGVsb2NhbGl6ZWRWYWx1ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSA9IHRoaXMubG9jYWxpemVkVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogZGVsb2NhbGl6ZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5wdXROdW1iZXJLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gXCJudW1iZXJcIiB8fCB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgLyogcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIG9mIG1vdmluZyBjdXJzb3IgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgaW5wdXQgd2hlbiBob2xkaW5nIGRvd24gQXJyb3dVcCAqL1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm51ZGdlTnVtYmVyVmFsdWUoXCJ1cFwiLCBldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgdGhpcy5udWRnZU51bWJlclZhbHVlKFwiZG93blwiLCBldmVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN1cHBvcnRlZEtleXMgPSBbXG4gICAgICAgIC4uLm51bWJlcktleXMsXG4gICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICBcIkJhY2tzcGFjZVwiLFxuICAgICAgICBcIkRlbGV0ZVwiLFxuICAgICAgICBcIkVudGVyXCIsXG4gICAgICAgIFwiRXNjYXBlXCIsXG4gICAgICAgIFwiVGFiXCJcbiAgICAgIF07XG4gICAgICBpZiAoZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpc1NoaWZ0VGFiRXZlbnQgPSBldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXkgPT09IFwiVGFiXCI7XG4gICAgICBpZiAoc3VwcG9ydGVkS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpICYmICghZXZlbnQuc2hpZnRLZXkgfHwgaXNTaGlmdFRhYkV2ZW50KSkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2VJZlVzZXJNb2RpZmllZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgICAgfTtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZS5pbmRleE9mKG51bWJlclN0cmluZ0Zvcm1hdHRlci5kZWNpbWFsKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgvW2VFXS8udGVzdChldmVudC5rZXkpKSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSAmJiAhdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmICEvW2VFXS8udGVzdCh0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIi1cIikge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgJiYgIXRoaXMuY2hpbGROdW1iZXJFbC52YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiB0aGlzLmNoaWxkTnVtYmVyRWwudmFsdWUuc3BsaXQoXCItXCIpLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgdGhpcy5udWRnZU51bWJlclZhbHVlID0gKGRpcmVjdGlvbiwgbmF0aXZlRXZlbnQpID0+IHtcbiAgICAgIGlmICgobmF0aXZlRXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIG5hdGl2ZUV2ZW50LnJlcGVhdCkgfHwgdGhpcy50eXBlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlucHV0TWF4ID0gdGhpcy5tYXhTdHJpbmcgPyBwYXJzZUZsb2F0KHRoaXMubWF4U3RyaW5nKSA6IG51bGw7XG4gICAgICBjb25zdCBpbnB1dE1pbiA9IHRoaXMubWluU3RyaW5nID8gcGFyc2VGbG9hdCh0aGlzLm1pblN0cmluZykgOiBudWxsO1xuICAgICAgY29uc3QgdmFsdWVOdWRnZURlbGF5SW5NcyA9IDE1MDtcbiAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgaWYgKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpIHtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5udWRnZU51bWJlclZhbHVlSW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgICBsZXQgZmlyc3RWYWx1ZU51ZGdlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoZmlyc3RWYWx1ZU51ZGdlKSB7XG4gICAgICAgICAgZmlyc3RWYWx1ZU51ZGdlID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jcmVtZW50T3JEZWNyZW1lbnROdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGlucHV0TWF4LCBpbnB1dE1pbiwgbmF0aXZlRXZlbnQpO1xuICAgICAgfSwgdmFsdWVOdWRnZURlbGF5SW5Ncyk7XG4gICAgfTtcbiAgICB0aGlzLm51bWJlckJ1dHRvblBvaW50ZXJVcEFuZE91dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLm51ZGdlTnVtYmVyVmFsdWVJbnRlcnZhbElkKTtcbiAgICB9O1xuICAgIHRoaXMubnVtYmVyQnV0dG9uUG9pbnRlckRvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5hZGp1c3RtZW50O1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMubnVkZ2VOdW1iZXJWYWx1ZShkaXJlY3Rpb24sIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIG9yaWdpbjogXCJkaXJlY3RcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgdGhpcy5zZXRDaGlsZEVsUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2hpbGROdW1iZXJFbFJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUgPSAobmV3SW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJ0ZXh0XCIgJiYgIXRoaXMuY2hpbGRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiICYmICF0aGlzLmNoaWxkTnVtYmVyRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpc1tgY2hpbGQke3RoaXMudHlwZSA9PT0gXCJudW1iZXJcIiA/IFwiTnVtYmVyXCIgOiBcIlwifUVsYF0udmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuICAgIH07XG4gICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c0VtaXR0ZWRWYWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5zZXRQcmV2aW91c1ZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VmFsdWUgPSAoeyBjb21taXR0aW5nID0gZmFsc2UsIG5hdGl2ZUV2ZW50LCBvcmlnaW4sIHByZXZpb3VzVmFsdWUsIHZhbHVlIH0pID0+IHtcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNWYWx1ZShwcmV2aW91c1ZhbHVlID8/IHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlT3JpZ2luID0gb3JpZ2luO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3IsXG4gICAgICAgICAgc2lnbkRpc3BsYXk6IFwibmV2ZXJcIlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzYW5pdGl6ZWRWYWx1ZSA9IHNhbml0aXplTnVtYmVyU3RyaW5nKFxuICAgICAgICAvLyBubyBuZWVkIHRvIGRlbG9jYWxpemUgYSBzdHJpbmcgdGhhdCBpYSBhbHJlYWR5IGluIGxhdG4gbnVtZXJhbHNcbiAgICAgICAgKHRoaXMubnVtYmVyaW5nU3lzdGVtICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIikgfHxcbiAgICAgICAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIlxuICAgICAgICAgID8gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLmRlbG9jYWxpemUodmFsdWUpXG4gICAgICAgICAgOiB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWUgJiYgIXNhbml0aXplZFZhbHVlXG4gICAgICAgICAgPyBpc1ZhbGlkTnVtYmVyKHRoaXMucHJldmlvdXNWYWx1ZSlcbiAgICAgICAgICAgID8gdGhpcy5wcmV2aW91c1ZhbHVlXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICA6IHNhbml0aXplZFZhbHVlO1xuICAgICAgICBjb25zdCBuZXdMb2NhbGl6ZWRWYWx1ZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMubG9jYWxpemVkVmFsdWUgPSBuZXdMb2NhbGl6ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gb3JpZ2luID09PSBcInVzZXJcIiAmJiB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgICAgLy8gZG9uJ3Qgc2FuaXRpemUgdGhlIHN0YXJ0IG9mIG5lZ2F0aXZlL2RlY2ltYWwgbnVtYmVycywgYnV0XG4gICAgICAgIC8vIGRvbid0IHNldCB2YWx1ZSB0byBhbiBpbnZhbGlkIG51bWJlclxuICAgICAgICB0aGlzLnZhbHVlID0gW1wiLVwiLCBcIi5cIl0uaW5jbHVkZXMobmV3VmFsdWUpID8gXCJcIiA6IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IG9yaWdpbiA9PT0gXCJ1c2VyXCIgJiYgdGhpcy52YWx1ZSAhPT0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChvcmlnaW4gPT09IFwiZGlyZWN0XCIpIHtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0VtaXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hdGl2ZUV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNhbGNpdGVJbnB1dElucHV0RXZlbnQgPSB0aGlzLmNhbGNpdGVJbnB1dElucHV0LmVtaXQoKTtcbiAgICAgICAgaWYgKGNhbGNpdGVJbnB1dElucHV0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByZXZpb3VzVmFsdWU7XG4gICAgICAgICAgdGhpcy5sb2NhbGl6ZWRWYWx1ZSA9XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUodGhpcy5wcmV2aW91c1ZhbHVlKVxuICAgICAgICAgICAgICA6IHRoaXMucHJldmlvdXNWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21taXR0aW5nKSB7XG4gICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlSWZVc2VyTW9kaWZpZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbnB1dEtleVVwSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMubnVkZ2VOdW1iZXJWYWx1ZUludGVydmFsSWQpO1xuICAgIH07XG4gICAgdGhpcy5hbGlnbm1lbnQgPSBcInN0YXJ0XCI7XG4gICAgdGhpcy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFyYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cFNlcGFyYXRvciA9IGZhbHNlO1xuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxlRm9ybWF0ID0gZmFsc2U7XG4gICAgdGhpcy5tYXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhMZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5taW5MZW5ndGggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyQnV0dG9uVHlwZSA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucHJlZml4VGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1aXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnN0YXR1cyA9IFwiaWRsZVwiO1xuICAgIHRoaXMuc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBhdHRlcm4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY2NlcHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRNb2RlID0gXCJ0ZXh0XCI7XG4gICAgdGhpcy5lbnRlcktleUhpbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdWZmaXhUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWRpdGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSBcInRleHRcIjtcbiAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLmZpbGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmxvY2FsaXplZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5ID0gZmFsc2U7XG4gIH1cbiAgZGlzYWJsZWRXYXRjaGVyKCkge1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgfVxuICAvKiogd2F0Y2hlciB0byB1cGRhdGUgbnVtYmVyLXRvLXN0cmluZyBmb3IgbWF4ICovXG4gIG1heFdhdGNoZXIoKSB7XG4gICAgdGhpcy5tYXhTdHJpbmcgPSB0aGlzLm1heD8udG9TdHJpbmcoKSB8fCBudWxsO1xuICB9XG4gIC8qKiB3YXRjaGVyIHRvIHVwZGF0ZSBudW1iZXItdG8tc3RyaW5nIGZvciBtaW4gKi9cbiAgbWluV2F0Y2hlcigpIHtcbiAgICB0aGlzLm1pblN0cmluZyA9IHRoaXMubWluPy50b1N0cmluZygpIHx8IG51bGw7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIHZhbHVlV2F0Y2hlcihuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuICAgIGlmICghdGhpcy51c2VyQ2hhbmdlZFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcImRpcmVjdFwiLFxuICAgICAgICBwcmV2aW91c1ZhbHVlLFxuICAgICAgICB2YWx1ZTogbmV3VmFsdWUgPT0gbnVsbCB8fCBuZXdWYWx1ZSA9PSBcIlwiXG4gICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgOiB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgID8gaXNWYWxpZE51bWJlcihuZXdWYWx1ZSlcbiAgICAgICAgICAgICAgPyBuZXdWYWx1ZVxuICAgICAgICAgICAgICA6IHRoaXMucHJldmlvdXNWYWx1ZSB8fCBcIlwiXG4gICAgICAgICAgICA6IG5ld1ZhbHVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMud2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51c2VyQ2hhbmdlZFZhbHVlID0gZmFsc2U7XG4gIH1cbiAgdXBkYXRlUmVxdWVzdGVkSWNvbigpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKElOUFVUX1RZUEVfSUNPTlMsIHRoaXMuaWNvbiwgdGhpcy50eXBlKTtcbiAgfVxuICBnZXQgaXNDbGVhcmFibGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzVGV4dGFyZWEgJiYgKHRoaXMuY2xlYXJhYmxlIHx8IHRoaXMudHlwZSA9PT0gXCJzZWFyY2hcIikgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICB9XG4gIGdldCBpc1RleHRhcmVhKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxUeXBlID09PSBcInRleHRhcmVhXCI7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLmlubGluZUVkaXRhYmxlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoXCJjYWxjaXRlLWlubGluZS1lZGl0YWJsZVwiKTtcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0YWJsZUVsKSB7XG4gICAgICB0aGlzLmVkaXRpbmdFbmFibGVkID0gdGhpcy5pbmxpbmVFZGl0YWJsZUVsLmVkaXRpbmdFbmFibGVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgdGhpcy5zZXRQcmV2aW91c0VtaXR0ZWRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnNldFByZXZpb3VzVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy53YXJuQWJvdXRJbnZhbGlkTnVtYmVyVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnNldFZhbHVlKHtcbiAgICAgICAgb3JpZ2luOiBcImNvbm5lY3RlZFwiLFxuICAgICAgICB2YWx1ZTogaXNWYWxpZE51bWJlcih0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiBcIlwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRBY3Rpb24oKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB0aGlzLmhpZGRlbklucHV0Q2hhbmdlSGFuZGxlcik7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVJbnRlcm5hbEhpZGRlbklucHV0Q2hhbmdlXCIsIHRoaXMuaGlkZGVuSW5wdXRDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuY2hpbGRFbFR5cGUgPSB0aGlzLnR5cGUgPT09IFwidGV4dGFyZWFcIiA/IFwidGV4dGFyZWFcIiA6IFwiaW5wdXRcIjtcbiAgICB0aGlzLm1heFN0cmluZyA9IHRoaXMubWF4Py50b1N0cmluZygpO1xuICAgIHRoaXMubWluU3RyaW5nID0gdGhpcy5taW4/LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihJTlBVVF9UWVBFX0lDT05TLCB0aGlzLmljb24sIHRoaXMudHlwZSk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRTaG91bGRVcGRhdGUobmV3VmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgJiYgcHJvcGVydHkgPT09IFwidmFsdWVcIiAmJiBuZXdWYWx1ZSAmJiAhaXNWYWxpZE51bWJlcihuZXdWYWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgICAgdmFsdWU6IG9sZFZhbHVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LmZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGlsZEVsPy5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvKiogU2VsZWN0cyB0aGUgdGV4dCBvZiB0aGUgY29tcG9uZW50J3MgYHZhbHVlYC4gKi9cbiAgYXN5bmMgc2VsZWN0VGV4dCgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLmNoaWxkTnVtYmVyRWw/LnNlbGVjdCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2hpbGRFbD8uc2VsZWN0KCk7XG4gICAgfVxuICB9XG4gIC8vIFRPRE86IHJlZmFjdG9yIHNvIHdlIGRvbid0IG5lZWQgdG8gc3luYyB0aGUgaW50ZXJuYWxzIGluIGNvbG9yLXBpY2tlclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvaXNzdWVzLzYxMDBcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBpbnRlcm5hbFN5bmNDaGlsZEVsVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jaGlsZE51bWJlckVsLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoaWxkRWwudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIGluY3JlbWVudE9yRGVjcmVtZW50TnVtYmVyVmFsdWUoZGlyZWN0aW9uLCBpbnB1dE1heCwgaW5wdXRNaW4sIG5hdGl2ZUV2ZW50KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcbiAgICBjb25zdCBhZGp1c3RtZW50ID0gZGlyZWN0aW9uID09PSBcInVwXCIgPyAxIDogLTE7XG4gICAgY29uc3QgaW5wdXRTdGVwID0gdGhpcy5zdGVwID09PSBcImFueVwiID8gMSA6IE1hdGguYWJzKHRoaXMuc3RlcCB8fCAxKTtcbiAgICBjb25zdCBpbnB1dFZhbCA9IG5ldyBCaWdEZWNpbWFsKHZhbHVlICE9PSBcIlwiID8gdmFsdWUgOiBcIjBcIik7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWUgPSBpbnB1dFZhbC5hZGQoYCR7aW5wdXRTdGVwICogYWRqdXN0bWVudH1gKTtcbiAgICBjb25zdCBudWRnZWRWYWx1ZUJlbG93SW5wdXRNaW4gPSAoKSA9PiB0eXBlb2YgaW5wdXRNaW4gPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICFpc05hTihpbnB1dE1pbikgJiZcbiAgICAgIG51ZGdlZFZhbHVlLnN1YnRyYWN0KGAke2lucHV0TWlufWApLmlzTmVnYXRpdmU7XG4gICAgY29uc3QgbnVkZ2VkVmFsdWVBYm92ZUlucHV0TWF4ID0gKCkgPT4gdHlwZW9mIGlucHV0TWF4ID09PSBcIm51bWJlclwiICYmXG4gICAgICAhaXNOYU4oaW5wdXRNYXgpICYmXG4gICAgICAhbnVkZ2VkVmFsdWUuc3VidHJhY3QoYCR7aW5wdXRNYXh9YCkuaXNOZWdhdGl2ZTtcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gbnVkZ2VkVmFsdWVCZWxvd0lucHV0TWluKClcbiAgICAgID8gYCR7aW5wdXRNaW59YFxuICAgICAgOiBudWRnZWRWYWx1ZUFib3ZlSW5wdXRNYXgoKVxuICAgICAgICA/IGAke2lucHV0TWF4fWBcbiAgICAgICAgOiBudWRnZWRWYWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgY29tbWl0dGluZzogdHJ1ZSxcbiAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgb3JpZ2luOiBcInVzZXJcIixcbiAgICAgIHZhbHVlOiBmaW5hbFZhbHVlXG4gICAgfSk7XG4gIH1cbiAgb25Gb3JtUmVzZXQoKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICBvcmlnaW46IFwicmVzZXRcIixcbiAgICAgIHZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZVxuICAgIH0pO1xuICB9XG4gIHN5bmNIaWRkZW5Gb3JtSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXM7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGlucHV0Lm1pbiA9IHRoaXMubWluPy50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICAgIGlucHV0Lm1heCA9IHRoaXMubWF4Py50b1N0cmluZygxMCkgPz8gXCJcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgIGlmICh0aGlzLm1pbkxlbmd0aCAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IHRoaXMubWluTGVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWF4TGVuZ3RoICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gdGhpcy5tYXhMZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldERpc2FibGVkQWN0aW9uKCkge1xuICAgIGNvbnN0IHNsb3R0ZWRBY3Rpb25FbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgXCJhY3Rpb25cIik7XG4gICAgaWYgKCFzbG90dGVkQWN0aW9uRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChzbG90dGVkQWN0aW9uRWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IHRydWU7XG4gICAgICB9XG4gICAgICBzbG90dGVkQWN0aW9uRWwuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc2xvdHRlZEFjdGlvbkVsRGlzYWJsZWRJbnRlcm5hbGx5KSB7XG4gICAgICBzbG90dGVkQWN0aW9uRWwucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnNsb3R0ZWRBY3Rpb25FbERpc2FibGVkSW50ZXJuYWxseSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFwibnVtYmVyXCIgPyAoaXNWYWxpZE51bWJlcih2YWx1ZSkgPyB2YWx1ZSA6IFwiXCIpIDogdmFsdWU7XG4gIH1cbiAgd2FybkFib3V0SW52YWxpZE51bWJlclZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSAmJiAhaXNWYWxpZE51bWJlcih2YWx1ZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHNwZWNpZmllZCB2YWx1ZSBcIiR7dmFsdWV9XCIgY2Fubm90IGJlIHBhcnNlZCwgb3IgaXMgb3V0IG9mIHJhbmdlLmApO1xuICAgIH1cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgbG9hZGVyID0gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmxvYWRlciB9LCBoKFwiY2FsY2l0ZS1wcm9ncmVzc1wiLCB7IGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmxvYWRpbmcsIHR5cGU6IFwiaW5kZXRlcm1pbmF0ZVwiIH0pKSk7XG4gICAgY29uc3QgaW5wdXRDbGVhckJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xlYXIsIGNsYXNzOiBDU1MuY2xlYXJCdXR0b24sIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkIHx8IHRoaXMucmVhZE9ubHksIG9uQ2xpY2s6IHRoaXMuY2xlYXJJbnB1dFZhbHVlLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgaWNvbkVsID0gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogQ1NTLmlucHV0SWNvbiwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5yZXF1ZXN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgICBjb25zdCBpc0hvcml6b250YWxOdW1iZXJCdXR0b24gPSB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiO1xuICAgIGNvbnN0IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXAgPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubnVtYmVyQnV0dG9uSXRlbV06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSXRlbUhvcml6b250YWxdOiBpc0hvcml6b250YWxOdW1iZXJCdXR0b25cbiAgICAgIH0sIFwiZGF0YS1hZGp1c3RtZW50XCI6IFwidXBcIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG4gICAgY29uc3QgbnVtYmVyQnV0dG9uc0hvcml6b250YWxEb3duID0gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLm51bWJlckJ1dHRvbkl0ZW1dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkl0ZW1Ib3Jpem9udGFsXTogaXNIb3Jpem9udGFsTnVtYmVyQnV0dG9uXG4gICAgICB9LCBcImRhdGEtYWRqdXN0bWVudFwiOiBcImRvd25cIiwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSwgb25Qb2ludGVyRG93bjogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyRG93bkhhbmRsZXIsIG9uUG9pbnRlck91dDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCBvblBvaW50ZXJVcDogdGhpcy5udW1iZXJCdXR0b25Qb2ludGVyVXBBbmRPdXRIYW5kbGVyLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBjb25zdCBudW1iZXJCdXR0b25zVmVydGljYWwgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MubnVtYmVyQnV0dG9uV3JhcHBlciB9LCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbFVwLCBudW1iZXJCdXR0b25zSG9yaXpvbnRhbERvd24pKTtcbiAgICBjb25zdCBwcmVmaXhUZXh0ID0gaChcImRpdlwiLCB7IGNsYXNzOiBDU1MucHJlZml4IH0sIHRoaXMucHJlZml4VGV4dCk7XG4gICAgY29uc3Qgc3VmZml4VGV4dCA9IGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLnN1ZmZpeCB9LCB0aGlzLnN1ZmZpeFRleHQpO1xuICAgIGNvbnN0IGxvY2FsZU51bWJlcklucHV0ID0gdGhpcy50eXBlID09PSBcIm51bWJlclwiID8gKGgoXCJpbnB1dFwiLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwga2V5OiBcImxvY2FsaXplZC1pbnB1dFwiLCBtYXhMZW5ndGg6IHRoaXMubWF4TGVuZ3RoLCBtaW5MZW5ndGg6IHRoaXMubWluTGVuZ3RoLCBtdWx0aXBsZTogdGhpcy5tdWx0aXBsZSwgbmFtZTogdW5kZWZpbmVkLCBvbkJsdXI6IHRoaXMuaW5wdXRCbHVySGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dE51bWJlcklucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0TnVtYmVyS2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHR5cGU6IFwidGV4dFwiLCB2YWx1ZTogdGhpcy5sb2NhbGl6ZWRWYWx1ZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldENoaWxkTnVtYmVyRWxSZWYgfSkpIDogbnVsbDtcbiAgICBjb25zdCBjaGlsZEVsID0gdGhpcy50eXBlICE9PSBcIm51bWJlclwiXG4gICAgICA/IFtcbiAgICAgICAgaCh0aGlzLmNoaWxkRWxUeXBlLCB7IGFjY2VwdDogdGhpcy5hY2NlcHQsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGF1dG9jb21wbGV0ZTogdGhpcy5hdXRvY29tcGxldGUsIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgPyB0cnVlIDogbnVsbCwgY2xhc3M6IHtcbiAgICAgICAgICAgIFtDU1MuZWRpdGluZ0VuYWJsZWRdOiB0aGlzLmVkaXRpbmdFbmFibGVkLFxuICAgICAgICAgICAgW0NTUy5pbmxpbmVDaGlsZF06ICEhdGhpcy5pbmxpbmVFZGl0YWJsZUVsXG4gICAgICAgICAgfSwgZGVmYXVsdFZhbHVlOiB0aGlzLmRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogbnVsbCwgZW50ZXJLZXlIaW50OiB0aGlzLmVudGVyS2V5SGludCwgaW5wdXRNb2RlOiB0aGlzLmlucHV0TW9kZSwgbWF4OiB0aGlzLm1heFN0cmluZywgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCwgbWluOiB0aGlzLm1pblN0cmluZywgbWluTGVuZ3RoOiB0aGlzLm1pbkxlbmd0aCwgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUsIG5hbWU6IHRoaXMubmFtZSwgb25CbHVyOiB0aGlzLmlucHV0Qmx1ckhhbmRsZXIsIG9uQ2hhbmdlOiB0aGlzLmlucHV0Q2hhbmdlSGFuZGxlciwgb25Gb2N1czogdGhpcy5pbnB1dEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dElucHV0SGFuZGxlciwgb25LZXlEb3duOiB0aGlzLmlucHV0S2V5RG93bkhhbmRsZXIsIG9uS2V5VXA6IHRoaXMuaW5wdXRLZXlVcEhhbmRsZXIsIHBhdHRlcm46IHRoaXMucGF0dGVybiwgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwgXCJcIiwgcmVhZE9ubHk6IHRoaXMucmVhZE9ubHksIHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkID8gdHJ1ZSA6IG51bGwsIHN0ZXA6IHRoaXMuc3RlcCwgdGFiSW5kZXg6IHRoaXMuZGlzYWJsZWQgfHwgKHRoaXMuaW5saW5lRWRpdGFibGVFbCAmJiAhdGhpcy5lZGl0aW5nRW5hYmxlZCkgPyAtMSA6IG51bGwsIHR5cGU6IHRoaXMudHlwZSwgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICAgICAgcmVmOiB0aGlzLnNldENoaWxkRWxSZWYgfSksXG4gICAgICAgIHRoaXMuaXNUZXh0YXJlYSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5yZXNpemVJY29uV3JhcHBlciB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpIDogbnVsbFxuICAgICAgXVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuaW5wdXRXcmFwcGVyXTogdHJ1ZSwgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIiB9IH0sIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsRG93blxuICAgICAgOiBudWxsLCB0aGlzLnByZWZpeFRleHQgPyBwcmVmaXhUZXh0IDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1Mud3JhcHBlciB9LCBsb2NhbGVOdW1iZXJJbnB1dCwgY2hpbGRFbCwgdGhpcy5pc0NsZWFyYWJsZSA/IGlucHV0Q2xlYXJCdXR0b24gOiBudWxsLCB0aGlzLnJlcXVlc3RlZEljb24gPyBpY29uRWwgOiBudWxsLCB0aGlzLmxvYWRpbmcgPyBsb2FkZXIgOiBudWxsKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uV3JhcHBlciB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbiB9KSksIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwidmVydGljYWxcIiAmJiAhdGhpcy5yZWFkT25seVxuICAgICAgPyBudW1iZXJCdXR0b25zVmVydGljYWxcbiAgICAgIDogbnVsbCwgdGhpcy5zdWZmaXhUZXh0ID8gc3VmZml4VGV4dCA6IG51bGwsIHRoaXMudHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLm51bWJlckJ1dHRvblR5cGUgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLnJlYWRPbmx5XG4gICAgICA/IG51bWJlckJ1dHRvbnNIb3Jpem9udGFsVXBcbiAgICAgIDogbnVsbCwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRXYXRjaGVyXCJdLFxuICAgIFwibWF4XCI6IFtcIm1heFdhdGNoZXJcIl0sXG4gICAgXCJtaW5cIjogW1wibWluV2F0Y2hlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcImljb25cIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcInR5cGVcIjogW1widXBkYXRlUmVxdWVzdGVkSWNvblwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbklucHV0LnN0eWxlID0gaW5wdXRDc3M7XG5cbmV4cG9ydCB7IElucHV0IGFzIGNhbGNpdGVfaW5wdXQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=