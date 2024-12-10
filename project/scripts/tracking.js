const exercises = [
    { name: "Running", type: "Cardio", url: "images/running.svg", description: "Running is a great cardiovascular exercise that improves endurance and burns calories." },
    { name: "Swimming", type: "Cardio", url: "images/swimming.svg", description: "Swimming is a full-body workout that builds strength and improves cardiovascular health." },
    { name: "Cycling", type: "Cardio", url: "images/cycling.svg", description: "Cycling is a low-impact exercise that strengthens leg muscles and improves cardiovascular fitness." },
    { name: "Jumping Jacks", type: "Cardio", url: "images/jumping-jacks.svg", description: "Jumping jacks are a simple yet effective cardio exercise that engages multiple muscle groups." },
    { name: "Push-ups", type: "Strength", url: "images/push-ups.svg", description: "Push-ups are a classic strength training exercise that targets the chest, shoulders, and triceps." },
    { name: "Pull-ups", type: "Strength", url: "images/pull-ups.svg", description: "Pull-ups are an excellent upper body exercise that strengthens the back, shoulders, and arms." },
    { name: "Squats", type: "Strength", url: "images/squats.svg", description: "Squats are a fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes." },
    { name: "Lunges", type: "Strength", url: "images/lunges.svg", description: "Lunges are a unilateral leg exercise that improves balance, stability, and strength in the lower body." },
    { name: "Deadlifts", type: "Weights", url: "images/deadlifts.svg", description: "Deadlifts are a compound exercise that targets multiple muscle groups, including the back, glutes, and hamstrings." },
    { name: "Bench Press", type: "Weights", url: "images/bench-press.svg", description: "The bench press is a classic strength training exercise that targets the chest, shoulders, and triceps." },
    { name: "Bicep Curls", type: "Weights", url: "images/bicep-curls.svg", description: "Bicep curls are an isolation exercise that targets the biceps and helps build arm strength and size." },
    { name: "Tricep Extensions", type: "Weights", url: "images/tricep-extensions.svg", description: "Tricep extensions are a great exercise for targeting the triceps and building upper arm strength." },
    { name: "Yoga", type: "Flexibility", url: "images/yoga.svg", description: "Yoga is a practice that combines physical postures, breathwork, and meditation to improve flexibility, strength, and relaxation." },
    { name: "Pilates", type: "Flexibility", url: "images/pilates.svg", description: "Pilates is a low-impact exercise method that focuses on core strength, flexibility, and overall body conditioning." },
    { name: "Stretching", type: "Flexibility", url: "images/stretching.svg", description: "Stretching exercises help improve flexibility, range of motion, and muscle relaxation." },
    { name: "Tai Chi", type: "Flexibility", url: "images/tai-chi.svg", description: "Tai Chi is a gentle form of exercise that combines slow, flowing movements with deep breathing and meditation to promote relaxation, balance, and overall well-being." },
    { name: "Walking", type: "Light", url: "images/walking.svg", description: "Walking is a simple and accessible form of exercise that promotes cardiovascular health, strengthens muscles, and reduces stress." },
    { name: "Light Jogging", type: "Light", url: "images/jogging.svg", description: "Light jogging is a beginner-friendly aerobic exercise that improves cardiovascular fitness and burns calories." },
    { name: "Dancing", type: "Light", url: "images/dancing.svg", description: "Dancing is a fun and enjoyable way to get moving, improve coordination, and boost mood and energy levels." },
    { name: "Hiking", type: "Light", url: "images/hiking.svg", description: "Hiking is a scenic and enjoyable outdoor activity that provides cardiovascular benefits, strengthens muscles, and reduces stress." }
];

document.addEventListener('DOMContentLoaded', () => {
    const exerciseTypeSelect = document.getElementById('exerciseType');
    const exerciseLogContainer = document.getElementById('exercise-log');

    exercises.forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise.name;
        option.textContent = `${exercise.name} (${exercise.type})`;
        exerciseTypeSelect.appendChild(option);
    });

    const renderExerciseLog = () => {
        const exerciseLogs = JSON.parse(localStorage.getItem('exerciseLogs')) || [];
        exerciseLogContainer.innerHTML = '';
        exerciseLogs.forEach(log => {
            const logItem = document.createElement('li');
            logItem.textContent = `${log.exerciseDate}: ${log.exerciseType} for ${log.exerciseDuration} minutes`;
            exerciseLogContainer.appendChild(logItem);
        });
    };

    document.getElementById('exercise-form').addEventListener('submit', event => {
        event.preventDefault();
        const exerciseType = exerciseTypeSelect.value;
        const exerciseDate = document.getElementById('exerciseDate').value;
        const exerciseDuration = document.getElementById('exerciseDuration').value;

        const exerciseLog = {
            exerciseType,
            exerciseDate,
            exerciseDuration
        };

        let exerciseLogs = JSON.parse(localStorage.getItem('exerciseLogs')) || [];
        exerciseLogs.push(exerciseLog);
        localStorage.setItem('exerciseLogs', JSON.stringify(exerciseLogs));

        renderExerciseLog();

        alert('Exercise logged successfully!');
        document.getElementById('exercise-form').reset();
    });

    renderExerciseLog();
});