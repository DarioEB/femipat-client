import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import {useDropzone} from 'react-dropzone'
import { Link } from 'react-router-dom';
import { 
    Btn, 
    BtnNew, 
    FIELDADMIN, 
    FIELDSET, 
    FORMADMIN, 
    DROPZONE,
    FIELDTWO
} from '../../../UI';
import { useCallback } from 'react';



const NewEvent = () => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <>
            <BtnNew>
                <Link
                    to={"/admin/eventos"}
                    className="btn-new"
                >
                    <ChevronDoubleLeftIcon className="icon" />
                    <span>Volver</span>
                </Link>
            </BtnNew>
            <FORMADMIN>
                <FIELDSET>
                    <legend className="p-0">Información del Evento</legend>
                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Nombre del Evento"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor="type-event"
                        >Tipo de Evento</label>
                        <select>
                            <option>-- Selecciona el tipo de evento --</option>
                        </select>
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            className="label-g"
                        >Categorías</label>
                        <FIELDTWO>
                            <FIELDADMIN>
                                <label>Categoría</label>
                                <select>
                                    <option>-- Selecciona la categoría --</option>
                                    <option>-- Tipo de categoría 1 --</option>
                                    <option>-- Tipo de categoría 2 --</option>
                                </select>
                            </FIELDADMIN>
                            <FIELDADMIN>
                                <label>Precio</label>
                                <input 
                                    type="number"
                                    step="any"
                                    placeholder="Precio por categoría"
                                />
                            </FIELDADMIN>
                            <FIELDADMIN>
                                <button
                                    type="button"
                                    className="select"
                                >
                                    Seleccionar
                                </button>
                            </FIELDADMIN>
                        </FIELDTWO>
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            className="label-g"
                        >Especialidades</label>
                        <FIELDTWO>
                            <FIELDADMIN>
                                <label>Especialidad</label>
                                <select>
                                    <option>-- Selecciona la especialidad --</option>
                                    <option>-- Tipo de categoría 1 --</option>
                                    <option>-- Tipo de categoría 2 --</option>
                                </select>
                            </FIELDADMIN>
                            <FIELDADMIN>
                                <label>Precio</label>
                                <input 
                                    type="number"
                                    step="any"
                                    placeholder="Precio por categoría"
                                />
                            </FIELDADMIN>
                            <FIELDADMIN>
                                <button
                                    type="button"
                                    className="select"
                                >
                                    Seleccionar
                                </button>
                            </FIELDADMIN>
                        </FIELDTWO>
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor=""
                        >Lugar</label>
                        <input 
                            type="text"
                            placeholder="Localidad"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor=""
                        >Dirección</label>
                        <input 
                            type="text"
                            placeholder="Calle y Número"
                        />
                    </FIELDADMIN>
                </FIELDSET>
                <FIELDSET>
                    <legend>Imagen del Evento</legend>
                    <FIELDADMIN>
                        <label>Imagen</label>
                        <DROPZONE {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <p>Imagen Seleccionada</p> :
                                <p>Haz click para buscar la imagen, o arrastra el archivo hacia aquí</p>
                            }
                        </DROPZONE>
                    </FIELDADMIN>
                </FIELDSET>
                <FIELDSET>
                    <legend>Descripción del Evento</legend>
                    <FIELDADMIN>
                        <label>Descripción</label>
                        <textarea>
                            
                        </textarea>
                    </FIELDADMIN>
                </FIELDSET>
                <Btn>
                    <button
                        type="submit"
                        className="btn w-full"
                    >
                        <span>Registrar Evento</span>
                    </button>
                </Btn>
            </FORMADMIN>
        </>
    );
}

export default NewEvent;