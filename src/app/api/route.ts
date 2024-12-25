import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const labelsPath = path.join(process.cwd(), 'src', '/mocks/labels.json');
    const colorsPath = path.join(process.cwd(), 'src', '/mocks/colors.json');

    const data = await req.json();

    const colors = JSON.parse(await fs.promises.readFile(colorsPath, 'utf8'));
    const labels = JSON.parse(await fs.promises.readFile(labelsPath, 'utf8'));

    const requestValue = data;

    const firstColorKey = Object.keys(colors)[0];
    const firstColorValue = colors[firstColorKey];

    const newLabel = {
      name: requestValue,
      color: firstColorValue,
    };
    labels[requestValue] = newLabel;

    delete colors[firstColorKey];

    await fs.promises.writeFile(labelsPath, JSON.stringify(labels, null, 2));
    await fs.promises.writeFile(colorsPath, JSON.stringify(colors, null, 2));

    return Response.json({ message: 'Labels updated successfully', data: newLabel });
  } catch (error) {
    console.error('Error writing file:', error);
    return Response.json({ message: 'Error writing labels file' }, { status: 500 });
  }
}
