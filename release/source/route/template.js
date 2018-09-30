"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Route template class.
 */
let Template = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Route properties.
     * @param children Route children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Router skeleton.
         */
        this.skeleton = DOM.create("div", { class: this.properties.class }, this.children);
        this.bindProperties();
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        this.bindComponentProperties(this.skeleton, ['path', 'exact', 'constraint']);
    }
    /**
     * Determines whether this route mus be exact or not.
     */
    get exact() {
        return this.properties.exact || false;
    }
    /**
     * Route path.
     */
    get path() {
        return this.properties.path;
    }
    /**
     * Route constraint.
     */
    get constraint() {
        return this.properties.constraint || {};
    }
    /**
     * Route element.
     */
    get element() {
        return this.skeleton;
    }
};
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "exact", null);
__decorate([
    Class.Public()
], Template.prototype, "path", null);
__decorate([
    Class.Public()
], Template.prototype, "constraint", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
Template = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
