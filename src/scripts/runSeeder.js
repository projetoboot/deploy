const { seedMenu } = require('../seeders/menuSeeder');

async function runSeeder() {
    try {
        // Replace with your restaurant ID
        const restaurante_id = 1; // Change this to your actual restaurant ID
        await seedMenu(restaurante_id);
        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Error running seeder:', error);
    } finally {
        process.exit();
    }
}

runSeeder();