import mongoose from 'mongoose';

const NatureSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    unique: true 
  },
  plus: { 
    type: String, 
    required: true,
    enum: ['Atk', 'Def', 'Spa', 'SpDef', 'Spd']
  },
  minus: { 
    type: String, 
    required: true,
    enum: ['Atk', 'Def', 'Spa', 'SpDef', 'Spd']
  },
  modifiers: {
    Atk: { 
      type: Number, 
      required: true,
      min: 0.9,
      max: 1.1
    },
    Def: { 
      type: Number, 
      required: true,
      min: 0.9,
      max: 1.1
    },
    Spa: { 
      type: Number, 
      required: true,
      min: 0.9,
      max: 1.1
    },
    SpDef: { 
      type: Number, 
      required: true,
      min: 0.9,
      max: 1.1
    },
    Spd: { 
      type: Number, 
      required: true,
      min: 0.9,
      max: 1.1
    }
  }
}, { 
  collection: 'Natures',
  timestamps: true 
}, { collection: 'Natures' });

// Validation pour s'assurer que plus et minus sont différents
NatureSchema.pre('save', function(next) {
  if (this.plus === this.minus) {
    return next(new Error('Plus and minus stats cannot be the same'));
  }
  next();
});

// Méthode pour obtenir le modificateur d'une stat
NatureSchema.methods.getModifier = function(stat) {
  return this.modifiers[stat] || 1;
};

// Méthode statique pour trouver une nature par nom
NatureSchema.statics.findByName = function(name) {
  return this.findOne({ name: new RegExp(name, 'i') });
};

export default mongoose.model('Nature', NatureSchema);