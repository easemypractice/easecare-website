import { PortableText } from "@portabletext/react";

export default function PortableTextBlock({ value }) {
  return (
    <PortableText
      value={value}
      components={{
        marks: {
          color: ({ children, value }) => (
            <span
              style={{
                color: value?.hex,
              }}
            >
              {children}
            </span>
          ),
        },
      }}
    />
  );
}
