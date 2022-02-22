import { TreeTrackingForm } from './new-tree/tree-tracking-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage component={<Home />} />} />
        <Route path="/new-tree" element={<StandardPage component={<TreeTrackingForm />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
