const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// start the client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

/**
 * this function will retreive all rows from a given table 
 * and print them to the console.
 * @param {string} tableName 
 */
async function getFrom(tableName) {
    try { 
        // retrieve the table we're trying to access
        const table = await supabase.from(tableName);
        const { data, error } = await table.select('*');             // select all columns from ALL rows

        if (error) { throw Error(error.message); } 
        
        console.log('Data:', data);
    } catch (error) {
        console.error('An error occurred: ', error.message);
    }
    
}

/**
 * This function attempts to insert a row into the given table
 * with the data in the payload.
 * @param {string} tableName 
 * @param {Object} payload 
 */
async function insertTo(tableName, payload) {
    try {
        // retreive the table we're trying to insert to
        const table = await supabase.from(tableName);
        
        // try to insert the data into the table
        const {status, error} = await table.insert(
            [
                payload // this must be in array
            ]
        );
        if(error) { throw Error(error.message); }
        
        console.log('Status: ', status);
    } catch (error) {
        console.error('An error occurred: ', error.message)
    }
}

/**
 * this function attempts to delete a row where a value of a column is deleted
 * @param {string} tableName 
 * @param {string} column 
 * @param {any} value 
*/
async function deleteFrom(tableName, column, value) {
    try {
        // retreive the table we're trying to delete from
        const table = await supabase.from(tableName);
        const {status, statusText, error} = await table.delete().eq(column, value); // if any row whose column equals the value, the row will be deleted
        
        if(error) { throw Error(error.message); }
        console.log('Status: ', status);
    } catch (error) {
        console.error('An error occurred: ', error.message)
    }
}

/**
 * this function attempts to select a row where the row's column is equal to the given value
 * @param {string} tableName 
 * @param {string} column 
 * @param {any} value 
*/
async function selectEqual(tableName, column, value) {
    // retreive the table we're trying to select from
    try {
        const table = await supabase.from(tableName);
        const { data, status, error } = await table.select('*').eq(column, value); // if column = value, we will return that row
        if(error) { throw Error(error.message); }
        console.log('Status: ', status);
        console.log('Data: ', data);
    } catch(error) {
        console.error('Error:', error.message);
    } 
}
