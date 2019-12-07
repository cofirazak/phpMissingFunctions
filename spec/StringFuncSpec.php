<?php

namespace spec\Cofirazak\PhpMissingFunctions;

use PhpSpec\ObjectBehavior;

class StringFuncSpec extends ObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType(StringFunc::class);
    }

    public function it_upper_first_char_of_mb_str()
    {
        $this::mbUcFirst('проверка апперкейса мультибайт строки.')
            ->shouldReturn('Проверка апперкейса мультибайт строки.')
        ;
    }

    public function it_upper_first_char_of_non_mb_str()
    {
        $this::mbUcFirst('test uppercase non multibyte string.')
            ->shouldReturn('Test uppercase non multibyte string.')
        ;
    }
}
