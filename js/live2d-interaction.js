import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';

(async () => {
  const app = new PIXI.Application({
    backgroundAlpha: 0,
    resizeTo: window,
  });
  document.body.appendChild(app.view);

  const model = await Live2DModel.from('/live2d_models/hijiki/hijiki.model3.json');
  model.scale.set(0.2);
  model.position.set(window.innerWidth - 300, window.innerHeight - 500);
  app.stage.addChild(model);

  // 鼠标追踪逻辑
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    model.internalModel.motionManager.update = () => {
      model.internalModel.parameters.setValue('ParamAngleX', x * 30);
      model.internalModel.parameters.setValue('ParamAngleY', y * -30);
    };
  });
})();