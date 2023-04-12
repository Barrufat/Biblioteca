import './modal.css'

const Modal = ({ children, estado, cambiarEstado}) => {

    return (
        <>
            {estado &&
                <div className='overlay' type='button' onClick={() => cambiarEstado(false)}>
                    <div className='contModal'>
                    {children}
                        {/* <div className='headerModal'>
                            <button className='cerrarModal' type='button' onClick={() => cambiarEstado(false)}>X</button>
                        </div>
                        <div className='fondoModal'>
                            <div className='contContenido'>
                            </div>
                        </div> */}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal