import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const tasksPath = path.join(process.cwd(), 'src', '/mocks/tasks.json');

    const tasks = JSON.parse(await fs.promises.readFile(tasksPath, 'utf8'));

    return Response.json({ ...tasks });
  } catch (error) {
    console.error('Error reading file:', error);
    return Response.json({ message: 'Error reading labels file' }, { status: 500 });
  }
}
