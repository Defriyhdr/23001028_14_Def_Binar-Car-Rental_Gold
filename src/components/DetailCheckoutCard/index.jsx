import React from "react";
import iconUserDetail from "../../assets/icon/fi_users.png";
import iconDropdown from "../../assets/icon/icon_dropdown.png";
import iconChecklist from "../../assets/icon/fi_check.png";
import ButtonPayment from "../ButtonPayment";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailCheckoutCard = () => {
  const param = useParams();

  const [listDetail, setListDetail] = useState({});

  useEffect(() => {
    handleGetAllList();
  }, []);

  const handleGetAllList = () => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/car/
        ${param.id}`
      )
      .then((res) => {
        console.log(res.data);
        setListDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleGetDateList = () => {
    axios;
  };

  return (
    <div className="container px-5 header-detail-checkout-card">
      {/* detail pesanan */}
      <div className="justify-content-center card shadow-card p-4">
        <h1 className="text-header-payment mb-3">Detail Pesananmu</h1>
        <div className="row">
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Nama/Tipe Mobil</p>
            <p className="text-content-payment">{listDetail.name}</p>
          </div>
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Kategori</p>
            <p className="text-content-payment">
              {(() => {
                if (listDetail.category == "small") {
                  return "2 - 4 Orang";
                } else if (listDetail.category == "medium") {
                  return "4 - 6 Orang";
                } else {
                  return "6 - 8 Orang";
                }
              })()}
            </p>
          </div>
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Tanggal Mulai Sewa</p>
            <p className="text-content-payment">{listDetail.createdAt}</p>
          </div>
          <div className="col-3">
            <p className="text-sub-header-payment my-2">Tanggal Akhir Sewa</p>
            <p text className="text-content-payment">
              8 Juni 2022
            </p>
          </div>
        </div>
      </div>
      {/* detail pesanan */}

      {/* pilih bank tf*/}
      <div className="row">
        {/* left */}
        <div className="col-8">
          <div className="card shadow-card mt-4 px-4 py-3">
            <h1 className="text-header-payment my-2">Pilih Bank Transfer</h1>
            <p className="text-sub-header-payment">
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
            </p>
            <div className="mt-3">
              <div className="d-flex gap-4">
                <div className="card justify-content-center bank-card text-bank">BCA</div>
                <div className="select-bank">
                  <p className="my-auto text-bank">BCA Transfer</p>
                  {/* <img className="icon-checklist my-auto" src={iconChecklist} /> */}
                </div>
              </div>
              <hr className="hr" />
            </div>
            <div className="mt-1">
              <div className="d-flex gap-4">
                <div className="card justify-content-center bank-card text-bank">BNI</div>
                <div className="select-bank">
                  <p className="my-auto text-bank">BNI Transfer</p>
                  {/* <img className="icon-checklist my-auto" src={iconChecklist} /> */}
                </div>
              </div>
              <hr className="hr" />
            </div>
            <div className="mt-1">
              <div className="d-flex gap-4">
                <div className="card justify-content-center bank-card text-bank">Mandiri</div>
                <div className="select-bank">
                  <p className="my-auto text-bank">Mandiri Transfer</p>
                  {/* <img className="icon-checklist my-auto" src={iconChecklist} /> */}
                </div>
              </div>
              <hr className="hr" />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="col-4">
          <div className="card shadow-card mt-4 px-4 py-3">
            <h1 className="text-header-payment">Innova</h1>
            <div className="d-inline-flex gap-1">
              <img className="icon-detail me-2" src={iconUserDetail} />
              <span className="type-detail">6-8 orang</span>
            </div>

            <div className="d-inline-flex mt-5">
              <div className="d-inline-flex gap-2">
                <p className="text-sub-header-payment me-auto my-2 ">Total</p>
                <img className="icon-dropdown my-2" src={iconDropdown} />
              </div>
              <h1 className="text-header-payment ms-auto my-2">Rp 3.500.000</h1>
            </div>

            {/*  */}
            <div className="wrap-card-dropdown">
              <div className="other-detail">
                <h1 className="text-header-payment mt-2">Harga</h1>
                <div className="wrap-list my-2">
                  <ul className="ps-4">
                    <li className="text-li">Sewa Mobil Rp.500.000 x 7 Hari</li>
                  </ul>
                  <span className="text-li">Rp 3.500.000</span>
                </div>
              </div>

              <div className="other-detail">
                <h1 className="text-header-payment mt-2">Biaya Lainnya</h1>
                <div className="wrap-list mt-2">
                  <ul className="ps-4">
                    <li className="text-li">Pajak</li>
                  </ul>
                  <span className="text-li-other">Termasuk</span>
                </div>
                <div className="wrap-list mb-2">
                  <ul className="ps-4">
                    <li className="text-li">Biaya makan sopir</li>
                  </ul>
                  <span className="text-li-other">Termasuk</span>
                </div>
              </div>

              <div className="other-detail">
                <h1 className="text-header-payment mt-2">Belum Termasuk</h1>
                <div className="d-inline-flex mt-2">
                  <ul className="ps-4">
                    <li className="text-li">Bensin</li>
                  </ul>
                </div>
                <div className="d-inline-flex mb-2">
                  <ul className="ps-4">
                    <li className="text-li">Tol dan parkir</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="hr" />

            <div className="wrap-total">
              <h1 className="text-header-payment">Total</h1>
              <h1 className="text-header-payment">Rp 3.500.000</h1>
            </div>

            <div className="mt-3">
              <ButtonPayment />
            </div>
          </div>
        </div>
      </div>

      {/* pilih bank tf */}

      {/* card detail */}
      {/* card detail */}
    </div>
  );
};

export default DetailCheckoutCard;
