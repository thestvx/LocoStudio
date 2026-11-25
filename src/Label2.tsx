import styles from "./styles.module.css"

export default function Label2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-2"]}>
        <div className={styles["div-5"]}>
          <p className={styles["p-5"]}>{slots[0] ?? "BRAND DESIGNER"}</p>
        </div>
      </div>
  )
}
