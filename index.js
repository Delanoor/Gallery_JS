const PAINTING_WIDTH = 1200;

let c = document.createElement("canvas");
let img1 = new Image();
img1.src = "./gogh_wheat_cypresses.jpeg";
// img1.src = "./sieun.jpeg";

img1.onload = function () {
  // document.getElementById("painting").remove();

  w = img1.width;
  h = img1.height;

  c.width = w;
  c.height = h;
  ctx = c.getContext("2d");
  ctx.drawImage(img1, 0, 0);

  let pixelArr = ctx.getImageData(0, 0, w, h).data;
  // console.log(pixelArr);
  // 40 pixels
  let sample_size = 40;

  for (let y = 0; y < h; y += sample_size) {
    for (let x = 0; x < w; x += sample_size) {
      let p = (x + y * w) * 4;
      // console.log(p);
      ctx.beginPath();
      // ctx.fillStyle = "#fff";
      ctx.fillStyle = "#212121";
      // ctx.fillStyle =
      //   "rgba(" +
      //   pixelArr[p] +
      //   "," +
      //   pixelArr[p + 1] +
      //   "," +
      //   pixelArr[p + 2] +
      //   "," +
      //   pixelArr[p + 3] +
      //   ")";
      // ctx.fillRect(x, y, sample_size, sample_size);
      ctx.fillRect(
        x - sample_size / 2,
        y - sample_size / 2,
        sample_size,
        sample_size
      );

      ctx.beginPath();
      ctx.fillStyle =
        "rgba(" +
        pixelArr[p] +
        "," +
        pixelArr[p + 1] +
        "," +
        pixelArr[p + 2] +
        "," +
        pixelArr[p + 3] +
        ")";
      ctx.arc(x, y, sample_size / 3, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }
  let img2 = new Image();
  img2.id = "painting";
  img2.src = c.toDataURL();
  // img2.width = PAINTING_WIDTH;
  let htmlContainer = document.getElementById("paintingContainer");
  htmlContainer.appendChild(img2);
};
