export type Todo = {
  id: number;
  content: string;
  completed: boolean;
  createDatetime: string;
  updateDatetime?: string | null;
  completedDatetime?: string | null;
};

export type Status = 'All' | 'ING' | 'COMPLETE';
