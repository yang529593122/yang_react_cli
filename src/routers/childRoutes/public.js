/**
 * Time: 2021/6/25.
 * Author: Yang PengFei
 */
const publics = [
    {
        path: '/app/public/modalformcom',
        name:'ModalFormCom',
        component: ()=> import('../../pages/Public/ModalFormCom'),
    },
    {
        path: '/app/public/phonetimecom',
        name:'PhoneTimeCom',
        component: ()=> import('../../pages/Public/PhoneTimeCom'),
    }
]
export default publics
