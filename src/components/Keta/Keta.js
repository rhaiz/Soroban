import React, { useState, useEffect } from 'react';
    import './Keta.css';
    function Keta() {
        const [godamaMarginTop, setGodamaMarginTop] = useState("1rem");
        const [godamaMarginBottom, setGodamaMarginBottom] = useState("1rem");
        const [ichidamaMargins, setIchidamaMargins] = useState(Array.from({ length: 4 }, () => ({ marginTop: "1rem", marginBottom: "1rem" })));
        const [numberTama, setNumberTama] = useState(0);

        const moveTama = (index) => {
            if(index == null){
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
                        if (item.marginTop === "1rem" && item.marginBottom === "1rem") {
                            if (idx <= index) {
                                return { marginTop: "-2.5rem", marginBottom: "3.5rem" };
                            } else {
                                return { marginTop: "1rem", marginBottom: "1rem" };
                            }
                        } else {
                            if (idx >= index) {
                                return { marginTop: "1rem", marginBottom: "1rem" };
                            } else {
                                return { marginTop: "-2.5rem", marginBottom: "3.5rem" };
                            }
                        }
                    });
                });
            }
        };

        useEffect(() => {
            const countTamas = () => {
              const tamaCount = ichidamaMargins.filter(
                (item) => item.marginTop === "-2.5rem" && item.marginBottom === "3.5rem"
              ).length;
        
              setNumberTama(tamaCount);
            };
        
            countTamas();
        
            // ... (change listener implementation remains the same)
          }, [godamaMarginTop, godamaMarginBottom, ichidamaMargins]);

          useEffect(() => {
            if (godamaMarginTop === "3.5rem" && godamaMarginBottom === "-2.5rem") {
              setNumberTama((prevNumberTama) => prevNumberTama + 5);
            }
          }, [godamaMarginTop, godamaMarginBottom]);

      return (
        <div className="Keta">
      
          <div className="Tama"
              id="Tama" onClick={() => moveTama()} style={{ marginTop: godamaMarginTop, marginBottom: godamaMarginBottom }}>
              </div>
          <hr className="hari"></hr>
          {ichidamaMargins.map((item, index) => (
                <div className="Tama" id="Tama" key={index} onClick={() => moveTama(index)} style={{ marginTop: item.marginTop, marginBottom: item.marginBottom }}>
                </div>
            ))}
            
        <h2 style={{backgroundColor:"white", paddingTop:"1rem", paddingBottom:"1rem", marginBottom:"0rem"}}>{numberTama}</h2>
        </div>
      );
    }
    
    export default Keta;