import Header from "./Compontent/Header";
import Header2 from "./Compontent/Header2";
import Banner from "./Compontent/Banner";
import Head from "next/head";
import Image from "next/image";
import Header4 from "./Compontent/Header4";
import Footer from "./Compontent/Footer";

const index = () => {
  return (
    <div>
      <Head>
        <title>India Best Online Hotel Booking Site For Sanitized Stay</title>
      </Head>
      <Header />
      <Header2 />
      <Banner />

      <div className="my-10 px-10 ">
        <Image
          priority="true"
          src={"/oyo.avif"}
          alt={"banner"}
          width={200}
          height={200}
          className="h-80 w-full "
        />
      </div>
      <div className="my-10 px-10">
        <Image
          priority="true"
          src={"/oyo image-2.avif"}
          alt={"banner2"}
          width={200}
          height={200}
          className="h-80 w-full "
        />
        <Header4 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
