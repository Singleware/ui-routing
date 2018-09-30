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
const Routing = require("@singleware/routing");
const Path = require("@singleware/path");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Router template class.
 */
let Template = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Router properties.
     * @param children Router children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Router states.
         */
        this.states = {
            path: '',
            base: ''
        };
        /**
         * Router manager.
         */
        this.router = new Routing.Router({
            separator: '/',
            variable: /^\{([a-z_0-9]+)\}$/
        });
        /**
         * Router skeleton.
         */
        this.skeleton = DOM.create("div", { slot: this.properties.slot, class: this.properties.class });
        this.bindProperties();
        this.assignProperties();
        this.registerRoutes(this.children);
        this.reset();
    }
    /**
     * Route match event handler.
     * @param route Route element.
     */
    matchHandler(route) {
        DOM.append(DOM.clear(this.skeleton), route);
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        this.bindComponentProperties(this.skeleton, ['path', 'base', 'open', 'reset']);
    }
    /**
     * Assign all element properties.
     */
    assignProperties() {
        if (this.properties.base) {
            this.states.base = Path.dirname(this.properties.base);
        }
        else if (this.properties.source) {
            this.states.base = Path.dirname(this.properties.source.path);
        }
        else {
            this.states.base = Path.dirname(location.pathname);
        }
    }
    /**
     * Register all specified routes.
     * @param routes List of routes.
     */
    registerRoutes(routes) {
        for (const route of routes) {
            if ('path' in route) {
                this.router.add({
                    path: Path.resolve(this.states.base, route.path),
                    exact: route.exact,
                    constraint: route.constraint,
                    onMatch: () => this.matchHandler(route)
                });
            }
        }
    }
    /**
     * Current opened path.
     */
    get path() {
        return this.states.path;
    }
    /**
     * Router base path.
     */
    get base() {
        return this.states.base;
    }
    /**
     * Router element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    async open(path) {
        const routes = this.router.match(path, void 0);
        while (routes.length) {
            await routes.next();
        }
    }
    /**
     * Resets the current opened route.
     */
    async reset() {
        if (this.properties.source) {
            await this.open(this.properties.source.path);
        }
        else {
            await this.open(location.pathname);
        }
    }
};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "router", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "matchHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "registerRoutes", null);
__decorate([
    Class.Public()
], Template.prototype, "path", null);
__decorate([
    Class.Public()
], Template.prototype, "base", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "open", null);
__decorate([
    Class.Public()
], Template.prototype, "reset", null);
Template = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
