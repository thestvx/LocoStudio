import styles from "./styles.module.css"

export default function AnimatedNumberCounter2({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-12"]}>{slots[0] ?? "15+"}</p>
  )
}
