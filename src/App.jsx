import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CustomCursor from './components/CustomCursor';
import WorkPage from './pages/WorkPage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <CustomCursor/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogPost/>}/>
        <Route path="/work" element={<WorkPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;