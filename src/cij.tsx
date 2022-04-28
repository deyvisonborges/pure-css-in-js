import { CSSProperties, ReactElement, ReactNode } from "react";

const cij = (className: string, css: CSSProperties) => {
  if (typeof document !== "undefined") {
    let head = document.head || document.getElementsByTagName("head")[0];
    let style = document.createElement("style");

    style.type = "text/css";
    head.appendChild(style);
    style.appendChild(
      document.createTextNode(`.${className} {
      color: red; 
    }`)
    );
  }
};

type ButtonProps = {
  css?: CSSProperties;
  children: string | ReactElement | ReactNode;
};

export function Button({ children, css }: ButtonProps) {
  return <button className="button" {...cij('button', css!)}>{children}</button>;
}
