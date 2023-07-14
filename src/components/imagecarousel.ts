import { html, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element.ts";
import { type HTMLImage } from "../shared/utils.ts";

@customElement("sandbox-image-carousel")
export class SandboxImageCarousel extends TailwindElement {
  @property({ attribute: false }) images!: HTMLImage[];

  private renderImage(source: HTMLImage, index: number): TemplateResult {
    const cssRotateClass = index % 2 === 0 ? "-rotate-2" : "rotate-2";

    return html`
      <div
        class="aspect-[9/10] w-32 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${cssRotateClass}"
      >
        <img
          alt="${source.alt}"
          loading="lazy"
          decoding="async"
          src="${source.src}"
          class="inset-0 h-full w-full object-cover"
        />
      </div>
    `;
  }

  protected override render(): TemplateResult {
    return html`
      <div class="mt-8 sm:mt-20">
        <div
          class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
        >
          ${this.images.map((src, key) => {
            return this.renderImage(src, key);
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-image-carousel": SandboxImageCarousel;
  }
}
