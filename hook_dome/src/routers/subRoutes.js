/**
 * Time: 2021/6/23.
 * Author: Yang PengFei
 */
import React from 'react'
import { Switch } from 'react-router-dom'
import lazy from './LazyComponent';
import Nopage from '../Layout/404'
import PrivateRoute from './PrivateRoute'

const files = require.context('./childRoutes', false, /\.js$/)

const routeList = []
let iframeRoutes = []
files.keys().forEach(key => {
    const child = files(key).default
    if (!key.includes('iframeRouter')) {
        routeList.push(...child)
    } else {
        iframeRoutes = child
    }
})

iframeRoutes.forEach(item0 => {
    let items = routeList.find(item1 => item1.path === item0.path)
    if (items) {
        Object.assign(items, item0)
    } else {
        routeList.push(item0)
    }
})

const SubRoute = () => {
    return (
        <Switch>
            {routeList.map(value => {
                return (
                    <PrivateRoute
                        exact
                        path={value.path}
                        key={value.path}
                        component={lazy(value.component)}
                        isIframe={value.isIframe}
                        id={value.id}
                    />
                )
            })}
            <PrivateRoute component={Nopage} />
        </Switch>
    )
}

export default () => (
    <div style={{ margin: '0 16px' }}>
        <SubRoute />
    </div>
)
