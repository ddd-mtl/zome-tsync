/* This file is generated by zits. Do not edit manually */

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

/** Test duplicate */
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

export interface Link {
  author: HoloHash
  target: HoloHash
  timestamp: Timestamp
  zome_index: ZomeIndex
  link_type: LinkType
  tag: LinkTag
  create_link_hash: HoloHash
}

export type LinkTag = number[];

export type LinkType = number;
