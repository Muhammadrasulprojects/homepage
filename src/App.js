import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div>
      <header>
        <h4>Start Bootstrap</h4>
        <nav>
          <a href="#" className='text-dark m-3'>Home</a>
          <a href="#" className='text-secondary m-3 about'>About</a>
          <button className='btn btn-outline-dark bg-white py-2 text-dark'>
            <Icon className='cart' icon="simple-line-icons:basket" color="black" width="20" height="20" /> Cart
            <Icon className='zero' icon="bi:0-circle-fill" color="black" width="20" height="20" />
          </button>
        </nav>
      </header>
      <section className='main'>
        <h1 className='text-center text-light'>Shop in style</h1>
        <p className='text-center text-secondary'>With this shop hompeage template</p>
      </section>
      <section className='sectionBig'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group my-3'>Fancy Product</h4>
                <p className='text-center price'>$40.00 - $80.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>View options</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group mt-3 mb-0'>Special Item</h4>
                <Icon className='starIcon' icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <p className='text-center priceStar'><span className='text-secondary'>$20.00</span> $18.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>Add to cart</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group my-3'>Sale Item</h4>
                <p className='text-center price'><span className='text-secondary'>$20.00</span> $25.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>Add to cart</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group mt-3 mb-0'>Popular Item</h4>
                <Icon className='starIcon' icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <p className='text-center priceStar'>$40.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>Add to cart</a>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group my-3'>Sale Item</h4>
                <p className='text-center price'><span className='text-secondary'>$50.00</span> $25.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>Add to cart</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group my-3'>Fancy Product</h4>
                <p className='text-center price'>$120.00 - $280.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>View options</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group mt-3 mb-0'>Special Item</h4>
                <Icon className='starIcon' icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <p className='text-center priceStar'><span className='text-secondary'>$20.00</span> $18.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>Add to cart</a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 productCol">
              <div className="productCard">
                <img className='d-block productImg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <h4 className='text-center group mt-3 mb-0'>Popular Item</h4>
                <Icon className='starIcon' icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <Icon icon="mdi:star" color="yellow" width="20" height="20" />
                <p className='text-center priceStar'>$40.00</p>
                <a href="#" className='btn bg-light btn-outline-dark text-dark text-center my-3 buyButton'>Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className='p-5 bg-dark'>
        <p className='text-center text-light'>Copyright © Your Website 2023</p>
      </footer>
    </div>
  );
}

export default App;