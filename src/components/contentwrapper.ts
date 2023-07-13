import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element.ts";
import { html, type TemplateResult } from "lit";

@customElement("sandbox-content")
export class SandboxContentWrapper extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-content": SandboxContentWrapper;
  }
}
