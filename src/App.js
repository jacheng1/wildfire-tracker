import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <div>
      <header className="header">
          <h1><Icon icon={locationIcon} /> FireTracker</h1>
      </header>
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
