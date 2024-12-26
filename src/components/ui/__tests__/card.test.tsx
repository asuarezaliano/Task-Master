import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../card';

describe('Card Components', () => {
  describe('Card', () => {
    it('renders with default styles', () => {
      render(<Card>Card Content</Card>);
      const card = screen.getByText('Card Content');
      expect(card).toHaveClass('rounded-xl', 'border', 'bg-card', 'text-card-foreground', 'shadow');
    });

    it('accepts and applies additional className', () => {
      render(<Card className="custom-class">Card Content</Card>);
      const card = screen.getByText('Card Content');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('CardHeader', () => {
    it('renders with default styles', () => {
      render(<CardHeader>Header Content</CardHeader>);
      const header = screen.getByText('Header Content');
      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6');
    });
    it('accepts and applies additional className', () => {
      render(<CardHeader className="custom-class">Header Content</CardHeader>);
      const card = screen.getByText('Header Content');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('CardTitle', () => {
    it('renders with default styles', () => {
      render(<CardTitle>Title Content</CardTitle>);
      const title = screen.getByText('Title Content');
      expect(title).toHaveClass('font-semibold', 'leading-none', 'tracking-tight');
    });

    it('accepts and applies additional className', () => {
      render(<CardTitle className="custom-class">Title Content</CardTitle>);
      const card = screen.getByText('Title Content');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('CardDescription', () => {
    it('renders with default styles', () => {
      render(<CardDescription>Description Content</CardDescription>);
      const description = screen.getByText('Description Content');
      expect(description).toHaveClass('text-sm', 'text-muted-foreground');
    });
    it('accepts and applies additional className', () => {
      render(<CardDescription className="custom-class">Description Content</CardDescription>);
      const card = screen.getByText('Description Content');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('CardContent', () => {
    it('renders with default styles', () => {
      render(<CardContent>Content</CardContent>);
      const content = screen.getByText('Content');
      expect(content).toHaveClass('p-6', 'pt-0');
    });
    it('accepts and applies additional className', () => {
      render(<CardContent className="custom-class">Content</CardContent>);
      const card = screen.getByText('Content');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('CardFooter', () => {
    it('renders with default styles', () => {
      render(<CardFooter>Footer Content</CardFooter>);
      const footer = screen.getByText('Footer Content');
      expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0');
    });
    it('accepts and applies additional className', () => {
      render(<CardFooter className="custom-class">Footer Content</CardFooter>);
      const card = screen.getByText('Footer Content');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('Card Integration', () => {
    it('renders a complete card with all components', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Main Content</CardContent>
          <CardFooter>Footer Content</CardFooter>
        </Card>
      );

      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card Description')).toBeInTheDocument();
      expect(screen.getByText('Main Content')).toBeInTheDocument();
      expect(screen.getByText('Footer Content')).toBeInTheDocument();
    });
  });
});
