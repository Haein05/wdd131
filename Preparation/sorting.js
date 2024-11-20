// Sample list of strings
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// Activity 1: Sorting
console.log("Activity 1: Sorting");
// Simple sort
const simpleSort = [...simpleList].sort(); // Spread to avoid mutating the original
console.log("Simple Sort:", simpleSort);

// Sorting with compareFn (Descending order)
function compareFn(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
const descendingSort = [...simpleList].sort(compareFn);
console.log("Descending Sort:", descendingSort);

// Activity 2: Filtering
console.log("\nActivity 2: Filtering");
function searchList(list, query) {
  function searchCallback(string) {
    return string.toLowerCase().includes(query.toLowerCase());
  }
  return list.filter(searchCallback);
}
console.log("Filtered List ('b'):", searchList(simpleList, "b"));
console.log("Filtered List ('an'):", searchList(simpleList, "an"));

// List of hikes (objects)
const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14974, -111.04564]
  }
];

// Activity 3: Filtering and Sorting Objects
console.log("\nActivity 3: Sorting and Filtering Objects");

function searchHikes(list, query) {
  function searchCallback(item) {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }
  const filtered = list.filter(searchCallback);

  // Sort by distance (convert string to numeric)
  const sorted = filtered.sort((a, b) => {
    const distanceA = parseFloat(a.distance);
    const distanceB = parseFloat(b.distance);
    return distanceA - distanceB;
  });

  return sorted;
}

// Examples of searching and sorting hikes
console.log("Filtered Hikes ('yellowstone'):", searchHikes(hikes, "yellowstone"));
console.log("Filtered Hikes ('moderate'):", searchHikes(hikes, "moderate"));
console.log("Filtered Hikes ('al'):", searchHikes(hikes, "al"));
