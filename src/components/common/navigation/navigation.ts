import { html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../../shared/tailwind.element.ts";
import type { HTMLSimpleLink } from "../../../shared/utils.ts";
import type { RouterLocation } from "@vaadin/router";

import "../../avatar.ts";
import "./hamburger.navigation.ts";
import avatar from "../../../assets/mathias.webp";
import { router } from "../../../router.ts";

@customElement("sandbox-navigation")
export class SandboxNavigation extends TailwindElement {
  @property() links!: HTMLSimpleLink[];
  @property() renderAvatar = true;
  @property({ type: Object }) location: RouterLocation = router.location;

  private _renderLink(link: HTMLSimpleLink): TemplateResult {
    // check if link is currently the active page

    const fallback = this.location.route?.path === "(.*)";
    const isCurrentUrl =
      !fallback && this.location.pathname.startsWith(link.href);
    return html`
      <li>
        <a
          class="relative inline-block px-3 py-2 transition hover:text-blue-500 dark:hover:text-blue-400 ${isCurrentUrl
            ? "text-blue"
            : ""}"
          href="${link.href}"
        >
          ${link.text}
          ${isCurrentUrl
            ? html` <span
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"
              ></span>`
            : html``}
        </a>
      </li>
    `;
  }

  private _renderAvatar(): TemplateResult | void {
    if (this.renderAvatar) {
      return html`
        <sandbox-avatar
          .image="${{ src: avatar, alt: "Home" }}"
          size="9"
        ></sandbox-avatar>
      `;
    }
  }

  protected override render(): TemplateResult {
    return html`
      <div
        class="flex justify-between md:justify-center flex-row mt-8 px-4 md:px-2 items-center"
      >
        <div class="md:basis-1/3">${this._renderAvatar()}</div>
        <div class="md:basis-1/3">
          <nav class="pointer-events-auto hidden md:inline-block">
            <ul
              class="flex rounded-full bg-white/90
            px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
            >
              ${this.links.map((link) => {
                return this._renderLink(link);
              })}
            </ul>
          </nav>
        </div>
        <div class="basis-1/3">
          <sandbox-navigation-hamburger
            .links="${this.links}"
          ></sandbox-navigation-hamburger>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-navigation": SandboxNavigation;
  }
}
