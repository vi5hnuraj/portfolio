import Scene from "./Scene";

const CharacterModel = () => {
  // Rendered on every screen size. Phones get a smaller, bottom-anchored
  // framing (see responsive.css + the portrait zoom in Scene.tsx), and if
  // WebGL is unavailable Scene falls back without breaking the page.
  return <Scene />;
};

export default CharacterModel;
