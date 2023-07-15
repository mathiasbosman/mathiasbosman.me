import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement } from "lit/decorators.js";
import type { TemplateResult } from "lit";
import { html } from "lit";

import "../components/common/contentwrapper.ts";
import "../components/common/page.ts";
import "../components/typography/pagetitle.ts";

//todo: could have the codes passed as prop
@customElement("sandbox-error-page")
export class ErrorPage extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <sandbox-page>
        <sandbox-content-wrapper>
          <div class="relative px-2 sm:px-8 lg:px-12 mt-32">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <sandbox-page-title title="404 - not found">
                This is not the page you are looking for!
              </sandbox-page-title>
            </div>
          </div>
        </sandbox-content-wrapper>
      </sandbox-page>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-error-page": ErrorPage;
  }
}
