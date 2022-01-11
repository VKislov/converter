import style from "./App.module.css";
import { Content } from "./component/content/Content";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";

function App() {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        <Content />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
