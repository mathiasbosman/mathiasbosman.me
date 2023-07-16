import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "../../../shared/tailwind.element.ts";
import type { HTMLSimpleLink } from "../../../shared/utils.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";

@customElement("sandbox-navigation-hamburger")
export class SandboxHamburgerNavigation extends TailwindElement {
  @property() links!: HTMLSimpleLink[];

  @state() popupMenuIsVisible = false;

  protected override render(): TemplateResult {
    return html`
      <div class="pointer-events-auto mx-2 md:hidden justify-end flex">
        <button
          class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="true"
          @click="${this._toggleMenuDialog}"
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="${!this.popupMenuIsVisible}"
            class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div>
          <div
            class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100 ${this
              .popupMenuIsVisible
              ? ""
              : "hidden"}"
            aria-hidden="${!this.popupMenuIsVisible}"
          ></div>
          <!-- popup menu -->
          <div
            class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100 ${this
              .popupMenuIsVisible
              ? ""
              : "hidden"}"
            tabindex="-1"
          >
            <div class="flex flex-row-reverse items-center justify-between">
              <button
                aria-label="Close menu"
                class="-m-1 p-1"
                type="button"
                tabindex="0"
                @click="${this._toggleMenuDialog}"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="${!this.popupMenuIsVisible}"
                  class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                >
                  <path
                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav class="mt-6">
              <ul
                class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
              >
                ${this.links.map((link) => {
                  return html`
                    <li>
                      <a class="block py-2" href="${link.href}">
                        ${link.text}
                      </a>
                    </li>
                  `;
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `;
  }

  private _toggleMenuDialog() {
    this.popupMenuIsVisible = !this.popupMenuIsVisible;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-navigation-hamburger": SandboxHamburgerNavigation;
  }
}
