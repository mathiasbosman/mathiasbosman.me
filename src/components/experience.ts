import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement, property } from "lit/decorators.js";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { ArrowRightIcon } from "../shared/icons.ts";
import type {
  Experience,
  ExperienceConfig,
  ExperienceItem,
} from "../models/config/experience.config.ts";
import { renderPeriodYearString } from "../shared/utils.ts";

@customElement("sandbox-experiences")
export class SandboxExperiences extends TailwindElement {
  @property() config!: ExperienceConfig;

  protected override render(): TemplateResult {
    return html`<div class="space-y-20">
      ${this.config.experiences.map((experience) => {
        return this._renderSection(experience);
      })}
    </div>`;
  }

  private _renderSection(experience: Experience) {
    const uuid = crypto.randomUUID();
    return html`
      <section
        aria-labelledby="${uuid}"
        class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div
          class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4"
        >
          <h2
            id="${uuid}"
            class="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
          >
            ${experience.place}
          </h2>
          <div class="md:col-span-3">
            <div class="space-y-16">
              ${experience.items.map((item) => {
                return this._renderArticle(item);
              })}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private _renderLink(article: ExperienceItem): TemplateResult {
    // from to
    if (article.link) {
      return html`<a href="${article.link.href}">
        ${this._renderSubtitle(article.title)}
      </a>`;
    }

    return html`${this._renderSubtitle(article.title)}`;
  }

  private _renderSubtitle(subtitle: string): TemplateResult {
    return html`<span
        class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
      ></span>
      <span class="relative z-10">${subtitle}</span>`;
  }

  private _renderArticle(article: ExperienceItem) {
    return html`
      <article class="group relative flex flex-col items-start">
        <h3
          class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
        >
          <div
            class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
          ></div>
          ${this._renderLink(article)}
        </h3>
        <p
          class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
        >
          <span
            class="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
            ><span
              class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
            ></span
          ></span>
          ${renderPeriodYearString(article.period, "present")}
        </p>
        ${article.description
          ? html` <p
              class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              ${article.description}
            </p>`
          : html``}
        ${article.link
          ? html` <div
              aria-hidden="true"
              class="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
            >
              ${article.link.text}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                class="ml-1 h-4 w-4 stroke-current"
              >
                <path
                  d="${ArrowRightIcon.svgPath}"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>`
          : html``}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-experiences": SandboxExperiences;
  }
}
