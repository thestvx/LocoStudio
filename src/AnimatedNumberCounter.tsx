import styles from "./styles.module.css"

export default function AnimatedNumberCounter({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-11"]}>{slots[0] ?? "6"}</p>
  )
}
