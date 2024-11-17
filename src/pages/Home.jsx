import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import PopulerArticles from "../components/PopulerArticles";
import useAdmin from "../hooks/useAdmin";
import AnnounceSection from "../components/AnnounceSection";
import { Button, Modal } from "flowbite-react";
("use client");

import { Toast } from "flowbite-react";
import { MdLoop } from "react-icons/md";
import AllPublishers from "../components/AllPublishers";
import SportsNews from "./SportsNews";
import PoliticalNews from "./PoliticalNews";
import MemberShipCard from "./MemberShipCard";
import LatestNews from "../components/LatestNews";
import Advertise from "../components/Advertise";
import EntertainmentNews from "./EntertainmentNews";
import TopicsSection from "../components/TopicsSection";
import ScienceAndHealth from "../components/ScienceAndHealth";
import BusinessLatest from "../components/BusinessLatest";
import OtherSectionCard from "../components/OtherSectionCard";
import OtherNewsSection from "../components/OtherNewsSection";
import SliderNews from "../components/SliderNews";
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    // Set a timeout to change the state after 10 seconds
    const timeoutId = setTimeout(() => {
      setOpenModal(true);
    }, 10000); // 10 seconds in milliseconds

    // Clear the timeout when the component unmounts or when the modal is shown
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      <div>
        {openModal && (
          <div className="modal">
            <div className="modal-content">
              {/* <p>Subscribe now to get exclusive content!</p> */}
              {/* Add your subscription form or any other content here */}
              {/* <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Terms of Service</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setOpenModal(false)}>I accept</Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Decline
                </Button>
              </Modal.Footer>
            </Modal> */}
              {/* <Toast>
                <div className="flex items-start">
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
                    <MdLoop className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                      Update available
                    </span>
                    <div className="mb-2 text-sm font-normal">
                      Subscribe now to get exclusive content!
                    </div>
                    <div className="flex-start flex gap-2">
                      <div className="w-auto">
                        <Button size="xs" color="light">
                          Update
                        </Button>
                      </div>
                      <div className="w-auto">
                        <Button color="light" size="xs">
                          Not now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Toast.Toggle />
                </div>
              </Toast> */}
            </div>
          </div>
        )}
      </div>
      <div className="mb-0">
        {" "}
        {/* <Slider></Slider> */}
        <LatestNews></LatestNews>
      </div>
      <div className="mb-8">
        <Advertise
          img={"https://tpc.googlesyndication.com/simgad/10601448054393647434"}
        ></Advertise>
      </div>

      <div className="mb-8">
        {" "}
        <PopulerArticles></PopulerArticles>
      </div>
      <div className="mb-8">
        {" "}
        <EntertainmentNews></EntertainmentNews>
      </div>
      <div className="mb-8">
        <AnnounceSection></AnnounceSection>
      </div>
      <div className="mb-8">
        <SportsNews></SportsNews>
      </div>
      <div className="mb-8">
        <PoliticalNews></PoliticalNews>
      </div>
      <div className="">
        <Advertise
          img={"https://tpc.googlesyndication.com/simgad/8113241438753359776"}
        ></Advertise>
      </div>
      <div>
        <SliderNews></SliderNews>
      </div>
      <div>
        {" "}
        <ScienceAndHealth></ScienceAndHealth>
      </div>
      <div>
        <BusinessLatest></BusinessLatest>
      </div>
      <div>
        <OtherNewsSection></OtherNewsSection>
      </div>
      <div className="mb-8">{/* <MemberShipCard></MemberShipCard> */}</div>
    </div>
  );
};

export default Home;
