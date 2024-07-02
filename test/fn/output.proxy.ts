/* This file is generated by zits. Do not edit manually */

import {ZomeProxy} from '@ddd-qc/lit-happ';
import {outputFunctionNames} from './output.fn';
import {OutputUnitEnum, OutputLinkType} from './output.integrity';

/**
 *
 */
export class OutputProxy extends ZomeProxy {
  static readonly DEFAULT_ZOME_NAME = "output";
  static readonly FN_NAMES = outputFunctionNames;
  static readonly ENTRY_TYPES = Object.values(OutputUnitEnum);
  static readonly LINK_TYPES = Object.values(OutputLinkType);
 
  async exportPiece(input: ExportPieceInput): Promise<void> {
    return this.call('export_piece', input);
  }

  async getSessionFromEh(sessionEh: EntryHashB64): Promise<PlacementSession | null> {
    return this.call('get_session_from_eh', sessionEh);
  }

  async createNewSession(input: CreateNextSessionInput): Promise<[EntryHashB64, number]> {
    return this.callBlocking('create_new_session', input);
  }

  async createNewPost(input: CreateNextSessionInput): Promise<[EntryHashB64, number]> {
    return this.callZomeBlockPostCommit('BlogPost','create_new_post', input);
  }

  async createNextSession(input: CreateNextSessionInput): Promise<[EntryHashB64, number]> {
    return this.call('create_next_session', input);
  }

  async getAllPlaysets(): Promise<HcRecord[]> {
    return this.call('get_all_playsets', null);
  }

  async exportPlayset(input: ExportPlaysetInput): Promise<EntryHashB64[]> {
    return this.call('export_playset', input);
  }
}
