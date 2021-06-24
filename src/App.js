import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './store'
import Routers from './routers'
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routers />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
