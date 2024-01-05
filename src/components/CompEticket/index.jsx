import React from "react";
import "./style.css";
import pdf from "./mou.pdf";
import { Viewer } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

const CompEticket = () => {
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  // validate jika order sudah di bayar menggunakan useEffect
  // get data orderId dari url param
  // hit get /customer/order/{id}
  // di cek responsenya jika sliknya kosong maka direct ke not found

  //atau

  //validatenya ada di bagian protectedRoute

  return (
    <div className="px-5 confirm-payment-container">
      <div className="row">
        <div className="col-md-6">
          <div className="icon">
            <div className="elips">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M28.3333 8.5L12.75 24.0833L5.66663 17"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1 className="succes-buy">Pembayaran Berhasil!</h1>
          <p className="invoice-tostaff">
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
          <div className="card shadow-card mt-4 px-4 py-3" id="box-pdf">
            <h1 className="invoice">Invoice</h1>
            <div
              className="btn btn-outline-primary"
              id="button-dowloadpdf"
            >
              <DownloadButton />
              <p className="unduh">Unduh</p>
            </div>
            <Worker workerUrl={WORKER_URL}>
              <div className="row">
                <div className="col">
                  <div
                    className="card shadow-card mt-4 px-4 py-3"
                    id="box-filepdf"
                  >
                    <Viewer plugins={[getFilePluginInstance]} fileUrl={pdf} />
                  </div>
                </div>
              </div>
            </Worker>
            <br />

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompEticket;
