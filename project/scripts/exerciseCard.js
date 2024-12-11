// exerciseCard.js
export function createExerciseCard(exercises, selector) {
    const container = document.getElementById('exerciseContainer');
    container.innerHTML = '';

    exercises.forEach(exercise => {
        const exerciseCard = document.createElement("div");
        exerciseCard.classList.add("exercise-card");

        let name = document.createElement("h3");
        let description = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = exercise.name;
        description.textContent = exercise.description;
        image.setAttribute("src", `${exercise.url}`);
        image.setAttribute("alt", `${exercise.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 128);
        image.setAttribute("height", 128);

        exerciseCard.appendChild(name);
        exerciseCard.appendChild(description);
        exerciseCard.appendChild(image);

        if (selector === "all") {
            container.appendChild(exerciseCard);
        } else if (selector === exercise.type.toLowerCase()) {
            container.appendChild(exerciseCard);
        }
    });
}
