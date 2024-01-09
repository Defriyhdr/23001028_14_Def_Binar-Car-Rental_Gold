import "./style.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import Button from 'react-bootstrap/Button';
import Countdown, { zeroPad } from 'react-countdown';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const renderer = ({ hours, minutes, seconds }) => (
    <span className="d-inline-flex countdown gap-1 align-items-center">
      <p>{zeroPad(hours)}</p>:<p>{zeroPad(minutes)}</p>:<p>{zeroPad(seconds)}</p>
    </span>
  );

  const renderer2 = ({minutes, seconds }) => (
    <span className="d-inline-flex countdown gap-1 align-items-center">
      <p>{zeroPad(minutes)}</p>:<p>{zeroPad(seconds)}</p>
    </span>
  );

  const initImage = {
    preview: "",
    raw: ""
  }

function DetailConfirmPayment() {

    const [isConfirmPayment, setIsConfirmPayment] = useState(false)
    const [image, setImage] = useState(initImage);
    const order = useSelector((state) => state.order)
    const bank = useSelector((state) => state.bank)
    const navigate = useNavigate()

    const handleChange = e => {
        if (e.target.files.length) {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
        }
    };

    function handleConfirmPayment() {
        setIsConfirmPayment(true)
    }

    async function handleUpload() {
        let formData = new FormData();
        formData.append("slip", image.raw);

        const config = {
            headers: {
                access_token: localStorage.getItem("accesToken"),
                "Content-Type": "multipart/form-data",
            },
        }

        try {
            const response = await axios.put(`https://api-car-rental.binaracademy.org/customer/order/${order.list_date.id}/slip`, formData, config)
            navigate(`/eticket/${order.list_date.id}`)
        } catch (error) {
            console.log(error)
        }

    }

    return (
       <div className="px-5 confirm-payment-container">
            <div className="row">
                <div className="col-md-6">
                    {/* card selesaikan pembayaran */}
                    <div className="card shadow-card mt-4 px-4 py-3">
                        <div className="row">
                            <div className="col-md-8 due-date-payment">
                                <h1>Selesaikan Pembayaran Sebelum</h1>
                                <p>Rabu, 19 Mei Jam 13.00 WIB</p>
                            </div>
                            <div className="col-md-4 count-down">
                                <div className="">
                                    <Countdown date={Date.now() + 86400000} renderer={renderer} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-card mt-4 px-4 py-3">
                        <h1>Lakukan Transfer Ke</h1>
                        <div className="row">
                            <div className="col-2" id="bank-name">
                                <p>{bank.bankName}</p>
                            </div>
                            <div className="col">
                                <p className="mb-0">{bank.bankName} Transfer</p>
                                <p>a.n Binar Car Rental</p>
                            </div>
                        </div>
                        <p>Nomor Rekening</p>
                        <div className="account-number d-flex justify-content-between">
                            <p>0812 3456 7890</p>
                            <CopyIcon  w={5} h={5} />
                        </div>
                        <br />
                        <p>Total Bayar</p>
                        <div className="account-number d-flex justify-content-between">
                            <p>Rp {new Intl.NumberFormat("id-ID", {
                                style: "decimal",
                                currency: "IDR",
                                }).format(order.list_date.total_price)}</p>
                            <CopyIcon  w={5} h={5} />
                        </div>
                        <br />
                    </div>
                    <div className="card shadow-card mt-4 px-4 py-3">
                        <h1>Instruksi Pembayaran</h1>
                        <div className="tab-instruction">
                            <Tabs>
                                <TabList>
                                    <Tab>ATM {bank.bankName}</Tab>
                                    <Tab>M-{bank.bankName}</Tab>
                                    <Tab>{bank.bankName} Klik</Tab>
                                    <Tab>Internet Banking</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <ul>
                                            <li><p>Masukkan kartu ATM, lalu PIN</p></li>
                                            <li><p>Pilih menu "Transaksi Lainnya" - "Transfer" - “Ke Rek BCA Virtual Account”</p></li>
                                            <li><p>Masukkan nomor BCA Virtual Account: 70020+Order ID</p></li>
                                            <p>Contoh:</p>
                                            <p>No. Peserta: 12345678, maka ditulis 7002012345678</p>
                                            <li><p>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</p></li>
                                            <li><p>Ambil dan simpanlah bukti transaksi tersebut</p></li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>three!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">

                    {
                        isConfirmPayment ? (
                            <div className="card shadow-card mt-4 px-4 py-3">
                                <div className="row">
                                    <div className="col-8 due-date-payment">
                                        <h1>Konfirmasi Pembayaran</h1>
                                    </div>
                                    <div className="col-4 count-down pt-2">
                                        <div className="">
                                            <Countdown date={Date.now() + 900000} renderer={renderer2} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <p>Terima kasih telah melakukan konfirmasi pembayaran. <br /> Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                                </div>

                                <div className="title-upload-payment mt-1">
                                    <p>Upload Bukti Pembayaran</p>
                                </div>

                                <div className="mt-1">
                                    <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                                </div>  
                                <div className="upload-image d-grid justify-content-center align-items-center">
                                    <label htmlFor="upload-button">
                                        {image.preview ? (
                                        <img src={image.preview} alt="dummy" width="300" height="300" />
                                        ) : (
                                        <>
                                                <span className="fa-stack fa-2x">
                                                    <i className="fa-regular fa-image fa-stack-1x"></i>
                                                </span>
                                        </>
                                        )}
                                    </label>
                                    <input
                                        type="file"
                                        id="upload-button"
                                        style={{ display: "none" }}
                                        onChange={handleChange}
                                    />
                                </div>
                                <Button className="mb-3 mt-3" variant="success" onClick={handleUpload} disabled={image !== initImage? false : true}><b>Upload</b></Button>  
                            </div>
                        ) : (
                            <div className="card shadow-card mt-4 px-4 py-3">
                                <p id="description-confirm-payment">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                                <Button variant="success" onClick={handleConfirmPayment}><b>Konfirmasi Pembayaran</b></Button>
                            </div>
                        )
                    }
                    
                </div>

                   
            </div>
       </div>
    );
}

export default DetailConfirmPayment;