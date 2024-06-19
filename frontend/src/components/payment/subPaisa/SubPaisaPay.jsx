import { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

export const SubPaisaPay = () => {
  const location = useLocation();
  const submitForm = () => {
    document.getElementById('nonseamless').submit();
  };

  useEffect(() => {
    if (location.state && location.state.optional) {
      submitForm();
    }
  }, [location.state]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form id="nonseamless" method="post" name="redirectToSubPaisa" action={`${'https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1'}`} >
        <input type="hidden" id="encData" name="encData" value={location.state.optional.encData} />
        <input type="hidden" name="clientCode" id="clientCode" value={location.state.optional.clientCode} />
      </form>
    </div>
  )
}






import { Link } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import invoicelogo from "../../../assets/img/invoicelogo.png";
import "../../../index.css";

const SubPaisaPaymentStatus = () => {
  const componentRef = useRef()
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);

  // for specific content
  const details = queryParams.get('details');
  const detailsParams = new URLSearchParams(details);

  const payerName = detailsParams.get('payerName');
  const payerEmail = queryParams.get('payerEmail');
  const paidAmount = queryParams.get('paidAmount');
  const payerAddress = queryParams.get('payerAddress');
  const transDate = queryParams.get('transDate');
  const payerMobile = queryParams.get('payerMobile');
  const clientTxnId = queryParams.get('clientTxnId');

  // print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex justify-around border flex-col md:flex-row gap-y-10 p-[3%]">
      <div className="md:w-[30%] w-full">
        <div className="p-2 rounded-lg bg-yellow-500  flex items-center justify-center flex-col md:gap-10 gap-3">
          <h1 className="text-white md:text-4xl text-2xl md:font-extrabold font-bold">Thank You for Your Contribution!</h1>
          <p className="font-medium text-white">
            Your support is greatly appreciated and will help us in our mission to feed every child. We are grateful for your commitment to this cause. If you have any questions or need further assistance, please feel free to contact us. Once again, <span className="text-black">Thank you for making a difference!</span>
          </p>
          <Link to='/'>
            <button className="bg-white px-8 py-2 rounded font-semibold">Home</button>
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-col gap-5 mb-5 md:w-[60%] w-full">
        <div className="flex flex-col justify-center md:gap-10 gap-5" ref={componentRef}>
          <section className="h-20 border-b border-solid border-slate-400 flex items-center justify-between px-2">
            <img className="h-full" src={invoicelogo} alt="" />
            <div className="flex flex-col">
              <h1 className="md:text-4xl md:font-extrabold text-2xl font-bold">Your Foundation Name </h1>
              <p className="text-slate-600 font-medium text-sm">A-88 sector-4 block-a noida uttar pradesh</p>
            </div>
          </section>
          <section className="w-full flex justify-center">
            <h1 className="md:text-2xl md:font-extrabold text-xl font-bold underline">Donation Receipt</h1>
          </section>
          <section className="flex flex-col gap-2 font-medium text-slate-700 items-center px-2">
            <p className="">
              Thank you for your gift!
              <br />
              The amount you have given will make a difference as the proceeds will go help put the children to school to give them better education, and thus make them better members of society.
            </p>
            <p className="">
              This receipt is an attestation that we have gratefully received your generous contribution to our humble institution. Keep this receipt for your tax deduction purposes.
            </p>
          </section>
          <section className="flex flex-col gap-3 px-2">
            <div className="flex flex-col gap-1">
              <h3 className="md:text-xl md:font-extrabold text-lg font-bold">Donor&apos;s Name</h3>
              <p className="font-medium text-slate-600 text-sm items-center">{payerName}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-xl md:font-extrabold text-lg font-bold">Donor&apos;s Address</h3>
              <p className="font-medium text-slate-600 text-sm items-center w-1/3">{payerAddress}</p>
              <p className="font-medium text-slate-600 text-sm items-center w-1/3">Mobile number : {payerMobile} <br /> Email : {payerEmail}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-xl md:font-extrabold text-lg font-bold">Donation Amount</h3>
              <p className="font-medium text-slate-600 text-sm items-center">₹ {paidAmount}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-xl md:font-extrabold text-lg font-bold">Receipt number or Transaction ID</h3>
              <p className="font-medium text-slate-600 text-sm items-center">{clientTxnId}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-xl md:font-extrabold text-lg font-bold">Date Received</h3>
              <p className="font-medium text-slate-600 text-sm items-center">{transDate}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-xl md:font-extrabold text-lg font-bold">Donation received by</h3>
              <p className="font-medium text-slate-600 text-sm items-center">Your Foundation Name <br /> A/88,3rdFloor,Sector04,Nearsector16, <br /> Noida, UP, PIN:201301</p>
            </div>
          </section>
        </div>
        <ReactToPrint trigger={() => (
          <button onClick={handlePrint} className="bg-yellow-500 px-8 py-2 rounded font-semibold hover:bg-yellow-400">
            Print
          </button>
        )}
          content={() => componentRef.current}
        />
      </div>
    </div>
  )
}

export default SubPaisaPaymentStatus
