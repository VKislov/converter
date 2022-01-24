import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import { ConverterContainer } from "./component/Converter/ConverterContainer";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Registration } from "./component/Registration/Registration";

function App(props) {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <Routes>
        <Route path="Converter" element={<ConverterContainer />} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
      {/* <div className={style.converter}>
        <ConverterContainer />
      </div> */}
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
