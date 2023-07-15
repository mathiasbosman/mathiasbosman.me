import { TailwindElement } from "../../shared/tailwind.element";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { LINK_GITHUB, LINK_LINKEDIN } from "../../constants.ts";

import "../avatar.ts";
import "./footer/footer.ts";
import "./navigation/navigation.ts";

@customElement("sandbox-page")
export class SandboxPage extends TailwindElement {
  @property() renderAvatar = true;

  protected override render(): TemplateResult {
    return html`
      <div
        id="mainBody"
        class="h-full flex flex-col bg-zinc-50 dark:bg-black antialiased"
      >
        <div class="fixed inset-0 flex justify-center sm:px-8">
          <div class="flex w-full max-w-7xl lg:px-8">
            <div
              class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
            ></div>
          </div>
        </div>
        <div class="relative">
          <main>
            <header class="mx-auto max-w-2xl lg:max-w-5xl">
              <sandbox-navigation
                .renderAvatar="${this.renderAvatar}"
                .links="${[
                  { href: "/about", text: "About" },
                  { href: "/projects", text: "Projects" },
                ]}"
              ></sandbox-navigation>
            </header>
            <slot></slot>
          </main>
          <sandbox-footer
            .links="${[LINK_GITHUB, LINK_LINKEDIN]}"
          ></sandbox-footer>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-page": SandboxPage;
  }
}
