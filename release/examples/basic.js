"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic routing element.
 */
const Routing = require("../source");
const DOM = require("@singleware/jsx");
const router = (DOM.create(Routing.Router.Template, null,
    DOM.create(Routing.Route.Template, { path: "/route/a" },
        DOM.create("span", null, "Route A")),
    DOM.create(Routing.Route.Template, { path: "/route/b" },
        DOM.create("span", null, "Route B"))));
/**
 * Opens the route a.
 */
router.open('/route/a');
