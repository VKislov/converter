import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import { ConverterContainer } from "./component/Converter/ConverterContainer";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { RegistrationContainer } from "./component/Registration/RegistrationContainer";

function App(props) {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <Routes>
        <Route index element={<ConverterContainer />} />
        <Route path="Converter" element={<ConverterContainer />} />
        <Route path="Registration" element={<RegistrationContainer />} />
      </Routes>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
