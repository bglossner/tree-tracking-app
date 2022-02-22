import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage component={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
