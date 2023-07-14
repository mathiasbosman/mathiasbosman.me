import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement, property } from "lit/decorators.js";
import { html, type TemplateResult } from "lit";
import type { HTMLSimpleLink } from "../shared/utils.ts";

@customElement("sandbox-download-button")
export class SandboxDownloadButton extends TailwindElement {
  @property() link!: HTMLSimpleLink;

  protected override render(): TemplateResult | void {
    return html`
      <a
        class="inline-flex items-center gap-2 justify-center rounded-md
      py-2 px-3 text-sm outline-offset-2 transition active:transition-none
      bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100
       active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300
       dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50
       dark:active:text-zinc-50/70 group mt-6 w-full"
        href="${this.link.href}"
        >${this.link.text}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600
             dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-download-button": SandboxDownloadButton;
  }
}
