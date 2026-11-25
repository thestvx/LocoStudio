import styles from "./styles.module.css"

export default function Label4({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["variant-1-4"]}>
        <div className={styles["div-15"]}>
          <p className={styles["p-14"]}>{slots[0] ?? "Experience"}</p>
        </div>
      </div>
  )
}
