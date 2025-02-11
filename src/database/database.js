// import mysql from 'mysql2'
// import dotenv from 'dotenv'
// dotenv.config();

// const pool = mysql.createPool({
//     host: process.env.mysql_host,
//     user: process.env.mysql_user,
//     password: process.env.mysql_password,
//     database: process.env.mysql_database
// }).promise();

// async function getUsuarios(){
//     const [usuarios] = await pool.query("SELECT * from usuario");
//     console.log(usuarios);
//     return usuarios;
// }

// async function getUsuario(id){
//     const [usuario]= await pool.query(`
//     SELECT * from 
//     usuario 
//     where id = ?`, [id]);
//     if(usuario[id] != undefined) {
//     return usuario[0];
//     } else {
//         console.log("Usuario nao encontrado")
//         return 0;
//     }
// }



// const usuario = await getUsuario(1);
// console.log(usuario);
