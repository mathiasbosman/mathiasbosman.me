import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element.ts";
import type { TemplateResult } from "lit";
import { html } from "lit";
import { subTitle } from "../decorators/title.decorator.ts";

import "../components/common/page.ts";
import "../components/common/contentwrapper.ts";
import "../components/common/sectionwrapper.ts";
import "../components/typography/pagetitle.ts";
import "../components/project.ts";
import { config } from "../models/config/project.config.ts";

@customElement("sandbox-projects-page")
@subTitle("Projects")
export class ProjectsPage extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <sandbox-page>
        <sandbox-content-wrapper>
          <sandbox-section-wrapper>
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <sandbox-page-title
                title="Bits and bytes I've put out in the world wide web."
              >
                <p>
                  I’ve worked on tons of little projects over the years that led
                  to nothing but these are the ones that are worth mentioning or
                  that are re-usable. All of them are open-source, so if you see
                  something that piques your interest, check out the code and
                  contribute if you have ideas for how it can be improved.
                </p>
              </sandbox-page-title>
            </div>
            <section class="mt-32 mx-auto max-w-2xl lg:max-w-5xl">
              <sandbox-projects
                grid="true"
                .projects="${config.projects}"
              ></sandbox-projects>
            </section>
          </sandbox-section-wrapper>
        </sandbox-content-wrapper>
      </sandbox-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-projects-page": ProjectsPage;
  }
}
