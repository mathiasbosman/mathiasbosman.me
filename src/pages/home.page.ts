import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement } from "lit/decorators.js";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { pageTitle } from "../decorators/title.decorator.ts";

import "../components/typography/pagetitle.ts";
import "../components/avatar.ts";
import "../components/imagecarousel.ts";
import "../components/common/contentwrapper.ts";
import "../components/common/page.ts";
import "../components/employment.ts";
import "../components/contact.ts";
import "../components/project.ts";
import "../components/iconlink.ts";

import roll_1 from "../assets/carousel/roll_1.webp";
import roll_2 from "../assets/carousel/roll_2.webp";
import roll_3 from "../assets/carousel/roll_3.webp";
import roll_4 from "../assets/carousel/roll_4.webp";
import roll_5 from "../assets/carousel/roll_5.webp";
import avatar from "../assets/mathias.webp";
import { DEFAULT_TITLE, LINK_GITHUB, LINK_LINKEDIN } from "../constants.tsx";
import { GitHubIcon, LinkedInIcon } from "../shared/icons.tsx";
import { config } from "../models/config/project.config.tsx";
import { experienceConfig } from "../models/config/experience.config.tsx";

@customElement("sandbox-home-page")
@pageTitle(DEFAULT_TITLE)
export class HomePage extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <sandbox-page .renderAvatar="${false}">
        <sandbox-content-wrapper>
          <div class="relative px-2 sm:px-8 lg:px-12">
            <sandbox-avatar
              .image="${{ alt: "Avatar", src: avatar }}"
            ></sandbox-avatar>
            <sandbox-page-title
              title="Software designer, network engineer, and lighting tech."
            >
              I’m Mathias, a software designer and network engineer based in
              Lebbeke, Belgium.<br />In my spare time I like to fiddle with
              stage lights.<br />
              Currently full-time employed at the Department of Environment of
              the Flemish Government.<br />
              Yes, I'm the human of the cute Beagle; her name is Luna.
            </sandbox-page-title>
            <div class="flex gap-6">
              <!-- socials -->
              <sandbox-icon-link
                .link="${LINK_GITHUB}"
                .icon="${GitHubIcon}"
              ></sandbox-icon-link>
              <sandbox-icon-link
                .link="${LINK_LINKEDIN}"
                .icon="${LinkedInIcon}"
              ></sandbox-icon-link>
            </div>
          </div>
        </sandbox-content-wrapper>

        <!-- most prominent pics should be on positions 2, 3 and 4 -->
        <sandbox-image-carousel
          .images="${[
            {
              alt: "Phantasialand. Theme parks are just a hobby, I promise",
              src: roll_3,
            },
            {
              alt: "Enjoying a sail trip in Curacao",
              src: roll_5,
            },
            {
              alt: "Luna, my favourite Beagle",
              src: roll_1,
            },
            {
              alt: "Me, somewhere on a hill in France",
              src: roll_2,
            },
            {
              alt: "Me on a stage during Pride week",
              src: roll_4,
            },
          ]}"
        ></sandbox-image-carousel>

        <div class="sm:px-8 mt-8 md:mt-28 px-2">
          <sandbox-content-wrapper>
            <section class="mx-auto max-w-2xl lg:max-w-5xl mt-6">
              <div
                class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
              >
                <sandbox-projects
                  pinnedOnly="true"
                  .projects="${config.projects}"
                ></sandbox-projects>
                <div class="space-y-10 lg:pl-16 xl:pl-24">
                  <sandbox-contact-section></sandbox-contact-section>
                  <div
                    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                  >
                    <sandbox-employment
                      .experiences="${experienceConfig.experiences}"
                    ></sandbox-employment>
                  </div>
                </div>
              </div>
            </section>
          </sandbox-content-wrapper>
        </div>
      </sandbox-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-home-page": HomePage;
  }
}
