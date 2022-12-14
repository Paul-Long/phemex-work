type TypeMap<T = any> = Record<string, T>;

interface RequestParam {
  url: string;
  method?: 'POST' | 'PUT' | 'GET' | 'DELETE';
  Model?: {new (...args: any[]): TypeMap};
  formatOne?: (model: TypeMap) => TypeMap;
  params?: TypeMap;
  checkProducts?: boolean;
  isPut?: boolean;
  isUseProTable?: boolean;
}

export async function requestFactory(options: RequestParam) {
  return {data: [], success: true};
}
