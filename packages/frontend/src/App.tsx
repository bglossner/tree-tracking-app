import { TreeTrackingForm } from './new-tree/tree-tracking-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';

function App() {
  return (
    <BrowserRouter>
      <StandardPage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-tree" element={<TreeTrackingForm />} />
        </Routes>
      </StandardPage>
    </BrowserRouter>
  );
}

export default App;
