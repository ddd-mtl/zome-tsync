/* This file is generated by zits. Do not edit manually */

import {} from './test.types';
import {
/** Types */
HoloHash,
AgentPubKey,
DnaHash,
WasmHash,
EntryHash,
ActionHash,
AnyDhtHash,
KitsuneAgent,
KitsuneSpace,
HoloHashB64,
AgentPubKeyB64,
DnaHashB64,
WasmHashB64,
EntryHashB64,
ActionHashB64,
AnyDhtHashB64,
InstalledAppId,
Signature,
CellId,
DnaProperties,
RoleName,
InstalledCell,
Timestamp,
HoloHashed,
NetworkInfo,
FetchQueueInfo,
/** Action */
SignedActionHashed,
ActionHashed,
ActionType,
Action,
NewEntryAction,
Dna,
AgentValidationPkg,
InitZomesComplete,
CreateLink,
DeleteLink,
OpenChain,
CloseChain,
Update,
Delete,
Create,
/** Capabilities */
CapSecret,
CapClaim,
ZomeCallCapGrant,
CapAccess,
CapGrant,
/** CounterSigning */
//CounterSigningSessionData,
//PreflightRequest,
//CounterSigningSessionTimes,
//ActionBase,
//CounterSigningAgents,
//PreflightBytes,
//Role,
//CountersigningAgentState,
/** DhtOps */
DhtOpType,
DhtOp,
getDhtOpType,
getDhtOpAction,
getDhtOpEntry,
getDhtOpSignature,
/** Entry */
EntryVisibility,
AppEntryDef,
EntryType,
EntryContent,
Entry,
/** Record */
Record,
RecordEntry,
/** admin types */
InstalledAppInfoStatus,
StemCell,
Cell,
CellType,
CellInfo,
AppInfo,
MembraneProof,
FunctionName,
ZomeName,
ZomeDefinition,
IntegrityZome,
CoordinatorZome,
DnaDefinition,
ResourceBytes,
ResourceMap,
CellProvisioning,
DnaVersionSpec,
DnaVersionFlexible,
NetworkSeed,
ZomeLocation,
   } from '@holochain/client';

import {
/** Common */
Dictionary,
DhtOpHashB64,
DhtOpHash,
/** DnaFile */
DnaFile,
DnaDef,
Zomes,
WasmCode,
/** entry-details */
EntryDetails,
RecordDetails,
Details,
DetailsType,
EntryDhtStatus,
/** Validation */
ValidationStatus,
ValidationReceipt,
   } from '@holochain-open-dev/core-types';

import {ZomeProxy} from '@ddd-qc/lit-happ';
import {testFunctionNames} from './test.fn';

/**
 *
 */
export class TestProxy extends ZomeProxy {
  static readonly DEFAULT_ZOME_NAME = "test"
  readonly FN_NAMES = testFunctionNames
 
  async exportPiece(input: ExportPieceInput): Promise<void> {
    return this.call('export_piece', input);
  }

  async getSessionFromEh(sessionEh: EntryHashB64): Promise<PlacementSession | null> {
    return this.call('get_session_from_eh', sessionEh);
  }

  async createNextSession(input: CreateNextSessionInput): Promise<[EntryHashB64, number]> {
    return this.call('create_next_session', input);
  }

  async getAllPlaysets(): Promise<PlaysetOutput[]> {
    return this.call('get_all_playsets', null);
  }

  async exportPlayset(input: ExportPlaysetInput): Promise<EntryHashB64[]> {
    return this.call('export_playset', input);
  }

}
