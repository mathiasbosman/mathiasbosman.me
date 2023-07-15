import { customElement, property } from "lit/decorators.js";
import type { TemplateResult } from "lit";
import { html } from "lit";
import type { HTMLImage } from "../shared/utils.ts";
import { ImageDecoding } from "../shared/utils.ts";
import { TailwindElement } from "../shared/tailwind.element.ts";

export enum AvatarSize {
  xs = 9,
  s = 16,
}

@customElement("sandbox-avatar")
export class SandboxAvatar extends TailwindElement {
  @property() image!: HTMLImage;
  @property() decoding: ImageDecoding = ImageDecoding.Async;
  @property() size: AvatarSize = AvatarSize.s;

  protected override render(): TemplateResult {
    switch (this.size) {
      case AvatarSize.xs:
        return html`<div
          class="w-9 h-9 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
dark:bg-zinc-800/90 dark:ring-white/10"
        >
          ${this._renderLink()}
        </div>`;
      case AvatarSize.s:
        return html`<div
          class="w-16 h-16 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
dark:bg-zinc-800/90 dark:ring-white/10"
        >
          ${this._renderLink()}
        </div>`;
    }
  }

  private _renderLink(): TemplateResult {
    const cssString = `w-${this.size} h-${this.size}`;
    return html`<a
      aria-label="Home"
      class="${cssString} pointer-events-auto block"
      href="/"
    >
      <img
        alt="${this.image.alt}"
        decoding="${this.decoding}"
        class="${cssString} rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
        src="${this.image.src}"
      />
    </a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-avatar": SandboxAvatar;
  }
}
