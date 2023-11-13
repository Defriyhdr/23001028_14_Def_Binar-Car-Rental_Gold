import { useState } from "react";
import imgOurServices from "../../assets/img/img_service.png";
import iconCheckList from "../../assets/icon/icon_checklist.png";
import "../../components/OurServices/style.css";

const ourServices = () => {
  const [items] = useState([
    {
      service: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    },
    {
      service: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      service: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      service: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      service: "Layanan Airport Transfer / Drop In Out",
    },
  ]);

  return (
    <>
      <section id="our-services">
        <div className="container mt-5">
          <div className="row">
            {/* left */}
            <div className="col-sm-12 col-md-12 col-lg-6 mb-sm-5 wrap-os-img">
              <img className="img-fluid ps-xxl-5 ms-xxl-5" src={imgOurServices} />
            </div>
            {/* left */}

            {/* right */}
            <div className="col-sm-12 col-lg-6 mt-xxl-4 mt-lg-4 mt-md-0">
              <h2 className="header-text-sec-2">Best Car Rental for any kind of trip in Yogyakarta !</h2>
              <p className="sub-text-sec-2">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil
                baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <div className="mt-3">
                {items.map((item, i) => (
                  <div key={i} className="d-flex gap-3 p-1">
                    <img className="icon-check-list" src={iconCheckList} />
                    <p className="content-text-sec-2">{item.service}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* right */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ourServices;
