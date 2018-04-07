let url = {
    personalInfo: '/personal/personalInfo',
    product: '/product/productList',
    record: '/record/getRecordList'
}

let baseUrl = 'http://yapi.demo.qunar.com/mock/5624'

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = baseUrl + url[key]
    }
}

export default url