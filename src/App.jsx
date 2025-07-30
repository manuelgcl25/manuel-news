import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/article/:article_id" element={<Article />}></Route>
        <Route
          path="/article/:article_id/comments"
          element={<Comments />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
