<!DOCTYPE html>
<html>
<head>
    <title>Equipos</title>
    <?php 
        $cantidad_equipos = $_POST["Cantidad"];
        $equipo_elegido = $_POST["tipo_producto"];
    ?>

    <?php  echo "<h1>Equipo seleccionado: $equipo_elegido</h1>" ?>
    <script>
        function habilitarCantidad() {
            document.getElementById("Cantidad").disabled = false;
        }
    </script>
</head>
<body>
    <h1>Equipos</h1>
    <form action=" ">
        <div align="center">
            <button type="button"  onclick="habilitarCantidad()" style="background: transparent; border: none;" >
                <input type="radio" name="tipo_producto" value="celular" <?php echo $equipo_elegido == 'celular'?  "checked" : 'disabled';?>>
                <img src="https://img.global.news.samsung.com/cl/wp-content/uploads/2023/05/dl5_Galaxy-A54-5G_Awesome-Graphite_Front-e1683749755408.jpg" alt="Celular" width="100" height="100" style="border-radius: 50%; border: 2px solid blue;"><br>
                Celular
            </button>
            <button type="button"  onclick="habilitarCantidad()" style="background: transparent; border: none;">
                <input type="radio" name="tipo_producto" value="computador" <?php echo $equipo_elegido == 'computador'? "checked" : 'disabled' ;?>>
                <img src="https://electroferia.com/wp-content/uploads/2023/10/1-COMPUTADOR-HP-DQ-0500LA-CELERON.jpg" alt="Computador" width="100" height="100" style="border-radius: 50%; border: 2px solid blue;"><br>
                Computador
            </button>
            <button type="button" onclick="habilitarCantidad()" style="background: transparent; border: none;">
                <input type="radio" name="tipo_producto" value="televisor" <?php echo $equipo_elegido == 'televisor'? "checked" : 'disabled';?>>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxn8wpjTjy0ZsO1yy9-W0VgzJqFTyFoW81wt9z_yYr8g&s" alt="Televisor" width="100" height="100" style="border-radius: 50%; border: 2px solid blue;"><br>
                Televisor
            </button>
            <button type="button" onclick="habilitarCantidad()" style="background: transparent; border: none;">
                <input type="radio" name="tipo_producto" value="consola" <?php echo $equipo_elegido == 'consola'? "checked" : 'disabled';?>>
                <img src="https://www.gamecenter.com.mx/img/cms/reparacion.png" alt="Consola" width="100" height="100" style="border-radius: 50%; border: 2px solid blue;"><br>
                Consola
            </button>
        </div>
        
        <h1>Cantidad</h1>
        <h1>La cantidad es: <?php echo $cantidad_equipos; ?> </h1>
        <input type="number" name="Cantidad" min="0" disabled value= "<?php echo $cantidad_equipos; ?>"><br><br>

        
        <input type="submit" value="Guardar">
    </form>
</body>
</html>
