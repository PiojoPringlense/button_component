import styles from "./Button.module.scss";

const Button = ({
	children,
	variant,
	disableShadow = false,
	startIcon,
	endIcon,
	size = "md",
	color,
	ishover = false,
	...props
}) => {
	let classes = [];

	switch (variant) {
		case "outline":
			classes.push(styles.outline);
			break;
		case "text":
			classes.push(styles.text);
			break;
		default:
			break;
	}

	switch (color) {
		case "primary":
			classes.push(styles.primary);
			break;
		case "secondary":
			classes.push(styles.secondary);
			break;
		case "danger":
			classes.push(styles.danger);
			break;
		default:
			classes.push(styles.default);
			break;
	}

	ishover && classes.push(styles.hover);
	!disableShadow && classes.push(styles.shadow);

	switch (size) {
		case "sm":
			classes.push(styles.sm);
			break;
		case "lg":
			classes.push(styles.lg);
			break;

		default:
			classes.push(styles.md);
			break;
	}

	return (
		<button className={classes.join(" ")} {...props}>
			{startIcon && <span className="material-symbols-outlined">{startIcon}</span>}
			{children}
			{endIcon && <span className="material-symbols-outlined">{endIcon}</span>}
		</button>
	);
};
export default Button;
