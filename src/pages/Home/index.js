/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import React from "react";
import { connect } from "react-redux";

const Home = ({ ...props }) => {
  return <>home页面</>;
};

export default connect(
  ({ home }) => ({ ...home }),
  ({ home }) => ({ ...home })
)(Home);
