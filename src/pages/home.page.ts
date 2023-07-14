import { TailwindElement } from "../shared/tailwind.element.ts";
import { customElement } from "lit/decorators.js";
import { html, type TemplateResult } from "lit";

import "../components/typography/pagetitle";
import "../components/avatar";
import "../components/imagecarousel";
import "../components/common/contentwrapper";
import "../components/employment";
import "../components/contact";
import "../components/project";

import roll_1 from "../assets/carousel/roll_1.webp";
import roll_2 from "../assets/carousel/roll_2.webp";
import roll_3 from "../assets/carousel/roll_3.webp";
import roll_4 from "../assets/carousel/roll_4.webp";
import roll_5 from "../assets/carousel/roll_5.webp";
import avatar from "../assets/mathias.webp";
import logo_flemish_gov from "../assets/logos/flemishGov.webp";
import logo_echoweb from "../assets/logos/echoweb.webp";
import logo_procius from "../assets/logos/procius.webp";
import logo_bitvavo from "../assets/logos/bitvavo.webp";
import logo_lit from "../assets/logos/lit.webp";
import logo_mqtt from "../assets/logos/mqtt.webp";
import { LINK_GITHUB, LINK_LINKEDIN } from "../constants";
import { GitHubIcon, LinkedInIcon } from "../components/iconlink";

@customElement("sandbox-home-page")
export class HomePage extends TailwindElement {
  protected override render(): TemplateResult {
    return html`
      <sandbox-page>
        <sandbox-content>
          <div class="relative px-4 sm:px-8 lg:px-12">
            <sandbox-page-title
              title="Software designer, network engineer, and lighting tech."
            >
              I’m Mathias, a software designer and network engineer based in
              Lebbeke, Belgium.<br />In my spare time I like to fiddle with
              stage lights.<br />
              Currently full-time employed at the Department of Environment of
              the Flemish Government.<br />
              Yes, the cute Beagle is mine; her name is Luna.
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
        </sandbox-content>

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

        <div class="sm:px-8 mt-8 md:mt-28">
          <sandbox-content>
            <section class="mx-auto max-w-2xl lg:max-w-5xl mt-6">
              <div
                class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
              >
                <sandbox-projects>
                  <sandbox-projects-item
                    .logo="${{ alt: "lit logo", src: logo_lit }}"
                    title="Lit sandbox"
                    .link="${{
                      href: "https://github.com/mathiasbosman/lit-sandbox",
                      text: "GitHub repo",
                    }}"
                  >
                    <p>
                      Sandbox project I used to learn some <b>Lit</b>.<br />
                      Uses Vite and Vitest.
                    </p>
                    <p>It also served as the base for this very website.</p>
                  </sandbox-projects-item>
                  <sandbox-projects-item
                    .logo="${{ alt: "MQTT logo", src: logo_mqtt }}"
                    title="MQTT stress test"
                    .link="${{
                      href: "https://github.com/mathiasbosman/mqtt-stresstest",
                      text: "GitHub repo",
                    }}"
                  >
                    <p>
                      A Spring Boot application to stresstest a MQTT service.
                      Originally used to stresstest ThingsBoard.
                    </p>
                  </sandbox-projects-item>
                  <sandbox-projects-item
                    .logo="${{ src: logo_bitvavo }}"
                    title="Cryptobot"
                    .link="${{
                      href: "https://github.com/mathiasbosman/cryptobot",
                      text: "GitHub repo",
                    }}"
                  >
                    A trial cryptocurrency bot integration for the Bitvavo API.
                    Purely for academic purposes... truly. Written in
                    <b>Java.</b>
                  </sandbox-projects-item>
                  <sandbox-projects-item
                    .logo="${{ src: avatar }}"
                    title="mathiasbosman.be"
                    .link="${{ href: "#", text: "mathiasbosman.be" }}"
                  >
                    <p>
                      This very website!<br />
                      Created using Lit web components, Vite and Tailwind
                    </p>
                  </sandbox-projects-item>
                </sandbox-projects>
                <div class="space-y-10 lg:pl-16 xl:pl-24">
                  <sandbox-contact-section></sandbox-contact-section>
                  <div
                    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                  >
                    <sandbox-employment>
                      <sandbox-employment-item
                        .logo="${{
                          alt: "Flemish Government logo",
                          src: logo_flemish_gov,
                        }}"
                        company="Flemish Government"
                        role="Project manager"
                        since="2022"
                      ></sandbox-employment-item>
                      <sandbox-employment-item
                        .logo="${{
                          alt: "Flemish Government logo",
                          src: logo_flemish_gov,
                        }}"
                        company="Flemish Government"
                        role="Java developer"
                        since="2018"
                        until="2022"
                      ></sandbox-employment-item>
                      <sandbox-employment-item
                        .logo="${{
                          alt: "Echoweb logo",
                          src: logo_echoweb,
                        }}"
                        company="Echoweb"
                        role="PHP developer"
                        since="2013"
                        until="2013"
                      ></sandbox-employment-item>
                      <sandbox-employment-item
                        .logo="${{
                          alt: "Procius Ltd. logo",
                          src: logo_procius,
                        }}"
                        company="Procius Ltd."
                        role="PHP developer (internship)"
                        since="2012"
                        until="2012"
                      ></sandbox-employment-item>
                    </sandbox-employment>
                  </div>
                </div>
              </div>
            </section>
          </sandbox-content>
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
