const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  bmiHistory: [{
      date: Date,
      bmi: Number
  }],
  fitnessGoals: String,
});

const User = mongoose.model('User', userSchema);
