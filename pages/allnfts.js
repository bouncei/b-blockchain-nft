import Header from "../components/Header"
import { sanityClient } from "../sanity"
import NftCard from "../components/NftCard"
import Footer from "../components/Footer"



export default function AllNfts({
    items,
}) {
    // console.log(items)

    return (
        <div className="overflow-hidden">
            <Header />
            <h1 className="text-4xl text-white text-center font-semibold p-5 py-20">ALL NFTs</h1>

            <div className="max-w-7xl mx-auto px-8 sm:px-16">
                <div className="pt-2">
                    <div className="flex flex-wrap">
                        {items.map((item, id) => (
                            <NftCard 
                                key={id}
                                nftItem={item}

                                listing="true"
                                
                            />


                        ))} 
                    </div>
                </div>
            </div>



            <Footer />                    

        </div>
    )
}








export async function getServerSideProps() {

    const query = `*[_type == "testImage"]`


    const items = await sanityClient.fetch(query)


    if (!items ){
        return {
            props: null,
            notFound: null,
        }
    }else {
        return {
            props: {

                items: items,
            },
        }
    }
    
}