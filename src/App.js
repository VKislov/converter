import style from "./App.module.css";
import { ContentContainer } from "./component/content/ContentContainer";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";

function App() {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        <ContentContainer />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
