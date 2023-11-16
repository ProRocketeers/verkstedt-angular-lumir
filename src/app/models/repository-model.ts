export interface GitHubAPIResponse {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryModel[];
}
export interface RepositoryModel {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  isFav: boolean;
}
