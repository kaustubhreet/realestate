import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import BottomSlider from './BottomSlider';
import TopSlider from './TopSlider';
import Upcoming from './Upcoming';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  const [alldata, setAlldata] = useState([]);

  //console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);

        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();

        //fetching all data from db
        const res2 = await fetch('/api/listing/get');
        const data2 = await res2.json();
        setAlldata(data2);
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  //console.log(saleListings[0].imageUrls);

  return (
    <>
      {/* top */}
      <div className='flex flex-col mx-auto' style={{
        backgroundImage: "url('https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-house-plansluxury-1.webp')",
        backgroundRepeat: "no-repeat", backgroundSize: "cover", maxWidth: "100%", opacity: "0.8",
        height: "100vh"
      }}>

        <div style={{
          backgroundColor: "#d7f9f8", marginTop: "20rem", alignContent: "center", position: 'relative',
          marginInline: "20%"
        }}>
          <h1 className='font-bold hover:animate-bounce' style={{ color: "#ff6361", fontSize: "40px", textAlign: "center", textTransform: 'capitalize', fontStyle: "oblique" }}>
            Find your next <span className='text-slate-500'>perfect</span>
            <br />
            place with ease
          </h1>
          <div className='font-bold text-center' style={{ padding: "50px 50px", color: "#003f5c" }}>
            Bestmove House is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
            Ready to embark on your real estate journey? <br />Join Bestmove House today and explore a world of possibilities.
            Whether you're listing your property, searching for your dream home, or seeking investment opportunities,
            we are here to guide you every step of the way.
          </div>
          <Link
            to={'/search'}
            className=' text-orange-600 font-bold hover:underline'
          >
            <h2 className=' font-bold mb-5' style={{ textAlign: "center", fontSize: "20px" }}>Let's Get Started Today!</h2>

          </Link>
        </div>
      </div>

      {/* crousel desction*/}
      <TopSlider alldata={alldata} />

      {/* swiper */}
      {/*
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>

              <div
                style={{
                  marginInline: '10%',

                }}
                className='h-[450px]'
                key={listing._id}
              >
                <img className='h-[450px] w-[100%] ms-[10px] me-[10px] hover:border-t-4'
                  src={`${listing.imageUrls[2]}`}
                  slt="house image" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
              */}

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Upcoming />
      <BottomSlider saleListings={saleListings} />

    </>
  );
}