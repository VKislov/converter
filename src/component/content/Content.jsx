import style from "./Content.module.css";
import { FileUploader } from "./FileSelectorArea/FileSelectorArea";
export const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.box}>
        <FileUploader />
      </div>
    </div>
  );
};
