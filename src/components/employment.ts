import { TailwindElement } from '../shared/tailwind.element.ts'
import { customElement, property } from 'lit/decorators.js'
import { html, type TemplateResult } from 'lit'
import { type HTMLImage } from './utils.layout.ts'
@customElement('sandbox-employment')
export class SandboxEmployment extends TailwindElement {
  @property() logo: HTMLImage | null = null
  @property() company = ''
  @property() role = ''
  @property() since: number = new Date().getFullYear()
  @property() until?: number

  private renderLogo (): TemplateResult | undefined {
    if (this.logo !== null) {
      return html`<div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img alt="${this.logo?.alt}" loading="lazy" width="32"
             height="32"
             decoding="async" data-nimg="1"
             class="h-7 w-7"
             style="color:transparent"
             src="${this.logo?.src}" /></div>`
    }
  }

  protected override render (): TemplateResult {
    return html`
      <div class="flex gap-4">
        ${this.renderLogo()}
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Company</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            ${this.company}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            ${this.role}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label="${this.since} until ${this.until !== undefined ? this.until : 'present'}">
            <time datetime="${this.since}">${this.since}</time>
            <span aria-hidden="true">—</span>
            <time datetime="${this.until !== undefined ? this.until : new Date().getFullYear()}">${this.until !== undefined ? this.until : 'present'}</time>
          </dd>
        </dl>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-employment': SandboxEmployment
  }
}
