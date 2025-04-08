type TApiSearchParams = {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  filter?: string;
  shortCode?: string;
  tags?: string | string[];
  [key: string]: string | string[] | number | boolean | undefined;
};

export type { TApiSearchParams };
