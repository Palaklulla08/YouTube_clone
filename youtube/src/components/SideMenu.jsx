import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoBold } from "react-icons/pi";
import { RiHistoryLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { GiGraduateCap } from "react-icons/gi";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { RiFeedbackLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiFlag } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { LuTrophy } from "react-icons/lu";
import { PiCoatHangerBold } from "react-icons/pi";
import { RiNewsLine } from "react-icons/ri";
import { MdOutlinePodcasts } from "react-icons/md";


function SideMenu() {
  return (
    <>
      <div>
        <div className="flex items-center gap-3"><AiFillHome /> Home</div>
        <div className="flex items-center gap-3"><SiYoutubeshorts />Shorts</div>
         <div className="flex items-center gap-3"><PiVideoBold />Subscriptions</div>
      </div>
      <hr className="text-gray-350"/>
      <div>
        <div className="flex items-center gap-3"><RiHistoryLine />History</div>
        <div className="flex items-center gap-3"><CgPlayList />Playlists</div>
        <div className="flex items-center gap-3"><GoVideo />Your videos</div>
        <div className="flex items-center gap-3"> <GiGraduateCap />Your courses</div>
        <div className="flex items-center gap-3"><MdOutlineWatchLater />Watch later</div>
        <div className="flex items-center gap-3"><SlLike />Liked videos</div>
      </div>
        <hr className="text-gray-350"/>
      <div>
        <h2>Explore</h2>
        <div className="flex items-center gap-3"><RiShoppingBag4Line />Shopping</div>
        <div className="flex items-center gap-3"><IoMusicalNoteOutline />Music</div>
        <div className="flex items-center gap-3"><BiMovie />Movies</div>
        <div className="flex items-center gap-3"><SiYoutubegaming />Gaming</div>
        <div className="flex items-center gap-3"><RiNewsLine />News</div>
        <div className="flex items-center gap-3"><LuTrophy />Sports</div>
        <div className="flex items-center gap-3"><GiGraduateCap />Courses</div>
        <div className="flex items-center gap-3"><PiCoatHangerBold />Fashion & Beauty</div>
        <div className="flex items-center gap-3"><MdOutlinePodcasts />Podcasts</div>
      </div>
        <hr className="text-gray-350"/>
      <div>
        <div className="flex items-center gap-3"><FaYoutube className="bg-[white] text-[red]" />YouTube Premium</div>
        <div className="flex items-center gap-3"><SiYoutubestudio className="bg-[white] text-[red]" />YouTube Studio</div>
        <div className="flex items-center gap-3"><SiYoutubemusic className="bg-[white] text-[red]"/>YouTube Music</div>
        <div className="flex items-center gap-3"><SiYoutubekids className="bg-[white] text-[red]" />YouTube Kids</div>
      </div>
      <hr className="text-gray-350"/>
      <div>
        <div className="flex items-center gap-3"><LuSettings />Settings</div>
        <div className="flex items-center gap-3"><FiFlag />Report history</div>
        <div className="flex items-center gap-3"><IoMdHelpCircleOutline />Help</div>
        <div className="flex items-center gap-3"><RiFeedbackLine />Send feedback</div>
      </div>
      <hr className="text-gray-350"/>
      <p>
        <h2>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</h2>
        <h2>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</h2>
        <h4>© 2025 Google LLC</h4>
      </p>
    </>
  );
}
export default SideMenu;
