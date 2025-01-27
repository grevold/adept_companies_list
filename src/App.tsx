import { MainPage } from "./pages/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createContext } from "react";

export const myContext = createContext({
  isOpened: false,
});

export function App() {
  return (
    <myContext.Provider value={{ isOpened: false }}>
      <Provider store={store}>
        <Layout>
          <MainPage />
        </Layout>
      </Provider>
    </myContext.Provider>
  );
}

export default App;
