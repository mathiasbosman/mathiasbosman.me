import { TailwindElement } from "../../../shared/tailwind.element.ts";
import { customElement, property } from "lit/decorators.js";
import type { HTMLSimpleLink } from "../../../shared/utils.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";

import "../contentwrapper.ts";
import "./footer-link.ts";

@customElement("sandbox-footer")
export class SandboxFooter extends TailwindElement {
  @property() links?: HTMLSimpleLink[];

  protected override render(): TemplateResult {
    return html`
      <footer class="mt-32">
        <div class="sm:px-8">
          <sandbox-content-wrapper>
            <div
              class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"
            >
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div
                  class="flex flex-col items-center justify-between gap-6 sm:flex-row"
                >
                  <div
                    class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    ${Array.isArray(this.links)
                      ? this.links.map((link) => {
                          return html`<sandbox-footer-link
                            .link="${link}"
                          ></sandbox-footer-link>`;
                        })
                      : html``}
                  </div>
                  <p class="text-sm text-zinc-400 dark:text-zinc-500">
                    © ${new Date().getFullYear()} Mathias Bosman. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </sandbox-content-wrapper>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-footer": SandboxFooter;
  }
}
