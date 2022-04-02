import { IProduct } from "models";

export default (query: string) => (item: IProduct) =>
  item.title.toLowerCase().includes(query.toLowerCase()) ||
  item.description.toLowerCase().includes(query.toLowerCase()) ||
  item.options.map((item) => item.toLowerCase()).includes(query.toLowerCase());
