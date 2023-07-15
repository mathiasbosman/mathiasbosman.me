import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../../shared/tailwind.element.ts";
import type { HTMLSimpleLink } from "../../../shared/utils.ts";
import { html } from "lit";
import type { TemplateResult } from "lit";

@customElement("sandbox-footer-link")
export class SandboxFooterLink extends TailwindElement {
  @property() link!: HTMLSimpleLink;

  protected override render(): TemplateResult {
    return html`
      <a
        class="transition hover:text-blue-500 dark:hover:text-blue-400"
        href="${this.link.href}"
        >${this.link.text}</a
      >
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-footer-link": SandboxFooterLink;
  }
}
