/**
 * Time: 2021/6/24.
 * Author: Yang PengFei
 */
const config = {
  secret: "sdjhgfjgsjdhgfjhgsdfjh",
  token_time: { expiresIn: "1h" },
  // 启动端口
  port: 8000,

  // 数据库配置
  database: {
    DATABASE: "ypf",
    USERNAME: "root",
    PASSWORD: "123456",
    PORT: "3306",
    HOST: "127.0.0.1",
  },
};

module.exports = config;
