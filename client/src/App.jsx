import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import PostPage from "./pages/PostPage";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
