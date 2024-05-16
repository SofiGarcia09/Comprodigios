<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Opcion de envío</title>
        <?php 
        $opcion_envio = $_POST["tipo_envio"];
        $sucursal = $_POST["sucursal"];
        $metodo_pago = $_POST["metodoPago"];
        ?>
        <?php  echo "<h2>Envio seleccionado: $opcion_envio </h2>" ?>
        <?php echo"<h2> Sucursal seleccionada: $sucursal </h2>"?>
        <?php echo"<h2> Metodo de pago: $metodo_pago </h2>"?>


    </head>
    <body>
        <h1>Elija una opcion de envío</h1>
        <form action="">
            <div align="center">
                    <input type="radio" name="tipo_envio" value="Envio_a_tu_direccion" <?php echo $opcion_envio== 'Envio_a_tu_direccion'?  "checked" : 'disabled';?>>
                    <img src="http://localhost/imagenes/Enviodireccion.jpg" alt="envioCasa" width="100" height="100" style="border-radius: 0; border: 2px solid blue;">
                    
                    <input type="radio" name="tipo_envio" value="Recoger_en_tienda" <?php echo $opcion_envio== 'Recoger_en_tienda'?  "checked" : 'disabled'; ?>>
                    <img src="http://localhost/imagenes/recoger.jpg" alt="recoger_en_tienda" width="100" height="100" style="border-radius: 0; border: 2px solid blue;">
                
                    <input type="radio" name="tipo_envio" value="Entrega_Hoy" <?php echo $opcion_envio== 'Entrega_hoy'?  "checked" : 'disabled';?>>
                    <img src="http://localhost/imagenes/envioRapido.jpg" alt="Envio_hoy" width="100" height="100" style="border-radius: 0; border: 2px solid blue;"><br><br><br>
                    
                    <table style="border-collapse: collapse; border: 2px solid blue; border-radius: 5px;">
                        <tr>
                            <td style="padding: 16px; font-size: 21px; background-color:  #99a7e88f;">
                                Seleccione una sucursal
                            </td>
                            <td style="padding: 15px; background-color:  #99a7e88f;">
                                <select name="sucursal" style="border: 1px solid blue; border-radius: 5px; font-size: 18px; background-color: #99a7e88f;">
                                <option value="Bogota" <?php echo $sucursal == 'Bogota' ? 'selected' : 'disabled'; ?>>Bogotá</option>
                                <option value="Manizales" <?php echo $sucursal == 'Manizales' ? 'selected' : 'disabled'; ?>>Manizales</option>
                                <option value="Pereira" <?php echo $sucursal == 'Pereira' ? 'selected' : 'disabled'; ?>>Pereira</option>
                                <option value="Medellin" <?php echo $sucursal == 'Medellin' ? 'selected' : 'disabled'; ?>>Medellín</option>
                                <option value="Armenia" <?php echo $sucursal == 'Armenia' ? 'selected' : 'disabled'; ?>>Armenia</option>
                                </select>
                            </td>
                        </tr>
                    </table><br><br>
                    <table style="border-collapse: collapse; border: 2px solid blue; border-radius: 5px;">
                        <tr>
                            <td style="padding: 12px; font-size: 18px; background-color:  #99a7e88f;">
                                Seleccione método de pago
                            </td>
                            <td style="padding: 10px; background-color:  #99a7e88f;">
                                <select name="metodoPago" style="border: 1px solid blue; border-radius: 5px; font-size: 14px; background-color: #99a7e88f;">
                                <option value="Tarjeta credito" <?php echo $metodo_pago == 'Tarjeta credito' ? 'selected' : 'disabled'; ?>>Tarjeta crédito</option>
                                <option value="Tarjeta debito" <?php echo $metodo_pago == 'Tarjeta debito' ? 'selected' : 'disabled'; ?>>Tarjeta débito</option>
                                <option value="PayPal" <?php echo $metodo_pago == 'PayPal' ? 'selected' : 'disabled'; ?>>PayPal</option>
                                <option value="Pago en efectivo" <?php echo $metodo_pago == 'Pago en efectivo' ? 'selected' : 'disabled'; ?>>Pago en efectivo</option>
                                </select>
                            </td>
                        </tr>
                    </table><br><br><br>
                    <input type="submit" value="Guardar" style="padding: 7px; font-size: 20px;">
            </div>
        </form>    
    </body>
</html>