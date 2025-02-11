import {Schema, Model} from "mongoose";

const CourseSchema = new Schema({
    name: {
        type: String,
        required: [true, "El Nombre Es Obligatorio"]
    },
    description: {
        type: String,
        required: [true, "La Descripcion Es Obligatoria"]
    },
    keeper:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    /*students: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user" 
    }],*/
    status: {
        type: Boolean,
        default: true
    }
});

CourseSchema.methods.toJSON = function() {
    const {__v,password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default Model("Course", CourseSchema);