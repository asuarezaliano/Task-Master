import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const colorsPath = path.join(process.cwd(), 'src', '/mocks/colors.json');
    const colors = JSON.parse(await fs.promises.readFile(colorsPath, 'utf8'));

    const firstColorKey = Object.keys(colors)[0];
    const firstColorValue = colors[firstColorKey];

    delete colors[firstColorKey];

    await fs.promises.writeFile(colorsPath, JSON.stringify(colors, null, 2));

    return Response.json({ color: firstColorValue });
  } catch (error) {
    console.error('Error reading file:', error);
    return Response.json({ message: 'Error reading labels file' }, { status: 500 });
  }
}
