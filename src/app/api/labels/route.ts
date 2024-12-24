import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const labelsPath = path.join(process.cwd(), 'src', 'labels.json');

    const labels = JSON.parse(await fs.promises.readFile(labelsPath, 'utf8'));

    return Response.json({ labels });
  } catch (error) {
    console.error('Error reading file:', error);
    return Response.json({ message: 'Error reading labels file' }, { status: 500 });
  }
}
