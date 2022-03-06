import Header from "../components/Header"

const style = {
    wrapper: `overflow-hidden`,
}



export default function Profile() {
    return (
 
        <div className={style.wrapper}>
            <Header />
            <h1 className="text-lg text-white text-4xl text-center">Profile Page</h1>

        </div>
    )
}