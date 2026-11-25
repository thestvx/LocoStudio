import styles from "./styles.module.css"

export default function RollingText({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-13"]}>
        <div className={styles["p-10"]}>
          <span className={styles["span"]}>{slots[0] ?? "U"}</span>
          <span className={styles["span-2"]}>{slots[1] ?? "s"}</span>
          <span className={styles["span-3"]}>{slots[2] ?? "e"}</span>
          <div className={styles["span-4"]} />
          <span className={styles["span-5"]}>{slots[3] ?? "f"}</span>
          <span className={styles["span-3"]}>{slots[4] ?? "o"}</span>
          <span className={styles["span-6"]}>{slots[5] ?? "r"}</span>
          <div className={styles["span-4"]} />
          <span className={styles["span-3"]}>{slots[6] ?? "F"}</span>
          <span className={styles["span-6"]}>{slots[7] ?? "r"}</span>
          <span className={styles["span-3"]}>{slots[8] ?? "e"}</span>
          <span className={styles["span-3"]}>{slots[9] ?? "e"}</span>
        </div>
      </div>
  )
}
