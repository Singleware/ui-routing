/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic routing element.
 */
import * as Routing from '../source';
import * as DOM from '@singleware/jsx';

const router = (
  <Routing.Router.Template>
    <Routing.Route.Template path="/route/a">
      <span>Route A</span>
    </Routing.Route.Template>
    <Routing.Route.Template path="/route/b">
      <span>Route B</span>
    </Routing.Route.Template>
  </Routing.Router.Template>
) as Routing.Router.Element;

/**
 * Opens the route a.
 */
router.open('/route/a');
