import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { subTitle } from "../decorators/title.decorator.ts";

import "../components/common/page.ts";
import "../components/common/contentwrapper.ts";
import "../components/common/sectionwrapper.ts";
import "../components/typography/pagetitle.ts";
import "../components/experience.ts";
import { experienceConfig } from "../models/config/experience.config.ts";

@customElement("sandbox-experience-page")
@subTitle("Experience")
export class ExperiencePage extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <sandbox-page>
        <sandbox-content-wrapper>
          <sandbox-section-wrapper>
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <sandbox-page-title title="Some title about the experience page">
                Lorem Ipsum dolor sit amet dummy text
              </sandbox-page-title>
            </div>

            <div class="mt-16 sm:mt-20">
              <sandbox-experiences
                .config="${experienceConfig}"
              ></sandbox-experiences>
            </div>
          </sandbox-section-wrapper>
        </sandbox-content-wrapper>
      </sandbox-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-experience-page": ExperiencePage;
  }
}
