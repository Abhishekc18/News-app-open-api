import loading from './loading.gif'

const spinner =()=> {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading" style={{  height:"12rem",width: "12rem" }} />
      </div>
    )
}

export default spinner
