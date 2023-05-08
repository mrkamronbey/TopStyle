import { Suspense } from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { RouterData } from "./index-data";
import logoslide from "../assets/partner/partnerlogo.png";
function RouterComponent() {
  return (
    <>
      <Routes>
        {RouterData.map((elem) => (
          <Route
            key={elem.id}
            path={elem.path}
            element={
              <Suspense
                fallback={
                  <div className="spin_wrapp">
                    <img src={logoslide} alt="" />
                  </div>
                }
              >
                {elem.component}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default RouterComponent;
