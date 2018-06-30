'use strict';

import mongoose, {Schema} from 'mongoose';

const ChoreSchema = new Schema ({
  choreName: {type: String},
  assignedTo: {type: String, required: true},
});

export default mongoose.model('Chore', ChoreSchema);