<?php

namespace Cofirazak\PhpMissingFunctions;

/**
 * Useful string functions missing in php.
 */
class StringFunc
{
    /**
     * Replicates php's ucfirst() function with multibyte support.
     *
     * @param string      $str      the string being converted
     * @param null|string $encoding Optional encoding parameter is the character encoding.
     *                              If it is omitted, the internal character encoding value will be used.
     *
     * @return string the input string with first character uppercased
     */
    public static function mbUcFirst(string $str, string $encoding = null): string
    {
        if (is_null($encoding)) {
            $encoding = mb_internal_encoding();
        }

        return mb_strtoupper(mb_substr($str, 0, 1, $encoding), $encoding) .
            mb_substr($str, 1, null, $encoding);
    }
}
