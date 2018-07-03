'use strict';

import mongoose, {Schema} from 'mongoose';

const ChoresSchema = new Schema ({
  choreName: {type: String},
  assignedTo: {type: String, required: true},
});

export default mongoose.model('Chores', ChoresSchema);