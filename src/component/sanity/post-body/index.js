import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

const PostBody = ({ content, className }) => {
  const SampleImageComponent = ({ value, isInline }) => {
    return (
      <Image
        src={urlBuilder(client).image(value).fit("max").auto("format").url()}
        alt={value.alt || " "}
        width={640}
        height={320}
        className="content-image"
        style={{ height: "100%", width: "100%" }}
        priority
        quality={80}
      />
    );
  };
  const components = {
    types: {
      image: SampleImageComponent,
    },
  };
  return (
    <div className={`blog-content ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  );
};
export default PostBody;
