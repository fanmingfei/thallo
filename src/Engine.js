export GameObject from './base/GameObject';
export Canvas from './base/Canvas';
export Scene from './base/Scene';
export Camera from './base/Camera';
export types from './base/types';
export Component from './base/Component';
export components from './components/components';
export { keyCode } from './components/Input';
export Thallo from './base/Game';

export function createGameObject({
    name,
    transform = undefined,
    components = []
}) {
    return GameObject.bind({name,transform,components});
}

