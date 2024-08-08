export interface Props {
  selectedFilter: string;
  handleFilterChange: (filter: string) => void;
}

export interface filterButtonInterface {
  text: string;
  filter: string;
}
