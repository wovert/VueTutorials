import { http } from '../../utils/http'
import { IResultOr as IResult, IRoomListParams } from '../interface'

// 真实接口———首页房屋列表接口
export function fetchRoomList(params: IRoomListParams): Promise<IResult> {
  return http.httpRequestGet('/api/room/room/getRoomList', params)
}
