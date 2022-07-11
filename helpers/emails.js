import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "82578c622e0c60",
          pass: "6ca8c9641b58ec"
        }
    });

    // Información del Email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola: ${nombre} Comprueba tu cuenta</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        
        <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        
        `,
    })
}