
export interface CacheRepository {
  get(key: string): any;
  remove(key: string): boolean;
  set(key: string, value: any): void;
}
