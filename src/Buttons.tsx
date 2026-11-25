import styles from "./styles.module.css"

export default function Buttons({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-black"]} href="./about">
        <div className={styles["text-default"]}>
          <p className={styles["p-7"]}>{slots[0] ?? "More about me"}</p>
        </div>
        <div className={styles["div-7"]} />
      </a>
  )
}
