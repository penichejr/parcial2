import Banda from "./banda";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Bandas() {
 const [bandas, setBandas] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setBandas(data);
     });
 }, []);

 return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Name"/></th>
            <th scope="col"><FormattedMessage id="Country"/></th>
            <th scope="col"><FormattedMessage id="Genre"/></th>
            <th scope="col"><FormattedMessage id="Foundation year"/></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Bandas", bandas)}
          {bandas.map((e, i) => (
            <Job key={i} banda={e} />
          ))}
        </tbody>
      </table>

      <text>La banda mas antigua es {nombreAntigua()} y fue fundada hace {añoAntigua()} años</text>      

    </div>
  );
};

function nombreAntigua(){

  for (var i = 0; i < Bandas.length; i++) {
    current=10000;
    if(i.banda.foundation_year<current);
  }
  return i.banda.name;
}

function añoAntigua(){

  for (var i = 0; i < Bandas.length; i++) {
    current=10000;
    if(i.banda.foundation_year<current);
  }
  return i.banda.foundation_year;
}

export default bandas;
