import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { Buffer } from "buffer";
import profilePicutre from "../assets/mathias_large.webp";
import { subTitle } from "../decorators/title.decorator.ts";
import { CONTACT_EMAIL, LINK_GITHUB, LINK_LINKEDIN } from "../constants.ts";
import type { Icon } from "../shared/icons.ts";
import { GitHubIcon, LinkedInIcon } from "../shared/icons.ts";
import type { HTMLSimpleLink } from "../shared/utils.ts";

import "../components/common/page.ts";

@customElement("sandbox-about-page")
@subTitle("About")
export class AboutPage extends TailwindElement {
  private _renderFollowLink(link: HTMLSimpleLink, icon: Icon): TemplateResult {
    return html`
      <a
        class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
        href="${link.href}"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="${icon.svgPath}"
          ></path>
        </svg>
        <span class="ml-4">Follow on ${link.text}</span></a
      >
    `;
  }

  private _sendEmail() {
    const buffer = new Buffer(CONTACT_EMAIL, "base64");
    window.location.href = "mailto:" + buffer.toString();
  }

  protected override render(): TemplateResult {
    return html`
      <sandbox-page>
        <sandbox-content>
          <div class="relative px-2 sm:px-8 lg:px-12 mt-32">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
              >
                <div class="lg:pl-20">
                  <div class="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      alt=""
                      loading="lazy"
                      width="800"
                      height="800"
                      decoding="async"
                      class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                      src="${profilePicutre}"
                    />
                  </div>
                </div>
                <div class="lg:order-first lg:row-span-2">
                  <h1
                    class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
                  >
                    I’m Mathias Bosman. I live in Lebbeke, Belgium, where I try
                    to be the version of myself.
                  </h1>
                  <div
                    class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
                  >
                    <p>
                      In the late 90's I got my hands on a fairly simple Windows
                      desktop rocking the late <em>but great</em> Windows XP
                      operating system to use as a tool for school.
                    </p>
                    <p>
                      In my last teenage years I choose to study "information
                      system", which basically bottled down to learning how to
                      type and learning the programming language Pascal.
                    </p>
                    <p>
                      And that's where the IT spark inside of me became a flame.
                      I went on to study Programming and Multimedia in which I
                      started my career by means of an internship as a PHP Web
                      developer in the United Kingdom. After a short but
                      educational year I returned to Belgium.
                    </p>
                    <p>
                      Today, I'm the team lead -
                      <em>(I prefer "one of the team")</em> - of a small group
                      of Java developers who develop and maintain business
                      applications for the department of environment.
                    </p>
                  </div>
                </div>
                <div class="lg:pl-20">
                  <ul role="list">
                    <li class="mt-4 flex">
                      ${this._renderFollowLink(LINK_GITHUB, GitHubIcon)}
                    </li>
                    <li class="mt-4 flex">
                      ${this._renderFollowLink(LINK_LINKEDIN, LinkedInIcon)}
                    </li>
                    <li
                      class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"
                    >
                      <button
                        class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
                        @click="${this._sendEmail}"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                          ></path>
                        </svg>
                        <span class="ml-4">Send me an email</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </sandbox-content>
      </sandbox-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-about-page": AboutPage;
  }
}
