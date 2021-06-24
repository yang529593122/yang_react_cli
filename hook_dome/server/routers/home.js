/**
 * Time: 2021/6/24.
 * Author: Yang PengFei
 */
const Router = require('koa-router');
let router = new Router();
router.get('/article/list',async(ctx)=>{
    ctx.body =  {
        code:0,
        data:{
            count:15,
            results:[1,2,3,4,5]
        },
        message:'请求成功'
    }
})
router.post('/article/item',async(ctx)=>{
    ctx.body =  {
        code:0,
        data:{

            results:{
                name:'yang',
                age:18
            }
        },
        message:'请求成功'
    }
})
module.exports=router;