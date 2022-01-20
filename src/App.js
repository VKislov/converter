import style from "./App.module.css";
import { ConverterContainer } from "./component/Converter/ConverterContainer";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";

function App(props) {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.converter}>
        <ConverterContainer />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
