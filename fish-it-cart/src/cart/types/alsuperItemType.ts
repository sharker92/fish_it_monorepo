export type AlsuperItemType = {
  name: string;
  itemId: number;
  quantity: number;
  branch_id: number;
  unit: string;
  variant?: string;
  comment?: string;
  unidad?: number; // Es la unidad por pieza calculada por alsuper
};
