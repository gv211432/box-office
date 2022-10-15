const API_BASE_URL = "https://api.tvmaze.com";

export async function apiGet(queryStr: string): Promise<any> {
  const response = fetch(`${API_BASE_URL}${queryStr}`).then((r) => r.json());
  return response;
}
