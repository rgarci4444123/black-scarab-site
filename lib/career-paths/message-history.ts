// One FIFO read after a bounded subscriber history has received the supplied arrivals.
export function messageHistorySnapshot(arrivals:readonly number[],depth:number,readAt:number) {
  if(!Number.isInteger(depth)||depth<1)throw new Error('History depth must be a positive integer');
  const arrived=arrivals.filter(time=>time<=readAt);
  const retained=arrived.slice(-depth);
  const next=retained[0];
  return {retained,replaced:arrived.length-retained.length,next,age:next===undefined?undefined:readAt-next};
}
