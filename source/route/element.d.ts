/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Routing from '@singleware/routing';

/**
 * Route element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Route path.
   */
  readonly path: string;
  /**
   * Determines whether this route must be exact or not.
   */
  readonly exact: boolean;
  /**
   * Route constraint.
   */
  readonly constraint: Routing.Constraint;
}
