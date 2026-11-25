import styles from "./styles.module.css"
import States from "./States"
import RevealWatcher from "./RevealWatcher"
import ParallaxWatcher from "./ParallaxWatcher"
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

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <ParallaxWatcher />
      <div className={styles["div-30"]}>
        <div className={styles["div-31"]}>
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
            <section className={styles["hero"]}>
              <div className={styles["content-wrapper"]}>
                <div className={styles["top"]}>
                  <div className={styles["div-32"]}>
                    <div className={styles["image"]}>
                      <div className={styles["div-42"]} data-parallax>
                        <img className={styles["img-2"]} src={slots[0] ?? "https://framerusercontent.com/images/8QG3eDL1pIj26ODvocgA6tJwX8.png?scale-down-to=1024&width=736&height=1308"} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles["name"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-43"]}>
                        <p className={styles["p-22"]}>{slots[1] ?? "Julian"}</p>
                      </div>
                    </div>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-44"]}>
                        <p className={styles["p-22"]}>{slots[2] ?? "David"}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["short-overview"]}>
                    <div className={styles["div-45"]}>
                      <p className={styles["p-23"]}>{slots[3] ?? "Brand & Identity Designer based in Paris"}</p>
                    </div>
                    <div className={styles["div-46"]}>
                      <p className={styles["p-24"]}>{slots[4] ?? "available for selected projects."}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["bottom"]}>
                  <div className={styles["div-47"]}>
                    <Label slots={["PARIS, FR"]} />
                  </div>
                  <div className={styles["div-48"]}>
                    <Label2 slots={["BRAND DESIGNER"]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["intro"]}>
              <div className={styles["content-wrapper-2"]}>
                <div className={styles["div-32"]}>
                  <div className={styles["div-49"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "102ms" }}>
                    <Label3 slots={["[Intro]"]} />
                  </div>
                </div>
                <div className={styles["reveal-text"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "204ms" }}>
                  <div className={styles["div-32"]}>
                    <div className={styles["p-25"]}>
                      <div className={styles["span-7"]}>
                        <span className={styles["span-8"]}>{slots[5] ?? "I"}</span>
                        <span className={styles["span-8"]}>{slots[6] ?? "'"}</span>
                        <span className={styles["span-8"]}>{slots[7] ?? "m"}</span>
                      </div>
                      <div className={styles["span-9"]}>
                        <span className={styles["span-8"]}>{slots[8] ?? "a"}</span>
                      </div>
                      <div className={styles["span-10"]}>
                        <span className={styles["span-8"]}>{slots[9] ?? "b"}</span>
                        <span className={styles["span-8"]}>{slots[10] ?? "r"}</span>
                        <span className={styles["span-8"]}>{slots[11] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[12] ?? "n"}</span>
                        <span className={styles["span-8"]}>{slots[13] ?? "d"}</span>
                      </div>
                      <div className={styles["span-11"]}>
                        <span className={styles["span-8"]}>{slots[14] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[15] ?? "n"}</span>
                        <span className={styles["span-8"]}>{slots[16] ?? "d"}</span>
                      </div>
                      <div className={styles["span-12"]}>
                        <span className={styles["span-8"]}>{slots[17] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[18] ?? "d"}</span>
                        <span className={styles["span-8"]}>{slots[19] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[20] ?? "n"}</span>
                        <span className={styles["span-8"]}>{slots[21] ?? "t"}</span>
                        <span className={styles["span-8"]}>{slots[22] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[23] ?? "t"}</span>
                        <span className={styles["span-8"]}>{slots[24] ?? "y"}</span>
                      </div>
                      <div className={styles["span-13"]}>
                        <span className={styles["span-8"]}>{slots[25] ?? "d"}</span>
                        <span className={styles["span-8"]}>{slots[26] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[27] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[28] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[29] ?? "g"}</span>
                        <span className={styles["span-8"]}>{slots[30] ?? "n"}</span>
                        <span className={styles["span-8"]}>{slots[31] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[32] ?? "r"}</span>
                      </div>
                      <div className={styles["span-14"]}>
                        <span className={styles["span-8"]}>{slots[33] ?? "b"}</span>
                        <span className={styles["span-8"]}>{slots[34] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[35] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[36] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[37] ?? "d"}</span>
                      </div>
                      <div className={styles["span-15"]}>
                        <span className={styles["span-8"]}>{slots[38] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[39] ?? "n"}</span>
                      </div>
                      <div className={styles["span-16"]}>
                        <span className={styles["span-8"]}>{slots[40] ?? "P"}</span>
                        <span className={styles["span-8"]}>{slots[41] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[42] ?? "r"}</span>
                        <span className={styles["span-8"]}>{slots[43] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[44] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[45] ?? "."}</span>
                      </div>
                      <div className={styles["span-17"]}>
                        <span className={styles["span-8"]}>{slots[46] ?? "F"}</span>
                        <span className={styles["span-8"]}>{slots[47] ?? "o"}</span>
                        <span className={styles["span-8"]}>{slots[48] ?? "r"}</span>
                      </div>
                      <div className={styles["span-18"]}>
                        <span className={styles["span-8"]}>{slots[49] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[50] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[51] ?? "x"}</span>
                      </div>
                      <div className={styles["span-19"]}>
                        <span className={styles["span-8"]}>{slots[52] ?? "y"}</span>
                        <span className={styles["span-8"]}>{slots[53] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[54] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[55] ?? "r"}</span>
                        <span className={styles["span-8"]}>{slots[56] ?? "s"}</span>
                      </div>
                      <div className={styles["span-20"]}>
                        <span className={styles["span-8"]}>{slots[57] ?? "I"}</span>
                        <span className={styles["span-8"]}>{slots[58] ?? "'"}</span>
                        <span className={styles["span-8"]}>{slots[59] ?? "v"}</span>
                        <span className={styles["span-8"]}>{slots[60] ?? "e"}</span>
                      </div>
                      <div className={styles["span-21"]}>
                        <span className={styles["span-8"]}>{slots[61] ?? "h"}</span>
                        <span className={styles["span-8"]}>{slots[62] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[63] ?? "l"}</span>
                        <span className={styles["span-8"]}>{slots[64] ?? "p"}</span>
                        <span className={styles["span-8"]}>{slots[65] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[66] ?? "d"}</span>
                      </div>
                      <div className={styles["span-22"]}>
                        <span className={styles["span-8"]}>{slots[67] ?? "f"}</span>
                        <span className={styles["span-8"]}>{slots[68] ?? "o"}</span>
                        <span className={styles["span-8"]}>{slots[69] ?? "u"}</span>
                        <span className={styles["span-8"]}>{slots[70] ?? "n"}</span>
                        <span className={styles["span-8"]}>{slots[71] ?? "d"}</span>
                        <span className={styles["span-8"]}>{slots[72] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[73] ?? "r"}</span>
                        <span className={styles["span-8"]}>{slots[74] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[75] ?? ","}</span>
                      </div>
                      <div className={styles["span-23"]}>
                        <span className={styles["span-8"]}>{slots[76] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[77] ?? "t"}</span>
                        <span className={styles["span-8"]}>{slots[78] ?? "u"}</span>
                        <span className={styles["span-8"]}>{slots[79] ?? "d"}</span>
                        <span className={styles["span-8"]}>{slots[80] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[81] ?? "o"}</span>
                        <span className={styles["span-8"]}>{slots[82] ?? "s"}</span>
                        <span className={styles["span-8"]}>{slots[83] ?? ","}</span>
                      </div>
                      <div className={styles["span-11"]}>
                        <span className={styles["span-8"]}>{slots[84] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[85] ?? "n"}</span>
                        <span className={styles["span-8"]}>{slots[86] ?? "d"}</span>
                      </div>
                      <div className={styles["span-24"]}>
                        <span className={styles["span-8"]}>{slots[87] ?? "c"}</span>
                        <span className={styles["span-8"]}>{slots[88] ?? "r"}</span>
                        <span className={styles["span-8"]}>{slots[89] ?? "e"}</span>
                        <span className={styles["span-8"]}>{slots[90] ?? "a"}</span>
                        <span className={styles["span-8"]}>{slots[91] ?? "t"}</span>
                        <span className={styles["span-8"]}>{slots[92] ?? "i"}</span>
                        <span className={styles["span-8"]}>{slots[93] ?? "v"}</span>
                        <span className={styles["span-8"]}>{slots[94] ?? "e"}</span>
                      </div>
                      <div className={styles["span-25"]}>
                        <span className={styles["span-26"]}>{slots[95] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[96] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[97] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[98] ?? "m"}</span>
                        <span className={styles["span-27"]}>{slots[99] ?? "s"}</span>
                      </div>
                      <div className={styles["span-28"]}>
                        <span className={styles["span-27"]}>{slots[100] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[101] ?? "r"}</span>
                        <span className={styles["span-27"]}>{slots[102] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[103] ?? "n"}</span>
                        <span className={styles["span-27"]}>{slots[104] ?? "s"}</span>
                        <span className={styles["span-27"]}>{slots[105] ?? "l"}</span>
                        <span className={styles["span-27"]}>{slots[106] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[107] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[108] ?? "e"}</span>
                      </div>
                      <div className={styles["span-29"]}>
                        <span className={styles["span-27"]}>{slots[109] ?? "w"}</span>
                        <span className={styles["span-27"]}>{slots[110] ?? "h"}</span>
                        <span className={styles["span-27"]}>{slots[111] ?? "o"}</span>
                      </div>
                      <div className={styles["span-30"]}>
                        <span className={styles["span-27"]}>{slots[112] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[113] ?? "h"}</span>
                        <span className={styles["span-27"]}>{slots[114] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[115] ?? "y"}</span>
                      </div>
                      <div className={styles["span-31"]}>
                        <span className={styles["span-27"]}>{slots[116] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[117] ?? "r"}</span>
                        <span className={styles["span-27"]}>{slots[118] ?? "e"}</span>
                      </div>
                      <div className={styles["span-32"]}>
                        <span className={styles["span-27"]}>{slots[119] ?? "i"}</span>
                        <span className={styles["span-27"]}>{slots[120] ?? "n"}</span>
                        <span className={styles["span-27"]}>{slots[121] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[122] ?? "o"}</span>
                      </div>
                      <div className={styles["span-33"]}>
                        <span className={styles["span-27"]}>{slots[123] ?? "v"}</span>
                        <span className={styles["span-27"]}>{slots[124] ?? "i"}</span>
                        <span className={styles["span-27"]}>{slots[125] ?? "s"}</span>
                        <span className={styles["span-27"]}>{slots[126] ?? "u"}</span>
                        <span className={styles["span-27"]}>{slots[127] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[128] ?? "l"}</span>
                      </div>
                      <div className={styles["span-34"]}>
                        <span className={styles["span-27"]}>{slots[129] ?? "s"}</span>
                        <span className={styles["span-27"]}>{slots[130] ?? "y"}</span>
                        <span className={styles["span-27"]}>{slots[131] ?? "s"}</span>
                        <span className={styles["span-27"]}>{slots[132] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[133] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[134] ?? "m"}</span>
                        <span className={styles["span-27"]}>{slots[135] ?? "s"}</span>
                      </div>
                      <div className={styles["span-35"]}>
                        <span className={styles["span-27"]}>{slots[136] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[137] ?? "h"}</span>
                        <span className={styles["span-27"]}>{slots[138] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[139] ?? "t"}</span>
                      </div>
                      <div className={styles["span-36"]}>
                        <span className={styles["span-27"]}>{slots[140] ?? "s"}</span>
                        <span className={styles["span-27"]}>{slots[141] ?? "c"}</span>
                        <span className={styles["span-27"]}>{slots[142] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[143] ?? "l"}</span>
                        <span className={styles["span-27"]}>{slots[144] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[145] ?? ","}</span>
                      </div>
                      <div className={styles["span-37"]}>
                        <span className={styles["span-27"]}>{slots[146] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[147] ?? "n"}</span>
                        <span className={styles["span-27"]}>{slots[148] ?? "d"}</span>
                        <span className={styles["span-27"]}>{slots[149] ?? "u"}</span>
                        <span className={styles["span-27"]}>{slots[150] ?? "r"}</span>
                        <span className={styles["span-27"]}>{slots[151] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[152] ?? ","}</span>
                      </div>
                      <div className={styles["span-11"]}>
                        <span className={styles["span-27"]}>{slots[153] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[154] ?? "n"}</span>
                        <span className={styles["span-27"]}>{slots[155] ?? "d"}</span>
                      </div>
                      <div className={styles["span-38"]}>
                        <span className={styles["span-27"]}>{slots[156] ?? "m"}</span>
                        <span className={styles["span-27"]}>{slots[157] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[158] ?? "a"}</span>
                        <span className={styles["span-27"]}>{slots[159] ?? "n"}</span>
                      </div>
                      <div className={styles["span-39"]}>
                        <span className={styles["span-27"]}>{slots[160] ?? "s"}</span>
                        <span className={styles["span-27"]}>{slots[161] ?? "o"}</span>
                        <span className={styles["span-27"]}>{slots[162] ?? "m"}</span>
                        <span className={styles["span-27"]}>{slots[163] ?? "e"}</span>
                        <span className={styles["span-27"]}>{slots[164] ?? "t"}</span>
                        <span className={styles["span-27"]}>{slots[165] ?? "h"}</span>
                        <span className={styles["span-27"]}>{slots[166] ?? "i"}</span>
                        <span className={styles["span-27"]}>{slots[167] ?? "n"}</span>
                        <span className={styles["span-27"]}>{slots[168] ?? "g"}</span>
                        <span className={styles["span-27"]}>{slots[169] ?? "."}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["logos-thicker"]}>
                  <ul className={styles["ul"] + " " + styles["rv-2"]} data-reveal>
                    <li className={styles["li"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[170] ?? "https://framerusercontent.com/images/aYIIG8dA3cNo5NcxxhQGxv8Y.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[171] ?? "https://framerusercontent.com/images/2xriBpFqiCgTMHQotE6tun24.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[172] ?? "https://framerusercontent.com/images/CDLwJCuG1TtOvwjIE6GnMy0cM.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-2"]}>
                      <div className={styles["logo-4"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-4"]} src={slots[173] ?? "https://framerusercontent.com/images/LIFO35DkRjdPxjbrjAYyzBMgW0.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-2"]}>
                      <div className={styles["logo-4"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[174] ?? "https://framerusercontent.com/images/lyxejJLH10XraRFEmkVOZX98H8.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[175] ?? "https://framerusercontent.com/images/sfjFVO1QYdIgT0v1t24JgnP7I.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[176] ?? "https://framerusercontent.com/images/aYIIG8dA3cNo5NcxxhQGxv8Y.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[177] ?? "https://framerusercontent.com/images/2xriBpFqiCgTMHQotE6tun24.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[178] ?? "https://framerusercontent.com/images/CDLwJCuG1TtOvwjIE6GnMy0cM.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-4"]}>
                      <div className={styles["logo-4"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-4"]} src={slots[179] ?? "https://framerusercontent.com/images/LIFO35DkRjdPxjbrjAYyzBMgW0.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-4"]}>
                      <div className={styles["logo-4"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[180] ?? "https://framerusercontent.com/images/lyxejJLH10XraRFEmkVOZX98H8.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["logo-1"]}>
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <img className={styles["img-3"]} src={slots[181] ?? "https://framerusercontent.com/images/sfjFVO1QYdIgT0v1t24JgnP7I.png?scale-down-to=512&width=1000&height=1000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles["div-32"]}>
                  <div className={styles["div-52"] + " " + styles["rv-3"]} data-reveal>
                    <Buttons slots={["More about me"]} />
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["projects"]}>
              <div className={styles["content-wrapper-3"]}>
                <div className={styles["header"]}>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-53"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "358ms" }}>
                      <h1 className={styles["h1"]}>{slots[182] ?? "SELECTED CASES"}</h1>
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-54"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "564ms" }}>
                      <Buttons2 slots={["All Projects"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["projects-2"]}>
                  <div className={styles["project-1"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-55"]}>
                        <a className={styles["project-1-2"]} href="/projects/volta-studio">
                          <div className={styles["top-2"]}>
                            <div className={styles["div-56"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "358ms" }}>
                              <div className={styles["div-57"]}>
                                <img className={styles["img-5"]} src={slots[183] ?? "https://framerusercontent.com/images/PdP5tVHd8Wg8Lw8aCFzG47M2vo.png?width=736&height=920"} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles["stats-card"]}>
                            <div className={styles["div-58"]}>
                              <p className={styles["p-26"]}>{slots[184] ?? "VOLTA STUDIO"}</p>
                            </div>
                            <div className={styles["div-59"]}>
                              <p className={styles["p-27"]}>{slots[185] ?? "2025"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["project-2"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-60"]}>
                        <a className={styles["project-1-3"]} href="/projects/sonikk">
                          <div className={styles["top-3"]}>
                            <div className={styles["div-61"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "930ms" }}>
                              <div className={styles["div-62"]}>
                                <img className={styles["img-6"]} src={slots[186] ?? "https://framerusercontent.com/images/5pBVCVZADhWgqTN6z1BJDSZ3y2Q.png?scale-down-to=512&width=1600&height=1070"} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles["stats-card-2"]}>
                            <div className={styles["div-63"]}>
                              <p className={styles["p-28"]}>{slots[187] ?? "Sonikk"}</p>
                            </div>
                            <div className={styles["div-59"]}>
                              <p className={styles["p-27"]}>{slots[188] ?? "2025"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["project-3"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-64"]}>
                        <a className={styles["project-1-4"]} href="/projects/aura">
                          <div className={styles["top-4"]}>
                            <div className={styles["div-65"] + " " + styles["rv-4"]} data-reveal>
                              <div className={styles["div-66"]}>
                                <img className={styles["img-7"]} src={slots[189] ?? "https://framerusercontent.com/images/746yFa87Rvmgn3PyfEdUjV5uz4.png?scale-down-to=512&width=1200&height=1200"} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles["stats-card-3"]}>
                            <div className={styles["div-67"]}>
                              <p className={styles["p-29"]}>{slots[190] ?? "Aura"}</p>
                            </div>
                            <div className={styles["div-59"]}>
                              <p className={styles["p-27"]}>{slots[191] ?? "2026"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["project-4"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-68"]}>
                        <a className={styles["project-1-5"]} href="/projects/norde">
                          <div className={styles["top-5"]}>
                            <div className={styles["div-69"] + " " + styles["rv-4"]} data-reveal>
                              <div className={styles["div-70"]}>
                                <img className={styles["img-8"]} src={slots[192] ?? "https://framerusercontent.com/images/iDFbaSJhOcp8V6igSlzNbKDVg.png?scale-down-to=1024&width=1588&height=2382"} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles["stats-card-4"]}>
                            <div className={styles["div-71"]}>
                              <p className={styles["p-30"]}>{slots[193] ?? "NORDE"}</p>
                            </div>
                            <div className={styles["div-59"]}>
                              <p className={styles["p-27"]}>{slots[194] ?? "2026"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["project-5"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-72"]}>
                        <a className={styles["project-1-6"]} href="/projects/aeromatch">
                          <div className={styles["top-6"]}>
                            <div className={styles["div-73"] + " " + styles["rv-4"]} data-reveal>
                              <div className={styles["div-74"]}>
                                <img className={styles["img-9"]} src={slots[195] ?? "https://framerusercontent.com/images/xDmOnS9JbXvC9Xj3ws5bB9NWUy0.png?scale-down-to=512&width=1200&height=1200"} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles["stats-card-5"]}>
                            <div className={styles["div-75"]}>
                              <p className={styles["p-31"]}>{slots[196] ?? "AeroMatch™"}</p>
                            </div>
                            <div className={styles["div-59"]}>
                              <p className={styles["p-27"]}>{slots[197] ?? "2026"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles["project-6"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-76"]}>
                        <a className={styles["project-1-7"]} href="/projects/maison-forel">
                          <div className={styles["top-7"]}>
                            <div className={styles["div-77"] + " " + styles["rv-4"]} data-reveal>
                              <div className={styles["div-78"]}>
                                <img className={styles["img-10"]} src={slots[198] ?? "https://framerusercontent.com/images/bHSZywnPvMUO7JKReMi7h8HOE4A.png?scale-down-to=512&width=1200&height=1200"} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className={styles["stats-card-6"]}>
                            <div className={styles["div-79"]}>
                              <p className={styles["p-32"]}>{slots[199] ?? "MAISON FOREL"}</p>
                            </div>
                            <div className={styles["div-59"]}>
                              <p className={styles["p-27"]}>{slots[200] ?? "2026"}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["services"]}>
              <div className={styles["content-wrapper-4"]}>
                <div className={styles["header-2"]}>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-80"] + " " + styles["rv-1"]} data-reveal>
                      <Label slots={["Services"]} />
                    </div>
                  </div>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-81"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "78ms" }}>
                      <h1 className={styles["h1-2"]}>{slots[201] ?? "My Practice."}</h1>
                    </div>
                  </div>
                </div>
                <div className={styles["div-32"]}>
                  <div className={styles["div-82"]}>
                    <div className={styles["desktop-2"]}>
                      <div className={styles["div-83"]}>
                        <States
                          a={<>
                            <div className={styles["desktop-3"] + " " + styles["rv-5"]} data-reveal>
                              <div className={styles["div-84"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["indicator-text"]}>
                                    <p className={styles["p-33"]}>{"01"}</p>
                                  </div>
                                  <div className={styles["div-86"]}>
                                    <h1 className={styles["h1-3"]}>{"Brand Identity"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus"]}>
                                  <div className={styles["line"]} />
                                  <div className={styles["line-2"]} />
                                </div>
                              </div>
                              <div className={styles["div-87"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["expanded"]}>
                              <div className={styles["div-88"]}>
                                <div className={styles["div-89"]}>
                                  <div className={styles["indicator-text-2"]}>
                                    <p className={styles["p-34"]}>{"01"}</p>
                                  </div>
                                  <div className={styles["div-90"]}>
                                    <h1 className={styles["h1-4"]}>{"Brand Identity"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus-2"]}>
                                  <div className={styles["line-3"]} />
                                  <div className={styles["line-4"]} />
                                </div>
                              </div>
                              <div className={styles["div-91"]}>
                                <div className={styles["students-recommend-uft-to-friends"]}>
                                  <p className={styles["p-35"]}>{"The full picture. I develop complete visual identities from the ground up — starting with a deep understanding of your brand's values, audience, and positioning, and translating that into a cohesive system that works across every touchpoint. This is the foundation everything else builds on."}</p>
                                </div>
                              </div>
                              <div className={styles["div-92"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-83"]}>
                        <States
                          a={<>
                            <div className={styles["desktop-3"] + " " + styles["rv-5"]} data-reveal>
                              <div className={styles["div-84"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["indicator-text"]}>
                                    <p className={styles["p-33"]}>{"02"}</p>
                                  </div>
                                  <div className={styles["div-86"]}>
                                    <h1 className={styles["h1-3"]}>{"Typography & Type Direction"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus"]}>
                                  <div className={styles["line"]} />
                                  <div className={styles["line-2"]} />
                                </div>
                              </div>
                              <div className={styles["div-87"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["expanded"]}>
                              <div className={styles["div-88"]}>
                                <div className={styles["div-89"]}>
                                  <div className={styles["indicator-text-2"]}>
                                    <p className={styles["p-34"]}>{"02"}</p>
                                  </div>
                                  <div className={styles["div-90"]}>
                                    <h1 className={styles["h1-4"]}>{"Typography & Type Direction"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus-2"]}>
                                  <div className={styles["line-3"]} />
                                  <div className={styles["line-4"]} />
                                </div>
                              </div>
                              <div className={styles["div-91"]}>
                                <div className={styles["students-recommend-uft-to-friends"]}>
                                  <p className={styles["p-35"]}>{"Type is voice. The fonts a brand uses carry as much personality as its logo — maybe more. I select and pair typefaces with intention, establish hierarchy rules, and create typographic systems that remain consistent whether they appear on a billboard or a business card."}</p>
                                </div>
                              </div>
                              <div className={styles["div-92"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-83"]}>
                        <States
                          a={<>
                            <div className={styles["desktop-3"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "564ms" }}>
                              <div className={styles["div-84"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["indicator-text"]}>
                                    <p className={styles["p-33"]}>{"03"}</p>
                                  </div>
                                  <div className={styles["div-86"]}>
                                    <h1 className={styles["h1-3"]}>{"Brand Guidelines"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus"]}>
                                  <div className={styles["line"]} />
                                  <div className={styles["line-2"]} />
                                </div>
                              </div>
                              <div className={styles["div-87"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["expanded"]}>
                              <div className={styles["div-88"]}>
                                <div className={styles["div-89"]}>
                                  <div className={styles["indicator-text-2"]}>
                                    <p className={styles["p-34"]}>{"03"}</p>
                                  </div>
                                  <div className={styles["div-90"]}>
                                    <h1 className={styles["h1-4"]}>{"Brand Guidelines"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus-2"]}>
                                  <div className={styles["line-3"]} />
                                  <div className={styles["line-4"]} />
                                </div>
                              </div>
                              <div className={styles["div-91"]}>
                                <div className={styles["students-recommend-uft-to-friends"]}>
                                  <p className={styles["p-35"]}>{"The document that keeps everything consistent long after launch. A detailed brand manual covering logo usage, color system, typography, tone of voice, imagery direction, and do's and don'ts. Built for real-world use — so your team, your printer, and your next designer all speak the same visual language."}</p>
                                </div>
                              </div>
                              <div className={styles["div-92"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-83"]}>
                        <States
                          a={<>
                            <div className={styles["desktop-3"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "564ms" }}>
                              <div className={styles["div-84"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["indicator-text"]}>
                                    <p className={styles["p-33"]}>{"04"}</p>
                                  </div>
                                  <div className={styles["div-86"]}>
                                    <h1 className={styles["h1-3"]}>{"ART DIRECTION"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus"]}>
                                  <div className={styles["line"]} />
                                  <div className={styles["line-2"]} />
                                </div>
                              </div>
                              <div className={styles["div-87"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["expanded"]}>
                              <div className={styles["div-88"]}>
                                <div className={styles["div-89"]}>
                                  <div className={styles["indicator-text-2"]}>
                                    <p className={styles["p-34"]}>{"04"}</p>
                                  </div>
                                  <div className={styles["div-90"]}>
                                    <h1 className={styles["h1-4"]}>{"ART DIRECTION"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus-2"]}>
                                  <div className={styles["line-3"]} />
                                  <div className={styles["line-4"]} />
                                </div>
                              </div>
                              <div className={styles["div-91"]}>
                                <div className={styles["students-recommend-uft-to-friends"]}>
                                  <p className={styles["p-35"]}>{"When a brand needs to show up beyond its logo. I direct the visual language of campaigns, photoshoots, and brand moments — ensuring every image, layout, and visual decision feels unmistakably on-brand. Available as a standalone service or as an extension of a larger identity project."}</p>
                                </div>
                              </div>
                              <div className={styles["div-92"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                        />
                      </div>
                      <div className={styles["div-83"]}>
                        <States
                          a={<>
                            <div className={styles["desktop-3"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "564ms" }}>
                              <div className={styles["div-84"]}>
                                <div className={styles["div-85"]}>
                                  <div className={styles["indicator-text"]}>
                                    <p className={styles["p-33"]}>{"05"}</p>
                                  </div>
                                  <div className={styles["div-86"]}>
                                    <h1 className={styles["h1-3"]}>{"Brand strategy"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus"]}>
                                  <div className={styles["line"]} />
                                  <div className={styles["line-2"]} />
                                </div>
                              </div>
                              <div className={styles["div-87"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                          b={<>
                            <div className={styles["expanded"]}>
                              <div className={styles["div-88"]}>
                                <div className={styles["div-89"]}>
                                  <div className={styles["indicator-text-2"]}>
                                    <p className={styles["p-34"]}>{"05"}</p>
                                  </div>
                                  <div className={styles["div-90"]}>
                                    <h1 className={styles["h1-4"]}>{"Brand strategy"}</h1>
                                  </div>
                                </div>
                                <div className={styles["plus-2"]}>
                                  <div className={styles["line-3"]} />
                                  <div className={styles["line-4"]} />
                                </div>
                              </div>
                              <div className={styles["div-91"]}>
                                <div className={styles["students-recommend-uft-to-friends"]}>
                                  <p className={styles["p-35"]}>{"Design without direction is decoration. Before any visual work begins, I help clarify what a brand stands for, who it's speaking to, and how it wants to be perceived. This strategic foundation makes every design decision faster, sharper, and more defensible."}</p>
                                </div>
                              </div>
                              <div className={styles["div-92"]}>
                                <LayoutJumpPreventer slots={[]} />
                              </div>
                            </div>
                          </>}
                        />
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
                        <img className={styles["img-11"]} src={slots[202] ?? "https://framerusercontent.com/images/8QG3eDL1pIj26ODvocgA6tJwX8.png?scale-down-to=1024&width=736&height=1308"} alt="" />
                      </div>
                    </div>
                    <a className={styles["cta-text"]} href="./contact">
                      <div className={styles["div-95"]}>
                        <p className={styles["p-36"]}>{slots[203] ?? "LET'S WORK TOGETHER"}</p>
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
                      <p className={styles["p-37"]}>{slots[204] ?? "© 2025 Julian David. All rights reserved. Paris, France."}</p>
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
          <SvgGraphic className={styles["svg"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"624\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"625\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}

