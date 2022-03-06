import Header from "../components/Header"
import CollectionCard from "../components/CollectionCard"
import { sanityClient } from "../sanity"

const style = {
    wrapper: `overflow-hidden`,
}



export default function Collection({
    items,
}) {

    console.log(items)


    return (
 
        <div className={style.wrapper}>
            <Header />
            <h1 className="text-4xl text-white text-center">COLLECTIONS</h1>

            <div className="max-w-7xl mx-auto px-8 sm:px-16">
                <div className="pt-2">
                    <div className="flex flex-wrap">
                        {items.map((item, id) => (
                            <CollectionCard
                                key={id}
                                image={item.image}
                                title={item.title} 
                                contractAddress={item.contactAddress}
                            />

                        ))}

                        

                    </div>

                </div>
            </div>

            

        </div>
    )
}





export async function getStaticProps() {

    const query = `*[_type == "marketItems"]{
        title,
        "image": profileImage.asset,
        contractAddress,
    }`


    const items = await sanityClient.fetch(query)


    if (!items ){
        return {
            props: null,
            notFound: null,
        }
    }else {
        return {
            props: {
                // title : items.title,
                // images: items.images,
                // contractAddress: items.contactAddress,
                items: items,
            },
        }
    }
    
}