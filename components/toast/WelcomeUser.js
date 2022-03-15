import toast from "react-hot-toast";// Receiving toast


const WelcomeUser = (name, toastHandler = toast) => {
  //toast function for welcome user
  toastHandler.success(`Welcome back ${name !== "Unnamed"? name : " "}`, {
    style: {
      background: '#04111d',
      color: '#fff',
    },
  })
}




export default WelcomeUser
