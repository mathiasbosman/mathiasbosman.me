export enum ImageDecoding {
  Auto = 'auto',
  Sync = 'sync',
  Async = 'async'
}

export interface HTMLImage {
  alt: string
  src: string
}

export interface HTMLSimpleLink {
  href: string
  text?: string
}
