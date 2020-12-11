export type SearchResultItem = {
  id: number;
  language: string;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
};
