// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED de autenticación
// ============================
process.env.SEED = 'este-es-el-seed-desarrollo';


// ============================
// google clint id
// ============================
process.env.CLIENT_ID = '203280646875-bsoq2n0atu72efonpnbjsi8m3ools8qb.apps.googleusercontent.com';