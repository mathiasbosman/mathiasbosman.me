import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import { html, type TemplateResult } from "lit";
import { type HTMLSimpleLink } from "../shared/utils.tsx";
import { type Icon } from "../shared/icons.tsx";

@customElement("sandbox-icon-link")
export class IconLink extends TailwindElement {
  @property() link!: HTMLSimpleLink;
  @property() icon!: Icon;

  protected override render(): TemplateResult {
    return html`
      <a
        class="group -m-1 p-1"
        aria-label="Follow on ${this.icon.name}"
        href="${this.link.href}"
      >
        <svg
          viewbox="0 0 24 24"
          aria-hidden="true"
          class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="${this.icon.svgPath}"
          ></path>
        </svg>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-icon-link": IconLink;
  }
}
