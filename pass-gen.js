#!/usr/bin/env node

const { program, Option } = require("commander")
const { version } = require("./package.json")

program.version(version, "-v, --version", "Display the current version of the program")

program
    .addOption(new Option("-s, --sec <security>", "Define the password security")
        .default("medium")
        .choices(["weak", "medium", "strong"]))

program
    .option("-l, --length <number>", "Password size", "8")

program
    .option("-w, --write", "Save in a text file", false)

program
    .option("-d, --display", "Display the password in the console", false)

program.parse()

let { sec, length, write, display } = program.opts()

if(length > 30){
    length = 30
}

console.log(sec, length, write, display)
