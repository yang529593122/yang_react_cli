/**
 * Time: 2021/6/22.
 * Author: Yang PengFei
 */
import { connect } from "react-redux";

const Home = ({...props}) => {
    const { num ,incrementAsync,updateState} = props
    const add = () =>{
        // incrementAsync()
        let one = num+1
        updateState({
            num:one
        })
    }
    const getjson = ()=>{
        incrementAsync()
    }
    const jj = () =>{
        // incrementAsync()
        let one = num-1
        updateState({
            num:one
        })
    }
    const loginOut = () =>{
        const { history } =props
        localStorage.clear()
        history.push('/login')
    }
    return (
        <div>
            <p>{num}</p>
            <p><button onClick={add}>+1</button><button onClick={jj}>-1</button></p>
            <p><button onClick={getjson}>异步获取数据</button></p>
            <p><button onClick={loginOut}>退出</button></p>
        </div>
    );
};

export default connect(
    ({ home })=>({...home}),
    ({ home })=>({...home})
)(Home);
