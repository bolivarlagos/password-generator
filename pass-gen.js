#!/usr/bin/env node

const { program, Option } = require("commander")
const { writeFile } = require("fs")
const { version } = require("./package.json")
const createPassword  = require("./passwordHandler")

program.version(version, "-v, --version", "Display the current version of the program")

const securityOption = new Option("-s, --sec <security>", "Define the password security").default("medium")

program.addOption(securityOption.choices(["weak", "medium", "strong"]))

program
    .option("-l, --length <number>", "Password size", "8")

program
    .option("-w, --write", "Save in a text file", false)

program
    .option("-d, --display", "Display the password in the console", true)

program.parse()

let { sec, length, write, display } = program.opts()

const generatedPassword = createPassword(sec, length)

if(display){
    console.log("This is your password ", generatedPassword)
}

if(write){
    writeFile("password.txt", generatedPassword, (err) => {
        if(err){
            console.log(err)
        }
        console.log("Success write")
    })
}

