import app from "./app";
import '@babel/polyfill'

async function main() {
    await app.listen(4000);
    console.log("servidor iniciado en el puerto 4000")
};

main();