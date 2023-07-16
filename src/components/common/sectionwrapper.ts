import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../../shared/tailwind.element.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";

@customElement("sandbox-section-wrapper")
export class SandboxSectionWrapper extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <div class="relative px-2 sm:px-8 lg:px-12 mt-16">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-section-wrapper": SandboxSectionWrapper;
  }
}
