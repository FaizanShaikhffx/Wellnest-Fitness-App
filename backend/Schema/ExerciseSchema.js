const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  muscleGroup: String,
  equipment: String,
  difficulty: String,
  similarExercises: [String]
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
