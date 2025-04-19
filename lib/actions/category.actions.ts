'use server';

import { prisma } from '@/lib/prisma';
import { upsertCategorySchema } from '@/lib/validator';
import { z } from 'zod';

export const upsertCategory = async (
  data: z.infer<typeof upsertCategorySchema>
) => {
  const parsed = upsertCategorySchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid category data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, name } = parsed.data;

  try {
    let category;

    // Upsert the category
    if (id) {
      category = await prisma.category.upsert({
        where: { id },
        update: { name },
        create: { name },
      });
    } else {
      category = await prisma.category.create({ data: { name } });
    }

    return {
      success: true,
      message: id
        ? 'Category updated successfully'
        : 'Category created successfully',
      data: category,
    };
  } catch (error) {
    console.error('Upsert category error:', error);
    return {
      success: false,
      message: 'Failed to upsert category',
    };
  }
};

export const getAllCategory = async () => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return {
      success: true,
      data: categories,
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      success: false,
      message: 'Failed to fetch categories',
    };
  }
};
