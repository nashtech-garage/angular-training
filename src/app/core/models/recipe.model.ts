export interface Recipe {
  id: string;
  name: string;
  instructions: string;
  time: string;
  category: string;
  description: string;
  ingredients: string[];
  thumbnail?: string;
}
