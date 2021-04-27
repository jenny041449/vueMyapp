import Api from '@/services/api'

export default {
    // 會員查詢   
    member() {
        //查詢所有會員 
        return Api().get('/user/member');
    },
    ismember(data) {
        // 登入是否為會員
        return Api().post('/user/ismember', data);
    },
    setmember(data) {
        // 註冊會員
        return Api().post('/user/member', data);
    }

}