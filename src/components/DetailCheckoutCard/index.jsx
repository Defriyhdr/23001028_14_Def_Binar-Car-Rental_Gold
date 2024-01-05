import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateBankName } from "../../redux/features/bank/bankSlice";
import moment from "moment";

import { Accordion } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import iconUserDetail from "../../assets/icon/fi_users.png";
import ButtonPayment from "../ButtonPayment";
import BCAIcon from "../../assets/icon/icon-BCA.svg";
import BNIIcon from "../../assets/icon/icon-BCA.svg";
import MandiriIcon from "../../assets/icon/icon-Mandiri.svg";
import "./style.css";
import axios from "axios";

const DetailCheckoutCard = () => {
  const banks = [
    {
      id: "BCA",
      name: "BCA Transfer",
      isChecked: false,
      pathIcon: `${BCAIcon}`,
    },
    {
      id: "BNI",
      name: "BNI Transfer",
      isChecked: false,
      pathIcon: `${BNIIcon}`,
    },
    {
      id: "Mandiri",
      name: "Mandiri Transfer",
      isChecked: false,
      pathIcon: `${MandiriIcon}`,
    },
  ];

  const [carsDetail, setCarsDetail] = useState({});
  const [isBankChecked, setBankChecked] = useState(false);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order, bank } = useSelector((state) => state);

  const handleChooseBank = (id) => {
    dispatch(updateBankName(id));
    setBankChecked(true);
  };

  const handlePaymentConfirm = () => {
    navigate(`/payment-confirm/${order.list_date.id}`);
  };

  useEffect(() => {
    getCarDetail(order.list_date.CarId);
    if (Object.keys(bank.bankName).length > 0) {
      setBankChecked(true);
    }
  }, []);

  const getCarDetail = (id) => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
      .then((res) => {
        setCarsDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container px-5 header-detail-checkout-card">
      {/* detail pesanan */}
      <div className="justify-content-center card shadow-card p-4">
        <h1 className="text-header-payment mb-3">Detail Pesananmu</h1>
        <div className="row">
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Nama/Tipe Mobil</p>
            <p className="text-content-payment">{carsDetail.name}</p>
          </div>
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Kategori</p>
            <p className="text-content-payment">
              {(() => {
                if (carsDetail.category == "small") {
                  return "2 - 4 Orang";
                } else if (carsDetail.category == "medium") {
                  return "4 - 6 Orang";
                } else {
                  return "6 - 8 Orang";
                }
              })()}
            </p>
          </div>
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Tanggal Mulai Sewa</p>
            <p className="text-content-payment">
              {moment(order.list_date.start_rent_at).format("DD MMMM YYYY")}
            </p>
          </div>
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Tanggal Akhir Sewa</p>
            <p text className="text-content-payment">
              {moment(order.list_date.finish_rent_at).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
      </div>
      {/* detail pesanan */}

      {/* choosepayment */}
      <div className="row">
        {/* left */}
        <div className="col-lg-7">
          <div className="card shadow-card mt-4 px-4 py-3">
            <h1 className="text-header-payment my-2">Pilih Bank Transfer</h1>
            <p className="text-sub-header-payment">
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
            </p>
            <div>
              <ul className="list-group list-group-flush mt-3">
                {banks.map((bankDetail) => (
                  <li
                    className={`list-group-item d-flex justify-content-between px-0`}
                    key={bankDetail.id}
                    onClick={() => handleChooseBank(bankDetail.id)}
                  >
                    <div className="d-flex my-2">
                      <img
                        className="me-3"
                        src={bankDetail.pathIcon}
                        alt={`icon-${bankDetail.id}`}
                      />
                      <p className="my-auto text-bank">{bankDetail.name}</p>
                    </div>
                    {bankDetail.id == bank.bankName ? (
                      <div style={{ margin: "auto 10px" }}>
                        <FaCheck style={{ color: "5CB85F", fontSize: "18px" }} />
                      </div>
                    ) : null}
                  </li>
                ))}
                <li className="list-group-item"></li>
              </ul>
            </div>
          </div>
        </div>
        {/* left */}

        {/* right */}
        <div className="col-lg-5">
          <div className="card shadow-card mt-4 px-4 py-3">
            <h1 className="text-header-payment">{carsDetail.name}</h1>
            <div className="d-inline-flex gap-1">
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

            <Accordion className="mt-3 mb-1" defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="text-header-payment">
                  <div className="d-flex">
                    <p className="text-content-payment mb-0 me-3">Total</p>
                    <p className="text-header-payment mb-0">Rp {order.list_date.total_price}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <form>
                    <h6 className="text-header-payment">Harga</h6>
                    <ul className="mt-1 mb-3">
                      <div className="d-flex justify-content-between">
                        <li className="text-sub-header-payment">
                          Sewa Mobil Rp {carsDetail.price} x{" "}
                          {moment(order.list_date.finish_rent_at).diff(
                            moment(order.list_date.start_rent_at),
                            "days"
                          ) + 1}{" "}
                          Hari
                        </li>
                        <h6 className="text-sub-header-payment">{order.list_date.total_price}</h6>
                      </div>
                    </ul>
                    <h6 className="text-header-payment">Biaya Lainnya</h6>
                    <ul className="mt-3 mb-3">
                      <div className="d-flex justify-content-between">
                        <li className="text-sub-header-payment">Pajak</li>
                        <p className="text-success">Termasuk</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <li className="text-sub-header-payment">Biaya makan sopir</li>
                        <p className="text-success">Termasuk</p>
                      </div>
                    </ul>
                    <h6 className="text-header-payment">Belum Termasuk</h6>
                    <ul className="mt-3 mb-4">
                      <li className="text-sub-header-payment">Bensin</li>
                      <li className="text-sub-header-payment mt-3">Tol dan parkir</li>
                    </ul>
                    <hr className="bg-primary"></hr>
                    <div className="d-flex justify-content-between mb-1">
                      <p className="text-header-payment">Total </p>
                      <p className="text-header-payment">{order.list_date.total_price}</p>
                    </div>
                    <ButtonPayment
                      onClickFunction={handlePaymentConfirm}
                      isDisabled={!isBankChecked}
                    ></ButtonPayment>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        {/* right */}
      </div>
      {/* choosepayment */}
    </div>
  );
};

export default DetailCheckoutCard;
