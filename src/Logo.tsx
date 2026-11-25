import styles from "./styles.module.css"

export default function Logo({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["small-logo-white"]} href="./">
        <div className={styles["div"]}>
          <p className={styles["p"]}>{slots[0] ?? "Julian.d®"}</p>
        </div>
      </a>
  )
}
