// main.js
import { exercises } from './exerciseData.js';
import { createExerciseCard } from './exerciseCard.js';

document.addEventListener('DOMContentLoaded', () => {
    const exerciseTypeList = document.getElementById('exerciseTypeList');

    // Initial load
    createExerciseCard(exercises, "all");

    // Dropdown change listener
    exerciseTypeList.addEventListener('change', function() {
        const selectedValue = exerciseTypeList.value;
        createExerciseCard(exercises, selectedValue);
    });
});
