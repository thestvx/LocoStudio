import { useParams, Link } from "react-router-dom"
import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
import { getProject } from "./projectsData"
import Logo from "./Logo"
import MenuLink from "./MenuLink"
import MenuLink2 from "./MenuLink2"
import Label from "./Label"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <>
        <RevealWatcher />
        <div className={styles["div-30"]}>
          <p>Project not found.</p>
          <Link to="/">Back home</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <RevealWatcher />
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
                      <MenuLink slots={["Projects"]} to="/projects" />
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
                <img className={styles["img-5"]} src={project.hero} alt={project.title} style={{ width: "100%", height: "auto", borderRadius: 0 }} />
                <div className={styles["top"]} style={{ marginTop: 24 }}>
                  <div className={styles["name"]}>
                    <div className={styles["div-32"]}>
                      <div className={styles["div-43"]}>
                        <p className={styles["p-22"]}>{project.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["short-overview"]}>
                    <div className={styles["div-45"]}>
                      <p className={styles["p-23"]}>{project.slogan}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["intro"]}>
              <div className={styles["content-wrapper-2"]}>
                <div className={styles["div-32"]}>
                  <div className={styles["div-49"]} data-reveal>
                    <Label slots={["[Project]"]} />
                  </div>
                </div>
                <div className={styles["div-32"]}>
                  <div className={styles["div-52"]} data-reveal>
                    <p className={styles["p-39"]}>{project.short[0]}</p>
                  </div>
                </div>
                <div className={styles["logos-thicker"]} style={{ marginTop: 24 }}>
                  <img src={project.wide} alt="" style={{ width: "100%", height: "auto" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 24 }}>
                  <img src={project.img3} alt="" style={{ width: "100%", height: "auto" }} />
                  <img src={project.img4} alt="" style={{ width: "100%", height: "auto" }} />
                </div>
                <div style={{ marginTop: 32 }}>
                  <div className={styles["div-32"]}>
                    <div className={styles["div-80"]}>
                      <Label slots={["Details"]} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 12 }}>
                    <div><p className={styles["p-26"]}>YEAR</p><p className={styles["p-27"]}>{project.year}</p></div>
                    <div><p className={styles["p-26"]}>CLIENT</p><p className={styles["p-27"]}>{project.client}</p></div>
                    <div><p className={styles["p-26"]}>TURNAROUND</p><p className={styles["p-27"]}>{project.turnaround}</p></div>
                    <div><p className={styles["p-26"]}>INDUSTRY</p><p className={styles["p-27"]}>{project.industry}</p></div>
                  </div>
                  <p className={styles["p-27"]} style={{ marginTop: 12 }}>{project.scope}</p>
                </div>
                <div style={{ marginTop: 32 }}>
                  {project.sections.map((s, i) => (
                    <div key={i} style={{ marginBottom: 24 }}>
                      {s.heading ? <h2 className={styles["h1-2"]}>{s.heading}</h2> : null}
                      {s.paragraphs?.map((p, j) => <p key={j} className={styles["p-39"]} style={{ marginTop: 8 }}>{p}</p>)}
                      {s.bullets ? (
                        <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                          {s.bullets.map((b, k) => (
                            <li key={k} className={styles["p-39"]}>
                              {b.title ? <strong>{b.title} — </strong> : null}
                              {b.text}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
