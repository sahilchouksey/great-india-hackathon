import styles from "./typography.module.scss";

export const TextExtraLarge = ({ type, className, ...props }) => {
  const supportedTypes = ["lg", "md", "sm"];
  const mainClassName = `text-extra-large`;
  if (supportedTypes.includes(type)) {
    return (
      <h1
        className={`${className || ""} ${styles[`${mainClassName}-${type}`]}`}
      >
        {props.children}
      </h1>
    );
  }
};
export const TextLarge = ({ type, className, ...props }) => {
  const supportedTypes = ["lg", "md"];
  const mainClassName = `text-large`;
  if (supportedTypes.includes(type)) {
    return (
      <h4
        className={`${className || ""} ${styles[`${mainClassName}-${type}`]}`}
      >
        {props.children}
      </h4>
    );
  }
};
export const TextMedium = ({ type, className, ...props }) => {
  const supportedTypes = ["lg", "md", "sm"];
  const mainClassName = `text-medium`;
  if (supportedTypes.includes(type)) {
    return (
      <p className={`${className || ""} ${styles[`${mainClassName}-${type}`]}`}>
        {props.children}
      </p>
    );
  }
};

export const TextSmall = ({ type, className, ...props }) => {
  const supportedTypes = ["lg", "md"];
  const mainClassName = `text-small`;
  if (supportedTypes.includes(type)) {
    return (
      <p className={`${className || ""} ${styles[`${mainClassName}-${type}`]}`}>
        {props.children}
      </p>
    );
  }
};
