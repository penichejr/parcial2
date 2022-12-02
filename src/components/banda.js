
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {FormattedDate} from 'react-intl';


function Banda(props) {
 return (
<tr>
    <th scope="row">{"/bandas/" + props.banda.id}</th>
    <td>{props.banda.name}</td>
    <td>{props.banda.country}</td>
    <td>{props.banda.genre}</td>
    <td>
  <FormattedDate
    value={new Date(props.banda.foundation_year)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>
</tr>
 );
}

export default Banda;