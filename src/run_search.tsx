import { exec, ExecException } from 'child_process';

function runSearchScript(query: string, callback: (data: any) => void) {
    console.log("HHHHHHHH")
    exec(`python example_search.py ${query}`, (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        try {
            const result = JSON.parse(stdout);
            callback(result);
        } catch (e) {
            console.error(`Error parsing JSON: ${e}`);
        }
    });
}

export default runSearchScript;