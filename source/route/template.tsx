/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Routing from '@singleware/routing';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

import { Properties } from './properties';
import { Element } from './element';

/**
 * Route template class.
 */
@Class.Describe()
export class Template extends Control.Component<Properties> {
  /**
   * Router skeleton.
   */
  @Class.Private()
  private skeleton: Element = <div class={this.properties.class}>{this.children}</div> as Element;

  /**
   * Bind exposed properties to the custom element.
   */
  @Class.Private()
  private bindProperties(): void {
    Object.defineProperties(this.skeleton, {
      path: super.bindDescriptor(this, Template.prototype, 'path'),
      exact: super.bindDescriptor(this, Template.prototype, 'exact'),
      constraint: super.bindDescriptor(this, Template.prototype, 'constraint')
    });
  }

  /**
   * Default constructor.
   * @param properties Route properties.
   * @param children Route children.
   */
  constructor(properties?: Properties, children?: any[]) {
    super(properties, children);
    this.bindProperties();
  }

  /**
   * Determines whether this route mus be exact or not.
   */
  @Class.Public()
  public get exact(): boolean {
    return this.properties.exact || false;
  }

  /**
   * Route path.
   */
  @Class.Public()
  public get path(): string {
    return this.properties.path;
  }

  /**
   * Route constraint.
   */
  @Class.Public()
  public get constraint(): Routing.Constraint {
    return this.properties.constraint || {};
  }

  /**
   * Route element.
   */
  @Class.Public()
  public get element(): Element {
    return this.skeleton;
  }
}
