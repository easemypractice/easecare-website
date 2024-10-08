import { client } from "@/app/lib/sanity";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import styles from "@/styles/Patient.module.css";
import React from "react";

const GuideBody = ({ content, className }) => {
  const projectId = client.config().projectId;
  const dataset = client.config().dataset;

  const SampleImageComponent = ({ value, isInline }) => {
    return (
      <div className="content-image" style={{ width: "100%" }}>
        <Image
          src={urlBuilder(client).image(value).fit("max").auto("format").url()}
          alt={value.alt || " "}
          width={640}
          height={320}
          priority
          quality={100}
        />
      </div>
    );
  };
  const serializers = {
    marks: {
      strongText: ({ children }) => {
        const processedChildren = React.Children.toArray(children)
          .map((child) => {
            if (typeof child === "string") {
              return child.replace(/ /g, "-").replace(/:/g, "");
            }
            return child;
          })
          .join("");
        return <span id={processedChildren}>{children}</span>;
      },
    },
  };

  const components = {
    types: {
      image: SampleImageComponent,
    },
  };

  return (
    <div className={`blog-content ${className}`}>
      <BlockContent
        blocks={content}
        projectId={projectId}
        dataset={dataset}
        components={components}
        serializers={serializers}
      />
    </div>
  );
};

export default GuideBody;
