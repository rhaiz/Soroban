import React, { useState } from 'react';
    import './Keta.css';
    function Keta() {
        const [godamaMarginTop, setGodamaMarginTop] = useState("1rem");
        const [godamaMarginBottom, setGodamaMarginBottom] = useState("1rem");
        const [ichidamaMarginTop, setIchidamaMarginTop] = useState("1rem");
        const [ichidamaMarginBottom, setIchidamaMarginBottom] = useState("1rem");
        const elements = Array.from({ length: 4 });
      
        const moveTama = (index) => {
            // Se a margem atual for 1, define para o valor inicial (3 e 2, respectivamente)
            // Caso contrário, redefine para 1
            console.log(index)
            if(index == null){
                console.log(index)
                if (godamaMarginTop === "1rem" && godamaMarginBottom === "1rem") {
                    setGodamaMarginTop("3.5rem");
                    setGodamaMarginBottom("-2.5rem");
                } else {
                    setGodamaMarginTop("1rem");
                    setGodamaMarginBottom("1rem");
                }
            }
            else{
                if (ichidamaMarginTop === "1rem" && ichidamaMarginBottom === "1rem") {
                    setIchidamaMarginTop("-2.5rem");
                    setIchidamaMarginBottom("3.5rem");
                } else {
                    setIchidamaMarginTop("1rem");
                    setIchidamaMarginBottom("1rem");
                }
            }
        };
      return (
        <div className="Keta">
      
          <div className="Tama"
              id="Tama" onClick={() => moveTama()} style={{ marginTop: godamaMarginTop, marginBottom: godamaMarginBottom }}>
              </div>
          <hr className="hari"></hr>
          {elements.map((_, index) => (
            <div className="Tama" id="Tama" key={index} onClick={() => moveTama(index)} style={{ marginTop: ichidamaMarginTop, marginBottom: ichidamaMarginBottom }}> 
            {/* Content of your Tama component */}
            </div>
        ))}
        </div>
      );
    }
    
    export default Keta;