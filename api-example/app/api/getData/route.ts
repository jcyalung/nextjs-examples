import { NextResponse } from "next/server";

const data = [
    {name: 'Josh'},
    {name: 'Alex'},
    {name: 'Jones'},
    {name: 'Isaac'},
];

// TODO: Complete this function to return the data variable, with a status code of 200
export async function GET(request: Request) {
    // stub for the function to run
    return NextResponse.json(data, {status: 200});
}


// TODO: Complete this function to return the data variable, and a status code of 200
//       The data variable should be modified to add the word included in the POST request.
// Example: If the word sent in the POST request was 'variable', then each name in the data should have
//          variable. "Josh" -> "Joshvariable"
export async function POST(request: Request) {
    // stub for the function to run
    const body = await request.json();
    const word = body.word;

    const modifiedData = data.map((item) => ({
        name: item.name + word,
    }));

    return NextResponse.json(modifiedData, {status: 200});
}