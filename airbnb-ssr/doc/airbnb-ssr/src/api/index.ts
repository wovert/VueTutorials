// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3
import airbnb from '../db'

// Mock接口
export async function fetchElephant() {
  await airbnb.airbnbDB.openStore({ elephant: { keyPath: 'id', indexs: ['nose', 'ear'] } })
  const result = await airbnb.airbnbDB.getList('elephant').then(res => {
    return { code: '000000', message: '操作成功', result: res, success: true }
  })
  return result
}
