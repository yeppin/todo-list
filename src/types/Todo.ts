export type Todo = {
  id: number;
  content: string;
  completed: boolean;
  createDatetime: string;
  updateDatetime?: string | null;
  completedDatetime?: string | null;
};
