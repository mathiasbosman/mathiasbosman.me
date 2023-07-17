import { customElement } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element.ts";
import { router, setRoutes } from "./router.ts";
import type { PropertyValues } from "lit";
import { html, type TemplateResult } from "lit";

@customElement("sandbox-app")
export class SandboxApp extends TailwindElement {
  override async firstUpdated(_changedProps: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProps);
    await this.initRouter();
  }

  protected override render(): TemplateResult {
    return html` <div id="app-content" class="h-full"></div> `;
  }

  private async initRouter(): Promise<void> {
    router.setOutlet(document.querySelector("sandbox-app"));
    await setRoutes();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sandbox-app": SandboxApp;
  }
}
