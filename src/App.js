import React from "react";
import {Router} from "./components/router/router";
import { Navigation } from "./components/navigation/navigation";
import { Footer } from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Router />
      <Navigation />
      <Footer />
    </div>
  );
}
