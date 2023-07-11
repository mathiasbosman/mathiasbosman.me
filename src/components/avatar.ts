import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from '../shared/tailwind.element'
import { html, type TemplateResult } from 'lit'
import { ImageDecoding } from './utils.layout'

@customElement('sandbox-avatar')
export class SandboxAvatar extends TailwindElement {
  @property() alt: string = ''
  @property() src: string = ''
  @property() decoding: ImageDecoding = ImageDecoding.Async

  protected override render (): TemplateResult {
    return html`
      <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
dark:bg-zinc-800/90 dark:ring-white/10">
        <a aria-label="Home" class="pointer-events-auto" href="/">
      <img alt="${this.alt}" decoding="${this.decoding}"
           class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
           src="${this.src}"/>
        </a>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-avatar': SandboxAvatar
  }
}
