import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../styles/pages/Tables.css';

/**
 * Tables Component
 * 
 * Migrated from fd.html.
 * Displays available tables using a Carousel and cards.
 */
const Tables = () => {
  // Sample table data to match the original cards
  const tables = [
    { id: 1, price: 230, offer: '10% discount', img: 'https://cdn.pixabay.com/photo/2012/02/28/15/37/restaurant-18311_640.jpg' },
    { id: 2, price: 500, offer: '20% discount', img: 'https://th.bing.com/th/id/OIP.dwBjlIfPa9i7dTZ6SlFxRAHaE8?w=972&h=648&rs=1&pid=ImgDetMain' },
    { id: 3, price: 1000, offer: '15% discount', img: 'https://th.bing.com/th/id/OIP.6zI10iwBWPMOpMY3wnLscAAAAA?rs=1&pid=ImgDetMain' },
    { id: 4, price: 1500, offer: '5% discount', img: 'https://assets-news.housing.com/news/wp-content/uploads/2020/05/07164558/Design-ideas-for-small-and-large-dining-rooms-image-14-394x260.jpg' },
    { id: 5, price: 130, offer: '10% discount', img: 'https://image.made-in-china.com/2f0j00pobuIYgGmrzl/Modern-Lower-Price-Muebles-Modernos-Home-Furniture-Manufacturer-MDF-Dining-Tables-Restaurant-Side-Table.jpg' },
    { id: 6, price: 200, offer: '5% discount', img: 'https://th.bing.com/th/id/OIP.04CGk1JDdyuxfte6ocZxMQAAAA?rs=1&pid=ImgDetMainn' },
    { id: 7, price: 3000, offer: '8% discount', img: 'https://i.pinimg.com/originals/09/87/9d/09879d51b116e40aaa9d90bd76161f03.jpg' },
    { id: 8, price: 2500, offer: '5% discount', img: 'https://th.bing.com/th/id/OIP.EOY7BISqLNGByl-V1gLHIAHaEv?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' }
  ];

  return (
    <div className="background pb-5">
      {/* Table Visual Showcase Carousel */}
      <Carousel interval={3000}>
        <Carousel.Item>
          <img src="https://cdn11.bigcommerce.com/s-nu6nzn6ej0/images/stencil/700x900/products/5774/10249/Tiara-black-interior-2__31271.1546882867.jpg?c=2" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Table 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.picxy.com/cache/2020/8/26/ea695edf0fdb534ce461396947347aaa.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Table 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://th.bing.com/th/id/OIP.RQF3APClECy3F68J_jg7CAHaFj?rs=1&pid=ImgDetMain" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Table 3" />
        </Carousel.Item>
      </Carousel>

      <div className="container mt-5">
        <h1 className="text-white mb-4">Select Your Table:</h1>
        
        {/* Table Cards Grid */}
        <div className="row">
          {tables.map(table => (
            <div key={table.id} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card h-100 back shadow border-0" style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden' }}>
                <img src={table.img} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={`Table ${table.id}`} />
                <div className="card-body text-center">
                  <h5 className="card-title head">Price: ₹{table.price}</h5>
                  <p className="card-text para">Offer: {table.offer}</p>
                  <p className="small text-muted">Use AmazonPay for additional cashback</p>
                  <Link to="/menu" className="btn btn-warning btn-sm btn-block">View Menu</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;
