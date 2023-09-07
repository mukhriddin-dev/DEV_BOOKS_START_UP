import "./style.scss";
import Header from "../Header";

const index = ({children , padding}) => {
    return <div className="flex justify-center items-center gap-x-[37px] gap-y-[25px] flex-wrap" style={{padding: padding ? padding : "0"}}>
          {children}
    </div>;
};

export default index;
