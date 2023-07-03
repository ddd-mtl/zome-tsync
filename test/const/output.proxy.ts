/* This file is generated by zits. Do not edit manually */

import {CHUNK_MAX_SIZE, CONST_TEST_1, CONST_TEST_2, CONST_TEST_3, SERDE_JSON_1, SERDE_JSON_2, } from './output.types';
/** User defined external dependencies */
import {ItemLink} from '../deps.types';

import {ZomeProxy} from '@ddd-qc/lit-happ';
import {outputFunctionNames} from './output.fn';

/**
 *
 */
export class OutputProxy extends ZomeProxy {
  static readonly DEFAULT_ZOME_NAME = "output"
  static readonly FN_NAMES = outputFunctionNames
 }
