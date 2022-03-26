const AdminTable = ({ address, index }) => {

  return (
      <tr>
          <td>{index}</td>
          {/* <td>{name}</td> */}
          <td>&nbsp; {address}</td>
      </tr>
      
  )
}

export default AdminTable
