import styles from "./button.module.scss";
import { Button as Btn } from "react-bootstrap";
import { TextMedium } from "../typography";
import { Link } from "react-router-dom";

export default function Button({
  defaultButton,
  link,
  className,
  type,
  ...props
}) {
  let params = {
    className: link ? `${className} ` : `${styles.button} ${className || ""} `,
  };

  if (defaultButton) {
    params.className += ` ${styles.button} `;
  }
  switch (type) {
    case "primary":
      params.className += ` ${styles["button__primary"]} `;
      break;
    case "secondary":
      params.className += ` ${styles["button__secondary"]} `;
      break;
    case "plain":
      params.className += ` ${styles["button_PLAIN"]} `;
      break;
  }

  // if want to style as default button

  console.log(params.className, type);
  return link ? (
    <Link {...props} {...params} to={link}>
      {props.children}
    </Link>
  ) : (
    <Btn {...props} {...params}>
      <TextMedium type="sm" className="t-medium">
        {props.children}
      </TextMedium>
    </Btn>
  );
}
