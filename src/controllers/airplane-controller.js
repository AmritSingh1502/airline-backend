const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

async function createAirplane(req, res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity: req.body.capacity
        });
        console.log('created airplane', airplane);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            messsge : 'Successfully created an airplane',
            data : airplane,
            error : {}
        });
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            messsge : 'something went wrong while created airplane',
            data : {},
            error : error
        });
    }
}

module.exports = {
    createAirplane
}