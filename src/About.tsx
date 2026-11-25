import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import Logo from "./Logo"
import MenuLink from "./MenuLink"
import MenuLink2 from "./MenuLink2"
import Label from "./Label"
import Label2 from "./Label2"
import Label3 from "./Label3"
import Buttons from "./Buttons"
import Buttons2 from "./Buttons2"
import LayoutJumpPreventer from "./LayoutJumpPreventer"
import SmoothScroll from "./SmoothScroll"
import MenuLink3 from "./MenuLink3"
import CTAButton from "./CTAButton"
import RollingText from "./RollingText"
import TemplateLayout2 from "./TemplateLayout2"
import Framer from "./Framer"
import Text from "./Text"
import AnimatedNumberCounter from "./AnimatedNumberCounter"
import AnimatedNumberCounter2 from "./AnimatedNumberCounter2"
import AnimatedNumberCounter3 from "./AnimatedNumberCounter3"
import Label4 from "./Label4"
import ExperienceCard from "./ExperienceCard"
import ExperienceCard2 from "./ExperienceCard2"
import FormButton from "./FormButton"
import MenuLink4 from "./MenuLink4"
import MenuLink5 from "./MenuLink5"

export default function About({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-112"]}>
        <div className={styles["div-113"]}>
          <div className={styles["div-32"]}>
            <div className={styles["div-33"]}>
              <nav className={styles["desktop"]}>
                <div className={styles["div-34"]}>
                  <div className={styles["div-35"]}>
                    <div className={styles["div-36"]}>
                      <Logo slots={["Julian.d®"]} />
                    </div>
                  </div>
                  <div className={styles["div-37"]}>
                    <div className={styles["div-38"]}>
                      <MenuLink slots={["Projects"]} />
                    </div>
                    <div className={styles["div-39"]}>
                      <MenuLink2 slots={["About"]} />
                    </div>
                    <div className={styles["div-40"]}>
                      <MenuLink slots={["Contact"]} to="/contact" />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles["div-41"]}>
            <section className={styles["about-me"]}>
              <div className={styles["content-wrapper-5"]}>
                <div className={styles["div-32"]}>
                  <div className={styles["div-114"]}>
                    <div className={styles["div-115"]}>
                      <img className={styles["img-12"]} src={slots[0] ?? "https://framerusercontent.com/images/A7NaTi2u89w36YxFdZYHv9UI4.png?scale-down-to=1024&width=1200&height=800"} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles["content-2"]}>
                  <div className={styles["text-3"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-80"]}>
                        <Label slots={["About me"]} />
                      </div>
                    </div>
                    <div className={styles["satisfaction-rate"]}>
                      <p className={styles["p-39"]}>{slots[1] ?? "I grew up between Paris and Marseille, trained at ESAG Penninghen, and spent three years at a branding studio before going independent in 2021."}</p>
                      <div className={styles["p-40"]}>
                        <br className={styles["br"]} />
                      </div>
                      <p className={styles["p-41"]}>{slots[2] ?? "Since then I've worked with founders, creative directors, and brand teams across Europe and North America — always with the same goal: make the brand feel inevitable."}</p>
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-116"]}>
                      <div className={styles["div-117"]}>
                        <img className={styles["img-13"]} src={slots[3] ?? "https://framerusercontent.com/images/TLhMSNFSiwCe2kn0JrRFY4S7Q.png?scale-down-to=512&width=1410&height=644"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["proccess"]}>
              <div className={styles["content-wrapper-6"]}>
                <div className={styles["left-content"]}>
                  <div className={styles["header-3"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-80"] + " " + styles["rv-1"]} data-reveal>
                        <Label slots={["Process"]} />
                      </div>
                    </div>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-118"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "102ms" }}>
                        <h1 className={styles["h1-5"]}>{slots[4] ?? "MY APPROACH"}</h1>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-119"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "102ms" }}>
                    <p className={styles["p-42"]}>{slots[5] ?? "Every project gets my full attention from the first brief to the final file delivery."}</p>
                  </div>
                </div>
                <div className={styles["right-content-steps"]}>
                  <div className={styles["step-1"]}>
                    <div className={styles["countainer-3"]}>
                      <div className={styles["title"]}>
                        <div className={styles["div-120"] + " " + styles["rv-1"]} data-reveal>
                          <div className={styles["p-43"]}>
                            <strong className={styles["strong"]}>{slots[6] ?? "01"}</strong>
                          </div>
                        </div>
                        <div className={styles["div-32"]}>
                          <div className={styles["div-121"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "102ms" }}>
                            <h2 className={styles["h2"]}>{slots[7] ?? "Listen before you look"}</h2>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-122"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "204ms" }}>
                        <p className={styles["p-44"]}>{slots[8] ?? "Every brief contains the brand's real identity if you know how to read it. I spend more time asking questions than sketching."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["step-2"]}>
                    <div className={styles["countainer-4"]}>
                      <div className={styles["title"]}>
                        <div className={styles["div-120"]}>
                          <div className={styles["p-43"]}>
                            <strong className={styles["strong"]}>{slots[9] ?? "02"}</strong>
                          </div>
                        </div>
                        <div className={styles["div-32"]}>
                          <div className={styles["div-121"]}>
                            <h2 className={styles["h2"]}>{slots[10] ?? "Systems over symbols"}</h2>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-123"]}>
                        <p className={styles["p-45"]}>{slots[11] ?? "A logo is the beginning, not the destination. I build the full visual language — the rules, the relationships, the logic that holds everything together."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["step-3"]}>
                    <div className={styles["countainer-4"]}>
                      <div className={styles["title-2"]}>
                        <div className={styles["div-120"]}>
                          <div className={styles["p-43"]}>
                            <strong className={styles["strong"]}>{slots[12] ?? "03"}</strong>
                          </div>
                        </div>
                        <div className={styles["div-32"]}>
                          <div className={styles["div-124"]}>
                            <h2 className={styles["h2-2"]}>{slots[13] ?? "Made to last"}</h2>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-122"]}>
                        <p className={styles["p-44"]}>{slots[14] ?? "Trends are expensive. I design for longevity — identities that work as well in ten years as they do on launch day."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["statistics"]}>
              <div className={styles["div-32"]}>
                <div className={styles["content-wrapper-7"]}>
                  <div className={styles["stats-card-1"] + " " + styles["rv-6"]} data-reveal>
                    <div className={styles["div-125"]}>
                      <AnimatedNumberCounter slots={["6"]} />
                      <AnimatedNumberCounter slots={["0"]} />
                    </div>
                    <div className={styles["satisfaction-rate-2"]}>
                      <p className={styles["p-46"]}>{slots[15] ?? "Years Experience"}</p>
                    </div>
                  </div>
                  <div className={styles["stats-card-1"] + " " + styles["rv-6"]} data-reveal />
                  <div className={styles["stats-card-2"] + " " + styles["rv-6"]} data-reveal>
                    <div className={styles["div-126"]}>
                      <AnimatedNumberCounter2 slots={["15+"]} />
                      <AnimatedNumberCounter2 slots={["0+"]} />
                    </div>
                    <div className={styles["satisfaction-rate-3"]}>
                      <p className={styles["p-47"]}>{slots[16] ?? "Years in the Game"}</p>
                    </div>
                  </div>
                  <div className={styles["stats-card-1"] + " " + styles["rv-6"]} data-reveal />
                  <div className={styles["stats-card-1"] + " " + styles["rv-6"]} data-reveal />
                  <div className={styles["stats-card-2"] + " " + styles["rv-6"]} data-reveal>
                    <div className={styles["div-126"]}>
                      <AnimatedNumberCounter2 slots={["40+"]} />
                      <AnimatedNumberCounter2 slots={["0+"]} />
                    </div>
                    <div className={styles["satisfaction-rate-4"]}>
                      <p className={styles["p-48"]}>{slots[17] ?? "Brands Built"}</p>
                    </div>
                  </div>
                  <div className={styles["stats-card-1"] + " " + styles["rv-6"]} data-reveal />
                  <div className={styles["stats-card-3"] + " " + styles["rv-6"]} data-reveal>
                    <div className={styles["div-127"]}>
                      <AnimatedNumberCounter3 slots={["97%"]} />
                      <AnimatedNumberCounter3 slots={["0%"]} />
                    </div>
                    <div className={styles["satisfaction-rate-5"]}>
                      <p className={styles["p-49"]}>{slots[18] ?? "Client Satisfaction"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["experience"]}>
              <div className={styles["content-wrapper-8"]}>
                <div className={styles["header-4"]}>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-128"] + " " + styles["rv-1"]} data-reveal>
                      <Label4 slots={["Experience"]} />
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-129"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "80ms" }}>
                      <h1 className={styles["h1-6"]}>{slots[19] ?? "MY JOURNEY"}</h1>
                    </div>
                  </div>
                </div>
                <div className={styles["experiences"]}>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-130"]}>
                      <ExperienceCard slots={["2026-now","Independent Brand & Identity Designer","Working with founders, creative directors, and brand teams across Europe and North America.","https://framerusercontent.com/images/PDuTlKorFqml7swwBWqVrFmRayY.png?scale-down-to=512&width=812&height=296"]} />
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-130"]}>
                      <ExperienceCard slots={["2021-2026","Senior Brand Designer","Working with founders, creative directors, and brand teams across Europe and North America.","https://framerusercontent.com/images/aYQPOvOItu56PaCSvZB3waoPRU.png?scale-down-to=512&width=812&height=296"]} />
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-131"]}>
                      <ExperienceCard2 slots={["2018 — 2021","Junior Designer","Marseille Started career in a boutique design studio focused on print and identity. Worked across packaging, editorial, and brand collateral. First exposure to the full lifecycle of a brand identity project.","https://framerusercontent.com/images/2vwihHKmFAWaZXAV4HX2BH0Mfw.png?scale-down-to=512&width=812&height=296"]} />
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-131"]}>
                      <ExperienceCard2 slots={["2012 — 2016","ESAG Penninghen — School of Graphic Design & Art Direction","Five-year program in graphic design and visual communication. Graduated with honors. Thesis focused on the relationship between typographic systems and brand perception.","https://framerusercontent.com/images/2vwihHKmFAWaZXAV4HX2BH0Mfw.png?scale-down-to=512&width=812&height=296"]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["awards"]}>
              <div className={styles["content-wrapper-9"]}>
                <div className={styles["div-132"]}>
                  <div className={styles["header-5"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-49"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "484ms" }}>
                        <Label3 slots={["Aawards"]} />
                      </div>
                    </div>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-133"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "586ms" }}>
                        <h1 className={styles["h1-7"]}>{slots[20] ?? "Awards & Recognition®"}</h1>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-134"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "687ms" }}>
                    <div className={styles["p-50"]}>
                      <span className={styles["span-41"]}>{slots[21] ?? "I don’t chase trophies."}</span>
                      <br className={styles["br-2"]} />
                      <span className={styles["span-41"]}>{slots[22] ?? "but when bold work turns heads,"}</span>
                      <br className={styles["br-2"]} />
                      <span className={styles["span-41"]}>{slots[23] ?? "I don't mind the spotlight"}</span>
                    </div>
                  </div>
                </div>
                <div className={styles["awards-list"]}>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-135"]}>
                      <div className={styles["variant-1-7"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "586ms" }}>
                        <div className={styles["div-136"]}>
                          <div className={styles["indicator-text-3"]}>
                            <p className={styles["p-51"]}>{slots[24] ?? "2025"}</p>
                          </div>
                          <div className={styles["div-137"]}>
                            <h4 className={styles["h4-3"]}>{slots[25] ?? "Site of the Week"}</h4>
                          </div>
                        </div>
                        <div className={styles["div-138"]}>
                          <p className={styles["p-52"]}>{slots[26] ?? "Framer Awards"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-135"]}>
                      <div className={styles["variant-1-7"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "586ms" }}>
                        <div className={styles["div-136"]}>
                          <div className={styles["indicator-text-3"]}>
                            <p className={styles["p-51"]}>{slots[27] ?? "2024"}</p>
                          </div>
                          <div className={styles["div-137"]}>
                            <h4 className={styles["h4-3"]}>{slots[28] ?? "Honorable Mention"}</h4>
                          </div>
                        </div>
                        <div className={styles["div-138"]}>
                          <p className={styles["p-52"]}>{slots[29] ?? "Awwwards"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-135"]}>
                      <div className={styles["variant-1-7"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "586ms" }}>
                        <div className={styles["div-136"]}>
                          <div className={styles["indicator-text-3"]}>
                            <p className={styles["p-51"]}>{slots[30] ?? "2020"}</p>
                          </div>
                          <div className={styles["div-137"]}>
                            <h4 className={styles["h4-3"]}>{slots[31] ?? "Best UI & Innovation"}</h4>
                          </div>
                        </div>
                        <div className={styles["div-138"]}>
                          <p className={styles["p-52"]}>{slots[32] ?? "CSS Design Awards"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-135"]}>
                      <div className={styles["variant-1-7"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "1120ms" }}>
                        <div className={styles["div-136"]}>
                          <div className={styles["indicator-text-3"]}>
                            <p className={styles["p-51"]}>{slots[33] ?? "2017"}</p>
                          </div>
                          <div className={styles["div-137"]}>
                            <h4 className={styles["h4-3"]}>{slots[34] ?? "Clutch Top Creative Agency"}</h4>
                          </div>
                        </div>
                        <div className={styles["div-138"]}>
                          <p className={styles["p-52"]}>{slots[35] ?? "Creative Excellence Awards"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-135"]}>
                      <div className={styles["variant-1-7"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "1120ms" }}>
                        <div className={styles["div-136"]}>
                          <div className={styles["indicator-text-3"]}>
                            <p className={styles["p-51"]}>{slots[36] ?? "2018"}</p>
                          </div>
                          <div className={styles["div-137"]}>
                            <h4 className={styles["h4-3"]}>{slots[37] ?? "Featured in UI/UX & Branding"}</h4>
                          </div>
                        </div>
                        <div className={styles["div-138"]}>
                          <p className={styles["p-52"]}>{slots[38] ?? "Behance"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className={styles["div-32"]}>
              <div className={styles["div-93"]}>
                <section className={styles["desktop-4"]}>
                  <div className={styles["countainer"]}>
                    <div className={styles["picture"]}>
                      <div className={styles["div-94"]}>
                        <img className={styles["img-11"]} src={slots[39] ?? "https://framerusercontent.com/images/8QG3eDL1pIj26ODvocgA6tJwX8.png?scale-down-to=1024&width=736&height=1308"} alt="" />
                      </div>
                    </div>
                    <a className={styles["cta-text"]} href="./contact">
                      <div className={styles["div-95"]}>
                        <p className={styles["p-36"]}>{slots[40] ?? "LET'S WORK TOGETHER"}</p>
                      </div>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            <div className={styles["div-96"]}>
              <SmoothScroll slots={[]} />
            </div>
          </div>
          <div className={styles["div-10"]} />
          <div className={styles["div-97"]} />
          <div className={styles["div-98"]}>
            <div className={styles["div-32"]}>
              <footer className={styles["desktop-5"]}>
                <div className={styles["countainer-2"]}>
                  <div className={styles["div-99"]}>
                    <div className={styles["div-36"]}>
                      <Logo slots={["Julian.d®"]} />
                    </div>
                    <div className={styles["div-37"]}>
                      <div className={styles["div-39"]}>
                        <MenuLink2 slots={["About"]} />
                      </div>
                      <div className={styles["div-38"]}>
                        <MenuLink slots={["Projects"]} />
                      </div>
                      <div className={styles["div-40"]}>
                        <MenuLink slots={["Contact"]} to="/contact" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-100"]}>
                    <div className={styles["div-101"]}>
                      <p className={styles["p-37"]}>{slots[41] ?? "© 2025 Julian David. All rights reserved. Paris, France."}</p>
                    </div>
                    <div className={styles["div-102"]}>
                      <div className={styles["div-103"]}>
                        <MenuLink3 slots={["X"]} />
                      </div>
                      <div className={styles["div-104"]}>
                        <MenuLink3 slots={["Be"]} />
                      </div>
                      <div className={styles["div-105"]}>
                        <MenuLink slots={["LINKEDIN"]} />
                      </div>
                      <div className={styles["div-106"]}>
                        <MenuLink2 slots={["INSTA"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className={styles["div-107"]}>
            <CTAButton slots={["U","s","e","f","o","r","F","r","e","e"]} />
          </div>
        </div>
        <TemplateLayout2 slots={[]} />
      </div>
      <div className={styles["div-108"]}>
        <a className={styles["light-2"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content"]}>
            <div className={styles["div-109"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-38"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom-2"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-110"]} />
      <div className={styles["div-111"]}>
        <span className={styles["span-40"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"385\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"386\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
