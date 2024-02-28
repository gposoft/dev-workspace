import { CacheRepository } from "../2.abstract-medio-nivel/cache.repository";

export class CacheMemoryRepository implements CacheRepository {
  private cache: Map<string, any> = new Map();

  get(key: string): any {
    return this.cache.get(key);
  }

  remove(key: string): boolean {
    return this.cache.delete(key);
  }

  set(key: string, value: any): void {
    this.cache.set(key, value);
  }
}


export class CacheMemoryRepositorySingleton {
  private static instance: CacheMemoryRepository;

  static getInstance(): CacheMemoryRepository {
    if (!CacheMemoryRepositorySingleton.instance) {
      CacheMemoryRepositorySingleton.instance = new CacheMemoryRepository();
    }
    return CacheMemoryRepositorySingleton.instance;
  }
}
