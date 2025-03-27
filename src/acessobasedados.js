const { Pool } = require('pg');
const CATEGORIAS = require('./config/categorias');

// Database configuration
const DB_CONFIG = {
    user: 'postgres',
    host: 'localhost',
    database: 'cardap',
    password: '719732',
    port: 5432
};
const pool = new Pool(DB_CONFIG);

async function getTableInfo() {
    const client = await pool.connect();
    try {
        // Query to get all tables in the database
        const tablesQuery = `
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_type = 'BASE TABLE'
        `;

        const tables = await client.query(tablesQuery);

        const databaseSchema = {};

        // For each table, get column information
        for (const table of tables.rows) {
            const tableName = table.table_name;
            
            const columnsQuery = `
                SELECT 
                    column_name,
                    data_type,
                    is_nullable,
                    column_default,
                    character_maximum_length
                FROM information_schema.columns 
                WHERE table_schema = 'public' 
                AND table_name = $1
                ORDER BY ordinal_position
            `;

            const columns = await client.query(columnsQuery, [tableName]);

            // Get primary key information
            const primaryKeyQuery = `
                SELECT c.column_name
                FROM information_schema.table_constraints tc
                JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_name)
                JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema
                    AND tc.table_name = c.table_name AND ccu.column_name = c.column_name
                WHERE constraint_type = 'PRIMARY KEY' AND tc.table_name = $1;
            `;

            const primaryKey = await client.query(primaryKeyQuery, [tableName]);

            // Get foreign key information
            const foreignKeysQuery = `
                SELECT
                    kcu.column_name,
                    ccu.table_name AS foreign_table_name,
                    ccu.column_name AS foreign_column_name
                FROM information_schema.table_constraints AS tc
                JOIN information_schema.key_column_usage AS kcu
                    ON tc.constraint_name = kcu.constraint_name
                    AND tc.table_schema = kcu.table_schema
                JOIN information_schema.constraint_column_usage AS ccu
                    ON ccu.constraint_name = tc.constraint_name
                    AND ccu.table_schema = tc.table_schema
                WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name = $1;
            `;

            const foreignKeys = await client.query(foreignKeysQuery, [tableName]);

            // Store all information about the table
            databaseSchema[tableName] = {
                columns: columns.rows,
                primaryKey: primaryKey.rows.map(pk => pk.column_name),
                foreignKeys: foreignKeys.rows
            };
        }

        // Generate route suggestions based on schema
        console.log('\n=== Database Schema Analysis ===\n');
        for (const [tableName, tableInfo] of Object.entries(databaseSchema)) {
            console.log(`Table: ${tableName}`);
            console.log('Columns:');
            tableInfo.columns.forEach(column => {
                console.log(`  - ${column.column_name} (${column.data_type})${column.is_nullable === 'NO' ? ' NOT NULL' : ''}`);
            });

            if (tableInfo.primaryKey.length > 0) {
                console.log('Primary Key:', tableInfo.primaryKey.join(', '));
            }

            if (tableInfo.foreignKeys.length > 0) {
                console.log('Foreign Keys:');
                tableInfo.foreignKeys.forEach(fk => {
                    console.log(`  - ${fk.column_name} -> ${fk.foreign_table_name}(${fk.foreign_column_name})`);
                });
            }

            // Suggest REST API routes
            console.log('\nSuggested Routes:');
            console.log(`GET    /api/${tableName}         - List all ${tableName}`);
            console.log(`GET    /api/${tableName}/:id     - Get single ${tableName}`);
            console.log(`POST   /api/${tableName}         - Create new ${tableName}`);
            console.log(`PUT    /api/${tableName}/:id     - Update ${tableName}`);
            console.log(`DELETE /api/${tableName}/:id     - Delete ${tableName}`);

            console.log('\n-------------------\n');
        }

        return databaseSchema;
    } catch (error) {
        console.error('Error analyzing database:', error);
        throw error;
    } finally {
        client.release();
    }
}

// Execute the analysis
getTableInfo()
    .then(() => {
        console.log('Database analysis completed.');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error:', error);
        process.exit(1);
    });