import styles from "./styles.module.css"

export default function FormButton({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["default"]}>
        <div className={styles["div-26"]}>
          <p className={styles["p-19"]}>{slots[0] ?? "Submit"}</p>
        </div>
        <div className={styles["div-27"]} />
      </button>
  )
}
