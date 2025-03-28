import { EmployeeCardProps } from "./types";
import './styles.css'
function EmployeeCard ({name, position,department, img, children}: EmployeeCardProps){
    return (
        <div>
            <h2>{name}</h2>
            <img src={img}/>
            <div>{position}</div>
            <div>{department}</div>
            {children} {/* Передаем дочерние компоненты */}
           
        </div>
    )
}

export default EmployeeCard;