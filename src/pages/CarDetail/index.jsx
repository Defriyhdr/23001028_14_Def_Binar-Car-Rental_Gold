import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import iconUserDetail from "../../assets/icon/fi_users.png";
import iconDropdown from "../../assets/icon/icon_dropdown.png";
import "../CarDetail/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { orderCar } from "../../redux/features/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonSetDate from "../../components/ButtonSetDate";

const CarDetail = () => {
  const param = useParams();
  const carById = useParams();
  const [list, setList] = useState();
  const dropDown = () => setList(!list);
  const [carsDetail, setcarsDetail] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDateChoosed, setDateChoosed] = useState(false);

  // calendar feature
  const [durationRent, setDurationRent] = useState([null, null]);
  const [firstDay, lastDay] = durationRent;
  const [chooseCar, setChooseCar] = useState("");

  useEffect(() => {
    handleGetCarById();
  }, []);

  const handleGetCarById = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        setcarsDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  // calendar feature
  useEffect(() => {
    let day = 0;

    if (firstDay && lastDay) {
      day = moment(lastDay).diff(moment(firstDay), "days") + 1;
      setChooseCar(day);
      setDateChoosed(true);
    } else {
      setChooseCar(0);
    }
  }, [firstDay, lastDay]);

  const handleCustomerOrder = () => {
    dispatch(
      orderCar({
        start_rent_at: moment(durationRent[0]).format("YYYY-MM-DD"),
        finish_rent_at: moment(durationRent[1]).format("YYYY-MM-DD"),
        car_id: Number(carById.id),
      })
    );
    setTimeout(() => {
      navigate(`/car/${carsDetail.id}/payment`);
    }, 500);
    console.log("masuk");
  };

  const hiddenButton = () => {
    chooseCar(!setChooseCar);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid blank-container">
        <div className="container">
          <div className="wrap-package-car">
            <div className="card card-package">
              <div className="card-body">
                <h1 className="header-detail-text mt-2">Tentang Paket</h1>
                <div className="mt-4">
                  <h2 className="sub-detail-text">Include</h2>
                  <ul className="ps-4">
                    <li className="content-detail-text">
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li className="content-detail-text">Sudah termasuk bensin selama 12 jam</li>
                    <li className="content-detail-text">Sudah termasuk Tiket Wisata</li>
                    <li className="content-detail-text">Sudah termasuk pajak</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h2 className="sub-detail-text">Exclude</h2>
                  <ul className="ps-4">
                    <li className="content-detail-text ">
                      Tidak termasuk biaya makan sopir Rp 75.000/hari
                    </li>
                    <li className="content-detail-text ">
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                    </li>
                    <li className="content-detail-text ">Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between">
                    <h2 className="sub-detail-text mb-0">Refund, Reschedule, Overtime</h2>
                    <img onClick={dropDown} src={iconDropdown} />
                  </div>
                  {list && (
                    <ul className="ps-4 mt-1 ">
                      <li className="content-detail-text">
                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                      </li>
                      <li className="content-detail-text">
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                      </li>
                      <li className="content-detail-text">Tidak termasuk akomodasi penginapan</li>
                      <li className="content-detail-text">
                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                      </li>
                      <li className="content-detail-text">
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                      </li>
                      <li className="content-detail-text">Tidak termasuk akomodasi penginapan</li>
                      <li className="content-detail-text">
                        Tidak termasuk biaya makan sopir Rp 75.000/hari
                      </li>
                      <li className="content-detail-text">
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
                      </li>
                      <li className="content-detail-text">Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="card card-detail-car">
              <div className="card-body">
                <div className="wrap-detail-car m-auto">
                  <img className="img-detail-car" src={carsDetail.image} />
                </div>
                <div className="d-flex flex-column mt-5">
                  <h1 className="detail-car-text m-0">{carsDetail.name}</h1>
                  <div className="wrap-detail">
                    <div className="d-flex gap-2 my-2">
                      <img className="icon-detail me-2" src={iconUserDetail} />
                      <span className="type-detail">
                        {(() => {
                          if (carsDetail.category == "small") {
                            return "2 - 4 Orang";
                          } else if (carsDetail.category == "medium") {
                            return "4 - 6 Orang";
                          } else {
                            return "6 - 8 Orang";
                          }
                        })()}
                      </span>
                    </div>

                    <div>
                      <p className="content-detail-text mb-0 mt-4 mb-2">
                        {" "}
                        Tentukan lama sewa mobil (max. 7 hari)
                      </p>
                      <DatePicker
                        dateFormat="dd MMM yyyy"
                        showIcon
                        selectsRange={true}
                        startDate={firstDay}
                        endDate={lastDay}
                        onChange={(update) => {
                          setDurationRent(update);
                        }}
                        minDate={firstDay ? new Date(lastDay) : new Date()}
                        maxDate={
                          firstDay
                            ? new Date(new Date(firstDay).setDate(new Date(firstDay).getDate() + 6))
                            : null
                        }
                        // isClearable
                        placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                      />
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                      <p className="detail-car-text">Total</p>
                      <p className="detail-car-text">{`Rp ${carsDetail.price * chooseCar}`}</p>
                    </div>

                    <div className="mt-3">
                      {/* <button onClick={handleCustomerOrder}>

                      </button> */}
                      <ButtonSetDate
                        onClickFunction={handleCustomerOrder}
                        isDisabled={!isDateChoosed}
                      ></ButtonSetDate>
                    </div>
                  </div>
                  {/* calendar feature */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetail;
