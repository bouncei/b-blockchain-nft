import Header from '../components/Header'
import { sanityClient } from '../sanity'
import AdminTable from '../components/AdminTable'

export default function Admin({ items }) {
  //   console.log('check', items)
  return (
    <div className="overflow-hidden">
      <Header />
      <h1 className="p-5 py-20 text-center text-4xl font-semibold text-white">
        ADMIN
      </h1>

      <div className="mx-auto max-w-7xl px-8 sm:px-16">
        {/* {items.map((item, id) => (
          <AdminTable name={item.userName} address={item.walletAddress} />
        ))} */}

        <table className="bg-grey-600 table-auto text-[#cccccc]">
          <thead className="text-5xl">
            <tr>
              <th>S/N &nbsp; </th>
              {/* <th>Name</th> */}
              <th>Wallet Address</th>
            </tr>
          </thead>
          <br />
          <tbody className="text-xl ">
            {items.map((item, id) => (
              <AdminTable
                index={items.indexOf(item)}
                address={item.walletAddress ? item.walletAddress : 'null'}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "users"]{
        walletAddress,
    }`

  const items = await sanityClient.fetch(query)

  if (!items) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        items: items,
      },
    }
  }
}
