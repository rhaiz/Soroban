import React from 'react';
import './DecimalTable.css';

function DecimalTable(props) {
    const { numberTds } = props;
    const sistemaDecimal = [
        'Dezena de Quatrilhão',
        'Unidade de Quatrilhão',
        'Centena de Trilhão',
        'Dezena de Trilhão',
        'Unidade de Trilhão',
        'Centena de Bilhão',
        'Dezena de Bilhão',
        'Unidade de Bilhão',
        'Centena de Milhão',
        'Dezena de Milhão',
        'Unidade de Milhão',
        'Centena de Milhar',
        'Dezena de Milhar',
        'Unidade de Milhar',
        'Centena',
        'Dezena',
        'Unidade'
    ];

    const startIndex = sistemaDecimal.length - numberTds;
    return (
        <div>
            <table className="DecimalTable">
                <thead>
                    <tr>
                        {sistemaDecimal.slice(startIndex).map((text, index) => (
                            <th key={index}>{text}</th>
                        ))}
                    </tr>
                </thead>
            </table>   
        </div>
      );
    }
    
    export default DecimalTable;