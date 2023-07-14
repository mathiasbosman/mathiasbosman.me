import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement } from "lit/decorators.js";
import { html, type TemplateResult } from "lit";
import { CONTACT_ACTIVE, LINK_LINKEDIN } from "../constants.ts";

//todo: #302 - rework
@customElement("sandbox-contact-section")
export class SandboxContactSection extends TailwindElement {
  private renderInfo(): TemplateResult | void {
    if (CONTACT_ACTIVE) {
      return html`<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Fill in your email address and I will get in touch.
        </p>
        <div class="mt-6 flex">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required=""
            class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
          />
          <button
            class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
            type="submit"
          >
            Contact me
          </button>
        </div>
        <p class="mt-2 text-sm text-zinc-600 italic dark:text-zinc-400">
          Or email me directly.
        </p>`;
    }

    return html`<p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      Feel free to contact me via
      <a class="text-blue-500 hover:underline" href="${LINK_LINKEDIN.href}"
        >LinkedIn</a
      >.
    </p> `;
  }

  protected override render(): TemplateResult {
    return html`
      <form
        action="/thank-you"
        class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
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
              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            ></path>
            <path
              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
              class="stroke-zinc-400 dark:stroke-zinc-500"
            ></path>
          </svg>
          <span class="ml-3">Contact me</span>
        </h2>
        ${this.renderInfo()}
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-contact-section": SandboxContactSection;
  }
}
