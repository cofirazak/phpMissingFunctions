<p align="center">
<a href="https://travis-ci.com/cofirazak/phpMissingFunctions">
  <img src="https://api.travis-ci.com/cofirazak/phpMissingFunctions.svg?branch=master" alt="Build Status"></a>
<a href="https://packagist.org/packages/cofirazak/php-missing-functions">
  <img src="https://img.shields.io/packagist/php-v/cofirazak/php-missing-functions" alt="PHP version"></a>  
<a href="https://packagist.org/packages/cofirazak/php-missing-functions">
  <img src="https://img.shields.io/packagist/l/cofirazak/php-missing-functions" alt="License"></a>
<a href="https://packagist.org/packages/cofirazak/php-missing-functions">
  <img src="https://img.shields.io/packagist/v/cofirazak/php-missing-functions" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/cofirazak/php-missing-functions">
  <img src="https://img.shields.io/packagist/dt/cofirazak/php-missing-functions" alt="Total Downloads"></a>
</p>

## About PHP Missing Functions

PHP Missing Functions is a php package that contains useful functions that people around the world seek in php and can't find.
This package assumes to contain very few functions, because PHP has already have nearly all it needs.

## Usage

```php
require __DIR__ . '/../vendor/autoload.php';

use Cofirazak\PhpMissingFunctions\StringFunc;

$test_str = 'тест строки';
$result = StringFunc::mbUcFirst($test_str);
var_dump($result); // Outputs: 'Тест строки'
```


## Contributing

Thank you for considering contributing to the PHP Missing Functions!
If you have any ideas regarding to this package, please feel free to start an issue.

## Security Vulnerabilities

If you discover a security vulnerability within phpMissingFunctions, please send an e-mail to Rodrigues da Silva via [cofirazak@gmail.com](mailto:cofirazak@gmail.com). All security vulnerabilities will be promptly addressed.

## License

PHP Missing Functions is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
