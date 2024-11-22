const BASE_URL = "http://localhost:8080";

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao buscar dados.");
  }
};
