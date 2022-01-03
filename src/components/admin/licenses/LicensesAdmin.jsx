import { PencilAltIcon, PencilIcon, PlusCircleIcon, ViewListIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { BtnElement, BtnNew, Elements, Filters } from "../../../UI";


const LicensesAdmin = () => {

    const navigate = useNavigate()

    return (
        <>
            <BtnNew>
                <Link
                    to={"/admin/licencias"}
                    className="btn-new"
                >
                    <span>Agregar Licencia</span>
                    <PlusCircleIcon className="icon" />
                </Link>
            </BtnNew>
            <Elements>
                <ul>
                    <li>
                        <div className="element-description">
                            <p>Licencia FEMIPAT 2021/22</p>
                            <p>Cantidad de activos: <span>{(Math.random() * (40 - 10) + 10).toFixed(0)}</span></p>
                            <p>Fecha de creación: <span>22 de Julio de 2021</span></p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                                onClick={() => navigate('/admin/licencias/emit')}
                            >
                                <span>Emiciones</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Datos de Licencia</span>
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
                            <p>Licencia FEMIPAT 2020/21</p>
                            {/* <p>Cantidad de activos: <span>{(Math.random() * (40 - 10) + 10).toFixed(0)}</span></p> */}
                            <p>Fecha de creación: <span>22 de Julio de 2020</span></p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                                onClick={() => navigate('/admin/licencias/list')}
                            >
                                <span>Emiciones</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Datos de Licencia</span>
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
                            <p>Licencia FEMIPAT 2019/20</p>
                            {/* <p>Cantidad de activos: <span>{(Math.random() * (40 - 10) + 10).toFixed(0)}</span></p> */}
                            <p>Fecha de creación: <span>22 de Julio de 2021</span></p>
                        </div>
                        <div className="element-actions">
                            <BtnElement
                                type="button"
                                className="view"
                                onClick={() => navigate('/admin/licencias/list')}
                            >
                                <span>Emiciones</span>
                                <ViewListIcon className="icon" />
                            </BtnElement>
                            <BtnElement
                                type="button"
                                className="view"
                            >
                                <span>Datos de Licencia</span>
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
    )
}

export default LicensesAdmin;