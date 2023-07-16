import { TailwindElement } from "../../shared/tailwind.element";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("sandbox-page-title")
export class SandboxPageTitle extends TailwindElement {
  @property() title!: string;

  protected override render(): TemplateResult {
    return html`
      <h1
        class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
      >
        ${this.title}
      </h1>
      <p class="mt-6 text-base text-zinc-500 dark:text-zinc-400">
        <slot></slot>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-page-title": SandboxPageTitle;
  }
}
