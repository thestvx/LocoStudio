import styles from "./styles.module.css"

export default function Label3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-3"]}>
        <div className={styles["div-6"]}>
          <p className={styles["p-6"]}>{slots[0] ?? "[Intro]"}</p>
        </div>
      </div>
  )
}
