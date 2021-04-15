import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";
import Header from "./Header";
import About from "./About";
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <About />
      <RepositoriesList />
    </Provider>
  );
};
export default App;
