import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='w-full '>
        <Image
        src="/mainimg.jpg" // Path to your image
        alt="Description of the image"
        width={1400} // Specify the width
        height={500} // Specify the height
        quality={100} // Optional: Set quality (1-100)
      />
      </div>
    </>
  );
}
