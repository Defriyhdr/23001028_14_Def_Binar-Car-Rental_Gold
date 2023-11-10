import imgCar from "../../assets/img/img_car.png";
import "../../components/Hero/style.css";

const Hero = () => (
  <>
    <section id="hero" className="container-fluid bg-blue-light pt-2 my-2">
      <div className="container mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-3 mt-sm-5 pt-xxl-5 pt-xl-5 pt-lg-5 pt-md-3 bg-blue-light">
        <div className="row">
          <div className="col-sm-12 col-lg-6 pt-lg-2 pt-xl-0 mt-xl-3 ">
            <h1 className="header-hero-text mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="sub-text-hero mt-xxl-4 mt-xl-4 mt-lg-2 mt-md-4 mt-sm-4">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap
              melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <button className="btn btn-success mt-xxl-3 mt-xl-2 mt-lg-2 mt-md-3 mt-sm-4 ">Mulai Sewa Mobil</button>
          </div>
          <div className="col-sm-12 col-lg-6 pt-lg-5 mt-lg-5 pe-0 wrap-car">
            <img className="img-fluid" src={imgCar} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
