<?php
use wheelofdoom\Sacrifice;
use PHPUnit\Framework\TestCase;

final class SacrificeTest extends TestCase 
{
    public function testIfSacrificedChangesStatus()
    {
    //Definimos el escenario del test. (estado inicial, sacrificado False) 
    $sacrifice = new Sacrifice ();
    $this->assertFalse($sacrifice->sacrified);
    // Ejecutamos el escenario
    $sacrifice->execute(); 

    // Comprobamos el resultado
    $this->assertTrue($sacrifice->sacrified);
    }
}
?>
