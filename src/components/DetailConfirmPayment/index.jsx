import "./style.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import Button from 'react-bootstrap/Button';
import Countdown, { zeroPad } from 'react-countdown';

const renderer = ({ hours, minutes, seconds }) => (
    <span>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );


function DetailConfirmPayment() {
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
                                <p>BCA</p>
                            </div>
                            <div className="col">
                                <p className="mb-0">BCA Transfer</p>
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
                            <p>Rp 4.200.000</p>
                            <CopyIcon  w={5} h={5} />
                        </div>
                        <br />
                    </div>
                    <div className="card shadow-card mt-4 px-4 py-3">
                        <h1>Instruksi Pembayaran</h1>
                        <div className="tab-instruction">
                            <Tabs>
                                <TabList>
                                    <Tab>ATM BCA</Tab>
                                    <Tab>M-BCA</Tab>
                                    <Tab>BCA Klik</Tab>
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
                    {/* card selesaikan pembayaran */}
                    <div className="card shadow-card mt-4 px-4 py-3">
                        <p id="description-confirm-payment">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                        <Button variant="success"><b>Konfirmasi Pembayaran</b></Button>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default DetailConfirmPayment;