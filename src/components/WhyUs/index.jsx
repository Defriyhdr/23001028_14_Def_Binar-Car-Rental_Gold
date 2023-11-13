import { useState } from "react";
import "../../components/WhyUs/style.css";
import iconComplete from "../../assets/icon/icon_complete.png";
import iconPrice from "../../assets/icon/icon_price.png";
import icon24Hrs from "../../assets/icon/icon_24hrs.png";
import iconProfessional from "../../assets/icon/icon_professional.png";

const whyUs = () => {
  const [list] = useState([
    {
      icon: iconComplete,
      title: "Mobil Lengkap",
      content: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: iconPrice,
      title: "Harga Murah",
      content: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: icon24Hrs,
      title: "Layanan 24 Jam",
      content: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: iconProfessional,
      title: "Sopir Profesional",
      content: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ]);

  return (
    <>
      <section id="why-us" className="container mt-5 ">
        <div className="row">
          <div className="col-sm-12 col-lg-12 text-sm-center p-4  ">
            <h2 className="header-text-section-3 text-sm-center text-lg-start">Why Us?</h2>
            <p className="sub-text-section-3 text-sm-center text-lg-start">Mengapa harus pilih Car Rental?</p>
          </div>
          {list.map((it, i) => (
            <div key={i} className="col-sm-12 col-md-6 col-lg-3">
              <div className="card why-us-wrap">
                <div className="card-body why-us-card">
                  <img src={it.icon} />
                  <h3 className="title-card-section-3 mb-0 ">{it.title}</h3>
                  <p className="text-card-section-3 mb-0 ">{it.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default whyUs;
