import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menus from '@/components/Menus';

// 路由懒加载, 并命名
const SwitchTime = lazy(() =>  import(/* webpackChunkName: 'home' */ './pages/SwitchTime'))
const About = lazy(() =>  import(/* webpackChunkName: 'about' */ './pages/about'))

const App = () => {
  return (
    <div>
      <div>
        <Menus />
      </div>
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/switch-time" element={<SwitchTime />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;