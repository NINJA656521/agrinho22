let player;
let cityX = 600; // posição da cidade
let fieldX = 0; // posição inicial do campo

function setup() {
  createCanvas(800, 400);
  player = createVector(50, height - 50);
}

function draw() {
  background(200, 255, 200); // cor do campo

  // Desenhar o campo
  fill(34, 139, 34);
  rect(0, height - 50, width, 50);

  // Desenhar a cidade
  fill(150);
  rect(cityX, height - 150, 100, 100);

  // Desenhar o personagem
  fill(255, 0, 0);
  ellipse(player.x, player.y, 30, 30);

  // Movimento do personagem
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 2;
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 2;
  }

  // Verificar se o personagem chegou na cidade
  if (player.x > cityX - 15 && player.x < cityX + 115) {
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("Você chegou na cidade!", width / 2, height / 2);
  }
}
