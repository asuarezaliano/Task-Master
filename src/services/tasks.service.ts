import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const taskService = {
  getTasks: async (): Promise<Task[]> => {
    try {
      const { data } = await axios.get(`${baseURL}/api/tasks`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data.tasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Error fetching tasks');
    }
  },

  getLabels: async (): Promise<Record<string, Label>> => {
    try {
      const { data } = await axios.get(`${baseURL}/api/labels`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data.labels;
    } catch (error) {
      console.error('Error fetching labels:', error);
      throw new Error('Error fetching labels');
    }
  },

  addColor: async (): Promise<string> => {
    try {
      let colorIndex = parseInt(localStorage.getItem('colorIndex') || '0');

      const response = await fetch(`${baseURL}/api/colors?index=${colorIndex}`);

      if (!response.ok) {
        throw new Error('Error fetching color');
      }

      const data = await response.json();

      colorIndex = (colorIndex + 1) % 12;
      localStorage.setItem('colorIndex', colorIndex.toString());

      return data.color;
    } catch (error) {
      console.error('Error getting unique color:', error);
      throw error;
    }
  },
};
