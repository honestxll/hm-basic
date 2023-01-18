declare module 'vue-ls' {
  export interface StorageOptions {
    namespace: string
    name: string
    storage: string
  }

  export interface IStorage {
    /**
     * 存储值
     * @param key key of storage
     * @param value 要存储的值
     * @param expire 过期时间，单位：秒
     */
    set(key: string, value: any, expire?: number): void
    /**
     * 取值
     * @param key key of storage
     * @param def 如果没有找到key，返回的默认值
     */
    get(key: string, def?: any): any
    /**
     * 判断有没有 key
     * @param key key of storage
     * @return {boolean} 是否存在
     */
    has(key: string): boolean
    /**
     * 删除值
     * @param key key of storage
     */
    remove(key: string): void
    /**
     * 清空所有值
     */
    clear(): void
    /**
     * 事件监听
     * @param event 事件名
     * @param callback 回调函数
     */
    on(event: string, callback: () => void): void
    /**
     * 取消事件监听
     * @param {String} event 事件名
     * @param {Functoin} callback 回调函数
     */
    off(event: string, callback: () => void): void
  }

  interface IUseStorage {
    ls: IStorage
  }

  /**
   * 创建一个新的 storage
   * @param options 配置项
   * @return { ls: IStorage } storage 对象
   */
  export function useStorage(options: StorageOptions): IUseStorage

  /**
   *
   * @param app 应用
   * @param options 参数
   */
  export function install(app: any, options: StorageOptions): void
}
