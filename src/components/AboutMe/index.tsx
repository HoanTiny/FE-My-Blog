/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

function AboutMe() {
  return (
    <div className="bg-[#F9FAFB] py-10 px-6">
      <h1 className="text-center mb-12">About Me</h1>
      <div className="flex gap-12 ">
        <Image
          className="w-[400px] h-[480px]"
          src="https://fansport.vn/upload/product/16/48/46/ao-ronaldo-7-manchester-united-champion-league-final-2008-home-shirt-20220328190240-313497.jpg"
          width={400}
          height={480}
          alt="Avatar"
        />

        <div>
          <h2>Curious about me? Here you have it:</h2>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
