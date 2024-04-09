## CLI.js:

> - This is the main file of the CLI application. It starts by importing necessary modules such as chalk for colorful console output, fs for file system operations, pegarArquivos from index.js to extract links from files, and listaValida from http-valida.js to validate the links.
> - It defines the imprimeLista function to print the list of links along with their validation status.
> - The processaTexto function is defined to handle the processing of text based on command-line arguments. It checks if the provided path exists, if it's a file or directory, and then processes accordingly.
> - Finally, it invokes the processaTexto function with the command-line arguments.
> - 
## http-valida.js:

> - This file contains functions related to validating HTTP links. The extrairLink function extracts links from the list of objects.
> - The checaStatus function checks the status of each link by sending HTTP requests and returns an array of status strings.
> - The manejaErro function handles errors that may occur during the validation process.
> - The listaValida function combines these operations to validate the list of links and returns an array of objects containing each link along with its status.

## index.js:

> - This file contains functions related to reading files and extracting links from them. The trataErro function is defined to handle file reading errors.
> - The extrairLinks function extracts links from the text content using a regular expression.
> - The pegarArquivos function reads a file asynchronously, extracts links from it, and returns them as an array of objects.
