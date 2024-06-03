/* This file is generated by zits. Do not edit manually */

/** test/rust.rs */
export type SystemSignalProtocolVariantPostCommitStart = {
  type: "PostCommitStart"
  entryType: string
}
export type SystemSignalProtocolVariantPostCommitEnd = {
  type: "PostCommitEnd"
  entryType: string
  succeeded: boolean
}
export type SystemSignalProtocolVariantSelfCallStart = {
  type: "SelfCallStart"
  zomeName: string
  fnName: string
}
export type SystemSignalProtocolVariantSelfCallEnd = {
  type: "SelfCallEnd"
  zomeName: string
  fnName: string
  succeeded: boolean
}
export type SystemSignalProtocol =
  | SystemSignalProtocolVariantPostCommitStart
  | SystemSignalProtocolVariantPostCommitEnd
  | SystemSignalProtocolVariantSelfCallStart
  | SystemSignalProtocolVariantSelfCallEnd;

/**
 * Variants should to discriminated unions
 * The last serde/attribute combo matching the tag should be taken
 */
  /** Per Enum case Docs One */
export type MessageVariantUnitCaseLeft = {
  last_precedent: "UnitCaseLeft"
}
  /** Per Enum case Docs Two */
export type MessageVariantRequestLongTake = {
  last_precedent: "RequestLongTake"
  id: string
  method: string
  params: number
}
export type MessageVariantResponse = {
  last_precedent: "Response"
  id: string
  result: Date
}
export type Message =
  | MessageVariantUnitCaseLeft
  | MessageVariantRequestLongTake
  | MessageVariantResponse;

/** The default enum conversion uses external tagging */
export type ExternalMessage =
  /** Per Enum case Docs One */
  | {
      "UnitCaseLeft": {}
    }
  /** Per Enum case Docs Two */
  | {
      "RequestLongTake": {
        id: string
        method: string
        params: number
      }
    }
  | {
      "Response": {
        id: string
        result: Date
      }
    };

/**
 * All Unit Enums go to union of constant strings (or null types)
 * even if have explicit numeric annotations
 * There is no case renaming on default
 */
export enum Animal {
	Dog = 'Dog',
	Cat = 'Cat',
}

export enum AnimalTwo {
	DogLongExtra = 'DogLongExtra',
	Cat = 'Cat',
}

/** Integer enums should follow rust discrimination if literals (doesn't evaluate expression) */
enum Foo {
  Bar = 0,
  Baz = 123,
  Quux = 124,
}

export enum MarkerPieceType {
	Svg = 'Svg',
	EmojiGroup = 'EmojiGroup',
}
export type MarkerPieceVariantSvg = {svg: number}
export type MarkerPieceVariantEmojiGroup = {emojiGroup: EntryHashB64}
export type MarkerPiece = 
 | MarkerPieceVariantSvg | MarkerPieceVariantEmojiGroup;

export enum PlaysetEntryType {
	SvgMarker = 'SvgMarker',
	EmojiGroup = 'EmojiGroup',
	Template = 'Template',
	Space = 'Space',
}
export type PlaysetEntryVariantSvgMarker = {SvgMarker: SvgMarker}
export type PlaysetEntryVariantEmojiGroup = {EmojiGroup: EmojiGroup}
export type PlaysetEntryVariantTemplate = {Template: Template}
export type PlaysetEntryVariantSpace = {Space: Space}
export type PlaysetEntry = 
 | PlaysetEntryVariantSvgMarker | PlaysetEntryVariantEmojiGroup | PlaysetEntryVariantTemplate | PlaysetEntryVariantSpace;

export enum MessageType {
	Ping = 'Ping',
	Pong = 'Pong',
	NewHere = 'NewHere',
	DeleteHere = 'DeleteHere',
	UpdateHere = 'UpdateHere',
	NewSession = 'NewSession',
	NewSpace = 'NewSpace',
	NewTemplate = 'NewTemplate',
	NewSvgMarker = 'NewSvgMarker',
	NewEmojiGroup = 'NewEmojiGroup',
}
export type Message = 
 | {type: {Ping: null}, content: AgentPubKeyB64}
 | {type: {Pong: null}, content: AgentPubKeyB64}
 | {type: {NewHere: null}, content: HereOutput}
 | {type: {DeleteHere: null}, content: [EntryHashB64, ActionHashB64]}
 | {type: {UpdateHere: null}, content: [number, ActionHashB64, Here]}
 | {type: {NewSession: null}, content: [EntryHashB64, PlacementSession]}
 | {type: {NewSpace: null}, content: EntryHashB64}
 | {type: {NewTemplate: null}, content: EntryHashB64}
 | {type: {NewSvgMarker: null}, content: EntryHashB64}
 | {type: {NewEmojiGroup: null}, content: EntryHashB64}


export enum FakeMessageType {
	Ping = 'Ping',
	Pong = 'Pong',
	NewHere = 'NewHere',
	DeleteHere = 'DeleteHere',
}
export type FakeMessage = 
 | {bob: {Ping: null}, marley: AgentPubKeyB64}
 | {bob: {Pong: null}, marley: AgentPubKeyB64}
 | {bob: {NewHere: null}, marley: null}
 | {bob: {DeleteHere: null}, marley: [EntryHashB64, ActionHashB64]}


export enum MembraneThresholdType {
	CreateEntryCount = 'CreateEntryCount',
	Vouch = 'Vouch',
	Progenitor = 'Progenitor',
}
export type MembraneThresholdVariantCreateEntryCount = {createEntryCount: CreateEntryCountThreshold}
export type MembraneThresholdVariantVouch = {vouch: VouchThreshold}
export type MembraneThresholdVariantProgenitor = {progenitor: null}
export type MembraneThreshold = 
 | MembraneThresholdVariantCreateEntryCount | MembraneThresholdVariantVouch | MembraneThresholdVariantProgenitor;

export enum DirectMessageProtocolType {
	Failure = 'Failure',
	Success = 'Success',
	Mail = 'Mail',
	Ack = 'Ack',
	Chunk = 'Chunk',
	FileManifest = 'FileManifest',
	RequestChunk = 'RequestChunk',
	RequestManifest = 'RequestManifest',
	UnknownEntry = 'UnknownEntry',
	Ping = 'Ping',
}
export type DirectMessageProtocolVariantFailure = {Failure: string}
export type DirectMessageProtocolVariantSuccess = {Success: string}
export type DirectMessageProtocolVariantMail = {Mail: MailMessage}
export type DirectMessageProtocolVariantAck = {Ack: AckMessage}
export type DirectMessageProtocolVariantChunk = {Chunk: FileChunk}
export type DirectMessageProtocolVariantFileManifest = {FileManifest: FileManifest}
export type DirectMessageProtocolVariantRequestChunk = {RequestChunk: EntryHash}
export type DirectMessageProtocolVariantRequestManifest = {RequestManifest: EntryHash}
export type DirectMessageProtocolVariantUnknownEntry = {UnknownEntry: null}
export type DirectMessageProtocolVariantPing = {Ping: null}
export type DirectMessageProtocol = 
 | DirectMessageProtocolVariantFailure | DirectMessageProtocolVariantSuccess | DirectMessageProtocolVariantMail | DirectMessageProtocolVariantAck | DirectMessageProtocolVariantChunk | DirectMessageProtocolVariantFileManifest | DirectMessageProtocolVariantRequestChunk | DirectMessageProtocolVariantRequestManifest | DirectMessageProtocolVariantUnknownEntry | DirectMessageProtocolVariantPing;
