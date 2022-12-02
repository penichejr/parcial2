import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
   <div>
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.banda.image}
       alt={props.banda.description}
     />
   </div>
 );
}