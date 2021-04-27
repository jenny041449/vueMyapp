import Api from '@/services/api'

export default {
    // 會員查詢   
    buyProduct() {
        //查詢所有訂單
        return Api().get('/user/getbuyproduct');
    },
    setbuyProduct(data) {
        // 註冊會員
        return Api().post('/user/buyproduct', data);
    }

}