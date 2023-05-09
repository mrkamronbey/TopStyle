import styles from "./style.module.css";
import "./styles.css";

function Input({
  type,
  style,
  placeholder,
  onChange,
  value,
  key,
  styleInput,
  icon,
  required
}) {
  return (
    <div key={key} className={styles.inputdiv} style={style}>
      <span className={styles.icons}>{icon}</span>
      <input
        type={type}
        required={required}
        style={styleInput}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
