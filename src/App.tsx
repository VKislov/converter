import { Route, Routes } from "react-router-dom";
import style from "./App.module.css";
import { Converter } from "./component/Converter/Converter";
import { ImageHistoryListContainer } from "./component/Converter/ImageHistory/ImageHistoryListContainer";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Registration } from "./component/Registration/Registration";

function App() {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <Routes>
        <Route index element={<Converter />} />
        <Route path="Converter" element={<Converter />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="History" element={<ImageHistoryListContainer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
