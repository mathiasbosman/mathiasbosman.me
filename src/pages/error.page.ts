import { TailwindElement } from '../shared/tailwind.element'
import { customElement } from 'lit/decorators.js'
import { html, type TemplateResult } from 'lit'

import '../components/contentwrapper'
import '../components/footer'

import '../components/page'

@customElement('sandbox-error-page')
export class ErrorPage extends TailwindElement {
  protected override render (): TemplateResult {
    return html`
      <sandbox-page>
        <div class="sm:px-8 mt-9">
          <sandbox-content>
            <sandbox-page-title
                title="404 - not found">
              This is not the page you are looking for!
            </sandbox-page-title>
          </sandbox-content>
        </div>
      </sandbox-page>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-error-page': ErrorPage
  }
}
