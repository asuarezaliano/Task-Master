import { z } from 'zod';

export enum Priorities {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export const mappedProperties: { [key in Priorities]: string } = {
  [Priorities.HIGH]: 'High',
  [Priorities.MEDIUM]: 'Medium',
  [Priorities.LOW]: 'Low',
};

export const predefinedLabels = ['Work', 'Personal', 'Study', 'Home', 'Project'] as const;

export const taskSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'El título es requerido' })
    .min(3, { message: 'El título debe tener al menos 3 caracteres' })
    .max(30, { message: 'El título no puede tener más de 30 caracteres' }),
  description: z.string().optional(),
  priority: z.nativeEnum(Priorities),
  label: z.union([z.enum(predefinedLabels), z.string().min(1)]).optional(),
});
