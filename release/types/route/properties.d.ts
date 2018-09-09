/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Frontend from '@singleware/frontend';
import * as Routing from '@singleware/routing';

/**
 * Route properties interface.
 */
export interface Properties {
  /**
   * Route classes.
   */
  class?: string;
  /**
   * Route path.
   */
  path: string;
  /**
   * Determines whether this route must be exact or not.
   */
  exact?: boolean;
  /**
   * Route constraint.
   */
  constraint?: Routing.Constraint;
  /**
   * Route children.
   */
  children?: {};
}
