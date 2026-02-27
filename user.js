function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66YhBt9ZCX1":
        Script1();
        break;
      case "6C5izi3061t":
        Script2();
        break;
      case "6pWUdaob7gJ":
        Script3();
        break;
      case "6RgrVCFtrl7":
        Script4();
        break;
      case "5j4eLnpFweU":
        Script5();
        break;
      case "5ajIPFr6W7e":
        Script6();
        break;
      case "6kG5dnsW1V9":
        Script7();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6VXEgPlB6Fz');
const duration = 750;
const easing = 'ease-out';
const id = '6VirhgyG9lv';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('62wKK0Ei58B');
const duration = 750;
const easing = 'ease-out';
const id = '6ID1XtZzvXi';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6oHoSlEC3OF');
const duration = 750;
const easing = 'ease-out';
const id = '6kU7uJ6iAwU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6G9JgVPfwEW');
const duration = 750;
const easing = 'ease-out';
const id = '5uUM0sz3CjE';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5m5LFoIwNBs');
const duration = 750;
const easing = 'ease-out';
const id = '5va9o9WO15y';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('67G7UmcF0ZM');
const duration = 750;
const easing = 'ease-out';
const id = '6YLYKQGtxnD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6lbbBuIDzsy');
const duration = 750;
const easing = 'ease-out';
const id = '6qBAyHuZbWH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
