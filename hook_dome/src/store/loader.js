/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
const files = require.context("./models", false, /\.js$/);
const models = {};
files.keys().forEach(key => {
    const filename = key.replace(/(\.\/|\.js)/g, "");
    models[filename] = files(key).default;
});
export default models;