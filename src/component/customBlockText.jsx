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
};

const CustomBlockText = ({ blocks }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default CustomBlockText;
