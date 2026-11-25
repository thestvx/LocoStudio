import styles from "./styles.module.css"

export default function ExperienceCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-5"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "80ms" }}>
        <div className={styles["div-16"]}>
          <p className={styles["p-15"]}>{slots[0] ?? "2026-now"}</p>
        </div>
        <div className={styles["div-17"]}>
          <div className={styles["div-18"]}>
            <h4 className={styles["h4"]}>{slots[1] ?? "Independent Brand & Identity Designer"}</h4>
          </div>
          <div className={styles["div-19"]}>
            <p className={styles["p-16"]}>{slots[2] ?? "Working with founders, creative directors, and brand teams across Europe and North America."}</p>
          </div>
        </div>
        <div className={styles["div-20"]}>
          <div className={styles["div-21"]}>
            <img className={styles["img"]} src={slots[3] ?? "https://framerusercontent.com/images/PDuTlKorFqml7swwBWqVrFmRayY.png?scale-down-to=512&width=812&height=296"} alt="" />
          </div>
        </div>
      </div>
  )
}
