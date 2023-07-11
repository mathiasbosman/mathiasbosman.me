import { html, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import './pages/home.page'
import './pages/error.page'
import { TailwindElement } from './shared/tailwind.element'

/**
 * The app wrapper
 *
 * @slot - This element has a slot
 */
@customElement('sandbox-app')
export class SandboxApp extends TailwindElement {
  override render (): TemplateResult {
    return html`
      <div class="flex flex-col bg-zinc-50 dark:bg-black antialiased">
        <sandbox-home-page></sandbox-home-page>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-app': SandboxApp
  }
}
