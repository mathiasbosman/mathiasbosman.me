import { TailwindElement } from '../shared/tailwind.element.ts'
import { html, type TemplateResult } from 'lit'

import './avatar'
import avatar from '../assets/mathias.webp'
import { customElement } from 'lit/decorators.js'

@customElement('sandbox-page')
export class SandboxPage extends TailwindElement {
  protected override render (): TemplateResult {
    return html`
      <div id="mainBody">
        <div class="fixed inset-0 flex justify-center sm:px-8">
          <div class="flex w-full max-w-7xl lg:px-8">
            <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        <div class="relative">
          <main>
            <sandbox-content>
              <header class="mt-6 relative px-4 sm:px-8 lg:px-12">
                <sandbox-avatar alt="Avatar"
                                src="${avatar}"></sandbox-avatar>
              </header>
            </sandbox-content>
            <slot></slot>
          </main>
          <sandbox-footer></sandbox-footer>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-page': SandboxPage
  }
}
