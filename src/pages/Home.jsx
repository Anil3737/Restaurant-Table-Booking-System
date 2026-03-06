import '../styles/pages/Home.css';

/**
 * Home Component
 * 
 * Migrated from index.html. 
 * Includes the banner section and a live date/time display implemented with React hooks.
 */
const Home = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        /**
         * Updates the current date and time state every second.
         * Replaces the setInterval logic from the original index.html.
         */
        const updateDateTime = () => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = now.toLocaleDateString(undefined, options);
            const time = now.toLocaleTimeString();
            setDateTime(`${date} | ${time}`);
        };

        const intervalId = setInterval(updateDateTime, 1000);
        updateDateTime();

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="banner-bg-container">
            <div className="text-center">
                {/* Live Date and Time Display */}
                <div className="date-time-container" id="dateTime">
                    {dateTime || 'Loading date and time...'}
                </div>

                {/* Banner Headings from index.html */}
                <h1 className="banner-heading">Get Comfortable Dining Anytime</h1>
                <h2 className="banner-caption">Enjoy Delicious Food Delivered Fast</h2>

                {/* Action Buttons with exact same styles as original */}
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                    <button className="button-customize">View Menu</button>
                </Link>
                <Link to="/tables" style={{ textDecoration: 'none' }}>
                    <button className="button-customize">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
