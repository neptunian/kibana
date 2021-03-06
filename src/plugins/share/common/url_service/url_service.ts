/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { LocatorClient, LocatorClientDependencies } from './locators';

export type UrlServiceDependencies = LocatorClientDependencies;

/**
 * Common URL Service client interface for server-side and client-side.
 */
export class UrlService {
  /**
   * Client to work with locators.
   */
  public readonly locators: LocatorClient;

  constructor(protected readonly deps: UrlServiceDependencies) {
    this.locators = new LocatorClient(deps);
  }
}
