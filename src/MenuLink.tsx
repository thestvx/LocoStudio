import styles from "./styles.module.css"

export default function MenuLink({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["white"]} href="./projects">
        <div className={styles["text-1"]}>
          <p className={styles["p-2"]}>{slots[0] ?? "Projects"}</p>
        </div>
        <div className={styles["div-2"]} />
      </a>
  )
}
