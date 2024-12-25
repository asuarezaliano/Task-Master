import axios from 'axios';
import { taskService } from '../tasks.service';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('taskService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getTasks', () => {
    it('should fetch tasks successfully', async () => {
      const mockTasks = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
      ];

      mockedAxios.get.mockResolvedValueOnce({ data: { tasks: mockTasks } });

      const result = await taskService.getTasks();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.stringContaining('/api/tasks'),
        expect.any(Object)
      );
      expect(result).toEqual(mockTasks);
    });

    it('should fetch tasks empty successfully', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { tasks: [] } });

      const result = await taskService.getTasks();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.stringContaining('/api/tasks'),
        expect.any(Object)
      );
      expect(result).toEqual([]);
    });

    it('should handle errors when fetching tasks', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

      await expect(taskService.getTasks()).rejects.toThrow('Error fetching tasks');
    });
  });

  describe('getLabels', () => {
    it('should fetch labels successfully', async () => {
      const mockLabels = {
        label1: { id: 'label1', name: 'Label 1' },
        label2: { id: 'label2', name: 'Label 2' },
      };

      mockedAxios.get.mockResolvedValueOnce({ data: { labels: mockLabels } });

      const result = await taskService.getLabels();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.stringContaining('/api/labels'),
        expect.any(Object)
      );
      expect(result).toEqual(mockLabels);
    });

    it('should fetch labels empty successfully', async () => {
      const mockLabels = {};

      mockedAxios.get.mockResolvedValueOnce({ data: { labels: mockLabels } });

      const result = await taskService.getLabels();

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.stringContaining('/api/labels'),
        expect.any(Object)
      );
      expect(result).toEqual(mockLabels);
    });

    it('should handle errors when fetching labels', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

      await expect(taskService.getLabels()).rejects.toThrow('Error fetching labels');
    });
  });

  describe('addColor', () => {
    it('should fetch a color successfully', async () => {
      const mockColor = 'green-500';

      mockedAxios.get.mockResolvedValueOnce({ data: { color: mockColor } });

      const result = await taskService.addColor();

      expect(mockedAxios.get).toHaveBeenCalledWith('/api/colors', expect.any(Object));
      expect(result).toEqual(mockColor);
    });

    it('should propagate errors when fetching color fails', async () => {
      const mockError = new Error('Network error');
      mockedAxios.get.mockRejectedValueOnce(mockError);

      await expect(taskService.addColor()).rejects.toThrow(mockError);
    });
  });
});
