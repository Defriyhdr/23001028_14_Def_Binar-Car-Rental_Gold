import { useState } from "react";
import React from "react";
import "../FAQ/style.css";

const FAQ = () => {
  const [itemsFaq] = useState([
    {
      id: "faq1",
      itemFaq: "Apa saja syarat yang dibutuhkan?",
      answer:
        "Syarat yang dibutuhkan adalah lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas ab odit alias, natus at magni! ",
    },
    {
      id: "faq2",
      itemFaq: "Berapa hari minimal sewa mobil lepas kunci?",
      answer:
        "Hari minimal sewa adalah lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas ab odit alias, natus at magni!",
    },
    {
      id: "faq3",
      itemFaq: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
      answer:
        "Sebaiknya Anda booking lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas ab odit alias, natus at magni!",
    },
    {
      id: "faq4",
      itemFaq: "Apakah Ada biaya antar-jemput?",
      answer:
        "Ada biaya tambahan lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas ab odit alias, natus at magni!",
    },
    {
      id: "faq5",
      itemFaq: "Bagaimana jika terjadi kecelakaan",
      answer:
        "Jika terjadi kecelakaan lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas ab odit alias, natus at magni!",
    },
  ]);

  return (
    <section id="faq" className="container text-sm-center text-lg-start  mt-5 ">
      <div className="row">
        <div className="col-sm-12 col-lg-5 mb-sm-3 wrap-faq">
          <h2 className="header-text-sec-5">Frequently Asked Question</h2>
          <p className="sub-text-sec-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="col-sm-12 col-lg-7">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {itemsFaq.map((item) => (
              <div key={item.id} className="accordion-item border-0 py-2">
                <h2 className="accordion-header" id={`flush-heading-${item.id}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse-${item.id}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse-${item.id}`}
                  >
                    {item.itemFaq}
                  </button>
                </h2>
                <div
                  id={`flush-collapse-${item.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading-${item.id}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
