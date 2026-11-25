import styles from "./styles.module.css"

export default function MenuLink2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["white-2"]} href="/about">
        <div className={styles["text-1-2"]}>
          <p className={styles["p-3"]}>{slots[0] ?? "About"}</p>
        </div>
        <div className={styles["div-3"]} />
      </a>
  )
}
