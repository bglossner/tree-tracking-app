import './map-content.scss';

export const MapContent = () => {
  return (
    <div className="MapContent">
          <div className="embed-container">
            <iframe width="700" height="500" scrolling="no" title="10000trees2" src="//calpoly.maps.arcgis.com/apps/Embed/index.html?webmap=c92fc1cead8241df9e8eb5c49c039fd2&extent=-180,-51.6726,63.3691,64.3589&zoom=true&previewImage=false&disable_scroll=true&theme=light"></iframe>
            {/* <iframe width="700" height="500" scrolling="no" title="10000trees2" src="//calpoly.maps.arcgis.com/apps/Embed/index.html?webmap=c92fc1cead8241df9e8eb5c49c039fd2&zoom=true&previewImage=false&disable_scroll=true&theme=light&center=20,45&level=3"></iframe> */}
          </div>
    </div>
  );
};