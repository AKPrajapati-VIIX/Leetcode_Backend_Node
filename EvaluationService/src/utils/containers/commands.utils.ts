const bashConfig = ['/bin/bash', '-c'];

export const commands = {
    python: function(code: string) {
        const runCommand = `echo '${code}' > code.py && python3 code.py`;
        return [...bashConfig, runCommand];
    },

    javascript: function(code: string) {
        const runCommand = `echo '${code}' > code.js && node code.js`;
        return [...bashConfig, runCommand];
    },

    java: function(code: string) {
        const runCommand = `echo '${code}' > Main.java && javac Main.java && java Main`;
        return [...bashConfig, runCommand];
    },

    cpp: function(code: string) {
        const runCommand = `echo '${code}' > code.cpp && g++ -o code code.cpp && ./code`;
        return [...bashConfig, runCommand];
    }, 
};