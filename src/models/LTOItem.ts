import { STOItem } from "./STOItem";

export interface LTOItem {
  name: string;
  state: string;
  stoList?: STOItem[]
}
