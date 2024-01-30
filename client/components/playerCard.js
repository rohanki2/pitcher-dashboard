import {React, useState} from "react";
import MyModal from "./mymodal";
const PlayerCard = ({ id, pictureSrc, position, playerName, team, number, onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
        
        <div className="w-80  mx-auto bg-white shadow-2xl rounded-lg p-6 mt-4 border-2 border-slate-300">
      
          <div className="flex justify-center">
          <img className="w-980 h-52 rounded-full mx-auto mb-4" src={pictureSrc} alt="Player Picture" />
          </div>
          
          
            <div className="flex justify-center text-xl font-bold mb-2 font-serif">
                {playerName} 
                <span className=" font-normal mx-2 font-serif">{number}</span>
            </div>

    
        
          <div className="flex justify-center">
          
          <div className="text-lg"><span className="font-bold">Team:</span> {team}</div>
          </div>
          <div className="flex justify-center">
          <div className="text-lg"><span className="font-bold">Throws:</span> {position}</div>
          </div>
          <div>
       </div>
       <div className="flex justify-center">
       <button onClick={openModal}   className="border-2 h-8 bg-slate-200 border-slate-300 rounded-lg cursor-pointer mt-4 transform transition-transform hover:scale-105 hover:shadow-md"
>
        <div className="ml-4 mr-4 font-bold">
        View Stats
        </div>
        </button>
        </div>

       <MyModal isOpen={isModalOpen} closeModal={closeModal} id={id} name={playerName}  />

        </div>
         
   
      );
    };

  
  export default PlayerCard;

