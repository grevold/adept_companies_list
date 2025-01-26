import { MainPage } from "./pages/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { store } from "./store/store";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <MainPage />
      </Layout>
    </Provider>
  );
}

export default App;
