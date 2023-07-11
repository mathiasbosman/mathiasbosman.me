import { html, LitElement, type TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('sandbox-error')
export class SandboxError extends LitElement {
  /**
   * The HTML error code
   */
  @property({ type: Number })
    errorCode = 500

  @property({ type: String })
    errorText = 'An error occurred'

  protected override render (): TemplateResult {
    return html`
      <section class="grid min-h-full place-items-center bg-white px-6 py-24
sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-emerald-600">${this.errorCode}</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ${this.errorText}
          </h1>
          <slot></slot>
        </div>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-error': SandboxError
  }
}
