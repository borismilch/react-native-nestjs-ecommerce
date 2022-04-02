const uuid = () =>
	`${Date.now()}-${Math.random().toString(
		36,
	)}-${Date.now().toString(36)}`;

export default uuid;
