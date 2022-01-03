import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import {useDropzone} from 'react-dropzone'
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { 
    Btn, 
    BtnNew, 
    FIELDADMIN, 
    FIELDSET, 
    FORMADMIN, 
    DROPZONE,
    FIELDTWO
} from '../../../UI';

const NewClub = () => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <>
            <BtnNew>
                <Link
                    to={"/admin/clubes"}
                    className="btn-new"
                >
                    <ChevronDoubleLeftIcon className="icon" />
                    <span>Volver</span>
                </Link>
            </BtnNew>
            <FORMADMIN>
                <FIELDSET>
                    <legend className="p-0">Información del Club</legend>

                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Nombre del Club"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            E-mail
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="E-mail del Club"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            Localidad
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Ciudad"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            Dirección
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Dirección del Club"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            CP
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Código Postal"
                        />
                    </FIELDADMIN>
                    <FIELDADMIN>
                        <label
                            htmlFor="name"
                        >
                            Contraseña
                        </label>
                        <div>
                            <input 
                                type="text"
                                id="name"
                                placeholder="Escribe o genera la contraseña"
                            />
                        </div>
                    </FIELDADMIN>
                </FIELDSET>
                <FIELDSET>
                    <legend>Logotipo del Club (opcional)</legend>
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
                <Btn>
                    <button
                        type="submit"
                        className="btn w-full"
                    >
                        <span>Registrar Club</span>
                    </button>
                </Btn>
            </FORMADMIN>
        </>
    )
}

export default NewClub;