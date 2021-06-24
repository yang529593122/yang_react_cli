/**
 * Time: 2021/6/24.
 * Author: Yang PengFei
 */
const config = {
    secret:'sdjhgfjgsjdhgfjhgsdfjh',
    token_time: {expiresIn: '1h'},
    // 启动端口
    port: 8000,

    // 数据库配置
    database: {
        DATABASE: 'ypf',
        USERNAME: 'yang',
        PASSWORD: 'ypf123456',
        PORT: '3306',
        HOST: '192.168.30.200'
    }
}

module.exports = config