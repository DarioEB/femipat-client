import { ChevronDoubleLeftIcon, PencilAltIcon, PencilIcon, PlusCircleIcon, ViewListIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { BtnElement, BtnNew, Elements, Filters } from "../../../UI";


const ListLicences = () => {

    return (
        <>
            <BtnNew>
                <Link
                    to={"/admin/licencias"}
                    className="btn-new"
                >
                    <ChevronDoubleLeftIcon className="icon" />
                    <span>Volver</span>
                </Link>
            </BtnNew>
            <Elements>
                <Filters>
                    <div>
                        <label>Filtrar por club</label>
                        <select>
                            <option>-- Selecciona el club --</option>
                            <option>Club 1</option>
                            <option>Club 2</option>
                            <option>Club 3</option>
                            <option>Club N</option>
                        </select>
                    </div>
                    <div>
                        <label>Filtrar por estados</label>
                        <select>
                            <option>-- Estado --</option>
                            <option>Activos</option>
                            <option>No Activos</option>
                            <option>Pendientes</option>
                            {/* <option>Club N</option> */}
                        </select>
                    </div>
                    <div>
                        <label>Busca por nombre</label>
                       
                        <input 
                            type="search"
                            placeholder="Nombre o Apellido"
                        />
                    </div>
                </Filters>
                <ul>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                           
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre y Apellido</p>
                            <p>Función</p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Detalles</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="edit"
                            >
                                <span>Editar</span>
                                <PencilIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                </ul>
            </Elements>
        </>
    );
}

export default ListLicences;