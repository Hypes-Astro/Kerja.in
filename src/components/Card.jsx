
const Card = ({logicDone}) =>{
    return(
        <div className="CardAction">
            <div className={`card w-full bg-base-100 shadow-xl ${logicDone ? "bg-slate-400 text-white" : "bg-white text-black"}`}>
                <div className="card-body ">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? </p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Selesai</button>
                        <button className="btn ">Hapus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;