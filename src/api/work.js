import request from '@/utils/request'
/*
* API_MODULE: WORK
* API_USE: FETCH,CREATE,UPDATE,DELETE
* */
export function fetch_WorkListByPage(pagination){
    return request({
      url: '/api-work/v1/codework/bypage/'+'?page='+pagination.page,
      method: 'GET'
    })
  }

  export function create_Work(data){
    return request({
      url: '/api-work/v1/codework/create/',
      method: 'POST',
      data: data
    })
  }

  export function status_Work(id){
    return request({
      url: '/api-work/v1/codework/'+id+'/exam/',
      method: 'PUT',
      data: {'status':2}
    })
  }

  export function run_Work(id){
    return request({
      url: '/api-work/v1/codework/'+id+'/run/',
      method: 'GET'
    })
  }