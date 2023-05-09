export default class DB {

    private dbName:string // 数据库名称
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
        }
        request.onerror = (event: any) => {
            console.log('数据库打开失败:', event)
        }
        request.onupgradeneeded = (event) => {
            console.log('数据库升级成功:', event)
            const { result }: any = event.target
            const store = result.createObjectStore(storeName, {
                autoIncrement: true,
                keyPath
            })


            indexs?.map((v: string) => {
                // 新建索引：索引名称，索引属性，配置对象
                store.createIndex(v, v, { unique: true })
            })

            store.transaction.oncomplete = (event: any) => {
                console.log('创建对象仓库成功:', event)
            }
        }
    }
}

