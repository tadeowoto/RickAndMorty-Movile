export async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return [];
  }
}

export async function fetchCharacterById({ id }) {
  try {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const response = await data.json();
    if (!data.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    console.error("Failed to fetch character by ID:", error);
    return null;
  }
}
