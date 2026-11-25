import styles from "./styles.module.css"

export default function ExperienceCard2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-6"] + " " + styles["rv-1"]} data-reveal>
        <div className={styles["div-22"]}>
          <p className={styles["p-17"]}>{slots[0] ?? "2018 — 2021"}</p>
        </div>
        <div className={styles["div-23"]}>
          <div className={styles["div-24"]}>
            <h4 className={styles["h4-2"]}>{slots[1] ?? "Junior Designer"}</h4>
          </div>
          <div className={styles["div-25"]}>
            <p className={styles["p-18"]}>{slots[2] ?? "Marseille Started career in a boutique design studio focused on print and identity. Worked across packaging, editorial, and brand collateral. First exposure to the full lifecycle of a brand identity project."}</p>
          </div>
        </div>
        <div className={styles["div-20"]}>
          <div className={styles["div-21"]}>
            <img className={styles["img"]} src={slots[3] ?? "https://framerusercontent.com/images/2vwihHKmFAWaZXAV4HX2BH0Mfw.png?scale-down-to=512&width=812&height=296"} alt="" />
          </div>
        </div>
      </div>
  )
}
