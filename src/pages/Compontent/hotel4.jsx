import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className=" w-full h-75 border  mt-5 rounded-2 ">
      <div className="flex">
        <Image
          src={"/hotel image 4.avif"}
          width={200}
          height={200}
          alt="hotelimg1"
          className="w-80 h-large-box px-5 pt-3 pb-3"
        />
        <div className=" grid grid-rows-3 my-3 pb-2">
          <Image
            src={"/hotel image 3.avif"}
            width={200}
            height={200}
            alt="hotelimg2"
            className="w-20  "
          />
          <Image
            src={"/hotel image 3.avif"}
            width={200}
            height={200}
            alt="hotelimg3"
            className="w-20  "
          />
          <Image
            src={"/hotel image 3.avif"}
            width={200}
            height={200}
            alt="hotelimg4"
            className="w-20  "
          />
          <Image
            src={"/hotel image 3.avif"}
            width={200}
            height={200}
            alt="hotelimg5"
            className="w-20  "
          />
        </div>
        <div className="mx-10">
          <h2 className="font-bold line-clamp-1 text-3xl pt-5">
            OYO Hotel Crystal INN
          </h2>
          <p className="mt-5 text-justify text-xl ">
            OYO Hotel Crystal INNOYO Hotel Crystal INN
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold ">Facilities :</span>
            <span className="px-2">
              Free wifi , Pet Care , GYM , Swimming Pool.{" "}
            </span>
          </p>
          <Link href={"/payment"}>
            <button
              type="text"
              className="w-60  h-10 text-center border bg-green-500 text-white font-bold rounded-lg hover:cursor-pointer">
              Book Now
            </button>
          </Link>
          <Link
            href={"/hotels/2"}
            className="text-xl font-bold text-red-600 ml-10">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
