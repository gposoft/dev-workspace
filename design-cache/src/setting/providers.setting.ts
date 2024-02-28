import { CacheMemoryRepository, CacheMemoryRepositorySingleton } from "../modules/cache/3.logic-bajo-nivel/cache.repository.memory";
import { configSetting } from "./app.setting";


export const providers = {
  CACHE_MEMORY_REPOSITORY : (): CacheMemoryRepository => {
      if (configSetting.REPORT_CACHE === "REPORT_CACHE_MEMORY") {
        return CacheMemoryRepositorySingleton.getInstance(); // new MemoryCache();
      }
      throw new Error("No implements");
  }
};
