import './App.css';
import Layout from './components/layout'
import Home from './pages/home'
import Details from './pages/details'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Default</button>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
