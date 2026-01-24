export type FilterValue =
  | "*"
  | ".filter-mobile"
  | ".filter-web"
  | ".filter-desktop";

export interface FilterItem {
  label: string;
  value: FilterValue;
}