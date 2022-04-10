import { TreeTrackingForm } from './new-tree/tree-tracking-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';
import { TreeRegisterView } from './new-tree/TreeRegisterView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage component={<Home />} />} />
        <Route path="/new-tree" element={<StandardPage component={<TreeTrackingForm />} />} />
        <Route path="/test" element={<StandardPage component={<TreeRegisterView />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
