import react from "react";
import axios, { AxiosResponse } from "axios";

// Fonction pour obtenir le jeton d'authentification depuis les cookies (à implémenter)
function getTokenFromCookies(): string {
  // À implémenter : code pour obtenir le jeton depuis les cookies
  return ""; 
}

// Fonction pour créer l'en-tête d'authentification
export function authHeader(): Record<string, string> {
  const token = getTokenFromCookies();
  return {
    Authorization: "Bearer " + token,
  };
}

// Configuration d'Axios pour les appels à l'API
const baseUrl = "http://localhost:8080/";
const ApiHeader = axios.create({
  baseURL: baseUrl,
});

// Fonction pour obtenir les données de recherche depuis l'API
export async function getSearchWords(): Promise<any> {
  try {
    const response: AxiosResponse = await ApiHeader.get(
      "api/search/all",
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default ApiHeader;