import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { urlFor } from '../../sanity'

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}

const NFTImage = ({ selectedNft, alt }) => {
  return (
    <div>
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <IoMdSnow />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>
      <div>
        {/* {console.log(selectedNft, '🎆')} */}
        {/* <img src={urselectedNft?.image} /> */}
        <img src={urlFor(selectedNft)} alt={alt} className="h-full md:h-[44vh] object-contain"/>
      </div>
    </div>
  )
}

export default NFTImage
