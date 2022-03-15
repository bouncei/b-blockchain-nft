import toast from "react-hot-toast";// Receiving toast


const Loading = (toastHandler = toast) => {
  //toast function for welcome user
  toastHandler.promise(
    'Transaction in process...'
   );
}




export default Loading
