import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let newSuggestions = [];
    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
      newSuggestions = [
        "Increase calorie intake with healthy foods",
        "Consider strength training exercises",
        "Consult a nutritionist for a personalized diet plan"
      ];
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
      newSuggestions = [
        "Continue balanced eating",
        "Maintain regular physical activity",
        "Regular health check-ups"
      ];
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
      newSuggestions = [
        "Adopt a healthy, lower-calorie diet",
        "Increase daily physical activity",
        "Consult a healthcare provider for guidance"
      ];
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
      newSuggestions = [
        "Seek professional medical advice",
        "Consider a structured weight loss program",
        "Explore options for physical activity suitable for your condition"
      ];
    }
    setSuggestions(newSuggestions);
  };

  return (
    <section className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">BMI CALCULATOR</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <form onSubmit={calculateBMI} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className="mt-1 p-3 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className="mt-1 p-3 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 p-3 border border-gray-300 rounded w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
              Calculate BMI
            </button>
          </form>
        </div>
        <div className="max-w-sm w-full">
          <img src="/bmi.jpg" alt="BMI Calculation" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-center mt-6 text-gray-800">Health Suggestions</h2>
        <ul className="list-disc pl-8 mt-4">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="text-gray-600">{suggestion}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BMICalculator;
