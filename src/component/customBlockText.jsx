// components/RenderPortableText.jsx
import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import styles from "@/styles/Patient.module.css";
import { Icon } from "@iconify/react";
// Serializer for custom marks
const serializers = {
  list: (props) => {
    const { type } = props;
    const bullet = type === "bullet";
    return bullet ? <ul>{props.children}</ul> : <ol>{props.children}</ol>;
  },
  listItem: (props) => {
    return (
      <li>
        <Icon
          icon="ic:round-check-circle"
          width={25}
          height={25}
          color="#1AC55E"
        />
        <span className="flex-1">{props.children}</span>
      </li>
    );
  },
  marks: {
    gradientText: ({ children }) => (
      <span className={styles.GradHead}>{children}</span>
    ),
  },
  types: {
    block: (props) => {
      const { style } = props.node;
      switch (style) {
        case "h1":
          return (
            <h1 style={{ color: "blue" }} className="h1">
              {props.children}
            </h1>
          );
        case "h2":
          return (
            <h2 style={{ color: "blue" }} className="h2">
              {props.children}
            </h2>
          );
        case "h3":
          return (
            <h3 style={{ color: "blue" }} className="h3">
              {props.children}
            </h3>
          );
        case "h4":
          return (
            <h4 style={{ color: "blue" }} className="h4">
              {props.children}
            </h4>
          );
        default:
          return (
            <p style={{ color: "blue" }} className="Para">
              {props.children}
            </p>
          );
      }
    },
  },
};

const CustomBlockText = ({ blocks }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default CustomBlockText;
