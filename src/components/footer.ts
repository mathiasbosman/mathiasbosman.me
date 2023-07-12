import { TailwindElement } from '../shared/tailwind.element.ts'
import { customElement, property } from 'lit/decorators.js'
import { type HTMLSimpleLink } from './utils.layout.ts'
import { html, type TemplateResult } from 'lit'

import './contentwrapper'

@customElement('sandbox-footer')
export class SandboxFooter extends TailwindElement {
  @property() links: HTMLSimpleLink[] = [{
    href: 'https://github.com/mathiasbosman',
    text: 'GitHub'
  },
  {
    href: 'https://linkedin.com/in/mathiasbosman',
    text: 'LinkedIn'
  }]

  private renderLink (link: HTMLSimpleLink): TemplateResult {
    return html`
      <a class="transition hover:text-blue-500 dark:hover:text-blue-400"
         href="${link.href}">${link.text}</a>
    `
  }

  protected override render (): TemplateResult {
    return html`
      <footer class="mt-32">
        <div class="sm:px-8">
          <sandbox-content>
            <div
                class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div
                    class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div
                      class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    ${this.links.map(link => {
                      return this.renderLink(link)
                    })}
                  </div>
                  <p class="text-sm text-zinc-400 dark:text-zinc-500">©
                    ${new Date().getFullYear()} Mathias Bosman. All rights
                    reserved.</p></div>
              </div>
            </div>
          </sandbox-content>
        </div>
      </footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-footer': SandboxFooter
  }
}
