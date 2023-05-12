// import http from '../utils/http'
import { http } from '../utils/http'
import IndexedDB from '../utils/indexedDB'
let db = new IndexedDB('airbnb', 2)

// 真实接口
const url = 'http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3'
export function fetchRoomList() {
    return http.httpRequestGet(url, {})
}

// Mock接口

export async function fetchPersons() {
    await db.openStore('person', 'id', ['name', 'age'])
    const result = await db.getItems('person').then(res => {
        return {
            code: '000000',
            message: '操作成功',
            result: res,
            success: true
        }
    })
    return result
}