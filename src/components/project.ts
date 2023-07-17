import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element.ts";
import type { HTMLImage, HTMLSimpleLink } from "../shared/utils.ts";
import { ImageDecoding } from "../shared/utils.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { LinkIcon } from "../shared/icons.ts";
import type { Project } from "../models/config/project.config.ts";

@customElement("sandbox-projects")
export class SandboxProjects extends TailwindElement {
  @property() projects: Project[] = [];
  @property() grid = false;
  @property() pinnedOnly = false;

  protected override render(): TemplateResult {
    if (this.grid) {
      return html` <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        ${this._renderItems()}
      </div>`;
    }

    return html`
      <div class="grid grid-cols-1 gap-y-16">${this._renderItems()}</div>
    `;
  }

  private _renderItems(): TemplateResult {
    return html`
      ${this.projects
        .filter((project) => (this.pinnedOnly ? project.pinned : true))
        .map((project) => {
          return html`
            <sandbox-projects-item
              .logo="${project.logo}"
              title="${project.title}"
              .link="${project.link}"
            >
              ${project.description}
            </sandbox-projects-item>
          `;
        })}
    `;
  }
}

@customElement("sandbox-projects-item")
export class SandboxProjectItem extends TailwindElement {
  @property() link!: HTMLSimpleLink;
  @property() title!: string;
  @property() logo?: HTMLImage;

  protected override render(): TemplateResult {
    return html`
      <div class="group relative flex flex-col">
        <div
          class="relative z-10 flex h-12 w-12 items-center justify-center
            rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5
            dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          ${this.logo !== null
            ? html` <img
                alt="${this.logo?.alt}"
                loading="lazy"
                width="32"
                height="32"
                decoding=${ImageDecoding.Async}
                data-nimg="1"
                class="h-8 w-8 rounded-full"
                src="${this.logo?.src}"
              />`
            : html``}
        </div>
        <h2
          class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
        >
          <div
            class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50
              opacity-0 transition group-hover:scale-100 group-hover:opacity-100
              dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
          ></div>
          <a href="${this.link?.href}"
            ><span
              class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
            ></span
            ><span class="relative z-10">${this.title}</span></a
          >
        </h2>
        <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <slot></slot>
        </p>
        <p
          class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400
        transition group-hover:text-blue-500 dark:text-zinc-200"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
            <path d="${LinkIcon.svgPath}" fill="currentColor"></path>
          </svg>
          <span class="ml-2">${this.link?.text}</span>
        </p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-projects-item": SandboxProjectItem;
    "sandbox-projects": SandboxProjects;
  }
}
