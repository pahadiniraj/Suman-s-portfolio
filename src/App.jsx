import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/state";
import { motion } from "framer-motion"; // Assuming you're using framer-motion
import { div } from "framer-motion/client";

function App() {
  const dispatch = useDispatch();
  const { showPageLoaderAction } = bindActionCreators(actionCreators, dispatch);
  const isPageLoader = useSelector((state) => state.pageLoader);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    document.title = "Dr. Suman Dhamala";

    const timeout = setTimeout(() => {
      showPageLoaderAction(false);
      setLoaderComplete(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [showPageLoaderAction]);

  return (
    <>
      {isPageLoader && <PageLoader />}

      {loaderComplete && (
        <div>
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
