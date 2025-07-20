import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const dairyCategory = await prisma.productCategory.create({
        data: {
            name: 'Молочные продукты',
        },
    });

    const vegetablesCategory = await prisma.productCategory.create({
        data: {
            name: 'Овощи',
        },
    });

    await prisma.productSuggestion.createMany({
        data: [
            {
                title: 'Молоко',
                emoji: '🥛',
                categoryId: dairyCategory.id,
            },
            {
                title: 'Сыр',
                emoji: '🧀',
                categoryId: dairyCategory.id,
            },
            {
                title: 'Огурцы',
                emoji: '🥒',
                categoryId: vegetablesCategory.id,
            },
            {
                title: 'Помидоры',
                emoji: '🍅',
                categoryId: vegetablesCategory.id,
            },
        ],
    });

    const testList = await prisma.list.create({
        data: {
            title: 'Продукты на неделю',
            icon: '🛒',
            color: '#4B6EFD',
        },
    });

    await prisma.listItem.createMany({
        data: [
            {
                listId: testList.id,
                title: 'Молоко',
                quantity: 2,
                unit: 'л',
                isCompleted: false,
            },
            {
                listId: testList.id,
                title: 'Огурцы',
                quantity: 3,
                unit: 'шт',
                note: 'Свежие, хрустящие',
            },
        ],
    });

    console.log('✅ Seed complete');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
