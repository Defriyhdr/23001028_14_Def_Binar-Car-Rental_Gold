import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import "../CarSearch/style.css";
import ButtonDetailCar from "../../components/ButtonDetailCar";

const CarSearch = () => {
  const [carsAll, setAllCars] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [status, setStatus] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [overlayOn, setOverlayOn] = useState(false);

  useEffect(() => {
    handleGetAllCar(name, type, priceMin, priceMax, status);
  }, []);

  const handleGetAllCar = (dataName, dataType, dataPriceMin, dataPriceMax, dataStatus) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataName}&category=${dataType}&minPrice=${dataPriceMin}&maxPrice=${dataPriceMax}&isRented=${dataStatus}
      `
      )
      .then((res) => {
        setAllCars(res.data.cars);
      })
      .catch((err) => console.log(err));
  };

  const handleCarDetail = () => {
    handleGetAllCar();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handlePrice = (e) => {
    const price = e.target.value;
    if (price === "0-399999") {
      setPriceMin(0);
      setPriceMax(399999);
    } else if (price === "400000-600000") {
      setPriceMin(400000);
      setPriceMax(600000);
    } else {
      setPriceMin(0);
      setPriceMax(600000);
    }
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    handleGetAllCar(name, type, priceMin, priceMax, status);
    setIsFilter(true);
  };

  const handleReset = () => {
    setName("");
    setType("");
    setPriceMin("");
    setPriceMax(600000);
    setStatus(false);
    handleGetAllCar("", "", "", "", false);
    setIsFilter(false);
  };

  const handleOn = () => {
    if (!overlayOn) {
      setOverlayOn(true);
    }
  };

  const handleOff = () => {
    if (overlayOn) {
      setOverlayOn(false);
    }
  };

  return (
    <div>
      {overlayOn && <div onClick={handleOff} className="overlay-search"></div>}
      <Navbar />
      <Hero />
      <div className="container">
        {/* form */}
        <div onClick={handleOn} className="container card p-0 card-search">
          <div className="card-body">
            <div className="d-inline-flex flex-wrap gap-2">
              <div className="input-car-name">
                {/* search car */}
                <label htmlFor="name" className="form-label text-label mb-1">
                  Nama Mobil
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleChangeName}
                  className="form-control rounded-1 text-input"
                  placeholder="Ketik Nama/tipe mobil"
                />
              </div>
              {/* search car */}

              {/* type */}
              <div className="select-car-category">
                <label className="form-label text-label mb-1">Kategori</label>
                <select value={type} onChange={handleType} className="form-select text-select">
                  <option selected>Masukkan Kapasitas Mobil</option>
                  <option value={"small"}>2 - 4 orang</option>
                  <option value={"medium"}>4 - 6 orang</option>
                  <option value={"large"}>6 - 8 orang</option>
                </select>
              </div>
              {/* type */}

              {/* price */}
              <div className="select-car-category">
                <label className="form-label text-label mb-1">Harga</label>
                <select
                  value={`${priceMin}-${priceMax}`}
                  onChange={handlePrice}
                  className="form-select text-select"
                  aria-label="Default select example"
                >
                  <option selected>Masukkan Harga Sewa per Hari</option>
                  <option value={"0-399999"}> &lt; Rp. 400.000 </option>
                  <option value={"400000-600000"}>Rp.400.000 - Rp.600.000</option>
                </select>
              </div>
              {/* price */}

              {/* status */}
              <div className="select-car-category">
                <label className="form-label text-label mb-1">Status</label>
                <select
                  value={status}
                  onChange={handleStatus}
                  className="form-select text-select"
                  aria-label="Default select example"
                >
                  <option value={false}>Disewakan</option>
                  <option value={true}>Tidak Disewakan</option>
                </select>
              </div>
              {/* status */}

              <div className="wrap-btn">
                <button
                  onClick={() => {
                    if (isFilter) {
                      handleReset();
                    } else {
                      handleSubmit();
                    }
                    handleOff();
                  }}
                  className={`${isFilter ? "btn-reset" : "btn-get-car"}`}
                >
                  {isFilter ? "Reset" : "Cari Mobil"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
      </div>

      {/* list car */}
      <div className="wrap-list-car">
        {!carsAll.length ? (
          <div className="wrap-not-found">
            <span className="not-found-header-text">404</span>
            <span className="not-found-text">Ooops!...Page not found.</span>
          </div>
        ) : (
          carsAll.map((car) => (
            <div className="card card-style" key={car.id}>
              <div className="card-body card-list">
                <img className="car-img" src={car.image} alt={`Car ${car.name}`} />
                <div className="wrap-car-text">
                  <p className="car-name-text">{car.name}</p>
                  <h1 className="car-price-text">{`Rp ${car.price} / hari`}</h1>
                  <h2 className="car-description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </h2>
                </div>
                <div className="d-flex m-auto">
                  <Link to={`/car/${car.id}`}>
                    <ButtonDetailCar onClick={handleCarDetail} />
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* list car */}
      <Footer />
    </div>
  );
};

export default CarSearch;
