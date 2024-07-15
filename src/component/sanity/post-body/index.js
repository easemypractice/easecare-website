import { client } from "@/app/lib/sanity";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import styles from "@/styles/Patient.module.css";

const PostBody = ({ content, className }) => {
  const projectId = client.config().projectId;
  const dataset = client.config().dataset;

  const SampleImageComponent = ({ value, isInline }) => {
    return (
      <div className="content-image" style={{ height: "100%", width: "100%" }}>
        <Image
          src={urlBuilder(client).image(value).fit("max").auto("format").url()}
          alt={value.alt || " "}
          width={640}
          height={320}
          // className="content-image"
          // style={{ height: "100%", width: "100%" }}
          priority
          quality={100}
        />
      </div>
    );
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
      />
    </div>
  );
};

export default PostBody;
