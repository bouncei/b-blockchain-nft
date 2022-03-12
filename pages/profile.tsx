import Header from "../components/Header"

// const style = {
//     wrapper: `overflow-hidden`,
// }


const style = {
    bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
    bannerImage: `w-full object-cover`,
    infoContainer: `w-screen px-4`,
    midRow: `w-full flex justify-center text-white`,
    endRow: `w-full flex justify-end text-white`,
    profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
    socialIconsContainer: `flex text-3xl mb-[-2rem]`,
    socialIconsWrapper: `w-44`,
    socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
    socialIcon: `my-2`,
    divider: `border-r-2`,
    title: `text-5xl font-bold mb-4`,
    createdBy: `text-lg mb-4`,
    statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
    collectionStat: `w-1/4`,
    statValue: `text-3xl font-bold w-full flex items-center justify-center`,
    ethLogo: `h-6 mr-2`,
    statName: `text-lg w-full text-center mt-1`,
    description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
}


export default function Profile() {
    return (
 
        <div className="overflow-hidden">
            <Header />
            {/* <h1 className="text-lg text-white text-4xl text-center">Profile Page</h1> */}


            <div className={style.bannerImageContainer}>
                <img
                    className={style.bannerImage}
                    src='https://via.placeholder.com/200'
                    alt="banner"
                />

            </div>


            <div className={style.infoContainer}>
                <div className={style.midRow}>
                        <img
                            className={style.profileImg}
                            src='https://via.placeholder.com/200'
                            alt="profile image"
                        />

                </div>

                <div className={style.midRow}>
                    <div className={style.title}>title</div>
                </div>

                <div className={style.midRow}>
                    <div className={style.title}>address</div>
                </div>

                <div className={style.midRow}>
                    <div className={style.title}>timestamp</div>
                </div>

                <div>

                    <h2 className='text-2xl text-white font-semibold pb-5'>Collected Nfts</h2>
                </div>


            </div>


        </div>
    )
}