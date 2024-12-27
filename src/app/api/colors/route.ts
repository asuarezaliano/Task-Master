import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const colorsPath = path.join(process.cwd(), 'src', '/mocks/colors.json');
    const colorsJson = JSON.parse(await fs.promises.readFile(colorsPath, 'utf8'));

    const firstColor = colorsJson.colors[0];

    const index = colorsJson.colors.indexOf(firstColor);
    if (index > -1) {
      colorsJson.colors.splice(index, 1);
    }

    await fs.promises.writeFile(colorsPath, JSON.stringify(colorsJson, null, 2));

    return Response.json({ color: firstColor });
  } catch (error) {
    console.error('Error reading file:', error);
    return Response.json({ message: 'Error reading labels file' }, { status: 500 });
  }
}
