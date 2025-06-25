#!/usr/bin/env node

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './src/gemini.js';
import { main } from './src/gemini.js';

// --- Global unhandled rejection handler ---
process.on('unhandledRejection', (reason) => {
  console.error('=========================================');
  console.error('WARNING: Unhandled Promise Rejection');
  console.error('=========================================');
  console.error('Reason:', reason);
  // Don't exit the process, just log the error
  // This prevents network errors from crashing the application
});

// --- Global Entry Point ---
main().catch((error) => {
  console.error('An unexpected critical error occurred:');
  if (error instanceof Error) {
    console.error(error.stack);
  } else {
    console.error(String(error));
  }
  process.exit(1);
});
