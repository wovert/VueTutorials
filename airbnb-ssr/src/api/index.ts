// import http from '../utils/http'
import { http } from '../utils/http'

const url = 'http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3'
export function fetchRoomList() {
    return http.httpRequestGet(url, {})
}

