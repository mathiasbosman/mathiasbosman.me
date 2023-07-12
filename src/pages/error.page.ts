import { TailwindElement } from '../shared/tailwind.element'
import { customElement } from 'lit/decorators.js'
import { html, type TemplateResult } from 'lit'

import '../components/contentwrapper'
import '../components/footer'
import '../components/typography/pagetitle.typography'

import '../components/page'

@customElement('sandbox-error-page')
export class ErrorPage extends TailwindElement {
  protected override render (): TemplateResult {
    return html`
      <sandbox-page>
          <sandbox-content>
            <div class="relative px-4 sm:px-8 lg:px-12">
            <sandbox-page-title
                title="404 - not found">
              This is not the page you are looking for!
            </sandbox-page-title>
            </div>
          </sandbox-content>
      </sandbox-page>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-error-page': ErrorPage
  }
}
