/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Routing from '@singleware/routing';
import * as Path from '@singleware/path';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import * as Route from '../route';

import { Properties } from './properties';
import { Element } from './element';
import { States } from './states';

/**
 * Router template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Router states.
   */
  @Class.Private()
  private states = {
    path: '',
    base: ''
  } as States;

  /**
   * Router manager.
   */
  @Class.Private()
  private router = new Routing.Router<void>({
    separator: '/',
    variable: /^\{([a-z_0-9]+)\}$/
  });

  /**
   * Router skeleton.
   */
  @Class.Private()
  private skeleton = <div slot={this.properties.slot} class={this.properties.class} /> as Element;

  /**
   * Route match event handler.
   * @param route Route element.
   */
  @Class.Private()
  private matchHandler(route: Route.Element): void {
    DOM.append(DOM.clear(this.skeleton), route);
  }

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    this.bindComponentProperties(this.skeleton, ['path', 'base', 'open', 'reset']);
  }

  /**
   * Assign all element properties.
   */
  @Class.Private()
  private assignProperties(): void {
    if (this.properties.base) {
      this.states.base = Path.dirname(this.properties.base);
    } else if (this.properties.source) {
      this.states.base = Path.dirname(this.properties.source.path);
    } else {
      this.states.base = Path.dirname(location.pathname);
    }
  }

  /**
   * Register all specified routes.
   * @param routes List of routes.
   */
  @Class.Private()
  private registerRoutes(routes: Route.Element[]): void {
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
   * Default constructor.
   * @param properties Router properties.
   * @param children Router children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindProperties();
    this.assignProperties();
    this.registerRoutes(this.children);
    this.reset();
  }

  /**
   * Current opened path.
   */
  @Class.Public()
  public get path(): string {
    return this.states.path;
  }

  /**
   * Router base path.
   */
  @Class.Public()
  public get base(): string {
    return this.states.base;
  }

  /**
   * Router element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }

  /**
   * Opens the specified path.
   * @param path Path to be opened.
   */
  @Class.Public()
  public async open(path: string): Promise<void> {
    const routes = this.router.match(path, void 0);
    while (routes.length) {
      await routes.next();
    }
  }

  /**
   * Resets the current opened route.
   */
  @Class.Public()
  public async reset(): Promise<void> {
    if (this.properties.source) {
      await this.open(this.properties.source.path);
    } else {
      await this.open(location.pathname);
    }
  }
}
