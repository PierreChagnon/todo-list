import React, { useEffect, useState } from "react";
import './pannel.css'
import './dropdown.css'

export default function Pannel({ addClickHandler, handleRemove, handleInputChange, tasks, filter, editStatus }) {
    // States dropdownlist status
    const [dropdownShow, setDropdownShow] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState();

    //Filtre de la barre de recherche
    //On display ou non les tâches en fonction du filtre
    useEffect(() => {
        const elements = document.getElementsByClassName("line-container")
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const name = tasks[i].name;
            if (name.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                element.style.display = "";
            } else {
                element.style.display = "none";
            }
        }
    }, [filter, tasks])
    return (
        <div className="pannel-container">
            <div className="table-header">
                <div className="col-title">Tâche</div>
                <div className="col-title">Etat</div>
            </div>
            <div className="table-body">
                {tasks.map((task, i) => {
                    let backgroundColor = '#fff'
                    switch (task.status) {
                        case 'A faire':
                            backgroundColor = '#56CCF2'
                            break;

                        case 'En cours':
                            backgroundColor = '#F2C94C'
                            break;

                        case 'Fait':
                            backgroundColor = '#6FCF97'
                            break;

                        case 'En retard':
                            backgroundColor = '#EB5757'
                            break;

                        default:
                            backgroundColor = '56CCF2'
                            break;
                    }
                    return (
                        <div className="line-container" key={i}>
                            <div className="cell">
                                <input onChange={(e) => { handleInputChange(i, e.currentTarget.value) }} className="task-input" type="text" value={task.name} placeholder="Nom de tâche" />
                            </div>
                            <div className="cell">
                                <div className="status" style={{ backgroundColor: backgroundColor }}>
                                    {task.status}
                                </div>
                                <div className="icons-container">
                                    <div className="edit">
                                        <div className="dropdown">
                                            <img onClick={() => {
                                                setDropdownShow(true);
                                                setDropdownIndex(i)
                                            }} className="edit" src="assets/pen.png" />
                                            <div
                                                id={i}
                                                className={
                                                    dropdownShow && dropdownIndex === i
                                                        ? "dropdown-content display"
                                                        : "dropdown-content"
                                                }
                                            >
                                                {["A faire", "En cours", "Fait", "En retard"].map((status, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            id={status}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                let temp = tasks
                                                                const parentID = e.currentTarget.parentNode.id
                                                                console.log("PARENT ID : ", parentID)
                                                                temp[parentID].status = e.currentTarget.id
                                                                console.log(e.currentTarget.id)
                                                                editStatus(temp);
                                                                setDropdownShow(false)
                                                            }}
                                                        >
                                                            {status}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => handleRemove(i)} className="addbutton-icon remove"></div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="footer">
                <div onClick={addClickHandler} className="addbutton-container">
                    <div className="addbutton-icon"></div>
                    <div className="addbutton-text">Ajouter une tâche</div>
                </div>
            </div>
        </div >
    )
}