import { Link } from 'react-router-dom'
import { PlusCircleIcon, ViewListIcon, TrashIcon, PencilIcon } from '@heroicons/react/outline';
import { BtnNew, BtnElement, Elements, Filters } from '../../../UI';


const EventsAdmin = () => {

    return (
        <>
            <BtnNew>
                <Link
                    to={"/admin/eventos/nuevo"}
                    className="btn-new"
                >
                    <span>Agregar Evento</span>
                    <PlusCircleIcon className="icon" />
                </Link>
            </BtnNew>
            
            <Elements>
                <Filters>
                    <div>
                        <label>Filtra por tipo de eventos</label>
                        <select>
                            <option>-- Tipo de evento --</option>
                        </select>
                    </div>
                    <div>
                        <label>Busca por nombre</label>
                        <input 
                            type="search"
                            placeholder="Nombre del Evento"
                        />
                    </div>
                </Filters>
                <ul>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                    <li>
                        <div className="element-description">
                            <p>Nombre del Evento</p>
                            <p>Tipo de Evento</p>
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
                            <BtnElement
                                type="button"
                                className="delete"
                            >
                                <span>Eliminar</span>
                                <TrashIcon className="icon" />
                            </BtnElement>
                        </div>
                    </li>
                </ul>
            </Elements>
        </>
    );
}

export default EventsAdmin;