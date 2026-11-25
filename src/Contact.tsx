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

export default function Contact({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-139"]}>
        <div className={styles["div-140"]}>
          <div className={styles["div-32"]}>
            <div className={styles["div-141"]}>
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
                      <MenuLink slots={["Contact"]} />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles["div-142"]}>
            <div className={styles["div-96"]}>
              <SmoothScroll slots={[]} />
            </div>
            <section className={styles["hero-2"]}>
              <div className={styles["content-wrapper-10"]}>
                <div className={styles["form"]}>
                  <form className={styles["form-2"]}>
                    <label className={styles["label"]}>
                      <div className={styles["div-143"]}>
                        <div className={styles["div-144"]}>
                          <p className={styles["p-53"]}>{slots[0] ?? "Name"}</p>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["input"]} />
                      </div>
                    </label>
                    <label className={styles["label"]}>
                      <div className={styles["div-143"]}>
                        <div className={styles["div-146"]}>
                          <p className={styles["p-54"]}>{slots[1] ?? "Email"}</p>
                        </div>
                      </div>
                      <div className={styles["div-145"]}>
                        <div className={styles["input"]} />
                      </div>
                    </label>
                    <label className={styles["label"]}>
                      <div className={styles["div-143"]}>
                        <div className={styles["div-147"]}>
                          <p className={styles["p-55"]}>{slots[2] ?? "Project Type"}</p>
                        </div>
                      </div>
                      <div className={styles["div-148"]}>
                        <div className={styles["select"]}>
                          <option className={styles["option"]}>{slots[3] ?? "Select…"}</option>
                          <option className={styles["option-2"]}>{slots[4] ?? "Brand Identity"}</option>
                          <option className={styles["option-2"]}>{slots[5] ?? "Logo & Mark"}</option>
                          <option className={styles["option-2"]}>{slots[6] ?? "Typography System"}</option>
                          <option className={styles["option-2"]}>{slots[7] ?? "Brand Guidelines"}</option>
                          <option className={styles["option-2"]}>{slots[8] ?? "Art Direction"}</option>
                          <option className={styles["option-2"]}>{slots[9] ?? "Other"}</option>
                        </div>
                      </div>
                    </label>
                    <label className={styles["label-2"]}>
                      <div className={styles["div-143"]}>
                        <div className={styles["div-149"]}>
                          <p className={styles["p-56"]}>{slots[10] ?? "Tell me about your project"}</p>
                        </div>
                      </div>
                      <div className={styles["div-150"]}>
                        <div className={styles["textarea"]} />
                      </div>
                    </label>
                    <div className={styles["div-151"]}>
                      <FormButton slots={["Submit"]} />
                    </div>
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                  </form>
                </div>
                <div className={styles["contact-details"]}>
                  <div className={styles["email-wrapper"]}>
                    <div className={styles["div-152"]}>
                      <p className={styles["p-57"]}>{slots[11] ?? "email"}</p>
                    </div>
                    <div className={styles["div-153"]}>
                      <MenuLink4 slots={["Hello@juliandavid.com"]} />
                    </div>
                  </div>
                  <div className={styles["email-wrapper"]}>
                    <div className={styles["div-152"]}>
                      <p className={styles["p-57"]}>{slots[12] ?? "Phone"}</p>
                    </div>
                    <div className={styles["div-154"]}>
                      <MenuLink5 slots={["+33 6 12 34 56 78"]} />
                    </div>
                  </div>
                  <div className={styles["socials"]}>
                    <div className={styles["div-155"]}>
                      <p className={styles["p-58"]}>{slots[13] ?? "social"}</p>
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
                  <div className={styles["title-3"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-156"]}>
                        <h1 className={styles["h1-8"]}>
                          {"Let's build "}
                          <br className={styles["br-3"]} />
                          {"something lasting."}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles["div-10"]} />
          <div className={styles["div-157"]} />
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
                        <MenuLink slots={["Contact"]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-100"]}>
                    <div className={styles["div-101"]}>
                      <p className={styles["p-37"]}>{slots[14] ?? "© 2025 Julian David. All rights reserved. Paris, France."}</p>
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
          <SvgGraphic className={styles["svg"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"236\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"237\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
