interface Task {
  id: number;
  title: string;
  description?: string;
  priority: string;
  label?: string;
}

interface Label {
  name: string;
  color: string;
}
