import { TApiSearchParams } from "../ApiSearchParams/apiSearchParams";
import { TMeta } from "../Meta/Meta";

type TURLSlice = {
  data: TURL[] | null;
  isLoading: boolean;
  isError: boolean;
  searchParams?: TApiSearchParams;
  meta?: TMeta;
  tags?: string[] | null;
};

type T_URLCount = { urlMetrics: number };

type TURL = {
  id: string;
  fullUrl: string;
  shortCode: string;
  tags: string[];
  _count: T_URLCount;
  createdAt: string;
};

export type { T_URLCount, TURL, TURLSlice };
