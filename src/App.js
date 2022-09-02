import { useEffect, useState } from "react";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Router from "./Config/router";
import { store, persistor } from "./Store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [user, setUser] = useState();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log("User Data", user.email);
      }
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router user={user} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
