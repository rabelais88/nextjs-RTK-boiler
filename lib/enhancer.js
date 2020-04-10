const enhancer = (component, enhancers = []) => {
  return enhancers.reduce((ac, cv) => cv(ac), component);
};

export default enhancer;
