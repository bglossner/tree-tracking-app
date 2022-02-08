import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';

function App() {
  return (
    <BrowserRouter>
      <StandardPage>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </StandardPage>
    </BrowserRouter>
  );
}

export default App;
