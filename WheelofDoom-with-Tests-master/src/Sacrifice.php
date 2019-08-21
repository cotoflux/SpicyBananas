<?php
namespace wheelofdoom;
final class Sacrifice {
    public $sacrified = false; 
    public function execute ()
    {
        $this->sacrified = true;
    }

}