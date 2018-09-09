/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Router element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Current opened path.
   */
  readonly path: string;
  /**
   * Router base path.
   */
  readonly base: string;
  /**
   * Opens the specified path.
   * @param path Path to be opened.
   */
  open: (path: string) => Promise<void>;
  /**
   * Resets the current opened route.
   */
  reset: () => Promise<void>;
}
