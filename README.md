# swagger-to-slate

A node module which converts the swagger specification file (Both Json and Yaml) into slate markdown.

* [swagger](http://swagger.io/) - The Swagger specification is a powerful definition format to describe RESTful APIs.
* [slate](https://github.com/lord/slate) - Beautiful static documentation for your API.

## Getting Started
    ```Options: 
    --help, -h            Output usage information
    --version, -v         Output the version of the tool
    --input, -i           Input file name with full path (Default file name is swagger.json)
    --output, -o          Output file name with full path (Default file name is same as input file)```

### Prerequisites

Your system must have node and npm install.

### Installing

You can install this module using `npm install -g swagger-to-slate`.
You need to install this module globally in order to call it by name.

## use

### To see the version

``` swagger-to-slate -v ```

### help

``` swagger-to-slate -h ```

### Convert the file

``` swagger-to-slate -i /home/user/Desktop/swagger.json``` 

``` swagger-to-slate -i /home/user/Desktop/swagger.yaml``` 

It will generate the output file in the same path with same file name. Eg. swagger.md

``` swagger-to-slate -i /home/user/Desktop/filename.json -o /home/user/Desktop/xyz.md```

It will generate the output file in given path with given output file name.

## Authors

* **Lav Kumar Vishwakarma** - *Initial work* - [lavkumarv](https://github.com/lavkumarv)

## Contributors

* **Daniel Henrique Joppi** - *Fixed patches* - [danieljoppi](https://github.com//danieljoppi)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration 
    [swagger-markdown](https://github.com/syroegkin/swagger-markdown)
