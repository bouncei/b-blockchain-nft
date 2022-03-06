import Header from "../components/Header"

const style = {
    wrapper: `overflow-hidden`,
}



export default function Collection() {
    return (
 
        <div className={style.wrapper}>
            <Header />
            <h1 className="text-4xl text-white text-center">Collection Page</h1>

        </div>
    )
}