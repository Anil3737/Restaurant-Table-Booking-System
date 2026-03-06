import { Link } from 'react-router-dom';
import '../styles/pages/Menu.css';

/**
 * Menu Component
 * 
 * Migrated from exploremenu.html.
 * Shows different categories of food items (Veg, Non-Veg, Juices).
 */
const Menu = () => {
  const categories = [
    {
      title: 'Non-Veg Starters',
      img: 'https://img.freepik.com/free-photo/side-view-chicken-kebab-lavash-served-with-fresh-herbs-onion-adjika-sauce_141793-2957.jpg?uid=R157583499&ga=GA1.1.1910768974.1722428793&semt=ais_hybrid',
      link: '/menu/non-veg'
    },
    {
      title: 'Veg Starters',
      img: 'https://img.freepik.com/free-photo/side-view-multi-colored-meatballs-with-tomato-sauces-green-onions_140725-13961.jpg?uid=R157583499&ga=GA1.1.1910768974.1722428793&semt=ais_hybrid',
      link: '/menu/veg'
    },
    {
      title: 'Juices',
      img: 'https://img.freepik.com/free-photo/assortment-milkshake-glasses-tray-with-chocolate-fruits_23-2148707764.jpg?uid=R157583499&ga=GA1.1.1910768974.1722428793&semt=sph',
      link: '/menu/juices'
    }
  ];

  return (
    <div className="explore-menu-section pt-5 pb-5">
      <div className="container">
        <h1 className="explore-heading text-center mb-5">Explore Menu</h1>
        <div className="row">
          {categories.map((cat, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="explore-card shadow p-3">
                <img src={cat.img} className="explore-image w-100" style={{ height: '200px', objectFit: 'cover', borderRadius: '8px' }} alt={cat.title} />
                <h3 className="explore-head-con pt-3 text-center">{cat.title}</h3>
                <div className="text-center mt-3">
                  <Link to={cat.link} className="explore-button">
                    View All 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-arrow-right-short ml-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
