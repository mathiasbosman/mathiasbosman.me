import { TailwindElement } from "../../shared/tailwind.element";
import { html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("sandbox-page-title")
export class SandboxPageTitle extends TailwindElement {
  @property() title = "";

  protected override render(): TemplateResult {
    return html`
      <div class="max-w-2xl">
        <h1
          class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mt-6"
        >
          ${this.title}
        </h1>
        <p class="mt-6 text-base text-zinc-500 dark:text-zinc-400">
          <slot></slot>
        </p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-page-title": SandboxPageTitle;
  }
}
