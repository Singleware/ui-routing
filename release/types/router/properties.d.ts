/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Frontend from '@singleware/frontend';

/**
 * Router properties interface.
 */
export interface Properties {
  /**
   * Router classes.
   */
  class?: string;
  /**
   * Router slot.
   */
  slot?: string;
  /**
   * Router source.
   */
  source?: Frontend.Services.Client;
  /**
   * Router base path.
   */
  base?: string;
  /**
   * Router children.
   */
  children?: {};
}
