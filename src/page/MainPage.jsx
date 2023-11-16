import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";


const done = true;
const undone = false;

const MainPage = () => {
    return(
        <div className="w-sreen h-screen">
            <Navbar/>
            <div className="flex-col md:flex-row lg:flex justify-center  ">
                <div className="sideLeft h-full w-full p-2 md:w-1/3 sticky">
                    <Form/>
                </div>
                <div className="sideRight w-full h-[80vh] pt-2 px-5">
                    <div className="boxSearch border rounded-full w-1/3 p-2 flex items-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 px-2 " />
                        <input type="text" placeholder="Type here" className="input input-ghost rounded-full w-full" />
                    </div>
                    
                    <div className="w-full h-full">
                        {/* undone */}
                        <div className="kontenUndone collapse collapse-arrow h-auto bg-base-200 mt-3">
                            <input type="checkbox" name="my-accordion-2"/> 
                            <div className="collapse-title text-xl font-medium">
                                List ToDo
                            </div>
                            <div className="collapse-content py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {
                                Array.from({ length: 8 }, (_, index) => (
                                    <Card key={index} logicDone={undone} />
                                ))
                            }
                            </div>
                        </div>
                        
                        {/* Archive */}
                        <div className="kontenArchive collapse collapse-arrow bg-base-200 mt-3">
                            <input type="checkbox" name="my-accordion-2" /> 
                            <div className="collapse-title text-xl font-medium text-red-800">
                                Tugas Selesai
                            </div>
                            <div className="collapse-content py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {
                                Array.from({ length: 10 }, (_, index) => (
                                    <Card key={index} logicDone={done}/>
                                ))
                            }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default MainPage;