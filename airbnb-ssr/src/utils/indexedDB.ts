export default class DB {

    private dbName: string // 数据库名称
    private db: any // 数据库名称
    private version: number // 数据库名称

    constructor(dbName: string, version: number = 0) {
        this.dbName = dbName
        this.version = version
    }

    // 打开数据库
    public openStore(storeName: string, keyPath: string, indexs?:Array<string>) {
        // 数据库名称，版本
        const request = window.indexedDB.open(this.dbName, this.version)
        request.onsuccess = (event: any) => {
            console.log('数据库打开成功:', event)
            this.db = event.target.result
        }
        request.onerror = (event: any) => {
            console.log('数据库打开失败:', event)
        }
        request.onupgradeneeded = (event: any) => {
            console.log('数据库升级成功:', event)
            const { result }: any = event.target
            const store = result.createObjectStore(storeName, {
                autoIncrement: true,
                keyPath
            })


            indexs?.map((v: string) => {
                // 新建索引：索引名称，索引属性，配置对象
                store.createIndex(v, v, { unique: false }) // id: unique
            })

            store.transaction.oncomplete = (event: any) => {
                console.log('创建对象仓库成功:', event)
            }
        }
    }
    // add/update data
    updateItem(storeName: string, data: any) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.put({
            ...data, 
            updateTime: new Date().getTime()
        })
        request.onsuccess = (event: any) => {
            console.log('数据写入成功:', event)
        }
        request.onerror = (event: any) => {
            console.log('数据写入失败:', event)
        }
    }
    deleteItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.delete(key)
        request.onsuccess = (event: any) => {
            console.log('数据删除成功:', event)
        }
        request.onerror = (event: any) => {
            console.log('数据删除失败:', event)
        }
    }
    getItems(storeName: string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.getAll()
        request.onsuccess = (event: any) => {
            console.log('获取所有数据成功:', event)
            console.log(event.target.result)
        }
        request.onerror = (event: any) => {
            console.log('获取所有数据失败:', event)
        }
    }
    getItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.get(key)
        request.onsuccess = (event: any) => {
            console.log('查询1条数据成功:', event)
            console.log(event.target.result)
        }
        request.onerror = (event: any) => {
            console.log('查询1条数据失败:', event)
        }
    }
    
}

