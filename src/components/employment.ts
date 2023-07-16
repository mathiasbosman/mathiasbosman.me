import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement, property } from "lit/decorators.js";
import type { TemplateResult } from "lit";
import { html } from "lit";
import type {
  Experience,
  ExperienceItem,
} from "../models/config/experience.config.ts";
import type { HTMLImage } from "../shared/utils.ts";

@customElement("sandbox-employment")
export class SandboxEmployment extends TailwindElement {
  @property() experiences!: Experience[];

  protected override render(): TemplateResult {
    return html`
      <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            class="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span class="ml-3">Work</span>
      </h2>
      <div class="mt-6">
        ${this.experiences.map((experience) => {
          return experience.items
            .filter((item) => item.pinned)
            .map((item) => {
              return html`
                <sandbox-employment-item
                  .employment="${item}"
                  .logo="${experience.logo}"
                  .company="${experience.place}"
                >
                </sandbox-employment-item>
              `;
            });
        })};
      </div>
      <!-- todo: #301 - download-button -->
    `;
  }
}

@customElement("sandbox-employment-item")
export class SandboxEmploymentItem extends TailwindElement {
  @property() company!: string;
  @property() logo!: HTMLImage;
  @property() employment!: ExperienceItem;

  protected override render(): TemplateResult {
    const until = this.employment.period.to;

    return html`
      <div class="flex gap-4 mt-5">
        ${this.renderLogo()}
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Company</dt>
          <dd
            class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            ${this.company}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            ${this.employment.title}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd
            class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label="${this.employment.period.from.getFullYear()} until ${until !==
            undefined
              ? until.getFullYear()
              : "present"}"
          >
            <time datetime="${this.employment.period.from.getFullYear()}"
              >${this.employment.period.from.getFullYear()}
            </time>
            <span aria-hidden="true">—</span>
            <time
              datetime="${until !== undefined
                ? until.getFullYear()
                : new Date().getFullYear()}"
              >${until !== undefined ? until.getFullYear() : "present"}
            </time>
          </dd>
        </dl>
      </div>
    `;
  }

  private renderLogo(): TemplateResult | undefined {
    if (this.logo !== undefined) {
      return html` <div
        class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
      >
        <img
          alt="${this.logo.alt}"
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          class="h-7 w-7"
          style="color:transparent"
          src="${this.logo.src}"
        />
      </div>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-employment-item": SandboxEmploymentItem;
    "sandbox-employment": SandboxEmployment;
  }
}
