import toast from "react-hot-toast";// Receiving toast


const Loading = (toastHandler = toast) => {
  const resolveAfter3sec  = new Promise((resolve, reject) => {
    setTimeout(resolve, 15000);
  })
  //toast function for welcome user
  toastHandler.promise(resolveAfter3sec, {
    loading: 'Transaction pending... \n Please wait.',
    success: 'Transaction complete',
    reject: "Insufficient Funds",
  });
}




export default Loading
