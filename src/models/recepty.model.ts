import {model, Schema, Document} from 'mongoose';
import {Recept} from '../interfaces/recept.interface';

const receptSchema: Schema = new Schema({
    name: { 
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true,
    },
    description: {  
        type: String,
        required: true
    },
    portions: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    userId: {
        ref : 'User',
        type: Schema.Types.ObjectId,
        required: true
    }
});


const receptModel = model<Recept & Document>('Recepty', receptSchema);
export default receptModel;

