const moongose =require('mongoose');

const vehicleSchema=moongose.Schema({

        vehicleType: {
        type: String,
        required: true,
        enum: ['Electric', 'Fuel']
        },
        vehicleId: {
            type: String,
            required: true,
            unique: true
        },

        VehicleName:
        {
            type:String,
            required:true,
        },
        Speed:
        {
            type:Number,
            required:true,
        },
        Status:
        {
            type:String,
            required:true,
            
        },
        Battery:
        {
            type:String,
            required:function ()
            {
                return  this.vehicleType==='Electric';
            },
            
        },
        ChargingStatus:
        {
            type:String,
            required:function ()
            {
                return  this.vehicleType==='Electric';
            },
        },
        FuelType:
        {
            type:String,
            required:function ()
            {
                return  this.vehicleType==='Fuel';
            },
        },
        FuelPercent:
        {
            type:String,
            required:function ()
            {
                return  this.vehicleType==='Fuel';
            },
        }
})

module.exports=moongose.model('Vehicle',vehicleSchema);

