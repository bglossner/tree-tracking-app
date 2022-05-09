import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home/Home';
import { StandardPage } from './standard-page/StandardPage';
import { ArcGISRedirect } from './admin-verification/arcgis-redirect/ArcGISRedirect';
import { AdminVerification } from './admin-verification/AdminVerification';
import { ArcGISAdminPage } from './standard-page/arcgis-admin/ArcGISAdminPage';
import { TreeRegisterView } from './new-tree/TreeRegisterView';


let basename: string;
let RouterImpl: typeof HashRouter | typeof BrowserRouter;

if (process.env.REACT_APP_USE_HASH_ROUTER === 'true') {
  RouterImpl = HashRouter;
  basename = '/';
} else {
  RouterImpl = BrowserRouter;
  if (process.env.REACT_APP_BASENAME) {
    basename = process.env.REACT_APP_BASENAME;
  } else {
    basename = process.env.PUBLIC_URL;
  }
  // Need to strip leading slash if one exists. Default is just /
  basename = basename.startsWith('/') ? basename.substring(1) : '/';
}

function App() {
  if (
    RouterImpl === HashRouter &&
    (document.location.pathname[document.location.pathname.length - 1] !== '/' || !document.location.hash)
  ) {
    const originalPath = document.location.pathname;
    // Try to clean up the path a bit
    const pathSlashEnd = originalPath.endsWith('/') ? originalPath : originalPath + '/';
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(history.state, '', pathSlashEnd + '#/');
  }

  return (
    <RouterImpl basename={basename}>
      <Routes>
        <Route path="/" element={<StandardPage useTopPadding={false} component={<Home />} />} />
        <Route path="/new-tree" element={<StandardPage component={<TreeRegisterView />} />} />
        <Route path="/arcgis-redirect" element={<ArcGISRedirect />} />
        <Route path="/verification" element={<ArcGISAdminPage component={AdminVerification} />} />
        <Route path="*" element={<StandardPage component={
          <p style={{ margin: "25vh 0", width: "100%", textAlign: "center", fontSize: "2em" }}>
            Page not found.
          </p>
        }/>}/>
      </Routes>
    </RouterImpl>
  );
}

export default App;
