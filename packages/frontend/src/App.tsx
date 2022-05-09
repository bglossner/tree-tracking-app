import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';
import { ArcGISRedirect } from './admin-verification/arcgis-redirect/ArcGISRedirect';
import { AdminVerification } from './admin-verification/AdminVerification';
import { ArcGISAdminPage } from './standard-page/arcgis-admin/ArcGISAdminPage';
import { TreeRegisterView } from './new-tree/TreeRegisterView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage useTopPadding={false} component={<Home />} />} />
        <Route path="/new-tree" element={<StandardPage component={<TreeRegisterView />} />} />
        <Route path="/arcgis-redirect" element={<ArcGISRedirect />} />
        <Route path="/verification" element={<ArcGISAdminPage component={AdminVerification} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
