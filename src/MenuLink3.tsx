import styles from "./styles.module.css"

export default function MenuLink3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["white-3"]} href="https://x.com">
        <div className={styles["text-1-3"]}>
          <p className={styles["p-9"]}>{slots[0] ?? "X"}</p>
        </div>
        <div className={styles["div-11"]} />
      </a>
  )
}
