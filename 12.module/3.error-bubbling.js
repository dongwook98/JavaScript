// Bubbling up, Propagating(μ ν) π§Ό
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('μ¬κΈ°μ  μ΄ μλ¬λ λͺ»μ‘λλ€..');
    throw error; // μλ¬λ₯Ό λ€μ λμ§
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('error Catched!');
}
console.log('done!!');

// μλ¬λ μ ν ,λ²λΈλ§ λλ―λ‘ λ΄κ° μλ¬λ₯Ό μ μ²λ¦¬ν  μ μλ κ³³, μ ν©ν κ³³μμ μλ¬λ₯Ό μ²λ¦¬ νλ©΄ λλ€.
