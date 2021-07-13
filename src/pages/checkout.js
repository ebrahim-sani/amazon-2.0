import Header from "./components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={220}
            alt="banner_ad"
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-xl border-b pb-4">Your Shopping Basket</h1>
          </div>
          <h3>Let goo</h3>
        </div>

        {/* RIght */}
        <div></div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Checkout;
