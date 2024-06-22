const gavel = new URL('/channel_icons/gavel.jpg', import.meta.url).href;
const sc = new URL('/channel_icons/sc.jpg', import.meta.url).href;
const bnet = new URL('/channel_icons/bnet.jpg', import.meta.url).href;
const starx = new URL('/channel_icons/starx.jpg', import.meta.url).href;

const oneGreen = new URL('/latency_icons/one_green.png', import.meta.url).href;
const twoGreen = new URL('/latency_icons/two_green.png', import.meta.url).href;
const threeYellow = new URL('/latency_icons/three_yellow.png', import.meta.url).href;
const fourYellow = new URL('/latency_icons/four_yellow.png', import.meta.url).href;

export const iconsArr = [gavel, sc, bnet, starx];
export const latencyArr = [oneGreen, twoGreen, threeYellow, fourYellow];