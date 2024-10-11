/* eslint-disable react/no-unescaped-entities */
import {
  faFacebook,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

function Hero() {
  return (
    <div className="grid sm:grid-cols-3 gap-12 py-[96px] px-[32px] grid-cols-1">
      <div className="flex flex-col justify-between col-span-2 order-2 sm:order-1">
        <h1 className="text-4xl font-bold mb-2  text-[2.5vw]">
          Hello, I'm John Doe
        </h1>
        <p className="text-lg text-[16px]">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally esigning) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex gap-2 my-12 flex-col text-[16px]">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} color="" />
            <p> Hà Nội</p>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCircle} className="text-green-500 w-3" />
            Available for new projects
          </div>
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faFacebook} className="text" />
          </button>
          <button className="mx-2">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
      <div className="place-content-center  order-1 sm:order-2 flex justify-center">
        <Image
          src="https://fansport.vn/upload/product/16/48/46/ao-ronaldo-7-manchester-united-champion-league-final-2008-home-shirt-20220328190240-313497.jpg"
          width={280}
          height={320}
          alt="Avatar"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Hero;
