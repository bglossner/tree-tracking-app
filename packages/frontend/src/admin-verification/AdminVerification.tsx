import { IUserSessionInfo } from "../standard-page/arcgis-admin/ArcGISAdminPage";
import './AdminVerification.scss';

interface IProps extends IUserSessionInfo {};

export function AdminVerification({ error, userSession, loading }: IProps) {
  if (error) {
    return <p>An error occurred while loading your ArcGIS profile. Are you sure you have access to this page?</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userSession) {
    alert('Unexpected error... error, loading, and userSession are all falsy.');
    return null;
  }

  return (
    <main>
      <h1>Hi there { userSession.username }</h1>
      <div>
        <h3>Important Links</h3>
        <ul>
          <li>
            <a rel="noreferrer" target="_blank" href="https://calpoly.maps.arcgis.com/apps/View/index.html?appid=7f245b6aca674c88bfc0e5195b0131c6">Editing Map</a>
            &nbsp;&nbsp;
            <span>(Verify and change data)</span>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://survey123.arcgis.com/surveys/205ff9bd93a549d7b9b525f7522bcf28/overview">Survey 123</a>
            &nbsp;&nbsp;
            <span>(Redesign survey and viewing survey-specific data)</span>
          </li>
        </ul>
      </div>
    </main>
  );
}