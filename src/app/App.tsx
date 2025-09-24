import { memo } from "react";
import AppProvider from "./provider";
import HomePage from "../page/Home/HomePage";

const App = () => {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};

export default memo(App);
