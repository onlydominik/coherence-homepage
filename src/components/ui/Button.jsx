export function Button({
  variant,
  textOnly,
  children,
  addClassName,
  icon,
  iconWidth,
  iconHeight,
  ...props
}) {
  let className = `flex text-base font-light items-center justify-center rounded-md h-[3rem] py-2 px-2.5 min-w-max min-w-10 text-nowrap ${addClassName} `;

  icon ? (className += "gap-1 pl-1 py-1 ") : null;

  if (variant === "primary" || variant === undefined)
    className +=
      textOnly == true
        ? "text-button-primary-text "
        : "bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg ";
  if (variant === "accent")
    className +=
      textOnly == true
        ? "text-button-accent-text "
        : "border-solid border-[0.5px] text-button-accent-text hover:text-button-accent-hover-text transition-colors duration-200";

  return (
    <button {...props} className={className}>
      {icon && (
        <img
          width={iconWidth}
          height={iconHeight}
          className="h-9 mr-1"
          src={icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      )}
      {children}
    </button>
  );
}
