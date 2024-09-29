import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/state";

function App() {
  const dispatch = useDispatch();
  const { showPageLoaderAction } = bindActionCreators(actionCreators, dispatch);
  const isPageLoader = useSelector((state) => state.pageLoader);

  useEffect(() => {
    document.title = 'Dr. Suman Dhamala';
    setTimeout(() => {
      showPageLoaderAction(false);
    }, 300);
  }, [isPageLoader]);

  return (
    <>
      {isPageLoader && <PageLoader />}
      <div className={`${isPageLoader ? "hidden" : "block"}`}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
