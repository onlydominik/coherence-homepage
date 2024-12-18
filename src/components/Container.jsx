export default function Container({
  children,
  className = "",
  paddingX = "px-4 sm:px-6 md:px-8 xl:px-0 ",
  paddingY = "py-12",
  maxWidth = "max-w-screen-xl",
  center = true,
  as: Component = "div",
  ...props
}) {
  const baseStyles = `${paddingX} ${paddingY} ${maxWidth} ${
    center ? "mx-auto" : ""
  } ${className}`;

  return (
    <Component className={baseStyles} {...props}>
      {children}
    </Component>
  );
}
