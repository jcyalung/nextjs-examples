# Supabase Example
Supabase is a backend-as-a-service that gives us many tools to build our applications.

For the sake of this example, we are using Supabase's database to insert, select, and update rows. Supabase is built on PostgresSQL, so some SQL experience is recommended.

In the file `db-examples.js`, the functions show us how to select, update, delete, and insert rows to specific tables in our database.

## Running the program
Make sure to install the necessary packages by running:
```
npm install
```
For the example to run, you need a Supabase project set up. Make a project on [this website](supabase.com/). <br>
Once you've made your project, create a file in this directory called `.env` and paste the following:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```
and replace the values with your url and key.
Any status code 2xx usually means your operation was completed successfully.