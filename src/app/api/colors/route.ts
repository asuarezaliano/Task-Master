import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const index = searchParams.get('index');

    const colorsPath = path.join(process.cwd(), 'src', '/mocks/colors.json');
    const colorsJson = JSON.parse(await fs.promises.readFile(colorsPath, 'utf8'));

    let selectedColor;
    if (index) {
      selectedColor = colorsJson.colors[index];
    } else {
      const randomIndex = Math.floor(Math.random() * colorsJson.colors.length);
      selectedColor = colorsJson.colors[randomIndex];
    }

    return Response.json({ color: selectedColor });
  } catch (error) {
    console.error('Error reading file:', error);
    return Response.json({ message: 'Error reading colors file' }, { status: 500 });
  }
}
