import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ArcGISRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(false);

  useEffect(() => {
    const hash = location.hash;

    console.log(hash);

    const hashMatch = hash?.match(/#access_token=([^&]+)/);

    console.log(hashMatch);

    if (!hash || !hashMatch || !hashMatch[1]) {
      setError(true);
    } else {
      navigate('/verification', {
        state: {
          accessToken: hashMatch[1],
        }
      });
    }
  }, [navigate, location]);

  return (
    <>
      {error ? <p>Error... no access token given</p> : <p>Loading...</p>}
    </>
  );
}