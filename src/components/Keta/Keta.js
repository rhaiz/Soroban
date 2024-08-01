import React, { useState } from 'react';
    import './Keta.css';
    function Keta() {
        const [godamaMarginTop, setGodamaMarginTop] = useState("1rem");
        const [godamaMarginBottom, setGodamaMarginBottom] = useState("1rem");
        const [ichidamaMargins, setIchidamaMargins] = useState(Array.from({ length: 4 }, () => ({ marginTop: "1rem", marginBottom: "1rem" })));

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
            else {
                setIchidamaMargins(prevState => {
                    return prevState.map((item, idx) => {
                        if (idx <= index) {
                            if (item.marginTop === "1rem" && item.marginBottom === "1rem") {
                                return { marginTop: "-2.5rem", marginBottom: "3.5rem" };
                            } else {
                                return { marginTop: "1rem", marginBottom: "1rem" };
                            }
                        } else {
                            return item;
                        }
                    });
                });
            }
        };
      return (
        <div className="Keta">
      
          <div className="Tama"
              id="Tama" onClick={() => moveTama()} style={{ marginTop: godamaMarginTop, marginBottom: godamaMarginBottom }}>
              </div>
          <hr className="hari"></hr>
          {ichidamaMargins.map((item, index) => (
                <div className="Tama" id="Tama" key={index} onClick={() => moveTama(index)} style={{ marginTop: item.marginTop, marginBottom: item.marginBottom }}>
                    {/* Conteúdo do seu componente Tama */}
                </div>
            ))}
        </div>
      );
    }
    
    export default Keta;