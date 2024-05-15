<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Registrarse</title>
        <?php 
            $nombre = $_POST["nombreCompleto"];
            $telefono = $_POST["telefono"];
            $email= $_POST["email"];
            $contraseña= $_POST["password"];
        ?>
    </head>
    <body>
        <div style="width: 300px; margin: 0 auto; padding: 20px; border: 1px solid blue; border-radius: 8px; text-align: center; background-color: #99a7e85e;">
            <div style="margin-bottom: 20px;">
                <h2>Registrarse</h2>
            </div>
            <form action="registro.php" method="post">
                <div style="margin-bottom: 10px;">
                    Nombre completo: <input type="text" name="nombreCompleto" style="width: 100%; border: 1px solid blue;"  value="<?php echo $nombre ?? ''; ?>" required>
                </div>
                <div>
                    Teléfono: <input type="tel" name="telefono" style="width: 100%; border: 1px solid blue;" value="<?php echo $telefono ?? ''; ?>" >
                </div>
                <div style="margin-bottom: 10px;">
                    E-mail: <input type="email" name="email" style="width: 100%; border: 1px solid blue;" value="<?php echo $email ?? ''; ?>" required>
                </div>
                <div style="margin-bottom: 10px;">
                    Contraseña: <input type="password" name="password" style="width: 100%; border: 1px solid blue;" value="<?php echo $contraseña ?? ''; ?>" required>
                </div>
                <div style="margin-bottom: 50px;" > 
                </div>
                <div style="text-align: center; ">
                    <button type="submit" style="width: 50%; font-size: 15px; border: 1px solid blue; background-color: #7c90eb5e;" >Guardar</button>
                    <div style="margin-top: 10px;">¿Ya tienes una cuenta? <a href="iniciarSesion.php">Iniciar sesión</a></div>
                </div>
            </form>
        </div>        
    </body>
</html>