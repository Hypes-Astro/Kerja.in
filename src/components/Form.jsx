const Form = () => {
    return(
        <div className="container">
            <div className="card w-full bg-base-100 shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Pastikan Kerjaan mu di kerjain</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Judul Task</span>
                            <span className="label-text-alt">Sisa 10 karakter</span>
                        </label>
                        <input type="text" placeholder="Judul..." className="input input-bordered w-full " />

                        <label className="label">
                            <span className="label-text">Detail Task</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Tulis Deskripsi..."></textarea>
                    </div>
                    <div className="card-actions justify-end pt-5 w-full">
                        <button className="btn btn-primary rounded-full w-full">Masukan</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Form;