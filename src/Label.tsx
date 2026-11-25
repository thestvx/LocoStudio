import styles from "./styles.module.css"

export default function Label({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1"]}>
        <div className={styles["div-4"]}>
          <p className={styles["p-4"]}>{slots[0] ?? "PARIS, FR"}</p>
        </div>
      </div>
  )
}
