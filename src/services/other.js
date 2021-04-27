import Api from '@/services/api'

export default {
    // 會員查詢   
    area() {
        //查詢所有會員
        console.log("Eee")
        return Api().get('/time/area');
    },

}