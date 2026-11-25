import styles from "./styles.module.css"

export default function Buttons2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-black-2"]} href="./projects">
        <div className={styles["text-default-2"]}>
          <p className={styles["p-8"]}>{slots[0] ?? "All Projects"}</p>
        </div>
        <div className={styles["div-8"]} />
      </a>
  )
}
