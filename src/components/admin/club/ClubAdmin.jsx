import { Link } from 'react-router-dom';
import { PlusCircleIcon, ViewListIcon, TrashIcon, PencilIcon } from '@heroicons/react/outline';
import { BtnNew, BtnElement, Elements, Filters } from '../../../UI';
import Logo from '../../../assets/images/logo2.png';

const ClubAdmin = () => {

    return (
        <>
            <BtnNew>
                <Link
                    to={"/admin/clubes/nuevo"}
                    className="btn-new"
                >
                    <span>Registrar Club</span>
                    <PlusCircleIcon className="icon" />
                </Link>
            </BtnNew>
            <Elements>
                <ul>
                    <li>
                        <div className="element-description club">
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
                        <div className="element-description club">
                            
                            <p className="no-last">Nombre del Club</p>
                            <div>
                                <img 
                                    src={Logo}
                                    alt="Logotipo Club"
                                />
                            </div>
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
    )
}

export default ClubAdmin