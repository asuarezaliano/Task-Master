import { Task } from '@/types';

export const mockTasks: Task[] = [
  {
    id: 1,
    title: 'Completar documentación',
    priority: 'medium',
    description: 'Esta tarea tiene una descripción adicional',
    label: 'Work',
  },
  {
    id: 2,
    title: 'Bañar al gato',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Lavar la ropa',
    priority: 'high',
    description: 'Lavar primero la ropa negra y después la blanca',
    label: 'Personal',
  },
  {
    id: 4,
    title: 'Comprar planta',
    priority: 'low',
  },
  {
    id: 5,
    title: 'Comprar medicamento ',
    priority: 'high',
    description: 'Comprar medicamento para dolor de rodilla, lo venden en faramcity',
    label: 'Personal',
  },
  {
    id: 6,
    title: 'Llamar contador',
    priority: 'high',
    description: 'Llamar al contador para solucionar tema contable ',
    label: 'Work',
  },
  {
    id: 7,
    title: 'Averiguar viaje a Cuba',
    priority: 'low',
    description: 'Investigar sobre vaije a cuba, precios, mejores lugares y planes',
    label: 'Personal',
  },
  {
    id: 8,
    title: 'Hablar con Alta Tienda ',
    priority: 'high',
    description: 'Hablar con Alta Tienda para acordar futura incorporación ',
    label: 'Work',
  },
  {
    id: 9,
    title: 'Estudiar estilos',
    priority: 'high',
    description: 'Estudiar como modificar estilos en shadcn ',
    label: 'Study',
  },
];
