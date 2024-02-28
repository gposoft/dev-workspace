import { CacheRepository } from "../2.abstract-medio-nivel/cache.repository";


export class CacheService {
  constructor(private readonly provider: { cacheRepository: CacheRepository }) {}

  get(key: string): any {
    return this.provider.cacheRepository.get(key);
  }

  remove(key: string): boolean {
    return this.provider.cacheRepository.remove(key);
  }

  set(key: string, value: any): void {
    this.provider.cacheRepository.set(key, value);
  }
}
