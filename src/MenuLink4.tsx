import styles from "./styles.module.css"

export default function MenuLink4({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["m"]} href="mailto:Hello@juliandavid.com">
        <div className={styles["text-1-4"]}>
          <p className={styles["p-20"]}>{slots[0] ?? "Hello@juliandavid.com"}</p>
        </div>
        <div className={styles["div-28"]} />
      </a>
  )
}
