const style = {
  mainContainer: `grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600`,
  mainDiv: `space-y-4 text-grey-800 text-xs`,
  h5Element: `font-bold`
}

function Footer () {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainDiv}>
        <h5 className={style.h5Element}>ABOUT</h5>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

      </div>

      <div className={style.mainDiv}>
        <h5 className={style.h5Element}>HOST</h5>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

      </div>


      <div className={style.mainDiv}>
        <h5 className={style.h5Element}>SUPPORT</h5>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

      </div>
    </div>
  )
}


export default Footer
