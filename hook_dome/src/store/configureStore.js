/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import { init } from '@rematch/core'
import models from './loader'

const configureStore = () =>
    init({
        models
    })
export default configureStore
