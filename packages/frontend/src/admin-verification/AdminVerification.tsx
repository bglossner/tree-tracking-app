import { IUserSessionInfo } from "../standard-page/arcgis-admin/ArcGISAdminPage";
import './AdminVerification.scss';

// Takes no additional props for now
interface IProps extends IUserSessionInfo {};

/**
 * Component for admin verification page (just has helpful links for an Admin all in 1 place)
 */
export function AdminVerification({ error, userSession, loading }: IProps) {
  if (error) {
    return (
      <div className="error-div">
        <p>An error occurred while loading your ArcGIS profile.<br />Are you sure you have access to this page?</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userSession) {
    alert('Unexpected error... error, loading, and userSession are all falsy.');
    return null;
  }

  return (
    <main className="admin-verification">
      <h1>Hi there { userSession.username }</h1>
      <div>
        <h3>Important Links</h3>
        <ul>
          <li>
            <a rel="noreferrer" target="_blank" href="https://calpoly.maps.arcgis.com/apps/View/index.html?appid=eb0dd999345645c1bf47cb85d8a0233f">Editing Map</a>
            &nbsp;&nbsp;
            <span>(Verify and change data)</span>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://survey123.arcgis.com/surveys/83d728f286404ec4ac35d49dda4d9abe/overview">Survey 123</a>
            &nbsp;&nbsp;
            <span>(Redesign survey and viewing survey-specific data)</span>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://calpoly.maps.arcgis.com/home/item.html?id=d742e66cccb74f20805ab7367029f6d0#data">Data Table View</a>
            &nbsp;&nbsp;
            <span>(Cannot modify location)</span>
          </li>
        </ul>
      </div>
    </main>
  );
}