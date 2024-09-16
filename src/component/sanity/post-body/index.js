import { client } from "@/app/lib/sanity";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import styles from "@/styles/Patient.module.css";
import React from "react";

const PostBody = ({ content, className }) => {
  const projectId = client.config().projectId;
  const dataset = client.config().dataset;

  const builder = urlBuilder(client);

  const urlFor = (source) => builder.image(source).auto("format").url();
  const SampleImageComponent = ({ node }) => {
    const { alt, asset } = node;
    const imageUrl = urlFor(asset);
    return (
      <div className="content-image" style={{ width: "100%" }}>
        <Image
          src={imageUrl}
          alt={alt}
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
        return (
          <h5 id={processedChildren}>
            <strong>{children}</strong>
          </h5>
        );
      },
    },
    types: {
      image: SampleImageComponent, // Use custom image serializer
    },
  };

  return (
    <div className={`blog-content ${className}`}>
      <BlockContent
        blocks={content}
        projectId={projectId}
        dataset={dataset}
        // components={components}
        serializers={serializers}
      />
    </div>
  );
};

export default PostBody;
