import axios from 'axios'

export const fetch = (url,data)=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,data)
            .then(res=>{
                let {status} = res.data
                if(status === 200){
                    resolve(res)
                }
                if(status === 300){
                    window.location.href = '/'
                    resolve(res)
                }
                reject(res)
            })
            .catch(error=>reject(error))
    })
}