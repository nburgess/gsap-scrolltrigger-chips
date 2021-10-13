//floating veggies
console.clear();

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const veggies = gsap.utils.toArray('.float > img');
veggies.forEach(veg => {
  gsap.set(veg, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });

  moveX(veg, 1);
  moveY(veg, -1);
  rotate(veg, 1);
});

function rotate(target, direction) {
  
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// gsap.set('#green', {xPercent:-50});
gsap.set('#bag', {yPercent:+20});
let bag = document.querySelector('#bag');

var rotate = gsap.timeline({
  scrollTrigger:{
    trigger: "#wrap",
    pin: true,
    scrub:0.2,
    start: 'top top',
    end: () => `+=${bag.offsetHeight}`,
  }
})
.to('#bag', {
  rotation:180,
  duration:1, ease:'none',
})

gsap.set("#chips",{autoAlpha: 0, y: -20})
var appear = gsap.timeline({
    scrollTrigger:{
        trigger: "#wrap",
        start: "bottom " + `${bag.offsetHeight}`,
        end: "+=400",
        scrub: 0.2,
        toggleActions: 'play none none none',
        markers: true
    }
})
.to("#chips", {duration: 1, autoAlpha: 1, y: 10})

var appear = gsap.timeline({
    scrollTrigger:{
        trigger: "#light",
        start: "top top",
        end: "700 200",
        scrub: 0.2,
        toggleActions: 'play none none none',
    }
})
.to("#light", {duration: .5, autoAlpha: 0, y: 0})

