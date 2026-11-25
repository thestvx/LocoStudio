import styles from "./styles.module.css"

export default function AnimatedNumberCounter3({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-13"]}>{slots[0] ?? "97%"}</p>
  )
}
