import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <About />
      <RepositoriesList />
      <Contact />
    </Provider>
  );
};
export default App;
