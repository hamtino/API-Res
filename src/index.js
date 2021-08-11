import app from "./app";

async function main() {
    await app.listen(4000);
    console.log("server error 404")
};

main();