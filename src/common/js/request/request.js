import {fetch} from "./fetch";
import url from './api'

class Request{
    async helpPersonal(data){
        try{
            return fetch(url.personalInfo,data)
        }catch(err){
            throw err
        }
    }
    async productList(){
        try{
            return fetch(url.product)
        }catch(err){
            throw err
        }
    }
    async getRecordList(type){
        try{
           return new Promise((reslove,reject)=>{
                setTimeout(()=>{
                    var obj = {
                            data: [
                                {time: '2018-03-02',username: 'test 1',productName: 'PaiPad（2G/32G)',amount: 13,award: 3},
                                {time: '2018-03-01',username: 'test 2',productName: 'PaiPad（2G/16G)',amount: 17,award: 6},
                                {time: '2018-03-03',username: 'test 3',productName: 'PaiPad（2G/64G)',amount: 20,award: 8},
                                {time: '2018-03-04',username: 'test 4',productName: 'PaiPad（2G/128G)',amount: 53,award: 23},
                            ]
                        }
                    switch(type){
                        case 'passed':
                            reslove(obj.data.slice(0,2))
                            break;
                        case 'audited':
                            reslove(obj.data.slice(3))
                            break;
                        case 'failed':
                            reslove(obj.data.slice(2))
                            break;
                        default:
                            reslove(obj.data.slice(0,2))
                            break;
                    }
                },3000)
           })
        }catch(err){
            throw err
        }
    }
    // async getRecordList(type){
    //     try{
    //         return fetch(url.record,type)
    //     }catch(err){
    //         throw err
    //     }
    // }
}
export default new Request()

