// schemas/blockContent.js

// Custom component to render gradient text in the editor
export const GradientTextDecorator = ({ children }) => {
  return (
    <h5 id={Math.random(15)}>
      <strong>{children}</strong>
    </h5>
  );
};
export const IdHeading = ({ children }) => {
  return <div id={Math.random(15)}>{children}</div>;
};
export const GradientTextDecoratorTwo = ({ children }) => {
  return (
    <span
      style={{
        background: "linear-gradient(to right,#090827, #AD45FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
};
export const GradientTextDecoratorThree = ({ children }) => {
  return (
    <span
      style={{
        background:
          "linear-gradient(to right,#B5FFD3, #D1A4FF,#FFA5AF,#FFDCA4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  );
};

export default {
  name: "blockContent",
  type: "array",
  title: "Block Content",
  of: [
    {
      type: "block",
      // Define the custom decorators

      marks: {
        decorators: [
          // ... other decorators
          {
            title: "Gradient Text",
            value: "gradientText",
            blockEditor: {
              icon: () => "Grad",
              render: GradientTextDecorator,
            },
          },
          {
            title: "Gradient Text 2",
            value: "gradientTextTwo",
            blockEditor: {
              icon: () => "Grad 2",
              render: GradientTextDecoratorTwo,
            },
          },
          {
            title: "Gradient Text 3",
            value: "gradientTextThree",
            blockEditor: {
              icon: () => "Grad 3",
              render: GradientTextDecoratorThree,
            },
          },
        ],
        annotations: [{ name: "color", title: "Color", type: "color" }],
      },
    },
    // ... other types
  ],
};
