import styles from "./styles.module.css"

export default function MenuLink5({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["m-2"]} href="tel:+33612345678">
        <div className={styles["text-1-5"]}>
          <p className={styles["p-21"]}>{slots[0] ?? "+33 6 12 34 56 78"}</p>
        </div>
        <div className={styles["div-29"]} />
      </a>
  )
}
