import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TreeTrackingForm } from './new-tree/tree-tracking-form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-tree" element={<TreeTrackingForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
