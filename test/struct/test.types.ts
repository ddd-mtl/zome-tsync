/* This file is generated by zits. Do not edit manually */

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

/** Doc comments are preserved too! */
export interface Book {
  /** Name of the book. */
  name: string
  /** Chapters of the book. */
  chapters: Chapter[]
  /**
   * Reviews of the book
   * by users.
   */
  user_reviews?: string[]
}

/**
 * Multiple line comments
 * are formatted on
 * separate lines
 */
export interface Chapter {
  title: string
  pages: number
}

/** Generic struct test */
export interface PaginationResult<T> {
  items: T[]
  total_items: number
}

export interface ExportPieceInput {
  cellId: CellId
  pieceEh: EntryHashB64
  pieceTypeName: string
  maybeName?: string
}

/** NewTypes */
export type FindManifestOutput = FileManifest;

export type FindOutput = number | null;

export type GetMailOutput = number | string | null;
