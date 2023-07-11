import { TailwindElement } from '../shared/tailwind.element'
import { customElement } from 'lit/decorators.js'
import { html, type TemplateResult } from 'lit'

import '../components/contentwrapper'
import '../components/footer'
import avatar from '../assets/mathias.webp'


@customElement('sandbox-error-page')
export class ErrorPage extends TailwindElement {
  protected override render (): TemplateResult {
    return html`
      <div id="mainBody">
        <div class="fixed inset-0 flex justify-center sm:px-8">
          <div class="flex w-full max-w-7xl lg:px-8">
            <div
                class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
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
            <div class="sm:px-8 mt-9">
            <sandbox-content>
              <sandbox-page-title
                  title="404 - not found">
                This is not the page you are looking for!
              </sandbox-page-title>
            </sandbox-content>
            </div>
          </main>
          <sandbox-footer></sandbox-footer>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-error-page': ErrorPage
  }
}
