import { customElement, property } from "lit/decorators.js";
import type { TemplateResult } from "lit";
import { html } from "lit";
import type { HTMLImage } from "../shared/utils.ts";
import { ImageDecoding } from "../shared/utils.ts";
import { TailwindElement } from "../shared/tailwind.element.ts";

@customElement("sandbox-avatar")
export class SandboxAvatar extends TailwindElement {
  @property() image!: HTMLImage;
  @property() decoding: ImageDecoding = ImageDecoding.Async;
  @property() size = 16;

  protected override render(): TemplateResult {
    const cssSizeString = `h-${this.size} w-${this.size}`;

    return html`
      <div
        class="${cssSizeString} w rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
dark:bg-zinc-800/90 dark:ring-white/10"
      >
        <a
          aria-label="Home"
          class="${cssSizeString} pointer-events-auto block"
          href="/"
        >
          <img
            alt="${this.image.alt}"
            decoding="${this.decoding}"
            class="${cssSizeString} rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
            src="${this.image.src}"
          />
        </a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-avatar": SandboxAvatar;
  }
}
