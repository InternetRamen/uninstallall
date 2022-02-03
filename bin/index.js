#! /usr/bin/env node
const shell = require("shelljs");

async function main() {
    const { stdout, stderr, code } = await shell.exec("npm list");

    const list = stdout.split("\n");
    const newList = list.splice(1);
    const newNewList = newList.map((val) => val.trim());

    const newNewNewList = newNewList.map((val) => val.split("@")[0]);

    newNewNewList.splice(
        newNewNewList.indexOf(
            newNewNewList.find((val) => val.includes("shelljs"))
        )
    );

    for (let package of newNewNewList) {
        let { stdout, stderr } = await shell.exec(`npm uninstall ${package}`);
    }
}
main();
