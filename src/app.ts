import { customElement } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element.ts";
import { router, setRoutes } from "./router.ts";
import { html, type TemplateResult } from "lit";

@customElement("sandbox-app")
export class SandboxApp extends TailwindElement {
  override async firstUpdated(): Promise<void> {
    await this.initRouter();
  }

  private async initRouter(): Promise<void> {
    router.setOutlet(document.querySelector("sandbox-app"));
    await setRoutes();
  }

  protected override render(): TemplateResult {
    return html` <div id="app-content" class="h-full"><slot></slot></div> `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "sandbox-app": SandboxApp;
  }
}
