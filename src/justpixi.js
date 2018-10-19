let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)
let app = new PIXI.Application({width: 800, height: 800});
document.body.appendChild(app.view);


