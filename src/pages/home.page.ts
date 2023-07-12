import { TailwindElement } from '../shared/tailwind.element'
import { customElement } from 'lit/decorators.js'
import { html, type TemplateResult } from 'lit'

import '../components/typography/pagetitle.typography'
import '../components/avatar'
import {
  GitHubIcon,
  LinkedInIcon
} from '../components/socialLink'
import '../components/article'
import '../components/imagecarousel'
import '../components/contentwrapper'
import '../components/employment'
import '../components/contact'
import '../components/downloadbutton'
import '../components/footer'
import roll_1 from '../assets/carousel/roll_1.webp'
import roll_2 from '../assets/carousel/roll_2.webp'
import roll_3 from '../assets/carousel/roll_3.webp'
import roll_4 from '../assets/carousel/roll_4.webp'
import roll_5 from '../assets/carousel/roll_5.webp'
import logo_flemish_gov from '../assets/logos/flemishGov.webp'
import logo_echoweb from '../assets/logos/echoweb.webp'
import logo_procius from '../assets/logos/procius.webp'

@customElement('sandbox-home-page')
export class HomePage extends TailwindElement {
  protected override render (): TemplateResult {
    return html`
      <sandbox-page>
        <sandbox-content>
          <div class="relative px-4 sm:px-8 lg:px-12">
            <sandbox-page-title
                title="Software designer, network engineer, and lightning tech.">
              I’m Mathias, a software designer and network engineer based in
              Lebbeke, Belgium.<br/>In my spare time I like to fiddle with
              stage lights.<br/>
              Currently full-time employed at the Department of
              Environment of the Flemish Government.
            </sandbox-page-title>
            <div class="flex gap-6">
              <!-- socials -->
              <sandbox-social-icon-link href="https://github.com"
                                        .config="${GitHubIcon}"></sandbox-social-icon-link>
              <sandbox-social-icon-link href="https://github.com"
                                        .config="${LinkedInIcon}"></sandbox-social-icon-link>
            </div>
          </div>
        </sandbox-content>

        <!-- most prominent pics should be on positions 2, 3 and 4 -->
        <sandbox-image-carousel .images="${[
          {
            alt: 'Enjoying a sail trip in Curacao',
            src: roll_5
          },
          {
            alt: 'Luna, my favourite Beagle',
            src: roll_1
          },
          {
            alt: 'Me, somewhere on a hill in France',
            src: roll_2
          },
          {
            alt: 'Phantasialand. Theme parks are just a hobby, I promise',
            src: roll_3
          },
          {
            alt: 'Me on a stage during Pride week',
            src: roll_4
          }
        ]}"></sandbox-image-carousel>

        <div class="sm:px-8 mt-24 md:mt-28">
          <sandbox-content>
            <section class="mx-auto max-w-2xl lg:max-w-5xl mt-6">
              <div
                  class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div class="flex flex-col gap-16">

                  <sandbox-article .date="${new Date('2022-09-05')}"
                                   title="Test title"
                                   body="Test body with some longer text"></sandbox-article>
                  <sandbox-article .date="${new Date('2022-09-05')}"
                                   title="Test title"
                                   body="Test body with some lorem ipsum dolor sit amet dummy text"></sandbox-article>
                  <sandbox-article .date="${new Date('2022-09-05')}"
                                   title="Test title"
                                   body="Test body with some longer text"></sandbox-article>
                  <sandbox-article .date="${new Date('2022-09-05')}"
                                   title="Test title"
                                   body="Test body with some longer text"></sandbox-article>

                </div>
                <div class="space-y-10 lg:pl-16 xl:pl-24">
                  <sandbox-contact-section></sandbox-contact-section>
                  <div
                      class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg viewBox="0 0 24 24" fill="none"
                           stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round"
                           aria-hidden="true" class="h-6 w-6 flex-none">
                        <path
                            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                            class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                        <path
                            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                            class="stroke-zinc-400 dark:stroke-zinc-500"></path>
                      </svg>
                      <span class="ml-3">Work</span></h2>
                    <ol class="mt-6 space-y-4">
                      <li>
                        <sandbox-employment
                            .logo="${{
                              alt: 'Flemish Government logo',
                              src: logo_flemish_gov
                            }}"
                            company="Flemish Government"
                            role="Project manager"
                            since="2022"></sandbox-employment>

                      </li>
                      <li>
                        <sandbox-employment
                            .logo="${{
                              alt: 'Flemish Government logo',
                              src: logo_flemish_gov
                            }}"
                            company="Flemish Government"
                            role="Java developer"
                            since="2018" until="2022"></sandbox-employment>

                      </li>
                      <li>
                        <sandbox-employment
                            .logo="${{
                              alt: 'Echoweb logo',
                              src: logo_echoweb
                            }}"
                            company="Echoweb"
                            role="PHP developer"
                            since="2013" until="2013"></sandbox-employment>
                      </li>
                      <li>
                        <sandbox-employment
                            .logo="${{
                              alt: 'Procius Ltd. logo',
                              src: logo_procius
                            }}"
                            company="Procius Ltd."
                            role="PHP developer (internship)"
                            since="2012" until="2012"></sandbox-employment>
                      </li>
                    </ol>
                    <sandbox-download-button .link="${{
                      href: '#',
                      text: 'Download CV'
                    }}"></sandbox-download-button>
                  </div>
                </div>
              </div>
            </section>
          </sandbox-content>
        </div>
      </sandbox-page>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sandbox-home-page': HomePage
  }
}
