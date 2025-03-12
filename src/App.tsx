import React, { Suspense, lazy } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Menus from '@/components/Menus';

// 路由懒加载, 并命名
const Home = lazy(() =>  import(/* webpackChunkName: 'home' */ './pages/home'))
const About = lazy(() =>  import(/* webpackChunkName: 'about' */ './pages/about'))

const App = () => {
  return (
    <div className="text-3xl font-bold text-blue-600">
      <div>
        <Menus />
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;