const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: 'Ocurrió un error en el servidor, pelmazo',
        error: err.stack
    })
}

export default errorHandler