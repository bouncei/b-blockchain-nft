import { urlFor } from '../sanity'
import Image from 'next/image'

const style = {
  imgClass: `relative h-[3.25rem] rounded-lg w-[3.25rem] object-contain`,
}

const SmallCard = ({ name, noOfNfts, image, volumeTraded }) => {
  return (
    <div className="flex items-center m-2 mt-5 bg-[#04111d] border-solid border-2 border-grey-100 space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out ">
      {/* LEFT */}
      <div>
        <img
          className={style.imgClass}
          src={urlFor(image).auto('format')}
          alt=""
        />
      </div>

      {/* RIGHT */}
      <div>
        <h2>{name}</h2>

        <h4 className='text-[#718096]'>{volumeTraded}</h4>
      </div>
    </div>
  )
}

export default SmallCard
