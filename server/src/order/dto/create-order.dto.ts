export default class CreateOrderDto {
	readonly userId: number;
	readonly totalCost: number;
	readonly prductsIds: { id: number; count: number }[];
}
